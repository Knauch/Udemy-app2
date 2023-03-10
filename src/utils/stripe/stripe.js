import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
    'pk_test_51MEZXdCng4UrIDmsD7XqKksmbLyGafDboUbCTUpOBAqtrO0BWovbGUHC5zJFDjjbhMVuJ6DgmfxcITC9KYheiUPP00iz3D6BSQ'
)