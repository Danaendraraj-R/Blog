function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const usersData = localStorage.getItem('usersData');
    if (usersData) {
        const users = JSON.parse(usersData);

        if (users[username] && users[username] === password) {
            localStorage.setItem('loggedInUser', username);
            document.getElementById('result').innerHTML = 'Login successful! Redirecting...';
        
            setTimeout(function () {
                window.location.href = 'User.html';
            }, 2000);
        } else {
            document.getElementById('result').innerHTML = 'Invalid username or password.';
        }
    } else {
        document.getElementById('result').innerHTML = 'No user data found.';
    }
}

