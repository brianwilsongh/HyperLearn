json.set! @subjects do |subject|
  json.extract! subject, :title, :user_id
end
