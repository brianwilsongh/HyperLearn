class Api::SubjectsController < ApplicationController

  def index
    @subjects = Subject.where(user_id: current_user.id)
    render :index
  end

  def create
    @subject = Subject.new(create_params)
    if @subject.save
      render :create
    else
      render json: @subject.errors.full_messages, status: 422
    end
  end

  def destroy
    @subject = Subject.find(params[:id])
    @subject.destroy
  end

  private
  def create_params
    params.require(:subject).permit(:title, :user_id)
  end

end
