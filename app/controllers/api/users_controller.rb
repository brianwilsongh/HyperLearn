class Api::UsersController < ApplicationController
  def create
    if params[:user][:image] != "null"
      #if user uploaded an avatar, use that or use default
      @user = User.new(user_params)
      @user.image = params[:user][:image]
    else
      default_image = File.open("app/assets/images/wilson.png")
      @user = User.new(
        username: params[:user][:username],
        password: params[:user][:password],
        image: default_image
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
