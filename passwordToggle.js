// passwordToggle.js
document.addEventListener("DOMContentLoaded", function () {
    const togglePasswordBtn = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    if (togglePasswordBtn) {
        console.log('Password toggle button found');
        togglePasswordBtn.addEventListener('click', function () {
            const type = passwordField.type === 'password' ? 'text' : 'password';
            passwordField.type = type;
            console.log(`Password type toggled to: ${type}`);
        });
    } else {
        console.log('Password toggle button not found');
    }
});