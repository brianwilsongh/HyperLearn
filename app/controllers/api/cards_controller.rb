class Api::CardsController < ApplicationController

  def index
    @deck = Deck.find(params[:id].to_i)
    @cards = @deck.cards
    render :index
  end

  def create
    @card = Card.new(create_params)
    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def delete
    @card = Card.find(params[:id])
    @card.destroy
  end

  private
  def create_params
    params.require(:card).permit(:deck_id, :question, :answer, :question_img_url, :answer_img_url)
  end

end
