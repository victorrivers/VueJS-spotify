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
				template: '<div class="view-content">Genres and moods content</div>'
			},
			newReleases: {
				template: '<div class="view-content">New relases content</div>'
			},
			discover: {
				template: '<div class="view-content">Discover content</div>'
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

})();