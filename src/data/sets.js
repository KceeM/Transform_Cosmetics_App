const sets = [
  {
    id: "set1",
    name: "Glow & Acne Repair Set (with Charcoal Soap)",
    price: 420,
    image: require("../images/SetCollection/1.png"),
    description: "A complete bundle designed to fight acne, fade dark marks, and leave your skin glowing.",
    includes: [
      "Alpha Arbutin & Vitamin C Face Butter 50ml",
      "Bentonite Clay Powder 250g",
      "Papaya Turmeric Facial Oil 50ml",
      "Activated Charcoal Soap 115g",
      "Rose Water Toner 200ml"
    ],
    concern: "Acne Repair, Skin Clarifying & Glow",
    quizConcern: ["acne", "actives", "glow"],
    details: {
     routine: [
         "Cleanse with Activated Charcoal Soap to remove impurities.",
         "Spritz or apply Rose Water Toner to balance and prep the skin.",
         "Apply a small amount of Alpha Arbutin & Vitamin C Face Butter to moisturize and target dark spots.",
         "Seal in hydration with the Papaya Turmeric Facial Oil."
       ],
     maskUsage: "Use the Bentonite Clay Powder 3–4 times a week or as needed. Mix 1–2 teaspoons with Rose Water (or plain water or apple cider vinegar) to form a paste. Apply evenly to clean skin, let dry for 10–15 minutes, then rinse off. Follow with toner and moisturizer."
    }
  },
  {
    id: "set2",
    name: "Glow & Acne Repair Set (with African Black Soap Cleanser)",
    price: 430,
    image: require("../images/SetCollection/2.png"),
    description: "Same glow-boosting formula, now with African Black Soap Cleanser for a more effective touch.",
    includes: [
      "Alpha Arbutin & Vitamin C Face Butter 50ml",
      "Bentonite Clay Powder 250g",
      "Papaya Turmeric Facial Oil 50ml",
      "African Black Soap Cleanser 100ml",
      "Rose Water Toner 200ml"
    ],
    concern: "Acne Repair, Skin Clarifying & Glow",
    quizConcern: ["acne", "actives", "glow"],
    details: {
     routine: [
         "Cleanse your face using the African Black Soap Cleanser. It deeply cleans and helps clear acne while remaining gentle on the skin.",
          "Follow with Rose Water Toner to soothe and prep your skin for treatment.",
          "Apply a small amount of Alpha Arbutin & Vitamin C Face Butter to moisturize and target hyperpigmentation.",
          "Finish with Papaya Turmeric Facial Oil to lock in moisture and boost your glow."
        ],
     maskUsage: "Use Bentonite Clay Powder as a treatment mask 3–4 times a week. Mix 1–2 teaspoons with Rose Water or plain water (or apple cider vinegar) to create a smooth paste. Apply an even layer to clean skin, allow it to dry for 10–15 minutes, then rinse. Follow up with toner and moisturizer."
    }
  },
  {
    id: "set3",
    name: "Natural Glow Set (No Actives, Black Soap)",
    price: 410,
    image: require("../images/SetCollection/4.png"),
    description: "A gentle yet effective bundle for sensitive skin types. Helps improve texture, tone, and radiance — no active ingredients.",
    includes: [
      "Turmeric Face Butter 50ml",
      "Bentonite Clay Powder 250g",
      "Papaya Turmeric Facial Oil 50ml",
      "African Black Soap Cleanser 100ml",
      "Rose Water Toner 200ml"
    ],
    concern: "Acne Repair, Skin Clarifying & Glow",
    quizConcern: ["acne", "glow" , "no-actives"],
    details: {
        routine: [
          "Cleanse your skin with the African Black Soap Cleanser — gentle but effective for removing dirt and calming sensitive skin.",
          "Apply Rose Water Toner to hydrate and soothe your skin after cleansing.",
          "Massage a small amount of Turmeric Face Butter to moisturize and brighten naturally.",
          "Finish with a few drops of Papaya Turmeric Facial Oil to seal in moisture and enhance glow."
        ],
        maskUsage: "For an optional brightening treatment, use Bentonite Clay Powder 3–4 times a week. Mix 1–2 teaspoons with Rose Water (or water/ACV) into a smooth paste. Apply to clean skin, allow to dry for 10–15 minutes, then rinse. Follow with toner and moisturizer."
    }
  },
  {
    id: "set4",
    name: "Natural Glow Set (No Actives, Charcoal Soap)",
    price: 400,
    image: require("../images/SetCollection/3.png"),
    description: "This no-actives bundle is perfect for skin that needs natural nourishment with a deep cleanse. Ideal for brightening and smoothing without strong ingredients.",
    includes: [
      "Turmeric Face Butter 50ml",
      "Bentonite Clay Powder 250g",
      "Papaya Turmeric Facial Oil 50ml",
      "Activated Charcoal Soap 115g",
      "Rose Water Toner 200ml"
    ],
    concern: "Acne Repair, Skin Clarifying & Glow",
    quizConcern: ["acne", "glow" , "no-actives"],
    details: {
        routine: [
           "Begin by cleansing your face with Activated Charcoal Soap to draw out impurities and excess oil.",
           "Apply Rose Water Toner to hydrate and balance your skin.",
           "Use Turmeric Face Butter to moisturize and brighten gently, without harsh actives.",
           "Seal in hydration with Papaya Turmeric Facial Oil for soft, glowing skin."
        ],
        maskUsage: "Use Bentonite Clay Powder 3–4 times weekly for extra glow. Mix 1–2 teaspoons with Rose Water (or water/ACV) into a paste. Apply to clean skin, leave on for 10–15 minutes, then rinse. Follow with toner and moisturizer."
    }
  },
  {
    id: "set5",
    name: "Calm & Nourish Set (Sensitive Skin Safe)",
    price: 390,
    image: require("../images/SetCollection/SensitiveSet.png"),
    description: "A gentle, non-irritating skincare bundle created for extremely sensitive skin. Helps hydrate, calm, and lightly brighten the skin without any active ingredients or harsh additives.",
    includes: [
      "Raw Shea Butter 125g",
      "Bentonite Clay Powder 250g",
      "Papaya Turmeric Facial Oil 50ml",
      "Activated Charcoal Soap 115g",
      "Rose Water Toner 200ml"
    ],
    concern: "Acne Repair, Skin Clarifying & Glow",
    quizConcern: ["acne", "sensitive", "no-actives"],
    details: {
      routine: [
          "Cleanse your face using the Activated Charcoal Soap — gentle enough for sensitive skin and effective at detoxing.",
          "Apply Rose Water Toner to soothe, calm, and lightly hydrate with its pure formula and touch of glycerine.",
          "Moisturize with Shea Butter to deeply nourish, protect, and strengthen the skin barrier.",
          "Seal in moisture and boost glow with Papaya Turmeric Facial Oil. You can also mix a drop into your Shea Butter for a softer texture and added radiance."
      ],
    maskUsage: "Use Bentonite Clay Powder 2–3 times weekly for a gentle detox. Mix 1–2 teaspoons with Rose Water to form a smooth paste. Apply to clean skin, leave for 10–12 minutes, and rinse. Always follow with toner and moisturizer to keep skin soothed."
  }
 },
   // Set 6 - Active Glow with Kojic & Toner
 {
   id: "set6",
   name: "Glow Max Set (with Kojic Soap & Toner)",
   price: 390,
   image: require("../images/SetCollection/9.png"),
   description: "A high-performance brightening set using Alpha Arbutin and Kojic Acid to fade dark spots, even tone, and reveal glowing skin.",
   includes: [
      "Alpha Arbutin & Vitamin C Face Butter 50ml",
      "Kojic Acid Papaya Turmeric Soap 115g",
      "Papaya Turmeric Facial Oil 50ml",
      "Rose Water Toner 200ml"
   ],
   concern: "Glow Enhancing & Even Skin",
   quizConcern: ["even-tone", "glow" , "darkspots", "hyperpigmentation", "brightening", "actives"],
   details: {
     routine: [
           "Cleanse with Kojic Acid Papaya Turmeric Soap to exfoliate and brighten.",
           "Apply Rose Water Toner to refresh and prep the skin.",
           "Moisturize with Alpha Arbutin & Vitamin C Face Butter to target dark marks.",
           "Finish with Papaya Turmeric Facial Oil to lock in glow."
        ],
    
    }
 },

 // Set 7
 {
    id: "set7",
    name: "Glow Soft Set (with Papaya Soap & Toner)",
    price: 380,
    image: require("../images/SetCollection/9.png"),
    description: "Gentler glow-focused set with Alpha Arbutin and Papaya Soap. Helps even tone and reduce dullness.",
    includes: [
      "Alpha Arbutin & Vitamin C Face Butter 50ml",
      "Papaya Turmeric Soap 115g",
      "Papaya Turmeric Facial Oil 50ml",
      "Rose Water Toner 200ml"
    ],
    concern: "Glow Enhancing & Even Skin",
    quizConcern: ["even-tone", "glow" , "darkspots", "hyperpigmentation", "actives"],
    details: {
      routine: [
          "Cleanse with Papaya Turmeric Soap to brighten and smooth.",
          "Apply Rose Water Toner to hydrate and tone.",
          "Moisturize with Alpha Arbutin & Vitamin C Face Butter.",
          "Seal in with Papaya Turmeric Facial Oil."
        ],
    
    }
 },

 // Set 8
 {
    id: "set8",
    name: "Glow Bright Set (with Lemon Soap & Toner)",
    price: 380,
    image: require("../images/SetCollection/10.png"),
    description: "A fresh and zesty glow set that combines Alpha Arbutin with Lemon Soap for tone correction and brightness.",
    includes: [
      "Alpha Arbutin & Vitamin C Face Butter 50ml",
      "Lemon Soap 115g",
      "Papaya Turmeric Facial Oil 50ml",
      "Rose Water Toner 200ml"
   ],
    concern: "Glow Enhancing & Even Skin",
    quizConcern: ["even-tone", "glow" , "darkspots", "hyperpigmentation", "actives"],
    details: {
      routine: [
          "Use Lemon Soap for a clean, bright base.",
          "Apply Rose Water Toner to soothe and tone.",
          "Follow with Alpha Arbutin & Vitamin C Face Butter.",
          "Add Papaya Turmeric Oil to seal in brightness."
        ],
    
    }
 },

 // Set 9
 {
    id: "set9",
    name: "Glow Max Mini (Kojic, No Toner)",
    price: 350,
    image: require("../images/SetCollection/5.png"),
    description: "For customers who already use a toner — this active mini set offers strong glow results.",
    includes: [
      "Alpha Arbutin & Vitamin C Face Butter 50ml",
      "Kojic Acid Papaya Turmeric Soap 115g",
      "Papaya Turmeric Facial Oil 50ml"
    ],
    concern: "Glow Enhancing & Even Skin",
    quizConcern: ["even-tone", "glow" , "darkspots", "hyperpigmentation", "no-toner", "brightening", "actives"],
    details: {
      routine: [
          "Cleanse with Kojic Papaya Turmeric Soap.",
          "Apply face butter to target dark marks.",
          "Finish with Papaya Turmeric Oil to nourish."
        ],
    
    }
 },

 // Set 10
 {
    id: "set10",
    name: "Glow Soft Mini (Papaya Soap, No Toner)",
    price: 340,
    image: require("../images/SetCollection/5.png"),
    description: "A gentle 3-step routine for glowing, even skin. Perfect for everyday use.",
    includes: [
       "Alpha Arbutin & Vitamin C Face Butter 50ml",
       "Papaya Turmeric Soap 115g",
       "Papaya Turmeric Facial Oil 50ml"
    ],
    concern: "Glow Enhancing & Even Skin",
    quizConcern: ["even-tone", "glow" , "darkspots", "hyperpigmentation", "no-toner", "actives"],
    details: {
      routine: [
          "Wash face with Papaya Turmeric Soap.",
          "Apply face butter for even tone.",
          "Seal in moisture with facial oil."
        ],
    
    }
 },

 // Set 11
 {
    id: "set11",
    name: "Glow Fresh Mini (Lemon Soap, No Toner)",
    price: 340,
    image: require("../images/SetCollection/7.png"),
    description: "A refreshing and minimal brightening trio with Lemon Soap and actives.",
    includes: [
      "Alpha Arbutin & Vitamin C Face Butter 50ml",
      "Lemon Soap 115g",
      "Papaya Turmeric Facial Oil 50ml"
    ],
    concern: "Glow Enhancing & Even Skin",
    quizConcern: ["even-tone", "glow" , "darkspots", "hyperpigmentation", "no-toner", "actives"],
    details: {
      routine: [
          "Cleanse with Lemon Soap.",
          "Apply Alpha Arbutin Face Butter.",
          "Top with facial oil for extra glow."
        ],
    
    }
 },

 // Set 12 (no actives)
 {
    id: "set12",
    name: "Gentle Glow Set (Turmeric Butter & Kojic Soap)",
    price: 380,
    image: require("../images/SetCollection/GlowPap.png"),
    description: "For sensitive skin users who want brightening power without heavy actives in their moisturizer.",
    includes: [
       "Turmeric Face Butter 50ml",
       "Kojic Acid Papaya Turmeric Soap 115g",
       "Papaya Turmeric Facial Oil 50ml",
       "Rose Water Toner 200ml"
    ],
    concern: "Glow Enhancing & Even Skin",
    quizConcern: ["even-tone", "glow" , "darkspots", "hyperpigmentation", "no-toner", "actives"],
    etails: {
      routine: [
          "Cleanse with Kojic Papaya Soap.",
          "Tone with Rose Water.",
          "Apply Turmeric Face Butter.",
          "Seal with facial oil."
        ],
    
    }
 },

 // Set 13
 {
    id: "set13",
    name: "Even Skin Natural Set (Papaya Soap, Turmeric Butter)",
    price: 360,
    image: require("../images/SetCollection/GlowPap.png"),
    description: "A gentle, glow-enhancing set free from actives. Perfect for sensitive or calm routines.",
    includes: [
      "Turmeric Face Butter 50ml",
      "Papaya Turmeric Soap 115g",
      "Papaya Turmeric Facial Oil 50ml"
    ],
    concern: "Glow Enhancing & Even Skin",
    quizConcern: ["even-tone", "glow" , "darkspots", "hyperpigmentation", "no-toner", "no-actives"],
    details: {
      routine: [
          "Cleanse with Papaya Soap.",
          "Apply Turmeric Face Butter.",
          "Finish with facial oil for glow."
        ],
    
    }
 },

 // Set 14
 {
    id: "set14",
    name: "Glow Calm Trio (Lemon Soap & Turmeric Butter)",
    price: 360,
    image: require("../images/SetCollection/Glowlem.png"),
    description: "A fresh, non-irritating glow set ideal for glow-seekers avoiding strong actives.",
    includes: [
      "Turmeric Face Butter 50ml",
      "Lemon Soap 115g",
      "Papaya Turmeric Facial Oil 50ml"
    ],
    concern: "Glow Enhancing & Even Skin",
    quizConcern: ["even-tone", "glow" , "darkspots", "hyperpigmentation", "no-toner", "no-actives"],
    details: {
      routine: [
          "Cleanse with Lemon Soap.",
          "Apply Turmeric Face Butter to moisturize and brighten gently.",
          "Seal with Papaya Turmeric Oil."
        ],
    
    }
  },
  // Set 15 - Alpha Arbutin Body + Face Butter
{
  id: "set15",
  name: "Alpha Arbutin & Vitamin C Body & Face Butter Duo",
  price: 320,
  image: require("../images/SetCollection/32.png"),
  description: "Brightening and hydrating duo powered by Alpha Arbutin for both face and body.",
  includes: [
      "Alpha Arbutin & Vitamin C Body Butter 250ml",
      "Alpha Arbutin & Vitamin C Face Butter 50ml"
   ],
  concern: "Moisture Care – Body Butters and Oils",
  details: {
      routine: [
         "Use Body Butter after showering to deeply moisturize and brighten.",
          "Apply Face Butter to clean face to soften and target uneven tone."
        ]
   }
},

// Set 16 - Turmeric Butters (Pink)
{
  id: "set16",
  name: "Turmeric Body & Face Butter Duo (Pink)",
  price: 300,
  image: require("../images/SetCollection/33.png"),
  description: "Glow-enhancing pink turmeric butters to deeply nourish dry skin.",
  includes: [
     "Turmeric Body Butter 250ml (Pink)",
     "Turmeric Face Butter 50ml (Pink)"
   ],
  concern: "Moisture Care – Body Butters and Oils",
  details: {
     routine: [
          "Apply Turmeric Body Butter generously to body after bathing.",
          "Use matching Face Butter daily for glowing, moisturized skin."
        ]
    }
},

// Set 17 - Turmeric Butters (Green)
{
  id: "set17",
  name: "Turmeric Body & Face Butter Duo (Green)",
  price: 300,
  image: require("../images/SetCollection/28.png"),
  description: "Soothing green turmeric butter set to calm and moisturize both face and body.",
  includes: [
     "Turmeric Body Butter 250ml (Green)",
     "Turmeric Face Butter 50ml (Green)"
  ],
  concern: "Moisture Care – Body Butters and Oils",
  details: {
     routine: [
         "Massage Body Butter into clean skin to lock in moisture.",
         "Apply Face Butter morning and night to support skin softness."
       ]
    }
},

// Set 18 - Papaya Turmeric Oil Duo
{
  id: "set18",
  name: "Papaya Turmeric Body & Facial Oil Duo",
  price: 280,
  image: require("../images/SetCollection/34.png"),
  description: "Brightening and nourishing oils for both face and body with a tropical turmeric twist.",
  includes: [
     "Papaya Turmeric Body Oil 200ml",
     "Papaya Turmeric Facial Oil 50ml"
   ],
  concern: "Moisture Care – Body Butters and Oils",
  details: {
     routine: [
          "Massage Body Oil into damp skin to nourish and add glow.",
          "Apply Facial Oil after moisturizer to seal in hydration."
       ]
    }
},

// Set 19 - Papaya Body Oil (No Turmeric)
{
  id: "set19",
  name: "Papaya Body Oil & Facial Glow Duo",
  price: 270,
  image: require("../images/SetCollection/35.png"),
  description: "A turmeric-free body oil for sensitive clothing, paired with the original facial oil for glow.",
  includes: [
     "Papaya Body Oil 200ml",
     "Papaya Turmeric Facial Oil 50ml"
   ],
  concern: "Moisture Care – Body Butters and Oils",
  details: {
    routine: [
          "Apply Papaya Body Oil to damp skin post-shower.",
          "Use Facial Oil daily or nightly for radiant skin."
       ]
   }
},

// Set 20 - Alpha + Papaya Full Moisture Set
{
  id: "set20",
  name: "Full Moisture Set – Alpha Arbutin + Papaya Oils",
  price: 460,
  image: require("../images/SetCollection/30.png"),
  description: "A complete body and face hydration routine with brightening butters and oils.",
  includes: [
     "Alpha Arbutin & Vitamin C Body Butter 250ml",
     "Alpha Arbutin & Vitamin C Face Butter 50ml",
     "Papaya Turmeric Body Oil 200ml",
     "Papaya Turmeric Facial Oil 50ml"
   ],
  concern: "Moisture Care – Body Butters and Oils",
  details: {
      routine: [
         "Apply Body Butter after bathing, then layer Body Oil for extra hydration.",
          "Moisturize face with Face Butter and finish with Facial Oil for glow."
        ]
    }
},

// Set 21 - Pink Turmeric Full Moisture
{
  id: "set21",
  name: "Full Moisture Set – Pink Turmeric + Papaya Oils",
  price: 440,
  image: require("../images/SetCollection/31.png"),
  description: "Full-body hydration duo with glow-boosting turmeric butters and nourishing papaya oils.",
  includes: [
     "Turmeric Body Butter 250ml (Pink)",
     "Turmeric Face Butter 50ml (Pink)",
     "Papaya Turmeric Body Oil 200ml",
     "Papaya Turmeric Facial Oil 50ml"
   ],
  concern: "Moisture Care – Body Butters and Oils",
  details: {
    routine: [
      "Use Body Butter and Oil together for layered hydration.",
      "Apply Face Butter and seal with Facial Oil for radiant skin."
    ]
  }
},

// Set 22 - Green Turmeric Full Moisture
{
  id: "set22",
  name: "Full Moisture Set – Green Turmeric + Papaya Oils",
  price: 440,
  image: require("../images/SetCollection/29.png"),
  description: "Soothing full-body care with calming green turmeric butters and papaya oils.",
  includes: [
      "Turmeric Body Butter 250ml (Green)",
      "Turmeric Face Butter 50ml (Green)",
      "Papaya Turmeric Body Oil 200ml",
      "Papaya Turmeric Facial Oil 50ml"
   ],
  concern: "Moisture Care – Body Butters and Oils",
  details: {
      routine: [
          "Apply Green Body Butter and Oil to dry areas post-bath.",
          "Use Face Butter daily and top with Facial Oil to lock in moisture."
        ]
    }
},
// Set 23 – Complete Chebe & Castor Growth Set
{
  id: "set23",
  name: "Chebe & Castor Growth Trio",
  price: 350,
  image: require("../images/SetCollection/HG01.png"),
  description: "A powerful natural trio to support stronger, thicker, and longer hair. Great for protective styles and consistent growth routines.",
  includes: [
      "Chebe Hair Butter 100g",
      "Jamaican Black Castor Oil 100ml",
      "Pure Chebe Powder 100g"
    ],
  concern: "Hair Growth & Damage Repair",
  quizConcern: ["growth", "breakage" , "moisture", "damage"],
  details: {
    routine: [
      "Use Chebe Hair Butter 2–4 times weekly to moisturize and protect strands.",
      "Massage Jamaican Black Castor Oil into scalp 3x weekly to stimulate follicles.",
      "Mix Chebe Powder with conditioner or butter for length retention masks — apply mid-shaft to ends, braid or twist, and rinse weekly if needed."
    ]
  }
},

// Set 24 – Castor & Butter Duo
{
  id: "set24",
  name: "Castor & Chebe Hair Butter Duo",
  price: 270,
  image: require("../images/SetCollection/HG02.png"),
  description: "A daily moisture and scalp care combo for encouraging healthier, thicker hair.",
  includes: [
      "Jamaican Black Castor Oil 100ml",
      "Chebe Hair Butter 100g"
    ],
  concern: "Hair Growth & Damage Repair",
  quizConcern: ["growth", "breakage" , "moisture", "damaged"],
  details: {
      routine: [
         "Massage Castor Oil into the scalp and edges 2–3x per week.",
          "Apply Chebe Hair Butter to hair strands as a daily or protective style moisturizer."
        ]
    }
},

// Set 25 – Castor & Chebe Powder Duo
{
  id: "set25",
  name: "Scalp & Growth Mask Duo",
  price: 260,
  image: require("../images/SetCollection/HG03.png"),
  description: "A targeted growth set for scalp and deep-length retention masks.",
  includes: [
      "Jamaican Black Castor Oil 100ml",
      "Pure Chebe Powder 100g"
   ],
  concern: "Hair Growth & Damage Repair",
  quizConcern: ["growth", "breakage", "damgaged"],
  details: {
      routine: [
          "Use Castor Oil directly on scalp for stimulation and nourishment.",
          "Mix Chebe Powder with your preferred oil or conditioner into a paste. Apply mid-shaft to ends, braid/twist, and rinse as needed weekly."
        ]
    }
},
// Set 26 – Complete Haircare & Styling System
{
  id: "set26",
  name: "Full Haircare & Styling System",
  price: 620,
  image: require("../images/SetCollection/26.png"),
  description: "The complete 7-step natural hair care system, from wash day to deep growth and styling — perfect for textured, protective, or natural hair routines.",
  includes: [
      "Rosemary Regular Shampoo 300ml",
      "Rosemary Conditioner 300ml",
      "Chebe Hair Butter 100g",
      "Pure Chebe Powder 100g",
      "Jamaican Black Castor Oil 100ml",
      "Coconut Curling Cream 250ml",
      "Curl Activator Lotion 300ml"
   ],
  concern: "Full Hair Care Regimen",
  quizConcern: ["growth", "breakage" , "moisture" , "washday", "styling", "damaged"],
  details: {
      routine: [
          "Cleanse with Rosemary Shampoo to refresh scalp and stimulate growth.",
          "Condition with Rosemary Conditioner to soften and detangle.",
          "Apply Chebe Hair Butter to moisturize strands, especially for protective styles.",
          "Massage Castor Oil into scalp 2–3x per week to encourage thick growth.",
          "Use Chebe Powder in a DIY length retention mask or infused butter.",
          "Define curls with Coconut Curling Cream and finish with Curl Activator Lotion for hold and hydration."
       ]
   }
},

// Set 27 – Growth & Moisture Wash Kit
{
  id: "set27",
  name: "Growth & Moisture Wash Kit",
  price: 490,
  image: require("../images/SetCollection/25.png"),
  description: "A complete wash and treatment combo for strengthening hair and reducing breakage.",
  includes: [
      "Rosemary Regular Shampoo 300ml",
      "Rosemary Conditioner 300ml",
      "Chebe Hair Butter 100g",
      "Pure Chebe Powder 100g",
      "Jamaican Black Castor Oil 100ml"
   ],
  concern: "Full Hair Care Regimen",
  quizConcern: ["growth", "breakage" , "moisture", "washday"],
  details: {
      routine: [
          "Cleanse with Rosemary Shampoo and follow with the Conditioner.",
          "Apply Castor Oil to scalp and edges after washing.",
          "Use Chebe Butter on strands for deep moisture.",
          "Prepare Chebe Powder mix for biweekly length retention masks."
       ]
   }
},

// Set 28 – Basic Wash Day Set
{
  id: "set28",
  name: "Gentle Wash Day Duo",
  price: 210,
  image: require("../images/SetCollection/36.png"),
  description: "A simple yet nourishing cleansing pair with rosemary to refresh and strengthen.",
  includes: [
      "Rosemary Regular Shampoo 300ml",
      "Rosemary Conditioner 300ml"
   ],
  concern: "Full Hair Care Regimen",
  quizConcern: ["washday"],
  details: {
      routine: [
          "Lather with Rosemary Shampoo to cleanse and stimulate the scalp.",
          "Follow with Rosemary Conditioner to detangle and soften hair."
        ]
    }
},
// Set 29 – Curl Definition Duo
{
  id: "set29",
  name: "Curl Definition Duo",
  price: 250,
  image: require("../images/SetCollection/Styling.png"),
  description: "A lightweight, hydrating combo to define and maintain soft curls all day.",
  includes: [
      "Coconut Curling Cream 250ml",
      "Curl Activator Lotion 300ml"
   ],
  concern: "Styling & Moisture Care",
  quizConcern: ["styling", "moisture"],
  details: {
      routine: [
          "Apply Coconut Curling Cream to damp hair to define and moisturize curls.",
          "Follow with Curl Activator Lotion to enhance definition and reduce frizz without crunch.",
          "May be used on seperate occasions - does not have to be used together"
       ]
    }
},

// Set 30 – Full Curl & Growth Styling Set
{
  id: "set30",
  name: "Full Curl & Strengthening Styling Set",
  price: 390,
  image: require("../images/SetCollection/27.png"),
  description: "A complete styling and moisture solution for curly or protective styles, with added growth support.",
  includes: [
      "Coconut Curling Cream 250ml",
      "Curl Activator Lotion 300ml",
      "Jamaican Black Castor Oil 100ml",
      "Chebe Hair Butter 100g"
   ],
  concern: "Styling & Moisture Care",
  quizConcern: ["styling", "moisture" , "growth" , "breakage" , "damage"],
  details: {
      routine: [
           "Apply Curling Cream on clean, damp hair for hydration and shape.",
          "Use Activator Lotion to define curls or maintain moisture throughout the day.",
          "Massage Castor Oil into scalp 2–3x a week to support growth.",
          "Use Chebe Hair Butter on strands to seal in moisture and protect ends."
        ]
    }
},
// Set 31 – Alpha + Kojic Full Body Glow Kit
{
  id: "set31",
  name: "Full Body Glow Kit (Alpha Arbutin + Kojic)",
  price: 680,
  image: require("../images/SetCollection/FB01.png"),
  description: "The ultimate brightening body and face care set powered by Alpha Arbutin, Kojic Acid, and Papaya Turmeric oils.",
  includes: [
      "Alpha Arbutin & Vitamin C Body Butter 250ml",
      "Alpha Arbutin & Vitamin C Face Butter 50ml",
      "Kojic Acid Papaya Turmeric Soap 115g (x2)",
      "Papaya Turmeric Body Oil 200ml",
      "Papaya Turmeric Facial Oil 50ml",
      "Rose Water Toner 200ml"
    ],
  concern: "Full Body Kits",
  details: {
      routine: [
          "Cleanse body and face using Kojic Papaya Turmeric Soap (morning & night).",
          "Apply Rose Water Toner to tone and refresh facial skin.",
          "Moisturize body with Alpha Arbutin Body Butter and face with Face Butter.",
          "Follow with Papaya Turmeric Oils to seal in hydration and enhance glow."
        ]
    }
},

// Set 32 – Alpha + Papaya Soap Full Body Kit
{
  id: "set32",
  name: "Full Body Glow Kit (Alpha Arbutin + Papaya)",
  price: 670,
  image: require("../images/SetCollection/FB01.png"),
  description: "Gentle full-body skincare bundle with Alpha Arbutin and Papaya Turmeric for even tone and healthy glow.",
  includes: [
       "Alpha Arbutin & Vitamin C Body Butter 250ml",
       "Alpha Arbutin & Vitamin C Face Butter 50ml",
       "Papaya Turmeric Soap 115g (x2)",
       "Papaya Turmeric Body Oil 200ml",
       "Papaya Turmeric Facial Oil 50ml",
       "Rose Water Toner 200ml"
    ],
  concern: "Full Body Kits",
  details: {
      routine: [
          "Cleanse daily with Papaya Turmeric Soap.",
          "Use Rose Water Toner post-cleansing for hydration.",
          "Apply Alpha Arbutin butters to body and face.",
          "Finish with Papaya Turmeric Oils to seal in moisture and boost glow."
        ]
    }
},

// Set 33 – Alpha + Lemon Full Body Kit
{
  id: "set33",
  name: "Full Body Glow Kit (Alpha Arbutin + Lemon)",
  price: 670,
  image: require("../images/SetCollection/FB03.png"),
  description: "A zesty, brightening kit featuring Lemon Soap, Alpha Arbutin, and glow-boosting oils.",
  includes: [
      "Alpha Arbutin & Vitamin C Body Butter 250ml",
      "Alpha Arbutin & Vitamin C Face Butter 50ml",
      "Lemon Soap 115g (x2)",
      "Papaya Turmeric Body Oil 200ml",
      "Papaya Turmeric Facial Oil 50ml",
      "Rose Water Toner 200ml"
    ],
  concern: "Full Body Kits",
  details: {
      routine: [
          "Cleanse body and face using Lemon Soap.",
          "Tone with Rose Water Toner.",
          "Apply Alpha Arbutin butters to skin.",
          "Layer on Papaya Turmeric Oil for full hydration and glow."
       ]
    }
},

// Set 34 – Turmeric + Kojic Full Body Kit
{
  id: "set34",
  name: "Full Body Glow Kit (Turmeric + Kojic)",
  price: 660,
  image: require("../images/SetCollection/FB02.png"),
  description: "A glow-friendly full-body bundle using gentle turmeric butters and Kojic Papaya Soap.",
  includes: [
       "Turmeric Body Butter 250ml",
       "Turmeric Face Butter 50ml",
       "Kojic Acid Papaya Turmeric Soap 115g (x2)",
       "Papaya Turmeric Body Oil 200ml",
       "Papaya Turmeric Facial Oil 50ml",
       "Rose Water Toner 200ml"
    ],
  concern: "Full Body Kits",
  details: {
    routine: [
          "Use Kojic Papaya Soap twice daily to cleanse.",
          "Apply toner to balance skin post-cleansing.",
          "Moisturize with Turmeric butters on body and face.",
          "Finish with Turmeric-infused Papaya Oils for radiant skin."
        ]
    }
},

// Set 35 – Turmeric + Papaya Soap Full Body Kit
{
  id: "set35",
  name: "Full Body Glow Kit (Turmeric + Papaya)",
  price: 650,
  image: require("../images/SetCollection/FB02.png"),
  description: "A calming full-body kit ideal for everyday glow and hydration routines.",
  includes: [
       "Turmeric Body Butter 250ml",
       "Turmeric Face Butter 50ml",
       "Papaya Turmeric Soap 115g (x2)",
       "Papaya Turmeric Body Oil 200ml",
       "Papaya Turmeric Facial Oil 50ml",
       "Rose Water Toner 200ml"
    ],
  concern: "Full Body Kits",
  details: {
      routine: [
          "Cleanse with Papaya Turmeric Soap morning and night.",
          "Apply Rose Water Toner.",
          "Use Turmeric butters on body and face.",
          "Seal with Papaya Turmeric Oils for a soft glow."
       ]
    }
},

// Set 36 – Turmeric + Lemon Full Body Kit
{
  id: "set36",
  name: "Full Body Glow Kit (Turmeric + Lemon)",
  price: 650,
  image: require("../images/SetCollection/FB04.png"),
  description: "A refreshing full-body skincare bundle for a natural, radiant glow using Lemon Soap and turmeric-based butters.",
  includes: [
       "Turmeric Body Butter 250ml",
       "Turmeric Face Butter 50ml",
       "Lemon Soap 115g (x2)",
       "Papaya Turmeric Body Oil 200ml",
       "Papaya Turmeric Facial Oil 50ml",
       "Rose Water Toner 200ml"
   ],
  concern: "Full Body Kits",
  details: {
     routine: [
          "Cleanse with Lemon Soap twice daily.",
          "Tone skin with Rose Water Toner.",
          "Use Turmeric butters to hydrate and calm.",
          "Seal with oils to lock in moisture and glow."
        ]
    }
}

];

export default sets;
