require("dotenv").config();
const stripe = require("stripe")('sk_test_51MEZXdCng4UrIDms2QylLUiN3tLhhySCQwnhn9Nev2bvnJHBetMBrbN3O8kohcKU8CoIa21hbaOeHSMnUOeaS5QJ00p5B2oiXz');

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "ihr",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
