class Api::SubjectsController < ApplicationController

  def index
    @subjects = current_user.all_subjects
    @categories = Category.all
    render :index
  end

  def create
    @subject = Subject.new(fixed_params)
    if @subject.save
      @subjects = current_user.all_subjects
      render :index
    else
      render json: @subject.errors.full_messages, status: 422
    end
  end

  def update
    fixed_params = subject_params.except(:category_id)
    debugger;
    oldCategorization = Categorization.where(subject_id: params[:id], category_id: params[:category_id])
    @categorization = Categorization.new(category_id: params[:category_id], subject_id: params[:id])
    unless @categorization.save
      render json ["Categorization failed"], status: 422
    end

    @subject = Subject.find(params[:id])
    if @subject.update_attributes(fixed_params)
      @subjects = current_user.all_subjects
      render :index
    else
      render json: @subject.errors.full_messages, status: 422
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
    params.require(:subject).permit(:title, :user_id, :category_id, :id)
  end

end
