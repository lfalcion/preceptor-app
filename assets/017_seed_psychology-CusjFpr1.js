var e=`-- Migration 017: Psychology module seed data.
-- Uses language_code='ps' sentinel throughout.

-- ---- Grammar lessons (topics) ----

INSERT OR IGNORE INTO grammar_lessons (id, title, description, sort_order, language_code) VALUES
  (29, 'Cognitive Biases',               'The errors built into thinking',           1, 'ps'),
  (30, 'Decision-Making Heuristics',     'Mental shortcuts under uncertainty',       2, 'ps'),
  (31, 'Motivation & Drive',             'What moves people to act',                 3, 'ps'),
  (32, 'Social Psychology',              'How others shape our behavior',            4, 'ps');

-- ---- Vocabulary (20 key terms, sort_order 301-320) ----

INSERT OR IGNORE INTO vocabulary_items (sort_order, cyrillic, target_word, english, transliteration, language_code) VALUES
  (301, 'Confirmation Bias',       'Confirmation Bias',       'Tendency to seek evidence that supports existing beliefs.',
   'Identified by Peter Wason (1960). The mind does not search for truth; it searches for confirmation. Counter-evidence is ignored, reinterpreted, or discounted. Leaders and investors are particularly vulnerable because their positions attract information that confirms what they already believe.', 'ps'),
  (302, 'Anchoring Effect',        'Anchoring Effect',        'Over-reliance on the first piece of information encountered.',
   'Tversky and Kahneman (1974). The anchor biases all subsequent judgment, even when it is arbitrary or irrelevant. In negotiation, the first number sets the frame. In estimation, a randomly given number shifts subsequent guesses. The effect persists even when people know they should adjust away from the anchor.', 'ps'),
  (303, 'Dunning-Kruger Effect',   'Dunning-Kruger Effect',   'Low-ability individuals overestimate their competence.',
   'Kruger and Dunning (1999). The incompetent lack the metacognitive skill to recognize their own incompetence. The expert, meanwhile, tends to underestimate their advantage because the task feels easy to them. The curve is asymmetric: the most dangerous person is the one who knows just enough to be confident but not enough to be careful.', 'ps'),
  (304, 'Hindsight Bias',          'Hindsight Bias',          'Believing past events were predictable after learning the outcome.',
   'Fischhoff (1975): "I knew it all along." After the outcome is known, people misremember their prior uncertainty. This distorts the evaluation of decisions: a bad outcome is attributed to bad judgment, even when the decision was sound given available information. It makes learning from history unreliable.', 'ps'),
  (305, 'Sunk Cost Fallacy',       'Sunk Cost Fallacy',       'Continuing a course of action because of prior investment.',
   'Rational choice theory holds that sunk costs — past expenditures that cannot be recovered — should be irrelevant to future decisions. Only future costs and benefits matter. But people feel compelled to justify past investment, even when the marginal return has turned negative. This is why failing projects, relationships, and strategies persist long past their useful life.', 'ps'),
  (306, 'Availability Heuristic',  'Availability Heuristic',  'Judging likelihood by how easily examples come to mind.',
   'Tversky and Kahneman (1973). Memorable, vivid, or recent events feel more probable than statistics suggest. After a plane crash, people fear flying; after a shark attack, they avoid the ocean — even when driving to the airport is statistically more dangerous. Media coverage amplifies availability without amplifying actual risk.', 'ps'),
  (307, 'Representativeness Heuristic', 'Representativeness Heuristic', 'Judging probability by resemblance to a prototype.',
   'Tversky and Kahneman (1974). We assess how much an instance resembles a category rather than computing base rates. The classic example: told that Linda is a feminist bank teller or a bank teller, people choose the conjunction — which is logically impossible, since P(A and B) ≤ P(B). Stereotypes operate through this heuristic.', 'ps'),
  (308, 'Framing Effect',          'Framing Effect',          'Drawing different conclusions from the same data based on presentation.',
   'Tversky and Kahneman (1981). "90% survival rate" and "10% mortality rate" are identical facts that produce different choices. "Ground beef that is 75% lean" is preferred to "ground beef that is 25% fat." The frame activates loss aversion or gain-seeking differently. Political rhetoric, advertising, and negotiation all exploit framing systematically.', 'ps'),
  (309, 'Loss Aversion',           'Loss Aversion',           'Losses feel roughly twice as painful as equivalent gains feel good.',
   'Kahneman and Tversky (1979). Prospect Theory: the psychological disutility of losing $100 is approximately twice the utility of gaining $100. This asymmetry drives risk-aversion in the domain of gains and risk-seeking in the domain of losses. It explains the endowment effect, the status quo bias, and much of market irrationality.', 'ps'),
  (310, 'Bounded Rationality',     'Bounded Rationality',     'Decision-making limited by information, time, and cognitive capacity.',
   'Herbert Simon (1955). Humans do not maximize — they satisfice: they search for a solution that is good enough rather than optimal. Bounded rationality is not a failure; it is an adaptation to the real world, where information is incomplete and time is finite. The challenge is knowing when to stop searching.', 'ps'),
  (311, 'Intrinsic Motivation',    'Intrinsic Motivation',    'Behavior driven by internal satisfaction rather than external reward.',
   'Self-Determination Theory (Deci and Ryan). Intrinsic motivation produces higher quality work, greater persistence, and more creativity than extrinsic motivation. It requires autonomy (choice), competence (mastery), and relatedness (connection). When extrinsic rewards are introduced for intrinsically motivated activity, intrinsic motivation typically declines — the overjustification effect.', 'ps'),
  (312, 'Extrinsic Motivation',    'Extrinsic Motivation',    'Behavior driven by external rewards or punishments.',
   'Extrinsic motivators — pay, grades, prizes, fear of punishment — are effective at increasing compliance with simple, well-defined tasks. They are counterproductive for creative, complex, or autonomous work: they narrow focus, reduce risk-taking, and crowd out intrinsic motivation when the reward is removed. The key question is whether the reward signals competence or control.', 'ps'),
  (313, 'Self-Determination Theory', 'Self-Determination Theory', 'Competence, autonomy, and relatedness as core psychological needs.',
   'Deci and Ryan (1985). SDT identifies three universal psychological needs: competence (feeling effective), autonomy (self-direction), and relatedness (meaningful connection with others). When these needs are met, intrinsic motivation and well-being follow. When they are thwarted — by controlling environments, micromanagement, or isolation — motivation collapses.', 'ps'),
  (314, 'Flow State',              'Flow State',              'Deep absorption in a task matched to skill level.',
   'Mihaly Csikszentmihalyi (1990). Flow occurs when challenge and skill are in balance: the task is neither too easy (producing boredom) nor too hard (producing anxiety). In flow, time distorts, self-consciousness disappears, and performance peaks. It is the optimal state for learning and productivity. Creating conditions for flow requires calibrating challenge to current ability.', 'ps'),
  (315, 'Cognitive Dissonance',    'Cognitive Dissonance',    'Discomfort from holding contradictory beliefs.',
   'Leon Festinger (1957). When actions conflict with beliefs, the mind experiences discomfort and resolves it — usually not by changing the behavior but by rationalizing it. A smoker who knows smoking is harmful does not quit; they conclude the evidence is exaggerated. Cognitive dissonance is a major driver of motivated reasoning and self-justification.', 'ps'),
  (316, 'Conformity',              'Conformity',              'Adjusting behavior to align with group norms.',
   'Solomon Asch (1951). In the famous line-length experiments, 75% of participants gave at least one incorrect answer to conform with an erroneous group consensus. Conformity is driven by informational influence (assuming the group knows something you do not) and normative influence (the desire to be accepted). It operates most powerfully in ambiguous situations.', 'ps'),
  (317, 'Bystander Effect',        'Bystander Effect',        'Reduced likelihood of helping when others are present.',
   'Darley and Latané (1968), following the Kitty Genovese case. Two mechanisms operate: diffusion of responsibility (someone else will help) and pluralistic ignorance (others are not reacting, so perhaps it is not an emergency). The more bystanders present, the less likely any individual is to intervene. Direct, specific requests ("you in the blue shirt — call 911") overcome both mechanisms.', 'ps'),
  (318, 'Fundamental Attribution Error', 'Fundamental Attribution Error', 'Overemphasizing personality, underemphasizing situation in explaining behavior.',
   'Lee Ross (1977). We attribute other people''s behavior to character and disposition, while discounting the situational pressures they face. When someone cuts us off in traffic, we assume they are reckless; we ignore that they may be rushing to a hospital. We apply the opposite standard to ourselves: our own failures are situational. This asymmetry corrupts judgment of others.', 'ps'),
  (319, 'Social Proof',            'Social Proof',            'Using others'' actions as evidence of correct behavior.',
   'Robert Cialdini (Influence, 1984). In uncertain situations, people look to what others are doing as evidence of what they should do. Laugh tracks, bestseller lists, testimonials, and crowd behavior all exploit social proof. It is adaptive — in many situations, the crowd does know something. It becomes dangerous when crowds are themselves misinformed or when it produces herding.', 'ps'),
  (320, 'Groupthink',              'Groupthink',              'Desire for group harmony suppresses dissent and critical evaluation.',
   'Irving Janis (1972). Groups under cohesion pressure develop an illusion of invulnerability, collective rationalization, belief in the group''s inherent morality, stereotyped views of out-groups, pressure on dissenters, self-censorship, illusion of unanimity, and self-appointed mindguards. The Bay of Pigs invasion is Janis''s canonical case. Antidotes: devil''s advocate roles, anonymous pre-meeting input, leader withholding opinion initially.', 'ps');

-- ---- Reading passages ----

INSERT OR IGNORE INTO reading_passages (id, title, sort_order, language_code) VALUES
  (22, 'The Mind Against Itself',            1, 'ps'),
  (23, 'Choosing Under Fog',                 2, 'ps'),
  (24, 'The Invisible Pull of the Group',    3, 'ps');

-- ============================================================
-- Exercises: Lesson 29 — Cognitive Biases (IDs 304–313)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(304, 29, 'mcq_grammar',
 'A manager receives a report showing that last quarter''s strategy is underperforming. Rather than acting on it, she shares it only with colleagues who have expressed doubts and ignores the rest. Which bias best explains her behavior?',
 'Confirmation Bias', '', 'Confirmation Bias: she seeks information from those who already share her view (that doubts are valid) and discounts the performance data. The mind selects what confirms existing beliefs and filters out what challenges them.', 1, 'ps'),

(305, 29, 'mcq_grammar',
 'A real estate agent mentions a house listed at $900,000 before the buyer has formed any view of the market. The buyer later negotiates down to $820,000, feeling they got a deal. Which effect has the agent exploited?',
 'Anchoring Effect', '', 'The Anchoring Effect: the initial figure ($900,000) biased all subsequent judgment. The buyer''s sense of "a deal" is relative to the anchor, not to the actual market value. Setting the first number is a standard negotiation tactic.', 2, 'ps'),

(306, 29, 'mcq_grammar',
 'A junior analyst presents an overconfident forecast to the board. When challenged on his certainty, he dismisses the feedback as not understanding his method. His senior colleagues, who are more expert, actually express more uncertainty. This pattern illustrates:',
 'Dunning-Kruger Effect', '', 'Dunning-Kruger Effect: the analyst lacks the metacognitive skill to recognize the limits of his competence. Paradoxically, the more expert the person, the more aware they are of what they do not know. Overconfidence is a marker of insufficient expertise, not excess.', 3, 'ps'),

(307, 29, 'mcq_grammar',
 'After a widely reported local burglary, a neighborhood watch group dramatically increases its patrol hours and residents report feeling unsafe — despite no statistical change in crime rates. Which bias is driving this response?',
 'Availability Heuristic', '', 'Availability Heuristic: the vivid, recent example makes burglary feel more probable than statistics support. Memorable events distort perceived risk. The bias is partly adaptive — recent events can signal real pattern changes — but it also systematically overweights dramatic, salient cases.', 4, 'ps'),

(308, 29, 'mcq_grammar',
 'A postmortem after a failed product launch concludes that the team "should have seen this coming." However, a review of pre-launch documents shows the team had correctly identified the risks and made reasonable decisions given available data. What bias is distorting the postmortem?',
 'Hindsight Bias', '', 'Hindsight Bias: knowing the outcome makes it feel inevitable in retrospect. The postmortem is re-evaluating good decisions as bad ones because it knows the ending. This corrupts organizational learning by attributing outcomes to judgment quality rather than uncertainty.', 5, 'ps'),

(309, 29, 'mcq_grammar',
 'A company has invested $50 million in a product that market research now shows is unlikely to succeed. The CFO argues for continuing because "we''ve already put so much into it." Which fallacy is the CFO committing?',
 'Sunk Cost Fallacy', '', 'Sunk Cost Fallacy: the $50 million is gone regardless of the decision. The only relevant question is whether future investment will produce future returns. The CFO is letting past investment drive future decisions — a classic error that keeps failing strategies alive long past their useful life.', 6, 'ps'),

(310, 29, 'mcq_grammar',
 'Which of the following best defines "confirmation bias"?',
 'The tendency to seek and favor evidence that supports one''s existing beliefs.', '', 'Confirmation bias is a search pattern, not just an interpretation pattern: the mind actively seeks confirming evidence and passively ignores or discounts disconfirming evidence. It operates in hypothesis testing, news consumption, investment decisions, and interpersonal judgments.', 7, 'ps'),

(311, 29, 'mcq_grammar',
 'Which of the following best defines the "anchoring effect"?',
 'The tendency to over-rely on the first piece of information encountered when making estimates.', '', 'The anchor is the reference point against which all subsequent adjustments are made. Adjustment from an anchor is typically insufficient — final estimates remain too close to the anchor, even when the anchor is arbitrary or known to be wrong.', 8, 'ps'),

(312, 29, 'mcq_grammar',
 'Which of the following best defines "hindsight bias"?',
 'The tendency to believe, after learning an outcome, that one would have predicted it all along.', '', 'Hindsight bias distorts memory (misremembering prior uncertainty) and judgment (evaluating decisions as obvious in retrospect). It makes learning from history unreliable because it makes contingent outcomes feel inevitable.', 9, 'ps'),

(313, 29, 'mcq_grammar',
 'Which of the following best defines the "sunk cost fallacy"?',
 'Continuing a course of action primarily because of prior investment, ignoring future costs and benefits.', '', 'Rational decision-making requires treating sunk costs as irrelevant to future choices. Only future incremental costs and benefits determine optimal decisions. The fallacy is the compelling psychological pull to justify past investment regardless of future prospects.', 10, 'ps');

-- ============================================================
-- Exercises: Lesson 30 — Decision-Making Heuristics (IDs 314–323)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(314, 30, 'mcq_grammar',
 'After a highly publicized plane crash, your team refuses to fly to a conference despite statistics showing air travel is 95 times safer per mile than driving. Which heuristic is driving their judgment?',
 'Availability Heuristic', '', 'Availability Heuristic: the dramatic, recent plane crash is cognitively available — easy to recall — which inflates perceived risk beyond what statistics support. Vivid, memorable events override base rate information.', 1, 'ps'),

(315, 30, 'mcq_grammar',
 'A hospital presents a new treatment to patients as either "90% survival rate" or "10% mortality rate." Patients choose the treatment far more often when told the survival rate. This illustrates:',
 'Framing Effect', '', 'Framing Effect: identical statistical information produces different choices depending on whether it is presented as gain (survival) or loss (mortality). Loss aversion amplifies the negative frame, making the mortality framing feel more threatening than the survival framing feels reassuring.', 2, 'ps'),

(316, 30, 'mcq_grammar',
 'An investor holds onto a declining stock because selling would mean "locking in the loss," while the equivalent gain feels less urgent. This behavior is consistent with:',
 'Loss Aversion', '', 'Loss Aversion: losses are psychologically approximately twice as painful as equivalent gains are pleasurable. This asymmetry makes people hold losing positions too long (hoping to avoid the psychological pain of realizing the loss) and sell winners too early (capturing gains before they evaporate).', 3, 'ps'),

(317, 30, 'mcq_grammar',
 'A manager must decide on a new supplier. The optimal choice requires evaluating 47 candidates across 12 criteria. Instead, she examines the first 8 candidates, finds one that meets her key requirements, and stops. This is an example of:',
 'Bounded Rationality', '', 'Bounded Rationality (satisficing): she cannot optimize across all candidates given time and cognitive constraints, so she finds a good enough option and stops searching. This is not irrationality — it is an adaptive response to the real costs of information-gathering.', 4, 'ps'),

(318, 30, 'mcq_grammar',
 'Linda is 31 years old, single, outspoken, and concerned with social justice. She studied philosophy at university. Which is more probable?\\n(A) Linda is a bank teller.\\n(B) Linda is a bank teller and active in the feminist movement.',
 '(A) Linda is a bank teller.', '', 'Representativeness Heuristic / Conjunction Fallacy: option (A) is necessarily more probable than (B), because P(A) ≥ P(A and B). But the description matches the stereotype of a feminist, making (B) feel more likely. This is the conjunction fallacy — confusing representativeness with probability.', 5, 'ps'),

(319, 30, 'mcq_grammar',
 'A negotiator opens with a bid significantly above her target price. The counterpart''s eventual counteroffer is higher than expected. Which principle explains this outcome?',
 'Anchoring Effect', '', 'By setting a high initial anchor, the negotiator has shifted the reference frame for the entire negotiation. Even if the counterpart rejects the opening bid, all subsequent discussion is pulled toward the anchor. First offers consistently influence final settlements beyond what parties intend.', 6, 'ps'),

(320, 30, 'mcq_grammar',
 'Which of the following best defines the "availability heuristic"?',
 'Judging the likelihood of events by how easily examples come to mind.', '', 'The availability heuristic is a mental shortcut: if examples come to mind easily (because they are recent, vivid, or frequently encountered), the event feels more probable. This is adaptive in environments where availability correlates with frequency — and misleading when vivid cases are unrepresentative.', 7, 'ps'),

(321, 30, 'mcq_grammar',
 'Which of the following best defines the "framing effect"?',
 'Drawing different conclusions from identical information based on how it is presented.', '', 'The framing effect exploits the asymmetric sensitivity of the brain to gains and losses. The same underlying fact — presented as a gain or a loss, as a percentage or an absolute number, in positive or negative terms — produces systematically different decisions.', 8, 'ps'),

(322, 30, 'mcq_grammar',
 'Which of the following best defines "loss aversion"?',
 'The tendency to feel the pain of losses more acutely than the pleasure of equivalent gains.', '', 'Prospect Theory (Kahneman and Tversky) shows the utility function is steeper in the loss domain than the gain domain. The subjective experience of losing $100 is approximately twice as intense as gaining $100. This creates a strong status quo bias: the pain of giving something up outweighs the pleasure of acquiring it.', 9, 'ps'),

(323, 30, 'mcq_grammar',
 'Which of the following best defines "bounded rationality"?',
 'Decision-making constrained by available information, time, and cognitive capacity, leading to satisficing rather than maximizing.', '', 'Herbert Simon coined the term to describe how real decisions are made: not by optimizing across all possibilities but by finding a solution that meets a satisfactory threshold. Bounded rationality is a feature of intelligent organisms operating in complex environments, not a defect.', 10, 'ps');

-- ============================================================
-- Exercises: Lesson 31 — Motivation & Drive (IDs 324–333)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(324, 31, 'mcq_grammar',
 'A software engineer loves coding as a hobby. Her company introduces a monetary bonus for open-source contributions. After six months, she finds herself coding outside work only when the bonus is available, and her enjoyment has decreased. This illustrates:',
 'Extrinsic motivation crowding out intrinsic motivation.', '', 'The overjustification effect: when external rewards are introduced for intrinsically motivated activity, people attribute their behavior to the reward rather than to genuine interest. When the reward is eventually removed, motivation collapses. This is why bonuses for creative work often backfire.', 1, 'ps'),

(325, 31, 'mcq_grammar',
 'A team leader designs work so that each member chooses their own approach, receives skill-building feedback, and is embedded in a collaborative relationship with peers. According to Self-Determination Theory, she is addressing:',
 'Autonomy, competence, and relatedness — the three core psychological needs.', '', 'Self-Determination Theory (Deci and Ryan): intrinsic motivation is sustained when autonomy (self-direction), competence (growing mastery), and relatedness (meaningful connection) are satisfied. Environments that thwart any of these needs produce motivation breakdown, regardless of how generous the extrinsic rewards are.', 2, 'ps'),

(326, 31, 'mcq_grammar',
 'A musician enters a state in which hours pass unnoticed, she is fully absorbed in the composition, and her performance exceeds her ordinary level. The task is challenging but within her capability. This experience is best described as:',
 'Flow State', '', 'Flow (Csikszentmihalyi): the optimal experience of complete absorption, where challenge and skill are balanced and self-consciousness disappears. Time distorts, performance peaks, and the experience is intrinsically rewarding. The key condition is calibrated challenge: neither too easy (boredom) nor too hard (anxiety).', 3, 'ps'),

(327, 31, 'mcq_grammar',
 'An employee is offered a large raise to take a role managing compliance processes — highly routine, tightly prescribed, with no creative latitude. Which prediction does Self-Determination Theory make about his long-term motivation?',
 'Despite the higher pay, motivation will likely decline due to thwarted autonomy and competence needs.', '', 'SDT predicts that extrinsic rewards cannot substitute for the satisfaction of psychological needs. A high-paying but autonomy-denying role satisfies extrinsic motivation while systematically thwarting intrinsic motivation. Over time, engagement declines, burnout risk increases, and performance on the cognitive dimensions of the role suffers.', 4, 'ps'),

(328, 31, 'mcq_grammar',
 'Which condition is most essential for achieving a flow state according to Csikszentmihalyi?',
 'Challenge and skill in balance — the task is demanding but within reach.', '', 'Flow requires calibrated challenge. If the task is too easy, it produces boredom; if it is too hard, it produces anxiety. The optimal zone — where challenge slightly exceeds current ability — produces absorption and growth simultaneously. This is why deliberately increasing task difficulty is a route to sustained engagement.', 5, 'ps'),

(329, 31, 'mcq_grammar',
 'Leon Festinger''s theory of cognitive dissonance predicts that when a person''s behavior conflicts with their beliefs, they will most likely:',
 'Change their beliefs to justify the behavior, rather than change the behavior.', '', 'Festinger (1957): cognitive dissonance is resolved by the path of least resistance. Changing behavior requires effort and sacrifice; changing beliefs requires only rationalization. This is why self-justification is ubiquitous: the mind is designed to protect its own coherence, not to enforce honesty.', 6, 'ps'),

(330, 31, 'mcq_grammar',
 'Which of the following best defines "intrinsic motivation"?',
 'Motivation that arises from the inherent satisfaction of an activity, independent of external reward.', '', 'Intrinsic motivation is the experience of engaging in something because it is interesting, enjoyable, or personally meaningful — not because of what follows from it. It produces higher quality output, greater persistence, and more creativity than extrinsic motivation, particularly for complex tasks.', 7, 'ps'),

(331, 31, 'mcq_grammar',
 'Which of the following best defines "extrinsic motivation"?',
 'Motivation driven by external rewards or punishments separate from the activity itself.', '', 'Extrinsic motivation includes pay, grades, praise, status, and fear of punishment. It is effective at producing compliance with simple, well-defined behaviors, and it can maintain engagement when intrinsic motivation is absent. The risk is that it signals to the agent that the activity is worth doing only because of the reward.', 8, 'ps'),

(332, 31, 'mcq_grammar',
 'Which of the following best defines "Self-Determination Theory"?',
 'A theory holding that intrinsic motivation is sustained when three core needs — competence, autonomy, and relatedness — are satisfied.', '', 'SDT (Deci and Ryan) is an empirically grounded theory of human motivation. Its key contribution is explaining why environments that appear supportive (generous rewards, clear goals) can paradoxically undermine motivation when they also control, isolate, or fail to develop the people within them.', 9, 'ps'),

(333, 31, 'mcq_grammar',
 'Which of the following best defines "cognitive dissonance"?',
 'The psychological discomfort experienced when one holds contradictory beliefs or when behavior contradicts beliefs.', '', 'Festinger: dissonance arises from any two "cognitions" (beliefs, behaviors, values) that are psychologically inconsistent. The discomfort motivates reduction — typically through rationalization rather than through genuine change. Recognizing this pattern is the first step toward more honest self-evaluation.', 10, 'ps');

-- ============================================================
-- Exercises: Lesson 32 — Social Psychology (IDs 334–343)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(334, 32, 'mcq_grammar',
 'A strategic planning team is highly cohesive and has worked together for years. In a recent session, a junior member privately has doubts about the direction but says nothing, noticing that no one else is raising concerns. No one raises concerns. The plan proceeds unchanged. This illustrates:',
 'Groupthink', '', 'Groupthink (Janis): the combination of self-censorship (individuals suppress doubts) and the illusion of unanimity (everyone interprets silence as agreement) produces a false consensus. Cohesive groups are most vulnerable because the social cost of dissent feels high relative to the perceived benefit.', 1, 'ps'),

(335, 32, 'mcq_grammar',
 'A bystander witnesses a medical emergency in a crowded subway car. Thirty people are present, but no one responds. Which two mechanisms best explain this failure to help?',
 'Diffusion of responsibility and pluralistic ignorance.', '', 'Darley and Latané: diffusion of responsibility (someone else will handle it) and pluralistic ignorance (others are not acting, so perhaps it is not an emergency) combine to produce paralysis. The antidote is specific, direct requests: "You — call an ambulance." Naming a person eliminates both mechanisms.', 2, 'ps'),

(336, 32, 'mcq_grammar',
 'In Solomon Asch''s line-length experiments, participants gave clearly incorrect answers when a confederate group did so first. The mechanism through which the unanimous wrong answer altered behavior was primarily:',
 'Normative influence — the desire to conform to avoid social rejection.', '', 'Asch distinguished normative influence (conforming to be accepted, even when you know the group is wrong) from informational influence (conforming because you assume the group knows something you do not). In his experiments, many participants knew the answer was wrong but gave it anyway to avoid standing out. When one confederate gave the correct answer, conformity dropped dramatically.', 3, 'ps'),

(337, 32, 'mcq_grammar',
 'A manager evaluates two employees'' missed deadlines. For her direct report she concludes: "He is disorganized and unreliable." For herself in a similar situation, she notes: "The timeline was unrealistic and we had three simultaneous crises." Which error does this illustrate?',
 'Fundamental Attribution Error', '', 'Fundamental Attribution Error (Ross): we attribute others'' failures to character and disposition while attributing our own failures to situation and circumstance. The asymmetry is systematic and cross-cultural. It corrupts performance evaluation, feedback quality, and the accuracy of interpersonal judgment generally.', 4, 'ps'),

(338, 32, 'mcq_grammar',
 'A restaurant places a "bestseller" label on certain menu items. A new customer, uncertain what to order, chooses a bestseller. This is an example of:',
 'Social Proof', '', 'Social Proof (Cialdini): in conditions of uncertainty, people infer what is correct from what others are doing. The bestseller label signals that other people have evaluated the options and found this one good — which is informative precisely in uncertain situations. Social proof is adaptive when the crowd is actually well-informed.', 5, 'ps'),

(339, 32, 'mcq_grammar',
 'A new product has a 5-star average rating with 3 reviews and a 4.6-star average rating with 4,700 reviews. Most customers choose the 4.6 product. This is best explained by:',
 'Social Proof', '', 'The volume of reviews is itself a form of social proof: 4,700 people have evaluated the product. The wisdom of crowds effect suggests that large numbers of independent judgments are more reliable than a small number. Customers are using aggregate social behavior — not just the rating — as evidence of quality.', 6, 'ps'),

(340, 32, 'mcq_grammar',
 'Which of the following best defines "conformity" as a social psychology concept?',
 'Adjusting behavior, beliefs, or attitudes to align with group norms, whether real or perceived.', '', 'Conformity operates on both public behavior (doing what the group does) and private belief (coming to actually believe what the group believes). The latter — internalization — is the more durable and insidious form, because the individual no longer experiences it as conformity. Informational and normative influence are the two primary mechanisms.', 7, 'ps'),

(341, 32, 'mcq_grammar',
 'Which of the following best defines the "bystander effect"?',
 'The reduced likelihood of an individual offering help in an emergency when other people are present.', '', 'Darley and Latané established that the presence of others actually reduces helping behavior — the opposite of what intuition suggests. The effect is strongest in larger groups, in ambiguous situations, and when bystanders are strangers. It is a systematic failure of the intuition that "more people = more help."', 8, 'ps'),

(342, 32, 'mcq_grammar',
 'Which of the following best defines the "fundamental attribution error"?',
 'The tendency to overweight personality and underweight situational factors when explaining others'' behavior.', '', 'The error is fundamental because it applies across cultures and contexts and is resistant to correction even when situational factors are explicitly identified. It is asymmetric: we apply situational explanations readily to ourselves and dispositional explanations readily to others. This produces chronic overconfidence in character-based assessments of people.', 9, 'ps'),

(343, 32, 'mcq_grammar',
 'Which of the following best defines "groupthink"?',
 'A deterioration of mental efficiency and moral judgment in cohesive groups, driven by the desire for harmony and unanimity.', '', 'Janis identified groupthink as a pathology of group decision-making, not of individual cognition. The antidotes are structural: assign a formal devil''s advocate role, require anonymous pre-meeting input to prevent anchoring by seniority, and have the leader withhold their own position until others have expressed theirs.', 10, 'ps');

-- ============================================================
-- Exercise options (4 per exercise = 160 rows)
-- ============================================================

-- Lesson 29: Cognitive Biases

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(304, 'Confirmation Bias', 1),
(304, 'Hindsight Bias', 0),
(304, 'Dunning-Kruger Effect', 0),
(304, 'Availability Heuristic', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(305, 'Anchoring Effect', 1),
(305, 'Framing Effect', 0),
(305, 'Loss Aversion', 0),
(305, 'Sunk Cost Fallacy', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(306, 'Dunning-Kruger Effect', 1),
(306, 'Confirmation Bias', 0),
(306, 'Overconfidence Bias', 0),
(306, 'Hindsight Bias', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(307, 'Availability Heuristic', 1),
(307, 'Representativeness Heuristic', 0),
(307, 'Confirmation Bias', 0),
(307, 'Framing Effect', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(308, 'Hindsight Bias', 1),
(308, 'Confirmation Bias', 0),
(308, 'Dunning-Kruger Effect', 0),
(308, 'Sunk Cost Fallacy', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(309, 'Sunk Cost Fallacy', 1),
(309, 'Loss Aversion', 0),
(309, 'Anchoring Effect', 0),
(309, 'Bounded Rationality', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(310, 'The tendency to seek and favor evidence that supports one''s existing beliefs.', 1),
(310, 'The tendency to judge probability by the ease with which examples come to mind.', 0),
(310, 'The tendency to hold contradictory beliefs simultaneously.', 0),
(310, 'The tendency to over-rely on the first piece of information encountered.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(311, 'The tendency to over-rely on the first piece of information encountered when making estimates.', 1),
(311, 'The tendency to seek out information that confirms existing beliefs.', 0),
(311, 'The tendency to judge decisions as predictable after the outcome is known.', 0),
(311, 'The tendency to feel losses more strongly than equivalent gains.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(312, 'The tendency to believe, after learning an outcome, that one would have predicted it all along.', 1),
(312, 'The tendency to overestimate one''s own abilities relative to others.', 0),
(312, 'The tendency to continue a course of action because of past investment.', 0),
(312, 'The tendency to prefer information consistent with prior beliefs.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(313, 'Continuing a course of action primarily because of prior investment, ignoring future costs and benefits.', 1),
(313, 'Choosing an option because it is the most recently encountered.', 0),
(313, 'Adjusting behavior to match the group norm.', 0),
(313, 'Overestimating the probability of an event because it is easily recalled.', 0);

-- Lesson 30: Decision-Making Heuristics

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(314, 'Availability Heuristic', 1),
(314, 'Representativeness Heuristic', 0),
(314, 'Framing Effect', 0),
(314, 'Confirmation Bias', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(315, 'Framing Effect', 1),
(315, 'Loss Aversion', 0),
(315, 'Anchoring Effect', 0),
(315, 'Representativeness Heuristic', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(316, 'Loss Aversion', 1),
(316, 'Sunk Cost Fallacy', 0),
(316, 'Anchoring Effect', 0),
(316, 'Availability Heuristic', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(317, 'Bounded Rationality', 1),
(317, 'Representativeness Heuristic', 0),
(317, 'Availability Heuristic', 0),
(317, 'Framing Effect', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(318, '(A) Linda is a bank teller.', 1),
(318, '(B) Linda is a bank teller and active in the feminist movement.', 0),
(318, 'Both options are equally probable.', 0),
(318, 'The question cannot be answered without more information.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(319, 'Anchoring Effect', 1),
(319, 'Framing Effect', 0),
(319, 'Loss Aversion', 0),
(319, 'Bounded Rationality', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(320, 'Judging the likelihood of events by how easily examples come to mind.', 1),
(320, 'Judging probability by resemblance to a typical prototype.', 0),
(320, 'Drawing different conclusions from identical data based on presentation.', 0),
(320, 'Over-relying on the first piece of information encountered.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(321, 'Drawing different conclusions from identical information based on how it is presented.', 1),
(321, 'Judging likelihood by how easily examples come to mind.', 0),
(321, 'Feeling the pain of losses more acutely than the pleasure of equivalent gains.', 0),
(321, 'Judging probability by resemblance to a known prototype.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(322, 'The tendency to feel the pain of losses more acutely than the pleasure of equivalent gains.', 1),
(322, 'The tendency to continue investing in a failing course of action.', 0),
(322, 'The tendency to adjust insufficient from an initial anchor.', 0),
(322, 'The tendency to seek confirming evidence for existing beliefs.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(323, 'Decision-making constrained by available information, time, and cognitive capacity, leading to satisficing rather than maximizing.', 1),
(323, 'The inability to make decisions under conditions of complete uncertainty.', 0),
(323, 'The tendency to overestimate one''s decision-making abilities.', 0),
(323, 'The systematic error introduced by emotional factors in judgment.', 0);

-- Lesson 31: Motivation & Drive

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(324, 'Extrinsic motivation crowding out intrinsic motivation.', 1),
(324, 'Self-Determination Theory predicting reduced autonomy.', 0),
(324, 'Flow State becoming inaccessible once rewards are introduced.', 0),
(324, 'Cognitive dissonance between her professional and personal identity.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(325, 'Autonomy, competence, and relatedness — the three core psychological needs.', 1),
(325, 'Intrinsic motivation only — extrinsic rewards are irrelevant in creative roles.', 0),
(325, 'Flow State — the team is in a state of optimal performance.', 0),
(325, 'Extrinsic motivation through social recognition.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(326, 'Flow State', 1),
(326, 'Intrinsic Motivation', 0),
(326, 'Self-Determination Theory', 0),
(326, 'Cognitive Dissonance', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(327, 'Despite the higher pay, motivation will likely decline due to thwarted autonomy and competence needs.', 1),
(327, 'Motivation will increase because financial security satisfies foundational needs.', 0),
(327, 'Motivation will be unaffected because the role is clear and well-structured.', 0),
(327, 'Motivation will be sustained through flow, since the tasks are predictable.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(328, 'Challenge and skill in balance — the task is demanding but within reach.', 1),
(328, 'Complete elimination of distractions and external pressures.', 0),
(328, 'High extrinsic reward combined with low task complexity.', 0),
(328, 'Relatedness to teammates as defined by Self-Determination Theory.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(329, 'Change their beliefs to justify the behavior, rather than change the behavior.', 1),
(329, 'Stop the behavior immediately to restore cognitive consistency.', 0),
(329, 'Seek external validation to confirm that the behavior is acceptable.', 0),
(329, 'Experience heightened intrinsic motivation to resolve the conflict.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(330, 'Motivation that arises from the inherent satisfaction of an activity, independent of external reward.', 1),
(330, 'Motivation produced by high levels of personal discipline and self-control.', 0),
(330, 'Motivation that is internally calculated but triggered by external performance targets.', 0),
(330, 'Motivation arising from competition with others.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(331, 'Motivation driven by external rewards or punishments separate from the activity itself.', 1),
(331, 'Motivation arising from one''s natural talent for an activity.', 0),
(331, 'Motivation that declines as competence increases.', 0),
(331, 'Motivation sustained by the flow state.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(332, 'A theory holding that intrinsic motivation is sustained when three core needs — competence, autonomy, and relatedness — are satisfied.', 1),
(332, 'A theory holding that behavior is governed entirely by the ratio of rewards to punishments.', 0),
(332, 'A theory holding that all motivation is ultimately extrinsic in origin.', 0),
(332, 'A theory holding that motivation follows predictable stages from deficiency to growth.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(333, 'The psychological discomfort experienced when one holds contradictory beliefs or when behavior contradicts beliefs.', 1),
(333, 'The difficulty of integrating new information into an existing belief system.', 0),
(333, 'The experience of being uncertain between two equally attractive options.', 0),
(333, 'The mental fatigue produced by sustained decision-making.', 0);

-- Lesson 32: Social Psychology

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(334, 'Groupthink', 1),
(334, 'Conformity', 0),
(334, 'Bystander Effect', 0),
(334, 'Social Proof', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(335, 'Diffusion of responsibility and pluralistic ignorance.', 1),
(335, 'Fundamental Attribution Error and conformity.', 0),
(335, 'Groupthink and social proof.', 0),
(335, 'Bystander apathy and confirmation bias.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(336, 'Normative influence — the desire to conform to avoid social rejection.', 1),
(336, 'Informational influence — the assumption that the group has superior knowledge.', 0),
(336, 'Groupthink — the suppression of dissent in a cohesive group.', 0),
(336, 'Social proof — using others'' actions as evidence of what is correct.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(337, 'Fundamental Attribution Error', 1),
(337, 'Confirmation Bias', 0),
(337, 'Hindsight Bias', 0),
(337, 'Self-serving Bias', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(338, 'Social Proof', 1),
(338, 'Conformity', 0),
(338, 'Representativeness Heuristic', 0),
(338, 'Availability Heuristic', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(339, 'Social Proof', 1),
(339, 'Conformity', 0),
(339, 'Groupthink', 0),
(339, 'Availability Heuristic', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(340, 'Adjusting behavior, beliefs, or attitudes to align with group norms, whether real or perceived.', 1),
(340, 'Adopting the opinions of authority figures regardless of their merit.', 0),
(340, 'Changing behavior to avoid social punishment while privately maintaining different beliefs.', 0),
(340, 'Following the instructions of an authority figure in an experimental setting.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(341, 'The reduced likelihood of an individual offering help in an emergency when other people are present.', 1),
(341, 'The tendency to avoid conflict with strangers in public settings.', 0),
(341, 'The reduction in effort by individuals when working in groups.', 0),
(341, 'The tendency to defer to experts in ambiguous situations.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(342, 'The tendency to overweight personality and underweight situational factors when explaining others'' behavior.', 1),
(342, 'The tendency to attribute one''s own failures to bad luck rather than poor judgment.', 0),
(342, 'The tendency to make generalizations from a single observed instance.', 0),
(342, 'The tendency to assume one''s own beliefs are more widely shared than they are.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(343, 'A deterioration of mental efficiency and moral judgment in cohesive groups, driven by the desire for harmony and unanimity.', 1),
(343, 'The tendency of groups to take more extreme positions than individuals.', 0),
(343, 'The reduction of individual performance when monitored by others.', 0),
(343, 'The systematic distortion of information as it passes through a group hierarchy.', 0);
`;export{e as default};
