// data/products.js - Complete data based on Kalbe Product Positioning Booklet

export const POSITIONING_FRAMEWORK_STEPS = [
  {
    step: 1,
    id: "who",
    title: "WHO",
    subtitle: "Target Patient / Indication",
    descKh: "សម្រាប់អ្នកជំងឺណា? បញ្ជាក់ក្រុមអ្នកជំងឺ និងជំងឺគោលដៅឱ្យបានច្បាស់លាស់",
    icon: "",
    color: "#0D6E38"
  },
  {
    step: 2,
    id: "what",
    title: "WHAT",
    subtitle: "Product Identity & Composition",
    descKh: "សារធាតុសកម្ម ទម្រង់ កម្រិត និងបច្ចេកវិទ្យាផលិតផល",
    icon: "",
    color: "#16A34A"
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
    color: "#68A62A"
  },
  {
    step: 5,
    id: "say",
    title: "SAY",
    subtitle: "Product Detailing",
    descKh: "ការណែនាំផលិតផលខ្លីៗ ក្បោះក្បាយ និងចំគោលដៅសម្រាប់វេជ្ជបណ្ឌិត និងអ្នកជំងឺ",
    icon: "",
    color: "#006400"
  }
];

export const PRODUCT_THEMES = {
  // Category 1: ENDO METABOLIC
  efesa: {
    title: "Efesa",
    primary: "#E11D48", // Berry Pink-Red from Efesa box logo
    dark: "#9F1239",
    bg: "#F8FAF6",
    light: "#FFE4E6",
    fontFamily: "'Nunito', 'Outfit', 'Poppins', sans-serif",
    fontWeight: 900,
    letterSpacing: "-0.5px",
    badge: "linear-gradient(135deg, #E11D48, #9F1239)",
    glow: "rgba(225, 29, 72, 0.15)",
    border: "rgba(225, 29, 72, 0.2)",
  },
  hemapo: {
    title: "Hemapo",
    primary: "#DC2626", // Red from Hemapo packaging
    dark: "#991B1B",
    bg: "#F8FAF6",
    light: "#FEE2E2",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "0px",
    badge: "linear-gradient(135deg, #DC2626, #991B1B)",
    glow: "rgba(220, 38, 38, 0.15)",
    border: "rgba(220, 38, 38, 0.2)",
  },
  nocid: {
    title: "NOCID",
    primary: "#16A34A", // Fresh Leaf Green from Nocid box
    dark: "#15803D",
    bg: "#F8FAF6",
    light: "#DCFCE7",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "1px",
    badge: "linear-gradient(135deg, #16A34A, #15803D)",
    glow: "rgba(22, 163, 74, 0.15)",
    border: "rgba(22, 163, 74, 0.2)",
  },
  kalxid: {
    title: "KALXID",
    primary: "#0D9488", // Dark Teal / Emerald from Kalxid box & pills
    dark: "#115E59",
    bg: "#F8FAF6",
    light: "#CCFBF1",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "1px",
    badge: "linear-gradient(135deg, #0D9488, #115E59)",
    glow: "rgba(13, 148, 136, 0.15)",
    border: "rgba(13, 148, 136, 0.2)",
  },
  kalmeco: {
    title: "KALMECO",
    primary: "#EA580C", // Bright Orange from Kalmeco box
    dark: "#9A3412",
    bg: "#F8FAF6",
    light: "#FFEDD5",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "1px",
    badge: "linear-gradient(135deg, #EA580C, #9A3412)",
    glow: "rgba(234, 88, 12, 0.15)",
    border: "rgba(234, 88, 12, 0.2)",
  },
  "nevox-xr": {
    title: "NEVOX XR",
    primary: "#0D6E38", // Dark Green from Nevox XR box
    dark: "#006400",
    bg: "#F8FAF6",
    light: "#DCFCE7",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "1px",
    badge: "linear-gradient(135deg, #0D6E38, #006400)",
    glow: "rgba(13, 110, 56, 0.15)",
    border: "rgba(13, 110, 56, 0.2)",
  },

  // Category 2: Mednut
  nephrisol: {
    title: "NEPHRISOL",
    primary: "#7C3AED", // Purple / Violet from Nephrisol box
    dark: "#5B21B6",
    bg: "#F8FAF6",
    light: "#EDE9FE",
    fontFamily: "'Outfit', 'Montserrat', sans-serif",
    fontWeight: 900,
    letterSpacing: "0.8px",
    badge: "linear-gradient(135deg, #7C3AED, #5B21B6)",
    glow: "rgba(124, 58, 237, 0.15)",
    border: "rgba(124, 58, 237, 0.2)",
  },
  "nephrisol-d": {
    title: "NEPHRISOL-D",
    primary: "#6D28D9", // Deep Royal Violet from Nephrisol-D box
    dark: "#4C1D95",
    bg: "#F8FAF6",
    light: "#F3E8FF",
    fontFamily: "'Outfit', 'Montserrat', sans-serif",
    fontWeight: 900,
    letterSpacing: "0.8px",
    badge: "linear-gradient(135deg, #6D28D9, #4C1D95)",
    glow: "rgba(109, 40, 217, 0.15)",
    border: "rgba(109, 40, 217, 0.2)",
  },
  pulmosol: {
    title: "PULMOSOL",
    primary: "#1E40AF", // Deep Cerulean / Navy Blue from Pulmosol box
    dark: "#1E3A8A",
    bg: "#F8FAF6",
    light: "#DBEAFE",
    fontFamily: "'Outfit', 'Montserrat', sans-serif",
    fontWeight: 900,
    letterSpacing: "0.8px",
    badge: "linear-gradient(135deg, #1E40AF, #1E3A8A)",
    glow: "rgba(30, 64, 175, 0.15)",
    border: "rgba(30, 64, 175, 0.2)",
  },
  nutrican: {
    title: "NUTRICAN",
    primary: "#16A34A", // Green from Nutrican box base and logo
    dark: "#15803D",
    bg: "#F8FAF6",
    light: "#F0FDF4",
    fontFamily: "'Outfit', 'Montserrat', sans-serif",
    fontWeight: 900,
    letterSpacing: "0.8px",
    badge: "linear-gradient(135deg, #16A34A, #15803D)",
    glow: "rgba(22, 163, 74, 0.15)",
    border: "rgba(22, 163, 74, 0.2)",
  },
  hepatosol: {
    title: "HEPATOSOL",
    primary: "#EA580C", // Bright Orange / Red from Hepatosol box
    dark: "#9A3412",
    bg: "#F8FAF6",
    light: "#FFEDD5",
    fontFamily: "'Outfit', 'Montserrat', sans-serif",
    fontWeight: 900,
    letterSpacing: "0.8px",
    badge: "linear-gradient(135deg, #EA580C, #9A3412)",
    glow: "rgba(234, 88, 12, 0.15)",
    border: "rgba(234, 88, 12, 0.2)",
  },

  // Category 3: Children Product
  prospan: {
    title: "PROSPAN",
    primary: "#16A34A", // Ivy Green from Prospan box
    dark: "#14532D",
    bg: "#F8FAF6",
    light: "#DCFCE7",
    fontFamily: "'Montserrat', 'Poppins', sans-serif",
    fontWeight: 900,
    letterSpacing: "0.8px",
    badge: "linear-gradient(135deg, #16A34A, #14532D)",
    glow: "rgba(22, 163, 74, 0.15)",
    border: "rgba(22, 163, 74, 0.2)",
  },
  "rillus-jr": {
    title: "Rillus Jr.",
    primary: "#EA580C", // Bright Orange from Rillus Jr box
    dark: "#9A3412",
    bg: "#F8FAF6",
    light: "#FFEDD5",
    fontFamily: "'Poppins', 'Nunito', 'Outfit', sans-serif",
    fontWeight: 900,
    letterSpacing: "-0.3px",
    badge: "linear-gradient(135deg, #EA580C, #9A3412)",
    glow: "rgba(234, 88, 12, 0.15)",
    border: "rgba(234, 88, 12, 0.2)",
  },
  "kalmaxime-ds": {
    title: "Kalmaxime DS",
    primary: "#1D4ED8", // Royal Cobalt Blue from Kalmaxime DS box
    dark: "#1E40AF",
    bg: "#F8FAF6",
    light: "#DBEAFE",
    fontFamily: "'Outfit', 'Inter', sans-serif",
    fontWeight: 800,
    letterSpacing: "0px",
    badge: "linear-gradient(135deg, #1D4ED8, #1E40AF)",
    glow: "rgba(29, 78, 216, 0.15)",
    border: "rgba(29, 78, 216, 0.2)",
  },

  // Category 4: CELEBROVASCULAR
  brainact: {
    title: "Brainact",
    primary: "#0284C7", // Cerulean Blue from Brainact packaging
    dark: "#0369A1",
    bg: "#F8FAF6",
    light: "#E0F2FE",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "0.5px",
    badge: "linear-gradient(135deg, #0284C7, #0369A1)",
    glow: "rgba(2, 132, 199, 0.15)",
    border: "rgba(2, 132, 199, 0.2)",
  },
  "brainact-inj": {
    title: "Brainact 1000 mg Inj",
    primary: "#EA580C", // Warm Orange from Brainact 1000mg Ampoules Box
    dark: "#C2410C",
    bg: "#F8FAF6",
    light: "#FFEDD5",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "0.5px",
    badge: "linear-gradient(135deg, #EA580C, #C2410C)",
    glow: "rgba(234, 88, 12, 0.15)",
    border: "rgba(234, 88, 12, 0.2)",
  },
  "brainact-cap": {
    title: "Brainact 1000 mg Caplet",
    primary: "#0D9488", // Mint Teal from Brainact 1000mg Caplet Box
    dark: "#0F766E",
    bg: "#F8FAF6",
    light: "#CCFBF1",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "0.5px",
    badge: "linear-gradient(135deg, #0D9488, #0F766E)",
    glow: "rgba(13, 148, 136, 0.15)",
    border: "rgba(13, 148, 136, 0.2)",
  },
  "brainact-500": {
    title: "Brainact 500 mg Tab",
    primary: "#D97706", // Golden Amber from Brainact 500 Tab Box
    dark: "#B45309",
    bg: "#F8FAF6",
    light: "#FEF3C7",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "0.5px",
    badge: "linear-gradient(135deg, #D97706, #B45309)",
    glow: "rgba(217, 119, 6, 0.15)",
    border: "rgba(217, 119, 6, 0.2)",
  },
  "brainact-odis": {
    title: "Brainact O-Dis",
    primary: "#7C3AED", // Purple / Violet from Brainact O-dis Box
    dark: "#6D28D9",
    bg: "#F8FAF6",
    light: "#EDE9FE",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "0.5px",
    badge: "linear-gradient(135deg, #7C3AED, #6D28D9)",
    glow: "rgba(124, 58, 237, 0.15)",
    border: "rgba(124, 58, 237, 0.2)",
  },
  "car-q-100": {
    title: "Car-Q 100",
    primary: "#EA580C", // Warm Amber / Orange from Car-Q Box
    dark: "#C2410C",
    bg: "#F8FAF6",
    light: "#FFEDD5",
    fontFamily: "'Outfit', 'Montserrat', sans-serif",
    fontWeight: 900,
    letterSpacing: "0.5px",
    badge: "linear-gradient(135deg, #EA580C, #C2410C)",
    glow: "rgba(234, 88, 12, 0.15)",
    border: "rgba(234, 88, 12, 0.2)",
  },
  daneuron: {
    title: "Daneuron",
    primary: "#0284C7", // Sky Blue / Royal Cyan from Daneuron Box
    dark: "#0369A1",
    bg: "#F8FAF6",
    light: "#E0F2FE",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "0.5px",
    badge: "linear-gradient(135deg, #0284C7, #0369A1)",
    glow: "rgba(2, 132, 199, 0.15)",
    border: "rgba(2, 132, 199, 0.2)",
  },
  myores: {
    title: "MYORES",
    primary: "#4D7C0F", // Lime / Forest Green from Myores Box
    dark: "#3F6212",
    bg: "#F8FAF6",
    light: "#ECFCCB",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "1px",
    badge: "linear-gradient(135deg, #65A30D, #3F6212)",
    glow: "rgba(77, 124, 15, 0.15)",
    border: "rgba(77, 124, 15, 0.2)",
  },

  // Category 5: HOSPITAL LINE
  "rillus-tab": {
    title: "Rillus Tab",
    primary: "#D97706", // Warm Amber/Gold from Rillus Box
    dark: "#B45309",
    bg: "#F8FAF6",
    light: "#FEF3C7",
    fontFamily: "'Poppins', 'Montserrat', sans-serif",
    fontWeight: 900,
    letterSpacing: "0.5px",
    badge: "linear-gradient(135deg, #D97706, #B45309)",
    glow: "rgba(217, 119, 6, 0.15)",
    border: "rgba(217, 119, 6, 0.2)",
  },
  hepafit: {
    title: "HEPAFIT",
    primary: "#DC2626", // Bold Red from Hepafit Box
    dark: "#B91C1C",
    bg: "#F8FAF6",
    light: "#FEE2E2",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "1px",
    badge: "linear-gradient(135deg, #DC2626, #991B1B)",
    glow: "rgba(220, 38, 38, 0.15)",
    border: "rgba(220, 38, 38, 0.2)",
  },
  bioplacenton: {
    title: "BIOPLACENTON",
    primary: "#15803D", // Dark Green from Bioplacenton Tube
    dark: "#166534",
    bg: "#F8FAF6",
    light: "#DCFCE7",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "0.5px",
    badge: "linear-gradient(135deg, #15803D, #166534)",
    glow: "rgba(21, 128, 61, 0.15)",
    border: "rgba(21, 128, 61, 0.2)",
  },
  kalmaxime: {
    title: "KALMAXIME 200",
    primary: "#0D9488", // Teal Green from Kalmaxime 200 Box
    dark: "#0F766E",
    bg: "#F8FAF6",
    light: "#CCFBF1",
    fontFamily: "'Outfit', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "1px",
    badge: "linear-gradient(135deg, #0D9488, #0F766E)",
    glow: "rgba(13, 148, 136, 0.15)",
    border: "rgba(13, 148, 136, 0.2)",
  },
  "kalmaxime-caplet": {
    title: "KALMAXIME 200",
    primary: "#0D9488", // Teal Green from Kalmaxime 200 Box
    dark: "#0F766E",
    bg: "#F8FAF6",
    light: "#CCFBF1",
    fontFamily: "'Outfit', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "1px",
    badge: "linear-gradient(135deg, #0D9488, #0F766E)",
    glow: "rgba(13, 148, 136, 0.15)",
    border: "rgba(13, 148, 136, 0.2)",
  },
  broadced: {
    title: "BROADCED",
    primary: "#1E40AF", // Royal Blue from Broadced Box
    dark: "#1E3A8A",
    bg: "#F8FAF6",
    light: "#DBEAFE",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "1px",
    badge: "linear-gradient(135deg, #1E40AF, #1E3A8A)",
    glow: "rgba(30, 64, 175, 0.15)",
    border: "rgba(30, 64, 175, 0.2)",
  },
  merofen: {
    title: "MEROFEN",
    primary: "#0284C7", // Medical Cyan Blue from Merofen Box
    dark: "#0369A1",
    bg: "#F8FAF6",
    light: "#E0F2FE",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "1px",
    badge: "linear-gradient(135deg, #0284C7, #0369A1)",
    glow: "rgba(2, 132, 199, 0.15)",
    border: "rgba(2, 132, 199, 0.2)",
  },
  claventin: {
    title: "CLAVENTIN",
    primary: "#2563EB", // Cobalt Blue from Claventin Box
    dark: "#1D4ED8",
    bg: "#F8FAF6",
    light: "#DBEAFE",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "1px",
    badge: "linear-gradient(135deg, #2563EB, #1D4ED8)",
    glow: "rgba(37, 99, 235, 0.15)",
    border: "rgba(37, 99, 235, 0.2)",
  },

  // Category 6: ONCOLOGY
  paxus: {
    title: "PAXUS",
    primary: "#701A75", // Deep Purple / Violet from Paxus Box Label
    dark: "#581C87",
    bg: "#F8FAF6",
    light: "#F3E8FF",
    fontFamily: "'Outfit', 'Montserrat', sans-serif",
    fontWeight: 900,
    letterSpacing: "1px",
    badge: "linear-gradient(135deg, #701A75, #581C87)",
    glow: "rgba(112, 26, 117, 0.15)",
    border: "rgba(112, 26, 117, 0.2)",
  },
  leucogen: {
    title: "LEUCOGEN",
    primary: "#9D174D", // Deep Magenta / Berry Rose from Leucogen Syringe Box
    dark: "#831843",
    bg: "#F8FAF6",
    light: "#FCE7F3",
    fontFamily: "'Outfit', 'Montserrat', sans-serif",
    fontWeight: 900,
    letterSpacing: "1px",
    badge: "linear-gradient(135deg, #9D174D, #831843)",
    glow: "rgba(157, 23, 77, 0.15)",
    border: "rgba(157, 23, 77, 0.2)",
  },
  carcan: {
    title: "CARCAN",
    primary: "#1E3A8A", // Deep Royal Navy Blue from Carcan Box Label
    dark: "#172554",
    bg: "#F8FAF6",
    light: "#DBEAFE",
    fontFamily: "'Outfit', 'Montserrat', sans-serif",
    fontWeight: 900,
    letterSpacing: "1px",
    badge: "linear-gradient(135deg, #1E3A8A, #172554)",
    glow: "rgba(30, 58, 138, 0.15)",
    border: "rgba(30, 58, 138, 0.2)",
  },
  brexel: {
    title: "BREXEL",
    primary: "#0D9488", // Teal / Emerald from Brexel Box
    dark: "#0F766E",
    bg: "#F8FAF6",
    light: "#CCFBF1",
    fontFamily: "'Outfit', 'Montserrat', sans-serif",
    fontWeight: 900,
    letterSpacing: "1px",
    badge: "linear-gradient(135deg, #0D9488, #0F766E)",
    glow: "rgba(13, 148, 136, 0.15)",
    border: "rgba(13, 148, 136, 0.2)",
  },
  rexta: {
    title: "REXTA",
    primary: "#1D4ED8", // Royal Blue from Rexta Box
    dark: "#1E40AF",
    bg: "#F8FAF6",
    light: "#DBEAFE",
    fontFamily: "'Outfit', 'Montserrat', sans-serif",
    fontWeight: 900,
    letterSpacing: "1px",
    badge: "linear-gradient(135deg, #1D4ED8, #1E40AF)",
    glow: "rgba(29, 78, 216, 0.15)",
    border: "rgba(29, 78, 216, 0.2)",
  }
};

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
          storage: "រក្សាទុកក្នុងទូរទឹកកក (2–8°C) ការពារពីពន្លឺ និងហាមកក voyage"
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
          storage: "រក្សាទុកក្នុងទូរទឹកកក (2–8°C) និងហាមកក voyage"
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
    title: "MEDNUT",
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
          storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត voyage"
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
          storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត voyage"
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
          storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត voyage"
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
          storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត voyage"
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
          storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត voyage"
        }
      }
    ]
  },
  {
    id: 3,
    title: "CHILDREN PRODUCT",
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
          storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត voyage"
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
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C voyage"
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
          storage: "រក្សាទុកម្សៅស្ងួតក្រោម 30°C។ បន្ទាប់ពីលាយរួច ត្រូវបិទគ្របឱ្យជិត និងប្រើប្រាស់តាមការណែនាំ voyage"
        }
      }
    ]
  },
  {
    id: 4,
    title: "CELEBROVASCULAR",
    subtitle: "Acute Stroke • TBI • Post Stroke • Muscle Relaxant • Energy & Immune Support",
    image: "/images/CELEBROVASCULAR.png",
    badge: "Neuro & Vascular Care",
    description: "ដំណោះស្រាយថែទាំប្រព័ន្ធប្រសាទ និងសរសៃឈាមខួរក្បាល សម្រាប់ Acute Stroke, Traumatic Brain Injury, Post-Stroke Cognitive Impairment, Muscle Spasticity និង Energy/Immune Support។",
    subProducts: [
      {
        id: "brainact-inj",
        title: "BRAINACT 1000 mg Inj",
        genericName: "Citicoline 1000 mg / 8 mL Injection",
        image: "/images/brainact_inj.png",
        origin: "Indonesia",
        badge: "Neuroprotection & Repair",
        categoryTag: "Acute Stroke & Traumatic Brain Injury",
        keySellingPoint: "Citicoline 1000mg/8mL ថ្នាំចាក់ការពារ និងជួសជុលកោសិកាខួរក្បាល បង្កើនសកម្មភាព Neurogenesis, Angiogenesis និង Synaptogenesis ក្រោយ Acute Stroke & TBI។",
        framework: {
          who: [
            "អ្នកជំងឺគ្រោះថ្នាក់សរសៃឈាមខួរក្បាលស្រួចស្រាវ (Acute Stroke)",
            "អ្នកជំងឺគ្រោះថ្នាក់ប៉ះទង្គិចក្បាល (Traumatic Brain Injury / TBI)",
            "អ្នកជំងឺដែលត្រូវការទប់ស្កាត់ការស្លាប់កោសិកាខួរក្បាល និងកាត់បន្ថយពិការភាព"
          ],
          what: {
            activeIngredient: "Citicoline (CDP-Choline)",
            dose: "1000 mg / 8 mL",
            form: "Ampoule Injection (IM / IV / IV Infusion)",
            category: "Neuroprotective & Neurorestorative Agent"
          },
          why: [
            { feature: "Neurogenesis & Angiogenesis", benefit: "ជួយជួសជុល និងបង្កើតកោសិកាប្រសាទ ព្រមទាំងសរសៃឈាមខួរក្បាលឡើងវិញ" },
            { feature: "Glia-genesis & Synaptogenesis", benefit: "បង្កើតកោសិកាគាំទ្រ និងចំណុចតភ្ជាប់រវាងកោសិកាប្រសាទ" },
            { feature: "Neurotransmitter Modulation", benefit: "សម្របសម្រួលសារធាតុបញ្ជូនសញ្ញាព័ត៌មានប្រសាទ" },
            { feature: "កាត់បន្ថយពិការភាព", benefit: "ជួយរារាំងការស្លាប់កោសិកាខួរក្បាលក្រោយប៉ះទង្គិចភ្លាមៗ និងកាត់បន្ថយពិការភាព" }
          ],
          how: {
            dosage: "ចាក់ម្តង 1 ក្រាម (1 ampoule) 1 ថ្ងៃ 2 ដង",
            method: "ចាក់តាមសរសៃវ៉ែន (IV) ឬព្យួរសេរ៉ូមតាមសរសៃវ៉ែន",
            duration: "រយៈពេល 7 ទៅ 10 ថ្ងៃក្នុងវគ្គស្រួចស្រាវ",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ការពារពីពន្លឺ"
          },
          say: "Brainact 1000mg Injection ជា Citicoline ថ្នាំចាក់ សម្រាប់ Acute Stroke និង Traumatic Brain Injury ដែលជួយរារាំងការស្លាប់កោសិកាខួរក្បាលភ្លាមៗ និងជំរុញការបង្កើតកោសិកាប្រសាទឡើងវិញ តាមរយៈសកម្មភាព Neurogenesis និង Synaptogenesis។"
        },
        details: {
          description: "Citicoline 1000 mg/8 mL ទម្រង់ថ្នាំចាក់ (IM/IV) សម្រាប់ព្យាបាលជំងឺ Acute Stroke និង Traumatic Brain Injury (TBI)។",
          benefits: [
            "ជួយរារាំងការស្លាប់កោសិកាខួរក្បាល Stroke និង Traumatic Brain Injury ក្រោយប៉ះទង្គិចភ្លាមៗ",
            "ជំរុញ Neurogenesis, Angiogenesis, Glia-genesis និង Synaptogenesis",
            "ជួយកាត់បន្ថយពិការភាពចំពោះអ្នកជំងឺស្ត្រូក",
            "មានការសិក្សាបញ្ជាក់ពីប្រសិទ្ធភាព និងសុវត្ថិភាពចំពោះអ្នកជំងឺ"
          ],
          ingredients: ["Citicoline 1000 mg / 8 mL"],
          nutritionalInfo: {
            serving: "1 Ampoule (8 mL)",
            activeIngredient: "Citicoline 1000 mg",
            form: "Injection (IM/IV)"
          },
          howToUse: "Acute Stroke / TBI: ចាក់ម្តង 1g (1 Amp) 1 ថ្ងៃ 2 ដង តាមសរសៃវ៉ែន ឬព្យួរសេរ៉ូម រយៈពេល 7-10 ថ្ងៃ។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C។"
        }
      },
      {
        id: "brainact-cap",
        title: "BRAINACT 1000 mg Caplet",
        genericName: "Citicoline 1000 mg Caplet",
        image: "/images/brainact_cap.png",
        origin: "Indonesia",
        badge: "Oral Neuro-Recovery",
        categoryTag: "Post-Stroke & Rehabilitation",
        keySellingPoint: "Citicoline 1000mg ថ្នាំគ្រាប់បន្តព្យាបាលក្រោយអ្នកជំងឺភ្ញាក់ដឹងខ្លួនពី Acute Stroke / TBI ឬ Post-Stroke Cognitive Impairment។",
        framework: {
          who: [
            "អ្នកជំងឺ Acute Stroke / TBI ក្រោយពេលភ្ញាក់ដឹងខ្លួន (Post-Acute Phase)",
            "អ្នកជំងឺដែលមានការធ្លាក់ចុះសមត្ថភាពខួរក្បាលក្រោយស្ត្រូក (Post Stroke Cognitive Impairment)",
            "អ្នកជំងឺស្តារនីតិសម្បទាប្រព័ន្ធប្រសាទ"
          ],
          what: {
            activeIngredient: "Citicoline",
            dose: "1000 mg",
            form: "Film-Coated Caplet",
            category: "Nootropic / Neuroprotective Agent"
          },
          why: [
            { feature: "High Dose Oral Citicoline", benefit: "បន្តប្រសិទ្ធភាពព្យាបាល និងជួសជុលកោសិកាខួរក្បាលពីថ្នាំចាក់" },
            { feature: "Neurogenesis & Synaptogenesis", benefit: "ជួយបង្កើតចំណុចតភ្ជាប់សរសៃប្រសាទ និងស្តារការចងចាំ" },
            { feature: "Convenient Caplet Form", benefit: "ងាយស្រួលលេបសម្រាប់អ្នកជំងឺដឹងខ្លួន ព្យាបាលបន្តនៅផ្ទះ" }
          ],
          how: {
            postStrokeAcute: "ក្រោយភ្ញាក់ដឹងខ្លួន បន្ត 2 ក្រាម/ថ្ងៃ (1 គ្រាប់ 2 ដង/ថ្ងៃ) រហូតដល់ 6 សប្តាហ៍",
            cognitiveImpairment: "កាត់បន្ថយមកត្រឹម 1 ក្រាម/ថ្ងៃ (1 គ្រាប់ 1 ដង/ថ្ងៃ) យ៉ាងហោចណាស់ 6 ខែឡើងទៅ",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C"
          },
          say: "Brainact 1000mg Caplet ជាថ្នាំគ្រាប់ Citicoline កម្រិតខ្ពស់ សម្រាប់បន្តព្យាបាលអ្នកជំងឺក្រោយ Acute Stroke/TBI (2g/ថ្ងៃ រហូតដល់ 6 សប្តាហ៍) និង Post-Stroke Cognitive Impairment (1g/ថ្ងៃ រយៈពេល 6 ខែឡើង) ដើម្បីស្តារមុខងារខួរក្បាល។"
        },
        details: {
          description: "Citicoline 1000 mg Caplet សម្រាប់បន្តការព្យាបាល Acute Stroke, TBI និង Post Stroke Cognitive Impairment។",
          benefits: [
            "ជួយដល់ការបង្កើតកោសិកាប្រសាទឡើងវិញ តាមរយៈ Neurogenesis និង Synaptogenesis",
            "ជួយកាត់បន្ថយពិការភាព និងស្តារសមត្ថភាពខួរក្បាល",
            "កម្រិត 1000mg ច្បាស់លាស់ ងាយស្រួលបន្តការព្យាបាលវែងឆ្ងាយ"
          ],
          ingredients: ["Citicoline 1000 mg"],
          nutritionalInfo: {
            serving: "1 Caplet",
            activeIngredient: "Citicoline 1000 mg",
            form: "Caplet"
          },
          howToUse: "ក្រោយភ្ញាក់ដឹងខ្លួន៖ 2g/ថ្ងៃ រហូតដល់ 6 សប្តាហ៍។ Post-Stroke Cognitive Impairment៖ 1g/ថ្ងៃ យ៉ាងហោចណាស់ 6 ខែឡើងទៅ។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C។"
        }
      },
      {
        id: "brainact-500",
        title: "BRAINACT 500 mg Tablet",
        genericName: "Citicoline 500 mg Tablet",
        image: "/images/brainact_500.png",
        origin: "Indonesia",
        badge: "Cognitive Maintenance",
        categoryTag: "Cognitive Decline & Maintenance",
        keySellingPoint: "Citicoline 500mg ថ្នាំគ្រាប់សម្រាប់ Post-Stroke Cognitive Impairment និង Mild Cognitive Impairment លើមនុស្សចាស់។",
        framework: {
          who: [
            "អ្នកជំងឺ Post Stroke Cognitive Impairment",
            "មនុស្សចាស់ដែលមានការធ្លាក់ចុះសមត្ថភាពខួរក្បាលកម្រិតស្រាល (Mild Cognitive Impairment / MCI)",
            "អ្នកជំងឺដែលត្រូវការកែសម្រួល dosage 500mg"
          ],
          what: {
            activeIngredient: "Citicoline",
            dose: "500 mg",
            form: "Tablet",
            category: "Cognitive Enhancer"
          },
          why: [
            { feature: "Citicoline 500 mg", benefit: "ងាយស្រួលបត់បែន Dose (500mg - 1000mg/ថ្ងៃ)" },
            { feature: "Cognitive Support", benefit: "ជួយគាំទ្រការចងចាំ និងពន្យារការធ្លាក់ចុះសមត្ថភាពខួរក្បាលតាមអាយុ" },
            { feature: "Safety Profile", benefit: "សុវត្ថិភាពខ្ពស់ អាចប្រើប្រាស់រយៈពេលវែង" }
          ],
          how: {
            postStrokeCognitive: "1 ក្រាម / ថ្ងៃ (1 គ្រាប់ 2 ដង/ថ្ងៃ) យ៉ាងហោចណាស់ 6 ខែឡើងទៅ",
            mciDose: "1 ក្រាម / ថ្ងៃ (1 គ្រាប់ 2 ដង/ថ្ងៃ) សម្រាប់ Mild Cognitive Impairment",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C"
          },
          say: "Brainact 500mg Tablet ផ្តល់ Citicoline 500mg សម្រាប់ Post Stroke Cognitive Impairment និង Mild Cognitive Impairment លើមនុស្សចាស់ ប្រើ 1g/ថ្ងៃ ដើម្បីជួយថែរក្សា និងស្តារការចងចាំ។"
        },
        details: {
          description: "Citicoline 500 mg Tablet សម្រាប់ Post Stroke Cognitive Impairment និង Mild Cognitive Impairment លើមនុស្សចាស់។",
          benefits: [
            "ជួយទ្រទ្រង់ការចងចាំ និងពន្យារការធ្លាក់ចុះសមត្ថភាពខួរក្បាល",
            "ជំរុញសកម្មភាព Neurotransmitter Modulation និង Synaptogenesis",
            "ទម្រង់គ្រាប់តូច ងាយស្រួលលេប"
          ],
          ingredients: ["Citicoline 500 mg"],
          nutritionalInfo: {
            serving: "1 Tablet",
            activeIngredient: "Citicoline 500 mg",
            form: "Tablet"
          },
          howToUse: "1 ក្រាម/ថ្ងៃ (1 គ្រាប់ 2 ដង/ថ្ងៃ) ប្រើប្រាស់រយៈពេល 6 ខែឡើងទៅ។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C។"
        }
      },
      {
        id: "brainact-odis",
        title: "BRAINACT O-Dis",
        genericName: "Citicoline 500 mg Orally Disintegrating Tablet",
        image: "/images/brainact_odis.png",
        origin: "Indonesia",
        badge: "Fast Disintegrating",
        categoryTag: "Dysphagia & Polymedication",
        keySellingPoint: "Citicoline 500mg ថ្នាំបៀមរលាយក្នុងមាត់ រសជាតិផ្លែឈើចម្រុះ សមស្របបំផុតសម្រាប់អ្នកជំងឺ Stroke ពិបាកលេបថ្នាំ ឬប្រើថ្នាំច្រើនមុខ។",
        framework: {
          who: [
            "អ្នកជំងឺ Stroke ដែលពិបាកលេបថ្នាំ (Dysphagia)",
            "អ្នកជំងឺចាស់ជរាដែលប្រើថ្នាំច្រើនមុខ (Polymedication Patients)",
            "អ្នកជំងឺ Post Stroke Cognitive Impairment & Mild Cognitive Impairment"
          ],
          what: {
            activeIngredient: "Citicoline",
            dose: "500 mg",
            form: "Orally Disintegrating Tablet (O-Dis / ថ្នាំបៀម)",
            flavor: "Mixed Fruit Flavor (រសជាតិផ្លែឈើចម្រុះ)"
          },
          why: [
            { feature: "Orally Disintegrating Tech", benefit: "រលាយរហ័សក្នុងមាត់ដោយមិនបាច់ញ៉ាំទឹក ងាយស្រួលសម្រាប់អ្នកជំងឺពិបាកលេប" },
            { feature: "Mixed Fruit Flavor", benefit: "រសជាតិឆ្ងាញ់ បង្កើនកិច្ចសហការក្នុងការលេបថ្នាំរបស់អ្នកជំងឺ" },
            { feature: "Cognitive Support", benefit: "ផ្តល់ Citicoline ជួយស្តារ Neurogenesis និងចងចាំ" }
          ],
          how: {
            dosage: "1 ក្រាម / ថ្ងៃ (បៀម 1 គ្រាប់ 2 ដង/ថ្ងៃ)",
            method: "ដាក់បៀមលើអណ្តាតឱ្យរលាយក្នុងមាត់ ដោយមិនបាច់ប្រើទឹក",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ក្នុងប្រអប់ស្ងួត"
          },
          say: "Brainact O-Dis ជាថ្នាំបៀម Citicoline 500mg រសជាតិផ្លែឈើចម្រុះ ដែលរលាយក្នុងមាត់ភ្លាមៗ សាកសមបំផុតសម្រាប់អ្នកជំងឺ Stroke ពិបាកលេបថ្នាំ ឬប្រើថ្នាំច្រើនមុខ ដើម្បីជំនួយខួរក្បាល និងការចងចាំ។"
        },
        details: {
          description: "Citicoline 500 mg Orally Disintegrating Tablet ថ្នាំបៀមរលាយក្នុងមាត់ រសជាតិផ្លែឈើចម្រុះ សម្រាប់អ្នកជំងឺ Stroke និង Mild Cognitive Impairment។",
          benefits: [
            "ទម្រង់ថ្នាំបៀម រលាយក្នុងមាត់ភ្លាមៗ ដោយមិនបាច់ប្រើទឹក",
            "សមស្របបំផុតសម្រាប់អ្នកជំងឺ Stroke ពិបាកលេបថ្នាំ និងប្រើថ្នាំច្រើនមុខ",
            "រសជាតិផ្លែឈើចម្រុះ ងាយស្រួលទទួលទាន",
            "ជួយស្តារ Neurogenesis, Synaptogenesis និងការចងចាំ"
          ],
          ingredients: ["Citicoline 500 mg"],
          nutritionalInfo: {
            serving: "1 Disintegrating Tablet",
            activeIngredient: "Citicoline 500 mg",
            form: "Orally Disintegrating Tablet"
          },
          howToUse: "បៀម 1 គ្រាប់ 2 ដង/ថ្ងៃ (សរុប 1g/ថ្ងៃ) ឱ្យរលាយក្នុងមាត់។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C។"
        }
      },
      {
        id: "car-q-100",
        title: "CAR-Q 100",
        genericName: "L-Carnitine Fumarate 500 mg + Coenzyme Q10 100 mg",
        image: "/images/car_q.png",
        origin: "Indonesia",
        badge: "Dual Energy & Cardiac Support",
        categoryTag: "Heart Failure & Statin Myopathy",
        keySellingPoint: "បន្សំ L-Carnitine 500mg + CoQ10 100mg ផ្តល់ថាមពលទ្វេដងដល់បេះដូង និងសាច់ដុំ ព្យាបាលខ្សោយបេះដូង, ឈឺសាច់ដុំពី Statin និងអស់កម្លាំងលើមនុស្សចាស់។",
        framework: {
          who: [
            "អ្នកជំងឺខ្សោយបេះដូង (Heart Failure) និង Atherosclerosis",
            "អ្នកជំងឺដែលឈឺ ឬខ្សោយសាច់ដុំដោយសារប្រើថ្នាំបញ្ចុះខ្លាញ់ Statin (Statin-Induced Myopathy)",
            "មនុស្សចាស់ និងអ្នកជំងឺសម្រាកពេទ្យយូរដែលមានអាការៈអស់កម្លាំង ល្ហិតល្ហៃ",
            "អ្នកជំងឺដែលមានជំងឺរួមផ្សំច្រើន (DM, Hypertension, Dyslipidemia, Obesity)"
          ],
          what: {
            activeIngredients: "L-Carnitine Fumarate 500 mg + Coenzyme Q10 (Ubiquinone) 100 mg",
            form: "Film-Coated Caplet",
            category: "Mitochondrial Energy & Cardiovascular Supplement"
          },
          why: [
            { feature: "Coenzyme Q10 100 mg", benefit: "ជួយ Mitochondria បំប្លែងស្ករ ខ្លាញ់ និងប្រូតេអ៊ីនទៅជាថាមពល ATP សម្រាប់បេះដូង" },
            { feature: "L-Carnitine 500 mg", benefit: "ដឹកនាំអាស៊ីតខ្លាញ់ free fatty acids ចូល Mitochondria ដើម្បីបង្កើតថាមពល" },
            { feature: "Statin Myopathy Relief", benefit: "ជួយព្យាបាលអាការៈឈឺ ឬខ្សោយសាច់ដុំពីការប្រើថ្នាំ Statin" },
            { feature: "Cardio & Immune Support", benefit: "បង្កើនប្រសិទ្ធភាពព្យាបាលខ្សោយបេះដូង និងពង្រឹងប្រព័ន្ធភាពស៊ាំ" }
          ],
          how: {
            dosage: "1 គ្រាប់ 1 ថ្ងៃ 2 ដង (ពេលព្រឹក និងពេលថ្ងៃ ក្រោយអាហារ)",
            duration: "ប្រើប្រាស់រយៈពេល 1 ខែឡើងទៅ",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C"
          },
          say: "Car-Q 100 រួមបញ្ចូល CoQ10 100mg និង L-Carnitine 500mg ផ្តល់អានុភាពទ្វេដងក្នុងការបង្កើតថាមពលកោសិកា ជួយបង្កើនប្រសិទ្ធភាពព្យាបាលខ្សោយបេះដូង បំបាត់ការឈឺសាច់ដុំពីថ្នាំ Statin និងកាត់បន្ថយការអស់កម្លាំង។"
        },
        details: {
          description: "L-Carnitine 500 mg & Coenzyme Q10 100 mg Caplet សម្រាប់បង្កើនថាមពលបេះដូង និងសាច់ដុំ ព្រមទាំងការពារ Atherosclerosis។",
          benefits: [
            "CoQ10 + L-Carnitine ផ្តល់អានុភាពទ្វេដងចំពោះសុខភាពបេះដូង និងសរសៃឈាម",
            "ជួយព្យាបាលអាការៈឈឺ ឬខ្សោយសាច់ដុំ ពិសេសសម្រាប់អ្នកកំពុងប្រើថ្នាំ Statin",
            "ជួយបង្កើនប្រសិទ្ធភាពព្យាបាលជំងឺខ្សោយបេះដូង និងរឹងសរសៃឈាម Atherosclerosis",
            "ជួយព្យាបាលអាការៈអស់កម្លាំង ល្ហិតល្ហៃ ចំពោះមនុស្សចាស់ និងអ្នកសម្រាកពេទ្យយូរ"
          ],
          ingredients: [
            "L-Carnitine Fumarate 500 mg",
            "Coenzyme Q10 100 mg"
          ],
          nutritionalInfo: {
            serving: "1 Caplet",
            coQ10: "100 mg",
            lCarnitine: "500 mg",
            form: "Caplet"
          },
          howToUse: "1 គ្រាប់ 2 ដង/ថ្ងៃ (ព្រឹក និងថ្ងៃ ក្រោយអាហារ) រយៈពេល 1 ខែឡើងទៅ។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C។"
        }
      },
      {
        id: "daneuron",
        title: "DANEURON",
        genericName: "Vitamin B1 100 mg + B6 200 mg + B12 200 mg",
        image: "/images/daneuron.png",
        origin: "Indonesia",
        badge: "High Dose Neurotropic",
        categoryTag: "Polyneuritis & Neuro-Pains",
        keySellingPoint: "High-dose Neurotropic Vitamin B1, B6, B12 គ្រាប់តូច រសជាតិផ្អែម គ្មានក្លិន ព្យាបាលការលាកសរសៃប្រសាទ (Polyneuritis), ឈឺសរសៃប្រសាទ និងចង្អោរពេលមានផ្ទៃពោះ។",
        framework: {
          who: [
            "អ្នកជំងឺរលាកសរសៃប្រសាទច្រើន (Polyneuritis) និងកង្វះ Vitamin B1, B6, B12",
            "អ្នកជំងឺដែលមានការឈឺចាប់ប្រព័ន្ធសរសៃប្រសាទ ឬឈឺក្រោយជាសះស្បើយពីជំងឺរើម (Post-herpetic neuralgia)",
            "ស្ត្រីមានផ្ទៃពោះដែលមានអាការៈចង្អោរ និងក្អួតខ្លាំង (Morning sickness)",
            "អ្នកជំងឺល្ហិតល្ហៃត្រូវការស្តារកម្លាំងក្រោយជាពីជំងឺ"
          ],
          what: {
            composition: "Vitamin B1 100 mg + Vitamin B6 200 mg + Vitamin B12 200 mg",
            form: "Film-Coated Tablet",
            characteristics: "គ្រាប់តូច រសជាតិផ្អែម គ្មានក្លិនឈួល"
          },
          why: [
            { feature: "High-Dose B-Complex", benefit: "ជួយព្យាបាលជំងឺរលាកសរសៃប្រសាទ Polyneuritis និងស្តារសរសៃប្រសាទ" },
            { feature: "Small Sweet Tablet, No Odor", benefit: "គ្រាប់តូច រសជាតិផ្អែម គ្មានក្លិន ងាយស្រួលទទួលទានបំផុត" },
            { feature: "Pregnancy Nausea Relief", benefit: "ជួយកាត់បន្ថយអាការៈចង្អោរ ក្អួត អំឡុងពេលមានផ្ទៃពោះ" }
          ],
          how: {
            dosage: "1 គ្រាប់ 1 ថ្ងៃ 1 ដង (មុន ឬក្រោយអាហារ)",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ក្នុងប្រអប់ជិត"
          },
          say: "Daneuron រួមផ្សំ High-Dose Vitamin B1 (100mg), B6 (200mg), B12 (200mg) គ្រាប់តូច រសជាតិផ្អែម គ្មានក្លិន ងាយលេប សម្រាប់ព្យាបាល Polyneuritis, ឈឺសរសៃប្រសាទ និងចង្អោរពេលមានផ្ទៃពោះ។"
        },
        details: {
          description: "Vitamin B1 100 mg, Vitamin B6 200 mg & Vitamin B12 200 mg Tablet សម្រាប់ព្យាបាល Polyneuritis និងកង្វះវីតាមីន B។",
          benefits: [
            "គ្រាប់តូច រសជាតិផ្អែម និងគ្មានក្លិនឈួល ផ្តល់ភាពងាយស្រួលទទួលទាន",
            "ព្យាបាលជំងឺរលាកសរសៃប្រសាទ Polyneuritis និងការឈឺចាប់សរសៃប្រសាទ",
            "ជួយសម្រាលអាការៈចង្អោរ ក្អួត អំឡុងពេលមានផ្ទៃពោះ",
            "ជួយឱ្យមានកម្លាំងឡើងវិញបន្ទាប់ពីជំងឺបានធូរស្រាល"
          ],
          ingredients: [
            "Vitamin B1 (Thiamine HCl) 100 mg",
            "Vitamin B6 (Pyridoxine HCl) 200 mg",
            "Vitamin B12 (Cyanocobalamin) 200 mg"
          ],
          nutritionalInfo: {
            serving: "1 Tablet",
            b1: "100 mg",
            b6: "200 mg",
            b12: "200 mg"
          },
          howToUse: "1 គ្រាប់ 1 ថ្ងៃ 1 ដង (មុន ឬក្រោយអាហារ)។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C។"
        }
      },
      {
        id: "myores",
        title: "MYORES",
        genericName: "Eperisone Hydrochloride 50 mg",
        image: "/images/myores.png",
        origin: "Indonesia",
        badge: "Muscle Relaxant & Vasodilator",
        categoryTag: "Muscle Spasm & Back/Neck Pain",
        keySellingPoint: "Eperisone HCl 50mg ថ្នាំបន្ធូរសាច់ដុំ និងពង្រីកសរសៃឈាម បំបាត់ការឈឺចុកចាប់សាច់ដុំ ខ្នង ស្មា ក និងស្ពឹក/រឹងសាច់ដុំពី Stroke/Spinal Injury ដោយមិនធ្វើឱ្យល្វើយ។",
        framework: {
          who: [
            "អ្នកជំងឺស្ពឹក រឹង ឬតឹងសាច់ដុំដោយសារជំងឺប្រព័ន្ធប្រសាទ (Stroke, Spinal Cord Injury, Spastic Paralysis)",
            "អ្នកជំងឺដែលមានការឈឺចាប់សាច់ដុំ ខ្នងផ្នែកខាងក្រោម ចង្កេះ ស្មា ក និងដៃ",
            "អ្នកជំងឺដែលមានការឈឺចាប់ក្រោយវះកាត់ក្បាល ឬឆ្អឹងខ្នង"
          ],
          what: {
            activeIngredient: "Eperisone Hydrochloride",
            dose: "50 mg",
            form: "Film-Coated Tablet",
            action: "Central Muscle Relaxant with Vasodilator Activity"
          },
          why: [
            { feature: "Inhibition of Spinal Reflexes", benefit: "ទប់ស្កាត់ការកន្ត្រាក់សាច់ដុំនៅកម្រិត Spinal Cord & Brain Stem" },
            { feature: "Vasodilator Effect", benefit: "ពង្រីកសរសៃឈាម បង្កើនចរន្តឈាមរត់ឆ្លងកាត់សាច់ដុំ" },
            { feature: "Analgesic Effect", benefit: "បន្ធូរការកន្ត្រាក់សាច់ដុំ និងបំបាត់ការឈឺចាប់យ៉ាងឆាប់រហ័ស" },
            { feature: "Low Sedation", benefit: "មិនធ្វើឱ្យល្វើយ ឬងងុយគេងខ្លាំងដូចថ្នាំបន្ធូរសាច់ដុំចាស់ៗ" }
          ],
          how: {
            dosage: "1 ទៅ 2 គ្រាប់ 1 ថ្ងៃ 3 ដង (ក្រោយអាហារ)",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ក្នុងកន្លែងស្ងួត"
          },
          say: "MYORES (Eperisone 50mg) ជាថ្នាំបន្ធូរសាច់ដុំ និងពង្រីកសរសៃឈាម ដែលមានប្រសិទ្ធភាពខ្ពស់ក្នុងការបំបាត់ការឈឺចុកចាប់សាច់ដុំ ខ្នង ចង្កេះ ស្មា និងអាការៈរឹងសាច់ដុំពី Stroke ឬ Spinal Injury។"
        },
        details: {
          description: "Eperisone Hydrochloride 50 mg Tablet ថ្នាំបន្ធូរការកន្ត្រាក់សាច់ដុំ និងបង្កើនចរន្តឈាមរត់។",
          benefits: [
            "ទប់ស្កាត់ប្រតិកម្មកន្ត្រាក់សាច់ដុំ និងពង្រីកសរសៃឈាមបង្កើនចរន្តឈាម",
            "បំបាត់អាការៈឈឺសាច់ដុំ ឈឺចុកខ្នង ស្មា ក និងចង្កេះ",
            "ព្យាបាលអាការៈស្ពឹក រឹង តឹងសាច់ដុំពី Stroke & Spinal Cord Injury",
            "បំបាត់ការឈឺចាប់ក្រោយវះកាត់ក្បាល និងឆ្អឹងខ្នង"
          ],
          ingredients: ["Eperisone Hydrochloride 50 mg"],
          nutritionalInfo: {
            serving: "1 Tablet",
            activeIngredient: "Eperisone HCl 50 mg",
            form: "Tablet"
          },
          howToUse: "1-2 គ្រាប់ 3 ដង/ថ្ងៃ ក្រោយអាហារ។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C។"
        }
      }
    ]
  },
  {
    id: 5,
    title: "HOSPITAL LINE",
    subtitle: "Gut Microbiota • Hepato-Protection • Advanced Antibiotics • Wound Care",
    image: "/images/Hospital-Line.png",
    badge: "Hospital & Clinical Care",
    description: "ផលិតផលថែទាំកម្រិតមន្ទីរពេទ្យ ផ្តោតលើ សុខភាពពោះវៀន, ការពារថ្លើម, ថ្នាំផ្សះកម្រិតខ្ពស់ និងការថែទាំរបួស/ដំបៅស្បែក។",
    subProducts: [
      {
        id: "rillus-tab",
        title: "RILLUS Tab",
        genericName: "Multi-Strain Probiotics + Prebiotic (FOS) Chewable Tablet",
        image: "/images/rillus_tab.png",
        origin: "South Korea (Cell Biotech) / Indonesia",
        badge: "Dual Coating™ Tech",
        categoryTag: "Adult Gut Health & IBS",
        keySellingPoint: "Synbiotic គ្រាប់ទំពារ រសជាតិវ៉ាន់នីឡាទឹកដោះគោ ជាមួយ Dual Coating™ Tech (Patented) ប្រសិទ្ធភាព 100 ដងលើស Non-coated ព្យាបាល IBS, រាគពី Antibiotics និងទល់លាមក។",
        framework: {
          who: [
            "អ្នកជំងឺរលាកពោះវៀនធំរ៉ាំរ៉ៃ (Irritable Bowel Syndrome / IBS)",
            "អ្នកជំងឺរាគដោយសារប្រើថ្នាំអង់ទីប៊ីយ៉ូទិក (Antibiotic-Associated Diarrhea)",
            "អ្នកជំងឺទល់លាមក (Constipation) និងសមតុល្យបាក់តេរីពោះវៀន"
          ],
          what: {
            probiotics: "B. bifidum 2.55mg, S. thermophilus 8.55mg, L. plantarum 8.55mg",
            prebiotic: "Fructooligosaccharide (FOS) 480 mg",
            technology: "Dual Coating™ Technology (World Wide Patented)",
            form: "Chewable Tablet (គ្រាប់ទំពារ រសជាតិវ៉ាន់នីឡាទឹកដោះគោ)"
          },
          why: [
            { feature: "Dual Coating™ Technology", benefit: "ការពារ Probiotics ពីអាស៊ីតក្រពះ និងទឹកប្រមាត់ ផ្តល់ប្រសិទ្ធភាព 100 ដងលើស Non-coated" },
            { feature: "Synbiotic Combination", benefit: "Multi-Strain Probiotics + Prebiotic FOS មានប្រសិទ្ធភាពខ្ពស់ជាង Probiotic តែមួយមុខ" },
            { feature: "Chewable Milk Taste", benefit: "គ្រាប់ទំពារ រសជាតិវ៉ាន់នីឡាទឹកដោះគោ ងាយស្រួលទទួលទាន" }
          ],
          how: {
            ibsDose: "2–4 គ្រាប់ / ថ្ងៃ (រយៈពេល 4 សប្តាហ៍ឡើងទៅ)",
            aadDose: "1–2 គ្រាប់ / ថ្ងៃ (ប្រើជាមួយថ្នាំផ្សះ រហូតដល់ 14 ថ្ងៃ)",
            constipationDose: "2–4 គ្រាប់ / ថ្ងៃ (2 ទៅ 4 សប្តាហ៍)",
            maintenance: "1 គ្រាប់ / ថ្ងៃ",
            storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត"
          },
          say: "RILLUS Tab ជា Synbiotic គ្រាប់ទំពារ រសជាតិទឹកដោះគោ ប្រើបច្ចេកវិទ្យាស្រោប 2 ជាន់ Patented ជួយការពារបាក់តេរីល្អឱ្យទៅដល់ពោះវៀនបានច្រើនជាង 100 ដង សម្រាប់ព្យាបាល IBS, រាគពី Antibiotics និងទល់លាមក។"
        },
        details: {
          description: "Synbiotic Multi-Strain Probiotics + Prebiotic (FOS) គ្រាប់ទំពារ រសជាតិវ៉ាន់នីឡាទឹកដោះគោ ជាមួយ Dual Coating™ Technology។",
          benefits: [
            "Dual Coating™ Technology ផ្តល់ប្រសិទ្ធភាព 100 ដងលើស Non-coated Probiotic",
            "ព្យាបាលជំងឺរលាកពោះវៀនធំ IBS, រាគពី Antibiotics និងទល់លាមក",
            "ស្តារតុល្យភាព Gut Microbiota និងពង្រឹងប្រព័ន្ធភាពស៊ាំ",
            "ទម្រង់គ្រាប់ទំពារ រសជាតិវ៉ាន់នីឡាទឹកដោះគោ ងាយស្រួលទទួលទាន"
          ],
          ingredients: [
            "Bifidobacterium bifidum 2.55 mg",
            "Streptococcus thermophilus 8.55 mg",
            "Lactobacillus plantarum 8.55 mg",
            "Fructooligosaccharide (FOS) 480 mg"
          ],
          nutritionalInfo: {
            serving: "1-2 Chewable Tablets",
            form: "Chewable Tablet",
            flavor: "Vanilla Milk"
          },
          howToUse: "IBS: 2-4 គ្រាប់/ថ្ងៃ (4 សប្តាហ៍+)។ រាគពី Antibiotic: 1-2 គ្រាប់/ថ្ងៃ។ ទល់លាមក: 2-4 គ្រាប់/ថ្ងៃ។",
          storage: "រក្សាទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត។"
        }
      },
      {
        id: "hepafit",
        title: "HEPAFIT",
        genericName: "Siliphos 144 mg + Schisandra 27 mg + Vitamin E 30 mg",
        image: "/images/hepafit.png",
        origin: "Indonesia",
        badge: "Advanced Liver Protection",
        categoryTag: "Fatty Liver & Hepatitis",
        keySellingPoint: "Siliphos® (Silybin + Phosphatidylcholine) ផ្តល់ប្រសិទ្ធភាព 4 ដងលើស Silymarin ធម្មតា + Schisandra & Vit E ព្យាបាលខ្លាញ់រុំថ្លើម (Fatty Liver) និងដកពុលថ្លើមពីថ្នាំ/ស្រា។",
        framework: {
          who: [
            "អ្នកជំងឺខ្លាញ់រុំថ្លើម (Fatty Liver Disease)",
            "អ្នកជំងឺរលាកថ្លើមប្រភេទ A, B, C",
            "អ្នកជំងឺដែលកំពុងប្រើប្រាស់ថ្នាំនាំឱ្យពុលថ្លើម (Drug-Induced Liver Injury)",
            "អ្នកដែលមានកត្តាប្រឈមខ្ពស់ (ពិសាស្រា លើសទម្ងន់ ញ៉ាំអាហារខ្លាញ់)"
          ],
          what: {
            composition: "Siliphos 144mg (Silybin + Phosphatidylcholine) + Schisandra chinensis 27mg + Vitamin E 30mg",
            form: "Capsule",
            category: "Phytosome Hepato-Protective Agent"
          },
          why: [
            { feature: "Siliphos Phytosome", benefit: "ផ្តល់ប្រសិទ្ធភាពស្រូប 4 ដងលើស Silymarin ធម្មតា ជួយបន្ថយអង់ស៊ីម Transaminase" },
            { feature: "Schisandra Chinensis", benefit: "ការពារ និងជួសជុលសាច់ថ្លើមតាមបែបធម្មជាតិ និងកាត់បន្ថយការរលាក" },
            { feature: "Vitamin E & Glutathione", benefit: "ប្រឆាំងអុកស៊ីតកម្ម និងបង្កើនកម្រិត Glutathione ក្នុងកោសិកាថ្លើម" }
          ],
          how: {
            treatmentDose: "1 គ្រាប់ 3 ទៅ 4 ដង / ថ្ងៃ (រយៈពេល 3 ទៅ 6 ខែ)",
            preventionDose: "1 គ្រាប់ 1 ដង / ថ្ងៃ (យ៉ាងហោចណាស់ 1 ខែ)",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C"
          },
          say: "HEPAFIT មាន Siliphos (Silybin + Phosphatidylcholine) ស្រូបបានល្អជាង Silymarin ធម្មតា 4 ដង រួមជាមួយ Schisandra និង Vit E ជួយព្យាបាលខ្លាញ់រុំថ្លើម បន្ថយអង់ស៊ីមថ្លើម និងការពារសាច់ថ្លើមពីថ្នាំ/ស្រា។"
        },
        details: {
          description: "Siliphos 144 mg, Schisandra 27 mg & Vitamin E 30 mg Capsule សម្រាប់ព្យាបាល និងការពារការខូចខាតសាច់ថ្លើម។",
          benefits: [
            "Siliphos ផ្តល់ប្រសិទ្ធភាព 4 ដងលើស Silymarin ធម្មតា ក្នុងការចុះ Transaminase",
            "ព្យាបាលខ្លាញ់រុំថ្លើម (Fatty Liver) និងរលាកថ្លើម A, B, C",
            "ការពារថ្លើមពីថ្នាំដែលបណ្តាលឱ្យពុលថ្លើម និងគ្រឿងស្រវឹង",
            "បង្កើនកម្រិត Glutathione ក្នុងកោសិកា និងពង្រឹងប្រព័ន្ធភាពស៊ាំ"
          ],
          ingredients: [
            "Siliphos (Silybin + Phosphatidylcholine) 144 mg",
            "Schisandra chinensis Extract 27 mg",
            "Vitamin E 30 mg"
          ],
          nutritionalInfo: {
            serving: "1 Capsule",
            siliphos: "144 mg",
            form: "Capsule"
          },
          howToUse: "ព្យាបាល (Fatty liver, Hepatitis): 1 គ្រាប់ 3-4 ដង/ថ្ងៃ រយៈពេល 3-6 ខែ។ បង្ការ: 1 គ្រាប់/ថ្ងៃ។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C។"
        }
      },
      {
        id: "bioplacenton",
        title: "BIOPLACENTON",
        genericName: "Bovine Placenta Extract 10% + Neomycin Sulphate 0.5% Jelly",
        image: "/images/bioplacenton.png",
        origin: "Indonesia",
        badge: "Wound Healing & Anti-Infective",
        categoryTag: "Burns, Ulcers & Skin Infections",
        keySellingPoint: "Placenta Extract 10% ជំរុញការបង្កើតកោសិកាស្បែក + Neomycin 0.5% ការពារមេរោគ ពន្លឿនការសះស្បើយរបួសរលាក, ដំបៅរ៉ាំរ៉ៃ, Bedsores និងតាកអកស្បែក។",
        framework: {
          who: [
            "អ្នកជំងឺមានរបួសរលាក (Burns)",
            "អ្នកជំងឺមានដំបៅរ៉ាំរ៉ៃ ដំបៅងាយឆ្លងមេរោគ ឬដំបៅសង្កត់ (Bedsores / Pressure Ulcers)",
            "អ្នកជំងឺឆ្លងមេរោគលើស្បែក តាកអក ច្រែះថ្ងៃ និងបូស"
          ],
          what: {
            activeIngredients: "Placenta Extract ex bovine 10% + Neomycin Sulphate 0.5%",
            form: "Jelly / Topical Gel (15g tube)",
            category: "Tissue Regeneration & Topical Antibiotic"
          },
          why: [
            { feature: "Bovine Placenta Extract 10%", benefit: "ជំរុញការបង្កើតកោសិកាស្បែក និងពន្លឿនការសះមុខរបួស" },
            { feature: "Neomycin Sulphate 0.5%", benefit: "ថ្នាំផ្សះប្រឆាំងមេរោគបាក់តេរី ការពារមុខរបួសពីការឆ្លងរោគ" },
            { feature: "Cooling Jelly Base", benefit: "ទម្រង់ Jelly ផ្តល់ភាពត្រជាក់ មិនរលាក និងស្រូបលឿន" }
          ],
          how: {
            application: "លាបស្តើងៗលើស្បែកដែលមានបញ្ហា 4 ទៅ 6 ដង / ថ្ងៃ",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ក្នុងប្រអប់ជិត"
          },
          say: "Bioplacenton Jelly រួមផ្សំ Placenta Extract 10% ជំរុញការបង្កើតកោសិកាស្បែក និង Neomycin 0.5% ប្រឆាំងមេរោគ ពន្លឿនការសះស្បើយមុខរបួសរលាក ដំបៅរ៉ាំរ៉ៃ និងដំបៅសង្កត់យ៉ាងមានប្រសិទ្ធភាព។"
        },
        details: {
          description: "Placenta Extract 10% & Neomycin Sulphate 0.5% Jelly (15g) សម្រាប់ពន្លឿនការសះមុខរបួសរលាក និងដំបៅស្បែក។",
          benefits: [
            "Placenta Extract ជំរុញការបង្កើតកោសិកាស្បែក និងរៀបចំរចនាសម្ព័ន្ធស្បែកឡើងវិញ",
            "Neomycin Sulphate ការពារ និងព្យាបាលការឆ្លងមេរោគបាក់តេរីលើស្បែក",
            "ពន្លឿនការសះស្បើយរបួសរលាក ដំបៅរ៉ាំរ៉ៃ ដំបៅគ្រែ (Bedsores) និងបូស",
            "ទម្រង់ Jelly ត្រជាក់ស្រួល មិនបង្កការឈឺចាប់ពេលលាប"
          ],
          ingredients: [
            "Placenta Extract ex bovine 10%",
            "Neomycin Sulphate 0.5%"
          ],
          nutritionalInfo: {
            serving: "Topical Application",
            form: "Jelly (15g Tube)"
          },
          howToUse: "លាបស្តើងៗលើស្បែកដែលមានបញ្ហា 4-6 ដង/ថ្ងៃ។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C។"
        }
      },
      {
        id: "kalmaxime-caplet",
        title: "KALMAXIME 200",
        genericName: "Cefixime 200 mg Caplet",
        image: "/images/kalmaxime_200.png",
        origin: "Indonesia",
        badge: "3rd Gen Cephalosporin Oral",
        categoryTag: "Adult Bacterial Infections",
        keySellingPoint: "Cefixime 200mg ថ្នាំគ្រាប់ 3rd Gen Cephalosporin សម្រាប់ព្យាបាលការឆ្លងមេរោគផ្លូវដង្ហើម, ENT និង UTIs លើមនុស្សធំ ប្រើ 1-2 ដង/ថ្ងៃ។",
        framework: {
          who: [
            "មនុស្សពេញវ័យ និងកុមារទម្ងន់ចាប់ពី 30kg ឡើងទៅ",
            "ការឆ្លងមេរោគផ្លូវដង្ហើម (Respiratory Tract Infections)",
            "ការឆ្លងមេរោគត្រចៀក ច្រមុះ បំពង់ក (ENT Infections)",
            "ការឆ្លងមេរោគផ្លូវទឹកនោម (Urinary Tract Infections / UTIs)"
          ],
          what: {
            activeIngredient: "Cefixime",
            dose: "200 mg",
            form: "Film-Coated Caplet",
            classification: "3rd Generation Cephalosporin"
          },
          why: [
            { feature: "3rd Gen Cephalosporin", benefit: "សម្លាប់បាក់តេរីទូលំទូលាយ (Broad-Spectrum)" },
            { feature: "Exact 200mg Caplet", benefit: "ងាយស្រួលកំណត់ Dose សម្រាប់មនុស្សធំ និងកុមារធំ" },
            { feature: "Convenient Dosing", benefit: "ប្រើ 1 ដង/ថ្ងៃ ឬ 2 ដង/ថ្ងៃ (រៀងរាល់ 12 ម៉ោង)" }
          ],
          how: {
            adultDose: "200 mg 1-2 ដង / ថ្ងៃ (កម្រិតអតិបរមា 400 mg/day)",
            children30kg: "50 mg - 100 mg 2 ដង / ថ្ងៃ",
            storage: "រក្សាទុកសីតុតុណ្ហភាពក្រោម 30°C"
          },
          say: "KALMAXIME 200 Caplet មាន Cefixime 200mg ជាថ្នាំផ្សះជំនាន់ទី 3 ក្នុងទម្រង់ថ្នាំគ្រាប់ សម្រាប់ព្យាបាលការឆ្លងមេរោគផ្លូវដង្ហើម ENT និង UTIs ងាយស្រួលប្រើប្រាស់ និងមានប្រសិទ្ធភាពខ្ពស់។"
        },
        details: {
          description: "Cefixime 200 mg Film-Coated Caplet (3rd Generation Cephalosporin) សម្រាប់ព្យាបាលការឆ្លងមេរោគបាក់តេរី។",
          benefits: [
            "3rd Generation Cephalosporin ប្រសិទ្ធភាពខ្ពស់លើ Gram-negative & Gram-positive",
            "ព្យាបាលការឆ្លងមេរោគផ្លូវដង្ហើម, ENT និងផ្លូវទឹកនោម (UTIs)",
            "ទម្រង់ Caplet ងាយស្រួលលេប និងកំណត់ dose"
          ],
          ingredients: ["Cefixime 200 mg"],
          nutritionalInfo: {
            serving: "1 Caplet",
            activeIngredient: "Cefixime 200 mg",
            form: "Caplet"
          },
          howToUse: "មនុស្សធំ៖ 200mg 1-2 ដង/ថ្ងៃ (អតិបរមា 400mg/day)។ កុមារ >30kg: 50-100mg 2 ដង/ថ្ងៃ។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C។"
        }
      },
      {
        id: "broadced",
        title: "BROADCED",
        genericName: "Ceftriaxone 1 g Injection",
        image: "/images/broadced.png",
        origin: "Indonesia",
        badge: "3rd Gen Parenteral Cephalosporin",
        categoryTag: "Severe Hospital Infections & Meningitis",
        keySellingPoint: "Ceftriaxone 1g ថ្នាំចាក់ IV/IM ជំនាន់ទី 3 ព្យាបាលការឆ្លងមេរោគធ្ងន់ធ្ងរផ្លូវដង្ហើម, UTIs, ENT និងរលាកភ្នាសខួរក្បាល (Meningitis)។",
        framework: {
          who: [
            "អ្នកជំងឺឆ្លងមេរោគធ្ងន់ធ្ងរក្នុងមន្ទីរពេទ្យ (Hospitalized Patients)",
            "ការឆ្លងមេរោគផ្លូវដង្ហើម ENT និង UTIs ធ្ងន់ធ្ងរ",
            "អ្នកជំងឺរលាកភ្នាសខួរក្បាល (Bacterial Meningitis)"
          ],
          what: {
            activeIngredient: "Ceftriaxone Sodium",
            dose: "1 Gram",
            form: "Powder for Injection (Vial)",
            classification: "3rd Generation Cephalosporin Injection"
          },
          why: [
            { feature: "Parenteral 3rd Gen Cephalosporin", benefit: "សកម្មភាពសម្លាប់បាក់តេរីលឿន និងទូលំទូលាយ" },
            { feature: "High Tissue & CSF Penetration", benefit: "ជ្រាបចូលភ្នាសខួរក្បាលបានល្អ ព្យាបាល Meningitis" },
            { feature: "Once or Twice Daily Dosing", benefit: "ងាយស្រួលប្រើប្រាស់ក្នុងមន្ទីរពេទ្យ" }
          ],
          how: {
            adults: "1 ទៅ 2 ក្រាម / ថ្ងៃ (បែងចែកជា 1-2 ដង ចាក់ IV ឬព្យួរ IV Infusion)",
            severeCases: "អាចបង្កើនដល់ 4 ក្រាម / ថ្ងៃ (បែងចែក 2 ដង)",
            pediatric: "20 ទៅ 60 mg/kg/day (ករណីធ្ងន់ធ្ងរដល់ 120 mg/kg/day)",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ការពារពីពន្លឺ"
          },
          say: "BROADCED (Ceftriaxone 1g Injection) ជាថ្នាំចាក់ផ្សះជំនាន់ទី 3 សម្រាប់ព្យាបាលការឆ្លងមេរោគបាក់តេរីធ្ងន់ធ្ងរក្នុងមន្ទីរពេទ្យ និងជំងឺរលាកភ្នាសខួរក្បាល ជាមួយកម្រិត dose ច្បាស់លាស់ និងសុវត្ថិភាពខ្ពស់។"
        },
        details: {
          description: "Ceftriaxone 1 g Powder for Injection (3rd Generation Cephalosporin) សម្រាប់ចាក់តាមសរសៃវ៉ែន (IV) ឬសាច់ដុំ (IM)។",
          benefits: [
            "ថ្នាំផ្សះចាក់កម្រិតខ្ពស់ ជំនាន់ទី 3 សម្រាប់ Severe Infections",
            "ជ្រាបចូលសរីរាង្គ និងភ្នាសខួរក្បាលបានយ៉ាងល្អ",
            "ព្យាបាលរលាកផ្លូវដង្ហើម, UTIs, ENT និង Bacterial Meningitis"
          ],
          ingredients: ["Ceftriaxone Sodium 1 g"],
          nutritionalInfo: {
            serving: "1 Vial (1 g)",
            activeIngredient: "Ceftriaxone 1 g",
            form: "Injection Powder"
          },
          howToUse: "មនុស្សធំ៖ 1-2g/ថ្ងៃ (ករណីធ្ងន់ 4g/ថ្ងៃ)។ កុមារ៖ 20-60 mg/kg/day (ករណីធ្ងន់ 120 mg/kg/day)។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C។"
        }
      },
      {
        id: "merofen",
        title: "MEROFEN",
        genericName: "Meropenem 1 g Injection",
        image: "/images/merofen.png",
        origin: "Indonesia",
        badge: "Ultra Broad-Spectrum Carbapenem",
        categoryTag: "MDR Infections & Febrile Neutropenia",
        keySellingPoint: "Meropenem 1g Carbapenem កម្រិតខ្ពស់ សុវត្ថិភាពខ្ពស់លើប្រព័ន្ធប្រសាទ (Low Neurotoxicity) ព្យាបាលបាក់តេរីស៊ាំថ្នាំ (MDR), Meningitis, ឆ្លងរោគក្នុងពោះ និង Febrile Neutropenia។",
        framework: {
          who: [
            "អ្នកជំងឺឆ្លងមេរោគបាក់តេរីស៊ាំនឹងថ្នាំផ្សះផ្សេងៗ (Multidrug-resistant / MDR infections)",
            "អ្នកជំងឺរលាកខួរក្បាល / ស្រោមខួរក្បាល (Bacterial Meningitis)",
            "អ្នកជំងឺឆ្លងមេរោគក្នុងពោះ អាងត្រគាក និងចរន្តឈាម (Septicemia)",
            "អ្នកជំងឺ Febrile Neutropenia (គ្រុនក្តៅពេលគ្រាប់ឈាមសថយចុះទាប)"
          ],
          what: {
            activeIngredient: "Meropenem",
            dose: "1 Gram",
            form: "Powder for Injection (Vial)",
            classification: "Carbapenem Antibiotic"
          },
          why: [
            { feature: "Ultra Broad-Spectrum", benefit: "សម្លាប់បាក់តេរី Gram-positive, Gram-negative, Pseudomonas & Anaerobes" },
            { feature: "Low Neurotoxicity", benefit: "សុវត្ថិភាពខ្ពស់លើប្រព័ន្ធប្រសាទ (ប្រកាច់តិច) បើធៀបនឹង Imipenem សមស្របសម្រាប់ Meningitis" },
            { feature: "Hospital High Efficacy", benefit: "ជម្រើសទីមួយសម្រាប់ Severe Nosocomial Infections" }
          ],
          how: {
            generalInfections: "0.5g - 1g រៀងរាល់ 8 ម៉ោងម្តង (ចាក់ IV Infusion > 30 នាទី)",
            meningitis: "2g រៀងរាល់ 8 ម៉ោងម្តង (សរុប 6g/ថ្ងៃ)",
            febrileNeutropenia: "1g រៀងរាល់ 8 ម៉ោងម្តង (សរុប 3g/ថ្ងៃ)",
            pediatric: "30-60 mg/kg (Meningitis/Neutropenia: 120 mg/kg/day ចែកជា 3 ដង)",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C"
          },
          say: "MEROFEN INJECTION 1g (Meropenem) ជាថ្នាំចាក់ Carbapenem កម្រិតខ្ពស់បំផុត សម្រាប់ព្យាបាលការឆ្លងមេរោគស៊ាំថ្នាំធ្ងន់ធ្ងរ រលាកស្រោមខួរ និង Febrile Neutropenia ជាមួយសុវត្ថិភាព Neurotoxicity ទាប។"
        },
        details: {
          description: "Meropenem 1 g Powder for Injection (Carbapenem Antibiotic) សម្រាប់ចាក់ IV Infusion។",
          benefits: [
            "ប្រសិទ្ធភាពខ្ពស់បំផុតលើ Multidrug-resistant (MDR) infections",
            "សុវត្ថិភាព Neurotoxicity ទាប សមស្របបំផុតសម្រាប់ Bacterial Meningitis",
            "ព្យាបាលជំងឺឆ្លងក្នុងពោះ, ចរន្តឈាម និង Febrile Neutropenia"
          ],
          ingredients: ["Meropenem Trihydrate equiv. to Meropenem Anhydrous 1 g"],
          nutritionalInfo: {
            serving: "1 Vial (1 g)",
            activeIngredient: "Meropenem 1 g",
            form: "Injection Powder"
          },
          howToUse: "ទូទៅ៖ 0.5-1g រៀងរាល់ 8h។ Meningitis: 2g រៀងរាល់ 8h (6g/day)។ Neutropenia: 1g រៀងរាល់ 8h។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C។"
        }
      },
      {
        id: "claventin",
        title: "CLAVENTIN",
        genericName: "Amoxicillin 500 mg + Clavulanic Acid 125 mg Caplet",
        image: "/images/claventin.png",
        origin: "Indonesia",
        badge: "Beta-Lactamase Inhibitor Combo",
        categoryTag: "Resistant Respiratory & Skin Infections",
        keySellingPoint: "Amoxicillin 500mg + Clavulanate 125mg ទប់ស្កាត់អង់ស៊ីម Beta-lactamase ព្យាបាលការឆ្លងមេរោគស៊ាំថ្នាំផ្លូវដង្ហើម, ENT, ស្បែក និង UTIs។",
        framework: {
          who: [
            "អ្នកជំងឺឆ្លងមេរោគបាក់តេរីដែលផលិតអង់ស៊ីម Beta-lactamase",
            "ការឆ្លងមេរោគស្បែក និងរចនាសម្ព័ន្ធស្បែក (Skin & Soft Tissue)",
            "ការឆ្លងមេរោគផ្លូវដង្ហើម ENT និង UTIs"
          ],
          what: {
            activeIngredients: "Amoxicillin Trihydrate 500 mg + Potassium Clavulanate 125 mg",
            form: "Film-Coated Caplet",
            ratio: "4:1 Synergy Combo"
          },
          why: [
            { feature: "Clavulanic Acid 125 mg", benefit: "ទប់ស្កាត់អង់ស៊ីម Beta-lactamase ការពារ Amoxicillin មិនឱ្យត្រូវបំផ្លាញ" },
            { feature: "Broadened Spectrum", benefit: "សម្លាប់បាក់តេរីដែលស៊ាំនឹង Amoxicillin ធម្មតា" },
            { feature: "Versatile Indications", benefit: "ព្យាបាលបានទាំងផ្លូវដង្ហើម ស្បែក និងផ្លូវទឹកនោម" }
          ],
          how: {
            adultDose: "1 គ្រាប់ (625mg) 1 ថ្ងៃ 3 ដង (រៀងរាល់ 8 ម៉ោង មុនអាហារ)",
            pediatricDose: "Amoxicillin 90mg/kg + Clavulanate 6.4mg/kg per day (ចែកជា 2 ដង)",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ក្នុងប្រអប់ស្ងួត"
          },
          say: "CLAVENTIN Caplet រួមផ្សំ Amoxicillin 500mg និង Clavulanic Acid 125mg ជួយទប់ស្កាត់ការស៊ាំថ្នាំបាក់តេរី ព្យាបាលការឆ្លងមេរោគស្បែក ផ្លូវដង្ហើម ENT និង UTIs យ៉ាងមានប្រសិទ្ធភាព។"
        },
        details: {
          description: "Amoxicillin 500 mg & Clavulanic Acid 125 mg Caplet ថ្នាំផ្សះបន្សំប្រឆាំងអង់ស៊ីម Beta-lactamase។",
          benefits: [
            "Clavulanic Acid ការពារ Amoxicillin ពីការបំផ្លាញរបស់ Beta-lactamase",
            "ព្យាបាលការឆ្លងមេរោគស្បែក, ផ្លូវដង្ហើម, ENT និង UTIs",
            "ប្រសិទ្ធភាពខ្ពស់លើបាក់តេរីស៊ាំថ្នាំ"
          ],
          ingredients: [
            "Amoxicillin 500 mg",
            "Clavulanic Acid 125 mg"
          ],
          nutritionalInfo: {
            serving: "1 Caplet (625 mg)",
            activeIngredients: "Amox 500mg / Clav 125mg",
            form: "Caplet"
          },
          howToUse: "មនុស្សធំ៖ 1 គ្រាប់ 3 ដង/ថ្ងៃ (រៀងរាល់ 8 ម៉ោង មុនអាហារ)។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C។"
        }
      }
    ]
  },
  {
    id: 6,
    title: "ONCOLOGY",
    subtitle: "Chemotherapy • Supportive Care • Protocol-Based Treatment",
    image: "/images/Oncology.png",
    badge: "Cancer Care & Supportive Therapy",
    description: "ដំណោះស្រាយព្យាបាលជំងឺមហារីកកម្រិតខ្ពស់ រួមមានថ្នាំគីមីព្យាបាល (Taxane, Platinum) និងថ្នាំជំនួយគ្រាប់ឈាម (G-CSF)។",
    subProducts: [
      {
        id: "paxus",
        title: "PAXUS",
        genericName: "Paclitaxel 100 mg / 16.7 mL (6 mg/mL) Injection",
        image: "/images/paxus.png",
        origin: "South Korea (Plant Cell Culture Tech)",
        badge: "PCC Technology Taxane",
        categoryTag: "Ovarian & Breast Cancer",
        keySellingPoint: "Paclitaxel 100mg/16.7mL បច្ចេកវិទ្យា Plant Cell Culture (PCC) ថ្នាំគីមីក្រុម Taxane First-line សម្រាប់ Ovarian Cancer (ជាមួយ Cisplatin) និង Breast Cancer។",
        framework: {
          who: [
            "អ្នកជំងឺមហារីកអូវែ (Advanced Ovarian Carcinoma - First-line ជាមួយ Cisplatin)",
            "អ្នកជំងឺមហារីកសុដន់ (Metastatic / Recurrent Breast Cancer ក្រោយបរាជ័យ Combination Chemotherapy)"
          ],
          what: {
            activeIngredient: "Paclitaxel",
            dose: "100 mg / 16.7 mL (6 mg/mL)",
            technology: "Plant Cell Culture (PCC) Technology",
            form: "Solution for IV Infusion",
            category: "Taxane Cytotoxic Chemotherapy"
          },
          why: [
            { feature: "Plant Cell Culture (PCC) Tech", benefit: "បច្ចេកវិទ្យាផលិតសុទ្ធសាធ បង្កើនភាពស្អាត និងសុវត្ថិភាពថ្នាំ" },
            { feature: "Taxane Cytotoxic Action", benefit: "ទប់ស្កាត់ការបែងចែកកោសិកាមហារីក តាមរយៈការរក្សាស្ថេរភាព Microtubule" },
            { feature: "Standard Regimen Integration", benefit: "ប្រើក្នុង Ovarian & Breast Cancer Regimens តាមស្តង់ដារអន្តរជាតិ" }
          ],
          how: {
            administration: "ចាក់តាមសរសៃវ៉ែន (IV Infusion)",
            dosing: "អាស្រ័យលើប្រភេទមហារីក និង Chemotherapy Regimen ក្រោមការត្រួតពិនិត្យរបស់វេជ្ជបណ្ឌិត Oncology",
            premedication: "ត្រូវប្រើ Premedication (Corticosteroids, Antihistamines) ដើម្បីការពារ Hypersensitivity",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ការពារពីពន្លឺ"
          },
          say: "PAXUS ជា Paclitaxel 100mg/16.7mL ផលិតដោយ Plant Cell Culture (PCC) Technology ក្នុងក្រុម Taxane សម្រាប់ព្យាបាលមហារីកអូវែ (Ovarian Cancer) និងមហារីកសុដន់ (Breast Cancer) តាម Treatment Protocol។"
        },
        details: {
          description: "Paclitaxel 100 mg/16.7 mL (6 mg/mL) Solution for IV Infusion ផលិតដោយ Plant Cell Culture (PCC) Technology។",
          benefits: [
            "Plant Cell Culture (PCC) Technology ផ្តល់គុណភាពថ្នាំគីមីខ្ពស់",
            "First-line Treatment សម្រាប់ Advanced Ovarian Cancer ប្រើរួមជាមួយ Cisplatin",
            "ព្យាបាល Metastatic Breast Cancer ក្រោយបរាជ័យ Chemotherapy ផ្សេងទៀត",
            "ថ្នាំគីមីស្តង់ដារក្នុងក្រុម Taxane Cytotoxic"
          ],
          ingredients: ["Paclitaxel 100 mg / 16.7 mL"],
          nutritionalInfo: {
            serving: "1 Vial (16.7 mL)",
            activeIngredient: "Paclitaxel 100 mg",
            form: "IV Infusion Solution"
          },
          howToUse: "ចាក់តាម IV Infusion តាម Chemotherapy Regimen ក្រោមការណែនាំរបស់វេជ្ជបណ្ឌិតឯកទេសមហារីក។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ការពារពីពន្លឺ។"
        }
      },
      {
        id: "leucogen",
        title: "LEUCOGEN",
        genericName: "Filgrastim 300 mcg Injection",
        image: "/images/leucogen.png",
        origin: "Indonesia",
        badge: "Recombinant G-CSF",
        categoryTag: "Chemotherapy-Induced Neutropenia",
        keySellingPoint: "Filgrastim 300mcg (G-CSF) ជួយជំរុញការផលិតគ្រាប់ឈាមស Neutrophils និងកាត់បន្ថយរយៈពេល Neutropenia លើអ្នកជំងឺមហារីកកំពុងចាក់គីមី។",
        framework: {
          who: [
            "អ្នកជំងឺមហារីកដែលមានហានិភ័យ ឬកំពុងមាន Chemotherapy-Induced Neutropenia",
            "អ្នកជំងឺ Solid Tumor ឬ Non-myeloid Malignancy ដែលទទួលការព្យាបាលដោយគីមី"
          ],
          what: {
            activeIngredient: "Filgrastim (Recombinant Human Granulocyte Colony-Stimulating Factor / r-metHuG-CSF)",
            dose: "300 mcg (30 Million IU)",
            form: "Injection (SC / IV)",
            category: "Oncology Supportive Care / Hematopoietic Growth Factor"
          },
          why: [
            { feature: "Granulocyte Colony Stimulation", benefit: "ជំរុញឆ្អឹងកងឱ្យផលិត និងបញ្ចេញគ្រាប់ឈាមស Neutrophils ចូលចរន្តឈាម" },
            { feature: "Neutrophil Recovery", benefit: "ឆាប់ស្តារកម្រិត Neutrophil ឱ្យមកធម្មតា ការពារការឆ្លងរោគធ្ងន់ធ្ងរ (Febrile Neutropenia)" },
            { feature: "Protocol Continuity", benefit: "ជួយឱ្យអ្នកជំងឺអាចបន្តចាក់គីមីតាមកាលវិភាគ មិនបាច់ពន្យារពេល" }
          ],
          how: {
            dosage: "5 mcg / kg / day (ចាក់ SC ឬ IV)",
            timing: "ចាក់ 24 ម៉ោង ក្រោយបញ្ចប់ Chemotherapy រហូតដល់ Neutrophil ត្រឡប់មកធម្មតា",
            storage: "រក្សាទុកក្នុងទូរទឹកកក (2–8°C) និងហាមកក"
          },
          say: "LEUCOGEN ជា Filgrastim 300mcg (G-CSF) ជួយជំរុញការផលិត Neutrophils និងកាត់បន្ថយរយៈពេល Neutropenia លើអ្នកជំងឺមហារីក ជួយការពារការឆ្លងរោគ និងរក្សាកាលវិភាគចាក់គីមី។"
        },
        details: {
          description: "Filgrastim 300 mcg (30 MIU) Injection (r-metHuG-CSF) សម្រាប់ព្យាបាល និងការពារ Chemotherapy-Induced Neutropenia។",
          benefits: [
            "ជំរុញការផលិត និងបង្កើតគ្រាប់ឈាមស Neutrophils",
            "កាត់បន្ថយរយៈពេល Neutropenia និងហានិភ័យ Febrile Neutropenia",
            "ជួយឱ្យ Chemotherapy Cycle ដំណើរការបានទៀងទាត់"
          ],
          ingredients: ["Filgrastim 300 mcg"],
          nutritionalInfo: {
            serving: "1 Vial / Syringe",
            activeIngredient: "Filgrastim 300 mcg",
            form: "Injection (SC/IV)"
          },
          howToUse: "5 mcg/kg/day ចាក់ក្រោមស្បែក (SC) ឬតាម IV ក្រោយចាក់គីមី 24 ម៉ោង។",
          storage: "រក្សាទុកក្នុងទូរទឹកកក (2–8°C) ហាមកក។"
        }
      },
      {
        id: "carcan",
        title: "CARCAN",
        genericName: "Carboplatin 450 mg Injection",
        image: "/images/carcan.png",
        origin: "Indonesia",
        badge: "2nd Gen Platinum",
        categoryTag: "Lung, Ovarian & Solid Tumors",
        keySellingPoint: "Carboplatin 450mg ថ្នាំគីមី 2nd Generation Platinum cytotoxic សម្រាប់ Small/Non-Small Cell Lung Cancer, Ovarian, Cervical & Head and Neck Cancer។",
        framework: {
          who: [
            "អ្នកជំងឺមហារីកសួត (Small Cell & Non-Small Cell Lung Cancer)",
            "អ្នកជំងឺមហារីកអូវែ (Ovarian Cancer)",
            "អ្នកជំងឺមហារីកមាត់ស្បូន (Cervical), Head & Neck និង Gastric Cancer"
          ],
          what: {
            activeIngredient: "Carboplatin",
            dose: "450 mg",
            form: "Solution for IV Infusion",
            classification: "2nd Generation Platinum Chemotherapy"
          },
          why: [
            { feature: "2nd Gen Platinum Analog", benefit: "ផលរំខានចង្អោរ ពុលតម្រងនោម និងសរសៃប្រសាទតិចជាង Cisplatin" },
            { feature: "DNA Cross-linking Action", benefit: "បំផ្លាញ DNA កោសិកាមហារីក ទប់ស្កាត់ការលូតលាស់" },
            { feature: "Broad Solid Tumor Activity", benefit: "ប្រើប្រាស់ទូលំទូលាយក្នុង Protocol មហារីកជាច្រើនប្រភេទ" }
          ],
          how: {
            administration: "ចាក់តាម IV Infusion តែមួយមុខ ឬប្រើរួមជាមួយថ្នាំគីមីផ្សេងទៀត",
            dosing: "គណនា Dose តាម Calvert Formula (AUC) ឬ Body Surface Area (BSA)",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ការពារពីពន្លឺ"
          },
          say: "CARCAN មាន Carboplatin 450mg ជាថ្នាំគីមី Platinum ជំនាន់ទី 2 ដែលមានសុវត្ថិភាពល្អលើតម្រងនោម សម្រាប់ព្យាបាលមហារីកសួត អូវែ មាត់ស្បូន ក្បាលនិងក តាម Protocol។"
        },
        details: {
          description: "Carboplatin 450 mg Solution for IV Infusion (2nd Generation Platinum Chemotherapy)។",
          benefits: [
            "2nd Generation Platinum Chemotherapy មានផលរំខានទាបជាង Cisplatin",
            "ព្យាបាល Small/Non-Small Cell Lung Cancer និង Ovarian Cancer",
            "ព្យាបាល Cervical, Head & Neck, Gastric Cancer",
            "ទប់ស្កាត់ការបំបែកខ្លួននៃ DNA កោសិកាមហារីក"
          ],
          ingredients: ["Carboplatin 450 mg"],
          nutritionalInfo: {
            serving: "1 Vial (450 mg)",
            activeIngredient: "Carboplatin 450 mg",
            form: "IV Infusion"
          },
          howToUse: "ចាក់តាម IV Infusion គណនា dose តាម AUC / BSA ក្រោមការណែនាំរបស់វេជ្ជបណ្ឌិតមហារីក។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ការពារពីពន្លឺ។"
        }
      },
      {
        id: "brexel",
        title: "BREXEL",
        genericName: "Docetaxel 80 mg Injection",
        image: "/images/brexel.png",
        origin: "Indonesia",
        badge: "Potent Taxane Chemotherapy",
        categoryTag: "Breast, Lung & Prostate Cancer",
        keySellingPoint: "Docetaxel 80mg ថ្នាំគីមីក្រុម Taxane ប្រសិទ្ធភាពខ្ពស់លើ Breast Cancer, NSCLC, Prostate Cancer, Gastric និង Head & Neck Cancer។",
        framework: {
          who: [
            "អ្នកជំងឺមហារីកសុដន់ (Breast Cancer - Operable, Locally Advanced / Metastatic)",
            "អ្នកជំងឺមហារីកសួត (Non-Small Cell Lung Cancer - NSCLC)",
            "អ្នកជំងឺមហារីកប្រូស្តាត (Hormone-Refractory Prostate Cancer)",
            "អ្នកជំងឺ Gastric Cancer និង Head & Neck Squamous Cell Carcinoma"
          ],
          what: {
            activeIngredient: "Docetaxel",
            dose: "80 mg",
            form: "Concentrate and Solvent for Solution for IV Infusion",
            category: "Taxane Cytotoxic Agent"
          },
          why: [
            { feature: "Potent Microtubule Stabilization", benefit: "ទប់ស្កាត់ការបំបែកកោសិកាមហារីកយ៉ាងខ្លាំងក្លា" },
            { feature: "Multiple Solid Tumor Indications", benefit: "គ្របដណ្តប់លើមហារីកសុដន់ សួត ប្រូស្តាត និងក្រពះ" },
            { feature: "Synergy in Combination Therapy", benefit: "អាចប្រើរួមជាមួយ Platinum, 5-FU ឬ Anthracyclines តាម Protocol" }
          ],
          how: {
            administration: "ចាក់តាម IV Infusion រយៈពេល 1 ម៉ោង រៀងរាល់ 3 សប្តាហ៍ (Q3W)",
            premedication: "ត្រូវប្រើ Oral Corticosteroids (Dexamethasone) ការពារ Fluid Retention & Hypersensitivity",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 25°C ការពារពីពន្លឺ"
          },
          say: "BREXEL (Docetaxel 80mg) ជាថ្នាំគីមី Taxane កម្រិតខ្ពស់ សម្រាប់ព្យាបាលមហារីកសុដន់ មហារីកសួត NSCLC មហារីកប្រូស្តាត និងមហារីកក្រពះ តាម Chemotherapy Regimens។"
        },
        details: {
          description: "Docetaxel 80 mg Concentrate for Solution for IV Infusion (Taxane Cytotoxic Chemotherapy)។",
          benefits: [
            "Taxane cytotoxic ដ៏មានឥទ្ធិពលលើ Solid Tumors ច្រើនប្រភេទ",
            "ព្យាបាល Breast Cancer, NSCLC, Hormone-Refractory Prostate Cancer",
            "ប្រើក្នុង Combination Therapy ជាមួយថ្នាំគីមីផ្សេងទៀតតាម Protocol"
          ],
          ingredients: ["Docetaxel 80 mg"],
          nutritionalInfo: {
            serving: "1 Vial (80 mg)",
            activeIngredient: "Docetaxel 80 mg",
            form: "IV Infusion Concentrate"
          },
          howToUse: "ចាក់ IV Infusion 1 ម៉ោង រៀងរាល់ 3 សប្តាហ៍ ជាមួយ Premedication Corticosteroid។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 25°C ការពារពីពន្លឺ។"
        }
      },
      {
        id: "rexta",
        title: "REXTA",
        genericName: "Oxaliplatin 50 mg & 100 mg Injection",
        image: "/images/rexta.png",
        origin: "Indonesia",
        badge: "3rd Gen Platinum for CRC",
        categoryTag: "Colorectal Cancer (FOLFOX Regimen)",
        keySellingPoint: "Oxaliplatin 50mg & 100mg ថ្នាំគីមី 3rd Gen Platinum ជម្រើសដំបូងសម្រាប់ Colorectal Cancer ប្រើរួមជាមួយ 5-FU & Folinic Acid (FOLFOX Regimen)។",
        framework: {
          who: [
            "អ្នកជំងឺមហារីកពោះវៀនធំ និងរន្ធគូទ (Colorectal Cancer - Stage III Adjuvant & Metastatic)"
          ],
          what: {
            activeIngredient: "Oxaliplatin",
            dose: "50 mg / 10 mg (Vial) & 100 mg / 20 mg (Vial)",
            form: "Powder / Concentrate for IV Infusion",
            classification: "3rd Generation Platinum Chemotherapy"
          },
          why: [
            { feature: "3rd Gen Organoplatinum", benefit: "គ្មាន Cross-resistance ជាមួយ Cisplatin/Carboplatin ក្នុងការប្រឆាំង Colorectal Cancer" },
            { feature: "FOLFOX Regimen Backbone", benefit: "សមាសភាគចំបងក្នុង Combination ជាមួយ 5-Fluorouracil (5-FU) & Folinic Acid" },
            { feature: "Flexible Dosing Options", benefit: "មានទាំងកម្រិត 50mg និង 100mg ងាយស្រួលគណនា dose តាម BSA" }
          ],
          how: {
            dosage: "85 mg/m² IV Infusion រៀងរាល់ 2 សប្តាហ៍ (Q2W) ជាមួយ 5-FU/LV",
            infusionDuration: "2 ទៅ 6 ម៉ោង ក្នុងសេរ៉ូម Dextrose 5%",
            caution: "ហាមលាយជាមួយសេរ៉ូម NaCl (Saline Solutions) ជាដាច់ខាត",
            storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ការពារពីពន្លឺ"
          },
          say: "REXTA (Oxaliplatin 50mg & 100mg) ជាថ្នាំគីមី Platinum ជំនាន់ទី 3 សម្រាប់ព្យាបាល Colorectal Cancer ដោយប្រើរួមជាមួយ 5-FU និង Folinic Acid ក្នុង FOLFOX Regimen។"
        },
        details: {
          description: "Oxaliplatin 50 mg & 100 mg Injection (3rd Generation Platinum Chemotherapy) សម្រាប់ព្យាបាល Colorectal Cancer។",
          benefits: [
            "3rd Generation Platinum សម្រាប់ព្យាបាល Colorectal Cancer ពិសេស",
            " Back-bone នៃ FOLFOX Chemotherapy Regimen ជាមួយ 5-FU & Folinic Acid",
            "ជួយកាត់បន្ថយការលាប់ឡើងវិញនៃ Colorectal Cancer Stage III"
          ],
          ingredients: ["Oxaliplatin 50 mg / 100 mg"],
          nutritionalInfo: {
            serving: "1 Vial (50 mg / 100 mg)",
            activeIngredient: "Oxaliplatin",
            form: "IV Infusion Powder/Solution"
          },
          howToUse: "85 mg/m² IV Infusion រៀងរាល់ 2 សប្តាហ៍ រួមជាមួយ 5-FU/Folinic Acid។ លាយតែក្នុង Dextrose 5%។",
          storage: "រក្សាទុកសីតុណ្ហភាពក្រោម 30°C ការពារពីពន្លឺ។"
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

  brainactFormulations: {
    title: "BRAINACT Formulations & Disease Positioning",
    subtitle: "Tailored Formulations for Stroke Severity and Patient Status",
    matrix: [
      {
        formulation: "Brainact 1000mg Injection",
        indication: "Acute Stroke & Traumatic Brain Injury (TBI)",
        dosage: "1g 2 ដង/ថ្ងៃ (IV/Infusion)",
        duration: "7 ទៅ 10 ថ្ងៃ"
      },
      {
        formulation: "Brainact 1000mg Caplets",
        indication: "Acute Stroke & TBI (Post-Awakening)",
        dosage: "2g / ថ្ងៃ (1 គ្រាប់ 2 ដង/ថ្ងៃ)",
        duration: "រហូតដល់ 6 សប្តាហ៍"
      },
      {
        formulation: "Brainact 500mg Tablet",
        indication: "Post-Stroke Cognitive Impairment / MCI",
        dosage: "1g / ថ្ងៃ (1 គ្រាប់ 2 ដង/ថ្ងៃ)",
        duration: "6 ខែឡើងទៅ"
      },
      {
        formulation: "Brainact O-Dis 500mg (Odt)",
        indication: "Stroke Patients with Dysphagia / Polymedication",
        dosage: "1g / ថ្ងៃ (បៀម 1 គ្រាប់ 2 ដង/ថ្ងៃ)",
        duration: "6 ខែឡើងទៅ"
      }
    ]
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