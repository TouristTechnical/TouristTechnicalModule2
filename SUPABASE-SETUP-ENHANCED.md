# TouristTechnical enhanced setup notes

## What is included in this ZIP
- Existing TouristTechnical visual design, navigation, destinations and package pages are retained.
- Enhanced reservation page: airport/terminal and flight details, pickup/drop-off points and schedule, vehicle selection/capacity, hotel/room selection, dates/room count, restaurant/meal choices, quantity, special requests, and itemized live estimate.
- Enhanced billing: GCash, Maya, bank transfer and QR Ph instruction slots; PNG/JPG/JPEG proof upload; payment stays pending until an admin reviews it. Card entry is deliberately disabled until a real secure gateway is configured.
- Enhanced admin view: reservations, service catalog JSON editing, payment account settings, proof review/approval/rejection with reason, CSV report.
- `supabase/schema.sql`: starter shared database schema with RLS policies for catalogs, reservations, meals, payments and payment settings.

## Important status: front-end demo vs shared backend
The current page workflows save bookings, catalog edits and payment proof previews in this browser's `localStorage`. This is a functional demonstration, but records do NOT yet synchronize across customer devices or different browsers. The included SQL creates the database foundation; the front-end has not yet been migrated to read/write those tables. Do not present the current localStorage workflow as a live multi-user production booking system or accept real payments.

## Configure Supabase
1. In Supabase SQL Editor, first inspect `public.profiles` and confirm it has `id uuid` linked to `auth.users` and `role` values `customer` / `admin`.
2. Run `supabase/schema.sql`. If your `profiles` structure differs, adjust `public.tt_is_admin()` to match it before running the RLS policies.
3. In Storage, create a **private** bucket named `tt-payment-proofs`. Do not make proof images public. Add authenticated owner-folder upload/read policies and admin review access before using it.
4. Keep the Supabase publishable key in `supabase-config.js`. Never put a `sb_secret_` or service-role key in this repository.
5. Add the deployed Pages URL to Supabase Authentication → URL Configuration → Redirect URLs.

## Before real payment / real travel use
- Replace sample vehicle, hotel, room, restaurant, food, price, availability, QR and bank details with verified operator information. Sample catalog values are not confirmed supplier offers.
- Add database-side transactional availability checks to prevent two customers booking the same room/vehicle concurrently.
- Move payment-proof uploads from localStorage to the private Storage bucket.
- Configure card payments through a verified gateway (e.g. PayMongo) using server-side checkout creation and webhook verification. Never collect card number, expiry or CVV in this static site.
- Verify every transfer in the receiving account before admin marks a payment paid. A screenshot alone is not proof of funds.
- Issue a receipt only after verification. A completed trip is a separate status from paid payment.
