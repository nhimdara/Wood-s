// data/products.js - Complete data based on Kalbe Product Positioning Booklet

export const POSITIONING_FRAMEWORK_STEPS = [
  {
    step: 1,
    id: "who",
    title: "WHO",
    subtitle: "Target Patient / Indication",
    descKh: "សម្រាប់អ្នកជំងឺណា? បញ្ជាក់ក្រុមអ្នកជំងឺ និងជំងឺគោលដៅឱ្យបានច្បាស់លាស់",
    icon: "",
    color: "#0284C7"
  },
  {
    step: 2,
    id: "what",
    title: "WHAT",
    subtitle: "Product Identity & Composition",
    descKh: "សារធាតុសកម្ម ទម្រង់ កម្រិត និងបច្ចេកវិទ្យាផលិតផល",
    icon: "",
    color: "#D97706"
  },
  {
    step: 3,
    id: "why",
    title: "WHY",
    subtitle: "Feature → Benefit",
    descKh: "ហេតុអ្វីជ្រើសរើស? លក្ខណៈពិសេសប្រែក្លាយជាអត្ថប្រយោជន៍ព្យាបាលជាក់ស្តែង",
    icon: "",
    color: "#059669"
  },
  {
    step: 4,
    id: "how",
    title: "HOW",
    subtitle: "Dose / Preparation / Use",
    descKh: "កម្រិតប្រើប្រាស់ របៀបលាយ និងការរក្សាទុកត្រឹមត្រូវ",
    icon: "",
    color: "#EA580C"
  },
  {
    step: 5,
    id: "say",
    title: "SAY",
    subtitle: "Product Detailing",
    descKh: "ការណែនាំផលិតផលខ្លីៗ ក្បោះក្បាយ និងចំគោលដៅសម្រាប់វេជ្ជបណ្ឌិត និងអ្នកជំងឺ",
    icon: "",
    color: "#7C3AED"
  }
];

