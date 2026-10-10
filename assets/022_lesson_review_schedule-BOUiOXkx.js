var e=`-- Migration 022: Lesson review schedule for spaced re-testing of passed lessons
CREATE TABLE IF NOT EXISTS lesson_review_schedule (
    id              INTEGER PRIMARY KEY,
    lesson_id       INTEGER NOT NULL REFERENCES grammar_lessons(id),
    language_code   TEXT    NOT NULL,
    ease_factor     REAL    NOT NULL DEFAULT 2.5,
    interval_days   INTEGER NOT NULL DEFAULT 3,
    due_date        INTEGER NOT NULL,
    review_count    INTEGER NOT NULL DEFAULT 0,
    last_score      INTEGER NOT NULL DEFAULT 0,
    UNIQUE(lesson_id, language_code)
);

CREATE INDEX IF NOT EXISTS idx_lesson_review_due
    ON lesson_review_schedule(due_date, language_code);

-- Backfill for existing passed lessons so existing users have reviews scheduled immediately
INSERT OR IGNORE INTO lesson_review_schedule (lesson_id, language_code, ease_factor, interval_days, due_date, review_count, last_score)
SELECT lp.lesson_id, lp.language_code, 2.5, 3,
       strftime('%s','now') + (3 * 86400), 0, 0
FROM lesson_progress lp
WHERE lp.passed = 1;
`;export{e as default};
