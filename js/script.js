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