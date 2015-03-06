TrelloClone.Views.BoardIndex = Backbone.View.extend({
  tagName: "ul",

  initialize: function () {
    this.collection = new TrelloClone.Collections.Boards();
    // this.listenTo(this.collection, "add", this.render);
  },

  render: function (callback) {
    this.$el.empty();

    this.collection.fetch({
      success: function () {
        this.AddBoards();
        if (callback){
          callback();
        }
      }.bind(this)
    })
  },

  AddBoards: function () {
    this.collection.each(this.AddEachBoard.bind(this))
  },

  AddEachBoard: function (board) {
    var content = JST.board_list({board: board})
    this.$el.append(content);
  },
})
