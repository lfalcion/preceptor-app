var e=`-- Migration 030: Backfill expansion reading passages 37-42.
--
-- Migrations 027 and 028 were amended after they had already run on existing databases,
-- so their INSERT OR IGNORE for passages 37-42 never executed on those installs.
-- Migration 029 (passage_exercises) has a FK dependency on these passages existing.
-- This migration safely re-inserts them (INSERT OR IGNORE is a no-op on fresh installs).

INSERT OR IGNORE INTO reading_passages (id, title, sort_order, language_code) VALUES
  (37, 'Clausewitz: On the Nature of War',               4, 'st'),
  (38, 'The Prisoner''s Dilemma and the Logic of Trust', 5, 'st'),
  (39, 'Porter: What Is Strategy?',                      6, 'st');

INSERT OR IGNORE INTO reading_passages (id, title, sort_order, language_code) VALUES
  (40, 'Newport: Deep Work in the Age of Distraction',   4, 'si'),
  (41, 'Csikszentmihalyi: The Anatomy of Flow',          5, 'si'),
  (42, 'Munger: The Psychology of Human Misjudgment',    6, 'si');
`;export{e as default};
