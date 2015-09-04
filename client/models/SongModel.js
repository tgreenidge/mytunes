// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  //declare a enqueue method that is similar
  enqueue: function(){
    this.trigger('enqueue', this);
  },

  ended: function(){
    console.log('ended is triggering')
    this.trigger('ended', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  }

});
