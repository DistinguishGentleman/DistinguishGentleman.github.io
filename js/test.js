// document.addEventListener('DOMContentLoaded', function() {
    // Находим элементы формы входа
    const loginInput = document.getElementById('login'); // Используем ID
    const loginErrorDiv = loginInput ? loginInput.parentElement.querySelector('.error') : null; // Находим соответствующий div для ошибки
    const authForm = document.querySelector('.auth-form'); // Находим форму

    // Находим элементы формы регистрации (если нужно валидировать и их)
    const regLoginInput = document.getElementById('reg-login');
    const regLoginErrorDiv = regLoginInput ? regLoginInput.parentElement.querySelector('.error') : null;

    // Функция валидации одного поля
    function validateField(inputElement, errorDiv, value) {
        if (!value) {
            showError(errorDiv, 'Это поле обязательно');
            inputElement.classList.add('invalid'); // Предполагаем, что у вас есть CSS для .invalid
            return false;
        }

        if (inputElement.id === 'login' || inputElement.id === 'reg-login') {
            // Пример валидации логина: 3-20 символов, только буквы, цифры, подчеркивание
            const loginRegex = /^[a-zA-Z0-9_]{3,20}$/;
            if (!loginRegex.test(value)) {
                showError(errorDiv, 'Логин должен быть от 3 до 20 символов, только буквы, цифры и _');
                inputElement.classList.add('invalid');
                return false;
            }
        }

        if (inputElement.id === 'password' || inputElement.id === 'reg-password' || inputElement.id === 'reg-password-repeat') {
            // Пример валидации пароля: минимум 6 символов
            if (value.length < 6) {
                showError(errorDiv, 'Пароль должен быть не менее 6 символов');
                inputElement.classList.add('invalid');
                return false;
            }
        }

        // Валидация подтверждения пароля
        if (inputElement.id === 'reg-password-repeat') {
             const passwordField = document.getElementById('reg-password');
             if (value !== passwordField.value) {
                 showError(errorDiv, 'Пароли не совпадают');
                 inputElement.classList.add('invalid');
                 return false;
             }
        }

        // Если все проверки пройдены
        clearError(errorDiv, inputElement);
        return true;
    }

    // Функция отображения ошибки
    function showError(errorDiv, message) {
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.style.color = 'red'; // Или задайте стиль через CSS
            errorDiv.style.display = 'block'; // Убедитесь, что div видим
        }
    }

    // Функция очистки ошибки
    function clearError(errorDiv, inputElement) {
        if (errorDiv) {
            errorDiv.textContent = '';
            errorDiv.style.display = 'none'; // Скрываем div с ошибкой
        }
        if (inputElement) {
            inputElement.classList.remove('invalid');
        }
    }

    // Валидация при потере фокуса (blur) для полей входа
    if (loginInput) {
        loginInput.addEventListener('blur', function() {
            validateField(loginInput, loginErrorDiv, loginInput.value.trim());
        });

        // Очистка ошибки при фокусе
        loginInput.addEventListener('focus', function() {
            clearError(loginErrorDiv, loginInput);
        });
    }

    // Валидация при потере фокуса (blur) для полей регистрации
    if (regLoginInput) {
        regLoginInput.addEventListener('blur', function() {
            validateField(regLoginInput, regLoginErrorDiv, regLoginInput.value.trim());
        });

        regLoginInput.addEventListener('focus', function() {
            clearError(regLoginErrorDiv, regLoginInput);
        });
    }

    // Добавляем валидацию для паролей в регистрации
    const regPasswordField = document.getElementById('reg-password');
    const regPasswordRepeatField = document.getElementById('reg-password-repeat');
    const regPasswordErrorDiv = regPasswordField ? regPasswordField.parentElement.querySelector('.error') : null;
    const regPasswordRepeatErrorDiv = regPasswordRepeatField ? regPasswordRepeatField.parentElement.querySelector('.error') : null;

    if (regPasswordField) {
        regPasswordField.addEventListener('blur', function() {
            validateField(regPasswordField, regPasswordErrorDiv, regPasswordField.value);
            // Повторно проверяем подтверждение пароля, если оно уже было введено
            if (regPasswordRepeatField && regPasswordRepeatField.value) {
                 validateField(regPasswordRepeatField, regPasswordRepeatErrorDiv, regPasswordRepeatField.value);
            }
        });
        regPasswordField.addEventListener('focus', function() {
            clearError(regPasswordErrorDiv, regPasswordField);
        });
    }

    if (regPasswordRepeatField) {
        regPasswordRepeatField.addEventListener('blur', function() {
            validateField(regPasswordRepeatField, regPasswordRepeatErrorDiv, regPasswordRepeatField.value);
        });
        regPasswordRepeatField.addEventListener('focus', function() {
            clearError(regPasswordRepeatErrorDiv, regPasswordRepeatField);
        });
    }

    // Валидация при отправке формы входа
    if (authForm) {
        authForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем стандартную отправку формы

            const loginValue = loginInput.value.trim();
            const passwordValue = document.getElementById('password').value;

            let isFormValid = true;

            // Проверяем логин
            if (!validateField(loginInput, loginErrorDiv, loginValue)) {
                isFormValid = false;
            }

            // Проверяем пароль
            const passwordErrorDiv = document.getElementById('password').parentElement.querySelector('.error');
            if (!validateField(document.getElementById('password'), passwordErrorDiv, passwordValue)) {
                isFormValid = false;
            }

            // Если форма валидна, можно выполнить действия (например, AJAX запрос)
            if (isFormValid) {
                console.log("Форма входа валидна! Логин:", loginValue);
                // alert(`Добро пожаловать, ${loginValue}!`); // Пример действия
                // Здесь можно выполнить отправку данных на сервер
                this.submit(); // Если нужно выполнить стандартную отправку после JS валидации
            }
        });
    }

    // Валидация для формы регистрации (аналогично)
    const regForm = document.querySelector('#registrationOverlay .auth-form');
    if (regForm) {
        regForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const regLoginValue = regLoginInput.value.trim();
            const regPasswordValue = document.getElementById('reg-password').value;
            const regPasswordRepeatValue = document.getElementById('reg-password-repeat').value;

            let isRegFormValid = true;

            if (!validateField(regLoginInput, regLoginErrorDiv, regLoginValue)) {
                isRegFormValid = false;
            }
            if (!validateField(document.getElementById('reg-password'), regPasswordErrorDiv, regPasswordValue)) {
                isRegFormValid = false;
            }
            if (!validateField(document.getElementById('reg-password-repeat'), regPasswordRepeatErrorDiv, regPasswordRepeatValue)) {
                isRegFormValid = false;
            }

            if (isRegFormValid) {
                console.log("Форма регистрации валидна!");
                // alert("Регистрация успешна!"); // Пример действия
                // this.submit(); // Отправить форму
            }
        });
    }
// });