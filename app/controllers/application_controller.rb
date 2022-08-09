class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    
    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end

    private

    def record_not_found(exception)
        render json: {
                 errors: ["#{exception.model} not found"]
               },
               status: :not_found
      end
    
      def record_invalid(exception)
        render json: {
                 errors: exception.record.errors.full_messages
               },
               status: :unprocessable_entity
      end
end