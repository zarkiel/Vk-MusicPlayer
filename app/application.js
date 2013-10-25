$(function(){
	// initialize with the vk application id
	// make sure that the current domain is in the application domains
	
	VK.init({
		apiId: 3953598 
	});

	// review the login status
	
	MusicPlayer.reviewLogin();
	
	// initialize the player
	
	MusicPlayer.initialize();

	MusicPlayer.router.on('route:root', function(){
		MusicPlayer.playlistView.search(null, 1);
		$('.song:first').trigger('click');
	});

	MusicPlayer.router.on('route:search', function(query, page){
		MusicPlayer.currentPage = 1;
		if(!page) page = MusicPlayer.currentPage;
		$('#playlist').html(''); // clean the playlist
		$('#searchQuery').val(query);
		MusicPlayer.playlistView.search(query, page);
	});
	
	Backbone.history.start();
	
	// scroll pager
	
	$(window).scroll(function(){
		var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
		var  scrolltrigger = 0.95;

		if  ((wintop/(docheight-winheight)) > scrolltrigger) {
			MusicPlayer.currentPage++;
			MusicPlayer.playlistView.search($('#searchQuery').val(), MusicPlayer.currentPage);
		}
	});
})

