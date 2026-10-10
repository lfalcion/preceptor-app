var e=`-- Migration 025: Philosophy module expansion — lessons 41–44.
-- Uses language_code='ph' sentinel throughout.

-- ---- Grammar lessons (topics) ----

INSERT OR IGNORE INTO grammar_lessons (id, title, description, sort_order, language_code) VALUES
  (41, 'Epicurus and the Good Life',       'Pleasure, friendship, and the art of tranquil living',          5, 'ph'),
  (42, 'Kant and the Moral Law',           'Duty, universalizability, and treating persons as ends',         6, 'ph'),
  (43, 'Nietzsche — Will to Power',        'Master morality, eternal recurrence, and the Übermensch',        7, 'ph'),
  (44, 'Existentialism and Radical Freedom','Bad faith, absurdism, and authentic existence',                  8, 'ph');

-- ---- Vocabulary (20 key terms, sort_order 361–380) ----

INSERT OR IGNORE INTO vocabulary_items (cyrillic, target_word, english, transliteration, part_of_speech, sort_order, language_code) VALUES

('Hedone',
 'Hedone',
 'The Greek word for pleasure; in Epicurean philosophy, the foundational good toward which all living things naturally orient themselves.',
 'From Greek: hedone = pleasure. Root of "hedonism." Epicurus distinguished katastematic pleasure (stable absence of pain) from kinetic pleasure (active enjoyment).',
 'noun', 361, 'ph'),

('Ataraxia',
 'Ataraxia',
 'A state of untroubled mental tranquility — the highest form of pleasure according to Epicurus, achieved through the removal of fear and desire.',
 'From Greek: a- (without) + taraxis (disturbance). Often translated as "serenity" or "equanimity." Epicurus saw it as the goal of the philosophical life.',
 'noun', 362, 'ph'),

('Aponia',
 'Aponia',
 'The absence of physical pain; for Epicurus, the bodily correlate of ataraxia — together they constitute complete Epicurean pleasure.',
 'From Greek: a- (without) + ponos (toil, pain). Aponia is the physical, ataraxia the mental component of Epicurean well-being.',
 'noun', 363, 'ph'),

('Tetrapharmakos',
 'Tetrapharmakos',
 'The "four-fold remedy" attributed to Epicurus: do not fear god, do not fear death, good is easy to get, evil is easy to endure.',
 'From Greek: tetra (four) + pharmakon (remedy, drug). A mnemonic summary of Epicurean therapy for existential anxiety.',
 'noun', 364, 'ph'),

('Categorical Imperative',
 'Categorical Imperative',
 'Kant''s supreme principle of morality: act only according to a maxim that you could at the same time will to become a universal law.',
 'From Kant''s Groundwork for the Metaphysics of Morals (1785). "Categorical" means unconditional — binding regardless of desire or outcome.',
 'noun', 365, 'ph'),

('Universalizability',
 'Universalizability',
 'The Kantian test for a moral maxim: could you consistently will that everyone act on the same principle? If not, the maxim is impermissible.',
 'The first formulation of the Categorical Imperative. Kant''s example: lying fails the universalizability test because universal lying destroys the institution of communication.',
 'noun', 366, 'ph'),

('Deontology',
 'Deontology',
 'The ethical theory holding that actions are inherently right or wrong independent of their consequences, based on duties and rules.',
 'From Greek: deon (duty) + logos (study). Contrasted with consequentialism. Kant is its most influential defender.',
 'noun', 367, 'ph'),

('Kingdom of Ends',
 'Kingdom of Ends',
 'Kant''s ideal community of rational agents who treat one another always as ends in themselves and never merely as means.',
 'The third formulation of the Categorical Imperative. Each person in the Kingdom of Ends is both subject to and legislator of the moral law.',
 'noun', 368, 'ph'),

('Will to Power',
 'Will to Power',
 'Nietzsche''s concept of the fundamental drive in all living things: not the desire for domination over others, but the drive to express, expand, and overcome oneself.',
 'German: Wille zur Macht. Often misread as a doctrine of political domination. Nietzsche''s meaning is closer to self-mastery and creative overcoming.',
 'noun', 369, 'ph'),

('Übermensch',
 'Übermensch',
 'Nietzsche''s ideal figure: a creator of new values who overcomes conventional morality and affirms life without relying on external authorities.',
 'German: über (over/beyond) + Mensch (human). Often translated "Superman" or "Overman." Not a racial concept — Nietzsche explicitly rejected German nationalism.',
 'noun', 370, 'ph'),

('Ressentiment',
 'Ressentiment',
 'Nietzsche''s term for the morality of the weak: a reactive, resentful inversion that relabels the strong''s qualities as evil to compensate for one''s own inability to act.',
 'French term adopted by Nietzsche in On the Genealogy of Morality. Slave morality is born from ressentiment — it defines "good" as the negation of the master''s "bad."',
 'noun', 371, 'ph'),

('Eternal Recurrence',
 'Eternal Recurrence',
 'Nietzsche''s thought experiment: imagine that your life will repeat infinitely, in every detail. Could you affirm it completely? Only the Übermensch can.',
 'Introduced in The Gay Science §341. Not meant as a cosmological claim but as a test of life-affirmation — the ultimate "yes" to existence.',
 'noun', 372, 'ph'),

('Master Morality',
 'Master Morality',
 'Nietzsche''s term for the value system of the noble and powerful: the primary affirmation of one''s own strength, vitality, and creativity as "good," with weakness as "bad."',
 'Contrasted with slave morality in Beyond Good and Evil and the Genealogy. Master morality is self-referential and active; slave morality is reactive and other-directed.',
 'noun', 373, 'ph'),

('Bad Faith',
 'Bad Faith',
 'Sartre''s concept of self-deception in which a person denies their own freedom and responsibility by treating themselves as a fixed object or role.',
 'French: mauvaise foi. Sartre''s example: the waiter who "plays at being a waiter" — he acts as if his role defines his being, denying the freedom that makes him responsible.',
 'noun', 374, 'ph'),

('Radical Freedom',
 'Radical Freedom',
 'Sartre''s claim that human beings are "condemned to be free" — there is no fixed human nature, so we are entirely responsible for who we become through our choices.',
 'Sartre: "existence precedes essence." Unlike a hammer, which has a predetermined purpose, humans define their own essence through choices. This freedom cannot be escaped.',
 'noun', 375, 'ph'),

('Absurdism',
 'Absurdism',
 'Camus''s philosophy: the "absurd" is the collision between the human longing for meaning and the universe''s silence. The right response is revolt — defiant affirmation despite meaninglessness.',
 'From Camus''s The Myth of Sisyphus (1942). Absurdism rejects both religious consolation and philosophical suicide (nihilism). We must imagine Sisyphus happy.',
 'noun', 376, 'ph'),

('Authentic Existence',
 'Authentic Existence',
 'Living in honest acknowledgment of one''s freedom, mortality, and responsibility — as opposed to the inauthenticity of conforming to social roles without reflection.',
 'Key concept in Heidegger and Sartre. Heidegger: authenticity requires facing one''s own death (Sein-zum-Tode — being-toward-death) as a spur to genuine living.',
 'noun', 377, 'ph'),

('Facticity',
 'Facticity',
 'In existentialism, the given facts of one''s situation — birth, body, past, social context — which constrain but do not determine one''s choices.',
 'Sartre: we are always thrown into a situation (facticity) but transcend it through free choices (transcendence). The tension between the two defines the human condition.',
 'noun', 378, 'ph'),

('Existential Angst',
 'Existential Angst',
 'The anxiety that arises from confronting one''s radical freedom and the absence of predetermined values — the mood that discloses the groundlessness of existence.',
 'Heidegger calls it Angst; Sartre calls it anguish. It is not fear of a specific object but the vertigo of confronting unlimited possibility and unlimited responsibility.',
 'noun', 379, 'ph'),

('Thrownness',
 'Thrownness',
 'Heidegger''s term for the condition of finding oneself already in a world with a particular history, language, and set of possibilities one did not choose.',
 'German: Geworfenheit. We are "thrown" into existence without consent. Authenticity means owning one''s thrownness rather than fleeing from it into conformity.',
 'noun', 380, 'ph');

-- ---- Reading passages ----

INSERT OR IGNORE INTO reading_passages (id, title, language_code, sort_order) VALUES
  (31, 'Epicurus: Letter to Menoeceus',           'ph', 4),
  (32, 'Kant: Groundwork for the Metaphysics of Morals', 'ph', 5),
  (33, 'Nietzsche: Beyond Good and Evil §260',    'ph', 6);

-- ============================================================
-- Exercises: Lesson 41 — Epicurus and the Good Life (IDs 424–433)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(424, 41, 'mcq_grammar',
 'Epicurus holds that the highest form of pleasure (hedone) is not intense bodily enjoyment but rather:',
 'Ataraxia — undisturbed mental tranquility achieved by removing fear and desire.',
 '', 'Epicurus distinguishes kinetic pleasures (active enjoyment) from katastematic pleasures (stable states). Ataraxia, the stable freedom from mental disturbance, is the highest pleasure because it is secure and self-sustaining.', 1, 'ph'),

(425, 41, 'mcq_grammar',
 'Epicurus argues that the fear of death is irrational. Which argument does he use?',
 'When death is present, we are no longer there to experience it — death and the subject of experience never coexist.',
 '', 'The argument appears in the Letter to Menoeceus: "Death is nothing to us, since when we exist, death is not yet present, and when death is present, then we do not exist." The symmetry argument: the time before birth did not harm us; the time after death will not either.', 2, 'ph'),

(426, 41, 'mcq_grammar',
 'The Tetrapharmakos is Epicurus''s four-fold remedy for existential anxiety. Which of the following is NOT one of its four claims?',
 'Virtue is sufficient for happiness and requires no pleasure.',
 '', 'The four claims are: (1) do not fear god, (2) do not fear death, (3) good is easy to get, (4) evil is easy to endure. The claim about virtue being sufficient for happiness belongs to the Stoics, not Epicurus.', 3, 'ph'),

(427, 41, 'mcq_grammar',
 'Epicurus argues that friendship is the greatest of all the goods that wisdom provides. What is his primary reason?',
 'Friendship provides security, pleasure, and trust — goods that are both intrinsically valuable and practically indispensable for a tranquil life.',
 '', 'Epicurus held that the pleasures of friendship — conversation, trust, mutual aid — are among the most stable and reliable. Unlike wealth or political power, deep friendship cannot be stripped away by fortune. It also multiplies present pleasures through shared experience.', 4, 'ph'),

(428, 41, 'mcq_grammar',
 'Epicurus founded his philosophical community in a garden in Athens. What does this setting symbolise about his philosophy?',
 'Withdrawal from political life to cultivate friendship and simple pleasures in a community of equals.',
 '', 'The Garden (Kepoi) was deliberately separated from the political and commercial life of the agora. Both women and slaves were admitted — unusual for ancient Athens. The choice reflects Epicurus''s conviction that the good life requires withdrawal from ambition and public honor-seeking.', 5, 'ph'),

(429, 41, 'mcq_grammar',
 'How does Epicurus understand aponia in relation to ataraxia?',
 'Aponia (freedom from physical pain) is the bodily correlate of ataraxia (mental tranquility) — together they constitute complete Epicurean well-being.',
 '', 'Epicurus holds that pleasure in the full sense requires both dimensions: the body must be free from pain (aponia) and the mind from disturbance (ataraxia). Neither is sufficient alone. This is why he recommends a simple diet — not as asceticism but as the most reliable route to bodily ease.', 6, 'ph'),

(430, 41, 'mcq_grammar',
 'What is the core difference between Epicurean and Stoic attitudes toward pleasure?',
 'Epicureans make pleasure (specifically ataraxia) the highest good; Stoics make virtue the highest good and treat pleasure as an indifferent.',
 '', 'Both schools agree that destructive passions should be overcome. But their foundational values differ: for Epicureans, pleasure (properly understood) is the telos; for Stoics, virtue is the only genuine good. This makes Stoicism more demanding — even great pain is compatible with flourishing if borne virtuously.', 7, 'ph'),

(431, 41, 'mcq_grammar',
 'Epicurus advises studying philosophy to achieve a good life. What practical consequence does he draw from this?',
 'Philosophy is not for the young alone — one should philosophise at every age because the work of securing a happy soul is never finished.',
 '', 'Epicurus: "Let no one delay the study of philosophy while young, nor weary of it when old." Philosophy is not preparation for life but the activity of living well. It is ongoing therapy for the soul rather than a body of doctrine to be mastered once.', 8, 'ph'),

(432, 41, 'mcq_grammar',
 'Which of the following best describes Epicurus''s view of the gods?',
 'The gods exist in blissful indifference and do not intervene in human affairs — there is nothing to fear from them.',
 '', 'Epicurus was not an atheist but a theological naturalist. He held that the gods exist in a state of ataraxia, unconcerned with humanity. Fear of divine punishment is therefore irrational — a form of superstition that philosophy should cure.', 9, 'ph'),

(433, 41, 'mcq_grammar',
 'Epicurus is sometimes called a "hedonist" in a pejorative sense implying indulgence. Which response most accurately defends his actual position?',
 'Epicurus advocated modest, stable pleasures and warned that the pursuit of intense pleasures reliably produces greater pain — making his hedonism highly disciplined.',
 '', 'Epicurus himself ate barley bread and drank water. He argued that excessive desire for luxury generates anxiety, dependency, and eventual pain. True Epicurean hedonism is almost ascetic in its preference for simple, secure pleasures over intense, risky ones.', 10, 'ph');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(424, 'Kinetic pleasure — the active enjoyment of food, drink, and company.', 0),
(424, 'Ataraxia — undisturbed mental tranquility achieved by removing fear and desire.', 1),
(424, 'The pleasure of philosophical fame and public recognition.', 0),
(424, 'Aponia alone — the complete absence of physical sensation.', 0),

(425, 'Death is followed by a pleasant afterlife that compensates for earthly suffering.', 0),
(425, 'When death is present, we are no longer there to experience it — death and the subject of experience never coexist.', 1),
(425, 'Death is natural and should be welcomed as part of cosmic order.', 0),
(425, 'The virtuous person has nothing to regret, so death holds no terror.', 0),

(426, 'Do not fear the gods — they are indifferent to human affairs.', 0),
(426, 'Do not fear death — it is nothing to us.', 0),
(426, 'Virtue is sufficient for happiness and requires no pleasure.', 1),
(426, 'Good is easy to get — natural and necessary pleasures are readily available.', 0),

(427, 'Friendship creates political alliances that protect against external enemies.', 0),
(427, 'Friendship provides security, pleasure, and trust — goods that are both intrinsically valuable and practically indispensable for a tranquil life.', 1),
(427, 'Friends help us remember our philosophical lessons when we are distracted.', 0),
(427, 'Friendship is valued because it allows us to benefit others, which is the true good.', 0),

(428, 'Withdrawal from political life to cultivate friendship and simple pleasures in a community of equals.', 1),
(428, 'The garden represents Epicurus''s belief that only nature — not society — can provide genuine pleasure.', 0),
(428, 'Epicurus chose a garden to teach students botany alongside philosophy.', 0),
(428, 'Gardens were the traditional setting for all Athenian philosophical schools.', 0),

(429, 'Aponia is superior to ataraxia because the body''s needs are more urgent than the mind''s.', 0),
(429, 'Aponia (freedom from physical pain) is the bodily correlate of ataraxia (mental tranquility) — together they constitute complete Epicurean well-being.', 1),
(429, 'Aponia and ataraxia are identical — the distinction is merely linguistic.', 0),
(429, 'Ataraxia is achievable without aponia if philosophical training is sufficiently advanced.', 0),

(430, 'Epicureans and Stoics share the same highest good but differ on which pleasures count as genuine.', 0),
(430, 'Epicureans make pleasure (specifically ataraxia) the highest good; Stoics make virtue the highest good and treat pleasure as an indifferent.', 1),
(430, 'Stoics value pleasure more than Epicureans because they see it as the reward for virtue.', 0),
(430, 'Both schools agree that pleasure and virtue are equally valuable components of the good life.', 0),

(431, 'Philosophy should be studied intensively in youth and then applied throughout adult life without further study.', 0),
(431, 'Philosophy is not for the young alone — one should philosophise at every age because the work of securing a happy soul is never finished.', 1),
(431, 'Only the elderly benefit from philosophy, since they have the leisure to devote to it.', 0),
(431, 'Philosophy should be studied only when suffering from specific fears or distress.', 0),

(432, 'The gods actively reward virtuous people and punish the wicked — so we should seek their favor through piety.', 0),
(432, 'The gods do not exist — Epicurus was a covert atheist who retained god-language for political safety.', 0),
(432, 'The gods exist in blissful indifference and do not intervene in human affairs — there is nothing to fear from them.', 1),
(432, 'The gods are identical with nature itself, so respecting nature is equivalent to respecting the divine.', 0),

(433, 'Epicurus was indeed a gross hedonist who taught that intense bodily pleasures were the highest good.', 0),
(433, 'Epicurus advocated modest, stable pleasures and warned that the pursuit of intense pleasures reliably produces greater pain — making his hedonism highly disciplined.', 1),
(433, 'Hedonism is correctly applied to Epicurus because he rejected all moral constraints on pleasure-seeking.', 0),
(433, 'Epicurus rejected hedonism in his later works and adopted a position closer to Stoicism.', 0);

-- ============================================================
-- Exercises: Lesson 42 — Kant and the Moral Law (IDs 434–443)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(434, 42, 'mcq_grammar',
 'Kant''s Categorical Imperative states: "Act only according to that maxim whereby you can at the same time will that it should become a universal law." What does "categorical" mean here?',
 'The imperative is unconditional — binding regardless of your desires or the outcomes it produces.',
 '', 'Kant contrasts categorical imperatives (unconditional moral commands) with hypothetical imperatives (conditional: "if you want X, do Y"). The moral law admits no exceptions based on consequences or personal interest — it binds all rational beings absolutely.', 1, 'ph'),

(435, 42, 'mcq_grammar',
 'Apply the universalizability test to lying. According to Kant, why is lying always impermissible?',
 'If everyone lied, the institution of truthful communication would be destroyed, making lying self-defeating — it cannot be universalized.',
 '', 'Kant''s universalizability test: could you will that everyone act on the same maxim? If universal lying destroys communication, then lying as a maxim cannot be universalized without contradiction. The wrongness of lying derives from this logical failure, not from its harmful consequences.', 2, 'ph'),

(436, 42, 'mcq_grammar',
 'Kant''s second formulation of the Categorical Imperative is: "Act so that you treat humanity, whether in your own person or in that of another, always as an end and never as a means only." What does treating someone "merely as a means" involve?',
 'Using a person as an instrument for your own purposes without respecting their rational autonomy and purposes.',
 '', 'Kant holds that rational beings have dignity — an unconditional worth that cannot be exchanged for price. Using someone merely as a means treats them as a tool without their rational consent. You can use people instrumentally (employ them) without wrong; the wrong is treating them as tools only, ignoring their own rational ends.', 3, 'ph'),

(437, 42, 'mcq_grammar',
 'What is the "Kingdom of Ends" in Kant''s ethics?',
 'An ideal community of rational agents who each legislate moral law as if for all, treating every member as an end in themselves.',
 '', 'The Kingdom of Ends is Kant''s third formulation of the Categorical Imperative. It extends the principle to a social ideal: imagine a community where each person acts only on maxims that could be universal laws, and everyone is treated as an end. This regulative ideal guides action even though it may never be fully realised.', 4, 'ph'),

(438, 42, 'mcq_grammar',
 'How does Kant''s deontology differ from consequentialist ethics such as utilitarianism?',
 'Deontology judges actions by their conformity to duty and rational law; consequentialism judges them by their outcomes.',
 '', 'For Kant, an action is right if performed from duty in accordance with the moral law — regardless of its consequences. For utilitarians, an action is right if it produces the best overall outcome. The clearest difference: Kant insists that some actions are wrong even if they produce good consequences.', 5, 'ph'),

(439, 42, 'mcq_grammar',
 'Kant argues that moral worth comes only from acting out of duty (Pflicht), not from inclination. Which of the following has genuine moral worth according to Kant?',
 'A person who dislikes helping others but does so anyway because it is their duty.',
 '', 'Kant''s counterintuitive claim: the person who naturally enjoys helping others and does so from that enjoyment has no moral credit — they are simply following inclination. Moral worth requires acting from duty alone, against or independent of inclination. This is why Kant says "duty is the necessity of acting from respect for the law."', 6, 'ph'),

(440, 42, 'mcq_grammar',
 'A corporation deceives customers about a product''s safety to maximize profits. Which formulation of the Categorical Imperative most directly condemns this?',
 'The humanity formula — the corporation treats customers merely as means to profit, without respect for their rational autonomy.',
 '', 'The deception treats customers as instruments from which profit can be extracted, suppressing their ability to make informed rational choices. The universalizability test also condemns it: universal deception by corporations would destroy consumer trust and the market itself. Both formulations converge on condemnation.', 7, 'ph'),

(441, 42, 'mcq_grammar',
 'Kant holds that moral law is derived from pure practical reason, not from experience. What does this imply about moral knowledge?',
 'Moral principles are known a priori — they are truths of reason independent of what people happen to desire or what consequences occur.',
 '', 'Kant is a moral rationalist. Just as mathematical truths are not derived from observation, moral truths are derived from reason alone. This is why the Categorical Imperative can be stated as a formal principle without empirical content — it applies to all rational beings regardless of culture, temperament, or history.', 8, 'ph'),

(442, 42, 'mcq_grammar',
 'A classic objection to Kantian ethics: a murderer asks you where your friend is hiding. Kant appears to require that you tell the truth. Which response best defends or challenges this conclusion?',
 'This reveals a genuine tension in Kant''s view: strict deontology can produce intuitively wrong outcomes when duties conflict, which is why many Kantians argue for more nuanced applications.',
 '', 'Kant did indeed hold that lying to the murderer is wrong (in "On a Supposed Right to Lie from Philanthropy"). Most contemporary Kantians find this conclusion unacceptable and argue that Kant''s own framework — especially the humanity formula — permits lying to protect someone''s life. The case reveals the difficulty of applying strict duty-based rules to complex situations.', 9, 'ph'),

(443, 42, 'mcq_grammar',
 'What does Kant mean by "autonomy" in his moral philosophy?',
 'Self-legislation: the capacity of rational beings to impose moral law on themselves through reason, rather than receiving it from external authority.',
 '', 'Autonomy (Greek: autos = self, nomos = law) is the foundation of Kantian dignity. A being is autonomous if it can give itself the moral law through rational reflection. Heteronomy — receiving the law from desire, tradition, or authority — is the opposite and produces only conditional, not moral, obligation.', 10, 'ph');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(434, 'The imperative is categorical because it applies to specific moral categories of people.', 0),
(434, 'The imperative is unconditional — binding regardless of your desires or the outcomes it produces.', 1),
(434, 'Categorical means the imperative can be organized into clear categories of permitted and forbidden acts.', 0),
(434, 'It is categorical in the sense that Aristotle''s categories provided its logical foundation.', 0),

(435, 'Lying is wrong because it usually causes more harm than truth-telling in the long run.', 0),
(435, 'If everyone lied, the institution of truthful communication would be destroyed, making lying self-defeating — it cannot be universalized.', 1),
(435, 'Lying is impermissible because God commands truthfulness in all circumstances.', 0),
(435, 'Lying violates a social contract that all members of society have implicitly accepted.', 0),

(436, 'Treating someone as a means involves recognizing their instrumental value in achieving your goals.', 0),
(436, 'Using a person as an instrument for your own purposes without respecting their rational autonomy and purposes.', 1),
(436, 'Treating someone as a means is only wrong when the person objects to being used.', 0),
(436, 'Any instrumental use of another person — including employment — is morally forbidden.', 0),

(437, 'The ideal community described in the New Testament where all people love one another.', 0),
(437, 'An ideal community of rational agents who each legislate moral law as if for all, treating every member as an end in themselves.', 1),
(437, 'A political theory about how kingdoms should be governed according to the ends of the state.', 0),
(437, 'A metaphor for Kant''s own university at Königsberg, which he saw as a model community.', 0),

(438, 'Deontology and consequentialism agree that good outcomes define right action but disagree on how to measure outcomes.', 0),
(438, 'Deontology judges actions by their conformity to duty and rational law; consequentialism judges them by their outcomes.', 1),
(438, 'Both deontology and consequentialism are forms of virtue ethics that differ only in emphasis.', 0),
(438, 'Deontology focuses on individual rights while consequentialism focuses on collective welfare — they agree on method.', 0),

(439, 'A person who naturally loves others and helps them from genuine compassion.', 0),
(439, 'A person who dislikes helping others but does so anyway because it is their duty.', 1),
(439, 'A person who helps others only when it produces a good outcome.', 0),
(439, 'A person who helps others because doing so gives them personal satisfaction.', 0),

(440, 'The universalizability formula — universal deception cannot be consistently willed.', 0),
(440, 'The humanity formula — the corporation treats customers merely as means to profit, without respect for their rational autonomy.', 1),
(440, 'The Kingdom of Ends formula — the corporation violates the ideal community of rational agents.', 0),
(440, 'All three formulations are equally applicable and none is more direct than the others.', 0),

(441, 'Moral knowledge is derived from experience and refined through social consensus over time.', 0),
(441, 'Moral principles are known a priori — they are truths of reason independent of what people happen to desire or what consequences occur.', 1),
(441, 'Moral principles are known through divine revelation and confirmed by reason afterward.', 0),
(441, 'Moral knowledge is relative to culture and cannot be derived from pure reason alone.', 0),

(442, 'Kant is clearly wrong and the case proves that deontology must be abandoned.', 0),
(442, 'Kant is clearly right — telling the truth even to the murderer is the only genuinely moral act.', 0),
(442, 'This reveals a genuine tension in Kant''s view: strict deontology can produce intuitively wrong outcomes when duties conflict, which is why many Kantians argue for more nuanced applications.', 1),
(442, 'The case is irrelevant to Kantian ethics because ethics only applies to everyday situations, not extreme hypotheticals.', 0),

(443, 'Autonomy means freedom from all social constraints so that individuals can pursue their own desires.', 0),
(443, 'Self-legislation: the capacity of rational beings to impose moral law on themselves through reason, rather than receiving it from external authority.', 1),
(443, 'Autonomy is the political right of nations to govern themselves without foreign interference.', 0),
(443, 'Kant borrowed the concept of autonomy from Rousseau and used it with the same meaning.', 0);

-- ============================================================
-- Exercises: Lesson 43 — Nietzsche: Will to Power (IDs 444–453)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(444, 43, 'mcq_grammar',
 'Nietzsche''s "will to power" is often misread as a desire for domination over others. What does Nietzsche actually mean by the term?',
 'The fundamental drive to express, expand, and overcome oneself — to create, grow, and discharge one''s strength.',
 '', 'Nietzsche explicitly distinguishes the will to power from mere political ambition. In Beyond Good and Evil and Zarathustra, the highest expression of will to power is artistic creation and self-overcoming, not conquest. The politician who craves power over others is, in Nietzsche''s view, often driven by hidden weakness and ressentiment.', 1, 'ph'),

(445, 43, 'mcq_grammar',
 'What is Nietzsche''s distinction between "master morality" and "slave morality"?',
 'Master morality affirms one''s own strength as "good"; slave morality reactively labels the master''s qualities as "evil" to compensate for its own powerlessness.',
 '', 'In the Genealogy of Morality, Nietzsche traces two historical value systems. Masters create values from strength: "I am good, therefore what is unlike me is bad." Slaves cannot act but can resent: "They are evil, therefore we are good." Slave morality is reactive and other-directed; master morality is active and self-referential.', 2, 'ph'),

(446, 43, 'mcq_grammar',
 'Nietzsche introduces the thought experiment of eternal recurrence in The Gay Science. What is its purpose?',
 'To serve as a test of life-affirmation: can you affirm your life so completely that you would will its infinite repetition?',
 '', 'Eternal recurrence is not a cosmological thesis (Nietzsche does not argue the universe literally repeats). It is a test: if a demon told you your life would repeat eternally in every detail, would you despair or rejoice? Only the person who has genuinely affirmed their existence can answer: "once more, and innumerable times more!"', 3, 'ph'),

(447, 43, 'mcq_grammar',
 'The Übermensch is Nietzsche''s ideal figure. Which of the following is most accurate?',
 'A creator of new values who overcomes conventional morality and affirms life without relying on God or tradition.',
 '', 'The Übermensch is not a racial or biological type — Nietzsche explicitly mocked German nationalism. The Übermensch creates values where the "death of God" has left a vacuum. Thus Spoke Zarathustra presents this as a goal for humanity, not a description of any existing person.', 4, 'ph'),

(448, 43, 'mcq_grammar',
 'Nietzsche declares "God is dead" in The Gay Science. What does this mean philosophically?',
 'The metaphysical and moral framework grounded in Christian theism has lost its authority in modern Europe, creating a crisis of values.',
 '', 'Nietzsche is not making an atheistic argument — he assumes God''s non-existence and asks what follows. "God is dead and we have killed him" is a cultural diagnosis: the authority of Christian morality, which organized European values for centuries, has collapsed. The crisis is not God''s death but the nihilism it produces if new values are not created.', 5, 'ph'),

(449, 43, 'mcq_grammar',
 'What is "ressentiment" in Nietzsche''s account of slave morality?',
 'The reactive resentment of the powerless, which inverts values — calling the strong ''evil'' to manufacture a sense of superiority from powerlessness.',
 '', 'Nietzsche borrows the French term ressentiment to capture something untranslatable: a festering resentment that cannot find active expression and so turns inward, becoming the engine of a new value system. He sees this as the root of Christian moral psychology — the inversion that made "meekness" a virtue and "pride" a sin.', 6, 'ph'),

(450, 43, 'mcq_grammar',
 'Nietzsche''s Zarathustra teaches that the human being is "something that shall be overcome." What does this mean?',
 'Humanity is not an end state but a transition — we should strive to go beyond current human limitations through creative self-overcoming.',
 '', 'Zarathustra''s opening speech describes humans as a rope stretched between beast and Übermensch — a dangerous crossing. Nietzsche does not advocate biological evolution but cultural and moral self-overcoming: creating new values rather than inheriting old ones, affirming life rather than negating it.', 7, 'ph'),

(451, 43, 'mcq_grammar',
 'Nietzsche is highly critical of both utilitarianism and Kantian ethics. Which criticism does he level at both?',
 'Both impose a common moral standard that levels individuals and suppresses the excellence of exceptional persons.',
 '', 'Nietzsche objects to universalizing ethics in general: both Kant (categorical law for all rational beings) and utilitarianism (maximize aggregate happiness) flatten individual distinction into a common standard. For Nietzsche, greatness requires differentiation — treating all moral agents as interchangeable destroys the conditions for exceptional achievement.', 8, 'ph'),

(452, 43, 'mcq_grammar',
 'How does Nietzsche''s "perspectivism" relate to his critique of traditional morality?',
 'Perspectivism holds that all knowledge and value arise from particular perspectives — there is no "God''s-eye view." Traditional morality falsely presents one perspective as universal.',
 '', 'Nietzsche argues that claims to objective, universal morality are themselves expressions of a particular perspective (usually that of the priest or the herd). Recognizing this does not lead to nihilism — it leads to the honest acknowledgment that value creation is always perspectival, and the Übermensch creates honestly rather than hiding behind false universals.', 9, 'ph'),

(453, 43, 'mcq_grammar',
 'Which Nietzschean concept best explains the phenomenon of someone who publicly condemns wealth while privately envying the wealthy?',
 'Ressentiment — the reactive resentment of those who cannot act, expressed as moral condemnation of what they secretly desire.',
 '', 'Ressentiment operates precisely by masking desire as moral principle. The person who lacks the strength to acquire wealth or power cannot discharge their will to power through action, so they convert their powerlessness into a moral stance: the wealthy are corrupt, greed is evil. The condemnation is a disguised form of the same desire it condemns.', 10, 'ph');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(444, 'The instinctive human drive to dominate, control, and subjugate other people.', 0),
(444, 'The fundamental drive to express, expand, and overcome oneself — to create, grow, and discharge one''s strength.', 1),
(444, 'The political will of the state to extend its power over other nations.', 0),
(444, 'A Nietzschean term for the biological drive toward survival and reproduction.', 0),

(445, 'Master morality is rational and universal; slave morality is emotional and culturally specific.', 0),
(445, 'Master morality affirms one''s own strength as "good"; slave morality reactively labels the master''s qualities as "evil" to compensate for its own powerlessness.', 1),
(445, 'Master morality is medieval aristocratic ethics; slave morality is modern democratic ethics — both are equally valid.', 0),
(445, 'The distinction is entirely about social class: masters are aristocrats, slaves are workers.', 0),

(446, 'To provide a cosmological argument proving that time is cyclical and history repeats.', 0),
(446, 'To serve as a test of life-affirmation: can you affirm your life so completely that you would will its infinite repetition?', 1),
(446, 'To demonstrate that free will is illusory because the future is already determined by the past.', 0),
(446, 'To offer consolation for those who fear death by showing they have lived before and will live again.', 0),

(447, 'A biologically superior human being bred through eugenic selection.', 0),
(447, 'A creator of new values who overcomes conventional morality and affirms life without relying on God or tradition.', 1),
(447, 'A German national hero who embodies the warrior spirit of the Aryan race.', 0),
(447, 'The ideal Kantian moral agent who perfectly follows the categorical imperative.', 0),

(448, 'Nietzsche is arguing that theism is logically incoherent and that God never existed.', 0),
(448, 'The metaphysical and moral framework grounded in Christian theism has lost its authority in modern Europe, creating a crisis of values.', 1),
(448, 'The phrase means that religious institutions have become politically irrelevant.', 0),
(448, 'Nietzsche is predicting that science will soon disprove every major religious claim.', 0),

(449, 'A French philosophical term for the natural human emotion of resentment, which Nietzsche endorses as healthy.', 0),
(449, 'The reactive resentment of the powerless, which inverts values — calling the strong ''evil'' to manufacture a sense of superiority from powerlessness.', 1),
(449, 'A Nietzschean term for the legitimate anger of the oppressed against their oppressors.', 0),
(449, 'The philosophical attitude of refusing to accept the world as it is and working to change it.', 0),

(450, 'Humans should undergo biological modification to transcend their physical limitations.', 0),
(450, 'Humanity is not an end state but a transition — we should strive to go beyond current human limitations through creative self-overcoming.', 1),
(450, 'The human form is morally inferior and should be eliminated to make way for a higher species.', 0),
(450, 'Nietzsche means that social progress will eventually produce a utopian society beyond current suffering.', 0),

(451, 'Both are atheistic philosophies that replace God with nature as the source of moral law.', 0),
(451, 'Both impose a common moral standard that levels individuals and suppresses the excellence of exceptional persons.', 1),
(451, 'Both mistakenly derive ethics from reason alone rather than from lived experience and instinct.', 0),
(451, 'Nietzsche praised utilitarianism but criticized Kant — he did not criticize both equally.', 0),

(452, 'Perspectivism is a form of relativism that holds all moral views are equally valid.', 0),
(452, 'Perspectivism holds that all knowledge and value arise from particular perspectives — there is no "God''s-eye view." Traditional morality falsely presents one perspective as universal.', 1),
(452, 'Perspectivism is Nietzsche''s theory of visual perception applied metaphorically to moral disagreement.', 0),
(452, 'Perspectivism means that individuals should only accept moral claims endorsed by their own culture.', 0),

(453, 'Autonomy — the person is exercising their right to self-determination in choosing their own values.', 0),
(453, 'Ressentiment — the reactive resentment of those who cannot act, expressed as moral condemnation of what they secretly desire.', 1),
(453, 'The Übermensch impulse — the person is attempting to create new values appropriate to their condition.', 0),
(453, 'Will to power — the person is exercising their natural drive to express their energy through moral judgment.', 0);

-- ============================================================
-- Exercises: Lesson 44 — Existentialism and Radical Freedom (IDs 454–463)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(454, 44, 'mcq_grammar',
 'Sartre''s famous phrase "existence precedes essence" inverts the traditional metaphysical order. What does it mean?',
 'Human beings have no predetermined nature or purpose — we exist first, then define ourselves through choices.',
 '', 'Traditional metaphysics (and theology) held that a thing''s essence (what it is) precedes its existence (that it is). A hammer is designed with a purpose before it is made. Sartre argues humans are the reverse: we exist without a predetermined purpose and create our essence through the choices we make over a lifetime.', 1, 'ph'),

(455, 44, 'mcq_grammar',
 'What is "bad faith" (mauvaise foi) in Sartre''s philosophy?',
 'Self-deception in which a person denies their radical freedom by treating themselves as a fixed object determined by their role, nature, or circumstances.',
 '', 'Sartre''s famous example: the waiter who plays at being a waiter, performing his role with excessive precision, as if being a waiter were a fixed essence rather than a choice. Bad faith is the attempt to escape the vertigo of freedom by pretending you have no choice — "I had no option," "that''s just who I am."', 2, 'ph'),

(456, 44, 'mcq_grammar',
 'Sartre argues we are "condemned to be free." What does this mean?',
 'Freedom cannot be escaped — even refusing to choose is itself a choice, and we are always fully responsible for what we become.',
 '', 'The condemnation is that freedom is not a gift we can return. Even in situations where we claim we "had no choice," Sartre insists a choice was made — to comply, to submit, to remain. There is no neutral ground from which to opt out of the responsibility that freedom entails.', 3, 'ph'),

(457, 44, 'mcq_grammar',
 'Camus describes the "absurd" as a collision. What two things collide to produce the absurd?',
 'The human longing for meaning, clarity, and purpose collides with the universe''s complete silence and indifference.',
 '', 'Camus: "The absurd is born from the confrontation of the human need and the unreasonable silence of the world." Absurdity is not in humans alone (who seek meaning) or in the world alone (which offers none) but in their relationship — in the gap that cannot be bridged.', 4, 'ph'),

(458, 44, 'mcq_grammar',
 'Camus argues that three responses to the absurd are possible. Which does he endorse?',
 'Revolt — defiant refusal to accept the absurd while continuing to live and affirm life in spite of it.',
 '', 'Camus rejects: (1) philosophical suicide — adopting a metaphysical belief system (like religion) that dissolves the absurd by providing transcendent meaning; (2) physical suicide — eliminating the consciousness that feels the absurd. The authentic response is revolt: living fully and defiantly despite the absence of meaning.', 5, 'ph'),

(459, 44, 'mcq_grammar',
 '"One must imagine Sisyphus happy." What does Camus mean by this conclusion?',
 'Sisyphus''s defiant awareness of his condition transforms his meaningless labor into an act of self-affirmation — happiness is created in the revolt itself.',
 '', 'Sisyphus''s punishment is to roll his rock up a hill for eternity, knowing it will always roll back. Camus argues that in the moment of descent — when Sisyphus walks back down knowing what awaits — his conscious revolt transforms his fate. He does not hope for escape; he owns his condition. That ownership is a form of freedom.', 6, 'ph'),

(460, 44, 'mcq_grammar',
 'What is "facticity" in Sartrean existentialism?',
 'The given facts of one''s situation — birth, body, history, social context — that constrain but do not determine one''s choices.',
 '', 'Facticity is the "thereness" of our situation: we did not choose our body, our historical moment, our family, or our language. But facticity is only the material of our existence — we always transcend it through free choices. The tension between facticity (what is given) and transcendence (what we make of it) defines the human situation.', 7, 'ph'),

(461, 44, 'mcq_grammar',
 'A soldier says: "I had no choice — I was following orders." From a Sartrean perspective, what is wrong with this claim?',
 'It is bad faith: the soldier chose to follow orders, and denying that choice denies their freedom and moral responsibility.',
 '', 'This is a paradigm case of bad faith — treating oneself as a determined object (soldier who follows orders) rather than a free subject who chooses. The soldier''s choice to obey is a choice, even if made under extreme pressure. Sartre''s point is not that all choices are equally difficult but that responsibility cannot be handed over to a role or authority.', 8, 'ph'),

(462, 44, 'mcq_grammar',
 'Heidegger argues that authentic existence requires confronting one''s "being-toward-death" (Sein-zum-Tode). What is the philosophical point?',
 'Owning one''s mortality as a defining feature of existence forces one to live with genuine urgency and take responsibility for one''s choices.',
 '', 'Heidegger argues that most people flee from the awareness of death into das Man ("the they") — losing themselves in social convention and distraction. Confronting one''s own death — not as an abstraction but as a certainty that will terminate this particular existence — is what individuates and makes authentic choice possible.', 9, 'ph'),

(463, 44, 'mcq_grammar',
 'What distinguishes existentialism''s account of moral life from Kant''s?',
 'Existentialism denies that there are universal moral principles derived from reason — each person must create their own values in the absence of any given essence or law.',
 '', 'Kant grounds morality in universal rational law applicable to all beings. Sartre denies any such universal foundation: existence precedes essence means there is no human nature from which universal moral principles can be derived. Each person is radically responsible for creating their own values — a more vertiginous responsibility than Kant''s.', 10, 'ph');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(454, 'Human beings are fundamentally rational animals whose essence is determined by their species nature.', 0),
(454, 'Human beings have no predetermined nature or purpose — we exist first, then define ourselves through choices.', 1),
(454, 'Existence is more important than abstract essences because lived experience is what really matters.', 0),
(454, 'The phrase means that material conditions of existence determine what kind of essence a person can develop.', 0),

(455, 'The natural human tendency to project one''s own feelings onto other people and situations.', 0),
(455, 'Self-deception in which a person denies their radical freedom by treating themselves as a fixed object determined by their role, nature, or circumstances.', 1),
(455, 'Deliberately lying to others about one''s true motives and intentions.', 0),
(455, 'A failure of epistemic humility — believing you know more than you do about your own nature.', 0),

(456, 'Sartre celebrates freedom as a gift — being "condemned" is ironic since freedom is the greatest good.', 0),
(456, 'Freedom cannot be escaped — even refusing to choose is itself a choice, and we are always fully responsible for what we become.', 1),
(456, 'Humans are biologically programmed to be free — freedom is our genetic inheritance, hence inescapable.', 0),
(456, 'The condemnation refers to the social judgment that free individuals receive from conformist societies.', 0),

(457, 'The collision between rational thought and emotional experience in the human mind.', 0),
(457, 'The human longing for meaning, clarity, and purpose collides with the universe''s complete silence and indifference.', 1),
(457, 'The collision between individual freedom and the social constraints that limit it.', 0),
(457, 'The collision between the desire for pleasure and the reality of suffering.', 0),

(458, 'Despair — recognizing that life is meaningless and allowing that recognition to reduce all striving.', 0),
(458, 'Philosophical suicide — adopting a religion that resolves the absurd by providing transcendent meaning.', 0),
(458, 'Revolt — defiant refusal to accept the absurd while continuing to live and affirm life in spite of it.', 1),
(458, 'Physical suicide — removing the consciousness that experiences the painful gap between need and silence.', 0),

(459, 'Sisyphus is happy because in time he will forget the futility of his task and find distraction.', 0),
(459, 'Sisyphus''s defiant awareness of his condition transforms his meaningless labor into an act of self-affirmation — happiness is created in the revolt itself.', 1),
(459, 'Sisyphus is happy because the rock will eventually reach the top and his punishment will end.', 0),
(459, 'Sisyphus is happy because physical labor is intrinsically rewarding regardless of its purpose.', 0),

(460, 'The essential facts about what a person truly is beneath the surface of their social roles.', 0),
(460, 'The given facts of one''s situation — birth, body, history, social context — that constrain but do not determine one''s choices.', 1),
(460, 'Sartre''s term for the physical facts of the world as opposed to the meanings we project onto them.', 0),
(460, 'The factual record of a person''s past choices, which determines their moral character.', 0),

(461, 'The soldier is correct — under extreme coercion, moral responsibility is genuinely suspended.', 0),
(461, 'It is bad faith: the soldier chose to follow orders, and denying that choice denies their freedom and moral responsibility.', 1),
(461, 'The claim reveals existential angst — the soldier is confronting the groundlessness of their situation.', 0),
(461, 'The soldier''s claim is valid if the alternative was death, which removes the possibility of free choice.', 0),

(462, 'Death reminds us that life is meaningless, motivating us to avoid suffering by disengaging from ambition.', 0),
(462, 'Owning one''s mortality as a defining feature of existence forces one to live with genuine urgency and take responsibility for one''s choices.', 1),
(462, 'Being-toward-death is Heidegger''s argument for belief in an afterlife as the only authentic response to mortality.', 0),
(462, 'The concept describes the gradual physical deterioration that shapes all human projects.', 0),

(463, 'Existentialism agrees with Kant that reason grounds morality but locates reason in the individual rather than in universal rational nature.', 0),
(463, 'Existentialism denies that there are universal moral principles derived from reason — each person must create their own values in the absence of any given essence or law.', 1),
(463, 'Both existentialism and Kantian ethics ground morality in freedom — they differ only on what freedom requires.', 0),
(463, 'Existentialism rejects Kant''s formalism but accepts his conclusion that the categorical imperative is binding.', 0);
`;export{e as default};
