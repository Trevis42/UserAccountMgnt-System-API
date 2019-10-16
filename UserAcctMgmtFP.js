const UserAcctMgmt = (function() {
	const user = {};

	const email = "";
	const password = "";
	const passwordConfirm = "";

	user.signUp = function() {
		console.log(`${email} ||| ${password} ||| ${passwordConfirm}`);
	}; //private
	function signIn(user) {}
	function signOut(user) {}
	function changePassword(user) {}
})();

UserAcctMgmt.user("EmaiL", "PswD", "PswD");
