//evento de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    //lógica de autenticación que necesites
    const validUsername = 'usuario';
    const validPassword = 'contraseña';
    
    if (username === validUsername && password === validPassword) {
        message.textContent = `Bienvenido, ${username}!`;
        message.style.color = 'green';
    } else {
        message.textContent = 'Usuario o contraseña incorrectos.';
        message.style.color = 'red';
    }
});

//mostrar contra button
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
});

