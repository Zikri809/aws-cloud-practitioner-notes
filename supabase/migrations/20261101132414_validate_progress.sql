-- Authenticated clients read only their own rows. Writes go through the
-- authenticated application endpoint, which validates and grades the snapshot.
revoke insert, update, delete on public.study_progress from anon, authenticated;
revoke insert, update, delete on public.quiz_attempts from anon, authenticated;
revoke insert, update, delete on public.quiz_responses from anon, authenticated;
