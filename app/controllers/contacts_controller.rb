class ContactsController < ApplicationController
  def index
  end

  def create
    @contact = Contact.create(contact_params)
    render json: @contact
  end

  def send_message
    sh = SendHub.new
    puts params["phone_number"]
    puts sh.post_messages({:contacts => params["phone_number"], :text => params["messageBody"]})
  end

  private
  def contact_params
    params.require(:contacts).permit(:name, :phone_number)
  end

end