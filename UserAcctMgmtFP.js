const UserAcctMgmt = (function() {
	const user = {
		email: "email",
		password: "password",
		passwordConfirm: "passwordConfirm"
	};

	const signUp = function() {
		console.log(`${user.email} ||| ${user.password} ||| ${user.passwordConfirm}`);
	}; //private
	function signIn() {
		console.log("sign in happened");
	}
	function signOut(user) {}
	function changePassword(user) {}

	console.log(signUp());
	console.log(signIn());

	return user;
})();
UserAcctMgmt.user;
//console.log(UserAcctMgmt);
