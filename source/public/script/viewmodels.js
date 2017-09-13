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
				data: function() {
					return {
						title: 'Featured content',
						items: dataService.featuredPlaylists
					};
				},
				template: '#view-content-template'
			},
			genresAndMoods: {
				data: function() {
					return {
						title: 'Genres and moods content',
						items: []
					};
				},
				template: '#view-content-template'
			},
			newReleases: {
				data: function() {
					return {
						title: 'New relases content',
						items: []
					};
				},
				template: '#view-content-template'
			},
			discover: {
				data: function() {
					return {
						title: 'Discover content',
						items: []
					};
				},
				template: '#view-content-template'
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
})();