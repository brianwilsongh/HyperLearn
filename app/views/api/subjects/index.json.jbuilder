json.set! :subjects do
    @subjects.each do |subject|
      json.set! subject.id do
        json.extract! subject, :title, :user_id
      end
  end
end
