class App{
	constructor(){
		this.mainLayout();
	}
	render(html,component){component.innerHTML += html;}
	reRender(html,component){component.innerHTML = html;}
	mainLayout(){
		let html = `
			<h1>API DEMO</h1>
			<div id="episodesList"></div>
		`;
		this.render(html,document.querySelector("#apidemo"));
		this.showEpisodesList();
	}
	showEpisodesList(){
		let html = ``;
		axios.get('http://www.omdbapi.com/', {
			params: {
				t: 'Game of Thrones',
				Season: 1,
				Episode: 1
			}
		})
		.then(function (response) {
			//console.log(response);
			let data = response.data;
			let html = `
				${data.Title}
				<img src="${data.Poster}"/>
			`;
			app.render(html,document.querySelector("#episodesList"));
		})
		.catch(function (error) {
			console.log(error);
		});				
	}
}
let app = new App();
