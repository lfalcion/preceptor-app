var E=`CREATE TABLE IF NOT EXISTS reading_passages (
    id         INTEGER PRIMARY KEY,
    title      TEXT    NOT NULL,
    sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS reading_progress (
    id         INTEGER PRIMARY KEY,
    passage_id INTEGER NOT NULL REFERENCES reading_passages(id),
    read_at    INTEGER NOT NULL,
    UNIQUE(passage_id)
);
`;export{E as default};
