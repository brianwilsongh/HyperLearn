class Api::SubjectsController < ApplicationController

  def index
    @subjects = current_user.all_subjects
    render :index
  end

  def create
    @subject = Subject.new(subject_params)
    if @subject.save
      @subjects = current_user.all_subjects
      render :index
    else
      render json: @subject.errors.full_messages, status: 422
    end
  end

  def update
    @subject = Subject.find(params[:id])
    if @subject.update_attributes(subject_params)
      @subjects = current_user.all_subjects
      render :index
    else
      render json: @subject.errors.full_messages, status: 406
    end
  end

  def destroy
    @subject = Subject.find(params[:id])
    @subject.destroy
    @subjects = current_user.all_subjects
    render :index
  end

  private
  def subject_params
    params.require(:subject).permit(:title, :user_id)
  end

end
