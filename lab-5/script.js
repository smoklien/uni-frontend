const validationPatterns = {
    fullName: /^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/,
    idCard: /^ІН\s№\d{6}$/,
    faculty: /^[А-ЯІЇЄҐ]{3,5}$/,
    birthdate: /.+/,
    address: /^м\.\s[А-ЯІЇЄҐ][а-яіїєґ]+$/
};

const isFieldValid = (field, pattern) => pattern.test(field.value.trim());

const showError = (field, errorElement) => {
    field.classList.add('error');
    errorElement.style.display = 'block';
};

const hideError = (field, errorElement) => {
    field.classList.remove('error');
    errorElement.style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
    const submissionForm = document.getElementById('submissionForm');
    const formValidationData = [
        {
            fieldInput: document.getElementById('fullName'),
            pattern: validationPatterns.fullName,
            errorElement: document.getElementById('fullNameError')
        },
        {
            fieldInput: document.getElementById('idCard'),
            pattern: validationPatterns.idCard,
            errorElement: document.getElementById('idCardError')
        },
        {
            fieldInput: document.getElementById('faculty'),
            pattern: validationPatterns.faculty,
            errorElement: document.getElementById('facultyError')
        },
        {
            fieldInput: document.getElementById('birthdate'),
            pattern: validationPatterns.birthdate,
            errorElement: document.getElementById('birthdateError')
        },
        {
            fieldInput: document.getElementById('address'),
            pattern: validationPatterns.address,
            errorElement: document.getElementById('addressError')
        }
    ];


    submissionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        formValidationData.forEach(({ fieldInput, pattern, errorElement }) => {
            if (isFieldValid(fieldInput, pattern)) {
                hideError(fieldInput, errorElement);
            }
            else {
                showError(fieldInput, errorElement);
                isValid = false;
            }
        });

        if (isValid) {
            const formData = formValidationData.map(({ fieldInput }) => `${fieldInput.name}: ${fieldInput.value.trim()}`).join('\n');

            alert(`Submitted Information:\n ${formData}`);
        }
    })

});


//     if (!nameRegex.test(fullName.value)) {
//         fullName.classList.add('error');
//         document.getElementById('nameError').style.display = 'block';
//         isValid = false;
//     } else {
//         fullName.classList.remove('error');
//         document.getElementById('nameError').style.display = 'none';
//     }

//     // ID Card validation
//     if (!idCardRegex.test(idCard.value)) {
//         idCard.classList.add('error');
//         document.getElementById('idCardError').style.display = 'block';
//         isValid = false;
//     } else {
//         idCard.classList.remove('error');
//         document.getElementById('idCardError').style.display = 'none';
//     }

//     // Faculty validation
//     if (!facultyRegex.test(faculty.value)) {
//         faculty.classList.add('error');
//         document.getElementById('facultyError').style.display = 'block';
//         isValid = false;
//     } else {
//         faculty.classList.remove('error');
//         document.getElementById('facultyError').style.display = 'none';
//     }

//     // Birthdate validation
//     if (!birthdate.value) {
//         birthdate.classList.add('error');
//         document.getElementById('birthdateError').style.display = 'block';
//         isValid = false;
//     } else {
//         birthdate.classList.remove('error');
//         document.getElementById('birthdateError').style.display = 'none';
//     }

//     // Address validation
//     if (!addressRegex.test(address.value)) {
//         address.classList.add('error');
//         document.getElementById('addressError').style.display = 'block';
//         isValid = false;
//     } else {
//         address.classList.remove('error');
//         document.getElementById('addressError').style.display = 'none';
//     }


//     // Display information if the form is valid
//     if (isValid) {
//         const formData = `
//             Full Name: ${fullName.value}\n
//             ID Card: ${idCard.value}\n
//             Faculty: ${faculty.value}\n
//             Birthdate: ${birthdate.value}\n
//             Address: ${address.value}
//         `;
//         window.alert('Submitted Information:\n' + formData);
//     }
// }