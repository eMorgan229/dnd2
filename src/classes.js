import userEvent from "@testing-library/user-event"

const UserObject = {
    firstName: 'Michael',
    lastName: "Law",
    signup: function() {
        console.log(this.firstName, 'signed up')
    }
} 

class User {
    //this contructor functions tells you what enay given instance of a user consists of
    //constructor function is called automatically any time you say "new" in JS
    constructor(name, email, password) {
        this.name = name
        this.email = email
        this.passwod = password
    }
    //attach functions to the class itself
    signup() {
        console.log(this.name, 'signed up!')
    }
}
//inheretence with "extends"
//equivalent of AdminUser < User
//User is the super class: "super" is saying it's going to run that constructor on the right and attach any functions to the right (i think)
class AdminUser extends User() {
    constructor(name, email, password) {
        super(name, email, password)
        this.admin = true
    }
}

//this = an instance of user 
//a user is a data structure that has these attributes: name, email, password

let user = new User('Michael', 'michael@gmail.com', '1111')
user.signup()

console.log(UserObject) 