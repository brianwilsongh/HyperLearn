card_array = @cards.to_a.sort_by{|e| e.created_at}.reverse

json.extract! @deck, :title, :user_id, :subject_id, :id
json.card_count @deck.cards.length
if @deck.ratings.length > 0
  json.cards_mastered @deck.ratings.where(user_id: current_user.id, rating: 5).count
  json.mastery (100 * (@deck.ratings.where(user_id: current_user.id).collect(&:rating).reduce(:+) / (@deck.ratings
  .where(user_id: current_user.id).length * 5).to_f)).to_i
else
  json.cards_mastered 0
  json.mastery 0
end

json.set! :cards do
  json.array! card_array do |card|
    json.extract! card, :id, :question, :answer
  end
end
