let users = [];


class User {
    constructor(firstName, lastName, email ) {
        this.firstName = firstName;
        this.email = email;
        this.lastName = lastName;
    }

}

function addUser() {
    let firstName = document.getElementById("username").value;
    let lastName = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;

    users.push(new User(firstName,lastName,email));


}


function removeUser() {
    const gmail = document.getElementById("removeByGmail").value;

    for (let i = 0; i < users.length; i++) {
        if (gmail === users[i].email) {
            users.splice(i, 1);

            document.getElementById("usernameRead").textContent = "";
            document.getElementById("lastnameRead").textContent = "";
            document.getElementById("gmailRead").textContent = "";

            break;
        }
    }
}


function readUser() {
    const gmail = document.getElementById("gmailReadlabel").value;

    for (let i = 0; i < users.length; i++) {
        if (gmail === users[i].email) {
            document.getElementById("usernameRead").textContent = users[i].firstName;
            document.getElementById("lastnameRead").textContent = users[i].lastName;
            document.getElementById("gmailRead").textContent = users[i].email;
        }
    }
}