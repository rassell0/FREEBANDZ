const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const stripe = require('stripe')('sk_test_51MIBh1CstgMWqkBiG7epfMQBQ0qNu6VgYuT2oJTAduFmB8lWDzRQrhPFOGnwnFEV98t9xdV8UEVx1SlV5MwhP90X00nR9tb9qV');
// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

app.use(bodyParser.json())

app.post('/payment-sheet', async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2022-11-15'}
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: 'usd', 
    customer: customer.id,
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: 'pk_test_51MIBh1CstgMWqkBiKR9WZjR80OmdKKODKJi6QM4L0ZzmViN3Ft7StlIpnqlRPlfFzPduBDa72UOliDRC6QdjcKgF00ZIgZXl9L'
  });
});


app.listen(4001)