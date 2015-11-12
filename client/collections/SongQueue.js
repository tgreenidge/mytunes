// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){
     // this.playFirst();
    this.on('add', this.enqueue, this);
    this.on('ended', this.playNext, this);
    this.on('dequeue', this.dequeue, this);

  },
   
  playNext: function(){
    if (this.length > 0) {
      this.shift();
      if(this.length){
        this.playFirst();
      }
    }
  },

  enqueue: function(song){
    if(this.length === 1 ){
      this.playFirst();
    }
  },

  dequeue: function(song){
    if(this.at(0)===song){
      this.playNext();
    }else{
      this.remove(song);
    }
  },
    
  playFirst: function(song){
    this.at(0).play();
  }
});