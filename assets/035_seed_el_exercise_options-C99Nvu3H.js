var e=`-- Migration 035: Seed exercise_options for Eloquence module (lesson IDs 33-36, exercise IDs 344-383).
-- These rows were absent from migration 019; this backfill is safe on existing databases (INSERT OR IGNORE).

-- ============================================================
-- Lesson 33 — The Three Appeals (exercises 344–353)
-- ============================================================

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(344, 'Ethos', 1),
(344, 'Pathos', 0),
(344, 'Logos', 0),
(344, 'Kairos', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(345, 'Establish pathos before the logical argument', 1),
(345, 'Provide logos through concrete data on individual cases', 0),
(345, 'Establish ethos by demonstrating empathy with the affected family', 0),
(345, 'Use kairos by timing the story to coincide with breaking news', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(346, 'Logos', 1),
(346, 'Ethos', 0),
(346, 'Pathos', 0),
(346, 'Decorum', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(347, 'Kairos', 1),
(347, 'Ethos', 0),
(347, 'Logos', 0),
(347, 'Decorum', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(348, 'Decorum', 1),
(348, 'Pathos', 0),
(348, 'Ethos', 0),
(348, 'Kairos', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(349, 'The appeal based on the speaker''s character, credibility, and trustworthiness.', 1),
(349, 'The appeal to the emotions of the audience to create sympathy or indignation.', 0),
(349, 'The appeal to reason through evidence, data, and logical demonstration.', 0),
(349, 'The appeal to the appropriateness of style and tone for the given occasion.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(350, 'The appeal to the emotions of the audience to make them receptive to a conclusion.', 1),
(350, 'The appeal based on the speaker''s credentials and demonstrated expertise.', 0),
(350, 'The appeal to reason through statistics, expert testimony, and causal argument.', 0),
(350, 'The appeal to shared cultural values and widely accepted commonplaces.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(351, 'The appeal to reason through evidence, argument, and demonstration.', 1),
(351, 'The appeal that relies on the speaker''s reputation and moral character.', 0),
(351, 'The appeal that moves the audience through emotionally resonant narrative.', 0),
(351, 'The appeal that adapts the message to the specific values of the audience.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(352, 'The opportune moment — the right time and context for a particular message.', 1),
(352, 'The shared cultural values that a speaker and audience hold in common.', 0),
(352, 'The opening section of a speech designed to establish goodwill with the audience.', 0),
(352, 'The emotional intensity that a speaker generates through vivid personal narrative.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(353, 'The appropriateness of style, tone, and content to the specific audience and occasion.', 1),
(353, 'The set of shared beliefs that a speaker invokes as common ground for an argument.', 0),
(353, 'The closing emotional appeal that completes the rhetorical arc of a speech.', 0),
(353, 'The practice of adjusting evidence types to match the expertise level of the audience.', 0);

-- ============================================================
-- Lesson 34 — Figures of Speech (exercises 354–363)
-- ============================================================

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(354, 'Anaphora', 1),
(354, 'Tricolon', 0),
(354, 'Chiasmus', 0),
(354, 'Antithesis', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(355, 'Antithesis', 1),
(355, 'Anaphora', 0),
(355, 'Tricolon', 0),
(355, 'Amplification', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(356, 'Chiasmus', 1),
(356, 'Anaphora', 0),
(356, 'Antithesis', 0),
(356, 'Tricolon', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(357, 'Tricolon', 1),
(357, 'Anaphora', 0),
(357, 'Chiasmus', 0),
(357, 'Rhetorical Question', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(358, 'Rhetorical Question', 1),
(358, 'Enthymeme', 0),
(358, 'Concession', 0),
(358, 'Amplification', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(359, 'Repetition of the same word or phrase at the beginning of successive clauses or sentences.', 1),
(359, 'Reversal of the grammatical order of terms in successive clauses to create a crossing pattern.', 0),
(359, 'A series of three parallel elements used to create rhythm and a sense of completion.', 0),
(359, 'The placement of contrasting ideas in parallel grammatical structures.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(360, 'The placement of contrasting ideas in parallel grammatical structures.', 1),
(360, 'Repetition of a key word or phrase at the start of successive clauses.', 0),
(360, 'Inversion of word order in the second of two parallel clauses.', 0),
(360, 'A series of three grammatically parallel elements that builds to a climax.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(361, 'A figure in which the grammatical structure of a phrase is inverted in the following phrase — an A-B-B-A pattern.', 1),
(361, 'Repetition of an opening word or phrase across successive clauses for emphasis.', 0),
(361, 'A series of three parallel elements that creates rhythm and a feeling of completeness.', 0),
(361, 'The opposition of two contrasting ideas expressed in parallel grammatical form.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(362, 'A series of three parallel elements — words, phrases, or clauses — used for rhetorical effect.', 1),
(362, 'The repetition of identical opening words across successive clauses to create cumulative force.', 0),
(362, 'A question posed not to receive an answer but to assert a point through the interrogative form.', 0),
(362, 'The crossing inversion of grammatical terms between two successive clauses.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(363, 'A question asked not to receive an answer but to make a point or provoke thought.', 1),
(363, 'A syllogism with an unstated premise that the audience is expected to supply themselves.', 0),
(363, 'An acknowledgment of the opposing side''s strongest point before presenting a counter-argument.', 0),
(363, 'A figure using the crossing inversion of grammatical terms between two successive clauses.', 0);

-- ============================================================
-- Lesson 35 — The Structure of Argument (exercises 364–373)
-- ============================================================

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(364, 'Enthymeme', 1),
(364, 'Syllogism', 0),
(364, 'Premise', 0),
(364, 'Stasis', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(365, 'Stasis', 1),
(365, 'Refutation', 0),
(365, 'Concession', 0),
(365, 'Premise', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(366, 'Concession', 1),
(366, 'Stasis', 0),
(366, 'Refutation', 0),
(366, 'Enthymeme', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(367, 'Refutation', 1),
(367, 'Concession', 0),
(367, 'Stasis', 0),
(367, 'Amplification', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(368, 'Churchill communicated clearly.', 1),
(368, 'All effective leaders communicate clearly.', 0),
(368, 'Therefore Churchill was an effective leader.', 0),
(368, 'Communication clarity is the most important leadership trait.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(369, 'Stasis', 1),
(369, 'Refutation', 0),
(369, 'Enthymeme', 0),
(369, 'Premise', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(370, 'A syllogism with an unstated premise, where the audience supplies the missing link.', 1),
(370, 'A statement offered as evidence or support for a conclusion in a formal argument.', 0),
(370, 'The central point of dispute in an argument — the issue on which the case turns.', 0),
(370, 'The process of dismantling an opponent''s argument by identifying its specific failure.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(371, 'A statement offered as evidence or support for a conclusion.', 1),
(371, 'The conclusion that follows necessarily from the premises of a deductive argument.', 0),
(371, 'An unstated assumption that an audience is expected to supply to complete an argument.', 0),
(371, 'The real point of dispute in an argument, identified by distinguishing fact from definition from quality.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(372, 'Dismantling an opponent''s argument by showing it is false, weak, or irrelevant.', 1),
(372, 'Acknowledging the strongest point of the opposing argument before presenting a counter.', 0),
(372, 'Identifying the precise point of dispute on which a case actually turns.', 0),
(372, 'Expanding a point through accumulated detail, comparison, and repetition.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(373, 'Acknowledging the validity of an opposing point before presenting a counter-argument.', 1),
(373, 'Dismantling an opponent''s argument by showing it is false, weak, or irrelevant.', 0),
(373, 'Identifying the real point of dispute on which the argument should be focused.', 0),
(373, 'A syllogism with an unstated premise that the audience supplies themselves.', 0);

-- ============================================================
-- Lesson 36 — The Art of Persuasion (exercises 374–383)
-- ============================================================

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(374, 'Exordium', 1),
(374, 'Peroration', 0),
(374, 'Amplification', 0),
(374, 'Concession', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(375, 'Peroration', 1),
(375, 'Exordium', 0),
(375, 'Amplification', 0),
(375, 'Refutation', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(376, 'Amplification', 1),
(376, 'Anaphora', 0),
(376, 'Peroration', 0),
(376, 'Tricolon', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(377, 'Adapting her argument to her audience', 1),
(377, 'Applying decorum to the formal structure of her speech', 0),
(377, 'Performing refutation of the general audience version of her argument', 0),
(377, 'Using logos to replace the pathos-heavy version of her presentation', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(378, 'Commonplace', 1),
(378, 'Exordium', 0),
(378, 'Concession', 0),
(378, 'Enthymeme', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(379, 'Concession / audience adaptation', 1),
(379, 'Refutation / stasis identification', 0),
(379, 'Exordium / ethos-building', 0),
(379, 'Amplification / emotional intensification', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(380, 'The opening section of a speech, designed to make the audience attentive, receptive, and well-disposed.', 1),
(380, 'The closing section of a speech that summarizes arguments and delivers a final emotional appeal.', 0),
(380, 'The section of a speech that responds to and dismantles the opposing argument.', 0),
(380, 'The central body of the speech in which the main evidence and reasoning are presented.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(381, 'The closing section of a speech — summarizing arguments and delivering a final emotional appeal.', 1),
(381, 'The opening section of a speech designed to capture the audience''s attention and establish goodwill.', 0),
(381, 'The section in which the speaker responds to and dismantles the opposing case.', 0),
(381, 'The technique of expanding a point through enumeration, comparison, and accumulated detail.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(382, 'Expanding and intensifying a point through accumulation of detail, comparison, or repetition.', 1),
(382, 'Repeating a key word or phrase at the opening of successive clauses to create emphasis.', 0),
(382, 'Invoking shared cultural values as common ground before making an argument.', 0),
(382, 'Acknowledging the opposing position''s strongest point before presenting a counter-argument.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(383, 'A shared belief or widely accepted value invoked as common ground to support an argument.', 1),
(383, 'A figure of speech that places contrasting ideas in parallel grammatical structures.', 0),
(383, 'A syllogism in which one premise is left unstated for the audience to supply.', 0),
(383, 'The practice of adjusting style, vocabulary, and evidence to suit a specific audience.', 0);
`;export{e as default};
