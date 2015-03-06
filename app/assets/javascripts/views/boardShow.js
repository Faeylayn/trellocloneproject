TrelloClone.Views.BoardShow = Backbone.View.extend({
  events: {
    "click button.delete": "killBoard",
    "click button.delete-comment": "deleteComment"
  },


  render: function () {
    this.$el.empty();
    this.model.fetch({
      success: function () {
        this.displayContent()
      }.bind(this)
    })
  },

  displayContent: function () {
    this.addDelete();
    this.$el.html("<h1>"+this.model.escape("title")+"</h1> <ul class='list-list'></ul>")

    this.model.lists().each(this.addList.bind(this))
  },

  addList: function (list) {
    // $(".list-list").append("<li class='list-list-item'>" + list.escape("title") + "<br><ul class='card-list'></ul></li>")
    // // var x = list.attributes.cards.length;
    // // for (var i = 0; i < x; i++){
    // //   this.$el.append("<span>"+list.attributes.cards[i].title+"</span><br>")
    // // }
    // list.cards().each(function (card){
    //   $(".card-list").append("<li>"+card.escape("title")+"</li><br>")
    //   $(".card-list").append("<button class='delete-comment'> Delete </button>")
    //
    //   }.bind(this))
    var content = JST.list_list({list: list})
    $(".list-list").append(content)
  },

  addDelete: function () {
    this.$el.append("<button class='delete'> DELETE THIS BOARD </button>")
  },

  killBoard: function () {
    this.model.destroy();
    this.remove();
    Backbone.history.navigate("", {trigger: true})
  },

  deleteComment: function () {

  }

})