export const products = [
  {
    id: 1,
    title: "ENDO METABOLIC",
    subtitle: "CKD Anemia • CKD Nutrition • DPN • Diabetes Management",
    image: "/images/ENDO-METABOLIC.png",
    badge: "Specialized Therapy",
    description: "ដំណោះស្រាយកម្រិតខ្ពស់សម្រាប់ការគ្រប់គ្រងជំងឺ CKD Anemia, CKD Nutrition, Diabetic Peripheral Neuropathy (DPN) និង Diabetes Management។",
    subProducts: [
      {
        id: "efesa",
        title: "EFESA",
        genericName: "Efepoetin alfa 0.3mg/0.3mL",
        image: "/images/efesa.png",
        origin: "South Korea",
        badge: "Long-acting ESA",
        categoryTag: "CKD Anemia (ND-CKD)",
        keySellingPoint: "Long-acting ESA ជាមួយ HyFc® Technology ចាក់ SC រៀងរាល់ 2–4 សប្ដាហ៍ សម្រាប់អ្នកជំងឺ CKD Anemia មិនទាន់លាងឈាម ជួយកាត់បន្ថយការចាក់ញឹកញាប់។",
        framework: {
          who: [
            "អ្នកជំងឺខ្វះឈាមដោយសារជំងឺតម្រងនោមរ៉ាំរ៉ៃ (CKD Anemia)",
            "សម្រាប់អ្នកជំងឺ CKD មិនទាន់លាងឈាម (Non-Dialysis CKD / ND-CKD)",
            "អ្នកជំងឺដែលត្រូវការកាត់បន្ថយភាពញឹកញាប់នៃការចាក់ថ្នាំ"
          ],
          what: {
            activeIngredient: "Efepoetin alfa",
            dose: "0.3 mg / 0.3 mL",
            form: "Prefilled Syringe",
            technology: "Hybrid Fc (HyFc®) Technology",
            category: "Long-acting ESA (Erythropoiesis-Stimulating Agent)"
          },
          why: [
            { feature: "Long-acting ESA", benefit: "ជួយកាត់បន្ថយការចាក់ញឹកញាប់" },
            { feature: "Hybrid Fc (HyFc®) Technology", benefit: "ជួយឱ្យថ្នាំមានសកម្មភាពក្នុងរាងកាយបានយូរ" },
            { feature: "ចាក់រៀងរាល់ 2–4 សប្ដាហ៍ (Q2W/Q4W)", benefit: "ផ្តល់ភាពងាយស្រួលក្នុងការគ្រប់គ្រងការព្យាបាល" },
            { feature: "ចំណុចសំខាន់ពី KDIGO 2026", benefit: "KDIGO 2026 បានណែនាំ ESA នៅតែជាជម្រើសដំបូងសម្រាប់ការគ្រប់គ្រង CKD Anemia" }
          ],
          how: {
            startingDose: "4 mcg/kg ចាក់ក្រោមស្បែក (SC) រៀងរាល់ 2 សប្ដាហ៍ (Q2W)",
            monitoring: "តាមដាន Hb រៀងរាល់ 2–4 សប្ដាហ៍ ដើម្បីរក្សាកម្រិត Hb ឱ្យមានស្ថេរភាព និងស្ថិតក្នុងគោលដៅព្យាបាល",
            targetHb: "10–12 g/dL",
            storage: "រក្សាទុកក្នុងទូរទឹកកក (2–8°C) ការពារពីពន្លឺ និងហាមកក"
          },
          say: "EFESA ជា Long-acting ESA ដែលប្រើបច្ចេកវិទ្យា HyFc® សម្រាប់ព្យាបាលជំងឺ CKD Anemia មិនទាន់លាងឈាម ដែលមានចន្លោះពេលចាក់វែង ជួយកាត់បន្ថយការចាក់ញឹកញាប់ និងផ្តល់ភាពងាយស្រួលក្នុងការគ្រប់គ្រងការព្យាបាល។"
        },
        details: {
          description: "Efepoetin alfa 0.3mg/0.3mL ជា Long-acting ESA ដែលប្រើបច្ចេកវិទ្យា HyFc® សម្រាប់ព្យាបាលជំងឺ CKD Anemia មិនទាន់លាងឈាម (ND-CKD)។",
          benefits: [
            "Long-acting ESA ជួយកាត់បន្ថយការចាក់ញឹកញាប់",
            "Hybrid Fc (HyFc®) Technology ជួយឱ្យថ្នាំមានសកម្មភាពបានយូរ",
            "ចាក់រៀងរាល់ 2–4 សប្ដាហ៍ (Q2W/Q4W) ផ្តល់ភាពងាយស្រួល ក្នុងការគ្រប់គ្រងការព្យាបាល",
            "KDIGO 2026 បានណែនាំ ESA នៅតែជាជម្រើសដំបូងសម្រាប់ការគ្រប់គ្រង CKD Anemia"
          ],
          ingredients: [
            "Efepoetin alfa (0.3 mg/0.3 mL)",
            "Hybrid Fc (HyFc®) Technology"
          ],
          nutritionalInfo: {
            serving: "0.3 mL (Prefilled Syringe)",
            activeIngredient: "0.3 mg",
            type: "Long-acting ESA",
            targetHb: "10–12 g/dL"
          },
          howToUse: "កម្រិតចាប់ផ្តើម៖ 4 mcg/kg ចាក់ក្រោមស្បែក (SC) រៀងរាល់ 2 សប្ដាហ៍ (Q2W)។ តាមដាន Hb រៀងរាល់ 2–4 សប្ដាហ៍ ដើម្បីរក្សាកម្រិត Hb ឱ្យមានស្ថេរភាព និងស្ថិតក្នុងគោលដៅព្យាបាល (Hb: 10–12 g/dL)។",
          storage: "រក្សាទុកក្នុងទូរទឹកកក (2–8°C) ការពារពីពន្លឺ និងហាមកក។"
        }
      },
      {
        id: "hemapo",
        title: "HEMAPO",
        genericName: "Epoetin alfa 3000 IU/0.5 mL",
        image: "/images/hemapo.png",
        origin: "Indonesia",
        badge: "Short-acting ESA",
        categoryTag: "CKD Anemia (ND-CKD & Dialysis)",
        keySellingPoint: "Short-acting ESA សម្រាប់គ្រប់គ្រង CKD Anemia ទាំងមិនទាន់ និងកំពុងលាងឈាម ងាយស្រួលកែសម្រួល Dose និង Frequency តាមការឆ្លើយតបរបស់អ្នកជំងឺ។",
        framework: {
          who: [
            "ព្យាបាលភាពស្លេកស្លាំងដោយសារជំងឺតម្រងនោមរ៉ាំរ៉ៃ (CKD Anemia)",
            "អាចប្រើសម្រាប់អ្នកជំងឺ CKD មិនទាន់លាងឈាម (ND-CKD)",
            "ប្រើសម្រាប់អ្នកជំងឺ CKD កំពុងលាងឈាម (Dialysis)"
          ],
          what: {
            activeIngredient: "Epoetin alfa",
            dose: "3000 IU / 0.5 mL",
            form: "Prefilled Syringe",
            category: "Short-acting ESA (Recombinant Human Erythropoietin)"
          },
          why: [
            { feature: "Short-acting ESA", benefit: "ងាយកែសម្រួល dose និង frequency" },
            { feature: "ចាក់ SC ឬ IV ចែកជា 2-3 ដង/សប្តាហ៍", benefit: "ចាក់ញឹកញាប់ មានភាពបត់បែនតាមការឆ្លើយតបរបស់អ្នកជំងឺ" },
            { feature: "Epoetin alfa", benefit: "ជួយជំរុញការផលិតកោសិកាឈាមក្រហម (RBC)" },
            { feature: "CKD Anemia Coverage", benefit: "ប្រើប្រាស់បានទូលំទូលាយទាំងមុន និងកំពុងលាងឈាម" }
          ],
          how: {
            startingDose: "50–100 IU/kg សម្រាប់ ND-CKD | 100–150 IU/kg សម្រាប់ Dialysis",
            route: "ចាក់ក្រោមស្បែក ឬតាមសរសៃឈាម (SC/IV) ចែកជា 2-3 ដងក្នុងមួយសប្ដាហ៍",
            monitoring: "តាមដាន Hb រៀងរាល់ 2–4 សប្ដាហ៍ ដើម្បីរក្សាកម្រិត Hb ឱ្យមានស្ថេរភាព និងស្ថិតក្នុងគោលដៅព្យាបាល",
            storage: "រក្សាទុកក្នុងទូរទឹកកក (2–8°C) និងហាមកក"
          },
          say: "HEMAPO (Epoetin alfa) ជា Short-acting ESA សម្រាប់ព្យាបាលជំងឺ CKD Anemia អាចចាក់ SC ឬ IV និងងាយកែសម្រួល dose តាមការឆ្លើយតបរបស់អ្នកជំងឺ។"
        },
        details: {
          description: "Epoetin alfa 3000 IU/0.5 mL ជា Short-acting ESA សម្រាប់ព្យាបាលជំងឺ CKD Anemia ទាំងមិនទាន់ និងកំពុងលាងឈាម។",
          benefits: [
            "Short-acting ESA ងាយកែសម្រួល dose និង frequency",
            "អាចចាក់ SC ឬ IV ចែកជា 2-3 ដង/សប្តាហ៍",
            "Epoetin alfa ជួយជំរុញការផលិតកោសិកាឈាមក្រហម (RBC)",
            "ចាក់ញឹកញាប់ មានភាពបត់បែនតាមការឆ្លើយតបរបស់អ្នកជំងឺ"
          ],
          ingredients: ["Epoetin alfa 3000 IU/0.5 mL (Recombinant Human Erythropoietin)"],
          nutritionalInfo: {
            serving: "0.5 mL (Prefilled Syringe)",
            activeIngredient: "3000 IU",
            type: "Short-acting ESA"
          },
          howToUse: "កម្រិតចាប់ផ្តើម៖ 50–100 IU/kg សម្រាប់ ND-CKD និង 100–150 IU/kg សម្រាប់ Dialysis។ ចាក់ក្រោមស្បែក ឬតាមសរសៃឈាម (SC/IV) ចែកជា 2-3 ដងក្នុងមួយសប្ដាហ៍។",
          storage: "រក្សាទុកក្នុងទូរទឹកកក (2–8°C) និងហាមកក។"
        }
      },
      {
        id: "nocid",
        title: "NOCID",
        genericName: "Keto Acid + Essential Amino Acids 630mg",
        image: "/images/nocid.png",
        origin: "Indonesia",
        badge: "KDIGO Guideline",
        categoryTag: "Pre-dialysis CKD Nutrition",
        keySellingPoint: "Keto Acid Supplement ជួយបំពេញតម្រូវការ EAA ជាមួយ Low Nitrogen Load សមស្របសម្រាប់អ្នកជំងឺ CKD មិនទាន់លាងឈាម ប្រើរួមជាមួយរបបអាហារ Low-Protein Diet។",
        framework: {
          who: [
            "សម្រាប់អ្នកជំងឺ CKD មិនទាន់លាងឈាម (Pre-dialysis CKD)",
            "ប្រើរួមជាមួយរបបអាហារកំណត់ប្រូតេអ៊ីន (Low-Protein Diet)",
            "ជួយបំពេញតម្រូវការ Essential Amino Acids ខណៈកំណត់ការទទួលទានប្រូតេអ៊ីន"
          ],
          what: {
            activeIngredient: "Keto Acid + Essential Amino Acids",
            dose: "630 mg / គ្រាប់",
            form: "Film-Coated Caplet",
            category: "Keto Amino Acid Combination (មិនមែន Protein Supplement ធម្មតាទេ)"
          },
          why: [
            { feature: "Keto Acids + Essential Amino Acids", benefit: "ជួយបំពេញតម្រូវការ Essential Amino Acids" },
            { feature: "Keto Acids ជា Amino Acid Precursors", benefit: "រាងកាយអាចប្រើ Keto Acids ដើម្បីបង្កើត Amino Acids ដោយមិនបន្ថែម Nitrogen" },
            { feature: "Low Nitrogen Load", benefit: "ជួយកាត់បន្ថយបន្ទុកអាសូត និងការបង្កើតកាកសំណល់អាសូតលើតម្រងនោម" },
            { feature: "ប្រើរួមជាមួយ Low-Protein Diet", benefit: "ជួយបំពេញតម្រូវការ Amino Acids ខណៈកំណត់ការទទួលទានប្រូតេអ៊ីន" }
          ],
          how: {
            dose: "1 គ្រាប់ / 5 kg ទម្ងន់ខ្លួន / ថ្ងៃ",
            method: "ចែកជា 3 ដង ប្រើជាមួយអាហារ",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ក្នុងកន្លែងស្ងួត"
          },
          say: "NOCID ជា Keto Acid Combination សម្រាប់អ្នកជំងឺ CKD មិនទាន់លាងឈាម អាចប្រើរួមជាមួយ Low Protein Diet ដើម្បីជួយបំពេញតម្រូវការ Essential Amino Acids ដែលមានបន្ទុកអាសូតទាប (Low Nitrogen Load)។"
        },
        details: {
          description: "Keto Acid + Essential Amino Acids (630 mg/គ្រាប់) សម្រាប់អ្នកជំងឺ CKD មិនទាន់លាងឈាម (Pre-dialysis CKD) ប្រើរួមជាមួយរបបអាហារកំណត់ប្រូតេអ៊ីន (Low-Protein Diet)។",
          benefits: [
            "ជួយបំពេញតម្រូវការ Essential Amino Acids (EAA) ខណៈកំណត់ការទទួលទានប្រូតេអ៊ីន",
            "Keto Acids ជា Amino Acid Precursors អាចបង្កើត Amino Acids ដោយមិនបន្ថែម Nitrogen Waste",
            "Low Nitrogen Load ជួយកាត់បន្ថយបន្ទុកអាសូត និងការបង្កើតកាកសំណល់អាសូត",
            "មិនមែនជា Protein Supplement ធម្មតាទេ ប៉ុន្តែជា Keto Amino Acid Combination"
          ],
          ingredients: [
            "Keto Acids",
            "Essential Amino Acids (630 mg / គ្រាប់)"
          ],
          nutritionalInfo: {
            serving: "1 គ្រាប់ / 5 kg ទម្ងន់ខ្លួន / ថ្ងៃ",
            type: "Keto Amino Acid Combination",
            form: "Film-Coated Caplet"
          },
          howToUse: "កម្រិតប្រើ៖ 1 គ្រាប់ / 5 kg ទម្ងន់ខ្លួន / ថ្ងៃ។ ចែកជា 3 ដង ប្រើជាមួយអាហារ។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ក្នុងកន្លែងស្ងួត។"
        }
      },
      {
        id: "kalxid",
        title: "KALXID",
        genericName: "R-Alpha Lipoic Acid (R-ALA) 480 mg",
        image: "/images/kalxid.png",
        origin: "Indonesia (Technology from South Korea)",
        badge: "100% R-Form ALA",
        categoryTag: "Diabetic Neuropathy (DPN)",
        keySellingPoint: "ផ្តល់ 100% R-ALA (ទម្រង់ធម្មជាតិក្នុងរាងកាយ) កម្រិត 480mg លេបតែ 1 គ្រាប់/ថ្ងៃ ប្រឆាំង Oxidative Stress និងការពារសរសៃប្រសាទពី DPN។",
        framework: {
          who: [
            "សម្រាប់អ្នកជំងឺ Diabetic Peripheral Neuropathy (DPN) ដែលបណ្តាលមកពីជំងឺទឹកនោមផ្អែម",
            "ជួយកាត់បន្ថយ Oxidative Stress ដែលពាក់ព័ន្ធនឹងការខូចសរសៃប្រសាទ",
            "ជួយកាត់បន្ថយរោគសញ្ញា DPN ដូចជា៖ ឈឺ, ចុក, រមួល, ក្តៅ ឬស្ពឹកដៃជើង"
          ],
          what: {
            activeIngredient: "R-Alpha Lipoic Acid (R-Thioctic Acid Tromethamine)",
            dose: "480 mg",
            form: "Film-coated Tablet",
            category: "100% Pure R-form of Alpha Lipoic Acid"
          },
          why: [
            { feature: "R-Alpha Lipoic Acid 480 mg (100% R-form)", benefit: "ជាទម្រង់សកម្មធម្មជាតិ ស្រូបចូលរាងកាយបានលឿន និងមានប្រសិទ្ធភាពខ្ពស់ក្នុងការស្រូប" },
            { feature: "Antioxidant Activity ខ្ពស់", benefit: "ជួយកាត់បន្ថយ Oxidative Stress ដែលពាក់ព័ន្ធនឹងការខូចខាតសរសៃប្រសាទ" },
            { feature: "Peripheral Nerve Protection", benefit: "ជួយការពារសរសៃប្រសាទ និងជួយបន្ថយរោគសញ្ញា DPN (ឈឺ ចុក ក្តៅ ស្ពឹក)" },
            { feature: "Once-Daily Dose", benefit: "ងាយស្រួលប្រើ ដោយលេបតែ 1 គ្រាប់/ថ្ងៃ" }
          ],
          how: {
            dose: "1 គ្រាប់ / ថ្ងៃ",
            method: "លេបមុនអាហារ 30 នាទី, ញ៉ាំទឹកឱ្យបានច្រើនដើម្បីជួយស្រូបបានល្អ",
            usage: "ប្រើជាប្រចាំតាមការណែនាំរបស់វេជ្ជបណ្ឌិត",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ក្នុងកន្លែងស្ងួត ទុកឱ្យឆ្ងាយពីដៃកុមារ"
          },
          say: "KALXID (R-Alpha Lipoic Acid 480 mg) មានសមត្ថភាពខ្ពស់ក្នុងការប្រឆាំងអុកស៊ីតកម្ម ជួយកាត់បន្ថយ Oxidative Stress ការពារសរសៃប្រសាទ និងជួយបន្ថយរោគសញ្ញា DPN។"
        },
        details: {
          description: "R-Alpha Lipoic Acid (R-ALA) 480 mg សម្រាប់អ្នកជំងឺ Diabetic Peripheral Neuropathy (DPN) ដែលបណ្តាលមកពីជំងឺទឹកនោមផ្អែម។",
          benefits: [
            "ផ្តល់ 100% R-form ដែលជាទម្រង់ធម្មជាតិក្នុងរាងកាយ ដោយមិនមាន S-form សំយោគ",
            "មានសមត្ថភាពខ្ពស់ក្នុងការប្រឆាំងអុកស៊ីតកម្ម (Antioxidant) ជួយកាត់បន្ថយ Oxidative Stress",
            "ជួយការពារសរសៃប្រសាទ និងជួយបន្ថយរោគសញ្ញា DPN (ឈឺ, ចុក, រមួល, ក្តៅ ឬស្ពឹកដៃជើង)",
            "Once-Daily Dose ងាយស្រួលប្រើ តែ 1 គ្រាប់/ថ្ងៃ"
          ],
          ingredients: ["R-Alpha Lipoic Acid (R-Thioctic Acid Tromethamine) 480 mg"],
          nutritionalInfo: {
            serving: "1 គ្រាប់/ថ្ងៃ",
            activeIngredient: "R-ALA 480 mg",
            form: "Film-coated Tablet"
          },
          howToUse: "1 គ្រាប់/ថ្ងៃ។ លេបមុនអាហារ 30 នាទី, ញ៉ាំទឹកឱ្យបានច្រើនដើម្បីជួយស្រូបបានល្អ។ ប្រើជាប្រចាំតាមការណែនាំរបស់វេជ្ជបណ្ឌិត។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ក្នុងកន្លែងស្ងួត។ ទុកឱ្យឆ្ងាយពីដៃកុមារ។"
        }
      },
      {
        id: "kalmeco",
        title: "KALMECO",
        genericName: "Mecobalamin 500 mcg",
        image: "/images/kalmeco.png",
        origin: "Indonesia",
        badge: "Active Vitamin B12",
        categoryTag: "Nerve Repair & Myelin Support",
        keySellingPoint: "Active Vitamin B12 (Mecobalamin 500mcg) រាងកាយប្រើបានផ្ទាល់ ជួយជួសជុលសរសៃប្រសាទ និងជំរុញការបង្កើតស្រទាប់ Myelin ក្នុង DPN។",
        framework: {
          who: [
            "ព្យាបាលជំងឺសរសៃប្រសាទ (Peripheral Neuropathy)",
            "ជួយបន្ថយរោគសញ្ញានៃ Diabetic Peripheral Neuropathy (DPN)",
            "សម្រាប់ការព្យាបាលកង្វះ Vitamin B12"
          ],
          what: {
            activeIngredient: "Mecobalamin (Active Form of Vitamin B12)",
            dose: "500 mcg",
            form: "Capsule",
            category: "Bioactive Methylcobalamin"
          },
          why: [
            { feature: "Mecobalamin 500 mcg", benefit: "ជាទម្រង់សកម្មនៃ Vitamin B12 ដែលរាងកាយអាចប្រើប្រាស់បានផ្ទាល់ដោយមិនបាច់បំប្លែង" },
            { feature: "Nerve Repair", benefit: "ជួយក្នុងដំណើរការស្តារ និងរក្សាមុខងារសរសៃប្រសាទ" },
            { feature: "Myelin Formation", benefit: "ជួយជំរុញការបង្កើត និងការពារស្រទាប់ស្រោបសរសៃប្រសាទ Myelin" },
            { feature: "Synergy with KALXID", benefit: "KALXID (Antioxidant) + KALMECO (Nerve Repair) បំពេញគ្នាទៅវិញទៅមកយ៉ាងល្អឥតខ្ចោះ" }
          ],
          how: {
            b12Deficiency: "1 គ្រាប់ / ថ្ងៃ",
            dpnDosage: "1 គ្រាប់ 2–3 ដង / ថ្ងៃ, ប្រើបន្ទាប់ពីអាហារ",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ក្នុងកន្លែងស្ងួត និងការពារពីពន្លឺ"
          },
          say: "KALMECO មាន Mecobalamin ដែលជាទម្រង់សកម្មរបស់វីតាមីន B12 មានតួនាទីរក្សាមុខងារសរសៃប្រសាទ និង Myelin ប្រើក្នុងការគ្រប់គ្រង Peripheral Neuropathy និង DPN។"
        },
        details: {
          description: "Mecobalamin 500 mcg ជាទម្រង់សកម្មរបស់វីតាមីន B12 មានតួនាទី រក្សាមុខងារសរសៃប្រសាទ និង Myelin ប្រើក្នុងការគ្រប់គ្រង Peripheral Neuropathy និង DPN។",
          benefits: [
            "ជាទម្រង់សកម្មនៃ Vitamin B12 ដែលរាងកាយអាចប្រើប្រាស់បានផ្ទាល់",
            "ជួយក្នុងដំណើរការស្តារ, រក្សាមុខងារសរសៃប្រសាទ និងជំរុញការបង្កើតស្រទាប់ Myelin",
            "ជួយបន្ថយរោគសញ្ញានៃ Diabetic Peripheral Neuropathy (DPN)",
            "KALXID + KALMECO ផ្តល់តួនាទីបំពេញគ្នាក្នុងការគ្រប់គ្រង DPN (Antioxidant + Nerve Repair)"
          ],
          ingredients: ["Mecobalamin 500 mcg"],
          nutritionalInfo: {
            serving: "1 គ្រាប់ (500 mcg)",
            activeIngredient: "Mecobalamin 500 mcg",
            form: "Capsule"
          },
          howToUse: "ការកង្វះ Vitamin B12៖ 1 គ្រាប់/ថ្ងៃ។ Peripheral Neuropathy / DPN៖ 1 គ្រាប់ 2-3 ដង/ថ្ងៃ, ប្រើបន្ទាប់ពីអាហារ។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ក្នុងកន្លែងស្ងួត និងការពារពីពន្លឺ។"
        }
      },
      {
        id: "nevox-xr",
        title: "NEVOX XR",
        genericName: "Metformin HCl USP 500 mg Extended Release",
        image: "/images/nevox_xr.png",
        origin: "Indonesia",
        badge: "Advanced Matrix",
        categoryTag: "Type 2 Diabetes Mellitus",
        keySellingPoint: "Metformin Extended-Release 500mg បច្ចេកវិទ្យា Hydrophilic Gel Matrix លេបតែ 1 ដង/ថ្ងៃ គ្រប់គ្រងជាតិស្ករបានពេញមួយថ្ងៃ និងកាត់បន្ថយផលរំខានលើ GI។",
        framework: {
          who: [
            "សម្រាប់គ្រប់គ្រងជាតិស្ករក្នុងអ្នកជំងឺទឹកនោមផ្អែមប្រភេទទី 2 (Type 2 Diabetes Mellitus)",
            "ប្រើរួមជាមួយការគ្រប់គ្រងរបបអាហារ (Diet) និងការហាត់ប្រាណ (Exercise)",
            "អាចប្រើតែឯង ឬប្រើរួមជាមួយថ្នាំបញ្ចុះជាតិស្ករផ្សេងៗ តាមការណែនាំរបស់វេជ្ជបណ្ឌិត"
          ],
          what: {
            activeIngredient: "Metformin HCl USP",
            dose: "500 mg (Extended Release)",
            form: "Tablet",
            technology: "Advanced Hydrophilic Gel Matrix (បច្ចេកវិទ្យាគ្រប់គ្រងការបញ្ចេញថ្នាំ)"
          },
          why: [
            { feature: "Extended-Release Metformin", benefit: "បញ្ចេញ Metformin ជាបន្តបន្ទាប់ក្នុងរយៈពេលវែង" },
            { feature: "Hydrophilic Gel Matrix", benefit: "ជួយគ្រប់គ្រងការបញ្ចេញជាតិថ្នាំឱ្យបានរលូន និងមានស្ថេរភាព" },
            { feature: "Once-Daily Dosing", benefit: "ងាយស្រួលប្រើ ដោយលេបតែ 1 ដង/ថ្ងៃ គ្រប់គ្រងជាតិស្ករបានពេញមួយថ្ងៃ" },
            { feature: "Improved GI Tolerability", benefit: "អាចជួយកាត់បន្ថយផលរំខានលើក្រពះពោះវៀន បើធៀបនឹងថ្នាំ Metformin ធម្មតា" }
          ],
          how: {
            startingDose: "500 mg 1 ដង/ថ្ងៃ (លេបជាមួយអាហារពេលល្ងាច)",
            titration: "បង្កើនបន្តិចម្តងៗ តាមការឆ្លើយតប និងការទទួលយករបស់អ្នកជំងឺ",
            maxDose: "2,000 mg / ថ្ងៃ",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ក្នុងកន្លែងស្ងួត"
          },
          say: "NEVOX XR ជា Metformin Extended-Release 500mg សម្រាប់គ្រប់គ្រងជាតិស្ករក្នុងអ្នកជំងឺទឹកនោមផ្អែមប្រភេទទី 2 ដែលអាចបញ្ចេញ Metformin ជាបន្តបន្ទាប់ ផ្តល់ភាពងាយស្រួលដោយលេបតែ 1 ដង/ថ្ងៃ អាចគ្រប់គ្រងកម្រិតជាតិស្ករក្នុងឈាមបានពេញមួយថ្ងៃ និងជួយកាត់បន្ថយផលរំខានលើក្រពះពោះវៀន។"
        },
        details: {
          description: "Metformin Hydrochloride Extended-Release 500 mg ជាមួយបច្ចេកវិទ្យា Advanced Hydrophilic Gel Matrix សម្រាប់គ្រប់គ្រងជាតិស្ករក្នុងអ្នកជំងឺ ទឹកនោមផ្អែមប្រភេទទី 2។",
          benefits: [
            "Extended-Release Metformin បញ្ចេញថ្នាំជាបន្តបន្ទាប់ក្នុងរយៈពេលវែង",
            "Hydrophilic Gel Matrix ជួយគ្រប់គ្រងការបញ្ចេញ Metformin ឱ្យបានបន្តបន្ទាប់",
            "Once-Daily Dosing ងាយស្រួលប្រើ ដោយលេបតែ 1 ដង/ថ្ងៃ គ្រប់គ្រងជាតិស្ករបានពេញមួយថ្ងៃ",
            "Improved GI Tolerability អាចជួយកាត់បន្ថយផលរំខានលើក្រពះពោះវៀន"
          ],
          ingredients: ["Metformin HCl USP 500 mg (Extended Release)"],
          nutritionalInfo: {
            serving: "1 គ្រាប់/ថ្ងៃ",
            activeIngredient: "Metformin HCl 500 mg",
            form: "Extended-Release Tablet"
          },
          howToUse: "កម្រិតចាប់ផ្តើម៖ 500 mg 1 ដង/ថ្ងៃ (លេបជាមួយអាហារពេលល្ងាច)។ បង្កើនបន្តិចម្តងៗតាមការឆ្លើយតបរបស់អ្នកជំងឺ, កម្រិតអតិបរមា 2,000 mg/ថ្ងៃ។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ក្នុងកន្លែងស្ងួត។"
        }
      }
    ]
  },
  {
    id: 2,
    title: "Mednut",
    subtitle: "Precision Medical Nutrition for Specific Disease Conditions",
    image: "/images/Mednut.png",
    badge: "Clinical Nutrition",
    description: "អាហារូបត្ថម្ភវេជ្ជសាស្ត្រច្បាស់លាស់ (Precision Nutrition) ឆ្លើយតបទៅនឹងតម្រូវការអាហារូបត្ថម្ភជាក់លាក់នៃជំងឺនីមួយៗ (CKD, COPD, Cancer, Liver Disease)។",
    subProducts: [
      {
        id: "nephrisol",
        title: "NEPHRISOL",
        genericName: "Special Nutrition for Pre-dialysis CKD",
        image: "/images/nephrisol.png",
        origin: "Indonesia",
        badge: "Pre-dialysis (Low Protein)",
        flavors: ["Vanilla", "Cappuccino"],
        keySellingPoint: "អាហារូបត្ថម្ភពិសេសសម្រាប់អ្នកជំងឺ CKD មិនទាន់លាងឈាម ជាមួយ Low-protein (6g) + High Energy (300 kcal) + 9 Essential Amino Acids និង Minerals Adjusted។",
        framework: {
          who: [
            "អ្នកជំងឺ CKD មិនទាន់លាងឈាម (Pre-dialysis CKD)",
            "អ្នកជំងឺដែលត្រូវការ កំណត់ការទទួលទានប្រូតេអ៊ីន (Low Protein Requirement)",
            "អ្នកជំងឺដែលមានតម្រូវការ បំពេញអាហារូបត្ថម្ភ និងរក្សាស្ថានភាពអាហារូបត្ថម្ភ"
          ],
          what: {
            serving: "67 g (4 ស្លាបព្រា ឬ 1 កញ្ចប់) / serving",
            energy: "300 kcal / serving",
            protein: "6 g (Low Protein, HBV > 60%)",
            aminoAcids: "9 Essential Amino Acids",
            minerals: "Minerals Adjusted (Na, K, P ទាបសមស្រប)",
            vitamins: "13 Vitamins & 7 Minerals"
          },
          why: [
            { feature: "Low Protein – 6 g/serving", benefit: "ជួយគ្រប់គ្រងបរិមាណប្រូតេអ៊ីន សមស្របសម្រាប់អ្នកជំងឺ Pre-dialysis CKD" },
            { feature: "HBV Protein >60% + 9 EAA", benefit: "ផ្តល់ប្រូតេអ៊ីនគុណភាពខ្ពស់ និង EAA សំខាន់ៗ ដើម្បីជួយបំពេញតម្រូវការអាហារូបត្ថម្ភ" },
            { feature: "High Energy – 300 kcal/serving", benefit: "ផ្តល់ថាមពលខ្ពស់ ដើម្បីជួយបំពេញតម្រូវការថាមពលប្រចាំថ្ងៃ" },
            { feature: "Minerals Adjusted (Na, K, P)", benefit: "កម្រិត Na, K និង P ត្រូវបានកែសម្រួលឱ្យសមស្របសម្រាប់អ្នកជំងឺ CKD" }
          ],
          how: {
            servingSize: "1 កញ្ចប់ ឬ 4 ស្លាបព្រា ≅ 67 g",
            preparation: "លាយជាមួយទឹកក្តៅអ៊ុនៗ / ទឹកឆ្អិន 180 mL => កូរឱ្យសព្វ ទទួលបាន 230 mL",
            frequency: "ប្រើ 1–3 ដង/ថ្ងៃ អាចប្រើជាអាហារសម្រន់ ឬជំនួសអាហារ",
            storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត"
          },
          say: "NEPHRISOL ជាអាហារូបត្ថម្ភពិសេសសម្រាប់អ្នកជំងឺ CKD មិនទាន់លាងឈាម ដែលផ្តល់ថាមពលខ្ពស់ ជាមួយប្រូតេអ៊ីនក្នុងកម្រិតសមស្រប និង 9 EAA ដើម្បីជួយបំពេញតម្រូវការអាហារូបត្ថម្ភ។"
        },
        details: {
          description: "អាហារូបត្ថម្ភពិសេសសម្រាប់អ្នកជំងឺតម្រងនោមរ៉ាំរ៉ៃ មិនទាន់លាងឈាម (Pre-dialysis CKD)។",
          benefits: [
            "Low Protein (6 g/serving) ជួយគ្រប់គ្រងបរិមាណប្រូតេអ៊ីន សមស្របសម្រាប់ Pre-dialysis CKD",
            "HBV Protein >60% + 9 Essential Amino Acids ផ្តល់ប្រូតេអ៊ីនគុណភាពខ្ពស់ និង EAA",
            "High Energy (300 kcal/serving) ផ្តល់ថាមពលខ្ពស់បំពេញតម្រូវការប្រចាំថ្ងៃ",
            "Minerals Adjusted (Na, K, P) កែសម្រួលឱ្យសមស្របសម្រាប់អ្នកជំងឺ CKD",
            "Low Glycemic Index (Low GI)"
          ],
          ingredients: [
            "High Biological Value Protein",
            "9 Essential Amino Acids",
            "Adjusted Minerals (Na, K, P)",
            "13 Vitamins & 7 Minerals"
          ],
          nutritionalInfo: {
            serving: "67 g (1 កញ្ចប់ ឬ 4 ស្លាបព្រា)",
            calories: "300 kcal",
            protein: "6 g",
            waterNeeded: "180 mL",
            totalYield: "230 mL",
            glycemicIndex: "Low GI"
          },
          howToUse: "1 កញ្ចប់ (67 g) លាយជាមួយទឹកក្តៅអ៊ុនៗ/ទឹកឆ្អិន 180 mL (ទទួលបាន 230 mL) កូរឱ្យសព្វ។ ប្រើ 1–3 ដង/ថ្ងៃ ជាអាហារសម្រន់ ឬជំនួសអាហារ។",
          storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត។"
        }
      },
      {
        id: "nephrisol-d",
        title: "NEPHRISOL-D",
        genericName: "Special Nutrition for Dialysis CKD",
        image: "/images/nephrisol_d.png",
        origin: "Indonesia",
        badge: "Dialysis (High Protein)",
        flavors: ["Vanilla", "Cappuccino"],
        keySellingPoint: "អាហារូបត្ថម្ភពិសេសសម្រាប់អ្នកជំងឺ CKD កំពុងលាងឈាម ជាមួយ High-protein (12g) + High Energy (320 kcal) + Fiber (FOS) និង Minerals Adjusted។",
        framework: {
          who: [
            "អ្នកជំងឺ CKD កំពុងលាងឈាម (Dialysis CKD)",
            "អ្នកជំងឺដែលមានតម្រូវការប្រូតេអ៊ីន និងថាមពលកើនឡើងក្នុងអំឡុងពេលលាងឈាម",
            "អ្នកជំងឺដែលមានហានិភ័យខ្វះអាហារូបត្ថម្ភ ឬទទួលអាហារមិនគ្រប់គ្រាន់"
          ],
          what: {
            serving: "70 g (1 sachet) / serving",
            energy: "320 kcal / serving",
            protein: "12 g (High Protein)",
            fiber: "Dietary Fiber (FOS)",
            vitamins: "13 Vitamins & 6 Minerals",
            minerals: "Minerals Adjusted (Na, K, P សមស្រប)"
          },
          why: [
            { feature: "High Protein – 12 g/serving", benefit: "ដើម្បីជួយបំពេញតម្រូវការប្រូតេអ៊ីនរបស់អ្នកជំងឺកំពុងលាងឈាម" },
            { feature: "High Energy – 320 kcal/serving", benefit: "ផ្តល់ថាមពលខ្ពស់ ដើម្បីជួយបំពេញតម្រូវការថាមពលប្រចាំថ្ងៃ" },
            { feature: "Fiber (FOS) + Vitamins & Minerals", benefit: "ផ្តល់ Fiber រួមជាមួយ Vitamins & Minerals ដើម្បីបំពេញតម្រូវការអាហារូបត្ថម្ភ" },
            { feature: "Minerals Adjusted (Na, K, P)", benefit: "កម្រិត Na, K និង P ត្រូវបានកែសម្រួលឱ្យសមស្របសម្រាប់អ្នកជំងឺ CKD" }
          ],
          how: {
            servingSize: "1 sachet = 70 g",
            preparation: "លាយជាមួយទឹកក្តៅអ៊ុនៗ / ទឹកឆ្អិន 150 mL => កូរឱ្យសព្វ ទទួលបាន 200 mL",
            frequency: "ប្រើ 1–3 ដង/ថ្ងៃ អាចប្រើជាអាហារសម្រន់ ឬជំនួសអាហារ",
            storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត"
          },
          say: "NEPHRISOL-D ជាអាហារូបត្ថម្ភពិសេសសម្រាប់អ្នកជំងឺ CKD កំពុងលាងឈាម ដែលជួយបំពេញតម្រូវការ Protein និងផ្តល់ថាមពលខ្ពស់ រួមជាមួយ Fiber, Vitamins & Minerals។"
        },
        details: {
          description: "អាហារូបត្ថម្ភពិសេសសម្រាប់អ្នកជំងឺតម្រងនោមរ៉ាំរ៉ៃ កំពុងលាងឈាម (Dialysis CKD)។",
          benefits: [
            "High Protein (12 g/serving) ជួយបំពេញតម្រូវការប្រូតេអ៊ីនរបស់អ្នកជំងឺកំពុងលាងឈាម",
            "High Energy (320 kcal/serving) ផ្តល់ថាមពលខ្ពស់",
            "Fiber (FOS) + 13 Vitamins & 6 Minerals បំពេញតម្រូវការអាហារូបត្ថម្ភ",
            "Minerals Adjusted (Na, K, P) កែសម្រួលសមស្របសម្រាប់អ្នកជំងឺ CKD",
            "Low Glycemic Index (Low GI)"
          ],
          ingredients: [
            "High Protein Blend",
            "Dietary Fiber (FOS)",
            "Adjusted Minerals (Na, K, P)",
            "Vitamins & Minerals"
          ],
          nutritionalInfo: {
            serving: "70 g (1 sachet)",
            calories: "320 kcal",
            protein: "12 g",
            waterNeeded: "150 mL",
            totalYield: "200 mL",
            glycemicIndex: "Low GI"
          },
          howToUse: "1 កញ្ចប់ (70 g) លាយជាមួយទឹកក្តៅអ៊ុនៗ/ទឹកឆ្អិន 150 mL (ទទួលបាន 200 mL) កូរឱ្យសព្វ។ ប្រើ 1–3 ដង/ថ្ងៃ ជាអាហារសម្រន់ ឬជំនួសអាហារ។",
          storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត។"
        }
      },
      {
        id: "pulmosol",
        title: "PULMOSOL",
        genericName: "Special Nutrition for Respiratory Patients & COPD",
        image: "/images/pulmosol.png",
        origin: "Indonesia",
        badge: "Respiratory & COPD",
        flavors: ["Creamy Vanilla", "Orange"],
        keySellingPoint: "អាហារូបត្ថម្ភពិសេសសម្រាប់អ្នកជំងឺផ្លូវដង្ហើម ជាពិសេស COPD ជាមួយ Low Carbohydrate & High Fat formula + BCAA (2.45g) + Omega-3 (400mg) ជួយសម្រួលការដកដង្ហើម។",
        framework: {
          who: [
            "អ្នកជំងឺដែលមានបញ្ហាផ្លូវដង្ហើមរ៉ាំរ៉ៃ ដូចជា ជំងឺស្ទះផ្លូវដង្ហើមរ៉ាំរ៉ៃ (COPD)",
            "អ្នកជំងឺដែលមាន តម្រូវការថាមពល និងប្រូតេអ៊ីនកើនឡើង",
            "អ្នកជំងឺដែលមាន ហានិភ័យខ្វះអាហារូបត្ថម្ភ ទទួលអាហារមិនគ្រប់គ្រាន់ ឬស្រកទម្ងន់"
          ],
          what: {
            serving: "50 g (1 sachet) / serving",
            energy: "240 kcal / serving",
            protein: "12.5 g / serving",
            macroRatio: "Lower Carbohydrate + Higher Fat with balance ratio",
            bcaa: "2.45 g / serving",
            omega3: "400 mg / serving",
            vitamins: "11 Vitamins & 5 Minerals"
          },
          why: [
            { feature: "Lower Carbohydrate + Higher Fat balance ratio", benefit: "ជួយកាត់បន្ថយការផលិត CO₂ ផ្តល់ថាមពល និងសម្រួលការដកដង្ហើម" },
            { feature: "Protein – 12.5 g/serving", benefit: "ជួយបំពេញតម្រូវការប្រូតេអ៊ីន និងជួយរក្សាម៉ាសសាច់ដុំផ្លូវដង្ហើម" },
            { feature: "BCAA 2.45 g/serving", benefit: "ដើម្បីជួយបំពេញតម្រូវការអាស៊ីតអាមីណូ និងអាហារូបត្ថម្ភ" },
            { feature: "Omega-3 400 mg/serving", benefit: "ជួយថែរក្សាសុខភាពផ្លូវដង្ហើម និងបន្ថយការរលាក" }
          ],
          how: {
            servingSize: "1 កញ្ចប់ ≅ 50 g",
            preparation: "លាយជាមួយទឹកក្តៅអ៊ុនៗ / ទឹកឆ្អិន 180 mL => កូរឱ្យសព្វ ទទួលបាន 220 mL",
            frequency: "ប្រើ 1–3 ដង/ថ្ងៃ អាចប្រើជាអាហារសម្រន់ ឬជំនួសអាហារ",
            storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត"
          },
          say: "PULMOSOL ជាអាហារូបត្ថម្ភពិសេសសម្រាប់អ្នកជំងឺដែលមានបញ្ហាផ្លូវដង្ហើម ជាពិសេស ជំងឺស្ទះផ្លូវដង្ហើមរ៉ាំរ៉ៃ (COPD) ដែលមាន Lower Carbohydrate + Higher Fat និងផ្តល់ Protein, BCAA និង Omega-3 ដើម្បីជួយបំពេញតម្រូវការថាមពល និងអាហារូបត្ថម្ភ។"
        },
        details: {
          description: "អាហារូបត្ថម្ភពិសេសសម្រាប់អ្នកជំងឺដែលមានបញ្ហាផ្លូវដង្ហើមរ៉ាំរ៉ៃ ជាពិសេស ជំងឺស្ទះផ្លូវដង្ហើមរ៉ាំរ៉ៃ (COPD)។",
          benefits: [
            "Lower Carbohydrate + Higher Fat balance ratio ជួយកាត់បន្ថយការផលិត CO₂ ផ្តល់ថាមពល និងសម្រួលការដកដង្ហើម",
            "Protein (12.5 g/serving) ជួយបំពេញតម្រូវការ និងរក្សាម៉ាសសាច់ដុំ",
            "BCAA 2.45 g/serving ជួយបំពេញតម្រូវការអាស៊ីតអាមីណូ",
            "Omega-3 400 mg/serving ជួយថែរក្សាសុខភាពផ្លូវដង្ហើម និងបន្ថយការរលាក"
          ],
          ingredients: [
            "Proteins (12.5g)",
            "BCAA (2.45g)",
            "Omega-3 (400mg)",
            "11 Vitamins & 5 Minerals"
          ],
          nutritionalInfo: {
            serving: "50 g (1 កញ្ចប់)",
            calories: "240 kcal",
            protein: "12.5 g",
            bcaa: "2.45 g",
            omega3: "400 mg",
            waterNeeded: "180 mL",
            totalYield: "220 mL"
          },
          howToUse: "1 កញ្ចប់ (50 g) លាយជាមួយទឹកក្តៅអ៊ុនៗ/ទឹកឆ្អិន 180 mL (ទទួលបាន 220 mL) កូរឱ្យសព្វ។ ប្រើ 1–3 ដង/ថ្ងៃ។",
          storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត។"
        }
      },
      {
        id: "nutrican",
        title: "NUTRICAN",
        genericName: "Special Nutrition for Oncology, Pre/Post Surgery & Infections",
        image: "/images/nutrican.png",
        origin: "Indonesia",
        badge: "Oncology & Surgery",
        flavors: ["Strawberry"],
        keySellingPoint: "អាហារូបត្ថម្ភពិសេសសម្រាប់អ្នកជំងឺមហារីក មុន/ក្រោយវះកាត់ និងជំងឺឆ្លង ជាមួយ High Protein (20g) + High Energy (350 kcal) + BCAA (4.2g) + Omega-3 DHA/EPA (0.92g)។",
        framework: {
          who: [
            "ក្រុមអ្នកជំងឺដែលមាន ហានិភ័យខ្វះអាហារូបត្ថម្ភ ឬទទួលអាហារមិនគ្រប់គ្រាន់",
            "អ្នកជំងឺ Cancer ដែលមានតម្រូវការ Protein និង ថាមពល កើនឡើង",
            "អ្នកជំងឺ មុន និងក្រោយវះកាត់ (Pre/Post Surgery)",
            "អ្នកជំងឺ Infectious Disease ដែលមានតម្រូវការអាហារូបត្ថម្ភកើនឡើង"
          ],
          what: {
            serving: "81 g (1 sachet) / serving",
            energy: "350 kcal / serving (High Energy)",
            protein: "20 g / serving (High Protein)",
            bcaa: "4.2 g / serving",
            omega3: "0.92 g (DHA/EPA) / serving",
            nutrients: "Fiber (FOS), Vitamins + Minerals",
            flavor: "Strawberry Taste"
          },
          why: [
            { feature: "High Protein 20 g/serving", benefit: "ជួយបំពេញតម្រូវការប្រូតេអ៊ីន និងជួយរក្សាម៉ាសសាច់ដុំ" },
            { feature: "High Energy 350 kcal/serving", benefit: "ជួយបំពេញតម្រូវការថាមពលប្រចាំថ្ងៃខ្ពស់របស់អ្នកជំងឺ" },
            { feature: "BCAA 4.2 g/serving", benefit: "ជួយបំពេញអាស៊ីតអាមីណូ និងជួយរក្សាម៉ាសសាច់ដុំ" },
            { feature: "Omega-3 (DHA/EPA) 0.92 g/serving", benefit: "ប្រឆាំងការរលាក និងជួយរក្សាស្ថានភាពអាហារូបត្ថម្ភ" }
          ],
          how: {
            servingSize: "1 កញ្ចប់ ≅ 81 g",
            preparation: "លាយទឹកក្តៅអ៊ុនៗ / ទឹកឆ្អិន 200 mL => កូរឱ្យសព្វ ទទួលបាន 260 mL",
            frequency: "ប្រើ 1–3 ដង/ថ្ងៃ អាចប្រើជាអាហារសម្រន់ ឬជំនួសអាហារ",
            storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត"
          },
          say: "NUTRICAN ជាអាហារូបត្ថម្ភដែលមានប្រូតេអ៊ីនខ្ពស់ និងថាមពលខ្ពស់ សម្រាប់អ្នកជំងឺដែលមានតម្រូវការ អាហារូបត្ថម្ភកើនឡើងខ្ពស់ដូចជា អ្នកជំងឺមហារីក អ្នកជំងឺមុន/ក្រោយវះកាត់ និងអ្នកជំងឺឆ្លងមេរោគ ដើម្បីបំពេញនូវតម្រូវការ ប្រូតេអ៊ីន ថាមពល និងជួយអោយស្ថានភាពអ្នកជំងឺឆាប់បានប្រសើរឡើង។"
        },
        details: {
          description: "អាហារូបត្ថម្ភសម្រាប់អ្នកជំងឺមហារីក អ្នកជំងឺមុន/ក្រោយវះកាត់ និងជំងឺឆ្លងមេរោគ។",
          benefits: [
            "High Protein (20 g/serving) ជួយបំពេញតម្រូវការប្រូតេអ៊ីន និងជួយរក្សាម៉ាសសាច់ដុំ",
            "High Energy (350 kcal/serving) ជួយបំពេញតម្រូវការថាមពលប្រចាំថ្ងៃ",
            "BCAA (4.2 g/serving) ជួយបំពេញអាស៊ីតអាមីណូ និងរក្សាម៉ាសសាច់ដុំ",
            "Omega-3 (0.92 g/serving) ប្រឆាំងការរលាក និងជួយរក្សាស្ថានភាពអាហារូបត្ថម្ភ"
          ],
          ingredients: [
            "High Protein Blend (20g)",
            "BCAA (4.2g)",
            "Omega-3 DHA/EPA (0.92g)",
            "Fiber (FOS), Vitamins & Minerals"
          ],
          nutritionalInfo: {
            serving: "81 g (1 កញ្ចប់)",
            calories: "350 kcal",
            protein: "20 g",
            bcaa: "4.2 g",
            omega3: "0.92 g",
            waterNeeded: "200 mL",
            totalYield: "260 mL"
          },
          howToUse: "1 កញ្ចប់ (81 g) លាយជាមួយទឹកក្តៅអ៊ុនៗ/ទឹកឆ្អិន 200 mL (ទទួលបាន 260 mL) កូរឱ្យសព្វ។ ប្រើ 1–3 ដង/ថ្ងៃ។",
          storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត។"
        }
      },
      {
        id: "hepatosol",
        title: "HEPATOSOL",
        genericName: "Special Nutrition for Chronic Liver Disease & LES",
        image: "/images/hepatosol.png",
        origin: "Indonesia",
        badge: "Liver Disease & LES",
        flavors: ["Vanilla"],
        keySellingPoint: "អាហារូបត្ថម្ភពិសេសសម្រាប់អ្នកជំងឺថ្លើមរ៉ាំរ៉ៃ ជាមួយ BCAA (2.66g) + MCT (14g) + High Energy (380 kcal) ពិសេសជាអាហារសម្រន់មុនចូលគេង (Late Evening Snack)។",
        framework: {
          who: [
            "អ្នកជំងឺថ្លើមរ៉ាំរ៉ៃ (Chronic Liver Disease)",
            "អ្នកជំងឺថ្លើមដែល ទទួលទានអាហារមិនគ្រប់គ្រាន់",
            "អ្នកជំងឺថ្លើមដែលមាន ហានិភ័យកង្វះអាហារូបត្ថម្ភ"
          ],
          what: {
            serving: "80 g (1 sachet) / serving",
            energy: "380 kcal / serving (High Energy)",
            protein: "12 g / serving",
            bcaa: "2.66 g (Leucine, Isoleucine, Valine) / serving",
            mct: "14 g (Medium Chain Triglycerides) / serving",
            vitamins: "Vitamins + Minerals"
          },
          why: [
            { feature: "Liver-Specific Nutrition", benefit: "រូបមន្តអាហារូបត្ថម្ភដែលបង្កើតឡើងពិសេសសម្រាប់អ្នកជំងឺថ្លើម" },
            { feature: "BCAA 2.66 g/serving", benefit: "ជួយបំពេញតម្រូវការអាស៊ីតអាមីណូ និងជួយការពារថ្លើម" },
            { feature: "MCT 14 g/serving", benefit: "ជាប្រភពថាមពលដែលងាយស្រូបយក សមស្របសម្រាប់អ្នកជំងឺថ្លើម" },
            { feature: "High Energy 380 kcal/serving", benefit: "ជួយបំពេញតម្រូវការថាមពលប្រចាំថ្ងៃ ជាពិសេសអាហារសម្រន់មុនចូលគេង (Late Evening Snack / LES)" }
          ],
          how: {
            servingSize: "1 កញ្ចប់ ≅ 80 g",
            preparation: "លាយជាមួយទឹកក្តៅអ៊ុនៗ / ទឹកឆ្អិន 300 mL => កូរឱ្យសព្វ ទទួលបាន 363 mL",
            frequency: "ប្រើ 1–3 ដង/ថ្ងៃ អាចប្រើជាអាហារបន្ថែម ជាពិសេសជាអាហារសម្រន់មុនចូលគេង (Late Evening Snack)",
            storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត"
          },
          say: "HEPATOSOL ជាអាហារូបត្ថម្ភពិសេសសម្រាប់អ្នកជំងឺថ្លើមដែលផ្តល់ BCAA និង MCT ដើម្បីជួយបំពេញតម្រូវការ ថាមពល និងអាហារូបត្ថម្ភ។ អាចប្រើជាអាហារបន្ថែម ជាពិសេសជាអាហារសម្រន់មុនចូលគេង (Late Evening Snack) តាមការណែនាំរបស់វេជ្ជបណ្ឌិត ឬអ្នកជំនាញអាហារូបត្ថម្ភ។"
        },
        details: {
          description: "អាហារូបត្ថម្ភពិសេសសម្រាប់អ្នកជំងឺថ្លើមរ៉ាំរ៉ៃ (Chronic Liver Disease)។",
          benefits: [
            "Liver-Specific Nutrition រូបមន្តអាហារូបត្ថម្ភបង្កើតឡើងពិសេសសម្រាប់អ្នកជំងឺថ្លើម",
            "BCAA (2.66 g/serving) ជួយបំពេញតម្រូវការអាស៊ីតអាមីណូ",
            "MCT (14 g/serving) ជាប្រភពថាមពលដែលងាយស្រូបយក សមស្របសម្រាប់អ្នកជំងឺថ្លើម",
            "High Energy (380 kcal/serving) ជួយបំពេញតម្រូវការថាមពលប្រចាំថ្ងៃ ជាពិសេសអាហារសម្រន់មុនចូលគេង (Late Evening Snack)"
          ],
          ingredients: [
            "BCAA (Leucine, Isoleucine, Valine) 2.66g",
            "MCT (Medium Chain Triglycerides) 14g",
            "Protein (12g)",
            "Vitamins & Minerals"
          ],
          nutritionalInfo: {
            serving: "80 g (1 កញ្ចប់)",
            calories: "380 kcal",
            protein: "12 g",
            bcaa: "2.66 g",
            mct: "14 g",
            waterNeeded: "300 mL",
            totalYield: "363 mL"
          },
          howToUse: "1 កញ្ចប់ (80 g) លាយជាមួយទឹកក្តៅអ៊ុនៗ/ទឹកឆ្អិន 300 mL (ទទួលបាន 363 mL) កូរឱ្យសព្វ។ ប្រើ 1–3 ដង/ថ្ងៃ ជាពិសេសអាហារសម្រន់មុនចូលគេង (LES)។",
          storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត។"
        }
      }
    ]
  },
  {
    id: 3,
    title: "Children Product",
    subtitle: "Gut Health • Cough Relief • Pediatric Antibiotics",
    image: "/images/Children-Product.png",
    badge: "Pediatric Care",
    description: "ដំណោះស្រាយសុខភាពកុមារដែលទុកចិត្តបំផុត ផ្តោតលើ សុខភាពពោះវៀន (Synbiotic), បំបាត់ការក្អកពីធម្មជាតិ និងថ្នាំអង់ទីប៊ីយ៉ូទិកសម្រាប់កុមារ។",
    subProducts: [
      {
        id: "rillus-jr",
        title: "RILLUS JR",
        genericName: "Multi-Strain Probiotics + Prebiotic (FOS)",
        image: "/images/rillus_jr.png",
        origin: "Indonesia",
        badge: "Dual Coating™ Tech",
        categoryTag: "Gut Health & Diarrhea",
        keySellingPoint: "Synbiotic (Probiotics + Prebiotic FOS) ជាមួយ Dual Coating™ Technology ការពារ Probiotics ឆ្លងកាត់អាស៊ីតក្រពះ ជួយរក្សាតុល្យភាពពោះវៀន និងរសជាតិទឹកដោះគោឆ្ងាញ់។",
        framework: {
          who: [
            "កុមាររាគ (Diarrhea)",
            "រាគដែលទាក់ទងនឹងការប្រើប្រាស់ថ្នាំអង់ទីប៊ីយ៉ូទិក (Antibiotic-Associated Diarrhea)",
            "ទល់លាមក (Constipation)",
            "ជួយរក្សាតុល្យភាពបាក់តេរីមានប្រយោជន៍ក្នុងពោះវៀន (Gut Microbiota)"
          ],
          what: {
            category: "Synbiotic (Probiotics + Prebiotic)",
            composition: "Multi-Strain Probiotics + Prebiotic (FOS)",
            technology: "Dual Coating™ Technology (បច្ចេកវិទ្យាស្រោបពីរជាន់)",
            form: "Sachet Powder (ម្សៅកញ្ចប់ 2.5 g)",
            flavor: "Milk Taste (រសជាតិទឹកដោះគោគោ ងាយទទួលទាន)"
          },
          why: [
            { feature: "Synbiotic: Multi-Strain Probiotics + Prebiotic (FOS)", benefit: "មានប្រសិទ្ធភាពប្រសើរជាងប្រើ Probiotic ឬ Prebiotic តែមួយមុខ" },
            { feature: "Dual Coating™ Technology", benefit: "ជួយការពារ Probiotics និងបង្កើនភាពធន់ក្នុងពេលឆ្លងកាត់អាស៊ីតក្រពះ" },
            { feature: "Multi-Strain Probiotics", benefit: "មាន Probiotics ច្រើនប្រភេទ ដែលធ្វើការរួមគ្នាជួយរក្សាសុខភាពពោះវៀន" },
            { feature: "Complete with Vitamins & Minerals", benefit: "បន្ថែមជាមួយ Vitamins & Minerals ជួយដល់ការលូតលាស់" },
            { feature: "Milk Taste and Easy to Combine", benefit: "រសជាតិទឹកដោះគោ ងាយទទួលទានសម្រាប់កុមារ" }
          ],
          how: {
            diarrheaDose: "កុមាររាគ៖ 1–2 កញ្ចប់/ថ្ងៃ",
            antibioticDose: "រាគដែលទាក់ទងនឹងការប្រើ Antibiotics៖ 1–2 កញ្ចប់/ថ្ងៃ រហូតដល់ 14 ថ្ងៃ",
            constipationDose: "ទល់លាមក៖ 2–4 កញ្ចប់/ថ្ងៃ",
            maintenanceDose: "ថែរក្សាតុល្យភាពក្នុងពោះវៀន៖ 1 កញ្ចប់/ថ្ងៃ",
            storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត"
          },
          say: "RILLUS JR ជា Synbiotic សម្រាប់កុមារ ដែលរួមបញ្ចូល Multi-Strain Probiotics + Prebiotic (FOS) ជាមួយបច្ចេកវិទ្យាស្រោបពីរជាន់ ជួយការពារ Probiotics ពេលឆ្លងកាត់អាស៊ីតក្រពះ និងជួយរក្សាសុខភាពពោះវៀន ព្រមទាំងបន្ថែមជាមួយ Vitamins & Minerals និងរសជាតិទឹកដោះគោ ងាយទទួលទានសម្រាប់កុមារ។"
        },
        details: {
          description: "Synbiotic សម្រាប់កុមារ ដែលរួមបញ្ចូល Multi-Strain Probiotics + Prebiotic (FOS) ជាមួយ Dual Coating™ Technology ជួយរក្សាតុល្យភាពបាក់តេរីក្នុងពោះវៀន។",
          benefits: [
            "Synbiotic (Multi-Strain Probiotics + Prebiotic FOS) មានប្រសិទ្ធភាពប្រសើរជាងប្រើតែមួយមុខ",
            "Dual Coating™ Technology ជួយការពារ Probiotics ពេលឆ្លងកាត់អាស៊ីតក្រពះ",
            "បន្ថែមជាមួយ Vitamins & Minerals និងរសជាតិទឹកដោះគោ (Milk Taste) ងាយទទួលទាន",
            "ប្រើសម្រាប់កុមាររាគ, រាគដោយសារ Antibiotics, ទល់លាមក និងរក្សាសុខភាពពោះវៀន"
          ],
          ingredients: [
            "Multi-Strain Probiotics",
            "Prebiotic (FOS)",
            "Vitamins & Minerals"
          ],
          nutritionalInfo: {
            serving: "1 កញ្ចប់ (2.5 g powder)",
            form: "Sachet Powder (ម្សៅកញ្ចប់)",
            flavor: "Milk Taste"
          },
          howToUse: "កុមាររាគ / រាគដោយសារ Antibiotics: 1–2 កញ្ចប់/ថ្ងៃ (រហូតដល់ 14 ថ្ងៃ)។ ទល់លាមក: 2–4 កញ្ចប់/ថ្ងៃ។ ថែរក្សាតុល្យភាព: 1 កញ្ចប់/ថ្ងៃ។",
          storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត។"
        }
      },
      {
        id: "prospan",
        title: "PROSPAN",
        genericName: "Special Ivy Leaf Extract EA 575® Syrup",
        image: "/images/prospan.png",
        origin: "Germany",
        badge: "Special Ivy Leaf EA 575®",
        categoryTag: "Natural Cough Relief",
        keySellingPoint: "ស៊ីរ៉ូក្អកធម្មជាតិពីអាល្លឺម៉ង់ Special Ivy Leaf EA 575® ផ្តល់ Four-Fold Power Action (រំលាយស្លេស្ម ពង្រីកទងសួត បន្ថយរលាក និងបំបាត់ក្អក) សម្រាប់កុមារ និងមនុស្សធំ។",
        framework: {
          who: [
            "ជួយបន្ថយការក្អកមានស្លេស្ម (Helps to relieve cough with phlegm)",
            "អាចប្រើបានទាំងកុមារ និងមនុស្សពេញវ័យ",
            "សម្រាប់ជំងឺរលាកផ្លូវដង្ហើមស្រួចស្រាវ និងរ៉ាំរ៉ៃ"
          ],
          what: {
            activeIngredient: "Special Ivy Leaf Extract EA 575®",
            source: "សារធាតុចម្រាញ់ពីស្លឹក Ivy (Hedera helix)",
            category: "ថ្នាំក្អកពីរុក្ខជាតិ (Herbal Cough Medicine)",
            form: "ស៊ីរ៉ូ 100 mL (Syrup)",
            origin: "ផលិតផលដើមពីប្រទេសអាល្លឺម៉ង់ (Germany)"
          },
          why: [
            { feature: "Special Ivy Leaf Extract EA 575®", benefit: "សារធាតុចម្រាញ់ពិសេសរបស់ PROSPAN ដែលមាន Clinical Studies ដោយផ្ទាល់លើ EA 575®" },
            { feature: "Four-Fold Power Action 1: Secretolytic", benefit: "ជួយរំលាយស្លេស្មឱ្យរាវ ងាយបញ្ចេញមកក្រៅ" },
            { feature: "Four-Fold Power Action 2: Bronchodilatory", benefit: "ជួយពង្រីកទងសួត សម្រួលការដកដង្ហើម" },
            { feature: "Four-Fold Power Action 3: Anti-inflammatory", benefit: "ជួយបន្ថយការរលាកក្នុងផ្លូវដង្ហើម" },
            { feature: "Four-Fold Power Action 4: Cough Relieving", benefit: "ជួយបន្ថយការក្អក និងការរំខានបំពង់ក" },
            { feature: "For Children & Adults", benefit: "អាចប្រើបានទាំងកុមារ និងមនុស្សពេញវ័យ តាមកម្រិតប្រើប្រាស់សមស្រប" }
          ],
          how: {
            children1to5: "កុមារ 1 - 5 ឆ្នាំ៖ 2.5 mL, 3 ដង/ថ្ងៃ",
            children6to17: "កុមារ 6 – 17 ឆ្នាំ៖ 5 mL, 3 ដង/ថ្ងៃ",
            adults: "មនុស្សពេញវ័យ៖ 7.5 mL, 3 ដង/ថ្ងៃ",
            instruction: "ក្រឡុកដបឱ្យសព្វមុនពេលប្រើប្រាស់",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C"
          },
          say: "PROSPAN ជាស៊ីរ៉ូក្អកពីធម្មជាតិ មកពីប្រទេសអាល្លឺម៉ង់ ប្រើ Special Ivy Leaf Extract EA 575® ដែលជាសារធាតុសំខាន់ និងមានការសិក្សាគ្លីនិកដោយផ្ទាល់លើ EA 575® ផ្តល់សកម្មភាព 4 យ៉ាង៖ ជួយរំលាយស្លេស្ម ជួយពង្រីកទងសួត ជួយបន្ថយការរលាក និងជួយបន្ថយការក្អក។"
        },
        details: {
          description: "ស៊ីរ៉ូក្អកពីធម្មជាតិ ប្រើ Special Ivy Leaf Extract EA 575® (សារធាតុចម្រាញ់ពីស្លឹក Ivy) ជួយបន្ថយការក្អកមានស្លេស្ម។",
          benefits: [
            "Special Ivy Leaf Extract EA 575® មាន Clinical Studies ដោយផ្ទាល់",
            "Four-Fold Power Action: Secretolytic (រំលាយស្លេស្ម), Bronchodilatory (ពង្រីកទងសួត), Anti-inflammatory (បន្ថយការរលាក), Cough Relieving (បន្ថយការក្អក)",
            "អាចប្រើបានទាំងកុមារ និងមនុស្សពេញវ័យ",
            "គ្មានជាតិអាល់កុល និងមិនធ្វើឱ្យងងុយគេង"
          ],
          ingredients: ["Dried Ivy Leaf Extract EA 575® (Hedera helix)"],
          nutritionalInfo: {
            serving: "2.5 mL – 7.5 mL",
            form: "Syrup (100 mL)",
            type: "Herbal Cough Medicine"
          },
          howToUse: "កុមារ 1-5 ឆ្នាំ៖ 2.5 mL, 3 ដង/ថ្ងៃ។ កុមារ 6–17 ឆ្នាំ៖ 5 mL, 3 ដង/ថ្ងៃ។ មនុស្សពេញវ័យ៖ 7.5 mL, 3 ដង/ថ្ងៃ។ (ក្រឡុកមុនប្រើ)។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C។"
        }
      },
      {
        id: "kalmaxime-ds",
        title: "KALMAXIME DS",
        genericName: "Cefixime 100 mg / 5 mL Dry Syrup",
        image: "/images/kalmaxime_ds.png",
        origin: "Indonesia",
        badge: "3rd Gen Cephalosporin",
        categoryTag: "Pediatric Antibiotic",
        keySellingPoint: "Cefixime 100 mg/5 mL ជំនាន់ទី 3 ទម្រង់ម្សៅលាយទឹក ងាយកំណត់ Dose តាមទម្ងន់កុមារ ព្យាបាលការឆ្លងមេរោគផ្លូវដង្ហើម, ENT និងផ្លូវទឹកនោម។",
        framework: {
          who: [
            "ព្យាបាលការឆ្លងមេរោគដែលបង្កឡើងដោយបាក់តេរី (Bacterial Infections)",
            "ការឆ្លងមេរោគផ្លូវដង្ហើម (Respiratory Tract Infections)",
            "ការឆ្លងមេរោគត្រចៀក ច្រមុះ និងបំពង់ក (ENT Infections)",
            "ការឆ្លងមេរោគផ្លូវទឹកនោម (Urinary Tract Infections / UTIs)"
          ],
          what: {
            activeIngredient: "Cefixime",
            dose: "100 mg / 5 mL (បន្ទាប់ពីលាយរួច)",
            classification: "3rd Generation Cephalosporin (ជំនាន់ទី៣នៃ Cephalosporin)",
            form: "Oral Suspension (ម្សៅលាយទឹក / Dry Syrup)"
          },
          why: [
            { feature: "3rd Generation Cephalosporin", benefit: "ថ្នាំអង់ទីប៊ីយូទិកកម្រិតខ្ពស់សម្រាប់ព្យាបាលការឆ្លងមេរោគដែលបង្កឡើងដោយបាក់តេរី" },
            { feature: "Cefixime 100 mg/5 mL", benefit: "កម្រិតថ្នាំច្បាស់លាស់ក្នុងទម្រង់ ម្សៅលាយទឹក ងាយកំណត់ dose តាមទម្ងន់កុមារ" },
            { feature: "Convenient Dosing", benefit: "អាចប្រើ 1 ដង/ថ្ងៃ ឬបែងចែកជា 2 ដង/ថ្ងៃ រៀងរាល់ 12 ម៉ោង" },
            { feature: "Oral Suspension Form", benefit: "ទម្រង់ជាម្សៅលាយទឹក សមស្របសម្រាប់កុមារដែលពិបាកលេបថ្នាំគ្រាប់" }
          ],
          how: {
            doseCalculation: "8 mg/kg/day ប្រើ 1 ដង/ថ្ងៃ ឬ 4 mg/kg/dose ប្រើ 2 ដង/ថ្ងៃ (រៀងរាល់ 12 ម៉ោង)",
            maxDose: "400 mg / day (20 mL / day)",
            mixingInstruction: "ត្រូវលាយជាមួយទឹកស្អាតតាមសញ្ញាសម្គាល់លើដប ហើយក្រឡុកឱ្យសព្វរៀងរាល់មុនពេលប្រើប្រាស់",
            storage: "រក្សាទុកម្សៅស្ងួតក្រោម 30°C។ បន្ទាប់ពីលាយរួច ត្រូវបិទគ្របឱ្យជិត និងប្រើប្រាស់តាមការណែនាំ"
          },
          say: "KALMAXIME DS មាន Cefixime 100 mg/5mL ជាថ្នាំអង់ទីប៊ីយូទិក មកពីប្រទេសឥណ្ឌូនេស៊ី ក្នុងទម្រង់ជា ម្សៅលាយទឹក សម្រាប់ព្យាបាលការឆ្លងមេរោគដែលបង្កឡើងដោយបាក់តេរី និងងាយស្រួលកំណត់ dose តាមទម្ងន់កុមារ។"
        },
        details: {
          description: "Cefixime 100 mg/5 mL ជាថ្នាំអង់ទីប៊ីយ៉ូទិកក្នុងក្រុម 3rd Generation Cephalosporin ទម្រង់ជាម្សៅលាយទឹក សម្រាប់ព្យាបាលការឆ្លងមេរោគបាក់តេរី។",
          benefits: [
            "3rd Generation Cephalosporin សម្រាប់ព្យាបាលការឆ្លងមេរោគបាក់តេរី",
            "ព្យាបាលការឆ្លងមេរោគផ្លូវដង្ហើម, ត្រចៀក ច្រមុះ បំពង់ក (ENT) និងផ្លូវទឹកនោម (UTIs)",
            "ទម្រង់ម្សៅលាយទឹក ងាយស្រួលកំណត់ dose តាមទម្ងន់កុមារ",
            "Convenient Dosing: អាចប្រើ 1 ដង/ថ្ងៃ ឬ 2 ដង/ថ្ងៃ (រៀងរាល់ 12 ម៉ោង)"
          ],
          ingredients: ["Cefixime 100 mg / 5 mL (បន្ទាប់ពីលាយរួច)"],
          nutritionalInfo: {
            serving: "8 mg/kg/day",
            form: "Oral Suspension (ម្សៅលាយទឹក)",
            class: "3rd Generation Cephalosporin"
          },
          howToUse: "8 mg/kg/day ប្រើ 1 ដង/ថ្ងៃ ឬ 4 mg/kg/dose ប្រើ 2 ដង/ថ្ងៃ (រៀងរាល់ 12 ម៉ោង) (កម្រិតអតិបរមា 400 mg/day ឬ 20 mL/day)។ លាយជាមួយទឹកស្អាតតាមសញ្ញាសម្គាល់ និងក្រឡុកឱ្យសព្វមុនប្រើ។",
          storage: "រក្សាទុកម្សៅស្ងួតក្រោម 30°C។ បន្ទាប់ពីលាយរួច ត្រូវបិទគ្របឱ្យជិត និងប្រើប្រាស់តាមការណែនាំ។"
        }
      }
    ]
  }
];

