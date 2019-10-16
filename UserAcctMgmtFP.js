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

	return user;
})();
const user = new UserAcctMgmt.user("EmaiL", "PswD", "PswD");
console.log(user);
