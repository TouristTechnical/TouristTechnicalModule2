(function () {
  const SUPABASE_URL = 'https://oghcvfqkfhdvnmzlvydt.supabase.co';

  // Use your Supabase publishable key or legacy anon key.
  const SUPABASE_ANON_KEY = 'sb_publishable_rS0dOWiYK_j6jcS9vpNp0Q_A2I2VoYz';

  if (!window.supabase) {
    console.error('Supabase library did not load.');
    return;
  }

  window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );
})();

