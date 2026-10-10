var e=`-- 037: daily assignment (two fixed slots per assignment day, 07:00 boundary) and regimen log.
-- See docs/architecture/2026-10-02-assignment-spec.md

CREATE TABLE IF NOT EXISTS daily_assignment (
    plan_date     TEXT    NOT NULL,
    slot          INTEGER NOT NULL,
    item_type     TEXT    NOT NULL,
    item_ref      TEXT    NOT NULL,
    module_code   TEXT,
    sentence      TEXT    NOT NULL,
    meta          TEXT    NOT NULL,
    swapped_from  TEXT,
    issued_at     INTEGER NOT NULL,
    completed_at  INTEGER,
    PRIMARY KEY (plan_date, slot)
);

CREATE TABLE IF NOT EXISTS regimen_log (
    id             INTEGER PRIMARY KEY,
    regimen_id     TEXT    NOT NULL,
    plan_date      TEXT    NOT NULL,
    completed_date TEXT    NOT NULL,
    completed_at   INTEGER NOT NULL,
    UNIQUE (regimen_id, completed_date)
);

CREATE INDEX IF NOT EXISTS idx_regimen_log_regimen ON regimen_log(regimen_id, completed_date);
`;export{e as default};
