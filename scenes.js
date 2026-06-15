const SCENES = {

  // ═══════════════════════════════════════════
  //  CHAPTER 1 — Arrival at Hargrove Manor
  // ═══════════════════════════════════════════

  intro: {
    chapter: 1,
    location: 'Hargrove Manor — Main Gate',
    speaker: 'Octavia (You)',
    bg: 'img/gate.jpg',
    text:
      `As the iron gates of Hargrove Manor loomed above her, Octavia spent a moment wondering how, exactly, she had landed there.\n\n` +
      `Maybe that was a lie. She knew exactly why she was there. One week ago, she had received a letter at the door of her shoebox apartment inviting her to the will reading of Harlowe Hargrove. Some old money billionaire whose family made their money from the rail roads, then from oil.\n\n` +
      `While it didn't answer the question of why some old guy would give her anything, Octavia couldn't give up the chance to go.\n\n` +
      `Either way, nothing bad can happen from just going. At least that's what she told herself, putting on her lucky locket in front of her cracked vanity, the beeping of machines in the background. Now, she was sorely regretting her decision, but her Uber already left and she didn't have the money for a new ride.\n\n` +
      `Only way out was through.`,
    choices: [
      { text: 'Enter the manor.', next: 'foyer' },
    ]
  },

  foyer: {
    chapter: 1,
    location: 'The Grand Foyer',
    speaker: 'Octavia (You)',
    bg: 'img/foyer.jpg',
    text:
      `The grand foyer was exactly as she expected — a ceiling towering overhead with an honest-to-god chandelier casting a soft glow over everything. The manor's butler guided her there with instructions to enter the solicitor's room whenever she was ready. As she walked in, the conversation died down, and the room's occupants all stared at her.\n\n` +
      `There were the maids of course, hired help nearly blending into the background as they delivered refreshments to others. An assortment of people in glittering dresses and sharply tailored suits all had their eyes on Octavia. One woman in a stiff blonde updo actually laughed when she locked eyes with her. Aunts, uncles, and whichever family members that wanted a piece of the inheritance, probably. Octavia only recognized a couple faces.\n\n` +
      `Near the back, Whitney Hargrove stood with a similarly blonde child, conversing quietly near a painting. Eldest daughter, founder of one of the most profitable engineering firms in the country, thanks to a tidy initial investment from her father. On the other side, a large, heavily tattooed man — Thomas Hargrove, the second son — was in the middle of an argument with a brown-haired woman holding a baby. She was bouncing the child in one hand and gesturing in his face with the other. Other people were inching away from them, but the couple paid no heed to them, voices slowly increasing in volume.\n\n` +
      `A couple feet from Whitney, a teenage girl sat alone with her phone, scanning the room with sharp blue eyes. One of Whitney's kids, Octavia guessed. The other — a tall boy — was speaking with his mother, sipping from a glass full of an amber liquid every second word.`,
    choices: [
      { text: 'Approach Whitney.', next: 'talk_whitney' },
      { text: 'Approach Thomas.', next: 'talk_thomas' },
      { text: 'Talk to the girl on the stairs.', next: 'talk_rosaline' },
      { text: 'Go straight to the solicitor\'s office.', next: 'solicitor' },
    ]
  },

  talk_rosaline: {
    chapter: 1,
    location: 'The Grand Foyer — Staircase',
    speaker: 'Rosaline Seastar',
    bg: 'img/foyer.jpg',
    text:
      `Up close, the girl was younger than she'd looked. Sixteen, maybe. She had her mother's sharp eyes but dark hair unlike anyone there.\n\n` +
      `She didn't look up from her phone when Octavia approached, but she gave a hesitant smile when Octavia sat beside her.\n\n` +
      `"You're the one stranger in the will, aren't you." Her voice was softer than Octavia expected.\n\n` +
      `"I — yes. I think so. How did you—"\n\n` +
      `"Mom talked about you." Rosaline scrolled without looking up. "She asked the solicitor for all the people attending for 'scheduling reasons'." Her fingers made the quotes in the air, as she finally looked at Octavia. "I think she was just checking the competition. Are you?"\n\n` +
      `"Am I what?" Octavia asked.\n\n` +
      `Rosaline gave her a careful glance. "Competition."`,
    addsEvidence: {
      id: 'rosaline_tip',
      icon: '💬',
      name: 'Rosaline — Whitney\'s Questions',
      desc: 'Whitney requested the details of all people listed in the will. She cares a lot about it, maybe there\'s something she really wants?',
    },
    sets: ['met_rosaline'],
    choices: [
      { text: '"Did you know your grandfather well?"', next: 'rosaline_more' },
      { text: '"Your mum gets weird about those kinds of things?"', next: 'rosaline_whitney' },
      { text: 'Thank her and move on.', next: 'foyer_post_rosaline' },
    ]
  },

  rosaline_more: {
    chapter: 1,
    location: 'The Grand Foyer — Staircase',
    speaker: 'Rosaline Seastar',
    bg: 'img/foyer.jpg',
    text:
      `Rosaline hummed at the question, squinting in the air like she was really thinking about it.\n\n` +
      `"He can't stand my brother and I — sorry, couldn't." She corrected herself. "He hated my father, and all that he had — didn't have, I guess. Money, connections, everything a Hargrove should marry into my father lacked. So no, I don't think I was particularly close to him."\n\n` +
      `She went back to her phone. Conversation over, apparently. Octavia had the distinct sense she'd just been told something important.`,
    addsEvidence: {
      id: 'rosaline_grandfather',
      icon: '💬',
      name: 'Rosaline — "I hated my grandfather"',
      desc: 'Harlowe resented Rosaline\'s father for his lack of wealth. If he hated her father so much, how did Whitney marry him?',
    },
    choices: [
      { text: 'Move on.', next: 'foyer_post_rosaline' },
    ]
  },

  rosaline_whitney: {
    chapter: 1,
    location: 'The Grand Foyer — Staircase',
    speaker: 'Rosaline Seastar',
    bg: 'img/foyer.jpg',
    text:
      `"The house, mostly. Who gets it, who manages it. Whether Uncle Aaron is coming." A pause. Aaron was the youngest son. A big doctor in New York, Octavia had heard of his work. She couldn't remember if he was a director of someplace or just a department head. "She and Dad used to fight about him a lot. He's not Uncle Thomas' favourite person either."\n\n` +
      `She glanced toward where Thomas was still arguing with his wife, a maid awkwardly attempting to take the baby from the brown-haired lady's arms.\n\n` +
      `"He wasn't going to come. Uncle Aaron, I mean. Mum had to call him three times." Rosaline shrugged. "He said he's only coming because there's something he needs to get."`,
    addsEvidence: {
      id: 'rosaline_aaron',
      icon: '💬',
      name: 'Rosaline — Aaron and his father',
      desc: 'Aaron almost didn\'t come to the reading. Whitney called him three times. He only came because of something he hopes to get from the inheritance.',
    },
    sets: ['met_rosaline'],
    choices: [
      { text: 'Move on.', next: 'foyer_post_rosaline' },
    ]
  },

  foyer_post_rosaline: {
    chapter: 1,
    location: 'The Grand Foyer',
    speaker: 'Octavia (You)',
    bg: 'img/foyer.jpg',
    text:
      `The foyer hadn't changed in the thirty seconds she'd been away from it. Thomas was still arguing. Whitney had relocated slightly and was now very deliberately not looking in Octavia's direction.\n\n` +
      `There was still time before the solicitor called everyone in.`,
    choices: [
      { text: 'Approach Whitney.', next: 'talk_whitney' },
      { text: 'Approach Thomas.', next: 'talk_thomas' },
      { text: 'Head to the solicitor\'s office.', next: 'solicitor' },
    ]
  },

  talk_whitney: {
    chapter: 1,
    location: 'The Grand Foyer',
    speaker: 'Whitney Hargrove',
    bg: 'img/foyer.jpg',
    text:
      `Balling up her courage, Octavia crossed the foyer. Whitney's blue eyes — and those of her son — snapped to her immediately.\n\n` +
      `"Um — good afternoon, Mrs. Hargrove," Octavia managed.\n\n` +
      `"Seastar." She responded, dry as dust. A beat of silence. "I thought I instructed the staff to leave us be after the death of my father."\n\n` +
      `"Oh, I'm not part of the staff!" Octavia said quickly. "I saw your company's reports in Business Illustrated — your choice to use hardened glass as a texturizer in your manufacturing process rather than natural polymers, it was my area of research—"\n\n` +
      `"Everyone and their mother has an opinion on my company's practices. Perhaps we may continue this conversation when you attain a doctorate in engineering." Whitney raised one perfectly shaped eyebrow.\n\n` +
      `"...Of course."`,
    sets: ['met_whitney'],
    choices: [
      { text: 'Push a little. "Your father — was he proud of the company?"', next: 'whitney_father' },
      { text: 'Apologize and step back.', next: 'solicitor' },
    ]
  },

  whitney_father: {
    chapter: 1,
    location: 'The Grand Foyer',
    speaker: 'Whitney Hargrove',
    bg: 'img/foyer.jpg',
    text:
      `An emotion flashed across Whitney's face. Gone before Octavia could name it.\n\n` +
      `"My father," she said, "believed that business was the only reliable measure of a person. He was proud of results. He was not, particularly, proud of people."\n\n` +
      `Her son sighed into his glass — Harlowe, Octavia remembered, named after his grandfather — then drifted over and said something quiet in his mother's ear. Whitney's expression didn't change, but her posture did, infinitesimally.\n\n` +
      `"If you'll excuse me." She turned away, her eyes glued on a point just behind Octavia's head.\n\n` +
      `Great talk. Octavia moved to leave but — her eyes traced Whitney's gaze. Past the tables, her family members, and even her own brother, her eyes were trained on the door. Not the solicitor's door. The front door. Like she was waiting for something.`,
    addsEvidence: {
      id: 'whitney_watching',
      icon: '👁️',
      name: 'Whitney — Watching the Door',
      desc: 'Throughout the foyer, Whitney kept her eyes on the entrance. She was waiting for someone.',
    },
    sets: ['met_whitney', 'observed_whitney'],
    choices: [
      { text: 'Head to the solicitor\'s office.', next: 'solicitor' },
    ]
  },

  talk_thomas: {
    chapter: 1,
    location: 'The Grand Foyer',
    speaker: 'Octavia (You)',
    bg: 'img/foyer.jpg',
    text:
      `Octavia approached Thomas with what she hoped was a calm smile. He was still going at it — arms wide, voice alarmingly loud. To her credit, his wife was giving it just as good, adjusting the squirming baby in her arms without breaking her stride of what Octavia could only assume were Ukrainian curse words.\n\n` +
      `"Um — hello? Hi?"\n\n` +
      `No response. The baby started crying. The argument got louder.\n\n` +
      `She was about to retreat entirely when Thomas's wife — Joni, according to the Google search, some Balkan model that Thomas met at a fashion show or fancy soiree — made direct eye contact with Octavia over Thomas's shoulder, with an expression that said: *please, literally anyone, help me out here.*`,
    choices: [
      { text: 'Step in. Offer to hold the baby.', next: 'thomas_baby' },
      { text: 'Retreat. This isn\'t your battle.', next: 'solicitor' },
    ]
  },

  thomas_baby: {
    chapter: 1,
    location: 'The Grand Foyer',
    speaker: 'Thomas Hargrove',
    bg: 'img/foyer.jpg',
    text:
      `It worked surprisingly well — suddenly there was a small person being transferred into Octavia's arms and both adults stopped arguing to watch, as Octavia adjusted her grip on the baby's wriggling body. She finally managed to snag them under the arm, bouncing the blubbering kid and humming a random tune that calmed them down.\n\n` +
      `The baby stared at her. She stared back, smiling softly at the soft brown hair all Hargroves seemed to sport.\n\n` +
      `Thomas scrubbed a hand through his hair. Up close, he looked exhausted in a way that went deeper than one night. "You're the stranger Whit mentioned." He said, then let out a sigh that seemed to come from his soul. "Do you always hold random people's babies? Or are you trying to be on your best behavior for a bigger piece of the inheritance pie?" Joni hit his shoulder, shoving him to the side with a muttered curse.\n\n` +
      `"Ignore the idiot. Johnny was crying all last night — he didn't mean it."\n\n` +
      `"Yes, I did—" Thomas deadpanned, but he still looked somewhat contrite after the harsh glare Joni sent him.\n\n` +
      `"That's alright. I used to babysit in school, so I understand." She adjusted her grip on the baby. "Are... family events always like this?"\n\n` +
      `Something flickered in his face. Not quite a laugh. "It's been like this for about twenty years. You get used to it." He looked at her properly for the first time. "Why are you here?"`,
    sets: ['met_thomas', 'thomas_likes_octavia'],
    choices: [
      { text: '"I got a letter. I don\'t really know why."', next: 'thomas_honest' },
      { text: '"I knew your father. A little."', next: 'thomas_knew_harlowe' },
    ]
  },

  thomas_honest: {
    chapter: 1,
    location: 'The Grand Foyer',
    speaker: 'Thomas Hargrove',
    bg: 'img/foyer.jpg',
    text:
      `He considered this. "That's the most honest answer anyone's given me all week." He took the baby back, settling it against his shoulder with the ease of someone who'd done it ten thousand times as the kid babbled into his hair. "Most people in this house know exactly why they're here. Even if they won't say."\n\n` +
      `He looked toward the solicitor's door. "Harlowe didn't do things by accident. Not the will, not his family, everything was always planned. If you got a letter, he meant for you to get it." A beat. "I'd advise thinking very carefully about what it means to be involved with this family."`,
    addsEvidence: {
      id: 'thomas_deliberate',
      icon: '✉️',
      name: 'Thomas — "He Didn\'t Do Things By Accident"',
      desc: 'Thomas believes Harlowe was deliberate about who he invited. The letter wasn\'t a mistake. He meant Octavia to be there.',
    },
    friendship: 1,
    choices: [
      { text: 'Head to the solicitor\'s office.', next: 'solicitor' },
    ]
  },

  thomas_knew_harlowe: {
    chapter: 1,
    location: 'The Grand Foyer',
    speaker: 'Thomas Hargrove',
    bg: 'img/foyer.jpg',
    text:
      `Something in his expression closed slightly. Careful, but not hostile.\n\n` +
      `"A little," he repeated. "Harlowe didn't do 'a little'. He was either all the way in or he'd cut you out entirely." He took the baby back, settling it against his shoulder with the ease of someone who'd done it ten thousand times as the kid babbled into his hair.\n\n` +
      `"Which one were you?"\n\n` +
      `She didn't answer quickly enough. He nodded, like she'd confirmed something.\n\n` +
      `"Yeah," he said, quieter. "That's what I thought."`,
    sets: ['met_thomas'],
    choices: [
      { text: 'Head to the solicitor\'s office.', next: 'solicitor' },
    ]
  },

  solicitor: {
    chapter: 1,
    location: 'The Solicitor\'s Office',
    speaker: 'Mr. Haloran, Solicitor',
    bg: 'img/library.jpg',
    text:
      `"Welcome, everyone to the will reading of one Harlowe Hargrove, third of his name."\n\n` +
      `Figures the Hargrove family was one for fancy titles. All the chairs in the room were arranged in a semi-circle around a central desk where the lawyer stood. Mr. Haloran, as he introduced himself, was a squat man in a sharp suit and graying hairline. He had a very no-nonsense air, and the second everyone entered, he proceeded reading the document in his hands.\n\n` +
      `It was surprisingly small, given the number of people in the room. To her left was the woman that laughed when she entered the foyer, dabbing powder on her nose while Thomas sat to her right, bouncing his baby in his lap.\n\n` +
      `Octavia refocused on the solicitor, who had just finished a long spiel of legalese. He coughed into a dark handkerchief before flipping the paper over. The woman beside her actually leaned in, and other conversations in the room stopped as Mr. Haloran continued.\n\n` +
      `"On the matter of the Hargrove estate—" The door to the room creaked open, and everyone tracked the noise. A man stepped in, brown hair, wearing long slacks and a shirt that looked right off Business Weekly. Whitney sighed into her hands, pinching the bridge of her nose before beckoning him over.\n\n` +
      `He could only be Aaron Hargrove, youngest son. He hadn't been spotted with the family for years.\n\n` +
      `The solicitor continued. "To my eldest daughter, Whitney, I give all my shares in Hargrove Pharmaceutical, as well as the patent rights to any product credited to the family." Whitney doesn't smile. She hardly even twitches, but there's a satisfied air around her.\n\n` +
      `"To my son, Thomas, I give the summer estate in Italy. Eat, drink, and raise your son in peace." Joni lets out a relieved sigh, wrapping an arm around Thomas.\n\n` +
      `"Additionally — " the solicitor continued " — the silver locket recovered from Mr. Hargrove's personal effects is to be returned to Aaron Hargrove, with the note: 'it was always yours.'" Aaron took it from the solicitor's outstretched hand and put it in his pocket without a word. He didn't look at Octavia.\n\n` +
      `"The rest of the Hargrove estate — all properties, investments, and assets — passes in full to one Octavia Milagro."\n\n` +
      `At least she got something — Wait. Wait. Octavia's hands got sweaty as Haloran's words finally processed.`,
    addsEvidence: {
      id: 'locket_aaron',
      icon: '🔗',
      name: 'Aaron\'s Locket — Returned',
      desc: 'Silver locket, only thing given to Aaron. Harlowe\'s note: "it was always yours." Must have belonged to someone he cared about.',
    },
    choices: [
      { text: 'Watch the room.', next: 'solicitor_reactions' },
    ]
  },

  solicitor_reactions: {
    chapter: 1,
    location: 'The Solicitor\'s Office',
    speaker: 'Octavia (You)',
    bg: 'img/library.jpg',
    text:
      `Silence. Whitney's face went very pale, then very still. The room erupted in a cacophony of sound as Mr. Haloran continued, voice monotone while his eyes flicked up to the people in the room. "To the rest of the blood sucking vultures I am cursed to share blood with, I give you nothing but the dirt off my boots you lot loved to lick while I was living, and a request to get out of my estate before nightfall."\n\n` +
      `Already a cousin was shouting. Someone was saying something about contesting the will in court, but Octavia could hardly hear anything over the buzz of static in her ears. Why would Harlowe do that?\n\n` +
      `Aaron was the only one who'd left his chair before the solicitor finished speaking. He was already at the window, back to the room, locket in his closed fist. Octavia had the strange sense he was the only one in the room who wasn't surprised.`,
    choices: [
      { text: 'Approach Aaron before he leaves.', next: 'aaron_window' },
      { text: 'Let everyone go. The morning will come soon enough.', next: 'fieldman_intro' },
    ]
  },

  aaron_window: {
    chapter: 1,
    location: 'The Solicitor\'s Office',
    speaker: 'Aaron Hargrove',
    bg: 'img/library.jpg',
    text:
      `He heard her coming. He turned before she said anything.\n\n` +
      `Up close he looked angry, but more than that tired. A soul-deep ache was in his eyes, and as he clenched the silver locket in his hands, Aaron managed to look younger than ever. He stared at her face for a long moment before speaking.\n\n` +
      `"You look like her," he quietly said.\n\n` +
      `"I'm sorry?" Had they met before?\n\n` +
      `He shook his head. Opened then closed the locket in his hand again. "Nothing. It's — nothing." He made for the door. Stopped once, without turning around. "Take care of the house. He would have wanted that."`,
    addsEvidence: {
      id: 'aaron_recognition',
      icon: '👁️',
      name: 'Aaron — "You Look Like Her"',
      desc: 'Aaron looked at Octavia and said "you look like her." He didn\'t say who. He seemed shaken. What does he know?',
    },
    sets: ['met_aaron', 'aaron_recognition'],
    choices: [
      { text: 'The morning after. Meet the Detective.', next: 'fieldman_intro' },
    ]
  },

  // ═══════════════════════════════════════════
  //  CHAPTER 2 — The Investigation Begins
  // ═══════════════════════════════════════════

  fieldman_intro: {
    chapter: 2,
    location: 'Hargrove Manor — Entrance Hall',
    speaker: 'Detective Fieldman',
    bg: 'img/hallway.jpg',
    text:
      `He arrived at nine in the morning, which Octavia thought was either very professional or very presumptuous.\n\n` +
      `"Detective Fieldman. I was retained by the Hargrove estate to ensure the estate transfer is handled correctly." He was shorter than Octavia would have thought. Younger too, but he didn't seem like the type to let that stop him.\n\n` +
      `Dressed in a classy pair of slacks with a coat from the pages of Arthur Conan Doyle, Octavia was tempted to ask if all detectives got the same starter pack but figured the man wouldn't appreciate that. At least the butler wouldn't, and he'd been watching their conversation with hawk eyes since he rang the ancient doorbell at the front of the house.\n\n` +
      `Most of the staff didn't know what to think about her, she supposed. Made sense — Octavia didn't know what to think about herself.\n\n` +
      `"The family left last night," she shrugged. "It's just me."\n\n` +
      `"Then you're the most useful person in this house." He looked around the entry hall with a methodical calm. "I'd like to start in Mr. Hargrove's office, if you're willing to assist."\n\n` +
      `She was, in fact, willing. She had nothing better to do anyway, and it was better than sitting in her room — and it was so weird to think of it as hers — tracing along the line of her necklace.`,
    choices: [
      { text: 'Go directly to Harlowe\'s office.', next: 'office_explore' },
      { text: 'Give him a tour of the ground floor first.', next: 'manor_tour' },
    ]
  },

  manor_tour: {
    chapter: 2,
    location: 'Hargrove Manor — Ground Floor',
    speaker: 'Octavia (You)',
    bg: 'img/hallway.jpg',
    text:
      `She took him through the ground floor the way she imagined a new owner would — which, technically, she was. The dining room. The drawing room. The east corridor with its gallery of portraits, all of them looking down at them as they walked across the carpeted halls.\n\n` +
      `"The family?" Fieldman asked, pausing at a portrait of Harlowe and another woman. She could recognize Harlowe standing with his arm around her. His lips were pressed into a smile-like fashion, and his hair was considerably lighter compared to the images of him online. She was in a white wedding dress, grinning like she'd just heard a joke.\n\n` +
      `"I think that's his late wife. Never heard much of her."\n\n` +
      `Fieldman looked at the portrait for a moment. "She kept the family together?"\n\n` +
      `"I think," Octavia said slowly, "everything must have fallen apart after her death. At least, I can't imagine a woman like her standing by as the family broke to pieces."\n\n` +
      `He hummed but said nothing more.`,
    addsEvidence: {
      id: 'portrait_harlowe',
      icon: '🖼️',
      name: 'Portrait — Harlowe, Younger',
      desc: 'Harlowe\'s portrait shows a softer, kinder man than Octavia had ever seen. He was with his wife. She looked like Aaron.',
    },
    choices: [
      { text: 'Show him the east wing.', next: 'east_wing' },
      { text: 'Head to the office. Enough atmosphere.', next: 'office_explore' },
    ]
  },

  east_wing: {
    chapter: 2,
    location: 'Hargrove Manor — East Wing',
    speaker: 'Octavia (You)',
    bg: 'img/hallway.jpg',
    text:
      `The east wing was older than the rest of the house — colder, with a different smell. Like it had been maintained but not lived in.\n\n` +
      `One of the doors was locked. An old brass lock, different from the modern ones elsewhere.\n\n` +
      `"What's this room?" Fieldman asked.\n\n` +
      `"I don't know. I've never been in it." She tried the handle. It didn't give. "I don't think anyone has for a while."`,
    sets: ['east_wing_explored'],
    choices: [
      { text: 'Note the locked room and move on.', next: 'east_wing_look' },
    ]
  },

  east_wing_look: {
    chapter: 2,
    location: 'Hargrove Manor — East Wing',
    speaker: 'Octavia (You)',
    bg: 'img/hallway.jpg',
    text:
      `There was a thin line of light under the door. It couldn't be from outside — the window at the end of the corridor faced east, and the light was wrong for the angle. Something inside was on. A lamp, maybe, or a lone lightbulb.\n\n` +
      `Fieldman crouched and looked at the gap. "The lock mechanism is old, but it's been oiled recently. Someone opened this not long ago." He stood. "We'll come back with the estate keys."\n\n` +
      `Octavia looked at the door for a moment longer. There was a faint smell through the gap — familiar, something she knew but couldn't name. Something like antiseptic. Or something medicinal.`,
    addsEvidence: {
      id: 'locked_room',
      icon: '🚪',
      name: 'Locked Room — East Wing',
      desc: 'Brass lock, recently oiled. A light is on inside — has been for some time. Faint smell of something medicinal through the gap.',
    },
    choices: [
      { text: 'Head to the office.', next: 'office_explore' },
    ]
  },

  office_explore: {
    chapter: 2,
    location: 'Harlowe\'s Office',
    speaker: 'Octavia (You)',
    bg: 'img/study.jpg',
    text:
      `The office smelled of old paper and tobacco. Fieldman moved through it carefully, touching nothing, observing everything. Octavia watched him work.\n\n` +
      `It was smaller than she expected, just a dark mahogany desk in the center, countless papers strewn across it with a small lamp — for late night work, probably. There were wear marks all over the hardwood floor, evidence of a long life in these four walls. Bookshelves lined the similarly wood-panelled walls, with a burgundy couch on one end, and a soft rug under it — the only personal touch in the room.\n\n` +
      `Stepping closer to the desk, she noticed a small silver handle. The top drawer was slightly ajar, and as she pried it apart, she noticed a newspaper clipping, folded and refolded until it was soft at the creases.\n\n` +
      `"Local man dead after cliff road accident — John Hargrove." Fieldman read over her shoulder. Octavia startled, then calmed.\n\n` +
      `"I didn't know there was another Hargrove." The grainy picture attached was small, showing a smiling man — a boy really, with the signature Hargrove hair.\n\n` +
      `"Harlowe must have kept it under wraps." Fieldman replied. Octavia's gaze drifted across the room. On the wall near the window, a trivia poster for a place called The Dirty Pig, with Harlowe's own handwriting in the margin: *Don't forget.*\n\n` +
      `There was also a photograph on the desk. All four of the Hargrove children, young. Harlowe had a hand on an older boy's shoulder — John, Octavia realized — looking very proud. Whitney stood to the side, her sun hat covering most of her face.`,
    addsEvidence: {
      id: 'office_clipping',
      icon: '📰',
      name: 'News Clipping — John Hargrove',
      desc: '"Local Man Dead After Cliff Road Accident — John Hargrove, 22." Paper is old, creased heavily. Harlowe looked at this often.',
    },
    choices: [
      { text: 'Look more closely at the desk photograph.', next: 'office_photo' },
      { text: 'Examine the bookcase.', next: 'office_safe' },
      { text: 'Ask about the trivia poster.', next: 'office_poster' },
    ]
  },

  office_photo: {
    chapter: 2,
    location: 'Harlowe\'s Office',
    speaker: 'Octavia (You)',
    bg: 'img/study.jpg',
    text:
      `She picked up the photograph. Four children, a summer somewhere, the manor in the background. Harlowe with his hand on John's shoulder — the posture of a man who was proud of this one specifically.\n\n` +
      `Whitney to the side. Even at — what, twelve? She had the same flat watchfulness. Aaron and Thomas were laughing at something off-camera, painfully young. They couldn't have been more than twelve and eight in the picture.\n\n` +
      `"He's the dead one?" Fieldman had come to look.\n\n` +
      `"John. He must've died when Aaron was a kid." She studied the younger Aaron. There was something familiar in the line of his face she hadn't been able to place before. "Harlowe kept this on his desk. Not a family portrait. Just the four of them." She set it down. "No wives. No grandchildren. Just his."`,
    addsEvidence: {
      id: 'desk_photo',
      icon: '📸',
      name: 'Desk Photograph — The Four Children',
      desc: 'Harlowe kept this specific photo on his desk. His hand is on John\'s shoulder. Whitney stands separate. Aaron and Thomas are laughing. No spouses, no grandchildren.',
    },
    choices: [
      { text: 'Examine the bookshelf.', next: 'office_safe' },
      { text: 'Ask about the trivia poster.', next: 'office_poster' },
    ]
  },

  office_safe: {
    chapter: 2,
    location: 'Harlowe\'s Office',
    speaker: 'Detective Fieldman',
    bg: 'img/study.jpg',
    text:
      `The bookshelves in the office were the same wood as the desk, but the detective stepped in front of a specific one, examining the floor.\n\n` +
      `"What's the matter?" Octavia asked.\n\n` +
      `"Look at the pattern on the floor." Wood was notoriously easy to scratch, and from the state of the floor she could tell it hadn't been replaced in decades. But even then — "There's a circular mark etched into the floor." Fieldman continued, stepping up to the bookcase and pressing his fingers into its seams.\n\n` +
      `"Could be from the couch…" Octavia knew that wasn't the case, but what was the alternative? Fieldman had moved onto pulling at random books, letting out a triumphant 'Ha!' when a mechanism clicked and the bookcase swung across the floor in the same arch as the white marks.\n\n` +
      `It swung open to reveal a small iron safe, nestled in its wooden alcove.\n\n` +
      `"Iron, combination lock." Fieldman crouched in front of it. "No obvious code."\n\n` +
      `"We'll come back to this," Fieldman said, standing. He glanced at her. "Have you been here before? To the manor?"`,
    addsEvidence: {
      id: 'locked_safe',
      icon: '🔒',
      name: 'Iron Safe — Locked',
      desc: 'Combination lock. Hidden behind a rotating bookcase. No obvious code yet.',
    },
    choices: [
      { text: '"No. Never been here before." (Professional)', next: 'fieldman_question_cold', sets: ['fieldman_cold'] },
      { text: '"No. Though I feel like I know it somehow." (Open)', next: 'fieldman_question_warm', sets: ['fieldman_warm'] },
    ]
  },

  fieldman_question_cold: {
    chapter: 2,
    location: 'Harlowe\'s Office',
    speaker: 'Detective Fieldman',
    bg: 'img/study.jpg',
    text:
      `He nodded, wrote something, and moved on. Professional.\n\n` +
      `Octavia watched the back of his head and thought: he's going to be difficult to read.\n\n` +
      `Good. So was she.`,
    friendship: -1,
    choices: [
      { text: 'Look at the trivia poster.', next: 'office_poster' },
    ]
  },

  fieldman_question_warm: {
    chapter: 2,
    location: 'Harlowe\'s Office',
    speaker: 'Detective Fieldman',
    bg: 'img/study.jpg',
    text:
      `He looked at her properly then with a curious glance.\n\n` +
      `"That's an interesting way to put it." He didn't push further. But the silence that followed was easier than the one before.`,
    friendship: 1,
    choices: [
      { text: 'Look at the trivia poster.', next: 'office_poster' },
    ]
  },

  office_poster: {
    chapter: 2,
    location: 'Harlowe\'s Office',
    speaker: 'Octavia (You)',
    bg: 'img/study.jpg',
    text:
      `*The Dirty Pig — Thursday Trivia Night — Providence's Finest Dive Since 1887.*\n\n` +
      `In the margin, in Harlowe's cramped handwriting: *Don't forget.*\n\n` +
      `"He was a regular somewhere," Octavia said.\n\n` +
      `Fieldman was already writing it down. "Somewhere with a name like that, the barman probably knows his whole life story." He pulled on his coat. "Fancy a drive?"\n\n` +
      `She was already at the door.`,
    addsEvidence: {
      id: 'dirty_pig',
      icon: '🍺',
      name: 'The Dirty Pig — Thursday Trivia',
      desc: 'Bar in Providence. Harlowe\'s handwritten note on the poster: "Don\'t forget." He was a regular.',
    },
    choices: [
      { text: 'Drive to The Dirty Pig.', next: 'dirty_pig_drive' },
    ]
  },

  dirty_pig_drive: {
    chapter: 2,
    location: 'The Car — Cliff Road',
    speaker: 'Octavia (You)',
    bg: 'img/cliff.jpg',
    text:
      `The drive down from the manor meant taking the cliff road — the same winding, steep switchbacks she'd come up the night of the will reading. It was the only road in and out of the manor, but it was blessedly empty as they drove down. In daylight it was merely dramatic. At night she imagined it was something else entirely.\n\n` +
      `Fieldman drove. He asked about her life as she fiddled with the radio, in an off-hand tone.`,
    choices: [
      { text: 'Keep it professional.', next: 'drive_cold', sets: ['drive_cold'] },
      { text: 'Mention your mother, shortly.', next: 'drive_warm', sets: ['drive_warm'] },
    ]
  },

  drive_cold: {
    chapter: 2,
    location: 'The Car — Cliff Road',
    speaker: 'Octavia (You)',
    bg: 'img/cliff.jpg',
    text:
      `She steered to safer ground — the manor, the will, the family dynamics. He let her.\n\n` +
      `The silence between topics was careful and precarious.`,
    friendship: 0,
    choices: [
      { text: 'Arrive at The Dirty Pig.', next: 'dirty_pig' },
    ]
  },

  drive_warm: {
    chapter: 2,
    location: 'The Car — Cliff Road',
    speaker: 'Octavia (You)',
    bg: 'img/cliff.jpg',
    text:
      `"My mother's been ill," she said. Not looking at him. "Breast cancer — that's part of why I came. When the letter arrived, I thought if I'm going to inherit something, I should at least figure out what. Couldn't hurt. I just never thought — I would've never guessed the will led to this."\n\n` +
      `Fieldman didn't fill the silence. His eyes stayed trained on the road in front of him.\n\n` +
      `"I hope she gets better," he said, after a moment.`,
    friendship: 1,
    choices: [
      { text: 'Arrive at The Dirty Pig.', next: 'dirty_pig' },
    ]
  },

  dirty_pig: {
    chapter: 2,
    location: 'The Dirty Pig — Providence',
    speaker: 'Gus (Barman)',
    bg: 'img/bar.jpg',
    text:
      `The Dirty Pig had not been renovated since 1887 and was proud of it. The barman — Gus — had the particular stillness that came from seeing the craziest things every night and staying for years and years.\n\n` +
      `Yes, he knew Harlowe. Regular for years. Always alone at first. Single whiskey, the crossword, then home. Then, about a year back, he started bringing a girl. Young, dark-haired, always in the same dark coat. She brought a little tin of sweets — toffees, the wrapped kind. They'd play in trivia nights together, won some nights, lost others.\n\n` +
      `"In all the years I've known Harlowe — knew him, pardon my mistake — he never looked so light," Gus said. "More like a person."`,
    addsEvidence: {
      id: 'bar_girl',
      icon: '🍬',
      name: 'The Girl at The Bar',
      desc: 'Young, dark-haired, dark coat. Brought a tin of toffees. Visited Harlowe weekly for about a year. Paid cash.',
    },
    choices: [
      { text: '"Did anything unusual happen recently?"', next: 'dirty_pig_argument' },
      { text: 'Ask about the other regulars.', next: 'dirty_pig_regulars' },
    ]
  },

  dirty_pig_regulars: {
    chapter: 2,
    location: 'The Dirty Pig — Providence',
    speaker: 'Gus (Barman)',
    bg: 'img/bar.jpg',
    text:
      `Gus polished a glass with the philosophical patience of a man who had nowhere better to be.\n\n` +
      `"You want to know if anyone from his family came in?" He'd read her mind. "Not the family. But his lawyer used to come, years ago. And once, maybe three months back — big fellow, lot of tattoos, looked like he hadn't slept in a week — came in asking after him. Didn't want a drink. Just sat at the end of the bar and asked what Harlowe talked about. I told him the same as I'm telling you: crosswords, and the girl, and not much else."\n\n` +
      `Octavia thought: Thomas. Asking questions three months ago. Before the death.`,
    addsEvidence: {
      id: 'thomas_came_to_bar',
      icon: '🍺',
      name: 'Thomas — Visited The Bar',
      desc: 'A heavily tattooed man came to the bar three months before Harlowe\'s death asking questions about him. Didn\'t want a drink. Just wanted to know what Harlowe talked about.',
    },
    choices: [
      { text: '"Did anything unusual happen in the last few months?"', next: 'dirty_pig_argument' },
    ]
  },

  dirty_pig_argument: {
    chapter: 2,
    location: 'The Dirty Pig — Providence',
    speaker: 'Gus (Barman)',
    bg: 'img/bar.jpg',
    text:
      `Gus filled a glass without being asked, passing it to Octavia who shook her head silently, and tipped it towards Detective Fieldman. She fought back her incredulous look as the detective downed the entire pint without stopping for air, then fixed her face as he gestured Gus to continue like nothing was wrong. Weirdo.\n\n` +
      `"About two months back, she came in before him. Sat at the bar. Asked me what he was like when he came alone — before she started coming. I told her the same thing I'm telling you: quiet. Kept to himself. Nursed his whiskey and did his crossword. She asked if he ever mentioned his family. Once or twice. Nothing fond."\n\n` +
      `He set the glass down. "That same night they had a little spat. He got loud. She went very still. He left first. She sat alone for a while, finished the last toffee, then left. Never came back after that."\n\n` +
      `"How come you spoke with her but can't recall her face?" Fieldman questioned, his head tilted to the side like a dog with a juicy bone.\n\n` +
      `Gus grunted. "She was wearing a mask at the time, and I didn't think twice of it."`,
    addsEvidence: {
      id: 'bar_argument',
      icon: '🗣️',
      name: 'The Argument — Two Months Before Death',
      desc: 'Harlowe raised his voice; he left first. She stayed, finished the toffees, then left. Never returned after that.',
    },
    choices: [
      { text: '"What did the argument look like?"', next: 'dirty_pig_argument_detail' },
      { text: 'Return to the car.', next: 'cliff_road_stop' },
    ]
  },

  dirty_pig_argument_detail: {
    chapter: 2,
    location: 'The Dirty Pig — Providence',
    speaker: 'Gus (Barman)',
    bg: 'img/bar.jpg',
    text:
      `Gus thought about it, his mustache quivering like whiskers.\n\n` +
      `"He was upset. The kind of upset that's been building a while — you could tell from the way he kept his voice down as long as he could and then couldn't. She didn't raise her voice once. Just got very still, didn't shout at all."\n\n` +
      `He straightened the glasses along the rack. "She had a tin of toffees in front of her. She hadn't opened them yet — usually she opened them right away, shared them round the bar. That night she didn't." He shrugged. "She just sat there after he left. Opened the tin. Ate one. Then she took the tin with her when she left."`,
    addsEvidence: {
      id: 'toffee_tin_taken',
      icon: '🥫',
      name: 'The Toffee Tin — Taken That Night',
      desc: 'The girl always left her toffee tin at the bar. The night of the argument, she took it with her. She hadn\'t opened it before the argument.',
    },
    choices: [
      { text: 'Return to the car.', next: 'cliff_road_stop' },
    ]
  },

  cliff_road_stop: {
    chapter: 2,
    location: 'Lover\'s Cliff — Upper Switchback',
    speaker: 'Detective Fieldman',
    bg: 'img/cliff.jpg',
    text:
      `On the drive back, Fieldman slowed the car at the upper switchback and stopped without explaining why. There was still an old repair in the barrier — faint, decades old, but visible once you knew to look.\n\n` +
      `"John Hargrove," Fieldman said. "The clipping in the desk said he died on this road twenty years ago." He looked at the barrier. "The crash report didn't calculate his actual speed." Fieldman turned to Octavia with an almost-smile. "Think we could figure it out?"`,
    addsEvidence: {
      id: 'cliff_repair',
      icon: '🚧',
      name: 'Lover\'s Cliff — Crash Site',
      desc: 'Old barrier repair, still visible. John Hargrove died here 20 years ago. He was 22.',
    },
    choices: [
      { text: '⚙️ [Physics] Calculate John\'s minimum speed from the crash evidence.', physics: 'projectile_johns_car', next: 'cliff_deduction' },
      { text: 'Ask what Fieldman thinks John was running from.', next: 'cliff_deduction' },
    ]
  },

  cliff_deduction: {
    chapter: 2,
    location: 'Lover\'s Cliff — Upper Switchback',
    speaker: 'Detective Fieldman',
    bg: 'img/cliff.jpg',
    text:
      `"At minimum, 52 km/h. On a 30-limit cliff road. In the dark." Fieldman was quiet for a moment. "That's not recklessness. That's someone leaving in a hurry."\n\n` +
      `"The news clipping didn't mention any urgent events. No fairs, no family members waiting, he had no reason to speed down the road at night. Unless…" Octavia said.\n\n` +
      `"Unless he was running from someone. Harlowe." He looked at the barrier one more time. "I'm guessing John argued with his father, got in the car, and never came home."\n\n` +
      `He started the engine. "Then Harlowe kept that clipping in his top drawer. Handled it so often it went soft." The car roared back to life. "Let's go to the morgue next. I think we'll discover something very interesting there."`,
    addsEvidence: {
      id: 'john_speed',
      icon: '💨',
      name: 'John\'s Speed — Reconstruction',
      desc: 'Minimum 52 km/h on a 30 km/h road. He was fleeing something. Probably had an argument with Harlowe that night — but about what?',
    },
    choices: [
      { text: 'Go to the morgue.', next: 'morgue' },
    ]
  },

  morgue: {
    chapter: 2,
    location: 'Providence County Morgue',
    speaker: 'Dr. Priya Nath',
    bg: 'img/morgue.jpg',
    text:
      `Dr. Nath was efficient and unfussy. Her grey bun looked severe under the harsh lighting, and the cigarette in her mouth was most definitely unprofessional but Octavia was too scared to tell her that with a hacksaw in her hands.\n\n` +
      `She unfolded the sheet without ceremony. Harlowe Hargrove looked small under the fluorescent light. Skin pale and waxy, mouth slightly open. He looked like a dead old man, not one of the richest men in the world. Death had a way of doing that.\n\n` +
      `"Cardiac arrest," Nath said. "His heart disease was severe and well-documented. Nothing on first review that demanded a second look." She glanced at Fieldman. "But you asked for a full blood panel, so I'll call you when the results come in."`,
    choices: [
      { text: 'Look closely at the body.', next: 'morgue_birthmark' },
      { text: 'Ask Dr. Nath about his medical history.', next: 'morgue_history' },
    ]
  },

  morgue_history: {
    chapter: 2,
    location: 'Providence County Morgue',
    speaker: 'Dr. Priya Nath',
    bg: 'img/morgue.jpg',
    text:
      `Nath pulled up the file with practiced ease on her ancient computer. Octavia even saw a floppy disk reader attached to the side.\n\n` +
      `"Hypertensive heart disease, atrial fibrillation, early-stage renal impairment. He was on medication for all three. His GP flagged his potassium levels as 'trending high' six months ago — noted it in the file, attributed it to diet, didn't follow up." She paused on that. "Common for men his age, I guess, but they should've followed up."\n\n` +
      `"But it wouldn't have been unusual enough to investigate," Fieldman said.\n\n` +
      `"Not in isolation, no." She closed the file. "That's the thing about chronic conditions. They're very good camouflage for crimes."`,
    addsEvidence: {
      id: 'harlowe_condition',
      icon: '🩺',
      name: 'Harlowe\'s Medical History',
      desc: 'Severe hypertensive heart disease. Atrial fibrillation. Early-stage renal impairment. GP noted potassium levels "trending high" for six months.',
    },
    choices: [
      { text: 'Look more closely at the body.', next: 'morgue_birthmark' },
    ]
  },

  morgue_birthmark: {
    chapter: 2,
    location: 'Providence County Morgue',
    speaker: 'Octavia (You)',
    bg: 'img/morgue.jpg',
    text:
      `Octavia leaned in close to Harlowe's body. When Dr. Nath flipped him over the sheet lowered a little, revealing most of his upper body. While there was nothing interesting about most of him, she noticed a birthmark on his upper arm.\n\n` +
      `Heart-shaped, distinctive. High on the arm, exactly where a shirt cuff wouldn't cover it. Her eyes widened at the sight, then returned to normal as she refocused on Detective Fieldman and Dr. Nath's conversation.\n\n` +
      `Fieldman asked if she knew anything about potassium and the heart.\n\n` +
      `"Potassium is basically charge distribution. The heart's electrical rhythm depends on a gradient — potassium inside the cells, sodium outside. If potassium in the blood creeps up, even a little, the gradient flattens. And when the gradient flattens, excitable cells stop being excitable."\n\n` +
      `She tapped the table, mimicking a sluggish heartbeat. "You can see it first in the repolarization phase. T waves get larger. The QRS interval widens, everything looks smeared. It's not dramatic at first." She looked at Harlowe again. "And if the kidneys aren't clearing potassium properly? Then it's a slow climb. Chronic hyperkalemia. Weeks of the levels inching up. The sick just feel heavy, tired."\n\n` +
      `She added, almost as an afterthought: "And the meds don't help. ACE inhibitors, ARBs, spironolactone — all the drugs that are great for blood pressure or heart failure — they all nudge potassium higher. Combine that with impaired renal clearance and you've built a problem the heart can't solve alone. Eventually the rhythm just… degrades."\n\n` +
      `Fieldman listened. Then: "You studied biochemistry?"\n\n` +
      `"NYU. Third year. I had to leave." Octavia shrugged. "My mother got sick."`,
    addsEvidence: {
      id: 'birthmark_note',
      icon: '❤️',
      name: 'The Birthmark',
      desc: 'Heart-shaped mark, upper arm. Octavia recognised it.',
    },
    sets: ['saw_birthmark'],
    choices: [
      { text: '⚙️ [Physics] What does elevated potassium do to the heart?', physics: 'kcl_heart', next: 'morgue_exit' },
      { text: 'Wait for the blood results.', next: 'morgue_exit' },
    ]
  },

  morgue_exit: {
    chapter: 2,
    location: 'Providence County Morgue — Carpark',
    speaker: 'Octavia (You)',
    bg: 'img/morgue.jpg',
    text:
      `Outside, the cold was a relief. Fieldman stood at the car and didn't open it for a moment.\n\n` +
      `"You went quiet in there," he said.\n\n` +
      `"I'm always quiet."\n\n` +
      `"You went a different kind of quiet." He countered. Fieldman frowned at her. "Sometimes I don't know what to think of you."\n\n` +
      `She looked back at the building. The birthmark had been exactly where she'd expected it to be. She'd known it would be there. She just needed to see it for herself.`,
    choices: [
      { text: 'Return to the manor. Wait for evening.', next: 'manor_afternoon' },
    ]
  },

  manor_afternoon: {
    chapter: 2,
    location: 'Hargrove Manor — Afternoon',
    speaker: 'Octavia (You)',
    bg: 'img/hallway.jpg',
    text:
      `Back at the manor, the afternoon had gone grey and still. Fieldman had calls to make and left her to it.\n\n` +
      `She had the house to herself for a few hours. There were things she'd noticed that she hadn't said out loud yet.\n\n` +
      `She could look around, or she could wait for evening and the confrontation that was coming regardless.`,
    choices: [
      { text: 'Explore the manor grounds.', next: 'manor_grounds' },
      { text: 'Look through the drawing room.', next: 'drawing_room_explore' },
      { text: 'Go back to the east wing. The locked room.', next: 'east_wing_return' },
      { text: 'Wait for evening.', next: 'confrontation_intro' },
    ]
  },

  manor_grounds: {
    chapter: 2,
    location: 'Hargrove Manor — Grounds',
    speaker: 'Octavia (You)',
    bg: 'img/garden.jpg',
    text:
      `The grounds ran away from the house in every direction — east toward the tree line, west to a formal garden that hadn't been formally maintained in some time, and south to the cliff edge and the road below.\n\n` +
      `She walked the south boundary. The drop was hidden by a screen of hedging, but she could hear the wind differently there, could feel it. Below, the switchback road turned and turned.\n\n` +
      `She stood at the edge of the grounds for a long time.\n\n` +
      `There was a worn path in the grass here. Used often, like someone stood there to think. Octavia didn't think any of the Hargroves were the reminiscing sort, but the bald spot proved her wrong.`,
    addsEvidence: {
      id: 'cliff_path',
      icon: '🌿',
      name: 'Worn Path — Cliff Edge',
      desc: 'A frequently-used path leads from the south side of the manor to the cliff-edge boundary. No gate. No viewpoint.',
    },
    sets: ['manor_grounds'],
    choices: [
      { text: 'Go back inside.', next: 'manor_afternoon_return' },
    ]
  },

  drawing_room_explore: {
    chapter: 2,
    location: 'Hargrove Manor — Drawing Room',
    speaker: 'Octavia (You)',
    bg: 'img/drawing_room.jpg',
    text:
      `The drawing room was exactly what it claimed to be — high ceilings, heavy curtains, furniture she assumed was expensive but just looked gaudy.\n\n` +
      `She found a chess set with only one side completed mid-game, the black pieces packed away. A drinks cabinet with a single whiskey glass still there, dried residue at the base. And on the mantelpiece, tucked behind a clock: a small photograph, not framed, slightly curled at the corner.\n\n` +
      `A woman, young, laughing at something off-camera while a young man — boy really — had his arm wrapped around her shoulders. He was wearing a short-sleeve shirt with the faint stain of a birthmark visible on camera. One of the Hargrove boys.\n\n` +
      `John was far too old. He must have been around twenty when the picture was taken, and the kids looked like just that — teenagers, not any more than sixteen or seventeen. They were standing in front of what Octavia recognized after a moment as the east wing of this very house.`,
    addsEvidence: {
      id: 'mantel_photo',
      icon: '📷',
      name: 'Photograph — Unknown Woman',
      desc: 'Unframed, hidden behind the mantelpiece clock. A young dark-haired woman laughing, standing outside the east wing of the manor. No date, no name.',
    },
    sets: ['drawing_room_explore'],
    choices: [
      { text: 'Take the photograph.', next: 'mantel_photo_taken', sets: ['has_mantel_photo'] },
      { text: 'Leave it. Go back.', next: 'manor_afternoon_return' },
    ]
  },

  mantel_photo_taken: {
    chapter: 2,
    location: 'Hargrove Manor — Drawing Room',
    speaker: 'Octavia (You)',
    bg: 'img/drawing_room.jpg',
    text:
      `She slipped it into her coat pocket.\n\n` +
      `She didn't know if it was important yet. She suspected it was.\n\n` +
      `She recognized the laugh. She'd grown up with it. Her mother laughed exactly like that — head tilted, eyes crinkled at the corners — when she thought no one was taking her picture.\n\n` +
      `Sonia Milagro at Hargrove Manor nearly twenty years ago, an arm around Aaron.\n\n` +
      `Huh.`,
    addsEvidence: {
      id: 'sonia_photo',
      icon: '📷',
      name: 'Photograph — Sonia Milagro, Young',
      desc: 'The woman in the drawing room photograph is Sonia Milagro. She was here at the manor. Young, laughing.',
    },
    sets: ['identified_sonia_photo'],
    choices: [
      { text: 'Go back.', next: 'manor_afternoon_return' },
    ]
  },

  east_wing_return: {
    chapter: 2,
    location: 'Hargrove Manor — East Wing',
    speaker: 'Octavia (You)',
    bg: 'img/hallway.jpg',
    text:
      `She found the key in the third place she looked — inside the mouth of a carved horse on the hall table, exactly the sort of hiding place that makes sense to a person who's lived in a big house long enough.\n\n` +
      `She stood in the east wing corridor and held the key for a long moment before using it.\n\n` +
      `The lock opened quietly. The lamp inside was a small one, on a side table, the kind that runs on a timer. It had been coming on every evening for who knows how long.`,
    choices: [
      { text: 'Go inside.', next: 'east_wing_inside' },
    ]
  },

  east_wing_inside: {
    chapter: 2,
    location: 'Hargrove Manor — Locked Room',
    speaker: 'Octavia (You)',
    bg: 'img/study.jpg',
    text:
      `The room was small and had been kept exactly as it was. A single bed. A writing desk. Books on a shelf — chemistry, biology, a battered paperback mystery with a broken spine.\n\n` +
      `On the desk there was a vase with dried flowers, still holding their shape. A coffee mug, rinsed. And a note in Harlowe's handwriting, under the vase, as if he'd left it there for someone and they'd never come back to read it.\n\n` +
      `*For when you visit. In case you want somewhere that's yours.*\n\n` +
      `The room smelled faintly of a floral perfume, hidden under the scent of dust motes.\n\n` +
      `This was Aaron's old room in the house. Harlowe had kept it intact.`,
    addsEvidence: {
      id: 'east_room',
      icon: '🚪',
      name: 'The East Room — Kept For Someone',
      desc: 'A small, preserved room in the locked east wing. Harlowe left a note: "For when you visit. In case you want somewhere that\'s yours."',
    },
    sets: ['found_east_room'],
    choices: [
      { text: 'Sit for a moment.', next: 'east_room_sit' },
    ]
  },

  east_room_sit: {
    chapter: 2,
    location: 'Hargrove Manor — Locked Room',
    speaker: 'Octavia (You)',
    bg: 'img/study.jpg',
    text:
      `She sat on the edge of the bed.\n\n` +
      `The battered mystery novel on the shelf had a bookmark in it. She pulled it out — someone else's handwriting on a library slip, the kind that used to go inside the back cover. The name on the slip was smudged past reading.\n\n` +
      `She sat there for a while, not thinking about anything specific. Just sitting in a room that had been waiting for a boy that never came home, in a house that technically belonged to her, at the edge of a cliff where another son died.\n\n` +
      `Then she got up and went back downstairs. Evening was coming.`,
    choices: [
      { text: 'Wait for the confrontation.', next: 'confrontation_intro' },
    ]
  },

  manor_afternoon_return: {
    chapter: 2,
    location: 'Hargrove Manor — Afternoon',
    speaker: 'Octavia (You)',
    bg: 'img/hallway.jpg',
    text: `There was still time before the evening arrived.`,
    choices: [
      { text: 'Explore the manor grounds.', next: 'manor_grounds', requires_not: ['manor_grounds'] },
      { text: 'Look through the drawing room.', next: 'drawing_room_explore', requires_not: ['drawing_room_explore'] },
      { text: 'Go back to the east wing.', next: 'east_wing_return', requires_not: ['found_east_room'] },
      { text: 'Wait for evening.', next: 'confrontation_intro' },
    ]
  },

  // ═══════════════════════════════════════════
  //  CHAPTER 3 — The Confrontation
  // ═══════════════════════════════════════════

  confrontation_intro: {
    chapter: 3,
    location: 'Hargrove Manor — Entry Hall',
    speaker: 'Octavia (You)',
    bg: 'img/hallway.jpg',
    text:
      `She heard him before she saw him. Something ceramic hit the floor — expensive, by the sound of it — and then Thomas's voice, slurred and too large for the hallway. The staff had already gone home for the night, and Octavia got the sense if she called the butler, he might hang up on her just for the fun of it. Her next option should've been the police, but as she peeked over the banister in nothing but her sleeping oversized robe, she felt a wave of pity for Thomas.\n\n` +
      `So, she didn't call the police. She called Fieldman.\n\n` +
      `He arrived at the same time as Whitney, who had apparently been tracking Thomas's phone. She'd brought Aaron because he was there when she got the call — and because, as Whitney put it through a tight jaw, "He's the only doctor in this family."\n\n` +
      `Octavia almost wanted to see Rosaline's pink phone case trailing after Aaron, but she guessed Whitney didn't want to expose her kids to all of that.`,
    choices: [
      { text: 'Stay. See how this unfolds.', next: 'confrontation_erupts' },
    ]
  },

  confrontation_erupts: {
    chapter: 3,
    location: 'Hargrove Manor — Entry Hall',
    speaker: 'Thomas Hargrove',
    bg: 'img/hallway.jpg',
    text:
      `"John is dead because of you!" Thomas was pointing at Aaron, a broken vase at his feet. "You and that girl. You brought that girl into this house and he tried to protect you from Da—"\n\n` +
      `Aaron hit him. One punch, right across the face. Octavia winced as she saw a line of spit fly from Thomas's mouth as his head snapped back. Thanks for nothing, Whitney.\n\n` +
      `The next second he lunged at Aaron, grabbing him and grappling them both to the floor. Whitney rolled her eyes as the two rolled across the carpet, stepping out of the way and scoffing in their direction. Fieldman made no move to stop them.\n\n` +
      `After a few moments it looked like Aaron was seriously about to lose the fight. Octavia huffed, sent Fieldman a pleading look which he decisively ignored, then sighed. This freaking family.\n\n` +
      `She moved from her hiding spot, slowly creeping to Aaron and Thomas's ongoing brawl.\n\n` +
      `"Um — please stop that." Nothing. "You're messing up the carpet!" Now she just sounded silly. Without further ado, she grabbed the nearest vase and threw it at the wrestling pair, narrowly missing Thomas by a couple inches. The loud crash jolted the two away from each other, and Aaron rolled onto his knees panting.\n\n` +
      `And then Thomas looked up from the floor and looked at Octavia — properly looked, for the first time — and something crossed his face. In her rush her robe had slipped off one shoulder, revealing a heart birthmark on her upper arm.\n\n` +
      `He turned to Fieldman. "What exactly are we paying you for, if you still can't figure out what's right in front of you?"`,
    addsEvidence: {
      id: 'john_full',
      icon: '🚗',
      name: 'John Hargrove — The Full Picture',
      desc: 'John argued with Harlowe about Aaron and a girl named Sonia. Harlowe "handled it badly." John sped off that night and never came back.',
    },
    choices: [
      { text: 'Turn to Fieldman.', next: 'confrontation_we' },
    ]
  },

  confrontation_we: {
    chapter: 3,
    location: 'Hargrove Manor — Entry Hall',
    speaker: 'Octavia (You)',
    bg: 'img/hallway.jpg',
    text:
      `*We.* Octavia looked at Fieldman.\n\n` +
      `"What does he mean, 'we'?"\n\n` +
      `Fieldman didn't answer immediately. The room was very still. Whitney was looking at the wall. Aaron was looking at the floor. Thomas was looking at Octavia with that same expression — recognition, and something he seemed to want to swallow back down.\n\n` +
      `The scene held for a long moment. Then Fieldman said, "Let's get everyone home. We can speak in the morning."`,
    addsEvidence: {
      id: 'fieldman_client',
      icon: '❓',
      name: 'Fieldman\'s Client',
      desc: 'He was hired by someone in the Hargrove family. Thomas\'s "we" confirms it. His investigation was never neutral. He hasn\'t said who.',
    },
    choices: [
      { text: 'Let them go. Catch Whitney on her way out.', next: 'whitney_exit' },
      { text: 'Catch Aaron on his way out.', next: 'aaron_exit' },
      { text: 'After everyone leaves — face Fieldman.', next: 'confrontation_aftermath' },
    ]
  },

  whitney_exit: {
    chapter: 3,
    location: 'Hargrove Manor — Front Door',
    speaker: 'Whitney Hargrove',
    bg: 'img/hallway.jpg',
    text:
      `She caught Whitney in the doorway. Whitney stopped. She didn't turn around.\n\n` +
      `"You hired him," Octavia said. "Fieldman. That's what Thomas meant."\n\n` +
      `A pause. "My father died. Under unclear circumstances. Someone had to ensure the investigation was conducted properly." She still didn't turn around. "Don't mistake that for me caring about you specifically, Miss Milagro."\n\n` +
      `"Then why not let it just be natural causes?"\n\n` +
      `Whitney turned then. Her face was tight, controlled, and underneath the control, something that had been eating at her for a very long time.\n\n` +
      `"Because my father didn't die of natural causes. And whoever did it—" her eyes moved, briefly, to Octavia's locket "—they should know that I know."`,
    addsEvidence: {
      id: 'whitney_hired_fieldman',
      icon: '💼',
      name: 'Whitney — She Hired Fieldman',
      desc: 'Whitney hired Fieldman herself. She already suspected the death wasn\'t natural. She looked at Octavia\'s locket when she implied she knew who was responsible.',
    },
    sets: ['spoke_to_whitney_exit'],
    choices: [
      { text: 'Let her go. Face Fieldman.', next: 'confrontation_aftermath' },
    ]
  },

  aaron_exit: {
    chapter: 3,
    location: 'Hargrove Manor — Side Hall',
    speaker: 'Aaron Hargrove',
    bg: 'img/hallway.jpg',
    text:
      `He was in the side corridor pulling on his coat with focused concentration. As he shrugged it on, Octavia caught the glint of his locket around his throat. Twin to the silver one her mother owned. The same one hanging around Octavia's neck.\n\n` +
      `"Aaron."\n\n` +
      `He looked up. He looked at her the same way he had in the solicitor's office.\n\n` +
      `"She wrote to me," he said, quietly. "Once. A year after she left. I didn't get the letter until recently. My father held it." He closed his hand around the locket. "She said she was all right. That was all. She said she was all right and she had someone new to worry about."\n\n` +
      `He looked at Octavia's locket. Then at her face. He nodded, very slightly, as if confirming something he'd been carrying alone.\n\n` +
      `"Is she?" he asked. "All right?"`,
    addsEvidence: {
      id: 'aaron_letter',
      icon: '✉️',
      name: 'Aaron — Sonia\'s Letter',
      desc: 'Sonia wrote to Aaron once, a year after she left. Harlowe withheld the letter. Aaron only recently received it. She said she was "all right and had someone new to worry about."',
    },
    sets: ['spoke_to_aaron_exit'],
    choices: [
      { text: '"She\'s sick. But she\'s still here."', next: 'aaron_exit_response' },
    ]
  },

  aaron_exit_response: {
    chapter: 3,
    location: 'Hargrove Manor — Side Hall',
    speaker: 'Aaron Hargrove',
    bg: 'img/hallway.jpg',
    text:
      `He absorbed that. Nodded once.\n\n` +
      `"Good," he said, roughly. "That's — good."\n\n` +
      `He went. She stood in the side hall and listened to the front door close.\n\n` +
      `He knew. He'd known since the solicitor's office, maybe earlier. He'd never say it out loud so Octavia guessed she never needed to either.`,
    friendship: 1,
    choices: [
      { text: 'Face Fieldman.', next: 'confrontation_aftermath' },
    ]
  },

  confrontation_aftermath: {
    chapter: 3,
    location: 'Hargrove Manor — Drawing Room',
    speaker: 'Detective Fieldman',
    bg: 'img/drawing_room.jpg',
    text:
      `When the others were gone, he tried to explain. Or began to. She let him find his words.\n\n` +
      `He'd been retained before the death. By Whitney, he admitted, who had suspected something was wrong and wanted someone outside the family to confirm it — or quietly remove the problem, depending on what he found.\n\n` +
      `"I should have told you at the start," he said. "I didn't because I wasn't sure whose side anything was on. Including yours."`,
    choices: [
      { text: '"Why didn\'t you just tell me?" (Understanding)', next: 'aftermath_warm', sets: ['aftermath_warm'] },
      { text: '"I\'m done talking to you tonight." (Shut out)', next: 'aftermath_cold', sets: ['aftermath_cold'] },
    ]
  },

  aftermath_warm: {
    chapter: 3,
    location: 'Hargrove Manor — Drawing Room',
    speaker: 'Detective Fieldman',
    bg: 'img/drawing_room.jpg',
    text:
      `He looked, for the first time, a little relieved.\n\n` +
      `"I don't have a good answer for that," he said. "I thought knowing who hired me would make you trust the investigation less." He paused. "I was probably wrong."\n\n` +
      `"Probably," she agreed.\n\n` +
      `"Good night, Ms. Milagro." Fieldman tipped an imaginary hat towards her, and Octavia stifled a grin.\n\n` +
      `"Good night, Detective Fieldman."`,
    friendship: 2,
    choices: [
      { text: 'Tomorrow. Back to the office.', next: 'back_to_office' },
    ]
  },

  aftermath_cold: {
    chapter: 3,
    location: 'Hargrove Manor — Drawing Room',
    speaker: 'Octavia (You)',
    bg: 'img/drawing_room.jpg',
    text:
      `She left him in the drawing room and went upstairs.\n\n` +
      `He didn't follow. Let himself out through the back door.\n\n` +
      `She lay in the dark listening to the house and thought about the safe and its combination, and her mother's face in the photograph she'd found three months ago.`,
    friendship: -1,
    choices: [
      { text: 'Tomorrow. Back to the office.', next: 'back_to_office' },
    ]
  },

  // ═══════════════════════════════════════════
  //  CHAPTER 4 — Back to the Office
  // ═══════════════════════════════════════════

  back_to_office: {
    chapter: 4,
    location: 'Harlowe\'s Office',
    speaker: 'Octavia (You)',
    bg: 'img/study.jpg',
    text:
      `She was already in Harlowe's chair when Fieldman arrived. He paused in the doorway. Framed by the ancient books around her, feet on the dark wood desk, she fit there in a way that made him pause.\n\n` +
      `The bookshelf was open, and when he leaned in to look, he saw the smooth interior of the iron safe.\n\n` +
      `"How did you know the combination?" he asked.\n\n` +
      `"I guessed."\n\n` +
      `"You guessed a four-digit combination. That's over two hundred and fifty-six possible codes."\n\n` +
      `"I'm good at patterns." She didn't look up.`,
    choices: [
      { text: 'Examine what\'s inside the safe.', next: 'safe_contents' },
    ]
  },

  safe_contents: {
    chapter: 4,
    location: 'Harlowe\'s Office',
    speaker: 'Octavia (You)',
    bg: 'img/study.jpg',
    text:
      `Inside: a stopped clock, a folded photograph of a young dark-haired girl, and a letter.\n\n` +
      `Fieldman picked up the clock. Stopped at 11:42 PM. He turned it over in his hands curiously.\n\n` +
      `Octavia held the letter. Two sentences in Harlowe's handwriting, then nothing. The paper was crinkled, like it had been started and stopped many times.\n\n` +
      `*Sonia, I know what I did.*\n\n` +
      `It didn't finish.`,
    addsEvidence: {
      id: 'safe_letter',
      icon: '✉️',
      name: 'Unsent Letter — Harlowe to Sonia',
      desc: '"Sonia, I know what I did." Two sentences, then it stops. Never sent.',
    },
    sets: ['found_letter'],
    choices: [
      { text: 'Look at the photograph.', next: 'safe_photo' },
    ]
  },

  safe_photo: {
    chapter: 4,
    location: 'Harlowe\'s Office',
    speaker: 'Octavia (You)',
    bg: 'img/study.jpg',
    text:
      `The girl in the photograph was about six. Dark-haired, dark-eyed. Serious expression, like she was trying to work something out.\n\n` +
      `Fieldman looked over her shoulder. "Do you know who that is?"\n\n` +
      `Octavia knew exactly who that was. She'd had that same photograph in her own mother's shoebox, taken at a park in Covington. She was wearing the same dress.\n\n` +
      `She put the photograph down very carefully. "A niece or someone."`,
    addsEvidence: {
      id: 'safe_photo_evidence',
      icon: '🖼️',
      name: 'Photograph — A Young Girl',
      desc: 'Dark-haired, about six years old. Fieldman doesn\'t know who it is. Harlowe kept it in the safe.',
    },
    sets: ['found_photo', 'octavia_realises'],
    choices: [
      { text: '⚙️ [Physics] Someone moved that bookcase more than once — who had the strength?', physics: 'work_bookcase', next: 'office_clock' },
      { text: 'Ask Fieldman about the stopped clock.', next: 'office_clock' },
    ]
  },

  office_clock: {
    chapter: 4,
    location: 'Harlowe\'s Office',
    speaker: 'Detective Fieldman',
    bg: 'img/study.jpg',
    text:
      `Fieldman turned the clock over in his hands again, running his thumb along the stopped hands.\n\n` +
      `"It's a pendulum clock," Octavia said, mostly to herself. She'd noticed how these old ones worked when she was a kid — her mother had one on the mantle. The swing of the pendulum, the tick marking each second. Steady, reliable, until something stopped it. "The period of the swing tells you the length of the rod. Longer pendulum, slower swing. The clockmaker builds it to keep perfect time."\n\n` +
      `She looked at the stopped hands. "When they stop, they stop exactly where they were. No drift. The clock doesn't lie about the moment it froze." She reached out and very gently touched the pendulum. It swung once, then stilled. "11:42."\n\n` +
      `Fieldman set it down. "Someone was in this room when that stopped." He looked at the bookcase. The wear pattern on the floor was significant — someone had moved it many, many times.\n\n` +
      `"Someone with longstanding access. Someone who knew exactly where the compartment was." He thought aloud. "That rules out a recent visitor. Whitney managed this house for years. Aaron grew up here."`,
    addsEvidence: {
      id: 'stopped_clock',
      icon: '🕐',
      name: 'Stopped Clock — 11:42 PM',
      desc: 'A pendulum clock — it stops exactly when it stops. Someone was in the office at 11:42 PM.',
    },
    choices: [
      { text: '⚙️ [Physics] How does a pendulum clock actually keep time?', physics: 'pendulum_clock', next: 'coroner_call' },
      { text: 'The coroner\'s call comes in.', next: 'coroner_call' },
    ]
  },

  coroner_call: {
    chapter: 4,
    location: 'The Car — Outside the Manor',
    speaker: 'Dr. Priya Nath',
    bg: 'img/cliff.jpg',
    text:
      `They were just getting into the car when the call came through. Fieldman put it on speaker and neither of them moved.\n\n` +
      `"I'd normally file this as natural causes given his documented conditions," Nath said. "But since you asked for anything irregular: his serum potassium was 6.4 mmol/L. Normal cap is 5.0. His kidneys couldn't have cleared it fast enough. It's consistent with a large increase in potassium."\n\n` +
      `A beat. "I can't confirm the source from bloodwork alone. But the level is too high to attribute to diet."\n\n` +
      `When the call ended, neither of them started the car.`,
    addsEvidence: {
      id: 'bloodwork',
      icon: '🧪',
      name: 'Bloodwork Results — Confirmed Hyperkalemia',
      desc: 'K⁺ at 6.4 mmol/L. Normal cap 5.0. Consistent with external potassium source.',
    },
    choices: [
      { text: 'Drive. Let Fieldman lay it out.', next: 'fieldman_theory' },
    ]
  },

  fieldman_theory: {
    chapter: 4,
    location: 'The Car — Cliff Road',
    speaker: 'Detective Fieldman',
    bg: 'img/cliff.jpg',
    text:
      `He drove and talked through it, slowly and carefully.\n\n` +
      `"Harlowe had heart disease and kidney impairment. Chronic potassium ingestion over months could've killed him. It's easy to sneak into his diet. Aaron's a doctor. He'd know exactly what it does to a compromised heart. He's been in that house his whole life. He knew about the bookcase. And he had more reason to hate his father than anyone — John's death, Sonia, all of it."\n\n` +
      `A long pause.\n\n` +
      `"The problem is the girl at the bar. We can't place anyone. Gus never got a clear look at her face. She's a ghost."`,
    choices: [
      { text: '"Aaron couldn\'t have done it." (Quietly)', next: 'fieldman_theory_2' },
    ]
  },

  fieldman_theory_2: {
    chapter: 4,
    location: 'The Car — Cliff Road',
    speaker: 'Octavia (You)',
    bg: 'img/cliff.jpg',
    text:
      `"Aaron hadn't been in the house for decades." She kept her eyes on the road ahead. "He never talked to Harlowe, so he didn't have an opportunity to dose him with potassium."\n\n` +
      `"So maybe he had an accomplice." Fieldman said.\n\n` +
      `"The girl at the bar? Gus said Harlowe was lighter with her — you don't act that way with someone you've known your whole life."\n\n` +
      `Fieldman looked at her. "No. You don't."\n\n` +
      `Neither of them said anything else for the rest of the drive.`,
    choices: [
      { text: 'Dinner. The final question.', next: 'dinner' },
    ]
  },

  // ═══════════════════════════════════════════
  //  CHAPTER 5 — Dealer's Choice
  // ═══════════════════════════════════════════

  dinner: {
    chapter: 5,
    location: 'Hargrove Manor — Dining Room',
    speaker: 'Detective Fieldman',
    bg: 'img/drawing_room.jpg',
    text:
      `They ate at the long dining table, which felt faintly absurd — two people in a room built for twelve. Octavia was wearing her locket.\n\n` +
      `Fieldman had examined Aaron's locket as part of the case. He'd been thinking about it.\n\n` +
      `"Your locket," he said. "Where'd you get it?"\n\n` +
      `"My mother. She said it was a gift from someone she loved."\n\n` +
      `"Aaron's locket is identical."\n\n` +
      `She didn't look up from her plate.\n\n` +
      `"Octavia."\n\n` +
      `She set down her fork. She looked at him across the table.\n\n` +
      `"Aaron didn't do it."`,
    choices: [
      { text: 'What does Fieldman do?', next: 'dealers_choice' },
    ]
  },

  dealers_choice: {
    chapter: 5,
    location: 'Hargrove Manor — Dining Room',
    speaker: 'Octavia (You)',
    bg: 'img/drawing_room.jpg',
    text:
      `"I grew up in the Bronx, you know? Some single bedroom shack me and my mom shared until I got into college. NYU!" She waved her fist with a commiserating smile, then lowered it. "I was doing good. Top of my class, on track to medical school, I had the internships and work placements all lined up. Professors always used to say my future was ahead of me."\n\n` +
      `Fieldman quietly added, "Then she got sick."\n\n` +
      `Octavia nodded. "Then she got sick. She spent her whole life taking care of me, I couldn't just leave her. So, I moved back in. Cleared some boxes to make way for medical equipment, which is where I found the locket, and a letter from Harlowe ordering my mother to never darken his doorstep ever again. I just wanted to get to know my family."\n\n` +
      `"So, you found Harlowe."\n\n` +
      `"No, Harlowe found me. Wanted to learn more about his living grandchild since the ones Whitney gave him were 'useless'. I begged him to help my mom, to help us. She worked minimum wage her whole life, she didn't have the health insurance to cover treatment. He was just so selfish, all he wanted was to talk about himself! How old he was, how much his bones hurt, how much his family didn't appreciate him." Octavia paused to take a drink of water. "And after every lunch I'd go back to that tiny house and watch my mother slowly die. So, I bought one of the only stable compounds of potassium publicly available—"\n\n` +
      `"—Potassium chloride." Fieldman interjected. "What I can't figure out is how you managed to dose him with it, the compound is pretty salt—" Realization dawned on him. "The toffees."\n\n` +
      `"The toffees! Perfectly safe for most, eating one would hardly do anything to anyone but a frail old man suffering from a chronic heart condition. I didn't know he'd will me anything though. Must've felt guilty. As for the safe, I don't know who opened it. Maybe one of the kids? The code was my birthday though. Harlowe was a man filled with regrets. Almost feel bad for the guy. Almost…"\n\n` +
      `He looked at her for a long time.\n\n` +
      `She held it. She had come this far. She had planned for two years, managed every variable, sat across from a dying man and brought him toffees and called it justice. She had watched him leave her mother with nothing and she had decided that would not stand.\n\n` +
      `She did not think she had been wrong. She was not certain she had been right.\n\n` +
      `Fieldman closed his notebook — she heard the snap of it.\n\n` +
      `*What does he do?*`,
    choices: [
      { text: 'High friendship — Fieldman closes the case.', next: 'ending_high', requires_min_friendship: 2 },
      { text: 'Low friendship — Fieldman makes the call.', next: 'ending_low' },
    ]
  },

  // ═══════════════════════════════════════════
  //  ENDINGS
  // ═══════════════════════════════════════════

  ending_high: {
    chapter: 5,
    location: 'Hargrove Manor — Dining Room',
    speaker: 'Detective Fieldman',
    bg: 'img/drawing_room.jpg',
    text:
      `He was quiet for a long time. Long enough that she started to prepare herself for what came next.\n\n` +
      `"Your mother," he said. "Is she going to be okay?"\n\n` +
      `Octavia finally looked up. "With the inheritance she should be."\n\n` +
      `He nodded. He didn't ask anything else.\n\n` +
      `In the morning he filed the report: natural causes, cardiac arrest consistent with documented heart disease and hypertension. The estate transferred to Octavia Milagro. Sonia's treatment was funded within the week.\n\n` +
      `Octavia went home and didn't go back to the town. She kept the locket.\n\n` +
      `Her mother got better.`,
    ending: 'closed_case',
    choices: [
      { text: 'The end.', next: null },
    ]
  },

  ending_low: {
    chapter: 5,
    location: 'Hargrove Manor — Dining Room',
    speaker: 'Detective Fieldman',
    bg: 'img/drawing_room.jpg',
    text:
      `"I believe you," he said. "But believing you and doing nothing aren't the same thing."\n\n` +
      `The trial was seven months. Manslaughter — the method was too ambiguous, and her cooperation throughout counted for something. She served three years.\n\n` +
      `Sonia was alive when she got out. Octavia used the portion of the estate not frozen in legal proceedings to fund her mother's treatment from inside.\n\n` +
      `When she was released, Aaron was waiting outside the gates. He had his locket. She didn't know what to say.\n\n` +
      `"Your mum says hello," he said. He'd been visiting Sonia the whole time she was inside.\n\n` +
      `She finally understood what Harlowe had meant: *it was always yours.* He meant Aaron should have always been with Sonia. That it was his fault they were driven apart.`,
    ending: 'served_time',
    choices: [
      { text: 'The end.', next: null },
    ]
  },

};