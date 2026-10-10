var a=`-- Migration 010: Add language_code to content and progress tables; add target_word to vocabulary_items; add settings table.

ALTER TABLE grammar_lessons ADD COLUMN language_code TEXT NOT NULL DEFAULT 'ru';
ALTER TABLE vocabulary_items ADD COLUMN language_code TEXT NOT NULL DEFAULT 'ru';
ALTER TABLE reading_passages ADD COLUMN language_code TEXT NOT NULL DEFAULT 'ru';
ALTER TABLE exercises ADD COLUMN language_code TEXT NOT NULL DEFAULT 'ru';

ALTER TABLE vocab_progress ADD COLUMN language_code TEXT NOT NULL DEFAULT 'ru';
ALTER TABLE lesson_progress ADD COLUMN language_code TEXT NOT NULL DEFAULT 'ru';
ALTER TABLE reading_progress ADD COLUMN language_code TEXT NOT NULL DEFAULT 'ru';

ALTER TABLE vocabulary_items ADD COLUMN target_word TEXT NOT NULL DEFAULT '';
UPDATE vocabulary_items SET target_word = cyrillic WHERE target_word = '';

CREATE TABLE IF NOT EXISTS settings (
  key   TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
INSERT OR IGNORE INTO settings VALUES ('active_language', 'ru');

CREATE INDEX IF NOT EXISTS idx_vocab_lang ON vocabulary_items(language_code);
CREATE INDEX IF NOT EXISTS idx_grammar_lang ON grammar_lessons(language_code);
CREATE INDEX IF NOT EXISTS idx_passages_lang ON reading_passages(language_code);
CREATE INDEX IF NOT EXISTS idx_exercises_lang ON exercises(language_code);
CREATE INDEX IF NOT EXISTS idx_vocab_progress_lang ON vocab_progress(language_code);
CREATE INDEX IF NOT EXISTS idx_lesson_progress_lang ON lesson_progress(language_code, lesson_id);
`;export{a as default};
