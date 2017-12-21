class UsersController < ApplicationController
  
  def show
    render json: {
      'username': current_user.username,
      'profile_picture': current_user.profile_picture,
      'instagram_id': current_user.instagram_id,
      'access_token': session[:access_token]
    }
  end

  
end