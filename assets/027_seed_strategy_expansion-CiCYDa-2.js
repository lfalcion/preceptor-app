var e=`-- Migration 027: Personal Strategy module expansion — 4 additional lessons at Tier 1 difficulty.
-- Topics: Clausewitz, Game Theory, Negotiation, Competitive Advantage
-- IDs: lessons 49-52, vocab 401-420, exercises 504-543

-- ---- Grammar lessons (topics) ----

INSERT OR IGNORE INTO grammar_lessons (id, title, description, sort_order, language_code) VALUES
  (49, 'Clausewitz and the Nature of War',    'Friction, fog of war, and war as politics by other means',    5, 'st'),
  (50, 'Game Theory and Strategic Interaction','Nash equilibrium, prisoner''s dilemma, and cooperation',      6, 'st'),
  (51, 'Principled Negotiation',              'BATNA, interests vs positions, and the zone of agreement',    7, 'st'),
  (52, 'Competitive Advantage',              'Porter''s forces, differentiation, and blue ocean strategy',   8, 'st');

-- ---- Vocabulary (20 terms, sort_order 401-420) ----

INSERT OR IGNORE INTO vocabulary_items (cyrillic, target_word, english, transliteration, part_of_speech, sort_order, language_code) VALUES

('Friction (Clausewitz)',
 'Friction (Clausewitz)',
 'The accumulated effect of small uncertainties, errors, and impediments that make real war far more difficult than war on paper.',
 'German: Friktion. From On War Book I. Everything in war is simple but the simplest thing is difficult — that difficulty multiplied is friction.',
 'noun', 401, 'st'),

('Fog of War',
 'Fog of War',
 'Clausewitz''s term for the uncertainty inherent in military operations — commanders must decide with incomplete, contradictory, and often wrong information.',
 'German: Nebel des Krieges. The strategic implication: decision-making systems must function under uncertainty, not wait for clarity that never comes.',
 'noun', 402, 'st'),

('Trinity (Clausewitz)',
 'Trinity (Clausewitz)',
 'Clausewitz''s model of war as a dynamic interaction of three forces: primordial violence (the people), probability and chance (the military), and rational purpose (the government).',
 'From On War Book I Chapter 1. War is waged at all three levels simultaneously; neglect any one and the whole system degrades.',
 'noun', 403, 'st'),

('Nash Equilibrium',
 'Nash Equilibrium',
 'A state in a strategic game where no player can improve their outcome by unilaterally changing their strategy, given the strategies of all other players.',
 'Named for John Nash (1950). The prisoner''s dilemma has one Nash equilibrium — mutual defection — even though mutual cooperation produces better outcomes for both.',
 'noun', 404, 'st'),

('Prisoner''s Dilemma',
 'Prisoner''s Dilemma',
 'A game theory scenario where two rational players, unable to coordinate, each defect (betray) even though mutual cooperation would leave both better off.',
 'Formalised by Tucker (1950). The tragedy: individual rationality produces collectively irrational outcomes. The resolution: iterated play, reputation, and enforceable agreements.',
 'noun', 405, 'st'),

('Zero-Sum Game',
 'Zero-Sum Game',
 'A situation in which one party''s gain is exactly another''s loss — the total value in the system is fixed. Chess is zero-sum; trade is not.',
 'From game theory: the payoffs sum to zero. Most competitive situations in business and diplomacy are non-zero-sum — value can be created or destroyed.',
 'noun', 406, 'st'),

('Positive-Sum Game',
 'Positive-Sum Game',
 'A situation in which cooperation enables both parties to gain — the total value in the system grows. Trade, alliances, and most business negotiations are positive-sum.',
 'The strategic implication: before treating a situation as zero-sum (I win, you lose), check whether value creation through cooperation is possible.',
 'noun', 407, 'st'),

('BATNA',
 'BATNA',
 'Best Alternative To a Negotiated Agreement — the course of action a party will take if negotiations fail. Strengthening your BATNA is the most reliable way to improve your negotiating position.',
 'From Fisher & Ury, Getting to Yes (1981). Never enter a negotiation without knowing your BATNA — it determines your reservation price.',
 'noun', 408, 'st'),

('ZOPA',
 'ZOPA',
 'Zone of Possible Agreement — the range within which a deal is better for both parties than their respective BATNAs. If no ZOPA exists, no deal should be struck.',
 'The negotiator''s task: discover and expand the ZOPA through information exchange and value creation before claiming value through positional bargaining.',
 'noun', 409, 'st'),

('Reservation Price',
 'Reservation Price',
 'The point at which a negotiator is indifferent between accepting a deal and walking away to their BATNA. Deals above this threshold are acceptable; below it, the BATNA is preferred.',
 'Also called the "walk-away point." Knowing your own reservation price and estimating your counterpart''s is the foundation of rational bargaining.',
 'noun', 410, 'st'),

('Anchoring (Negotiation)',
 'Anchoring (Negotiation)',
 'The strategic use of a first offer to establish a reference point that biases all subsequent negotiation toward that number.',
 'Empirically, the party who makes the first offer in a negotiation captures more value, on average. The anchor works even when the counterpart knows it is a tactic.',
 'noun', 411, 'st'),

('Interests vs Positions',
 'Interests vs Positions',
 'Fisher & Ury''s distinction: positions are stated demands; interests are the underlying needs and concerns that those demands are meant to satisfy.',
 'The classic example: two people fight over an orange (position: I want the orange). One wants the juice; the other wants the peel for baking. Both get 100% of what they need.',
 'noun', 412, 'st'),

('Competitive Advantage',
 'Competitive Advantage',
 'A condition that allows a firm to produce goods or services at lower cost, or at greater perceived value, than rivals — enabling above-average returns.',
 'Porter (1985): competitive advantage derives from either cost leadership (producing more efficiently) or differentiation (creating distinctive value).',
 'noun', 413, 'st'),

('Porter''s Five Forces',
 'Porter''s Five Forces',
 'Michael Porter''s framework for analysing industry attractiveness: threat of new entrants, bargaining power of suppliers, bargaining power of buyers, threat of substitutes, and competitive rivalry.',
 'From Competitive Strategy (1980). The five forces determine the average profitability of an industry. Strategy positions a firm to resist or exploit these forces.',
 'noun', 414, 'st'),

('Differentiation Strategy',
 'Differentiation Strategy',
 'A competitive approach in which a firm creates a product or service perceived as uniquely valuable by customers, allowing it to command a premium price.',
 'Porter (1985). Differentiation insulates against rivalry by reducing direct price competition. Apple, Hermès, and McKinsey are canonical examples.',
 'noun', 415, 'st'),

('Cost Leadership',
 'Cost Leadership',
 'A competitive strategy in which a firm achieves the lowest cost of production in its industry, enabling it to undercut rivals on price or earn higher margins at comparable prices.',
 'Porter (1985). Requires scale economies, process efficiency, and tight cost control. Walmart and Southwest Airlines are canonical examples.',
 'noun', 416, 'st'),

('Blue Ocean Strategy',
 'Blue Ocean Strategy',
 'A strategic approach of creating uncontested market space — making competition irrelevant by offering a fundamentally new value proposition rather than competing in existing markets.',
 'Kim & Mauborgne (2005). "Red oceans" are existing competitive spaces; "blue oceans" are new market spaces created by innovation. Cirque du Soleil is a classic example.',
 'noun', 417, 'st'),

('Iterated Game',
 'Iterated Game',
 'A game played repeatedly between the same players, enabling reputation, reciprocity, and conditional strategies (such as tit-for-tat) to emerge and sustain cooperation.',
 'Robert Axelrod''s tournaments (1980) showed that tit-for-tat — cooperate first, then mirror opponent''s last move — outperformed all other strategies in iterated prisoner''s dilemmas.',
 'noun', 418, 'st'),

('Commitment Device',
 'Commitment Device',
 'A mechanism by which a player voluntarily restricts their own future options to make a threat or promise credible — signalling to the opponent that certain moves are now unavoidable.',
 'Schelling (1960). Burning one''s ships (Hernán Cortés), public announcements, and constitutional constraints are commitment devices. They work by eliminating the option to back down.',
 'noun', 419, 'st'),

('Tit-for-Tat',
 'Tit-for-Tat',
 'A strategy in iterated games: cooperate on the first move, then exactly replicate the opponent''s previous move. Simple, forgiving, and retaliatory.',
 'Axelrod (1984): tit-for-tat won successive computer tournaments of iterated prisoner''s dilemma. Its virtues: it is nice (cooperates first), retaliatory (punishes defection), forgiving (returns to cooperation after retaliation), and clear.',
 'noun', 420, 'st');

-- ---- Reading passages ----

INSERT OR IGNORE INTO reading_passages (id, title, sort_order, language_code) VALUES
  (37, 'Clausewitz: On the Nature of War',              4, 'st'),
  (38, 'The Prisoner''s Dilemma and the Logic of Trust', 5, 'st'),
  (39, 'Porter: What Is Strategy?',                      6, 'st');

-- ============================================================
-- Exercises: Lesson 49 — Clausewitz (IDs 504–513)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(504, 49, 'mcq_grammar', 'Clausewitz famously defined war as "the continuation of politics by other means." What does this mean?', 'War is a political instrument — it serves political ends and must be evaluated by them', '', '', 1, 'st'),
(505, 49, 'mcq_grammar', 'What is "friction" in Clausewitz''s sense?', 'The accumulated effect of small uncertainties and impediments that make real operations far harder than planned', '', '', 2, 'st'),
(506, 49, 'mcq_grammar', 'What is the "fog of war"?', 'The inherent uncertainty under which commanders must make decisions — information is always incomplete', '', '', 3, 'st'),
(507, 49, 'mcq_grammar', 'Clausewitz''s trinity identifies three forces that drive war. Which are they?', 'The people (passion), the military (probability/chance), and the government (rational purpose)', '', '', 4, 'st'),
(508, 49, 'mcq_grammar', 'Why does Clausewitz argue that a purely military view of war is dangerous?', 'War fought without political purpose becomes unlimited and self-defeating', '', '', 5, 'st'),
(509, 49, 'mcq_grammar', 'Clausewitz distinguishes between "absolute war" and "real war." What is the key difference?', 'Absolute war is the theoretical extreme of unlimited violence; real war is limited by political purposes, chance, and friction', '', '', 6, 'st'),
(510, 49, 'mcq_grammar', 'What does Clausewitz mean by the "culminating point of attack"?', 'The point at which an offensive force has extended so far that further advance weakens rather than strengthens its position', '', '', 7, 'st'),
(511, 49, 'mcq_grammar', 'How does Clausewitz''s concept of friction apply to modern organisational leadership?', 'Plans degrade on contact with reality; leaders must design systems resilient to error and ambiguity', '', '', 8, 'st'),
(512, 49, 'mcq_grammar', 'Clausewitz wrote that courage is of two kinds. What are they?', 'Courage in the face of personal danger, and courage to accept responsibility for decisions', '', '', 9, 'st'),
(513, 49, 'mcq_grammar', 'What is the key lesson Clausewitz draws from studying military history?', 'Principles must be internalised as judgement, not applied as rigid rules — every situation is unique', '', '', 10, 'st');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(504, 'War is irrational and should be avoided entirely', 0),
(504, 'War is a political instrument — it serves political ends and must be evaluated by them', 1),
(504, 'Politics is merely a preparation for inevitable military conflict', 0),
(504, 'Military strategy should be kept separate from political decision-making', 0),

(505, 'The fear experienced by soldiers in combat', 0),
(505, 'The accumulated effect of small uncertainties and impediments that make real operations far harder than planned', 1),
(505, 'The physical wear on weapons and equipment during a campaign', 0),
(505, 'The resistance of terrain to rapid military movement', 0),

(506, 'A deliberate deception operation by one side against the other', 0),
(506, 'The inherent uncertainty under which commanders must make decisions — information is always incomplete', 1),
(506, 'The literal smoke on a pre-modern battlefield that obscured vision', 0),
(506, 'The confusion created by multiple commanders issuing conflicting orders', 0),

(507, 'The infantry, cavalry, and artillery', 0),
(507, 'The people (passion), the military (probability/chance), and the government (rational purpose)', 1),
(507, 'Intelligence, logistics, and combat power', 0),
(507, 'Attack, defence, and manoeuvre', 0),

(508, 'Military leaders make better decisions than politicians', 0),
(508, 'War fought without political purpose becomes unlimited and self-defeating', 1),
(508, 'Politics introduces delays that undermine military effectiveness', 0),
(508, 'The military should set its own objectives to maintain operational focus', 0),

(509, 'Absolute war is fought with superior weapons; real war relies on strategy', 0),
(509, 'Absolute war is theoretical; real war is shaped by political purpose, chance, and friction', 1),
(509, 'Absolute war involves all of society; real war involves only professional armies', 0),
(509, 'Absolute war is the ideal; real war is a degraded version of it', 0),

(510, 'The point at which an army must choose between attack and defence', 0),
(510, 'The point at which an offensive force has extended so far that further advance weakens its position', 1),
(510, 'The moment when an attacking force reaches the enemy capital', 0),
(510, 'The maximum range at which artillery can be effective', 0),

(511, 'Military precision is achievable in business through better planning software', 0),
(511, 'Plans degrade on contact with reality; leaders must design systems resilient to error and ambiguity', 1),
(511, 'Only military organisations experience friction; businesses can eliminate it', 0),
(511, 'Friction can be eliminated through better communication technology', 0),

(512, 'Physical courage and moral courage', 0),
(512, 'Courage in the face of personal danger, and courage to accept responsibility for decisions', 1),
(512, 'Offensive courage and defensive courage', 0),
(512, 'Individual courage and collective courage', 0),

(513, 'Fixed tactical rules should be memorised and applied consistently', 0),
(513, 'Military history is irrelevant because technology changes everything', 0),
(513, 'Principles must be internalised as judgement, not applied as rigid rules — every situation is unique', 1),
(513, 'The lessons of history allow commanders to predict the future with accuracy', 0);

-- ============================================================
-- Exercises: Lesson 50 — Game Theory (IDs 514–523)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(514, 50, 'mcq_grammar', 'What is a Nash equilibrium?', 'A state where no player can improve their outcome by unilaterally changing strategy', '', '', 1, 'st'),
(515, 50, 'mcq_grammar', 'In the prisoner''s dilemma, what outcome does pure rational self-interest produce?', 'Mutual defection — both players betray, achieving a worse outcome than mutual cooperation', '', '', 2, 'st'),
(516, 50, 'mcq_grammar', 'What distinguishes a zero-sum game from a positive-sum game?', 'In zero-sum, one party''s gain is another''s loss; in positive-sum, cooperation creates new value', '', '', 3, 'st'),
(517, 50, 'mcq_grammar', 'How does iterated play change the logic of the prisoner''s dilemma?', 'Repeated interaction enables reputation and reciprocity, making cooperation sustainable', '', '', 4, 'st'),
(518, 50, 'mcq_grammar', 'What makes tit-for-tat a robust strategy in iterated games?', 'It is cooperative, retaliatory, forgiving, and simple — it rewards cooperation and punishes defection', '', '', 5, 'st'),
(519, 50, 'mcq_grammar', 'What is a commitment device, and why does it work?', 'A voluntary restriction on future options that makes a threat credible by eliminating the ability to back down', '', '', 6, 'st'),
(520, 50, 'mcq_grammar', 'Why is identifying a situation as zero-sum vs positive-sum strategically important?', 'Zero-sum calls for competitive strategies; positive-sum calls for cooperative value creation before value claiming', '', '', 7, 'st'),
(521, 50, 'mcq_grammar', 'What is the "first mover advantage" in game theory?', 'The benefit gained by the player who acts first, shaping the options available to subsequent players', '', '', 8, 'st'),
(522, 50, 'mcq_grammar', 'In Schelling''s analysis, what makes a threat credible?', 'The threatened party must believe the threat will actually be carried out — which requires pre-commitment or reputation', '', '', 9, 'st'),
(523, 50, 'mcq_grammar', 'What is the coordination game problem, and how is it typically resolved?', 'Players prefer to coordinate but have no single preferred equilibrium — resolved through focal points, convention, or communication', '', '', 10, 'st');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(514, 'The outcome that maximises total welfare for all players', 0),
(514, 'A state where no player can improve their outcome by unilaterally changing strategy', 1),
(514, 'The outcome achieved when all players cooperate fully', 0),
(514, 'The most aggressive strategy available to a player', 0),

(515, 'Mutual cooperation — both players realise cooperation is optimal', 0),
(515, 'Mutual defection — both players betray, achieving a worse outcome than mutual cooperation', 1),
(515, 'One player cooperates and the other defects, maximising total utility', 0),
(515, 'Both players are indifferent and choose randomly', 0),

(516, 'Zero-sum games have winners; positive-sum games have no winners', 0),
(516, 'In zero-sum, one party''s gain is another''s loss; in positive-sum, cooperation creates new value', 1),
(516, 'Zero-sum games involve money; positive-sum games involve relationships', 0),
(516, 'Positive-sum games always end in ties', 0),

(517, 'It makes cooperation impossible because players defect to build a lead', 0),
(517, 'Repeated interaction enables reputation and reciprocity, making cooperation sustainable', 1),
(517, 'Iterated play makes the prisoner''s dilemma more competitive, not less', 0),
(517, 'Repetition has no effect — the Nash equilibrium remains mutual defection', 0),

(518, 'It always cooperates, making it the most trusting strategy', 0),
(518, 'It always defects, making it the most aggressive strategy', 0),
(518, 'It is cooperative, retaliatory, forgiving, and simple — it rewards cooperation and punishes defection', 1),
(518, 'It randomises between cooperation and defection to be unpredictable', 0),

(519, 'A legal contract that enforces cooperation between parties', 0),
(519, 'A voluntary restriction on future options that makes a threat credible by eliminating the ability to back down', 1),
(519, 'A government regulation that prevents destructive competition', 0),
(519, 'A promise made before witnesses that creates social pressure to comply', 0),

(520, 'It determines which mathematical model to use in analysis', 0),
(520, 'Zero-sum calls for competitive strategies; positive-sum calls for cooperative value creation before value claiming', 1),
(520, 'It is a theoretical distinction with no practical consequence', 0),
(520, 'It determines whether to negotiate or litigate', 0),

(521, 'The advantage of having more resources at the start of a game', 0),
(521, 'The benefit gained by the player who acts first, shaping the options available to subsequent players', 1),
(521, 'The benefit of choosing the most powerful strategy before others can copy it', 0),
(521, 'The advantage of having the most information about the game', 0),

(522, 'The threat must be stated clearly and repeatedly', 0),
(522, 'The threatened party must believe the threat will actually be carried out — which requires pre-commitment or reputation', 1),
(522, 'Threats are always credible if backed by sufficient force', 0),
(522, 'A threat becomes credible once it has been carried out once', 0),

(523, 'Players in a coordination game have no preferred outcome and must accept any equilibrium', 0),
(523, 'Players prefer to coordinate but have no single preferred equilibrium — resolved through focal points, convention, or communication', 1),
(523, 'Coordination games are always zero-sum because resources must be divided', 0),
(523, 'The coordination problem is resolved by the player with the most power imposing their preferred outcome', 0);

-- ============================================================
-- Exercises: Lesson 51 — Negotiation (IDs 524–533)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(524, 51, 'mcq_grammar', 'What is a BATNA, and why does it matter?', 'Best Alternative to a Negotiated Agreement — it determines your reservation price and walk-away point', '', '', 1, 'st'),
(525, 51, 'mcq_grammar', 'What is the ZOPA in a negotiation?', 'The Zone of Possible Agreement — the range within which a deal is better for both parties than their BATNAs', '', '', 2, 'st'),
(526, 51, 'mcq_grammar', 'Fisher and Ury distinguish "positions" from "interests." Why does this matter?', 'Positions are stated demands; interests are underlying needs — reconciling interests opens deals that positional bargaining closes', '', '', 3, 'st'),
(527, 51, 'mcq_grammar', 'What is the strategic effect of making the first offer in a negotiation?', 'The first offer anchors subsequent discussion toward that number, typically benefiting the first mover', '', '', 4, 'st'),
(528, 51, 'mcq_grammar', 'How does strengthening your BATNA improve your negotiating position?', 'A stronger BATNA raises your reservation price and credibly signals willingness to walk away', '', '', 5, 'st'),
(529, 51, 'mcq_grammar', 'What is "expanding the pie" in negotiation?', 'Creating additional value through trades on issues where parties have different priorities, before claiming value', '', '', 6, 'st'),
(530, 51, 'mcq_grammar', 'Why do Fisher and Ury recommend separating people from the problem?', 'Relationship conflicts and substantive disagreements require different techniques; conflating them damages both', '', '', 7, 'st'),
(531, 51, 'mcq_grammar', 'What is a "package deal" and why is it useful?', 'Linking multiple issues in a single agreement allows trades across dimensions, creating more value than sequential issue-by-issue bargaining', '', '', 8, 'st'),
(532, 51, 'mcq_grammar', 'When should you reject a deal that falls within the ZOPA?', 'When a better deal is achievable and the cost of continued negotiation is less than the additional value', '', '', 9, 'st'),
(533, 51, 'mcq_grammar', 'What does it mean to negotiate on "objective criteria"?', 'Using standards independent of either party''s will — market value, expert opinion, law — to resolve disagreements legitimately', '', '', 10, 'st');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(524, 'The ideal outcome you hope to achieve in a negotiation', 0),
(524, 'Best Alternative to a Negotiated Agreement — it determines your reservation price and walk-away point', 1),
(524, 'The best opening offer you can make without damaging the relationship', 0),
(524, 'A legal document that backs up your negotiating position', 0),

(525, 'The range of prices the seller is willing to accept', 0),
(525, 'The Zone of Possible Agreement — the range within which a deal is better for both parties than their BATNAs', 1),
(525, 'The list of issues both parties agree are on the table', 0),
(525, 'The time window within which a deal must be closed', 0),

(526, 'Positions are more important; interests are merely rationalizations', 0),
(526, 'Positions are stated demands; interests are underlying needs — reconciling interests opens deals that positional bargaining closes', 1),
(526, 'Interests are emotional and should be excluded from rational negotiation', 0),
(526, 'The distinction is theoretical — in practice, positions and interests are the same', 0),

(527, 'Making the first offer signals weakness and desperation', 0),
(527, 'The first offer is irrelevant — only the final offer matters', 0),
(527, 'The first offer anchors subsequent discussion toward that number, typically benefiting the first mover', 1),
(527, 'The second offer is always more advantageous than the first', 0),

(528, 'A stronger BATNA lowers your reservation price, making deals easier to close', 0),
(528, 'A stronger BATNA raises your reservation price and credibly signals willingness to walk away', 1),
(528, 'BATNA improvement is only relevant when negotiating with a stronger party', 0),
(528, 'Strengthening your BATNA damages the relationship by signalling distrust', 0),

(529, 'Exaggerating the value of concessions to appear generous', 0),
(529, 'Creating additional value through trades on issues where parties have different priorities, before claiming value', 1),
(529, 'Making the total deal larger by adding more monetary value', 0),
(529, 'Agreeing to expand the scope of a contract to include more parties', 0),

(530, 'People are always the problem in negotiations; eliminating them enables rational agreement', 0),
(530, 'Relationship conflicts and substantive disagreements require different techniques; conflating them damages both', 1),
(530, 'Negotiations should be conducted entirely through intermediaries to avoid personal conflict', 0),
(530, 'The "people problem" resolves itself once a good deal is in place', 0),

(531, 'A deal that covers many unrelated issues simultaneously to confuse the other party', 0),
(531, 'Linking multiple issues in a single agreement allows trades across dimensions, creating more value than sequential issue-by-issue bargaining', 1),
(531, 'A deal presented as final and non-negotiable to pressure quick agreement', 0),
(531, 'A standard contract template that covers all common negotiating scenarios', 0),

(532, 'Never — any deal within the ZOPA should always be accepted immediately', 0),
(532, 'When the other party is acting in bad faith', 0),
(532, 'When a better deal is achievable and the cost of continued negotiation is less than the additional value', 1),
(532, 'When the relationship is more important than the specific terms', 0),

(533, 'Citing your own strong preferences as objective evidence of value', 0),
(533, 'Using standards independent of either party''s will — market value, expert opinion, law — to resolve disagreements legitimately', 1),
(533, 'Presenting your position as objectively correct and beyond debate', 0),
(533, 'Referring all disagreements to a neutral arbitrator for final resolution', 0);

-- ============================================================
-- Exercises: Lesson 52 — Competitive Advantage (IDs 534–543)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(534, 52, 'mcq_grammar', 'What are Porter''s two generic competitive strategies?', 'Cost leadership and differentiation', '', '', 1, 'st'),
(535, 52, 'mcq_grammar', 'What is the strategic logic of differentiation?', 'Create unique value that customers will pay a premium for, reducing direct price competition', '', '', 2, 'st'),
(536, 52, 'mcq_grammar', 'What is the strategic logic of cost leadership?', 'Achieve the lowest cost of production in the industry, enabling price competition or superior margins', '', '', 3, 'st'),
(537, 52, 'mcq_grammar', 'What is the "stuck in the middle" problem in Porter''s framework?', 'A firm that pursues both cost leadership and differentiation halfheartedly achieves neither and is outcompeted on both dimensions', '', '', 4, 'st'),
(538, 52, 'mcq_grammar', 'Name Porter''s five forces that determine industry profitability:', 'New entrants, supplier power, buyer power, substitutes, and competitive rivalry', '', '', 5, 'st'),
(539, 52, 'mcq_grammar', 'What is the Blue Ocean Strategy approach?', 'Create uncontested market space by offering a new value proposition, making existing competition irrelevant', '', '', 6, 'st'),
(540, 52, 'mcq_grammar', 'What distinguishes a sustainable competitive advantage from a temporary one?', 'It is difficult for competitors to replicate — due to unique resources, capabilities, or network effects', '', '', 7, 'st'),
(541, 52, 'mcq_grammar', 'How does the threat of new entrants affect industry profitability?', 'High entry threat forces incumbents to limit prices or invest in barriers, compressing margins', '', '', 8, 'st'),
(542, 52, 'mcq_grammar', 'What is a "switching cost" and why is it strategically valuable?', 'The cost a customer incurs when changing suppliers — high switching costs lock in customers and protect margins', '', '', 9, 'st'),
(543, 52, 'mcq_grammar', 'What does Porter mean by the "value chain"?', 'The sequence of activities through which a firm creates value — each activity is a source of potential cost advantage or differentiation', '', '', 10, 'st');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(534, 'Offensive strategy and defensive strategy', 0),
(534, 'Cost leadership and differentiation', 1),
(534, 'Market penetration and market development', 0),
(534, 'Product leadership and operational excellence', 0),

(535, 'Produce more units than competitors to drive down unit costs', 0),
(535, 'Create unique value that customers will pay a premium for, reducing direct price competition', 1),
(535, 'Enter new markets before competitors can establish themselves', 0),
(535, 'Copy successful competitors quickly to gain market share', 0),

(536, 'Charge lower prices by sacrificing quality', 0),
(536, 'Achieve the lowest cost of production in the industry, enabling price competition or superior margins', 1),
(536, 'Reduce costs by eliminating customer service and support', 0),
(536, 'Outsource all production to low-cost countries', 0),

(537, 'A firm that charges average prices is always outperformed by extremes', 0),
(537, 'A firm that pursues both cost leadership and differentiation halfheartedly achieves neither and is outcompeted on both dimensions', 1),
(537, 'Being positioned in the middle of the market geographically is strategically disadvantageous', 0),
(537, 'Mid-sized firms cannot compete against large-scale cost leaders', 0),

(538, 'Customers, competitors, regulators, technology, and geography', 0),
(538, 'New entrants, supplier power, buyer power, substitutes, and competitive rivalry', 1),
(538, 'Product quality, price, distribution, brand, and innovation', 0),
(538, 'Market share, growth rate, profitability, scale, and scope', 0),

(539, 'Enter an existing market with a lower price than incumbents', 0),
(539, 'Create uncontested market space by offering a new value proposition, making existing competition irrelevant', 1),
(539, 'Identify and exploit a niche within an existing competitive market', 0),
(539, 'Acquire competitors to eliminate rivalry and gain market share', 0),

(540, 'It earns the highest profit margin in the industry for at least one quarter', 0),
(540, 'It is difficult for competitors to replicate — due to unique resources, capabilities, or network effects', 1),
(540, 'It allows the firm to grow faster than the overall market', 0),
(540, 'It is protected by patents and regulatory approvals', 0),

(541, 'New entrants always succeed in highly profitable industries', 0),
(541, 'High entry threat forces incumbents to limit prices or invest in barriers, compressing margins', 1),
(541, 'New entrants have no effect on established competitors'' profitability', 0),
(541, 'High entry threat increases incumbent profitability by stimulating innovation', 0),

(542, 'The cost a supplier charges for delivering products to a customer', 0),
(542, 'The cost a customer incurs when changing suppliers — high switching costs lock in customers and protect margins', 1),
(542, 'The operational cost of switching from one production process to another', 0),
(542, 'The legal cost of terminating a contract with a supplier', 0),

(543, 'The total market value created by a firm and its suppliers', 0),
(543, 'The sequence of activities through which a firm creates value — each activity is a source of potential cost advantage or differentiation', 1),
(543, 'The chain of distribution from manufacturer to end consumer', 0),
(543, 'The pricing structure that captures value from different customer segments', 0);
`;export{e as default};
