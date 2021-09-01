class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :show_category_products]

  # GET /categories
  def index
    @categories = Category.all

    render json: @categories
  end

  # GET /categories/1
  def show
    render json: @category
  end

  # GET /categories/1/products
  def show_category_products
    @products = Product.all.select{|product| product[:category_id] = @category.id}

    render json: @products, include: :categories
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:category_id])
    end

    # Only allow a list of trusted parameters through.
    # def category_params
    #   params.require(:category).permit(:name)
    # end
end
