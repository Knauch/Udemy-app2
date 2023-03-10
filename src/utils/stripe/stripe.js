import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
    'pk_test_51MEZXdCng4UrIDmsliPNB6kYWrvS0DdGCVM1qJdGdSZH3N65YhRN6SNMzD1jf5n9cae5AUweRV0wP4K0nvlmeChX008T4CPvP2'
)