// CLINICAL COMPARISONS & SYNERGY DATA
export const CLINICAL_COMPARISONS = {
  efesaVsHemapo: {
    title: "Positioning Comparison: EFESA vs HEMAPO",
    subtitle: "Both are ESAs for CKD Anemia, with distinct dosing profiles and clinical positioning",
    summaryKh: "HEMAPO និង EFESA សុទ្ធតែជា ESA សម្រាប់ព្យាបាល CKD Anemia ប៉ុន្តែមាន dosing profile និង positioning ខុសគ្នា",
    comparison: [
      {
        feature: "ប្រភេទ ESA",
        efesa: "Long-acting ESA",
        hemapo: "Short-acting ESA"
      },
      {
        feature: "ផ្លូវ និងភាពញឹកញាប់នៃការចាក់",
        efesa: "ចាក់ក្រោមស្បែក (SC) រៀងរាល់ 2–4 សប្ដាហ៍ (ចន្លោះពេលចាក់វែងជាង)",
        hemapo: "អាចចាក់ SC ឬ IV ចែកជា 2-3 ដង/សប្ដាហ៍ (ចាក់ញឹកញាប់)"
      },
      {
        feature: "ក្រុមអ្នកជំងឺគោលដៅ",
        efesa: "ផ្តោតលើអ្នកជំងឺ CKD Anemia មិនទាន់លាងឈាម (ND-CKD)",
        hemapo: "ប្រើសម្រាប់ CKD Anemia ទាំងមិនទាន់ និងកំពុងលាងឈាម (ND-CKD & Dialysis)"
      },
      {
        feature: "សារធាតុសកម្ម & បច្ចេកវិទ្យា",
        efesa: "Efepoetin alfa + បច្ចេកវិទ្យា Hybrid Fc (HyFc®)",
        hemapo: "Epoetin alfa (Recombinant Human Erythropoietin)"
      },
      {
        feature: "អត្ថប្រយោជន៍គ្លីនិក",
        efesa: "ផ្តល់ភាពងាយស្រួល ដោយកាត់បន្ថយការចាក់ញឹកញាប់",
        hemapo: "មានភាពបត់បែនខ្ពស់ក្នុងការកែសម្រួល Dose និង Frequency តាមការឆ្លើយតប"
      }
    ],
    takeaways: [
      "EFESA → Long-acting ESA → ចាក់មិនញឹកញាប់ → ផ្តល់ភាពងាយស្រួលក្នុងការគ្រប់គ្រងការព្យាបាល",
      "HEMAPO → Short-acting ESA → ងាយស្រួលកែសម្រួល Dose/Frequency"
    ]
  },

  kalxidKalmecoSynergy: {
    title: "KALXID + KALMECO in DPN Management",
    subtitle: "Unified Positioning: Dual Complementary Mechanism for Diabetic Peripheral Neuropathy",
    whyCombineKh: "ហេតុអ្វីត្រូវប្រើរួមគ្នា? KALXID ផ្តោតលើការកាត់បន្ថយ Oxidative Stress និងការពារសរសៃប្រសាទពីការខូចខាត ខណៈ KALMECO (Active B12) មានតួនាទីរក្សាមុខងារសរសៃប្រសាទ និងស្រទាប់ Myelin => ផលិតផលទាំងពីរមានតួនាទីបំពេញគ្នាទៅវិញទៅមកយ៉ាងល្អឥតខ្ចោះក្នុងការគ្រប់គ្រង DPN។",
    matrix: [
      {
        attribute: "Active Ingredient",
        kalxid: "R-ALA 480 mg (100% R-form)",
        kalmeco: "Mecobalamin 500 mcg (Active B12)"
      },
      {
        attribute: "Primary Role",
        kalxid: "Antioxidant & Peripheral Nerve Protection",
        kalmeco: "Nerve Repair & Myelin Formation"
      },
      {
        attribute: "Clinical Action",
        kalxid: "ជួយកាត់បន្ថយ Oxidative Damage និងការពារកោសិកាសរសៃប្រសាទ",
        kalmeco: "ជួយរក្សាមុខងារបញ្ជូនសរសៃប្រសាទ និងជួសជុលស្រទាប់ស្រោប Myelin"
      },
      {
        attribute: "Dosing",
        kalxid: "1 គ្រាប់ / ថ្ងៃ (មុនអាហារ 30 នាទី)",
        kalmeco: "1 គ្រាប់ 2–3 ដង / ថ្ងៃ (ក្រោយអាហារ)"
      }
    ],
    rAlaVsRacemic: {
      title: "Why R-ALA (KALXID), not Racemic ALA?",
      points: [
        { label: "R-ALA 100% (KALXID)", text: "ជាទម្រង់ធម្មជាតិក្នុងរាងកាយ ផ្តល់តែ R-form ដែលរាងកាយអាចប្រើប្រាស់បានផ្ទាល់ និងមានប្រសិទ្ធភាពព្យាបាលខ្ពស់" },
        { label: "Racemic ALA (50:50)", text: "មានទាំង R-form និង S-form ដោយ S-form ជាទម្រង់សំយោគដែលមិនមានប្រសិទ្ធភាពធម្មជាតិ" }
      ]
    }
  },

  nocidLowProtein: {
    title: "NOCID: Why Keto Acids with a Low-Protein Diet?",
    subtitle: "KDIGO 2024 Guideline: Protecting kidney function while avoiding malnutrition",
    comparison: [
      {
        aspect: "របបអាហារ",
        dietAlone: "Low-Protein Diet Alone (កំណត់ប្រូតេអ៊ីនតែឯង)",
        dietWithNocid: "Low-Protein Diet + NOCID"
      },
      {
        aspect: "ការផ្គត់ផ្គង់ EAA",
        dietAlone: "អាចទទួលបាន Essential Amino Acids (EAA) មិនគ្រប់គ្រាន់",
        dietWithNocid: "ជួយបំពេញតម្រូវការ Essential Amino Acids (EAA) ពេញលេញ"
      },
      {
        aspect: "បន្ទុកអាសូត (Nitrogen)",
        dietAlone: "ការកំណត់ប្រូតេអ៊ីនជួយកាត់បន្ថយ Nitrogen intake",
        dietWithNocid: "Keto Acids បំប្លែងជា Amino Acids ដោយរក្សា Nitrogen Load ឱ្យនៅទាបបំផុត"
      }
    ],
    takeaways: [
      "NOCID មិនមែនជា Protein Supplement ធម្មតាទេ ប៉ុន្តែជា Keto Amino Acid Combination សម្រាប់ប្រើរួមជាមួយ Low-Protein Diet",
      "ជួយបំពេញតម្រូវការ Essential Amino Acids ខណៈរក្សា Nitrogen Load ឱ្យទាប សមស្របសម្រាប់អ្នកជំងឺ CKD មុនលាងឈាម"
    ]
  }
};

