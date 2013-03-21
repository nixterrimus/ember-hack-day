class ExtrasController < ApplicationController
  def index
    @extras = Extra.all
    render :json => @extras
  end

  def show
    @extra = Extra.find(params[:id])
    render json: @extra  
  end  
end
