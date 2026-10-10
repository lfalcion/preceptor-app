var e=`-- Migration 011: Italian A1 seed data — vocabulary, grammar lessons, exercises, reading passages.

-- ---- Vocabulary (100 words, sort_order 101-200) ----

INSERT OR IGNORE INTO vocabulary_items (cyrillic, target_word, english, transliteration, part_of_speech, sort_order, language_code) VALUES
-- Greetings and basics (101-110)
('ciao', 'hello / bye', 'hello / bye', 'CHAH-oh', 'interjection', 101, 'it'),
('buongiorno', 'good morning', 'good morning', 'bwon-JOR-no', 'interjection', 102, 'it'),
('buonasera', 'good evening', 'good evening', 'bwoh-na-SAY-ra', 'interjection', 103, 'it'),
('arrivederci', 'goodbye', 'goodbye', 'ah-ree-veh-DER-chee', 'interjection', 104, 'it'),
('grazie', 'thank you', 'thank you', 'GRAT-syeh', 'interjection', 105, 'it'),
('prego', 'you''re welcome', 'you''re welcome', 'PREH-go', 'interjection', 106, 'it'),
('scusa', 'excuse me', 'excuse me', 'SKOO-za', 'interjection', 107, 'it'),
('per favore', 'please', 'please', 'pehr fa-VOH-reh', 'phrase', 108, 'it'),
('sì', 'yes', 'yes', 'SEE', 'adverb', 109, 'it'),
('no', 'no', 'no', 'NO', 'adverb', 110, 'it'),

-- Numbers 1-20 (111-130)
('uno', 'one', 'one', 'OO-no', 'numeral', 111, 'it'),
('due', 'two', 'two', 'DOO-eh', 'numeral', 112, 'it'),
('tre', 'three', 'three', 'TREH', 'numeral', 113, 'it'),
('quattro', 'four', 'four', 'KWAT-tro', 'numeral', 114, 'it'),
('cinque', 'five', 'five', 'CHEEN-kweh', 'numeral', 115, 'it'),
('sei', 'six', 'six', 'SAY', 'numeral', 116, 'it'),
('sette', 'seven', 'seven', 'SET-teh', 'numeral', 117, 'it'),
('otto', 'eight', 'eight', 'OT-to', 'numeral', 118, 'it'),
('nove', 'nine', 'nine', 'NO-veh', 'numeral', 119, 'it'),
('dieci', 'ten', 'ten', 'DYEH-chee', 'numeral', 120, 'it'),
('undici', 'eleven', 'eleven', 'OON-dee-chee', 'numeral', 121, 'it'),
('dodici', 'twelve', 'twelve', 'DO-dee-chee', 'numeral', 122, 'it'),
('tredici', 'thirteen', 'thirteen', 'TREH-dee-chee', 'numeral', 123, 'it'),
('quattordici', 'fourteen', 'fourteen', 'kwat-TOR-dee-chee', 'numeral', 124, 'it'),
('quindici', 'fifteen', 'fifteen', 'KWEEN-dee-chee', 'numeral', 125, 'it'),
('sedici', 'sixteen', 'sixteen', 'SEH-dee-chee', 'numeral', 126, 'it'),
('diciassette', 'seventeen', 'seventeen', 'dee-cha-SET-teh', 'numeral', 127, 'it'),
('diciotto', 'eighteen', 'eighteen', 'dee-CHOT-to', 'numeral', 128, 'it'),
('diciannove', 'nineteen', 'nineteen', 'dee-cha-NO-veh', 'numeral', 129, 'it'),
('venti', 'twenty', 'twenty', 'VEN-tee', 'numeral', 130, 'it'),

-- Days of the week (131-137)
('lunedì', 'Monday', 'Monday', 'loo-neh-DEE', 'noun', 131, 'it'),
('martedì', 'Tuesday', 'Tuesday', 'mar-teh-DEE', 'noun', 132, 'it'),
('mercoledì', 'Wednesday', 'Wednesday', 'mer-ko-leh-DEE', 'noun', 133, 'it'),
('giovedì', 'Thursday', 'Thursday', 'jo-veh-DEE', 'noun', 134, 'it'),
('venerdì', 'Friday', 'Friday', 'veh-ner-DEE', 'noun', 135, 'it'),
('sabato', 'Saturday', 'Saturday', 'SAH-ba-to', 'noun', 136, 'it'),
('domenica', 'Sunday', 'Sunday', 'do-MEH-nee-ka', 'noun', 137, 'it'),

-- Family members (138-145)
('madre', 'mother', 'mother', 'MAH-dreh', 'noun', 138, 'it'),
('padre', 'father', 'father', 'PAH-dreh', 'noun', 139, 'it'),
('fratello', 'brother', 'brother', 'fra-TEL-lo', 'noun', 140, 'it'),
('sorella', 'sister', 'sister', 'so-REL-la', 'noun', 141, 'it'),
('figlio', 'son', 'son', 'FEEL-yo', 'noun', 142, 'it'),
('figlia', 'daughter', 'daughter', 'FEEL-ya', 'noun', 143, 'it'),
('nonno', 'grandfather', 'grandfather', 'NON-no', 'noun', 144, 'it'),
('nonna', 'grandmother', 'grandmother', 'NON-na', 'noun', 145, 'it'),

-- Colors (146-153)
('rosso', 'red', 'red', 'ROS-so', 'adjective', 146, 'it'),
('blu', 'blue', 'blue', 'BLOO', 'adjective', 147, 'it'),
('verde', 'green', 'green', 'VER-deh', 'adjective', 148, 'it'),
('giallo', 'yellow', 'yellow', 'JAL-lo', 'adjective', 149, 'it'),
('bianco', 'white', 'white', 'BYAN-ko', 'adjective', 150, 'it'),
('nero', 'black', 'black', 'NEH-ro', 'adjective', 151, 'it'),
('arancione', 'orange', 'orange', 'a-ran-CHOH-neh', 'adjective', 152, 'it'),
('viola', 'purple', 'purple', 'VYOH-la', 'adjective', 153, 'it'),

-- Common verbs (154-163)
('essere', 'to be', 'to be', 'ES-seh-reh', 'verb', 154, 'it'),
('avere', 'to have', 'to have', 'a-VEH-reh', 'verb', 155, 'it'),
('fare', 'to do / make', 'to do / make', 'FAH-reh', 'verb', 156, 'it'),
('andare', 'to go', 'to go', 'an-DAH-reh', 'verb', 157, 'it'),
('venire', 'to come', 'to come', 'veh-NEE-reh', 'verb', 158, 'it'),
('mangiare', 'to eat', 'to eat', 'man-JAH-reh', 'verb', 159, 'it'),
('bere', 'to drink', 'to drink', 'BEH-reh', 'verb', 160, 'it'),
('parlare', 'to speak', 'to speak', 'par-LAH-reh', 'verb', 161, 'it'),
('capire', 'to understand', 'to understand', 'ka-PEE-reh', 'verb', 162, 'it'),
('volere', 'to want', 'to want', 'vo-LEH-reh', 'verb', 163, 'it'),

-- Food (164-171)
('pane', 'bread', 'bread', 'PAH-neh', 'noun', 164, 'it'),
('acqua', 'water', 'water', 'AK-kwa', 'noun', 165, 'it'),
('caffè', 'coffee', 'coffee', 'kaf-FEH', 'noun', 166, 'it'),
('latte', 'milk', 'milk', 'LAT-teh', 'noun', 167, 'it'),
('pasta', 'pasta', 'pasta', 'PAS-ta', 'noun', 168, 'it'),
('pizza', 'pizza', 'pizza', 'PEET-tsa', 'noun', 169, 'it'),
('mela', 'apple', 'apple', 'MEH-la', 'noun', 170, 'it'),
('vino', 'wine', 'wine', 'VEE-no', 'noun', 171, 'it'),

-- Body parts (172-178)
('testa', 'head', 'head', 'TES-ta', 'noun', 172, 'it'),
('occhio', 'eye', 'eye', 'OK-kyo', 'noun', 173, 'it'),
('mano', 'hand', 'hand', 'MAH-no', 'noun', 174, 'it'),
('piede', 'foot', 'foot', 'PYEH-deh', 'noun', 175, 'it'),
('bocca', 'mouth', 'mouth', 'BOK-ka', 'noun', 176, 'it'),
('naso', 'nose', 'nose', 'NAH-zo', 'noun', 177, 'it'),
('orecchio', 'ear', 'ear', 'o-REK-kyo', 'noun', 178, 'it'),

-- Places (179-185)
('casa', 'house / home', 'house / home', 'KAH-za', 'noun', 179, 'it'),
('scuola', 'school', 'school', 'SKWOH-la', 'noun', 180, 'it'),
('città', 'city', 'city', 'cheet-TAH', 'noun', 181, 'it'),
('negozio', 'shop', 'shop', 'neh-GOH-tsyo', 'noun', 182, 'it'),
('bar', 'café / bar', 'café / bar', 'BAR', 'noun', 183, 'it'),
('ristorante', 'restaurant', 'restaurant', 'rees-to-RAN-teh', 'noun', 184, 'it'),
('stazione', 'station', 'station', 'sta-TSYOH-neh', 'noun', 185, 'it'),

-- Common adjectives (186-193)
('grande', 'big', 'big', 'GRAN-deh', 'adjective', 186, 'it'),
('piccolo', 'small', 'small', 'PEEK-ko-lo', 'adjective', 187, 'it'),
('bello', 'beautiful', 'beautiful', 'BEL-lo', 'adjective', 188, 'it'),
('buono', 'good', 'good', 'BWOH-no', 'adjective', 189, 'it'),
('nuovo', 'new', 'new', 'NWOH-vo', 'adjective', 190, 'it'),
('vecchio', 'old', 'old', 'VEK-kyo', 'adjective', 191, 'it'),
('caldo', 'hot / warm', 'hot / warm', 'KAL-do', 'adjective', 192, 'it'),
('freddo', 'cold', 'cold', 'FRED-do', 'adjective', 193, 'it'),

-- Months (194-200)
('gennaio', 'January', 'January', 'jen-NAH-yo', 'noun', 194, 'it'),
('febbraio', 'February', 'February', 'feb-BRAH-yo', 'noun', 195, 'it'),
('marzo', 'March', 'March', 'MAR-tso', 'noun', 196, 'it'),
('aprile', 'April', 'April', 'a-PREE-leh', 'noun', 197, 'it'),
('maggio', 'May', 'May', 'MAD-jo', 'noun', 198, 'it'),
('giugno', 'June', 'June', 'JOON-yo', 'noun', 199, 'it'),
('luglio', 'July', 'July', 'LOOL-yo', 'noun', 200, 'it');

-- ---- Grammar lessons ----

INSERT OR IGNORE INTO grammar_lessons (id, title, description, sort_order, is_active, language_code) VALUES
(5, 'Italian Pronunciation & Spelling', 'Learn how Italian sounds: vowels, consonants, and spelling rules.', 1, 1, 'it'),
(6, 'Nouns and Articles', 'Understand gender, definite and indefinite articles.', 2, 1, 'it'),
(7, 'Adjectives and Agreement', 'Learn how adjectives change to match the noun they describe.', 3, 1, 'it'),
(8, 'Present Tense Verbs', 'Conjugate regular -are, -ere, -ire verbs and the irregulars essere and avere.', 4, 1, 'it');

-- ---- Exercises for lesson 5: Italian Pronunciation & Spelling (ids 64-73) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(64, 5, 'mcq_grammar', 'How is the letter C pronounced before E or I in Italian?', 'Like "ch" in "church"', '', '', 1, 'it'),
(65, 5, 'mcq_grammar', 'How is the letter C pronounced before A, O, or U?', 'Like "k" in "cat"', '', '', 2, 'it'),
(66, 5, 'mcq_grammar', 'How is the letter G pronounced before E or I?', 'Like "j" in "joy"', '', '', 3, 'it'),
(67, 5, 'mcq_grammar', 'What sound does "GLI" make in Italian?', 'Like "lli" in "million"', '', '', 4, 'it'),
(68, 5, 'mcq_grammar', 'What sound does "GN" make in Italian?', 'Like "ny" in "canyon"', '', '', 5, 'it'),
(69, 5, 'mcq_grammar', 'How do you pronounce "CH" in Italian (e.g., "chiesa")?', 'Like "k" (hard C)', '', '', 6, 'it'),
(70, 5, 'mcq_grammar', 'How do you pronounce "GH" in Italian (e.g., "ghiaccio")?', 'Like "g" in "go" (hard G)', '', '', 7, 'it'),
(71, 5, 'mcq_grammar', 'Italian vowels are always pronounced…', 'Pure and clear, like Spanish vowels', '', '', 8, 'it'),
(72, 5, 'mcq_grammar', 'What does a written accent (e.g., "caffè", "città") indicate?', 'The stress falls on that syllable', '', '', 9, 'it'),
(73, 5, 'mcq_grammar', 'How is "SC" pronounced before E or I (e.g., "scena")?', 'Like "sh" in "show"', '', '', 10, 'it');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(64, 'Like "k" in "cat"', 0), (64, 'Like "ch" in "church"', 1), (64, 'Like "s" in "sun"', 0), (64, 'Like "g" in "go"', 0),
(65, 'Like "ch" in "church"', 0), (65, 'Like "k" in "cat"', 1), (65, 'Like "s" in "sun"', 0), (65, 'Like "z" in "zoo"', 0),
(66, 'Like "g" in "go"', 0), (66, 'Like "j" in "joy"', 1), (66, 'Like "k" in "cat"', 0), (66, 'Like "y" in "yes"', 0),
(67, 'Like "gli" in "English"', 0), (67, 'Like "lli" in "million"', 1), (67, 'Like "ly" in "fly"', 0), (67, 'Like "gl" in "glad"', 0),
(68, 'Like "gn" in "sign"', 0), (68, 'Like "ny" in "canyon"', 1), (68, 'Like "ng" in "sing"', 0), (68, 'Like "n" in "no"', 0),
(69, 'Like "ch" in "church"', 0), (69, 'Like "k" (hard C)', 1), (69, 'Like "sh" in "show"', 0), (69, 'Like "h" in "hat"', 0),
(70, 'Like "j" in "joy"', 0), (70, 'Like "g" in "go" (hard G)', 1), (70, 'Like "gh" in "ghost"', 0), (70, 'Like "k" in "cat"', 0),
(71, 'Differently depending on surrounding letters', 0), (71, 'Pure and clear, like Spanish vowels', 1), (71, 'Silently at the end of words', 0), (71, 'With a falling tone like French', 0),
(72, 'The letter is silent', 0), (72, 'The stress falls on that syllable', 1), (72, 'The vowel is long', 0), (72, 'The word is plural', 0),
(73, 'Like "sk" in "sky"', 0), (73, 'Like "sh" in "show"', 1), (73, 'Like "s" in "sun"', 0), (73, 'Like "ch" in "church"', 0);

-- ---- Exercises for lesson 6: Nouns and Articles (ids 74-83) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(74, 6, 'mcq_grammar', 'What is the definite article for a singular masculine noun starting with a consonant?', 'il', '', '', 1, 'it'),
(75, 6, 'mcq_grammar', 'What is the definite article for a singular feminine noun?', 'la', '', '', 2, 'it'),
(76, 6, 'mcq_grammar', 'What is the definite article for a masculine noun starting with S+consonant (e.g., "studente")?', 'lo', '', '', 3, 'it'),
(77, 6, 'mcq_grammar', 'What is the plural definite article for masculine nouns that use "il"?', 'i', '', '', 4, 'it'),
(78, 6, 'mcq_grammar', 'What is the plural definite article for feminine nouns?', 'le', '', '', 5, 'it'),
(79, 6, 'mcq_grammar', 'What is the indefinite article for a singular masculine noun (e.g., "un libro")?', 'un', '', '', 6, 'it'),
(80, 6, 'mcq_grammar', 'What is the indefinite article for a masculine noun starting with S+consonant (e.g., "uno studente")?', 'uno', '', '', 7, 'it'),
(81, 6, 'mcq_grammar', 'What is the indefinite article for a singular feminine noun starting with a consonant?', 'una', '', '', 8, 'it'),
(82, 6, 'mcq_grammar', 'Italian nouns ending in -O are generally…', 'Masculine', '', '', 9, 'it'),
(83, 6, 'mcq_grammar', 'Italian nouns ending in -A are generally…', 'Feminine', '', '', 10, 'it');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(74, 'il', 1), (74, 'lo', 0), (74, 'la', 0), (74, 'l''', 0),
(75, 'il', 0), (75, 'lo', 0), (75, 'la', 1), (75, 'i', 0),
(76, 'il', 0), (76, 'lo', 1), (76, 'la', 0), (76, 'gli', 0),
(77, 'i', 1), (77, 'gli', 0), (77, 'le', 0), (77, 'lo', 0),
(78, 'i', 0), (78, 'gli', 0), (78, 'le', 1), (78, 'la', 0),
(79, 'un', 1), (79, 'uno', 0), (79, 'una', 0), (79, 'un''', 0),
(80, 'un', 0), (80, 'uno', 1), (80, 'una', 0), (80, 'un''', 0),
(81, 'un', 0), (81, 'uno', 0), (81, 'una', 1), (81, 'un''', 0),
(82, 'Masculine', 1), (82, 'Feminine', 0), (82, 'Neuter', 0), (82, 'Either masculine or feminine', 0),
(83, 'Masculine', 0), (83, 'Feminine', 1), (83, 'Neuter', 0), (83, 'Either masculine or feminine', 0);

-- ---- Exercises for lesson 7: Adjectives and Agreement (ids 84-93) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(84, 7, 'mcq_grammar', 'How does "bello" (beautiful) change for a feminine singular noun?', 'bella', '', '', 1, 'it'),
(85, 7, 'mcq_grammar', 'How does "rosso" (red) change for a masculine plural noun?', 'rossi', '', '', 2, 'it'),
(86, 7, 'mcq_grammar', 'How does "grande" (big) change for a feminine singular noun?', 'grande', '', '', 3, 'it'),
(87, 7, 'mcq_grammar', 'In Italian, where is the adjective usually placed?', 'After the noun', '', '', 4, 'it'),
(88, 7, 'mcq_grammar', 'Which form of "nuovo" (new) goes with "casa" (house, feminine)?', 'nuova', '', '', 5, 'it'),
(89, 7, 'mcq_grammar', 'Which form of "piccolo" (small) goes with "libri" (books, masculine plural)?', 'piccoli', '', '', 6, 'it'),
(90, 7, 'mcq_grammar', 'Adjectives ending in -E (like "grande") have how many forms?', 'Two: singular and plural', '', '', 7, 'it'),
(91, 7, 'mcq_grammar', 'What is the plural of "grande"?', 'grandi', '', '', 8, 'it'),
(92, 7, 'mcq_grammar', 'Complete: "Il libro è ___" (The book is new, masculine singular)', 'nuovo', '', '', 9, 'it'),
(93, 7, 'mcq_grammar', 'Complete: "Le case sono ___" (The houses are beautiful, feminine plural)', 'belle', '', '', 10, 'it');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(84, 'bello', 0), (84, 'bella', 1), (84, 'belli', 0), (84, 'belle', 0),
(85, 'rosso', 0), (85, 'rossa', 0), (85, 'rossi', 1), (85, 'rosse', 0),
(86, 'grande', 1), (86, 'granda', 0), (86, 'grandi', 0), (86, 'grando', 0),
(87, 'Before the noun', 0), (87, 'After the noun', 1), (87, 'Before the article', 0), (87, 'At the end of the sentence', 0),
(88, 'nuovo', 0), (88, 'nuova', 1), (88, 'nuovi', 0), (88, 'nuove', 0),
(89, 'piccolo', 0), (89, 'piccola', 0), (89, 'piccoli', 1), (89, 'piccole', 0),
(90, 'One: same for all', 0), (90, 'Two: singular and plural', 1), (90, 'Four: m/f × singular/plural', 0), (90, 'Three: m/f/n', 0),
(91, 'grande', 0), (91, 'grandi', 1), (91, 'grandes', 0), (91, 'grandei', 0),
(92, 'nuova', 0), (92, 'nuovi', 0), (92, 'nuovo', 1), (92, 'nuove', 0),
(93, 'bello', 0), (93, 'bella', 0), (93, 'belli', 0), (93, 'belle', 1);

-- ---- Exercises for lesson 8: Present Tense Verbs (ids 94-103) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(94, 8, 'mcq_grammar', 'What is the "io" (I) form of "parlare" (to speak)?', 'parlo', '', '', 1, 'it'),
(95, 8, 'mcq_grammar', 'What is the "lui/lei" (he/she) form of "parlare"?', 'parla', '', '', 2, 'it'),
(96, 8, 'mcq_grammar', 'What is the "noi" (we) form of "parlare"?', 'parliamo', '', '', 3, 'it'),
(97, 8, 'mcq_grammar', 'What is the "io" form of "scrivere" (to write, -ere verb)?', 'scrivo', '', '', 4, 'it'),
(98, 8, 'mcq_grammar', 'What is the "loro" (they) form of "scrivere"?', 'scrivono', '', '', 5, 'it'),
(99, 8, 'mcq_grammar', 'What is the "io" form of "capire" (to understand, -ire verb)?', 'capisco', '', '', 6, 'it'),
(100, 8, 'mcq_grammar', 'What is "sono" (from essere)?', 'I am / they are', '', '', 7, 'it'),
(101, 8, 'mcq_grammar', 'What is the "tu" form of "essere" (to be)?', 'sei', '', '', 8, 'it'),
(102, 8, 'mcq_grammar', 'What is the "noi" form of "avere" (to have)?', 'abbiamo', '', '', 9, 'it'),
(103, 8, 'mcq_grammar', 'What is the "loro" form of "avere"?', 'hanno', '', '', 10, 'it');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(94, 'parla', 0), (94, 'parli', 0), (94, 'parlo', 1), (94, 'parlano', 0),
(95, 'parla', 1), (95, 'parli', 0), (95, 'parlo', 0), (95, 'parlano', 0),
(96, 'parlate', 0), (96, 'parliamo', 1), (96, 'parlano', 0), (96, 'parla', 0),
(97, 'scrive', 0), (97, 'scrivi', 0), (97, 'scrivo', 1), (97, 'scrivono', 0),
(98, 'scrivete', 0), (98, 'scrivono', 1), (98, 'scriviamo', 0), (98, 'scrive', 0),
(99, 'capiro', 0), (99, 'capisci', 0), (99, 'capisco', 1), (99, 'capisce', 0),
(100, 'he/she is', 0), (100, 'I am / they are', 1), (100, 'you are', 0), (100, 'we are', 0),
(101, 'sono', 0), (101, 'sei', 1), (101, 'è', 0), (101, 'siamo', 0),
(102, 'abbiamo', 1), (102, 'avete', 0), (102, 'hanno', 0), (102, 'ho', 0),
(103, 'avete', 0), (103, 'hanno', 1), (103, 'abbiamo', 0), (103, 'hai', 0);

-- ---- Reading passages ----

INSERT OR IGNORE INTO reading_passages (id, title, sort_order, language_code) VALUES
(4, 'Mi chiamo Marco', 1, 'it'),
(5, 'La mia famiglia', 2, 'it'),
(6, 'A scuola', 3, 'it');
`;export{e as default};
