class Api::CardsController < ApplicationController

  def index
    @deck = Deck.find(params[:id].to_i)
    @cards = @deck.cards
    #prevent issue when looking up cards in error hash
    @all_errors = {}
    render :index
  end

  def create
    @card = Card.new(create_params)
    @all_errors = {}
    if @card.save
      @deck = Deck.find(@card.deck_id)
      @cards = @deck.cards
      render :index
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def update
    #this takes an array since we're handling multiple at once
    @cards_edit = params[:card]
    @all_errors = {}
    @cards = []
    @cards_edit.each do |k, val|
      this_card = Card.find(val[:id].to_i)
      attributes = {question: val[:question], answer: val[:answer], question_img_url: "touched"}
      @cards << this_card
      if this_card.update_attributes(attributes)
        @all_errors[this_card.id] = ["None"]
      else
        @all_errors[this_card.id] = this_card.errors.full_messages
      end
    end

    render :index
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    # @cards = Deck.find(@card.deck_id).cards
    @deck = Deck.find(@card.deck_id)
    @cards = @deck.cards
    render "/api/decks/show.json.jbuilder"
  end

  private
  def create_params
    params.require(:card).permit(:id, :deck_id, :question, :answer, :question_img_url, :answer_img_url)
  end

end
