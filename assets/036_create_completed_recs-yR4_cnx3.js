var e=`CREATE TABLE IF NOT EXISTS completed_recs (
    id INTEGER PRIMARY KEY,
    rec_key TEXT NOT NULL,
    completed_date TEXT NOT NULL,
    completed_at INTEGER NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_completed_recs_key_date
    ON completed_recs(rec_key, completed_date);
`;export{e as default};
