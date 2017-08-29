class Api::RatingsController < ApplicationController
  def create
    @rating = Rating.new(ratings_params)
    @old_rating = Rating.where(user_id: @rating.user_id, card_id: @rating.card_id)
    @old_rating.destroy_all
    @rating.save

    @deck = Deck.find(params[:current_deck_id].to_i)
    @cards = @deck.cards
    #prevent issue when looking up cards in error hash
    @all_errors = {}
    render 'api/cards/index.json'
  end

  def ratings_params
    params.require(:rating).permit(:user_id, :card_id, :rating)
  end
end
