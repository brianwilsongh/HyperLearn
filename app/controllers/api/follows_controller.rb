class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(user_id: current_user.id, subject_id: params["subjectId"].to_i)
    @follow.save
    @subject = Subject.find(@follow.subject_id)

    ratings = []
    @subject.cards.each do |card|
      new_rating = Rating.new(user_id: current_user.id, card_id: card.id, rating: 0)
      if new_rating.save
        ratings << new_rating
      else
        ratings.each do |badRating|
          badRating.destroy
        end
        @follow.destroy
        render json: ["Critical Failure!"], status: 422
        puts "FAILED TO CREATE RATINGS FOR NEW FOLLOW IN FOLLOWS CONTROLLER"
        break;
      end
    end
    #iterate to create ratings of 0 for these cards
    render '/api/subjects/show'
  end
end
