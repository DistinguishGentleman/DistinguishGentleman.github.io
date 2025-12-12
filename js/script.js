function openAuthOverlay() {
    document.getElementById('authOverlay').style.display = 'flex';
    document.getElementById('registrationOverlay').style.display = 'none';
}

function closeAuthOverlay() {
    document.getElementById('authOverlay').style.display = 'none';
}

function openRegistrationOverlay() {
    document.getElementById('registrationOverlay').style.display = 'flex';
    document.getElementById('authOverlay').style.display = 'none';
}

function closeRegistrationOverlay() {
    document.getElementById('registrationOverlay').style.display = 'none';
}

function closeAllOverlays() {
    closeAuthOverlay();
    closeRegistrationOverlay();
}

function switchToRegistration() {
    closeAuthOverlay();
    openRegistrationOverlay();
}

function switchToAuth() {
    closeRegistrationOverlay();
    openAuthOverlay();
}

function openRecordOverlay() {
    document.getElementById('recordOverlay').style.display = 'flex';
    document.getElementById('authOverlay').style.display = 'none';
    document.getElementById('registrationOverlay').style.display = 'none';
}

function closeRecordOverlay() {
    document.getElementById('recordOverlay').style.display = 'none';
}


// function openMenuOverlay() {
//     document.getElementById('menuOverlay').style.display = 'flex';
//     document.getElementById('recordOverlay').style.display = 'none';
//     document.getElementById('authOverlay').style.display = 'none';
//     document.getElementById('registrationOverlay').style.display = 'none';
// }

// function closeMenuOverlay() {
//     document.getElementById('menuOverlay').style.display = 'none';
// }


// const input = document.querySelector('.input');
// const error = document.querySelector('.error');
// const button = document.querySelector('.submit');

// function validateAndSubmit() {
//     const name = input.value.trim();
//     error.textContent = '';
    
//     if (!name) {
//         error.textContent = 'Введите имя';
//         input.classList.add('invalid');
//         return;
//     }
    
//     if (name.length < 2 || name.length > 30) {
//         error.textContent = 'Имя должно быть от 2 до 30 символов';
//         input.classList.add('invalid');
//         return;
//     }


//     alert(`Добро пожаловать, ${name}!`);
//     input.value = '';
// }

// button.addEventListener('click', validateAndSubmit);































































// закрытие про нажатии вне оверлея

document.addEventListener('DOMContentLoaded', function() {
    const overlays = ['authOverlay', 'registrationOverlay', 'recordOverlay', 'menuOverlay'];
    
    overlays.forEach(overlayId => {
        const overlay = document.getElementById(overlayId);
        if (overlay) {
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                    if (overlayId === 'authOverlay') closeAuthOverlay();
                    if (overlayId === 'registrationOverlay') closeRegistrationOverlay();
                    if (overlayId === 'recordOverlay') closeRecordOverlay();
                    if (overlayId === 'menuOverlay') closeMenuOverlay();
                }
            });
        }
    });
});