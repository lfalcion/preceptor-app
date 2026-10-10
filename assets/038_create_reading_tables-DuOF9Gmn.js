var n=`-- 038: reading lessons — the learner's own line and bring-your-own-copy text.
-- User data only; extracts and commentary live in src/data/readings/ as markdown.
-- See docs/architecture/2026-10-03-reading-spec.md

CREATE TABLE IF NOT EXISTS lesson_response (
    id             INTEGER PRIMARY KEY,
    lesson_id      INTEGER NOT NULL REFERENCES grammar_lessons(id),
    language_code  TEXT    NOT NULL,
    question       TEXT    NOT NULL,
    body           TEXT    NOT NULL,
    written_at     INTEGER NOT NULL,
    superseded_at  INTEGER
);
CREATE INDEX IF NOT EXISTS idx_lesson_response_lesson ON lesson_response(lesson_id, written_at);

CREATE TABLE IF NOT EXISTS user_extract (
    lesson_id      INTEGER PRIMARY KEY REFERENCES grammar_lessons(id),
    title          TEXT    NOT NULL,
    body           TEXT    NOT NULL,
    added_at       INTEGER NOT NULL
);
`;export{n as default};
