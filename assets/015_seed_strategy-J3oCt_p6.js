var e=`-- Migration 015: Personal Strategy module seed data.
-- Uses language_code='st' sentinel throughout.

-- ---- Grammar lessons (topics) ----

INSERT OR IGNORE INTO grammar_lessons (id, title, description, sort_order, language_code) VALUES
  (17, 'The Calculus of Conflict',  'When to fight, when to wait, when to yield',           1, 'st'),
  (18, 'The Anatomy of Power',      'How power is acquired, maintained, and lost',           2, 'st'),
  (19, 'The Statesman''s Art',      'Governing, alliances, and the uses of necessity',       3, 'st'),
  (20, 'The Negotiator''s Edge',    'Leverage, concession, and strategic persuasion',        4, 'st');

-- ---- Vocabulary (20 key terms, sort_order 241-260) ----

INSERT OR IGNORE INTO vocabulary_items (sort_order, cyrillic, target_word, english, transliteration, language_code) VALUES
  (241, 'Stratagem',                'Stratagem',                'A plan designed to deceive or outmaneuver an opponent.',                                                                                   'From Greek strategema: a trick of war. Root: strategos = general.', 'st'),
  (242, 'Realpolitik',              'Realpolitik',              'Politics based on practical objectives rather than ideals or morality.',                                                                    'German: real (practical) + Politik (politics). Coined by Rochau in 1853.', 'st'),
  (243, 'Force multiplication',     'Force multiplication',     'Using position, timing, or allies to amplify limited strength beyond its raw size.',                                                        'Military term. A lever multiplies force; so do terrain, surprise, and coalitions.', 'st'),
  (244, 'Strategic depth',          'Strategic depth',          'Resources or space held in reserve to absorb setbacks and sustain operations over time.',                                                   'Originally geographic: Russia''s vast interior as buffer. Applies to any reserve capacity.', 'st'),
  (245, 'Deterrence',               'Deterrence',               'Preventing an adversary''s action by making its cost unacceptable to them.',                                                                'From Latin deterrere: to frighten away. Effective deterrence requires both capability and credibility.', 'st'),
  (246, 'Fait accompli',            'Fait accompli',            'An accomplished fact that confronts others as a done deal, difficult or impossible to reverse.',                                            'French: accomplished fact. Forces opponents to respond to a new reality rather than prevent it.', 'st'),
  (247, 'Balance of power',         'Balance of power',         'A state of affairs in which no single actor can dominate the others; rivals check each other.',                                             'Core concept in international relations. When one power grows dominant, others form coalitions against it.', 'st'),
  (248, 'Asymmetric advantage',     'Asymmetric advantage',     'Exploiting a strength the opponent cannot match in kind, neutralising their superior resources.',                                           'Guerrilla warfare is the classic example: a weaker force uses mobility and terrain against a stronger one.', 'st'),
  (249, 'Machiavellian virtue',     'Machiavellian virtue',     'Effectiveness and adaptability in a leader — virtu — distinct from conventional moral virtue.',                                             'From Machiavelli''s virtù: the capacity to shape fortune. Includes force, guile, timing, and decisiveness.', 'st'),
  (250, 'Mandate',                  'Mandate',                  'The perceived legitimacy or authority to act; the consent — real or manufactured — that makes power appear rightful.',                     'From Latin mandatum: a command entrusted. Without mandate, power is naked force.', 'st'),
  (251, 'Sphere of influence',      'Sphere of influence',      'The domain where one party''s power is acknowledged and its preferences respected by other actors.',                                        'Formalised in 19th-century diplomacy. Control need not be direct — subordinate deference suffices.', 'st'),
  (252, 'Brinkmanship',             'Brinkmanship',             'Pushing a confrontation deliberately to the edge of disaster to force the other side to concede.',                                          'Coined by John Foster Dulles. Effective only if the threat is credible and the actor willing to follow through.', 'st'),
  (253, 'Alliance of convenience',  'Alliance of convenience',  'A temporary partnership driven by shared interest against a common threat, not by trust or shared values.',                                 'Churchill: "If Hitler invaded Hell, I would at least make a favourable reference to the Devil." Ends when interests diverge.', 'st'),
  (254, 'Indirect approach',        'Indirect approach',        'Achieving objectives by attacking where the opponent is weakest or least expects it, rather than engaging their strength.',                  'B. H. Liddell Hart''s central strategic thesis. A direct assault on strength invites attrition; the indirect route produces decisive results at lower cost.', 'st'),
  (255, 'Controlled information',   'Controlled information',   'Selectively revealing or withholding facts to shape the decisions and perceptions of others.',                                               'Information asymmetry is power. What you know and they do not, or what you make them believe, controls the decision space.', 'st'),
  (256, 'Escalation dominance',     'Escalation dominance',     'The ability to raise the stakes of a conflict faster and higher than an adversary can match, giving leverage at each level.',               'If you can always escalate further, your threats are credible and your opponent must seek de-escalation on your terms.', 'st'),
  (257, 'Concession framing',       'Concession framing',       'Presenting a loss or retreat as a voluntary, generous gift in order to extract future value or goodwill.',                                  'Never give a concession; always sell it. The framing transforms what you surrender into social capital.', 'st'),
  (258, 'BATNA',                    'BATNA',                    'Best Alternative To a Negotiated Agreement — what you will do if talks fail; your walk-away option and the source of your leverage.',       'Fisher and Ury, Getting to Yes (1981). Your BATNA determines your minimum acceptable deal. Improve your BATNA to strengthen your position.', 'st'),
  (259, 'Anchoring',                'Anchoring',                'Setting the first number or term in a negotiation to bias all subsequent discussion around that reference point.',                           'Psychological research (Tversky and Kahneman) shows the anchor exerts outsized influence even when both parties know it is arbitrary.', 'st'),
  (260, 'Pyrrhic victory',          'Pyrrhic victory',          'A win whose cost in resources, reputation, or leverage makes it functionally indistinguishable from defeat.',                               'Named after King Pyrrhus of Epirus, who defeated the Romans but at ruinous cost. "One more such victory and we are undone."', 'st');

-- ---- Reading passages ----

INSERT OR IGNORE INTO reading_passages (id, title, sort_order, language_code) VALUES
  (13, 'Sun Tzu: Knowing When to Fight', 1, 'st'),
  (14, 'Machiavelli: Whether It Is Better to Be Loved or Feared', 2, 'st'),
  (15, 'Thucydides: The Melian Dialogue', 3, 'st');

-- ============================================================
-- Exercises: Lesson 17 — The Calculus of Conflict (IDs 184–193)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(184, 17, 'mcq_grammar',
 'Sun Tzu writes: "To fight and conquer in all your battles is not supreme excellence; supreme excellence consists in breaking the enemy''s resistance without fighting." Which principle does this most directly express?',
 'Indirect approach', '', 'Supreme excellence avoids direct confrontation by achieving the objective through position, maneuver, or psychological pressure — the indirect approach.', 1, 'st'),

(185, 17, 'mcq_grammar',
 'A small startup faces a dominant market incumbent. Rather than competing directly on price, it targets a niche the incumbent ignores. Which concept best describes this tactic?',
 'Asymmetric advantage', '', 'The startup exploits a strength (agility, niche focus) the incumbent cannot match without cannibalising its own business — a classic asymmetric advantage.', 2, 'st'),

(186, 17, 'mcq_grammar',
 'A general has superior forces but the terrain heavily favours the defender. Which consideration should override the numerical advantage?',
 'Strategic depth', '', 'Terrain, supply lines, and the defender''s capacity to absorb attacks constitute strategic depth. Raw numerical superiority is negated when the ground favours the weaker side.', 3, 'st'),

(187, 17, 'mcq_grammar',
 'Two nations are in a standoff. Neither wants war, but each is unwilling to back down publicly. A diplomat arranges a face-saving formula that allows both to de-escalate without appearing to yield. What is this an example of?',
 'Avoiding a Pyrrhic victory', '', 'Both sides risk a Pyrrhic outcome — a "win" that destroys domestic credibility. The diplomat''s face-saving formula lets both parties step back from a fight neither can afford.', 4, 'st'),

(188, 17, 'mcq_grammar',
 'In the Art of War, Sun Tzu identifies five circumstances in which victory is certain. Which of the following best represents one of them?',
 'The commander who knows when to fight and when not to fight.', '', 'Sun Tzu''s first rule of certain victory: knowing when to engage and when to withhold. Discretion — not aggression — is the mark of the superior commander.', 5, 'st'),

(189, 17, 'mcq_grammar',
 'Which of the following best defines a "stratagem"?',
 'A plan designed to deceive or outmaneuver an opponent.', '', 'A stratagem is a calculated deception or indirect maneuver. The word comes from the Greek strategos (general) + agein (to lead).', 6, 'st'),

(190, 17, 'mcq_grammar',
 'A state builds up its military visibly, explicitly promising devastating retaliation for any attack on its allies. No attack occurs. This is a successful example of:',
 'Deterrence', '', 'Deterrence works when the threat is credible and the cost of action becomes unacceptable. Visible capability plus stated resolve is the standard formula.', 7, 'st'),

(191, 17, 'mcq_grammar',
 'Sun Tzu writes: "Know the enemy and know yourself; in a hundred battles you will never be in peril." Which passage from the Art of War, Chapter 3, is this closest to?',
 '"If you know the enemy and know yourself, your victory will not stand in doubt."', '', 'Chapter 3 of the Art of War stresses intelligence and self-knowledge as the foundation of strategic success. The passage quoted is the core of Chapter 3''s teaching.', 8, 'st'),

(192, 17, 'mcq_grammar',
 'A general in a strong position attacks a well-fortified enemy. He wins, but loses a third of his army. His enemy had no strategic reserves and is destroyed. Was this wise?',
 'Possibly — the outcome depends on whether the cost is sustainable and the enemy''s destruction decisive.', '', 'Whether a costly victory is Pyrrhic depends on context: if the enemy''s destruction ends the threat and the losses are replaceable, it may be sound. The Pyrrhic error is winning in a way that leaves you weaker than your remaining enemies.', 9, 'st'),

(193, 17, 'mcq_grammar',
 'Which of the following is the best example of "force multiplication"?',
 'A small insurgent force uses local knowledge and surprise to destroy supply lines, degrading a much larger army''s effectiveness.', '', 'Force multiplication uses position, intelligence, and timing — not raw numbers — to produce effects disproportionate to actual strength. Disrupting supply lines is a classic multiplier.', 10, 'st');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(184, 'Deterrence', 0), (184, 'Brinkmanship', 0), (184, 'Indirect approach', 1), (184, 'Force multiplication', 0),
(185, 'Realpolitik', 0), (185, 'Asymmetric advantage', 1), (185, 'Brinkmanship', 0), (185, 'Fait accompli', 0),
(186, 'The general should attack immediately to exploit the numbers.', 0), (186, 'Strategic depth', 1), (186, 'Asymmetric advantage', 0), (186, 'Escalation dominance', 0),
(187, 'Realpolitik', 0), (187, 'Fait accompli', 0), (187, 'Avoiding a Pyrrhic victory', 1), (187, 'Alliance of convenience', 0),
(188, 'The commander who has the most soldiers.', 0), (188, 'The commander who knows when to fight and when not to fight.', 1), (188, 'The commander who attacks first.', 0), (188, 'The commander whose army is better fed.', 0),
(189, 'A plan designed to deceive or outmaneuver an opponent.', 1), (189, 'A treaty between two rival powers.', 0), (189, 'A retreat conducted under fire.', 0), (189, 'An alliance formed under duress.', 0),
(190, 'Fait accompli', 0), (190, 'Alliance of convenience', 0), (190, 'Deterrence', 1), (190, 'Brinkmanship', 0),
(191, '"If you know the enemy and know yourself, your victory will not stand in doubt."', 1), (191, '"Supreme excellence consists in breaking the enemy''s resistance without fighting."', 0), (191, '"Opportunities multiply as they are seized."', 0), (191, '"The general who wins the battle makes many calculations."', 0),
(192, 'No — any loss of soldiers is a Pyrrhic outcome.', 0), (192, 'Possibly — the outcome depends on whether the cost is sustainable and the enemy''s destruction decisive.', 1), (192, 'Yes — destroying the enemy completely is always the right goal.', 0), (192, 'No — he should have used the indirect approach.', 0),
(193, 'A larger army trains harder.', 0), (193, 'A general adds more cavalry to his force.', 0), (193, 'A small insurgent force uses local knowledge and surprise to destroy supply lines, degrading a much larger army''s effectiveness.', 1), (193, 'Two nations sign a mutual defence treaty.', 0);

-- ============================================================
-- Exercises: Lesson 18 — The Anatomy of Power (IDs 194–203)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(194, 18, 'mcq_grammar',
 'Machiavelli argues that a prince is safer being feared than loved. What is his principal reason?',
 'Love depends on the will of others and can be withdrawn; fear depends on the prince''s own actions and is more reliable.',
 '', 'Machiavelli''s logic: love is a bond that men break when it serves their interest; fear is maintained by the dread of punishment, which never leaves. But a prince must avoid being hated.', 1, 'st'),

(195, 18, 'mcq_grammar',
 'A CEO deliberately cultivates an image of invincibility — never admitting mistakes, always projecting certainty. Which concept best describes the power being exercised?',
 'Mandate', '', 'The CEO is manufacturing perceived legitimacy — a mandate to lead. Power rests partly on the belief that the leader has a right to lead; this belief must be actively maintained.', 2, 'st'),

(196, 18, 'mcq_grammar',
 'A dominant regional power allows smaller neighbors to conduct their foreign policy only within parameters it approves, without formally annexing them. This is best described as:',
 'Sphere of influence', '', 'A sphere of influence involves acknowledged dominance without direct control. The dominant power achieves its objectives through the subordinate state''s deference rather than occupation.', 3, 'st'),

(197, 18, 'mcq_grammar',
 'Which of the following best captures Machiavelli''s concept of "virtù"?',
 'The capacity to act with force, adaptability, and decisiveness to shape circumstances in one''s favour.',
 '', 'Machiavellian virtù is not moral goodness but operational excellence: the ability to read situations and act with the right combination of force and cunning. It is contrasted with fortuna (luck/circumstance).', 4, 'st'),

(198, 18, 'mcq_grammar',
 'A political leader loses an election despite strong economic growth because voters believe the victory was manufactured. Which concept does this illustrate?',
 'Mandate', '', 'Perceived legitimacy is not automatic — it must be earned and maintained. Even with objective achievements, loss of mandate (public belief in the leader''s right to govern) can be fatal.', 5, 'st'),

(199, 18, 'mcq_grammar',
 'What does Machiavelli mean by "realpolitik" in practice?',
 'Decisions based on practical power calculations rather than ethical ideals.',
 '', 'Realpolitik strips away ideological justification. The question is never "what is right?" but "what works?" — what increases, maintains, or prevents the erosion of power.', 6, 'st'),

(200, 18, 'mcq_grammar',
 'According to Machiavelli in The Prince, what is the primary danger of cruelty?',
 'It becomes counterproductive when it breeds hatred rather than fear.', '', 'Machiavelli distinguishes cruelty well used (swift, decisive, serving a clear purpose) from cruelty badly used (prolonged, erratic, generating hatred). Hatred undermines the prince''s position in a way that fear does not.', 7, 'st'),

(201, 18, 'mcq_grammar',
 'A new monarch consolidates power by quickly redistributing lands from hostile nobles to loyal supporters. This is an example of:',
 'Machiavellian virtue (virtu)', '', 'The new monarch acts decisively and without sentiment to alter the power structure in their favour. This is precisely the kind of effective, adaptive action Machiavelli calls virtù — using the moment of transition before opposition can consolidate.', 8, 'st'),

(202, 18, 'mcq_grammar',
 'A corporate executive builds power by controlling access to the CEO, managing information flow, and building networks across departments. Which concept best applies?',
 'Controlled information', '', 'Controlling who knows what — and therefore who can act on what — is a central mechanism of institutional power. Information asymmetry creates dependency and influence without formal authority.', 9, 'st'),

(203, 18, 'mcq_grammar',
 'Which of the following best defines "realpolitik"?',
 'Politics based on practical objectives rather than ideals or morality.', '', 'Realpolitik prioritises effectiveness and outcomes over ethical consistency. It is associated with Bismarck and, in political theory, with the tradition of Machiavelli and Hobbes.', 10, 'st');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(194, 'Fear is more honourable than love.', 0), (194, 'Love depends on the will of others and can be withdrawn; fear depends on the prince''s own actions and is more reliable.', 1), (194, 'Subjects perform better when afraid.', 0), (194, 'Love leads to weak governance.', 0),
(195, 'Escalation dominance', 0), (195, 'Mandate', 1), (195, 'Sphere of influence', 0), (195, 'Deterrence', 0),
(196, 'Alliance of convenience', 0), (196, 'Fait accompli', 0), (196, 'Sphere of influence', 1), (196, 'Balance of power', 0),
(197, 'The moral virtue of a ruler.', 0), (197, 'The capacity to act with force, adaptability, and decisiveness to shape circumstances in one''s favour.', 1), (197, 'The legal authority conferred by election.', 0), (197, 'A leader''s personal charisma.', 0),
(198, 'Balance of power', 0), (198, 'Mandate', 1), (198, 'Realpolitik', 0), (198, 'Fait accompli', 0),
(199, 'A policy of international neutrality.', 0), (199, 'A diplomatic protocol requiring reciprocal concessions.', 0), (199, 'Decisions based on practical power calculations rather than ethical ideals.', 1), (199, 'The principle that all states are formally equal.', 0),
(200, 'Cruelty undermines the army''s morale.', 0), (200, 'It becomes counterproductive when it breeds hatred rather than fear.', 1), (200, 'It violates the law of nations.', 0), (200, 'The church will excommunicate the prince.', 0),
(201, 'Realpolitik', 0), (201, 'Deterrence', 0), (201, 'Machiavellian virtue (virtu)', 1), (201, 'Alliance of convenience', 0),
(202, 'Mandate', 0), (202, 'Controlled information', 1), (202, 'Sphere of influence', 0), (202, 'Escalation dominance', 0),
(203, 'A policy of building alliances with democratic states.', 0), (203, 'Politics based on practical objectives rather than ideals or morality.', 1), (203, 'The international rule of law.', 0), (203, 'A diplomatic method based on reciprocal compromise.', 0);

-- ============================================================
-- Exercises: Lesson 19 — The Statesman's Art (IDs 204–213)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(204, 19, 'mcq_grammar',
 'Two rival empires have been at war for decades. A third, smaller state courts both sides — receiving aid from each while committing to neither. Which strategy is this?',
 'Balance of power', '', 'The small state exploits the rivalry to maintain its independence. It is also practising a version of the balance of power — preventing either great power from gaining a dominant position over it.', 1, 'st'),

(205, 19, 'mcq_grammar',
 'A state seizes a disputed territory over a weekend, presenting the international community with a new map on Monday morning. Before any response can be organised, it announces a ceasefire and invites diplomatic recognition. This is:',
 'Fait accompli', '', 'The fait accompli converts a potential conflict into a renegotiation of a settled fact. Speed and the exploitation of the international community''s reaction time are key. Once the territory is occupied, the political cost of reversal falls on those who challenge it.', 2, 'st'),

(206, 19, 'mcq_grammar',
 'In the Melian Dialogue, the Athenians tell the Melians: "the strong do what they can and the weak suffer what they must." Which concept is this most directly expressing?',
 'Realpolitik', '', 'This is the Thucydidean formulation of realpolitik: power — not justice — determines outcomes between unequal parties. The Athenians explicitly dismiss the Melians'' appeal to fairness and divine justice.', 3, 'st'),

(207, 19, 'mcq_grammar',
 'A statesman forms an alliance with a rival he personally despises to defeat a common enemy. He expects the alliance to dissolve once the enemy is defeated. This is:',
 'Alliance of convenience', '', 'An alliance of convenience is defined by shared interest against a common threat, not by mutual trust or values. Churchill''s alliance with Stalin against Hitler is the canonical modern example.', 4, 'st'),

(208, 19, 'mcq_grammar',
 'Which of the following best describes "sphere of influence"?',
 'The domain where one party''s power is acknowledged and its preferences respected by other actors.', '', 'A sphere of influence involves acknowledged dominance without necessarily formal annexation. The Monroe Doctrine and the Soviet bloc were both expressions of spheres of influence.', 5, 'st'),

(209, 19, 'mcq_grammar',
 'A powerful nation threatens massive retaliation if a rival crosses a clearly demarcated line. The rival does not cross it. Which mechanism explains the outcome?',
 'Deterrence', '', 'Deterrence works when the threatened party believes the cost of action exceeds the gain. The key elements are credibility (the threat will be carried out) and capability (it can be carried out).', 6, 'st'),

(210, 19, 'mcq_grammar',
 'A statesman announces a concession to a rival — framing it as a generous voluntary gesture — in return for a future agreement on a different matter. Which concept does this illustrate?',
 'Concession framing', '', 'Concession framing transforms a retreat into a gift. By presenting a loss as a choice, the statesman extracts social capital and a reciprocal commitment rather than simply ceding ground.', 7, 'st'),

(211, 19, 'mcq_grammar',
 'In the Melian Dialogue, Athens eventually destroys Melos. Which concept does this outcome most directly illustrate?',
 'Escalation dominance', '', 'Athens demonstrates that it can raise the stakes to the ultimate level — annihilation — and follows through. The Melians had no credible counter-escalation. Escalation dominance means you can always go higher than your opponent.', 8, 'st'),

(212, 19, 'mcq_grammar',
 'Thucydides wrote the History of the Peloponnesian War as "a possession for all time" — a text from which future leaders could learn enduring lessons about power. Which of the following best identifies the Melian Dialogue''s core lesson?',
 'Justice is irrelevant between unequal powers; the strong dictate and the weak comply or are destroyed.', '', 'This is the Thucydidean insight preserved in the Dialogue: in the international realm, raw power — not fairness or law — determines outcomes when parties are unequal. The lesson is not endorsement but analysis.', 9, 'st'),

(213, 19, 'mcq_grammar',
 'A leader controls a region for years through client governors, who handle local resistance while rendering tribute. Which concept does this best illustrate?',
 'Sphere of influence', '', 'Governance through client relationships — indirect authority exercised through subordinates who acknowledge the dominant power''s primacy — is the classic expression of a sphere of influence.', 10, 'st');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(204, 'Deterrence', 0), (204, 'Balance of power', 1), (204, 'Escalation dominance', 0), (204, 'Indirect approach', 0),
(205, 'Brinkmanship', 0), (205, 'Escalation dominance', 0), (205, 'Fait accompli', 1), (205, 'Alliance of convenience', 0),
(206, 'Balance of power', 0), (206, 'Deterrence', 0), (206, 'Realpolitik', 1), (206, 'Mandate', 0),
(207, 'Realpolitik', 0), (207, 'Alliance of convenience', 1), (207, 'Sphere of influence', 0), (207, 'Balance of power', 0),
(208, 'A formal military alliance between equal powers.', 0), (208, 'The domain where one party''s power is acknowledged and its preferences respected by other actors.', 1), (208, 'A region of the world governed by international law.', 0), (208, 'A trade agreement between neighboring states.', 0),
(209, 'Fait accompli', 0), (209, 'Deterrence', 1), (209, 'Brinkmanship', 0), (209, 'Balance of power', 0),
(210, 'Realpolitik', 0), (210, 'Concession framing', 1), (210, 'BATNA', 0), (210, 'Anchoring', 0),
(211, 'Fait accompli', 0), (211, 'Deterrence', 0), (211, 'Escalation dominance', 1), (211, 'Pyrrhic victory', 0),
(212, 'Alliances are the foundation of security.', 0), (212, 'Neutrality is the safest strategy for small states.', 0), (212, 'Justice is irrelevant between unequal powers; the strong dictate and the weak comply or are destroyed.', 1), (212, 'Brinkmanship prevents war.', 0),
(213, 'Fait accompli', 0), (213, 'Alliance of convenience', 0), (213, 'Sphere of influence', 1), (213, 'Deterrence', 0);

-- ============================================================
-- Exercises: Lesson 20 — The Negotiator's Edge (IDs 214–223)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(214, 20, 'mcq_grammar',
 'A labour union enters contract negotiations having already secured a competing offer from another employer. They open the conversation by mentioning the offer. Which concept best describes what this achieves?',
 'BATNA', '', 'By revealing a strong alternative, the union strengthens its BATNA — the best outcome it can achieve without this deal. A strong BATNA raises the minimum acceptable settlement and improves leverage throughout negotiation.', 1, 'st'),

(215, 20, 'mcq_grammar',
 'A real-estate agent opens by listing a property 30% above the seller''s acceptable floor. The eventual sale price is 10% above floor — significantly better than if the agent had opened closer to the floor. Which principle explains this?',
 'Anchoring', '', 'The first number in a negotiation anchors all subsequent discussion. Research shows that even arbitrary anchors influence final outcomes. The agent used this to pull the settlement point upward.', 2, 'st'),

(216, 20, 'mcq_grammar',
 'During a trade dispute, Nation A makes a concession on tariffs but frames it publicly as "a goodwill gesture demonstrating our commitment to partnership," rather than as a response to pressure. It then requests a reciprocal concession. Which concept does this illustrate?',
 'Concession framing', '', 'Concession framing converts a loss into a social asset. By presenting the concession as voluntary and generous, Nation A generates an expectation of reciprocity without appearing to yield under pressure.', 3, 'st'),

(217, 20, 'mcq_grammar',
 'A negotiator walks away from a deal, having already secured a better alternative. Which principle made walking away strategically viable?',
 'BATNA', '', 'The ability to walk away depends entirely on the quality of your BATNA. When your alternative is strong, no-deal is not a failure but a choice — and the other party knows it.', 4, 'st'),

(218, 20, 'mcq_grammar',
 'A superpower threatens to impose crippling economic sanctions unless a smaller state reverses a policy decision within 48 hours. The smaller state complies. This is best described as:',
 'Brinkmanship', '', 'Brinkmanship is the use of extreme pressure — pushing to the edge of a crisis — to force a concession. The 48-hour ultimatum with massive threatened costs is a textbook brinkmanship move.', 5, 'st'),

(219, 20, 'mcq_grammar',
 'Which of the following best defines BATNA?',
 'The best outcome available outside the current negotiation — the walk-away option that determines your leverage.',
 '', 'BATNA (Best Alternative To a Negotiated Agreement) determines your minimum acceptable deal. A strong BATNA means you can credibly refuse bad offers; a weak BATNA forces concessions.', 6, 'st'),

(220, 20, 'mcq_grammar',
 'A company wins a major contract but must deliver in an impossibly short timeframe. To meet the deadline it exhausts its workforce, loses several senior employees, and misses two other opportunities. Which concept best describes this outcome?',
 'Pyrrhic victory', '', 'A Pyrrhic victory is a win whose cost makes it indistinguishable from defeat. Winning the contract at the cost of talent, capacity, and alternative revenue may leave the company weaker than before.', 7, 'st'),

(221, 20, 'mcq_grammar',
 'Two parties negotiate. Party A opens with an extreme demand it knows is unacceptable. Party B is rattled and shifts its own expectations toward Party A''s position even before serious negotiation begins. Which principle explains Party B''s response?',
 'Anchoring', '', 'The anchor — even an absurd one — shifts the reference point for both parties. Party B''s instinct to move toward the anchor rather than recalibrate to objective criteria is the anchoring effect.', 8, 'st'),

(222, 20, 'mcq_grammar',
 'A negotiator is pressured to accept a bad deal by a tight deadline. Which is the correct strategic response according to the BATNA framework?',
 'Evaluate whether the deal beats your BATNA; if it does not, walk away.', '', 'Deadlines create artificial urgency. The BATNA framework instructs: accept only when the deal improves on your best alternative. Accepting a deal worse than your BATNA is irrational regardless of deadline pressure.', 9, 'st'),

(223, 20, 'mcq_grammar',
 'In the Negotiator''s Edge, which pair of concepts works most directly together in a negotiation opening?',
 'Anchoring and BATNA', '', 'You anchor with an opening position (pulling the settlement point toward you) while your BATNA determines the floor below which you will not settle. Together they define the strategic space of the negotiation.', 10, 'st');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(214, 'Anchoring', 0), (214, 'BATNA', 1), (214, 'Concession framing', 0), (214, 'Escalation dominance', 0),
(215, 'BATNA', 0), (215, 'Concession framing', 0), (215, 'Anchoring', 1), (215, 'Brinkmanship', 0),
(216, 'Anchoring', 0), (216, 'BATNA', 0), (216, 'Concession framing', 1), (216, 'Realpolitik', 0),
(217, 'Anchoring', 0), (217, 'BATNA', 1), (217, 'Brinkmanship', 0), (217, 'Concession framing', 0),
(218, 'Fait accompli', 0), (218, 'Deterrence', 0), (218, 'Brinkmanship', 1), (218, 'Escalation dominance', 0),
(219, 'The highest bid you are willing to make.', 0), (219, 'The best outcome available outside the current negotiation — the walk-away option that determines your leverage.', 1), (219, 'A fallback position you reveal when pressed.', 0), (219, 'The minimum price a seller will accept.', 0),
(220, 'Fait accompli', 0), (220, 'Pyrrhic victory', 1), (220, 'Asymmetric advantage', 0), (220, 'Strategic depth', 0),
(221, 'BATNA', 0), (221, 'Anchoring', 1), (221, 'Brinkmanship', 0), (221, 'Concession framing', 0),
(222, 'Accept the deal to maintain the relationship.', 0), (222, 'Evaluate whether the deal beats your BATNA; if it does not, walk away.', 1), (222, 'Ask for an extension and keep negotiating.', 0), (222, 'Make a large concession to signal goodwill.', 0),
(223, 'Deterrence and Brinkmanship', 0), (223, 'Realpolitik and Mandate', 0), (223, 'Anchoring and BATNA', 1), (223, 'Concession framing and Fait accompli', 0);
`;export{e as default};
