var e=`-- Logic module: grammar_lessons, vocabulary_items, reading_passages, exercises
-- language_code = 'lo'

-- Topics
INSERT OR IGNORE INTO grammar_lessons (id, title, description, sort_order, language_code) VALUES
  (13, 'Propositional Logic',  'Statements, connectives, and truth tables',          1, 'lo'),
  (14, 'Syllogisms',           'Deductive reasoning from premises to conclusions',   2, 'lo'),
  (15, 'Logical Fallacies',    'Recognizing errors in reasoning',                    3, 'lo'),
  (16, 'Argument Analysis',    'Evaluating the strength of arguments',               4, 'lo');

-- Key Terms (sort_order 221–240)
INSERT OR IGNORE INTO vocabulary_items (sort_order, cyrillic, target_word, english, transliteration, language_code) VALUES
  -- Propositional Logic (221–225)
  (221, 'Proposition',  'Proposition',   'A declarative statement that is either true or false, but not both.',                         'From Latin propositio: that which is put forward.', 'lo'),
  (222, 'Conjunction',  'Conjunction',   'A compound statement formed by joining two propositions with AND; true only when both are true.', 'From Latin conjunctio: a joining together.', 'lo'),
  (223, 'Disjunction',  'Disjunction',   'A compound statement formed with OR; true when at least one component is true.',               'From Latin disjunctio: a separation or division.', 'lo'),
  (224, 'Negation',     'Negation',      'The denial of a proposition; if P is true, NOT P is false, and vice versa.',                  'From Latin negatio: a denial. Mnemonic: negate = flip the truth value.', 'lo'),
  (225, 'Implication',  'Implication',   'A conditional statement IF P THEN Q; false only when P is true and Q is false.',              'From Latin implicare: to enfold. The only case that "breaks the promise" is true antecedent, false consequent.', 'lo'),

  -- Syllogisms (226–230)
  (226, 'Syllogism',    'Syllogism',     'A deductive argument with two premises and a conclusion, used since Aristotle.',               'From Greek syllogismos: a reckoning together. Root: syn (together) + logizesthai (to reason).', 'lo'),
  (227, 'Premise',      'Premise',       'A statement assumed or established to be true, from which a conclusion is drawn.',             'From Latin praemissa: sent before. Premises are the "givens" of an argument.', 'lo'),
  (228, 'Conclusion',   'Conclusion',    'The statement that follows necessarily from the premises in a valid argument.',                 'From Latin conclusio: a closing. What the argument is trying to establish.', 'lo'),
  (229, 'Major Term',   'Major Term',    'In a syllogism, the term that appears in the major premise and as the predicate of the conclusion.', 'The "bigger" category — e.g., "mortal" in All men are mortal; Socrates is mortal.', 'lo'),
  (230, 'Middle Term',  'Middle Term',   'The term appearing in both premises but not in the conclusion; it links the premises together.', 'The "bridge" term — e.g., "men" in All men are mortal; Socrates is a man.', 'lo'),

  -- Logical Fallacies (231–235)
  (231, 'Ad Hominem',          'Ad Hominem',          'Attacking the person making an argument rather than the argument itself.',                    'Latin: against the person. A fallacy because the character of the arguer is irrelevant to the truth of the claim.', 'lo'),
  (232, 'Straw Man',           'Straw Man',           'Misrepresenting an opponent''s argument in a weaker form and then refuting that weaker version.', 'Named after an effigy: easier to attack than the real thing. A form of misrepresentation.', 'lo'),
  (233, 'False Dilemma',       'False Dilemma',       'Presenting only two options as if they are the only possibilities when others exist.',         'Also called false dichotomy. Forces a choice between extremes, ignoring a spectrum of alternatives.', 'lo'),
  (234, 'Appeal to Authority', 'Appeal to Authority', 'Claiming something is true because an authority figure says so, without further evidence.',     'Latin: argumentum ad verecundiam. Legitimate when the authority is relevant and expert; fallacious when not.', 'lo'),
  (235, 'Slippery Slope',      'Slippery Slope',      'Arguing that one event will inevitably lead to extreme consequences without justification.',     'Assumes a chain of causation that is not established. Not always fallacious if the causal chain is supported.', 'lo'),

  -- Argument Analysis (236–240)
  (236, 'Validity',       'Validity',       'An argument is valid if the conclusion must be true whenever all the premises are true.',           'Validity is about structure, not truth. A valid argument can have false premises.', 'lo'),
  (237, 'Soundness',      'Soundness',      'An argument is sound if it is valid AND all its premises are actually true.',                       'Soundness is the gold standard: valid form + true content. A sound argument guarantees a true conclusion.', 'lo'),
  (238, 'Induction',      'Induction',      'Reasoning from specific observations to a general conclusion; the conclusion is probable, not certain.', 'From Latin inductio: a leading in. Science relies on induction; it cannot guarantee conclusions as deduction can.', 'lo'),
  (239, 'Deduction',      'Deduction',      'Reasoning from general principles to a specific conclusion that follows necessarily.',                'From Latin deductio: a leading down. If the premises are true and the argument valid, the conclusion cannot be false.', 'lo'),
  (240, 'Counterexample', 'Counterexample', 'A single case that refutes a universal claim or shows an argument form is invalid.',                 'One counterexample is sufficient to falsify any universal statement. Key tool in both logic and mathematics.', 'lo');

-- Reading passages
INSERT OR IGNORE INTO reading_passages (id, title, sort_order, language_code) VALUES
  (10, 'Aristotle: The Organon', 1, 'lo'),
  (11, 'Chrysippus and Stoic Logic', 2, 'lo'),
  (12, 'Mill: A System of Logic', 3, 'lo');

-- ---- Exercises: Lesson 13 — Propositional Logic (IDs 144–153) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(144, 13, 'mcq_grammar', 'Which of the following is a proposition?',
 'The sun is a star.', '', 'A proposition must be a declarative statement that can be true or false. Commands and questions are not propositions.', 1, 'lo'),

(145, 13, 'mcq_grammar', 'The conjunction P AND Q is true when:',
 'Both P and Q are true.', '', 'Conjunction (AND) requires both conjuncts to be true. If either is false, the whole conjunction is false.', 2, 'lo'),

(146, 13, 'mcq_grammar', 'The disjunction P OR Q is false when:',
 'Both P and Q are false.', '', 'A disjunction is false only when both disjuncts are false. Even one true component makes the whole disjunction true.', 3, 'lo'),

(147, 13, 'mcq_grammar', 'If P is false, what is NOT P?',
 'True', '', 'Negation flips the truth value. NOT false = true. NOT true = false.', 4, 'lo'),

(148, 13, 'mcq_grammar', 'The conditional "If P then Q" (P → Q) is false only when:',
 'P is true and Q is false.', '', 'A conditional is false only when the antecedent (P) is true and the consequent (Q) is false — the premise holds but the promise is broken.', 5, 'lo'),

(149, 13, 'mcq_grammar', 'Which connective produces a true result only when both components have the same truth value?',
 'Biconditional (if and only if)', '', 'A biconditional P ↔ Q is true when P and Q are both true or both false. It means they have identical truth values.', 6, 'lo'),

(150, 13, 'mcq_grammar', 'P is true and Q is false. What is the truth value of P AND (NOT Q)?',
 'True', '', 'NOT Q = true (since Q is false). P AND true = true AND true = true.', 7, 'lo'),

(151, 13, 'mcq_grammar', 'Which of the following is the correct truth table for P → Q when P = false and Q = false?',
 'True', '', 'When the antecedent P is false, the conditional is vacuously true regardless of Q. A false premise cannot break a promise.', 8, 'lo'),

(152, 13, 'mcq_grammar', 'A tautology is a proposition that is:',
 'Always true regardless of the truth values of its components.', '', 'A tautology is true under all possible truth value assignments. Example: P OR NOT P is always true.', 9, 'lo'),

(153, 13, 'mcq_grammar', 'Which of these is logically equivalent to NOT (P AND Q)?',
 '(NOT P) OR (NOT Q)', '', 'By De Morgan''s law: NOT (P AND Q) = (NOT P) OR (NOT Q). Negation distributes and the connective flips.', 10, 'lo');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(144, 'Open the window.', 0), (144, 'Is it raining?', 0), (144, 'The sun is a star.', 1), (144, 'Please be quiet.', 0),
(145, 'P is true and Q is false.', 0), (145, 'Both P and Q are true.', 1), (145, 'At least one of P or Q is true.', 0), (145, 'P is false and Q is true.', 0),
(146, 'Both P and Q are false.', 1), (146, 'P is true and Q is false.', 0), (146, 'P is false and Q is true.', 0), (146, 'Both P and Q are true.', 0),
(147, 'False', 0), (147, 'True', 1), (147, 'Unknown', 0), (147, 'Both true and false', 0),
(148, 'Both P and Q are false.', 0), (148, 'P is false and Q is true.', 0), (148, 'P is true and Q is false.', 1), (148, 'Both P and Q are true.', 0),
(149, 'Disjunction (OR)', 0), (149, 'Conjunction (AND)', 0), (149, 'Biconditional (if and only if)', 1), (149, 'Negation (NOT)', 0),
(150, 'True', 1), (150, 'False', 0), (150, 'Cannot be determined', 0), (150, 'Neither true nor false', 0),
(151, 'False', 0), (151, 'True', 1), (151, 'Unknown', 0), (151, 'Undefined', 0),
(152, 'Always false regardless of the truth values of its components.', 0), (152, 'True for some and false for other truth value assignments.', 0), (152, 'Always true regardless of the truth values of its components.', 1), (152, 'Neither true nor false.', 0),
(153, '(NOT P) AND (NOT Q)', 0), (153, '(NOT P) OR (NOT Q)', 1), (153, 'P OR Q', 0), (153, 'NOT P AND Q', 0);

-- ---- Exercises: Lesson 14 — Syllogisms (IDs 154–163) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(154, 14, 'mcq_grammar', 'In the syllogism "All humans are mortal; Socrates is human; therefore Socrates is mortal," what is the middle term?',
 'Human', '', 'The middle term (human/humans) appears in both premises but not in the conclusion. It links the major and minor premises.', 1, 'lo'),

(155, 14, 'mcq_grammar', 'A valid syllogism guarantees that:',
 'If the premises are true, the conclusion must be true.', '', 'Validity is about form, not fact. A valid syllogism ensures the conclusion follows necessarily from the premises — whatever their actual truth.', 2, 'lo'),

(156, 14, 'mcq_grammar', 'Which of the following is a valid syllogism?',
 'All mammals are warm-blooded. All whales are mammals. Therefore, all whales are warm-blooded.', '', 'Only this option has a valid form (Barbara: All M are P; All S are M; Therefore all S are P). The others commit fallacies of the undistributed middle.', 3, 'lo'),

(157, 14, 'mcq_grammar', 'What is the major premise in a standard categorical syllogism?',
 'The premise that contains the middle term and the major term.', '', 'The major premise contains the major term (predicate of the conclusion) and the middle term. The minor premise contains the minor term (subject of the conclusion) and the middle term.', 4, 'lo'),

(158, 14, 'mcq_grammar', 'An argument is sound if and only if it is:',
 'Valid and has true premises.', '', 'Soundness requires both validity (correct form) and true premises. A sound argument guarantees a true conclusion.', 5, 'lo'),

(159, 14, 'mcq_grammar', 'Which syllogism form is known as "Barbara" (AAA-1)?',
 'All M are P; All S are M; Therefore all S are P.', '', 'Barbara is the most basic valid syllogism form: all universal affirmatives. All M are P + All S are M → All S are P.', 6, 'lo'),

(160, 14, 'mcq_grammar', '"Some politicians are honest; All honest people keep their promises; Therefore some politicians keep their promises." Is this valid?',
 'Yes — the conclusion follows from the premises.', '', 'This is a valid particular syllogism. "Some politicians" are honest, and "all honest people" keep promises, so some politicians keep promises.', 7, 'lo'),

(161, 14, 'mcq_grammar', 'What error does this commit? "All roses are flowers; All flowers are plants; Therefore all plants are roses."',
 'Illicit major — the major term is distributed in the conclusion but not in the major premise.', '', 'The major term "roses" is distributed universally in the conclusion but was only the predicate of a universal affirmative (undistributed) in the major premise. This is the illicit major fallacy.', 8, 'lo'),

(162, 14, 'mcq_grammar', 'Which of these is NOT a standard mood of a categorical syllogism?',
 'ABB', '', 'Moods are built from A (universal affirmative), E (universal negative), I (particular affirmative), and O (particular negative). B is not a quality of a categorical statement.', 9, 'lo'),

(163, 14, 'mcq_grammar', 'A counterexample to a syllogism is used to show:',
 'That the argument form is invalid by providing a case with true premises and a false conclusion.', '', 'A counterexample to a form has the same structure but true premises and a false conclusion, proving the form does not guarantee truth preservation.', 10, 'lo');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(154, 'Mortal', 0), (154, 'Socrates', 0), (154, 'Human', 1), (154, 'Therefore', 0),
(155, 'The premises are true.', 0), (155, 'The conclusion is true.', 0), (155, 'If the premises are true, the conclusion must be true.', 1), (155, 'The argument is persuasive.', 0),
(156, 'All dogs are animals. All cats are animals. Therefore, all dogs are cats.', 0), (156, 'All fish can swim. Whales can swim. Therefore, whales are fish.', 0), (156, 'All mammals are warm-blooded. All whales are mammals. Therefore, all whales are warm-blooded.', 1), (156, 'Some birds fly. Penguins are birds. Therefore, penguins fly.', 0),
(157, 'The premise that contains the minor term.', 0), (157, 'The premise that contains the middle term and the major term.', 1), (157, 'The conclusion of the argument.', 0), (157, 'The premise that comes last.', 0),
(158, 'Valid and has true premises.', 1), (158, 'Valid only.', 0), (158, 'Persuasive and interesting.', 0), (158, 'Contains no fallacies.', 0),
(159, 'All M are P; Some S are M; Therefore some S are P.', 0), (159, 'All M are P; All S are M; Therefore all S are P.', 1), (159, 'No M are P; All S are M; Therefore no S are P.', 0), (159, 'Some M are P; All S are M; Therefore some S are P.', 0),
(160, 'Yes — the conclusion follows from the premises.', 1), (160, 'No — the middle term is undistributed.', 0), (160, 'No — the conclusion is stronger than the premises warrant.', 0), (160, 'Yes — but only if politicians are generally trustworthy.', 0),
(161, 'Affirming the consequent.', 0), (161, 'Undistributed middle term.', 0), (161, 'Illicit major — the major term is distributed in the conclusion but not in the major premise.', 1), (161, 'False premise.', 0),
(162, 'AAA', 0), (162, 'EIO', 0), (162, 'OAE', 0), (162, 'ABB', 1),
(163, 'That at least one premise is false.', 0), (163, 'That the argument form is invalid by providing a case with true premises and a false conclusion.', 1), (163, 'That the conclusion is false.', 0), (163, 'That the argument is not persuasive.', 0);

-- ---- Exercises: Lesson 15 — Logical Fallacies (IDs 164–173) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(164, 15, 'mcq_grammar', '"You can''t trust her argument about climate change — she drives a large car." This is an example of:',
 'Ad hominem', '', 'Ad hominem attacks the person rather than the argument. The arguer''s behavior is irrelevant to whether the scientific claim is correct.', 1, 'lo'),

(165, 15, 'mcq_grammar', '"Senator Smith says we should reduce military spending. Apparently he wants to leave our country completely defenceless." This is:',
 'Straw man', '', 'The straw man misrepresents the opponent''s position (reduce spending → defenceless) to make it easier to attack. The senator''s actual position is not being engaged.', 2, 'lo'),

(166, 15, 'mcq_grammar', '"Either you support this policy completely or you are against progress." This is:',
 'False dilemma', '', 'A false dilemma presents only two options when many exist. Partial support, alternative policies, and nuanced positions are all being excluded.', 3, 'lo'),

(167, 15, 'mcq_grammar', '"Einstein believed in God, so there must be strong evidence for God''s existence." This is:',
 'Appeal to authority', '', 'Einstein is an authority in physics, not theology. Appeal to authority is fallacious when the authority cited is not relevant to the domain of the claim.', 4, 'lo'),

(168, 15, 'mcq_grammar', '"If we allow gay marriage, next people will want to marry their pets." This is:',
 'Slippery slope', '', 'The slippery slope asserts an unsubstantiated causal chain from one event to an extreme consequence. The logical link between the two events must be established, not assumed.', 5, 'lo'),

(169, 15, 'mcq_grammar', 'Which of the following is NOT a fallacy?',
 'Citing a peer-reviewed study in the relevant field to support a claim.', '', 'Citing relevant expert evidence is legitimate, not a fallacy. The other options are ad hominem, post hoc ergo propter hoc, and slippery slope.', 6, 'lo'),

(170, 15, 'mcq_grammar', '"You believe in evolution? Well, Darwin was a racist, so his theory must be wrong." This commits:',
 'Ad hominem only', '', 'This is ad hominem — attacking Darwin personally rather than engaging with the evidence for evolutionary theory.', 7, 'lo'),

(171, 15, 'mcq_grammar', 'A "red herring" fallacy involves:',
 'Introducing an irrelevant topic to divert attention from the original issue.', '', 'A red herring diverts the argument onto a tangent. The name comes from the practice of dragging a smelly fish across a trail to mislead hunting dogs.', 8, 'lo'),

(172, 15, 'mcq_grammar', '"This bridge design must be safe — it''s been used for a hundred years without anyone questioning it." This is:',
 'Appeal to tradition (argumentum ad antiquitatem)', '', 'Appeal to tradition assumes that because something is old or traditional, it must be good or correct. Longevity does not guarantee safety or truth.', 9, 'lo'),

(173, 15, 'mcq_grammar', 'Which of the following best defines "begging the question" (circular reasoning)?',
 'Assuming the truth of the conclusion in one of the premises.', '', 'Begging the question (petitio principii) uses the conclusion as a hidden premise. Example: "The Bible is true because it is the word of God, and God would not lie."', 10, 'lo');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(164, 'Straw man', 0), (164, 'Ad hominem', 1), (164, 'False dilemma', 0), (164, 'Appeal to authority', 0),
(165, 'Slippery slope', 0), (165, 'Appeal to authority', 0), (165, 'Straw man', 1), (165, 'Ad hominem', 0),
(166, 'Ad hominem', 0), (166, 'Slippery slope', 0), (166, 'False dilemma', 1), (166, 'Circular reasoning', 0),
(167, 'Straw man', 0), (167, 'Appeal to authority', 1), (167, 'Slippery slope', 0), (167, 'Ad hominem', 0),
(168, 'Ad hominem', 0), (168, 'False dilemma', 0), (168, 'Straw man', 0), (168, 'Slippery slope', 1),
(169, 'Citing a peer-reviewed study in the relevant field to support a claim.', 1), (169, 'Attacking the intelligence of the opposing arguer.', 0), (169, 'Assuming that because two events are correlated, one must cause the other.', 0), (169, 'Claiming that if we allow X, then Y, Z, and W will inevitably follow without justification.', 0),
(170, 'False dilemma and ad hominem', 0), (170, 'Ad hominem only', 1), (170, 'Straw man only', 0), (170, 'Appeal to authority', 0),
(171, 'Attacking the arguer personally.', 0), (171, 'Introducing an irrelevant topic to divert attention from the original issue.', 1), (171, 'Misrepresenting the opponent''s argument.', 0), (171, 'Claiming something is true because it is popular.', 0),
(172, 'Appeal to tradition (argumentum ad antiquitatem)', 1), (172, 'Ad hominem', 0), (172, 'Straw man', 0), (172, 'Slippery slope', 0),
(173, 'Raising a question that leads to a tangential discussion.', 0), (173, 'Assuming the truth of the conclusion in one of the premises.', 1), (173, 'Asking a leading question to manipulate the listener.', 0), (173, 'Drawing a conclusion that goes beyond what the evidence supports.', 0);

-- ---- Exercises: Lesson 16 — Argument Analysis (IDs 174–183) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(174, 16, 'mcq_grammar', 'An argument is valid if:',
 'The conclusion must be true if all premises are true.', '', 'Validity is a formal property: if premises are true, the conclusion cannot be false. Truth of the premises is a separate question.', 1, 'lo'),

(175, 16, 'mcq_grammar', 'A deductive argument that is valid but has at least one false premise is:',
 'Unsound', '', 'Soundness requires both validity and true premises. Valid + false premise(s) = unsound. The conclusion may still be true, but the argument does not establish it.', 2, 'lo'),

(176, 16, 'mcq_grammar', 'Which of the following is the best counterexample to the claim "All politicians are dishonest"?',
 'A politician who has never been caught lying.', '', 'A single honest politician is a counterexample that falsifies the universal claim. One genuine case is sufficient.', 3, 'lo'),

(177, 16, 'mcq_grammar', 'Inductive arguments differ from deductive arguments in that they:',
 'Provide conclusions that go beyond what the premises strictly entail, with a degree of probability.', '', 'Induction goes from specific observations to general conclusions; it is ampliative (adds new content) but not truth-preserving in the way deduction is.', 4, 'lo'),

(178, 16, 'mcq_grammar', '"Every swan I have ever observed is white; therefore all swans are white." This is:',
 'A strong inductive argument that turned out to be wrong.', '', 'This classic example (before black swans were discovered in Australia) shows that even a strong inductive argument — many observations, careful reasoning — can be defeated by a single counterexample.', 5, 'lo'),

(179, 16, 'mcq_grammar', 'Which of the following strengthens an inductive argument?',
 'Increasing the size and diversity of the supporting sample.', '', 'Inductive strength increases with larger, more representative samples. Confirmation bias (ignoring counter-evidence) weakens an inductive argument.', 6, 'lo'),

(180, 16, 'mcq_grammar', 'The "burden of proof" in an argument typically rests with:',
 'The person who makes the affirmative claim.', '', 'He who asserts must prove (onus probandi). The burden of proof lies with the one making a positive claim, not with those who question it.', 7, 'lo'),

(181, 16, 'mcq_grammar', 'An argument''s conclusion is said to be "well-supported" when:',
 'Both B and C.', '', 'Both conditions matter: premises must be relevant, sufficient, and true (B), and the argument must be free of logical errors (C). Popularity is irrelevant.', 8, 'lo'),

(182, 16, 'mcq_grammar', 'What is the difference between a deductive and an inductive argument''s standard of evaluation?',
 'Deductive arguments are evaluated for validity/soundness; inductive arguments for strength/cogency.', '', 'Deductive: valid (form) + sound (form + true premises). Inductive: strong (evidence supports conclusion) + cogent (strong + true premises). Different standards for different argument types.', 9, 'lo'),

(183, 16, 'mcq_grammar', 'Which strategy is most useful when evaluating a complex argument?',
 'Identify the premises and conclusion, check validity, then check whether premises are true.', '', 'Careful argument analysis: (1) identify claims, (2) check logical structure for validity, (3) evaluate premises for truth. Credibility and emotion are not logical criteria.', 10, 'lo');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(174, 'All its premises are true.', 0), (174, 'Its conclusion is true.', 0), (174, 'The conclusion must be true if all premises are true.', 1), (174, 'It is impossible to disagree with it.', 0),
(175, 'Sound', 0), (175, 'Invalid', 0), (175, 'Unsound', 1), (175, 'Inductive', 0),
(176, 'Most politicians appear dishonest in the media.', 0), (176, 'A politician who has never been caught lying.', 1), (176, 'A politician who admitted to a single lie.', 0), (176, 'The existence of dishonest businesspeople.', 0),
(177, 'Always lead to false conclusions.', 0), (177, 'Provide conclusions that go beyond what the premises strictly entail, with a degree of probability.', 1), (177, 'Use only true premises.', 0), (177, 'Cannot be evaluated for strength.', 0),
(178, 'A valid deductive argument.', 0), (178, 'A sound deductive argument.', 0), (178, 'A strong inductive argument that turned out to be wrong.', 1), (178, 'A fallacy of composition.', 0),
(179, 'Using a smaller, more selective sample.', 0), (179, 'Ignoring contradictory evidence.', 0), (179, 'Increasing the size and diversity of the supporting sample.', 1), (179, 'Restating the conclusion in the premises.', 0),
(180, 'The person who makes the affirmative claim.', 1), (180, 'The person who is older or more experienced.', 0), (180, 'Whoever speaks first.', 0), (180, 'The person defending the status quo.', 0),
(181, 'The conclusion is popular or widely believed.', 0), (181, 'The premises are relevant, sufficient, and true, making the conclusion highly probable or necessary.', 0), (181, 'The argument contains no logical fallacies.', 0), (181, 'Both B and C.', 1),
(182, 'Deductive arguments are evaluated for validity/soundness; inductive arguments for strength/cogency.', 1), (182, 'Deductive arguments are always better than inductive ones.', 0), (182, 'Inductive arguments can be valid; deductive arguments cannot be strong.', 0), (182, 'There is no meaningful difference.', 0),
(183, 'Accept the conclusion if the arguer seems trustworthy.', 0), (183, 'Identify the premises and conclusion, check validity, then check whether premises are true.', 1), (183, 'Focus on the emotional appeal of the argument.', 0), (183, 'Reject the argument if any premise seems uncertain.', 0);
`;export{e as default};
