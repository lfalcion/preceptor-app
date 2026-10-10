var T=`CREATE TABLE IF NOT EXISTS activity_log (
  id INTEGER PRIMARY KEY,
  language_code TEXT NOT NULL,
  activity_type TEXT NOT NULL,
  reference_id INTEGER,
  completed_at INTEGER NOT NULL,
  items_count INTEGER NOT NULL DEFAULT 0
);
`;export{T as default};
