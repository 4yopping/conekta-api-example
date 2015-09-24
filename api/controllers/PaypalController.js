/**
* PaypalController
*
* @description :: Server-side logic for managing Paypal
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
  index: function(req, res){
    return res.view('paypal');
  },

  checkout: function(req, res) {
    var paypal = require('paypal-express-checkout').init('finance-facilitator_api1.btcoin.mx', 'S8ZWDR4DJ3FEW2CP', 'AFcWxV21C7fd0v3bYYYRCpSSRl31AkEvw050gmmlOL5cnVeQyB-K8xNl', 'http://localhost:1337/paypal/ok', 'http://localhost:1337/paypal/cancel', true);

    //debug = true;
    // paypal.pay('Invoice nubmer', amout, 'description', 'currency', '(optional) requireAddress: true|false (default)', callback);
    // checkout

    // paypal.pay('20130001', 123.23, 'iPad', 'EUR', function(err, url) {
    // or with "requireAddress": true
    paypal.pay('20130001', 123.23, 'iPad', 'EUR', true, function(err, url) {
      if (err) {
        console.log(err);
        return;
      }

      // redirect to paypal webpage
      res.redirect(url);
    });

    // result in GET method
    // paypal.detail('token', 'PayerID', callback);
    // or
    // paypal.detail(totaljs.controller, callback);

    // paypal.detail('EC-788441863R616634K', '9TM892TKTDWCE', function(err, data, invoiceNumber, price) {
    //
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }

      /*
      data (object) =
      { TOKEN: 'EC-35S39602J3144082X',
      TIMESTAMP: '2013-01-27T08:47:50Z',
      CORRELATIONID: 'e51b76c4b3dc1',
      ACK: 'Success',
      VERSION: '52.0',
      BUILD: '4181146',
      TRANSACTIONID: '87S10228Y4778651P',
      TRANSACTIONTYPE: 'expresscheckout',
      PAYMENTTYPE: 'instant',
      ORDERTIME: '2013-01-27T08:47:49Z',
      AMT: '10.00',
      TAXAMT: '0.00',
      CURRENCYCODE: 'EUR',
      PAYMENTSTATUS: 'Pending',
      PENDINGREASON: 'multicurrency',
      REASONCODE: 'None' };
      */

    //});
  }
};
