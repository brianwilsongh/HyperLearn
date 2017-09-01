json.extract! @user, :username, :id
if @user.image.url
  json.avatar @user.image.url
else
  json.avatar "null"
end

json.set! :fans do
  json.array! @user.fans do |fan|
    json.id fan.id
    json.username fan.username
    json.f_name fan.f_name
    json.l_name fan.l_name
    json.avatar fan.image.url
    json.fans fan.fans.count
    json.karma fan.karma
  end
end

json.set! :subjects do
  json.array! @user.all_subjects do |subject|
    json.title subject.title
    json.author_id subject.user_id
    json.id subject.id
  end
end
