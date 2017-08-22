class Api::UsersController < ApplicationRecord
  def create
    @user = User.new(user_params)
    if @user.save
      login(user)
      render json: {}
    else
      render json: @user.errors.full_messages
    end 
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
