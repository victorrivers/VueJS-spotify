var viewmodels = {};

(function(){
	
	var viewSelectorVm = new Vue({
		el: '.main-view-container',
		data: {
			currentView: 'featured',
			menuItems: [
				{ key: 'featured', name: 'FEATURED' },
				{ key: 'genres-and-moods', name: 'GENRES & MOODS' },
				{ key: 'new-releases', name: 'NEW RELEASES' },
				{ key: 'discover', name: 'DISCOVER' }
			]
		},
		components: {
			featured: {
				template: '<div class="view-content">Featured content</div>'
			},
			genresAndMoods: {
				template: '<div class="view-content">GENRES & MOODS!</div>'
			},
			newReleases: {
				template: '<div class="view-content">New relases content</div>'
			},
			discover: {
				template: '<div class="view-content">Discover</div>'
			}
		},
		methods: {
			updateView: function (view) {
				if (view !== this.currentView) {
					this.currentView = view;
				}
			}
		}
	});
	
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