class ContactsController < ApplicationController
  def index
  end

  def create
    @contact = Contact.create(contact_params)
    render json: @contact
  end

  private
  def contact_params
    params.require(:contacts).permit(:name, :phone_number)
  end

  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy

    render 'index'
  end
end
