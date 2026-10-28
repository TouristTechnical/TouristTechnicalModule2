TOURISTTECHNICAL AUTHENTICATION STARTER

Included files:
- supabase-config.js: set your Supabase project URL and publishable/anon key.
- register.html: customer sign-up (stores full_name and username in auth user metadata).
- forgot-password.html: sends reset email with redirect to update-password.html.
- update-password.html: lets the user set a new password.
- auth.css: basic styling.
- profiles-trigger.sql: optional trigger SQL to create public.profiles rows on signup.

IMPORTANT
1. Upload these files to the root of TouristTechnicalModule2 (same folder as index.html).
2. Edit supabase-config.js. Use Project URL and publishable/anon key only. NEVER use service_role/secret key or SMTP password in browser code.
3. In Supabase Auth > URL Configuration, add the GitHub Pages URL and the exact update-password.html URL to Redirect URLs.
4. The registration page assumes the public.profiles columns are id, username, full_name, role, created_at. Review profiles-trigger.sql before running it. If you already have an auth.users trigger that creates profiles, do not add a second trigger; ensure the existing trigger sets role to customer and reads full_name/username metadata.
5. Existing index.html login is not changed by this starter. Add links to register.html and forgot-password.html from your existing login page, or provide index.html and I can integrate them without replacing your design.
6. Admin role must be assigned only by an authorized database/admin process. Never let public registration choose the role.
7. Test after GitHub Pages finishes deploying. Use a real email inbox, check spam, and verify your Resend sender/domain configuration if delivery fails.
