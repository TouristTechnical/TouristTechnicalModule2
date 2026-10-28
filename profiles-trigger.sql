-- OPTIONAL: review your existing triggers first to avoid duplicate profile creation.
-- Assumes public.profiles has: id (uuid referencing auth.users.id), username, full_name, role, created_at.
-- This function always assigns 'customer'; it does not trust role metadata from the browser.

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, username, full_name, role, created_at)
  values (
    new.id,
    nullif(new.raw_user_meta_data ->> 'username', ''),
    nullif(new.raw_user_meta_data ->> 'full_name', ''),
    'customer',
    now()
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

-- Run these trigger lines only if you confirmed there is no existing trigger handling auth.users inserts.
-- create trigger on_auth_user_created
--   after insert on auth.users
--   for each row execute procedure public.handle_new_user();
