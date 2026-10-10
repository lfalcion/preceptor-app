var e=`-- Migration 004: Create vocab_progress table for SRS learner state.
-- One row per vocabulary item, created lazily on first review.
-- No user_id column (single-user app).

CREATE TABLE IF NOT EXISTS vocab_progress (
    id INTEGER PRIMARY KEY,
    vocab_id INTEGER NOT NULL UNIQUE REFERENCES vocabulary_items(id),
    ease_factor REAL NOT NULL DEFAULT 2.5,
    interval_days INTEGER NOT NULL DEFAULT 1,
    due_date INTEGER NOT NULL DEFAULT 0,
    review_count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_vocab_progress_due_date ON vocab_progress(due_date);
CREATE INDEX IF NOT EXISTS idx_vocab_progress_vocab_id ON vocab_progress(vocab_id);
`;export{e as default};
