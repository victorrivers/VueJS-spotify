(function() {

	var stateKey = 'spotify_auth_state';

	/**
	* Obtains parameters from the hash of the URL
	* @return Object
	*/
	function getHashParams() {
		var hashParams = {};
		var e, r = /([^&;=]+)=?([^&;]*)/g,
		q = window.location.hash.substring(1);
		while ( e = r.exec(q)) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
		}
		return hashParams;
	}

	/**
	* Generates a random string containing numbers and letters
	* @param  {number} length The length of the string
	* @return {string} The generated string
	*/
	function generateRandomString(length) {
		var text = '';
		var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		for (var i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	};

	var params = getHashParams();

	var access_token = params.access_token,
	state = params.state,
	storedState = sessionStorage.getItem(stateKey);

	function authenticate() {
		sessionStorage.removeItem(stateKey);
		
		var client_id = 'ccd2c2d81a754c998437948b0e05334b'; // Your client id
		var redirect_uri = 'http://localhost:8888'; // Your redirect uri

		var state = generateRandomString(16);

		sessionStorage.setItem(stateKey, state);
		var scope = 'user-read-private user-read-email';

		var url = 'https://accounts.spotify.com/authorize';
		url += '?response_type=token';
		url += '&client_id=' + encodeURIComponent(client_id);
		url += '&scope=' + encodeURIComponent(scope);
		url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
		url += '&state=' + encodeURIComponent(state);

		window.location = url;
	}
	
	if (access_token) {
		if (state == null) {
			console.log('%c Re-authenticating...', 'color: #F00;');
			authenticate();
		} else if (state !== storedState) {
			sessionStorage.removeItem(stateKey);
			sessionStorage.setItem(stateKey, state);
		} else {
			dataService.init(access_token);
		}
	} else {
		authenticate();
	}
})();