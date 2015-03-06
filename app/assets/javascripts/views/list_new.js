TrelloClone.Views.ListNew = Backbone.View.extend({

  events: {
    "submit form.new-list": "submit"
  },

    render: function () {
      var content = JST.list_new()
      this.$el.html(content)
    },

    submit: function () {
      event.preventDefault();
      var $input = this.$el.find(".new-title");
      var title = $input.val();
      var list = new TrelloClone.Models.List({title: title, board_id: this.model.id});
      list.save({}, {
        success: function () {
          this.collection.add(list);
          $input.val("")
          this.prevView.render();
        }.bind(this)
      })

    },

})
