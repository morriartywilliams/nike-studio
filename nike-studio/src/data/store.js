/* ─── Image URLs ─── */
export const IMG = {
  af1:    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_default%2F3a9324a6-b018-4120-91ff-7543dacab512%2FAIR%2BFORCE%2B1%2BLUXE.png&f=1&nofb=1&ipt=6626adf552b9d3796b717b2cd76253b02e6caae09109dab2997ee1cc2bd9a3c0",
  af1s:   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Fw_1280%2Cq_auto%2Cf_auto%2Fc37114ba-048e-4a3e-a50d-bbee4c772ae3%2Fair-force-1-low-protro-soft-yellow-hv9408-700-release-date.jpg&f=1&nofb=1&ipt=e7b4f8b558a28befb7c9e46f5188f7e9955a48b62553b2766e6e67af02e00ead",
  aj1:    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.goat.com%2Ftransform%2Fv1%2Fattachments%2Fproduct_template_pictures%2Fimages%2F037%2F568%2F846%2Foriginal%2F317820_114.png.png%3Faction%3Dcrop%26width%3D750&f=1&nofb=1&ipt=0a229aaccdb1f09c5ae7547ee15f1cbad511ae6c44ac09fcb58c8cdbf7d8d575",
  aj1mid: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Ffull%2F115-1157788_jordan-1-retro-high-air-jordan-1-bred.png&f=1&nofb=1&ipt=90ca24061da656df24e0e1a28a30c3e90b60f33be66046e612edfb9260b11779",
  court:  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gq-magazine.co.uk%2Fphotos%2F6703cfecfab3f1d8d06f39be%2Fmaster%2Fw_1600%252Cc_limit%2FImage%252520GQ%2525202.jpg&f=1&nofb=1&ipt=83312ae535e6fadb56414c5baf2500530a540ae66f7f5a74446b8008890eca9d",
  peg:    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreepngimg.com%2Fthumb%2Fshoes%2F28530-3-nike-shoes-transparent.png&f=1&nofb=1&ipt=b3d92945d8402d6982665ad4907e1008484150fcab90c7d482ccae2ff0d1a548",
  metcon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fauthentic-shoes.com%2Fwp-content%2Fuploads%2F2024%2F12%2FGiay-Nike-Free-Metcon-6-TB-Pro-Green-HM3754-300-3.png&f=1&nofb=1&ipt=cc8cbbbea72de1813d3eb2a50799bc34b4ea077f24cc4433da194c4d44ec7629",
  dunk:   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_PDP_1728_v1%2Ff_auto%2Cq_auto%3Aeco%2F44ab6f86-7091-44a4-a939-6ff1ef34d818%2FNIKE%2BDUNK%2BLOW%2BRETRO%2BSE.png&f=1&nofb=1&ipt=b18a3961c1eb6564b8e634a006bc54d332111f1a38186237fc2728f928a5563e",
};

