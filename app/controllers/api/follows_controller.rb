class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(user_id: current_user.id, subject_id: params["subjectId"].to_i)

    unless @follow.valid?
      @follow.destroy
      render json: ["Invalid follow!"], status: 422
      return
    end

    @follow.save
    @subject = Subject.find(params["subjectId"].to_i)

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
        render json: ["Failed to save follow!"], status: 422
        puts "FAILED TO CREATE RATINGS FOR NEW FOLLOW IN FOLLOWS CONTROLLER"
        break;
      end
    end
    #iterate to create ratings of 0 for these cards
    render '/api/subjects/show'
  end

  def destroy
    #will actually receive subject id
    @subject = Subject.find(params[:id])
    @follow = Follow.where(user_id: current_user.id, subject_id: @subject.id)[0]
    if @follow.destroy
      @subjects = current_user.all_subjects
      render '/api/subjects/index'
    else
      render json: ["Failed to unfollow!"], status: 422
    end
  end
end
