class Api::SubjectsController < ApplicationController

  def index
    @subjects = current_user.all_subjects
    @categories = Category.all
    render :index
  end

  def create
    @categories = Category.all

    fixed_params = subject_params.except(:category_id)
    @subject = Subject.new(fixed_params)
    if @subject.save
      @categorization = Categorization.new(category_id: params[:subject][:category_id], subject_id: @subject.id)
      @categorization.save
      #error should not disrupt the whole thing, just not categorize it
      @subjects = current_user.all_subjects
      render :index
    else
      render json: @subject.errors.full_messages, status: 422
    end
  end

  def update
    @categories = Category.all

    oldCategorization = Categorization.where(subject_id: params[:id])[0]

    if oldCategorization
      oldCategorization.destroy
    end

    @categorization = Categorization.create(category_id: params[:subject][:category_id], subject_id: params[:id])
    #if it doesn't save, object will just be uncategorized

    @subject = Subject.find(params[:id])
    fixed_params = subject_params.except(:category_id)
    if @subject.update_attributes(fixed_params)
      @subjects = current_user.all_subjects
      render :index
    else
      render json: @subject.errors.full_messages, status: 422
    end
  end

  def destroy
    @categories = Category.all
    @subject = Subject.find(params[:id])
    @subject.destroy
    @subjects = current_user.all_subjects
    render :index
  end

  private
  def subject_params
    params.require(:subject).permit(:title, :user_id, :id, :category_id)
  end

end
