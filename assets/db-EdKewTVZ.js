var n=`use rusqlite::{Connection, Result};
use std::path::Path;

pub fn open(db_path: &Path) -> Result<Connection> {
    let conn = Connection::open(db_path)?;
    conn.execute_batch("PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON;")?;
    Ok(conn)
}

pub fn run_migrations(conn: &Connection) -> Result<()> {
    let version: i64 = conn.query_row("PRAGMA user_version", [], |r| r.get(0))?;

    if version < 1 {
        // Schema + alphabet seed (001 is idempotent; 002 guards against duplicate seed)
        conn.execute_batch(include_str!("../migrations/001_initial_schema.sql"))?;
        let lesson_count: i64 = conn.query_row(
            "SELECT COUNT(*) FROM grammar_lessons", [], |r| r.get(0),
        )?;
        if lesson_count == 0 {
            conn.execute_batch(include_str!("../migrations/002_seed_alphabet.sql"))?;
        }
        conn.execute_batch("PRAGMA user_version = 1;")?;
    }

    if version < 2 {
        // Expand vocabulary_items columns + vocab_progress table + 100-word seed
        conn.execute_batch(include_str!("../migrations/003_expand_vocabulary_items.sql"))?;
        conn.execute_batch(include_str!("../migrations/004_create_vocab_progress.sql"))?;
        let vocab_count: i64 = conn.query_row(
            "SELECT COUNT(*) FROM vocabulary_items WHERE cyrillic != ''", [], |r| r.get(0),
        )?;
        if vocab_count == 0 {
            conn.execute_batch(include_str!("../migrations/005_seed_a1_vocabulary.sql"))?;
        }
        conn.execute_batch("PRAGMA user_version = 2;")?;
    }

    if version < 3 {
        let grammar_count: i64 = conn.query_row(
            "SELECT COUNT(*) FROM grammar_lessons WHERE id >= 2", [], |r| r.get(0),
        )?;
        if grammar_count == 0 {
            conn.execute_batch(include_str!("../migrations/006_seed_grammar_topics.sql"))?;
            conn.execute_batch(include_str!("../migrations/007_seed_grammar_exercises.sql"))?;
        }
        conn.execute_batch("PRAGMA user_version = 3;")?;
    }

    if version < 4 {
        conn.execute_batch(include_str!("../migrations/008_create_reading_tables.sql"))?;
        let passage_count: i64 = conn.query_row(
            "SELECT COUNT(*) FROM reading_passages WHERE id = 1", [], |r| r.get(0),
        )?;
        if passage_count == 0 {
            conn.execute_batch(include_str!("../migrations/009_seed_reading_passages.sql"))?;
        }
        conn.execute_batch("PRAGMA user_version = 4;")?;
    }

    if version < 5 {
        conn.execute_batch(include_str!("../migrations/010_add_language_support.sql"))?;
        conn.execute_batch("PRAGMA user_version = 5;")?;
    }

    if version < 6 {
        let italian_lesson_count: i64 = conn.query_row(
            "SELECT COUNT(*) FROM grammar_lessons WHERE language_code = 'it'", [], |r| r.get(0),
        )?;
        if italian_lesson_count == 0 {
            conn.execute_batch(include_str!("../migrations/011_seed_italian.sql"))?;
        }
        conn.execute_batch("PRAGMA user_version = 6;")?;
    }

    if version < 7 {
        let philosophy_lesson_count: i64 = conn.query_row(
            "SELECT COUNT(*) FROM grammar_lessons WHERE language_code = 'ph'", [], |r| r.get(0),
        )?;
        if philosophy_lesson_count == 0 {
            conn.execute_batch(include_str!("../migrations/012_seed_philosophy.sql"))?;
        }
        conn.execute_batch("PRAGMA user_version = 7;")?;
    }

    if version < 8 {
        let logic_lesson_count: i64 = conn.query_row(
            "SELECT COUNT(*) FROM grammar_lessons WHERE language_code = 'lo'", [], |r| r.get(0),
        )?;
        if logic_lesson_count == 0 {
            conn.execute_batch(include_str!("../migrations/013_seed_logic.sql"))?;
        }
        conn.execute_batch("PRAGMA user_version = 8;")?;
    }

    if version < 9 {
        conn.execute_batch(include_str!("../migrations/014_create_activity_log.sql"))?;
        conn.execute_batch("PRAGMA user_version = 9;")?;
    }

    if version < 10 {
        let strategy_lesson_count: i64 = conn.query_row(
            "SELECT COUNT(*) FROM grammar_lessons WHERE language_code = 'st'", [], |r| r.get(0),
        )?;
        if strategy_lesson_count == 0 {
            conn.execute_batch(include_str!("../migrations/015_seed_strategy.sql"))?;
        }
        conn.execute_batch("PRAGMA user_version = 10;")?;
    }

    if version < 11 {
        let si_lesson_count: i64 = conn.query_row(
            "SELECT COUNT(*) FROM grammar_lessons WHERE language_code = 'si'", [], |r| r.get(0),
        )?;
        if si_lesson_count == 0 {
            conn.execute_batch(include_str!("../migrations/016_seed_self_improvement.sql"))?;
        }
        conn.execute_batch("PRAGMA user_version = 11;")?;
    }

    if version < 12 {
        let ps_lesson_count: i64 = conn.query_row(
            "SELECT COUNT(*) FROM grammar_lessons WHERE language_code = 'ps'", [], |r| r.get(0),
        )?;
        if ps_lesson_count == 0 {
            conn.execute_batch(include_str!("../migrations/017_seed_psychology.sql"))?;
        }
        conn.execute_batch("PRAGMA user_version = 12;")?;
    }

    if version < 13 {
        let el_lesson_count: i64 = conn.query_row(
            "SELECT COUNT(*) FROM grammar_lessons WHERE language_code = 'el'", [], |r| r.get(0),
        )?;
        if el_lesson_count == 0 {
            conn.execute_batch(include_str!("../migrations/019_seed_eloquence.sql"))?;
        }
        conn.execute_batch("PRAGMA user_version = 13;")?;
    }

    if version < 14 {
        let bt_lesson_count: i64 = conn.query_row(
            "SELECT COUNT(*) FROM grammar_lessons WHERE language_code = 'bt'", [], |r| r.get(0),
        )?;
        if bt_lesson_count == 0 {
            conn.execute_batch(include_str!("../migrations/020_seed_brain_teasers.sql"))?;
        }
        conn.execute_batch("PRAGMA user_version = 14;")?;
    }

    if version < 15 {
        let hi_lesson_count: i64 = conn.query_row(
            "SELECT COUNT(*) FROM grammar_lessons WHERE language_code = 'hi'", [], |r| r.get(0),
        )?;
        if hi_lesson_count == 0 {
            conn.execute_batch(include_str!("../migrations/018_seed_history.sql"))?;
        }
        conn.execute_batch("PRAGMA user_version = 15;")?;
    }

    if version < 16 {
        conn.execute_batch(include_str!("../migrations/021_create_exercise_srs.sql"))?;
        conn.execute_batch("PRAGMA user_version = 16;")?;
    }

    if version < 17 {
        conn.execute_batch(include_str!("../migrations/022_lesson_review_schedule.sql"))?;
        conn.execute_batch("PRAGMA user_version = 17;")?;
    }

    if version < 18 {
        // Ensure Italian passages exist before passage_exercises seeds them (024 is idempotent)
        conn.execute_batch(include_str!("../migrations/024_fix_italian_passages.sql"))?;
        conn.execute_batch(include_str!("../migrations/023_passage_exercises.sql"))?;
        conn.execute_batch("PRAGMA user_version = 18;")?;
    }

    if version < 19 {
        conn.execute_batch(include_str!("../migrations/024_fix_italian_passages.sql"))?;
        conn.execute_batch("PRAGMA user_version = 19;")?;
    }

    if version < 20 {
        conn.execute_batch(include_str!("../migrations/025_seed_philosophy_expansion.sql"))?;
        conn.execute_batch("PRAGMA user_version = 20;")?;
    }

    if version < 21 {
        conn.execute_batch(include_str!("../migrations/026_seed_logic_expansion.sql"))?;
        conn.execute_batch("PRAGMA user_version = 21;")?;
    }

    if version < 22 {
        conn.execute_batch(include_str!("../migrations/027_seed_strategy_expansion.sql"))?;
        conn.execute_batch("PRAGMA user_version = 22;")?;
    }

    if version < 23 {
        conn.execute_batch(include_str!("../migrations/028_seed_self_improvement_expansion.sql"))?;
        conn.execute_batch("PRAGMA user_version = 23;")?;
    }

    if version < 24 {
        // Backfill passages 37-42 that were added to migrations 027/028 after those had
        // already run on existing databases. Safe no-op (INSERT OR IGNORE) on fresh installs.
        conn.execute_batch(include_str!("../migrations/030_backfill_expansion_passages.sql"))?;
        conn.execute_batch("PRAGMA user_version = 24;")?;
    }

    if version < 25 {
        conn.execute_batch(include_str!("../migrations/029_expansion_passage_exercises.sql"))?;
        conn.execute_batch("PRAGMA user_version = 25;")?;
    }

    if version < 26 {
        conn.execute_batch(include_str!("../migrations/031_seed_modern_ethics.sql"))?;
        conn.execute_batch("PRAGMA user_version = 26;")?;
    }

    if version < 27 {
        conn.execute_batch(include_str!("../migrations/032_seed_economics_finance.sql"))?;
        conn.execute_batch("PRAGMA user_version = 27;")?;
    }

    if version < 28 {
        conn.execute_batch(include_str!("../migrations/033_seed_bt_exercise_options.sql"))?;
        conn.execute_batch("PRAGMA user_version = 28;")?;
    }

    if version < 29 {
        conn.execute_batch(include_str!("../migrations/034_seed_hi_exercise_options.sql"))?;
        conn.execute_batch("PRAGMA user_version = 29;")?;
    }

    if version < 30 {
        conn.execute_batch(include_str!("../migrations/035_seed_el_exercise_options.sql"))?;
        conn.execute_batch("PRAGMA user_version = 30;")?;
    }

    if version < 31 {
        conn.execute_batch(include_str!("../migrations/036_create_completed_recs.sql"))?;
        conn.execute_batch("PRAGMA user_version = 31;")?;
    }

    if version < 32 {
        conn.execute_batch(include_str!("../migrations/037_create_daily_assignment.sql"))?;
        conn.execute_batch("PRAGMA user_version = 32;")?;
    }

    if version < 33 {
        conn.execute_batch(include_str!("../migrations/038_create_reading_tables.sql"))?;
        conn.execute_batch("PRAGMA user_version = 33;")?;
    }

    if version < 34 {
        conn.execute_batch(include_str!("../migrations/039_create_lesson_recall.sql"))?;
        conn.execute_batch("PRAGMA user_version = 34;")?;
    }

    Ok(())
}
`;export{n as default};
