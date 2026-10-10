var e=`-- Migration 005: Seed 100 A1 Russian vocabulary words.
-- Categories: greetings_basics (15), numbers (20), people_family (18),
--             common_objects (20), adjectives (12), verbs (15) = 100 total.
-- Transliteration follows Milestone 1 conventions:
--   zh=ж, sh=ш, ch=ч, ts=ц, shch=щ, kh=х, ya=я, yo=ё, yu=ю, ye=е (initial).

-- ============================================================
-- Category: greetings_basics (15 words)
-- ============================================================
INSERT INTO vocabulary_items (created_at, cyrillic, english, transliteration, part_of_speech, category, sort_order)
VALUES
  (strftime('%s','now'), 'привет', 'hello (informal)', 'privet', 'phrase', 'greetings_basics', 1),
  (strftime('%s','now'), 'здравствуйте', 'hello (formal)', 'zdravstvuyte', 'phrase', 'greetings_basics', 2),
  (strftime('%s','now'), 'до свидания', 'goodbye', 'do svidaniya', 'phrase', 'greetings_basics', 3),
  (strftime('%s','now'), 'пока', 'bye (informal)', 'poka', 'phrase', 'greetings_basics', 4),
  (strftime('%s','now'), 'пожалуйста', 'please / you are welcome', 'pozhaluysta', 'phrase', 'greetings_basics', 5),
  (strftime('%s','now'), 'спасибо', 'thank you', 'spasibo', 'phrase', 'greetings_basics', 6),
  (strftime('%s','now'), 'да', 'yes', 'da', 'phrase', 'greetings_basics', 7),
  (strftime('%s','now'), 'нет', 'no', 'net', 'phrase', 'greetings_basics', 8),
  (strftime('%s','now'), 'извините', 'excuse me / sorry (formal)', 'izvinite', 'phrase', 'greetings_basics', 9),
  (strftime('%s','now'), 'простите', 'forgive me / sorry (formal)', 'prostite', 'phrase', 'greetings_basics', 10),
  (strftime('%s','now'), 'доброе утро', 'good morning', 'dobroye utro', 'phrase', 'greetings_basics', 11),
  (strftime('%s','now'), 'добрый день', 'good afternoon', 'dobryy den', 'phrase', 'greetings_basics', 12),
  (strftime('%s','now'), 'добрый вечер', 'good evening', 'dobryy vecher', 'phrase', 'greetings_basics', 13),
  (strftime('%s','now'), 'спокойной ночи', 'good night', 'spokoynoy nochi', 'phrase', 'greetings_basics', 14),
  (strftime('%s','now'), 'как дела', 'how are you', 'kak dela', 'phrase', 'greetings_basics', 15);

-- ============================================================
-- Category: numbers (20 words)
-- ============================================================
INSERT INTO vocabulary_items (created_at, cyrillic, english, transliteration, part_of_speech, category, sort_order)
VALUES
  (strftime('%s','now'), 'один', 'one', 'odin', 'numeral', 'numbers', 1),
  (strftime('%s','now'), 'два', 'two', 'dva', 'numeral', 'numbers', 2),
  (strftime('%s','now'), 'три', 'three', 'tri', 'numeral', 'numbers', 3),
  (strftime('%s','now'), 'четыре', 'four', 'chetyre', 'numeral', 'numbers', 4),
  (strftime('%s','now'), 'пять', 'five', 'pyat', 'numeral', 'numbers', 5),
  (strftime('%s','now'), 'шесть', 'six', 'shest', 'numeral', 'numbers', 6),
  (strftime('%s','now'), 'семь', 'seven', 'sem', 'numeral', 'numbers', 7),
  (strftime('%s','now'), 'восемь', 'eight', 'vosem', 'numeral', 'numbers', 8),
  (strftime('%s','now'), 'девять', 'nine', 'devyat', 'numeral', 'numbers', 9),
  (strftime('%s','now'), 'десять', 'ten', 'desyat', 'numeral', 'numbers', 10),
  (strftime('%s','now'), 'одиннадцать', 'eleven', 'odinnadtsat', 'numeral', 'numbers', 11),
  (strftime('%s','now'), 'двенадцать', 'twelve', 'dvenadtsat', 'numeral', 'numbers', 12),
  (strftime('%s','now'), 'тринадцать', 'thirteen', 'trinadtsat', 'numeral', 'numbers', 13),
  (strftime('%s','now'), 'четырнадцать', 'fourteen', 'chetyrnadtsat', 'numeral', 'numbers', 14),
  (strftime('%s','now'), 'пятнадцать', 'fifteen', 'pyatnadtsat', 'numeral', 'numbers', 15),
  (strftime('%s','now'), 'шестнадцать', 'sixteen', 'shestnadtsat', 'numeral', 'numbers', 16),
  (strftime('%s','now'), 'семнадцать', 'seventeen', 'semnadtsat', 'numeral', 'numbers', 17),
  (strftime('%s','now'), 'восемнадцать', 'eighteen', 'vosemnadtsat', 'numeral', 'numbers', 18),
  (strftime('%s','now'), 'девятнадцать', 'nineteen', 'devyatnadtsat', 'numeral', 'numbers', 19),
  (strftime('%s','now'), 'двадцать', 'twenty', 'dvadtsat', 'numeral', 'numbers', 20);

-- ============================================================
-- Category: people_family (18 words)
-- ============================================================
INSERT INTO vocabulary_items (created_at, cyrillic, english, transliteration, part_of_speech, category, sort_order)
VALUES
  (strftime('%s','now'), 'человек', 'person', 'chelovek', 'noun', 'people_family', 1),
  (strftime('%s','now'), 'мужчина', 'man', 'muzhchina', 'noun', 'people_family', 2),
  (strftime('%s','now'), 'женщина', 'woman', 'zhenshchina', 'noun', 'people_family', 3),
  (strftime('%s','now'), 'мальчик', 'boy', 'malchik', 'noun', 'people_family', 4),
  (strftime('%s','now'), 'девочка', 'girl', 'devochka', 'noun', 'people_family', 5),
  (strftime('%s','now'), 'мама', 'mom', 'mama', 'noun', 'people_family', 6),
  (strftime('%s','now'), 'папа', 'dad', 'papa', 'noun', 'people_family', 7),
  (strftime('%s','now'), 'мать', 'mother', 'mat', 'noun', 'people_family', 8),
  (strftime('%s','now'), 'отец', 'father', 'otets', 'noun', 'people_family', 9),
  (strftime('%s','now'), 'брат', 'brother', 'brat', 'noun', 'people_family', 10),
  (strftime('%s','now'), 'сестра', 'sister', 'sestra', 'noun', 'people_family', 11),
  (strftime('%s','now'), 'сын', 'son', 'syn', 'noun', 'people_family', 12),
  (strftime('%s','now'), 'дочь', 'daughter', 'doch', 'noun', 'people_family', 13),
  (strftime('%s','now'), 'друг', 'friend (male)', 'drug', 'noun', 'people_family', 14),
  (strftime('%s','now'), 'подруга', 'friend (female)', 'podruga', 'noun', 'people_family', 15),
  (strftime('%s','now'), 'муж', 'husband', 'muzh', 'noun', 'people_family', 16),
  (strftime('%s','now'), 'жена', 'wife', 'zhena', 'noun', 'people_family', 17),
  (strftime('%s','now'), 'ребёнок', 'child', 'rebyonok', 'noun', 'people_family', 18);

-- ============================================================
-- Category: common_objects (20 words)
-- ============================================================
INSERT INTO vocabulary_items (created_at, cyrillic, english, transliteration, part_of_speech, category, sort_order)
VALUES
  (strftime('%s','now'), 'книга', 'book', 'kniga', 'noun', 'common_objects', 1),
  (strftime('%s','now'), 'стол', 'table', 'stol', 'noun', 'common_objects', 2),
  (strftime('%s','now'), 'стул', 'chair', 'stul', 'noun', 'common_objects', 3),
  (strftime('%s','now'), 'дверь', 'door', 'dver', 'noun', 'common_objects', 4),
  (strftime('%s','now'), 'окно', 'window', 'okno', 'noun', 'common_objects', 5),
  (strftime('%s','now'), 'вода', 'water', 'voda', 'noun', 'common_objects', 6),
  (strftime('%s','now'), 'хлеб', 'bread', 'khleb', 'noun', 'common_objects', 7),
  (strftime('%s','now'), 'дом', 'house', 'dom', 'noun', 'common_objects', 8),
  (strftime('%s','now'), 'машина', 'car', 'mashina', 'noun', 'common_objects', 9),
  (strftime('%s','now'), 'телефон', 'phone', 'telefon', 'noun', 'common_objects', 10),
  (strftime('%s','now'), 'улица', 'street', 'ulitsa', 'noun', 'common_objects', 11),
  (strftime('%s','now'), 'город', 'city', 'gorod', 'noun', 'common_objects', 12),
  (strftime('%s','now'), 'школа', 'school', 'shkola', 'noun', 'common_objects', 13),
  (strftime('%s','now'), 'магазин', 'store', 'magazin', 'noun', 'common_objects', 14),
  (strftime('%s','now'), 'еда', 'food', 'yeda', 'noun', 'common_objects', 15),
  (strftime('%s','now'), 'молоко', 'milk', 'moloko', 'noun', 'common_objects', 16),
  (strftime('%s','now'), 'кошка', 'cat', 'koshka', 'noun', 'common_objects', 17),
  (strftime('%s','now'), 'собака', 'dog', 'sobaka', 'noun', 'common_objects', 18),
  (strftime('%s','now'), 'ручка', 'pen', 'ruchka', 'noun', 'common_objects', 19),
  (strftime('%s','now'), 'чай', 'tea', 'chay', 'noun', 'common_objects', 20);

-- ============================================================
-- Category: adjectives (12 words)
-- ============================================================
INSERT INTO vocabulary_items (created_at, cyrillic, english, transliteration, part_of_speech, category, sort_order)
VALUES
  (strftime('%s','now'), 'большой', 'big', 'bolshoy', 'adjective', 'adjectives', 1),
  (strftime('%s','now'), 'маленький', 'small', 'malenkiy', 'adjective', 'adjectives', 2),
  (strftime('%s','now'), 'хороший', 'good', 'khoroshiy', 'adjective', 'adjectives', 3),
  (strftime('%s','now'), 'плохой', 'bad', 'plokhoy', 'adjective', 'adjectives', 4),
  (strftime('%s','now'), 'новый', 'new', 'novyy', 'adjective', 'adjectives', 5),
  (strftime('%s','now'), 'старый', 'old', 'staryy', 'adjective', 'adjectives', 6),
  (strftime('%s','now'), 'горячий', 'hot', 'goryachiy', 'adjective', 'adjectives', 7),
  (strftime('%s','now'), 'холодный', 'cold', 'kholodnyy', 'adjective', 'adjectives', 8),
  (strftime('%s','now'), 'красивый', 'beautiful', 'krasivyy', 'adjective', 'adjectives', 9),
  (strftime('%s','now'), 'быстрый', 'fast', 'bystryy', 'adjective', 'adjectives', 10),
  (strftime('%s','now'), 'медленный', 'slow', 'medlennyy', 'adjective', 'adjectives', 11),
  (strftime('%s','now'), 'вкусный', 'delicious', 'vkusnyy', 'adjective', 'adjectives', 12);

-- ============================================================
-- Category: verbs (15 words)
-- ============================================================
INSERT INTO vocabulary_items (created_at, cyrillic, english, transliteration, part_of_speech, category, sort_order)
VALUES
  (strftime('%s','now'), 'быть', 'to be', 'byt', 'verb', 'verbs', 1),
  (strftime('%s','now'), 'иметь', 'to have', 'imet', 'verb', 'verbs', 2),
  (strftime('%s','now'), 'идти', 'to go (on foot)', 'idti', 'verb', 'verbs', 3),
  (strftime('%s','now'), 'есть', 'to eat', 'yest', 'verb', 'verbs', 4),
  (strftime('%s','now'), 'пить', 'to drink', 'pit', 'verb', 'verbs', 5),
  (strftime('%s','now'), 'говорить', 'to speak', 'govorit', 'verb', 'verbs', 6),
  (strftime('%s','now'), 'читать', 'to read', 'chitat', 'verb', 'verbs', 7),
  (strftime('%s','now'), 'писать', 'to write', 'pisat', 'verb', 'verbs', 8),
  (strftime('%s','now'), 'знать', 'to know', 'znat', 'verb', 'verbs', 9),
  (strftime('%s','now'), 'хотеть', 'to want', 'khotet', 'verb', 'verbs', 10),
  (strftime('%s','now'), 'видеть', 'to see', 'videt', 'verb', 'verbs', 11),
  (strftime('%s','now'), 'делать', 'to do / to make', 'delat', 'verb', 'verbs', 12),
  (strftime('%s','now'), 'жить', 'to live', 'zhit', 'verb', 'verbs', 13),
  (strftime('%s','now'), 'работать', 'to work', 'rabotat', 'verb', 'verbs', 14),
  (strftime('%s','now'), 'любить', 'to love', 'lyubit', 'verb', 'verbs', 15);
`;export{e as default};
