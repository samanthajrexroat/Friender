import decode from "jwt-decode";
class AuthService {
	getProfile() {
		return decode(this.getToken());
	}

	loggedIn() {
		const token = this.getToken();
		// If there is a token and it's not expired, return `true`
		return token && !this.isTokenExpired(token) ? true : false;
	}

	isTokenExpired(token) {
		// Decode the token to get its expiration time that was set by the server
		const decoded = decode(token);
		// If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
		if (decoded.exp < Date.now() / 1000) {
			localStorage.removeItem("id_token");
			return true;
		}
		return false;
	}

	getToken() {
		console.log("getToken");
		return localStorage.getItem("id_token");
	}

	login(idToken) {
		console.log("login");
		localStorage.setItem("id_token", idToken);
		// window.location.assign("/me");
		// window.history.push("/me");
	}

	logout() {
		localStorage.removeItem("id_token");
		window.location.assign("/");
	}
}

export default new AuthService();
