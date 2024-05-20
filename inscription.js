document.getElementById("inscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username");
    
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // Regex pour le nom d'utilisateur (min 3 caractères, pas d'espaces)
    const usernameRegex = /^[a-zA-Z0-9]{3,}$/;

    // Regex pour le mot de passe (min 8 caractères, au moins une lettre et un chiffre)
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    let isValid = true;

    if (!usernameRegex.test(username.value)) {
        usernameError.innerText = "Le nom d'utilisateur doit contenir au moins une majuscule";
        usernameError.style.display = "block";
        isValid = false;
    } else {
        usernameError.style.display = "none";
    }


    if (!passwordRegex.test(password.value)) {
        passwordError.innerText = "Le mot de passe doit contenir au moins 8 caractères, une lettre et un chiffre.";
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.innerText = "Les mots de passe ne correspondent pas.";
        confirmPasswordError.style.display = "block";
        isValid = false;
    } else {
        confirmPasswordError.style.display = "none";
    }

    if (isValid) {
        // Traitement de l'inscription (par exemple, envoi des données à un serveur)
        alert("Inscription réussie !");
        window.location.href = "index.html";
    }
});