# TouristTechnical — Modules 1 to 4

A responsive academic tourism information and reservation website focused on beach destinations in the Visayas.

## Modules
1. **Selection of places of interest:** Boracay, Cebu, Bohol, Siquijor, Guimaras, and Negros Oriental. Destination photos use destination-specific Wikimedia Commons images where available, with a local fallback illustration if a remote image fails.
2. **Provision of tour packages:** six sample packages with named arrival airports, proposed hotel options, sample itineraries, inclusions, and optional guide/transport fees. Hotel names are suggestions only, not partner bookings; prices and availability must be confirmed.
3. **Reservation:** date, guest count, pickup/drop-off requests, optional guide, private transport request, and pending/confirmed/cancelled/completed statuses.
4. **Payment and billing:** itemized estimated totals, GCash QR placeholder, BPI/BDO/Metrobank/UnionBank/LandBank options, payment reference, and explicit payment/trip status labels.

## Supabase setup
- `supabase-config.js` contains the project URL and a placeholder for the **publishable** key. Paste the `sb_publishable_...` key there before testing login. Never place the `sb_secret_...` key in this repository.
- Login uses the assigned username internally as `username@touristtechnical.test` and reads the role from `profiles`. Customers enter only their username and password.
- Account roles: `customer` and `admin`. The account records must already exist in Supabase Auth and `profiles`.

## Important limitations
- Supabase Auth login is connected when you add the publishable key. However, package edits, reservations, and payments in this revision are still stored in the current browser's `localStorage`; they are not yet shared across devices or accounts. Do not treat browser-stored roles or records as secure access control. The next integration step is to wire all package/reservation/payment reads and writes to Supabase and verify RLS policies.
- Payment methods are for manual proof submission only. This site does not move money, confirm a bank transfer, or issue a legally valid tax invoice. Admin must verify a transaction before marking it **Successful payment**. Mark a reservation **completed** only after the trip has actually taken place; the customer bill then shows **Successful trip**.
- `assets/gcash-qr-placeholder.svg` is a visual placeholder, NOT a valid payment QR. Replace it with your official GCash QR image before any demonstration involving payment. Do not accept payments until the final amount and payee details are confirmed.
- Prices, hotel choices, itinerary details, airport/port transfers, and fees are sample planning information for a school project. They are not confirmed quotations, hotel reservations, or travel partnerships.

## Publish to GitHub Pages
1. Extract the ZIP.
2. Open `https://github.com/TouristTechnical/TouristTechnicalModule2`.
3. Use **Add file → Upload files** and upload the files from inside the extracted folder to the repository root, replacing existing files when prompted. Include the `assets` folder.
4. Commit the changes and wait a few minutes for Pages to update.
5. Before login testing, add your Supabase publishable key to `supabase-config.js`.

See `SUPABASE-NEXT-STEPS.md` for configuration notes.
