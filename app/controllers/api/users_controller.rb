class Api::UsersController < ApplicationController
  def create
    @file = File.open(params[:user][:image].path)
    fixed_params = user_params.except(:image)
    @user = User.new(fixed_params)
    @user.image = @file
    if @user.save
      login(@user)
      @fans = @user.fans
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :image)
  end

end
