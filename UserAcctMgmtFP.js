const user = function(email, password, passwordConfirm) {
	this.email = email;
	this.password = password;
	this.passwordConfirm = passwordConfirm;
	return this;
}; //private

const signUp = function(obj) {
	console.log(`${obj.email} ||| ${obj.password} ||| ${obj.passwordConfirm}`);
};
const signIn = function(obj) {
	console.log("sign in happened");
};
const signOut = function(obj) {};
const changePassword = function changePassword(previous, next, obj) {};

module.exports = { user, signUp, signIn, signOut, changePassword };
