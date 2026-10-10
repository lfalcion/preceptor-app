var L=`-- Migration 003: Add real columns to vocabulary_items stub.
-- All columns use DEFAULT values so this is safe on existing (empty or populated) tables.
-- SQLite requires one ADD COLUMN per ALTER TABLE statement.

ALTER TABLE vocabulary_items ADD COLUMN cyrillic TEXT NOT NULL DEFAULT '';
ALTER TABLE vocabulary_items ADD COLUMN english TEXT NOT NULL DEFAULT '';
ALTER TABLE vocabulary_items ADD COLUMN transliteration TEXT NOT NULL DEFAULT '';
ALTER TABLE vocabulary_items ADD COLUMN part_of_speech TEXT NOT NULL DEFAULT '';
ALTER TABLE vocabulary_items ADD COLUMN category TEXT NOT NULL DEFAULT '';
ALTER TABLE vocabulary_items ADD COLUMN sort_order INTEGER NOT NULL DEFAULT 0;
`;export{L as default};
