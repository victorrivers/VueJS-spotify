var viewmodels = {};

(function(){
	
	viewmodels.newReleasesVm = new Vue({
		el: '.new-releases-container',
		data: {
			albums: [],
			show: false
		}
	});
	
	viewmodels.playlistsVm = new Vue({
		el: '.playlists-container',
		data: {
			playlists: [],
			show: false
		}
	});
	
	viewmodels.albumsVm = new Vue({
		el: '.albums-container',
		data: {
			albums: [],
			show: false
		}
	});
})();