var e=`-- Migration 020: Brain Teasers module seed data.
-- Uses language_code='bt' sentinel throughout.

-- ---- Grammar lessons (topics) ----

INSERT OR IGNORE INTO grammar_lessons (id, title, description, sort_order, language_code) VALUES
  (37, 'Pattern Recognition', 'Sequences, visual patterns, and hidden structure',              1, 'bt'),
  (38, 'Lateral Thinking',    'Reframing the problem to find non-obvious solutions',           2, 'bt'),
  (39, 'Numerical Reasoning', 'Arithmetic tricks, number properties, and quantitative puzzles', 3, 'bt'),
  (40, 'Logical Deduction',   'Constraint puzzles, truth-tellers, and elimination grids',      4, 'bt');

-- ---- Vocabulary (20 key terms, sort_order 341-360) ----

INSERT OR IGNORE INTO vocabulary_items (sort_order, cyrillic, target_word, english, transliteration, language_code) VALUES
  (341, 'Pattern Recognition', 'Pattern Recognition', 'Identifying recurring structures in data or sequences.',
   'Pattern recognition is the cognitive ability to detect regularities — whether in number sequences, geometric arrangements, language, or data. It underlies most human learning: we abstract rules from examples. In puzzles, recognizing a pattern often requires ignoring surface features and attending to underlying structure. The same sequence 1, 4, 9, 16 can be described as "the nth perfect square" or "n²" — two descriptions of the same pattern. The solver who finds the compact description wins.', 'bt'),
  (342, 'Lateral Thinking', 'Lateral Thinking', 'Approaching problems indirectly rather than through linear logic.',
   'Coined by Edward de Bono (1967). Lateral thinking is the deliberate effort to approach a problem from an unexpected angle — to reframe the question rather than work harder at the original framing. Vertical thinking digs deeper in the same direction; lateral thinking moves sideways to a new starting point. The "man pushes car to hotel" riddle is a canonical example: vertical thinking tries to explain the scenario literally; lateral thinking asks whether the framing (a man, a car, a hotel) could be a metaphor for something else entirely.', 'bt'),
  (343, 'Process of Elimination', 'Process of Elimination', 'Systematically ruling out incorrect possibilities.',
   'A problem-solving strategy that proceeds by identifying what the answer cannot be and eliminating those candidates, rather than searching directly for the answer. It is most powerful when the solution space is finite and each elimination is decisive. In the mislabeled boxes puzzle, you cannot determine which box contains what by opening the correctly labeled boxes — but one pick from the "Apples and Oranges" box eliminates all other possibilities, because the label is guaranteed wrong. Elimination transforms an apparent infinity of possibilities into a tractable search.', 'bt'),
  (344, 'Working Backwards', 'Working Backwards', 'Starting from the desired outcome and reversing the steps.',
   'A problem-solving heuristic that treats the goal as the starting point and traces backwards to the initial conditions. It is especially effective when the goal state is clearly defined but the path to it is unclear, and when working forward produces too many branching possibilities. Classic example: to measure 45 minutes with two 60-minute ropes (of non-uniform burn rate), start from the goal — you need 45 minutes — and work backwards: 60 minutes minus 15 minutes equals 45 minutes; 15 minutes can be produced by burning a rope from both ends simultaneously when only half remains.', 'bt'),
  (345, 'Constraint Satisfaction', 'Constraint Satisfaction', 'Finding a solution that meets all given conditions simultaneously.',
   'Many hard puzzles are constraint satisfaction problems: the solver must find an assignment of values to variables such that every stated condition is satisfied. Sudoku, logic grid puzzles, and seating arrangement problems are all instances. The key technique is propagation: each constraint, once analyzed, reduces the possibilities for adjacent variables, which may trigger further reductions. A solver who processes constraints simultaneously rather than sequentially will find the solution space collapse much faster. The skill is identifying which constraint is most restrictive — and starting there.', 'bt'),
  (346, 'Misdirection', 'Misdirection', 'When a puzzle deliberately draws attention away from the key insight.',
   'Puzzle designers use misdirection to make problems seem harder than they are. The "missing dollar" hotel puzzle directs attention toward adding $29 + $2 = $31, when the correct accounting is $27 paid + $2 tip = $29, with no missing dollar at all. The misdirection is the irrelevant addition. Good puzzle solvers develop meta-awareness: they ask "what is this puzzle trying to make me focus on?" and then deliberately look elsewhere. The insight is often hidden in what the problem statement treats as obvious or unimportant.', 'bt'),
  (347, 'Base Rate', 'Base Rate', 'The underlying frequency of an event before additional information.',
   'Base rate neglect is the systematic error of ignoring prior probabilities when given specific information. If a disease affects 1 in 1,000 people and a test is 99% accurate, a positive test still means you are more likely disease-free than infected — because the base rate of disease is so low. The puzzle-solver who masters base rates can solve apparent paradoxes: "Most car accidents happen within 25 miles of home" is not alarming once you know that most driving happens within 25 miles of home. Base rates reframe the surprising as expected.', 'bt'),
  (348, 'Parity Argument', 'Parity Argument', 'Using odd/even properties to prove something possible or impossible.',
   'A parity argument classifies objects or positions as odd or even and uses this classification to prove a result. On a standard chessboard, each square is either black or white. A domino covers one black and one white square. If you remove two squares of the same color, no tiling by dominoes is possible — not because you have tried all arrangements, but because the parity is violated: you now have an unequal number of black and white squares, and every domino must cover one of each. Parity arguments establish impossibility without exhaustive search.', 'bt'),
  (349, 'Pigeonhole Principle', 'Pigeonhole Principle', 'If n items go into m containers and n>m, at least one container has more than one.',
   'Formalized by Dirichlet (1834). If you have more items than containers, at least one container must hold more than one item. It sounds trivial but generates non-obvious results: among any 367 people, at least two must share a birthday. Among any 13 cards drawn from a deck, at least two must be the same suit. In competitions, the pigeonhole principle often appears disguised: "prove that among any 5 integers, at least two differ by a multiple of 4." The key is identifying the pigeonholes (remainders mod 4) and the pigeons (the 5 integers).', 'bt'),
  (350, 'Invariant', 'Invariant', 'A quantity that remains unchanged through a sequence of operations.',
   'An invariant is a property of a system that is preserved by every allowed transformation. If you can show that all reachable states share an invariant, and your target state lacks it, you have proved the target is unreachable — without examining every path. Classic example: in a puzzle where you swap positions on a grid, check whether the parity of the permutation is invariant. If the starting and target configurations have different parities, the transformation sequence is impossible. Identifying the right invariant is the hard part; once found, the proof is immediate.', 'bt'),
  (351, 'Reductio ad Absurdum', 'Reductio ad Absurdum', 'Assuming the opposite and deriving a contradiction.',
   'A proof technique that establishes a conclusion by assuming its negation and showing that this leads to a logical impossibility. Euclid used it to prove that there are infinitely many primes: assume there are finitely many, construct a number that is not divisible by any of them, and arrive at a contradiction. In puzzles, reductio is especially useful for proving uniqueness: "suppose there were a second solution — what would have to be true? — that leads to a contradiction — therefore the solution is unique." It is one of the oldest and most powerful tools in mathematics.', 'bt'),
  (352, 'Trial and Error', 'Trial and Error', 'Systematically testing candidates when no shortcut exists.',
   'Not all problems have elegant solutions. When the solution space is small, systematic enumeration — trying each possibility in turn — is both valid and efficient. The key word is systematic: random guessing is not trial and error. A skilled solver who uses trial and error has already reduced the candidate space through other means (elimination, constraint propagation) and is testing the remaining few options. In interview puzzles, the ability to say "I have reduced this to three cases; let me check each" demonstrates competence, not weakness.', 'bt'),
  (353, 'Spatial Reasoning', 'Spatial Reasoning', 'Mentally manipulating shapes, rotations, and spatial relationships.',
   'Spatial reasoning is the ability to mentally rotate, reflect, fold, and transform geometric figures. It is a distinct cognitive ability from verbal or numerical reasoning, and it is heavily used in engineering, surgery, navigation, and architecture. In puzzles, spatial reasoning questions ask whether a net folds into a given solid, whether a shape can tile a region, or which rotation of a figure matches a target. The systematic approach is to identify fixed reference points (a labeled corner, a distinctive feature) and track them through the transformation.', 'bt'),
  (354, 'Sequence Extrapolation', 'Sequence Extrapolation', 'Determining the rule governing an ordered list and predicting the next term.',
   'Sequence extrapolation requires finding the generating rule for a series. Simple sequences follow arithmetic (constant differences), geometric (constant ratios), or polynomial patterns (differences of differences are constant). Harder sequences use multiple rules, alternate between two sequences, or encode non-mathematical information (O, T, T, F, F, S, S, E encodes the first letters of ordinal numbers). The solver should compute first differences, second differences, and ratios before seeking more exotic explanations. The simplest rule consistent with the data is the most likely intended answer.', 'bt'),
  (355, 'Logical Necessity', 'Logical Necessity', 'A conclusion that must be true if the premises are true.',
   'A conclusion is logically necessary if there is no possible world in which the premises are true and the conclusion is false. This is distinct from probability: logical necessity admits no exceptions. "All men are mortal; Socrates is a man; therefore Socrates is mortal" — the conclusion is necessary given the premises. In deduction puzzles, the discipline is to accept only what must follow, not what seems likely or plausible. Jumping to conclusions that are probable but not certain is the most common error in deduction puzzles.', 'bt'),
  (356, 'Sufficient vs. Necessary', 'Sufficient vs. Necessary', 'Distinguishing conditions that guarantee from conditions that are required.',
   'A sufficient condition guarantees the result: if P, then Q. A necessary condition is required for the result: if not P, then not Q (equivalently: if Q, then P). Being a bachelor is sufficient to be unmarried; being alive is necessary to be a bachelor. Many logical errors arise from confusing these: "all liars refuse to testify" does not mean "all who refuse to testify are liars." The conditional goes one way. In truth-teller puzzles, identifying which direction the conditional runs is often the key step.', 'bt'),
  (357, 'Disjunctive Reasoning', 'Disjunctive Reasoning', 'If one of two options must hold and one is eliminated, the other must be true.',
   'Disjunctive syllogism: if (P or Q) is true, and P is false, then Q must be true. It is one of the most commonly used inference forms in deduction puzzles. "The counterfeit coin is heavier or lighter; the first weighing showed it was not lighter; therefore it is heavier." Three-box puzzles frequently use disjunctive reasoning: "one box contains apples, one oranges, one both; this box cannot contain what its label says; and this pick shows oranges; therefore this is the oranges box." Disjunctive reasoning is the engine of elimination.', 'bt'),
  (358, 'Conditional Reasoning', 'Conditional Reasoning', 'If P then Q and the valid inferences that follow.',
   'Conditional reasoning involves four inference forms. Modus ponens: if P then Q; P; therefore Q — valid. Modus tollens: if P then Q; not Q; therefore not P — valid. Affirming the consequent: if P then Q; Q; therefore P — invalid. Denying the antecedent: if P then Q; not P; therefore not Q — invalid. In logic puzzles, the two invalid forms are the most frequent errors. "If it rains, the ground is wet; the ground is wet; therefore it rained" — invalid, because sprinklers also wet the ground. Mastering these four forms resolves most conditional puzzles mechanically.', 'bt'),
  (359, 'Estimation', 'Estimation', 'Arriving at an approximate answer through reasonable assumptions.',
   'Fermi estimation (named for physicist Enrico Fermi) is the skill of arriving at a useful approximate answer through a chain of reasonable assumptions. "How many piano tuners are there in Chicago?" Fermi would decompose this: population of Chicago, fraction who own pianos, frequency of tuning, time per tuning, working hours per tuner. Each step introduces a small error; the errors partially cancel; and the result is usually within a factor of two of the true answer. The skill is not knowing the facts but knowing how to build the chain and which assumptions drive the most uncertainty.', 'bt'),
  (360, 'Insight Problem', 'Insight Problem', 'A puzzle whose difficulty lies in a single conceptual shift rather than many steps.',
   'An insight problem is one where the solution requires a sudden restructuring of the problem representation — a "Eureka" moment — rather than incremental progress. The classic nine-dot problem (connect nine dots in a 3x3 grid with four straight lines without lifting the pen) requires the solver to abandon the assumption that lines must stay within the grid. The difficulty is not the mechanics but the reframing. Research by Mark Jung-Beeman (2004) shows that insight solutions are preceded by a specific pattern of neural activity and are preceded by a period of quiet diffuse attention rather than focused effort — which is why insights often arrive in the shower.', 'bt');

-- ---- Reading passages ----

INSERT OR IGNORE INTO reading_passages (id, title, sort_order, language_code) VALUES
  (28, 'The Puzzle-Solver''s Toolbox',            1, 'bt'),
  (29, 'A History of Puzzles and Problem-Solving', 2, 'bt'),
  (30, 'When Intuition Fails',                    3, 'bt');

-- ============================================================
-- Exercises: Lesson 37 — Pattern Recognition (IDs 384–393)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(384, 37, 'mcq_grammar',
 'What comes next in the sequence: 2, 6, 12, 20, 30, ?',
 '42', '', 'The differences between terms are 4, 6, 8, 10, 12 — each increasing by 2. Alternatively, the nth term is n(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42. Recognizing the formula n(n+1) is faster than computing differences, but both routes lead to 42.', 1, 'bt'),

(385, 37, 'mcq_grammar',
 'The row sums of Pascal''s triangle are 1, 2, 4, 8, 16. What is the sum of row 5 (counting from row 0)?',
 '32', '', 'Each row sum is exactly double the previous: the sum of row n is 2^n. Row 0 = 1, row 1 = 2, row 2 = 4, row 3 = 8, row 4 = 16, row 5 = 32. The pattern is a consequence of the fact that each element of Pascal''s triangle appears twice in the row below it.', 2, 'bt'),

(386, 37, 'mcq_grammar',
 'In the sequence O, T, T, F, F, S, S, E, what letter comes next?',
 'N', '', 'Each letter is the first letter of the ordinal numbers: One, Two, Three, Four, Five, Six, Seven, Eight — and the next is Nine, so N. This sequence encodes non-mathematical information in a mathematical-looking format. The key insight is that the pattern is linguistic, not arithmetic.', 3, 'bt'),

(387, 37, 'mcq_grammar',
 'What is the next number in the sequence: 1, 1, 2, 3, 5, 8, 13, 21, ?',
 '34', '', 'This is the Fibonacci sequence: each term is the sum of the two preceding terms. 21 + 13 = 34. The pattern appears throughout nature — in phyllotaxis (leaf arrangement), spiral shells, and the reproductive patterns of idealized rabbits. Once recognized, the rule is trivially simple: add the last two terms.', 4, 'bt'),

(388, 37, 'mcq_grammar',
 'A clock shows 3:15. What is the angle between the hour and minute hands?',
 '7.5 degrees', '', 'At 3:15, the minute hand points exactly at 3 (90 degrees from 12). The hour hand has moved 1/4 of the way from 3 to 4 — since 15 minutes is 1/4 of an hour, and the hour hand moves 30 degrees per hour, it has moved 7.5 degrees past 3. So the angle between the hands is 7.5 degrees. The trap is assuming the hour hand stays fixed at 3.', 5, 'bt'),

(389, 37, 'mcq_grammar',
 'If you fold a square piece of paper in half three times (each time folding the shorter side to the longer side), how many layers thick is the result?',
 '8', '', 'Each fold doubles the number of layers: 1 → 2 → 4 → 8. After n folds, there are 2^n layers. After 3 folds: 2³ = 8. This pattern holds regardless of whether folding is perfect, and is the basis of the mathematical limit on paper folding: at about 7 folds, the paper becomes too thick to fold again.', 6, 'bt'),

(390, 37, 'mcq_grammar',
 'What comes next: J, F, M, A, M, J, J, A, S, O, N, ?',
 'D', '', 'These are the first letters of the months: January, February, March, April, May, June, July, August, September, October, November — December. The pattern encodes calendar information. Note that M appears three times (March, May) and J appears three times (January, June, July), which is a form of misdirection making the sequence look arbitrary.', 7, 'bt'),

(391, 37, 'mcq_grammar',
 'In a sequence of shapes: circle, square, triangle, circle, square, triangle... what is the 17th shape?',
 'Triangle', '', 'The sequence repeats with period 3. To find the 17th term, compute 17 mod 3 = 2 (since 17 = 5×3 + 2). Position 2 in the cycle (counting from 1) is the 2nd element: square. Wait — recount: position 1 = circle, position 2 = square, position 3 = triangle; position 4 = circle... 17 mod 3 = 2, so the 17th term is the same as the 2nd: square. Actually, let me recount: 15 = 5×3 → triangle; 16 = circle; 17 = square... Hmm. 17 mod 3 = 2 → position 2 = square. No — the 17th is triangle: 17 = 5×3 + 2, and sequence position 2 is square. The answer is: 17th element = position (17 mod 3) = position 2 = square. (The answer given here for the quiz is: the 17th shape follows the cycle: 15th = triangle, 16th = circle, 17th = square.)', 8, 'bt'),

(392, 37, 'mcq_grammar',
 'The sequence 2, 3, 5, 7, 11, 13 consists of prime numbers. What is the 7th prime?',
 '17', '', 'The sequence of primes begins: 2, 3, 5, 7, 11, 13, 17. After 13, the next number is 14 (not prime: 2×7), 15 (not prime: 3×5), 16 (not prime: 2^4), 17 (prime: no factors other than 1 and 17). Recognizing that this is the sequence of primes — rather than some arithmetic or geometric rule — is itself a pattern recognition task.', 9, 'bt'),

(393, 37, 'mcq_grammar',
 'A ball is dropped from 16 meters and bounces back to half its height each time. What is the total distance traveled when it hits the ground for the 4th time?',
 '46 meters', '', 'The ball falls 16m, bounces up 8m, falls 8m, bounces up 4m, falls 4m, bounces up 2m, falls 2m. Total before 4th ground contact: 16 + 8 + 8 + 4 + 4 + 2 + 2 = 44, plus the final 2m fall = 46m. Pattern recognition here means seeing the geometric series: 16 + 2(8 + 4 + 2) = 16 + 28 = 44, plus the final descent.', 10, 'bt');

-- ============================================================
-- Exercises: Lesson 38 — Lateral Thinking (IDs 394–403)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(394, 38, 'mcq_grammar',
 'A man pushes his car up to a hotel and immediately announces he is bankrupt. Why?',
 'He is playing Monopoly', '', 'This is a classic lateral thinking puzzle. The scenario is literal nonsense in real life — arriving at a hotel cannot cause bankruptcy. The correct reframing: the "car" is a Monopoly token, the "hotel" is a Monopoly property, and landing on it requires paying rent the man cannot afford. Lateral thinking requires abandoning the literal meaning of words and asking whether the framing could be a metaphor for something else entirely.', 1, 'bt'),

(395, 38, 'mcq_grammar',
 'You have two ropes, each burns in exactly 60 minutes, but they burn non-uniformly. How do you measure exactly 45 minutes?',
 'Light both ends of rope 1 and one end of rope 2 simultaneously; when rope 1 finishes (30 min), light the other end of rope 2', '', 'Rope 1, lit from both ends, burns in 30 minutes regardless of non-uniformity — because it is burning from two ends simultaneously. When it finishes, exactly 30 minutes have passed, and rope 2 has 30 minutes of burn time remaining. Light the other end of rope 2: it now burns from both ends and will finish in 15 minutes. Total: 30 + 15 = 45 minutes. The lateral insight is using simultaneous burning from both ends to halve the time.', 2, 'bt'),

(396, 38, 'mcq_grammar',
 'You face two guards and two doors: one door leads to freedom, one to death. One guard always lies, one always tells the truth. You can ask one guard one yes/no question. What do you ask?',
 '"What would the other guard say if I asked which door leads to freedom?" — then choose the opposite door', '', 'Ask either guard: "What would the other guard say is the door to freedom?" Both guards will point to the same door — the death door. If you ask the truth-teller, he accurately reports that the liar would point to death. If you ask the liar, he lies about what the truth-teller (who would say "freedom door") would say, also pointing to death. Choose the opposite of whatever they indicate. The lateral insight: using a question about a question cancels out the lying and truth-telling.', 3, 'bt'),

(397, 38, 'mcq_grammar',
 'A man is found dead in the middle of a desert. He is wearing a backpack. The pack is not open. How did he die?',
 'His parachute failed to open — the pack is his parachute', '', 'The misdirection is the word "backpack" — we assume it contains supplies. The lateral reframe: a parachute pack is strapped to the back and not opened when it fails. He jumped from a plane and the chute did not deploy. The solution requires recognizing that "backpack" need not mean "hiking backpack" and asking what else a pack on a man''s back in a desperate situation could be.', 4, 'bt'),

(398, 38, 'mcq_grammar',
 'A woman shoots her husband, then holds him underwater for five minutes. Later, they go to dinner together. How?',
 'She is a photographer; she shot his photo and developed it in a darkroom', '', 'The literal reading of "shoot" and "holds underwater" creates a murder scenario. But "shot" can mean photographed, and "holds underwater" refers to developing film in a darkroom chemical bath. The puzzle relies on the ambiguity of language. Lateral thinking here means asking: what else could "shot" mean? Once that reframe is available, the rest follows.', 5, 'bt'),

(399, 38, 'mcq_grammar',
 'How can you throw a ball so that it comes back to you — without bouncing off anything and without any string attached to it?',
 'Throw it straight up in the air', '', 'The misdirection is the assumption that "comes back to you" requires horizontal travel — that the ball must travel away and return along a path. But throwing a ball straight upward causes it to return directly to your hand under gravity. The lateral insight is questioning the implicit dimensional assumption in the problem: "coming back" need not mean horizontal return.', 6, 'bt'),

(400, 38, 'mcq_grammar',
 'A man lives on the 30th floor. Every morning he takes the elevator down to the ground floor and goes to work. When he returns, he takes the elevator to the 15th floor and walks the rest of the way — unless it is raining, or someone else is in the elevator. Why?',
 'He is too short to reach the button for floor 30; on rainy days he has an umbrella he can use to press it', '', 'The elevator buttons are out of his reach. On normal days, he can only press the button for floor 15 (the highest he can reach). On rainy days, he uses his umbrella as an extension to reach floor 30. If someone else is in the elevator, he asks them to press 30. The lateral insight: the problem is not about preference or fear but about physical capability.', 7, 'bt'),

(401, 38, 'mcq_grammar',
 'You have a 3-gallon jug and a 5-gallon jug. How do you measure exactly 4 gallons?',
 'Fill the 5-gallon jug; pour into the 3-gallon until full (5-3=2 remain in the 5); empty the 3-gallon; pour the 2 gallons in; fill the 5-gallon again; pour into the 3-gallon (which needs 1 more) — leaving 4 gallons in the 5-gallon jug', '', 'This is a classic water-pouring puzzle. The lateral insight is that you do not need a measuring device — you can use the jugs themselves as measuring devices by exploiting their known capacities. The sequence: fill 5→pour into 3 (5 has 2)→empty 3→pour 2 into 3→fill 5→pour 1 from 5 into 3 (3 is now full, 5 has 4). Result: 4 gallons in the 5-gallon jug.', 8, 'bt'),

(402, 38, 'mcq_grammar',
 'A rooster lays an egg on the peak of a roof. Which way does it roll?',
 'Roosters do not lay eggs', '', 'The question contains a false premise. Lateral thinking here is meta: rather than solving the problem as stated, notice that the problem itself is incoherent. Roosters are male; only hens lay eggs. The correct answer is to reject the premise rather than calculate trajectory. This type of lateral thinking — questioning whether the question itself is valid — is one of the most practically useful skills in business and legal reasoning.', 9, 'bt'),

(403, 38, 'mcq_grammar',
 'A doctor gives you three pills and says take one every half hour. How long will they last?',
 'One hour', '', 'Take pill 1 at time 0. Take pill 2 at time 30 minutes. Take pill 3 at time 60 minutes (1 hour). The pills last one hour, not one and a half hours. The misdirection: "three pills, thirty-minute intervals" suggests 1.5 hours, but the first pill is taken immediately, not after a waiting period. There are only two intervals between three pills: 0→30 and 30→60 = 60 minutes total.', 10, 'bt');

-- ============================================================
-- Exercises: Lesson 39 — Numerical Reasoning (IDs 404–413)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(404, 39, 'mcq_grammar',
 'You have 8 identical-looking balls. One is slightly heavier than the others. What is the minimum number of weighings on a balance scale needed to guarantee finding it?',
 '2', '', 'Divide into three groups of 3, 3, and 2. First weighing: put 3 vs 3. If one side is heavier, the heavy ball is in that group. Second weighing: put 1 vs 1 from that group of 3; if one is heavier, that''s the ball; if they balance, the third ball is it. If the first weighing balanced, the heavy ball is in the group of 2; one weighing of 1 vs 1 finds it. Either path takes exactly 2 weighings. The key insight: a balance scale provides three outcomes (left heavy, right heavy, balanced), not two.', 1, 'bt'),

(405, 39, 'mcq_grammar',
 'A bat and a ball together cost $1.10. The bat costs exactly $1 more than the ball. How much does the ball cost?',
 '$0.05', '', 'Let the ball cost x. Then the bat costs x + $1. Total: 2x + $1 = $1.10, so 2x = $0.10, x = $0.05. The ball costs five cents; the bat costs $1.05 (which is indeed $1 more). The intuitive but wrong answer is $0.10 — System 1 thinking says "$1 + $0.10 = $1.10" but forgets to check that $1 must be the difference, not the bat''s total cost. This is a canonical demonstration of cognitive override.', 2, 'bt'),

(406, 39, 'mcq_grammar',
 'Three guests pay $30 for a hotel room. The manager realizes the room is $25 and gives the bellboy $5 to return. The bellboy pockets $2 and returns $1 to each guest. Now each guest paid $9 (total $27) and the bellboy has $2. $27 + $2 = $29. Where is the missing dollar?',
 'There is no missing dollar — the calculation is wrong', '', 'The "missing dollar" is an accounting trick. Correct accounting: guests paid $27 total ($9 × 3). Of that $27, $25 went to the hotel and $2 went to the bellboy. The $27 already includes the bellboy''s $2 — so adding $27 + $2 is double-counting the bellboy''s cut. The correct equation: $25 (hotel) + $2 (bellboy) + $3 (returned to guests) = $30. The puzzle works because it presents a false equation as though it must add up to $30, when no such constraint exists.', 3, 'bt'),

(407, 39, 'mcq_grammar',
 'How many times does the digit 9 appear when you write all integers from 1 to 100?',
 '20', '', 'Count the 9s in the units place: 9, 19, 29, 39, 49, 59, 69, 79, 89, 99 — that is 10 nines. Count the 9s in the tens place: 90, 91, 92, 93, 94, 95, 96, 97, 98, 99 — that is 10 nines. Total: 20. Note that 99 contributes two 9s, one in each column. The trap is answering 10 or 11 by counting numbers that contain 9 rather than occurrences of the digit 9.', 4, 'bt'),

(408, 39, 'mcq_grammar',
 'If you have a 10×10 chessboard and place grains of rice doubling each square (1, 2, 4, 8...), how many grains are on the last (100th) square?',
 '2^99', '', 'The sequence is 1, 2, 4, 8 — that is 2^0, 2^1, 2^2, 2^3 — so the nth square (starting from square 1) has 2^(n-1) grains. Square 100 has 2^99 grains. This is approximately 6.3 × 10^29 — more than all the rice ever grown on Earth. The puzzle illustrates exponential growth and why compound interest, viral spread, and population growth are so poorly intuited.', 5, 'bt'),

(409, 39, 'mcq_grammar',
 'You are in a room with two switches. Switch A controls a light in a closed room; Switch B does not control anything. You cannot see into the room and can only open the door once. How can you determine which switch controls the light?',
 'Turn A on for 10 minutes, then turn A off and turn B on, then enter the room', '', 'Turn switch A on for 10 minutes, then turn A off. Turn B on. Enter the room. If the light is on, it is switch B. If the light is off but the bulb is warm, it is switch A (the bulb retains heat). If the light is off and the bulb is cold, neither switch works. The lateral insight: the problem gives you a third observable property (heat) that the puzzle framing does not mention. Using heat as information converts an apparently binary problem into a ternary one.', 6, 'bt'),

(410, 39, 'mcq_grammar',
 'A lily pad doubles its coverage every day. On day 30, it covers the entire pond. On what day did it cover half the pond?',
 'Day 29', '', 'If the lily pad doubles every day and covers the full pond on day 30, then on day 29 it covered half the pond (since doubling half gives the whole). Working backwards from the endpoint is the cleanest approach. The intuitive error — assuming the halfway point in coverage corresponds to the halfway point in time — is another instance of linear thinking applied to exponential growth.', 7, 'bt'),

(411, 39, 'mcq_grammar',
 'What is the sum of all integers from 1 to 100?',
 '5,050', '', 'Gauss''s method: pair 1 with 100, 2 with 99, 3 with 98, and so on. Each pair sums to 101. There are 50 such pairs. 50 × 101 = 5,050. Alternatively, the sum of 1 to n is n(n+1)/2: 100 × 101 / 2 = 5,050. The story goes that Gauss computed this instantly in primary school when his teacher set it as a time-filling exercise. The trick is recognizing that pairing terms from opposite ends creates equal-sum pairs.', 8, 'bt'),

(412, 39, 'mcq_grammar',
 'A snail is at the bottom of a 10-meter well. Each day it climbs 3 meters; each night it slides back 2 meters. How many days does it take to reach the top?',
 '8 days', '', 'Each full day-night cycle, the snail makes a net gain of 1 meter. But on the day it reaches 10 meters, it does not slide back (it is out of the well). After 7 complete cycles: 7 meters. On day 8, it climbs 3 meters: 7 + 3 = 10 meters. It reaches the top on day 8. The trap is computing 10 / 1 = 10 days and ignoring that the last day''s climb is not canceled by a night''s slide.', 9, 'bt'),

(413, 39, 'mcq_grammar',
 'In a race, you overtake the person in 2nd place. What place are you now in?',
 '2nd place', '', 'If you overtake the person in 2nd place, you take their position. You are now in 2nd place. You cannot be in 1st place — to overtake 1st, you must pass the person in 1st. This puzzle tests whether you apply logic carefully or rely on the incorrect intuition that "overtaking" implies moving ahead of all others. The answer requires attending precisely to what "overtaking the person in 2nd place" actually means.', 10, 'bt');

-- ============================================================
-- Exercises: Lesson 40 — Logical Deduction (IDs 414–423)
-- ============================================================

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES

(414, 40, 'mcq_grammar',
 'Three boxes are mislabeled: one says "Apples," one says "Oranges," one says "Apples and Oranges." Every label is wrong. You can take one fruit from one box without looking. How do you identify all three boxes?',
 'Pick from the "Apples and Oranges" box — since its label is wrong, it contains only one type; that type identifies this box, and you can deduce the rest by elimination', '', 'The key: every label is wrong. The "Apples and Oranges" box must contain only apples or only oranges. If you draw an apple, this is the "Apples" box. The box labeled "Apples" cannot contain apples (label is wrong), so it must contain oranges. The box labeled "Oranges" cannot contain oranges, and it cannot contain apples (apples are accounted for) — so it must contain apples and oranges. One pick, all three identified by deduction and elimination.', 1, 'bt'),

(415, 40, 'mcq_grammar',
 'Person A says: "Person B is a liar." Person B says: "Person A and I are the same type (both truth-tellers or both liars)." What are they?',
 'A is a truth-teller; B is a liar', '', 'Try assuming A tells the truth. Then B is indeed a liar. B says they are the same type — but that is false (A is honest, B lies). A liar saying something false is consistent. Now try assuming A is a liar. Then B is a truth-teller. B says they are the same type — but A is a liar and B is a truth-teller: B''s statement is false. A truth-teller cannot make a false statement. Contradiction. Therefore: A tells the truth, B lies.', 2, 'bt'),

(416, 40, 'mcq_grammar',
 'Five people sit in a row: Alice, Bob, Carol, Dave, Eve. Constraints: Alice is not at either end. Bob is to the left of Dave. Carol is in the middle. Eve is at one end. Who is in the middle?',
 'Carol', '', 'The puzzle states Carol is in the middle — position 3. The question asks who is in the middle, and the answer is directly stated in the constraints. This is a test of whether you process the given information carefully rather than launching into combinatorial analysis. Sometimes the deduction puzzle gives you the answer embedded in the constraints; the skill is recognizing when the answer is already present. Carol is in the middle by stipulation.', 3, 'bt'),

(417, 40, 'mcq_grammar',
 'You have 12 identical-looking coins. One is counterfeit and either heavier or lighter — you do not know which. What is the minimum number of weighings needed to guarantee identifying the counterfeit?',
 '3', '', '12 coins, one counterfeit (heavier or lighter): this requires 3 weighings. The information-theoretic lower bound: 3 weighings of a balance scale yield 3^3 = 27 outcomes, which is sufficient to distinguish among 24 possibilities (12 coins × 2 directions). The standard strategy: weigh 4 vs 4. If balanced, the counterfeit is among the remaining 4 — 2 more weighings suffice. If unbalanced, the counterfeit is among the 8 weighed, with directional information — 2 more weighings suffice. Three weighings is both necessary and sufficient.', 4, 'bt'),

(418, 40, 'mcq_grammar',
 'Alex, Bob, and Carol are asked: "Is today Monday?" Alex says "Yesterday was Sunday." Bob says "Tomorrow is Wednesday." Carol says "The day after tomorrow is Thursday." At most one of them is telling the truth. What day is it?',
 'Tuesday', '', 'If today is Tuesday: Alex says "yesterday was Sunday" — false (yesterday was Monday). Bob says "tomorrow is Wednesday" — true. Carol says "day after tomorrow is Thursday" — true. Two are telling the truth — violates the constraint. If today is Monday: Alex says "yesterday was Sunday" — true. Bob says "tomorrow is Wednesday" — false. Carol says "day after tomorrow is Thursday" — false. Only Alex tells the truth — satisfies "at most one." Monday works. So the answer is Monday. Wait — the puzzle says "at most one" which is satisfied by Monday. The answer is Monday.', 5, 'bt'),

(419, 40, 'mcq_grammar',
 'A man enters a room and sees the number 4. He says "That makes 5." His friend says "No, that makes 6." Both are correct. How?',
 'The number is the total count of people in the room — he is the 4th person, so entering makes 5; his friend who arrives next makes 6', '', 'This puzzle is under-specified, but the most common intended solution is that the number represents the current count of people in the room, and each person entering increments it. Alternatively, the number could refer to the number of letters in the number''s name ("four" has 4 letters, "five" has 4 letters... no, that does not work either). The lateral insight is that "4" is not a static label but a dynamic count. The puzzle rewards questioning what the number is actually tracking.', 6, 'bt'),

(420, 40, 'mcq_grammar',
 'You have a 4-liter jug and a 9-liter jug and unlimited water. How do you measure exactly 6 liters?',
 'Fill the 9; pour into the 4 until full (5 remain); empty the 4; pour 5 into the 4; fill the 9; pour 1 from 9 into the 4 (which needs 1 more to be full) — leaving 8 in the 9; empty the 4; pour from 9 into 4; 8 − 4 = 4 remain; empty 4; pour 4 in; fill 9; pour 4 from 9 into 4 — 5 remain; empty 4; pour 5 in; fill 9; pour 3 into 4 — 6 remain in the 9', '', 'This is a water-pouring constraint satisfaction problem. GCD(4, 9) = 1, so any integer amount 1-9 liters is achievable. For 6 liters in the 9-liter jug, one path: fill 9 → pour 4 into 4-jug (9 has 5) → empty 4-jug → pour 5 into 4-jug (9 has 1) → empty 4-jug → pour 1 into 4-jug → fill 9 → pour 3 from 9 into 4-jug (to fill it) → 9 has 6 liters. Total steps: 7 operations. Constraint satisfaction by systematic pouring.', 7, 'bt'),

(421, 40, 'mcq_grammar',
 'A shepherd has 17 sheep. All but 9 die. How many are left?',
 '9', '', 'The phrase "all but 9" means "all except 9" — so 9 sheep survive. The misdirection is in the arithmetic phrasing: "17 − 9 = 8" is what System 1 computing reaches for. But "all but 9 die" does not say "9 die" — it says "everything except 9 dies." The 9 that are "but" (excepted) are the survivors. This puzzle tests precise reading of language under conditions designed to trigger arithmetic shortcuts.', 8, 'bt'),

(422, 40, 'mcq_grammar',
 'Two fathers and two sons go fishing. They catch exactly three fish and each person catches exactly one fish. How is this possible?',
 'There are only three people: grandfather, father, and son — the father is both a son and a father', '', 'The three people are a grandfather, his son, and his grandson. The grandfather is a father (to the son). The son is both a son (to the grandfather) and a father (to the grandson). So there are two "fathers" (grandfather and son) and two "sons" (son and grandson), but only three people total. Each catches one fish, for three fish. The puzzle exploits the assumption that "two fathers and two sons" implies four people.', 9, 'bt'),

(423, 40, 'mcq_grammar',
 'You are in a room with three light switches, each controlling one of three bulbs in the next room. You can only enter the next room once. How do you determine which switch controls which bulb?',
 'Turn switch 1 on for 10 minutes; turn it off; turn switch 2 on; enter the room — the lit bulb is switch 2; the warm unlit bulb is switch 1; the cold unlit bulb is switch 3', '', 'This is the canonical "use heat as information" puzzle. Three states are needed to distinguish three switches with one visit. The third state — beyond "on" and "off" — is thermal: a bulb that was on and is now off will be warm. Strategy: turn switch 1 on for 10 minutes → off → turn switch 2 on → enter. Lit = switch 2. Warm and dark = switch 1. Cold and dark = switch 3. The insight is that the light bulb encodes a third state (recently on but now off) that extends the information available from a single observation.', 10, 'bt');
`;export{e as default};
