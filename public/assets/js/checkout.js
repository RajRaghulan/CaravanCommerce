const stripe = require('stripe')('sk_test_51Hq3XbDZD8uKIYCGdPern6YFjR4HxxIJTk4qKJoppiziYLTIE4R3KM3dZ7C9kHqbDvZrH6t2KkRWFHyt1MY4zIF600BOoWXDNO');
const express = require('express');
const app = express();
app.use(express.static('.'));
const YOUR_DOMAIN = 'http://localhost:4242';
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `$caravancommerce.com/success.html`,
    cancel_url: `$caravancommerce.com/cancel.html`,
  });
  res.json({ id: session.id });
});
app.listen(4242, () => console.log('Running on port 4242'));
