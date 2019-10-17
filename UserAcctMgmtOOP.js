const userDB = new Map();
class User {
	constructor(email, password, passwordConfirm) {
		this.email = email;
		this.password = password;
		this.passwordConfirm = passwordConfirm;
		this.isAuthenticated = false;
		this.isSignedIn = false;
		this.isVerified = false;
	}

	saveInfo() {
		userDB.set(this.email, this);
		return this;
	}
	//I can use this to grab email without calling the variable directly (data safety)
	getEmail() {
		return this.email;
	}
	//I use this to grab password without calling the variable directly (data safety)
	getPassword() {
		return this.password;
	} //don't really need this but using a few times for a few things

	authenticate() {
		if (typeof userDB.get(this.email).getPassword() === "undefined") {
			console.log(`Cannot find password, please try again.`);
		} else if (userDB.get(this.email).getPassword() === this.password && this.isVerified) {
			console.log("you have been authenticated");
			this.isAuthenticated = true;
		} else {
			this.isAuthenticated = false;
			console.log(`Authentication error, User does not exist! Authentication:  
			${this.isAuthenticated}`);
		}
		return this;
	}

	signUp() {
		if (typeof userDB.get(this.email) === "undefined") {
			if (this.getPassword() === this.passwordConfirm) {
				console.log("Congrats, You have signed up!!! YAY!!!!");
				this.isVerified = true;
				this.saveInfo();
			}
			//message for mismatch password
			else {
				console.log("Passwords don't match, make sure they match then try again.");
			}
		} else {
			console.log("Sorry, You don't need to sign up AGAIN... :)");
		}
		return this;
	}

	signIn() {
		if (typeof userDB.get(this.email) != "undefined" && !this.isSignedIn) {
			this.authenticate();
			this.isSignedIn = true;
			console.log(`You have signed in! ${this.isSignedIn}`);
		} else if (this.isSignedIn) {
			console.log(`You are already signed in.!${this.isSignedIn}`);
		} else {
			console.log("Cannot find account, please sign up first");
			this.isSignedIn = false;
		}
		return this;
	} //if user auth === true (check for email and password);

	signOut() {
		if (this.isSignedIn) {
			this.isSignedIn = false;
			this.isAuthenticated = false;
			console.log("You have been signed out. :)");
		} else {
			console.log("You have already signed out.");
		}

		return this;
	}

	changePassword(previous, next) {
		if (this.isSignedIn) {
			if (next === previous) {
				console.log(
					`New password: ${next} is the same as current password: ${previous} \nYou cant reuse the same password.`
				);
			} else if (userDB.get(this.email).getPassword() === previous) {
				this.password = next;
				this.passwordConfirm = this.password;
				console.log(`Your password has been changed to: ${next}`);
			} else {
				console.log(`The password: ${previous} does match your current password, please try again.`);
			}
		} else {
			console.log("You need to sign before changing your password.");
		}
		return this;
	}
}

const user = new User("email", "password", "password");
user.signIn();

//console.log(userDB);

user.signUp()
	.signIn()
	.signOut()
	.signOut();
//user.signIn();
user.changePassword("password", "blah");
//console.log(userDB);
user.changePassword("rawr", "purple");
user.changePassword("blah", "blah");

console.log(userDB);
