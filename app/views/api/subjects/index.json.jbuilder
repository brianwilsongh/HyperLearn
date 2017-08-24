subject_array = @subjects.to_a.sort_by{|e| e.title}
puts "#{subject_array.length} is length of subj array!"

json.set! :alphabetical do
  json.array! subject_array do |subject|
    json.extract! subject, :title, :user_id, :id
    json.made_by_current_user (current_user.id == subject.user_id)
  end
end
