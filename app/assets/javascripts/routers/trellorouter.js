TrelloClone.Router = Backbone.Router.extend({

  routes: {
    "": "boardIndex",
    "boards/:id": "boardShow",

  },

  boardIndex: function (callback) {
    this._boardIndex = new TrelloClone.Views.BoardIndex();
    this._SwapView(this._boardIndex)
    $(".display").html(this._boardIndex.$el);
    this.boardNew();
    $(".display").append(this._boardNew.$el)
    this._boardIndex.render(callback);

  },

  boardShow: function (id, callback) {
    if (!this._boardIndex) {
      this.boardIndex(this.boardShow.bind(this, id));
      return
    }
    var board = new TrelloClone.Models.Board ({ id: id })
    board.fetch({
      success: function() {
        this._boardShow = new TrelloClone.Views.BoardShow({
          collection: this._boardIndex.collection,
          model: board
        });
        $(".display").html(this._boardShow.$el);

        this._SwapView(this._boardShow);
        this.listNew();
        this._boardShow.render();
        $(".display").append(this._listNew.$el);
      }.bind(this)
    })
  },

  boardNew: function () {
    this._boardNew = new TrelloClone.Views.BoardNew({
      collection: this._boardIndex.collection
    });
    this._boardNew.render();

  },

  listNew: function () {
    this._listNew = new TrelloClone.Views.ListNew({
      collection: this._boardShow.model.lists(),
      model: this._boardShow.model
    });
    this._listNew.prevView = this._boardShow
    this._listNew.render();
  },



  _SwapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    };
    this.currentView = newView;
  }
})
