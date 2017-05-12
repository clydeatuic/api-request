'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);

		this.mainLayout();
	}

	_createClass(App, [{
		key: 'render',
		value: function render(html, component) {
			component.innerHTML += html;
		}
	}, {
		key: 'reRender',
		value: function reRender(html, component) {
			component.innerHTML = html;
		}
	}, {
		key: 'mainLayout',
		value: function mainLayout() {
			var html = '\n\t\t\t<h1>API DEMO</h1>\n\t\t\t<div id="episodesList"></div>\n\t\t';
			this.render(html, document.querySelector("#apidemo"));
			this.showEpisodesList();
		}
	}, {
		key: 'showEpisodesList',
		value: function showEpisodesList() {
			var html = '';
			axios.get('http://www.omdbapi.com/', {
				params: {
					t: 'Game of Thrones',
					Season: 1,
					Episode: 1
				}
			}).then(function (response) {
				//console.log(response);
				var data = response.data;
				var html = '\n\t\t\t\t' + data.Title + '\n\t\t\t\t<img src="' + data.Poster + '"/>\n\t\t\t';
				app.render(html, document.querySelector("#episodesList"));
			}).catch(function (error) {
				console.log(error);
			});
		}
	}]);

	return App;
}();

var app = new App();