/* ─── Static store content ─── */
export const STORE = {
  hero: {
    eyebrow: "Premium Nike Footwear",
    title: "سلعة و سومة",
    description:
      "Built to feel modern, fast, and easy to browse. Explore everyday staples, statement Jordans, and technical pairs with a polished shopping flow.",
  },

  stats: [
    { value: "120+", label: "pairs curated this season" },
    { value: "48h",  label: "average delivery dispatch" },
    { value: "4.9★", label: "member satisfaction" },
  ],

  marquee: [
    "Fresh drops weekly",
    "Air Force essentials",
    "Jordan street icons",
    "Training & running picks",
    "Fast checkout",
    "Free shipping over $250",
    "Premium curation",
    "New palettes in stock",
  ],

  collections: [
    {
      name: "Air Force",
      label: "Everyday icon",
      description:
        "Sharp leather builds, balanced cushioning, and the cleanest way to anchor daily fits.",
      accent: "Neutral tones with crisp cobalt accents.",
      image: IMG.af1,
    },
    {
      name: "Jordan",
      label: "Court heritage",
      description:
        "Bold shape language, elevated collars, and strong color stories that command attention.",
      accent: "Black, varsity red, and cream-led palettes.",
      image: IMG.aj1,
    },
    {
      name: "Performance",
      label: "Built to move",
      description:
        "Responsive runners and training silhouettes tuned for comfort, traction, and pace.",
      accent: "Energy colors, engineered mesh, stable platforms.",
      image: IMG.peg,
    },
  ],

  services: [
    {
      title: "Fast, clean shopping flow",
      description:
        "Quick filters, direct cart actions, and a lightweight experience that stays easy on desktop and mobile.",
    },
    {
      title: "Curated sneaker mix",
      description:
        "A focused catalog around Air Force, Jordan, lifestyle staples, and technical pairs—no clutter.",
    },
    {
      title: "Premium confidence",
      description:
        "Free shipping on larger baskets, easy returns, and secure checkout messaging built into the experience.",
    },
  ],

  testimonials: [
    {
      quote:
        "The Air Force edit feels premium and easy to shop. It looks like a real flagship concept, not a basic template.",
      author: "Maya R.",
      role: "Streetwear buyer",
    },
    {
      quote:
        "The Jordan section is strong, fast, and polished. The product cards and cart flow feel smooth on mobile too.",
      author: "Daniel T.",
      role: "Sneaker collector",
    },
  ],

  products: [
    {
      id: "air-force-1-luxe",
      name: "Air Force 1 Luxe",
      collection: "Air Force",
      category: "Lifestyle",
      tagline: "Premium leather, clean stance, everyday comfort.",
      description:
        "A polished update to the icon with layered leather panels, cushioned midsole, and a crisp outsole profile built for daily rotation.",
      image: IMG.af1,
      price: 145,
      rating: 4.9,
      badge: "Best Seller",
      featuredRank: 1,
      releaseIndex: 8,
      colors: ["#f3efe5", "#9eb4ff", "#171717"],
      sizes: [7, 8, 9, 10, 11, 12, 13],
    },
    {
      id: "air-force-studio-low",
      name: "Air Force Studio Low",
      collection: "Air Force",
      category: "Lifestyle",
      tagline: "Streamlined shape with tonal luxury detailing.",
      description:
        "A softer neutral expression with a low-profile finish, tuned for easy daily wear and refined styling.",
      image: IMG.af1s,
      price: 132,
      rating: 4.8,
      badge: "New Palette",
      featuredRank: 2,
      releaseIndex: 7,
      colors: ["#f7f4ec", "#61775d", "#d5c18d"],
      sizes: [7, 8, 9, 10, 11, 12],
    },
    {
      id: "jordan-elevate-se",
      name: "Air Jordan Elevate SE",
      collection: "Jordan",
      category: "Court Heritage",
      tagline: "High-top energy with sharp contrast blocking.",
      description:
        "A confident Jordan build with elevated collar support, premium overlays, and assertive traction underfoot.",
      image: IMG.aj1,
      price: 188,
      rating: 5.0,
      badge: "Hot Drop",
      featuredRank: 3,
      releaseIndex: 9,
      colors: ["#171717", "#c63f36", "#efe2c8"],
      sizes: [8, 9, 10, 11, 12, 13],
    },
    {
      id: "jordan-flight-court",
      name: "Jordan Flight Court",
      collection: "Jordan",
      category: "Streetwear",
      tagline: "Classic Jordan DNA with a more grounded silhouette.",
      description:
        "Designed for everyday city wear with supportive padding, secure heel structure, and a retro basketball-inspired profile.",
      image: IMG.aj1mid,
      price: 172,
      rating: 4.8,
      badge: "Editors' Pick",
      featuredRank: 4,
      releaseIndex: 6,
      colors: ["#342319", "#d6a85f", "#f1ede4"],
      sizes: [7, 8, 9, 10, 11, 12, 13],
    },
    {
      id: "nike-court-vision-alta",
      name: "Nike Court Vision Alta",
      collection: "Lifestyle",
      category: "Lifestyle",
      tagline: "Soft lines, lifted sole, clean off-court presence.",
      description:
        "A minimal lifestyle pair with elevated outsole styling, plush lining, and a refined look that works beyond the gym.",
      image: IMG.court,
      price: 124,
      rating: 4.7,
      badge: "Daily Wear",
      featuredRank: 5,
      releaseIndex: 5,
      colors: ["#faf6ed", "#627f63", "#191919"],
      sizes: [6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: "nike-zoom-pulse-edge",
      name: "Nike Zoom Pulse Edge",
      collection: "Performance",
      category: "Running",
      tagline: "Responsive ride with fast visual energy.",
      description:
        "A light breathable runner with sculpted foam system, quick transition geometry, and a technical finish for pace days.",
      image: IMG.peg,
      price: 164,
      rating: 4.9,
      badge: "Speed Pick",
      featuredRank: 6,
      releaseIndex: 10,
      colors: ["#19264d", "#44a6ff", "#f7d34b"],
      sizes: [7, 8, 9, 10, 11, 12],
    },
    {
      id: "nike-metcon-pro",
      name: "Nike Metcon Pro",
      collection: "Performance",
      category: "Training",
      tagline: "Stable platform for strength sessions and circuits.",
      description:
        "A gym-focused silhouette with firm heel support, durable wraparound grip, and a grounded feel under heavier work.",
      image: IMG.metcon,
      price: 156,
      rating: 4.8,
      badge: "Training",
      featuredRank: 7,
      releaseIndex: 4,
      colors: ["#1d2129", "#f08f46", "#8aa3b5"],
      sizes: [8, 9, 10, 11, 12, 13],
    },
    {
      id: "nike-dunk-retro-shift",
      name: "Nike Dunk Retro Shift",
      collection: "Lifestyle",
      category: "Lifestyle",
      tagline: "Warm retro tones with versatile all-day wearability.",
      description:
        "An easy crossover pair with heritage paneling, reliable cupsole base, and relaxed palette for everyday outfits.",
      image: IMG.dunk,
      price: 138,
      rating: 4.7,
      badge: "Retro",
      featuredRank: 8,
      releaseIndex: 3,
      colors: ["#7c6247", "#e3c9a1", "#1a1a1a"],
      sizes: [6, 7, 8, 9, 10, 11],
    },
  ],
};

/* ─── Cart persistence key ─── */
export const CART_KEY = "nike-studio-cart-v1";
