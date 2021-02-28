class UsersController < ApplicationController

    def index
        @users = User.all

        render json: @users
    end

    def create
        @user = User.create(user_params)

        render json: @user, status: :created
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :first_name, :last_name)
    end

end
