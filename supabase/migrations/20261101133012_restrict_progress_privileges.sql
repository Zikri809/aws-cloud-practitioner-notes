revoke all privileges on public.study_progress, public.quiz_attempts, public.quiz_responses from anon, authenticated;
grant select on public.study_progress, public.quiz_attempts, public.quiz_responses to authenticated;
