var e=`-- Migration 034: Seed exercise_options for History module (lesson IDs 25-28, exercise IDs 264-303).
-- These rows were absent from migration 018; this backfill is safe on existing databases (INSERT OR IGNORE).

-- ============================================================
-- Lesson 25 — Empire and Governance (exercises 264–273)
-- ============================================================

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(264, 'The Satrapy system — provincial governorships that allowed local autonomy while extracting tribute for the center.', 1),
(264, 'Direct military occupation of every conquered territory with Persian governors replacing all local customs.', 0),
(264, 'A network of Persian colonies planted in each region to spread Persian culture and language.', 0),
(264, 'A single unified legal code imposed across all territories, overriding local customs and religions.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(265, 'Concentrated military command under the emperor, a professional frontier army, and administrative capacity across the provinces.', 1),
(265, 'Democratic elections of provincial governors and a citizen militia defending the borders.', 0),
(265, 'Peaceful diplomacy with neighboring powers and trade agreements that eliminated the need for military force.', 0),
(265, 'A rotating system of emperors chosen by the Senate that prevented any single ruler from gaining too much power.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(266, 'Strategic overextension: the costs of maintaining global commitments eventually exceed the economic base that supports them.', 1),
(266, 'Technological stagnation: great powers decline when rivals develop superior military technology.', 0),
(266, 'Cultural corruption: great powers decline when their populations lose civic virtue and moral fiber.', 0),
(266, 'Demographic collapse: great powers decline when they cannot sustain population growth to staff their armies.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(267, 'Overextension leading to reliance on forces whose loyalty was to their commanders, not to Rome — a structural vulnerability.', 1),
(267, 'Rome''s deliberate policy of cultural integration, which successfully absorbed Germanic peoples into Roman identity.', 0),
(267, 'The strength of Germanic military tactics, which were simply superior to Roman legionary formations.', 0),
(267, 'A temporary budget shortfall that was resolved by the third century, after which Roman power recovered fully.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(268, 'Recognition, trade access, and a degree of internal autonomy — the tribute purchased legitimacy and security.', 1),
(268, 'Military protection from Chinese armies stationed permanently in tributary states.', 0),
(268, 'Full incorporation into the Chinese empire with Chinese officials appointed to govern.', 0),
(268, 'Access to Chinese religious texts and the right to adopt Chinese writing systems.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(269, 'Imperium without constitutional limits creates private military power that threatens republican institutions.', 1),
(269, 'That loyalty of soldiers can be bought through regular pay, regardless of who commands them.', 0),
(269, 'The Senate was too weak to govern Gaul directly, necessitating a powerful independent commander.', 0),
(269, 'Long military campaigns naturally produce great generals who deserve recognition and political power.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(270, 'The formal authority granted to Roman magistrates to command armies, administer justice, and enforce law — bounded by law, geography, and term.', 1),
(270, 'The permanent and hereditary right of the Roman emperor to rule all territories conquered by Rome.', 0),
(270, 'The collective will of the Roman Senate, exercised through majority vote on military and civil matters.', 0),
(270, 'A religious sanction given by the Roman priests that legitimized a commander''s military campaigns.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(271, 'A hegemonic arrangement in which subordinate states pay tribute or perform symbolic acknowledgment in exchange for autonomy and security.', 1),
(271, 'A system of direct taxation in which conquered peoples paid a fixed percentage of income to the conquering power.', 0),
(271, 'A trade agreement between equal sovereign states that specified mutual tariffs and commercial terms.', 0),
(271, 'A military alliance in which smaller states provided soldiers to a dominant power in exchange for protection.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(272, 'The roughly 200-year period from Augustus to Marcus Aurelius characterized by Roman political stability, economic integration, and relative internal peace.', 1),
(272, 'The period of Roman expansion from the founding of the Republic to the conquest of Carthage.', 0),
(272, 'The era of the Five Good Emperors, lasting approximately fifty years from Nerva to Marcus Aurelius.', 0),
(272, 'The period of Christian dominance in Rome from Constantine''s conversion to the fall of the Western Empire.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(273, 'The condition in which a state''s strategic commitments exceed the economic and military capacity to sustain them.', 1),
(273, 'A military strategy of attacking on multiple fronts simultaneously, spreading the enemy thin.', 0),
(273, 'The deliberate policy of expanding trade networks beyond the home territory to generate surplus wealth.', 0),
(273, 'A diplomatic failure in which a state makes too many treaty commitments that conflict with one another.', 0);

-- ============================================================
-- Lesson 26 — Republic and Collapse (exercises 274–283)
-- ============================================================

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(274, 'It broke the norm against political violence, making future violence easier to justify — the first step in institutional erosion.', 1),
(274, 'It showed that popular land reform was politically impossible in Rome, discouraging future reformers.', 0),
(274, 'It unified the Senate around a common program of aristocratic governance that stabilized the Republic.', 0),
(274, 'It was an isolated incident with no lasting consequences, quickly forgotten by the Roman political class.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(275, 'The traditional dictatorship had a six-month limit and required surrender of power; Sulla''s was indefinite and used to eliminate political opponents.', 1),
(275, 'Sulla''s dictatorship was constitutionally identical to previous dictatorships but was used against external enemies.', 0),
(275, 'The traditional dictatorship was also indefinite, but Sulla was the first to use proscription lists.', 0),
(275, 'Sulla''s dictatorship was illegal under Roman law, whereas previous dictatorships had Senate approval.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(276, 'When factions cannot accept shared constitutional rules as binding, political competition becomes war by other means.', 1),
(276, 'The fundamental problem was economic inequality — once the wealth gap closed, political violence would have ended.', 0),
(276, 'Foreign interference from Carthage and other enemies deliberately inflamed Roman factional conflict.', 0),
(276, 'The Roman constitution was poorly designed from the start and inevitably produced this outcome.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(277, 'Once he entered Italy with his army, he was in open rebellion — there was no legal path back to republican normality short of surrender and prosecution.', 1),
(277, 'The Rubicon was a religious boundary, and crossing it with an army violated sacred Roman traditions.', 0),
(277, 'The Senate had declared war on Caesar before he crossed, making the crossing a defensive response.', 0),
(277, 'Caesar''s army refused to return to Gaul, forcing him to march south against his own wishes.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(278, 'Constitutional norms are self-enforcing only as long as the political community treats them as binding; once a powerful actor violates one without decisive consequence, the norm weakens for everyone.', 1),
(278, 'The Roman constitution was too flexible, allowing too many exceptions that were eventually exploited.', 0),
(278, 'Rome''s expansion created too many provinces to govern under the old system, making collapse inevitable.', 0),
(278, 'The Roman people ultimately preferred monarchy to republicanism, so the Republic''s fall was democratically legitimate.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(279, 'Political authority is a public trust, not a private possession — those who exercise it must be accountable to the public, not merely to themselves.', 1),
(279, 'Political authority derives from military conquest and belongs to those strong enough to seize and hold it.', 0),
(279, 'Political authority is a divine grant, and rulers are accountable only to the gods, not to ordinary citizens.', 0),
(279, 'Political authority belongs to the most educated class, who govern in the interest of the ignorant majority.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(280, 'The Roman concept that political authority belongs to citizens collectively and is exercised through legitimate institutions — the foundation of republican theory.', 1),
(280, 'The Roman Senate''s formal declaration of public emergencies, which suspended normal constitutional protections.', 0),
(280, 'A specific Roman law that protected citizens from arbitrary arrest and guaranteed trial by jury.', 0),
(280, 'The Roman treasury and public wealth, administered by elected officials on behalf of the state.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(281, 'A constitutionally sanctioned emergency magistrate with absolute authority for a maximum of six months, expected to resign once the emergency passed.', 1),
(281, 'A permanent military commander appointed by the Senate to oversee provincial defense for life.', 0),
(281, 'An elected official who served a one-year term and shared executive power with a colleague.', 0),
(281, 'A religious official who held veto power over all legislation passed by the popular assemblies.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(282, 'The factional split in the late Roman Republic between politicians who used popular assemblies and tribunes (populares) and those who defended senatorial authority and aristocratic privilege (optimates).', 1),
(282, 'A division between Roman citizens who supported expansion into the East versus those who favored western expansion.', 0),
(282, 'The conflict between Roman-born citizens and those who had received citizenship through conquest or migration.', 0),
(282, 'A religious schism between Romans who favored traditional polytheism and those who adopted Eastern mystery cults.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(283, 'The gradual weakening of constitutional norms, typically through a sequence of violations each made easier by the precedent of the last.', 1),
(283, 'Sudden, violent overthrow of constitutional government by a military faction in a single decisive event.', 0),
(283, 'The natural process by which all political institutions decay and must be replaced after a fixed period.', 0),
(283, 'Economic deterioration of state finances that forces governments to cut essential services and lose legitimacy.', 0);

-- ============================================================
-- Lesson 27 — Revolution and Legitimacy (exercises 284–293)
-- ============================================================

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(284, 'The Thermidorian Reaction: revolutions devour their radical leadership and revert toward more conservative, stable settlements.', 1),
(284, 'That revolutions always produce the outcomes their founders intended once sufficient time has passed.', 0),
(284, 'That foreign military intervention is the primary cause of revolutionary moderation and stabilization.', 0),
(284, 'That radical ideology, once adopted, spreads irreversibly and cannot be moderated by internal resistance.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(285, 'It provides the theoretical justification for revolution: governments that lose popular consent can be legitimately overthrown.', 1),
(285, 'It argues that all existing governments should be immediately replaced by direct democracy.', 0),
(285, 'It provides a legal framework for parliamentary reform without any threat of revolutionary action.', 0),
(285, 'It demonstrates that natural rights are granted by governments and can be revoked when citizens behave badly.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(286, 'Charismatic legitimacy — it is personal to the leader and does not transfer to institutions.', 1),
(286, 'Legal-rational legitimacy — it depends on complex laws that ordinary people cannot understand or verify.', 0),
(286, 'Traditional legitimacy — it relies on customs that can be disrupted by economic or social change.', 0),
(286, 'All three types are equally unstable; Weber did not rank them by stability.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(287, 'To impose revolutionary ideals on a resistant population requires coercion; the coercion required corrupts the ideals and produces an organization whose interests diverge from them.', 1),
(287, 'The Jacobins were simply hypocrites who never sincerely believed in liberty and used idealism as propaganda.', 0),
(287, 'The Terror was a temporary, necessary phase that successfully created the conditions for lasting liberty in France.', 0),
(287, 'External enemies forced the Jacobins to use violence; without foreign invasion, the Terror would not have occurred.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(288, 'Dismantling an order does not generate the knowledge of what should replace it — the revolution revealed the difficulty of constructing positive institutions from negative principles.', 1),
(288, 'The ancien regime was so deeply embedded that it could not truly be dismantled, only modified superficially.', 0),
(288, 'The problem was purely military: foreign armies kept invading France and prevented stable government from forming.', 0),
(288, 'French revolutionary leaders deliberately prolonged instability to maintain their own power and prevent elections.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(289, 'Lack of legitimacy: legal-rational authority requires not just legal text but popular belief that the authority is rightful.', 1),
(289, 'Lack of military power: governments cannot function without an army willing to enforce their decrees.', 0),
(289, 'Lack of economic resources: without tax revenue, no government can maintain its constitutional provisions.', 0),
(289, 'Lack of international recognition: governments need foreign states to acknowledge their authority to function.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(290, 'The perceived right to rule — the belief of the governed that an authority has a valid claim to their compliance.', 1),
(290, 'The legal right to rule, established by a written constitution and enforced by an independent judiciary.', 0),
(290, 'The military capacity to enforce obedience, measured by the size and loyalty of the armed forces.', 0),
(290, 'The electoral mandate received by a government through free and fair democratic elections.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(291, 'The phase in a revolution in which radical leadership is overthrown and the movement moderates or reverses toward a more stable, conservative settlement.', 1),
(291, 'The economic recovery period that follows the destruction of revolutionary warfare and restores prosperity.', 0),
(291, 'The constitutional convention phase in which revolutionaries draft and ratify a new form of government.', 0),
(291, 'The diplomatic phase in which a new revolutionary government seeks recognition from foreign powers.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(292, 'The principle that legitimate political authority derives from the agreement of those subject to it, not from divine right, hereditary privilege, or conquest.', 1),
(292, 'The requirement that all major government decisions be submitted to a public referendum before taking effect.', 0),
(292, 'The democratic principle that the majority''s preference must always override minority rights.', 0),
(292, 'The electoral requirement that no government may remain in office without winning a fresh popular vote every year.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(293, 'The tension between idealistic revolutionary goals and the coercive means required to impose them on a resistant population — where the means corrupt the ends.', 1),
(293, 'The practical problem of managing a revolution''s transition from guerrilla warfare to conventional governance.', 0),
(293, 'The ideological conflict between Jacobin moderates and radicals over the pace of reform.', 0),
(293, 'The financial challenge of funding revolutionary programs without access to the previous regime''s tax base.', 0);

-- ============================================================
-- Lesson 28 — Grand Strategy and Consequences (exercises 294–303)
-- ============================================================

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(294, 'Appeasement fails against an adversary with unlimited aims — concessions signal weakness and invite further demands.', 1),
(294, 'Appeasement is always a successful strategy when the appeasing power is militarily stronger than the aggressor.', 0),
(294, 'The Munich agreement failed only because France and Britain lacked the political will to enforce its terms.', 0),
(294, 'Appeasement succeeded in the short term but was undermined by domestic political opposition in Britain and France.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(295, 'It prevented a repeat of the 1918 armistice dynamic, in which a negotiated end allowed German nationalists to claim the army was undefeated — the "stab in the back" myth.', 1),
(295, 'It maximized Allied war aims by ensuring the Axis powers would pay full reparations after the war.', 0),
(295, 'It was a purely symbolic statement with no strategic purpose, intended to boost Allied civilian morale.', 0),
(295, 'It was designed to prevent any negotiated separate peace between the Soviet Union and Nazi Germany.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(296, 'Blowback: the unintended consequences of an intervention that eventually harm the intervening power.', 1),
(296, 'Deterrence: the successful use of proxy forces to prevent Soviet expansion without direct military confrontation.', 0),
(296, 'Balance of power: the deliberate creation of a regional counterweight to Soviet influence in Central Asia.', 0),
(296, 'Strategic overextension: the United States committing more resources to Afghanistan than the conflict required.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(297, 'Balance of Power: the deliberate construction of a multipolar order to prevent hegemonic dominance.', 1),
(297, 'Collective Security: the creation of an international organization to enforce peace through majority vote.', 0),
(297, 'Deterrence: the threat of overwhelming force against any state that violated post-Napoleonic boundaries.', 0),
(297, 'Appeasement: granting France territorial concessions to ensure its cooperation in the new European order.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(298, 'Credibility (the threat must be believed) and capability (the threatened response must actually be possible).', 1),
(298, 'Secrecy (the adversary must not know the exact nature of the response) and speed (retaliation must be immediate).', 0),
(298, 'Proportionality (the threatened response must match the provocation exactly) and publicity (the threat must be public).', 0),
(298, 'Rationality (both sides must be rational actors) and symmetry (both sides must have equal nuclear arsenals).', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(299, 'Foreign entanglements create factional conflicts at home; faction destroys the civic unity that republican government requires.', 1),
(299, 'America''s geographic isolation from Europe made foreign alliances unnecessary and potentially costly.', 0),
(299, 'Washington believed all European governments were corrupt and that associating with them would taint America.', 0),
(299, 'Foreign alliances were constitutionally prohibited under the Articles of Confederation and should remain so.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(300, 'The principle that states should form coalitions to prevent any single power from achieving hegemony over the international system.', 1),
(300, 'The policy of maintaining exactly equal military forces among all major powers through treaty-enforced arms limits.', 0),
(300, 'An economic theory holding that international trade should be balanced so no nation accumulates excessive surplus.', 0),
(300, 'A diplomatic doctrine requiring great powers to consult each other before taking any unilateral military action.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(301, 'Concessions to an aggressive power to avoid conflict — a viable strategy against limited aims, a failure against unlimited ones.', 1),
(301, 'A military strategy of strategic withdrawal to draw an enemy into an overextended position before counterattacking.', 0),
(301, 'A diplomatic protocol in which weaker states formally acknowledge the superior status of a dominant power.', 0),
(301, 'The policy of offering economic incentives to adversaries to encourage cooperative rather than confrontational behavior.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(302, 'Preventing an action by making its costs unacceptable to the adversary — requiring both the capability to impose those costs and the credibility that you will.', 1),
(302, 'Defending against an attack by positioning forces at every potential point of vulnerability along a frontier.', 0),
(302, 'Building alliances with neighboring states to ensure collective defense against any potential aggressor.', 0),
(302, 'Preemptively attacking an adversary who is believed to be planning an attack, to gain strategic advantage.', 0);

INSERT OR IGNORE INTO exercise_options (exercise_id, option_text, is_correct) VALUES
(303, 'Unintended negative consequences of an intervention that harm the intervening power — typically through second and third-order effects not anticipated at the time of action.', 1),
(303, 'The direct military casualties and financial costs of an intervention, calculated before the operation begins.', 0),
(303, 'Diplomatic protests from neutral states who object to unilateral military action outside the UN framework.', 0),
(303, 'The domestic political backlash that occurs when a foreign intervention becomes unpopular with voters.', 0);
`;export{e as default};
