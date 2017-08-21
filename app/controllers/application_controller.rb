class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user

  def logged_in?
    #return the truthiness of current_user method
    !!current_user
  end

  def current_user
    #helper method to find user by ivar or session token
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    #we know who the user is, so match their session token to cookie
    session[:session_token] = user.regen_session_token
    #set current user ivar to this user
    @current_user = user
  end

  def logout
    #scrable everything, be sure session cookie's token doesn't match user's in db
    current_user.regen_session_token if current_user
    @current_user = nil
    session[:session_token] = nil
  end
end
