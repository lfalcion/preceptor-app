var e=`-- Migration 033: Seed exercise_options for Brain Teasers module (lesson IDs 37-40, exercise IDs 384-423).
-- These rows were absent from migration 020; this backfill is safe on existing databases (INSERT OR IGNORE).

-- ============================================================
-- Lesson 37 — Pattern Recognition (exercises 384–393)
-- ============================================================

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(384, '42',   1), (384, '36',   0), (384, '40',   0), (384, '44',   0),
(385, '32',   1), (385, '16',   0), (385, '64',   0), (385, '30',   0),
(386, 'N',    1), (386, 'E',    0), (386, 'T',    0), (386, 'S',    0),
(387, '34',   1), (387, '33',   0), (387, '35',   0), (387, '42',   0),
(388, '7.5 degrees',  1), (388, '0 degrees',   0), (388, '15 degrees',  0), (388, '30 degrees',  0),
(389, '8',    1), (389, '6',    0), (389, '16',   0), (389, '3',    0),
(390, 'D',    1), (390, 'O',    0), (390, 'J',    0), (390, 'A',    0),
(391, 'Triangle', 1), (391, 'Circle', 0), (391, 'Square', 0), (391, 'Pentagon', 0),
(392, '17',   1), (392, '15',   0), (392, '19',   0), (392, '21',   0),
(393, '46 meters', 1), (393, '44 meters', 0), (393, '48 meters', 0), (393, '30 meters', 0);

-- ============================================================
-- Lesson 38 — Lateral Thinking (exercises 394–403)
-- ============================================================

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(394, 'He is playing Monopoly', 1),
    (394, 'He forgot his wallet at home', 0),
    (394, 'His car broke down and the repair was expensive', 0),
    (394, 'The hotel overcharged him', 0),
(395, 'Light both ends of rope 1 and one end of rope 2 simultaneously; when rope 1 finishes (30 min), light the other end of rope 2', 1),
    (395, 'Fold each rope into quarters and burn one quarter', 0),
    (395, 'Light both ropes from one end at the same time and stop when the first finishes', 0),
    (395, 'Light rope 1 and wait 45 minutes, then extinguish it', 0),
(396, '"What would the other guard say if I asked which door leads to freedom?" — then choose the opposite door', 1),
    (396, '"Are you the truth-teller?" and choose door A if yes', 0),
    (396, '"Is door A the safe door?" and trust the answer', 0),
    (396, 'Ask both guards simultaneously and go with the majority', 0),
(397, 'His parachute failed to open — the pack is his parachute', 1),
    (397, 'He was poisoned by something in the backpack', 0),
    (397, 'He ran out of water and died of thirst', 0),
    (397, 'The backpack was too heavy and caused him to collapse', 0),
(398, 'She is a photographer; she shot his photo and developed it in a darkroom', 1),
    (398, 'They were actors filming a scene', 0),
    (398, 'She shot him with a water pistol', 0),
    (398, 'He was a trained diver and survived', 0),
(399, 'Throw it straight up in the air', 1),
    (399, 'Throw it against a curved wall', 0),
    (399, 'Use a boomerang-shaped ball', 0),
    (399, 'Throw it in a spin so air resistance brings it back', 0),
(400, 'He is too short to reach the button for floor 30; on rainy days he has an umbrella he can use to press it', 1),
    (400, 'He is afraid of heights and prefers to walk the last floors', 0),
    (400, 'The elevator only goes to floor 15 in the evenings', 0),
    (400, 'He exercises by climbing the stairs as part of his routine', 0),
(401, 'Fill the 5-gallon jug; pour into the 3-gallon until full (5-3=2 remain in the 5); empty the 3-gallon; pour the 2 gallons in; fill the 5-gallon again; pour into the 3-gallon (which needs 1 more) — leaving 4 gallons in the 5-gallon jug', 1),
    (401, 'Fill the 3-gallon jug and pour it into the 5-gallon jug twice', 0),
    (401, 'You cannot measure exactly 4 gallons with these two jugs', 0),
    (401, 'Fill the 5-gallon jug and pour out 1 gallon by estimating', 0),
(402, 'Roosters do not lay eggs', 1),
    (402, 'It rolls to the left because of wind direction', 0),
    (402, 'It rolls toward the warmer side of the roof', 0),
    (402, 'It stays in place because the peak is flat', 0),
(403, 'One hour', 1),
    (403, 'One and a half hours', 0),
    (403, 'Thirty minutes', 0),
    (403, 'Two hours', 0);

-- ============================================================
-- Lesson 39 — Numerical Reasoning (exercises 404–413)
-- ============================================================

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(404, '2', 1), (404, '1', 0), (404, '3', 0), (404, '4', 0),
(405, '$0.05', 1), (405, '$0.10', 0), (405, '$0.50', 0), (405, '$0.25', 0),
(406, 'There is no missing dollar — the calculation is wrong', 1),
    (406, 'The bellboy stole the missing dollar', 0),
    (406, 'The manager kept the missing dollar', 0),
    (406, 'The dollar was lost in the transaction fees', 0),
(407, '20', 1), (407, '10', 0), (407, '11', 0), (407, '19', 0),
(408, '2^99', 1), (408, '2^100', 0), (408, '100^2', 0), (408, '99^2', 0),
(409, 'Turn A on for 10 minutes, then turn A off and turn B on, then enter the room', 1),
    (409, 'Turn A on and run to check the room immediately', 0),
    (409, 'Turn B on for 10 minutes, then turn both on, then enter', 0),
    (409, 'It is impossible to determine which switch controls the light', 0),
(410, 'Day 29', 1), (410, 'Day 15', 0), (410, 'Day 28', 0), (410, 'Day 20', 0),
(411, '5,050', 1), (411, '5,000', 0), (411, '4,950', 0), (411, '5,100', 0),
(412, '8 days', 1), (412, '10 days', 0), (412, '7 days', 0), (412, '9 days', 0),
(413, '2nd place', 1), (413, '1st place', 0), (413, '3rd place', 0), (413, 'Last place', 0);

-- ============================================================
-- Lesson 40 — Logical Deduction (exercises 414–423)
-- ============================================================

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(414, 'Pick from the "Apples and Oranges" box — since its label is wrong, it contains only one type; that type identifies this box, and you can deduce the rest by elimination', 1),
    (414, 'Pick from the "Apples" box to see whether it contains oranges', 0),
    (414, 'Pick from all three boxes to gather enough information', 0),
    (414, 'You cannot identify all three boxes with a single pick', 0),
(415, 'A is a truth-teller; B is a liar', 1),
    (415, 'Both A and B are liars', 0),
    (415, 'Both A and B are truth-tellers', 0),
    (415, 'A is a liar; B is a truth-teller', 0),
(416, 'Carol', 1), (416, 'Alice', 0), (416, 'Bob', 0), (416, 'Dave', 0),
(417, '3', 1), (417, '2', 0), (417, '4', 0), (417, '5', 0),
(418, 'Tuesday', 1), (418, 'Monday', 0), (418, 'Wednesday', 0), (418, 'Sunday', 0),
(419, 'The number is the total count of people in the room — he is the 4th person, so entering makes 5; his friend who arrives next makes 6', 1),
    (419, 'They are using a different base numbering system', 0),
    (419, 'The number refers to points in a game they are playing', 0),
    (419, 'The puzzle is a trick question with no valid answer', 0),
(420, 'Fill the 9; pour into the 4 until full (5 remain); empty the 4; pour 5 into the 4; fill the 9; pour 1 from 9 into the 4 (which needs 1 more to be full) — leaving 8 in the 9; empty the 4; pour from 9 into 4; 8 − 4 = 4 remain; empty 4; pour 4 in; fill 9; pour 4 from 9 into 4 — 5 remain; empty 4; pour 5 in; fill 9; pour 3 into 4 — 6 remain in the 9', 1),
    (420, 'It is impossible to measure 6 liters with a 4-liter and 9-liter jug', 0),
    (420, 'Fill the 4-liter jug and pour it into the 9-liter jug one and a half times', 0),
    (420, 'Fill the 9-liter jug and estimate pouring out 3 liters by sight', 0),
(421, '9', 1), (421, '8', 0), (421, '17', 0), (421, '0', 0),
(422, 'There are only three people: grandfather, father, and son — the father is both a son and a father', 1),
    (422, 'One of the fathers is also one of the sons — they are the same person', 0),
    (422, 'Two of the men are twins and share one identity', 0),
    (422, 'It is a trick question and is mathematically impossible', 0),
(423, 'Turn switch 1 on for 10 minutes; turn it off; turn switch 2 on; enter the room — the lit bulb is switch 2; the warm unlit bulb is switch 1; the cold unlit bulb is switch 3', 1),
    (423, 'Turn all three switches on, enter, and note which bulbs are lit', 0),
    (423, 'Turn switch 1 on, enter and check, then repeat for switches 2 and 3', 0),
    (423, 'It is impossible to determine all three with only one visit', 0);
`;export{e as default};
