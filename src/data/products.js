const products = [
  {
    id: "1",
    name: "Alpha Arbutin & Vitamin C Body Butter 250ml",
    category: "Skin",
    price: 180,
    image: require("../images/products/25.png"),
    description: "A luxurious, deeply hydrating body butter enriched with Alpha Arbutin and Vitamin C to visibly brighten and even out skin tone. Perfect for dull or pigmented skin.",
    benefits: [
      "Brightens and evens out skin tone",
      "Deeply nourishes and moisturizes",
      "Fades dark marks and hyperpigmentation",
      "Softens and smooths skin texture"
    ],
    usage: "Apply generously to clean, dry skin twice daily. Focus on areas with uneven tone or dryness. For best results, use consistently with SPF.",
  },
  {
    id: "2",
    name: "Alpha Arbutin & Vitamin C Face Butter 50 ml",
    category: "Skin",
    price: 220,  
    image: require("../images/products/23.png"),
    description: "A rich, creamy face butter infused with Alpha Arbutin and Vitamin C to help fade dark marks, even out skin tone, and reveal a natural glow. Ideal for hyperpigmented or uneven skin.",
    benefits: [
      "Reduces dark marks and discoloration",
      "Boosts radiance and skin clarity",
      "Deeply hydrates without clogging pores",
      "Brightens dull skin for a more even complexion"
    ],
    usage: "Use as the final step in your skincare routine. Massage a small amount onto cleansed face and neck. Use day and night. Always follow with SPF during the day." 
  },
  {
    id: "3",
    name: "Papaya Turmeric Body Oil 200ml",
    category: "Skin",
    price: 220,  
    image: require("../images/products/31.png"),
    description: "A lightweight, non-greasy body oil formulated with Papaya and Turmeric to help brighten, even out skin tone, and restore a natural glow. Perfect for dull, uneven, or textured skin.",
    benefits: [
      "Brightens and evens skin tone naturally",
      "Fades blemishes and dark spots",
      "Improves skin texture and smoothness",
      "Locks in moisture for a radiant, healthy finish"
    ],
    usage: "Apply daily to damp skin after showering. Massage in circular motions until fully absorbed. Use consistently for best results."
  },
  {
    id: "4",
    name: "Papaya Turmeric Facial Oil 50 ml",
    category: "Skin",
    price: 220,  
    image: require("../images/products/34.png"),
    description: "A glow-boosting facial oil powered by Papaya enzymes and Turmeric extract to help improve skin tone, texture, and clarity. Ideal for dull, pigmented, or acne-scarred skin.",
    benefits: [
      "Gently fades dark spots and hyperpigmentation",
      "Revives dull skin with a natural glow",
      "Balances oil production and smooths texture",
      "Lightweight, non-comedogenic formula"
    ],
    usage: "Use after cleansing and toning. Apply 2–3 drops to fingertips and gently press into skin. Follow with moisturizer. Suitable for daily use."
  },
  {
    id: "5",
    name: "Rose Water Toner 200ml",
    category: "Skin",
    price: 220,  
    image: require("../images/products/54.png"),
    description: "A refreshing and balancing toner made with pure Rose Water to hydrate, soothe, and prep your skin for the rest of your skincare routine. Ideal for sensitive, dry, or irritated skin.",
    benefits: [
      "Gently tones and refreshes skin",
      "Soothes redness and irritation",
      "Restores natural pH balance",
      "Preps skin for better absorption of serums and moisturizers"
    ],
    usage: "After cleansing, apply to a cotton pad or spray directly onto the face. Pat gently into skin. Can be used morning, night, and throughout the day as a refreshing mist."
  }, 
  {
    id: "6",
    name: "Turmeric Body Butter - Pink 250ml",
    category: "Skin",
    price: 220,  
    image: require("../images/products/28.png"),
    description: "A rich, whipped body butter infused with skin-loving Turmeric to help brighten, calm, and deeply moisturize the skin. Perfect for dry, uneven, or irritated skin types.",
    benefits: [
      "Helps fade dark marks and scars",
      "Brightens dull, uneven skin",
      "Nourishes and softens dry areas",
      "Anti-inflammatory properties to soothe irritation"
    ],
    usage: "Massage onto clean, dry skin focusing on areas that need extra love — such as elbows, knees, and dark patches. Use daily for best results."
  },
  {
    id: "7",
    name: "Turmeric Body Butter - Green 250ml",
    category: "Skin",
    price: 220,  
    image: require("../images/products/16.png"),
    description: "A rich, whipped body butter infused with skin-loving Turmeric to help brighten, calm, and deeply moisturize the skin. Perfect for dry, uneven, or irritated skin types.",
    benefits: [
      "Helps fade dark marks and scars",
      "Brightens dull, uneven skin",
      "Nourishes and softens dry areas",
      "Anti-inflammatory properties to soothe irritation"
    ],
    usage: "Massage onto clean, dry skin focusing on areas that need extra love — such as elbows, knees, and dark patches. Use daily for best results."
  },

  {
    id: "8",
    name: "Turmeric Face Butter - Pink 50ml",
    category: "Skin",
    price: 220,  
    image: require("../images/products/12.png"),
    description: "A gentle yet powerful face butter infused with Turmeric to help brighten, calm, and deeply moisturize the skin. Designed to improve skin clarity and texture while fading dark marks.",
    benefits: [
      "Visibly fades hyperpigmentation and dark spots",
      "Boosts skin glow and radiance",
      "Nourishes dry or flaky skin without clogging pores",
      "Soothes irritation and redness with natural anti-inflammatory properties"
    ],
    usage: "Apply a small amount to clean skin as the final step in your skincare routine. Use day and night. For daytime use, follow with SPF."
  },
  {
    id: "8",
    name: "Turmeric Face Butter - Green 50ml",
    category: "Skin",
    price: 220,  
    image: require("../images/products/14.png"),
    description: "A gentle yet powerful face butter infused with Turmeric to help brighten, calm, and deeply moisturize the skin. Designed to improve skin clarity and texture while fading dark marks.",
    benefits: [
      "Visibly fades hyperpigmentation and dark spots",
      "Boosts skin glow and radiance",
      "Nourishes dry or flaky skin without clogging pores",
      "Soothes irritation and redness with natural anti-inflammatory properties"
    ],
    usage: "Apply a small amount to clean skin as the final step in your skincare routine. Use day and night. For daytime use, follow with SPF."
  },
  {
    id: "9",
    name: "Papaya Body Oil 200ml",
    category: "Skin",
    price: 220,  
    image: require("../images/products/59.png"),
    description: "A lightweight, fast-absorbing body oil enriched with Papaya extract to help smooth, brighten, and deeply moisturize the skin. Ideal for dry or uneven skin that needs a radiant boost.",
    benefits: [
      "Improves skin elasticity and softness",
      "Naturally brightens and evens out skin tone",
      "Hydrates without leaving a greasy residue",
      "Perfect for daily use on dull or dry skin"
    ],
    usage: "Apply to clean, slightly damp skin after bathing. Massage gently in upward circular motions until fully absorbed. Use daily for a healthy, radiant glow."
  },

  {
    id: "10",
    name: "Bentonite Clay Powder 200ml",
    category: "Skin",
    price: 220,  
    image: require("../images/products/10.png"),
    description: "A 100% pure and natural detoxifying clay powder known for its deep-cleansing properties. Bentonite clay draws out impurities, tightens pores, and helps clear blemishes, making it ideal for oily or acne-prone skin.",
    benefits: [
      "Detoxifies and unclogs pores",
      "Reduces acne and blackheads",
      "Tightens and tones skin naturally",
      "Can be used on face, body, and scalp"
    ],
    usage: "Mix 1–2 teaspoons with water, rose water, or apple cider vinegar to form a paste. Apply evenly to clean skin. Let dry for 10–15 minutes, then rinse off gently. Use 1–2 times per week."
  },
  {
    id: "11",
    name: "Aloe Vera Serum 50ml",
    category: "Skin",
    price: 220,  
    image: require("../images/products/55.png"),
    description: "A lightweight, fast-absorbing serum enriched with pure Aloe Vera extract to deeply hydrate, calm, and restore the skin’s natural balance. Ideal for dry, irritated, or sensitive skin.",
    benefits: [
      "Soothes redness, inflammation, and irritation",
      "Boosts hydration and skin healing",
      "Helps calm acne flare-ups and sun-damaged skin",
      "Leaves skin feeling refreshed, cool, and soft"
    ],
    usage: "Apply a few drops to cleansed face and neck after toner. Gently press into the skin using fingertips. Follow with moisturizer. Use morning and night."
  },
  {
    id: "12",
    name: "African Black Soap Cleanser 100ml",
    category: "Skin",
    price: 220,  
    image: require("../images/products/6.png"),
    description: "A natural foaming cleanser made with authentic African Black Soap to gently cleanse, detoxify, and treat acne-prone or uneven skin. Rich in shea butter and plantain ash, this cleanser leaves your skin smooth, clear, and refreshed.",
    benefits: [
      "Gently removes excess oil and impurities",
      "Fights acne and blemishes",
      "Brightens and evens out skin tone",
      "Helps reduce appearance of scars and dark spots"
    ],
    usage: "Pump a small amount into damp hands and lather. Massage onto face in circular motions, avoiding the eyes. Rinse well and pat dry. Use once or twice daily."
  },
  {
    id: "13",
    name: "Activated Charcoal Soap 115g",
    category: "Skin",
    price: 220,  
    image: require("../images/products/1.png"),
    description: "A purifying bar soap formulated with activated charcoal to deeply cleanse, absorb excess oil, and detoxify the skin. Perfect for blemish-prone, oily, or congested skin on the face and body.",
    benefits: [
      "Draws out impurities and toxins",
      "Reduces acne and clogged pores",
      "Controls excess oil and shine",
      "Leaves skin feeling clean, balanced, and refreshed"
    ],
    usage: "Lather the soap between hands or with a sponge. Gently massage onto damp face or body in circular motions. Rinse thoroughly. Use 2–3 times a week or as needed."
  },
  {
    id: "14",
    name: "Papaya Turmeric Soap 115g",
    category: "Skin",
    price: 220,  
    image: require("../images/products/2.png"),
    description: "A brightening bar soap made with a blend of Papaya and Turmeric to gently cleanse, even skin tone, and boost radiance. Perfect for daily use on face and body to fade dark marks and bring out your natural glow.",
    benefits: [
      "Brightens skin and fades hyperpigmentation",
      "Gently exfoliates and smooths texture",
      "Cleanses without stripping moisture",
      "Ideal for dull, uneven, or blemish-prone skin"
    ],
    usage: "Lather soap with water and apply to damp skin. Gently massage in circular motions, then rinse thoroughly. Use daily on face and/or body for best results."
  },
  {
    id: "15",
    name: "Lemon Soap 115g",
    category: "Skin",
    price: 220,  
    image: require("../images/products/3.png"),
    description: "A refreshing bar soap made with natural lemon extract to cleanse, tone, and brighten the skin. Known for its clarifying and oil-controlling properties, this soap is ideal for acne-prone and oily skin types.",
    benefits: [
      "Cleanses and tones the skin",
      "Brightens and evens out complexion",
      "Helps control oil and reduce breakouts",
      "Leaves skin feeling refreshed and energized"
    ],
    usage: "Lather the soap between your hands or with a sponge. Apply to damp skin, massage gently, and rinse thoroughly. Use daily on face or body as needed."
  },



  {
    id: "16",
    name: "Chebe Powder 100g",
    category: "Hair",
    price: 200,
    image: require("../images/products/49.png"),
    description: "A traditional hair-strengthening powder used by women in Chad for generations. Chebe powder promotes length retention, reduces breakage, and strengthens strands — perfect for natural, textured hair.",
    benefits: [
      "Encourages stronger, longer hair",
      "Reduces breakage and shedding",
      "Seals in moisture for better length retention",
      "Improves elasticity and manageability"
    ],
    usage: "Mix with your favorite hair oil or conditioner to form a paste. Apply to damp hair from root to tip, focusing on ends. Leave on for several hours or overnight, then rinse thoroughly. Use 1–2 times per week."
  },
  {
    id: "17",
    name: "Jamaican Black Castor 100ml",
    category: "Hair",
    price: 200,
    image: require("../images/products/5.png"),
    description: "A nutrient-rich, cold-pressed oil made from roasted castor beans, known to promote thicker, fuller hair. Ideal for scalp care, edges, and damaged hair in need of deep nourishment.",
    benefits: [
      "Promotes strong, healthy hair growth",
      "Thickens edges and fills in thinning areas",
      "Moisturizes dry scalp and reduces flaking",
      "Great for sealing moisture into protective styles"
    ],
    usage: "Apply directly to the scalp, edges, or hair strands 2–3 times per week. Massage gently. Can also be added to deep conditioners or hot oil treatments for an extra growth boost."
  },

  {
    id: "18",
    name: "Chebe Hair Butter 125g",
    category: "Hair",
    price: 200,
    image: require("../images/products/58.png"),
    description: "A rich, creamy butter made with Chebe powder and nourishing oils to moisturize, strengthen, and protect natural hair. This butter helps reduce breakage, seal in moisture, and promote healthy length retention.",
    benefits: [
      "Deeply moisturizes and nourishes dry, brittle hair",
      "Improves hair elasticity and reduces breakage",
      "Supports length retention and hair strength",
      "Ideal for twist-outs, braids, and protective styles"
    ],
    usage: "Apply a small amount to damp or dry hair. Focus on the ends and mid-lengths. Use as a daily moisturizer or sealant. Perfect for protective styles and wash day routines."
  },

  {
    id: "19",
    name: "Rosemary Regular Shampoo 300ml",
    category: "Hair",
    price: 200,
    image: require("../images/products/36.png"),
    description: "A gentle, sulfate-free shampoo infused with rosemary extract to cleanse the scalp, reduce buildup, and promote healthy hair growth. Leaves hair feeling fresh, soft, and nourished without stripping its natural oils.",
    benefits: [
      "Cleanses hair and scalp without harsh chemicals",
      "Stimulates hair growth with rosemary and botanical extracts",
      "Reduces scalp flakiness and dryness",
      "Safe for all hair types and textures"
    ],
    usage: "Apply to wet hair and gently massage into the scalp. Rinse thoroughly. Repeat if necessary. Follow with conditioner or treatment butter. Use 1–3 times per week as needed."
  },

  {
    id: "20",
    name: "Rosemary Hair Conditioner 300ml",
    category: "Hair",
    price: 200,
    image: require("../images/products/38.png"),
    description: "A moisturizing, nutrient-rich conditioner infused with rosemary to hydrate dry hair, soothe the scalp, and promote strong, healthy growth. Detangles effortlessly while restoring softness and shine.",
    benefits: [
      "Hydrates and softens dry, brittle hair",
      "Stimulates the scalp to support growth",
      "Improves manageability and shine",
      "Strengthens and protects against breakage"
    ],
    usage: "After shampooing, apply a generous amount to wet hair. Focus on mid-lengths and ends. Leave in for 3–5 minutes, then rinse thoroughly. Use 2–3 times a week or as needed."
  },
  {
    id: "21",
    name: "Coconut Curling Cream 250ml",
    category: "Hair",
    price: 200,
    image: require("../images/products/43.png"),
    description: "A thick, ultra-nourishing curling cream infused with coconut oil and shea butter to define and moisturize curls without crunch. Perfect for twist-outs, braid-outs, and natural styles that need lasting hold and moisture.",
    benefits: [
      "Defines curls with long-lasting moisture",
      "Tames frizz and enhances curl pattern",
      "Ideal for thick, dry, or tightly coiled hair",
      "Great for twist-outs, braids, and protective styling"
    ],
    usage: "Apply to damp, freshly washed hair. Section and work through from root to ends. Style as desired. Air dry or use a diffuser for more volume and hold."
  },

  {
    id: "22",
    name: "Curl Activator Lotion 300ml",
    category: "Hair",
    price: 200,
    image: require("../images/products/45.png"),
    description: "A lightweight curl-boosting lotion designed to enhance and revive curls without weighing them down. Perfect for soft, bouncy curls with natural movement and shine.",
    benefits: [
      "Activates and defines natural curls",
      "Provides lightweight moisture and softness",
      "Controls frizz and enhances elasticity",
      "Best for loose curls, waves, and wash-and-go styles"
    ],
    usage: "Apply evenly to damp hair from root to tip. Scrunch upward to encourage curl formation. Let air dry or diffuse. Refresh curls daily as needed."
  },


  {
    id: "23",
    name: "Bentonite Clay Powder 250g",
    category: "Bestseller",
    price: 220,  
    image: require("../images/products/10.png"),
    description: "A 100% pure and natural detoxifying clay powder known for its deep-cleansing properties. Bentonite clay draws out impurities, tightens pores, and helps clear blemishes, making it ideal for oily or acne-prone skin.",
    benefits: [
      "Detoxifies and unclogs pores",
      "Reduces acne and blackheads",
      "Tightens and tones skin naturally",
      "Can be used on face, body, and scalp"
    ],
    usage: "Mix 1–2 teaspoons with water, rose water, or apple cider vinegar to form a paste. Apply evenly to clean skin. Let dry for 10–15 minutes, then rinse off gently. Use 1–2 times per week."
  },
  {
    id: "24",
    name: "Alpha Arbutin & Vitamin C Face Butter 50 ml",
    category: "Bestseller",
    price: 220,  
    image: require("../images/products/23.png"),
    description: "A rich, creamy face butter infused with Alpha Arbutin and Vitamin C to help fade dark marks, even out skin tone, and reveal a natural glow. Ideal for hyperpigmented or uneven skin.",
    benefits: [
      "Reduces dark marks and discoloration",
      "Boosts radiance and skin clarity",
      "Deeply hydrates without clogging pores",
      "Brightens dull skin for a more even complexion"
    ],
    usage: "Use as the final step in your skincare routine. Massage a small amount onto cleansed face and neck. Use day and night. Always follow with SPF during the day." 
  },

  {
    id: "25",
    name: "Papaya Turmeric Soap 115g",
    category: "Bestseller",
    price: 220,  
    image: require("../images/products/2.png"),
    description: "A brightening bar soap made with a blend of Papaya and Turmeric to gently cleanse, even skin tone, and boost radiance. Perfect for daily use on face and body to fade dark marks and bring out your natural glow.",
    benefits: [
      "Brightens skin and fades hyperpigmentation",
      "Gently exfoliates and smooths texture",
      "Cleanses without stripping moisture",
      "Ideal for dull, uneven, or blemish-prone skin"
    ],
    usage: "Lather soap with water and apply to damp skin. Gently massage in circular motions, then rinse thoroughly. Use daily on face and/or body for best results."
  },

  {
    id: "26",
    name: "Papaya Turmeric Facial Oil 50 ml",
    category: "Bestseller",
    price: 220,  
    image: require("../images/products/34.png"),
    description: "A glow-boosting facial oil powered by Papaya enzymes and Turmeric extract to help improve skin tone, texture, and clarity. Ideal for dull, pigmented, or acne-scarred skin.",
    benefits: [
      "Gently fades dark spots and hyperpigmentation",
      "Revives dull skin with a natural glow",
      "Balances oil production and smooths texture",
      "Lightweight, non-comedogenic formula"
    ],
    usage: "Use after cleansing and toning. Apply 2–3 drops to fingertips and gently press into skin. Follow with moisturizer. Suitable for daily use."
  },

  {
    id: "27",
    name: "Papaya Turmeric Body Oil 200ml",
    category: "Bestseller",
    price: 220,  
    image: require("../images/products/31.png"),
    description: "A lightweight, non-greasy body oil formulated with Papaya and Turmeric to help brighten, even out skin tone, and restore a natural glow. Perfect for dull, uneven, or textured skin.",
    benefits: [
      "Brightens and evens skin tone naturally",
      "Fades blemishes and dark spots",
      "Improves skin texture and smoothness",
      "Locks in moisture for a radiant, healthy finish"
    ],
    usage: "Apply daily to damp skin after showering. Massage in circular motions until fully absorbed. Use consistently for best results."
  },

  {
    id: "28",
    name: "Activated Charcoal Soap 115g",
    category: "Bestseller",
    price: 220,  
    image: require("../images/products/1.png"),
    description: "A purifying bar soap formulated with activated charcoal to deeply cleanse, absorb excess oil, and detoxify the skin. Perfect for blemish-prone, oily, or congested skin on the face and body.",
    benefits: [
      "Draws out impurities and toxins",
      "Reduces acne and clogged pores",
      "Controls excess oil and shine",
      "Leaves skin feeling clean, balanced, and refreshed"
    ],
    usage: "Lather the soap between hands or with a sponge. Gently massage onto damp face or body in circular motions. Rinse thoroughly. Use 2–3 times a week or as needed."
  },

  {
    id: "29",
    name: "Turmeric Face Butter - Pink 50ml",
    category: "Bestseller",
    price: 220,  
    image: require("../images/products/12.png"),
    description: "A gentle yet powerful face butter infused with Turmeric to help brighten, calm, and deeply moisturize the skin. Designed to improve skin clarity and texture while fading dark marks.",
    benefits: [
      "Visibly fades hyperpigmentation and dark spots",
      "Boosts skin glow and radiance",
      "Nourishes dry or flaky skin without clogging pores",
      "Soothes irritation and redness with natural anti-inflammatory properties"
    ],
    usage: "Apply a small amount to clean skin as the final step in your skincare routine. Use day and night. For daytime use, follow with SPF."
  },
];

export default products;
