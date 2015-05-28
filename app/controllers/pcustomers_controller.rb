class PcustomersController < ApplicationController
  skip_before_filter :verify_authenticity_token, :only => [:index]

  def index
    render json: Customer.all, callback: params[:callback]
  end
end