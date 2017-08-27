subject_array = @subjects.to_a.sort_by{|e| e.title.downcase}

json.set! :alphabetical do
  json.array! subject_array do |subject|
    json.extract! subject, :title, :user_id, :id
    json.mastery (100 * (subject.ratings.collect(&:rating).reduce(:+) / (subject.ratings.length * 5).to_f)).to_i
    json.made_by_current_user (current_user.id == subject.user_id)
    json.card_count subject.cards.length
    json.deck_count subject.decks.length
  end
end
