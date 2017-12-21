class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?, :require_login
  
  before_action :require_login
  skip_before_action :require_login, only: [:index]

  def index
  end

  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end

  def logged_in?
    current_user != nil
  end

  def require_login
    if !logged_in?
      respond_to do |format|
        format.html { render "forbidden", status: :forbidden }
        
        format.json {
          render json: {
            "error": "login required"
          }, status: :forbidden
        }
      end
    end
  end
  
end
