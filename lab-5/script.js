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

const validationPatterns = {
    fullName: /^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/,
    idCard: /^[а-яіїєґА-ЯІЇЄҐ]{2}\s№\d{6}$/,
    faculty: /^[а-яіїєґА-ЯІЇЄҐ]{2,9}$/,
    birthdate: /.+/,
    address: /^м\.\s[А-ЯІЇЄҐ][а-яіїєґ]+$/
};

document.addEventListener('DOMContentLoaded', () => {
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

    new FormValidator(submissionForm, formValidationData);
});