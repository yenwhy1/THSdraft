document.addEventListener("DOMContentLoaded", function() {

    // Get the password toggle button and password input field
    const togglePasswordBtn = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    // Check if the toggle button exists in the DOM
    if (togglePasswordBtn) {
        console.log('Password toggle button found');  // Debugging line
        // Add the click event listener to the button
        togglePasswordBtn.addEventListener('click', function () {
            const type = passwordField.type === 'password' ? 'text' : 'password';
            passwordField.type = type;
            console.log(`Password type toggled to: ${type}`);  // Debugging line
        });
    } else {
        console.log('Password toggle button not found'); // Debugging line to check if the button is missing
    }

    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    // Toggle the mobile menu when the button is clicked
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents the document click listener from firing
        menu.classList.toggle('show');
    });

    // Close the menu when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInsideMenu = menu.contains(e.target);
        const isClickOnButton = btn.contains(e.target);

        // Close the menu if the click is outside of the menu and button
        if (!isClickInsideMenu && !isClickOnButton) {
            menu.classList.remove('show');
        }
    });
  }
);