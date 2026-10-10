var e=`-- Migration 026: Logic module expansion — lessons 45–48.
-- Uses language_code='lo' sentinel throughout.

-- ---- Grammar lessons (topics) ----

INSERT OR IGNORE INTO grammar_lessons (id, title, description, sort_order, language_code) VALUES
  (45, 'Inductive Reasoning',        'From observations to generalizations — the logic of scientific inference',  5, 'lo'),
  (46, 'Bayesian Reasoning',         'Updating beliefs in light of evidence — probability and prior knowledge',    6, 'lo'),
  (47, 'Paradoxes and Self-Reference','Logical puzzles that illuminate the limits and structure of language',      7, 'lo'),
  (48, 'Causal Reasoning',           'Causation, correlation, and the methods of causal discovery',               8, 'lo');

-- ---- Vocabulary (20 key terms, sort_order 381–400) ----

INSERT OR IGNORE INTO vocabulary_items (sort_order, cyrillic, target_word, english, transliteration, language_code) VALUES

(381, 'Inductive Strength',        'Inductive Strength',
 'The degree to which the premises of an inductive argument support the conclusion — ranging from weak (premises barely relevant) to strong (conclusion very probable given premises).',
 'Contrasted with deductive validity: inductive arguments can never guarantee their conclusions but can provide stronger or weaker support. A strong inductive argument can still have false conclusions.', 'lo'),

(382, 'Enumerative Induction',     'Enumerative Induction',
 'Inferring a general conclusion from a list of observed instances: because every observed X has property P, all X have property P.',
 'The simplest form of induction. Vulnerable to the problem of induction (Hume) and to counterexamples (one black swan falsifies "all swans are white"). The size and diversity of the sample affect strength.', 'lo'),

(383, 'Inference to Best Explanation', 'Inference to Best Explanation',
 'Choosing the hypothesis that, if true, would best explain the available evidence — also called abduction or abductive reasoning.',
 'Introduced by C.S. Peirce. Contrasted with pure enumerative induction: it chooses the best among competing explanations. Used throughout science, medicine, and everyday reasoning.', 'lo'),

(384, 'Prior Probability',         'Prior Probability',
 'In Bayesian reasoning, the probability assigned to a hypothesis before observing new evidence — your initial degree of belief.',
 'The prior (P(H)) reflects background knowledge and base rates. A well-calibrated prior is not arbitrary — it incorporates everything you know before the new evidence arrives.', 'lo'),

(385, 'Likelihood',                'Likelihood',
 'In Bayes''s theorem, the probability that the observed evidence would occur if the hypothesis were true — P(E|H).',
 'Likelihood is not the probability that the hypothesis is true given the evidence (that is the posterior). It is the other direction: how well does the hypothesis predict the evidence? High likelihood means the hypothesis "fits" the data well.', 'lo'),

(386, 'Posterior Probability',     'Posterior Probability',
 'The updated probability of a hypothesis after incorporating new evidence — the result of applying Bayes''s theorem to the prior and the likelihood.',
 'Bayes''s theorem: P(H|E) = P(E|H) × P(H) / P(E). The posterior becomes the new prior when the next piece of evidence arrives. Bayesian reasoning is fundamentally iterative.', 'lo'),

(387, 'Base-Rate Neglect',         'Base-Rate Neglect',
 'The cognitive error of ignoring the prior probability (base rate) of a hypothesis when evaluating evidence — overweighting vivid, specific evidence against the statistical background.',
 'Classic example: a rare disease test is 99% accurate, but if only 1 in 10,000 people have the disease, a positive test is still more likely to be a false positive than a true positive. People routinely ignore the base rate and conclude they have the disease.', 'lo'),

(388, 'Liar Paradox',              'Liar Paradox',
 'The ancient paradox: "This sentence is false." If true, it must be false; if false, it must be true — generating an endless contradiction.',
 'Attributed to Epimenides of Crete ("All Cretans are liars"). A classic problem in logic and the philosophy of language. Tarski''s solution: truth must be defined in a meta-language, not within the language itself.', 'lo'),

(389, 'Russell''s Paradox',        'Russell''s Paradox',
 'Bertrand Russell''s 1901 paradox: the set of all sets that do not contain themselves — does it contain itself? If yes, it should not; if no, it should.',
 'The paradox showed that naive set theory (any property defines a set) is inconsistent. It prompted the development of modern axiomatic set theory (Zermelo-Fraenkel) which restricts which collections count as sets.', 'lo'),

(390, 'Zeno''s Paradoxes',         'Zeno''s Paradoxes',
 'A series of arguments by Zeno of Elea purporting to show that motion is impossible — e.g., Achilles can never overtake the tortoise because he must always first reach the tortoise''s current position.',
 'The mathematical resolution uses the convergence of infinite series: infinite steps can sum to a finite distance. Philosophically, the paradoxes raised deep questions about continuity, infinity, and the relationship between mathematical and physical description.', 'lo'),

(391, 'Sorites Paradox',           'Sorites Paradox',
 'The paradox of the heap: if a heap of sand minus one grain is still a heap, when does it cease to be one? Iterated removal cannot produce a precise threshold.',
 'From Greek: soros = heap. Reveals vagueness in natural language: predicates like "tall," "bald," and "heap" have no sharp boundary. Responses include fuzzy logic, degree theory, and epistemic accounts of vagueness.', 'lo'),

(392, 'Self-Reference',            'Self-Reference',
 'When a statement, system, or rule refers to itself — a structure that can generate paradoxes, as in the liar paradox, or productive results, as in Gödel''s incompleteness theorems.',
 'Gödel used self-reference constructively: he built a statement (in arithmetic) that says "this statement is not provable in this system." This proved that any consistent formal system rich enough for arithmetic is incomplete.', 'lo'),

(393, 'Correlation vs. Causation', 'Correlation vs. Causation',
 'The logical error of inferring that because two variables are associated, one causes the other — when in fact the association may be coincidental or due to a common cause.',
 'Classic example: ice cream sales and drowning deaths are correlated (both increase in summer). The common cause is hot weather. Establishing causation requires ruling out common causes, reverse causation, and chance.', 'lo'),

(394, 'Counterfactual Conditional', 'Counterfactual Conditional',
 'A conditional statement about what would have happened under circumstances that did not actually occur: "If X had happened, Y would have resulted."',
 'Central to causal reasoning: X causes Y means roughly "if X had not occurred, Y would not have occurred." Counterfactual theories of causation (Lewis) face the challenge of evaluating hypothetical scenarios consistently.', 'lo'),

(395, 'Mill''s Methods',           'Mill''s Methods',
 'Five inductive methods proposed by John Stuart Mill for discovering causal relationships: agreement, difference, joint method, residues, and concomitant variation.',
 'The Method of Difference is most powerful: if two situations are identical except that one has the cause and the effect and the other has neither, the differing factor is the cause. The foundation of the controlled experiment.', 'lo'),

(396, 'Abduction',                 'Abduction',
 'A form of inference that moves from an observation to the most plausible explanatory hypothesis — not guaranteed by the evidence but suggested as the best candidate explanation.',
 'C.S. Peirce distinguished three forms of inference: deduction (certain), induction (probable), abduction (plausible). Abduction underlies diagnostic reasoning, detective work, and scientific hypothesis generation.', 'lo'),

(397, 'Problem of Induction',      'Problem of Induction',
 'Hume''s challenge: we cannot justify the assumption that the future will resemble the past — inductive inference from observed to unobserved cases has no logical guarantee.',
 'Hume showed that induction cannot be justified by experience (circular) or by reason (no logical necessity that regularities continue). Karl Popper''s response: abandon induction and use falsification — science progresses by disconfirmation, not confirmation.', 'lo'),

(398, 'Bayes''s Theorem',          'Bayes''s Theorem',
 'The mathematical rule for updating probabilities: P(H|E) = P(E|H) × P(H) / P(E). The posterior probability of H given evidence E equals the prior times the likelihood divided by the probability of E.',
 'Discovered by Thomas Bayes (1763, published posthumously). Foundational for statistics, machine learning, and rational belief revision. The theorem is uncontroversial; the philosophical question is whether priors can be objectively assigned.', 'lo'),

(399, 'Gödel''s Incompleteness',   'Gödel''s Incompleteness',
 'Kurt Gödel''s 1931 theorem: any consistent formal system powerful enough to express basic arithmetic contains true statements that cannot be proved within that system.',
 'The proof uses self-reference: Gödel constructed a sentence equivalent to "this sentence is not provable here." The result shattered Hilbert''s program to formalize all of mathematics. It is not a limitation of human thought but of formal systems.', 'lo'),

(400, 'Confirmation Bias',         'Confirmation Bias',
 'The tendency to seek, interpret, and recall information in a way that confirms one''s prior beliefs — the most pervasive obstacle to good inductive reasoning.',
 'Peter Wason''s 2-4-6 task (1960) demonstrated that people test hypotheses by looking for confirmations rather than potential falsifications. Popper argued that genuine scientific method requires actively seeking disconfirming evidence.', 'lo');

-- ---- Reading passages ----

INSERT OR IGNORE INTO reading_passages (id, title, sort_order, language_code) VALUES
  (34, 'Hume: An Enquiry Concerning Human Understanding',       4, 'lo'),
  (35, 'Bayes and the Art of Updating Beliefs',                 5, 'lo'),
  (36, 'Carroll: What the Tortoise Said to Achilles',           6, 'lo');

-- ============================================================
-- Exercises: Lesson 45 — Inductive Reasoning (IDs 464–473)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(464, 45, 'mcq_grammar',
 'What distinguishes an inductive argument from a deductive one in terms of the relationship between premises and conclusion?',
 'In a valid deductive argument the conclusion is guaranteed by the premises; in a strong inductive argument the conclusion is only made probable.',
 '', 'This is the defining logical difference. Deductive validity is all-or-nothing: if the form is valid and premises are true, the conclusion cannot be false. Inductive strength comes in degrees: the premises support the conclusion more or less strongly but never with certainty.', 1, 'lo'),

(465, 45, 'mcq_grammar',
 '"Every emerald examined so far has been green. Therefore the next emerald examined will be green." This is an inductive argument. What is its main vulnerability?',
 'It cannot rule out that the pattern will fail — the conclusion goes beyond the evidence and could be defeated by a single counterexample.',
 '', 'This is Hume''s problem of induction: no finite set of observations logically guarantees the next case. The argument may be strong, but it is not valid. Goodman''s "grue" paradox also targets this type of argument: many observation-consistent hypotheses compete with "all emeralds are green."', 2, 'lo'),

(466, 45, 'mcq_grammar',
 'A detective observes that the suspect has mud on their shoes matching the crime scene. They conclude the suspect was at the scene. Which type of inductive reasoning is this?',
 'Inference to the best explanation (abduction).',
 '', 'The detective is not enumerating cases — they are choosing the hypothesis (suspect was at scene) that best explains the evidence (matching mud). This is abduction or inference to best explanation. It is the standard form of diagnostic, forensic, and scientific hypothesis selection.', 3, 'lo'),

(467, 45, 'mcq_grammar',
 'Which of the following strengthens an enumerative inductive argument?',
 'Increasing the size and diversity of the sample while actively seeking disconfirming cases.',
 '', 'A larger, more diverse sample with active disconfirmation-seeking is the strongest evidence of a genuine pattern. Diversity matters because a uniform sample (all swans from the same lake) may miss exceptions present elsewhere. Seeking disconfirmation (testing cases where you would expect the pattern to fail) is the Popperian standard.', 4, 'lo'),

(468, 45, 'mcq_grammar',
 'Hume''s problem of induction is that inductive inference cannot be justified either by experience or by reason. Why can it not be justified by experience?',
 'Justifying induction by experience is circular: it assumes the very regularity of nature that induction is supposed to establish.',
 '', 'To say "induction has worked in the past, so it will work in the future" is itself an inductive argument. Using induction to justify induction assumes the principle being questioned. Hume saw no way out of this circle — it is one of philosophy''s most enduring puzzles.', 5, 'lo'),

(469, 45, 'mcq_grammar',
 'An epidemiologist studies 50,000 patients across five countries and finds that coffee consumption is associated with lower rates of heart disease. What should she conclude?',
 'That there is a strong correlation that warrants further investigation, but causation has not been established.',
 '', 'Even a large observational study cannot establish causation without ruling out confounders (e.g., coffee drinkers may have other healthy habits) and without experimental intervention. The finding is inductively strong evidence of a genuine association, but "association" is not "cause."', 6, 'lo'),

(470, 45, 'mcq_grammar',
 'Karl Popper''s response to Hume''s problem of induction was to replace induction with falsification. What is the key idea?',
 'Science advances not by confirming hypotheses through accumulated instances but by testing and eliminating false hypotheses through disconfirmation.',
 '', 'Popper argued that no number of confirming observations can verify a universal law, but one disconfirming observation can falsify it. So science should proceed by formulating bold hypotheses and subjecting them to severe attempts at refutation — not by accumulating supportive cases.', 7, 'lo'),

(471, 45, 'mcq_grammar',
 'Which of the following is an example of a cogent inductive argument?',
 'An argument that is both inductively strong (premises strongly support the conclusion) and has true premises.',
 '', 'Cogency is the inductive analogue of soundness. A cogent argument has two components: (1) the premises strongly support the conclusion (inductively strong), and (2) the premises are in fact true. An inductively strong argument with false premises is not cogent.', 8, 'lo'),

(472, 45, 'mcq_grammar',
 'A scientist observes that every time a particular gene is expressed, a certain protein appears. She concludes the gene causes protein production. What additional evidence would most strengthen this causal claim?',
 'Experimental evidence showing that disabling the gene prevents protein production under otherwise identical conditions.',
 '', 'The Method of Difference (Mill): if two situations are identical except that one has the cause + effect and the other has neither, the differing factor is the cause. Disabling the gene while holding everything else constant and observing the absence of the protein is the controlled experiment structure that most directly establishes causation.', 9, 'lo'),

(473, 45, 'mcq_grammar',
 'What is the relationship between inductive strength and truth?',
 'A strong inductive argument can have a false conclusion — strength is about the quality of the inference, not the truth of the result.',
 '', 'A strong inductive argument makes the conclusion probable, not certain. History is full of inductively strong arguments that turned out wrong (e.g., all swans are white). This is not a failure of inductive logic — it is its inherent nature. The goal is to make the best inference from available evidence, which is never guaranteed.', 10, 'lo');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(464, 'In both deductive and inductive arguments the conclusion follows necessarily from the premises.', 0),
(464, 'In a valid deductive argument the conclusion is guaranteed by the premises; in a strong inductive argument the conclusion is only made probable.', 1),
(464, 'Inductive arguments always have more premises than deductive ones.', 0),
(464, 'Deductive arguments are used in science; inductive arguments are used in everyday reasoning.', 0),

(465, 'The argument uses only one observation and therefore has no evidential weight.', 0),
(465, 'It cannot rule out that the pattern will fail — the conclusion goes beyond the evidence and could be defeated by a single counterexample.', 1),
(465, 'The argument is invalid because it does not follow the standard syllogistic form.', 0),
(465, 'The premise is false — not every emerald examined has been green.', 0),

(466, 'Enumerative induction — the detective has observed many cases like this before.', 0),
(466, 'Inference to the best explanation (abduction).', 1),
(466, 'Deductive reasoning — the mud directly proves the suspect was at the scene.', 0),
(466, 'Statistical generalization — the detective is applying base rates about criminals.', 0),

(467, 'Repeating the same observation many times with the same sample.', 0),
(467, 'Increasing the size and diversity of the sample while actively seeking disconfirming cases.', 1),
(467, 'Finding one very clear and vivid confirming example.', 0),
(467, 'Using a deductive argument to support the inductive conclusion.', 0),

(468, 'Because logic is purely formal and cannot apply to empirical matters.', 0),
(468, 'Justifying induction by experience is circular: it assumes the very regularity of nature that induction is supposed to establish.', 1),
(468, 'Because all experience is subjective and cannot ground objective claims.', 0),
(468, 'Because experience is too limited a sample to justify conclusions about the future.', 0),

(469, 'That coffee consumption causes lower heart disease rates, since the study is very large.', 0),
(469, 'That there is a strong correlation that warrants further investigation, but causation has not been established.', 1),
(469, 'That the association is too weak to be useful, since observational studies are unreliable.', 0),
(469, 'That coffee is definitely protective, since the finding is consistent across five countries.', 0),

(470, 'Popper accepted Hume''s problem and concluded that scientific knowledge is impossible.', 0),
(470, 'Science advances not by confirming hypotheses through accumulated instances but by testing and eliminating false hypotheses through disconfirmation.', 1),
(470, 'Popper replaced induction with pure deduction — scientific laws are derived mathematically.', 0),
(470, 'Popper argued that induction is valid when combined with probability theory.', 0),

(471, 'An argument that is both inductively strong (premises strongly support the conclusion) and has true premises.', 1),
(471, 'Any argument that begins with empirical observations and ends with a general conclusion.', 0),
(471, 'An argument that has been confirmed by multiple independent studies.', 0),
(471, 'An argument whose conclusion is almost certainly true based on prior probability.', 0),

(472, 'Observing the protein appearing in many more patients across diverse populations.', 0),
(472, 'Experimental evidence showing that disabling the gene prevents protein production under otherwise identical conditions.', 1),
(472, 'Finding a mathematical model that predicts protein production from gene expression levels.', 0),
(472, 'Discovering that other species show the same association between the gene and the protein.', 0),

(473, 'Inductive strength guarantees truth — a very strong inductive argument cannot have a false conclusion.', 0),
(473, 'A strong inductive argument can have a false conclusion — strength is about the quality of the inference, not the truth of the result.', 1),
(473, 'Inductive strength is irrelevant to truth — only deductive arguments can establish true conclusions.', 0),
(473, 'The stronger an inductive argument, the more likely its conclusion is to be true in all future cases.', 0);

-- ============================================================
-- Exercises: Lesson 46 — Bayesian Reasoning (IDs 474–483)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(474, 46, 'mcq_grammar',
 'A disease affects 1 in 10,000 people. A test for it is 99% accurate (1% false positive rate). You test positive. What is the approximate probability you actually have the disease?',
 'About 1% — because the base rate is so low that most positive tests are false positives.',
 '', 'Applying Bayes''s theorem: P(disease|positive) = P(positive|disease) × P(disease) / P(positive). P(positive|disease) ≈ 0.99. P(disease) = 0.0001. P(positive) ≈ 0.99 × 0.0001 + 0.01 × 0.9999 ≈ 0.0101. Result: about 0.98%. This is base-rate neglect in action — intuition says 99%, Bayes says ~1%.', 1, 'lo'),

(475, 46, 'mcq_grammar',
 'In Bayes''s theorem, what is the "prior probability"?',
 'The probability assigned to a hypothesis before observing the new evidence — based on background knowledge and base rates.',
 '', 'The prior P(H) is your initial credence in the hypothesis before a specific piece of evidence is considered. It must incorporate everything you already know — frequency of the event, plausibility of competing hypotheses, historical rates. A poorly chosen prior leads to a poorly calibrated posterior.', 2, 'lo'),

(476, 46, 'mcq_grammar',
 'What does the "likelihood" term P(E|H) represent in Bayes''s theorem?',
 'The probability that the observed evidence would occur if the hypothesis were true.',
 '', 'The likelihood answers: assuming H is true, how probable is this evidence? It is NOT the probability that H is true — that is the posterior. High likelihood means the hypothesis predicts or fits the evidence well. Both the prior and the likelihood are needed to compute the posterior.', 3, 'lo'),

(477, 46, 'mcq_grammar',
 'A doctor increases their prior probability that a patient has condition X after reviewing a symptom common to X. They then order a highly specific test. The test is negative. According to Bayesian reasoning, what happens to their probability of X?',
 'It decreases — the negative result on a specific test is strong evidence against X and lowers the posterior.',
 '', 'A highly specific test that is negative means P(negative|X) is very low. By Bayes''s theorem, this low likelihood for X significantly reduces the posterior P(X|negative). The degree of reduction depends on the test''s specificity and the prior. Bayesian reasoning makes this quantitative.', 4, 'lo'),

(478, 46, 'mcq_grammar',
 'Why is base-rate neglect a serious error in Bayesian reasoning?',
 'It causes people to overweight vivid specific evidence and underweight the prior probability, leading to systematically miscalibrated beliefs.',
 '', 'Without the prior, the posterior cannot be correctly computed. Vivid, emotionally engaging evidence (a dramatic symptom, a shocking news story) distorts judgment by dominating attention. Kahneman and Tversky showed this in multiple studies — people update on new information but fail to anchor it against the base rate.', 5, 'lo'),

(479, 46, 'mcq_grammar',
 'Two hypotheses explain the same data. Hypothesis A was considered plausible before the data; Hypothesis B was considered extremely unlikely. The data fit both equally well. Which should a Bayesian prefer?',
 'Hypothesis A — because even if likelihoods are equal, the higher prior makes A''s posterior larger.',
 '', 'Bayes''s theorem: posterior ∝ prior × likelihood. If likelihoods are equal, the hypothesis with the higher prior wins. This is the Bayesian formalization of Occam''s razor: do not multiply hypotheses beyond what is needed. Prior plausibility matters even when evidence fits multiple explanations equally well.', 6, 'lo'),

(480, 46, 'mcq_grammar',
 'After a particularly vivid news story about plane crashes, a person becomes very reluctant to fly but has no hesitation about driving, which is statistically far more dangerous. Which cognitive error does this illustrate?',
 'Base-rate neglect combined with the availability heuristic — salient events inflate perceived probability.',
 '', 'The availability heuristic (Tversky and Kahneman) causes people to estimate the probability of events based on how easily examples come to mind. Plane crashes are vivid, memorable, and heavily reported; car accidents are common but unremarkable. The person''s perceived probability is driven by availability, not by base rates.', 7, 'lo'),

(481, 46, 'mcq_grammar',
 'Bayesian reasoning is often described as "rational belief revision." What is the core idea?',
 'Beliefs should be proportional to evidence: prior beliefs are updated by new evidence using Bayes''s theorem, moving toward better-calibrated probabilities.',
 '', 'Bayesian epistemology holds that rational agents start with prior probabilities and update them by conditioning on evidence. The process is iterative: today''s posterior becomes tomorrow''s prior. This framework provides a normative standard for how beliefs should change — not just a description of how they do change.', 8, 'lo'),

(482, 46, 'mcq_grammar',
 'A juror hears testimony and updates their assessment of a defendant''s guilt from 20% to 70% probability. The judge then tells them that "probability" has no place in legal reasoning — only certainty counts. Which Bayesian response is most appropriate?',
 'The judge''s instruction is problematic: any assessment of guilt under uncertainty is implicitly probabilistic, and ignoring that structure leads to less rational verdicts.',
 '', 'Bayesian reasoning does not require explicit probability numbers in a courtroom, but the judge''s claim that uncertainty should be abolished is incoherent. "Beyond reasonable doubt" is itself a probabilistic standard. Refusing to structure probabilistic reasoning explicitly does not eliminate probability — it just makes the reasoning less transparent and less amenable to scrutiny.', 9, 'lo'),

(483, 46, 'mcq_grammar',
 'What does Bayes''s theorem say about how new evidence should affect our beliefs when the evidence is equally likely regardless of whether the hypothesis is true?',
 'Evidence that is equally likely under the hypothesis and its negation provides no update — the posterior equals the prior.',
 '', 'If P(E|H) = P(E|¬H), then the evidence is diagnostic of nothing — it fits both the hypothesis and its denial equally well. In that case, Bayes''s theorem yields P(H|E) = P(H): the posterior equals the prior, and the evidence was worthless. This formalizes the intuition that only discriminating evidence matters for belief revision.', 10, 'lo');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(474, 'About 99%, because the test is 99% accurate.', 0),
(474, 'About 50%, because either you have it or you do not.', 0),
(474, 'About 1% — because the base rate is so low that most positive tests are false positives.', 1),
(474, 'About 90%, because accuracy and base rate together make the test highly reliable.', 0),

(475, 'The probability calculated after new evidence is observed.', 0),
(475, 'The probability assigned to a hypothesis before observing the new evidence — based on background knowledge and base rates.', 1),
(475, 'The probability that the evidence was observed given that the hypothesis is true.', 0),
(475, 'The probability that the hypothesis is false.', 0),

(476, 'The probability that the hypothesis is true given the evidence.', 0),
(476, 'The probability that the observed evidence would occur if the hypothesis were true.', 1),
(476, 'The probability that the evidence was observed, regardless of any hypothesis.', 0),
(476, 'The probability of the hypothesis before the evidence is considered.', 0),

(477, 'It stays the same — a single test result does not change a probability derived from clinical judgment.', 0),
(477, 'It increases — negative results on specific tests are often unreliable.', 0),
(477, 'It decreases — the negative result on a specific test is strong evidence against X and lowers the posterior.', 1),
(477, 'It becomes undefined — a negative test removes all probabilistic information.', 0),

(478, 'It prevents Bayesian updating entirely, making rational reasoning impossible.', 0),
(478, 'It causes people to overweight vivid specific evidence and underweight the prior probability, leading to systematically miscalibrated beliefs.', 1),
(478, 'It only affects reasoning about medical diagnoses, not other domains.', 0),
(478, 'It leads to overconfidence in all probabilistic judgments regardless of evidence type.', 0),

(479, 'Hypothesis B — because the data fit both equally well, prior probability is irrelevant.', 0),
(479, 'Neither — they should be treated as equally likely given equal likelihoods.', 0),
(479, 'Hypothesis A — because even if likelihoods are equal, the higher prior makes A''s posterior larger.', 1),
(479, 'The most parsimonious hypothesis, regardless of prior probabilities.', 0),

(480, 'Risk aversion — the person is rationally avoiding low-probability high-impact events.', 0),
(480, 'Base-rate neglect combined with the availability heuristic — salient events inflate perceived probability.', 1),
(480, 'The representativeness heuristic — the person is judging risk by how well planes fit a "dangerous vehicle" prototype.', 0),
(480, 'Confirmation bias — the person is seeking evidence that confirms their fear of flying.', 0),

(481, 'Bayesian reasoning means starting from zero probability and accumulating certainty through evidence.', 0),
(481, 'Beliefs should be proportional to evidence: prior beliefs are updated by new evidence using Bayes''s theorem, moving toward better-calibrated probabilities.', 1),
(481, 'Rational belief revision means rejecting all beliefs that were held before sufficient evidence was gathered.', 0),
(481, 'Bayesian reasoning applies only to empirical science, not to everyday belief formation.', 0),

(482, 'The juror was wrong to assign probabilities — legal reasoning requires categorical certainty, not probability.', 0),
(482, 'The judge is correct — probability has no place in criminal law, and certainty is the only legitimate standard.', 0),
(482, 'The judge''s instruction is problematic: any assessment of guilt under uncertainty is implicitly probabilistic, and ignoring that structure leads to less rational verdicts.', 1),
(482, 'The juror should abandon their probabilistic reasoning and rely on gut instinct instead.', 0),

(483, 'Evidence that fits the hypothesis better than its negation always provides some update, even if small.', 0),
(483, 'Evidence that is equally likely under the hypothesis and its negation provides no update — the posterior equals the prior.', 1),
(483, 'Evidence that equally fits multiple hypotheses always increases uncertainty and should be disregarded.', 0),
(483, 'Evidence must be certain — probabilistic evidence cannot change probabilities at all.', 0);

-- ============================================================
-- Exercises: Lesson 47 — Paradoxes and Self-Reference (IDs 484–493)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(484, 47, 'mcq_grammar',
 'The Liar Paradox: consider "This sentence is false." What makes this a genuine paradox rather than merely a false sentence?',
 'Assuming it is true makes it false; assuming it is false makes it true — it generates a contradiction either way, defying the law of excluded middle.',
 '', 'A paradox is not merely a surprising result but a genuine contradiction derived from apparently sound reasoning. The Liar generates a contradiction from standard assumptions about truth and negation. It is not merely false (as "the moon is made of cheese" is false) — it is neither stably true nor stably false.', 1, 'lo'),

(485, 47, 'mcq_grammar',
 'Alfred Tarski''s response to the Liar Paradox was to distinguish object language from meta-language. What does this distinction achieve?',
 'It prevents self-referential truth claims by requiring truth to be defined in a higher-level language that does not contain its own truth predicate.',
 '', 'Tarski showed that if a language contains its own truth predicate, the Liar Paradox is unavoidable. His solution: define truth for language L in a meta-language L'' that is more expressive. "''Snow is white'' is true" is a statement in L'' about a sentence in L. Self-reference that generates the paradox is blocked.', 2, 'lo'),

(486, 47, 'mcq_grammar',
 'Russell''s Paradox asks about "the set of all sets that do not contain themselves." Why does this generate a contradiction?',
 'If the set contains itself, it should not be a member (by its defining property); if it does not contain itself, it should be — generating a contradiction either way.',
 '', 'Let R = {x : x ∉ x}. Is R ∈ R? If yes, by definition R should not be in R. If no, by definition R should be in R. The paradox showed that the unrestricted comprehension principle (any predicate defines a set) is inconsistent, forcing the development of axiomatic set theory.', 3, 'lo'),

(487, 47, 'mcq_grammar',
 'Zeno''s Achilles paradox argues that Achilles can never overtake a tortoise given a head start. The mathematical resolution invokes:',
 'The convergence of infinite series — infinitely many steps can sum to a finite distance in finite time.',
 '', 'Zeno assumed that infinitely many steps must take infinite time. But the series 1/2 + 1/4 + 1/8 + ... = 1: infinitely many terms sum to a finite number. Modern analysis provides the tool Zeno lacked. But the paradox still prompts philosophical questions about whether space and time are continuous or discrete.', 4, 'lo'),

(488, 47, 'mcq_grammar',
 'The Sorites Paradox: one grain of sand is not a heap; adding one grain never turns a non-heap into a heap. Therefore no collection of sand grains is a heap. What does this paradox reveal?',
 'Natural language predicates like "heap" are vague — they have no sharp boundary, and small changes can accumulate to cross a threshold without any single step being the critical one.',
 '', 'The paradox exploits tolerance: the predicate "is a heap" is tolerant to single-grain differences. But tolerance iterated over many steps produces the absurd conclusion that 1,000,000 grains is not a heap. Philosophical responses include: denying tolerance (sharp but unknowable boundary — epistemicism), accepting degrees of truth (fuzzy logic), or accepting that vagueness is a feature of reality.', 5, 'lo'),

(489, 47, 'mcq_grammar',
 'Gödel''s first incompleteness theorem exploits self-reference to prove a profound result. What does it show?',
 'Any consistent formal system rich enough for arithmetic contains true statements that cannot be proved within that system.',
 '', 'Gödel encoded mathematics in arithmetic and constructed a sentence G that says "G is not provable in this system." If the system is consistent, G cannot be proved (otherwise the system proves something false). But G is true — so the system is incomplete. This used self-reference constructively rather than paradoxically.', 6, 'lo'),

(490, 47, 'mcq_grammar',
 'Lewis Carroll''s dialogue "What the Tortoise Said to Achilles" shows that an infinite regress threatens even logical inference. What is the Tortoise''s challenge?',
 'The Tortoise demands that every inferential step be justified by a new premise, generating an infinite chain that never reaches the conclusion.',
 '', 'Carroll shows that logical rules cannot themselves be premises — they must be applied, not stated. If modus ponens must be stated as a premise before being applied, we need another rule to license using that premise, and so on without end. The point: the application of rules is not itself a logical step but a practice.', 7, 'lo'),

(491, 47, 'mcq_grammar',
 'A barber in a town shaves exactly those men who do not shave themselves. Does the barber shave himself? This is:',
 'Russell''s Barber Paradox — a folk version of Russell''s Paradox showing that the described barber cannot exist.',
 '', 'If the barber shaves himself, he is shaving a man who shaves himself — contradiction. If he does not shave himself, he is a man who does not shave himself, so he should shave himself — contradiction. The conclusion: no such barber can exist. This is a simpler analogue of Russell''s set-theoretic paradox.', 8, 'lo'),

(492, 47, 'mcq_grammar',
 'The paradox of the heap and the Liar Paradox both exploit a similar structural feature. What is it?',
 'Both involve iteration of small, seemingly harmless steps that accumulate into a contradiction or an intractable result.',
 '', 'The Liar iterates the application of "true" to its own evaluation and generates a contradiction. The Sorites iterates the addition of single grains and generates an absurdity. Both exploit tolerance: a small change seems harmless, but repetition reveals that the system cannot be consistent across all applications.', 9, 'lo'),

(493, 47, 'mcq_grammar',
 'Which of the following best characterizes the philosophical significance of paradoxes in logic?',
 'Paradoxes reveal hidden assumptions or structural weaknesses in our logical systems and natural language — they drive theoretical progress by forcing clearer foundations.',
 '', 'Russell''s Paradox drove the development of axiomatic set theory. The Liar drove Tarski''s semantic theory of truth. Zeno drove the mathematical analysis of infinite series. Carroll''s regress drove the distinction between inferential rules and premises. Far from being curiosities, paradoxes are engines of logical progress.', 10, 'lo');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(484, 'It is simply false — the sentence refers to itself, which makes it automatically false.', 0),
(484, 'Assuming it is true makes it false; assuming it is false makes it true — it generates a contradiction either way, defying the law of excluded middle.', 1),
(484, 'It is meaningless — self-referential sentences cannot have truth values at all.', 0),
(484, 'It is true — self-referential sentences about falsity are automatically paradoxical truths.', 0),

(485, 'It replaces the truth predicate with a probability measure to avoid sharp true/false distinctions.', 0),
(485, 'It prevents self-referential truth claims by requiring truth to be defined in a higher-level language that does not contain its own truth predicate.', 1),
(485, 'It simply declares self-referential sentences to be false without generating the paradox.', 0),
(485, 'It extends formal logic to allow sentences to be both true and false simultaneously.', 0),

(486, 'Sets cannot contain other sets, so the question is ill-formed from the start.', 0),
(486, 'If the set contains itself, it should not be a member (by its defining property); if it does not contain itself, it should be — generating a contradiction either way.', 1),
(486, 'The paradox shows that self-reference is always logically prohibited.', 0),
(486, 'The set contains itself, which is consistent with naive set theory — Russell was wrong.', 0),

(487, 'The law of excluded middle — Achilles either overtakes the tortoise or he does not.', 0),
(487, 'The convergence of infinite series — infinitely many steps can sum to a finite distance in finite time.', 1),
(487, 'The principle of induction — Achilles covers each segment in succession.', 0),
(487, 'The axiom of choice — the sequence of positions can be well-ordered.', 0),

(488, 'The paradox shows that "heap" is a meaningless word that should be eliminated from the language.', 0),
(488, 'Natural language predicates like "heap" are vague — they have no sharp boundary, and small changes can accumulate to cross a threshold without any single step being the critical one.', 1),
(488, 'The paradox proves that inductive reasoning is unreliable in everyday contexts.', 0),
(488, 'It shows that numbers cannot be applied to physical objects like grains of sand.', 0),

(489, 'Any consistent formal system is eventually able to prove all true statements within it.', 0),
(489, 'Any consistent formal system rich enough for arithmetic contains true statements that cannot be proved within that system.', 1),
(489, 'Mathematics is inconsistent — there are both true and false statements in arithmetic.', 0),
(489, 'Formal systems rich enough for arithmetic must be inconsistent.', 0),

(490, 'Achilles defeats the Tortoise''s objection by pointing out that logic requires no justification.', 0),
(490, 'The Tortoise demands that every inferential step be justified by a new premise, generating an infinite chain that never reaches the conclusion.', 1),
(490, 'The paradox shows that logical inference requires premises to be stated explicitly in full.', 0),
(490, 'Carroll argues that logic and mathematics use different inference rules that cannot be compared.', 0),

(491, 'A simple contradiction resulting from an unclear definition of "shave."', 0),
(491, 'Russell''s Barber Paradox — a folk version of Russell''s Paradox showing that the described barber cannot exist.', 1),
(491, 'The Liar Paradox in disguise — a self-referential sentence generating an infinite loop.', 0),
(491, 'The Sorites Paradox applied to the concept of shaving.', 0),

(492, 'Both involve statements that refer to themselves and are therefore automatically paradoxical.', 0),
(492, 'Both involve iteration of small, seemingly harmless steps that accumulate into a contradiction or an intractable result.', 1),
(492, 'Both are about the limits of mathematical proof and formal systems.', 0),
(492, 'Both are examples of the problem of induction — generalizing from limited observations.', 0),

(493, 'Paradoxes show that logic is fundamentally flawed and should be replaced by intuition.', 0),
(493, 'Paradoxes are harmless puzzles with no consequences for the foundations of logic.', 0),
(493, 'Paradoxes reveal hidden assumptions or structural weaknesses in our logical systems and natural language — they drive theoretical progress by forcing clearer foundations.', 1),
(493, 'Paradoxes demonstrate that formal logic cannot handle natural language and should confine itself to mathematics.', 0);

-- ============================================================
-- Exercises: Lesson 48 — Causal Reasoning (IDs 494–503)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(494, 48, 'mcq_grammar',
 'Ice cream sales and drowning deaths are correlated. Which explanation is most reasonable?',
 'A common cause — hot weather drives both ice cream purchases and swimming, which increases drowning risk.',
 '', 'Correlation can arise from: (1) A causes B, (2) B causes A, (3) a common cause C causes both A and B, or (4) coincidence. Here, hot weather is the common cause of both variables. Neither variable causes the other — the correlation is real but causally spurious.', 1, 'lo'),

(495, 48, 'mcq_grammar',
 'Mill''s Method of Difference states: if two situations are alike in every respect except that one has factor F and the effect E, and the other has neither F nor E, then F is the cause of E. What is this method the logical foundation of?',
 'The controlled experiment — where the experimental group receives the treatment and the control group does not, with all other variables held constant.',
 '', 'The controlled experiment operationalizes the Method of Difference. The treatment (F) is the only thing that differs between groups. If the effect (E) appears only in the treatment group, we can attribute it to F. The logic is Mill''s; the implementation is modern experimental science.', 2, 'lo'),

(496, 48, 'mcq_grammar',
 'A researcher observes that countries with more chocolate consumption per capita have more Nobel Prize winners per capita. The most appropriate conclusion is:',
 'There is a correlation, but the most likely explanation involves a common cause (wealth enabling both) rather than chocolate causing intellectual achievement.',
 '', 'This is a real study (Messerli, NEJM 2012). The correlation is genuine. But wealthy countries consume more chocolate and also invest more in education and research, which produces more Nobel Prizes. Chocolate is not the cause; shared economic conditions are the common cause.', 3, 'lo'),

(497, 48, 'mcq_grammar',
 'What is a "counterfactual conditional," and why is it central to causal reasoning?',
 'A statement about what would have happened under different circumstances ("if X had not occurred, Y would not have occurred") — which is the core logic of causal attribution.',
 '', 'Causal claims are fundamentally counterfactual: to say A caused B is to say that if A had not occurred, B would not have occurred (all else equal). This counterfactual dependency is what distinguishes genuine causation from mere correlation or coincidence.', 4, 'lo'),

(498, 48, 'mcq_grammar',
 'Why is establishing causation from observational studies especially difficult compared to randomized experiments?',
 'Confounding variables — factors correlated with both the cause and the effect — can produce spurious associations that mimic causal relationships.',
 '', 'In observational studies, exposure is not randomly assigned, so differences between exposed and unexposed groups may reflect pre-existing differences rather than the effect of exposure. Confounders can produce, mask, or reverse apparent causal effects. Randomization removes confounding by making exposure independent of all background variables.', 5, 'lo'),

(499, 48, 'mcq_grammar',
 'Which of the following is the best example of reverse causation?',
 'A study finds that hospitalized people are sicker than non-hospitalized people and concludes that hospitals cause illness.',
 '', 'Reverse causation: the effect causes the "cause." People are in hospital because they are ill — illness causes hospitalization, not the reverse. This seems obvious here, but the error is common in social science: wealthy people are more likely to exercise; does wealth cause exercise, or does exercise cause wealth?', 6, 'lo'),

(500, 48, 'mcq_grammar',
 'Mill''s Method of Agreement states: if multiple instances of the effect E all share factor F and nothing else in common, then F is the cause of E. What is this method''s key weakness?',
 'Two instances may share more than one common factor, making it impossible to identify which is the cause without further investigation.',
 '', 'The Method of Agreement is weakened by the presence of multiple common factors. If every instance shares both F and G, we cannot determine from agreement alone which is causal. The Method of Difference (control group) is needed to identify the operative factor.', 7, 'lo'),

(501, 48, 'mcq_grammar',
 'An epidemiologist wants to establish that smoking causes lung cancer. She designs a study but cannot randomly assign people to smoke or not smoke. Which design most closely approximates the controlled experiment?',
 'A prospective cohort study comparing future cancer rates between matched groups of smokers and non-smokers with careful control for confounders.',
 '', 'Randomized assignment is ethically impossible for exposures like smoking. A prospective cohort study, carefully matched on confounders (age, socioeconomic status, other exposures), is the strongest feasible design. The Bradford Hill criteria (strength, consistency, specificity, temporality, dose-response, etc.) provide additional causal evidence.', 8, 'lo'),

(502, 48, 'mcq_grammar',
 'Which of the following statements about causation is correct according to the counterfactual account?',
 '"C caused E" means that if C had not occurred, E would not have occurred (under the same circumstances).',
 '', 'David Lewis''s counterfactual theory: C causes E iff in the closest possible world where C did not occur, E also does not occur. This is the most widely used philosophical account of causation, though it faces challenges with overdetermination (two independent sufficient causes) and preemption.', 9, 'lo'),

(503, 48, 'mcq_grammar',
 'A new therapy is found to reduce relapse rates in a clinical trial. The trial was randomized and double-blind. A critic argues it might be the placebo effect. Is this objection well-founded?',
 'No — randomization and blinding control for placebo effects by ensuring the control group also experiences placebo conditions identically.',
 '', 'A double-blind randomized trial allocates both treatment and placebo randomly, with neither patients nor assessors knowing which group is which. Any placebo effect applies equally to both groups. The difference in outcomes between groups can therefore be attributed to the active treatment. The placebo objection is only valid against uncontrolled studies.', 10, 'lo');

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(494, 'Ice cream causes drowning — sugar impairs swimming ability.', 0),
(494, 'Drowning causes ice cream sales — bereaved families cope by eating ice cream.', 0),
(494, 'A common cause — hot weather drives both ice cream purchases and swimming, which increases drowning risk.', 1),
(494, 'The correlation is spurious — there is no meaningful relationship between the variables.', 0),

(495, 'The statistical analysis of variance, which isolates factors contributing to an effect.', 0),
(495, 'The controlled experiment — where the experimental group receives the treatment and the control group does not, with all other variables held constant.', 1),
(495, 'The case study method, which examines individual instances in depth.', 0),
(495, 'Mill''s Method of Agreement, which identifies factors present in all instances of an effect.', 0),

(496, 'That chocolate consumption causes intellectual achievement, since the correlation is strong.', 0),
(496, 'There is a correlation, but the most likely explanation involves a common cause (wealth enabling both) rather than chocolate causing intellectual achievement.', 1),
(496, 'That Nobel Prize winners eat more chocolate, but this does not imply a general pattern.', 0),
(496, 'The correlation shows reverse causation — intellectual achievement causes chocolate preference.', 0),

(497, 'A statement predicting what will happen in the future based on current conditions.', 0),
(497, 'A statement about what would have happened under different circumstances ("if X had not occurred, Y would not have occurred") — which is the core logic of causal attribution.', 1),
(497, 'A claim about what could have happened in a possible world, used only in modal logic.', 0),
(497, 'A conditional statement that is vacuously true whenever its antecedent is false.', 0),

(498, 'Observational studies cannot be replicated across different populations.', 0),
(498, 'Confounding variables — factors correlated with both the cause and the effect — can produce spurious associations that mimic causal relationships.', 1),
(498, 'Observational studies rely on self-reporting, which is always inaccurate.', 0),
(498, 'Statistical analysis is less powerful in observational studies than in experiments.', 0),

(499, 'A study finds that people who eat more vegetables are healthier and concludes vegetables cause health.', 0),
(499, 'A study finds that hospitalized people are sicker than non-hospitalized people and concludes that hospitals cause illness.', 1),
(499, 'A study finds that wearing seatbelts is associated with lower injury rates and concludes seatbelts prevent injury.', 0),
(499, 'A study finds that exercise and low weight are correlated and cannot determine which causes which.', 0),

(500, 'The method requires a very large number of cases to achieve sufficient statistical power.', 0),
(500, 'Two instances may share more than one common factor, making it impossible to identify which is the cause without further investigation.', 1),
(500, 'The method assumes that effects always have only one cause.', 0),
(500, 'The method can only be applied to natural experiments, not designed studies.', 0),

(501, 'A retrospective case-control study comparing past exposure between people who developed cancer and those who did not.', 0),
(501, 'A prospective cohort study comparing future cancer rates between matched groups of smokers and non-smokers with careful control for confounders.', 1),
(501, 'An ecological study comparing national smoking rates with national cancer rates across countries.', 0),
(501, 'A cross-sectional survey measuring both smoking and cancer status at a single point in time.', 0),

(502, '"C caused E" means that C occurred before E.', 0),
(502, '"C caused E" means that C occurred before E and is correlated with E.', 0),
(502, '"C caused E" means that if C had not occurred, E would not have occurred (under the same circumstances).', 1),
(502, '"C caused E" means that there is a mechanism connecting C to E.', 0),

(503, 'Yes — the placebo effect is so powerful that it can invalidate even randomized trials.', 0),
(503, 'Yes — double-blinding is imperfect and some placebo effects will persist in the treatment group.', 0),
(503, 'No — randomization and blinding control for placebo effects by ensuring the control group also experiences placebo conditions identically.', 1),
(503, 'The objection is well-founded only if the effect size is small.', 0);
`;export{e as default};
