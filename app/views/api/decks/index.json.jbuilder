json.set! @decks do |deck|
  json.extract! deck, :title, :user_id, :subject_id, :updated_at
end
