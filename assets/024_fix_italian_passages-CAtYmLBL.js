var a=`-- Migration 024: Fix Italian reading passages missing from DB.
-- The original migration 011 guard (italian_lesson_count == 0) skipped the
-- reading_passages INSERT on databases where Italian lessons were already seeded.
-- This migration is unconditional and uses INSERT OR IGNORE, so it is idempotent.

INSERT OR IGNORE INTO reading_passages (id, title, sort_order, language_code) VALUES
  (4, 'Mi chiamo Marco',  1, 'it'),
  (5, 'La mia famiglia',  2, 'it'),
  (6, 'A scuola',         3, 'it');
`;export{a as default};
