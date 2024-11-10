document.addEventListener('DOMContentLoaded', () => {
    let fifthElementClickCount = 0;
    let sixthElementClickCount = 0;
    let scaleFactor = 1;
    const colorClasses = ['color-red', 'color-blue', 'color-orange', 'color-green', 'standart-color'];

    const fifthElement = document.getElementById("fifth");
    const sixthElement = document.querySelector("#sixth");
    const addImageButton = document.getElementById('addImage');
    const scaleUpButton = document.getElementById('scaleUp');
    const scaleDownButton = document.getElementById('scaleDown');
    const deleteImageButton = document.getElementById('deleteImage');

    addImageButton.addEventListener('click', () => addImage());
    scaleUpButton.addEventListener('click', () => scaleImage('up'));
    scaleDownButton.addEventListener('click', () => scaleImage('down'));
    deleteImageButton.addEventListener('click', () => deleteImage());

    fifthElement.addEventListener('click', () => {
        fifthElementClickCount++;
        cycleColors(fifthElement, fifthElementClickCount);
    });

    sixthElement.addEventListener('click', () => {
        sixthElementClickCount++;
        cycleColors(sixthElement, sixthElementClickCount);
    });

    const cycleColors = (element, clickCounter) => {
        element.classList.remove(...colorClasses);
        const nextClassIndex = clickCounter % colorClasses.length;
        element.classList.add(colorClasses[nextClassIndex]);
    }

    const addImage = () => {
        const existingImage = document.getElementById('mainImage');

        if (existingImage) {
            return;
        }

        const imageAnchor = document.getElementById('imageAnchor');
        const newImage = document.createElement('img');
        newImage.id = 'mainImage';
        newImage.src = 'http://www.bestkievguide.com/wp-content/uploads/2016/02/kievcity.jpeg';
        newImage.alt = 'Photo of Kyiv';
        newImage.width = 700;
        imageAnchor.appendChild(newImage);
    }

    const scaleImage = (direction) => {
        const image = document.getElementById('mainImage');

        if (!image) {
            return;
        }

        if (direction === 'up') {
            scaleFactor += 0.1;
        } else if (direction === 'down' && scaleFactor > 0.1) {
            scaleFactor -= 0.1;
        }

        image.style.transform = `scale(${scaleFactor})`;
    }


    const deleteImage = () => {
        const image = document.getElementById('mainImage');

        if (image) {
            image.remove();
        }
    }
})