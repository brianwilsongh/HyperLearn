json.extract! @subject, :title, :user_id, :id
if (@subject.ratings.length > 0)
  json.mastery (100 * (@subject.ratings.where(user_id: current_user.id).collect(&:rating).reduce(:+) / (@subject.ratings.where(user_id: current_user.id).length * 5).to_f)).to_i
else
  json.mastery 0
end
json.followers @subject.followers
json.made_by_current_user (current_user.id == @subject.user_id)
json.category @subject.categories[0]
json.card_count @subject.cards.length
json.deck_count @subject.decks.length
