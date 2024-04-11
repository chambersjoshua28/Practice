
var loggedIn = false;

while(!loggedIn) {

    let username = prompt('Username:');
    let password = prompt('Password'); 

if (username == 'Josh' && password == '123') {
    alert('Welcome Back,' + username);
    loggedIn = true;  
}else {
    alert('Incorrect username or password'); 
}

}