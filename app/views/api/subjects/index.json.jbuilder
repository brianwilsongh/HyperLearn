subject_array = @subjects.to_a.sort_by{|e| e.title.downcase}

json.set! :alphabetical do
  json.array! subject_array do |subject|
    json.extract! subject, :title, :user_id, :id
    if (subject.ratings.length > 0)
      json.mastery (100 * (subject.ratings.collect(&:rating).reduce(:+) / (subject.ratings.length * 5).to_f)).to_i
    else
      json.mastery 0
    end
    json.made_by_current_user (current_user.id == subject.user_id)
    json.category subject.categories[0]
    json.card_count subject.cards.length
    json.deck_count subject.decks.length
  end
end

json.set! :categories do
  json.array! @categories do |category|
    json.extract! category, :id, :name
    json.set! :subjects_of_category do
      json.array! category.subjects do |cat_sub|
        json.extract! cat_sub, :id, :title, :user_id, :updated_at
        json.made_by_current_user (current_user.id) == cat_sub.user_id
      end
    end
  end
end
