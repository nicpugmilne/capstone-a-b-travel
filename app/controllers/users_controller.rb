class UsersController < ApplicationController  
  skip_before_action :authorize, only: [:show, :create]

  def index
    render json: User.all
  end

  def show
  user = User.find_by!(id: session[:user_id])
  render json: user
  end

  def create
    if params[:password_confirmation] == params[:password]
      params_hash = user_params.to_h
      user = User.create!(params_hash)
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: ["Confirmation password does not match password"] }
    end
  end

  private 

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end


end
