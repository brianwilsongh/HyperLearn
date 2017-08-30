class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(user_id: current_user.id, subject_id: params["subjectId"].to_i)
    @follow.save
    @followed_subjects = current_user.subjects
    render :show
  end
end
