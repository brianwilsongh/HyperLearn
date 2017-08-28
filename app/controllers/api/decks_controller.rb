class Api::DecksController < ApplicationController

  def index
    @subject = Subject.find(params[:id])
    @decks = @subject.decks
    render :index
  end

  def show
    @deck = Deck.find(params[:id])
    @cards = @deck.cards
    render :show
  end

  def create
    @deck = Deck.new(deck_params)
    @deck.user_id = current_user.id
    if @deck.save
      #find decks belonging to parent subject to render into the panel
      @decks = Subject.find(@deck.subject_id).decks
      render :index
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def edit
    #used to reset deck
    @deck = Deck.find(params[:id])
    @deck.reset_ratings
    @decks = Subject.find(@deck.subject_id).decks
    render :show
  end

  def update
    @deck = Deck.find(params[:id])
    if @deck.update_attributes(deck_params)
      @decks = Subject.find(@deck.subject_id).decks
      render :index
    else
      puts @deck.errors.full_messages.to_s
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def destroy
    @deck = Deck.find(params[:id])
    @decks = Subject.find(@deck.subject_id).decks
    @deck.destroy
    render :index
  end

  def deck_params
    params.require(:deck).permit(:title, :subject_id, :user_id, :id)
  end


end
