class SessionsController < ApplicationController
  skip_before_action :require_login, only: [:create, :login]

  def create
    @user = User.find_or_create_by(instagram_id: auth['uid']) do |u|
      u.username = auth['info']['nickname']
      u.profile_picture = auth['info']['image']
    end
    session[:user_id] = @user.id
    session[:access_token] = auth['credentials']['token']
    redirect_to root_path
  end

  def login
    login_path = "https://api.instagram.com/oauth/authorize/?client_id=#{ENV['INSTAGRAM_ID']}&redirect_uri=#{ENV['REDIRECT_HOST']}/auth/instagram/callback&response_type=code"
    redirect_to login_path
  end

  def logout
    session.clear
    redirect_to root_path
  end

  protected

  def auth
    request.env['omniauth.auth']
  end
end