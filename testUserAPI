const UAM = require("./UserAcctMgmtFP");

const userDB = new Map();

const user = new UAM.user("email", "password", "password");

//console.log(user);

UAM.signIn(user);

console.log(user);

UAM.signUp(user);
UAM.signIn(user);
UAM.signOut(user);
UAM.signOut(user);
//UAM.signIn(user);
UAM.changePassword("password", "blah", user);
UAM.changePassword("rawr", "purple", user);
UAM.changePassword("blah", "blah", user);
