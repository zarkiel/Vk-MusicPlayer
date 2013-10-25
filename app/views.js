var SearchView = Backbone.View.extend({
	initialize: function(){
		console.log('Successfully created!!')
		this.render()
	},
	events: {
		'click #searchButton' : 'doSearch',
		'keydown #searchQuery' : 'reviewKey',
	},
	reviewKey: function(e){
		if(e.keyCode == 13) this.doSearch();
	},
	doSearch: function(){
		window.location.hash = '/search/' + $('#searchQuery').val()
	},
	render: function(){
		template = _.template($('#searchFormTemplate').html(), {})
		this.$el.html(template);
	}
});

var PlaylistView = Backbone.View.extend({
	initialize: function(){},
	search: function(query, page, callback){
		if(!query) query = 'snsd';
		per_page = 20;
		
		offset = page * per_page - per_page;
		_view = this;
		
		VK.Api.call('audio.search', {q: query, count: per_page, offset: offset}, function(r){
			_view.render(r.response)
			if(callback) return callback()
		});
	},
	
	getTemplate: function(songs){
		template = _.template($('#playlistTemplate').html(), {songs: songs})
		return template;
	},
	
	events: {
		'click .song': 'playSong'
	},
	
	playSong: function(e){
		target = e.target;
		if(target.nodeName != 'IMG' && !$(target).hasClass('btn')){
			o = $(e.currentTarget);
			return MusicPlayer.play(o)
		}
		
		alert('La descarga empezará en un momento, espere por favor.');
	},
	
	render: function(songs){
		template = this.getTemplate(songs);
		this.$el.append(template);
	},

});

var PlayerContainerView = Backbone.View.extend({
	el: $('#playerContainer'),
	initialize: function(){
		this.render('SELECCIONE UNA CANCIÓN', '');
	},
	render :function(title, url){
		template = _.template($('#playerContainerTemplate').html(), {title: title, url: url});
		this.$el.html(template)

		MusicPlayer.audio = document.querySelector('#player');
		MusicPlayer.audio.addEventListener('ended', MusicPlayer.playNext);
	},
	
	events: {
		'click #playNext': function(){
			MusicPlayer.playNext()
		},
		'click #playPrev': function(){
			MusicPlayer.playPrev()
		}
	}
});
