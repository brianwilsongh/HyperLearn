class Api::DecksController < ApplicationController

  def index
    @subject = Subject.find(params[:subject_id])
    @decks = @subject.decks
    render :index
  end

  def create
    @deck = Deck.new(create_params)
    if @deck.save
      render :create
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def destroy
    @deck = Deck.find(params[:id])
    @deck.destroy
  end

  def create_params
    params.require(:deck).permit(:title, :user_id)
  end
end
