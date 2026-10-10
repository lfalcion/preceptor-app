var e=`-- ===== Lesson 2: Nouns & Nominative Case =====

INSERT INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order) VALUES
  (34, 2, 'mcq_grammar', 'What gender is the noun «книга» (book)?', 'Feminine', '', '', 1),
  (35, 2, 'mcq_grammar', 'What gender is the noun «окно» (window)?', 'Neuter', '', '', 2),
  (36, 2, 'mcq_grammar', 'What gender is the noun «студент» (student)?', 'Masculine', '', '', 3),
  (37, 2, 'mcq_grammar', 'Which ending is typical for feminine nouns?', '-а / -я', '', '', 4),
  (38, 2, 'mcq_grammar', 'Which ending is typical for neuter nouns?', '-о / -е', '', '', 5),
  (39, 2, 'mcq_grammar', 'What does «Это стол» mean?', 'This is a table', '', '', 6),
  (40, 2, 'mcq_grammar', 'What case is the subject of a Russian sentence?', 'Nominative', '', '', 7),
  (41, 2, 'mcq_grammar', 'What gender is the noun «молоко» (milk)?', 'Neuter', '', '', 8),
  (42, 2, 'mcq_grammar', 'In «Мама читает», what case is «мама»?', 'Nominative', '', '', 9),
  (43, 2, 'mcq_grammar', 'What gender is the noun «мама» (mom)?', 'Feminine', '', '', 10);

INSERT INTO exercise_options (exercise_id, option_text, is_correct) VALUES
  (34, 'Masculine', 0), (34, 'Feminine', 1), (34, 'Neuter', 0), (34, 'Plural', 0),
  (35, 'Masculine', 0), (35, 'Feminine', 0), (35, 'Neuter', 1), (35, 'Plural', 0),
  (36, 'Feminine', 0), (36, 'Neuter', 0), (36, 'Masculine', 1), (36, 'Plural', 0),
  (37, '-о / -е', 0), (37, '-а / -я', 1), (37, 'consonant', 0), (37, '-ый / -ий', 0),
  (38, '-а / -я', 0), (38, '-о / -е', 1), (38, 'consonant', 0), (38, '-ь', 0),
  (39, 'This is a table', 1), (39, 'The table is big', 0), (39, 'I see a table', 0), (39, 'Where is the table?', 0),
  (40, 'Accusative', 0), (40, 'Genitive', 0), (40, 'Nominative', 1), (40, 'Dative', 0),
  (41, 'Masculine', 0), (41, 'Feminine', 0), (41, 'Neuter', 1), (41, 'Plural', 0),
  (42, 'Nominative', 1), (42, 'Accusative', 0), (42, 'Dative', 0), (42, 'Genitive', 0),
  (43, 'Neuter', 0), (43, 'Masculine', 0), (43, 'Plural', 0), (43, 'Feminine', 1);

-- ===== Lesson 3: Accusative Case =====

INSERT INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order) VALUES
  (44, 3, 'mcq_grammar', 'What is the accusative form of «книга» (book)?', 'книгу', '', '', 1),
  (45, 3, 'mcq_grammar', 'What is the accusative form of «мама» (mom)?', 'маму', '', '', 2),
  (46, 3, 'mcq_grammar', 'What is the accusative form of «стол» (table, inanimate)?', 'стол', '', '', 3),
  (47, 3, 'mcq_grammar', 'The accusative case marks the _____ of the sentence.', 'direct object', '', '', 4),
  (48, 3, 'mcq_grammar', 'What is the accusative form of «окно» (window)?', 'окно', '', '', 5),
  (49, 3, 'mcq_grammar', 'What does «Я читаю книгу» mean?', 'I am reading a book', '', '', 6),
  (50, 3, 'mcq_grammar', 'Feminine nouns ending in -я change to _____ in the accusative.', '-ю', '', '', 7),
  (51, 3, 'mcq_grammar', 'What is the accusative form of «неделя» (week)?', 'неделю', '', '', 8),
  (52, 3, 'mcq_grammar', 'Inanimate masculine nouns in the accusative look like the _____.', 'nominative', '', '', 9),
  (53, 3, 'mcq_grammar', 'Choose the correct sentence for ''Mom sees the table'':', 'Мама видит стол.', '', '', 10);

INSERT INTO exercise_options (exercise_id, option_text, is_correct) VALUES
  (44, 'книга', 0), (44, 'книгу', 1), (44, 'книге', 0), (44, 'книги', 0),
  (45, 'маме', 0), (45, 'мамой', 0), (45, 'маму', 1), (45, 'мама', 0),
  (46, 'стол', 1), (46, 'стола', 0), (46, 'столу', 0), (46, 'столе', 0),
  (47, 'subject', 0), (47, 'direct object', 1), (47, 'indirect object', 0), (47, 'location', 0),
  (48, 'окна', 0), (48, 'окну', 0), (48, 'окно', 1), (48, 'окне', 0),
  (49, 'I am reading a book', 1), (49, 'The book is reading', 0), (49, 'I see the book', 0), (49, 'A book is here', 0),
  (50, '-у', 0), (50, '-ю', 1), (50, '-е', 0), (50, '-и', 0),
  (51, 'неделя', 0), (51, 'недели', 0), (51, 'неделю', 1), (51, 'неделе', 0),
  (52, 'nominative', 1), (52, 'genitive', 0), (52, 'dative', 0), (52, 'instrumental', 0),
  (53, 'Мама видит стол.', 1), (53, 'Мама видит стола.', 0), (53, 'Мама видит столу.', 0), (53, 'Мама видит столе.', 0);

-- ===== Lesson 4: Present-Tense Verbs =====

INSERT INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order) VALUES
  (54, 4, 'mcq_grammar', 'What is the «я» form of читать (to read)?', 'читаю', '', '', 1),
  (55, 4, 'mcq_grammar', 'What is the «они» form of говорить (to speak)?', 'говорят', '', '', 2),
  (56, 4, 'mcq_grammar', 'Which conjugation type is читать?', 'Type I', '', '', 3),
  (57, 4, 'mcq_grammar', 'What is the «ты» form of говорить?', 'говоришь', '', '', 4),
  (58, 4, 'mcq_grammar', 'How do you say ''She reads'' in Russian?', 'Она читает.', '', '', 5),
  (59, 4, 'mcq_grammar', 'What does «Я студент» mean?', 'I am a student', '', '', 6),
  (60, 4, 'mcq_grammar', 'What is the «мы» form of читать?', 'читаем', '', '', 7),
  (61, 4, 'mcq_grammar', 'Which conjugation type is говорить?', 'Type II', '', '', 8),
  (62, 4, 'mcq_grammar', 'What is the «вы» form of говорить?', 'говорите', '', '', 9),
  (63, 4, 'mcq_grammar', 'Russian does NOT use a present-tense form of which verb?', 'to be (быть)', '', '', 10);

INSERT INTO exercise_options (exercise_id, option_text, is_correct) VALUES
  (54, 'читаю', 1), (54, 'читаешь', 0), (54, 'читает', 0), (54, 'читают', 0),
  (55, 'говорим', 0), (55, 'говорите', 0), (55, 'говорят', 1), (55, 'говорю', 0),
  (56, 'Type I', 1), (56, 'Type II', 0), (56, 'Irregular', 0), (56, 'Type III', 0),
  (57, 'говорит', 0), (57, 'говоришь', 1), (57, 'говорю', 0), (57, 'говорим', 0),
  (58, 'Она читает.', 1), (58, 'Она читаю.', 0), (58, 'Она читают.', 0), (58, 'Она читаешь.', 0),
  (59, 'I am a student', 1), (59, 'I see a student', 0), (59, 'The student reads', 0), (59, 'A student speaks', 0),
  (60, 'читают', 0), (60, 'читаете', 0), (60, 'читаем', 1), (60, 'читаешь', 0),
  (61, 'Type I', 0), (61, 'Type II', 1), (61, 'Irregular', 0), (61, 'Type III', 0),
  (62, 'говорят', 0), (62, 'говорите', 1), (62, 'говорим', 0), (62, 'говоришь', 0),
  (63, 'to read (читать)', 0), (63, 'to speak (говорить)', 0), (63, 'to be (быть)', 1), (63, 'to see (видеть)', 0);
`;export{e as default};
