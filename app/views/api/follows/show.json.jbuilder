json.array! @followed_subjects do |subject|
  json.title subject.title
  json.author_id subject.user_id
  json.id subject.id
end
