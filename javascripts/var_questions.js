var questions = [
      'Two weeks after a Robert Geiger news story coined a name for this event, Hugh Bennett was made director of a new agency within the Interior Department. This event prompted the Soil Conservation Act, as it was partly caused by cattle overgrazing. Dorothea Lange’s iconic photograph Migrant Mother depicts a family during, for ten points, what event in which "Okies" attempted to move to California to avoid severe drought during the Great Depression?',                                                                                                                             
      'Genseric captured this city after his betrothal to Eudocia was broken, and Alaric was able to capture this city after the death of Stilicho. The Battle of the Allia led to the capture of this city, which was forced to measure out ransom money using weighted scales by Brennus. Romulus Augustulus was deposed after the capture of this city in 476 AD. For ten points, name this city that was sacked several times during the fall of its Italy-based empire.',                                                                                                                              
      'This kingdom was briefly controlled by Britain after the arrival of the HMS Carysfort in the Paulet Affair. Because Kalakaua had been intimidated into giving his power away, this kingdom’s legal code was known as the Bayonet Constitution. Sanford Dole was appointed president of this kingdom shortly before it was annexed by William McKinley in 1898. For ten points, name this kingdom, that was ruled by Queen Liliuokalani and became the 50th US state.',                                                                                                                               
      'In what became known as this city’s "mile," a group of troops including Randall Ramaglia walked through RPG fire to a rally point at National Street. William Garrison commanded troops in a battle in this city that was part of the larger Operation Gothic Serpent; in that battle, troops under Mohammad Farah Aidid shot down two Black Hawk helicopters. For ten points, name this site of a 1993 battle involving Delta Force, the capital of Somalia.',                                                                                                                              
      'This leader’s promotion of pro-feminist policies was noted with the statement "Women hold up half the sky." This man began the Anti-Rightist Campaign after severe criticism led him to undo the Hundred Flowers Movement. In a failed attempt to modernize, this man encouraged peasants to create backyard furnaces during the Great Leap Forward, which began in 1958. For ten points, name this Communist chairman of China.',                                                                                                                            
      'This President’s doctrine pledged support to Middle Eastern governments, including military support for Camille Chamoun of Lebanon. Earl Warren was appointed as Chief Justice by this president a year before Brown v. Board of Education overturned the doctrine of "separate but equal." This president sent members of 101st Airborne Division to escort the Little Rock Nine. For ten points, name this president and former World War II Supreme Allied Commander.',                                                                                                                             
      'Members of this religious movement follow a ruleset called the Ordnung. One of the most conservative sects of this religious group, based in Nebraska, is known for its brown clothing. Some young people from this religious group are allowed to disobey norms in an exploratory period called Rumspringa. Lancaster County, Pennsylvania was a migration site for many members of, for ten points, what religious group known for living without the conveniences of modern technology?',                                                                                                                               
      'In this work, a character recounts the tale of a man named Er who revives on his funeral pyre and shares an account of the afterlife. A character in this work tries to explain the psyche by asking Glaucon to imagine a divided line and imagines a ring that makes the wearer invisible, the Ring of Gyges. The Allegory of the Cave and the bene ts of rule under a \philosopher-king" are described in, for ten points, what Platonic dialogue about justice and forms of government like oligarchy and democracy?',                                                                                                                               
      'This battle was fought concurrently with an engagement at Wavre [wahv], leading to the absence of Emmanuel Grouchy. This battle is commemorated by the Lion’s Mound, where a commander was shot off his horse. The arrival of Gebhard von Blucher’s Prussians helped turn the tide of this battle, which ended the Hundred Days and forced its loser into exile in St. Helena. For ten points, name this 1815 battle in which Wellington defeated Napoleon for the last time.',
      'This man advocated for a “priesthood of all believers” in the work To the Christian Nobility of the German Nation. He was protected by Frederick the Wise after Charles V ordered his arrest. Pope Leo X excommunicated this man with the bull Exsurge Domine [EX-ur-gay DOE-mee-nay] after he posted the 95 Theses. For ten points, name this German priest who began the Protestant Reformation.',
      'This nation was invaded by Huang Taiji in 1636 as the Qing [CHING] dynasty sought to solidify its war against the Ming. In 1592, Toyotomi Hideyoshi’s invasion of this nation was disrupted by enemy turtle ships. The Joseon dynasty ruled it until 1897, and it was annexed by Japan in 1910. For ten points, name this East Asian peninsula split after World War II by Soviet and American agreement into two countries with capitals Pyongyang and Seoul.',
      'This president’s “New Look” policy led to the overthrow of Guatemalan Jacobo Arbenz. This president overhauled the nation’s infrastructure with the National Interstate and Defense Highways Act. For ten points, name this U.S. President who won the 1952 election with the slogan “I like Ike” after leading American troops in Europe in World War II.',
      'Shoshone [sho-sho-nay] Falls and Twin Falls lie on this river, whose largest tributary is the Salmon River. In 1974, Evel Knievel’s Skycycle X-2 nearly jumped a canyon of this tributary of the Columbia River. For ten points, name this river that flows through Hells Canyon after receiving the Boise River near the border of Oregon and Idaho.',
      'The rVSV-ZEBOV vaccine has been shown effective in treating this disease. Emile Ouamouno died six days after contracting this disease, and Eric Duncan infected two Americans with it. Liberia was declared free of this disease after 42 days with no new cases. For ten points, name this disease which caused a 2014 epidemic in West Africa.',
      'In the Hellenistic period, this deity was syncretized with Apis to form the god Serapis. The djed pillar represented the spine of this deity, whose wife searched throughout Egypt to find the 14 pieces of his body after he was torn apart by his jealous brother, Set. For ten points, name this Egyptian god of the afterlife whose consort was his sister, Isis.',
      'Neil Armstrong took a recording of theramin music and this man’s ninth symphony on Apollo 11. He wrote his twelfth string quartet while spending a summer in Spillville, Iowa, though his Slavonic Dances honored Brahms and paid tribute to his native Bohemia. For ten points, name this Czech composer who, while visiting America, wrote his Symphony no. 9, “From the New World.”',
      'One artist from this country classified his work as “stabiles” and “mobiles,” one of which consists of aluminum fins suspended on steel wire. That artist from this country, Alexander Calder, also created Bent Propeller, which was destroyed when the Minoru Yamasaki-designed World Trade Center was attacked on 9/11. For ten points, name this country, home of the Museum of Modern Art in New York.',
      'Supporters of this party were victims of the White Terror Massacre. The Xian [SHEE-ahn] incident was perpetrated by members of this party. The Gang of Four consisted of members of this party and were later found guilty of treason near the end of one of this party’s efforts, the Cultural Revolution. For ten points, name this ruling party of an Asian nation once led by Mao Zedong.',
      'This organization founded the Bowen Country Club as a summer camp. Toynbee Hall inspired this institution, which was founded on Halsted Street by Ellen Gates Starr and the first American woman to win a Nobel Peace Prize. This organization started providing education and support to the poor in 1889. For ten points, name this settlement house in Chicago co-founded by Jane Addams.',
      'This country featured the highest scorer at the inaugural FIFA World Cup, Guillermo Stabile, whose team lost to Uruguay in the finals. Mario Kempes led this country to a 1978 World Cup win as the host nation. In this country’s win over England at the 1986 World Cup, the “Hand of God” scored one goal for Diego Maradona. For ten points, name this country whose soccer team, led by Lionel Messi, placed second in the 2014 World Cup.',
      'Nicholas Reeves has controversially suggested using radar in this location to find hidden rooms. Pierre Lacau supervised a study of this location funded by Lord Carnavon who died of mosquito-borne disease shortly after it was opened. This location, officially designated KV62, was discovered in 1922 by Howard Carter. For ten points, name this surprisingly well-preserved burial site of a boy pharaoh.',
      'The Interahamwe engaged in one of these events after the death of Juvenal Habyarimana. Viktor Yuschenko classified the Holodomor as one of these events, as the Soviets declared the possession of food a crime. Turkey does not recognize one of these events against the Armenian people. For ten points, name these atrocities that involve mass killings of a specific demographic, such as the Holocaust.',
      'Nobukazu Kuriki lost 9 fingers at this location in 2012, and a 1996 disaster here that killed Scott Fischer was chronicled in Jon Krakauer’s Into Thin Air. No one summited this peak in 2015 after an April earthquake killed 19 people at its base camp and Nepal closed it for the season. The guide Tenzing Norgay and Sir Edmund Hillary were the first to climb, for ten points, what tallest mountain in the world?',
      'When asked about violence against followers of this religion, one politician responded, “When a big tree falls, the earth shakes.” An empire named for this religion ruled the Punjab under Maharaja Ranjit Singh during the first half of the 19th century. For ten points, name this monotheistic religion founded by Guru Nanak whose male adherents follow five articles of faith, including the keeping of uncut hair.',
      'This man noted that “Our constitution does not copy the laws of neighboring states” in a speech that offered “comfort [...], not condolence” after the first year of the Archidamian War. He evacuated the farmers of Attica to within the Long Walls, which protected them from Spartan skirmishes but led to the spread of plague that killed him. For ten points, name this statesman of the Athenian Golden Age who opposed Sparta in the early Peloponnesian War.',
      'France briefly held Fort Caroline in what is now this state’s Timucuan Preserve. After the Seven Years’ War, this region was split into east and west sections at the Apalachicola River. The Adams-Onis Treaty ceded this region to the United States, which had been fighting the Seminoles in this territory and nearby Georgia. For ten points, name this once-Spanish territory, now a U.S. state with capital Tallahassee.',
      'This country owns, but is not allowed to navigate, the western wetlands surrounding Lago Merin at the delta of the Yaguaron River. Its western border is a river named for this country; that river combines with the Parana River to form the Rio de la Plata. For ten points, name this country southwest of Brazil whose capital is Montevideo.',
      'Tral stations and the Command-Measurement Complex were used to observe this object. A part of this vehicle was derived from an R7 intercontinental ballistic missile, and it used (+) four radio antennas to broadcast a repeating, pulsing signal. President Eisenhower created ARPA and the government increased funding for (*) science and technology after this object was launched in October 1957. The Soviets started the Space Race with the launch of, for ten points, what first artificial satellite?',
      'This man resigned one position after claiming the media wanted Donovan McNabb to do well because he is black. He offered to purchase aspirin for “all the (+) women at Georgetown University” in response to Congressional testimony on birth control given by Sandra (*) Fluke, who this man called a prostitute in 2012. For ten points, name this conservative commentator whose talk-radio show is the most-listened-to radio program in the United States.',
      'This man served as the defense lawyer for Samuel Houston after he assaulted fellow congressman William Stanbury and later prosecuted the attempted assassin of Andrew Jackson, Richard (+) Laurence. After boarding the HMS Tonnant, he witnessed the bombardment of Fort (*) McHenry and wrote a poem. For ten points, name this man whose Star Spangled Banner became the American national anthem.',
      'One leader of this conflict, Jose Sanjurjo, died in a plane crash after leaving Estoril. The term “Fifth Column” was coined during this war. The Abraham Lincoln Brigade was one of the International Brigades to join this conflict, and (+) Nazi Germany supported one side in this conflict with the Condor Legion. After seizing (*) Cartagena, Republican forces surrendered to the Nationalists. For ten points, name this conflict in an Iberian country that brought Francisco Franco to power.',
      'One mayor of this city, Abraham Beame, asked President Ford for a bailout in 1975. Another mayor of this city drew criticism for limiting the size of (+) sugary soft drinks and for his stop-and-frisk policy, the latter of which (*) Bill de Blasio campaigned against in 2013. Michael Bloomberg was a three-term mayor of, for ten points, what American city in which the police patrol Central Park and Times Square?',
      'In this state, one state senator filibustered this state’s Senate Bill 5, which would have limited access to abortions. That senator, Wendy Davis, lost in the 2014 gubernatorial elections for this state. The (+) presidential campaign of one Senator from this state aroused controversy, as he was born in Canada; that senator is the first (*) Cuban-American to run for the presidency, Ted Cruz. For ten points, name this state whose current Governor, Greg Abbott, succeeded the longest-serving governor in state history, Rick Perry.',
      'This man renounced his original citizenship in 1985 to legally become the owner of an American TV station. He lured Sam Chisholm away from Kerry Packer’s Nine Network to be the CEO of his company, (+) British Sky Broadcasting, and his conglomerate acquired the Wall Street Journal in 2007. His tabloid, (*) News of the World, was shuttered in 2011 after a celebrity phone hacking scandal. For ten points, name this founder of News Corp who, in 2015, stepped down as CEO of 21st Century Fox.',
      'This man destroyed the Vandals after his generals won the battles of Tricamerum and Ad Decimum. The Secret History by Procopius detailed the rule of this emperor and his marriage to a (+) courtesan who convinced him to stay after a riot by the Blues and Greens. This survivor of the Nika Riots formed the (*) Corpus Juris Civilis, later known as his namesake “Code.” For ten points, name this Byzantine emperor who built the Hagia Sophia.',
      'The Marquis of Pombal established the Douro Wine Company in this country. A succession crisis in this country was sparked after the death of (+) Sebastian I at the Battle of the Three Kings. It gained its independence from its eastern neighbor in the Restoration War. The House of (*) Braganza ruled, for ten points, what Iberian country that colonized Brazil?',
      'This man appointed George Creel to head the Committee on Public Information, a propaganda machine. He attacked those who “poured the poison of disloyalty” in a State of the Union address, but was unable to get a press-censorship clause in the Espionage Act. For ten points, name this President who reneged on a campaign promise to “keep us out of the War” by committing American forces to World War I.',
      'In this novel, a “resurrection man” emerges from the mists in front of a mail coach. John Barsad plants evidence on a man who is a lookalike of a drunken lawyer; that man ends this novel by saying “it is a far, far better rest that I go to than I have ever known” at the guillotine. French nobleman Marquis St. Evremonde is the uncle of Charles Darnay in, for ten points, what novel by Charles Dickens set during the French Revolution?',
      'During this battle, General Howe lost many of his officers, including John Pitcairn. According to legend, someone during this battle gave the order “Don’t shoot until you see the whites of their eyes.” Joseph Warren was killed at, for ten points, what Revolutionary War battle outside Boston that, despite its name, mostly took place on Breed’s Hill?',
      'This person’s life savings were swindled by two men who claimed to have gold from a distant relative. This spy for the Union during the Raid on Combahee Ferry had biographies written by Sarah Hopkins Bradford, which described her navigating a network of tunnels and safehouses. For ten points, name this abolitionist who escorted slaves as they escaped on the Underground Railroad.',
      'This figure was guarded by a group of horsemen called the Celeres, and he may be associated with the war god Quirinus because of his disappearance near the Quirinal Hill. He proclaimed “so perish every one hereafter that will leap over my wall” while killing his brother after they debated the meaning of the number of birds flying around their heads. For ten points, name this brother of Remus, the first king of the Romans.',
      'This man “smelt a rat in Philadelphia” and refused to attend the Constitutional Convention. In one speech, he said “Caesar had his Brutus, Charles his Cromwell” to the House of Burgesses over his opposition to the Stamp Act, and his most famous speech occurred at St. John’s Church in a debate on sending troops during the American Revolution. For ten points, name this American founding father who proclaimed “Give me liberty or give me death!”',
      'The Yaghan people are native to this island chain. Its largest city of Ushuaia [oosh-WHY-uh] was established as a penal colony and is served by the End of the World Train. The Drake Passage lies south of this island chain, and far fewer ships rounded its Cape Horn after the opening of the Panama Canal. For ten points, name this archipelago shared between Chile and Argentina on the southern tip of South America, whose Spanish name translates as “land of fire.”',
      'In 2003, a copy of this painting was covered by a blue curtain while Colin Powell addressed the United Nations. On the left side of this painting, a bull stands over a woman who is holding her dead child. An eye-shaped light bulb explodes in this painting above an impaled, screaming horse. For ten points, name this painting inspired by the bombing of the title Basque town, a massive painting by Pablo Picasso.',
      'This man directed a 2005 film where he played Fred Friendly, a colleague of Edward Murrow, as well as a 2014 film about the recovery of art in Nazi Germany. This director of Good Night and Good Luck and The Monuments Men operates a project to monitor Sudanese war crimes via satellite imagery. For ten points, name this American actor who starred as Daniel Ocean in the Ocean’s 11 trilogy and with Sandra Bullock in 2013’s Gravity.',
      'This ruler attempted to establish the Kingdom of Livonia as a vassal state, and this ruler established his country’s first printing press at Kitai-gorod. This ruler conquered Kazan and Astrakhan, and he established a secret police force known as the Oprichniki. Feodor I succeeded this ruler after he killed his eldest son in a fit of rage, eventually leading to the Time of Troubles. For ten points, name this first Tsar of Russia whose epithet notes his power, not his cruelty.',
      'The price elasticity of this quantity should always be negative, but Veblen goods violate that theory. John Maynard Keynes argued that, in recessions, the aggregate of this quantity should be bolstered by government spending. During the Irish Potato Famine, this quantity rose for potatoes even as their price rose, as people could no longer afford luxuries like meat. For ten points, name this economic quantity that, in competitive markets, should reach equilibrium with supply.',
      'The inefficient Trabant was built in this former country. It used distinctive Ampelm ̈annchen crosswalk symbols that are now enjoyed as its modern residents experience “Ostalgie.” Its residents were once spied on by the Markus Wolf-led Stasi, which revealed its records after reunification in 1990. For ten points, name this former Soviet-zone country with capital Berlin.',
      'During this event, paratroopers captured bridges on the River Orne and Saint-M`ere-Eglise. The First US Army Group participated in Operation Quicksilver prior to this campaign, and was commanded by General Patton. The Canadians were supposed to capture Caen during this operation, and the Americans were assigned to Fortress Cherbourg, part of the Atlantic Wall. For ten points, name this operation, an Allied landing on five beaches in Northern France.',
      'This object was excommunicated by Calixtus III, who believed it boded evil for the defenders of Belgrade. Mark Twain said that this object and he were “two unaccountable freaks” and claimed that he would “go out with it,” a prediction that came true when he died in 1910. The Giotto Probe flew through the coma of this object in 1986, which will be visible again in 2061. For ten points, name this comet that approaches Earth roughly every 76 years.',
      'Kate Altman’s testimony of this event was discredited after one lawyer asked her to repeat her version multiple times. Frances Perkins was sent to investigate this event, for which Max Blanck and Isaac Harris stood trial for locking exit doors from the outside, leading to the deaths of 146 workers. For ten points, name this 1911 disaster in a New York garment factory.',
      'This city’s controversial STRESS program was ended by Mayor Coleman Young. During the 12th Street Riot, Lyndon B. Johnson sent the 101st Airborne to this city, where they provided support for George Romney’s National Guard. Its wealthier suburbs are separated from this city’s poorer areas by 8 Mile Road, and this city’s 1943 Race Riots erupted over tensions caused by high paying automotive jobs. For ten points, name this largest city in Michigan.',
      'This man fought during the Second Baron’s War against Simon de Montfort, who he killed at the Battle of Evesham. This monarch issued the Edict of Expulsion, which expelled all Jews from England. He invaded Scotland, winning the Battle of Falkirk against the forces of William Wallace. For ten points, name this English King given the name “Longshanks” because of his height.',
      'A portion of this structure was built in the contested Ordos region. The early heqin [huh-CHEEN] system allowed the Xiongnu [tchee-ONG-noo] to rule the area north of this structure. The Jiayu Pass serves as the end of one section of this structure built by the Ming dynasty to defend against Mongol attacks. For ten points, name this massive series of Chinese defensive fortifications.',
      'In a letter to John Holmes, Thomas Jefferson commented that this law had “awakened and filled me with terror.” James Tallmadge unsuccessfully proposed that this law make (+) children of slaves free after reaching 25 years old. It was overturned by the (*) Kansas-Nebraska Act and ruled unconstitutional in Dred Scott v. Sanford. For ten points, name this 1820 compromise that banned slavery in certain regions of the Louisiana Purchase, except in a namesake state.',
      'This man was thought to be aboard a plane carrying the Bolivian president in 2013, but he had not left Sheremetyevo Airport since arriving there from Hong Kong. This former employee of (+) Booz Allen Hamilton was attempting to avoid extradition to the U.S. after leaking sensitive (*) documents to Glenn Greenwald. For ten points, name this man who in June 2013 revealed the extent of U.S. government surveillance programs such as PRISM.',
      'James Monroe vouched for this man’s U.S. citizenship, freeing him from French prison. He was sued for libel after writing a response to Edmund Burke’s Reflections on the (+) Revolution in France, and he criticized organized religion and the divinity of the Bible while advocating for the rise of deism in The (*) Age of Reason. The absurdity of an island ruling a continent was observed by, for ten points, what early American revolutionary thinker in his 1776 pamphlet Common Sense?',
      'This adjective names a white supremacist “Council of Citizens” led by Earl Holt. Brent Bozell ghostwrote a book for Arizona Senator Barry Goldwater about The Conscience of this type of person. The Canadian Alliance (+) merged with another party to form the Canadian political party of this name, which was, until October 2015, led by Stephen (*) Harper. Traditional cultural institutions are supported by, for ten points, what political philosophy that describes the American Republican Party, contrasted with “liberalism”?',
      'Livy claims that one participant in this conflict used heated vinegar to cross a blocked mountain pass. Quintus Fabius was nicknamed “the delayer” during this conflict for refusing to engage in battle. One side in this conflict lost at (+) Lake Trasimene [trah-sih-meh-nee] but later won the decisive victory on the plains of Zama under Scipio [SKIP-ee-oh], counteracting a devastating loss at Cannae [CANN-aye]. The (*) Alps were traversed by Hannibal during, for ten points, what second of a series of conflicts between Rome and Carthage?',
      'In one work set in this country, the title character sings “All alba vincero!” or “At dawn, I will win!” In another work set in this country, a woman interrupts a performance of The Red Detachment of Women. The aria (+) “Nessun dorma” is sung by Prince Calaf in this setting of Giacomo Puccini’s (*) Turandot. John Adams composed an opera about a 1972 Presidential visit to, for ten points, what country where Richard Nixon met Mao Zedong?',
];
