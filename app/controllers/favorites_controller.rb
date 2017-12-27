class FavoritesController < ApplicationController
  protect_from_forgery except: [:create, :destroy]
  
  def create
    favorite = Favorite.find_or_create_by(image_id: params[:image_id], user_id: current_user.id) do |fav|
      fav.user_id = current_user.id
      fav.image_id = params[:image_id]
      fav.tags = params[:tags]
      fav.images = params[:images]
      fav.created_at = params[:created_at]
    end
    if favorite.save
      render json: {message: "OK"}
    else
      render json: {message: "Borked"}, status: :internal_server_error
    end
  end

  def index
    favorites = Favorite.where(user_id: session[:user_id])
    favs = favorites.map do |fav| 
      {
      'image_id': fav.image_id,
      'images': fav.images,
      'created_at': fav.created_at
      }
    end
    render json: favs
  end

  def destroy
    favorite = Favorite.find_or_create_by(image_id: params[:image_id], user_id: current_user.id)
    favorite.delete
    render json: {message: "OK"}
  end
end