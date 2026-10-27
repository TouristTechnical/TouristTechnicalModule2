# Supabase connection notes for TouristTechnical

## Browser key
1. Open Project Settings → API Keys.
2. Copy the **Publishable key** (`sb_publishable_...`) into `supabase-config.js` where it says `PASTE_YOUR_SB_PUBLISHABLE_KEY_HERE`.
3. Never use a Secret key (`sb_secret_...`) in browser code or GitHub.

## Login format
The website signs in with Supabase Auth using `username@touristtechnical.test` internally. Customers type only their username, for example `customerdavid`; they do not type the synthetic email. It then reads the role from `profiles`.

## Important current limitation
This revision connects the login form to Supabase Auth, but reservations, package editing, and payment records are still browser-prototype data until their CRUD actions are connected to Supabase. Do not use this as a live payment system.

## GCash QR
Replace `assets/gcash-qr-placeholder.svg` with your own official GCash QR image and update the `src` in `billingPage()` to the actual image filename. The included placeholder is not a payment QR and must not be used to transfer money.

## More fields needed for full database integration
The current `reservations` table does not yet have pickup/drop-off, guide, transport, special request, or itemized total columns. The current `payments` table does not store payment amount or payer name. These fields must be added with a reviewed SQL migration before the website can save them to Supabase.
