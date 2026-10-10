var E=`CREATE TABLE IF NOT EXISTS vocabulary_items (
    id          INTEGER PRIMARY KEY,
    created_at  INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
);

CREATE TABLE IF NOT EXISTS grammar_lessons (
    id              INTEGER PRIMARY KEY,
    title           TEXT    NOT NULL,
    description     TEXT    NOT NULL,
    sort_order      INTEGER NOT NULL DEFAULT 0,
    is_active       INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS exercises (
    id              INTEGER PRIMARY KEY,
    lesson_id       INTEGER NOT NULL REFERENCES grammar_lessons(id),
    exercise_type   TEXT    NOT NULL DEFAULT 'mcq_cyrillic_to_latin',
    prompt          TEXT    NOT NULL,
    correct_option  TEXT    NOT NULL,
    letter_name_ru  TEXT    NOT NULL,
    pronunciation_hint TEXT NOT NULL,
    sort_order      INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS exercise_options (
    id              INTEGER PRIMARY KEY,
    exercise_id     INTEGER NOT NULL REFERENCES exercises(id),
    option_text     TEXT    NOT NULL,
    is_correct      INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS lesson_progress (
    id              INTEGER PRIMARY KEY,
    lesson_id       INTEGER NOT NULL REFERENCES grammar_lessons(id),
    session_start   INTEGER NOT NULL,
    session_end     INTEGER,
    passed          INTEGER NOT NULL DEFAULT 0,
    score_correct   INTEGER NOT NULL DEFAULT 0,
    score_total     INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS exercise_attempts (
    id                  INTEGER PRIMARY KEY,
    lesson_progress_id  INTEGER NOT NULL REFERENCES lesson_progress(id),
    exercise_id         INTEGER NOT NULL REFERENCES exercises(id),
    chosen_option       TEXT    NOT NULL,
    is_correct          INTEGER NOT NULL DEFAULT 0,
    attempted_at        INTEGER NOT NULL
);
`;export{E as default};
