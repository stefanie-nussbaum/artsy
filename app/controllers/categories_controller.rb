class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :add_to_product]

  # GET /categories
  def index
    @categories = Category.all

    render json: @categories
  end

  # GET /categories/1
  def show
    render json: @category
  end

  # GET /products/1/categories/2
  def add_to_product
    @product = Product.find(params[:product_id])
    @product.category = @category

    render json: @food, include: :categories
  end

  # POST /categories
  # def create
  #   @category = Category.new(category_params)

  #   if @category.save
  #     render json: @category, status: :created, location: @category
  #   else
  #     render json: @category.errors, status: :unprocessable_entity
  #   end
  # end

  # PATCH/PUT /categories/1
  # def update
  #   if @category.update(category_params)
  #     render json: @category
  #   else
  #     render json: @category.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /categories/1
  # def destroy
  #   @category.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    # def category_params
    #   params.require(:category).permit(:name)
    # end
end
