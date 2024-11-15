const API_URL = 'https://randomuser.me/api';

const fetchRandomUser = () => {
    return fetch(API_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch user data: ' + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            const user = data.results[0];
            return {
                picture: user.picture.large,
                name: `${user.name.first} ${user.name.last}`,
                city: user.location.city,
                postcode: user.location.postcode,
                phone: user.phone,
            };
        });
}

const handleError = (e) => {
    console.error(e);
    alert("Failed to fetch user data. Please try again later.");
}

const createUserCard = (user) => {
    const userCard = document.createElement('div');
    userCard.className = "user-card";
    userCard.innerHTML = `
        <img src='${user.picture}' alt='User Picture' width='100' height='100'>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>City:</strong> ${user.city}</p>
        <p><strong>Postcode:</strong> ${user.postcode}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
    `;

    return userCard;
}

document.addEventListener("DOMContentLoaded", () => {
    const fetchUserButton = document.getElementById("fetchUserButton");
    const usersContainer = document.getElementById("usersContainer");

    fetchUserButton.addEventListener("click", () => {
        fetchRandomUser()
            .then((user) => {
                const userCard = createUserCard(user);
                usersContainer.appendChild(userCard);

                userCard.style.transform = "translateY(-20px)";
                userCard.style.opacity = "0";
                setTimeout(() => {
                    userCard.style.transform = "translateY(0)";
                    userCard.style.opacity = "1";
                }, 50);
            })
            .catch(handleError);
    });
});