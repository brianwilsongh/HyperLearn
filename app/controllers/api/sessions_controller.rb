class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username],
    params[:user][:password])
    if @user
      login(@user)
      @fans = @user.fans
      render '/api/users/show'
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def update
    #This is being used for a user's queries! nothing todo with auth
    @categories = Category.all
    @subjects = Subject.where('LOWER(title) like ?', "%" + params[:term].downcase + "%").limit(12)
    unless current_user
      render json: [], status: 200
    end
    render '/api/subjects/queries'
  end

  def destroy
    @user = current_user
    if @user
      logout
    else
      render json: ["Nobody signed in"]
    end
  end
end
