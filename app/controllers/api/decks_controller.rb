class Api::DecksController < ApplicationController

  def index
    @subject = Subject.find(params[:id])
    @decks = @subject.decks
    render :index
  end

  def create
    @deck = Deck.new(deck_params)
    @deck.user_id = current_user.id
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

  def deck_params
    params.require(:deck).permit(:title, :subject_id)
  end


end
