class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /products
  def index
    @products = Product.all

    render json: @products
  end

  # GET /products/1
  def show
    render json: @product, include: :categories
  end

  # POST /products
  def create
    @product = Product.new(product_params)
    @product.user = @current_user

    if @product.save
      render json: @product, status: :created
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    def set_category
      @category = Category.where(request.body.category = :id)
    end

    # Only allow a list of trusted parameters through.
    def product_params
      # @category = Category.find_by(request.body.category)
      # set_category
      params.require(:product).permit(:name, :description, :price, :img_url, :category_id)
    end
end
