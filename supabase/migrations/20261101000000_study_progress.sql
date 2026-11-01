-- The application must validate and grade answers before saving them.
create table public.study_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  completed text[] not null default '{}',
  bookmarks text[] not null default '{}',
  last_read text,
  version bigint not null default 1 check (version > 0),
  updated_at timestamptz not null default now()
);

create table public.quiz_attempts (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  exam_slug text not null check (exam_slug ~ '^practice-exam-[0-9]+$'),
  quiz_revision text not null,
  status text not null check (status in ('in_progress', 'completed', 'abandoned')),
  question_index integer not null default 0 check (question_index >= 0),
  correct integer check (correct >= 0),
  total integer check (total > 0 and (correct is null or correct <= total)),
  imported boolean not null default false,
  started_at timestamptz,
  finished_at timestamptz,
  updated_at timestamptz not null default now(),
  version bigint not null default 1 check (version > 0),
  unique (id, user_id)
);

create index quiz_attempts_user_exam_idx on public.quiz_attempts (user_id, exam_slug);

create table public.quiz_responses (
  attempt_id uuid not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id integer not null check (question_id > 0),
  selected text[] not null default '{}',
  checked_at timestamptz,
  is_correct boolean,
  primary key (attempt_id, question_id),
  foreign key (attempt_id, user_id) references public.quiz_attempts(id, user_id) on delete cascade,
  check (checked_at is null or is_correct is not null)
);

alter table public.study_progress enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.quiz_responses enable row level security;

create policy study_progress_owner on public.study_progress for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy quiz_attempts_owner on public.quiz_attempts for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy quiz_responses_owner on public.quiz_responses for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
