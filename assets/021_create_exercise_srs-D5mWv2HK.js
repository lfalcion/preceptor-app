var e=`-- Migration 021: Exercise-level SRS for practice mode
CREATE TABLE IF NOT EXISTS exercise_srs (
    id              INTEGER PRIMARY KEY,
    exercise_id     INTEGER NOT NULL UNIQUE REFERENCES exercises(id),
    language_code   TEXT    NOT NULL,
    ease_factor     REAL    NOT NULL DEFAULT 2.5,
    interval_days   INTEGER NOT NULL DEFAULT 1,
    due_date        INTEGER NOT NULL DEFAULT 0,
    review_count    INTEGER NOT NULL DEFAULT 0,
    last_result     INTEGER NOT NULL DEFAULT 0,
    last_reviewed   INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_exercise_srs_due
    ON exercise_srs(language_code, due_date);

CREATE INDEX IF NOT EXISTS idx_exercise_srs_exercise
    ON exercise_srs(exercise_id);

-- Backfill from exercise_attempts so existing users have practice content immediately
INSERT OR IGNORE INTO exercise_srs (exercise_id, language_code, ease_factor, interval_days, due_date, review_count, last_result, last_reviewed)
SELECT
    ea.exercise_id,
    gl.language_code,
    2.5,
    CASE WHEN ea.is_correct = 1 THEN 3 ELSE 1 END,
    ea.attempted_at + CASE WHEN ea.is_correct = 1 THEN (3 * 86400) ELSE 86400 END,
    1,
    ea.is_correct,
    ea.attempted_at
FROM exercise_attempts ea
JOIN exercises e ON e.id = ea.exercise_id
JOIN grammar_lessons gl ON gl.id = e.lesson_id
JOIN (
    SELECT exercise_id, MAX(attempted_at) AS max_at
    FROM exercise_attempts
    GROUP BY exercise_id
) latest ON latest.exercise_id = ea.exercise_id AND latest.max_at = ea.attempted_at;
`;export{e as default};
