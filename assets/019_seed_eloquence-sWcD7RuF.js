var e=`-- Migration 019: Eloquence module seed data.
-- Uses language_code='el' sentinel throughout.

-- ---- Grammar lessons (topics) ----

INSERT OR IGNORE INTO grammar_lessons (id, title, description, sort_order, language_code) VALUES
  (33, 'The Three Appeals',        'Ethos, pathos, logos — Aristotle''s modes of persuasion',     1, 'el'),
  (34, 'Figures of Speech',        'Rhetorical devices that shape how an audience hears',          2, 'el'),
  (35, 'The Structure of Argument','Premise, inference, and the architecture of a case',           3, 'el'),
  (36, 'The Art of Persuasion',    'Audience, occasion, and the craft of moving people to act',   4, 'el');

-- ---- Vocabulary (20 key terms, sort_order 321-340) ----

INSERT OR IGNORE INTO vocabulary_items (sort_order, cyrillic, target_word, english, transliteration, language_code) VALUES
  (321, 'Ethos',    'Ethos',    'Speaker''s credibility and character as a source of persuasion.',
   'One of Aristotle''s three modes of persuasion (Rhetoric, I.2). Ethos is not simply reputation — it is the impression of good sense (phronesis), good character (arete), and goodwill (eunoia) that the speaker creates in the moment of speaking. A speaker with high ethos is believed even when the argument is incomplete. Ethos can be built by citing experience, demonstrating fairness, and acknowledging limitations honestly.', 'el'),
  (322, 'Pathos',   'Pathos',   'Appeal to the emotions of the audience.',
   'Aristotle''s second mode of persuasion. Pathos works by moving the audience into an emotional state that makes them receptive to the speaker''s conclusion. Effective pathos is not manipulation — it is the alignment of emotionally relevant truth with the argument. The orator who stirs anger over a genuine injustice, or inspires hope for a realistic vision, is using pathos legitimately. Pathos detached from logos becomes demagoguery.', 'el'),
  (323, 'Logos',    'Logos',    'Appeal to reason through evidence, argument, and logic.',
   'Aristotle''s third mode of persuasion — argument through evidence, demonstration, and reasoning. Logos operates through examples (inductive), enthymemes (deductive from shared premises), and maxims (short, credible generalizations). In practice, logos is the substance of the case: the data, the causal argument, the comparison. Without logos, ethos is mere authority and pathos is sentiment without ground.', 'el'),
  (324, 'Kairos',   'Kairos',   'The opportune moment — the right time and place for a particular message.',
   'Kairos (Greek: the right time) is the rhetorical concept that the same argument, delivered in different circumstances, will succeed or fail depending on its timing. The doctor who delivers a diagnosis too early loses the patient; too late, the patient is gone. Political kairos is the recognition of the moment when the audience is ready — when events have prepared them for what you are about to say. Mastering kairos requires reading contexts, not just constructing arguments.', 'el'),
  (325, 'Decorum',  'Decorum',  'Appropriateness of style, tone, and content to the occasion and audience.',
   'Cicero''s concept (De Oratore): decorum is the fitness of all elements of the speech — vocabulary, metaphor, emotional register, length, humor — to the specific audience and occasion. The speech appropriate to a funeral is wrong for a celebration; the style suited to experts is wrong for a general audience. Decorum is not mere politeness — it is the intelligence to recognize what this audience in this moment requires, and to deliver it.', 'el'),
  (326, 'Anaphora', 'Anaphora', 'Repetition of the same word or phrase at the beginning of successive clauses.',
   'A figure of speech that creates rhythm, emphasis, and emotional intensity through deliberate repetition. Churchill''s "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields" is the canonical example. Anaphora works because the repeated element accumulates emotional weight with each iteration; the audience begins to anticipate it, and the anticipation itself creates a kind of suspense and release. It is one of the most powerful tools of oratory when used sparingly.', 'el'),
  (327, 'Antithesis','Antithesis','Contrasting ideas placed in parallel grammatical structures.',
   'Antithesis creates meaning through contrast: the structure of the sentence enacts the opposition it describes. Kennedy''s "Ask not what your country can do for you — ask what you can do for your country" is antithesis: the parallel structure ("ask not X / ask Y") emphasizes the contrast between self-interest and civic duty. Effective antithesis requires that the contrasted ideas be genuinely opposed and that the parallel structure be clean.', 'el'),
  (328, 'Chiasmus', 'Chiasmus', 'Reversal of grammatical structures in successive clauses — an A-B-B-A pattern.',
   'Chiasmus (Greek: crossing) inverts the order of terms: "Ask not what your country can do for you" — note that this is simultaneously antithesis and chiasmus. The crossing structure creates a sense of completion and symmetry that the audience experiences as satisfying. Politicians and preachers use it precisely because it feels like a revelation: the reversal creates the sensation that something is being settled. "You can take the boy out of the country, but you can''t take the country out of the boy" is a colloquial example.', 'el'),
  (329, 'Tricolon', 'Tricolon', 'A series of three parallel elements that creates rhythm and emphasis.',
   'The rule of three is one of the most deeply embedded patterns in human cognition: three items feel complete where two feel incomplete and four feel excessive. Caesar''s "Veni, vidi, vici" is the most famous tricolon in history. The three elements can be single words, phrases, or entire sentences. The third element typically carries the most weight — it is where the emphasis lands. Speakers use tricolon to make content more memorable and arguments more forceful.', 'el'),
  (330, 'Rhetorical Question', 'Rhetorical Question', 'A question asked not to elicit an answer but to make a point or provoke thought.',
   'The rhetorical question is a figure of speech that asserts rather than asks. "Is this the justice we were promised?" is not a real question; it is an accusation structured as a question. The form creates two effects: it invites the audience to supply the answer themselves (making them feel the conclusion is their own), and it avoids the directness of a statement (which can be challenged) in favor of a form that is harder to refute. Used excessively, it becomes evasive; used precisely, it is among the most persuasive moves available.', 'el'),
  (331, 'Enthymeme', 'Enthymeme', 'A syllogism with an unstated premise that the audience is expected to supply.',
   'Aristotle identified the enthymeme as the primary instrument of rhetorical proof (Rhetoric I.2). Unlike the full syllogism of formal logic, the enthymeme omits one premise because the audience already accepts it. "He must be guilty — no innocent person would refuse to testify" omits the major premise: "All people who refuse to testify are guilty." The power of the enthymeme lies in the omission: the audience supplies the missing premise themselves, making them collaborators in reaching the conclusion. What we supply ourselves we believe more firmly.', 'el'),
  (332, 'Premise',  'Premise',  'A statement offered as evidence or reason in support of a conclusion.',
   'In argument structure, a premise is any statement that supports the conclusion. Premises can be factual claims, shared values, or conceded points. Strong premises are true, accepted by the audience, and actually relevant to the conclusion. Weak premises are contested, irrelevant, or dependent on conclusions yet to be established. The discipline of identifying premises — distinguishing them from illustrations, background, and conclusions — is the first step in argument analysis.', 'el'),
  (333, 'Refutation','Refutation','Dismantling an opponent''s argument by showing it is false, weak, or irrelevant.',
   'Classical rhetoric allocated a specific section of the oration to refutation (refutatio). Modern argumentation requires the same skill: engaging the strongest version of the opposing case (the steel man) and showing why it fails. Refutation by misrepresentation (straw man) is rhetorically weak and ethically inferior — it suggests you cannot defeat the real argument. Effective refutation concedes what is true in the opposing view, identifies the precise point of failure, and demonstrates it with evidence or logic.', 'el'),
  (334, 'Concession','Concession','Acknowledging the validity of an opposing point before countering it.',
   'Concession (concessio) is one of the most powerful moves in argument: by granting the strongest points of the opposition before making your own case, you signal fairness, disarm defensiveness, and frame your argument as one that survives even the most charitable reading of the other side. The formula: "It is true that X [opposing point]. And yet [your counter]. Therefore [your conclusion]." The concession makes the contrast sharper and the counter more persuasive. It is also epistemically honest: rarely is any side wholly wrong.', 'el'),
  (335, 'Stasis',   'Stasis',   'The central point of dispute in an argument — the issue on which the case turns.',
   'Stasis theory (Hermagoras, 2nd century BC; elaborated by Cicero and Quintilian) identifies four kinds of dispute: fact (did it happen?), definition (what was it?), quality (was it justified?), and jurisdiction (is this the right forum?). Identifying the correct stasis focuses the argument on the real point of contention. Many arguments persist because the parties are disputing at different stasis levels — one arguing fact while the other argues quality. Clarifying the stasis resolves this confusion and makes the argument productive.', 'el'),
  (336, 'Exordium', 'Exordium', 'The opening of a speech, designed to secure the audience''s attention and goodwill.',
   'Classical rhetorical structure (dispositio) begins with the exordium: the opening designed to make the audience attentive (attenti), receptive (dociles), and well-disposed (benivolentes). The exordium establishes ethos, creates the emotional register, and orients the audience to what they are about to hear. A failed exordium — one that bores, alienates, or confuses — means the rest of the speech must fight against the damage. The skilled orator treats the opening with more care than any other section.', 'el'),
  (337, 'Peroration','Peroration','The closing section of a speech — summary of arguments and final emotional appeal.',
   'The peroration (peroratio) serves two functions: recapitulatio (summary of the main arguments, making them memorable) and amplificatio (final emotional appeal that moves the audience to feel what the speech has argued they should feel). The closing is the last thing an audience hears and the first thing they remember. It must be proportionate — a peroration longer than the body is absurd — and emotionally true. Cicero argued that the peroration is where the orator must "set the souls of the judges on fire."', 'el'),
  (338, 'Amplification','Amplification','Expanding and intensifying a point through detail, repetition, or accumulation.',
   'Amplification (amplificatio) is the rhetorical technique of making an argument larger — more vivid, more emotionally resonant, more intellectually detailed — than a bare statement of fact would be. It is achieved through enumeration (listing all the relevant particulars), comparison (showing the point is even stronger than analogous cases), and accumulation (piling up related images or arguments). Quintilian warned against excessive amplification: if everything is amplified, nothing stands out. Used selectively, amplification makes an argument unforgettable.', 'el'),
  (339, 'Audience Adaptation','Audience Adaptation','Adjusting appeals, style, and content to the specific audience being addressed.',
   'Audience adaptation is the practical application of decorum at the level of argument selection. Different audiences require different evidence (experts want data; general audiences want narrative), different emotional appeals (loss aversion works differently in different cultures), and different registers of language. The orator who delivers the same speech to every audience has confused rehearsal with preparation. Audience analysis — identifying values, concerns, existing beliefs, and emotional states — must precede argument construction.', 'el'),
  (340, 'Commonplace','Commonplace','A shared belief or widely accepted value invoked as common ground for an argument.',
   'The topos (Greek: place; Latin: locus communis — commonplace) is a shared premise that speaker and audience hold in common, invoked to ground an argument. "We all want justice" or "no one should profit from another''s suffering" are commonplaces that function as premises without needing proof. The inventory of commonplaces available to a speaker in a given community is part of the speaker''s rhetorical knowledge. Effective commonplaces are genuinely shared — not merely assumed to be shared.', 'el');

-- ---- Reading passages ----

INSERT OR IGNORE INTO reading_passages (id, title, sort_order, language_code) VALUES
  (25, 'Aristotle on the Three Modes of Persuasion',  1, 'el'),
  (26, 'Cicero on the Duties of the Orator',           2, 'el'),
  (27, 'Quintilian on the Education of the Orator',    3, 'el');

-- ============================================================
-- Exercises: Lesson 33 — The Three Appeals (IDs 344–353)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(344, 33, 'mcq_grammar',
 'A doctor opens a public health presentation by stating her specialty, years of clinical experience, and the peer-reviewed journals in which her research appears — before presenting any data. Which appeal is she establishing?',
 'Ethos', '', 'Ethos: she is building credibility before the argument begins. By citing credentials, publication record, and relevant experience, she invites the audience to trust her as a source before evaluating the content. Ethos established in the exordium reduces resistance to the logos that follows.', 1, 'el'),

(345, 33, 'mcq_grammar',
 'A speech opens with the story of a specific family that lost their home in a flood, describing their fear, their children''s confusion, and their return to rubble — before presenting statistics on disaster relief funding. The story is designed to:',
 'Establish pathos before the logical argument', '', 'Pathos: the personal narrative creates emotional engagement — grief, sympathy, indignation — that makes the audience receptive to the policy argument that follows. The story is not the argument; it is the preparation of the emotional ground on which the argument will land.', 2, 'el'),

(346, 33, 'mcq_grammar',
 'A lawyer presents a timeline of documented events, three expert witnesses'' testimonies, and a statistical analysis of defendant behavior in similar cases. The core of her persuasive strategy is:',
 'Logos', '', 'Logos: the lawyer is building her case on evidence, expert opinion, and statistical reasoning — appeals to reason and inference. Logos is not limited to formal deductive argument; any evidence-based, inferential support for a conclusion is logos.', 3, 'el'),

(347, 33, 'mcq_grammar',
 'A political leader who has been governing for years suddenly shifts her rhetoric to address public anxiety about unemployment — a topic she previously avoided. She makes her move just as new economic data confirms widespread job losses. Which rhetorical concept best describes the timing of her intervention?',
 'Kairos', '', 'Kairos: she is reading the moment. The economic data has prepared the public — they are now ready to hear this argument in a way they were not before. Acting before the data would have seemed alarmist; acting after the political debate has moved on would be irrelevant. Kairos is the skill of recognizing when conditions have aligned for a particular message.', 4, 'el'),

(348, 33, 'mcq_grammar',
 'A chief executive addresses an all-staff meeting after a difficult restructuring. Rather than the polished boardroom language used in investor calls, he speaks directly and simply, acknowledges the pain of the layoffs, and limits his remarks to ten minutes. He is demonstrating:',
 'Decorum', '', 'Decorum: he is fitting his style, register, and length to the audience and occasion. The boardroom language appropriate for investors would be wrong here — it would signal distance and corporate defensiveness. The simpler, shorter, more emotionally honest register is appropriate to a staff meeting after a painful event. Decorum is rhetorical intelligence about context.', 5, 'el'),

(349, 33, 'mcq_grammar',
 'Which of the following best defines "ethos" as a mode of persuasion?',
 'The appeal based on the speaker''s character, credibility, and trustworthiness.', '', 'Ethos persuades through trust in the speaker — their expertise, fairness, and goodwill. It operates before and during argument: an audience that trusts the speaker is more willing to engage with the logos and be moved by the pathos. Ethos can be built in the speech itself (demonstrated by the quality of reasoning) or brought into the speech from prior reputation.', 6, 'el'),

(350, 33, 'mcq_grammar',
 'Which of the following best defines "pathos" as a mode of persuasion?',
 'The appeal to the emotions of the audience to make them receptive to a conclusion.', '', 'Pathos works by placing the audience in an emotional state — sympathy, indignation, fear, hope — that inclines them toward the speaker''s conclusion. Aristotle devoted a full book of the Rhetoric to systematically analyzing the emotions and the arguments that produce them. Pathos without logos is manipulation; logos without pathos is often insufficient to move people to act.', 7, 'el'),

(351, 33, 'mcq_grammar',
 'Which of the following best defines "logos" as a mode of persuasion?',
 'The appeal to reason through evidence, argument, and demonstration.', '', 'Logos operates through the substance of the case: facts, statistics, expert opinion, causal arguments, analogies. In Aristotle''s treatment, logos encompasses both inductive reasoning (from examples) and deductive reasoning (from shared premises via the enthymeme). The logical quality of an argument is not enough — it must be logos the audience can follow and find persuasive.', 8, 'el'),

(352, 33, 'mcq_grammar',
 'Which of the following best defines "kairos"?',
 'The opportune moment — the right time and context for a particular message.', '', 'Kairos is the temporal dimension of rhetoric: the recognition that the same argument succeeds at one moment and fails at another because audience readiness, cultural context, and recent events shape what can be heard. An argument perfectly suited to the kairos lands with authority; an identical argument out of its kairos may be ignored or resented.', 9, 'el'),

(353, 33, 'mcq_grammar',
 'Which of the following best defines "decorum"?',
 'The appropriateness of style, tone, and content to the specific audience and occasion.', '', 'Decorum (from Cicero) is the master principle of rhetorical style: every element of the speech — vocabulary, pace, humor, emotional intensity, length — must be calibrated to the specific context. The same content delivered at the wrong register fails even if the argument is sound. Decorum is the intelligence that matches the speech to its moment.', 10, 'el');

-- ============================================================
-- Exercises: Lesson 34 — Figures of Speech (IDs 354–363)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(354, 34, 'mcq_grammar',
 '"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills — we shall never surrender." The repetition of "we shall fight" at the start of each clause is an example of:',
 'Anaphora', '', 'Anaphora: the same phrase ("we shall fight") is repeated at the opening of successive clauses. The effect is cumulative emotional force — each repetition adds intensity and creates a rhythm that carries the audience forward. Churchill uses it to suggest inexhaustibility: the fight continues in every domain and can never be exhausted.', 1, 'el'),

(355, 34, 'mcq_grammar',
 '"Ask not what your country can do for you — ask what you can do for your country." This sentence places two contrasting ideas in parallel structures. This is an example of:',
 'Antithesis', '', 'Antithesis: the parallel grammatical structure ("ask not what X can do for you / ask what you can do for X") enacts the contrast between self-interest and civic duty. The contrast is sharpened by the structural symmetry — we hear both the opposition and the equivalence simultaneously. Note that this sentence is also a chiasmus (the terms are reversed), making it doubly effective.', 2, 'el'),

(356, 34, 'mcq_grammar',
 'A senator says: "We came here as servants of the people. We leave as their servants still. And as their servants we will remain." The crossing of "servants" across the grammatical structure creates which figure?',
 'Chiasmus', '', 'Chiasmus: the A-B / B-A crossing pattern — "came as servants" / "servants still" / "servants remain" — creates a sense of symmetry and inevitability. The crossing structure produces a feeling of resolution; the audience senses that something is being settled. Chiasmus is a device of conclusion — it sounds like the last word.', 3, 'el'),

(357, 34, 'mcq_grammar',
 'Julius Caesar''s report of his military campaign in three words — "Veni, vidi, vici" (I came, I saw, I conquered) — illustrates which rhetorical figure?',
 'Tricolon', '', 'Tricolon: three parallel elements that create rhythm, completion, and emphasis. The third element ("vici") carries the greatest weight and arrives with a satisfying finality. The rule of three is one of the most deeply embedded patterns in human cognition — two elements feel incomplete; four feel excessive; three feel right.', 4, 'el'),

(358, 34, 'mcq_grammar',
 'A prosecutor turns to the jury and asks: "Is this the kind of justice you promised to deliver when you took your oath?" He does not pause for an answer. This is:',
 'Rhetorical Question', '', 'Rhetorical Question: the question is not a real inquiry — it is an accusation structured as a question. The form invites the jury to supply the answer themselves ("no, of course not"), making them feel that the conclusion is their own. The question form also avoids the vulnerability of a direct accusation, which can be challenged; the question implicates the jury in arriving at the damning conclusion themselves.', 5, 'el'),

(359, 34, 'mcq_grammar',
 'Which of the following best defines "anaphora"?',
 'Repetition of the same word or phrase at the beginning of successive clauses or sentences.', '', 'Anaphora creates rhythm, emphasis, and cumulative emotional force through deliberate repetition at the clause opening. The repeated element serves as an anchor that the audience begins to anticipate; the anticipation itself creates tension that the completion of each clause releases. Used sparingly, anaphora is among the most powerful figures available to the orator.', 6, 'el'),

(360, 34, 'mcq_grammar',
 'Which of the following best defines "antithesis" as a rhetorical figure?',
 'The placement of contrasting ideas in parallel grammatical structures.', '', 'Antithesis sharpens contrast by placing opposed ideas in structural equivalence. The parallel structure makes the audience process both ideas simultaneously, heightening the sense of opposition. Effective antithesis requires that the contrasted ideas be genuinely opposed (not merely different) and that the parallel structure be clean enough to be heard as such.', 7, 'el'),

(361, 34, 'mcq_grammar',
 'Which of the following best defines "chiasmus"?',
 'A figure in which the grammatical structure of a phrase is inverted in the following phrase — an A-B-B-A pattern.', '', 'Chiasmus (from the Greek letter chi, X) creates a crossing structure: the terms of the first clause reappear in reversed order in the second. This produces a sense of resolution and symmetry — the structure implies that something has been completed or settled. It is a figure of endings and conclusions.', 8, 'el'),

(362, 34, 'mcq_grammar',
 'Which of the following best defines "tricolon"?',
 'A series of three parallel elements — words, phrases, or clauses — used for rhetorical effect.', '', 'Tricolon exploits the cognitive preference for three: two items feel incomplete, four feel excessive, three feel complete. The third element carries the greatest weight and provides the sense of conclusion. Memorable tricolons are used in political speeches, advertising, and religious liturgy precisely because they stick.', 9, 'el'),

(363, 34, 'mcq_grammar',
 'Which of the following best defines a "rhetorical question"?',
 'A question asked not to receive an answer but to make a point or provoke thought.', '', 'The rhetorical question asserts through the interrogative form. By inviting the audience to supply the answer, it makes them feel the conclusion is their own — more persuasive than a direct statement. It also sidesteps the vulnerability of assertion: a question cannot be straightforwardly denied in the way a claim can be countered.', 10, 'el');

-- ============================================================
-- Exercises: Lesson 35 — The Structure of Argument (IDs 364–373)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(364, 35, 'mcq_grammar',
 'A speaker argues: "He must be guilty — no innocent person would refuse to testify." The argument omits the explicit premise that connects refusing to testify with guilt. This is an example of:',
 'Enthymeme', '', 'Enthymeme: the argument omits the major premise ("All who refuse to testify are guilty") because the audience is expected to supply it. The power of the enthymeme lies in the omission — what the audience supplies themselves, they believe more firmly. Aristotle called the enthymeme the primary instrument of rhetorical proof because it makes the audience collaborators in reaching the conclusion.', 1, 'el'),

(365, 35, 'mcq_grammar',
 'A defense lawyer says: "We do not dispute that my client was at the scene. We do not dispute that he knew the victim. What we dispute is whether the prosecution has shown, with the required evidence, that he intended harm." She is identifying:',
 'Stasis', '', 'Stasis: the lawyer is locating the real point of dispute. The prosecution argues fact and association; she concedes those and redirects to quality/intent — the stasis on which the case actually turns. Identifying the correct stasis focuses the argument and prevents the parties from talking past each other at different levels of dispute.', 2, 'el'),

(366, 35, 'mcq_grammar',
 'In a policy debate, a speaker says: "I acknowledge that the current system has served many people well for decades. And yet, the evidence of the last five years shows that it is failing the very population it was designed to protect. Therefore, reform is not a rejection of the past but a fulfillment of its original intent." The opening move is:',
 'Concession', '', 'Concession: the speaker grants the strongest point of the opposition ("the system has served many people well") before making the counter-argument. This signals fairness, disarms defensiveness, and frames the argument as one that survives a charitable reading of the other side. The contrast between the concession and the counter is sharper because the concession is real.', 3, 'el'),

(367, 35, 'mcq_grammar',
 'A scientist presents evidence that contradicts the accepted theory. Her paper identifies the specific claim in the theory that the evidence disconfirms, demonstrates the failure of that claim, and shows that the theory cannot accommodate the data. She is performing:',
 'Refutation', '', 'Refutation: she engages the specific claim (the correct stasis), demonstrates its failure with evidence, and shows the theory cannot survive the counterexample. This is the structure of sound refutation — targeting the precise weak point, using the strongest available evidence, and showing the specific logical failure. Refutation by straw man would be easier but less honest and less persuasive to a critical audience.', 4, 'el'),

(368, 35, 'mcq_grammar',
 'An argument opens with: "All effective leaders communicate clearly. Churchill communicated clearly. Therefore Churchill was an effective leader." Identify the premise that connects the general claim to the conclusion about Churchill.',
 'Churchill communicated clearly.', '', 'The minor premise: "Churchill communicated clearly" links Churchill to the major premise ("All effective leaders communicate clearly") and licenses the conclusion. In syllogistic structure, the major premise states the general rule, the minor premise applies a specific case to that rule, and the conclusion follows necessarily. The minor premise is the bridge between the universal and the particular.', 5, 'el'),

(369, 35, 'mcq_grammar',
 'Two lawyers are debating a contract case. One argues that the defendant breached the contract; the other argues the contract was invalid from the start. They are arguing at different levels. Which concept describes the need to identify the real point of dispute?',
 'Stasis', '', 'Stasis: the two lawyers are arguing at different stasis levels — one at quality (was the contract breached?), the other at definition or fact (was there a valid contract?). Until the stasis is identified and agreed, the argument cannot be productive. Stasis theory provides the diagnostic tool to identify which question is actually in dispute.', 6, 'el'),

(370, 35, 'mcq_grammar',
 'Which of the following best defines an "enthymeme"?',
 'A syllogism with an unstated premise, where the audience supplies the missing link.', '', 'The enthymeme is the rhetorical equivalent of the logical syllogism, but with one premise omitted. The omission is strategic: the audience who supplies the missing premise becomes a co-author of the conclusion and therefore holds it more firmly. Aristotle identified the enthymeme as the primary tool of persuasion in rhetoric because it engages the audience actively rather than presenting a completed argument for passive reception.', 7, 'el'),

(371, 35, 'mcq_grammar',
 'Which of the following best defines a "premise" in argumentation?',
 'A statement offered as evidence or support for a conclusion.', '', 'Premises are the building blocks of argument. Every argument consists of one or more premises and a conclusion. Premises can be empirical (facts, statistics, testimony), logical (tautologies, definitions), or evaluative (shared values, conceded points). The discipline of argument analysis begins with identifying what is offered as support and what is offered as conclusion.', 8, 'el'),

(372, 35, 'mcq_grammar',
 'Which of the following best defines "refutation"?',
 'Dismantling an opponent''s argument by showing it is false, weak, or irrelevant.', '', 'Effective refutation targets the real argument (steel man, not straw man), identifies the precise point of failure (wrong premise, invalid inference, or irrelevant evidence), and demonstrates the failure clearly. Refutation by misrepresentation is rhetorically weak — a critical audience will notice and discount the refutation. Genuine refutation requires engaging the strongest version of the opposing case.', 9, 'el'),

(373, 35, 'mcq_grammar',
 'Which of the following best defines "concession" in argument?',
 'Acknowledging the validity of an opposing point before presenting a counter-argument.', '', 'Concession is a mark of intellectual confidence and rhetorical sophistication: it signals that you can afford to grant the opposition their strongest points and still win the argument. It disarms defensive reactions, invites the audience to see you as fair, and makes the contrast with your counter-argument sharper. The formula: "It is true that X. And yet Y. Therefore Z." The concession makes Z more persuasive because it survives X.', 10, 'el');

-- ============================================================
-- Exercises: Lesson 36 — The Art of Persuasion (IDs 374–383)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(374, 36, 'mcq_grammar',
 'A politician opens her speech by praising the city she is addressing — citing its history of civic engagement, its recent achievements, and its residents'' resilience. She has not yet made a single argument. This opening strategy is:',
 'Exordium', '', 'Exordium: the opening designed to make the audience attentive, well-disposed, and receptive before the argument begins. By praising the audience, she establishes goodwill (one of the three components of ethos: eunoia). A well-constructed exordium does not merely fill time — it prepares the emotional and attitudinal ground on which the argument will be built.', 1, 'el'),

(375, 36, 'mcq_grammar',
 'A closing argument summarizes the three main points of the prosecution''s case in sequence, restates the key evidence for each, and then calls on the jury to deliver justice for the victim''s family. This closing section is:',
 'Peroration', '', 'Peroration: the closing section performs two functions — recapitulatio (summary of the main arguments, making them memorable for deliberation) and amplificatio (emotional appeal that moves the audience to feel what the argument has demonstrated they should feel). Cicero argued the peroration must set the audience on fire; it is the last thing they hear before decision.', 2, 'el'),

(376, 36, 'mcq_grammar',
 'A speaker argues that a policy failure was "not merely inconvenient, not merely costly, not merely damaging to public trust — but a catastrophic betrayal of the most vulnerable citizens in our community, who placed their faith in institutions that failed them at the moment of greatest need." The expansion of the point through accumulated detail is:',
 'Amplification', '', 'Amplification: the speaker takes a point (the policy failure) and expands it through enumeration (the list of effects), intensification (the escalating register), and emotional accumulation. The effect is to make the point larger in the audience''s perception — not merely a policy failure but a moral catastrophe. Quintilian warned against overusing amplification; when everything is amplified, nothing stands out.', 3, 'el'),

(377, 36, 'mcq_grammar',
 'A consultant preparing to present to a board of financial experts replaces her narrative examples with data tables, adjusts her vocabulary to include sector-specific terminology, and removes the emotional appeal she used for the general audience. She is:',
 'Adapting her argument to her audience', '', 'Audience Adaptation: she is applying decorum at the level of content — selecting the evidence, vocabulary, and appeals appropriate to this specific audience. Financial experts require data and precision where a general audience requires narrative and analogy. Delivering the same speech to every audience confuses preparation with rehearsal.', 4, 'el'),

(378, 36, 'mcq_grammar',
 'An advocate opens her public remarks by saying: "We all believe that children deserve safety. We all believe that communities have a responsibility to protect those who cannot protect themselves." She is establishing:',
 'Commonplace', '', 'Commonplace: she is invoking shared premises — values the audience already holds — as the ground for the argument she is about to make. By establishing shared beliefs first, she positions her conclusion as the natural consequence of values the audience already owns. The commonplace does not prove anything; it builds the foundation from which proof will operate.', 5, 'el'),

(379, 36, 'mcq_grammar',
 'A speaker says: "I know many of you are skeptical of this proposal. Your skepticism is reasonable — the last three initiatives promised similar results and underdelivered." Before making her case for the new proposal, she is performing:',
 'Concession / audience adaptation', '', 'The speaker is simultaneously performing concession (granting the validity of the skepticism) and audience adaptation (adjusting her approach to meet the audience where they are emotionally and intellectually). This double move — acknowledging resistance before arguing against it — is a classic technique for persuading resistant audiences. It signals respect for the audience''s experience and intelligence.', 6, 'el'),

(380, 36, 'mcq_grammar',
 'Which of the following best defines the "exordium"?',
 'The opening section of a speech, designed to make the audience attentive, receptive, and well-disposed.', '', 'The exordium (from the Latin exordiri: to begin a web) is the threshold of the speech — where the relationship between speaker and audience is established. Classical rhetoric identifies three goals: to make the audience attentive (interested in what follows), docile (open to learning), and benevolent (well-disposed toward the speaker). A successful exordium reduces resistance and prepares the audience to receive the argument.', 7, 'el'),

(381, 36, 'mcq_grammar',
 'Which of the following best defines the "peroration"?',
 'The closing section of a speech — summarizing arguments and delivering a final emotional appeal.', '', 'The peroration serves recapitulatio (making the main arguments memorable) and amplificatio (moving the audience emotionally to act on what the argument has demonstrated). It is the last thing the audience hears and the first thing they remember. Cicero argued that the peroration is where the orator''s full emotional power must be deployed — not as manipulation, but as the natural completion of the argument''s emotional arc.', 8, 'el'),

(382, 36, 'mcq_grammar',
 'Which of the following best defines "amplification"?',
 'Expanding and intensifying a point through accumulation of detail, comparison, or repetition.', '', 'Amplification makes an argument larger — more vivid, more emotionally resonant, more intellectually detailed. It operates through enumeration (listing the particulars), comparison (showing the point is even stronger than analogous cases), and accumulation (piling up related images or arguments). Used selectively, amplification is among the most powerful tools of emphasis available to the speaker.', 9, 'el'),

(383, 36, 'mcq_grammar',
 'Which of the following best defines "commonplace" as a rhetorical concept?',
 'A shared belief or widely accepted value invoked as common ground to support an argument.', '', 'The commonplace (topos koinon / locus communis) is a premise that needs no proof because the audience already holds it. Invoking shared values — justice, loyalty, the welfare of children, the importance of truth — creates common ground from which argument can proceed without establishing every premise from scratch. The risk is assuming a commonplace is shared when it is not; the discipline is audience analysis to identify which beliefs genuinely qualify.', 10, 'el');
`;export{e as default};
