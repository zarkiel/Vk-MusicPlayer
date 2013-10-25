var MusicPlayer = {
	initialize: function(){
		MusicPlayer.playlistView =  new PlaylistView({el: $('#playlist')}),
		MusicPlayer.playerContainerView = new PlayerContainerView({el: $('#playerContainer')})
		MusicPlayer.searchForm = new SearchView({el: $('#searchForm')});
		MusicPlayer.router = new AppRouter;
		
	},
	reviewLogin: function () {
		VK.Auth.getLoginStatus(function (response) {
			if (response.session) return $('#wrapper').show();
			VK.Auth.login(function(response){
				if(!response.session){
					return alert('No se ha podido iniciar la aplicación');
				}
				
				window.location.reload();
			}, 8);
		});
	},
	
	currentSong: null,
	currentPage: 1,
	
	play: function(el){
		$('.song').removeClass('active')
		
		MusicPlayer.currentSong = el;
		MusicPlayer.currentSong.addClass('active');
		
		url = el.data('url')
		title = el.data('title')
		
		MusicPlayer.playerContainerView.render(title, url)
	},
	
	playNext: function(){
		console.log(MusicPlayer.currentSong);
		if(MusicPlayer.currentSong){
			next = MusicPlayer.currentSong.next();
			if(next.hasClass('song'))
				MusicPlayer.play(next)
		}
	},
	playPrev: function(){
		if(MusicPlayer.currentSong){
			prev = MusicPlayer.currentSong.prev();
			if(prev.hasClass('song'))
				MusicPlayer.play(prev)
		}
	},
}
