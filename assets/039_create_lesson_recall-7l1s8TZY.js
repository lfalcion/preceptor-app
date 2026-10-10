var e=`-- 039: two-step critique (kind of response) and retrieval-first review (lesson_recall).
-- See docs/ideas/2026-10-03-notebook-paradigm.md, Phase A.

ALTER TABLE lesson_response ADD COLUMN kind TEXT NOT NULL DEFAULT 'line';

CREATE TABLE IF NOT EXISTS lesson_recall (
    id             INTEGER PRIMARY KEY,
    lesson_id      INTEGER NOT NULL REFERENCES grammar_lessons(id),
    language_code  TEXT    NOT NULL,
    review_count   INTEGER NOT NULL,
    claim          TEXT,
    support        TEXT,
    critique       TEXT,
    instruction    TEXT,
    skipped        INTEGER NOT NULL DEFAULT 0,
    written_at     INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_lesson_recall_lesson ON lesson_recall(lesson_id, written_at);
`;export{e as default};
