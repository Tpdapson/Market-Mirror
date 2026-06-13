// Market Mirror — Central CMS Data Store
const MM_DATA = {

  markets: {
    balogun: {
      id: 'balogun', name: 'Balogun Market', shortName: 'Balogun', initials: 'BM',
      area: 'Lagos Island, Lagos State', established: '1920s',
      heroImage: 'assets/hero-balogun.jpg',
      vendors: '1,240', products: '48k', rating: '4.7', reviews: '8,200',
      hours: '8:00 AM – 7:00 PM', isOpen: true, closingTime: '7:00 PM',
      delivery: 'Same-day across Lagos', minOrder: '₦1,500 · Free above ₦20k',
      specialty: 'Fabrics, Fashion & Wholesale',
      defaultCategory: 'fabrics',
      tags: ['Fashion', 'Fabric', 'Wholesale'],
      categories: [
        { id: 'fabrics', label: 'Fabrics' },
        { id: 'ready-to-wear', label: 'Ready-to-Wear' },
        { id: 'accessories', label: 'Accessories' },
        { id: 'shoes-bags', label: 'Shoes & Bags' },
        { id: 'wholesale', label: 'Wholesale' },
      ],
      about: {
        title: 'A Lagos landmark since the 1920s',
        p1: 'Balogun Market is one of West Africa\'s largest open-air markets, located in the heart of Lagos Island. Renowned for its incredible selection of fabrics — particularly Ankara, Lace, Aso-oke, and imported textiles — it draws buyers from across Nigeria and beyond.',
        p2: 'The market spans dozens of rows and thousands of stalls, each specialising in a specific category. Finding the best deal used to require hours of walking. Market Mirror gives you the entire market in a single, searchable platform.',
        facts: [
          { num: '100+', title: 'Years of trading history', desc: 'One of Lagos\'s oldest and most storied markets, established in the early twentieth century.' },
          { num: '50k', title: 'Daily footfall (physical)', desc: 'On peak days, Balogun draws over 50,000 physical shoppers — now accessible digitally.' },
          { num: '12+', title: 'Distinct product rows', desc: 'From lace to leather, each row is a specialist zone for specific categories of goods.' }
        ]
      }
    },

    alaba: {
      id: 'alaba', name: 'Alaba International', shortName: 'Alaba', initials: 'AI',
      area: 'Ojo, Lagos State', established: '1970s',
      heroImage: 'assets/Boss Table.jpeg',
      vendors: '870', products: '32k', rating: '4.5', reviews: '6,100',
      hours: '8:00 AM – 6:00 PM', isOpen: true, closingTime: '6:00 PM',
      delivery: 'Lagos-wide, 2–3 days', minOrder: '₦2,000 · Free above ₦50k',
      specialty: 'Electronics, Gadgets & Office Furniture',
      defaultCategory: 'electronics',
      tags: ['Electronics', 'Gadgets', 'Appliances', 'Office Furniture'],
      categories: [
        { id: 'electronics', label: 'Electronics' },
        { id: 'gadgets', label: 'Gadgets' },
        { id: 'appliances', label: 'Appliances' },
        { id: 'phones', label: 'Phones' },
        { id: 'furniture', label: 'Office Furniture' },
        { id: 'accessories', label: 'Accessories' },
      ],
      about: {
        title: 'West Africa\'s largest electronics hub',
        p1: 'Alaba International Market is the undisputed electronics capital of West Africa, located in Ojo, Lagos. From the latest smartphones and laptops to heavy domestic appliances and industrial equipment, Alaba stocks virtually every electronic product imaginable.',
        p2: 'The market operates on a wholesale-first model, attracting traders from across Nigeria, Ghana, Benin, and beyond. Market Mirror gives you direct access to Alaba\'s best dealers without the need to haggle in person.',
        facts: [
          { num: '50+', title: 'Years of electronics trading', desc: 'Established in the 1970s as Lagos\'s primary electronics hub, drawing traders from across West Africa.' },
          { num: '870', title: 'Active vendors online', desc: 'Hundreds of verified electronics dealers now available digitally through Market Mirror.' },
          { num: '32k', title: 'Products listed', desc: 'From components to complete systems, Alaba\'s full inventory is now searchable and shoppable online.' }
        ]
      }
    },

    'computer-village': {
      id: 'computer-village', name: 'Computer Village', shortName: 'Computer Village', initials: 'CV',
      area: 'Ikeja, Lagos State', established: '1990s',
      heroImage: 'assets/cv-macbook-air-blue.jpeg',
      vendors: '640', products: '24k', rating: '4.6', reviews: '5,400',
      hours: '9:00 AM – 7:00 PM', isOpen: true, closingTime: '7:00 PM',
      delivery: 'Same-day Lagos Island & Mainland', minOrder: '₦1,000',
      specialty: 'Computers, Phones & Accessories',
      defaultCategory: 'computers',
      tags: ['Computers', 'Phones', 'Accessories'],
      categories: [
        { id: 'computers', label: 'Computers' },
        { id: 'phones', label: 'Phones' },
        { id: 'accessories', label: 'Accessories' },
        { id: 'gaming', label: 'Gaming' },
        { id: 'repairs', label: 'Repairs' },
      ],
      about: {
        title: 'Ikeja\'s tech heartbeat since the 90s',
        p1: 'Computer Village in Ikeja is Nigeria\'s most famous technology market — a dense, vibrant hub where thousands of vendors sell laptops, desktops, smartphones, printers, and every kind of tech accessory. It\'s the go-to destination for tech buyers across Lagos.',
        p2: 'Whether you\'re looking for a new MacBook, an affordable Android phone, or a hard-to-find USB-C cable, Computer Village has it. Market Mirror makes this vast inventory searchable and shippable across Lagos.',
        facts: [
          { num: '30+', title: 'Years as Lagos tech hub', desc: 'Computer Village has been Ikeja\'s technology heartbeat since the early 1990s.' },
          { num: '640', title: 'Verified tech vendors', desc: 'From authorised dealers to specialist repair shops — all now searchable on Market Mirror.' },
          { num: '24k', title: 'Tech products listed', desc: 'Laptops, phones, accessories, and more — all available for delivery across Lagos.' }
        ]
      }
    },

    tejuosho: {
      id: 'tejuosho', name: 'Tejuosho Market', shortName: 'Tejuosho', initials: 'TM',
      area: 'Yaba, Lagos State', established: '1960s',
      heroImage: 'assets/hero-tejuosho.jpg',
      vendors: '510', products: '19k', rating: '4.4', reviews: '4,200',
      hours: '8:00 AM – 7:00 PM', isOpen: true, closingTime: '7:00 PM',
      delivery: 'Same-day across Lagos', minOrder: '₦500 · Free above ₦15k',
      specialty: 'Clothing, Shoes & Bags',
      defaultCategory: 'clothing',
      tags: ['Clothing', 'Shoes', 'Bags'],
      categories: [
        { id: 'clothing', label: 'Clothing' },
        { id: 'shoes', label: 'Shoes' },
        { id: 'bags', label: 'Bags' },
        { id: 'kids-wear', label: 'Kids Wear' },
        { id: 'jewelry', label: 'Jewellery' },
      ],
      about: {
        title: 'Yaba\'s fashion market for all budgets',
        p1: 'Tejuosho Market in Yaba is one of Lagos\'s most beloved fashion destinations. From trendy streetwear and imported shoes to locally crafted bags and children\'s clothing, Tejuosho caters to every style and budget.',
        p2: 'Recently renovated and modernised, Tejuosho is home to hundreds of fashion-forward vendors who keep up with current trends. Market Mirror brings the full Tejuosho catalogue to your fingertips.',
        facts: [
          { num: '60+', title: 'Years of fashion trading', desc: 'A Yaba landmark since the 1960s, Tejuosho has dressed generations of Lagosians.' },
          { num: '510', title: 'Fashion vendors online', desc: 'Browse hundreds of clothing, shoes, and accessories vendors now on Market Mirror.' },
          { num: '19k+', title: 'Fashion items listed', desc: 'From kids\' wear to elegant evening gowns — Tejuosho\'s inventory is fully searchable.' }
        ]
      }
    },

    'mile-12': {
      id: 'mile-12', name: 'Mile 12 Market', shortName: 'Mile 12', initials: 'M12',
      area: 'Kosofe, Lagos State', established: '1980s',
      heroImage: 'assets/hero-mile-12.jpg',
      vendors: '390', products: '8.5k', rating: '4.3', reviews: '3,100',
      hours: '5:00 AM – 6:00 PM', isOpen: true, closingTime: '6:00 PM',
      delivery: 'Same-day morning delivery', minOrder: '₦500',
      specialty: 'Fresh Produce & Groceries',
      defaultCategory: 'produce',
      tags: ['Food', 'Produce', 'Groceries'],
      categories: [
        { id: 'produce', label: 'Fresh Produce' },
        { id: 'grains', label: 'Grains & Cereals' },
        { id: 'spices', label: 'Spices & Condiments' },
        { id: 'seafood', label: 'Seafood' },
        { id: 'groceries', label: 'Packaged Groceries' },
      ],
      about: {
        title: 'Lagos\'s premier wholesale food market',
        p1: 'Mile 12 Market is the largest wholesale food market in Lagos, serving as the primary distribution point for fresh produce, grains, and foodstuffs across the city and beyond. Farmers from across Nigeria bring their harvests directly to Mile 12.',
        p2: 'From yam and cassava to fresh tomatoes, peppers, and leafy vegetables, Mile 12 is where Lagos feeds itself. Market Mirror brings this freshness online — with morning delivery options available across the city.',
        facts: [
          { num: '5AM', title: 'Opens at the crack of dawn', desc: 'Mile 12 starts trading before sunrise, with the freshest produce arriving from upcountry farms overnight.' },
          { num: '390', title: 'Food vendors online', desc: 'Wholesale and retail food vendors now reachable through Market Mirror for doorstep delivery.' },
          { num: '1M+', title: 'Meals supplied daily', desc: 'Mile 12 directly supplies ingredients for over a million meals served in Lagos every day.' }
        ]
      }
    },

    'trade-fair': {
      id: 'trade-fair', name: 'Trade Fair Complex', shortName: 'Trade Fair', initials: 'TF',
      area: 'Badagry Expressway, Lagos', established: '1970s',
      heroImage: 'assets/Elevate Your Perfume Packaging with Premium Coatings and Printing.jpeg',
      vendors: '680', products: '31k', rating: '4.5', reviews: '4,800',
      hours: '8:00 AM – 6:00 PM', isOpen: true, closingTime: '6:00 PM',
      delivery: 'Lagos-wide · Same-day available', minOrder: '₦3,000 · Free above ₦30k',
      specialty: 'Women\'s Fashion Accessories & Wholesale',
      defaultCategory: 'jewelry',
      tags: ['Jewelry', 'Bags', 'Wholesale'],
      categories: [
        { id: 'jewelry', label: 'Jewelry & Watches' },
        { id: 'bags', label: 'Bags & Handbags' },
        { id: 'wigs-hair', label: 'Wigs & Hair' },
        { id: 'beauty', label: 'Beauty & Skincare' },
        { id: 'shoes', label: 'Shoes & Heels' },
      ],
      about: {
        title: 'Lagos\'s wholesale fashion accessories capital',
        p1: 'Trade Fair Complex on the Badagry Expressway is Lagos\'s premier destination for wholesale women\'s fashion accessories. From dazzling gold-plated jewellery and luxury-inspired handbags to human hair wigs, body creams, and designer heels — Trade Fair has it all under one expansive roof.',
        p2: 'Hundreds of wholesale vendors supply boutiques, fashion retailers, and individual buyers from across Nigeria and West Africa. Whether you\'re restocking a shop or treating yourself, Trade Fair\'s unbeatable wholesale prices and enormous variety make it the smartest place to buy.',
        facts: [
          { num: '680+', title: 'Fashion & accessories vendors', desc: 'Jewellery dealers, bag importers, wig specialists, and beauty wholesalers — all in one complex.' },
          { num: '31k', title: 'Accessories in stock', desc: 'Gold chains, designer bags, lace wigs, skincare sets, platform heels and more — all available for Lagos delivery.' },
          { num: '50+', title: 'Years of wholesale trading', desc: 'Trade Fair has been the backbone of Lagos\'s fashion retail supply chain since the 1970s.' }
        ]
      }
    },

    idumota: {
      id: 'idumota', name: 'Idumota Market', shortName: 'Idumota', initials: 'IM',
      area: 'Lagos Island, Lagos State', established: '1900s',
      heroImage: 'assets/hero-idumota.jpg',
      vendors: '460', products: '15k', rating: '4.3', reviews: '2,800',
      hours: '8:00 AM – 6:00 PM', isOpen: true, closingTime: '6:00 PM',
      delivery: 'Same-day across Lagos Island', minOrder: '₦500',
      specialty: 'Stationery, Books & Gifts',
      defaultCategory: 'stationery',
      tags: ['Stationery', 'Books', 'Toys'],
      categories: [
        { id: 'stationery', label: 'Stationery' },
        { id: 'books', label: 'Books' },
        { id: 'toys', label: 'Toys' },
        { id: 'gifts', label: 'Gift Items' },
        { id: 'school', label: 'School Supplies' },
      ],
      about: {
        title: 'The island\'s oldest trading post',
        p1: 'Idumota Market is one of the oldest markets on Lagos Island, with roots going back over a century. Today it\'s best known for stationery, books, gifts, toys, and school supplies — making it especially popular with parents and students.',
        p2: 'Idumota also hosts vendors dealing in party supplies, electronics accessories, and general household goods. Market Mirror brings its eclectic, affordable inventory online for Lagos-wide delivery.',
        facts: [
          { num: '100+', title: 'Years on Lagos Island', desc: 'Idumota has been a trading hub since Lagos Island was the commercial heart of colonial Nigeria.' },
          { num: '460', title: 'Vendors now online', desc: 'Stationery shops, booksellers, and gift vendors — all discoverable through Market Mirror.' },
          { num: '15k', title: 'Products available', desc: 'From school notebooks to premium gifts — Idumota\'s broad inventory is now fully searchable.' }
        ]
      }
    },

    oshodi: {
      id: 'oshodi', name: 'Oshodi Market', shortName: 'Oshodi', initials: 'OM',
      area: 'Oshodi-Isale, Lagos State', established: '1970s',
      heroImage: 'assets/hero-oshodi.jpg',
      vendors: '980', products: '38k', rating: '4.4', reviews: '7,200',
      hours: '7:00 AM – 8:00 PM', isOpen: true, closingTime: '8:00 PM',
      delivery: 'Same-day Lagos Mainland', minOrder: '₦500',
      specialty: 'Fashion, Streetwear & Mixed Goods',
      defaultCategory: 'fashion',
      tags: ['Fashion', 'Street', 'Mixed'],
      categories: [
        { id: 'fashion', label: 'Fashion' },
        { id: 'shoes', label: 'Shoes' },
        { id: 'bags', label: 'Bags' },
        { id: 'streetwear', label: 'Streetwear' },
        { id: 'accessories', label: 'Accessories' },
      ],
      about: {
        title: 'The heartbeat of Lagos Mainland fashion',
        p1: 'Oshodi Market is the beating heart of Lagos Mainland fashion culture. One of the largest and most energetic markets in the city, Oshodi is famous for its wide variety of clothing, shoes, bags, and accessories at highly competitive prices.',
        p2: 'The market\'s proximity to the Oshodi transport hub makes it accessible from every part of Lagos. Market Mirror brings Oshodi\'s buzzing energy and unbeatable prices to your screen — no traffic required.',
        facts: [
          { num: '50+', title: 'Years as mainland fashion hub', desc: 'Oshodi has clothed Lagos for generations — always ahead of trends and always affordable.' },
          { num: '980', title: 'Fashion vendors online', desc: 'Lagos\'s largest fashion vendor network, now shoppable on Market Mirror.' },
          { num: '38k', title: 'Style items listed', desc: 'Fashion, shoes, bags, and accessories — Oshodi\'s full catalogue now accessible online.' }
        ]
      }
    }
  },

  // ---------------------------------------------------------------------------
  // STALLS  (4–6 per market)
  // ---------------------------------------------------------------------------
  stalls: {
    balogun: [
      { avatar: '🧵', badge: 'Top Seller', name: 'Mama Titi Fabrics', owner: 'Titilayo Adeyemi', location: 'Row 4, Stall 12', tags: ['Ankara', 'Lace', 'Aso-oke', 'Wholesale'], rating: 4.9, reviews: 1204, products: 340 },
      { avatar: '👜', badge: 'Verified', name: 'Lagos Leather Co.', owner: 'Emeka Okafor', location: 'Row 7, Stall 3', tags: ['Bags', 'Shoes', 'Belts', 'Custom'], rating: 4.6, reviews: 872, products: 124 },
      { avatar: '🧣', badge: 'Top Seller', name: 'Aso Oke Palace', owner: 'Funmilayo Bello', location: 'Row 2, Stall 8', tags: ['Aso-oke', 'Gele', 'Wedding'], rating: 4.8, reviews: 643, products: 89 },
      { avatar: '🎨', badge: 'Verified', name: 'Adire & Tie-dye Hub', owner: 'Abiodun Salau', location: 'Row 9, Stall 6', tags: ['Adire', 'Tie-dye', 'Batik'], rating: 4.5, reviews: 511, products: 206 },
      { avatar: '👑', badge: 'Verified', name: 'Crown Headwear', owner: 'Ngozi Chukwu', location: 'Row 5, Stall 15', tags: ['Gele', 'Caps', 'Headwraps'], rating: 4.4, reviews: 389, products: 78 },
      { avatar: '✂️', badge: 'New', name: "Tailor's Corner", owner: 'Ibrahim Musa', location: 'Row 11, Stall 2', tags: ['Bespoke', 'Alterations', 'Agbada'], rating: 5.0, reviews: 42, products: 31 },
    ],
    alaba: [
      { avatar: '📺', badge: 'Top Seller', name: 'Mega Electronics', owner: 'Chidi Okonkwo', location: 'Block A, Shop 5', tags: ['TVs', 'Smart TVs', 'Appliances', 'Sound Systems'], rating: 4.8, reviews: 2341, products: 520 },
      { avatar: '📱', badge: 'Verified', name: 'PhoneWorld Lagos', owner: 'Kunle Adesanya', location: 'Block B, Shop 14', tags: ['Phones', 'Tablets', 'Accessories'], rating: 4.7, reviews: 1876, products: 310 },
      { avatar: '💻', badge: 'Top Seller', name: 'Digital Hub Alaba', owner: 'Seun Badmus', location: 'Block C, Shop 2', tags: ['Laptops', 'Desktops', 'Printers'], rating: 4.6, reviews: 1102, products: 245 },
      { avatar: '🪑', badge: 'New', name: 'FurniTech Alaba', owner: 'Chukwuma Eze', location: 'Block E, Shop 3', tags: ['Office Chairs', 'Executive Tables', 'Furniture'], rating: 4.7, reviews: 312, products: 98 },
      { avatar: '🎮', badge: 'Verified', name: 'GameZone Nigeria', owner: 'Tunde Adeola', location: 'Block D, Shop 8', tags: ['Gaming', 'Consoles', 'Accessories'], rating: 4.5, reviews: 789, products: 180 },
      { avatar: '🔌', badge: 'Verified', name: 'PowerTech Supplies', owner: 'Fola Adewale', location: 'Block A, Shop 22', tags: ['Inverters', 'Cables', 'Solar'], rating: 4.4, reviews: 634, products: 156 },
    ],
    'computer-village': [
      { avatar: '💻', badge: 'Top Seller', name: 'LaptopKing CV', owner: 'Bayo Afolabi', location: 'Shop 12, Row A', tags: ['Laptops', 'MacBooks', 'Gaming'], rating: 4.9, reviews: 1854, products: 290 },
      { avatar: '📱', badge: 'Verified', name: 'SmartPhone Centre', owner: 'Dipo Obaseki', location: 'Shop 3, Row B', tags: ['iPhones', 'Samsung', 'Tecno'], rating: 4.7, reviews: 1340, products: 210 },
      { avatar: '🖥️', badge: 'Verified', name: 'DesktopWorld Ikeja', owner: 'Adaeze Eze', location: 'Shop 7, Row C', tags: ['Desktops', 'Monitors', 'Parts'], rating: 4.5, reviews: 892, products: 175 },
      { avatar: '⌨️', badge: 'New', name: 'AccessoryPlus', owner: 'Mide Akins', location: 'Shop 19, Row A', tags: ['Keyboards', 'Mice', 'Cables'], rating: 4.8, reviews: 234, products: 480 },
    ],
    tejuosho: [
      { avatar: '👗', badge: 'Top Seller', name: 'Lagos Fashion Hub', owner: 'Blessing Eze', location: 'Row 2, Stall 4', tags: ['Dresses', 'Suits', 'Ankara'], rating: 4.8, reviews: 1620, products: 380 },
      { avatar: '👠', badge: 'Verified', name: 'Sole Republic', owner: 'Toyin Oladipo', location: 'Row 5, Stall 11', tags: ['Heels', 'Sneakers', 'Sandals'], rating: 4.6, reviews: 980, products: 240 },
      { avatar: '👜', badge: 'Verified', name: 'Bag Avenue', owner: 'Nkechi Udo', location: 'Row 8, Stall 3', tags: ['Handbags', 'Clutches', 'Backpacks'], rating: 4.5, reviews: 742, products: 195 },
      { avatar: '👧', badge: 'Verified', name: 'Tiny Threads', owner: 'Amaka Obi', location: 'Row 11, Stall 7', tags: ['Kids Wear', 'Baby Clothes', 'School'], rating: 4.7, reviews: 543, products: 165 },
    ],
    'mile-12': [
      { avatar: '🥬', badge: 'Top Seller', name: 'FreshFarm Direct', owner: 'Mama Chioma', location: 'Section A, Stall 3', tags: ['Vegetables', 'Tomatoes', 'Peppers'], rating: 4.8, reviews: 1120, products: 95 },
      { avatar: '🌾', badge: 'Verified', name: 'Grain Masters', owner: 'Alhaji Suleiman', location: 'Section B, Stall 8', tags: ['Rice', 'Maize', 'Beans', 'Millet'], rating: 4.6, reviews: 870, products: 60 },
      { avatar: '🐟', badge: 'Verified', name: 'Harbour Seafood', owner: 'Ebuka Nwosu', location: 'Section C, Stall 2', tags: ['Fish', 'Prawns', 'Crayfish'], rating: 4.5, reviews: 634, products: 45 },
      { avatar: '🌶️', badge: 'Verified', name: 'Spice Kingdom', owner: 'Ramatu Abubakar', location: 'Section D, Stall 14', tags: ['Spices', 'Condiments', 'Herbs'], rating: 4.7, reviews: 520, products: 120 },
    ],
    'trade-fair': [
      { avatar: '💍', badge: 'Top Seller', name: 'Crown Jewels Wholesale', owner: 'Amaka Okonkwo', location: 'Hall A, Shop 5', tags: ['Gold Jewelry', 'Earrings', 'Watches', 'Wholesale'], rating: 4.8, reviews: 1560, products: 480 },
      { avatar: '👜', badge: 'Top Seller', name: 'LuxeBag Depot', owner: 'Fatima Al-Hassan', location: 'Hall B, Shop 11', tags: ['Designer Bags', 'Handbags', 'Clutches', 'Totes'], rating: 4.7, reviews: 1120, products: 360 },
      { avatar: '💇', badge: 'Verified', name: 'Glam Hair Hub', owner: 'Chidinma Eze', location: 'Hall C, Shop 4', tags: ['Human Hair', 'Lace Wigs', 'Closures', 'Bundles'], rating: 4.6, reviews: 890, products: 240 },
      { avatar: '🧴', badge: 'Verified', name: 'Glow Beauty Wholesale', owner: 'Blessing Okafor', location: 'Hall D, Shop 7', tags: ['Body Cream', 'Skincare', 'Perfume', 'Wholesale'], rating: 4.5, reviews: 720, products: 310 },
      { avatar: '👠', badge: 'Verified', name: 'Step Queens Footwear', owner: 'Yetunde Adeyemi', location: 'Hall B, Shop 3', tags: ['Heels', 'Platform Shoes', 'Sandals', 'Wholesale'], rating: 4.7, reviews: 940, products: 290 },
    ],
    idumota: [
      { avatar: '📚', badge: 'Top Seller', name: 'Book Palace Lagos', owner: 'Prof. Ade Williams', location: 'Row 1, Stall 5', tags: ['Novels', 'Textbooks', 'Academic'], rating: 4.8, reviews: 890, products: 1200 },
      { avatar: '✏️', badge: 'Verified', name: 'StationeryWorld', owner: 'Temi Owolabi', location: 'Row 3, Stall 9', tags: ['Notebooks', 'Pens', 'Office'], rating: 4.6, reviews: 672, products: 450 },
      { avatar: '🎁', badge: 'Verified', name: 'Gift Haus', owner: 'Stella Obi', location: 'Row 5, Stall 2', tags: ['Gift Wrapping', 'Cards', 'Decor'], rating: 4.7, reviews: 543, products: 320 },
      { avatar: '🎮', badge: 'New', name: 'ToyBox Lagos', owner: 'Kemi Alade', location: 'Row 7, Stall 14', tags: ['Toys', 'Games', 'Educational'], rating: 4.9, reviews: 210, products: 280 },
    ],
    oshodi: [
      { avatar: '👚', badge: 'Top Seller', name: 'StreetStyle Lagos', owner: 'Dayo Akinwale', location: 'Block 3, Stall 7', tags: ['Tops', 'Jeans', 'Streetwear'], rating: 4.7, reviews: 2100, products: 490 },
      { avatar: '👟', badge: 'Verified', name: 'StepUp Footwear', owner: 'Precious Okafor', location: 'Block 1, Stall 15', tags: ['Sneakers', 'Boots', 'Sandals'], rating: 4.6, reviews: 1580, products: 310 },
      { avatar: '🧢', badge: 'Verified', name: 'Caps & Accessories', owner: 'Uche Nwoga', location: 'Block 5, Stall 4', tags: ['Caps', 'Belts', 'Sunglasses'], rating: 4.5, reviews: 890, products: 240 },
      { avatar: '👝', badge: 'Verified', name: 'Bag Central', owner: 'Folake Bamidele', location: 'Block 2, Stall 11', tags: ['Handbags', 'Backpacks', 'Pouches'], rating: 4.4, reviews: 720, products: 185 },
      { avatar: '💍', badge: 'New', name: 'Glam Accessories', owner: 'Chidinma Osei', location: 'Block 4, Stall 8', tags: ['Jewelry', 'Watches', 'Earrings'], rating: 4.8, reviews: 156, products: 320 },
    ]
  },

  // ---------------------------------------------------------------------------
  // LISTINGS  — products shown on the product-listing page
  // Key: "{marketId}-{categoryId}"  fallback: "{marketId}-{defaultCategory}"
  // ---------------------------------------------------------------------------
  listings: {

    'balogun-fabrics': {
      title: 'Fabrics & Textiles', categoryLabel: 'Fabrics',
      totalProducts: 1240, resultCount: 486,
      subcategories: [
        { label: 'Ankara / Wax Print', count: 486 },
        { label: 'Lace Fabric', count: 214 },
        { label: 'Aso-oke', count: 189 },
        { label: 'Adire / Tie-dye', count: 143 },
        { label: 'Silk & Satin', count: 98 },
        { label: 'Plain Cotton', count: 110 },
      ],
      featured: {
        image: 'assets/feat-balogun.jpg', label: 'Featured Vendor · Top Seller',
        name: 'Premium Ankara Wax Print Fabric',
        desc: 'Authentic Dutch-wax Ankara prints sourced directly from established mills. Vibrant, colourfast, and available in 40+ patterns. Minimum 3-yard purchase.',
        vendor: 'Mama Titi Fabrics', location: 'Row 4, Stall 12',
        ratingStr: '4.9 ★ (1,204)', minOrder: '3 yards',
        price: '₦2,400', unit: 'yard'
      },
      items: [
        { image: 'assets/pl-fabric-1.jpg', badge: '-15%', badgeClass: 'badge-sale', name: 'Holland Ankara Print', vendor: 'Alaba Fabrics ✓', sub: 'Row 3, Stall 5 · 25+ designs', rating: 4.8, reviews: 340, price: '₦1,800', oldPrice: '₦2,100', unit: 'yard' },
        { image: 'assets/pl-fabric-2.jpg', badge: 'Hot', badgeClass: 'badge-hot', name: 'Swiss Voile Lace', vendor: 'Lace Kingdom ✓', sub: 'Row 6, Stall 1 · Imported', rating: 4.6, reviews: 218, price: '₦4,500', unit: 'yard' },
        { image: 'assets/pl-fabric-3.jpg', badge: 'New', badgeClass: 'badge-new', name: 'Indigo Adire Eleko', vendor: 'Adire Hub ✓', sub: 'Row 9, Stall 6 · Handmade', rating: 4.9, reviews: 87, price: '₦3,200', unit: 'yard' },
        { image: 'assets/pl-fabric-4.jpg', badge: '3 left', badgeClass: 'badge-low', name: 'Aso-oke Ìpele', vendor: 'Aso Oke Palace ✓', sub: 'Row 2, Stall 8 · Handwoven', rating: 4.8, reviews: 156, price: '₦12,000', unit: 'set' },
        { image: 'assets/pl-fabric-5.jpg', badge: '', badgeClass: '', name: 'Gele Fabric Roll', vendor: 'Crown Headwear ✓', sub: 'Row 5, Stall 15 · 6 colours', rating: 4.4, reviews: 92, price: '₦2,800', unit: 'yard' },
        { image: 'assets/pl-fabric-2.jpg', badge: '-20%', badgeClass: 'badge-sale', name: 'Kente Wax Blend', vendor: 'Mama Titi Fabrics ✓', sub: 'Row 4, Stall 12 · Ghana import', rating: 4.9, reviews: 441, price: '₦2,000', oldPrice: '₦2,500', unit: 'yard' },
        { image: 'assets/pl-fabric-1.jpg', badge: '', badgeClass: '', name: 'French Organza Lace', vendor: 'Green Lace Store', sub: 'Row 6, Stall 9 · French origin', rating: 4.3, reviews: 62, price: '₦6,800', unit: 'yard' },
        { image: 'assets/pl-fabric-3.jpg', badge: 'New', badgeClass: 'badge-new', name: 'Batik Resist Print', vendor: 'Batik Masters ✓', sub: 'Row 9, Stall 14 · Java batik', rating: 5.0, reviews: 24, price: '₦4,100', unit: 'yard' },
      ]
    },

    'alaba-electronics': {
      title: 'Electronics & Gadgets', categoryLabel: 'Electronics',
      totalProducts: 870, resultCount: 620,
      subcategories: [
        { label: 'Televisions', count: 186 },
        { label: 'Laptops & Computers', count: 210 },
        { label: 'Smartphones', count: 245 },
        { label: 'Home Appliances', count: 134 },
        { label: 'Audio & Sound', count: 98 },
        { label: 'Cameras', count: 67 },
      ],
      featured: {
        image: 'assets/Smart tv 32.jpeg', label: 'Featured Vendor · Top Seller',
        name: 'Samsung 65" 4K UHD Smart TV',
        desc: 'Crystal-clear 4K display with built-in Netflix, YouTube, and Amazon Prime. Motion Rate 120, HDR10+, and Tizen OS. Includes 2-year warranty and free Lagos delivery.',
        vendor: 'Mega Electronics', location: 'Block A, Shop 5',
        ratingStr: '4.8 ★ (2,341)', minOrder: '1 unit',
        price: '₦485,000', unit: 'unit'
      },
      items: [
        { image: 'assets/cv-iphone16.jpeg', badge: 'Hot', badgeClass: 'badge-hot', name: 'iPhone 16 Pro Max 256GB', vendor: 'PhoneWorld Lagos ✓', sub: 'Block B, Shop 14 · Sealed', rating: 4.9, reviews: 512, price: '₦1,280,000', unit: 'unit' },
        { image: 'assets/Smart tv 32.jpeg', badge: '-10%', badgeClass: 'badge-sale', name: 'Hisense 32" Smart TV', vendor: 'Mega Electronics ✓', sub: 'Block A, Shop 5 · 1-yr warranty', rating: 4.6, reviews: 289, price: '₦85,000', oldPrice: '₦95,000', unit: 'unit' },
        { image: 'assets/cv-airpods-max.jpeg', badge: '', badgeClass: '', name: 'Apple AirPods Max — Midnight', vendor: 'SoundPro Alaba ✓', sub: 'Block B, Shop 9 · Active Noise Cancellation', rating: 4.8, reviews: 198, price: '₦275,000', unit: 'unit' },
        { image: 'assets/cv-iphone15-blue.jpeg', badge: 'New', badgeClass: 'badge-new', name: 'iPhone 15 128GB — Blue', vendor: 'PhoneWorld Lagos ✓', sub: 'Block B, Shop 14 · Sealed · All colours', rating: 4.7, reviews: 145, price: '₦780,000', unit: 'unit' },
        { image: 'assets/Qulomvs Mesh Ergonomic Office Chair with Footrest Home Office Desk Chair with Headrest and Backrest 90-135 Adjustable Computer Executive Desk Chair with Wheels 360 Swivel Task Chair.jpeg', badge: 'New', badgeClass: 'badge-new', name: 'Ergonomic Mesh Office Chair with Footrest', vendor: 'FurniTech Alaba ✓', sub: 'Block E, Shop 3 · 360° Swivel · Headrest & Backrest', rating: 4.8, reviews: 87, price: '₦65,000', unit: 'unit' },
        { image: 'assets/cv-macbook-m3.jpeg', badge: '-15%', badgeClass: 'badge-sale', name: 'Apple MacBook Air M3 13"', vendor: 'Digital Hub Alaba ✓', sub: 'Block C, Shop 2 · 8GB/256GB SSD', rating: 4.7, reviews: 324, price: '₦1,350,000', oldPrice: '₦1,590,000', unit: 'unit' },
        { image: 'assets/Boss Table.jpeg', badge: 'Hot', badgeClass: 'badge-hot', name: 'Executive Boss Office Table', vendor: 'FurniTech Alaba ✓', sub: 'Block E, Shop 3 · L-Shape · Walnut finish', rating: 4.7, reviews: 156, price: '₦95,000', unit: 'unit' },
        { image: 'assets/_ (9).jpeg', badge: 'New', badgeClass: 'badge-new', name: 'iMac 24" M3 Desktop Setup', vendor: 'Digital Hub Alaba ✓', sub: 'Block C, Shop 2 · Complete workstation', rating: 4.8, reviews: 63, price: '₦1,850,000', unit: 'unit' },
      ]
    },

    'alaba-furniture': {
      title: 'Office Furniture', categoryLabel: 'Office Furniture',
      totalProducts: 98, resultCount: 72,
      subcategories: [
        { label: 'Office Chairs', count: 34 },
        { label: 'Executive Tables', count: 22 },
        { label: 'Computer Desks', count: 18 },
        { label: 'Shelving & Storage', count: 12 },
        { label: 'Reception Furniture', count: 8 },
      ],
      featured: {
        image: 'assets/Qulomvs Mesh Ergonomic Office Chair with Footrest Home Office Desk Chair with Headrest and Backrest 90-135 Adjustable Computer Executive Desk Chair with Wheels 360 Swivel Task Chair.jpeg', label: 'Featured Vendor · Top Seller',
        name: 'Ergonomic Mesh Office Chair with Footrest',
        desc: 'Premium mesh ergonomic chair with adjustable headrest, lumbar backrest support, 90-135° recline, retractable footrest, and smooth 360° swivel wheels. Ideal for home office and executive workstations.',
        vendor: 'FurniTech Alaba', location: 'Block E, Shop 3',
        ratingStr: '4.8 ★ (312)', minOrder: '1 unit',
        price: '₦65,000', unit: 'unit'
      },
      items: [
        { image: 'assets/Qulomvs Mesh Ergonomic Office Chair with Footrest Home Office Desk Chair with Headrest and Backrest 90-135 Adjustable Computer Executive Desk Chair with Wheels 360 Swivel Task Chair.jpeg', badge: 'Hot', badgeClass: 'badge-hot', name: 'Ergonomic Mesh Chair with Footrest', vendor: 'FurniTech Alaba ✓', sub: 'Block E, Shop 3 · 360° Swivel · Black', rating: 4.8, reviews: 312, price: '₦65,000', unit: 'unit' },
        { image: 'assets/Boss Table.jpeg', badge: 'Top Seller', badgeClass: 'badge-hot', name: 'Executive Boss Office Table', vendor: 'FurniTech Alaba ✓', sub: 'Block E, Shop 3 · L-Shape · Walnut finish', rating: 4.7, reviews: 156, price: '₦95,000', unit: 'unit' },
        { image: 'assets/_ (9).jpeg', badge: 'New', badgeClass: 'badge-new', name: 'Complete Computer Desk Setup', vendor: 'FurniTech Alaba ✓', sub: 'Block E, Shop 3 · Includes monitor stand & mat', rating: 4.8, reviews: 63, price: '₦45,000', unit: 'unit' },
        { image: 'assets/Smart tv 32.jpeg', badge: '-10%', badgeClass: 'badge-sale', name: 'Office Reception 32" Smart TV', vendor: 'Mega Electronics ✓', sub: 'Block A, Shop 5 · Wall-mount ready', rating: 4.6, reviews: 89, price: '₦85,000', oldPrice: '₦95,000', unit: 'unit' },
        { image: 'assets/Qulomvs Mesh Ergonomic Office Chair with Footrest Home Office Desk Chair with Headrest and Backrest 90-135 Adjustable Computer Executive Desk Chair with Wheels 360 Swivel Task Chair.jpeg', badge: '', badgeClass: '', name: 'High-Back Executive Office Chair', vendor: 'FurniTech Alaba ✓', sub: 'Block E, Shop 3 · PU Leather · Armrest', rating: 4.6, reviews: 98, price: '₦78,000', unit: 'unit' },
        { image: 'assets/Boss Table.jpeg', badge: '-20%', badgeClass: 'badge-sale', name: 'Office Manager Desk — Straight', vendor: 'FurniTech Alaba ✓', sub: 'Block E, Shop 3 · With drawers · MDF', rating: 4.5, reviews: 74, price: '₦48,000', oldPrice: '₦60,000', unit: 'unit' },
      ]
    },

    'computer-village-computers': {
      title: 'Computers & Laptops', categoryLabel: 'Computers',
      totalProducts: 640, resultCount: 380,
      subcategories: [
        { label: 'MacBooks & Apple', count: 94 },
        { label: 'Windows Laptops', count: 186 },
        { label: 'Desktop PCs', count: 72 },
        { label: 'Tablets & iPads', count: 54 },
        { label: 'Chromebooks', count: 28 },
        { label: 'Refurbished', count: 145 },
      ],
      featured: {
        image: 'assets/cv-macbook-air-blue.jpeg', label: 'Featured Vendor · Top Seller',
        name: 'Apple MacBook Air M2 13" — Blue',
        desc: 'The iconic thin-and-light MacBook Air in stunning Blue. M2 chip with 8-core CPU, 8GB RAM, 256GB SSD. Up to 18 hours battery life. Fanless design, Liquid Retina display. Available in 13" and 15".',
        vendor: 'LaptopKing CV', location: 'Shop 12, Row A',
        ratingStr: '4.9 ★ (1,854)', minOrder: '1 unit',
        price: '₦1,250,000', unit: 'unit'
      },
      items: [
        { image: 'assets/cv-macbook-m3.jpeg', badge: 'New', badgeClass: 'badge-new', name: 'Apple MacBook Air M3 13" — Midnight', vendor: 'LaptopKing CV ✓', sub: 'Shop 12, Row A · 8GB/256GB SSD', rating: 4.9, reviews: 312, price: '₦1,350,000', unit: 'unit' },
        { image: 'assets/cv-imac-setup.jpeg', badge: 'Hot', badgeClass: 'badge-hot', name: 'Apple iMac 24" M3 — Blue', vendor: 'DesktopWorld Ikeja ✓', sub: 'Shop 7, Row C · 8GB/256GB · with Magic Keyboard', rating: 4.8, reviews: 145, price: '₦1,850,000', unit: 'unit' },
        { image: 'assets/cv-macbook-air-blue.jpeg', badge: '-5%', badgeClass: 'badge-sale', name: 'Apple MacBook Air M2 13" — Blue', vendor: 'LaptopKing CV ✓', sub: 'Shop 12, Row A · 8GB/256GB SSD', rating: 4.9, reviews: 520, price: '₦1,250,000', oldPrice: '₦1,315,000', unit: 'unit' },
        { image: 'assets/cv-ipad-pink.jpeg', badge: '', badgeClass: '', name: 'Apple iPad 10th Gen 256GB — Pink', vendor: 'SmartPhone Centre ✓', sub: 'Shop 3, Row B · WiFi · Sealed in box', rating: 4.8, reviews: 234, price: '₦480,000', unit: 'unit' },
        { image: 'assets/cv-iphone15-blue.jpeg', badge: '-10%', badgeClass: 'badge-sale', name: 'iPhone 15 128GB — Blue', vendor: 'SmartPhone Centre ✓', sub: 'Shop 3, Row B · Sealed · All colours', rating: 4.8, reviews: 680, price: '₦780,000', oldPrice: '₦865,000', unit: 'unit' },
        { image: 'assets/cv-iphone16.jpeg', badge: 'Hot', badgeClass: 'badge-hot', name: 'iPhone 16 Pro Max 256GB — Gold & Blue', vendor: 'SmartPhone Centre ✓', sub: 'Shop 3, Row B · Latest model · Sealed', rating: 5.0, reviews: 198, price: '₦1,280,000', unit: 'unit' },
        { image: 'assets/cv-airpods-max.jpeg', badge: 'New', badgeClass: 'badge-new', name: 'Apple AirPods Max — Blue', vendor: 'AccessoryPlus ✓', sub: 'Shop 19, Row A · Active Noise Cancellation', rating: 4.9, reviews: 112, price: '₦275,000', unit: 'unit' },
        { image: 'assets/cv-redmi-watch.jpeg', badge: '', badgeClass: '', name: 'Redmi Watch 3 Pro — Black & Cream', vendor: 'AccessoryPlus ✓', sub: 'Shop 19, Row A · Health tracking · 12-day battery', rating: 4.6, reviews: 89, price: '₦65,000', unit: 'unit' },
      ]
    },

    'tejuosho-clothing': {
      title: 'Clothing & Fashion', categoryLabel: 'Clothing',
      totalProducts: 510, resultCount: 342,
      subcategories: [
        { label: "Women's Wear", count: 164 },
        { label: "Men's Wear", count: 98 },
        { label: 'Ankara & Native', count: 112 },
        { label: 'Kids Clothing', count: 76 },
        { label: 'Sportswear', count: 54 },
        { label: 'Underwear & Loungewear', count: 48 },
      ],
      featured: {
        image: 'assets/feat-tejuosho.jpg', label: 'Featured Vendor · Top Seller',
        name: 'Ankara Peplum Midi Set — 2-Piece',
        desc: 'Beautifully tailored 2-piece Ankara set with matching headwrap. Available in 15 fabric patterns. Sizes XS–3XL. Perfect for parties, owambe events, and corporate outings.',
        vendor: 'Lagos Fashion Hub', location: 'Row 2, Stall 4',
        ratingStr: '4.8 ★ (1,620)', minOrder: '1 set',
        price: '₦14,500', unit: 'set'
      },
      items: [
        { image: 'assets/pl-fashion-1.jpg', badge: 'Hot', badgeClass: 'badge-hot', name: "Men's Senator Native Set", vendor: 'Lagos Fashion Hub ✓', sub: 'Row 2, Stall 4 · Agbada optional', rating: 4.8, reviews: 435, price: '₦18,000', unit: 'set' },
        { image: 'assets/pl-fashion-2.jpg', badge: '-20%', badgeClass: 'badge-sale', name: "Women's Bodycon Dress", vendor: "Style Queen ✓", sub: 'Row 4, Stall 6 · 8 colours', rating: 4.5, reviews: 267, price: '₦8,000', oldPrice: '₦10,000', unit: 'piece' },
        { image: 'assets/pl-fashion-3.jpg', badge: 'New', badgeClass: 'badge-new', name: 'Adire Print Midi Skirt', vendor: 'Adire Corner ✓', sub: 'Row 3, Stall 12 · Handmade', rating: 4.7, reviews: 88, price: '₦6,500', unit: 'piece' },
        { image: 'assets/pl-fashion-4.jpg', badge: '', badgeClass: '', name: 'Boys School Uniform Set', vendor: 'Tiny Threads ✓', sub: 'Row 11, Stall 7 · Ages 3–14', rating: 4.6, reviews: 312, price: '₦4,200', unit: 'set' },
        { image: 'assets/pl-fashion-5.jpg', badge: '-15%', badgeClass: 'badge-sale', name: "Women's Corset Top", vendor: 'Lagos Fashion Hub ✓', sub: 'Row 2, Stall 4 · 12 colours', rating: 4.9, reviews: 198, price: '₦4,500', oldPrice: '₦5,300', unit: 'piece' },
        { image: 'assets/pl-fashion-1.jpg', badge: 'Hot', badgeClass: 'badge-hot', name: "Men's Kaftan Jalabiya", vendor: 'Kaftan Palace ✓', sub: 'Row 6, Stall 3 · Cotton/Linen', rating: 4.7, reviews: 156, price: '₦12,000', unit: 'piece' },
        { image: 'assets/pl-fashion-2.jpg', badge: 'New', badgeClass: 'badge-new', name: 'Jumpsuit with Belt', vendor: 'Style Queen ✓', sub: 'Row 4, Stall 6 · Sizes XS–XXL', rating: 4.6, reviews: 72, price: '₦9,800', unit: 'piece' },
        { image: 'assets/pl-fashion-3.jpg', badge: '', badgeClass: '', name: "Girls Party Dress", vendor: 'Tiny Threads ✓', sub: 'Row 11, Stall 7 · Ages 2–12', rating: 4.8, reviews: 245, price: '₦5,500', unit: 'piece' },
      ]
    },

    'mile-12-produce': {
      title: 'Fresh Produce & Vegetables', categoryLabel: 'Fresh Produce',
      totalProducts: 390, resultCount: 280,
      subcategories: [
        { label: 'Tomatoes & Peppers', count: 68 },
        { label: 'Leafy Vegetables', count: 54 },
        { label: 'Root Vegetables', count: 42 },
        { label: 'Fruits', count: 38 },
        { label: 'Fresh Herbs', count: 28 },
        { label: 'Organic Produce', count: 50 },
      ],
      featured: {
        image: 'assets/_Fresh, vibrant veggies to brighten up your meals….jpeg', label: 'Featured Vendor · Top Seller',
        name: 'Weekly Fresh Veg Box — 7 Varieties',
        desc: 'A curated weekly box bursting with farm-fresh produce: vine-ripe tomatoes, broccoli, carrots, red & yellow bell peppers, cucumber, green onions, and fresh herbs. All sourced directly from verified farms and delivered same morning.',
        vendor: 'FreshFarm Direct', location: 'Section A, Stall 3',
        ratingStr: '4.9 ★ (412)', minOrder: '1 box',
        price: '₦4,500', unit: 'box'
      },
      items: [
        { image: 'assets/875809458774827357.jpeg', badge: 'Hot', badgeClass: 'badge-hot', name: 'Red Chili Peppers (Shombo) — 2kg', vendor: 'FreshFarm Direct ✓', sub: 'Section A, Stall 3 · Freshly harvested', rating: 4.8, reviews: 320, price: '₦2,200', unit: '2kg' },
        { image: 'assets/970736894669637684.jpeg', badge: '', badgeClass: '', name: 'Fresh Carrots — 1kg Bunch', vendor: 'FreshFarm Direct ✓', sub: 'Section A, Stall 3 · Farm-fresh with tops', rating: 4.6, reviews: 187, price: '₦900', unit: '1kg' },
        { image: 'assets/822047738278417136.jpeg', badge: 'New', badgeClass: 'badge-new', name: 'Fresh Broccoli Head — 500g', vendor: 'GreenLeaf Market ✓', sub: 'Section B, Stall 5 · Fresh & firm', rating: 4.7, reviews: 145, price: '₦1,200', unit: '500g' },
        { image: 'assets/양파.jpeg', badge: '-10%', badgeClass: 'badge-sale', name: 'Onions Bag — 10kg', vendor: 'Grain Masters ✓', sub: 'Section B, Stall 8 · Sokoto onions', rating: 4.6, reviews: 298, price: '₦3,200', oldPrice: '₦3,500', unit: '10kg' },
        { image: 'assets/Okro Soup with Shrimp and Spinach (Nigerian Okra….jpeg', badge: '', badgeClass: '', name: 'Fresh Okro (Pre-sliced) — 500g', vendor: 'FreshFarm Direct ✓', sub: 'Section A, Stall 3 · Pre-sliced, ready to cook', rating: 4.5, reviews: 92, price: '₦800', unit: '500g' },
        { image: 'assets/_Fresh, vibrant veggies to brighten up your meals….jpeg', badge: 'Hot', badgeClass: 'badge-hot', name: 'Weekly Fresh Veg Box — 7 Varieties', vendor: 'FreshFarm Direct ✓', sub: 'Section A, Stall 3 · Tomatoes, peppers, broccoli & more', rating: 4.9, reviews: 412, price: '₦4,500', unit: 'box' },
        { image: 'assets/Our grass-fed diced chuck is perfect for your….jpeg', badge: 'New', badgeClass: 'badge-new', name: 'Fresh Diced Beef (Chuck) — 1kg', vendor: 'FreshFarm Direct ✓', sub: 'Section A, Stall 3 · Grass-fed · Delivered fresh', rating: 4.8, reviews: 234, price: '₦4,200', unit: '1kg' },
        { image: 'assets/The 36 absolute best things in the world.jpeg', badge: '', badgeClass: '', name: 'Long Grain Parboiled Rice — 10kg', vendor: 'Grain Masters ✓', sub: 'Section B, Stall 8 · Grade A · Kebbi farms', rating: 4.7, reviews: 389, price: '₦9,800', unit: '10kg' },
      ]
    },

    'mile-12-grains': {
      title: 'Grains & Cereals', categoryLabel: 'Grains & Cereals',
      totalProducts: 120, resultCount: 85,
      subcategories: [
        { label: 'Rice', count: 34 },
        { label: 'Beans', count: 22 },
        { label: 'Maize & Corn', count: 18 },
        { label: 'Millet & Sorghum', count: 14 },
        { label: 'Oats & Other Grains', count: 12 },
      ],
      featured: {
        image: 'assets/The 36 absolute best things in the world.jpeg', label: 'Featured Vendor · Top Seller',
        name: 'Long Grain Parboiled Rice — 50kg Bag',
        desc: 'Premium Grade A parboiled long grain rice sourced directly from paddy farms in Kebbi and Benue states. Fluffy, non-sticky texture every time. Perfect for jollof, fried rice, and everyday cooking. Order full bags at wholesale prices.',
        vendor: 'Grain Masters', location: 'Section B, Stall 8',
        ratingStr: '4.6 ★ (870)', minOrder: '5kg',
        price: '₦42,000', unit: '50kg bag'
      },
      items: [
        { image: 'assets/The 36 absolute best things in the world.jpeg', badge: 'Top Seller', badgeClass: 'badge-hot', name: 'Long Grain Parboiled Rice — 50kg Bag', vendor: 'Grain Masters ✓', sub: 'Section B, Stall 8 · Grade A', rating: 4.6, reviews: 870, price: '₦42,000', unit: '50kg' },
        { image: 'assets/The 36 absolute best things in the world.jpeg', badge: '', badgeClass: '', name: 'Long Grain Parboiled Rice — 10kg', vendor: 'Grain Masters ✓', sub: 'Section B, Stall 8 · Premium grade', rating: 4.7, reviews: 389, price: '₦9,800', unit: '10kg' },
        { image: 'assets/The 36 absolute best things in the world.jpeg', badge: '-5%', badgeClass: 'badge-sale', name: 'Ofada Brown Rice — 5kg', vendor: 'Grain Masters ✓', sub: 'Section B, Stall 8 · Local variety', rating: 4.8, reviews: 210, price: '₦5,700', oldPrice: '₦6,000', unit: '5kg' },
        { image: 'assets/The 36 absolute best things in the world.jpeg', badge: 'New', badgeClass: 'badge-new', name: 'Jasmine Rice — 10kg Bag', vendor: 'Grain Masters ✓', sub: 'Section B, Stall 8 · Thai import', rating: 4.5, reviews: 98, price: '₦11,500', unit: '10kg' },
      ]
    },

    'mile-12-groceries': {
      title: 'Packaged Groceries', categoryLabel: 'Packaged Groceries',
      totalProducts: 180, resultCount: 140,
      subcategories: [
        { label: 'Instant Noodles', count: 42 },
        { label: 'Canned Goods', count: 36 },
        { label: 'Cooking Oils', count: 28 },
        { label: 'Condiments & Sauces', count: 22 },
        { label: 'Dry Goods', count: 18 },
      ],
      featured: {
        image: 'assets/Ready Stock in SG! Indomie Goreng Indomie Kuah….jpeg', label: 'Featured Vendor · Top Seller',
        name: 'Indomie Mi Goreng Instant Noodles — Carton of 40',
        desc: 'The iconic Indonesian-style dry instant noodles beloved across Nigeria. Each pack comes with 5 seasoning sachets for an authentic stir-fry noodle experience. Order a full carton of 40 packs at unbeatable wholesale price.',
        vendor: 'Grain Masters', location: 'Section B, Stall 8',
        ratingStr: '4.8 ★ (560)', minOrder: '1 carton',
        price: '₦9,500', unit: 'carton (40 packs)'
      },
      items: [
        { image: 'assets/Ready Stock in SG! Indomie Goreng Indomie Kuah….jpeg', badge: 'Hot', badgeClass: 'badge-hot', name: 'Indomie Mi Goreng — Carton of 40', vendor: 'Grain Masters ✓', sub: 'Section B, Stall 8 · Wholesale price', rating: 4.8, reviews: 560, price: '₦9,500', unit: 'carton' },
        { image: 'assets/Ready Stock in SG! Indomie Goreng Indomie Kuah….jpeg', badge: '-10%', badgeClass: 'badge-sale', name: 'Indomie Chicken Flavour — Carton of 40', vendor: 'Grain Masters ✓', sub: 'Section B, Stall 8 · Classic Nigerian flavour', rating: 4.7, reviews: 420, price: '₦8,100', oldPrice: '₦9,000', unit: 'carton' },
        { image: 'assets/Ready Stock in SG! Indomie Goreng Indomie Kuah….jpeg', badge: 'New', badgeClass: 'badge-new', name: 'Indomie Mi Goreng — 10-Pack Bundle', vendor: 'Grain Masters ✓', sub: 'Section B, Stall 8 · Trial pack', rating: 4.9, reviews: 132, price: '₦2,800', unit: '10 packs' },
        { image: 'assets/Ready Stock in SG! Indomie Goreng Indomie Kuah….jpeg', badge: '', badgeClass: '', name: 'Indomie Instant Noodles — Carton of 40 (Assorted)', vendor: 'Grain Masters ✓', sub: 'Section B, Stall 8 · Mixed flavours', rating: 4.6, reviews: 289, price: '₦8,800', unit: 'carton' },
      ]
    },

    'trade-fair-jewelry': {
      title: 'Jewelry & Watches', categoryLabel: 'Jewelry & Watches',
      totalProducts: 680, resultCount: 520,
      subcategories: [
        { label: 'Gold-Plated Jewelry', count: 186 },
        { label: 'Earrings & Studs', count: 142 },
        { label: 'Necklaces & Chains', count: 118 },
        { label: 'Bracelets & Bangles', count: 96 },
        { label: 'Women\'s Watches', count: 88 },
        { label: 'Rings & Sets', count: 74 },
      ],
      featured: {
        image: 'assets/feat-tradefair.jpg', label: 'Featured Vendor · Top Seller',
        name: 'Gold-Plated Jewelry Set — Necklace, Earrings & Bracelet',
        desc: 'Stunning 18K gold-plated 3-piece set featuring a layered necklace, matching stud earrings, and a cuff bracelet. Tarnish-resistant coating, hypoallergenic. Perfect for everyday wear or gifting. Available in gold, rose gold, and silver.',
        vendor: 'Crown Jewels Wholesale', location: 'Hall A, Shop 5',
        ratingStr: '4.8 ★ (1,560)', minOrder: '1 set',
        price: '₦8,500', unit: 'set'
      },
      items: [
        { image: 'assets/tf-jewelry-1.jpg', badge: 'Hot', badgeClass: 'badge-hot', name: 'Statement Gold Choker Necklace', vendor: 'Crown Jewels Wholesale ✓', sub: 'Hall A, Shop 5 · 8 designs', rating: 4.8, reviews: 620, price: '₦4,200', unit: 'piece' },
        { image: 'assets/tf-watch-1.jpg', badge: '-15%', badgeClass: 'badge-sale', name: 'Women\'s Rose Gold Wristwatch', vendor: 'Crown Jewels Wholesale ✓', sub: 'Hall A, Shop 5 · Waterproof', rating: 4.7, reviews: 410, price: '₦12,500', oldPrice: '₦14,700', unit: 'piece' },
        { image: 'assets/tf-jewelry-2.jpg', badge: 'New', badgeClass: 'badge-new', name: 'Pearl Drop Earrings Set', vendor: 'Crown Jewels Wholesale ✓', sub: 'Hall A, Shop 5 · 12 colour options', rating: 4.9, reviews: 188, price: '₦2,800', unit: 'pair' },
        { image: 'assets/1121748219709108410.jpeg', badge: '', badgeClass: '', name: 'Rhinestone Gold Statement Set — 4 Pieces', vendor: 'Crown Jewels Wholesale ✓', sub: 'Hall A, Shop 5 · Necklace, Earrings, Bracelet & Ring', rating: 4.6, reviews: 312, price: '₦12,500', unit: 'set' },
        { image: 'assets/tf-watch-2.jpg', badge: '-10%', badgeClass: 'badge-sale', name: 'Luxury Bracelet Watch — Black', vendor: 'Crown Jewels Wholesale ✓', sub: 'Hall A, Shop 5 · Gift box included', rating: 4.7, reviews: 256, price: '₦18,000', oldPrice: '₦20,000', unit: 'piece' },
        { image: 'assets/tf-jewelry-3.jpg', badge: 'Hot', badgeClass: 'badge-hot', name: 'Rhinestone Stud Earrings Pack × 6', vendor: 'Crown Jewels Wholesale ✓', sub: 'Hall A, Shop 5 · Wholesale pack', rating: 4.8, reviews: 890, price: '₦6,000', unit: 'pack' },
        { image: 'assets/Silver  Collar     Embellished   Women Fashion….jpeg', badge: 'New', badgeClass: 'badge-new', name: 'Silver Diamond Collar Necklace Set', vendor: 'Crown Jewels Wholesale ✓', sub: 'Hall A, Shop 5 · Necklace, Earrings, Bracelet & Ring', rating: 4.7, reviews: 145, price: '₦18,500', unit: 'set' },
        { image: 'assets/1094726622053039474.jpeg', badge: '', badgeClass: '', name: 'Strathberry-Style Structured Tote — Burgundy', vendor: 'LuxeBag Depot ✓', sub: 'Hall B, Shop 11 · With matching cardholder', rating: 4.5, reviews: 198, price: '₦42,000', unit: 'piece' },
      ]
    },

    'trade-fair-bags': {
      title: 'Bags & Handbags', categoryLabel: 'Bags & Handbags',
      totalProducts: 360, resultCount: 280,
      subcategories: [
        { label: 'Tote Bags', count: 98 },
        { label: 'Shoulder Bags', count: 86 },
        { label: 'Clutch Purses', count: 64 },
        { label: 'Crossbody Bags', count: 52 },
        { label: 'Mini Bags', count: 38 },
      ],
      featured: {
        image: 'assets/1094726622053039474.jpeg', label: 'Featured Vendor · Top Seller',
        name: 'Strathberry-Style Structured Tote — Burgundy',
        desc: 'Luxury-inspired structured tote in rich burgundy pebbled leather with white contrast handle bar and gold-tone hardware. Includes a matching slim cardholder. A statement piece that blends elegance with everyday functionality.',
        vendor: 'LuxeBag Depot', location: 'Hall B, Shop 11',
        ratingStr: '4.7 ★ (1,120)', minOrder: '1 piece',
        price: '₦42,000', unit: 'piece'
      },
      items: [
        { image: 'assets/663506957634861484.jpeg', badge: 'Hot', badgeClass: 'badge-hot', name: 'Designer Beige Scarf Tote Bag', vendor: 'LuxeBag Depot ✓', sub: 'Hall B, Shop 11 · Comes with silk scarf', rating: 4.8, reviews: 540, price: '₦26,000', unit: 'piece' },
        { image: "assets/#ModernWome_ for a timeless handbag that blends….jpeg", badge: 'Top Seller', badgeClass: 'badge-hot', name: 'Exotic Croc-Embossed Leather Satchel', vendor: 'LuxeBag Depot ✓', sub: 'Hall B, Shop 11 · Camel · Dual carry', rating: 4.9, reviews: 420, price: '₦34,500', unit: 'piece' },
        { image: 'assets/1094726622053039474.jpeg', badge: 'New', badgeClass: 'badge-new', name: 'Strathberry-Style Structured Tote — Burgundy', vendor: 'LuxeBag Depot ✓', sub: 'Hall B, Shop 11 · With matching cardholder', rating: 4.7, reviews: 198, price: '₦42,000', unit: 'piece' },
        { image: 'assets/tf-bags-2.jpg', badge: '-15%', badgeClass: 'badge-sale', name: 'Mini Quilted Chain Bag', vendor: 'LuxeBag Depot ✓', sub: 'Hall B, Shop 11 · 6 colour options', rating: 4.6, reviews: 312, price: '₦14,500', oldPrice: '₦17,000', unit: 'piece' },
        { image: 'assets/tf-bags-1.jpg', badge: '', badgeClass: '', name: 'Classic Tan Tote Bag', vendor: 'LuxeBag Depot ✓', sub: 'Hall B, Shop 11 · Spacious · 4 pockets', rating: 4.5, reviews: 280, price: '₦22,000', unit: 'piece' },
        { image: 'assets/663506957634861484.jpeg', badge: '-10%', badgeClass: 'badge-sale', name: 'Scarf Tote Bag — White Edition', vendor: 'LuxeBag Depot ✓', sub: 'Hall B, Shop 11 · Limited stock', rating: 4.8, reviews: 156, price: '₦23,500', oldPrice: '₦26,000', unit: 'piece' },
      ]
    },

    'trade-fair-beauty': {
      title: 'Beauty & Skincare', categoryLabel: 'Beauty & Skincare',
      totalProducts: 310, resultCount: 240,
      subcategories: [
        { label: 'Body Creams & Lotions', count: 98 },
        { label: 'Perfumes & Fragrances', count: 76 },
        { label: 'Facial Skincare', count: 54 },
        { label: 'Makeup', count: 42 },
        { label: 'Hair Care', count: 30 },
      ],
      featured: {
        image: 'assets/Elevate Your Perfume Packaging with Premium Coatings and Printing.jpeg', label: 'Featured Vendor · Top Seller',
        name: 'Luxury Perfume Collection — 6 Signature Scents',
        desc: 'Curated set of 6 imported luxury fragrances in stunning crystal-cut bottles. Long-lasting Eau de Parfum formulations. Includes floral, woody, oriental, and fresh scent profiles. Available as full bottles or gift sets.',
        vendor: 'Glow Beauty Wholesale', location: 'Hall D, Shop 7',
        ratingStr: '4.5 ★ (720)', minOrder: '1 bottle',
        price: '₦18,500', unit: 'bottle'
      },
      items: [
        { image: "assets/Palmers in different variants 🤍🩷💜❤️💚__For the….jpeg", badge: 'Hot', badgeClass: 'badge-hot', name: "Palmer's Cocoa Butter Lotion Set — 4 Variants", vendor: 'Glow Beauty Wholesale ✓', sub: 'Hall D, Shop 7 · Firming, Smooth Radiant & more', rating: 4.8, reviews: 680, price: '₦9,500', unit: 'set' },
        { image: "assets/✨ Pamper your skin with Olay's Anti-Aging Night….jpeg", badge: '-20%', badgeClass: 'badge-sale', name: 'Olay Night Cream — Anti-Aging Hydrating', vendor: 'Glow Beauty Wholesale ✓', sub: 'Hall D, Shop 7 · Niacinamide & Amino Peptides', rating: 4.9, reviews: 412, price: '₦12,800', oldPrice: '₦16,000', unit: 'piece' },
        { image: 'assets/Use a well-crafted picture to bring you a unique….jpeg', badge: 'New', badgeClass: 'badge-new', name: 'Rose Floral Eau de Parfum 100ml', vendor: 'Glow Beauty Wholesale ✓', sub: 'Hall D, Shop 7 · Long-lasting floral scent', rating: 4.7, reviews: 234, price: '₦14,500', unit: 'bottle' },
        { image: 'assets/Elevate Your Perfume Packaging with Premium Coatings and Printing.jpeg', badge: 'Top Seller', badgeClass: 'badge-hot', name: 'Luxury Perfume Collection — 6 Bottles', vendor: 'Glow Beauty Wholesale ✓', sub: 'Hall D, Shop 7 · Crystal-cut bottles', rating: 4.8, reviews: 310, price: '₦18,500', unit: 'set' },
        { image: 'assets/tf-beauty-1.jpg', badge: '-15%', badgeClass: 'badge-sale', name: 'Glow Body Cream Set × 3', vendor: 'Glow Beauty Wholesale ✓', sub: 'Hall D, Shop 7 · Mixed scents', rating: 4.6, reviews: 520, price: '₦9,500', oldPrice: '₦11,200', unit: 'set' },
        { image: 'assets/tf-beauty-2.jpg', badge: '', badgeClass: '', name: 'Brightening Serum — Vitamin C', vendor: 'Glow Beauty Wholesale ✓', sub: 'Hall D, Shop 7 · Wholesale packs available', rating: 4.5, reviews: 198, price: '₦6,800', unit: 'bottle' },
      ]
    },

    'trade-fair-shoes': {
      title: 'Shoes & Heels', categoryLabel: 'Shoes & Heels',
      totalProducts: 290, resultCount: 210,
      subcategories: [
        { label: 'Stilettos & Strappy Heels', count: 86 },
        { label: 'Platform Shoes', count: 72 },
        { label: 'Block Heels', count: 58 },
        { label: 'Sandals', count: 48 },
        { label: 'Flats & Slingbacks', count: 36 },
      ],
      featured: {
        image: "assets/Women's Patented High Heels Elevate your style….jpeg", label: 'Featured Vendor · Top Seller',
        name: "Women's Rose Gold Strappy Stiletto Heels",
        desc: 'Sleek patent leather stilettos with a single ankle strap and cross-strap toe. Rose gold mirror finish with gold-tone buckle. 10cm heel height. Sizes 36–42. A versatile evening heel that pairs with everything.',
        vendor: 'Step Queens Footwear', location: 'Hall B, Shop 3',
        ratingStr: '4.7 ★ (940)', minOrder: '1 pair',
        price: '₦19,500', unit: 'pair'
      },
      items: [
        { image: "assets/Women's Patented High Heels Elevate your style….jpeg", badge: 'Hot', badgeClass: 'badge-hot', name: 'Rose Gold Strappy Stiletto Heels', vendor: 'Step Queens Footwear ✓', sub: 'Hall B, Shop 3 · Sizes 36–42 · Patent leather', rating: 4.8, reviews: 620, price: '₦19,500', unit: 'pair' },
        { image: 'assets/As sapatilhas slingbacks mais queridinhas 🤩….jpeg', badge: 'New', badgeClass: 'badge-new', name: 'Pointed-Toe Leather Slingback Flats', vendor: 'Step Queens Footwear ✓', sub: 'Hall B, Shop 3 · Cognac · Sizes 36–41', rating: 4.9, reviews: 188, price: '₦15,800', unit: 'pair' },
        { image: 'assets/tf-shoes-1.jpg', badge: '-10%', badgeClass: 'badge-sale', name: 'Transparent Clear Mule Heels', vendor: 'Step Queens Footwear ✓', sub: 'Hall B, Shop 3 · 8cm block heel', rating: 4.6, reviews: 310, price: '₦13,500', oldPrice: '₦15,000', unit: 'pair' },
        { image: 'assets/tf-shoes-2.jpg', badge: '', badgeClass: '', name: 'Block Heel Court Shoes — Nude', vendor: 'Step Queens Footwear ✓', sub: 'Hall B, Shop 3 · Classic court style', rating: 4.5, reviews: 256, price: '₦16,500', unit: 'pair' },
        { image: "assets/Women's Patented High Heels Elevate your style….jpeg", badge: '-15%', badgeClass: 'badge-sale', name: 'Gold Mirror Ankle-Strap Heels', vendor: 'Step Queens Footwear ✓', sub: 'Hall B, Shop 3 · Evening wear · Sizes 36–42', rating: 4.7, reviews: 145, price: '₦17,000', oldPrice: '₦20,000', unit: 'pair' },
        { image: 'assets/As sapatilhas slingbacks mais queridinhas 🤩….jpeg', badge: 'Hot', badgeClass: 'badge-hot', name: 'Tan Cap-Toe Slingback Pumps', vendor: 'Step Queens Footwear ✓', sub: 'Hall B, Shop 3 · Work & casual · 3cm heel', rating: 4.8, reviews: 412, price: '₦14,200', unit: 'pair' },
      ]
    },

    'idumota-stationery': {
      title: 'Stationery & School Supplies', categoryLabel: 'Stationery',
      totalProducts: 460, resultCount: 310,
      subcategories: [
        { label: 'Notebooks & Journals', count: 98 },
        { label: 'Pens & Pencils', count: 76 },
        { label: 'Office Supplies', count: 54 },
        { label: 'Art Supplies', count: 42 },
        { label: 'School Bags', count: 38 },
        { label: 'Printer Supplies', count: 32 },
      ],
      featured: {
        image: 'assets/feat-idumota.jpg', label: 'Featured Vendor · Top Seller',
        name: 'JAMB/WAEC Study Pack Bundle — 5 Books',
        desc: 'Complete past-question bundle covering the 5 core subjects: English, Mathematics, Biology, Chemistry, and Physics. Includes worked solutions and 10-year question banks. Most popular student pack.',
        vendor: 'Book Palace Lagos', location: 'Row 1, Stall 5',
        ratingStr: '4.8 ★ (890)', minOrder: '1 pack',
        price: '₦8,500', unit: 'pack'
      },
      items: [
        { image: 'assets/pl-stat-1.jpg', badge: 'Hot', badgeClass: 'badge-hot', name: 'Hardcover A4 Notebook — 200 pages', vendor: 'StationeryWorld ✓', sub: 'Row 3, Stall 9 · Ruled', rating: 4.7, reviews: 420, price: '₦1,200', unit: 'piece' },
        { image: 'assets/pl-stat-2.jpg', badge: '-18%', badgeClass: 'badge-sale', name: 'Staedtler Ball Pen Set — 12 Pieces', vendor: 'StationeryWorld ✓', sub: 'Row 3, Stall 9 · Blue & Black', rating: 4.8, reviews: 356, price: '₦2,200', oldPrice: '₦2,700', unit: 'pack' },
        { image: 'assets/pl-stat-3.jpg', badge: 'New', badgeClass: 'badge-new', name: 'Personalised Gift Box — Medium', vendor: 'Gift Haus ✓', sub: 'Row 5, Stall 2 · Custom printing', rating: 4.9, reviews: 128, price: '₦3,500', unit: 'box' },
        { image: 'assets/pl-stat-4.jpg', badge: '', badgeClass: '', name: 'Lego Classic Creative Box — 484pcs', vendor: 'ToyBox Lagos ✓', sub: 'Row 7, Stall 14 · Ages 4+', rating: 4.9, reviews: 88, price: '₦18,000', unit: 'box' },
        { image: 'assets/pl-stat-5.jpg', badge: '-10%', badgeClass: 'badge-sale', name: 'HP 680 Ink Cartridge (Black)', vendor: 'StationeryWorld ✓', sub: 'Row 3, Stall 9 · Genuine', rating: 4.5, reviews: 234, price: '₦5,400', oldPrice: '₦6,000', unit: 'unit' },
        { image: 'assets/pl-stat-1.jpg', badge: 'Hot', badgeClass: 'badge-hot', name: 'A3 Motivational Wall Planner 2025', vendor: 'Gift Haus ✓', sub: 'Row 5, Stall 2 · Laminated', rating: 4.6, reviews: 312, price: '₦1,500', unit: 'piece' },
        { image: 'assets/pl-stat-2.jpg', badge: 'New', badgeClass: 'badge-new', name: 'Geometric Pencil Case — Canvas', vendor: 'StationeryWorld ✓', sub: 'Row 3, Stall 9 · 5 designs', rating: 4.7, reviews: 78, price: '₦1,800', unit: 'piece' },
        { image: 'assets/pl-stat-3.jpg', badge: '', badgeClass: '', name: 'Faber-Castell Colour Pencils — 24ct', vendor: 'Book Palace Lagos ✓', sub: 'Row 1, Stall 5 · Soft core', rating: 4.8, reviews: 196, price: '₦2,800', unit: 'pack' },
      ]
    },

    'oshodi-fashion': {
      title: 'Fashion & Streetwear', categoryLabel: 'Fashion',
      totalProducts: 980, resultCount: 720,
      subcategories: [
        { label: "Men's Fashion", count: 220 },
        { label: "Women's Fashion", count: 280 },
        { label: 'Sneakers & Footwear', count: 198 },
        { label: 'Caps & Headwear', count: 86 },
        { label: 'Bags & Wallets', count: 78 },
        { label: 'Accessories & Belts', count: 98 },
      ],
      featured: {
        image: 'assets/feat-oshodi.jpg', label: 'Featured Vendor · Top Seller',
        name: 'Men\'s Premium Corteiz-style Tracksuit',
        desc: 'High-quality 2-piece tracksuit set with embroidered logo. Thick fleece lining, zip-up top, and jogger pants with drawstring. Available in Black, Navy, Olive, and Burgundy. Sizes S–3XL.',
        vendor: 'StreetStyle Lagos', location: 'Block 3, Stall 7',
        ratingStr: '4.7 ★ (2,100)', minOrder: '1 set',
        price: '₦22,000', unit: 'set'
      },
      items: [
        { image: 'assets/pl-street-1.jpg', badge: 'Hot', badgeClass: 'badge-hot', name: 'Nike Air Force 1 Low (Grade A)', vendor: 'StepUp Footwear ✓', sub: 'Block 1, Stall 15 · Sizes 39–46', rating: 4.7, reviews: 560, price: '₦28,000', unit: 'pair' },
        { image: 'assets/pl-street-2.jpg', badge: '-15%', badgeClass: 'badge-sale', name: "Women's Wide-Leg Cargo Pants", vendor: 'StreetStyle Lagos ✓', sub: 'Block 3, Stall 7 · 6 colours', rating: 4.6, reviews: 312, price: '₦9,500', oldPrice: '₦11,200', unit: 'piece' },
        { image: 'assets/pl-street-3.jpg', badge: 'New', badgeClass: 'badge-new', name: 'Oversized Graphic Hoodie', vendor: 'StreetStyle Lagos ✓', sub: 'Block 3, Stall 7 · Unisex', rating: 4.8, reviews: 145, price: '₦14,500', unit: 'piece' },
        { image: 'assets/pl-street-4.jpg', badge: '', badgeClass: '', name: 'Jordan 4 Retro OG (Rep)', vendor: 'StepUp Footwear ✓', sub: 'Block 1, Stall 15 · Sizes 40–46', rating: 4.5, reviews: 234, price: '₦35,000', unit: 'pair' },
        { image: 'assets/pl-street-5.jpg', badge: '-10%', badgeClass: 'badge-sale', name: 'Polo Ralph Lauren Shirt', vendor: 'BrandHub Oshodi ✓', sub: 'Block 6, Stall 4 · Grade A', rating: 4.7, reviews: 289, price: '₦12,600', oldPrice: '₦14,000', unit: 'piece' },
        { image: 'assets/pl-street-1.jpg', badge: 'Hot', badgeClass: 'badge-hot', name: 'Bucket Hat — Premium Denim', vendor: 'Caps & Accessories ✓', sub: 'Block 5, Stall 4 · Unisex', rating: 4.6, reviews: 412, price: '₦4,200', unit: 'piece' },
        { image: 'assets/pl-street-2.jpg', badge: 'New', badgeClass: 'badge-new', name: "Women's Crossbody Mini Bag", vendor: 'Bag Central ✓', sub: 'Block 2, Stall 11 · PU leather', rating: 4.8, reviews: 78, price: '₦7,500', unit: 'piece' },
        { image: 'assets/pl-street-3.jpg', badge: '', badgeClass: '', name: 'Designer Belt Combo — 2 Pack', vendor: 'Caps & Accessories ✓', sub: 'Block 5, Stall 4 · 32"–40"', rating: 4.5, reviews: 198, price: '₦6,800', unit: 'set' },
      ]
    }

  }, // end listings

  // ---------------------------------------------------------------------------
  // FEATURED PRODUCTS shown on market-page.html  (large card + 2 small cards)
  // ---------------------------------------------------------------------------
  marketFeatured: {
    balogun: {
      large: {
        image: 'assets/feat-balogun.jpg',
        vendor: 'Mama Titi Fabrics', verified: true,
        name: 'Premium Ankara Wax Print',
        meta: 'Balogun Row 4, Stall 12 · Min. 3 yards',
        price: '₦2,400', unit: 'per yard',
      },
      small: [
        { image: 'assets/sm-balogun-1.jpg', vendor: 'Lagos Leather Co.', verified: true, name: 'Handcrafted Leather Tote', sub: 'Row 7 · Available in 4 colours', price: '₦18,500', badge: 'In stock', badgeClass: 'badge-green' },
        { image: 'assets/sm-balogun-2.jpg', vendor: 'Aso Oke Palace', verified: true, name: 'Aso-oke Wedding Set', sub: 'Row 2 · 3-piece, custom colours', price: '₦34,000', badge: '5 left', badgeClass: 'badge-orange' },
      ]
    },
    alaba: {
      large: {
        image: 'assets/Smart tv 32.jpeg',
        vendor: 'Mega Electronics', verified: true,
        name: 'Samsung 65" 4K Smart TV',
        meta: 'Block A, Shop 5 · 2-year warranty',
        price: '₦485,000', unit: 'per unit',
      },
      small: [
        { image: 'assets/cv-iphone16.jpeg', vendor: 'PhoneWorld Lagos', verified: true, name: 'iPhone 16 Pro Max 256GB', sub: 'Block B · Sealed in box', price: '₦1,280,000', badge: 'In stock', badgeClass: 'badge-green' },
        { image: 'assets/cv-macbook-m3.jpeg', vendor: 'Digital Hub Alaba', verified: true, name: 'Apple MacBook Air M3 13"', sub: 'Block C · 8GB/256GB SSD', price: '₦1,350,000', badge: '5 left', badgeClass: 'badge-orange' },
      ]
    },
    'computer-village': {
      large: {
        image: 'assets/cv-macbook-air-blue.jpeg',
        vendor: 'LaptopKing CV', verified: true,
        name: 'Apple MacBook Air M2 13" — Blue',
        meta: 'Shop 12, Row A · Available in 13" & 15"',
        price: '₦1,250,000', unit: 'per unit',
      },
      small: [
        { image: 'assets/cv-iphone15-blue.jpeg', vendor: 'SmartPhone Centre', verified: true, name: 'iPhone 15 128GB — Blue', sub: 'Shop 3, Row B · Sealed in box', price: '₦780,000', badge: 'In stock', badgeClass: 'badge-green' },
        { image: 'assets/cv-ipad-pink.jpeg', vendor: 'SmartPhone Centre', verified: true, name: 'iPad 10th Gen 256GB — Pink', sub: 'Shop 3, Row B · Sealed in box', price: '₦480,000', badge: '6 left', badgeClass: 'badge-orange' },
      ]
    },
    tejuosho: {
      large: {
        image: 'assets/feat-tejuosho.jpg',
        vendor: 'Lagos Fashion Hub', verified: true,
        name: 'Ankara Peplum Midi Set',
        meta: 'Row 2, Stall 4 · Sizes XS–3XL',
        price: '₦14,500', unit: 'per set',
      },
      small: [
        { image: 'assets/sm-tejuosho-1.jpg', vendor: 'Sole Republic', verified: true, name: 'Block Heel Sandals', sub: 'Row 5 · 6 colours', price: '₦9,800', badge: 'In stock', badgeClass: 'badge-green' },
        { image: 'assets/sm-tejuosho-2.jpg', vendor: 'Bag Avenue', verified: true, name: 'Structured Top Handle Bag', sub: 'Row 8 · 4 colours', price: '₦22,000', badge: '6 left', badgeClass: 'badge-orange' },
      ]
    },
    'mile-12': {
      large: {
        image: 'assets/_Fresh, vibrant veggies to brighten up your meals….jpeg',
        vendor: 'FreshFarm Direct', verified: true,
        name: 'Weekly Fresh Veg Box — 7 Varieties',
        meta: 'Section A, Stall 3 · Same-morning delivery',
        price: '₦4,500', unit: 'per box',
      },
      small: [
        { image: 'assets/875809458774827357.jpeg', vendor: 'FreshFarm Direct', verified: true, name: 'Red Chili Peppers (Shombo) — 2kg', sub: 'Section A · Freshly harvested', price: '₦2,200', badge: 'In stock', badgeClass: 'badge-green' },
        { image: 'assets/양파.jpeg', vendor: 'Grain Masters', verified: true, name: 'Onions Bag — 10kg', sub: 'Section B · Sokoto onions', price: '₦3,200', badge: 'Hot item', badgeClass: 'badge-orange' },
      ]
    },
    'trade-fair': {
      large: {
        image: 'assets/1121748219709108410.jpeg',
        vendor: 'Crown Jewels Wholesale', verified: true,
        name: 'Rhinestone Gold-Plated Statement Set — 4 Pieces',
        meta: 'Hall A, Shop 5 · Necklace + Earrings + Bracelet + Ring',
        price: '₦12,500', unit: 'per set',
      },
      small: [
        { image: 'assets/663506957634861484.jpeg', vendor: 'LuxeBag Depot', verified: true, name: 'Designer Beige Scarf Tote Bag', sub: 'Hall B · Comes with silk scarf', price: '₦26,000', badge: 'In stock', badgeClass: 'badge-green' },
        { image: "assets/Women's Patented High Heels Elevate your style….jpeg", vendor: 'Step Queens Footwear', verified: true, name: 'Rose Gold Strappy Stiletto Heels', sub: 'Hall B · Sizes 36–42 · Patent leather', price: '₦19,500', badge: 'Hot item', badgeClass: 'badge-orange' },
      ]
    },
    idumota: {
      large: {
        image: 'assets/feat-idumota.jpg',
        vendor: 'Book Palace Lagos', verified: true,
        name: 'JAMB/WAEC Study Pack — 5 Books',
        meta: 'Row 1, Stall 5 · With solutions',
        price: '₦8,500', unit: 'per pack',
      },
      small: [
        { image: 'assets/sm-idumota-1.jpg', vendor: 'ToyBox Lagos', verified: true, name: 'Lego Classic Creative Box — 484pcs', sub: 'Row 7 · Ages 4+', price: '₦18,000', badge: 'In stock', badgeClass: 'badge-green' },
        { image: 'assets/sm-idumota-2.jpg', vendor: 'Gift Haus', verified: true, name: 'Birthday Gift Box — Customised', sub: 'Row 5 · Same-day', price: '₦3,500', badge: 'Bespoke', badgeClass: 'badge-orange' },
      ]
    },
    oshodi: {
      large: {
        image: 'assets/feat-oshodi.jpg',
        vendor: 'StreetStyle Lagos', verified: true,
        name: "Men's Corteiz-style Tracksuit",
        meta: 'Block 3, Stall 7 · Sizes S–3XL',
        price: '₦22,000', unit: 'per set',
      },
      small: [
        { image: 'assets/sm-oshodi-1.jpg', vendor: 'StepUp Footwear', verified: true, name: 'Nike Air Force 1 (Grade A)', sub: 'Block 1 · Sizes 39–46', price: '₦28,000', badge: 'In stock', badgeClass: 'badge-green' },
        { image: 'assets/sm-oshodi-2.jpg', vendor: 'Bag Central', verified: true, name: "Women's Crossbody Mini Bag", sub: 'Block 2 · 5 colours', price: '₦7,500', badge: 'Hot item', badgeClass: 'badge-orange' },
      ]
    }
  }

  // ─────────────────────────────────────────────────────────────────────────
  // PRODUCT DETAILS  — rich content for the product-detail page
  // One entry per market; driven by that market's featured product.
  // ─────────────────────────────────────────────────────────────────────────
  ,productDetails: {

    balogun: {
      emoji: '🧵', badge: 'Top Seller',
      image: 'assets/feat-balogun.jpg',
      thumbImages: ['assets/pl-fabric-1.jpg','assets/pl-fabric-2.jpg','assets/pl-fabric-3.jpg','assets/pl-fabric-4.jpg'],
      subtitle: 'Authentic Dutch-wax Ankara sourced from certified mills. Vibrant colourfast prints, soft hand-feel, available in 40+ rotating patterns.',
      description: [
        "Mama Titi Fabrics has been a staple of Balogun Market since 1998, bringing the finest Dutch-wax Ankara prints direct from certified mills in Ghana and the Netherlands. Each bolt is inspected for colour fastness, thread count, and pattern alignment before it reaches our stall.",
        "Our Ankara wax prints are crafted using a traditional resist-dyeing technique that produces sharp, vivid patterns with remarkable durability. Unlike cheaper imitations, genuine Dutch-wax fabric will not fade even after repeated washing."
      ],
      care: "Hand wash or machine wash cold (max 30°C). Do not bleach. Iron on medium heat. Dry in shade to preserve colour vibrancy.",
      specs: [
        { label: 'Material', value: '100% Cotton (Dutch-wax)' },
        { label: 'Width', value: '44–46 inches' },
        { label: 'Weight', value: '180 GSM' },
        { label: 'Origin', value: 'Netherlands / Ghana' },
        { label: 'Wash', value: 'Machine wash cold' },
      ],
      sold: '3,842 yards', unitLabel: 'yards', minOrder: 3, vendorYears: '27yr',
      patterns: ['Burnt Sienna Kente', 'Navy Blue Abstract', 'Green Floral', 'Purple Adire', 'Gold Tribal', 'Red Geometric'],
      reviews: [
        { name: 'Adaeze Okonkwo', date: 'April 12, 2025', rating: 5, text: "Absolutely stunning fabric. I ordered 6 yards for my daughter's birthday dress and the colour is even more vibrant in person. Delivery was same day — couldn't be happier." },
        { name: 'Tunde Bakare', date: 'March 28, 2025', rating: 4, text: "Great quality, consistent with description. I've bought from Mama Titi three times now. Fast, reliable and the fabric doesn't disappoint." },
        { name: 'Ngozi Eze', date: 'March 15, 2025', rating: 5, text: "Perfect for a traditional ceremony set. Made two full outfits and had a little left over. I'll be ordering the blue variant next time." },
      ],
      related: [
        { emoji: '🧣', image: 'assets/pl-fabric-2.jpg', name: 'Swiss Voile Lace', vendor: 'Lace Kingdom · Row 6', price: '₦4,500', unit: '/yd', market: 'balogun', product: 1 },
        { emoji: '👜', image: 'assets/sm-balogun-1.jpg', name: 'Handcraft Leather Tote', vendor: 'Lagos Leather Co. · Row 7', price: '₦18,500', unit: '', market: 'balogun', product: 2 },
        { emoji: '🎨', image: 'assets/pl-fabric-3.jpg', name: 'Indigo Adire Eleko', vendor: 'Adire Hub · Row 9', price: '₦3,200', unit: '/yd', market: 'balogun', product: 3 },
        { emoji: '🧣', image: 'assets/sm-balogun-2.jpg', name: 'Aso-oke Wedding Set', vendor: 'Aso Oke Palace · Row 2', price: '₦34,000', unit: '', market: 'balogun', product: 4 },
      ]
    },

    alaba: {
      emoji: '📺', badge: 'Top Seller',
      image: 'assets/Smart tv 32.jpeg',
      thumbImages: ['assets/Smart tv 32.jpeg','assets/cv-iphone16.jpeg','assets/cv-macbook-m3.jpeg','assets/Qulomvs Mesh Ergonomic Office Chair with Footrest Home Office Desk Chair with Headrest and Backrest 90-135 Adjustable Computer Executive Desk Chair with Wheels 360 Swivel Task Chair.jpeg'],
      subtitle: 'Crystal-clear 4K UHD with built-in Netflix, YouTube, and Amazon Prime. Motion Rate 120, HDR10+.',
      description: [
        "Mega Electronics is Alaba's most trusted Samsung-authorised dealer with over 15 years of operation. Every television sold comes with an authentic manufacturer warranty and full Lagos delivery service.",
        "The Samsung 65\" 4K UHD Smart TV features a Crystal Processor 4K that upscales all content to near-4K quality. The Tizen OS gives you access to every major streaming platform and even screen mirroring from your phone."
      ],
      care: "Wipe the screen gently with a soft dry cloth. Avoid harsh chemicals. Keep away from direct sunlight.",
      specs: [
        { label: 'Screen Size', value: '65 inches' },
        { label: 'Resolution', value: '4K UHD (3840 × 2160)' },
        { label: 'HDR', value: 'HDR10+' },
        { label: 'OS', value: 'Tizen (Samsung Smart TV)' },
        { label: 'Connectivity', value: 'WiFi, Bluetooth, 3× HDMI, 2× USB' },
      ],
      sold: '428 units', unitLabel: 'unit', minOrder: 1, vendorYears: '15yr',
      reviews: [
        { name: 'Emeka Nwosu', date: 'May 18, 2025', rating: 5, text: "Best TV purchase I've made in years. Delivery was same day, very well packaged. The 4K quality is stunning. Highly recommend Mega Electronics." },
        { name: 'Yetunde Alade', date: 'May 5, 2025', rating: 5, text: "Legitimate product, original warranty card included. Picture quality is amazing. Very happy with the whole Market Mirror experience." },
        { name: 'Babatunde Okafor', date: 'April 22, 2025', rating: 4, text: "Good TV at a fair price. Setup was easy and Tizen OS is smooth. Deducting one star because delivery took slightly longer than expected." },
      ],
      related: [
        { emoji: '🔊', image: 'assets/cv-airpods-max.jpeg', name: 'Apple AirPods Max — Midnight', vendor: 'SoundPro Alaba · Block B', price: '₦275,000', unit: '', market: 'alaba', product: 2 },
        { emoji: '📱', image: 'assets/cv-iphone15-blue.jpeg', name: 'iPhone 15 128GB — Blue', vendor: 'PhoneWorld Lagos · Block B', price: '₦780,000', unit: '', market: 'alaba', product: 3 },
        { emoji: '💻', image: 'assets/cv-macbook-m3.jpeg', name: 'Apple MacBook Air M3 13"', vendor: 'Digital Hub · Block C', price: '₦1,350,000', unit: '', market: 'alaba', product: 5 },
        { emoji: '📱', image: 'assets/cv-iphone16.jpeg', name: 'iPhone 16 Pro Max 256GB', vendor: 'PhoneWorld · Block B', price: '₦1,280,000', unit: '', market: 'alaba', product: 0 },
      ]
    },

    'computer-village': {
      emoji: '💻', badge: 'Top Seller',
      image: 'assets/cv-macbook-air-blue.jpeg',
      thumbImages: ['assets/cv-macbook-m3.jpeg','assets/cv-imac-setup.jpeg','assets/cv-ipad-pink.jpeg','assets/cv-airpods-max.jpeg'],
      subtitle: 'The world\'s thinnest MacBook. M2 chip, 8-core CPU, 8GB RAM, up to 18 hours battery life.',
      description: [
        "LaptopKing CV is Computer Village's #1 rated Apple reseller, stocking authentic MacBooks, iPads, and accessories. Every unit is sourced from authorised Apple distributors and comes with a valid Apple warranty.",
        "The MacBook Air M2 is powered by Apple's groundbreaking M2 chip — the fastest chip ever in a thin-and-light laptop. With up to 18 hours of battery life and a fanless design, it's perfect for professionals, students, and creatives."
      ],
      care: "Clean with a soft, slightly damp lint-free cloth. Avoid getting moisture in openings. Do not use aerosol sprays or abrasives.",
      specs: [
        { label: 'Chip', value: 'Apple M2 (8-core CPU, 8-core GPU)' },
        { label: 'RAM', value: '8GB unified memory' },
        { label: 'Storage', value: '256GB SSD' },
        { label: 'Display', value: '13.6" Liquid Retina, 2560×1664' },
        { label: 'Battery', value: 'Up to 18 hours' },
      ],
      sold: '1,240 units', unitLabel: 'unit', minOrder: 1, vendorYears: '10yr',
      reviews: [
        { name: 'Chidera Obi', date: 'May 20, 2025', rating: 5, text: "Completely genuine product with Apple box, warranty card and all accessories. LaptopKing is the real deal. Already recommended to 4 people." },
        { name: 'Amaka Eze', date: 'May 3, 2025', rating: 5, text: "Fast delivery to Lekki. Laptop was sealed and registered with Apple ID first time. M2 performance is incredible — I'm editing videos on it now." },
        { name: 'Segun Adeyemi', date: 'April 18, 2025', rating: 4, text: "Legit MacBook, great service. Only minor thing is I would have preferred more secure packaging for such a premium item." },
      ],
      related: [
        { emoji: '📱', image: 'assets/cv-iphone15-blue.jpeg', name: 'iPhone 15 128GB — Blue', vendor: 'SmartPhone Centre · Shop 3', price: '₦780,000', unit: '', market: 'computer-village', product: 4 },
        { emoji: '📱', image: 'assets/cv-ipad-pink.jpeg', name: 'iPad 10th Gen 256GB — Pink', vendor: 'SmartPhone Centre · Shop 3', price: '₦480,000', unit: '', market: 'computer-village', product: 3 },
        { emoji: '💻', image: 'assets/cv-macbook-air-blue.jpeg', name: 'MacBook Air M2 13" — Blue', vendor: 'LaptopKing CV · Shop 12', price: '₦1,250,000', unit: '', market: 'computer-village', product: 2 },
        { emoji: '🖥️', image: 'assets/cv-imac-setup.jpeg', name: 'iMac 24" M3 — Blue', vendor: 'DesktopWorld · Shop 7', price: '₦1,850,000', unit: '', market: 'computer-village', product: 1 },
      ]
    },

    tejuosho: {
      emoji: '👗', badge: 'Top Seller',
      image: 'assets/feat-tejuosho.jpg',
      thumbImages: ['assets/pl-fashion-1.jpg','assets/pl-fashion-2.jpg','assets/pl-fashion-3.jpg','assets/pl-fashion-4.jpg'],
      subtitle: 'Beautifully tailored 2-piece Ankara set with matching headwrap. Available in 15 fabric patterns. Sizes XS–3XL.',
      description: [
        "Lagos Fashion Hub is Tejuosho's most celebrated fashion vendor, known for impeccable tailoring and vibrant Ankara designs. Founded by Blessing Eze in 2012, the stall has grown from a single sewing machine to a full fashion workshop serving thousands of clients annually.",
        "The Ankara Peplum Midi Set is our signature piece — a flattering cut that works for owambe parties, corporate events, and everything in between. Each set is made to order with your choice of fabric from our rolling collection of over 15 Ankara patterns."
      ],
      care: "Dry clean recommended. If hand-washing, use cold water and mild detergent. Do not tumble dry. Iron inside out on medium heat.",
      specs: [
        { label: 'Set Includes', value: 'Top + Skirt + Headwrap' },
        { label: 'Sizes', value: 'XS, S, M, L, XL, 2XL, 3XL' },
        { label: 'Fabric', value: 'Premium Ankara (100% Cotton)' },
        { label: 'Turnaround', value: '2–3 days (custom) or ready-made' },
        { label: 'Customisation', value: 'Length, neckline, sleeve style' },
      ],
      sold: '892 sets', unitLabel: 'set', minOrder: 1, vendorYears: '13yr',
      patterns: ['Crimson & Gold Burst', 'Teal River Print', 'Cobalt Geometric', 'Emerald & Black', 'Sunrise Kente', 'Violet Tribal'],
      reviews: [
        { name: 'Kemi Adeyinka', date: 'May 22, 2025', rating: 5, text: "I wore this to my friend's wedding and received so many compliments. Perfect fit, beautiful fabric. Blessing is incredibly talented and responsive." },
        { name: 'Zainab Musa', date: 'May 10, 2025', rating: 5, text: "Ordered custom size and it came out perfect. Ready in 2 days as promised. This is my go-to for every event outfit now." },
        { name: 'Tola Fashola', date: 'April 30, 2025', rating: 4, text: "Beautiful set, exactly as shown. Delivery took 3 days instead of 2. Quality is absolutely worth it though." },
      ],
      related: [
        { emoji: '👠', image: 'assets/sm-tejuosho-1.jpg', name: 'Block Heel Sandals', vendor: 'Sole Republic · Row 5', price: '₦9,800', unit: '', market: 'tejuosho', product: 0 },
        { emoji: '👜', image: 'assets/sm-tejuosho-2.jpg', name: 'Structured Top Handle Bag', vendor: 'Bag Avenue · Row 8', price: '₦22,000', unit: '', market: 'tejuosho', product: 2 },
        { emoji: '👗', image: 'assets/pl-fashion-2.jpg', name: "Women's Bodycon Dress", vendor: 'Style Queen · Row 4', price: '₦8,000', unit: '', market: 'tejuosho', product: 1 },
        { emoji: '👧', image: 'assets/pl-fashion-4.jpg', name: "Girls Party Dress", vendor: 'Tiny Threads · Row 11', price: '₦5,500', unit: '', market: 'tejuosho', product: 7 },
      ]
    },

    'mile-12': {
      emoji: '🥦', badge: 'Top Seller',
      image: 'assets/_Fresh, vibrant veggies to brighten up your meals….jpeg',
      thumbImages: ['assets/875809458774827357.jpeg','assets/970736894669637684.jpeg','assets/822047738278417136.jpeg','assets/양파.jpeg'],
      subtitle: 'A curated weekly box of 7 farm-fresh vegetables — tomatoes, broccoli, carrots, peppers, cucumber, green onions, and herbs.',
      description: [
        "FreshFarm Direct sources produce daily from verified farms in Kaduna, Jos, Ogun, and Kano states. Our Weekly Fresh Veg Box is hand-packed each morning with whatever is freshest that day — minimum 7 varieties, always photographed before dispatch so you know exactly what's inside.",
        "From vine-ripe tomatoes and crunchy broccoli to sweet carrots, colourful bell peppers, crisp cucumber, green onions, and aromatic herbs — each box is a complete weekly shopping trip for your kitchen, delivered before 8AM."
      ],
      care: "Store leafy greens and herbs in the fridge. Keep tomatoes and peppers at room temperature. Use within 4–6 days of delivery for peak freshness.",
      specs: [
        { label: 'Contents', value: '7 vegetable varieties (changes seasonally)' },
        { label: 'Origin', value: 'Kaduna, Jos, Ogun & Kano farms' },
        { label: 'Weight', value: 'Approx. 3–4kg total' },
        { label: 'Harvest', value: 'Daily — order by 6PM for next-morning' },
        { label: 'Shelf Life', value: '4–6 days refrigerated' },
      ],
      sold: '1,840 boxes', unitLabel: 'box', minOrder: 1, vendorYears: '8yr',
      reviews: [
        { name: 'Chef Emeka', date: 'May 28, 2025', rating: 5, text: "I order a box every week for my restaurant. The variety is always excellent and everything arrives crisp and fresh before 8AM. FreshFarm is the most reliable produce vendor I've found in Lagos." },
        { name: 'Mama Chidi', date: 'May 15, 2025', rating: 5, text: "Best discovery on Market Mirror! Everything in the box was beautiful — the broccoli was firm, carrots sweet, and tomatoes perfectly ripe. Already subscribed weekly." },
        { name: 'Temi Oladipo', date: 'May 2, 2025', rating: 4, text: "Really good quality vegetables, very fresh. The only thing I'd say is pack the herbs in a separate wrap so they don't get crushed. Otherwise excellent." },
      ],
      related: [
        { emoji: '🌶️', image: 'assets/875809458774827357.jpeg', name: 'Red Chili Peppers — 2kg', vendor: 'FreshFarm Direct · Section A', price: '₦2,200', unit: '', market: 'mile-12', product: 0 },
        { emoji: '🥕', image: 'assets/970736894669637684.jpeg', name: 'Fresh Carrots — 1kg Bunch', vendor: 'FreshFarm Direct · Section A', price: '₦900', unit: '', market: 'mile-12', product: 1 },
        { emoji: '🧅', image: 'assets/양파.jpeg', name: 'Onions Bag — 10kg', vendor: 'Grain Masters · Section B', price: '₦3,200', unit: '', market: 'mile-12', product: 3 },
        { emoji: '🥩', image: 'assets/Our grass-fed diced chuck is perfect for your….jpeg', name: 'Fresh Diced Beef (Chuck) — 1kg', vendor: 'FreshFarm Direct · Section A', price: '₦4,200', unit: '', market: 'mile-12', product: 6 },
      ]
    },

    'trade-fair': {
      emoji: '💍', badge: 'Top Seller',
      image: 'assets/feat-tradefair.jpg',
      thumbImages: ['assets/tf-jewelry-1.jpg','assets/tf-jewelry-2.jpg','assets/tf-watch-1.jpg','assets/tf-accessories-1.jpg'],
      subtitle: 'Stunning 18K gold-plated 3-piece set — layered necklace, stud earrings and cuff bracelet. Tarnish-resistant, hypoallergenic.',
      description: [
        "Crown Jewels Wholesale is Trade Fair Complex's most celebrated jewelry dealer, supplying boutiques, market traders, and fashion retailers across Lagos and beyond. Founded by Amaka Okonkwo in 2009, the stall stocks over 480 designs at genuine wholesale prices — from everyday gold chains to statement party pieces.",
        "Our Gold-Plated 3-Piece Jewelry Set is our flagship bundle — a beautifully coordinated layered necklace, matching stud earrings, and adjustable cuff bracelet. Each piece is coated with 18K gold plating over hypoallergenic brass, giving you lasting shine without the luxury price tag."
      ],
      care: "Avoid contact with water, perfume, and lotion. Store in the pouch provided. Clean gently with a soft dry cloth. Remove before sleeping or exercising.",
      specs: [
        { label: 'Material', value: '18K Gold-plated brass' },
        { label: 'Set Includes', value: 'Necklace + Earrings + Bracelet' },
        { label: 'Finish', value: 'Tarnish-resistant coating' },
        { label: 'Skin Safe', value: 'Hypoallergenic' },
        { label: 'Available In', value: 'Gold, Rose Gold, Silver' },
      ],
      sold: '6,840 sets', unitLabel: 'set', minOrder: 1, vendorYears: '16yr',
      patternLabel: 'Select Finish', patterns: ['Gold', 'Rose Gold', 'Silver', 'Two-tone Gold & Silver'],
      reviews: [
        { name: 'Chisom Obi', date: 'May 20, 2025', rating: 5, text: "Absolutely beautiful set! I bought 10 for my boutique and every single one sold within a week. The gold finish is stunning and hasn't tarnished at all. Crown Jewels is my go-to wholesale supplier." },
        { name: 'Tunde Adeyemi', date: 'May 7, 2025', rating: 5, text: "Bought this as a birthday gift for my wife and she absolutely loves it. Came in a beautiful box, looks way more expensive than it is. Fast delivery to Ikorodu too." },
        { name: 'Halima Sule', date: 'April 28, 2025', rating: 4, text: "Great quality for the price. I ordered the rose gold version and it's gorgeous. Delivery was prompt. Will order the silver version next time." },
      ],
      related: [
        { emoji: '👜', image: 'assets/tf-bags-1.jpg', name: 'Designer Tote Bag — Tan', vendor: 'LuxeBag Depot · Hall B', price: '\u20a624,000', unit: '', market: 'trade-fair', product: 0 },
        { emoji: '👠', image: 'assets/tf-shoes-2.jpg', name: 'Block Heel Court Shoes', vendor: 'Step Queens · Hall B', price: '\u20a616,500', unit: '', market: 'trade-fair', product: 4 },
        { emoji: '🧴', image: 'assets/tf-beauty-1.jpg', name: 'Glow Body Cream Set × 3', vendor: 'Glow Beauty · Hall D', price: '\u20a69,500', unit: '', market: 'trade-fair', product: 3 },
        { emoji: '💇', image: 'assets/tf-hair-1.jpg', name: 'Brazilian Lace Front Wig 18\"', vendor: 'Glam Hair Hub · Hall C', price: '\u20a685,000', unit: '', market: 'trade-fair', product: 2 },
      ]
    },

    idumota: {
      emoji: '📚', badge: 'Top Seller',
      image: 'assets/feat-idumota.jpg',
      thumbImages: ['assets/pl-stat-1.jpg','assets/pl-stat-2.jpg','assets/pl-stat-3.jpg','assets/pl-stat-4.jpg'],
      subtitle: 'Complete past-question bundle covering 5 core subjects with worked solutions and 10-year question banks.',
      description: [
        "Book Palace Lagos has been Idumota's most beloved bookshop since 1987, run by retired Professor Ade Williams. The JAMB/WAEC Study Pack is their bestselling product, carefully curated each year to reflect the latest exam patterns and marking schemes.",
        "Each pack includes English Language, Mathematics, Biology, Chemistry, and Physics — the five subjects most candidates need. All past questions are fully worked with clear explanations, plus exam tips from top-scoring alumni."
      ],
      care: "Store books in a cool, dry place away from direct sunlight. Avoid moisture exposure. Handle with clean hands to preserve print quality.",
      specs: [
        { label: 'Subjects', value: 'English, Maths, Biology, Chemistry, Physics' },
        { label: 'Years Covered', value: '2015–2024 (10 years)' },
        { label: 'Pages', value: '~800 pages total (5 books)' },
        { label: 'Format', value: 'A4, colour-coded sections' },
        { label: 'Extras', value: 'Exam tips, time management guide' },
      ],
      sold: '8,124 packs', unitLabel: 'pack', minOrder: 1, vendorYears: '37yr',
      reviews: [
        { name: 'Chidimma Okafor', date: 'May 29, 2025', rating: 5, text: "I used this pack to score 312 in JAMB! The worked solutions are incredibly clear. Book Palace is the real deal. My younger sibling is ordering the same set now." },
        { name: 'Bello Abubakar', date: 'May 16, 2025', rating: 5, text: "Best study material I've used. Delivery was fast, books are in excellent condition. The exam tips section alone is worth the money." },
        { name: 'Funmi Adeleke', date: 'April 25, 2025', rating: 5, text: "Affordable, comprehensive, and clearly written. Was struggling with Chemistry but this pack's explanations finally made things click for me." },
      ],
      related: [
        { emoji: '✏️', image: 'assets/pl-stat-2.jpg', name: 'Staedtler Ball Pen Set 12pcs', vendor: 'StationeryWorld · Row 3', price: '₦2,200', unit: '', market: 'idumota', product: 1 },
        { emoji: '📓', image: 'assets/pl-stat-1.jpg', name: 'Hardcover A4 Notebook 200pg', vendor: 'StationeryWorld · Row 3', price: '₦1,200', unit: '', market: 'idumota', product: 0 },
        { emoji: '🎁', image: 'assets/sm-idumota-2.jpg', name: 'Personalised Gift Box', vendor: 'Gift Haus · Row 5', price: '₦3,500', unit: '', market: 'idumota', product: 2 },
        { emoji: '🎮', image: 'assets/sm-idumota-1.jpg', name: 'Lego Classic Creative Box 484pcs', vendor: 'ToyBox Lagos · Row 7', price: '₦18,000', unit: '', market: 'idumota', product: 3 },
      ]
    },

    oshodi: {
      emoji: '👚', badge: 'Top Seller',
      image: 'assets/feat-oshodi.jpg',
      thumbImages: ['assets/pl-street-1.jpg','assets/pl-street-2.jpg','assets/pl-street-3.jpg','assets/pl-street-4.jpg'],
      subtitle: 'High-quality 2-piece tracksuit with embroidered logo. Thick fleece lining, zip-up top, and drawstring joggers.',
      description: [
        "StreetStyle Lagos is Oshodi Market's most popular streetwear vendor, carrying the latest fashion trends at prices that make Lagos fashion accessible to everyone. Founded by Dayo Akinwale in 2016, StreetStyle is known for quality checks on every piece before it goes on the rack.",
        "The Premium Corteiz-style Tracksuit is our year-round bestseller — a heavy fleece-lined set that's equally at home in an air-conditioned office or a casual weekend outing. Available in 4 colourways, each embroidered with our signature logo."
      ],
      care: "Machine wash cold (30°C). Turn inside out before washing. Do not tumble dry on high heat. Iron on low. Colours may run slightly on first wash — wash separately.",
      specs: [
        { label: 'Set Includes', value: 'Zip-up jacket + Jogger trousers' },
        { label: 'Sizes', value: 'S, M, L, XL, 2XL, 3XL' },
        { label: 'Material', value: '65% Cotton, 35% Polyester fleece' },
        { label: 'Colours', value: 'Black, Navy, Olive, Burgundy' },
        { label: 'Branding', value: 'Embroidered chest logo' },
      ],
      sold: '5,640 sets', unitLabel: 'set', minOrder: 1, vendorYears: '9yr',
      patternLabel: 'Select Colour', patterns: ['All Black', 'Navy Blue', 'Olive Green', 'Burgundy Red'],
      reviews: [
        { name: 'Lanre Adewale', date: 'May 27, 2025', rating: 5, text: "Honestly surprised by the quality. The fleece is thick and warm, not thin like the usual market stuff. Bought the navy blue set and already ordered burgundy." },
        { name: 'Precious Nwosu', date: 'May 14, 2025', rating: 5, text: "Great fit, true to size. Fast delivery to Surulere. StreetStyle always delivers (pun intended). This is my 4th purchase from them on Market Mirror." },
        { name: 'Yemi Fashola', date: 'May 1, 2025', rating: 4, text: "Good quality tracksuit at a very fair price. Sizing tip: go one size up if you prefer a more relaxed fit." },
      ],
      related: [
        { emoji: '👟', image: 'assets/sm-oshodi-1.jpg', name: 'Nike Air Force 1 (Grade A)', vendor: 'StepUp Footwear · Block 1', price: '₦28,000', unit: '', market: 'oshodi', product: 0 },
        { emoji: '🧢', image: 'assets/pl-street-1.jpg', name: 'Bucket Hat — Premium Denim', vendor: 'Caps & Accessories · Block 5', price: '₦4,200', unit: '', market: 'oshodi', product: 5 },
        { emoji: '👝', image: 'assets/sm-oshodi-2.jpg', name: "Women's Crossbody Mini Bag", vendor: 'Bag Central · Block 2', price: '₦7,500', unit: '', market: 'oshodi', product: 6 },
        { emoji: '👕', image: 'assets/pl-street-3.jpg', name: 'Oversized Graphic Hoodie', vendor: 'StreetStyle Lagos · Block 3', price: '₦14,500', unit: '', market: 'oshodi', product: 2 },
      ]
    },

  // ---------------------------------------------------------------------------
  // PER-PRODUCT DETAILS  keyed by "{marketId}-{defaultCategory}-{productIndex}"
  // Falls back to productDetails[marketId] (market-level default above)
  // ---------------------------------------------------------------------------

    // ── ALABA · ELECTRONICS ──────────────────────────────────────────────────
    'alaba-electronics-0': {
      emoji:'📱', badge:'Hot',
      image:'assets/cv-iphone16.jpeg',
      thumbImages:['assets/cv-iphone16.jpeg','assets/cv-iphone15-blue.jpeg','assets/cv-airpods-max.jpeg','assets/cv-macbook-m3.jpeg'],
      subtitle:'Titanium design with A18 Pro chip, 48MP ProRAW camera, Action Button, and the largest 6.9″ Super Retina XDR display ever.',
      description:[
        "PhoneWorld Lagos is Alaba's most trusted Apple reseller, sourcing factory-sealed iPhones directly from authorised UAE and UK distributors. Every unit includes the original Apple box, USB-C cable, documentation, and a 1-year manufacturer warranty.",
        "The iPhone 16 Pro Max features Apple's A18 Pro chip with hardware-accelerated ray tracing. The 6.9″ Super Retina XDR display hits 2000 nits peak brightness. A 48MP Fusion Camera with 5× optical zoom shoots 4K 120fps ProRes video, and the new Camera Control button gives instant access to shooting modes."
      ],
      care:"Use only Apple-certified USB-C accessories. Avoid extreme temperatures. A screen protector and protective case are strongly recommended.",
      specs:[
        {label:'Storage', value:'256GB'},
        {label:'Display', value:'6.9″ Super Retina XDR (OLED)'},
        {label:'Chip', value:'Apple A18 Pro'},
        {label:'Camera', value:'48MP main + 48MP ultra-wide + 12MP 5× telephoto'},
        {label:'Battery', value:'Up to 33 hours video playback'}
      ],
      sold:'320 units', unitLabel:'unit', minOrder:1, vendorYears:'12yr',
      reviews:[
        {name:'Emeka Okafor', date:'May 20, 2025', rating:5, text:"Original box, original charger, Apple sticker intact. PhoneWorld is the real deal in Alaba. Camera quality is unbelievable!"},
        {name:'Adunola Adeyemi', date:'May 8, 2025', rating:5, text:"Bought two units — both sealed, both registered perfectly with Apple. Fast delivery to Victoria Island. Will definitely order again."},
        {name:'Tunde Bello', date:'April 30, 2025', rating:4, text:"Genuine phone, verified IMEI checks out clean. Delivery took one extra day but the product quality is flawless."}
      ],
      related:[
        {emoji:'📱', image:'assets/cv-iphone15-blue.jpeg', name:'iPhone 15 128GB — Blue', vendor:'PhoneWorld Lagos · Block B', price:'₦780,000', unit:'', market:'alaba', product:3},
        {emoji:'🎧', image:'assets/cv-airpods-max.jpeg', name:'Apple AirPods Max', vendor:'SoundPro Alaba · Block B', price:'₦275,000', unit:'', market:'alaba', product:2},
        {emoji:'💻', image:'assets/cv-macbook-m3.jpeg', name:'MacBook Air M3 13″', vendor:'Digital Hub · Block C', price:'₦1,350,000', unit:'', market:'alaba', product:5},
        {emoji:'🖥️', image:'assets/_ (9).jpeg', name:'iMac 24″ M3 Desktop Setup', vendor:'Digital Hub · Block C', price:'₦1,850,000', unit:'', market:'alaba', product:7}
      ]
    },

    'alaba-electronics-1': {
      emoji:'📺', badge:'-10%',
      image:'assets/Smart tv 32.jpeg',
      thumbImages:['assets/Smart tv 32.jpeg','assets/cv-iphone16.jpeg','assets/cv-airpods-max.jpeg','assets/_ (9).jpeg'],
      subtitle:'Crystal-clear HD Smart TV with built-in Netflix, YouTube, and Wi-Fi. Perfect for bedrooms, small living rooms, and office receptions.',
      description:[
        "Mega Electronics is Alaba's most established home appliance dealer and an authorised Hisense distributor for over 10 years. Every TV is sold with the manufacturer warranty card, remote control, power cable, and tabletop stand.",
        "The Hisense 32″ Smart TV runs a clean Android TV interface giving you direct access to Netflix, YouTube, Prime Video, and all major streaming apps. The HD panel delivers vivid colours and sharp detail, while built-in Wi-Fi removes the need for any additional cable box."
      ],
      care:"Wipe the screen gently with a soft dry cloth. Avoid harsh chemicals. Do not expose to direct sunlight for extended periods.",
      specs:[
        {label:'Screen Size', value:'32 inches'},
        {label:'Resolution', value:'HD Ready (1366 × 768)'},
        {label:'OS', value:'Android TV / VIDAA'},
        {label:'Connectivity', value:'WiFi, 2× HDMI, 1× USB, Bluetooth'},
        {label:'Warranty', value:'1 year manufacturer'}
      ],
      sold:'289 units', unitLabel:'unit', minOrder:1, vendorYears:'15yr',
      reviews:[
        {name:'Yetunde Alade', date:'May 5, 2025', rating:5, text:"Bought for our guest room. Setup was quick, Netflix quality is perfect for the size. Mega Electronics delivered same day!"},
        {name:'Babatunde Okafor', date:'April 22, 2025', rating:4, text:"Good TV at a fair price. Android TV works well. Delivery took slightly longer than expected but well worth it."},
        {name:'Chioma Eze', date:'April 10, 2025', rating:5, text:"Perfect bedroom TV. Clear picture, easy remote, and built-in WiFi works seamlessly. Very happy with my Market Mirror purchase."}
      ],
      related:[
        {emoji:'📱', image:'assets/cv-iphone16.jpeg', name:'iPhone 16 Pro Max', vendor:'PhoneWorld Lagos · Block B', price:'₦1,280,000', unit:'', market:'alaba', product:0},
        {emoji:'🎧', image:'assets/cv-airpods-max.jpeg', name:'Apple AirPods Max', vendor:'SoundPro Alaba · Block B', price:'₦275,000', unit:'', market:'alaba', product:2},
        {emoji:'💻', image:'assets/cv-macbook-m3.jpeg', name:'MacBook Air M3', vendor:'Digital Hub · Block C', price:'₦1,350,000', unit:'', market:'alaba', product:5},
        {emoji:'🪑', image:'assets/Qulomvs Mesh Ergonomic Office Chair with Footrest Home Office Desk Chair with Headrest and Backrest 90-135 Adjustable Computer Executive Desk Chair with Wheels 360 Swivel Task Chair.jpeg', name:'Ergonomic Mesh Chair', vendor:'FurniTech Alaba · Block E', price:'₦65,000', unit:'', market:'alaba', product:4}
      ]
    },

    'alaba-electronics-2': {
      emoji:'🎧', badge:'New',
      image:'assets/cv-airpods-max.jpeg',
      thumbImages:['assets/cv-airpods-max.jpeg','assets/cv-iphone16.jpeg','assets/cv-iphone15-blue.jpeg','assets/Smart tv 32.jpeg'],
      subtitle:'Premium over-ear headphones with industry-leading Active Noise Cancellation, Transparency mode, and Adaptive EQ.',
      description:[
        "SoundPro Alaba is the go-to audio accessories dealer in Alaba International Market, stocking genuine Apple, Sony, and JBL products. All AirPods Max units come in original Apple sealed packaging with a 1-year warranty.",
        "AirPods Max deliver an extraordinary listening experience. The custom-built dynamic driver and H1 chip in each ear cup enable Adaptive EQ, Active Noise Cancellation, and Spatial Audio. The breathable knit mesh headband and memory foam ear cushions provide all-day comfort."
      ],
      care:"Store in the included smart case to preserve battery. Clean ear cushions with a soft dry cloth. Avoid submerging in water.",
      specs:[
        {label:'Driver', value:'Custom high-excursion Apple dynamic'},
        {label:'ANC', value:'Active Noise Cancellation + Transparency mode'},
        {label:'Battery', value:'Up to 20 hours (ANC on)'},
        {label:'Connectivity', value:'Bluetooth 5.0 · H1 chip'},
        {label:'Colour', value:'Midnight'}
      ],
      sold:'198 units', unitLabel:'unit', minOrder:1, vendorYears:'8yr',
      reviews:[
        {name:'Kemi Adeyemi', date:'May 18, 2025', rating:5, text:"These headphones are incredible. The noise cancellation is on another level. Genuine product, fast delivery from SoundPro!"},
        {name:'Chukwuma Nwosu', date:'May 3, 2025', rating:5, text:"Bought for WFH use. The sound quality and ANC together make a huge difference. Delivery was fast, packaging perfect."},
        {name:'Fatima Hassan', date:'April 25, 2025', rating:4, text:"Amazing sound quality. Comfort is excellent even after hours of wear. The smart case is a nice touch."}
      ],
      related:[
        {emoji:'📱', image:'assets/cv-iphone16.jpeg', name:'iPhone 16 Pro Max', vendor:'PhoneWorld Lagos · Block B', price:'₦1,280,000', unit:'', market:'alaba', product:0},
        {emoji:'📱', image:'assets/cv-iphone15-blue.jpeg', name:'iPhone 15 128GB — Blue', vendor:'PhoneWorld Lagos · Block B', price:'₦780,000', unit:'', market:'alaba', product:3},
        {emoji:'💻', image:'assets/cv-macbook-m3.jpeg', name:'MacBook Air M3', vendor:'Digital Hub · Block C', price:'₦1,350,000', unit:'', market:'alaba', product:5},
        {emoji:'📺', image:'assets/Smart tv 32.jpeg', name:'Hisense 32″ Smart TV', vendor:'Mega Electronics · Block A', price:'₦85,000', unit:'', market:'alaba', product:1}
      ]
    },

    'alaba-electronics-3': {
      emoji:'📱', badge:'New',
      image:'assets/cv-iphone15-blue.jpeg',
      thumbImages:['assets/cv-iphone15-blue.jpeg','assets/cv-iphone16.jpeg','assets/cv-airpods-max.jpeg','assets/cv-macbook-m3.jpeg'],
      subtitle:'iPhone 15 with Dynamic Island, 48MP camera, and USB-C charging in stunning Blue. Factory-sealed.',
      description:[
        "PhoneWorld Lagos only stocks factory-sealed iPhones sourced through authorised distributor channels in the UAE and UK. Every unit includes the original Apple box, USB-C cable, and a genuine 1-year manufacturer warranty.",
        "iPhone 15 brings Dynamic Island to more users — turning the camera cutout into an interactive display for live notifications and activities. The 48MP main sensor shoots ProRAW photos and 4K Cinematic video. USB-C replaces Lightning for universal charging compatibility."
      ],
      care:"Use only USB-C Apple-certified cables. Avoid exposure to extreme heat. A case and screen protector are strongly recommended.",
      specs:[
        {label:'Storage', value:'128GB'},
        {label:'Display', value:'6.1″ Super Retina XDR (OLED)'},
        {label:'Chip', value:'Apple A16 Bionic'},
        {label:'Camera', value:'48MP main + 12MP ultra-wide'},
        {label:'Charging', value:'USB-C · MagSafe compatible'}
      ],
      sold:'145 units', unitLabel:'unit', minOrder:1, vendorYears:'12yr',
      reviews:[
        {name:'Ngozi Eze', date:'May 15, 2025', rating:5, text:"Blue colour is stunning in person. Sealed box, everything original. PhoneWorld never disappoints. Camera quality is top-tier."},
        {name:'Biodun Adeyinka', date:'May 1, 2025', rating:5, text:"Upgraded from iPhone 12 and the difference is massive. Dynamic Island is actually useful. Quick delivery to Lekki."},
        {name:'Ahmed Musa', date:'April 19, 2025', rating:4, text:"Genuine product confirmed. USB-C is a great addition. Arrived perfectly packaged."}
      ],
      related:[
        {emoji:'📱', image:'assets/cv-iphone16.jpeg', name:'iPhone 16 Pro Max 256GB', vendor:'PhoneWorld Lagos · Block B', price:'₦1,280,000', unit:'', market:'alaba', product:0},
        {emoji:'🎧', image:'assets/cv-airpods-max.jpeg', name:'Apple AirPods Max', vendor:'SoundPro Alaba · Block B', price:'₦275,000', unit:'', market:'alaba', product:2},
        {emoji:'💻', image:'assets/cv-macbook-m3.jpeg', name:'MacBook Air M3', vendor:'Digital Hub · Block C', price:'₦1,350,000', unit:'', market:'alaba', product:5},
        {emoji:'📺', image:'assets/Smart tv 32.jpeg', name:'Hisense 32″ Smart TV', vendor:'Mega Electronics · Block A', price:'₦85,000', unit:'', market:'alaba', product:1}
      ]
    },

    'alaba-electronics-4': {
      emoji:'🪑', badge:'New',
      image:'assets/Qulomvs Mesh Ergonomic Office Chair with Footrest Home Office Desk Chair with Headrest and Backrest 90-135 Adjustable Computer Executive Desk Chair with Wheels 360 Swivel Task Chair.jpeg',
      thumbImages:[
        'assets/Qulomvs Mesh Ergonomic Office Chair with Footrest Home Office Desk Chair with Headrest and Backrest 90-135 Adjustable Computer Executive Desk Chair with Wheels 360 Swivel Task Chair.jpeg',
        'assets/Boss Table.jpeg','assets/_ (9).jpeg','assets/Smart tv 32.jpeg'
      ],
      subtitle:'Premium mesh ergonomic chair with retractable footrest, adjustable headrest, lumbar support, and 360° swivel. Built for all-day comfort.',
      description:[
        "FurniTech Alaba is the market's leading office furniture vendor, stocking premium ergonomic chairs, executive desks, and complete workstation setups. Each chair is quality-inspected before delivery.",
        "This ergonomic mesh chair features a breathable backrest that keeps you cool during long work sessions. The retractable footrest, adjustable headrest, and 90–135° recline provide full-body support. Heavy-duty nylon wheels roll smoothly on any floor surface."
      ],
      care:"Wipe mesh with a damp cloth. Periodically lubricate the base mechanism. Keep away from direct sunlight to prevent plastic fading. Weight capacity: 120 kg.",
      specs:[
        {label:'Material', value:'Breathable mesh back + padded seat'},
        {label:'Recline', value:'90–135° adjustable tilt'},
        {label:'Footrest', value:'Retractable, extendable'},
        {label:'Base', value:'360° swivel, 5-star nylon'},
        {label:'Capacity', value:'120 kg'}
      ],
      sold:'87 units', unitLabel:'unit', minOrder:1, vendorYears:'5yr',
      reviews:[
        {name:'Segun Adewale', date:'May 22, 2025', rating:5, text:"This chair transformed my home office. The footrest is great for long sessions and lumbar support is spot on."},
        {name:'Amaka Obi', date:'May 10, 2025', rating:5, text:"Very comfortable for 8+ hour work days. Mesh stays cool, recline is smooth. FurniTech Alaba delivers quality."},
        {name:'Bayo Afolabi', date:'April 28, 2025', rating:4, text:"Great chair overall. Assembly took about 20 minutes. The footrest could be a bit more padded but excellent value."}
      ],
      related:[
        {emoji:'🗃️', image:'assets/Boss Table.jpeg', name:'Executive Boss Office Table', vendor:'FurniTech Alaba · Block E', price:'₦95,000', unit:'', market:'alaba', product:6},
        {emoji:'🖥️', image:'assets/_ (9).jpeg', name:'iMac 24″ M3 Desktop Setup', vendor:'Digital Hub · Block C', price:'₦1,850,000', unit:'', market:'alaba', product:7},
        {emoji:'💻', image:'assets/cv-macbook-m3.jpeg', name:'MacBook Air M3', vendor:'Digital Hub · Block C', price:'₦1,350,000', unit:'', market:'alaba', product:5},
        {emoji:'📺', image:'assets/Smart tv 32.jpeg', name:'Hisense 32″ Smart TV', vendor:'Mega Electronics · Block A', price:'₦85,000', unit:'', market:'alaba', product:1}
      ]
    },

    'alaba-electronics-5': {
      emoji:'💻', badge:'-15%',
      image:'assets/cv-macbook-m3.jpeg',
      thumbImages:['assets/cv-macbook-m3.jpeg','assets/cv-iphone16.jpeg','assets/_ (9).jpeg','assets/cv-airpods-max.jpeg'],
      subtitle:'Apple MacBook Air M3 — the fastest Air ever. Up to 18-hour battery, Liquid Retina display, and completely silent fanless operation.',
      description:[
        "Digital Hub Alaba is a top-rated Apple and computer accessories vendor in Block C, with over a decade of experience sourcing authentic MacBooks. Every unit comes factory-sealed with Apple box, documentation, and 1-year manufacturer warranty.",
        "The MacBook Air M3 delivers a 60% performance leap over M1 with the same legendary battery life. Its 13.6″ Liquid Retina display supports 1 billion colours. The fanless design means completely silent operation — ideal for meetings, libraries, and open-plan offices."
      ],
      care:"Clean with a soft lint-free cloth. Keep liquids away from all ports and keyboard. Charge with original Apple USB-C charger only.",
      specs:[
        {label:'Chip', value:'Apple M3 (8-core CPU, 10-core GPU)'},
        {label:'RAM', value:'8GB unified memory'},
        {label:'Storage', value:'256GB SSD'},
        {label:'Display', value:'13.6″ Liquid Retina, 2560×1664'},
        {label:'Battery', value:'Up to 18 hours'}
      ],
      sold:'324 units', unitLabel:'unit', minOrder:1, vendorYears:'11yr',
      reviews:[
        {name:'Chinwe Okonkwo', date:'May 25, 2025', rating:5, text:"Completely genuine MacBook Air M3 with all Apple packaging intact. Digital Hub is one of the most reliable vendors on Market Mirror."},
        {name:'Temi Adeyinka', date:'May 12, 2025', rating:5, text:"The M3 performance is noticeably better than my old M1. Fast delivery to Ajah. Already using it for video editing and it handles everything."},
        {name:'Kunle Fashola', date:'April 30, 2025', rating:4, text:"Legit MacBook, verified serial with Apple. I would have preferred 16GB RAM but 8GB handles daily tasks perfectly."}
      ],
      related:[
        {emoji:'📱', image:'assets/cv-iphone16.jpeg', name:'iPhone 16 Pro Max', vendor:'PhoneWorld Lagos · Block B', price:'₦1,280,000', unit:'', market:'alaba', product:0},
        {emoji:'🎧', image:'assets/cv-airpods-max.jpeg', name:'Apple AirPods Max', vendor:'SoundPro Alaba · Block B', price:'₦275,000', unit:'', market:'alaba', product:2},
        {emoji:'🪑', image:'assets/Qulomvs Mesh Ergonomic Office Chair with Footrest Home Office Desk Chair with Headrest and Backrest 90-135 Adjustable Computer Executive Desk Chair with Wheels 360 Swivel Task Chair.jpeg', name:'Ergonomic Mesh Chair', vendor:'FurniTech Alaba · Block E', price:'₦65,000', unit:'', market:'alaba', product:4},
        {emoji:'🖥️', image:'assets/_ (9).jpeg', name:'iMac 24″ M3 Desktop Setup', vendor:'Digital Hub · Block C', price:'₦1,850,000', unit:'', market:'alaba', product:7}
      ]
    },

    'alaba-electronics-6': {
      emoji:'🗃️', badge:'Hot',
      image:'assets/Boss Table.jpeg',
      thumbImages:[
        'assets/Boss Table.jpeg',
        'assets/Qulomvs Mesh Ergonomic Office Chair with Footrest Home Office Desk Chair with Headrest and Backrest 90-135 Adjustable Computer Executive Desk Chair with Wheels 360 Swivel Task Chair.jpeg',
        'assets/_ (9).jpeg','assets/Smart tv 32.jpeg'
      ],
      subtitle:'Executive L-shaped boss table with walnut MDF finish, cable management grommet, and lockable drawers. Commands presence in any office.',
      description:[
        "FurniTech Alaba supplies executive office furniture to businesses, startups, and home offices across Lagos. The Boss Table is our flagship product, available in walnut, mahogany, and white. Delivered flat-packed with free assembly service within Lagos.",
        "This executive desk features a spacious L-shaped surface for dual monitors, documents, and accessories. The MDF board core with walnut laminate is scratch-resistant and easy to maintain. Two lockable side drawers and a central cable management grommet keep your workspace tidy."
      ],
      care:"Wipe with a dry or lightly damp cloth. Avoid placing wet items directly on the surface. Do not drag — lift when repositioning. Max surface load: 80 kg.",
      specs:[
        {label:'Shape', value:'L-shaped executive desk'},
        {label:'Material', value:'MDF board with walnut laminate'},
        {label:'Drawers', value:'2 lockable side drawers'},
        {label:'Cable Mgmt', value:'Built-in grommet hole'},
        {label:'Assembly', value:'Flat-packed · free assembly in Lagos'}
      ],
      sold:'156 units', unitLabel:'unit', minOrder:1, vendorYears:'5yr',
      reviews:[
        {name:'Emeka Nwosu', date:'May 19, 2025', rating:5, text:"This table completely transformed my home office. The walnut finish looks premium and the L-shape gives so much space."},
        {name:'Blessing Okafor', date:'May 7, 2025', rating:5, text:"Bought for my new office. The cable management hole alone was worth it — no more messy wires. Very sturdy."},
        {name:'Uche Dike', date:'April 21, 2025', rating:4, text:"Great table at a fair price. Assembly team was professional. The walnut finish is even nicer in person."}
      ],
      related:[
        {emoji:'🪑', image:'assets/Qulomvs Mesh Ergonomic Office Chair with Footrest Home Office Desk Chair with Headrest and Backrest 90-135 Adjustable Computer Executive Desk Chair with Wheels 360 Swivel Task Chair.jpeg', name:'Ergonomic Mesh Office Chair', vendor:'FurniTech Alaba · Block E', price:'₦65,000', unit:'', market:'alaba', product:4},
        {emoji:'🖥️', image:'assets/_ (9).jpeg', name:'iMac 24″ M3 Desktop Setup', vendor:'Digital Hub · Block C', price:'₦1,850,000', unit:'', market:'alaba', product:7},
        {emoji:'💻', image:'assets/cv-macbook-m3.jpeg', name:'MacBook Air M3', vendor:'Digital Hub · Block C', price:'₦1,350,000', unit:'', market:'alaba', product:5},
        {emoji:'📺', image:'assets/Smart tv 32.jpeg', name:'Office Reception TV', vendor:'Mega Electronics · Block A', price:'₦85,000', unit:'', market:'alaba', product:1}
      ]
    },

    'alaba-electronics-7': {
      emoji:'🖥️', badge:'New',
      image:'assets/_ (9).jpeg',
      thumbImages:['assets/_ (9).jpeg','assets/cv-macbook-m3.jpeg','assets/cv-iphone16.jpeg','assets/cv-airpods-max.jpeg'],
      subtitle:'Complete Apple iMac 24″ M3 workstation with stunning 4.5K Retina display. Thin, silent, and powerful — the ultimate all-in-one desktop.',
      description:[
        "Digital Hub Alaba supplies complete Apple workstation setups for professionals, studios, and offices across Lagos. Every iMac is imported through authorised channels, factory-sealed, and comes with Magic Keyboard, Magic Mouse, and 1-year Apple warranty.",
        "The iMac 24″ M3 packs extraordinary performance into an 11.5mm thin aluminium chassis. The 4.5K Retina display with 500 nits brightness and P3 wide colour is stunning for photo editing, video production, and everyday work. Built-in 1080p FaceTime HD camera and six-speaker sound system make it perfect for remote work too."
      ],
      care:"Clean the display with a dry microfibre cloth only. Do not use cleaning sprays directly on the screen. Use Apple-certified peripherals only.",
      specs:[
        {label:'Chip', value:'Apple M3 (8-core CPU, 10-core GPU)'},
        {label:'Display', value:'24″ 4.5K Retina (4480×2520), 500 nits'},
        {label:'RAM', value:'8GB unified memory'},
        {label:'Storage', value:'256GB SSD'},
        {label:'Includes', value:'Magic Keyboard + Magic Mouse'}
      ],
      sold:'63 units', unitLabel:'unit', minOrder:1, vendorYears:'11yr',
      reviews:[
        {name:'Chidera Obi', date:'May 21, 2025', rating:5, text:"The iMac is absolutely stunning in person. The 4.5K display is breathtaking and M3 performance handles everything I throw at it."},
        {name:'Zainab Abubakar', date:'May 9, 2025', rating:5, text:"Bought for my design studio. Setup took less than 5 minutes. Thin design saves desk space and colours are vibrant for graphic work."},
        {name:'Tunde Adeyemi', date:'April 24, 2025', rating:4, text:"Genuine iMac, Apple serial registered correctly. Magic Keyboard and Mouse pairing was seamless. Superb machine."}
      ],
      related:[
        {emoji:'💻', image:'assets/cv-macbook-m3.jpeg', name:'MacBook Air M3 13″', vendor:'Digital Hub · Block C', price:'₦1,350,000', unit:'', market:'alaba', product:5},
        {emoji:'📱', image:'assets/cv-iphone16.jpeg', name:'iPhone 16 Pro Max', vendor:'PhoneWorld Lagos · Block B', price:'₦1,280,000', unit:'', market:'alaba', product:0},
        {emoji:'🎧', image:'assets/cv-airpods-max.jpeg', name:'Apple AirPods Max', vendor:'SoundPro Alaba · Block B', price:'₦275,000', unit:'', market:'alaba', product:2},
        {emoji:'🪑', image:'assets/Qulomvs Mesh Ergonomic Office Chair with Footrest Home Office Desk Chair with Headrest and Backrest 90-135 Adjustable Computer Executive Desk Chair with Wheels 360 Swivel Task Chair.jpeg', name:'Ergonomic Mesh Chair', vendor:'FurniTech Alaba · Block E', price:'₦65,000', unit:'', market:'alaba', product:4}
      ]
    },

    // ── COMPUTER VILLAGE · COMPUTERS ─────────────────────────────────────────
    'computer-village-computers-0': {
      emoji:'💻', badge:'New',
      image:'assets/cv-macbook-m3.jpeg',
      thumbImages:['assets/cv-macbook-m3.jpeg','assets/cv-macbook-air-blue.jpeg','assets/cv-imac-setup.jpeg','assets/cv-airpods-max.jpeg'],
      subtitle:'Apple\'s fastest-ever MacBook Air. M3 chip, 8-core CPU, Liquid Retina display, and completely silent fanless design — in Midnight.',
      description:[
        "LaptopKing CV is Computer Village's #1 rated Apple reseller, sourcing authentic MacBooks from authorised Apple distributors in the UK and UAE. Every unit arrives factory-sealed with the original Apple box, USB-C charger, and a valid 1-year manufacturer warranty.",
        "The MacBook Air M3 is a 60% performance leap over M1 with the same legendary battery life. The 13.6″ Liquid Retina display supports 1 billion colours and 500 nits brightness. The completely fanless design means zero noise — perfect for libraries, meeting rooms, and open offices."
      ],
      care:"Clean with a soft lint-free cloth. Keep liquids away from all ports and keyboard. Charge using original Apple USB-C charger only.",
      specs:[
        {label:'Chip', value:'Apple M3 (8-core CPU, 10-core GPU)'},
        {label:'RAM', value:'8GB unified memory'},
        {label:'Storage', value:'256GB SSD'},
        {label:'Display', value:'13.6″ Liquid Retina, 2560×1664'},
        {label:'Battery', value:'Up to 18 hours'}
      ],
      sold:'312 units', unitLabel:'unit', minOrder:1, vendorYears:'10yr',
      reviews:[
        {name:'Chidera Obi', date:'May 20, 2025', rating:5, text:"Completely genuine product with Apple box and warranty. LaptopKing is the real deal. Already recommended to 4 people."},
        {name:'Amaka Eze', date:'May 3, 2025', rating:5, text:"Fast delivery to Lekki. Laptop was sealed, registered with Apple ID first time. M3 performance is incredible."},
        {name:'Segun Adeyemi', date:'April 18, 2025', rating:4, text:"Legit MacBook, great service. I would have preferred more secure packaging for such a premium item."}
      ],
      related:[
        {emoji:'🖥️', image:'assets/cv-imac-setup.jpeg', name:'iMac 24″ M3 — Blue', vendor:'DesktopWorld Ikeja · Shop 7', price:'₦1,850,000', unit:'', market:'computer-village', product:1},
        {emoji:'💻', image:'assets/cv-macbook-air-blue.jpeg', name:'MacBook Air M2 13″ — Blue', vendor:'LaptopKing CV · Shop 12', price:'₦1,250,000', unit:'', market:'computer-village', product:2},
        {emoji:'📱', image:'assets/cv-iphone16.jpeg', name:'iPhone 16 Pro Max 256GB', vendor:'SmartPhone Centre · Shop 3', price:'₦1,280,000', unit:'', market:'computer-village', product:5},
        {emoji:'🎧', image:'assets/cv-airpods-max.jpeg', name:'Apple AirPods Max — Blue', vendor:'AccessoryPlus · Shop 19', price:'₦275,000', unit:'', market:'computer-village', product:6}
      ]
    },

    'computer-village-computers-1': {
      emoji:'🖥️', badge:'Hot',
      image:'assets/cv-imac-setup.jpeg',
      thumbImages:['assets/cv-imac-setup.jpeg','assets/cv-macbook-m3.jpeg','assets/cv-macbook-air-blue.jpeg','assets/cv-airpods-max.jpeg'],
      subtitle:'Apple iMac 24″ M3 — the ultimate all-in-one desktop. Stunning 4.5K Retina display, 11.5mm thin aluminium chassis, six-speaker sound.',
      description:[
        "DesktopWorld Ikeja is Computer Village's top-rated desktop and monitor specialist, stocking authentic Apple iMacs, monitors, and complete workstation setups. Every iMac is imported through authorised channels and comes factory-sealed with Magic Keyboard, Magic Mouse, and a 1-year Apple warranty.",
        "The iMac 24″ M3 packs extraordinary performance into an impossibly thin 11.5mm aluminium chassis. The 4.5K Retina display with 500 nits brightness and P3 wide colour gamut is ideal for photo editing, video production, and everyday creative work. Built-in 1080p FaceTime HD camera and six-speaker sound system make it the perfect remote work machine."
      ],
      care:"Clean the display with a dry microfibre cloth only. Do not use cleaning sprays directly on the screen. Use Apple-certified peripherals only.",
      specs:[
        {label:'Chip', value:'Apple M3 (8-core CPU, 10-core GPU)'},
        {label:'Display', value:'24″ 4.5K Retina (4480×2520), 500 nits'},
        {label:'RAM', value:'8GB unified memory'},
        {label:'Storage', value:'256GB SSD'},
        {label:'Includes', value:'Magic Keyboard + Magic Mouse'}
      ],
      sold:'145 units', unitLabel:'unit', minOrder:1, vendorYears:'8yr',
      reviews:[
        {name:'Chidera Obi', date:'May 21, 2025', rating:5, text:"The iMac is absolutely stunning in person. The 4.5K display is breathtaking and M3 handles everything I throw at it."},
        {name:'Zainab Abubakar', date:'May 9, 2025', rating:5, text:"Bought for my design studio. Setup in 5 minutes. Thin design saves desk space and colours are vibrant for graphic work."},
        {name:'Tunde Adeyemi', date:'April 24, 2025', rating:4, text:"Genuine iMac, Apple serial registered correctly. Magic Keyboard and Mouse pairing was seamless. Superb machine."}
      ],
      related:[
        {emoji:'💻', image:'assets/cv-macbook-m3.jpeg', name:'MacBook Air M3 13″ — Midnight', vendor:'LaptopKing CV · Shop 12', price:'₦1,350,000', unit:'', market:'computer-village', product:0},
        {emoji:'💻', image:'assets/cv-macbook-air-blue.jpeg', name:'MacBook Air M2 13″ — Blue', vendor:'LaptopKing CV · Shop 12', price:'₦1,250,000', unit:'', market:'computer-village', product:2},
        {emoji:'🎧', image:'assets/cv-airpods-max.jpeg', name:'Apple AirPods Max — Blue', vendor:'AccessoryPlus · Shop 19', price:'₦275,000', unit:'', market:'computer-village', product:6},
        {emoji:'📱', image:'assets/cv-ipad-pink.jpeg', name:'iPad 10th Gen 256GB — Pink', vendor:'SmartPhone Centre · Shop 3', price:'₦480,000', unit:'', market:'computer-village', product:3}
      ]
    },

    'computer-village-computers-2': {
      emoji:'💻', badge:'-5%',
      image:'assets/cv-macbook-air-blue.jpeg',
      thumbImages:['assets/cv-macbook-air-blue.jpeg','assets/cv-macbook-m3.jpeg','assets/cv-imac-setup.jpeg','assets/cv-ipad-pink.jpeg'],
      subtitle:'The iconic thin-and-light MacBook in stunning Blue. M2 chip, 8-core CPU, 8GB RAM, up to 18 hours battery. Available in 13″ and 15″.',
      description:[
        "LaptopKing CV is Computer Village's #1 rated Apple reseller, stocking authentic MacBooks, iPads, and accessories. Every unit is sourced from authorised Apple distributors and comes with a valid Apple warranty.",
        "The MacBook Air M2 is powered by Apple's groundbreaking M2 chip — the fastest chip ever in a thin-and-light laptop. With up to 18 hours of battery life and a fanless design, it's perfect for professionals, students, and creatives. The Blue colour is exclusive and hard to find at this price."
      ],
      care:"Clean with a soft, slightly damp lint-free cloth. Avoid getting moisture in openings. Do not use aerosol sprays or abrasives.",
      specs:[
        {label:'Chip', value:'Apple M2 (8-core CPU, 8-core GPU)'},
        {label:'RAM', value:'8GB unified memory'},
        {label:'Storage', value:'256GB SSD'},
        {label:'Display', value:'13.6″ Liquid Retina, 2560×1664'},
        {label:'Battery', value:'Up to 18 hours'}
      ],
      sold:'520 units', unitLabel:'unit', minOrder:1, vendorYears:'10yr',
      reviews:[
        {name:'Chidera Obi', date:'May 20, 2025', rating:5, text:"Completely genuine product with Apple box, warranty card, and all accessories. LaptopKing is the real deal. Already recommended to 4 people."},
        {name:'Amaka Eze', date:'May 3, 2025', rating:5, text:"Fast delivery to Lekki. Laptop was sealed and registered with Apple ID first time. M2 performance is incredible."},
        {name:'Segun Adeyemi', date:'April 18, 2025', rating:4, text:"Legit MacBook, great service. Only minor thing is I would have preferred more secure packaging for such a premium item."}
      ],
      related:[
        {emoji:'💻', image:'assets/cv-macbook-m3.jpeg', name:'MacBook Air M3 13″ — Midnight', vendor:'LaptopKing CV · Shop 12', price:'₦1,350,000', unit:'', market:'computer-village', product:0},
        {emoji:'🖥️', image:'assets/cv-imac-setup.jpeg', name:'iMac 24″ M3 — Blue', vendor:'DesktopWorld Ikeja · Shop 7', price:'₦1,850,000', unit:'', market:'computer-village', product:1},
        {emoji:'📱', image:'assets/cv-iphone15-blue.jpeg', name:'iPhone 15 128GB — Blue', vendor:'SmartPhone Centre · Shop 3', price:'₦780,000', unit:'', market:'computer-village', product:4},
        {emoji:'📱', image:'assets/cv-ipad-pink.jpeg', name:'iPad 10th Gen 256GB — Pink', vendor:'SmartPhone Centre · Shop 3', price:'₦480,000', unit:'', market:'computer-village', product:3}
      ]
    },

    'computer-village-computers-3': {
      emoji:'📱', badge:'',
      image:'assets/cv-ipad-pink.jpeg',
      thumbImages:['assets/cv-ipad-pink.jpeg','assets/cv-iphone15-blue.jpeg','assets/cv-iphone16.jpeg','assets/cv-macbook-air-blue.jpeg'],
      subtitle:'Apple iPad 10th Generation — 256GB WiFi in stunning Pink. Liquid Retina display, A14 Bionic chip, USB-C, 12MP rear camera.',
      description:[
        "SmartPhone Centre is Computer Village's most trusted Apple device specialist, stocking factory-sealed iPhones, iPads, and accessories from authorised UAE and UK distributors. Every unit comes with original Apple packaging, USB-C cable, and a 1-year manufacturer warranty.",
        "The iPad 10th Gen brings a completely redesigned look with slimmer bezels, landscape front camera ideal for FaceTime, and USB-C connectivity. The 10.9″ Liquid Retina display is bright and vivid at 500 nits. The A14 Bionic chip handles everything from streaming to light creative work with ease."
      ],
      care:"Use only Apple-certified USB-C accessories. Clean with a soft, slightly damp cloth. Use a case to protect the glass display.",
      specs:[
        {label:'Storage', value:'256GB'},
        {label:'Display', value:'10.9″ Liquid Retina (2360×1640)'},
        {label:'Chip', value:'Apple A14 Bionic'},
        {label:'Camera', value:'12MP rear + 12MP ultra-wide front'},
        {label:'Connectivity', value:'WiFi 6 · USB-C · Bluetooth 5.2'}
      ],
      sold:'234 units', unitLabel:'unit', minOrder:1, vendorYears:'7yr',
      reviews:[
        {name:'Funmi Bello', date:'May 19, 2025', rating:5, text:"Perfect for my daughter's online classes. Pink colour is gorgeous. Sealed box, genuine Apple product. SmartPhone Centre is reliable."},
        {name:'Emeka Nwosu', date:'May 5, 2025', rating:5, text:"Bought for my wife and she loves it. Fast delivery, everything original. USB-C is a major upgrade from older iPads."},
        {name:'Kemi Adeyinka', date:'April 22, 2025', rating:4, text:"Great iPad at a fair price. The display is beautiful. Delivery was prompt. Would recommend SmartPhone Centre."}
      ],
      related:[
        {emoji:'📱', image:'assets/cv-iphone15-blue.jpeg', name:'iPhone 15 128GB — Blue', vendor:'SmartPhone Centre · Shop 3', price:'₦780,000', unit:'', market:'computer-village', product:4},
        {emoji:'📱', image:'assets/cv-iphone16.jpeg', name:'iPhone 16 Pro Max 256GB', vendor:'SmartPhone Centre · Shop 3', price:'₦1,280,000', unit:'', market:'computer-village', product:5},
        {emoji:'💻', image:'assets/cv-macbook-air-blue.jpeg', name:'MacBook Air M2 13″ — Blue', vendor:'LaptopKing CV · Shop 12', price:'₦1,250,000', unit:'', market:'computer-village', product:2},
        {emoji:'🎧', image:'assets/cv-airpods-max.jpeg', name:'Apple AirPods Max — Blue', vendor:'AccessoryPlus · Shop 19', price:'₦275,000', unit:'', market:'computer-village', product:6}
      ]
    },

    'computer-village-computers-4': {
      emoji:'📱', badge:'-10%',
      image:'assets/cv-iphone15-blue.jpeg',
      thumbImages:['assets/cv-iphone15-blue.jpeg','assets/cv-iphone16.jpeg','assets/cv-ipad-pink.jpeg','assets/cv-airpods-max.jpeg'],
      subtitle:'iPhone 15 with Dynamic Island, 48MP camera, and USB-C charging in stunning Blue. Factory-sealed, all colours available.',
      description:[
        "SmartPhone Centre only stocks factory-sealed iPhones sourced through authorised distributor channels in the UAE and UK. Every unit includes the original Apple box, USB-C cable, and a genuine 1-year manufacturer warranty.",
        "iPhone 15 brings Dynamic Island to more users — turning the camera cutout into an interactive display for live notifications and activities. The 48MP main sensor shoots ProRAW photos and 4K Cinematic video. USB-C replaces Lightning for universal charging compatibility across all your Apple devices."
      ],
      care:"Use only USB-C Apple-certified cables. Avoid exposure to extreme heat. A case and screen protector are strongly recommended.",
      specs:[
        {label:'Storage', value:'128GB'},
        {label:'Display', value:'6.1″ Super Retina XDR (OLED)'},
        {label:'Chip', value:'Apple A16 Bionic'},
        {label:'Camera', value:'48MP main + 12MP ultra-wide'},
        {label:'Charging', value:'USB-C · MagSafe compatible'}
      ],
      sold:'680 units', unitLabel:'unit', minOrder:1, vendorYears:'7yr',
      reviews:[
        {name:'Ngozi Eze', date:'May 15, 2025', rating:5, text:"Blue colour is stunning in person. Sealed box, everything original. SmartPhone Centre never disappoints. Camera quality is top-tier."},
        {name:'Biodun Adeyinka', date:'May 1, 2025', rating:5, text:"Upgraded from iPhone 12 and the difference is massive. Dynamic Island is actually useful. Quick delivery to Lekki."},
        {name:'Ahmed Musa', date:'April 19, 2025', rating:4, text:"Genuine product confirmed. USB-C is a great addition. Arrived perfectly packaged."}
      ],
      related:[
        {emoji:'📱', image:'assets/cv-iphone16.jpeg', name:'iPhone 16 Pro Max 256GB', vendor:'SmartPhone Centre · Shop 3', price:'₦1,280,000', unit:'', market:'computer-village', product:5},
        {emoji:'📱', image:'assets/cv-ipad-pink.jpeg', name:'iPad 10th Gen 256GB — Pink', vendor:'SmartPhone Centre · Shop 3', price:'₦480,000', unit:'', market:'computer-village', product:3},
        {emoji:'🎧', image:'assets/cv-airpods-max.jpeg', name:'Apple AirPods Max — Blue', vendor:'AccessoryPlus · Shop 19', price:'₦275,000', unit:'', market:'computer-village', product:6},
        {emoji:'💻', image:'assets/cv-macbook-air-blue.jpeg', name:'MacBook Air M2 13″ — Blue', vendor:'LaptopKing CV · Shop 12', price:'₦1,250,000', unit:'', market:'computer-village', product:2}
      ]
    },

    'computer-village-computers-5': {
      emoji:'📱', badge:'Hot',
      image:'assets/cv-iphone16.jpeg',
      thumbImages:['assets/cv-iphone16.jpeg','assets/cv-iphone15-blue.jpeg','assets/cv-ipad-pink.jpeg','assets/cv-airpods-max.jpeg'],
      subtitle:'Titanium design, A18 Pro chip, 48MP ProRAW camera, Action Button, and the largest 6.9″ Super Retina XDR display ever. Latest model.',
      description:[
        "SmartPhone Centre is Computer Village's most trusted Apple reseller, sourcing factory-sealed iPhones directly from authorised UAE and UK distributors. Every unit includes the original Apple box, USB-C cable, documentation, and a 1-year manufacturer warranty.",
        "The iPhone 16 Pro Max features Apple's A18 Pro chip with hardware-accelerated ray tracing. The 6.9″ Super Retina XDR display hits 2000 nits peak brightness. A 48MP Fusion Camera with 5× optical zoom shoots 4K 120fps ProRes video, and the new Camera Control button gives instant access to shooting modes."
      ],
      care:"Use only Apple-certified USB-C accessories. Avoid extreme temperatures. A screen protector and protective case are strongly recommended.",
      specs:[
        {label:'Storage', value:'256GB'},
        {label:'Display', value:'6.9″ Super Retina XDR (OLED)'},
        {label:'Chip', value:'Apple A18 Pro'},
        {label:'Camera', value:'48MP main + 48MP ultra-wide + 12MP 5× telephoto'},
        {label:'Battery', value:'Up to 33 hours video playback'}
      ],
      sold:'198 units', unitLabel:'unit', minOrder:1, vendorYears:'7yr',
      reviews:[
        {name:'Emeka Okafor', date:'May 20, 2025', rating:5, text:"Original box, original charger, Apple sticker intact. SmartPhone Centre is the real deal. Camera quality is unbelievable!"},
        {name:'Adunola Adeyemi', date:'May 8, 2025', rating:5, text:"Bought two units — both sealed, both registered perfectly with Apple. Fast delivery to Victoria Island. Will definitely order again."},
        {name:'Tunde Bello', date:'April 30, 2025', rating:4, text:"Genuine phone, verified IMEI checks out clean. Delivery took one extra day but the product quality is flawless."}
      ],
      related:[
        {emoji:'📱', image:'assets/cv-iphone15-blue.jpeg', name:'iPhone 15 128GB — Blue', vendor:'SmartPhone Centre · Shop 3', price:'₦780,000', unit:'', market:'computer-village', product:4},
        {emoji:'📱', image:'assets/cv-ipad-pink.jpeg', name:'iPad 10th Gen 256GB — Pink', vendor:'SmartPhone Centre · Shop 3', price:'₦480,000', unit:'', market:'computer-village', product:3},
        {emoji:'🎧', image:'assets/cv-airpods-max.jpeg', name:'Apple AirPods Max — Blue', vendor:'AccessoryPlus · Shop 19', price:'₦275,000', unit:'', market:'computer-village', product:6},
        {emoji:'💻', image:'assets/cv-macbook-m3.jpeg', name:'MacBook Air M3 13″ — Midnight', vendor:'LaptopKing CV · Shop 12', price:'₦1,350,000', unit:'', market:'computer-village', product:0}
      ]
    },

    'computer-village-computers-6': {
      emoji:'🎧', badge:'New',
      image:'assets/cv-airpods-max.jpeg',
      thumbImages:['assets/cv-airpods-max.jpeg','assets/cv-iphone16.jpeg','assets/cv-iphone15-blue.jpeg','assets/cv-macbook-air-blue.jpeg'],
      subtitle:'Premium over-ear headphones with industry-leading Active Noise Cancellation, Transparency mode, and Adaptive EQ. In Blue.',
      description:[
        "AccessoryPlus is Computer Village's specialist accessories dealer, stocking genuine Apple, Sony, and Xiaomi audio and wearable products. All AirPods Max units come in original Apple sealed packaging with a full 1-year warranty.",
        "AirPods Max deliver an extraordinary listening experience. The custom-built dynamic driver and H1 chip in each ear cup enable Adaptive EQ, Active Noise Cancellation, and Spatial Audio. The breathable knit mesh headband and memory foam ear cushions provide all-day comfort. The Blue colorway is especially striking."
      ],
      care:"Store in the included smart case to preserve battery. Clean ear cushions with a soft dry cloth. Avoid submerging in water.",
      specs:[
        {label:'Driver', value:'Custom high-excursion Apple dynamic'},
        {label:'ANC', value:'Active Noise Cancellation + Transparency mode'},
        {label:'Battery', value:'Up to 20 hours (ANC on)'},
        {label:'Connectivity', value:'Bluetooth 5.0 · H1 chip'},
        {label:'Colour', value:'Blue'}
      ],
      sold:'112 units', unitLabel:'unit', minOrder:1, vendorYears:'4yr',
      reviews:[
        {name:'Kemi Adeyemi', date:'May 18, 2025', rating:5, text:"These headphones are incredible. The noise cancellation is on another level. Genuine product, fast delivery from AccessoryPlus!"},
        {name:'Chukwuma Nwosu', date:'May 3, 2025', rating:5, text:"Bought for WFH use. The sound quality and ANC together make a huge difference. Delivery was fast, packaging perfect."},
        {name:'Fatima Hassan', date:'April 25, 2025', rating:4, text:"Amazing sound quality. Comfort is excellent even after hours of wear. The Blue colour is beautiful in person."}
      ],
      related:[
        {emoji:'📱', image:'assets/cv-iphone16.jpeg', name:'iPhone 16 Pro Max 256GB', vendor:'SmartPhone Centre · Shop 3', price:'₦1,280,000', unit:'', market:'computer-village', product:5},
        {emoji:'📱', image:'assets/cv-iphone15-blue.jpeg', name:'iPhone 15 128GB — Blue', vendor:'SmartPhone Centre · Shop 3', price:'₦780,000', unit:'', market:'computer-village', product:4},
        {emoji:'⌚', image:'assets/cv-redmi-watch.jpeg', name:'Redmi Watch 3 Pro', vendor:'AccessoryPlus · Shop 19', price:'₦65,000', unit:'', market:'computer-village', product:7},
        {emoji:'💻', image:'assets/cv-macbook-air-blue.jpeg', name:'MacBook Air M2 13″ — Blue', vendor:'LaptopKing CV · Shop 12', price:'₦1,250,000', unit:'', market:'computer-village', product:2}
      ]
    },

    'computer-village-computers-7': {
      emoji:'⌚', badge:'',
      image:'assets/cv-redmi-watch.jpeg',
      thumbImages:['assets/cv-redmi-watch.jpeg','assets/cv-airpods-max.jpeg','assets/cv-iphone16.jpeg','assets/cv-iphone15-blue.jpeg'],
      subtitle:'Redmi Watch 3 Pro — 1.51″ AMOLED display, GPS, heart rate, SpO2, sleep tracking, and up to 12-day battery. In Black & Cream.',
      description:[
        "AccessoryPlus is Computer Village's leading wearables and accessories specialist, stocking Xiaomi, Apple Watch, and Garmin devices alongside genuine Apple accessories. Every Redmi Watch comes with original Xiaomi packaging and a 1-year warranty.",
        "The Redmi Watch 3 Pro features a large 1.51″ AMOLED display with always-on mode, built-in GPS for outdoor tracking, and comprehensive health sensors including heart rate, blood oxygen (SpO2), and stress monitoring. With up to 12 days of battery life, it's the smartwatch that keeps up with your lifestyle."
      ],
      care:"Rinse with clean water after exposure to sweat or saltwater. Do not submerge beyond 5ATM rating. Clean the band with a soft damp cloth.",
      specs:[
        {label:'Display', value:'1.51″ AMOLED, 320×380, Always-On'},
        {label:'Battery', value:'Up to 12 days typical use'},
        {label:'GPS', value:'Built-in GPS + GLONASS'},
        {label:'Health', value:'Heart rate, SpO2, stress, sleep tracking'},
        {label:'Water Rating', value:'5ATM water resistant'}
      ],
      sold:'89 units', unitLabel:'unit', minOrder:1, vendorYears:'4yr',
      reviews:[
        {name:'Seun Badmus', date:'May 17, 2025', rating:5, text:"Excellent smartwatch for the price. GPS is accurate, AMOLED screen is vivid outdoors. Battery genuinely lasts 10 days for me."},
        {name:'Tolu Afolabi', date:'May 4, 2025', rating:4, text:"Great value for a smartwatch. Health tracking is reliable. The Cream band variant looks premium on the wrist."},
        {name:'Bayo Okafor', date:'April 20, 2025', rating:4, text:"Good smartwatch. App setup was easy. Sleep tracking is accurate. Would love a slightly larger screen in future models."}
      ],
      related:[
        {emoji:'🎧', image:'assets/cv-airpods-max.jpeg', name:'Apple AirPods Max — Blue', vendor:'AccessoryPlus · Shop 19', price:'₦275,000', unit:'', market:'computer-village', product:6},
        {emoji:'📱', image:'assets/cv-iphone16.jpeg', name:'iPhone 16 Pro Max 256GB', vendor:'SmartPhone Centre · Shop 3', price:'₦1,280,000', unit:'', market:'computer-village', product:5},
        {emoji:'📱', image:'assets/cv-iphone15-blue.jpeg', name:'iPhone 15 128GB — Blue', vendor:'SmartPhone Centre · Shop 3', price:'₦780,000', unit:'', market:'computer-village', product:4},
        {emoji:'📱', image:'assets/cv-ipad-pink.jpeg', name:'iPad 10th Gen 256GB — Pink', vendor:'SmartPhone Centre · Shop 3', price:'₦480,000', unit:'', market:'computer-village', product:3}
      ]
    }

  }

}; // end MM_DATA
