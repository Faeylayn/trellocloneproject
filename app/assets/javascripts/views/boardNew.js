TrelloClone.Views.BoardNew = Backbone.View.extend({

  events: {
    "submit form.new-board": "submit"
  },



  render: function () {
    var content = JST.board_new()
    this.$el.html(content)
  },

  submit: function () {
    event.preventDefault();
    var $input = this.$el.find(".new-title");
    var title = $input.val();
    var board = new TrelloClone.Models.Board({title: title});
    board.save({}, {
      success: function () {
        this.collection.add(board);
        Backbone.history.navigate("boards/" + board.id, {trigger: true})
      }.bind(this)
    })

  },

})
