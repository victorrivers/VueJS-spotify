var dataService = {};

(function(){
	var access_token;
	
	dataService.init = (token) => {
		access_token = token;
	};
	
	dataService.getPlaylists = (callback) => {
		$.ajax({
			url: 'https://api.spotify.com/v1/browse/featured-playlists',
			headers: {
				'Authorization': 'Bearer ' + access_token
			},
			success: callback
		});
	};
})();