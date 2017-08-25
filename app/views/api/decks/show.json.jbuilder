card_array = @cards.to_a.sort_by{|e| e.created_at}.reverse

json.extract! @deck, :title, :user_id, :subject_id, :id
json.card_count @deck.cards.length

json.set! :cards do
  json.array! card_array do |card|
    json.extract! card, :id, :question, :answer
  end
end
