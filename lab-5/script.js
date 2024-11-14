class FormValidator {
    constructor(form, validationData) {
        this.form = form;
        this.validationData = validationData;

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(event) {
        event.preventDefault();

        const isFormValid = this.validateForm();

        if (isFormValid) {
            this.displayFormData();
        }
    }

    validateForm() {
        let isValid = true;

        this.validationData.forEach(({ field, pattern, errorElement }) => {
            if (this.isFieldValid(field, pattern)) {
                this.hideError(field, errorElement);
            } else {
                this.showError(field, errorElement);
                isValid = false;
            }
        });

        return isValid;
    }

    isFieldValid(field, pattern) {
        return pattern.test(field.value.trim())
    }

    showError(field, errorElement) {
        field.classList.add('error');
        errorElement.style.display = 'block';
    }

    hideError(field, errorElement) {
        field.classList.remove('error');
        errorElement.style.display = 'none';
    };

    displayFormData() {
        const formData = this.validationData
            .map(({ field }) => `${field.name}: ${field.value.trim()}`)
            .join('\n');
        alert(`Submitted Information:\n ${formData}`);
    }
}


class InteractiveNumberTable {
    constructor(table, colorPicker) {
        this.table = table;
        this.colorPicker = colorPicker;
        this.size = 6;
        this.targerCellNumber = 4;
        this.initTable();
    }

    initTable() {
        let number = 1;

        for (let i = 0; i < this.size; i++) {
            const row = this.table.insertRow();
            for (let j = 0; j < this.size; j++) {
                const cell = row.insertCell();
                cell.textContent = number;
                cell.dataset.number = number;

                if (number === this.targerCellNumber) {
                    this.addTargetCellEvents(cell);
                }

                number++;
            }
        }
    }

    addTargetCellEvents(cell) {
        cell.addEventListener('mouseover', () => this.changeToRandomColor(cell));
        cell.addEventListener('click', () => this.changeToPickedColor(cell));
        cell.addEventListener('dblclick', () => this.changeDiagonalColors(cell));
    }

    changeToRandomColor(cell) {
        cell.style.backgroundColor = this.getRandomColor();
    }

    changeToPickedColor(cell) {
        cell.style.backgroundColor = this.colorPicker.value;
    }

    changeDiagonalColors(centerCell) {
        const color = this.getRandomColor();
        const centerNumber = parseInt(centerCell.dataset.number);

        this.getAllCells().forEach(cell => {
            if (this.isSideDiagonal(centerNumber, parseInt(cell.dataset.number))) {
                cell.style.backgroundColor = color;
            }
        });
    }

    isSideDiagonal(center, cellNumber) {
        const centerRow = Math.floor((center - 1) / this.size);
        const centerCol = (center - 1) % this.size;

        const cellRow = Math.floor((cellNumber - 1) / this.size);
        const cellCol = (cellNumber - 1) % this.size;

        return (centerRow - centerCol === cellRow - cellCol) ||
            (centerRow + centerCol === cellRow + cellCol);
    }

    getAllCells() {
        return Array.from(this.table.getElementsByTagName('td'));
    }

    /**
     * Generates a random hexadecimal color code.
     *
     * @returns {string} A random hexadecimal color code, e.g., '#FF00FF'.
     */
    getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }
}

const validationPatterns = {
    fullName: /^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/,
    idCard: /^[а-яіїєґА-ЯІЇЄҐ]{2}\s№\d{6}$/,
    faculty: /^[а-яіїєґА-ЯІЇЄҐ]{2,9}$/,
    birthdate: /.+/,
    address: /^м\.\s[А-ЯІЇЄҐ][а-яіїєґ]+$/
};

document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById("numberTable");
    const colorPicker = document.getElementById("colorPicker");

    const submissionForm = document.getElementById('submissionForm');
    const formValidationData = [
        {
            field: document.getElementById('fullName'),
            pattern: validationPatterns.fullName,
            errorElement: document.getElementById('fullNameError')
        },
        {
            field: document.getElementById('idCard'),
            pattern: validationPatterns.idCard,
            errorElement: document.getElementById('idCardError')
        },
        {
            field: document.getElementById('faculty'),
            pattern: validationPatterns.faculty,
            errorElement: document.getElementById('facultyError')
        },
        {
            field: document.getElementById('birthdate'),
            pattern: validationPatterns.birthdate,
            errorElement: document.getElementById('birthdateError')
        },
        {
            field: document.getElementById('address'),
            pattern: validationPatterns.address,
            errorElement: document.getElementById('addressError')
        }
    ];

    new InteractiveNumberTable(table, colorPicker);
    new FormValidator(submissionForm, formValidationData);
});
