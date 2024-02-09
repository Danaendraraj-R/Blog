document.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('loggedInUser');

    if (username) {
        document.getElementById('usernameDisplay').textContent = username;
    } else {
    
        window.location.href = 'Login.html';
    }
});


function logout() {

    localStorage.removeItem('loggedInUser');
    window.location.href = 'Login.html';
}
