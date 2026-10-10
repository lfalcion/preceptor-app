var e=`-- Migration 012: Philosophy module seed data.
-- Uses language_code='ph' sentinel throughout.

-- ---- Grammar lessons (topics) ----

INSERT OR IGNORE INTO grammar_lessons (id, title, description, sort_order, language_code) VALUES
(9,  'The Stoics',      'Virtue, resilience, and the dichotomy of control', 1, 'ph'),
(10, 'Plato',           'Forms, the soul, and the examined life',            2, 'ph'),
(11, 'Aristotle',       'Virtue ethics, logic, and the good life',           3, 'ph'),
(12, 'Utilitarianism',  'The greatest good for the greatest number',         4, 'ph');

-- ---- Vocabulary (20 key terms, sort_order 201-220) ----

INSERT OR IGNORE INTO vocabulary_items (cyrillic, target_word, english, transliteration, part_of_speech, sort_order, language_code) VALUES
('Logos',
 'Logos',
 'The rational principle or divine reason that governs and gives order to the cosmos.',
 'From Greek: logos = word, reason, account',
 'noun', 201, 'ph'),

('Virtue (Arete)',
 'Virtue (Arete)',
 'Excellence of character; the Stoics held virtue to be the only true good and the foundation of happiness.',
 'From Greek: arete = excellence, virtue',
 'noun', 202, 'ph'),

('Stoicism',
 'Stoicism',
 'A Hellenistic philosophy founded by Zeno of Citium that teaches virtue, reason, and endurance as the path to eudaimonia.',
 'From Greek: Stoa Poikile = Painted Porch, where Zeno taught',
 'noun', 203, 'ph'),

('Dichotomy of Control',
 'Dichotomy of Control',
 'Epictetus''s distinction between things within our power (opinions, impulses) and things outside it (body, reputation, property).',
 'Greek: dichotomia = division into two',
 'noun', 204, 'ph'),

('Apatheia',
 'Apatheia',
 'A state of equanimity free from destructive passions; not indifference, but freedom from irrational emotion.',
 'From Greek: a- (without) + pathos (suffering, passion)',
 'noun', 205, 'ph'),

('Eidos (Forms)',
 'Eidos (Forms)',
 'Plato''s eternal, non-physical archetypes of which material things are imperfect copies; the most real kind of existence.',
 'From Greek: eidos = form, shape, appearance',
 'noun', 206, 'ph'),

('Allegory of the Cave',
 'Allegory of the Cave',
 'Plato''s metaphor in the Republic: prisoners mistake shadows on a cave wall for reality until they turn and see the sun (the Form of the Good).',
 'From Republic Book VII; allegoría = speaking otherwise',
 'noun', 207, 'ph'),

('Philosopher-King',
 'Philosopher-King',
 'Plato''s ideal ruler: a person who has ascended from the cave, grasped the Form of the Good, and is therefore fit to govern justly.',
 'From Republic Books V–VII; combined philosopher + basileus',
 'noun', 208, 'ph'),

('Anamnesis',
 'Anamnesis',
 'Plato''s doctrine that learning is recollection: the soul already knows the Forms from before birth and remembers them through inquiry.',
 'From Greek: ana- (again) + mimneskesthai (to remember)',
 'noun', 209, 'ph'),

('Eros (Platonic)',
 'Eros (Platonic)',
 'In the Symposium, erotic love re-interpreted as a philosophical longing that drives the soul upward toward the Form of Beauty.',
 'From Greek: Eros = god of love; in Plato, a ladder to higher truth',
 'noun', 210, 'ph'),

('Eudaimonia',
 'Eudaimonia',
 'Flourishing or living well; Aristotle''s conception of the highest human good, achieved through virtuous activity in accordance with reason.',
 'From Greek: eu (good) + daimon (spirit)',
 'noun', 211, 'ph'),

('Phronesis',
 'Phronesis',
 'Practical wisdom: the intellectual virtue that enables a person to discern the right action in particular circumstances.',
 'From Greek: phronein = to think wisely',
 'noun', 212, 'ph'),

('Syllogism',
 'Syllogism',
 'A form of deductive reasoning with two premises and a conclusion; Aristotle''s central contribution to logic.',
 'From Greek: syllogismos = reckoning together',
 'noun', 213, 'ph'),

('Hylomorphism',
 'Hylomorphism',
 'Aristotle''s theory that every physical substance is a compound of matter (hyle) and form (morphe).',
 'From Greek: hyle (matter) + morphe (form, shape)',
 'noun', 214, 'ph'),

('Telos',
 'Telos',
 'The end, purpose, or goal toward which a thing naturally aims; for humans, the telos is eudaimonia.',
 'From Greek: telos = end, goal, completion',
 'noun', 215, 'ph'),

('Utility',
 'Utility',
 'The property of producing pleasure or preventing pain; in utilitarian ethics, the measure by which actions are judged right or wrong.',
 'From Latin: utilitas = usefulness; introduced into ethics by Bentham',
 'noun', 216, 'ph'),

('Hedonism',
 'Hedonism',
 'The view that pleasure is the only intrinsic good; Bentham''s utilitarianism is a form of hedonism.',
 'From Greek: hedone = pleasure',
 'noun', 217, 'ph'),

('Greatest Happiness Principle',
 'Greatest Happiness Principle',
 'Mill''s formulation: actions are right in proportion as they tend to promote happiness, wrong as they tend to produce the reverse.',
 'Also called the Principle of Utility; central to Mill''s Utilitarianism (1863)',
 'noun', 218, 'ph'),

('Act Utilitarianism',
 'Act Utilitarianism',
 'The view that each individual action should be evaluated by whether it maximises overall happiness, rather than following a general rule.',
 'Contrast with Rule Utilitarianism; associated with Bentham',
 'noun', 219, 'ph'),

('Rule Utilitarianism',
 'Rule Utilitarianism',
 'The view that one should follow the rule whose general adoption would produce the greatest overall happiness.',
 'Associated with Mill; addresses objections to act utilitarianism',
 'noun', 220, 'ph');

-- ---- Reading passages ----

INSERT OR IGNORE INTO reading_passages (id, title, language_code, sort_order) VALUES
(7, 'Seneca: On the Shortness of Life', 'ph', 1),
(8, 'Plato: The Allegory of the Cave',  'ph', 2),
(9, 'Mill: On Liberty',                 'ph', 3);

-- ---- Exercises: Topic 9 — The Stoics (IDs 104-113) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(104, 9, 'mcq_grammar', 'According to the Stoics, what is the only true good?',
 'Virtue (arete)', '', 'The Stoics held that external goods such as wealth or reputation are "indifferent." Only virtue, entirely within our control, constitutes genuine good.', 1, 'ph'),

(105, 9, 'mcq_grammar', 'What does Epictetus mean by the "dichotomy of control"?',
 'The distinction between what is "up to us" and what is not', '', 'Epictetus opens the Enchiridion by stating that some things are "up to us" (judgements, impulses, desires) and others are not (body, reputation, external events). Happiness follows from focusing only on the former.', 2, 'ph'),

(106, 9, 'mcq_grammar', 'What is "Logos" in Stoic philosophy?',
 'The rational principle that orders the cosmos', '', 'The Stoics held that the universe is permeated by Logos — a divine, rational principle that governs all natural events. Living "according to Logos" means aligning oneself with this rational order.', 3, 'ph'),

(107, 9, 'mcq_grammar', 'What is "apatheia" in Stoic thought?',
 'Freedom from destructive passions through reason', '', 'Apatheia does not mean indifference or numbness. It means freedom from irrational passions (fear, greed) that arise from false beliefs about what is good. The Stoic sage can still feel appropriate emotions such as joy and caution.', 4, 'ph'),

(108, 9, 'mcq_grammar', 'Which Stoic thesis holds that virtue is sufficient for happiness?',
 'Virtue alone is the highest good', '', 'The Stoics argued that external goods are merely "preferred indifferents." Virtue alone — because it is fully within rational control — suffices for flourishing.', 5, 'ph'),

(109, 9, 'mcq_grammar', 'Which philosopher founded the Stoic school?',
 'Zeno of Citium', '', 'Zeno of Citium (c. 334–262 BC) founded the Stoic school in Athens around 300 BC. He taught in the Stoa Poikile (Painted Porch), which gave the school its name.', 6, 'ph'),

(110, 9, 'mcq_grammar', 'How did the Stoics view emotions such as anger and fear?',
 'As the result of false judgements about what is truly good or bad', '', 'For the Stoics, destructive emotions arise from mistaken beliefs — e.g., fearing death because you mistakenly believe death is bad. Correct your beliefs through reason and the destructive emotion disappears.', 7, 'ph'),

(111, 9, 'mcq_grammar', 'What is the Stoic attitude toward death?',
 'Death is not an evil because it is not in our control', '', 'Marcus Aurelius and Epictetus both argue that death, like illness and poverty, is an "indifferent" — not good or bad in itself. What matters is how we respond to the prospect of death, which is within our rational control.', 8, 'ph'),

(112, 9, 'mcq_grammar', 'What did the Stoics call the ideal wise person?',
 'The sage (sophos)', '', 'The Stoic sage is the person who has perfected reason and virtue. Such a person is said to be truly free and happy regardless of external circumstances. The Stoics acknowledged this was an extremely high standard.', 9, 'ph'),

(113, 9, 'mcq_grammar', 'Which Roman emperor wrote a famous Stoic text called "Meditations"?',
 'Marcus Aurelius', '', 'Marcus Aurelius (121–180 AD) wrote his Meditations as a private Stoic journal. The text applies Stoic principles — especially the dichotomy of control and living according to reason — to the daily life of a ruler.', 10, 'ph');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(104, 'Wealth and property', 0), (104, 'Virtue (arete)', 1), (104, 'Pleasure and comfort', 0), (104, 'Fame and reputation', 0),
(105, 'The division of the Roman Empire into two halves', 0), (105, 'The idea that pleasure and pain must be balanced', 0), (105, 'The distinction between what is "up to us" and what is not', 1), (105, 'The split between reason and emotion', 0),
(106, 'A logical fallacy named after Zeno', 0), (106, 'The rational principle that orders the cosmos', 1), (106, 'The Stoic word for personal happiness', 0), (106, 'A debate technique taught in Athens', 0),
(107, 'Complete emotional detachment from other people', 0), (107, 'Freedom from destructive passions through reason', 1), (107, 'The practice of physical endurance training', 0), (107, 'Indifference to the suffering of others', 0),
(108, 'Hedonism', 0), (108, 'Eudaimonism based on external fortune', 0), (108, 'Virtue alone is the highest good', 1), (108, 'The doctrine of original sin', 0),
(109, 'Plato', 0), (109, 'Epicurus', 0), (109, 'Zeno of Citium', 1), (109, 'Aristotle', 0),
(110, 'As natural and necessary parts of a good life', 0), (110, 'As the result of false judgements about what is truly good or bad', 1), (110, 'As gifts from the gods that should be embraced', 0), (110, 'As chemical reactions with no moral significance', 0),
(111, 'Death should be mourned as the greatest evil', 0), (111, 'Death is merely a transition to a better afterlife', 0), (111, 'Death is not an evil because it is not in our control', 1), (111, 'Death must be avoided through virtuous living', 0),
(112, 'The philosopher-king', 0), (112, 'The sage (sophos)', 1), (112, 'The eudaimon', 0), (112, 'The logos-bearer', 0),
(113, 'Julius Caesar', 0), (113, 'Nero', 0), (113, 'Marcus Aurelius', 1), (113, 'Hadrian', 0);

-- ---- Exercises: Topic 10 — Plato (IDs 114-123) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(114, 10, 'mcq_grammar', 'What does the Allegory of the Cave illustrate?',
 'The difference between appearance and reality, and the philosopher''s role', '', 'Prisoners mistake shadows on a cave wall for reality. The philosopher is the prisoner who turns around, exits into sunlight, and returns to help others. It illustrates the ascent from opinion to knowledge.', 1, 'ph'),

(115, 10, 'mcq_grammar', 'What are Plato''s "Forms" (Eidos)?',
 'Eternal, perfect archetypes of which material things are imperfect copies', '', 'For Plato, the Form of Beauty is more real than any beautiful object because it is eternal and unchanging. Material objects merely "participate" in their corresponding Forms.', 2, 'ph'),

(116, 10, 'mcq_grammar', 'What is "anamnesis" in Plato''s philosophy?',
 'The view that learning is recollection of knowledge the soul already possesses', '', 'In the Meno and Phaedo, Plato argues that the soul is immortal and has encountered the Forms before birth. What we call "learning" is really remembering (anamnesis) these pre-natal encounters.', 3, 'ph'),

(117, 10, 'mcq_grammar', 'Who is the "philosopher-king" in Plato''s Republic?',
 'A ruler trained in philosophy who has grasped the Form of the Good', '', 'Plato argues that only a philosopher — trained for decades in mathematics and dialectic — has seen the Form of the Good and is therefore qualified to govern justly.', 4, 'ph'),

(118, 10, 'mcq_grammar', 'In Plato''s Symposium, what does Eros ultimately lead the philosopher toward?',
 'Knowledge of the Form of Beauty itself', '', 'Diotima''s speech describes a "ladder of love": from love of a beautiful body, upward through souls and activities, to the Form of Beauty — unchanging, eternal, pure.', 5, 'ph'),

(119, 10, 'mcq_grammar', 'What is the highest Form in Plato''s metaphysics?',
 'The Form of the Good', '', 'Plato uses the analogy of the sun: as the sun makes visible things visible, the Form of the Good makes all other Forms intelligible and is the source of their being.', 6, 'ph'),

(120, 10, 'mcq_grammar', 'Which method of inquiry is most associated with Socrates as depicted by Plato?',
 'Elenctic dialogue (questioning and cross-examination)', '', 'Socrates famously claimed to know nothing and exposed contradictions in his interlocutors'' beliefs through cross-examination. This elenctic method aims to purge false beliefs and move toward genuine knowledge.', 7, 'ph'),

(121, 10, 'mcq_grammar', 'In Plato''s tripartite soul, which part should rule?',
 'The rational part (reason and wisdom)', '', 'Plato divides the soul into reason, spirit, and appetite. A just soul is one in which reason governs, spirit supports reason, and appetite obeys. When appetite usurps reason, injustice follows.', 8, 'ph'),

(122, 10, 'mcq_grammar', 'What is the main purpose of the sun analogy in the Republic?',
 'To show that the Form of the Good is to the intellect what the sun is to vision', '', 'Just as the sun provides light that makes visible things visible, the Form of the Good provides intelligibility that makes all other Forms knowable. Without it, knowledge would be impossible.', 9, 'ph'),

(123, 10, 'mcq_grammar', 'What does Plato''s "Divided Line" represent?',
 'A ranking of types of knowledge from images up to pure philosophical understanding', '', 'The Divided Line divides reality and knowledge into four segments: shadows/images (imagination), visible objects (belief), mathematical objects (reasoning), and Forms (understanding).', 10, 'ph');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(114, 'The physical structure of Greek prisons', 0), (114, 'The difference between appearance and reality, and the philosopher''s role', 1), (114, 'Why democracy is the best form of government', 0), (114, 'How shadows on walls can teach geometry', 0),
(115, 'Physical blueprints stored in the Library of Alexandria', 0), (115, 'Eternal, perfect archetypes of which material things are imperfect copies', 1), (115, 'The rules of correct logical argument', 0), (115, 'The shapes carved on the walls of the Parthenon', 0),
(116, 'The process of forgetting painful memories', 0), (116, 'The view that learning is recollection of knowledge the soul already possesses', 1), (116, 'A Platonic term for political amnesty', 0), (116, 'The study of past civilisations through archaeology', 0),
(117, 'Any citizen who wins a democratic election', 0), (117, 'A ruler trained in philosophy who has grasped the Form of the Good', 1), (117, 'The wealthiest person in the city-state', 0), (117, 'A general who has never lost a battle', 0),
(118, 'Physical pleasure and bodily beauty', 0), (118, 'Political power over the city-state', 0), (118, 'Knowledge of the Form of Beauty itself', 1), (118, 'The perfect romantic partnership', 0),
(119, 'The Form of Justice', 0), (119, 'The Form of the Good', 1), (119, 'The Form of Beauty', 0), (119, 'The Form of Truth', 0),
(120, 'The lecture method', 0), (120, 'Empirical observation', 0), (120, 'Elenctic dialogue (questioning and cross-examination)', 1), (120, 'Mathematical proof by induction', 0),
(121, 'The appetitive part (desires for food, sex, money)', 0), (121, 'The spirited part (emotions, drive for honour)', 0), (121, 'The rational part (reason and wisdom)', 1), (121, 'All three parts equally', 0),
(122, 'To explain why the earth orbits the sun', 0), (122, 'To show that the Form of the Good is to the intellect what the sun is to vision', 1), (122, 'To argue that gods control all natural phenomena', 0), (122, 'To demonstrate that Athenian farmers should study astronomy', 0),
(123, 'The boundary between Athens and Sparta', 0), (123, 'A ranking of types of knowledge from images up to pure philosophical understanding', 1), (123, 'The division of property among citizens of the Republic', 0), (123, 'A geometric proof about parallel lines', 0);

-- ---- Exercises: Topic 11 — Aristotle (IDs 124-133) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(124, 11, 'mcq_grammar', 'What does Aristotle mean by "eudaimonia"?',
 'Flourishing or living well through virtuous activity in accordance with reason', '', 'Aristotle opens the Nicomachean Ethics stating that the highest good is eudaimonia — activity of the soul in accordance with virtue. It is not a feeling but an ongoing activity, achievable over a complete life.', 1, 'ph'),

(125, 11, 'mcq_grammar', 'What is "phronesis" (practical wisdom) for Aristotle?',
 'The intellectual virtue that enables good judgement in particular situations', '', 'Phronesis is distinct from theoretical knowledge (episteme). It is the capacity to perceive the morally salient features of a situation and choose the virtuous mean — neither excess nor deficiency.', 2, 'ph'),

(126, 11, 'mcq_grammar', 'What is Aristotle''s doctrine of the "mean"?',
 'Virtue lies between excess and deficiency', '', 'Each virtue is a mean between two vices. Courage is the mean between cowardice (deficiency) and recklessness (excess). The mean is relative to the person and situation, and identified by phronesis.', 3, 'ph'),

(127, 11, 'mcq_grammar', 'What is a "syllogism"?',
 'A deductive argument: if the premises are true, the conclusion must be true', '', 'Aristotle formalised the syllogism in the Prior Analytics. Classic form: All men are mortal; Socrates is a man; therefore Socrates is mortal. This was the foundation of Western logic for nearly two millennia.', 4, 'ph'),

(128, 11, 'mcq_grammar', 'What is "hylomorphism"?',
 'Aristotle''s theory that all substances are composed of matter and form', '', 'Hylomorphism (hyle = matter, morphe = form) holds that every physical thing is a compound: matter is the underlying stuff, form is what makes it what it is. Form without matter is impossible in the natural world.', 5, 'ph'),

(129, 11, 'mcq_grammar', 'What is the "telos" of a human being according to Aristotle?',
 'Eudaimonia — flourishing through virtuous, rational activity', '', 'Each natural thing has a telos — an end toward which it naturally develops. The telos of an acorn is to become an oak; the telos of a human is to exercise reason well, living virtuously, constituting eudaimonia.', 6, 'ph'),

(130, 11, 'mcq_grammar', 'How did Aristotle categorise the sciences?',
 'Into theoretical (knowing), practical (acting), and productive (making)', '', 'Aristotle distinguished: theoretical sciences (physics, mathematics, metaphysics — for their own sake), practical sciences (ethics, politics — governing action), and productive sciences (rhetoric, poetics — creating things).', 7, 'ph'),

(131, 11, 'mcq_grammar', 'What is the key difference between Plato''s and Aristotle''s views on Forms?',
 'Plato placed Forms in a separate realm; Aristotle held that form exists within individual things', '', 'Aristotle accepted that things have form, but rejected Plato''s separate, transcendent realm. For Aristotle, the form of a horse exists in each individual horse, not apart from them.', 8, 'ph'),

(132, 11, 'mcq_grammar', 'What did Aristotle consider the highest form of pleasure?',
 'Contemplation (theoria) of truth', '', 'In Nicomachean Ethics Book X, Aristotle argues that theoretical contemplation is the highest happiness because it exercises our most divine faculty (nous), is self-sufficient, and can be sustained longest.', 9, 'ph'),

(133, 11, 'mcq_grammar', 'What does Aristotle mean when he calls humans "political animals"?',
 'Humans can only fully flourish within a polis (political community)', '', 'Aristotle''s Politics opens: "Man is by nature a political animal." He means that the polis is the natural setting for human life — only within a community with laws and shared values can we develop the virtues and achieve eudaimonia.', 10, 'ph');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(124, 'A state of physical pleasure with no pain', 0), (124, 'Flourishing or living well through virtuous activity in accordance with reason', 1), (124, 'A gift from the gods reserved for heroes', 0), (124, 'The absence of all desire', 0),
(125, 'Knowledge of mathematical theorems', 0), (125, 'The intellectual virtue that enables good judgement in particular situations', 1), (125, 'The ability to memorise long philosophical texts', 0), (125, 'Courage in the face of physical danger', 0),
(126, 'Virtue lies between excess and deficiency', 1), (126, 'The average citizen is always right', 0), (126, 'Happiness is the midpoint between pleasure and pain', 0), (126, 'Mathematical means are the basis of ethics', 0),
(127, 'A Greek word for contradiction', 0), (127, 'A deductive argument: if the premises are true, the conclusion must be true', 1), (127, 'A type of religious ceremony in ancient Athens', 0), (127, 'A figure of speech used by orators', 0),
(128, 'Aristotle''s theory that all substances are composed of matter and form', 1), (128, 'A school of painting that uses natural pigments', 0), (128, 'The belief that the world is made of water', 0), (128, 'Plato''s theory of eternal Forms', 0),
(129, 'To accumulate as much wealth as possible', 0), (129, 'To serve the gods through ritual', 0), (129, 'Eudaimonia — flourishing through virtuous, rational activity', 1), (129, 'Physical survival and reproduction', 0),
(130, 'Into wet and dry sciences based on their subject matter', 0), (130, 'Into theoretical (knowing), practical (acting), and productive (making)', 1), (130, 'Into sacred and profane branches of knowledge', 0), (130, 'Into Platonic and non-Platonic disciplines', 0),
(131, 'Plato thought Forms were physical; Aristotle thought they were purely mental', 0), (131, 'Plato placed Forms in a separate realm; Aristotle held that form exists within individual things', 1), (131, 'They agreed entirely on the nature of Forms', 0), (131, 'Aristotle invented Forms; Plato rejected them', 0),
(132, 'Sensory pleasure from food and drink', 0), (132, 'The pleasure of honour and reputation', 0), (132, 'Contemplation (theoria) of truth', 1), (132, 'Competitive victory in athletic games', 0),
(133, 'Humans are naturally ambitious for political power', 0), (133, 'Humans can only fully flourish within a polis (political community)', 1), (133, 'Humans are naturally deceptive like politicians', 0), (133, 'Only humans engage in warfare', 0);

-- ---- Exercises: Topic 12 — Utilitarianism (IDs 134-143) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(134, 12, 'mcq_grammar', 'What is the "Greatest Happiness Principle"?',
 'Actions are right in proportion as they promote happiness, wrong as they produce unhappiness', '', 'John Stuart Mill states in Utilitarianism (1863): "actions are right in proportion as they tend to promote happiness, wrong as they tend to produce the reverse of happiness."', 1, 'ph'),

(135, 12, 'mcq_grammar', 'What is "utility" in the utilitarian sense?',
 'The property of producing pleasure or preventing pain', '', 'Jeremy Bentham defined utility as the property in any object whereby it tends to produce benefit, advantage, pleasure, or happiness, or to prevent pain and unhappiness. The utilitarian calculates actions by their expected utility.', 2, 'ph'),

(136, 12, 'mcq_grammar', 'What is the key difference between act and rule utilitarianism?',
 'Act utilitarianism judges each action separately; rule utilitarianism judges by the rules whose adoption maximises utility', '', 'Act utilitarians calculate the expected utility of each individual action. Rule utilitarians follow the rule whose general adoption produces the most utility — even if breaking it would produce more utility in a specific case.', 3, 'ph'),

(137, 12, 'mcq_grammar', 'How did Bentham propose to measure pleasure and pain?',
 'Through the "hedonic calculus" — weighing intensity, duration, certainty, and other factors', '', 'Bentham''s hedonic calculus evaluates pleasures and pains by: intensity, duration, certainty, propinquity (nearness), fecundity (tendency to produce more pleasure), purity, and extent (how many people are affected).', 4, 'ph'),

(138, 12, 'mcq_grammar', 'How did Mill distinguish "higher" from "lower" pleasures?',
 'Higher pleasures (intellectual, moral) are qualitatively superior to lower (bodily) pleasures', '', 'Mill argued that Bentham''s purely quantitative calculus was inadequate. Pleasures differ in quality: "It is better to be Socrates dissatisfied than a fool satisfied."', 5, 'ph'),

(139, 12, 'mcq_grammar', 'What is a standard objection to act utilitarianism?',
 'It can justify actions that seem clearly unjust if they maximise overall happiness', '', 'Classic objection: act utilitarianism seems to permit framing an innocent person for a crime if doing so would prevent riots and save more lives. This shows that maximising aggregate happiness cannot be the whole story of morality.', 6, 'ph'),

(140, 12, 'mcq_grammar', 'Who is considered the founder of modern utilitarianism?',
 'Jeremy Bentham', '', 'Jeremy Bentham (1748–1832) systematised utilitarian ethics in Introduction to the Principles of Morals and Legislation (1789). His student John Stuart Mill later refined and defended the theory.', 7, 'ph'),

(141, 12, 'mcq_grammar', 'What is the core of Peter Singer''s argument for effective altruism?',
 'We are morally required to prevent suffering whenever we can without sacrificing anything of comparable moral importance', '', 'Singer''s "Famine, Affluence, and Morality" (1972) applies utilitarian logic: if you can prevent something bad without sacrificing anything of comparable importance, you ought to do it.', 8, 'ph'),

(142, 12, 'mcq_grammar', 'Which criticism holds that utilitarianism ignores the separateness of persons?',
 'John Rawls''s critique drawing on the separateness of persons', '', 'John Rawls argued in A Theory of Justice (1971) that utilitarianism treats society as if it were a single person whose satisfactions can be summed. Justice requires principles that respect individual distinctness.', 9, 'ph'),

(143, 12, 'mcq_grammar', 'What is "preference utilitarianism"?',
 'A version of utilitarianism that measures utility as the satisfaction of preferences rather than the experience of pleasure', '', 'Preference utilitarianism (associated with Peter Singer and R.M. Hare) replaces pleasure/pain with preference satisfaction as the measure of utility, avoiding some problems with hedonism.', 10, 'ph');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(134, 'The idea that happiness grows with each generation', 0), (134, 'Actions are right in proportion as they promote happiness, wrong as they produce unhappiness', 1), (134, 'The belief that the greatest pleasures are intellectual', 0), (134, 'The principle that rulers should be the happiest citizens', 0),
(135, 'The usefulness of a tool for a specific task', 0), (135, 'The property of producing pleasure or preventing pain', 1), (135, 'A measure of economic productivity', 0), (135, 'The political power of a government', 0),
(136, 'Act utilitarianism applies only to government; rule utilitarianism to individuals', 0), (136, 'Act utilitarianism judges each action separately; rule utilitarianism judges by the rules whose adoption maximises utility', 1), (136, 'Act utilitarianism was proposed by Mill; rule utilitarianism by Bentham', 0), (136, 'They are identical in practice', 0),
(137, 'By consulting religious authorities', 0), (137, 'Through the "hedonic calculus" — weighing intensity, duration, certainty, and other factors', 1), (137, 'By majority vote in a democratic assembly', 0), (137, 'By observing market prices', 0),
(138, 'Higher pleasures last longer; lower pleasures are more intense', 0), (138, 'Higher pleasures (intellectual, moral) are qualitatively superior to lower (bodily) pleasures', 1), (138, 'Higher pleasures are enjoyed by the rich; lower ones by the poor', 0), (138, 'Mill did not believe in higher and lower pleasures', 0),
(139, 'It does not take pleasure into account at all', 0), (139, 'It can justify actions that seem clearly unjust if they maximise overall happiness', 1), (139, 'It is too similar to Kantian ethics', 0), (139, 'It requires everyone to become a philosopher', 0),
(140, 'John Stuart Mill', 0), (140, 'Immanuel Kant', 0), (140, 'Jeremy Bentham', 1), (140, 'David Hume', 0),
(141, 'That we should give to charity only when it is convenient', 0), (141, 'We are morally required to prevent suffering whenever we can without sacrificing anything of comparable moral importance', 1), (141, 'That individual happiness always outweighs collective welfare', 0), (141, 'That governments, not individuals, bear responsibility for poverty', 0),
(142, 'The Kantian critique', 0), (142, 'Robert Nozick''s rights-based critique', 0), (142, 'John Rawls''s critique drawing on the separateness of persons', 1), (142, 'Aristotle''s teleological critique', 0),
(143, 'The view that utility should be measured only by monetary income', 0), (143, 'A version of utilitarianism that measures utility as the satisfaction of preferences rather than the experience of pleasure', 1), (143, 'The doctrine that higher pleasures should always be preferred', 0), (143, 'Bentham''s original version of utilitarianism', 0);
`;export{e as default};