// MEDNUT PREPARATION & DOSING MATRIX
export const MEDNUT_PREPARATION_MATRIX = [
  {
    id: "nephrisol",
    name: "NEPHRISOL",
    indicationKh: "Pre-dialysis CKD",
    servingDose: "4 ស្លាបព្រា / 1 កញ្ចប់ (67 g)",
    energyKcal: 300,
    proteinG: 6,
    waterMl: 180,
    totalYieldMl: 230,
    flavors: "Vanilla, Cappuccino",
    specialNote: "Low Protein, HBV > 60%, 9 EAA, Adjusted Na/K/P"
  },
  {
    id: "nephrisol-d",
    name: "NEPHRISOL-D",
    indicationKh: "Dialysis CKD",
    servingDose: "1 កញ្ចប់ (70 g)",
    energyKcal: 320,
    proteinG: 12,
    waterMl: 150,
    totalYieldMl: 200,
    flavors: "Vanilla, Cappuccino",
    specialNote: "High Protein, Fiber FOS, Adjusted Na/K/P"
  },
  {
    id: "nutrican",
    name: "NUTRICAN",
    indicationKh: "Cancer, Surgery, Infection",
    servingDose: "1 កញ្ចប់ (81 g)",
    energyKcal: 350,
    proteinG: 20,
    waterMl: 200,
    totalYieldMl: 260,
    flavors: "Strawberry",
    specialNote: "High Protein (20g), BCAA 4.2g, Omega-3 0.92g"
  },
  {
    id: "pulmosol",
    name: "PULMOSOL",
    indicationKh: "COPD & Respiratory",
    servingDose: "1 កញ្ចប់ (50 g)",
    energyKcal: 240,
    proteinG: 12.5,
    waterMl: 180,
    totalYieldMl: 220,
    flavors: "Creamy Vanilla, Orange",
    specialNote: "Low Carb + High Fat, BCAA 2.45g, Omega-3 400mg"
  },
  {
    id: "hepatosol",
    name: "HEPATOSOL",
    indicationKh: "Chronic Liver Disease",
    servingDose: "1 កញ្ចប់ (80 g)",
    energyKcal: 380,
    proteinG: 12,
    waterMl: 300,
    totalYieldMl: 363,
    flavors: "Vanilla",
    specialNote: "BCAA 2.66g, MCT 14g, Late Evening Snack (LES)"
  }
];

export const MEDNUT_MIXING_TIPS = [
  "ដាក់ទឹកក្តៅអ៊ុនៗ ឬទឹកឆ្អិនជាមុនសិន បន្ទាប់មកបន្ថែមម្សៅអាហារូបត្ថម្ភបន្តិចម្តងៗ ហើយកូរឱ្យសព្វ",
  "អាចប្រើ Shaker ដើម្បីឱ្យម្សៅរលាយបានសព្វ ជាពិសេសពេលលាយជាមួយទឹកត្រជាក់",
  "ទទួលទានតាមមាត់ ឬសុងតាមបំពង់អាហារ (Oral or Enteral tube feeding)",
  "អាចប្រើប្រាស់ជាអាហារសម្រន់ ឬជំនួសអាហារបាន",
  "ទទួលទាន 1 – 3 ដង ក្នុងមួយថ្ងៃ ចន្លោះអាហារ ពេលព្រឹក និងល្ងាច ឬមុនចូលគេង"
];