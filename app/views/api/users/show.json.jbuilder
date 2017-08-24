json.extract! @user, :username, :id

json.set! :subjects do
  json.array! @user.all_subjects do |subject|
    json.title subject.title
    json.author_id subject.user_id
  end
end
