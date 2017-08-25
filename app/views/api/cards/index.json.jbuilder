
json.set! :store do
  @cards.each do |card|
    json.set! card.id do
      json.extract! card, :id, :question, :answer, :deck_id, :question_img_url, :answer_img_url, :created_at
    end
  end

end
