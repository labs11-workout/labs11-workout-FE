// import auth0 from 'auth0-js';
// import { createBrowserHistory } from 'history';
import Auth0Lock from "auth0-lock";
import dateFns from "date-fns";

//const history = createBrowserHistory();

//****OLD AUTHENTICATION METHOD */
//   accessToken;
//   idToken;//
//   expiresAt;
// auth0 = new auth0.WebAuth({
//   domain: `${process.env.REACT_APP_AUTH0}`,
//   clientID: `${process.env.REACT_APP_CLIENT_ID}`,
//   redirectUri: `${process.env.REACT_APP_REDIRECT_URI}`,
//   responseType: 'token id_token',
//   scope: 'openid'
// });
// login = () => {
//   this.auth0.authorize();
// }
// handleAuthentication = () => {
//   this.auth0.parseHash((err, authResult) => {
//     if (authResult && authResult.accessToken && authResult.idToken) {
//       this.setSession(authResult);
//     } else if (err) {
//       history.replace('/home');
//       console.log(err);
//       alert(`Error: ${err.error}. Check the console for further details.`);
//     }
//   });
// }

// getAccessToken = () => {
//   return this.accessToken;
// }

// getIdToken = () => {
//   return this.idToken;
// }

// setSession = (authResult) => {
//   // Set isLoggedIn flag in localStorage
//   localStorage.setItem('isLoggedIn', 'true');
//   localStorage.setItem('token', authResult.idToken);

//   // Set the time that the access token will expire at
//   let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
//   this.accessToken = authResult.accessToken;
//   this.idToken = authResult.idToken;
//   this.expiresAt = expiresAt;

//   // navigate to the home route
//   history.replace('/home');
// }

// renewSession = () => {
//   this.auth0.checkSession({}, (err, authResult) => {
//      if (authResult && authResult.accessToken && authResult.idToken) {
//        this.setSession(authResult);
//      } else if (err) {
//        this.logout();
//        console.log(err);
//        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
//      }
//   });
// }

// logout= () => {
//   // Remove tokens and expiry time
//   this.accessToken = null;
//   this.idToken = null;
//   this.expiresAt = 0;

//   // Remove isLoggedIn flag from localStorage
//   localStorage.removeItem('isLoggedIn');

//   // navigate to the home route
//   history.replace('/home');
// }

// isAuthenticated= () => {
//   // Check whether the current time is past the
//   // access token's expiry time
//   let expiresAt = this.expiresAt;
//   return new Date().getTime() < expiresAt;
// }

//***LOCK IMPLEMENTATION ****//

// Initalizing Auth0lock
const auth = new Auth0Lock(
	`${process.env.REACT_APP_CLIENT_ID}`,
	`${process.env.REACT_APP_AUTH0}`,
	{
		auth: {
			redirect: false,
			responseType: "token id_token",
			params: {
				scope: "openid profile email"
			}
		},
		theme: {
			logo: "https://i.imgur.com/5M432x1.png",
			primaryColor: "#DB762E"
		},
		languageDictionary: {
			title: "Welcome to CleanLift"
		},
		autoclose: true
	}
);

//Listening for authenticated event
auth.on("authenticated", function(authResult) {
	//grabbing token from authResult to authenticate user and save to local storage for session
	auth.getUserInfo(authResult.accessToken, function(error, profile, idToken) {
		if (error) {
			console.log("cannot get user info");
			return;
		}
		//we only need to store the token to authenticate our users.
		localStorage.setItem("token", authResult.idToken);
		let d = dateFns.format(new Date(), "MM-DD-YYYY");
		window.location.href = `/schedule/${d}`;
	});
});

// const auth = new Auth();

export default auth;
