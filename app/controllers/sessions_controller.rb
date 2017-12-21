class SessionsController < ApplicationController
  def create
    @user = User.find_or_create_by(instagram_id: auth['uid']) do |u|
      u.username = auth['info']['nickname']
      u.profile_picture = auth['info']['image']
    end
    session[:user_id] = @user.id
    session[:access_token] = auth['credentials']['token']
    redirect_to root_path
  end

  protected

  def auth
    request.env['omniauth.auth']
  end
end