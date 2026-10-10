var e=`-- Migration 016: Self-Improvement module seed data.
-- Uses language_code='si' sentinel throughout.

-- ---- Grammar lessons (topics) ----

INSERT OR IGNORE INTO grammar_lessons (id, title, description, sort_order, language_code) VALUES
  (21, 'Interpersonal Influence',  'Earning trust, genuine interest, and winning cooperation', 1, 'si'),
  (22, 'Habit Architecture',       'Cue-routine-reward loops, identity-based change, environment design', 2, 'si'),
  (23, 'Personal Effectiveness',   'Proactivity, prioritization, and synergistic thinking',   3, 'si'),
  (24, 'Emotional Intelligence',   'Self-awareness, empathy, and adaptive self-regulation',   4, 'si');

-- ---- Vocabulary (20 key terms, sort_order 261-280) ----

INSERT OR IGNORE INTO vocabulary_items (sort_order, cyrillic, target_word, english, transliteration, language_code) VALUES
  (261, 'Active Listening',      'Active Listening',      'Fully concentrating on the speaker rather than planning a reply.',
   'From Carnegie: the highest compliment you can pay another person is to truly listen. Active listening requires suspending your own agenda entirely.', 'si'),
  (262, 'Genuine Interest',      'Genuine Interest',      'Showing authentic curiosity about others'' lives.',
   'Carnegie''s core principle: people respond to those who show real interest in them. The word "genuine" is essential — performed interest is detected and resented.', 'si'),
  (263, 'Name Recall',           'Name Recall',           'Deliberately remembering and using people''s names as a mark of respect.',
   'Carnegie: "A person''s name is, to that person, the sweetest and most important sound in any language." Names signal that the other person matters.', 'si'),
  (264, 'Appreciation',          'Appreciation',          'Honest, specific praise; distinct from flattery.',
   'Carnegie distinguishes appreciation (sincere, specific, earned) from flattery (empty, general, self-serving). People crave genuine appreciation; they see through flattery.', 'si'),
  (265, 'Perspective-Taking',    'Perspective-Taking',    'Seeing a situation from the other person''s viewpoint.',
   'The foundation of persuasion. To win cooperation, you must first understand what the other person wants and why. Their logic is as real to them as yours is to you.', 'si'),
  (266, 'Cue',                   'Cue',                   'The trigger that initiates a habitual behavior.',
   'Duhigg''s habit loop: every habit begins with a cue — a location, time, emotional state, or preceding action that signals the brain to begin the routine.', 'si'),
  (267, 'Habit Loop',            'Habit Loop',            'The cycle of cue, routine, and reward that governs automatic behavior.',
   'Identified by Charles Duhigg in The Power of Habit. The loop runs automatically once established. Changing a habit requires keeping the cue and reward while replacing the routine.', 'si'),
  (268, 'Identity-Based Change', 'Identity-Based Change', 'Changing behavior by first changing who you believe yourself to be.',
   'James Clear''s insight in Atomic Habits: outcomes-based change (I want to lose weight) is weaker than identity-based change (I am a healthy person). Each action is a vote for your identity.', 'si'),
  (269, 'Environment Design',    'Environment Design',    'Arranging your surroundings to make desired behaviors easy and undesired behaviors difficult.',
   'Clear: make good habits obvious and easy; make bad habits invisible and hard. The friction of the environment shapes behavior more than willpower.', 'si'),
  (270, 'Habit Stacking',        'Habit Stacking',        'Linking a new habit to an existing one to piggyback on an established cue.',
   'Clear''s formula: "After I [CURRENT HABIT], I will [NEW HABIT]." The existing habit becomes the cue for the new one, eliminating the need to build a new trigger from scratch.', 'si'),
  (271, 'Proactivity',           'Proactivity',           'Acting on principles and chosen values rather than reacting to circumstances and impulses.',
   'Covey''s Habit 1: between stimulus and response, there is a space. Proactive people use that space; reactive people do not. The proactive vocabulary says "I choose" rather than "I have to."', 'si'),
  (272, 'First Things First',    'First Things First',    'Prioritizing important-but-not-urgent activities over urgent-but-unimportant ones.',
   'Covey''s Habit 3 and the Eisenhower matrix: Quadrant II (important, not urgent) is where the proactive person lives. Urgency is often a distraction from what actually matters.', 'si'),
  (273, 'Win-Win Thinking',      'Win-Win Thinking',      'Seeking outcomes where all parties benefit; rejecting the zero-sum frame.',
   'Covey''s Habit 4: most situations are not zero-sum. Win-win requires an Abundance Mentality — the belief that there is enough for everyone — rather than a scarcity frame.', 'si'),
  (274, 'Circle of Influence',   'Circle of Influence',   'The domain of things you can actually change; contrasted with the Circle of Concern.',
   'Covey: proactive people focus on their Circle of Influence — where they can act. Reactive people focus on their Circle of Concern — what worries them but is beyond their control.', 'si'),
  (275, 'Synergy',               'Synergy',               'Combining diverse perspectives to produce outcomes better than any individual could achieve alone.',
   'Covey''s Habit 6: 1 + 1 = 3 when people genuinely value each other''s differences. Synergy requires trust and openness; it cannot be forced.', 'si'),
  (276, 'Self-Awareness',        'Self-Awareness',         'Recognizing your own emotions, triggers, and behavioral patterns.',
   'Goleman''s first domain of emotional intelligence. Without self-awareness, the other competencies cannot develop. The examined life begins here.', 'si'),
  (277, 'Self-Regulation',       'Self-Regulation',        'Managing impulses and choosing responses deliberately rather than reacting automatically.',
   'Goleman: self-regulation is the ability to pause between stimulus and response and choose. It is built on self-awareness and is the foundation of reliability and trustworthiness.', 'si'),
  (278, 'Empathy',               'Empathy',               'Sensing another person''s emotional state without judgment.',
   'Goleman distinguishes cognitive empathy (understanding another''s perspective), emotional empathy (feeling what they feel), and compassionate empathy (being moved to help). All three matter.', 'si'),
  (279, 'Emotional Labeling',    'Emotional Labeling',    'Naming an emotion precisely to reduce its intensity and restore prefrontal control.',
   'Neuroscience: labeling activates the prefrontal cortex and dampens amygdala reactivity. "Name it to tame it." Precision matters — "frustrated" and "anxious" have different implications.', 'si'),
  (280, 'Feedback Reception',    'Feedback Reception',    'Receiving criticism without defensiveness, as information rather than as attack.',
   'Stone and Heen, Thanks for the Feedback: the ability to receive feedback well is as learnable as the ability to give it. Defensive reception cuts off useful information and damages relationships.', 'si');

-- ---- Reading passages ----

INSERT OR IGNORE INTO reading_passages (id, title, sort_order, language_code) VALUES
  (16, 'Franklin''s Thirteen Virtues', 1, 'si'),
  (17, 'Epictetus on What We Control', 2, 'si'),
  (18, 'Plutarch on Listening',        3, 'si');

-- ============================================================
-- Exercises: Lesson 21 — Interpersonal Influence (IDs 224–233)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(224, 21, 'mcq_grammar',
 'A colleague is explaining a problem and you notice yourself preparing your response before they have finished. Which principle are you violating?',
 'Active Listening', '', 'Active listening requires suspending your own agenda entirely. Preparing your reply while the other person speaks means you are listening to yourself, not to them.', 1, 'si'),

(225, 21, 'mcq_grammar',
 'You want to persuade your manager to adopt a new process. Carnegie advises that before making your case, you should first:',
 'Understand what your manager wants and why.', '', 'Perspective-taking is the prerequisite for persuasion. You cannot win cooperation without first understanding the other person''s interests, concerns, and frame of reference.', 2, 'si'),

(226, 21, 'mcq_grammar',
 'You meet a new client at a conference. They introduce themselves by name. Carnegie''s principle of name recall suggests you should:',
 'Repeat the name immediately and use it during the conversation.', '', 'Carnegie: a person''s name is the most important sound in any language to that person. Deliberate use of the name signals that you see them as an individual, not a generic contact.', 3, 'si'),

(227, 21, 'mcq_grammar',
 'Your team member delivers a report on time. You tell them: "You always deliver on schedule — I can count on you for that." This is an example of:',
 'Appreciation', '', 'Appreciation is honest and specific. It identifies a real quality and names it. Contrast with flattery, which is vague ("good job") and disconnected from a specific observed behavior.', 4, 'si'),

(228, 21, 'mcq_grammar',
 'A negotiation has stalled because both parties keep repeating their demands. Which principle would most directly help break the impasse?',
 'Perspective-Taking', '', 'When positions harden, understanding the other party''s underlying interests — their actual concerns, not their stated demands — creates the space for a solution. Perspective-taking unlocks the impasse.', 5, 'si'),

(229, 21, 'mcq_grammar',
 'Carnegie argues that people primarily act to satisfy:',
 'Their desire to feel important and appreciated.', '', 'Carnegie''s core insight: the deepest human craving is to feel important. Those who satisfy that craving — through genuine interest, appreciation, and respect — win lasting cooperation.', 6, 'si'),

(230, 21, 'mcq_grammar',
 'Which of the following best defines "genuine interest"?',
 'Authentic curiosity about another person''s life, concerns, and perspective.', '', 'Genuine interest is not a technique; it is an attitude. Carnegie: become genuinely interested in other people. The word "genuinely" is doing the most work in the sentence.', 7, 'si'),

(231, 21, 'mcq_grammar',
 'Which of the following best defines "name recall"?',
 'Deliberately remembering and using people''s names as a mark of respect.', '', 'Name recall is a deliberate practice, not a natural talent. Carnegie treats the use of someone''s name as the most direct signal that you regard them as a person worth knowing.', 8, 'si'),

(232, 21, 'mcq_grammar',
 'Plutarch writes that the mark of the good listener is that they do not interrupt, object, or compete with the speaker. Which principle from the Interpersonal Influence topic does this most directly illustrate?',
 'Active Listening', '', 'Plutarch''s description of the attentive listener — silent, receptive, genuinely engaged — is a classical formulation of what Carnegie and Goleman would later call active listening.', 9, 'si'),

(233, 21, 'mcq_grammar',
 'In the passage on Plutarch, the author argues that most people listen not to understand but to:',
 'Wait for their turn to speak.', '', 'Plutarch''s central observation: people treat conversation as a competition for the floor. The genuine listener waits not for their turn but to truly hear. This is the foundation of active listening.', 10, 'si');

-- ============================================================
-- Exercises: Lesson 22 — Habit Architecture (IDs 234–243)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(234, 22, 'mcq_grammar',
 'You want to start meditating every morning. You decide to do it immediately after making your coffee, which you already do daily. This is an example of:',
 'Habit Stacking', '', 'Habit stacking piggybacks a new habit onto an existing one. The existing habit (making coffee) becomes the cue for the new one (meditating), eliminating the need to build a new trigger from scratch.', 1, 'si'),

(235, 22, 'mcq_grammar',
 'A person is trying to eat less junk food. Rather than relying on willpower, they simply stop keeping junk food in the house. Which concept does this illustrate?',
 'Environment Design', '', 'Environment design makes undesired behaviors difficult by removing the cues and reducing the friction of access. When junk food is not visible or easily available, the behavior is naturally suppressed.', 2, 'si'),

(236, 22, 'mcq_grammar',
 'James Clear argues that the most powerful way to change behavior long-term is to:',
 'Change who you believe yourself to be.', '', 'Identity-based change: every action is a vote for the type of person you wish to become. Outcomes-based goals create temporary motivation; identity-based change creates lasting direction.', 3, 'si'),

(237, 22, 'mcq_grammar',
 'Someone has a habit of checking their phone whenever they feel bored (cue: boredom; routine: check phone; reward: stimulation). To break this habit, Duhigg''s framework suggests:',
 'Keep the cue and reward, but replace the routine with a different behavior.', '', 'The habit loop cannot be deleted — only replaced. The cue (boredom) and reward (stimulation) remain; the routine (checking phone) is replaced with a different path to the same reward (e.g., a brief walk).', 4, 'si'),

(238, 22, 'mcq_grammar',
 'Which of the following is the correct sequence of the habit loop?',
 'Cue → Routine → Reward', '', 'Duhigg''s habit loop: a cue triggers a routine, which produces a reward. The reward signals the brain to remember the pattern for next time. All three elements are required for a habit to form.', 5, 'si'),

(239, 22, 'mcq_grammar',
 'Franklin''s autobiography describes his daily practice of examining his conduct against a list of virtues. Which habit architecture concept does this practice most directly use?',
 'Environment Design', '', 'Franklin''s virtue chart is an environmental tool: it makes his desired standards visible (obvious) and provides a daily review ritual that tracks progress — designing his environment to prompt self-examination.', 6, 'si'),

(240, 22, 'mcq_grammar',
 'In the passage on Franklin''s Thirteen Virtues, which of the following is explicitly named as one of Franklin''s methods?',
 'Focusing on one virtue at a time for one week.', '', 'Franklin''s method: rather than trying to practice all thirteen virtues simultaneously, he devoted a week to each, cycling through them repeatedly. This is a form of deliberate, structured habit change.', 7, 'si'),

(241, 22, 'mcq_grammar',
 'Which of the following best defines a "cue" in the context of habit formation?',
 'The trigger that initiates a habitual behavior.', '', 'A cue is the signal that sets the habit loop in motion. It can be a time of day, a location, an emotional state, a preceding action, or another person''s behavior.', 8, 'si'),

(242, 22, 'mcq_grammar',
 'Which of the following best defines "identity-based change"?',
 'Changing behavior by first changing who you believe yourself to be.', '', 'Identity-based change (Clear): instead of asking "what do I want to achieve," ask "who do I want to become." Each small behavior is then a vote for that identity.', 9, 'si'),

(243, 22, 'mcq_grammar',
 'A person puts their running shoes next to the bed each night so they are the first thing they see in the morning. This is an example of:',
 'Environment Design', '', 'Making the cue for a desired behavior obvious and removing friction. The running shoes serve as a visual cue that triggers the morning run routine before willpower is required.', 10, 'si');

-- ============================================================
-- Exercises: Lesson 23 — Personal Effectiveness (IDs 244–253)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(244, 23, 'mcq_grammar',
 'Your inbox is full of urgent messages from colleagues, but you have not worked on your most important long-term project in weeks. Covey''s framework suggests the core problem is:',
 'You are operating in the urgent-not-important quadrant rather than the important-not-urgent quadrant.', '', 'The tyranny of the urgent: reactive people spend most time on what is urgent rather than what is important. Quadrant II (important, not urgent) is where proactive people invest: planning, relationship building, skill development.', 1, 'si'),

(245, 23, 'mcq_grammar',
 'A person says "I have to go to this meeting — I have no choice." Covey would characterize this statement as:',
 'Reactive language that denies agency.', '', 'Covey: reactive language — "I have to," "I can''t," "they make me" — reflects a belief that external conditions control behavior. Proactive language — "I choose to," "I can," "I will" — asserts agency.', 2, 'si'),

(246, 23, 'mcq_grammar',
 'You are negotiating a resource allocation with another department. Rather than fighting over a fixed budget, you look for ways both departments can achieve their goals. This is an example of:',
 'Win-Win Thinking', '', 'Win-Win Thinking seeks solutions that satisfy both parties'' core interests. It requires an Abundance Mentality — there are often more ways to satisfy underlying needs than the positional framing suggests.', 3, 'si'),

(247, 23, 'mcq_grammar',
 'Your company''s social media strategy is underperforming and you are frustrated. Covey''s Circle of Influence principle suggests you should focus on:',
 'The aspects of the strategy you can directly influence.', '', 'Proactive people focus on their Circle of Influence — where they can act. Spending energy on concerns outside your influence (what competitors do, market trends) creates frustration without impact.', 4, 'si'),

(248, 23, 'mcq_grammar',
 'A team with diverse skills and perspectives produces a solution that none of the individual members could have created alone. This is an example of:',
 'Synergy', '', 'Covey''s Habit 6: synergy is the principle that the whole is greater than the sum of its parts. It requires valuing differences rather than tolerating them, and genuine collaboration rather than parallel work.', 5, 'si'),

(249, 23, 'mcq_grammar',
 'Epictetus writes: "Men are disturbed not by the things which happen, but by the opinions about the things." Which Covey principle does this most directly anticipate?',
 'Proactivity', '', 'Proactivity: between stimulus and response there is a space, and in that space lies our freedom to choose our response. Epictetus''s insight that it is our judgments, not events, that disturb us is the Stoic foundation of proactive thinking.', 6, 'si'),

(250, 23, 'mcq_grammar',
 'In the passage on Epictetus, which of the following is identified as being within our power?',
 'Our opinions, impulses, desires, and aversions.', '', 'Epictetus: "Some things are in our control and others not." What is in our control are our internal responses — opinions, impulses, desires. External events — body, reputation, property — are not.', 7, 'si'),

(251, 23, 'mcq_grammar',
 'Which of the following best defines "proactivity" as Covey uses it?',
 'Acting on chosen principles rather than reacting to circumstances.', '', 'Covey''s Habit 1: proactivity is not about being busy or aggressive — it is about taking responsibility for your responses. Proactive people recognize they have a choice between stimulus and response.', 8, 'si'),

(252, 23, 'mcq_grammar',
 'Which of the following best defines the "Circle of Influence"?',
 'The domain of things you can actually change through direct action.', '', 'Covey: the Circle of Influence is nested inside the Circle of Concern. Proactive people focus their time and energy on the smaller circle where they can act, which paradoxically causes it to expand.', 9, 'si'),

(253, 23, 'mcq_grammar',
 'A project manager brings together engineers, designers, and customer representatives to solve a complex problem, explicitly seeking out their different viewpoints. She expects the combined solution to surpass what any discipline could produce alone. Which principle is she applying?',
 'Synergy', '', 'Synergy requires actively valuing difference — not just tolerating it. The manager is creating the conditions for Covey''s Habit 6 by drawing on genuinely diverse perspectives and expecting emergence.', 10, 'si');

-- ============================================================
-- Exercises: Lesson 24 — Emotional Intelligence (IDs 254–263)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(254, 24, 'mcq_grammar',
 'Before an important presentation, you notice you are feeling tense. Rather than pushing the feeling aside, you name it to yourself: "I am anxious." According to the concept of emotional labeling, this is likely to:',
 'Reduce the intensity of the anxiety by activating prefrontal regulation.', '', 'Neuroscience: labeling an emotion activates the prefrontal cortex (rational brain) and dampens the amygdala (reactive brain). "Name it to tame it." The label also enables you to act on the emotion deliberately.', 1, 'si'),

(255, 24, 'mcq_grammar',
 'A colleague delivers negative feedback on your project. Your first instinct is to explain why their criticism is wrong. Feedback Reception requires you to:',
 'Receive the feedback as information before evaluating or responding to it.', '', 'Stone and Heen: the defensive response closes off useful data. Feedback reception means separating the trigger from the truth — asking what might be valid in the feedback before deciding how to respond.', 2, 'si'),

(256, 24, 'mcq_grammar',
 'A manager consistently loses her temper in high-pressure meetings, saying things she later regrets. The emotional intelligence competency she most needs to develop is:',
 'Self-Regulation', '', 'Self-regulation is the ability to manage impulses and choose deliberate responses rather than reacting automatically. Without it, awareness of emotion does not prevent its destructive expression.', 3, 'si'),

(257, 24, 'mcq_grammar',
 'A team leader notices that one member seems withdrawn and quiet in a meeting that others are energetically participating in. Rather than ignoring this, he checks in privately after the meeting. This is an example of:',
 'Empathy', '', 'Empathy is the capacity to sense another person''s emotional state. The leader is reading non-verbal signals that the team member is experiencing something different from the group — and responding to it.', 4, 'si'),

(258, 24, 'mcq_grammar',
 'Which of the following is the correct sequence of Goleman''s emotional intelligence domains?',
 'Self-Awareness → Self-Regulation → Empathy → Social Skills', '', 'Goleman''s framework: self-awareness is foundational; self-regulation builds on it; empathy extends awareness to others; social skills combine all three in interaction. Each competency depends on the previous ones.', 5, 'si'),

(259, 24, 'mcq_grammar',
 'Someone says: "I''m feeling a bit off today." A colleague with high emotional intelligence might help them by asking: "Are you frustrated, or more anxious, or something else?" This is an application of:',
 'Emotional Labeling', '', 'Emotional labeling is most powerful when it achieves precision. Helping someone distinguish between frustration, anxiety, disappointment, or anger enables more effective self-regulation and clearer communication.', 6, 'si'),

(260, 24, 'mcq_grammar',
 'In the Plutarch passage, the author identifies the capacity to wait in silence for the speaker to finish as central to which principle?',
 'Active Listening', '', 'Plutarch''s "On Listening to Lectures" describes attentive, silent, receptive listening — withholding judgment and response until the speaker has fully expressed themselves. This is the ancient formulation of active listening.', 7, 'si'),

(261, 24, 'mcq_grammar',
 'Plutarch argues that the best way to respond to praise is with:',
 'Gracious acknowledgment and redirection to others'' contributions.', '', 'Plutarch: the person who receives praise well neither dismisses it (false modesty) nor fully accepts it (vanity), but acknowledges it with grace while sharing credit. This is emotional intelligence applied to social dynamics.', 8, 'si'),

(262, 24, 'mcq_grammar',
 'Which of the following best defines "self-awareness" in Goleman''s framework?',
 'Recognizing your own emotions, triggers, and behavioral patterns.', '', 'Self-awareness is the foundational emotional intelligence competency. Without it, you cannot regulate what you do not recognize. Goleman: people with high self-awareness can name their feelings with precision.', 9, 'si'),

(263, 24, 'mcq_grammar',
 'Which of the following best defines "empathy" in Goleman''s framework?',
 'Sensing another person''s emotional state without judgment.', '', 'Goleman''s empathy: reading the emotional signals — verbal, non-verbal, contextual — that another person is sending, and responding to their state rather than just their words. The "without judgment" is essential.', 10, 'si');

-- ============================================================
-- Exercise options (4 per exercise = 160 rows)
-- ============================================================

-- Lesson 21: Interpersonal Influence

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(224, 'Active Listening', 1),
(224, 'Name Recall', 0),
(224, 'Appreciation', 0),
(224, 'Perspective-Taking', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(225, 'Understand what your manager wants and why.', 1),
(225, 'Present your strongest argument first.', 0),
(225, 'Find evidence that your approach has worked elsewhere.', 0),
(225, 'Ask a senior colleague to advocate on your behalf.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(226, 'Repeat the name immediately and use it during the conversation.', 1),
(226, 'Exchange business cards so you have the name written down.', 0),
(226, 'Ask them to spell their name to show you care.', 0),
(226, 'Avoid using their name until you know them better.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(227, 'Appreciation', 1),
(227, 'Flattery', 0),
(227, 'Perspective-Taking', 0),
(227, 'Genuine Interest', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(228, 'Perspective-Taking', 1),
(228, 'Name Recall', 0),
(228, 'Active Listening', 0),
(228, 'Appreciation', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(229, 'Their desire to feel important and appreciated.', 1),
(229, 'Their desire for financial reward.', 0),
(229, 'Their desire to be right in arguments.', 0),
(229, 'Their desire to avoid conflict.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(230, 'Authentic curiosity about another person''s life, concerns, and perspective.', 1),
(230, 'A technique for making people feel noticed.', 0),
(230, 'Asking questions to gather useful information.', 0),
(230, 'Appearing interested even when you are not.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(231, 'Deliberately remembering and using people''s names as a mark of respect.', 1),
(231, 'Addressing people by title rather than name to show formality.', 0),
(231, 'Memorizing names through repetition drills.', 0),
(231, 'Writing people''s names down immediately after meeting them.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(232, 'Active Listening', 1),
(232, 'Perspective-Taking', 0),
(232, 'Appreciation', 0),
(232, 'Feedback Reception', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(233, 'Wait for their turn to speak.', 1),
(233, 'Judge whether the argument is correct.', 0),
(233, 'Take notes so they can respond accurately.', 0),
(233, 'Offer advice before the speaker has finished.', 0);

-- Lesson 22: Habit Architecture

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(234, 'Habit Stacking', 1),
(234, 'Environment Design', 0),
(234, 'Identity-Based Change', 0),
(234, 'Cue', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(235, 'Environment Design', 1),
(235, 'Habit Stacking', 0),
(235, 'Self-Regulation', 0),
(235, 'Identity-Based Change', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(236, 'Change who you believe yourself to be.', 1),
(236, 'Set ambitious outcome goals and track them.', 0),
(236, 'Use willpower consistently until the habit is automatic.', 0),
(236, 'Find an accountability partner.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(237, 'Keep the cue and reward, but replace the routine with a different behavior.', 1),
(237, 'Eliminate the cue entirely.', 0),
(237, 'Ignore the routine by focusing on the reward.', 0),
(237, 'Use willpower to resist the habit loop.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(238, 'Cue → Routine → Reward', 1),
(238, 'Reward → Cue → Routine', 0),
(238, 'Routine → Cue → Reward', 0),
(238, 'Cue → Reward → Routine', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(239, 'Environment Design', 1),
(239, 'Habit Stacking', 0),
(239, 'Identity-Based Change', 0),
(239, 'Habit Loop', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(240, 'Focusing on one virtue at a time for one week.', 1),
(240, 'Writing a daily journal entry about all thirteen virtues.', 0),
(240, 'Memorizing the definitions of all thirteen virtues.', 0),
(240, 'Seeking feedback from others on his conduct.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(241, 'The trigger that initiates a habitual behavior.', 1),
(241, 'The outcome that motivates habit formation.', 0),
(241, 'The automatic behavior performed in a habit loop.', 0),
(241, 'The identity belief that drives behavior change.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(242, 'Changing behavior by first changing who you believe yourself to be.', 1),
(242, 'Setting measurable outcomes as behavioral targets.', 0),
(242, 'Using positive reinforcement to establish new habits.', 0),
(242, 'Eliminating cues that trigger unwanted behavior.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(243, 'Environment Design', 1),
(243, 'Habit Stacking', 0),
(243, 'Identity-Based Change', 0),
(243, 'Self-Regulation', 0);

-- Lesson 23: Personal Effectiveness

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(244, 'You are operating in the urgent-not-important quadrant rather than the important-not-urgent quadrant.', 1),
(244, 'You lack sufficient prioritization skills.', 0),
(244, 'Your colleagues are creating too many dependencies.', 0),
(244, 'You need better time-tracking tools.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(245, 'Reactive language that denies agency.', 1),
(245, 'An accurate description of an external constraint.', 0),
(245, 'A proactive reframing of an obligation.', 0),
(245, 'An example of win-win thinking.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(246, 'Win-Win Thinking', 1),
(246, 'Synergy', 0),
(246, 'Circle of Influence', 0),
(246, 'Proactivity', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(247, 'The aspects of the strategy you can directly influence.', 1),
(247, 'The root causes of the underperformance in the broader market.', 0),
(247, 'What competitors are doing better than your company.', 0),
(247, 'Why leadership has not allocated more resources to the strategy.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(248, 'Synergy', 1),
(248, 'Win-Win Thinking', 0),
(248, 'Circle of Influence', 0),
(248, 'First Things First', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(249, 'Proactivity', 1),
(249, 'Self-Regulation', 0),
(249, 'First Things First', 0),
(249, 'Win-Win Thinking', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(250, 'Our opinions, impulses, desires, and aversions.', 1),
(250, 'Our health, wealth, and reputation.', 0),
(250, 'The actions of other people toward us.', 0),
(250, 'The outcomes of our efforts.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(251, 'Acting on chosen principles rather than reacting to circumstances.', 1),
(251, 'Planning ahead and working efficiently.', 0),
(251, 'Taking initiative on tasks before being asked.', 0),
(251, 'Focusing on urgent matters before they become crises.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(252, 'The domain of things you can actually change through direct action.', 1),
(252, 'Everything that concerns or worries you.', 0),
(252, 'The area where you have formal authority.', 0),
(252, 'The scope of your current responsibilities.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(253, 'Synergy', 1),
(253, 'Win-Win Thinking', 0),
(253, 'Circle of Influence', 0),
(253, 'Proactivity', 0);

-- Lesson 24: Emotional Intelligence

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(254, 'Reduce the intensity of the anxiety by activating prefrontal regulation.', 1),
(254, 'Amplify the anxiety by focusing attention on it.', 0),
(254, 'Transfer the emotion to the rational cortex, eliminating it.', 0),
(254, 'Make you more aware of the anxiety without reducing it.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(255, 'Receive the feedback as information before evaluating or responding to it.', 1),
(255, 'Provide evidence that the criticism is incorrect.', 0),
(255, 'Acknowledge the feedback politely and then disregard it.', 0),
(255, 'Ask the colleague to restate their criticism more constructively.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(256, 'Self-Regulation', 1),
(256, 'Self-Awareness', 0),
(256, 'Empathy', 0),
(256, 'Emotional Labeling', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(257, 'Empathy', 1),
(257, 'Active Listening', 0),
(257, 'Self-Awareness', 0),
(257, 'Feedback Reception', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(258, 'Self-Awareness → Self-Regulation → Empathy → Social Skills', 1),
(258, 'Empathy → Self-Awareness → Social Skills → Self-Regulation', 0),
(258, 'Self-Regulation → Empathy → Self-Awareness → Social Skills', 0),
(258, 'Social Skills → Empathy → Self-Regulation → Self-Awareness', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(259, 'Emotional Labeling', 1),
(259, 'Empathy', 0),
(259, 'Self-Awareness', 0),
(259, 'Feedback Reception', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(260, 'Active Listening', 1),
(260, 'Empathy', 0),
(260, 'Self-Regulation', 0),
(260, 'Genuine Interest', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(261, 'Gracious acknowledgment and redirection to others'' contributions.', 1),
(261, 'Deflecting praise with false modesty.', 0),
(261, 'Fully accepting the praise to reinforce the behavior.', 0),
(261, 'Returning the praise to the person who gave it.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(262, 'Recognizing your own emotions, triggers, and behavioral patterns.', 1),
(262, 'Understanding what motivates other people.', 0),
(262, 'Regulating your emotional state under pressure.', 0),
(262, 'Reading the emotional signals that others send.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(263, 'Sensing another person''s emotional state without judgment.', 1),
(263, 'Sharing the same emotional state as another person.', 0),
(263, 'Offering solutions to another person''s emotional problems.', 0),
(263, 'Accurately predicting another person''s behavior.', 0);
`;export{e as default};
