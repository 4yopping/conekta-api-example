/**
 * PaymentController
 *
 * @description :: Server-side logic for managing payments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var conekta = require('conekta');


module.exports = {

	index: function(req, res){
    // Set api key  
    conekta.api_key = sails.config.globals.conektaApiKey;
    conekta.locale = 'es';
		return res.view('payment');
	},

	basic: function(req, res){
		conekta.Charge.create({
		    "description": "Stogies",
		    "amount": 50000,
		    "currency": "MXN",
		    "reference_id": "9839-wolf_pack",
		    "card": "tok_test_visa_4242",
		    "details": {
					"email": "logan@x-men.org",
					"line_items": [{
						"name": "Box of Cohiba S1s",
						"sku": "cohb_s1",
						"unit_price": 20000,
						"description": "Imported from Mex.",
						"quantity": 1,
						"type": "pizza-purchase"
					}]
		    }
			}, function(err, data) {
			    if (err) {
			        res.send(err);
			        return;
			    }
			    res.send(data.toObject());
			});
	},

	advance: function(req, res) {
    var token = req.body.token;
		conekta.Charge.create({
			"description": "Stogies",
			"amount": 50000,
			"currency": "MXN",
			"reference_id": "9839-wolf_pack",
			"card": token,
			"details": {
				"email": "logan@x-men.org",
				"name":"Wolverine",
				"phone":"403-342-0642",
				"date_of_birth":"1980-09-24",
				"billing_address": {
		      "tax_id":"xmn671212drx",
		      "company_name":"X-Men Inc.",
		      "street1":"77 Mystery Lane",
		      "street2":"Suite 124",
		      "city":"Darlington",
		      "state":"NJ",
		      "zip":"10192",
		      "phone":"77-777-7777",
		      "email":"purshasing@x-men.org"
    		},
				"line_items": [{
					"name": "Box of Cohiba S1s",
					"sku": "cohb_s1",
					"unit_price": 20000,
					"description": "Imported from Mex.",
					"quantity": 1,
					"type": "pizza-purchase"
				}]
			}
		}, function(err, data) {
				if (err) {
						res.send(err);
						return;
				}
				res.send(data.toObject());
		});
	},

	get: function(req, res) {
		conekta.Charge.find('55fb07af241229b34b005488', function(err, data) {
			res.send(data.toObject());
		});
	}
};
