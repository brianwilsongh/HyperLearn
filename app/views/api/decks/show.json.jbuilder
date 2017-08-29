card_array = @cards.to_a.sort_by{|e| e.created_at}.reverse

json.extract! @deck, :title, :user_id, :subject_id, :id
json.card_count @deck.cards.length
json.mastery (100 * (@deck.ratings.where(user_id: current_user.id).collect(&:rating).reduce(:+) / (@deck.ratings.length * 5).to_f)).to_i

json.set! :cards do
  json.array! card_array do |card|
    json.extract! card, :id, :question, :answer
  end
end
