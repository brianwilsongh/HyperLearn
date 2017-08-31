subject_array = @subjects.to_a.sort_by{|e| e.title.downcase}

json.array! subject_array do |subject|
  json.extract! subject, :title, :user_id, :id

  json.set! :followers do
    json.array! subject.followers do |follower|
      json.id follower.id
      json.username follower.username
      json.f_name follower.f_name
      json.l_name follower.l_name
      json.avatar follower.image.url
      json.fans follower.fans.count
      json.karma follower.karma
    end
  end

  json.made_by_current_user (current_user.id == subject.user_id)
  json.category subject.categories[0]
  json.card_count subject.cards.length
  json.deck_count subject.decks.length
end
