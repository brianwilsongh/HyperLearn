deck_array = @decks.to_a.sort_by{|e| e.created_at}.reverse

json.set! :sort_recent do
  json.array! deck_array do |deck|
    json.extract! deck, :title, :user_id, :subject_id, :id
    json.mastery (100 * (deck.ratings.collect(&:rating).reduce(:+) / (deck.ratings.length * 5).to_f)).to_i
    json.card_count deck.cards.length
    json.made_by_current_user (current_user.id == deck.user_id)
  end
end
