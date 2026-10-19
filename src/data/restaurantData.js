export const RESTAURANT_INFO = {
  name: "L'Étoile",
  subtitle: "Haute Cuisine & Grand Cru Cellar",
  tagline: "An Unforgettable Culinary Journey",
  stars: "Three Michelin Stars",
  address: "48 Avenue Montaigne, 75008 Paris, France",
  phone: "+33 1 42 68 55 00",
  email: "concierge@letoile-dining.com",
  hours: {
    lunch: "Tuesday – Saturday: 12:00 PM – 2:30 PM",
    dinner: "Tuesday – Sunday: 6:30 PM – 10:30 PM",
    closing: "Monday: Closed"
  },
  dressCode: "Formal & Elegant Attire (Jackets recommended for gentlemen)"
};

export const TASTING_MENUS = [
  {
    id: "signature",
    name: "La Signature",
    tagline: "The quintessential expression of Chef Dubois' vision",
    courses: 7,
    price: 195,
    winePairingPrice: 120,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    description: "A symphony of oceanic jewels, dry-aged heritage beef, and rare Périgord black truffles.",
    highlights: ["A5 Miyazaki Wagyu", "Brittany Blue Lobster", "Aquitaine Oscietra Caviar", "Grand Cru Valrhona Cacao"]
  },
  {
    id: "experience",
    name: "L'Expérience",
    tagline: "The prestige 9-course multisensory voyage",
    courses: 9,
    price: 260,
    winePairingPrice: 165,
    popular: true,
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1000&q=80",
    description: "Our crowning gastronomical composition. Rare hyper-seasonal ingredients paired with legendary vintages.",
    highlights: ["King Crab & Champagne Sabayon", "Roasted Squab with Morel Tart", "30-Day Dry-Aged Veal", "Golden Soufflé"]
  },
  {
    id: "voyage-vegan",
    name: "Le Voyage Végétal",
    tagline: "Artisanal biodynamic botanical mastery",
    courses: 6,
    price: 170,
    winePairingPrice: 95,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80",
    description: "Hand-harvested heirloom produce from our Loire Valley bio-garden, wild foraged herbs, and fermented delicacies.",
    highlights: ["Heirloom Beet Tartare", "Glazed Lion's Mane Steak", "Saffron Sunchoke Velouté", "Smoked Fig Ganache"]
  }
];

