TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: "api/lists",

  cards: function () {
    if (!this._cards) {
      this._cards = new TrelloClone.Collections.Cards()
      this._cards.set(this.attributes.cards)
    }
    return this._cards
  }


})
