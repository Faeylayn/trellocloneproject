TrelloClone.Views.cardNew = Backbone.View.extend({

  render: function () {
    var content = JST.new_card()
    this.$el.append(content)
  },

})
