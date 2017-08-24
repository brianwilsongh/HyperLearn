deck_array = @decks.to_a.sort_by{|e| e.created_at}

json.set! :sort_recent do
  json.array! deck_array do |deck|
    json.extract! deck, :title, :user_id, :subject_id, :id
    json.card_count deck.cards.length
    json.made_by_current_user (current_user.id == deck.user_id)
  end
end
