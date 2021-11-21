class ApplicationController < ActionController::Base
  before_action :load_products
  
  # In case a visitor tries to access a forbidden page, redirect to 
  #root page and show respective alert flash message
  rescue_from CanCan::AccessDenied do |exception|
    redirect_to main_app.root_url, alert: exception.message
  end

  def load_products
    @products = Product.all
  end
    
end
