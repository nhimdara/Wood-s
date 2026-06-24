// data/products.js - New shared product data file
export const products = [
  {
    id: 1,
    title: "Fresh Milk",
    image: "/images/milk.png",
    badge: "Best Seller",
    description:
      "Our Fresh Milk is sourced from premium farms across Cambodia. Rich in nutrients and delivered daily.",
    subProducts: [
      {
        id: "milk-1",
        title: "Organic Fresh Milk",
        image: "/images/organic_milk.png",
        origin: "Organic Farm, Cambodia",
        details: {
          description:
            "100% organic fresh milk from grass-fed cows. No antibiotics or hormones used. Rich in calcium and vitamin D, this milk delivers the purest taste of Cambodian countryside.",
          benefits: [
            "Strengthens bones and teeth with natural calcium",
            "Boosts immune system with essential vitamins",
            "Supports muscle growth and recovery",
            "Promotes better sleep with natural melatonin",
            "No artificial hormones or preservatives",
          ],
          ingredients: [
            "100% Organic Fresh Milk",
            "Vitamin D3 (natural source)",
          ],
          nutritionalInfo: {
            serving: "240ml",
            calories: "150",
            protein: "8g",
            calcium: "30% DV",
            vitaminD: "25% DV",
          },
          howToUse:
            "Shake well before use. Keep refrigerated at 2-4°C. Consume within 5-7 days after opening.",
          storage: "Store in refrigerator at 2-4°C. Do not freeze.",
        },
      },
      {
        id: "milk-2",
        title: "Sugar-Free Milk",
        image: "/images/sugarfree_milk.png",
        origin: "Premium Dairy, Cambodia",
        details: {
          description:
            "Zero added sugar milk perfect for health-conscious individuals. Naturally sweet and packed with protein. Ideal for diabetics and those watching their sugar intake.",
          benefits: [
            "No added sugar - naturally sweet",
            "Low glycemic index - safe for diabetics",
            "High protein content for muscle health",
            "Rich in calcium without extra calories",
            "Perfect for weight management diets",
          ],
          ingredients: [
            "Fresh Skim Milk",
            "Natural Stevia Extract",
            "Vitamin D3",
            "Calcium",
          ],
          nutritionalInfo: {
            serving: "240ml",
            calories: "90",
            protein: "8g",
            sugar: "0g",
            calcium: "35% DV",
          },
          howToUse:
            "Shake well before serving. Best consumed chilled. Can be used in coffee, tea, or smoothies.",
          storage: "Refrigerate after opening. Use within 7 days.",
        },
      },
      {
        id: "milk-3",
        title: "Yogurt Drink",
        image: "/images/yogurt_drink.png",
        origin: "Fermented Fresh, Cambodia",
        details: {
          description:
            "Probiotic-rich yogurt drink made from fresh Cambodian milk. Supports digestive health with live active cultures. A delicious and healthy beverage option.",
          benefits: [
            "Contains probiotics for gut health",
            "Improves digestion and nutrient absorption",
            "Boosts immune system naturally",
            "Rich in protein and calcium",
            "Helps maintain healthy gut bacteria",
          ],
          ingredients: [
            "Fresh Milk",
            "Live Probiotic Cultures",
            "Natural Fruit Extracts",
            "Honey",
          ],
          nutritionalInfo: {
            serving: "200ml",
            calories: "120",
            protein: "6g",
            probiotics: "5 billion CFU",
            calcium: "20% DV",
          },
          howToUse:
            "Shake well before drinking. Best enjoyed chilled as a snack or breakfast drink.",
          storage: "Keep refrigerated. Consume within 14 days.",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Premium Tea",
    image: "/images/tea.png",
    badge: "New",
    description:
      "Handpicked from the finest tea gardens, our Premium Tea offers a soothing and aromatic experience.",
    subProducts: [
      {
        id: "tea-1",
        title: "Green Tea",
        image: "/images/green_tea.png",
        origin: "Mountain Gardens, Cambodia",
        details: {
          description:
            "Premium hand-picked green tea leaves from Cambodia's highland gardens. Rich in antioxidants with a delicate, refreshing flavor that soothes the mind and body.",
          benefits: [
            "Rich in antioxidants (EGCG) for cell protection",
            "Boosts metabolism and aids weight management",
            "Improves brain function and focus",
            "Supports heart health naturally",
            "Helps reduce stress and anxiety",
          ],
          ingredients: ["100% Pure Green Tea Leaves (hand-picked)"],
          nutritionalInfo: {
            serving: "2g (per cup)",
            caffeine: "25mg",
            antioxidants: "High",
            zeroCalories: true,
          },
          howToUse:
            "Steep 2g of tea leaves in 200ml hot water (80°C) for 2-3 minutes. Can be enjoyed hot or iced.",
          storage:
            "Store in airtight container away from light, heat, and moisture.",
        },
      },
      {
        id: "tea-2",
        title: "Black Tea",
        image: "/images/black_tea.png",
        origin: "Heritage Estate, Cambodia",
        details: {
          description:
            "Fully oxidized black tea with robust flavor and amber color. Perfect for morning energy and traditional Khmer tea ceremonies.",
          benefits: [
            "Provides sustained energy without jitters",
            "Supports oral health with natural fluoride",
            "Improves gut health with polyphenols",
            "Reduces bad cholesterol levels",
            "Boosts immune system function",
          ],
          ingredients: ["Premium Black Tea Leaves (single origin)"],
          nutritionalInfo: {
            serving: "2g (per cup)",
            caffeine: "45mg",
            theaflavins: "Rich source",
            zeroCalories: true,
          },
          howToUse:
            "Steep 2g in 200ml boiling water for 3-5 minutes. Add milk, honey, or lemon as desired.",
          storage:
            "Keep in sealed container away from strong odors and moisture.",
        },
      },
      {
        id: "tea-3",
        title: "Herbal Tea",
        image: "/images/herbal_tea.png",
        origin: "Herbal Gardens, Cambodia",
        details: {
          description:
            "Caffeine-free herbal blend featuring Cambodian lemongrass, ginger, and pandan leaves. Naturally soothing and aromatic.",
          benefits: [
            "Caffeine-free - perfect for evening relaxation",
            "Aids digestion and reduces bloating",
            "Supports immune system naturally",
            "Promotes better sleep quality",
            "Hydrates without stimulants",
          ],
          ingredients: [
            "Lemongrass",
            "Fresh Ginger",
            "Pandan Leaves",
            "Lemon Balm",
            "Chamomile",
          ],
          nutritionalInfo: {
            serving: "3g (per cup)",
            caffeine: "0mg",
            antioxidants: "Moderate",
            zeroCalories: true,
          },
          howToUse:
            "Steep 3g in 200ml hot water (95°C) for 5-7 minutes. Enjoy with honey for natural sweetness.",
          storage: "Store in cool, dry place away from direct sunlight.",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Artisan Coffee",
    image: "/images/coffee.png",
    badge: "Limited",
    description:
      "Our Artisan Coffee is slow-roasted to perfection, bringing out deep and complex flavors.",
    subProducts: [
      {
        id: "coffee-1",
        title: "Espresso Roast",
        image: "/images/espresso.png",
        origin: "Mondulkiri Highlands, Cambodia",
        details: {
          description:
            "Dark roasted Arabica beans from Mondulkiri's high-altitude farms. Intense flavor with chocolate notes and smooth finish. Perfect for espresso machines and moka pots.",
          benefits: [
            "Rich in antioxidants for cellular health",
            "Improves mental alertness and focus",
            "Boosts metabolic rate naturally",
            "Enhances physical performance",
            "Contains essential nutrients (B2, B3, B5)",
          ],
          ingredients: ["100% Arabica Coffee Beans (Single Origin)"],
          nutritionalInfo: {
            serving: "18g (double shot)",
            caffeine: "80mg",
            antioxidants: "Very High",
            zeroCalories: true,
          },
          howToUse:
            "Grind just before brewing. Use 18g for double shot espresso. Extract at 92°C for 25-30 seconds.",
          storage:
            "Store whole beans in airtight container. Grind fresh for best flavor.",
        },
      },
      {
        id: "coffee-2",
        title: "Cold Brew Blend",
        image: "/images/cold_brew.png",
        origin: "Specialty Blend, Cambodia",
        details: {
          description:
            "Specially crafted medium-dark roast blend designed for cold brewing. Smooth, low-acid, and naturally sweet with chocolate and caramel notes.",
          benefits: [
            "Low acid - gentle on stomach",
            "Smooth flavor without bitterness",
            "Sustained energy release",
            "Hydrating and refreshing",
            "Easy to prepare at home",
          ],
          ingredients: [
            "Arabica & Robusta Blend",
            "No additives or preservatives",
          ],
          nutritionalInfo: {
            serving: "240ml (cold brew)",
            caffeine: "120mg",
            acidity: "Low",
            zeroCalories: true,
          },
          howToUse:
            "Coarse grind 100g coffee, steep in 1L cold water for 12-16 hours. Strain and serve over ice.",
          storage: "Store concentrate in refrigerator for up to 2 weeks.",
        },
      },
      {
        id: "coffee-3",
        title: "Single Origin",
        image: "/images/single_origin.png",
        origin: "Ratanakiri Volcanic Soil, Cambodia",
        details: {
          description:
            "Premium single-origin coffee from Ratanakiri's volcanic soil region. Complex flavor profile with berry notes, wine-like acidity, and floral aroma.",
          benefits: [
            "Unique terroir-driven flavor profile",
            "Highest antioxidant content",
            "Trace minerals from volcanic soil",
            "Supports local farmers",
            "Limited edition - rare and exclusive",
          ],
          ingredients: [
            "100% Specialty Grade Arabica",
            "Rainforest Alliance Certified",
          ],
          nutritionalInfo: {
            serving: "15g (per cup)",
            caffeine: "95mg",
            antioxidants: "Exceptional",
            zeroCalories: true,
          },
          howToUse:
            "Best prepared with pour-over or French press. Use filtered water at 90-96°C.",
          storage: "Consume within 4 weeks of roast date for optimal flavor.",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Traditional Noodle",
    image: "/images/noodle.png",
    badge: "Authentic",
    description:
      "Made using a centuries-old Cambodian recipe, our Traditional Noodle is crafted from high-quality rice.",
    subProducts: [
      {
        id: "noodle-1",
        title: "Rice Noodle",
        image: "/images/rice_noodle.png",
        origin: "Battambang Province, Cambodia",
        details: {
          description:
            "Authentic Cambodian rice noodles made from premium jasmine rice. Gluten-free and perfect for stir-fries, soups, and salads.",
          benefits: [
            "Gluten-free - safe for celiacs",
            "Easy to digest",
            "Low in fat and sodium",
            "Good source of energy",
            "Versatile for many dishes",
          ],
          ingredients: [
            "Premium Jasmine Rice Flour",
            "Water",
            "Tapioca Starch",
          ],
          nutritionalInfo: {
            serving: "100g (cooked)",
            calories: "110",
            carbs: "24g",
            fat: "0.5g",
            gluten: "Free",
          },
          howToUse:
            "Soak in warm water for 10-15 minutes until soft. Drain and use in stir-fries, soups, or salads.",
          storage:
            "Store in cool, dry place. Once opened, keep in airtight container.",
        },
      },
      {
        id: "noodle-2",
        title: "Egg Noodle",
        image: "/images/egg_noodle.png",
        origin: "Phnom Penh, Cambodia",
        details: {
          description:
            "Rich egg noodles made with fresh Cambodian farm eggs. Yellow color and springy texture perfect for noodle soups and stir-fried dishes.",
          benefits: [
            "High protein content from eggs",
            "Rich in B vitamins",
            "Good source of iron",
            "Satisfying and filling",
            "Quick and easy to prepare",
          ],
          ingredients: ["Wheat Flour", "Fresh Eggs", "Salt", "Alkaline Water"],
          nutritionalInfo: {
            serving: "100g (cooked)",
            calories: "138",
            protein: "5g",
            carbs: "25g",
            iron: "8% DV",
          },
          howToUse:
            "Boil in salted water for 3-4 minutes. Rinse with cold water to stop cooking. Add to broth or stir-fry.",
          storage: "Store in sealed container away from moisture.",
        },
      },
      {
        id: "noodle-3",
        title: "Glass Noodle",
        image: "/images/glass_noodle.png",
        origin: "Siem Reap, Cambodia",
        details: {
          description:
            "Clear, translucent noodles made from mung bean starch. Low-calorie alternative that absorbs flavors beautifully. Perfect for spring rolls and hot pot.",
          benefits: [
            "Low calorie - weight management friendly",
            "No fat or cholesterol",
            "Gluten-free option",
            "Neutral flavor absorbs seasonings well",
            "Quick soaking - no boiling needed",
          ],
          ingredients: ["Mung Bean Starch", "Water"],
          nutritionalInfo: {
            serving: "50g (dry)",
            calories: "160",
            carbs: "40g",
            fat: "0g",
            fiber: "1g",
          },
          howToUse:
            "Soak in warm water for 10 minutes until soft. Drain and add to soups, stir-fries, or salads.",
          storage: "Keep in airtight container in cool, dry place.",
        },
      },
    ],
  },
];
