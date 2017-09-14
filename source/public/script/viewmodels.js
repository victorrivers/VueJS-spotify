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
				template: '#view-content-template',
				data: function() {
					return {
						title: 'Featured playlists',
						items: []
					};
				},
				mounted: function () {
					dataService.getfeaturedPlaylists((data) => {
						this.items = data;
					});
				}
			},
			genresAndMoods: {
				template: '#view-content-template',
				data: function() {
					return {
						title: 'Genres and moods content',
						items: []
					};
				},
				activated: function () {
					if (this.items.length === 0) {
						// Fetch data
					}
				}
			},
			newReleases: {
				template: '#view-content-template',
				data: function() {
					return {
						title: 'New relases content',
						items: []
					};
				}
			},
			discover: {
				template: '#view-content-template',
				data: function() {
					return {
						title: 'Discover content',
						items: []
					};
				}
			}
		},
		methods: {
			updateView: function (key) {
				if (key !== this.currentView) {
					this.currentView = key;
				}
			}
		}
	});
	
	/*
	dataService.getfeaturedPlaylists((data) => {
		viewSelectorVm.$options.components.featured.data().items = data;
		console.log(viewSelectorVm.$options.components.featured.data().items);
	});*/
})();