function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const usersData = localStorage.getItem('usersData') || '{}';
    const users = JSON.parse(usersData);

    if (users[username]) {
        document.getElementById('result').innerHTML = 'Username already exists.';
    } else {
        users[username] = password;
        localStorage.setItem('usersData', JSON.stringify(users));
        document.getElementById('result').innerHTML = 'Registration successful!';
    }
}
