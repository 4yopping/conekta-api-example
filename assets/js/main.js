$( document ).ready(function() {
  Conekta.setPublishableKey("key_N2NAuiK5YDuP7M4aBw4Eyng");
  $('#send').click(function(event){
    event.preventDefault();
    var $form = $("#card-form");
    Conekta.token.create($form, function (conektaSuccessResponseHandler, conektaErrorResponseHandler){

      if(conektaErrorResponseHandler) {
        alert(conektaErrorResponseHandler.message);
      }
      else {
        io.socket.post('/payment/advance', {
          token: conektaSuccessResponseHandler.id
        }, function (resData) {
          alert(resData.status);
        });
      }
    });
  });
});