export const A_LA_CARTE_MENU = [
  // Starters
  {
    id: "starter-1",
    category: "starters",
    name: "Oscietra Royal Caviar & Langoustine",
    price: 58,
    description: "Pan-seared Scottish langoustine, cauliflower mousseline, crispy shallots, Oscietra caviar pearls.",
    tags: ["Signature", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "starter-2",
    category: "starters",
    name: "Foie Gras Poêlé au Sauternes",
    price: 46,
    description: "Pan-roasted duck foie gras, caramelized quince, spiced brioche emulsion, Sauternes reduction.",
    tags: ["Chef Special"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "starter-3",
    category: "starters",
    name: "Carpaccio de Saint-Jacques",
    price: 42,
    description: "Thinly sliced Normandy sea scallops, finger lime, pickled sea fennel, black truffle vinaigrette.",
    tags: ["Gluten-Free", "Raw"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "starter-4",
    category: "starters",
    name: "Wild Foraged Forest Mushroom Velouté",
    price: 34,
    description: "Chanterelles, trompettes de la mort, slow-poached organic egg yolk, hazelnut foam.",
    tags: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
  },

  // Mains
  {
    id: "main-1",
    category: "mains",
    name: "A5 Miyazaki Wagyu Rossini",
    price: 98,
    description: "Charcoal-seared Japanese tenderloin, seared foie gras, shaved winter black truffles, Pommes Dauphine.",
    tags: ["Signature"],
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "main-2",
    category: "mains",
    name: "Brittany Turbot en Croûte",
    price: 78,
    description: "Wild-caught French turbot baked in puff pastry, baby braised leeks, smoked bone marrow champagne reduction.",
    tags: ["House Favorite"],
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "main-3",
    category: "mains",
    name: "Canard de Challans Rôti",
    price: 72,
    description: "Honey-lavender glazed roasted duck breast, beetroot variation, confit leg tartlet, spiced jus.",
    tags: ["Gluten-Free"],
    image: "https://images.unsplash.com/photo-1514944298350-a92576b5d038?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "main-4",
    category: "mains",
    name: "Roasted Lion's Mane & Truffled Risotto",
    price: 54,
    description: "Acquerello aged carnaroli rice, 24-month Parmigiano Reggiano, butter-basted lion's mane mushroom.",
    tags: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80"
  },

  // Desserts
  {
    id: "dessert-1",
    category: "desserts",
    name: "Le Dôme Noir Valrhona",
    price: 28,
    description: "70% Guanaja dark chocolate sphere, molten salted caramel, smoked cocoa nib crisp, Madagascar vanilla bean gelato.",
    tags: ["Signature"],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dessert-2",
    category: "desserts",
    name: "Mille-Feuille Croustillant",
    price: 24,
    description: "Caramelized puff pastry layers, Tahitian vanilla diplomat cream, hazelnut praline infusion.",
    tags: ["Classic"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dessert-3",
    category: "desserts",
    name: "Agrumes en Surprise",
    price: 22,
    description: "Kalamansi lime sorbet, bergamot curd, poached blood orange, crisp meringue petals, shiso snow.",
    tags: ["Gluten-Free", "Vegetarian"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
  },

  // Cocktails & Wine
  {
    id: "drink-1",
    category: "drinks",
    name: "Midnight in Paris (Signature)",
    price: 26,
    description: "Hennessy VSOP, truffle-infused dark vermouth, Bénédictine, clarified blackberry cordial, gold dust.",
    tags: ["Signature Cocktail"],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "drink-2",
    category: "drinks",
    name: "Fleur Impériale",
    price: 24,
    description: "Kew Organic Gin, elderflower liqueur, yuzu juice, Dom Pérignon vintage champagne float, edible viola.",
    tags: ["Champagne Cocktail"],
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "drink-3",
    category: "drinks",
    name: "Domaine de la Romanée-Conti (Glass)",
    price: 85,
    description: "Grand Cru burgundy, delicate red berries, forest floor, silky tannins, extraordinary length.",
    tags: ["Grand Cru"],
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
  }
];

export const CHEF_PROFILE = {
  name: "Antoine Dubois",
  title: "Executive Chef & Co-Owner",
  badge: "3-Star Michelin Honoree",
  bio: "Trained under legendary masters in Paris and Tokyo, Chef Antoine Dubois orchestrates classical French culinary heritage with avant-garde lightness. Every plate is approached as an architectural canvas celebrating seasonal provenance and intense flavor clarity.",
  quote: "Haute cuisine is not merely about rarity—it is about respecting nature's seasonal pulse and crafting a memory that lingers long after the final course.",
  image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
  awards: [
    "Michelin Guide: Three Stars (2020 – 2026)",
    "World's 50 Best: Top 10 Gastronomic Destinations",
    "Gault & Millau: Chef of the Year (2023)"
  ]
};

export const REVIEWS = [
  {
    quote: "A triumphant masterclass in contemporary French gastronomy. Every course is calculated perfection.",
    author: "Michelin Guide Inspector",
    role: "Official Evaluation",
    stars: 5
  },
  {
    quote: "Dubois' tasting experience isn't merely dinner; it is an unforgettable operatic spectacle for the senses.",
    author: "Julian Vance",
    role: "Le Figaro Dining Critic",
    stars: 5
  },
  {
    quote: "The wine cellar curation and tableside hospitality set a new benchmark for global fine dining.",
    author: "Elena Rostova",
    role: "International Sommelier Guild",
    stars: 5
  }
];
