alter table public.study_progress add column snapshot jsonb not null default '{}'::jsonb;
grant select, insert, update on public.study_progress to authenticated;
grant select, insert, update on public.quiz_attempts to authenticated;
grant select, insert, update on public.quiz_responses to authenticated;
