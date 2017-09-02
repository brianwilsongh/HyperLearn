class Api::UsersController < ApplicationController
  def create
    if params[:user][:image] != "null"
      #if user uploaded an avatar, use that or use default
      @user = User.new(user_params)
    else
      @user = User.new(
        username: params[:user][:username],
        password: params[:user][:password],
      )
    end
    if @user.save
      login(@user)
      @fans = @user.fans
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  def user_params
    params.require(:user).permit(:username, :password, :image)
  end

end
