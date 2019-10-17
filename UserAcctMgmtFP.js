module.exports = {
	user: function(email, password, passwordConfirm) {
		this.email = email;
		this.password = password;
		this.passwordConfirm = passwordConfirm;
		return this;
	}, //private

	signUp: function(obj) {
		console.log(`${obj.email} ||| ${obj.password} ||| ${obj.passwordConfirm}`);
	}, //private
	signIn: function(obj) {
		console.log("sign in happened");
	},
	signOut: function(obj) {},
	changePassword: function changePassword(previous, next, obj) {}
};
