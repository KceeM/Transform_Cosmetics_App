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
    concern: "Acne, dark spots, dull skin",
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
    name: "Glow & Acne Repair Set (with Black Soap Cleanser)",
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
    concern: "Acne, dark spots, dull skin",
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
    concern: "Sensitive skin, dullness, glow"
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
    concern: "Sensitive skin, deep cleanse, glow"
  }
];

export default sets;
