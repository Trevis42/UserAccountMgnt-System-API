const userDB = new Map();
const user = function(email, password, passwordConfirm) {
	this.email = email;
	this.password = password;
	this.passwordConfirm = passwordConfirm;
	this.isAuthenticated = false;
	this.isSignedIn = false;
	this.isVerified = false;
	return this;
};

const signUp = function(obj) {
	function saveInfo() {
		userDB.set(obj.email, obj);
	}
	if (typeof userDB.get(obj.email) === "undefined") {
		if (obj.password === obj.passwordConfirm) {
			console.log("Congrats, You have signed up!!! YAY!!!!");
			obj.isVerified = true;
			saveInfo();
		}
		//message for mismatch password
		else {
			console.log("Passwords don't match, make sure they match then try again.");
		}
	} else {
		console.log("Sorry, You don't need to sign up AGAIN... :)");
	}
};
const signIn = function(obj) {
	function authenticate() {
		if (typeof userDB.get(obj.email).password === "undefined") {
			console.log(`Cannot find password, please try again.`);
		} else if (userDB.get(obj.email).password === obj.password && obj.isVerified) {
			console.log("you have been authenticated");
			obj.isAuthenticated = true;
		} else {
			obj.isAuthenticated = false;
			console.log(`Authentication error, User does not exist! Authentication:  
			${obj.isAuthenticated}`);
		}
	}

	if (typeof userDB.get(obj.email) != "undefined" && !obj.isSignedIn) {
		authenticate();
		obj.isSignedIn = true;
		console.log(`You have signed in! ${obj.isSignedIn}`);
	} else if (obj.isSignedIn) {
		console.log(`You are already signed in.!${obj.isSignedIn}`);
	} else {
		console.log("Cannot find account, please sign up first");
		obj.isSignedIn = false;
	}
};
const signOut = function(obj) {
	if (obj.isSignedIn) {
		obj.isSignedIn = false;
		obj.isAuthenticated = false;
		console.log("You have been signed out. :)");
	} else {
		console.log("You have already signed out.");
	}
};
const changePassword = function changePassword(previous, next, obj) {
	if (obj.isSignedIn) {
		if (next === previous) {
			console.log(
				`New password: ${next} is the same as current password: ${previous} \nYou cant reuse the same password.`
			);
		} else if (userDB.get(obj.email).password === previous) {
			obj.password = next;
			obj.passwordConfirm = obj.password;
			console.log(`Your password has been changed to: ${next}`);
		} else {
			console.log(`The password: ${previous} does match your current password, please try again.`);
		}
	} else {
		console.log("You need to sign before changing your password.");
	}
};

module.exports = { user, signUp, signIn, signOut, changePassword };
