// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){
    this.on('ended', function(){
      this.shift();
      this.playFirst();
      // this.set('currentSong', songQueue.at(0));
      // songQueue.playFirst(this.get('currentSong'));
    }, this);
  },

  playFirst: function(song){
    this.at(0).play();
  },


});