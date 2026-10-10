var e=`-- Migration 031: Modern Ethics module seed data.
-- Uses language_code='me' sentinel throughout.
-- Lesson IDs: 57-60 (lessons 41-44 are occupied by ph/lo expansion)
-- Vocabulary sort_order: 441-460 (421-440 occupied by si expansion)
-- Exercise IDs: 584-623 (544-583 occupied by si expansion)
-- Reading passage IDs: 43-45
-- Passage exercise sort_order bands: 1400-1404, 1410-1414, 1420-1424

-- ---- Grammar lessons (topics) ----

INSERT OR IGNORE INTO grammar_lessons (id, title, description, sort_order, language_code) VALUES
  (57, 'Consequentialism', 'Outcomes, utility, and the greatest good',              1, 'me'),
  (58, 'Deontology',       'Duties, rights, and Kant''s categorical imperative',    2, 'me'),
  (59, 'Virtue Ethics',    'Character, flourishing, and Aristotle''s eudaimonia',   3, 'me'),
  (60, 'Applied Ethics',   'Bioethics, AI ethics, and contemporary dilemmas',       4, 'me');

-- ---- Vocabulary (20 key terms, sort_order 441-460) ----

INSERT OR IGNORE INTO vocabulary_items (cyrillic, target_word, english, transliteration, part_of_speech, sort_order, language_code) VALUES
('Consequentialism',
 'Consequentialism',
 'The family of ethical theories that evaluate the moral rightness of actions solely by their outcomes; the paradigm case is utilitarianism.',
 'From Latin: consequi = to follow after; the view that consequences are what morally follow from an act',
 'noun', 441, 'me'),

('Deontology',
 'Deontology',
 'Moral theories that ground the rightness of actions in duties, rules, or rights rather than consequences; associated above all with Immanuel Kant.',
 'From Greek: deon = duty, obligation + logos = study',
 'noun', 442, 'me'),

('Virtue Ethics',
 'Virtue Ethics',
 'An approach to ethics centred on the character of the moral agent rather than on rules or outcomes; asks "What kind of person should I be?" rather than "What should I do?"',
 'From Latin: virtus = excellence, moral strength; traces to Aristotle''s Nicomachean Ethics',
 'noun', 443, 'me'),

('Categorical Imperative',
 'Categorical Imperative',
 'Kant''s supreme principle of morality: an unconditional command that applies to all rational beings regardless of their desires or circumstances; the most famous formulation is the universalizability test.',
 'From Latin: categoricus = unconditional; Kant contrasts it with hypothetical imperatives, which are conditional on desired ends',
 'noun', 444, 'me'),

('Hypothetical Imperative',
 'Hypothetical Imperative',
 'A conditional norm of the form "If you want X, do Y"; it binds only agents who have the relevant desire, and therefore lacks the universal, unconditional authority Kant ascribes to moral requirements.',
 'From Greek: hypothetikos = conditional; in Kant, contrasted with the categorical imperative that is binding on all rational agents',
 'noun', 445, 'me'),

('Utility',
 'Utility',
 'In ethics, the measure of the welfare or well-being produced by an action or state of affairs; classically identified with pleasure or preference-satisfaction and used by consequentialists to assess outcomes.',
 'From Latin: utilitas = usefulness, benefit; introduced as an ethical concept by Jeremy Bentham in Principles of Morals and Legislation (1789)',
 'noun', 446, 'me'),

('Hedonism',
 'Hedonism',
 'The thesis that pleasure is the only intrinsic good and pain the only intrinsic evil; as a moral theory, hedonistic utilitarianism holds that the right action is the one that maximises net pleasure.',
 'From Greek: hedone = pleasure; the philosophical position (not the popular sense) identifies pleasure as the sole ultimate good',
 'noun', 447, 'me'),

('Eudaimonia',
 'Eudaimonia',
 'The condition of living and faring well; Aristotle''s account of the highest human good, constituted by excellent activity of the soul in accordance with virtue over a complete life.',
 'From Greek: eu (well) + daimon (spirit, divinity) — often translated as "flourishing," "happiness," or "well-being," though each translation loses something',
 'noun', 448, 'me'),

('Moral Duty',
 'Moral Duty',
 'An obligation that is binding on a moral agent regardless of personal inclination or consequences; in Kantian ethics, acting from duty — not merely in accordance with duty — is what gives an action genuine moral worth.',
 'From Latin: debitum = what is owed; in Kant, duty is grounded in reason rather than sentiment, law, or self-interest',
 'noun', 449, 'me'),

('Rights',
 'Rights',
 'Entitlements that protect individuals against certain treatments or demands, regardless of the aggregate welfare they produce; rights-based (deontological) theories hold that rights cannot be overridden simply because doing so would maximise utility.',
 'From Latin: rectus = straight, just; in political philosophy, rights can be natural (pre-political) or legal (conferred by institutions)',
 'noun', 450, 'me'),

('Justice',
 'Justice',
 'The moral and political virtue concerned with giving each person their due; accounts range from Aristotelian proportionality and Rawlsian fairness to Nozickian entitlement theory.',
 'From Latin: justitia = righteousness, equity; one of the four cardinal virtues in ancient ethics',
 'noun', 451, 'me'),

('Autonomy',
 'Autonomy',
 'The capacity of a rational agent to govern herself by self-legislated principles; for Kant, autonomy is the foundation of moral dignity, since only beings who can give themselves the moral law have unconditional worth.',
 'From Greek: autos (self) + nomos (law) — literally "self-legislation"; in bioethics, respect for autonomy is one of the four principles',
 'noun', 452, 'me'),

('Beneficence',
 'Beneficence',
 'The obligation to act for the benefit of others; in bioethics, it is one of Beauchamp and Childress''s four principles, requiring healthcare professionals to promote patient welfare beyond merely avoiding harm.',
 'From Latin: bene (well) + facere (to do) — doing good; distinguished from non-maleficence, which concerns avoiding harm',
 'noun', 453, 'me'),

('Non-maleficence',
 'Non-maleficence',
 'The obligation to refrain from inflicting harm; often captured in the maxim primum non nocere ("first, do no harm") and treated in bioethics as a distinct, generally stronger duty than the positive duty of beneficence.',
 'From Latin: non (not) + malus (bad) + facere (to do); one of the four principles of biomedical ethics alongside autonomy, beneficence, and justice',
 'noun', 454, 'me'),

('Trolley Problem',
 'Trolley Problem',
 'A thought experiment devised by Philippa Foot (1967) and developed by Judith Jarvis Thomson: is it permissible to divert a runaway trolley, killing one person to save five? The problem probes the tension between consequentialist reasoning and deontological constraints against using persons as mere means.',
 'Named after the trolley (tram) used in the scenario; the "footbridge variant" sharpens the deontological intuition by requiring physical contact to push someone onto the tracks',
 'noun', 455, 'me'),

('Moral Relativism',
 'Moral Relativism',
 'The view that moral judgements are true or false only relative to a cultural, historical, or individual framework, and that there are no universal, cross-culturally valid moral standards; distinguished from moral pluralism and from descriptive claims about cultural variation.',
 'From Latin: relativus = related to; in metaethics, contrasted with moral realism, which holds that some moral claims are objectively true',
 'noun', 456, 'me'),

('Universalizability',
 'Universalizability',
 'The property of a moral maxim that could be consistently adopted as a law for all rational agents; Kant''s first formulation of the categorical imperative — "Act only according to that maxim whereby you can at the same time will that it should become a universal law" — makes universalizability the test of moral permissibility.',
 'From Latin: universalis = relating to all; the principle that moral reasons must be impartial and not privilege particular persons or groups',
 'noun', 457, 'me'),

('Practical Wisdom (Phronesis)',
 'Practical Wisdom (Phronesis)',
 'The intellectual virtue that enables a person to deliberate well about what conduces to the good life and to act accordingly in particular circumstances; for Aristotle, it is the master virtue that coordinates all others.',
 'From Greek: phronein = to think wisely, to be prudent; Aristotle distinguishes it from theoretical wisdom (sophia) and technical skill (techne)',
 'noun', 458, 'me'),

('Applied Ethics',
 'Applied Ethics',
 'The branch of ethics that brings general moral theories and principles to bear on specific practical domains — including medicine, business, the environment, and emerging technologies such as AI — with the aim of guiding decisions and policy.',
 'Distinct from normative ethics (what is right in general) and metaethics (the nature of moral facts); emerged as a sub-discipline in the 1960s–1970s alongside medical ethics and environmental ethics',
 'noun', 459, 'me'),

('Moral Agency',
 'Moral Agency',
 'The capacity of an entity to act on the basis of moral reasons and to be held responsible for its actions; full moral agency is typically taken to require rationality, freedom of will, and awareness of the moral significance of one''s acts.',
 'From Latin: agere = to act; debates about moral agency are central to questions about AI responsibility, corporate liability, and the moral status of non-human animals',
 'noun', 460, 'me');

-- ---- Reading passages ----

INSERT OR IGNORE INTO reading_passages (id, title, sort_order, language_code) VALUES
  (43, 'Mill: On the Greatest Happiness Principle', 1, 'me'),
  (44, 'Kant: On Acting from Duty',                 2, 'me'),
  (45, 'Aristotle: On the Good Life and Virtue',    3, 'me');

-- ---- Exercises: Lesson 57 — Consequentialism (IDs 584-593) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(584, 57, 'mcq_grammar', 'What is the defining feature of all consequentialist moral theories?',
 'The moral rightness of an action is determined solely by its outcomes', '', 'Consequentialist theories hold that what makes an action right or wrong is entirely a function of its results — particularly the well-being it produces or destroys. This distinguishes them from deontological theories, which judge actions by their intrinsic character or conformity to duty, regardless of outcomes.', 1, 'me'),

(585, 57, 'mcq_grammar', 'What does the Greatest Happiness Principle state?',
 'Actions are right in proportion as they tend to promote happiness; wrong as they tend to produce unhappiness', '', 'John Stuart Mill''s formulation from Utilitarianism (1863) makes happiness — understood as pleasure and the absence of pain — the single criterion of moral evaluation. An action''s rightness is proportional to the net happiness it produces across all affected parties.', 2, 'me'),

(586, 57, 'mcq_grammar', 'How did Bentham''s hedonic calculus propose to measure pleasure?',
 'By weighing intensity, duration, certainty, propinquity, fecundity, purity, and extent', '', 'Jeremy Bentham argued that pleasures and pains could be quantified by seven parameters: how intense they are, how long they last, how certain to occur, how soon to arrive (propinquity), whether they tend to produce further pleasure (fecundity) or are unmixed with pain (purity), and how many people they affect (extent). The calculus aimed to give ethics a quasi-mathematical foundation.', 3, 'me'),

(587, 57, 'mcq_grammar', 'How did Mill distinguish higher from lower pleasures?',
 'Higher pleasures (intellectual and moral) are qualitatively superior to lower (bodily) pleasures', '', 'Mill departed from Bentham by insisting that pleasures differ not only in quantity but in quality. He famously wrote that "it is better to be Socrates dissatisfied than a fool satisfied." Competent judges who have experienced both types reliably prefer the higher pleasures, which gives Mill his criterion of quality.', 4, 'me'),

(588, 57, 'mcq_grammar', 'What is the key difference between act and rule utilitarianism?',
 'Act utilitarianism evaluates each action individually; rule utilitarianism evaluates by which rules, if generally followed, maximise utility', '', 'Act utilitarians ask of each individual act: does it maximise aggregate welfare? Rule utilitarians instead follow the rule whose general adoption would produce the greatest utility — even when breaking that rule in a specific case might produce more welfare. Rule utilitarianism is partly motivated by the objection that act utilitarianism seems to permit intuitively unjust acts.', 5, 'me'),

(589, 57, 'mcq_grammar', 'What is the standard "justice objection" to act utilitarianism?',
 'It can require punishing the innocent if doing so maximises overall welfare', '', 'The justice objection holds that act utilitarianism can licence clearly wrong actions — such as framing an innocent person for a crime to prevent greater social unrest — whenever they maximise aggregate welfare. This seems to violate a bedrock intuition that individuals have rights that cannot be sacrificed for the collective good.', 6, 'me'),

(590, 57, 'mcq_grammar', 'What is preference utilitarianism?',
 'A version of utilitarianism that maximises the satisfaction of informed preferences rather than hedonic pleasure', '', 'Preference utilitarianism, associated with Peter Singer and R. M. Hare, replaces pleasure/pain with preference-satisfaction as the measure of welfare. This avoids some problems with hedonism (e.g., the experience machine objection) but faces its own difficulties, such as how to handle morally objectionable preferences.', 7, 'me'),

(591, 57, 'mcq_grammar', 'What is Rawls''s "separateness of persons" objection to utilitarianism?',
 'Utilitarianism treats society as a single agent whose satisfactions can be summed, ignoring individual distinctness', '', 'In A Theory of Justice (1971), John Rawls argued that utilitarianism extends the principle of rational choice for one person to society as a whole. This obscures the fact that benefits to some cannot strictly compensate losses to others — each person''s life is bounded and non-fungible. Justice requires principles that respect this separateness.', 8, 'me'),

(592, 57, 'mcq_grammar', 'Which philosopher developed the systematic version of utilitarianism known as the "hedonic calculus"?',
 'Jeremy Bentham', '', 'Jeremy Bentham (1748–1832) laid the foundations of utilitarian ethics in Introduction to the Principles of Morals and Legislation (1789). He proposed that pleasure and pain could be measured along several dimensions and that public policy should aim to maximise the aggregate balance of pleasure over pain — the hedonic calculus.', 9, 'me'),

(593, 57, 'mcq_grammar', 'What is Peter Singer''s core argument in "Famine, Affluence, and Morality"?',
 'We are morally obligated to prevent serious harm whenever we can do so without sacrificing anything of comparable moral importance', '', 'Singer''s 1972 paper applies consequentialist reasoning to global poverty: if we can prevent something terrible without sacrificing anything nearly as important, we ought to do so. This implies that affluent individuals have much stronger obligations to the global poor than common moral thinking acknowledges, blurring the distinction between duty and charity.', 10, 'me');

-- ---- Exercise options: Lesson 57 (584-593) ----

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(584, 'Actions are right or wrong based on the intentions behind them', 0),
(584, 'The moral rightness of an action is determined solely by its outcomes', 1),
(584, 'Moral worth derives from conformity to universal duties and rules', 0),
(584, 'An action is right if it expresses virtuous character', 0),

(585, 'Actions are right if they conform to universal duties', 0),
(585, 'Actions are right in proportion as they tend to promote happiness; wrong as they tend to produce unhappiness', 1),
(585, 'Happiness is the exclusive preserve of rational beings', 0),
(585, 'The principle holds that equal happiness must be distributed to all citizens', 0),

(586, 'By consulting the moral intuitions of impartial spectators', 0),
(586, 'By measuring only the intensity and duration of the pleasure or pain', 0),
(586, 'By weighing intensity, duration, certainty, propinquity, fecundity, purity, and extent', 1),
(586, 'By calculating the economic cost of producing the pleasure', 0),

(587, 'Higher pleasures last longer; lower pleasures are more immediately intense', 0),
(587, 'Higher pleasures (intellectual and moral) are qualitatively superior to lower (bodily) pleasures', 1),
(587, 'Mill did not distinguish types of pleasure — all pleasure counts equally', 0),
(587, 'Higher pleasures are available only to the educated and therefore more valuable', 0),

(588, 'They are identical in practice but use different philosophical vocabularies', 0),
(588, 'Act utilitarianism evaluates each action individually; rule utilitarianism evaluates by which rules, if generally followed, maximise utility', 1),
(588, 'Act utilitarianism focuses on individual agents; rule utilitarianism focuses on legislatures', 0),
(588, 'Rule utilitarianism was proposed by Bentham; act utilitarianism by Mill', 0),

(589, 'It ignores the long-term consequences of actions and focuses on the immediate future', 0),
(589, 'It requires every person to sacrifice their own happiness for the collective', 0),
(589, 'It can require punishing the innocent if doing so maximises overall welfare', 1),
(589, 'It produces identical conclusions to Kantian deontology in most cases', 0),

(590, 'A version of utilitarianism that maximises the total number of people alive', 0),
(590, 'A version of utilitarianism that maximises the satisfaction of informed preferences rather than hedonic pleasure', 1),
(590, 'Bentham''s original version of the theory, emphasising physical pleasure', 0),
(590, 'A theory that counts only the preferences of rational adults', 0),

(591, 'Rawls argues that utilitarianism fails because it ignores the suffering of animals', 0),
(591, 'Rawls argues that utilitarian calculations are mathematically unreliable', 0),
(591, 'Utilitarianism treats society as a single agent whose satisfactions can be summed, ignoring individual distinctness', 1),
(591, 'Rawls argues that the greatest happiness principle conflicts with democratic principles', 0),

(592, 'John Stuart Mill', 0),
(592, 'David Hume', 0),
(592, 'Jeremy Bentham', 1),
(592, 'Henry Sidgwick', 0),

(593, 'Affluent people may give to charity if they choose, but have no strict obligation to do so', 0),
(593, 'We are morally obligated to prevent serious harm whenever we can do so without sacrificing anything of comparable moral importance', 1),
(593, 'Poverty relief is a political responsibility belonging to governments, not individuals', 0),
(593, 'Singer argues that famine is caused by structural injustice, not individual moral failure', 0);

-- ---- Exercises: Lesson 58 — Deontology (IDs 594-603) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(594, 58, 'mcq_grammar', 'What distinguishes a deontological moral theory from a consequentialist one?',
 'Deontological theories judge actions by their conformity to duties or rules, not by their outcomes', '', 'Deontology holds that certain actions are intrinsically right or wrong — regardless of their consequences. Kant argued that lying is wrong even if telling a lie would produce better outcomes, because lying treats the person lied to as a mere means and violates the universal principle of honest communication.', 1, 'me'),

(595, 58, 'mcq_grammar', 'What is Kant''s categorical imperative in its first formulation?',
 'Act only according to that maxim whereby you can at the same time will that it should become a universal law', '', 'The Formula of Universal Law asks: could I consistently will that everyone act on the same maxim as I am about to act on? If universalising the maxim produces a contradiction — either in conception or in will — the action is impermissible. This test gives Kant an a priori, non-empirical basis for moral judgment.', 2, 'me'),

(596, 58, 'mcq_grammar', 'What is the second formulation of Kant''s categorical imperative?',
 'Act so as to treat humanity, whether in your own person or in that of any other, always as an end, and never merely as a means', '', 'The Formula of Humanity grounds moral constraints in the intrinsic dignity of rational beings. Using someone merely as an instrument — deceiving them, coercing them — fails to respect this dignity. It is this formulation that most directly generates rights-based constraints against harming individuals for aggregate benefit.', 3, 'me'),

(597, 58, 'mcq_grammar', 'What is the difference between a categorical imperative and a hypothetical imperative?',
 'A categorical imperative is unconditionally binding; a hypothetical imperative is binding only if one has a certain desire', '', 'Hypothetical imperatives have the form "If you want X, do Y" and bind only agents who have the relevant goal. Moral imperatives, by contrast, are categorical — they command unconditionally, regardless of what the agent desires. For Kant, only categorical imperatives have genuine moral authority.', 4, 'me'),

(598, 58, 'mcq_grammar', 'Why does lying fail Kant''s universalizability test?',
 'Universalising the maxim to lie would destroy the institution of communication, making lying itself impossible', '', 'If everyone lied whenever convenient, the practice of truthful communication would collapse. People would cease to believe what others say, and the very speech acts of promising and asserting would lose their function. The maxim to lie is thus self-defeating when universalised: it cannot be conceived without contradiction.', 5, 'me'),

(599, 58, 'mcq_grammar', 'What is Kant''s "Kingdom of Ends"?',
 'An ideal community of rational agents who legislate moral laws and treat one another always as ends', '', 'The third formulation of the categorical imperative asks us to act as legislators in a Kingdom of Ends — a hypothetical community where all members both give and are subject to the moral law. This formulation combines universalizability with respect for rational dignity, and anticipates later social-contract approaches to political legitimacy.', 6, 'me'),

(600, 58, 'mcq_grammar', 'What is the "perfect duty / imperfect duty" distinction in Kantian ethics?',
 'Perfect duties admit no exceptions and are always binding; imperfect duties require adoption as goals but allow latitude in how and when we fulfil them', '', 'Kant distinguished perfect duties (e.g., do not lie, do not kill innocents) — which are exceptionless — from imperfect duties (e.g., develop your talents, help others) — which are obligatory in general but leave room for judgment about specific occasions. Perfect duties correspond to rights in others; imperfect duties correspond to ends we must pursue but are not owed to particular individuals.', 7, 'me'),

(601, 58, 'mcq_grammar', 'What is W. D. Ross''s theory of prima facie duties?',
 'We have several genuine moral duties that can conflict; when they do, we must exercise judgment to determine which is most binding in the circumstances', '', 'W. D. Ross introduced the concept of prima facie duties in The Right and the Good (1930) to address the rigidity of Kantian ethics. Duties such as fidelity, non-maleficence, and justice are genuinely binding but can be overridden by stronger duties in particular situations. This pluralist deontology avoids both Kantian absolutism and utilitarian reduction to a single principle.', 8, 'me'),

(602, 58, 'mcq_grammar', 'What is the standard consequentialist objection to deontological constraints?',
 'Rigid rules can produce catastrophic outcomes that a reasonable person would override', '', 'The objection — sometimes called the "threshold deontology" debate — presses the deontologist: if telling one lie would prevent a genocide, isn''t the lie clearly permissible? Consequentialists argue that deontological constraints lead to absurd results in extreme cases. Deontologists typically respond by questioning whether real cases ever truly have such clear-cut structures or by defending agent-relative constraints on independent grounds.', 9, 'me'),

(603, 58, 'mcq_grammar', 'What does it mean to treat a person as an "end in themselves"?',
 'To respect their rational nature and never use them solely as a tool for one''s own purposes', '', 'For Kant, every rational being possesses dignity — an incomparable, non-fungible worth that cannot be traded off against other values. Treating someone as an end in themselves means engaging with their rational agency: seeking their genuine consent, providing them with accurate information, and not reducing them to an instrument of one''s plans.', 10, 'me');

-- ---- Exercise options: Lesson 58 (594-603) ----

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(594, 'Deontological theories judge actions by the feelings they produce in the agent', 0),
(594, 'Deontological theories judge actions by their conformity to duties or rules, not by their outcomes', 1),
(594, 'Deontological theories hold that virtuous character is the foundation of morality', 0),
(594, 'Deontological and consequentialist theories are distinguished only by their historical origins', 0),

(595, 'Act so as to maximise the happiness of the greatest number of people', 0),
(595, 'Act only according to that maxim whereby you can at the same time will that it should become a universal law', 1),
(595, 'Act as a virtuous person would act in the given circumstances', 0),
(595, 'Act in whatever way your society''s moral code prescribes', 0),

(596, 'Act always so as to maximise the welfare of rational beings', 0),
(596, 'Act so as to treat humanity, whether in your own person or in that of any other, always as an end, and never merely as a means', 1),
(596, 'Act in accordance with the laws of the state, which represent the General Will', 0),
(596, 'Act in a way that the most virtuous person in your community would approve', 0),

(597, 'A categorical imperative is written down in law; a hypothetical one is merely customary', 0),
(597, 'Both types are equally binding — the terms are interchangeable in Kantian ethics', 0),
(597, 'A categorical imperative is unconditionally binding; a hypothetical imperative is binding only if one has a certain desire', 1),
(597, 'A categorical imperative applies to all people; a hypothetical imperative applies only to philosophers', 0),

(598, 'Lying causes pain to the person who is deceived, and pain is always impermissible', 0),
(598, 'Universalising the maxim to lie would destroy the institution of communication, making lying itself impossible', 1),
(598, 'Lying is forbidden by natural law and therefore violates the categorical imperative', 0),
(598, 'Liars cannot be respected as autonomous agents, so lying always undermines personal integrity', 0),

(599, 'A political utopia in which suffering has been completely eliminated', 0),
(599, 'An ideal community of rational agents who legislate moral laws and treat one another always as ends', 1),
(599, 'A term for Kant''s moral philosophy taken as a whole', 0),
(599, 'A community governed by benevolent philosopher-kings following utilitarian principles', 0),

(600, 'Perfect duties apply to perfect persons; imperfect duties apply to ordinary agents', 0),
(600, 'Perfect duties derive from reason alone; imperfect duties derive from sentiment', 0),
(600, 'Perfect duties admit no exceptions and are always binding; imperfect duties require adoption as goals but allow latitude in how and when we fulfil them', 1),
(600, 'There is no meaningful distinction between perfect and imperfect duties in Kant''s ethics', 0),

(601, 'Ross argues that there is only one fundamental moral duty — the duty of beneficence', 0),
(601, 'We have several genuine moral duties that can conflict; when they do, we must exercise judgment to determine which is most binding in the circumstances', 1),
(601, 'Prima facie duties are merely conventional rules with no genuine moral force', 0),
(601, 'Ross''s theory replaces duties with virtues as the basic moral category', 0),

(602, 'Deontological constraints are internally inconsistent and cannot be applied coherently', 0),
(602, 'Rigid rules can produce catastrophic outcomes that a reasonable person would override', 1),
(602, 'Deontological theories are too closely tied to religious ethics to be universally valid', 0),
(602, 'Kant''s theory was derived from outdated assumptions about rationality', 0),

(603, 'To help a person achieve their goals whenever doing so is convenient', 0),
(603, 'To respect their rational nature and never use them solely as a tool for one''s own purposes', 1),
(603, 'To treat all persons identically regardless of their individual circumstances', 0),
(603, 'To prioritise a person''s physical welfare above all other considerations', 0);

-- ---- Exercises: Lesson 59 — Virtue Ethics (IDs 604-613) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(604, 59, 'mcq_grammar', 'What is the central question of virtue ethics?',
 'What kind of person should I be?', '', 'Whereas consequentialism asks "What produces the best outcomes?" and deontology asks "What does duty require?", virtue ethics centres the question of character: what traits, dispositions, and ways of being constitute a life well lived? The question of what to do in a given situation is answered by asking what a person of good character — the phronimos — would do.', 1, 'me'),

(605, 59, 'mcq_grammar', 'What is eudaimonia in Aristotle''s Nicomachean Ethics?',
 'The highest human good: excellent activity of the soul in accordance with virtue over a complete life', '', 'Aristotle argues that all human activity aims at some good, and that the highest good must be desired for its own sake and not for anything beyond it. Eudaimonia — often translated as "flourishing" or "happiness" — is that final end. It is not a feeling but an ongoing activity, and it requires both virtue and sufficient external goods across a whole life.', 2, 'me'),

(606, 59, 'mcq_grammar', 'What is Aristotle''s doctrine of the mean?',
 'Each virtue is a disposition to feel and act in the appropriate amount — between excess and deficiency', '', 'Aristotle holds that virtues are stable dispositions to respond to situations in ways that hit the mean between two extremes. Courage is the mean between cowardice (too little) and rashness (too much); generosity between miserliness and prodigality. The mean is relative to the person and context, and identifying it requires practical wisdom.', 3, 'me'),

(607, 59, 'mcq_grammar', 'What role does practical wisdom (phronesis) play in virtue ethics?',
 'It is the master virtue that enables the agent to perceive the morally relevant features of a situation and choose the virtuous mean', '', 'Phronesis cannot be reduced to following a rule or algorithm. It requires experience, good habituation, and the capacity to perceive which features of a concrete situation are morally relevant. Aristotle calls it the "eye of the soul" — the intellectual virtue that integrates all other virtues and makes genuinely virtuous action possible.', 4, 'me'),

(608, 59, 'mcq_grammar', 'How are virtues acquired, according to Aristotle?',
 'Through habituation: performing virtuous actions repeatedly until they become second nature', '', 'Aristotle distinguishes intellectual virtues, acquired through teaching and experience, from moral virtues, acquired through practice. We become just by doing just acts, courageous by doing courageous acts. The virtuous person does not merely act rightly but does so with the right emotion and motivation — pleasure in virtue rather than reluctant compliance.', 5, 'me'),

(609, 59, 'mcq_grammar', 'What is the "function argument" in Aristotle''s ethics?',
 'Every kind of thing has a characteristic function; the human function is rational activity; eudaimonia is performing this function well', '', 'Aristotle asks: just as a flute player''s good is excellent flute-playing, what is the good of a human being? The human function, he argues, is the activity of the soul in accordance with reason — what distinguishes us from plants (mere life) and animals (perception). Eudaimonia is performing this function excellently over a complete life.', 6, 'me'),

(610, 59, 'mcq_grammar', 'What is Alasdair MacIntyre''s core criticism of modern ethics in "After Virtue"?',
 'Modern moral discourse is fragmented and incoherent because it has lost the teleological framework that gave moral concepts their meaning', '', 'MacIntyre argues in After Virtue (1981) that the Enlightenment project of finding a purely rational foundation for ethics divorced moral concepts from the teleological view of human nature — the view that humans have a proper end (telos) — in which they were originally embedded. The result is moral language that sounds substantive but cannot resolve disagreement because the concepts have been stripped of their original context.', 7, 'me'),

(611, 59, 'mcq_grammar', 'How does neo-Aristotelian virtue ethics, as developed by Philippa Foot, ground virtues?',
 'Virtues are traits that enable human beings to live and flourish in ways characteristic of their kind', '', 'In Natural Goodness (2001), Foot argues that evaluative judgements about humans — like evaluative judgements about animals and plants — are grounded in facts about the natural life of the species. A good human being is one who has the traits that allow a human to function well as the kind of creature she is. This naturalises virtue ethics without reducing ethics to biology.', 8, 'me'),

(612, 59, 'mcq_grammar', 'What is the "situationist challenge" to virtue ethics?',
 'Empirical psychology suggests that behaviour is far more determined by situational factors than by stable character traits', '', 'Psychologists such as Stanley Milgram and Lee Ross found that situational variables — authority figures, social pressure, minor contextual factors — predict behaviour better than personality traits. Gilbert Harman and John Doris used this evidence to argue that there are no stable, robust character traits and therefore that virtue ethics lacks the empirical foundation it claims.', 9, 'me'),

(613, 59, 'mcq_grammar', 'What is Rosalind Hursthouse''s account of right action in virtue ethics?',
 'An action is right if and only if a virtuous agent would characteristically do it in the circumstances', '', 'Hursthouse in On Virtue Ethics (1999) offers a virtue-theoretic equivalent of the consequentialist and deontological criteria of rightness: right actions are those a person of virtuous character would perform. This is not circular because virtues are independently characterised by their contribution to eudaimonia — it is informative to ask what the phronimos would do.', 10, 'me');

-- ---- Exercise options: Lesson 59 (604-613) ----

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(604, 'What action produces the best outcomes for the greatest number?', 0),
(604, 'What kind of person should I be?', 1),
(604, 'What does universal duty require of me regardless of circumstances?', 0),
(604, 'What action can be rationally justified to all affected parties?', 0),

(605, 'A feeling of intense pleasure achieved through sensory satisfaction', 0),
(605, 'The highest human good: excellent activity of the soul in accordance with virtue over a complete life', 1),
(605, 'The state of being free from all desire and suffering', 0),
(605, 'The condition of having fulfilled all one''s moral duties', 0),

(606, 'The morally correct action is always the mathematical average of available options', 0),
(606, 'Each virtue is a disposition to feel and act in the appropriate amount — between excess and deficiency', 1),
(606, 'The mean is the moderate position in political debates between opposing factions', 0),
(606, 'Virtue is the equal balance between self-interest and concern for others', 0),

(607, 'It supplies the moral rules that virtuous people must follow', 0),
(607, 'It is the master virtue that enables the agent to perceive the morally relevant features of a situation and choose the virtuous mean', 1),
(607, 'It is the ability to remember and apply philosophical principles to ethical dilemmas', 0),
(607, 'It regulates the intellectual virtues, keeping them from excess', 0),

(608, 'By reading philosophical texts that describe virtuous models', 0),
(608, 'Through habituation: performing virtuous actions repeatedly until they become second nature', 1),
(608, 'Through religious instruction and conformity to divine commands', 0),
(608, 'By inheriting them genetically from virtuous parents', 0),

(609, 'Humans function best when governed by a philosopher-king, so the good is obedient citizenship', 0),
(609, 'Every kind of thing has a characteristic function; the human function is rational activity; eudaimonia is performing this function well', 1),
(609, 'The argument that moral claims must function as universal laws to be valid', 0),
(609, 'Humans are defined by their capacity for language, so the human good is eloquence', 0),

(610, 'Modern ethics errs by taking Kantian deontology as its exclusive framework', 0),
(610, 'Modern moral discourse is fragmented and incoherent because it has lost the teleological framework that gave moral concepts their meaning', 1),
(610, 'The rise of science has made virtue ethics obsolete by replacing ethics with psychology', 0),
(610, 'Modern philosophers have ignored the empirical social sciences when constructing ethical theories', 0),

(611, 'Virtues are whatever traits a society approves of, varying between cultures', 0),
(611, 'Virtues are traits that enable human beings to live and flourish in ways characteristic of their kind', 1),
(611, 'Virtues are purely formal — they are defined by conformity to universal rational principles', 0),
(611, 'Virtues are emotional dispositions that evolved to ensure social cooperation', 0),

(612, 'Evolutionary psychology shows that virtues are genetically encoded, not chosen', 0),
(612, 'Empirical psychology suggests that behaviour is far more determined by situational factors than by stable character traits', 1),
(612, 'Studies of cognitive development show children cannot acquire virtues before adolescence', 0),
(612, 'Neuroscience has shown that moral reasoning is entirely emotional, not character-based', 0),

(613, 'An action is right when it produces outcomes a virtuous person would approve of', 0),
(613, 'An action is right if and only if a virtuous agent would characteristically do it in the circumstances', 1),
(613, 'An action is right when it conforms to the norms of the moral community', 0),
(613, 'An action is right when the agent performs it with genuine care and compassion', 0);

-- ---- Exercises: Lesson 60 — Applied Ethics (IDs 614-623) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(614, 60, 'mcq_grammar', 'What are the four principles of biomedical ethics identified by Beauchamp and Childress?',
 'Autonomy, beneficence, non-maleficence, and justice', '', 'In Principles of Biomedical Ethics (1979), Tom Beauchamp and James Childress proposed four mid-level principles that can guide medical decision-making across different theoretical frameworks. These principles are designed to be acceptable to consequentialists, deontologists, and virtue ethicists alike, making them a practical basis for clinical and research ethics.', 1, 'me'),

(615, 60, 'mcq_grammar', 'What is informed consent, and why is it central to medical ethics?',
 'A patient''s voluntary, knowing agreement to a treatment after being adequately informed of its risks and alternatives', '', 'Informed consent operationalises the principle of respect for autonomy in clinical settings. It requires that disclosure be adequate, that the patient understand and be competent to process the information, and that the agreement be voluntary and free from coercion. Violations of informed consent are among the most serious breaches of medical ethics.', 2, 'me'),

(616, 60, 'mcq_grammar', 'What is the doctrine of double effect?',
 'It is sometimes permissible to cause harm as a foreseen but unintended side effect of bringing about a good result, provided the harm is not the means to the good', '', 'The doctrine, with roots in Aquinas, holds that an action with both good and harmful effects is permissible when: the action is not intrinsically wrong, the agent intends only the good effect, the bad effect is foreseen but not intended as means or end, and the good effect is proportionate to the harm. It is invoked in debates about end-of-life care and military targeting.', 3, 'me'),

(617, 60, 'mcq_grammar', 'What is the central ethical issue raised by Peter Singer''s argument regarding the moral status of animals?',
 'Speciesism — the arbitrary preference for members of one''s own species — cannot be morally justified', '', 'Singer argues in Animal Liberation (1975) that the capacity to suffer, not species membership or rationality, is the relevant criterion for moral consideration. Excluding animals from moral concern merely because they are not human is analogous to racism or sexism: it privileges an arbitrary characteristic over the morally relevant one.', 4, 'me'),

(618, 60, 'mcq_grammar', 'What is the "experience machine" objection to hedonistic utilitarianism?',
 'It shows that we value things beyond pleasure, such as genuine achievement and authentic relationships', '', 'Robert Nozick''s thought experiment (Anarchy, State, and Utopia, 1974) asks whether you would plug into a machine that provides perfectly simulated pleasure and happiness with no connection to reality. Most people say no — suggesting that what makes life good is not merely subjective experience but also actual engagement with the world and other people.', 5, 'me'),

(619, 60, 'mcq_grammar', 'What is the philosophical problem of moral responsibility for AI systems?',
 'AI systems can cause harm without having intentions or moral understanding, creating gaps in the normal framework of blame and accountability', '', 'Standard accounts of moral responsibility require that an agent act intentionally and with awareness of moral significance. Current AI systems can cause serious harm — through biased outputs, misinformation, or unsafe actions — without having any intentions, beliefs, or understanding. This creates what philosophers call the "responsibility gap": harm occurs but no individual or entity can bear full moral responsibility.', 6, 'me'),

(620, 60, 'mcq_grammar', 'What is John Rawls''s "veil of ignorance" thought experiment?',
 'A device for deriving fair principles of justice by asking what rules rational persons would choose without knowing their place in society', '', 'In A Theory of Justice (1971), Rawls asks us to imagine choosing the basic structure of society from behind a "veil of ignorance" — not knowing our social class, gender, natural talents, or conception of the good. Rawls argues that rational agents in this "original position" would choose equal basic liberties and the difference principle: inequalities are permissible only when they benefit the least advantaged.', 7, 'me'),

(621, 60, 'mcq_grammar', 'What is the precautionary principle in environmental and technology ethics?',
 'When an action risks serious or irreversible harm, the burden of proof falls on those who want to take the action, even under scientific uncertainty', '', 'The precautionary principle responds to the problem that technologies can cause catastrophic harm before their effects are fully understood. It shifts the default: instead of requiring proof of harm before restricting an activity, it requires a demonstration of safety before permitting it — especially where potential harm is severe, widespread, or difficult to reverse.', 8, 'me'),

(622, 60, 'mcq_grammar', 'What is the "trolley problem," and what philosophical work does it do?',
 'A thought experiment that probes the conflict between consequentialist reasoning (divert the trolley) and deontological constraints (do not use persons as means)', '', 'Philippa Foot''s original case and Judith Jarvis Thomson''s footbridge variant illuminate why we distinguish between redirecting harm and actively causing harm through another person. The cases have generated extensive debate about whether the doctrine of double effect, agent-relative constraints, or the doing/allowing distinction can explain our divergent intuitions across scenarios.', 9, 'me'),

(623, 60, 'mcq_grammar', 'What is moral relativism, and what is the main philosophical objection to it?',
 'The view that moral truths are relative to cultures or individuals; the objection is that it cannot consistently condemn practices like torture even when universally recognised as wrong', '', 'Descriptive moral relativism — the observation that moral codes differ across cultures — is well-established and uncontroversial. Normative moral relativism — the view that no moral code is better than another — is far more contentious. The standard objection is that it cannot accommodate the intuition that some acts (genocide, systematic torture) are objectively wrong, and it is internally self-defeating if its own principle of tolerance is presented as universally valid.', 10, 'me');

-- ---- Exercise options: Lesson 60 (614-623) ----

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(614, 'Informed consent, confidentiality, truth-telling, and non-abandonment', 0),
(614, 'Autonomy, beneficence, non-maleficence, and justice', 1),
(614, 'Utility, rights, virtue, and contracts', 0),
(614, 'Prevention, diagnosis, treatment, and care', 0),

(615, 'The legal requirement for a doctor to explain a procedure to a hospital administrator', 0),
(615, 'A patient''s voluntary, knowing agreement to a treatment after being adequately informed of its risks and alternatives', 1),
(615, 'The principle that medical information should be shared with family members', 0),
(615, 'Implicit consent assumed from a patient''s willingness to attend a medical appointment', 0),

(616, 'Harmful actions are permissible if the agent sincerely regrets the harm they cause', 0),
(616, 'It is sometimes permissible to cause harm as a foreseen but unintended side effect of bringing about a good result, provided the harm is not the means to the good', 1),
(616, 'Two harmful effects cancel each other out when they are of equal severity', 0),
(616, 'Medical procedures with equal benefits and risks are always permissible', 0),

(617, 'Animals have stronger moral rights than humans because they cannot consent to harm', 0),
(617, 'Speciesism — the arbitrary preference for members of one''s own species — cannot be morally justified', 1),
(617, 'Animal welfare must be balanced against human welfare using the hedonic calculus', 0),
(617, 'The capacity for rational thought determines which animals deserve moral consideration', 0),

(618, 'If pleasure is all that matters, the experience machine should be universally preferred', 0),
(618, 'It shows that we value things beyond pleasure, such as genuine achievement and authentic relationships', 1),
(618, 'The thought experiment proves that consciousness is an illusion', 0),
(618, 'Hedonism entails that virtual reality should be morally equivalent to actual experience', 0),

(619, 'AI systems cannot be held morally responsible because they lack citizenship and legal rights', 0),
(619, 'AI systems can cause harm without having intentions or moral understanding, creating gaps in the normal framework of blame and accountability', 1),
(619, 'The problem is merely technical — once AI is sufficiently advanced it will be morally responsible', 0),
(619, 'AI moral responsibility is adequately handled by existing product liability law', 0),

(620, 'A legal procedure for reviewing government policy for fairness', 0),
(620, 'A device for deriving fair principles of justice by asking what rules rational persons would choose without knowing their place in society', 1),
(620, 'A meditation technique for eliminating cognitive bias in moral reasoning', 0),
(620, 'Rawls''s term for the impartial spectator introduced by Adam Smith', 0),

(621, 'When in doubt about a course of action, always choose the option with the best expected outcome', 0),
(621, 'When an action risks serious or irreversible harm, the burden of proof falls on those who want to take the action, even under scientific uncertainty', 1),
(621, 'Environmental regulations should always err on the side of economic caution', 0),
(621, 'Technology should be regulated only after concrete harm has been demonstrated', 0),

(622, 'A game-theory puzzle illustrating why rational agents defect rather than cooperate', 0),
(622, 'A thought experiment that probes the conflict between consequentialist reasoning (divert the trolley) and deontological constraints (do not use persons as means)', 1),
(622, 'A traffic engineering problem about minimising road fatalities', 0),
(622, 'A paradox showing that all moral decisions ultimately reduce to self-interest', 0),

(623, 'The view that moral truths are relative to cultures or individuals; the objection is that it cannot consistently condemn practices like torture even when universally recognised as wrong', 1),
(623, 'The factual observation that different cultures have different moral codes', 0),
(623, 'The metaethical thesis that moral language is merely emotional expression', 0),
(623, 'The view that morality is relative to individual circumstances but not to cultures', 0);

-- ---- Passage exercises ----

-- Passage 43: Mill: On the Greatest Happiness Principle
-- lesson_id=57, language_code='me', sort_order 1400-1404
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(43, 'me', 57, 1400, 'How does Mill define "happiness" in the Greatest Happiness Principle?', 'Absence of all desire and emotional disturbance', 'Pleasure and the absence of pain', 'The fulfilment of rational duty', 'A state of spiritual perfection beyond sensation', 'b'),
(43, 'me', 57, 1401, 'On what basis does Mill argue that some pleasures are qualitatively superior to others?', 'Superior pleasures last longer and are more intense by Bentham''s calculus', 'Those with experience of both types reliably and consistently prefer the higher ones', 'Higher pleasures are endorsed by religious tradition as closer to the divine', 'The state can determine which pleasures are superior through democratic vote', 'b'),
(43, 'me', 57, 1402, 'What does Mill mean by "competent judges" in his quality argument?', 'Judges appointed by parliament to adjudicate disputes about cultural value', 'People who have had full experience of both lower and higher pleasures and can therefore compare them', 'Philosophers trained in utilitarian theory and hedonic calculus', 'Any rational adult who has read Mill''s Utilitarianism', 'b'),
(43, 'me', 57, 1403, 'According to the passage, what distinguishes the utilitarian standard from mere self-interest?', 'Utilitarianism demands that agents sacrifice their own happiness entirely for others', 'The standard requires impartiality — each person''s happiness counts for exactly one', 'Utilitarianism is derived from divine command rather than individual desire', 'The standard applies only to political leaders who hold power over others', 'b'),
(43, 'me', 57, 1404, 'What is the relationship Mill draws between justice and utility?', 'Justice is independent of utility and takes priority whenever they conflict', 'Justice is a particularly important part of utility — protecting the security on which all well-being depends', 'Utility must always yield to justice because rights are absolute', 'Mill argues that justice and utility are completely unrelated concepts', 'b');

-- Passage 44: Kant: On Acting from Duty
-- lesson_id=58, language_code='me', sort_order 1410-1414
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(44, 'me', 58, 1410, 'According to the passage, what is the only thing that is unconditionally good?', 'Happiness, when it is widely distributed', 'Talent and natural gifts properly exercised', 'A good will', 'Knowledge of the categorical imperative', 'c'),
(44, 'me', 58, 1411, 'What distinguishes acting "from duty" from acting merely "in accordance with duty"?', 'Acting from duty is faster and requires less deliberation than acting in accordance with duty', 'Acting from duty means the motive is duty itself, not inclination or self-interest; acting in accordance with duty only means the external act conforms to what duty requires', 'There is no meaningful difference — both produce the same moral worth', 'Acting in accordance with duty is morally superior because it is more natural', 'b'),
(44, 'me', 58, 1412, 'What does Kant mean by saying that a good will is good "without qualification"?', 'A good will always produces good consequences in every conceivable situation', 'Its goodness is unconditional — it is not good because of what it achieves, but good in itself regardless of outcome', 'A person with a good will cannot make moral mistakes', 'Good will is the same as good character, which Aristotle also identified as the foundation of ethics', 'b'),
(44, 'me', 58, 1413, 'Why does Kant argue that acting from inclination — even benevolent inclination — has no genuine moral worth?', 'Inclinations are always morally wrong because they involve selfishness', 'Moral worth requires that the motivating ground be the rational principle of duty, not a contingent feeling that could fluctuate or disappear', 'Inclinations always produce worse consequences than cold rational calculation', 'Benevolent inclinations are admirable but belong to aesthetics, not ethics', 'b'),
(44, 'me', 58, 1414, 'What role does the categorical imperative play in identifying moral duties?', 'It provides a list of specific duties that can be memorised and applied without further thought', 'It is the supreme rational test: only maxims that can be consistently universalised without contradiction express genuine moral duties', 'It determines duties by calculating which actions produce the most rational satisfaction', 'It derives duties from the laws of the state in which the agent lives', 'b');

-- Passage 45: Aristotle: On the Good Life and Virtue
-- lesson_id=59, language_code='me', sort_order 1420-1424
INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(45, 'me', 59, 1420, 'What does Aristotle identify as the highest good for human beings?', 'The accumulation of wealth and honour', 'Obedience to divine commandments', 'Eudaimonia — flourishing through virtuous rational activity', 'The pleasure of philosophical contemplation alone', 'c'),
(45, 'me', 59, 1421, 'Why does Aristotle reject pleasure and honour as the final human good?', 'Pleasure and honour are intrinsically evil and must be avoided', 'Both are desired for other reasons and are not truly final ends — pleasure is too passive, honour depends on others', 'They are goods for animals but not for rational beings', 'Aristotle accepts pleasure as the highest good but subordinates it to honour', 'b'),
(45, 'me', 59, 1422, 'What is the "function argument" and what conclusion does it reach?', 'Each political office has a function; the best ruler is one who fulfils that function excellently', 'The human function is rational activity; the human good is performing this function excellently — constituting eudaimonia', 'The argument establishes that the good of the soul is superior to the good of the body', 'Human function is language use, so eudaimonia consists in eloquence and rhetoric', 'b'),
(45, 'me', 59, 1423, 'How does Aristotle describe the relationship between virtue and eudaimonia?', 'Virtue is a means to eudaimonia but not a constituent of it', 'Eudaimonia consists in virtuous activity — virtue is not merely a means but partially constitutive of the good life', 'Eudaimonia can be achieved without virtue if one has sufficient wealth and good fortune', 'Virtue is a necessary but insufficient condition for eudaimonia; the other condition is philosophical knowledge', 'b'),
(45, 'me', 59, 1424, 'What role do external goods play in Aristotle''s account of eudaimonia?', 'External goods are irrelevant — only virtue matters for the good life', 'External goods are the primary constituents of eudaimonia, with virtue secondary', 'External goods such as health, friendship, and adequate resources are necessary conditions for eudaimonia, though virtue is its core', 'External goods corrupt virtue and should be minimised by the person seeking eudaimonia', 'c');
`;export{e as default};
