var e=`-- Migration 023: passage_exercises table + comprehension question seed for all 30 passages.
-- Uses a separate table (NOT ALTER TABLE exercises) as required by the Rust service.
-- Rust service queries: SELECT id, prompt, option_a, option_b, option_c, option_d, correct_option,
--                               passage_id, sort_order FROM passage_exercises WHERE passage_id = ?

CREATE TABLE IF NOT EXISTS passage_exercises (
    id              INTEGER PRIMARY KEY,
    passage_id      INTEGER NOT NULL REFERENCES reading_passages(id),
    language_code   TEXT    NOT NULL,
    lesson_id       INTEGER NOT NULL REFERENCES grammar_lessons(id),
    sort_order      INTEGER NOT NULL DEFAULT 0,
    prompt          TEXT    NOT NULL,
    option_a        TEXT    NOT NULL,
    option_b        TEXT    NOT NULL,
    option_c        TEXT    NOT NULL,
    option_d        TEXT    NOT NULL,
    correct_option  TEXT    NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_passage_exercises_passage ON passage_exercises(passage_id);

-- ============================================================
-- RUSSIAN — passages 1-3, lesson_id=1, language_code='ru'
-- sort_order bands: passage 1 = 900-903, passage 2 = 910-913, passage 3 = 920-923
-- ============================================================

-- Passage 1: Меня зовут Анна (Anna introduces herself, lives in Moscow, has brother Ivan and sister Maria, they love to read books)
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(1, 'ru', 1, 900, 'What is the narrator''s name?', 'Мария', 'Анна', 'Иван', 'Москва', 'b'),
(1, 'ru', 1, 901, 'Where does Anna live?', 'In St. Petersburg', 'In London', 'In Moscow', 'In Kiev', 'c'),
(1, 'ru', 1, 902, 'What do Anna and her siblings love to do?', 'Cook food', 'Read books', 'Play sports', 'Travel', 'b'),
(1, 'ru', 1, 903, 'What is Anna''s brother''s name?', 'Мария', 'Анна', 'Иван', 'Дмитрий', 'c');

-- Passage 2: Моя семья (Mother is a doctor, father is a teacher, grandmother cooks, they live together)
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(2, 'ru', 1, 910, 'What is the narrator''s mother''s profession?', 'Teacher', 'Doctor', 'Cook', 'Engineer', 'b'),
(2, 'ru', 1, 911, 'What is the narrator''s father''s profession?', 'Doctor', 'Lawyer', 'Teacher', 'Engineer', 'c'),
(2, 'ru', 1, 912, 'Who cooks very deliciously in the family?', 'The mother', 'The father', 'The grandmother', 'The sister', 'c'),
(2, 'ru', 1, 913, 'How does the family live?', 'In different cities', 'Together', 'Far from each other', 'In two separate houses', 'b');

-- Passage 3: В магазине (Goes to store, buys milk and bread, milk costs 50 rubles, pays and goes home)
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(3, 'ru', 1, 920, 'Where is the narrator going at the start of the passage?', 'To school', 'To the park', 'To the store', 'To work', 'c'),
(3, 'ru', 1, 921, 'Which items does the narrator take from the store?', 'Milk and apples', 'Bread and apples', 'Milk and bread', 'Milk, bread, and apples', 'c'),
(3, 'ru', 1, 922, 'How much does the milk cost?', 'Twenty rubles', 'Fifty rubles', 'One hundred rubles', 'The price is not stated', 'b'),
(3, 'ru', 1, 923, 'What does the narrator do after paying?', 'Stays in the store', 'Calls a friend', 'Goes home', 'Buys more items', 'c');

-- ============================================================
-- ITALIAN — passages 4-6, lesson_id=5, language_code='it'
-- sort_order bands: passage 4 = 930-934, passage 5 = 940-944, passage 6 = 950-953
-- ============================================================

-- Passage 4: Mi chiamo Marco (Marco, 21, lives in Rome, big family, mother=teacher, father=doctor, studies languages, likes reading and travelling)
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(4, 'it', 5, 930, 'How old is Marco?', 'Eighteen', 'Nineteen', 'Twenty', 'Twenty-one', 'd'),
(4, 'it', 5, 931, 'Where does Marco live?', 'Milan', 'Florence', 'Rome', 'Naples', 'c'),
(4, 'it', 5, 932, 'What is Marco''s mother''s profession?', 'Doctor', 'Teacher', 'Lawyer', 'Engineer', 'b'),
(4, 'it', 5, 933, 'What does Marco study at university?', 'Medicine', 'Law', 'Languages', 'History', 'c'),
(4, 'it', 5, 934, 'Which two activities does Marco say he enjoys?', 'Cooking and travelling', 'Reading and travelling', 'Reading and music', 'Sports and cooking', 'b');

-- Passage 5: La mia famiglia (Mother=Laura, doctor; father=Giovanni, lawyer; younger sister, older brother; dog named Leo; they love each other)
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(5, 'it', 5, 940, 'What is the narrator''s mother''s name?', 'Maria', 'Laura', 'Sofia', 'Anna', 'b'),
(5, 'it', 5, 941, 'What is the narrator''s father''s profession?', 'Doctor', 'Teacher', 'Lawyer', 'Engineer', 'c'),
(5, 'it', 5, 942, 'What pet does the family have?', 'A cat named Leo', 'A dog named Leo', 'A cat named Max', 'No pet is mentioned', 'b'),
(5, 'it', 5, 943, 'How does the passage describe the narrator''s sister compared to the narrator?', 'Older', 'Younger', 'The same age', 'Her age is not mentioned', 'b'),
(5, 'it', 5, 944, 'How does the narrator describe the family''s relationship?', 'They argue often', 'They love each other very much', 'They live separately', 'They rarely see each other', 'b');

-- Passage 6: A scuola (School, 20 students, teacher=Maria, studies Italian/mathematics/history, talks with friends after lessons)
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(6, 'it', 5, 950, 'What is the teacher''s name?', 'Laura', 'Maria', 'Sofia', 'Anna', 'b'),
(6, 'it', 5, 951, 'How many students are in the class?', 'Ten', 'Fifteen', 'Twenty', 'Twenty-five', 'c'),
(6, 'it', 5, 952, 'Which subjects are studied at school in this passage?', 'Italian and mathematics only', 'Italian, mathematics, and history', 'Mathematics and history only', 'Italian and history only', 'b'),
(6, 'it', 5, 953, 'What do the students do after lessons?', 'Go home immediately', 'Talk with friends', 'Study more', 'Play sports', 'b');

-- ============================================================
-- PHILOSOPHY — passages 7-9, lesson_id=9, language_code='ph'
-- sort_order bands: passage 7 = 960-964, passage 8 = 970-974, passage 9 = 980-984
-- ============================================================

-- Passage 7: Seneca: On the Shortness of Life
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(7, 'ph', 9, 960, 'What is Seneca''s central argument in this passage?', 'Life is naturally too short for any great achievement', 'Life is long enough if we invest it well; we make it short by wasting it', 'Death comes too soon for the wise to act', 'Time cannot be recovered and we should mourn its loss', 'b'),
(7, 'ph', 9, 961, 'According to Seneca, who is to blame for a short life?', 'The gods who set its length', 'Fate and circumstance beyond our control', 'We ourselves, through waste and heedless luxury', 'The demands society places on us', 'c'),
(7, 'ph', 9, 962, 'What analogy does Seneca use to explain how life can be made long or short?', 'A river running fast or slow depending on rainfall', 'Wealth that grows under a good custodian or is squandered by a bad owner', 'A lamp that burns bright or dims depending on its fuel', 'A journey made efficient or slow by the traveller''s choices', 'b'),
(7, 'ph', 9, 963, 'What does the Latin phrase "tempus tantum nostrum est" mean?', 'Death comes for all of us equally', 'Time alone is ours', 'Life is given to us freely by the gods', 'Wealth belongs to the virtuous alone', 'b'),
(7, 'ph', 9, 964, 'What does Seneca identify as the main way time is wasted?', 'Excessive work and misplaced ambition', 'Heedless luxury and spending on no good activity', 'Sleep and physical inactivity', 'Political involvement and public affairs', 'b');

-- Passage 8: Plato: The Allegory of the Cave
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(8, 'ph', 9, 970, 'In the cave allegory, what do the shadows on the wall represent?', 'The eternal Forms — ultimate reality', 'The world of opinion and appearances mistaken for reality', 'The light of the Form of the Good', 'The philosopher''s growing knowledge', 'b'),
(8, 'ph', 9, 971, 'What happens when the freed prisoner first turns toward the fire?', 'He immediately understands the truth behind the shadows', 'His eyes hurt and the objects appear blurry', 'He runs back to the familiar shadows', 'He begins to teach the other prisoners', 'b'),
(8, 'ph', 9, 972, 'What does the sun represent in Plato''s allegory?', 'The physical world outside the cave', 'The Form of the Good — the source of all truth and being', 'The philosopher''s rational mind', 'Common opinion and conventional wisdom', 'b'),
(8, 'ph', 9, 973, 'What keeps the prisoners in place and unable to turn their heads?', 'The darkness of the cave that disorienti them', 'Chains on their legs and necks from childhood', 'Fear of the fire burning behind them', 'Ignorance alone — there are no physical restraints', 'b'),
(8, 'ph', 9, 974, 'What is the ascent out of the cave meant to represent?', 'A physical escape from political oppression', 'The philosopher''s painful education — a reorientation of the whole soul toward knowledge', 'A mystical or religious experience beyond reason', 'The end of one''s obligations to the political community', 'b');

-- Passage 9: Mill: On Liberty
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(9, 'ph', 9, 980, 'What is Mill''s "harm principle" as stated in this passage?', 'Society may restrict liberty to improve the individual''s wellbeing', 'Power over an individual is only justified to prevent harm to others', 'Governments may limit freedom whenever the majority approves', 'Liberty is absolute and may never be restricted', 'b'),
(9, 'ph', 9, 981, 'May society force someone to act for their own good, according to Mill?', 'Yes, if it will make them happier', 'Yes, if the majority believes it is right', 'No — his own good is not a sufficient warrant for coercion', 'Only if a court authorizes it', 'c'),
(9, 'ph', 9, 982, 'How does Mill describe the individual''s authority over their own body and mind?', 'Conditional on social approval', 'Sovereign — supreme and unchallengeable', 'Subject to democratic override', 'Limited by the moral law of the community', 'b'),
(9, 'ph', 9, 983, 'What does Mill say about paternalism — forcing someone to be good for their own sake?', 'It is sometimes justified in extreme cases', 'It cannot rightfully be done — this is explicitly rejected', 'It is the duty of a well-ordered government', 'It is acceptable when done with genuine goodwill', 'b'),
(9, 'ph', 9, 984, 'What term does Mill use for a society capable of self-government in this passage?', 'A sovereign community', 'A democratic republic', 'A civilised community', 'A lawful state', 'c');

-- ============================================================
-- LOGIC — passages 10-12, lesson_id=13, language_code='lo'
-- sort_order bands: passage 10 = 990-994, passage 11 = 1000-1004, passage 12 = 1010-1014
-- ============================================================

-- Passage 10: Aristotle: The Organon
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(10, 'lo', 13, 990, 'How does Aristotle define a syllogism?', 'An argument with exactly three terms and two premises', 'A discourse where something other than what is stated follows of necessity', 'A rhetorical technique for public debate', 'A form of inductive reasoning from observed examples', 'b'),
(10, 'lo', 13, 991, 'What distinguishes a "perfect" syllogism from an imperfect one?', 'A perfect syllogism has more premises', 'A perfect syllogism needs nothing beyond what is stated to make the necessity plain', 'A perfect syllogism is longer and more elaborately stated', 'A perfect syllogism deals only with universal claims', 'b'),
(10, 'lo', 13, 992, 'According to Aristotle, every proposition must do what?', 'Contain at least three terms', 'Either affirm or deny something of something', 'Be universally and necessarily true', 'Be verifiable through observation', 'b'),
(10, 'lo', 13, 993, 'Which three types of proposition does Aristotle identify?', 'True, false, and uncertain', 'Universal, particular, and indefinite', 'Deductive, inductive, and abductive', 'Major, minor, and middle', 'b'),
(10, 'lo', 13, 994, 'What does Aristotle mean when he says a conclusion follows "of necessity" from the premises?', 'It is highly probable given the evidence', 'Most experts believe it to be true', 'No further term from outside is needed to make the consequence necessary', 'It follows from careful observation alone', 'c');

-- Passage 11: Chrysippus and Stoic Logic
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(11, 'lo', 13, 1000, 'What distinguishes Stoic propositional logic from Aristotle''s term logic?', 'Stoics used categories (All S are P); Aristotle studied conditionals', 'Stoics studied whole propositions connected by "if", "and", "or"; Aristotle studied category relations', 'Stoics rejected formal logic in favour of rhetoric', 'Stoics focused on inductive reasoning rather than deduction', 'b'),
(11, 'lo', 13, 1001, 'What is Chrysippus''s central object of study?', 'The categorical syllogism', 'The conditional — "If P, then Q"', 'Inductive generalization from observation', 'Analogical reasoning by similarity', 'b'),
(11, 'lo', 13, 1002, 'According to Chrysippus, when is a conditional sound?', 'When the antecedent is universally accepted by the community', 'When the consequent follows necessarily from the antecedent', 'When both parts are verified by independent observation', 'When it can be negated without generating a contradiction', 'b'),
(11, 'lo', 13, 1003, 'What is the first of the Stoic indemonstrable argument forms?', 'Modus tollens: "If P, then Q; not-Q; therefore not-P"', 'Disjunctive syllogism: "Either P or Q; not-P; therefore Q"', 'Modus ponens: "If P, then Q; P; therefore Q"', 'Reductio ad absurdum', 'c'),
(11, 'lo', 13, 1004, 'What does "indemonstrable" mean for these Stoic argument forms?', 'An argument that cannot be proved under any circumstances', 'A valid argument pattern that needs no proof — used as a logical axiom', 'An argument that applies only to self-evident cases', 'An argument that relies on the authority of Chrysippus', 'b');

-- Passage 12: Mill: A System of Logic
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(12, 'lo', 13, 1010, 'According to Mill, how does deduction differ from induction?', 'Deduction goes beyond the evidence; induction stays within it', 'Deduction makes explicit what is already implicit in the premises; induction claims more than the evidence strictly entitles', 'Deduction is always reliable; induction is always unreliable', 'Deduction studies particular cases; induction studies universal laws', 'b'),
(12, 'lo', 13, 1011, 'What is the purpose of inductive logic, as Mill describes it?', 'To prove universal truths with logical certainty', 'To provide rules for inferring reliably from the known to the unknown', 'To replace deduction entirely in scientific reasoning', 'To analyze the formal structure of valid deductive arguments', 'b'),
(12, 'lo', 13, 1012, 'What is sufficient to overthrow any universal inductive conclusion?', 'A majority of contradicting instances found by experiment', 'A single counterexample', 'Proof that the premises of the induction are false', 'A valid deductive refutation of the conclusion', 'b'),
(12, 'lo', 13, 1013, 'Can any finite set of confirming instances make an inductive conclusion logically certain?', 'Yes, if the instances are sufficiently numerous and varied', 'Yes, if no counterexample has ever been found', 'No — inductive conclusions can never be made logically certain', 'Only if the conclusion concerns a closed and finite system', 'c'),
(12, 'lo', 13, 1014, 'Mill says the conclusion of a deductive argument is "already, implicitly, contained in its premises." What does this mean?', 'That deductive conclusions are trivially obvious and add nothing new', 'That deduction merely makes explicit what the premises already entailed — unlike induction it does not go beyond them', 'That deductive arguments are circular and therefore invalid', 'That valid deductions require premises stronger than their conclusions', 'b');

-- ============================================================
-- STRATEGY — passages 13-15, lesson_id=17, language_code='st'
-- sort_order bands: passage 13 = 1020-1024, passage 14 = 1030-1034, passage 15 = 1040-1044
-- ============================================================

-- Passage 13: Sun Tzu: Knowing When to Fight
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(13, 'st', 17, 1020, 'What does Sun Tzu identify as "supreme excellence" in strategy?', 'Winning every battle through superior force', 'Breaking the enemy''s resistance without fighting', 'Capturing the most territory in the shortest time', 'Destroying the enemy''s army completely', 'b'),
(13, 'st', 17, 1021, 'Why does Sun Tzu say taking the enemy''s country whole and intact is better than destroying it?', 'It is easier to defend an intact territory than a ruined one', 'Destruction consumes your own resources and creates resentment fuelling future conflict', 'Captured soldiers make better soldiers for your own army', 'An intact country can pay more tribute', 'b'),
(13, 'st', 17, 1022, 'What does Sun Tzu say about a general who cannot control his irritation?', 'He will become recklessly aggressive and unpredictably effective', 'He will launch his men to the assault like swarming ants, with a third slain and the town still untaken', 'He will hesitate at the critical moment and miss his opportunity', 'He will negotiate when he should fight', 'b'),
(13, 'st', 17, 1023, 'What does Sun Tzu mean by "attacking by stratagem"?', 'Using siege warfare to capture fortified cities', 'Achieving victory through indirect means without direct combat', 'Sending spies ahead to weaken the enemy from within', 'Attacking by night to exploit the element of surprise', 'b'),
(13, 'st', 17, 1024, 'What does Sun Tzu say makes victory certain and complete?', 'Superior numbers and better weapons', 'Knowing the enemy and knowing yourself; knowing Heaven and knowing Earth', 'Speed of maneuver and surprise', 'A unified command structure', 'b');

-- Passage 14: Machiavelli: Whether It Is Better to Be Loved or Feared
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(14, 'st', 17, 1030, 'What is Machiavelli''s conclusion when love and fear cannot coexist in one person?', 'It is safer to be loved than feared', 'It is safer to be feared than loved', 'A prince should rely neither on love nor fear but on law', 'A prince should alternate between the two based on circumstances', 'b'),
(14, 'st', 17, 1031, 'Why does Machiavelli say friendships obtained by payments are unreliable?', 'People are naturally suspicious of wealthy rulers', 'Purchased loyalty cannot be relied upon in time of need', 'Payments create envy among those not similarly rewarded', 'Money creates obligations that are impossible to fulfill permanently', 'b'),
(14, 'st', 17, 1032, 'What specific actions does Machiavelli say convert fear into hatred?', 'Excessive taxes and unjust legal punishments', 'Interference with the property of citizens and with their women', 'Arbitrary imprisonment and public executions', 'Changing laws frequently and unpredictably', 'b'),
(14, 'st', 17, 1033, 'According to Machiavelli, what is the sustainable combination a prince should aim for?', 'Loved and wealthy', 'Feared but not hated', 'Loved and powerful', 'Neither loved nor feared but respected', 'b'),
(14, 'st', 17, 1034, 'How does Machiavelli characterize men in general in this passage?', 'Naturally loyal and grateful when treated well', 'Ungrateful, fickle, false, cowardly, and covetous', 'Brave and willing to sacrifice for a just and capable ruler', 'Easily led by reason and moral argument', 'b');

-- Passage 15: Thucydides: The Melian Dialogue (Strategy module)
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(15, 'st', 17, 1040, 'What is the Athenians'' core claim about justice in this passage?', 'Justice always favors the party with the stronger moral case', 'Right is only in question between equals in power; the strong do what they can', 'International norms constrain even the most powerful states', 'Melos has violated justice and must therefore be punished', 'b'),
(15, 'st', 17, 1041, 'Why do the Athenians refuse to make arguments based on their right to empire?', 'They believe such arguments are too complex to explain briefly', 'They consider legal arguments irrelevant and speak directly from power', 'They have no legal basis for the attack on Melos', 'They want to appear generous and avoid appearing aggressive', 'b'),
(15, 'st', 17, 1042, 'What is the Melians'' practical strategic counter-argument?', 'Athens will lose the war against Sparta eventually', 'The norms of justice protect everyone including the powerful; abandoning them exposes Athens to the same treatment', 'The Melians have powerful Spartan allies who will intervene', 'Justice demands that small neutral states be left in peace', 'b'),
(15, 'st', 17, 1043, 'What does the Melian "day of reckoning" predict?', 'That Athens will face divine punishment for its crimes', 'That Athens'' disregard for justice will eventually be used against Athens itself', 'That the surviving Melians will return to seek revenge', 'That other city-states will form a coalition against Athenian expansion', 'b'),
(15, 'st', 17, 1044, 'The Athenians say the strong do what they can and the weak suffer what they must. What kind of reasoning is this?', 'Moral idealism about the duties of powerful states', 'Realpolitik — power determines outcomes, not right', 'Democratic theory applied to international relations', 'Natural law theory applied to the law of nations', 'b');

-- ============================================================
-- SELF-IMPROVEMENT — passages 16-18, lesson_id=21, language_code='si'
-- sort_order bands: passage 16 = 1050-1054, passage 17 = 1060-1064, passage 18 = 1070-1074
-- ============================================================

-- Passage 16: Franklin's Thirteen Virtues
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(16, 'si', 21, 1050, 'What was Franklin''s initial mistaken assumption at the start of his project?', 'That thirteen virtues were too many to practice simultaneously', 'That knowing what is right is sufficient to always do it', 'That a weekly rotation was too rigorous a schedule', 'That moral perfection was not a realistic goal', 'b'),
(16, 'si', 21, 1051, 'How did Franklin structure his tracking system?', 'A daily journal with written reflections on each virtue', 'A little book with one page per virtue, seven columns for days of the week, and black spots marking faults', 'A monthly list of goals reviewed at the end of each month', 'A series of letters to a friend describing his moral progress', 'b'),
(16, 'si', 21, 1052, 'Why did Franklin choose Temperance as the first virtue to practice?', 'It was the easiest virtue to observe and track', 'It fortifies the faculties — the clarity and self-control — needed to practice the remaining twelve', 'His physician recommended it for health reasons', 'It was considered by the ancient philosophers to be the most important virtue', 'b'),
(16, 'si', 21, 1053, 'How did Franklin cycle through all thirteen virtues in a year?', 'Twice — one full cycle every six months', 'Three times — one virtue every four weeks', 'Four times — thirteen weeks per cycle', 'Once — one virtue per month', 'c'),
(16, 'si', 21, 1054, 'What behavioral insight does Franklin articulate that anticipates modern behavioral science?', 'Good intentions are sufficient to change behavior over time', 'Contrary habits must be broken and new ones established before conduct can be relied upon', 'Willpower alone is enough to overcome any established bad habit', 'Virtuous behavior comes naturally once a person understands its importance', 'b');

-- Passage 17: Epictetus on What We Control
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(17, 'si', 21, 1060, 'Which of the following does Epictetus say IS within our control?', 'Our body and its health', 'Our reputation among others', 'Our opinion, pursuit, desire, and aversion', 'Our command and authority over others', 'c'),
(17, 'si', 21, 1061, 'How does Epictetus describe things that are NOT in our control?', 'Valuable but secondary to inner goods', 'Weak, slavish, restrained, and belonging to others', 'Neutral — neither good nor bad in themselves', 'Dangerous and to be actively avoided', 'b'),
(17, 'si', 21, 1062, 'What does Epictetus say will happen if you treat external things as if they were your own?', 'You will become more powerful and effective in the world', 'You will be hindered, lament, be disturbed, and find fault with gods and men', 'You will achieve more than those who limit their ambitions', 'You will impress others with the scale of your ambition', 'b'),
(17, 'si', 21, 1063, 'What is Epictetus''s positive claim for the person who applies his principle correctly?', 'They will accumulate great wealth and a lasting reputation', 'No one will hurt them, they will have no enemies, and they will not be harmed', 'They will become completely indifferent to the suffering of others', 'They will achieve full freedom from all social obligation', 'b'),
(17, 'si', 21, 1064, 'Reputation is explicitly listed as NOT in our control. Why does the commentary treat this as significant?', 'It is surprising because reputation seems unimportant to Stoics', 'It cuts against deep social instincts — people invest heavily in managing reputation and Epictetus insists this investment is misplaced', 'It means we should never care at all about what others think', 'It implies that all social behavior is ultimately pointless', 'b');

-- Passage 18: Plutarch on Listening
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(18, 'si', 21, 1070, 'What two listening errors does Plutarch identify at the opening of the passage?', 'Interrupting loudly and disagreeing before the speaker finishes', 'Applauding before understanding, and enduring impatiently while preparing a reply', 'Taking obsessive notes and asking too many questions', 'Speaking first and only listening after you have made your own point', 'b'),
(18, 'si', 21, 1071, 'What is the root cause of poor listening, according to Plutarch?', 'A lack of genuine interest in the subject being discussed', 'Want of training — listening is a skill, not a natural talent', 'Intelligence that moves faster than the pace of the speaker', 'Social anxiety about appearing slow or uninformed', 'b'),
(18, 'si', 21, 1072, 'What are the three steps of the attentive listener in Plutarch''s formulation?', 'Hear, summarize, respond with your own view', 'Wait, retain, and then judge', 'Listen, question, and conclude from evidence', 'Observe, record, and evaluate afterward', 'b'),
(18, 'si', 21, 1073, 'What are most poor listeners doing while the speaker is still talking?', 'Thinking about unrelated personal matters', 'Selecting and preparing their own rebuttal', 'Waiting politely for the opportunity to leave', 'Admiring the speaker''s delivery and style', 'b'),
(18, 'si', 21, 1074, 'Whose modern prescriptions does Plutarch''s listening discipline anticipate, according to the commentary?', 'Adam Smith''s Theory of Moral Sentiments and Hume''s philosophy', 'Carnegie''s active listening and Goleman''s empathy', 'Aristotle''s rhetoric and Cicero''s oratory', 'Covey''s seven habits and Frankl''s logotherapy', 'b');

-- ============================================================
-- HISTORY — passages 19-21, lesson_id=25, language_code='hi'
-- sort_order bands: passage 19 = 1080-1084, passage 20 = 1090-1094, passage 21 = 1100-1104
-- ============================================================

-- Passage 19: Thucydides: The Melian Dialogue (History module — empire, power, and the fall of states)
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(19, 'hi', 25, 1080, 'The Athenians explicitly refuse to argue from justice. What do they invoke instead?', 'Their legal right under the Delian League treaty', 'The reality of power — that the strong do what they can and the weak suffer what they must', 'Their cultural and democratic superiority', 'The protection they have offered Melos in the past', 'b'),
(19, 'hi', 25, 1081, 'What is the Melians'' strategic response to the Athenian power argument?', 'They appeal to Spartan intervention', 'Abandoning norms of justice exposes Athens itself to the same treatment on the day of reckoning', 'They argue that Athens has no legal right to attack a neutral city', 'They argue that the gods will punish Athens for its injustice', 'b'),
(19, 'hi', 25, 1082, 'What actually happened to Melos after the dialogue?', 'Melos successfully resisted and remained independent', 'Sparta intervened and negotiated a peace', 'Athens destroyed Melos — men killed, women and children enslaved', 'Melos agreed to pay tribute and retained its autonomy', 'c'),
(19, 'hi', 25, 1083, 'What historical event does Thucydides record shortly after the Dialogue, suggesting the Melians'' warning had force?', 'The Persian invasion of the Greek mainland', 'The catastrophic Athenian expedition against Sicily', 'The assassination of the Athenian general Cleon', 'The Spartan destruction of Athens', 'b'),
(19, 'hi', 25, 1084, 'Which History module concept does the Melian Dialogue most directly illustrate?', 'Pax Romana', 'Blowback — overconfidence generating catastrophic unintended consequences', 'Appeasement of a rising power', 'Unconditional surrender as a strategic demand', 'b');

-- Passage 20: Gibbon: The Fall of Rome
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(20, 'hi', 25, 1090, 'Which historian wrote "The Decline and Fall of the Roman Empire" from which this passage draws?', 'Tacitus', 'Edward Gibbon', 'Polybius', 'Livy', 'b'),
(20, 'hi', 25, 1091, 'The "Pax Romana" covered approximately how many years of Roman stability?', 'Fifty years', 'One hundred years', 'Two hundred years', 'Three hundred years', 'c'),
(20, 'hi', 25, 1092, 'The concept of "overextension" in the History module refers to what pattern?', 'Expanding military power beyond any political control', 'Strategic commitments expanding beyond the economic base that can sustain them', 'Attacking too many enemies simultaneously without adequate reserves', 'Building an empire too rapidly for effective administration', 'b'),
(20, 'hi', 25, 1093, 'What does "institutional erosion" mean in the context of Rome''s fall?', 'The physical decay of Roman roads, aqueducts, and buildings', 'The gradual weakening of constitutional norms — each violation making the next easier and less costly', 'The replacement of Roman institutions with Germanic equivalents', 'The corruption of the army through the recruitment of barbarian foederati', 'b'),
(20, 'hi', 25, 1094, 'When did the Pax Romana effectively end, and which emperor is associated with its close?', 'Under Nero, 68 CE', 'Under Marcus Aurelius, 180 CE', 'Under Constantine, 312 CE', 'Under Diocletian, 284 CE', 'b');

-- Passage 21: Washington's Farewell Address
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(21, 'hi', 25, 1100, 'In what year did Washington deliver his Farewell Address?', '1789', '1796', '1801', '1783', 'b'),
(21, 'hi', 25, 1101, 'The History concept of "consent of the governed" holds that legitimate political authority derives from what?', 'The divine right of the ruler as established by tradition', 'The military strength of the state and its ability to enforce order', 'The agreement and consent of those being governed', 'The wisdom and virtue of elected representatives', 'c'),
(21, 'hi', 25, 1102, 'What does "res publica" literally mean, and what political concept does it express?', 'The power of the Senate — that aristocrats hold authority', 'Public thing — the state belongs to citizens collectively, not to any ruler', 'The laws of the land, which constrain even kings', 'The rights of the people to resist unjust government', 'b'),
(21, 'hi', 25, 1103, 'Washington''s Farewell Address warned most prominently against which two dangers?', 'High taxation and the creation of a standing army', 'Permanent foreign alliances and the spirit of partisan faction', 'Unrestricted immigration and rapid westward expansion', 'A national bank and commercial monopolies', 'b'),
(21, 'hi', 25, 1104, 'What does "grand strategy" mean in the History module context?', 'Military tactics at the battlefield and operational level', 'Long-range coordination of all national instruments of power — military, diplomatic, economic — toward political ends', 'Diplomatic negotiations between rival great powers', 'Economic planning and mobilization for wartime production', 'b');

-- ============================================================
-- PSYCHOLOGY — passages 22-24, lesson_id=29, language_code='ps'
-- sort_order bands: passage 22 = 1110-1114, passage 23 = 1120-1124, passage 24 = 1130-1134
-- ============================================================

-- Passage 22: The Mind Against Itself
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(22, 'ps', 29, 1110, 'The passage frames cognitive biases as what kind of feature of the mind?', 'Failures of intelligence caused by poor education', 'Structural features — shortcuts that work well most of the time but can fail catastrophically at critical moments', 'Emotional reactions produced by stress and anxiety', 'Deliberate distortions introduced by dishonest or self-interested thinkers', 'b'),
(22, 'ps', 29, 1111, 'What is confirmation bias, as defined in this passage?', 'The systematic preference for evidence that confirms existing beliefs', 'The tendency to remember only negative past experiences', 'The bias toward the most recently encountered information', 'The preference for simple over complex explanations', 'a'),
(22, 'ps', 29, 1112, 'What is the anchoring effect?', 'The tendency to rely too heavily on expert opinion in unfamiliar domains', 'Over-reliance on the first number encountered, which bends all subsequent estimates toward it', 'The bias toward physically larger or more prominent objects in perception', 'The tendency to make decisions anchored to past experience rather than future possibilities', 'b'),
(22, 'ps', 29, 1113, 'How does hindsight bias specifically distort organizational learning?', 'It makes future events seem more uncertain and harder to predict', 'Past failures appear attributable to avoidable stupidity rather than genuine uncertainty; past successes appear to reflect brilliance rather than luck', 'It causes leaders to over-plan and become inflexible in implementation', 'It makes people reluctant to try new strategies that have not been proven', 'b'),
(22, 'ps', 29, 1114, 'What is the sunk cost fallacy?', 'The mistake of ignoring future costs when evaluating an ongoing commitment', 'Continuing to invest in something because of past investment, even when future returns do not justify it', 'The systematic tendency to underestimate the cost of large or complex projects', 'Over-reliance on historical financial data when making forward-looking decisions', 'b');

-- Passage 23: Choosing Under Fog
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(23, 'ps', 29, 1120, 'What does Herbert Simon mean by "bounded rationality"?', 'Rationality that applies only within one''s own area of professional expertise', 'Human rationality limited by available information, cognitive capacity, and time — so the mind satisfices rather than optimizes', 'The rational limits set by ethical and legal constraints', 'A reduction in effective intelligence caused by stress and cognitive overload', 'b'),
(23, 'ps', 29, 1121, 'The availability heuristic causes people to judge the probability of events based on what?', 'Published statistical base rates', 'How easily examples come to mind', 'The opinions of trusted experts in the field', 'The most recent data they have encountered', 'b'),
(23, 'ps', 29, 1122, 'What is the framing effect?', 'Being influenced by how information is physically laid out on a page or screen', 'Reaching different decisions based on whether the same information is presented as a gain or a loss', 'The bias toward arguments that use clear headings and visible structure', 'The tendency to believe whatever is stated first in a conversation or document', 'b'),
(23, 'ps', 29, 1123, 'According to the passage, loss aversion means losses are felt approximately how much more intensely than equivalent gains?', 'Equally intensely — the pain of loss and the pleasure of gain are symmetric', 'Twice as intensely', 'Three times as intensely', 'Half as intensely — losses are actually underweighted', 'b'),
(23, 'ps', 29, 1124, 'Why do people cling to failing strategies longer than rational analysis would warrant?', 'Because they genuinely fear change more than continued failure', 'Because loss aversion makes abandoning a past investment feel psychologically worse than continuing it', 'Because they lack information about better available alternatives', 'Because sunk costs represent genuine future value that should not be abandoned', 'b');

-- Passage 24: The Invisible Pull of the Group
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(24, 'ps', 29, 1130, 'What did Solomon Asch''s conformity experiments reveal about individual judgment under group pressure?', 'That people always maintain independent judgment when the correct answer is obvious', 'That roughly 75% of participants agreed with an obviously wrong unanimous group at least once', 'That only less intelligent participants conform to group pressure', 'That conformity disappears when financial incentives are offered for correct answers', 'b'),
(24, 'ps', 29, 1131, 'What is the bystander effect?', 'The tendency to help more readily when you are the only person present than when others are available', 'The tendency for individuals to be less likely to intervene in an emergency when others are present', 'The effect of an audience on the performance quality of a skilled practitioner', 'The tendency to observe social situations rather than participate in them', 'b'),
(24, 'ps', 29, 1132, 'Social proof operates through what self-reinforcing mechanism?', 'Explicit commands and authority from recognized leaders', 'Perceived popularity of a belief increasing its adoption, which increases its perceived popularity further', 'Fear of punishment or social exclusion for nonconformity', 'Rational persuasion by highly credible and trusted sources', 'b'),
(24, 'ps', 29, 1133, 'What is groupthink, as defined in this passage?', 'The tendency for groups to be more creative and less error-prone than isolated individuals', 'A pattern of flawed decision-making where pressure for consensus overrides realistic appraisal of alternatives', 'The efficient process by which groups aggregate and pool their members'' dispersed knowledge', 'The tendency for dominant leaders to override dissenting voices in group discussions', 'b'),
(24, 'ps', 29, 1134, 'What single factor did Asch find dramatically reduced conformity?', 'Paying participants a financial reward for correct answers', 'The presence of a single dissenter — even one who gave a different wrong answer', 'Reducing the group size to fewer than five people', 'Allowing participants to submit their answers anonymously', 'b');

-- ============================================================
-- ELOQUENCE — passages 25-27, lesson_id=33, language_code='el'
-- sort_order bands: passage 25 = 1140-1144, passage 26 = 1150-1154, passage 27 = 1160-1164
-- ============================================================

-- Passage 25: Aristotle on the Three Modes of Persuasion (ethos, pathos, logos)
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(25, 'el', 33, 1140, 'What are Aristotle''s three modes of persuasion?', 'Logos, kairos, and decorum', 'Ethos, pathos, and logos', 'Ethos, kairos, and pathos', 'Logos, anaphora, and ethos', 'b'),
(25, 'el', 33, 1141, 'What is ethos in Aristotle''s framework?', 'An appeal to the emotions of the audience', 'The speaker''s credibility and character — good sense, good character, and goodwill — as a source of persuasion', 'The logical structure and evidence of the argument', 'The timing and context selected for the speech', 'b'),
(25, 'el', 33, 1142, 'According to the module, what happens to pathos when it is detached from logos?', 'It becomes the most powerful form of persuasion on its own', 'It becomes demagoguery — emotion without rational grounding', 'It transforms into ethos through sheer force of delivery', 'It loses all persuasive force and the audience disengages', 'b'),
(25, 'el', 33, 1143, 'What does logos consist of in practice?', 'The speaker''s personal reputation, authority, and prior achievements', 'Data, causal argument, and comparison — the substance of the case itself', 'The emotional register and the delivery style of the speech', 'The audience''s existing shared beliefs and values invoked as premises', 'b'),
(25, 'el', 33, 1144, 'Why does acknowledging your own limitations honestly build ethos rather than undermine it?', 'It distracts the audience from weaknesses in the logical argument', 'It demonstrates good character and good sense — the qualities Aristotle says an audience trusts', 'It makes the speaker appear more relatable and therefore less threatening', 'It fulfills the audience''s expectation that all arguments must have weaknesses', 'b');

-- Passage 26: Cicero on the Duties of the Orator (decorum, structure, exordium, peroration)
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(26, 'el', 33, 1150, 'What does decorum mean in Cicero''s rhetorical framework?', 'Formal politeness and courtesy appropriate to public occasions', 'The fitness of style, tone, content, and register to the specific audience and occasion', 'The ethical obligations the orator owes to truth and to the court', 'The correct length and formal structure of a classical oration', 'b'),
(26, 'el', 33, 1151, 'What is the exordium in classical rhetorical structure?', 'The summary of arguments and final emotional appeal at the close', 'The opening section designed to make the audience attentive, receptive, and well-disposed', 'The central section dedicated to presenting evidence and narration', 'The section explicitly dedicated to refuting the opposing argument', 'b'),
(26, 'el', 33, 1152, 'What three qualities should the audience have after a successful exordium?', 'Persuaded, moved, and committed to the speaker''s cause', 'Attentive (attenti), receptive (dociles), and well-disposed (benivolentes)', 'Informed, entertained, and intellectually challenged', 'Curious, patient, and respectful toward the speaker', 'b'),
(26, 'el', 33, 1153, 'What two functions does the peroration serve?', 'Introducing new evidence and reinforcing the speaker''s credibility', 'Recapitulatio — summarizing arguments — and amplificatio — the final emotional appeal', 'Refuting opponents and anticipating future objections', 'Establishing credentials and orienting the audience to the theme', 'b'),
(26, 'el', 33, 1154, 'What is kairos in rhetorical theory?', 'The emotional register appropriate to the gravity of the subject', 'The right moment and context for a particular message — recognizing when the audience is ready', 'The speaker''s mastery of vocabulary, syntax, and stylistic variation', 'The audience''s demonstrated capacity to follow complex arguments', 'b');

-- Passage 27: Quintilian on the Education of the Orator (enthymeme, stasis, refutation, concession, audience adaptation)
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(27, 'el', 33, 1160, 'What is an enthymeme, as defined in the Eloquence module?', 'A figure of speech that uses sustained irony to make a satirical point', 'A syllogism with an unstated premise that the audience is expected to supply themselves', 'A rhetorical question structured to accuse without direct assertion', 'A tricolon in which the final element reverses the pattern of the first two', 'b'),
(27, 'el', 33, 1161, 'Why is the omission in an enthymeme persuasively powerful?', 'It makes the argument shorter and therefore easier for an audience to follow', 'The audience supplies the missing premise themselves, making them collaborators in reaching the conclusion — and what we supply ourselves we believe more firmly', 'It prevents the audience from identifying structural weaknesses in the logic', 'It allows the speaker to make controversial claims without taking direct responsibility', 'b'),
(27, 'el', 33, 1162, 'What is a concession (concessio) in argumentation?', 'Giving up the debate in order to preserve the relationship', 'Acknowledging the validity of an opposing point before countering it — signaling fairness and disarming defensiveness', 'Restating the opponent''s position in a weaker and more easily refuted form', 'Admitting that your own argument lacks sufficient supporting evidence', 'b'),
(27, 'el', 33, 1163, 'What is stasis theory concerned with?', 'The emotional intensity and pacing of the speaker''s delivery', 'Identifying the central point of genuine dispute — the level at which the argument actually turns: fact, definition, quality, or jurisdiction', 'The correct sequential ordering of arguments within a persuasive speech', 'The relationship between stylistic choices and the substance of rhetorical content', 'b'),
(27, 'el', 33, 1164, 'What is audience adaptation in the Eloquence module?', 'Changing your argument in real time depending on how the audience reacts during delivery', 'Adjusting appeals, style, evidence, and register to the specific audience based on prior analysis of their values and concerns', 'Simplifying your argument to make it accessible to a less technically educated audience', 'Using humor and personal anecdote to build rapport before presenting the main argument', 'b');

-- ============================================================
-- BRAIN TEASERS — passages 28-30, lesson_id=37, language_code='bt'
-- sort_order bands: passage 28 = 1170-1174, passage 29 = 1180-1184, passage 30 = 1190-1194
-- ============================================================

-- Passage 28: The Puzzle-Solver's Toolbox (elimination, working backwards, invariants, parity, reframing)
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(28, 'bt', 37, 1170, 'In the mislabeled boxes puzzle, why does picking one fruit from the "Apples and Oranges" box immediately allow you to label all three boxes?', 'Because that box is always the largest and therefore the most informative', 'Because that label is guaranteed wrong, so one pick reveals its single true contents, and elimination determines the other two without further picks', 'Because the other two boxes can only contain what the first does not contain', 'Because the puzzle is designed to have exactly one logically possible solution', 'b'),
(28, 'bt', 37, 1171, 'In the rope-burning puzzle, why does working backwards produce an immediate answer while working forwards branches unmanageably?', 'Because backward reasoning is always faster than forward reasoning for time-based puzzles', 'The backward question "what produces 45 minutes?" yields a direct deduction; the forward question "what can I do with these ropes?" generates too many branching cases to evaluate', 'Because the puzzle can only be visualized correctly when starting from the end', 'Because 45 is not obtainable by any forward calculation from 60-minute ropes', 'b'),
(28, 'bt', 37, 1172, 'What is an invariant in mathematical puzzle-solving?', 'A fact about the puzzle that is always false regardless of the steps taken', 'A property or quantity preserved by every allowed operation, used to prove impossibility or constrain the solution space', 'A rule that applies only to the initial state of the puzzle before any moves are made', 'A number that remains the same across different instances of the same class of puzzle', 'b'),
(28, 'bt', 37, 1173, 'How does the chessboard tiling argument use an invariant to prove impossibility?', 'By exhaustively counting all possible domino arrangements and finding none that work', 'Every domino must cover one black and one white square; removing two squares of the same colour creates an unequal count that makes tiling provably impossible', 'By showing the board is geometrically too small to accommodate the required number of dominoes', 'By proving that the removed squares are always diagonally adjacent to each other', 'b'),
(28, 'bt', 37, 1174, 'What false assumption does the nine-dot puzzle expose?', 'That four straight lines are an insufficient number for the task', 'That the lines must remain inside the imaginary boundary of the 3x3 grid — a constraint nowhere stated in the problem', 'That the dots must be connected in a specific prescribed order', 'That diagonal lines are not permitted in the solution', 'b');

-- Passage 29: A History of Puzzles and Problem-Solving (Rhind Papyrus, Stomachion, Königsberg, Fibonacci, IMO)
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(29, 'bt', 37, 1180, 'The Rhind Papyrus is significant because it shows that mathematical puzzles and practical calculation were intertwined as far back as when?', 'Around 500 BC in ancient Greece', 'Around 1650 BC in ancient Egypt', 'Around 300 BC in ancient China', 'Around 1000 BC in ancient Mesopotamia', 'b'),
(29, 'bt', 37, 1181, 'How did Euler solve the Königsberg bridges problem?', 'By physically walking every possible route through the city', 'By abstracting the map into a graph and proving the Euler circuit impossible using the even-degree condition', 'By finding the one valid route through systematic trial and elimination', 'By proving the bridges were geometrically too narrow to allow the required path', 'b'),
(29, 'bt', 37, 1182, 'Why is Euler''s Königsberg solution considered a paradigm of mathematical abstraction?', 'It uses extraordinarily complex calculations to reach a simple answer', 'It replaces the physical problem with a structural one, discarding all geographic detail and solving the structure — inventing graph theory in the process', 'It was the first time geometry had ever been applied to a real-world engineering problem', 'It required computational assistance to verify, anticipating modern algorithmic approaches', 'b'),
(29, 'bt', 37, 1183, 'What sequence does Fibonacci''s rabbit problem generate?', 'The sequence of prime numbers: 2, 3, 5, 7, 11...', '1, 1, 2, 3, 5, 8, 13... — each term the sum of the two preceding terms', '1, 2, 4, 8, 16... — each term double the previous', '1, 3, 6, 10, 15... — the triangular numbers', 'b'),
(29, 'bt', 37, 1184, 'What cognitive profile, transferable beyond mathematics, characterizes the best IMO competitors according to the passage?', 'Computational speed and reliable memorization of large bodies of formulae', 'Structural intuition and disciplined creativity — recognizing the underlying structure of a new problem and finding the reframe that makes it tractable', 'Exhaustive and systematic search through all logically possible cases', 'Mastery of a large repertoire of specific named problem-solving techniques', 'b');

-- Passage 30: When Intuition Fails (Monty Hall, birthday paradox, Simpson's paradox)
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(30, 'bt', 37, 1190, 'In the Monty Hall problem, what is the correct strategy and its associated winning probability?', 'Stay with your original door — 2/3 probability of winning', 'Switch to the other door — 2/3 probability of winning', 'It makes no difference — both strategies give exactly 1/2 probability', 'Switch to the other door — exactly 1/2 probability of winning', 'b'),
(30, 'bt', 37, 1191, 'Why does the host''s action of opening a goat door carry information, contrary to the naive intuition that it is irrelevant?', 'The host randomly selects which door to open, spreading probability evenly', 'The host is constrained — he cannot open the car door — so his choice is not random and concentrates the 2/3 probability on the remaining unchosen door', 'The host always opens the door physically closest to the contestant''s original choice', 'The host only opens a door when the contestant''s original pick is correct', 'b'),
(30, 'bt', 37, 1192, 'In the birthday paradox, why is 23 people sufficient for a greater-than-50% chance of a shared birthday?', 'Because 23 is approximately one-sixteenth of 365', 'Because the relevant quantity is pairs of people — 23 people generate 253 distinct pairs, each with a chance of a birthday collision', 'Because human birthdays cluster statistically around a smaller number of calendar dates', 'Because 23 people share on average fewer than 23 distinct birthdays', 'b'),
(30, 'bt', 37, 1193, 'Simpson''s paradox describes what phenomenon in data analysis?', 'A mathematical result that appears to contradict itself when derived by two different valid methods', 'A trend visible in aggregated data that reverses or disappears when the data is broken down by subgroup', 'The tendency for true mathematical paradoxes to appear in otherwise simple and well-defined systems', 'An optical illusion produced by the symmetrical arrangement of statistical patterns', 'b'),
(30, 'bt', 37, 1194, 'What is the antidote to Simpson''s paradox when interpreting real-world data?', 'Always using larger sample sizes to smooth out subgroup effects', 'Disaggregating the data and asking whether a confounding variable drives both the treatment assignment and the outcome', 'Relying exclusively on randomized controlled experiments and rejecting all observational data', 'Averaging across all subgroups with equal weighting regardless of their relative sizes', 'b');
`;export{e as default};
