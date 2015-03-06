# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.extract!(@board, :title, :id, :user_id)
#
# json.members(@board.members) do |member|
#
# end

json.lists do
  json.array! @board.lists do |list|
    json.extract!(list, :title, :ord, :id)
    json.cards list.cards do |card|
      json.extract!(card, :title, :description, :ord, :id)
    end

  end

end
