const container = document.querySelector('.container');
const loginLink = document.querySelector('.SignInLink');
const registerLink = document.querySelector('.SignUpLink');

// Event listener for Sign Up link (to switch to Register form)
registerLink.addEventListener('click', () => {
    container.classList.add('active'); // Add the 'active' class to switch to register mode
});

// Event listener for Sign In link (to switch back to Login form)
loginLink.addEventListener('click', () => {
    container.classList.remove('active'); // Remove the 'active' class to switch back to login mode
});
