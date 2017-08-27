json.extract! @user, :username, :id

json.fans @user.fans.count

json.set! :subjects do
  json.array! @user.all_subjects do |subject|
    json.title subject.title
    json.author_id subject.user_id
  end
end

json.set! :fans do
  json.array! @user.fans do |fan|
    json.id fan.id
    json.username fan.username
    json.f_name fan.f_name
    json.l_name fan.l_name
  end
end
