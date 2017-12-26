class FavoritesController < ApplicationController

  def create
    # TODO consider if this is the best key
    favorites = Favorite.find_or_create_by(id: params[:id]) do |fav|
      fav.user_id = current_user.id
      fav.image_id = params[:image_id]
      fav.tags = params[:tags]
      fav.images = params[:images]
      fav.created_at = params[:created_at]
    end
    render json: {message: "OK"}
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

  def delete
    # TODO validate user has permissions to delete favorite
    favorite = Favorite.find_or_create_by(id: params[:id])
    favorite.delete
    render json: {message: "OK"}
  end
end