var dataService = {};

(function(){
	var access_token;
	
	dataService.init = (token) => {
		access_token = token;
	};
	
	dataService.getNewReleases = () => {
		$.ajax({
			url: 'https://api.spotify.com/v1/browse/new-releases',
			headers: {
				'Authorization': 'Bearer ' + access_token
			},
			success: (response) => {
				var albums = [];
				response.albums.items.forEach(function(item) {
					albums.push({
						name: item.name,
						artists: item.artists.map(function(artist) {
							return artist.name;
						}).join(),
						image: item.images[2] || { url: null }
					})
				});
				

				console.log(response);
				console.log(albums);

				viewmodels.newReleasesVm.albums = albums;
				viewmodels.newReleasesVm.show = true;
			}
		});
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