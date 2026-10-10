var e=`-- Migration 032: Economics/Finance module seed data.
-- language_code = 'ec'
--
-- ID mapping (spec IDs 45–48 and 464–503 were already claimed by the Logic expansion
-- module in 026_seed_logic_expansion.sql; spec vocab range 381–400 was claimed by the
-- same migration.  Safe ranges chosen instead:)
--
--   grammar_lessons : 61–64   (45–48 taken by lo expansion; 57–60 taken by 031_seed_modern_ethics.sql)
--   vocabulary_items: 461–480  (381–400 taken by lo expansion; 441–460 taken by 031_seed_modern_ethics.sql)
--   reading_passages: 46–48   (free — no conflict)
--   exercises       : 624–663  (464–583 taken by lo/ps/si/st expansions; 584–623 taken by 031)
--   passage_exercises sort_order bands: 1500–1524 (free)

-- ---- Grammar lessons (topics) ----

INSERT OR IGNORE INTO grammar_lessons (id, title, description, sort_order, language_code) VALUES
(61, 'Supply & Demand',       'Markets, prices, and equilibrium',                      1, 'ec'),
(62, 'Incentives & Behavior', 'Rational choice and behavioral economics',               2, 'ec'),
(63, 'Risk & Return',         'Investing, uncertainty, and compound growth',            3, 'ec'),
(64, 'Macro & Money',         'GDP, inflation, and monetary policy',                    4, 'ec');

-- ---- Vocabulary (20 key terms, sort_order 461–480) ----

INSERT OR IGNORE INTO vocabulary_items (cyrillic, target_word, english, transliteration, part_of_speech, sort_order, language_code) VALUES

('Supply',
 'Supply',
 'The quantity of a good or service that producers are willing and able to offer for sale at each possible price, all else equal.',
 'From Latin supplere: to fill up, to make complete.',
 'noun', 461, 'ec'),

('Demand',
 'Demand',
 'The quantity of a good or service that consumers are willing and able to purchase at each possible price during a given period.',
 'From Latin demandare: to entrust, to order; in economics, desire backed by purchasing power.',
 'noun', 462, 'ec'),

('Equilibrium',
 'Equilibrium',
 'The price at which quantity supplied equals quantity demanded, so that the market clears with no unsatisfied buyers or sellers at that price.',
 'From Latin aequus (equal) + libra (balance): a state of equal balance.',
 'noun', 463, 'ec'),

('Elasticity',
 'Elasticity',
 'The percentage change in one variable (e.g., quantity demanded) in response to a one-percent change in another (e.g., price); a measure of responsiveness.',
 'From Greek elastikos: propulsive, springy — the capacity to stretch or contract.',
 'noun', 464, 'ec'),

('Opportunity Cost',
 'Opportunity Cost',
 'The value of the next-best alternative forgone when a choice is made; the true cost of any decision is what you give up to make it.',
 'From Latin opportunus (at hand) + costa (rib, side); introduced formally by Frédéric Bastiat and Austrian economists.',
 'noun', 465, 'ec'),

('Marginal Utility',
 'Marginal Utility',
 'The additional satisfaction derived from consuming one more unit of a good; typically diminishing — each extra unit adds less utility than the last.',
 'From Latin margo (edge, margin) + Latin utilitas (usefulness): the utility at the edge of consumption.',
 'noun', 466, 'ec'),

('Incentive',
 'Incentive',
 'Any factor — financial, social, or otherwise — that motivates an individual to take a particular action or alter behavior in a predictable direction.',
 'From Latin incentivum: that which sets the tune; the starting signal for action.',
 'noun', 467, 'ec'),

('Loss Aversion',
 'Loss Aversion',
 'The empirical tendency for people to feel the pain of a loss roughly twice as intensely as the pleasure of an equivalent gain, leading to asymmetric risk behavior.',
 'Coined by Daniel Kahneman and Amos Tversky in Prospect Theory (1979); from Old English los (destruction) + Latin aversio (a turning away).',
 'noun', 468, 'ec'),

('Sunk Cost Fallacy',
 'Sunk Cost Fallacy',
 'The error of allowing irrecoverable past expenditures to influence current decisions; rational choice requires ignoring sunk costs and evaluating only future costs and benefits.',
 'From nautical "sunk" (irretrievably lost); a fallacy because sunk costs cannot be recovered and are therefore irrelevant to forward-looking decisions.',
 'noun', 469, 'ec'),

('Compound Interest',
 'Compound Interest',
 'Interest calculated on both the principal and the accumulated interest from prior periods, causing wealth (or debt) to grow at an accelerating, exponential rate over time.',
 'From Latin componere (to put together) + interesse (to be between, to matter); Einstein reportedly called it the eighth wonder of the world.',
 'noun', 470, 'ec'),

('Risk Premium',
 'Risk Premium',
 'The excess return above the risk-free rate that investors require as compensation for bearing the uncertainty of an investment; higher risk demands higher expected return.',
 'From Old Norse riskare (to dare) + Latin praemium (reward, prize); the price the market puts on uncertainty.',
 'noun', 471, 'ec'),

('Diversification',
 'Diversification',
 'The strategy of spreading investments across multiple uncorrelated assets to reduce portfolio risk without sacrificing expected return; the only "free lunch" in finance.',
 'From Latin diversus (turned different ways) + facere (to make): the act of making varied.',
 'noun', 472, 'ec'),

('Inflation',
 'Inflation',
 'A sustained increase in the general price level of goods and services over time, which erodes purchasing power; measured by indices such as the CPI or GDP deflator.',
 'From Latin inflatio: a blowing up, a swelling; in monetary economics, too many dollars chasing too few goods.',
 'noun', 473, 'ec'),

('GDP',
 'GDP',
 'Gross Domestic Product: the total market value of all final goods and services produced within a country''s borders in a given period; the primary measure of economic output.',
 'Acronym for Gross Domestic Product; "gross" = before depreciation; "domestic" = within borders regardless of ownership.',
 'noun', 474, 'ec'),

('Monetary Policy',
 'Monetary Policy',
 'The set of central bank actions — adjusting interest rates, setting reserve requirements, and conducting open market operations — designed to manage inflation and stabilize output.',
 'From Latin moneta (mint, money, origin of the word "monetary") + Greek politeia (governance); the art of managing the money supply.',
 'noun', 475, 'ec'),

('Comparative Advantage',
 'Comparative Advantage',
 'The ability to produce a good at a lower opportunity cost than a trading partner, even if one party has an absolute advantage in everything; the foundation of the case for free trade.',
 'Formalized by David Ricardo in Principles of Political Economy (1817); from Latin comparare (to match) + Latin advantagium (a superior position).',
 'noun', 476, 'ec'),

('Market Failure',
 'Market Failure',
 'A situation in which the free market, left to itself, fails to allocate resources efficiently, typically due to externalities, public goods, information asymmetry, or market power.',
 'From Old English mearc (boundary, sign) + Old French faillir (to fail, to be lacking); the market mechanism breaks down at its own boundary conditions.',
 'noun', 477, 'ec'),

('Externality',
 'Externality',
 'A cost or benefit imposed on parties not directly involved in a transaction; negative externalities (e.g., pollution) lead to overproduction, positive ones (e.g., vaccination) to underproduction.',
 'From Latin externus (outside, external): an effect that falls outside the private bargain between buyer and seller.',
 'noun', 478, 'ec'),

('Time Value of Money',
 'Time Value of Money',
 'The principle that a sum of money available today is worth more than the same sum available in the future, because present funds can be invested to earn a return.',
 'Implicit in all interest theory since ancient Mesopotamia; formalized in discounted cash flow analysis; grounded in the opportunity cost of waiting.',
 'noun', 479, 'ec'),

('Liquidity',
 'Liquidity',
 'The ease and speed with which an asset can be converted to cash without significant loss of value; cash is perfectly liquid, illiquid assets (e.g., real estate) may take months to sell at fair value.',
 'From Latin liquidus (flowing, fluid): the capacity to flow quickly from asset form to purchasing power.',
 'noun', 480, 'ec');

-- ---- Reading passages ----

INSERT OR IGNORE INTO reading_passages (id, title, sort_order, language_code) VALUES
(46, 'Smith: On the Division of Labour and the Invisible Hand',   1, 'ec'),
(47, 'Kahneman: On Loss Aversion and the Two Systems',            2, 'ec'),
(48, 'Buffett: On the Margin of Safety and Patient Investing',    3, 'ec');

-- ---- Exercises: Lesson 61 — Supply & Demand (IDs 624–633) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(624, 61, 'mcq_grammar', 'What does the Law of Demand state?',
 'As the price of a good rises, the quantity demanded falls, all else equal.',
 '', 'The inverse relationship between price and quantity demanded arises because higher prices make the good relatively more expensive compared to substitutes and because purchasing power effectively falls. The "all else equal" (ceteris paribus) qualifier holds income, tastes, and other prices constant.', 1, 'ec'),

(625, 61, 'mcq_grammar', 'What happens to the supply curve when production costs fall sharply?',
 'The supply curve shifts rightward — more is supplied at every price.',
 '', 'A fall in production costs (e.g., cheaper raw materials or energy) increases the profitability of each unit, inducing producers to expand output at any given price. This is a shift of the supply curve itself, not a movement along it.', 2, 'ec'),

(626, 61, 'mcq_grammar', 'At the equilibrium price, what is true of the market?',
 'Quantity supplied equals quantity demanded; there is no unsatisfied buyer at that price.',
 '', 'Equilibrium clears the market: every buyer willing to pay the going price finds a seller, and every seller willing to accept that price finds a buyer. Above equilibrium, a surplus develops and pushes price down; below it, a shortage pushes price up.', 3, 'ec'),

(627, 61, 'mcq_grammar', 'If demand for a good increases while supply stays constant, what occurs?',
 'The equilibrium price rises and equilibrium quantity rises.',
 '', 'An outward shift of the demand curve, with supply unchanged, creates excess demand at the old price. Competition among buyers bids the price up until a new, higher equilibrium is reached at a greater quantity.', 4, 'ec'),

(628, 61, 'mcq_grammar', 'Price elasticity of demand measures which of the following?',
 'The percentage change in quantity demanded divided by the percentage change in price.',
 '', 'Elasticity is a dimensionless ratio that captures responsiveness. A value greater than one (elastic) means consumers are highly responsive to price; less than one (inelastic) means they are relatively unresponsive. Necessities tend to be inelastic; luxuries tend to be elastic.', 5, 'ec'),

(629, 61, 'mcq_grammar', 'Which of the following would shift the demand curve for coffee to the right?',
 'A study showing that coffee reduces heart disease risk.',
 '', 'Demand curves shift when any determinant other than price changes: income, tastes, expectations, or the prices of related goods. A favorable health study improves tastes and preferences, increasing the quantity demanded at every price.', 6, 'ec'),

(630, 61, 'mcq_grammar', 'What is a price ceiling, and what economic problem does it typically create?',
 'A maximum legal price below equilibrium, which creates a shortage.',
 '', 'A binding price ceiling (e.g., rent control) holds the price below what the market would clear at, so quantity demanded exceeds quantity supplied. The shortage manifests as waiting lists, black markets, and deteriorating quality.', 7, 'ec'),

(631, 61, 'mcq_grammar', 'What does it mean for a good to have "perfectly inelastic" demand?',
 'Quantity demanded does not change at all regardless of price.',
 '', 'Perfect inelasticity (elasticity = 0) implies consumers will purchase the same quantity no matter what the price. In practice, no real good is perfectly inelastic, but life-saving medicines or addictive substances can approach this condition.', 8, 'ec'),

(632, 61, 'mcq_grammar', 'What distinguishes a movement along the demand curve from a shift of the demand curve?',
 'A movement along the curve is caused by a price change; a shift is caused by a change in any other demand determinant.',
 '', 'This distinction is fundamental. When the good''s own price changes, we move along the existing demand curve (a change in quantity demanded). When income, tastes, related prices, or expectations change, the entire curve shifts (a change in demand).', 9, 'ec'),

(633, 61, 'mcq_grammar', 'Why does comparative advantage justify specialisation and trade even when one country can produce everything more cheaply?',
 'Because what matters is relative opportunity cost, not absolute productivity.',
 '', 'Ricardo''s insight is that even an absolutely superior producer gains from specialising in the activity where its opportunity cost is lowest and trading for the rest. Both parties consume beyond their individual production frontiers when they specialise according to comparative advantage.', 10, 'ec');

-- ---- Exercises: Lesson 62 — Incentives & Behavior (IDs 634–643) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(634, 62, 'mcq_grammar', 'What is the core assumption of the rational choice model in economics?',
 'Individuals choose actions that maximise their expected utility given their preferences and constraints.',
 '', 'Standard economic theory models agents as consistently pursuing well-defined objectives within their budget set. This is an idealisation — it predicts market behavior reasonably well in aggregate, but fails systematically for individual decisions involving uncertainty or time.', 1, 'ec'),

(635, 62, 'mcq_grammar', 'What does loss aversion mean, and who documented it experimentally?',
 'Losses are felt roughly twice as intensely as equivalent gains; documented by Kahneman and Tversky.',
 '', 'Prospect Theory (1979) showed that the pain of losing $100 is psychologically about twice as great as the pleasure of gaining $100. This asymmetry causes people to take risk-seeking positions to avoid certain losses and risk-averse positions to lock in gains.', 2, 'ec'),

(636, 62, 'mcq_grammar', 'What is the sunk cost fallacy?',
 'Allowing past irrecoverable costs to influence current decisions rather than focusing on future costs and benefits.',
 '', 'A sunk cost is gone regardless of what you do next. A rational actor ignores it. But empirically, people continue investing in failing projects, relationships, or strategies because of what they have already spent — the very definition of throwing good money after bad.', 3, 'ec'),

(637, 62, 'mcq_grammar', 'In behavioral economics, what is "present bias"?',
 'The tendency to give disproportionately high weight to immediate rewards relative to future ones.',
 '', 'Present bias leads to time-inconsistent preferences: people plan to save tomorrow but spend today, intend to diet next week but indulge tonight. It explains why commitment devices (e.g., automatic pension enrollment) significantly improve outcomes.', 4, 'ec'),

(638, 62, 'mcq_grammar', 'What does it mean to "nudge" behavior in Thaler and Sunstein''s framework?',
 'To redesign the choice architecture so the default option aligns with the preferred outcome, without restricting choice.',
 '', 'A nudge changes behavior predictably without forbidding options or significantly altering financial incentives. Examples: placing healthy food at eye level in cafeterias; making pension saving opt-out rather than opt-in. The key is preserving free choice while directing toward better defaults.', 5, 'ec'),

(639, 62, 'mcq_grammar', 'What is moral hazard in economic theory?',
 'The tendency to take greater risks when protected from the consequences of those risks.',
 '', 'Moral hazard arises from information asymmetry after a contract is signed. A car owner with full insurance may drive less carefully. A bank that believes the government will bail it out may make riskier loans. The insured party bears less of the downside, distorting their incentives.', 6, 'ec'),

(640, 62, 'mcq_grammar', 'What is the principal-agent problem?',
 'The conflict of interest that arises when an agent (e.g., manager) acts on behalf of a principal (e.g., shareholder) with different incentives.',
 '', 'Because agents have private information and their own objectives, they may not act in the principal''s interest. Aligning incentives — through performance pay, monitoring, equity stakes — is the central challenge of organizational economics and corporate governance.', 7, 'ec'),

(641, 62, 'mcq_grammar', 'Why do economists argue that "people respond to incentives" is one of the most powerful principles in social science?',
 'Because changes in costs or rewards systematically alter behavior even without changing preferences.',
 '', 'You don''t need to change what people want — only the relative costs and benefits of their options. Tax a behavior and you get less of it; subsidize it and you get more. This principle is the engine behind policy design, mechanism design, and much of industrial organization.', 8, 'ec'),

(642, 62, 'mcq_grammar', 'The endowment effect refers to which of the following?',
 'People value objects more highly once they own them than they did before acquiring them.',
 '', 'Kahneman, Knetsch, and Thaler showed experimentally that owners demand more to give up an object (their willingness to accept) than non-owners will pay to acquire it (willingness to pay). Loss aversion makes the potential surrender of a possession feel like a loss, inflating its value.', 9, 'ec'),

(643, 62, 'mcq_grammar', 'What is adverse selection, and in which market is it most famously analyzed?',
 'The problem of low-quality goods or high-risk buyers driving out high-quality ones; famously analyzed in the used-car market.',
 '', 'Akerlof''s "Market for Lemons" (1970) showed that when sellers know more about quality than buyers, buyers assume the worst and bid low prices, causing good-quality sellers to exit. This unraveling can destroy markets entirely without regulation or signaling mechanisms.', 10, 'ec');

-- ---- Exercises: Lesson 63 — Risk & Return (IDs 644–653) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(644, 63, 'mcq_grammar', 'What does the risk-return tradeoff state?',
 'Investments that offer higher expected returns require accepting higher risk.',
 '', 'In efficient markets, no investor can systematically earn above-average returns without bearing above-average risk. The risk premium — the extra expected return over a risk-free investment — is compensation for the possibility of loss, not a free gift.', 1, 'ec'),

(645, 63, 'mcq_grammar', 'What is compound interest, and why is it described as exponential growth?',
 'Interest earned on both principal and previously accumulated interest, growing at an accelerating rate.',
 '', 'Compound interest grows as A = P(1 + r)^t. Each period''s interest is added to the principal, so the base on which interest is calculated grows continuously. Over decades, even small differences in rate r or duration t produce enormous differences in terminal value.', 2, 'ec'),

(646, 63, 'mcq_grammar', 'What is diversification, and why does it reduce portfolio risk?',
 'Spreading investments across uncorrelated assets so that the losses of some are offset by the gains of others.',
 '', 'Diversification exploits the fact that imperfectly correlated assets do not move in lockstep. Portfolio variance is a function of individual variances and covariances; adding uncorrelated assets reduces the variance of the whole even when each component carries risk.', 3, 'ec'),

(647, 63, 'mcq_grammar', 'What is systematic (market) risk, and why can it not be diversified away?',
 'Risk that affects all assets simultaneously — recessions, interest rate shifts, geopolitical events — and therefore cannot be eliminated by portfolio diversification.',
 '', 'Diversification eliminates idiosyncratic (firm-specific) risk because individual company shocks are uncorrelated. But systematic risk moves the entire market. CAPM captures this with beta: a stock''s sensitivity to broad market movements determines the premium investors demand.', 4, 'ec'),

(648, 63, 'mcq_grammar', 'What is the time value of money principle?',
 'A dollar today is worth more than a dollar in the future because it can be invested to earn a return.',
 '', 'Present value discounting quantifies this: PV = FV / (1 + r)^t. The further in the future a cash flow, and the higher the discount rate, the less it is worth today. This principle underlies all valuation, from bond pricing to corporate investment decisions.', 5, 'ec'),

(649, 63, 'mcq_grammar', 'What is the equity risk premium?',
 'The additional return investors historically earn from stocks above the risk-free rate, as compensation for their greater volatility.',
 '', 'Historically, equities have returned roughly 5–7% per year above government bonds in developed markets. This premium compensates for the higher variance and left-tail risk of stocks. It is the central input in virtually every valuation model that uses a cost of equity.', 6, 'ec'),

(650, 63, 'mcq_grammar', 'What is Buffett''s concept of the "margin of safety"?',
 'Purchasing assets well below their intrinsic value to create a buffer against errors in valuation and unforeseen risks.',
 '', 'Benjamin Graham introduced the term; Buffett made it central to his philosophy. If you estimate a business is worth $100 but buy it for $60, the $40 gap is your margin of safety — it protects you from being wrong without suffering a permanent loss of capital.', 7, 'ec'),

(651, 63, 'mcq_grammar', 'What does Modern Portfolio Theory (MPT) say about the efficient frontier?',
 'The efficient frontier represents the set of portfolios offering the highest expected return for a given level of risk.',
 '', 'Markowitz (1952) showed that rational investors should choose portfolios on the efficient frontier — no portfolio above the frontier is achievable, and no rational investor should choose one below it when a frontier portfolio with the same risk offers higher return.', 8, 'ec'),

(652, 63, 'mcq_grammar', 'What is liquidity risk in investing?',
 'The risk that an asset cannot be sold quickly at or near its fair value when needed.',
 '', 'Illiquid investments (private equity, real estate, thinly traded bonds) may carry a liquidity premium — higher expected returns — to compensate investors for their inability to exit quickly. In a crisis, even normally liquid markets can seize up, amplifying losses.', 9, 'ec'),

(653, 63, 'mcq_grammar', 'Why does dollar-cost averaging reduce the average cost per share in a volatile market?',
 'Because fixed-dollar investments automatically buy more shares when prices are low and fewer when prices are high.',
 '', 'If you invest $1,000 per month regardless of price, you purchase more units in down months and fewer in up months. The arithmetic mean of prices exceeds the harmonic mean (the effective average cost), so DCA systematically buys at below-average prices over time.', 10, 'ec');

-- ---- Exercises: Lesson 64 — Macro & Money (IDs 654–663) ----

INSERT OR IGNORE INTO exercises (id, lesson_id, exercise_type, prompt, correct_option, letter_name_ru, pronunciation_hint, sort_order, language_code) VALUES
(654, 64, 'mcq_grammar', 'What does GDP measure, and what are its four main expenditure components?',
 'Total value of final goods and services produced domestically; components are C + I + G + NX.',
 '', 'GDP = Consumption + Investment + Government spending + Net Exports (exports minus imports). It counts only final goods to avoid double-counting intermediate inputs. GDP per capita is the most common measure of average living standards across countries.', 1, 'ec'),

(655, 64, 'mcq_grammar', 'What is the difference between nominal GDP and real GDP?',
 'Nominal GDP is measured at current prices; real GDP adjusts for inflation to reflect actual changes in output.',
 '', 'If prices double but output stays the same, nominal GDP doubles while real GDP is unchanged. Only real GDP growth indicates genuine improvement in productive capacity and living standards. The GDP deflator converts between them.', 2, 'ec'),

(656, 64, 'mcq_grammar', 'What causes inflation according to the quantity theory of money?',
 'When the money supply grows faster than real output, each unit of money buys fewer goods — prices rise.',
 '', 'The equation of exchange MV = PY (money supply × velocity = price level × real output) implies that, if velocity and output are stable, expanding M raises P proportionally. Central banks target inflation primarily by controlling money supply growth through interest rates.', 3, 'ec'),

(657, 64, 'mcq_grammar', 'What is monetary policy, and what is the central bank''s primary tool for implementing it?',
 'Central bank management of money supply and credit conditions; the primary tool is the policy interest rate.',
 '', 'By raising or lowering short-term interest rates, central banks affect borrowing costs throughout the economy. Higher rates discourage borrowing and spending, cooling inflation. Lower rates stimulate investment and consumption. Open market operations (buying/selling government bonds) implement rate changes.', 4, 'ec'),

(658, 64, 'mcq_grammar', 'What is the distinction between fiscal policy and monetary policy?',
 'Fiscal policy involves government taxing and spending decisions; monetary policy involves central bank control of money and credit.',
 '', 'Fiscal policy is conducted by elected governments and affects the government budget directly. Monetary policy is typically delegated to independent central banks to insulate it from short-term electoral pressures. Both can expand or contract aggregate demand, but through different channels.', 5, 'ec'),

(659, 64, 'mcq_grammar', 'What is a recession according to the standard macroeconomic definition?',
 'Two consecutive quarters of negative real GDP growth.',
 '', 'During a recession, output, employment, and incomes all typically fall together. The NBER in the United States uses a broader definition (significant decline in activity spread across the economy lasting more than a few months), but the two-quarter rule is widely used internationally.', 6, 'ec'),

(660, 64, 'mcq_grammar', 'What is the Phillips Curve, and what is the controversy about its long-run form?',
 'It describes a short-run tradeoff between inflation and unemployment; in the long run, most economists believe the tradeoff disappears.',
 '', 'Empirically, lower unemployment is correlated with higher inflation in the short run as tight labor markets push up wages. But Friedman and Phelps showed that in the long run, workers adjust expectations and demand higher nominal wages, restoring the natural rate of unemployment — leaving only higher inflation.', 7, 'ec'),

(661, 64, 'mcq_grammar', 'What does it mean when a central bank pursues "quantitative easing"?',
 'The central bank creates new money to purchase financial assets, expanding its balance sheet and pushing down long-term rates.',
 '', 'When short-term rates are near zero and conventional policy is exhausted, QE directly injects liquidity into financial markets. By purchasing bonds, the central bank drives up their prices, reducing yields, and encourages investors to shift into riskier assets — the "portfolio balance" effect.', 8, 'ec'),

(662, 64, 'mcq_grammar', 'Why does hyperinflation destroy an economy''s productive capacity, not merely its price level?',
 'Because it eliminates the price system''s ability to convey information and destroys the incentive to save and invest.',
 '', 'Prices coordinate economic activity by signalling relative scarcity. When inflation is extreme and unpredictable, price signals become noise, contracts lose meaning, and the time horizon for investment collapses. Weimar Germany and Zimbabwe illustrate how hyperinflation can wipe out savings, disrupt supply chains, and trigger political crises.', 9, 'ec'),

(663, 64, 'mcq_grammar', 'What is the role of a central bank as "lender of last resort"?',
 'To provide emergency liquidity to solvent but temporarily illiquid banks during a financial crisis, preventing bank runs from becoming insolvencies.',
 '', 'Bagehot''s rule (Lombard Street, 1873) states: lend freely at a penalty rate against good collateral. The purpose is to prevent a liquidity crisis — temporary inability to meet withdrawals — from cascading into a solvency crisis. The 2008 Federal Reserve interventions exemplify this role.', 10, 'ec');

-- ---- Exercise options: Lesson 61 — Supply & Demand (IDs 624–633) ----

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(624, 'As the price of a good rises, the quantity demanded rises, all else equal.', 0),
(624, 'As the price of a good rises, the quantity demanded falls, all else equal.', 1),
(624, 'Demand and price are unrelated in competitive markets.', 0),
(624, 'As price rises, both supply and demand increase equally.', 0),

(625, 'The supply curve shifts leftward — less is supplied at every price.', 0),
(625, 'The supply curve shifts rightward — more is supplied at every price.', 1),
(625, 'There is a movement upward along the existing supply curve.', 0),
(625, 'The supply curve becomes perfectly inelastic.', 0),

(626, 'Quantity supplied exceeds quantity demanded, creating a surplus.', 0),
(626, 'Quantity demanded exceeds quantity supplied, creating a shortage.', 0),
(626, 'Quantity supplied equals quantity demanded; there is no unsatisfied buyer at that price.', 1),
(626, 'Price is at its highest possible level.', 0),

(627, 'The equilibrium price falls and equilibrium quantity falls.', 0),
(627, 'The equilibrium price rises and equilibrium quantity rises.', 1),
(627, 'The equilibrium price falls and equilibrium quantity rises.', 0),
(627, 'The equilibrium price and quantity are unchanged.', 0),

(628, 'The absolute change in quantity demanded divided by the absolute change in price.', 0),
(628, 'The percentage change in quantity demanded divided by the percentage change in price.', 1),
(628, 'The ratio of the price of substitutes to the price of the original good.', 0),
(628, 'The slope of the demand curve at any given point.', 0),

(629, 'A rise in the price of tea, a close substitute for coffee.', 0),
(629, 'An increase in the price of coffee itself.', 0),
(629, 'A fall in consumers'' incomes, assuming coffee is a normal good.', 0),
(629, 'A study showing that coffee reduces heart disease risk.', 1),

(630, 'A minimum legal price above equilibrium, which creates a surplus.', 0),
(630, 'A maximum legal price below equilibrium, which creates a shortage.', 1),
(630, 'A tax imposed on sellers, which shifts the supply curve leftward.', 0),
(630, 'A subsidy that lowers the market price for consumers.', 0),

(631, 'Consumers buy more of the good as its price rises.', 0),
(631, 'Quantity demanded does not change at all regardless of price.', 1),
(631, 'The good has many close substitutes available.', 0),
(631, 'The price elasticity of demand equals exactly one.', 0),

(632, 'Both are caused by changes in price.', 0),
(632, 'Both are caused by changes in income.', 0),
(632, 'A movement along the curve is caused by a price change; a shift is caused by a change in any other demand determinant.', 1),
(632, 'A shift is caused by a price change; a movement is caused by a non-price determinant.', 0),

(633, 'Because the country with lower wages should always export more.', 0),
(633, 'Because what matters is relative opportunity cost, not absolute productivity.', 1),
(633, 'Because international trade agreements require reciprocal access.', 0),
(633, 'Because absolute advantage determines who should specialize in every case.', 0);

-- ---- Exercise options: Lesson 62 — Incentives & Behavior (IDs 634–643) ----

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(634, 'Individuals act randomly unless constrained by law.', 0),
(634, 'Individuals choose actions that maximise their expected utility given their preferences and constraints.', 1),
(634, 'Individuals always choose the option with the highest monetary payoff.', 0),
(634, 'Individuals follow social norms regardless of personal cost.', 0),

(635, 'Losses and gains are felt with equal psychological intensity.', 0),
(635, 'Gains are felt more intensely than equivalent losses.', 0),
(635, 'Losses are felt roughly twice as intensely as equivalent gains; documented by Kahneman and Tversky.', 1),
(635, 'Loss aversion is eliminated when individuals have financial training.', 0),

(636, 'Correctly accounting for all past expenditures when making future plans.', 0),
(636, 'Allowing past irrecoverable costs to influence current decisions rather than focusing on future costs and benefits.', 1),
(636, 'The tendency to underestimate the cost of large, complex projects.', 0),
(636, 'Refusing to accept any financial loss, even when cutting losses is optimal.', 0),

(637, 'The tendency to overestimate future returns on investments.', 0),
(637, 'Rationally discounting future cash flows using a constant discount rate.', 0),
(637, 'The tendency to give disproportionately high weight to immediate rewards relative to future ones.', 1),
(637, 'Believing that present circumstances will continue indefinitely into the future.', 0),

(638, 'To impose legal restrictions on harmful choices.', 0),
(638, 'To educate people about the consequences of their decisions.', 0),
(638, 'To redesign the choice architecture so the default option aligns with the preferred outcome, without restricting choice.', 1),
(638, 'To use financial incentives to change behavior directly.', 0),

(639, 'The probability that a financial contract will be dishonored.', 0),
(639, 'The tendency to take greater risks when protected from the consequences of those risks.', 1),
(639, 'The risk of an unethical actor fraudulently misrepresenting a product.', 0),
(639, 'The danger that a business partner will behave dishonestly in negotiations.', 0),

(640, 'The challenge of delegating technical decisions to non-expert managers.', 0),
(640, 'The conflict of interest that arises when an agent acts on behalf of a principal with different incentives.', 1),
(640, 'The problem that shareholders cannot attend board meetings.', 0),
(640, 'The difficulty of writing a complete contract covering all future contingencies.', 0),

(641, 'Because people are inherently selfish and respond only to money.', 0),
(641, 'Because changes in costs or rewards systematically alter behavior even without changing preferences.', 1),
(641, 'Because rational agents calculate optimal strategies before every decision.', 0),
(641, 'Because social norms reinforce the incentives built into market prices.', 0),

(642, 'People pay less for goods they already own than for identical goods they do not yet own.', 0),
(642, 'People value objects more highly once they own them than they did before acquiring them.', 1),
(642, 'People endow their future selves with unrealistically positive qualities.', 0),
(642, 'People overvalue the first option presented to them in a set of choices.', 0),

(643, 'The problem of buyers bidding too high in competitive auction markets.', 0),
(643, 'The problem of low-quality goods or high-risk buyers driving out high-quality ones; famously analyzed in the used-car market.', 1),
(643, 'The tendency for highly selected samples to outperform the general population.', 0),
(643, 'The risk that insider trading will corrupt the price discovery process.', 0);

-- ---- Exercise options: Lesson 63 — Risk & Return (IDs 644–653) ----

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(644, 'Higher-return investments always have lower risk because professionals manage them.', 0),
(644, 'Investments that offer higher expected returns require accepting higher risk.', 1),
(644, 'The safest investments always produce the highest long-term returns.', 0),
(644, 'Risk and return are unrelated in efficient markets.', 0),

(645, 'Interest earned on principal only, recalculated each period.', 0),
(645, 'Interest earned on both principal and previously accumulated interest, growing at an accelerating rate.', 1),
(645, 'A fixed periodic payment regardless of account balance.', 0),
(645, 'The annual percentage yield adjusted for inflation.', 0),

(646, 'Concentrating all capital in the single best-performing asset class.', 0),
(646, 'Spreading investments across uncorrelated assets so that the losses of some are offset by the gains of others.', 1),
(646, 'Dividing capital equally among the highest-yielding securities.', 0),
(646, 'Holding cash reserves to exploit market downturns.', 0),

(647, 'Risk that can be eliminated by holding a large number of assets.', 0),
(647, 'Risk that affects all assets simultaneously and cannot be eliminated by portfolio diversification.', 1),
(647, 'Risk unique to a single company or industry.', 0),
(647, 'Risk arising from changes in a foreign country''s regulatory environment.', 0),

(648, 'Money is worth less today than in the future because of inflation.', 0),
(648, 'A dollar today is worth more than a dollar in the future because it can be invested to earn a return.', 1),
(648, 'The face value of money remains constant regardless of when it is received.', 0),
(648, 'Future cash flows should be discounted by inflation only, not opportunity cost.', 0),

(649, 'The difference in return between corporate bonds and government bonds.', 0),
(649, 'The additional return investors historically earn from stocks above the risk-free rate, as compensation for their greater volatility.', 1),
(649, 'The fee charged by fund managers for active portfolio management.', 0),
(649, 'The premium paid for options contracts on equity indices.', 0),

(650, 'Buying only well-known, large-cap stocks that are unlikely to go bankrupt.', 0),
(650, 'Purchasing assets well below their intrinsic value to create a buffer against errors in valuation and unforeseen risks.', 1),
(650, 'Diversifying equally across all asset classes to prevent catastrophic loss.', 0),
(650, 'Setting stop-loss orders to automatically sell declining positions.', 0),

(651, 'The maximum possible return for any level of risk.', 0),
(651, 'The set of portfolios offering the highest expected return for a given level of risk.', 1),
(651, 'The boundary between safe and speculative investments.', 0),
(651, 'The portfolio with the lowest possible volatility regardless of return.', 0),

(652, 'The risk that an asset will permanently lose all its value.', 0),
(652, 'The risk that an asset cannot be sold quickly at or near its fair value when needed.', 1),
(652, 'The risk arising from fluctuations in short-term interest rates.', 0),
(652, 'The risk that a counterparty defaults on a financial contract.', 0),

(653, 'Fixed-dollar investing results in buying the same number of shares each month.', 0),
(653, 'Because fixed-dollar investments automatically buy more shares when prices are low and fewer when prices are high.', 1),
(653, 'Dollar-cost averaging times the market by purchasing only at monthly lows.', 0),
(653, 'The strategy eliminates all sequence-of-returns risk in a portfolio.', 0);

-- ---- Exercise options: Lesson 64 — Macro & Money (IDs 654–663) ----

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(654, 'The total wages paid to all workers in a country in a given year.', 0),
(654, 'Total value of final goods and services produced domestically; components are C + I + G + NX.', 1),
(654, 'The total value of all financial transactions in a country.', 0),
(654, 'The market capitalisation of all publicly listed domestic companies.', 0),

(655, 'Nominal GDP adjusts for inflation; real GDP does not.', 0),
(655, 'Nominal GDP is measured at current prices; real GDP adjusts for inflation to reflect actual changes in output.', 1),
(655, 'They are identical measures reported in different currencies.', 0),
(655, 'Real GDP includes the value of unpaid household work; nominal GDP does not.', 0),

(656, 'When government spending exceeds tax revenue, prices automatically rise.', 0),
(656, 'When the money supply grows faster than real output, each unit of money buys fewer goods — prices rise.', 1),
(656, 'When import prices rise faster than domestic wages, a price spiral begins.', 0),
(656, 'Inflation is caused solely by excessive wage demands from labour unions.', 0),

(657, 'Fiscal stimulus packages passed by the legislature.', 0),
(657, 'Central bank management of money supply and credit conditions; the primary tool is the policy interest rate.', 1),
(657, 'The government''s decision to peg its currency to gold.', 0),
(657, 'International agreements to coordinate exchange rate targets.', 0),

(658, 'Fiscal policy controls interest rates; monetary policy sets tax rates.', 0),
(658, 'Fiscal policy involves government taxing and spending decisions; monetary policy involves central bank control of money and credit.', 1),
(658, 'They are two names for the same set of economic tools.', 0),
(658, 'Monetary policy is conducted by elected governments; fiscal policy by independent central banks.', 0),

(659, 'A single quarter of negative GDP growth.', 0),
(659, 'Two consecutive quarters of negative real GDP growth.', 1),
(659, 'Unemployment rising above ten percent for six months.', 0),
(659, 'A stock market decline of more than twenty percent from its peak.', 0),

(660, 'A permanent, stable tradeoff between inflation and unemployment at all time horizons.', 0),
(660, 'It describes a short-run tradeoff between inflation and unemployment; in the long run, most economists believe the tradeoff disappears.', 1),
(660, 'A curve showing that inflation and unemployment always move in the same direction.', 0),
(660, 'A mathematical relationship between money supply and the level of output.', 0),

(661, 'Raising interest rates to a level above the natural rate of interest.', 0),
(661, 'The central bank creates new money to purchase financial assets, expanding its balance sheet and pushing down long-term rates.', 1),
(661, 'The government prints money to directly finance its budget deficit.', 0),
(661, 'A currency board arrangement that fixes the exchange rate unconditionally.', 0),

(662, 'It merely reshuffles wealth from savers to debtors without destroying output.', 0),
(662, 'Because it eliminates the price system''s ability to convey information and destroys the incentive to save and invest.', 1),
(662, 'Because it causes foreign investors to withdraw capital suddenly.', 0),
(662, 'It raises real wages, making exports uncompetitive and destroying jobs.', 0),

(663, 'To regulate which financial institutions are allowed to operate.', 0),
(663, 'To provide emergency liquidity to solvent but temporarily illiquid banks during a financial crisis.', 1),
(663, 'To set maximum interest rates that banks may charge borrowers.', 0),
(663, 'To guarantee all bank deposits up to a specified limit.', 0);

-- ---- Passage exercises ----
-- Passage 46: Smith: On the Division of Labour and the Invisible Hand
-- lesson_id=61, language_code='ec', sort_order 1500–1504

INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(46, 'ec', 61, 1500, 'What does Smith''s pin-factory example illustrate about the division of labour?',
 'That specialization increases output by an arithmetic multiple',
 'That breaking a task into specialized operations vastly multiplies productive output per worker',
 'That factory workers are more motivated when supervised closely',
 'That machines are always more productive than human labour',
 'b'),
(46, 'ec', 61, 1501, 'What does Smith mean by the "invisible hand"?',
 'A metaphor for government regulation that prevents monopolies',
 'The idea that divine providence guides economic outcomes',
 'The mechanism by which individuals pursuing self-interest unintentionally promote the public good through market prices',
 'The tendency of wages to converge across industries over time',
 'c'),
(46, 'ec', 61, 1502, 'According to Smith, what are the three sources of productivity gains from the division of labour?',
 'Capital accumulation, technological invention, and population growth',
 'Increased dexterity, time saved from not switching tasks, and the encouragement of labour-saving machinery',
 'Lower wages, longer working hours, and the elimination of idle workers',
 'Specialisation, competition, and the rule of law',
 'b'),
(46, 'ec', 61, 1503, 'What limits the division of labour, according to Smith?',
 'The available capital stock and the cost of machinery',
 'Government regulation of working conditions',
 'The extent of the market — a narrow market cannot support fine specialisation',
 'The education and skill level of the workforce',
 'c'),
(46, 'ec', 61, 1504, 'How does the passage connect self-interest to the general welfare?',
 'It argues that self-interest is morally praiseworthy and should be encouraged directly',
 'It claims that government must redirect self-interest through taxation toward public ends',
 'It argues that self-interested individuals, guided by market prices, channel effort toward what society values without intending to do so',
 'It warns that self-interest usually conflicts with the public good and requires constant restraint',
 'c');

-- Passage 47: Kahneman: On Loss Aversion and the Two Systems
-- lesson_id=62, language_code='ec', sort_order 1510–1514

INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(47, 'ec', 62, 1510, 'What are Kahneman''s "System 1" and "System 2"?',
 'System 1 is the brain''s left hemisphere; System 2 is the right hemisphere',
 'System 1 is fast, automatic, and associative; System 2 is slow, deliberate, and analytical',
 'System 1 handles emotional decisions; System 2 handles financial ones',
 'System 1 is conscious thought; System 2 is unconscious instinct',
 'b'),
(47, 'ec', 62, 1511, 'What does Prospect Theory reveal about how people respond to losses versus gains?',
 'People treat gains and losses symmetrically when the amounts are equal',
 'People are risk-neutral with respect to both gains and losses',
 'People feel the pain of a loss approximately twice as intensely as the pleasure of an equivalent gain',
 'People systematically overvalue small losses and undervalue large ones',
 'c'),
(47, 'ec', 62, 1512, 'Why does loss aversion lead to the "disposition effect" in investing?',
 'Investors hold winners too long because they fear taxes on realised gains',
 'Investors sell winning positions too early to lock in gains and hold losing positions too long to avoid realising losses',
 'Investors diversify too broadly because any single loss feels catastrophic',
 'Investors refuse to sell any position once the market has declined',
 'b'),
(47, 'ec', 62, 1513, 'What is the "focusing illusion" as described by Kahneman?',
 'The tendency to overweight information that is presented first in a sequence',
 'The error of thinking that any single factor is more important to well-being than it actually is',
 'The bias toward vivid, emotionally intense scenarios when assessing probability',
 'The illusion that one''s own financial judgments are free of cognitive bias',
 'b'),
(47, 'ec', 62, 1514, 'What practical implication does Kahneman draw for institutional decision-making?',
 'Committees should be dissolved in favour of individual expert judgment',
 'Financial decisions should be delegated entirely to algorithmic models',
 'Organisations should design processes that slow down System 1 and force System 2 deliberation before important decisions',
 'People should be paid more to override their instincts in high-stakes situations',
 'c');

-- Passage 48: Buffett: On the Margin of Safety and Patient Investing
-- lesson_id=63, language_code='ec', sort_order 1520–1524

INSERT INTO passage_exercises (passage_id, language_code, lesson_id, sort_order, prompt, option_a, option_b, option_c, option_d, correct_option) VALUES
(48, 'ec', 63, 1520, 'What does Buffett mean by "intrinsic value"?',
 'The book value of a company as reported on its balance sheet',
 'The present value of all cash the business will generate for its owners over its remaining life',
 'The price at which the stock has historically traded on average',
 'The replacement cost of the company''s physical assets',
 'b'),
(48, 'ec', 63, 1521, 'What is the "margin of safety" principle, and why does Buffett consider it central to investing?',
 'Holding a cash reserve equal to ten percent of portfolio value at all times',
 'Only investing in companies with investment-grade credit ratings',
 'Buying assets significantly below intrinsic value so that errors in valuation do not produce permanent capital loss',
 'Diversifying across enough assets that no single holding can damage the portfolio',
 'c'),
(48, 'ec', 63, 1522, 'How does Buffett''s approach differ from market timing?',
 'Buffett uses macroeconomic forecasts to identify optimal entry points',
 'Buffett avoids all cyclical businesses because their earnings are unpredictable',
 'Buffett holds businesses for the long term based on intrinsic value rather than predicting short-term price movements',
 'Buffett rotates among asset classes based on central bank interest rate signals',
 'c'),
(48, 'ec', 63, 1523, 'What does Buffett mean by staying within one''s "circle of competence"?',
 'Only investing in the S&P 500 index because it represents the whole US economy',
 'Restricting investment decisions to businesses and industries one genuinely understands',
 'Relying on sell-side analysts whose expertise complements one''s own',
 'Limiting portfolio size to a number of holdings one can monitor closely',
 'b'),
(48, 'ec', 63, 1524, 'Why does Buffett describe compound interest as the fundamental engine of long-term wealth?',
 'Because inflation always erodes the value of fixed-income returns, leaving only equity compounding',
 'Because compound growth is linear and therefore predictable over long time horizons',
 'Because reinvested returns generate their own returns, creating exponential growth that magnifies even modest annual rates over decades',
 'Because tax-deferred accounts shelter compound returns from annual taxation',
 'c');
`;export{e as default};
