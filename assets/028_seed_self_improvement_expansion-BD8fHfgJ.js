var e=`-- Migration 028: Self-Improvement module expansion — 4 additional lessons at Tier 1 difficulty.
-- Topics: Deep Work, Flow State, Essentialism, Mental Models
-- IDs: lessons 53-56, vocab 421-440, exercises 544-583

-- ---- Grammar lessons (topics) ----

INSERT OR IGNORE INTO grammar_lessons (id, title, description, sort_order, language_code) VALUES
  (53, 'Deep Work',       'Cal Newport on concentration, distraction, and cognitive performance',  5, 'si'),
  (54, 'Flow State',      'Csikszentmihalyi on optimal experience and the challenge-skill balance',6, 'si'),
  (55, 'Essentialism',    'Greg McKeown on the disciplined pursuit of less',                       7, 'si'),
  (56, 'Mental Models',   'Munger''s latticework — inversion, first principles, and compounding', 8, 'si');

-- ---- Vocabulary (20 terms, sort_order 421-440) ----

INSERT OR IGNORE INTO vocabulary_items (cyrillic, target_word, english, transliteration, part_of_speech, sort_order, language_code) VALUES

('Deep Work',
 'Deep Work',
 'Professional activity performed in a state of distraction-free concentration that pushes cognitive capabilities to the limit and creates new value, skill, or insight.',
 'Cal Newport, Deep Work (2016). Contrasted with shallow work: non-cognitively demanding logistical tasks often performed while distracted.',
 'noun', 421, 'si'),

('Attention Residue',
 'Attention Residue',
 'The cognitive phenomenon whereby part of your attention remains fixed on a previous task even after switching to a new one, degrading performance on both.',
 'Research by Sophie Leroy (2009). The "quick check of email" before a deep task leaves residual attention on the inbox, not the work at hand.',
 'noun', 422, 'si'),

('Shallow Work',
 'Shallow Work',
 'Non-cognitively demanding logistical tasks, often performed while distracted, that create little new value and are easily replicable.',
 'Newport''s contrast to deep work. Email, meetings, status updates, and administrative tasks are typical examples. The problem is not their existence but their dominance.',
 'noun', 423, 'si'),

('Flow State',
 'Flow State',
 'A state of optimal experience characterised by total absorption in a challenging activity, a sense of effortless control, and loss of self-consciousness.',
 'Mihaly Csikszentmihalyi, Flow: The Psychology of Optimal Experience (1990). Named from subjects'' reports of feeling carried by a current.',
 'noun', 424, 'si'),

('Challenge-Skill Balance',
 'Challenge-Skill Balance',
 'The condition that produces flow: a task that is sufficiently challenging to require full engagement but not so difficult as to produce anxiety.',
 'Csikszentmihalyi''s core finding. Too easy → boredom; too hard → anxiety; at the edge of competence → flow. The optimal zone shifts upward as skill develops.',
 'noun', 425, 'si'),

('Autotelic Activity',
 'Autotelic Activity',
 'An activity done for its own sake — intrinsically rewarding, not merely instrumental. Flow is most reliably produced by autotelic engagement.',
 'Greek: autos (self) + telos (goal). The activity carries its own reward. Csikszentmihalyi found that people are often happier during complex, engaging work than during passive leisure.',
 'noun', 426, 'si'),

('Essentialism',
 'Essentialism',
 'The disciplined, systematic pursuit of less — doing fewer things at the highest possible level of contribution, rather than trying to do everything adequately.',
 'Greg McKeown, Essentialism: The Disciplined Pursuit of Less (2014). Essentialism is not about getting more done; it is about getting the right things done.',
 'noun', 427, 'si'),

('Trade-off',
 'Trade-off',
 'The reality that choosing one option means not choosing another — and that the essentialist explicitly acknowledges and embraces this rather than trying to have everything.',
 'McKeown argues that non-essentialists believe trade-offs can be avoided; essentialists know that the question is not "how can I do both?" but "which problem do I want to solve?"',
 'noun', 428, 'si'),

('Mental Model',
 'Mental Model',
 'A framework or concept from one discipline used to understand and solve problems in another — a portable analytical tool that improves judgment across domains.',
 'Charlie Munger''s concept of the "latticework of mental models." The goal is not to memorise models but to internalise the ones that explain the most with the least.',
 'noun', 429, 'si'),

('Inversion',
 'Inversion',
 'The mental model of approaching a problem backwards — instead of asking how to succeed, ask how to guarantee failure, then avoid those things.',
 'Attributed to mathematician Carl Jacobi: "Invert, always invert." Munger: "Tell me where I''m going to die so I''ll never go there." Often reveals constraints invisible to forward reasoning.',
 'noun', 430, 'si'),

('First-Principles Thinking',
 'First-Principles Thinking',
 'Breaking a problem down to its most fundamental truths — things that cannot be deduced from anything else — and reasoning up from there rather than by analogy.',
 'Attributed to Aristotle; applied by Elon Musk to battery costs. Analogy-based thinking is fast but inherits all the assumptions of the analogy; first-principles thinking is slow but not limited by them.',
 'noun', 431, 'si'),

('Circle of Competence',
 'Circle of Competence',
 'The domain within which your knowledge and judgment are genuinely reliable — Munger''s concept for knowing what you know and, crucially, what you do not.',
 'Warren Buffett and Munger: "It''s not a competence if you don''t know the edge of it." The greatest errors come from operating outside the circle without realising it.',
 'noun', 432, 'si'),

('Opportunity Cost',
 'Opportunity Cost',
 'The value of the next-best alternative forgone when a choice is made — every decision to do X is simultaneously a decision not to do Y.',
 'Fundamental to economics; underused in daily life. Munger: "Opportunity cost is a huge filter in life." The habit of explicitly naming opportunity costs improves decision quality.',
 'noun', 433, 'si'),

('Compounding',
 'Compounding',
 'The process by which small, consistent improvements accumulate into disproportionately large outcomes over time — applicable to skills, knowledge, relationships, and wealth.',
 'Einstein (possibly apocryphal): "the eighth wonder of the world." James Clear: habits compound. The strategic implication: small daily choices matter more than they appear.',
 'noun', 434, 'si'),

('Second-Order Effects',
 'Second-Order Effects',
 'The downstream consequences of a decision that are not immediately visible — the effects of the effects.',
 'Munger: "Think two and three steps ahead." The essayist Howard Marks: first-order thinking asks "what are the consequences?" Second-order thinking asks "what are the consequences of the consequences?"',
 'noun', 435, 'si'),

('Craftsman Mindset',
 'Craftsman Mindset',
 'Newport''s concept: focusing on the quality of what you produce rather than what your work can do for you — building rare and valuable skills as the foundation of career capital.',
 'Contrasted with the passion mindset (asking "what is my passion?"). The craftsman mindset produces passion as a by-product of mastery; the passion mindset often produces frustration.',
 'noun', 436, 'si'),

('Career Capital',
 'Career Capital',
 'Rare and valuable skills that give you the leverage to demand autonomy, creativity, and mission from your work — Newport''s prerequisite for a compelling career.',
 'Newport: you need something rare and valuable to offer before you can expect something rare and valuable in return. Skills are the currency of career negotiation.',
 'noun', 437, 'si'),

('Minimum Viable Effort',
 'Minimum Viable Effort',
 'The essentialist practice of doing less, but better — concentrating effort where it produces the highest contribution rather than spreading thin across many commitments.',
 'McKeown: "If it isn''t a clear yes, then it''s a clear no." The goal is not efficiency (doing more with less) but effectiveness (doing the right things).',
 'noun', 438, 'si'),

('Deliberate Practice',
 'Deliberate Practice',
 'A specific form of practice designed to improve performance: focused on weaknesses, at the edge of current ability, with immediate and accurate feedback.',
 'Anders Ericsson (1993). Not mere repetition — experts in every field improve through deliberate practice, not mere experience. It is the mechanism behind the 10,000-hour finding.',
 'noun', 439, 'si'),

('Decision Fatigue',
 'Decision Fatigue',
 'The deterioration of decision quality that occurs after a long period of decision-making — the mental resource required for good judgment is depleted by use.',
 'Research by Baumeister (2000s). Obama wore the same suit daily; Zuckerberg wears the same outfit. Reducing trivial decisions preserves mental energy for important ones.',
 'noun', 440, 'si');

-- ---- Reading passages ----

INSERT OR IGNORE INTO reading_passages (id, title, sort_order, language_code) VALUES
  (40, 'Newport: Deep Work in the Age of Distraction',   4, 'si'),
  (41, 'Csikszentmihalyi: The Anatomy of Flow',          5, 'si'),
  (42, 'Munger: The Psychology of Human Misjudgment',    6, 'si');

-- ============================================================
-- Exercises: Lesson 53 — Deep Work (IDs 544–553)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(544, 53, 'mcq_grammar', 'How does Cal Newport define deep work?', 'Professional activity in distraction-free concentration that pushes cognitive capacity and creates rare value', '', '', 1, 'si'),
(545, 53, 'mcq_grammar', 'What is attention residue, and why does it degrade performance?', 'Residual attention on a prior task reduces cognitive bandwidth available for the current one', '', '', 2, 'si'),
(546, 53, 'mcq_grammar', 'What distinguishes shallow work from deep work?', 'Shallow work is logistical and easily replicable; deep work is cognitively demanding and creates new value', '', '', 3, 'si'),
(547, 53, 'mcq_grammar', 'Newport argues that deep work is becoming both rarer and more valuable. Why?', 'Technology and open offices increase distraction, while the knowledge economy rewards high cognitive output', '', '', 4, 'si'),
(548, 53, 'mcq_grammar', 'What is the craftsman mindset?', 'Focusing on producing excellent work rather than asking what work can do for you — building skill as career capital', '', '', 5, 'si'),
(549, 53, 'mcq_grammar', 'Newport recommends "scheduling every minute of your day." What is the purpose?', 'To be intentional about how time is allocated rather than defaulting to whatever feels easiest', '', '', 6, 'si'),
(550, 53, 'mcq_grammar', 'What is "career capital" in Newport''s framework?', 'Rare and valuable skills that give leverage to demand autonomy and meaningful work', '', '', 7, 'si'),
(551, 53, 'mcq_grammar', 'Why does Newport argue that following your passion is flawed advice?', 'Passion is typically a by-product of mastery, not its prerequisite — skills must come before passion', '', '', 8, 'si'),
(552, 53, 'mcq_grammar', 'What does Newport mean by "embracing boredom"?', 'Regularly practising resistance to distraction so the mind can sustain concentration during deep work sessions', '', '', 9, 'si'),
(553, 53, 'mcq_grammar', 'Which of the following is most consistent with Newport''s advice?', 'Block 4-hour uninterrupted periods for cognitively demanding work each morning and batch email to one afternoon slot', '', '', 10, 'si');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(544, 'Working long hours with high intensity regardless of task type', 0),
(544, 'Professional activity in distraction-free concentration that pushes cognitive capacity and creates rare value', 1),
(544, 'Multi-tasking across complex projects simultaneously', 0),
(544, 'Any work done outside a conventional office environment', 0),

(545, 'Forgotten tasks create subconscious anxiety that disrupts sleep', 0),
(545, 'Residual attention on a prior task reduces cognitive bandwidth available for the current one', 1),
(545, 'Multitasking trains the brain to switch contexts faster over time', 0),
(545, 'Attention residue only affects people with attention deficit disorders', 0),

(546, 'Shallow work is done quickly; deep work takes a long time', 0),
(546, 'Shallow work is logistical and easily replicable; deep work is cognitively demanding and creates new value', 1),
(546, 'Shallow work is done by junior staff; deep work is reserved for leaders', 0),
(546, 'Shallow work is collaborative; deep work is always solitary', 0),

(547, 'Most companies now require fewer skilled knowledge workers', 0),
(547, 'Technology and open offices increase distraction, while the knowledge economy rewards high cognitive output', 1),
(547, 'Automation is eliminating the need for deep work in most professions', 0),
(547, 'Social media has made concentration easier by providing information on demand', 0),

(548, 'Focusing on finding work that aligns with your pre-existing passion', 0),
(548, 'Focusing on producing excellent work rather than asking what work can do for you — building skill as career capital', 1),
(548, 'Treating work as a craft means doing it slowly and by traditional methods', 0),
(548, 'Mastering the tools of your trade regardless of the quality of output', 0),

(549, 'To eliminate all spontaneity and make work as predictable as possible', 0),
(549, 'To be intentional about how time is allocated rather than defaulting to whatever feels easiest', 1),
(549, 'To maximise the number of tasks completed each day', 0),
(549, 'To ensure that shallow work is completed before deep work begins', 0),

(550, 'Credentials and qualifications that allow entry to competitive industries', 0),
(550, 'Rare and valuable skills that give leverage to demand autonomy and meaningful work', 1),
(550, 'The total monetary value of one''s professional reputation', 0),
(550, 'A large professional network accumulated over years of collaboration', 0),

(551, 'Most people lack genuine passions and should not be encouraged to look for them', 0),
(551, 'Passion is typically a by-product of mastery, not its prerequisite — skills must come before passion', 1),
(551, 'Passion is real but irrelevant to career success', 0),
(551, 'Following passion is good advice for creative fields but not analytical ones', 0),

(552, 'Accepting that some work is inevitably dull and doing it anyway', 0),
(552, 'Regularly practising resistance to distraction so the mind can sustain concentration during deep work sessions', 1),
(552, 'Scheduling deliberate breaks to prevent mental fatigue', 0),
(552, 'Accepting low engagement during tasks that are below your skill level', 0),

(553, 'Check email every 30 minutes to stay responsive and then do deep work in between', 0),
(553, 'Work in a busy café to simulate productive pressure from others', 0),
(553, 'Block 4-hour uninterrupted periods for cognitively demanding work each morning and batch email to one afternoon slot', 1),
(553, 'Alternate between deep and shallow tasks every hour to maintain variety', 0);

-- ============================================================
-- Exercises: Lesson 54 — Flow State (IDs 554–563)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(554, 54, 'mcq_grammar', 'How does Csikszentmihalyi define flow?', 'A state of optimal experience involving total absorption, effortless control, and intrinsic reward', '', '', 1, 'si'),
(555, 54, 'mcq_grammar', 'What condition is necessary to enter flow?', 'A task challenging enough to require full engagement but not so hard as to produce anxiety', '', '', 2, 'si'),
(556, 54, 'mcq_grammar', 'What happens when skill far exceeds challenge in Csikszentmihalyi''s model?', 'Boredom — the task provides insufficient engagement for the level of ability', '', '', 3, 'si'),
(557, 54, 'mcq_grammar', 'What happens when challenge far exceeds skill?', 'Anxiety — the task overwhelms current capacity, preventing flow', '', '', 4, 'si'),
(558, 54, 'mcq_grammar', 'What is an autotelic activity?', 'An activity done for its own sake — intrinsically rewarding rather than merely instrumental', '', '', 5, 'si'),
(559, 54, 'mcq_grammar', 'Csikszentmihalyi found that people often report higher well-being during work than during leisure. Why?', 'Work typically provides clear goals, feedback, and challenge — the conditions for flow — while passive leisure does not', '', '', 6, 'si'),
(560, 54, 'mcq_grammar', 'What role does clear feedback play in producing flow?', 'Immediate feedback allows the person to adjust performance in real time and maintain the challenge-skill balance', '', '', 7, 'si'),
(561, 54, 'mcq_grammar', 'How does the optimal challenge zone shift as skill develops?', 'It moves upward — the same task becomes boring as skill grows; harder challenges must be sought to sustain flow', '', '', 8, 'si'),
(562, 54, 'mcq_grammar', 'What is the relationship between flow and happiness in Csikszentmihalyi''s research?', 'Flow produces retrospective happiness and meaning — the experience itself is characterised by loss of self-consciousness, not pleasure', '', '', 9, 'si'),
(563, 54, 'mcq_grammar', 'Which of the following is most likely to produce flow?', 'A skilled programmer working on a difficult bug at the edge of their competence, with clear success criteria', '', '', 10, 'si');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(554, 'A relaxed state of contentment achieved through mindfulness meditation', 0),
(554, 'A state of optimal experience involving total absorption, effortless control, and intrinsic reward', 1),
(554, 'Peak physical performance during athletic competition', 0),
(554, 'A trance-like state induced by repetitive tasks', 0),

(555, 'Complete absence of distractions in the physical environment', 0),
(555, 'A task challenging enough to require full engagement but not so hard as to produce anxiety', 1),
(555, 'Strong intrinsic motivation for the activity', 0),
(555, 'A minimum of four uninterrupted hours', 0),

(556, 'Flow — easy tasks are intrinsically rewarding for skilled performers', 0),
(556, 'Boredom — the task provides insufficient engagement for the level of ability', 1),
(556, 'Anxiety — the performer fears they will make errors', 0),
(556, 'Relaxation — a pleasant state of effortless completion', 0),

(557, 'Boredom — too much challenge suppresses engagement', 0),
(557, 'Anxiety — the task overwhelms current capacity, preventing flow', 1),
(557, 'Flow — challenge drives maximum engagement', 0),
(557, 'Excitement — high challenge produces positive arousal', 0),

(558, 'An activity that requires no external tools or equipment', 0),
(558, 'An activity done for its own sake — intrinsically rewarding rather than merely instrumental', 1),
(558, 'An automatic behaviour that has become habitual through repetition', 0),
(558, 'An activity performed entirely independently without social interaction', 0),

(559, 'People lie about their well-being when asked about work', 0),
(559, 'Work typically provides clear goals, feedback, and challenge — the conditions for flow — while passive leisure does not', 1),
(559, 'People are conditioned to value work over leisure by cultural norms', 0),
(559, 'The finding only applies to high-status professional workers', 0),

(560, 'Feedback creates anxiety that disrupts the flow state', 0),
(560, 'Immediate feedback allows the person to adjust performance in real time and maintain the challenge-skill balance', 1),
(560, 'Feedback is irrelevant once flow has been established', 0),
(560, 'Delayed feedback is better than immediate feedback for sustaining concentration', 0),

(561, 'It moves downward — as skill grows, easier tasks become more rewarding', 0),
(561, 'It moves upward — the same task becomes boring as skill grows; harder challenges must be sought', 1),
(561, 'It stays fixed — the optimal challenge level is a stable individual trait', 0),
(561, 'It moves unpredictably — flow is too complex to predict from skill level alone', 0),

(562, 'Flow produces intense positive emotion during the experience', 0),
(562, 'Flow produces retrospective happiness and meaning — the experience itself is characterised by loss of self-consciousness, not pleasure', 1),
(562, 'Flow is pleasant during the experience but produces burnout over time', 0),
(562, 'Flow has no reliable relationship to well-being or happiness', 0),

(563, 'A musician playing a simple piece they have performed thousands of times', 0),
(563, 'A student watching a lecture on a topic they find moderately interesting', 0),
(563, 'A skilled programmer working on a difficult bug at the edge of their competence, with clear success criteria', 1),
(563, 'A manager responding to routine emails without time pressure', 0);

-- ============================================================
-- Exercises: Lesson 55 — Essentialism (IDs 564–573)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(564, 55, 'mcq_grammar', 'How does McKeown define essentialism?', 'The disciplined pursuit of less — doing fewer things at the highest level of contribution', '', '', 1, 'si'),
(565, 55, 'mcq_grammar', 'What is the essentialist''s core question?', '"What is the most important thing I can do right now?" — and eliminating everything else', '', '', 2, 'si'),
(566, 55, 'mcq_grammar', 'How does McKeown characterise the non-essentialist?', 'Tries to do everything, says yes to everything, spreads effort thin, and makes trivial progress in many directions', '', '', 3, 'si'),
(567, 55, 'mcq_grammar', 'What does McKeown mean by "if it isn''t a clear yes, it''s a clear no"?', 'Anything less than certain, enthusiastic commitment should be declined to protect time for essential work', '', '', 4, 'si'),
(568, 55, 'mcq_grammar', 'How does essentialism treat trade-offs?', 'As inherent and explicit — the question is not how to avoid them but which trade-off to make', '', '', 5, 'si'),
(569, 55, 'mcq_grammar', 'What is the "sunk cost bias" and how does it trap non-essentialists?', 'The tendency to continue investing in something because of past investment, even when it is no longer the best use of resources', '', '', 6, 'si'),
(570, 55, 'mcq_grammar', 'McKeown argues for "protecting the asset." What does he mean?', 'Prioritising rest, renewal, and health as non-negotiable — without them, no level of effort produces quality output', '', '', 7, 'si'),
(571, 55, 'mcq_grammar', 'What is the difference between efficiency and effectiveness in McKeown''s framework?', 'Efficiency is doing many things well; effectiveness is doing the right things — essentialism prioritises effectiveness', '', '', 8, 'si'),
(572, 55, 'mcq_grammar', 'Why does McKeown argue that saying no is a leadership skill?', 'Every yes to a non-essential is a no to something essential — the ability to decline is the ability to focus', '', '', 9, 'si'),
(573, 55, 'mcq_grammar', 'What does McKeown mean by "less but better"?', 'Concentrating complete effort on fewer, higher-contribution activities rather than spreading thin across many', '', '', 10, 'si');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(564, 'A minimalist lifestyle that rejects consumption and accumulation', 0),
(564, 'The disciplined pursuit of less — doing fewer things at the highest level of contribution', 1),
(564, 'Getting more done in less time through better productivity systems', 0),
(564, 'Simplifying one''s personal life to reduce stress and increase happiness', 0),

(565, '"How can I complete all my commitments as efficiently as possible?"', 0),
(565, '"What is the most important thing I can do right now?" — and eliminating everything else', 1),
(565, '"How can I say yes to more opportunities without sacrificing quality?"', 0),
(565, '"What systems can I put in place to manage a larger number of commitments?"', 0),

(566, 'Is lazy and avoids taking on new responsibilities', 0),
(566, 'Tries to do everything, says yes to everything, spreads effort thin, and makes trivial progress in many directions', 1),
(566, 'Focuses intensely on a few areas but lacks balance', 0),
(566, 'Prioritises short-term results over long-term impact', 0),

(567, 'All commitments require equal enthusiasm to be worth pursuing', 0),
(567, 'Anything less than certain, enthusiastic commitment should be declined to protect time for essential work', 1),
(567, 'Saying no should be avoided to preserve relationships', 0),
(567, 'Commitments made with moderate enthusiasm can be fulfilled adequately', 0),

(568, 'As problems to be solved through better planning and time management', 0),
(568, 'As inherent and explicit — the question is not how to avoid them but which trade-off to make', 1),
(568, 'As signs of poor strategic planning that should be eliminated', 0),
(568, 'As temporary constraints that disappear with sufficient effort', 0),

(569, 'The tendency to invest more in successful projects to capitalise on momentum', 0),
(569, 'The tendency to continue investing in something because of past investment, even when it is no longer the best use of resources', 1),
(569, 'The tendency to undervalue future costs relative to present costs', 0),
(569, 'The bias toward spending on visible costs rather than hidden opportunity costs', 0),

(570, 'Protecting intellectual property and competitive advantages', 0),
(570, 'Prioritising rest, renewal, and health as non-negotiable — without them, no level of effort produces quality output', 1),
(570, 'Maintaining the essential projects in one''s portfolio against scope creep', 0),
(570, 'Protecting time from meetings and email to focus on deep work', 0),

(571, 'Efficiency is more important; effectiveness is just a buzzword', 0),
(571, 'Efficiency is doing many things well; effectiveness is doing the right things — essentialism prioritises effectiveness', 1),
(571, 'Efficiency and effectiveness are the same thing described differently', 0),
(571, 'Effectiveness without efficiency is impossible to sustain', 0),

(572, 'Saying no is rude and damages professional relationships', 0),
(572, 'Every yes to a non-essential is a no to something essential — the ability to decline is the ability to focus', 1),
(572, 'Saying no is only appropriate for junior staff who lack authority', 0),
(572, 'Leaders should say no only when overloaded, not as a default practice', 0),

(573, 'Minimising the number of words, decisions, and actions in every situation', 0),
(573, 'Concentrating complete effort on fewer, higher-contribution activities rather than spreading thin across many', 1),
(573, 'Producing less output overall to preserve energy and avoid burnout', 0),
(573, 'Working fewer hours while maintaining the same level of output', 0);

-- ============================================================
-- Exercises: Lesson 56 — Mental Models (IDs 574–583)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(574, 56, 'mcq_grammar', 'What is a mental model?', 'A framework from one discipline used as an analytical tool to understand and solve problems across domains', '', '', 1, 'si'),
(575, 56, 'mcq_grammar', 'What does Charlie Munger mean by a "latticework of mental models"?', 'An interconnected set of frameworks from multiple disciplines that reinforce and check each other', '', '', 2, 'si'),
(576, 56, 'mcq_grammar', 'What is the mental model of inversion?', 'Approaching a problem backwards — asking how to guarantee failure, then avoiding those things', '', '', 3, 'si'),
(577, 56, 'mcq_grammar', 'What is first-principles thinking?', 'Decomposing a problem to its most fundamental truths and reasoning up from there, rather than from analogy', '', '', 4, 'si'),
(578, 56, 'mcq_grammar', 'What is the Circle of Competence?', 'The domain within which your knowledge and judgment are genuinely reliable — and knowing its edges', '', '', 5, 'si'),
(579, 56, 'mcq_grammar', 'Why does Munger emphasise opportunity cost as a mental model?', 'Every decision implicitly excludes alternatives; making the excluded option explicit improves the quality of choice', '', '', 6, 'si'),
(580, 56, 'mcq_grammar', 'What are second-order effects?', 'The downstream consequences of a decision that are not immediately visible — the effects of the effects', '', '', 7, 'si'),
(581, 56, 'mcq_grammar', 'Why is analogy-based thinking faster but riskier than first-principles thinking?', 'Analogy inherits all the assumptions of the source domain, including ones that may not apply', '', '', 8, 'si'),
(582, 56, 'mcq_grammar', 'What is the compounding mental model, and why does it matter for self-improvement?', 'Small consistent improvements accumulate into large outcomes over time — making daily habits disproportionately consequential', '', '', 9, 'si'),
(583, 56, 'mcq_grammar', 'How does decision fatigue affect judgment, and what is the essentialist countermeasure?', 'Repeated decisions deplete mental resources; reducing trivial decisions preserves capacity for important ones', '', '', 10, 'si');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(574, 'A psychological bias that distorts perception of reality', 0),
(574, 'A framework from one discipline used as an analytical tool to understand and solve problems across domains', 1),
(574, 'A simplified representation of a system used in computer simulation', 0),
(574, 'A cognitive map of an individual''s personal beliefs and values', 0),

(575, 'A visual diagram connecting related ideas from a single discipline', 0),
(575, 'An interconnected set of frameworks from multiple disciplines that reinforce and check each other', 1),
(575, 'A memorised list of the 100 most important concepts in business and investing', 0),
(575, 'A decision tree that systematically evaluates options in complex situations', 0),

(576, 'Reversing a decision after discovering new information', 0),
(576, 'Approaching a problem backwards — asking how to guarantee failure, then avoiding those things', 1),
(576, 'Using the opposite of conventional wisdom as a contrarian strategy', 0),
(576, 'Applying inverse probability (Bayes'' theorem) to update beliefs', 0),

(577, 'Applying principles from one field directly to another without modification', 0),
(577, 'Decomposing a problem to its most fundamental truths and reasoning up from there, rather than from analogy', 1),
(577, 'Identifying the most important principle in a complex situation', 0),
(577, 'Starting with the simplest explanation and adding complexity only as needed', 0),

(578, 'The range of topics covered in one''s formal education', 0),
(578, 'The domain within which your knowledge and judgment are genuinely reliable — and knowing its edges', 1),
(578, 'The set of skills listed on one''s professional resume', 0),
(578, 'The intellectual comfort zone that limits growth and should be expanded', 0),

(579, 'Opportunity cost is the most reliable predictor of investment returns', 0),
(579, 'Every decision implicitly excludes alternatives; making the excluded option explicit improves the quality of choice', 1),
(579, 'In most situations, there is a single best option and no real opportunity cost', 0),
(579, 'Opportunity cost only matters in financial decisions, not personal ones', 0),

(580, 'Legal and regulatory consequences that follow from a business decision', 0),
(580, 'The downstream consequences of a decision that are not immediately visible — the effects of the effects', 1),
(580, 'Side effects of a drug that appear after long-term use', 0),
(580, 'The second most important consequence of a decision, after the primary outcome', 0),

(581, 'Analogy-based thinking is always inferior to first-principles thinking', 0),
(581, 'Analogy inherits all the assumptions of the source domain, including ones that may not apply', 1),
(581, 'First-principles thinking is slower but also less reliable', 0),
(581, 'Analogy-based thinking is only risky in scientific contexts', 0),

(582, 'Compounding is a financial phenomenon irrelevant to personal development', 0),
(582, 'Small consistent improvements accumulate into large outcomes over time — making daily habits disproportionately consequential', 1),
(582, 'Compounding only works for monetary investments over very long time horizons', 0),
(582, 'Large breakthroughs matter more than small consistent improvements', 0),

(583, 'Decision fatigue is a myth; willpower is not a depletable resource', 0),
(583, 'Repeated decisions deplete mental resources; reducing trivial decisions preserves capacity for important ones', 1),
(583, 'Decision fatigue only affects people in high-stress leadership roles', 0),
(583, 'The countermeasure is to make all decisions in the morning when energy is highest', 0);
`;export{e as default};
