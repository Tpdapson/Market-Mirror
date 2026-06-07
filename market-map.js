// ═══════════════════════════════════════════════════════════════
//  MARKET MIRROR — Market Map v2
// ═══════════════════════════════════════════════════════════════

// ── ZONE DEFINITIONS ─────────────────────────────────────────
const ZONE_DEFS = {
  fab:  { cls:'z-fab',  cat:'fabric',       emoji:'🧶' },
  fab2: { cls:'z-fab2', cat:'fabric',       emoji:'🧶' },
  lea:  { cls:'z-lea',  cat:'leather',      emoji:'👜' },
  fas:  { cls:'z-fas',  cat:'fashion',      emoji:'👘' },
  fas2: { cls:'z-fas2', cat:'fashion',      emoji:'👘' },
  fod:  { cls:'z-fod',  cat:'food',         emoji:'🍱' },
  acc:  { cls:'z-acc',  cat:'accessories',  emoji:'💍' },
  mis:  { cls:'z-mis',  cat:'misc',         emoji:'📦' },
  elec: { cls:'z-elec', cat:'electronics',  emoji:'📱' },
  tech: { cls:'z-tech', cat:'tech',         emoji:'💻' },
};

// ── ALL MARKETS ───────────────────────────────────────────────
const ALL_MARKETS = {

  balogun: {
    id:'balogun', name:'Balogun Market', location:'Lagos Island',
    watermark:'BM', totalStalls:1467, color:'#8B4513',
    entrances:['Main Entrance — Balogun St.','Back Entrance — Martins St.'],
    exits:['↑ Balogun St. Exit','↑ Oluwole St. Exit'],
    legend:[
      {cat:'fabric',      label:'Fabrics & Textiles', count:486,  color:'#8B4513'},
      {cat:'fashion',     label:'Fashion',             count:312,  color:'#5C2890'},
      {cat:'leather',     label:'Leather & Bags',      count:198,  color:'#2A5A7A'},
      {cat:'accessories', label:'Accessories',         count:241,  color:'#7A2828'},
      {cat:'food',        label:'Food & Provisions',   count:87,   color:'#2E6B38'},
      {cat:'misc',        label:'Miscellaneous',       count:143,  color:'#5A4828'},
    ],
    rows:[
      { id:'R1', passage:'— Passage A —', stalls:[
        {z:'fab', w:1, lbl:'1–2', vid:'mama-titi'},
        {z:'fab2',     lbl:'3'},
        {z:'fab',      lbl:'4'},
        {z:'fab2',w:1, lbl:'5–6'},
        {z:'fab',      lbl:'7', vid:'mama-titi', pin:1},
        {z:'fab2',     lbl:'8'},
        {z:'fab',      lbl:'9'},
        {z:'fab2',w:1, lbl:'10–11'},
        {z:'fab',      lbl:'12'},
        {z:'fab2',     lbl:'13'},
      ]},
      { id:'R2', passage:'— Passage B —', userDot:{left:'73%',top:'28px'}, stalls:[
        {z:'fas',      lbl:'1'},
        {z:'fab', w:1, lbl:'2–3'},
        {z:'fas2',     lbl:'4'},
        {z:'fab',      lbl:'5'},
        {z:'fas', w:1, lbl:'6–7', vid:'aso-oke', pin:1},
        {z:'fab2',     lbl:'8'},
        {z:'fas',      lbl:'9'},
        {z:'fab', w:1, lbl:'10–11'},
        {z:'fas2',     lbl:'12'},
        {z:'fab',      lbl:'13'},
      ]},
      { id:'R3', passage:'— Passage C —', cluster:{id:'r3',left:'60%',count:6,color:'purple'}, stalls:[
        {z:'fas', w:1, lbl:'1–2'},
        {z:'acc',      lbl:'3'},
        {z:'fas2',     lbl:'4'},
        {z:'acc', w:1, lbl:'5–6'},
        {z:'fas',      lbl:'7'},
        {z:'acc',      lbl:'8', vid:'adire-hub'},
        {z:'fas2',w:1, lbl:'9–10'},
        {z:'acc',      lbl:'11'},
        {z:'fas',      lbl:'12'},
        {z:'acc',      lbl:'13'},
      ]},
      { id:'R4', passage:'— Passage D —', stalls:[
        {z:'lea', w:1, lbl:'1–2', vid:'lagos-leather', pin:1},
        {z:'lea',      lbl:'3'},
        {z:'mis',      lbl:'4'},
        {z:'lea',      lbl:'5'},
        {z:'mis', w:1, lbl:'6–7'},
        {z:'lea',      lbl:'8'},
        {z:'lea', w:1, lbl:'9–10'},
        {z:'mis',      lbl:'11'},
        {z:'lea',      lbl:'12'},
        {z:'mis',      lbl:'13'},
      ]},
      { id:'R5', passage:'— Passage E — Emergency Exit ↗', cluster:{id:'r5',left:'20%',count:4,color:'green'}, stalls:[
        {z:'fod',      lbl:'1'},
        {z:'fod', w:1, lbl:'2–3'},
        {z:'mis',      lbl:'4'},
        {z:'fod',      lbl:'5'},
        {z:'mis', w:1, lbl:'6–7'},
        {z:'fod',      lbl:'8'},
        {z:'fod', w:1, lbl:'9–10'},
        {z:'mis',      lbl:'11'},
        {z:'fod',      lbl:'12'},
        {z:'mis',      lbl:'13'},
      ]},
      { id:'R6', stalls:[
        {z:'acc',      lbl:'1'},
        {z:'acc', w:1, lbl:'2–3'},
        {z:'lea',      lbl:'4'},
        {z:'acc',      lbl:'5'},
        {z:'lea',      lbl:'6', vid:'crown-head', pin:1},
        {z:'acc', w:1, lbl:'7–8'},
        {z:'lea',      lbl:'9'},
        {z:'acc',      lbl:'10'},
        {z:'lea', w:1, lbl:'11–12'},
        {z:'acc',      lbl:'13'},
      ]},
    ],
    vendors:{
      'mama-titi':{
        id:'mama-titi', name:'Mama Titi Fabrics', owner:'Titilayo Adeyemi',
        emoji:'🧶', zone:'fabric', row:'R1', stall:'7', rating:4.9, reviews:1204,
        products:340, years:27, open:true, verified:true, topSeller:true,
        avgPrice:'₦2,400', delivery:'Today',
        description:'Row 1, Stalls 7 & 1–2 · Balogun Market',
        walk:'~1 min walk', gradient:'linear-gradient(135deg,#5C3010,#8B4513)',
        pinStyle:'red',
        products_list:[
          {name:'Ankara Wax Print', price:'₦2,400', unit:'/yd', emoji:'🧶', grad:'linear-gradient(135deg,#2C1A0E,#6B3520)'},
          {name:'Holland Ankara',   price:'₦1,800', unit:'/yd', emoji:'🧶', grad:'linear-gradient(135deg,#2C1A0E,#8B5E3C)'},
          {name:'Kente Wax Blend',  price:'₦2,000', unit:'/yd', emoji:'🧶', grad:'linear-gradient(135deg,#2C0E2C,#6B356B)'},
          {name:'Ankara Jacquard',  price:'₦3,100', unit:'/yd', emoji:'🧶', grad:'linear-gradient(135deg,#1A2C1A,#356B35)'},
        ]
      },
      'aso-oke':{
        id:'aso-oke', name:'Aso Oke Palace', owner:'Funmilayo Bello',
        emoji:'👘', zone:'fashion', row:'R2', stall:'6–7', rating:4.8, reviews:643,
        products:89, years:18, open:true, verified:true, topSeller:true,
        avgPrice:'₦34,000', delivery:'Today',
        description:'Row 2, Stalls 6–7 · Balogun Market',
        walk:'~2 min walk', gradient:'linear-gradient(135deg,#3A1560,#5C2890)',
        pinStyle:'',
        products_list:[
          {name:'Aso-oke Wedding Set', price:'₦34,000', unit:'',    emoji:'👘', grad:'linear-gradient(135deg,#2C1A2C,#6B356B)'},
          {name:'Aso-oke Ìpele',       price:'₦12,000', unit:'',    emoji:'👘', grad:'linear-gradient(135deg,#1A0E2C,#3D2063)'},
          {name:'Gele Fabric',         price:'₦5,800',  unit:'/yd', emoji:'🧕', grad:'linear-gradient(135deg,#2C1A0E,#6B3520)'},
        ]
      },
      'lagos-leather':{
        id:'lagos-leather', name:'Lagos Leather Co.', owner:'Emeka Okafor',
        emoji:'👜', zone:'leather', row:'R4', stall:'1–2', rating:4.6, reviews:872,
        products:124, years:12, open:true, verified:true, topSeller:false,
        avgPrice:'₦18,500', delivery:'Today',
        description:'Row 4, Stalls 1–2 · Balogun Market',
        walk:'~3 min walk', gradient:'linear-gradient(135deg,#1A3A52,#2A5A7A)',
        pinStyle:'dark',
        products_list:[
          {name:'Handcrafted Leather Tote', price:'₦18,500', unit:'', emoji:'👜', grad:'linear-gradient(135deg,#1A2C3A,#2C4A5C)'},
          {name:'Leather Belt',             price:'₦4,200',  unit:'', emoji:'🪢', grad:'linear-gradient(135deg,#1A1A2C,#353580)'},
          {name:'Custom Leather Shoes',     price:'₦28,000', unit:'', emoji:'👞', grad:'linear-gradient(135deg,#1A2C1A,#356B35)'},
        ]
      },
      'adire-hub':{
        id:'adire-hub', name:'Adire & Tie-dye Hub', owner:'Abiodun Salau',
        emoji:'🎨', zone:'accessories', row:'R3', stall:'8', rating:4.5, reviews:511,
        products:206, years:9, open:true, verified:true, topSeller:false,
        avgPrice:'₦3,200', delivery:'Today',
        description:'Row 3, Stall 8 · Balogun Market',
        walk:'~2 min walk', gradient:'linear-gradient(135deg,#1A3C20,#2E6B38)',
        pinStyle:'',
        products_list:[
          {name:'Indigo Adire Eleko', price:'₦3,200', unit:'/yd', emoji:'🎨', grad:'linear-gradient(135deg,#1A2C1A,#356B35)'},
          {name:'Tie-dye Set (3pc)',   price:'₦7,500', unit:'',    emoji:'🌀', grad:'linear-gradient(135deg,#1A2A2C,#2A5A60)'},
          {name:'Batik Resist Print',  price:'₦4,100', unit:'/yd', emoji:'🖌️', grad:'linear-gradient(135deg,#2C1A2C,#6B356B)'},
        ]
      },
      'crown-head':{
        id:'crown-head', name:'Crown Headwear', owner:'Ngozi Chukwu',
        emoji:'👑', zone:'leather', row:'R6', stall:'6', rating:4.4, reviews:389,
        products:78, years:7, open:false, verified:true, topSeller:false,
        avgPrice:'₦2,800', delivery:'Tomorrow',
        description:'Row 6, Stall 6 · Balogun Market',
        walk:'~4 min walk', gradient:'linear-gradient(135deg,#4A1A1A,#7A2828)',
        pinStyle:'',
        products_list:[
          {name:'Gele Fabric Roll', price:'₦2,800', unit:'/yd', emoji:'👑', grad:'linear-gradient(135deg,#2C2A1A,#6B6035)'},
          {name:'Aso-oke Cap',      price:'₦5,500', unit:'',    emoji:'🎩', grad:'linear-gradient(135deg,#2C1A0E,#6B3520)'},
        ]
      },
    },
  },

  tejuosho: {
    id:'tejuosho', name:'Tejuosho Market', location:'Surulere, Lagos',
    watermark:'TM', totalStalls:892, color:'#5C2890',
    entrances:['Main Gate — Tejuosho Ave.','Side Entrance — Ogunlana Dr.'],
    exits:['↑ Tejuosho Ave. Exit','↑ Market Rd. Exit'],
    legend:[
      {cat:'fashion',     label:'Fashion & RTW',       count:324, color:'#5C2890'},
      {cat:'fabric',      label:'Fabrics & Textiles',  count:198, color:'#8B4513'},
      {cat:'electronics', label:'Electronics',         count:142, color:'#1B3A5C'},
      {cat:'accessories', label:'Accessories',         count:128, color:'#7A2828'},
      {cat:'food',        label:'Food & Drinks',       count:68,  color:'#2E6B38'},
      {cat:'misc',        label:'Miscellaneous',       count:32,  color:'#5A4828'},
    ],
    rows:[
      { id:'A1', passage:'— Corridor 1 —', stalls:[
        {z:'fas', w:1, lbl:'A1–2', vid:'weave-queen', pin:1},
        {z:'fas2',     lbl:'A3'},
        {z:'fas',      lbl:'A4'},
        {z:'fas2',w:1, lbl:'A5–6'},
        {z:'fas',      lbl:'A7'},
        {z:'fas2',     lbl:'A8', vid:'chic-lagos'},
        {z:'fas', w:1, lbl:'A9–10'},
        {z:'fab',      lbl:'A11'},
        {z:'fab2',     lbl:'A12'},
      ]},
      { id:'A2', passage:'— Corridor 2 —', stalls:[
        {z:'fab',      lbl:'B1'},
        {z:'fab2',w:1, lbl:'B2–3'},
        {z:'fab',      lbl:'B4', vid:'weave-queen'},
        {z:'fas',      lbl:'B5'},
        {z:'fas2',w:1, lbl:'B6–7'},
        {z:'acc',      lbl:'B8'},
        {z:'acc', w:1, lbl:'B9–10'},
        {z:'fas',      lbl:'B11'},
        {z:'fab',      lbl:'B12'},
      ]},
      { id:'A3', passage:'— Corridor 3 —', cluster:{id:'t3',left:'55%',count:5,color:'blue'}, stalls:[
        {z:'elec',w:1, lbl:'C1–2', vid:'teju-elec', pin:1},
        {z:'elec',     lbl:'C3'},
        {z:'acc',      lbl:'C4'},
        {z:'elec',w:1, lbl:'C5–6'},
        {z:'acc',      lbl:'C7'},
        {z:'elec',     lbl:'C8'},
        {z:'acc', w:1, lbl:'C9–10'},
        {z:'mis',      lbl:'C11'},
        {z:'mis',      lbl:'C12'},
      ]},
      { id:'A4', stalls:[
        {z:'fod',      lbl:'D1'},
        {z:'fod', w:1, lbl:'D2–3', vid:'mama-iya', pin:1},
        {z:'fod',      lbl:'D4'},
        {z:'mis',      lbl:'D5'},
        {z:'acc', w:1, lbl:'D6–7', vid:'sole-boss'},
        {z:'fod',      lbl:'D8'},
        {z:'mis',      lbl:'D9'},
        {z:'fod', w:1, lbl:'D10–11'},
        {z:'mis',      lbl:'D12'},
      ]},
    ],
    vendors:{
      'weave-queen':{
        id:'weave-queen', name:'Weave Queen', owner:'Adaeze Okonkwo',
        emoji:'💇', zone:'fashion', row:'A1', stall:'A1–2', rating:4.7, reviews:834,
        products:215, years:11, open:true, verified:true, topSeller:true,
        avgPrice:'₦8,500', delivery:'Today',
        description:'Block A, Stalls 1–2 · Tejuosho Market',
        walk:'~1 min walk', gradient:'linear-gradient(135deg,#3A1560,#5C2890)',
        pinStyle:'red',
        products_list:[
          {name:'Brazilian Hair Bundle', price:'₦38,000', unit:'',    emoji:'💇', grad:'linear-gradient(135deg,#2C1A2C,#6B356B)'},
          {name:'Closure Wig 18"',       price:'₦52,000', unit:'',    emoji:'👩', grad:'linear-gradient(135deg,#1A0E2C,#3D2063)'},
          {name:'Frontal Lace 22"',      price:'₦65,000', unit:'',    emoji:'👸', grad:'linear-gradient(135deg,#2C1A0E,#6B3520)'},
          {name:'Ankara Fabric',         price:'₦2,200',  unit:'/yd', emoji:'🧶', grad:'linear-gradient(135deg,#1A2C1A,#356B35)'},
        ]
      },
      'chic-lagos':{
        id:'chic-lagos', name:'Chic Lagos Collections', owner:'Temitope Fashola',
        emoji:'👗', zone:'fashion', row:'A1', stall:'A8', rating:4.6, reviews:492,
        products:143, years:6, open:true, verified:true, topSeller:false,
        avgPrice:'₦15,500', delivery:'Today',
        description:'Block A, Stall 8 · Tejuosho Market',
        walk:'~2 min walk', gradient:'linear-gradient(135deg,#501A78,#7A30A8)',
        pinStyle:'',
        products_list:[
          {name:'Peplum Dress',        price:'₦14,000', unit:'', emoji:'👗', grad:'linear-gradient(135deg,#2C1A2C,#6B356B)'},
          {name:'Suit Blazer (Women)', price:'₦25,000', unit:'', emoji:'🥼', grad:'linear-gradient(135deg,#1A0E2C,#3D2063)'},
          {name:'Linen Trouser Set',   price:'₦18,500', unit:'', emoji:'👚', grad:'linear-gradient(135deg,#1A2C3A,#2C4A5C)'},
        ]
      },
      'teju-elec':{
        id:'teju-elec', name:'Tejuosho Electronics Hub', owner:'Babatunde Ojo',
        emoji:'📱', zone:'electronics', row:'A3', stall:'C1–2', rating:4.3, reviews:1102,
        products:389, years:14, open:true, verified:true, topSeller:true,
        avgPrice:'₦45,000', delivery:'Today',
        description:'Block C, Stalls 1–2 · Tejuosho Market',
        walk:'~3 min walk', gradient:'linear-gradient(135deg,#0D1B2A,#1B3A5C)',
        pinStyle:'dark',
        products_list:[
          {name:'iPhone 15 (refurb)', price:'₦320,000', unit:'', emoji:'📱', grad:'linear-gradient(135deg,#0D1B2A,#1B3A5C)'},
          {name:'Samsung A54',        price:'₦195,000', unit:'', emoji:'📲', grad:'linear-gradient(135deg,#1A2C3A,#2C4A5C)'},
          {name:'Wireless Earbuds',   price:'₦18,500',  unit:'', emoji:'🎧', grad:'linear-gradient(135deg,#1A1A2C,#353580)'},
        ]
      },
      'mama-iya':{
        id:'mama-iya', name:'Mama Iya Kitchen', owner:'Yetunde Afolabi',
        emoji:'🍲', zone:'food', row:'A4', stall:'D2–3', rating:4.9, reviews:2341,
        products:48, years:20, open:true, verified:true, topSeller:true,
        avgPrice:'₦1,800', delivery:'Today',
        description:'Block D, Stalls 2–3 · Tejuosho Market',
        walk:'~4 min walk', gradient:'linear-gradient(135deg,#1A3C20,#2E6B38)',
        pinStyle:'red',
        products_list:[
          {name:'Jollof Rice (plate)',  price:'₦1,800', unit:'', emoji:'🍲', grad:'linear-gradient(135deg,#1A2C1A,#356B35)'},
          {name:'Egusi Soup (pot)',     price:'₦4,500', unit:'', emoji:'🥘', grad:'linear-gradient(135deg,#1A2A2C,#2A5A60)'},
          {name:'Puff Puff (10 pcs)',   price:'₦500',   unit:'', emoji:'🧆', grad:'linear-gradient(135deg,#2C1A0E,#6B3520)'},
        ]
      },
      'sole-boss':{
        id:'sole-boss', name:'Sole Boss Footwear', owner:'Chidi Aneke',
        emoji:'👟', zone:'accessories', row:'A4', stall:'D6–7', rating:4.5, reviews:678,
        products:196, years:8, open:true, verified:true, topSeller:false,
        avgPrice:'₦12,000', delivery:'Tomorrow',
        description:'Block D, Stalls 6–7 · Tejuosho Market',
        walk:'~4 min walk', gradient:'linear-gradient(135deg,#4A1A1A,#7A2828)',
        pinStyle:'',
        products_list:[
          {name:'Nike Air Force 1 (rep)', price:'₦22,000', unit:'', emoji:'👟', grad:'linear-gradient(135deg,#2C2A1A,#6B6035)'},
          {name:'Designer Heels',         price:'₦15,500', unit:'', emoji:'👠', grad:'linear-gradient(135deg,#2C1A0E,#6B3520)'},
          {name:"Men's Loafers",          price:'₦18,000', unit:'', emoji:'👞', grad:'linear-gradient(135deg,#1A2C1A,#356B35)'},
        ]
      },
    },
  },

  alaba: {
    id:'alaba', name:'Alaba Intl. Market', location:'Ojo, Lagos',
    watermark:'AI', totalStalls:3200, color:'#1B3A5C',
    entrances:['Gate 1 — Alaba International Rd.','Gate 2 — Mile 2 Expressway'],
    exits:['↑ Gate 1 Exit','↑ Gate 2 Exit'],
    legend:[
      {cat:'electronics', label:'Electronics & Gadgets',  count:1840, color:'#1B3A5C'},
      {cat:'accessories', label:'Accessories & Cables',   count:620,  color:'#7A2828'},
      {cat:'misc',        label:'General / Import Goods', count:480,  color:'#5A4828'},
      {cat:'food',        label:'Food & Refreshments',    count:260,  color:'#2E6B38'},
    ],
    rows:[
      { id:'S1', passage:'— Section A —', stalls:[
        {z:'elec',w:1, lbl:'A1–2', vid:'phonehub', pin:1},
        {z:'elec',     lbl:'A3'},
        {z:'elec',w:1, lbl:'A4–5'},
        {z:'elec',     lbl:'A6'},
        {z:'acc',      lbl:'A7'},
        {z:'elec',w:1, lbl:'A8–9'},
        {z:'elec',     lbl:'A10'},
        {z:'acc',      lbl:'A11'},
        {z:'mis',      lbl:'A12'},
      ]},
      { id:'S2', passage:'— Section B —', cluster:{id:'a2',left:'50%',count:8,color:'blue'}, stalls:[
        {z:'elec',     lbl:'B1'},
        {z:'elec',w:1, lbl:'B2–3', vid:'tv-world', pin:1},
        {z:'elec',     lbl:'B4'},
        {z:'elec',w:1, lbl:'B5–6'},
        {z:'acc',      lbl:'B7'},
        {z:'elec',     lbl:'B8'},
        {z:'acc', w:1, lbl:'B9–10'},
        {z:'mis',      lbl:'B11'},
        {z:'elec',     lbl:'B12'},
      ]},
      { id:'S3', passage:'— Section C —', stalls:[
        {z:'acc', w:1, lbl:'C1–2', vid:'cable-king'},
        {z:'acc',      lbl:'C3'},
        {z:'mis',      lbl:'C4'},
        {z:'acc', w:1, lbl:'C5–6'},
        {z:'elec',     lbl:'C7', vid:'gen-king', pin:1},
        {z:'elec',w:1, lbl:'C8–9'},
        {z:'mis',      lbl:'C10'},
        {z:'acc',      lbl:'C11'},
        {z:'mis',      lbl:'C12'},
      ]},
      { id:'S4', passage:'— Section D —', stalls:[
        {z:'fod',      lbl:'D1'},
        {z:'fod', w:1, lbl:'D2–3'},
        {z:'mis',      lbl:'D4'},
        {z:'fod',      lbl:'D5'},
        {z:'mis', w:1, lbl:'D6–7'},
        {z:'fod',      lbl:'D8'},
        {z:'mis',      lbl:'D9'},
        {z:'fod', w:1, lbl:'D10–11'},
        {z:'mis',      lbl:'D12'},
      ]},
      { id:'S5', stalls:[
        {z:'elec',w:1, lbl:'E1–2'},
        {z:'elec',     lbl:'E3'},
        {z:'elec',     lbl:'E4'},
        {z:'elec',w:1, lbl:'E5–6'},
        {z:'acc',      lbl:'E7'},
        {z:'elec',     lbl:'E8'},
        {z:'acc', w:1, lbl:'E9–10'},
        {z:'elec',     lbl:'E11'},
        {z:'mis',      lbl:'E12'},
      ]},
    ],
    vendors:{
      'phonehub':{
        id:'phonehub', name:'Nigeria Phone Hub', owner:'Alhaji Musa Garba',
        emoji:'📱', zone:'electronics', row:'S1', stall:'A1–2', rating:4.5, reviews:3821,
        products:580, years:16, open:true, verified:true, topSeller:true,
        avgPrice:'₦185,000', delivery:'Today',
        description:'Section A, Stalls 1–2 · Alaba Intl.',
        walk:'~1 min walk', gradient:'linear-gradient(135deg,#0D1B2A,#1B3A5C)',
        pinStyle:'red',
        products_list:[
          {name:'Samsung Galaxy S24',    price:'₦480,000', unit:'', emoji:'📱', grad:'linear-gradient(135deg,#0D1B2A,#1B3A5C)'},
          {name:'Tecno Camon 30',        price:'₦145,000', unit:'', emoji:'📲', grad:'linear-gradient(135deg,#1A2C3A,#2C4A5C)'},
          {name:'Infinix Note 40',       price:'₦95,000',  unit:'', emoji:'📲', grad:'linear-gradient(135deg,#0A1F1A,#1A3D30)'},
          {name:'Phone Accessories Kit', price:'₦12,000',  unit:'', emoji:'🔌', grad:'linear-gradient(135deg,#2C2A1A,#6B6035)'},
        ]
      },
      'tv-world':{
        id:'tv-world', name:'Alaba Smart TV World', owner:'Emmanuel Igwe',
        emoji:'📺', zone:'electronics', row:'S2', stall:'B2–3', rating:4.4, reviews:1240,
        products:92, years:10, open:true, verified:true, topSeller:false,
        avgPrice:'₦320,000', delivery:'Tomorrow',
        description:'Section B, Stalls 2–3 · Alaba Intl.',
        walk:'~2 min walk', gradient:'linear-gradient(135deg,#1A2C3A,#2C4A5C)',
        pinStyle:'dark',
        products_list:[
          {name:'65" Samsung QLED', price:'₦980,000', unit:'', emoji:'📺', grad:'linear-gradient(135deg,#0D1B2A,#1B3A5C)'},
          {name:'43" LG Smart TV',  price:'₦285,000', unit:'', emoji:'📺', grad:'linear-gradient(135deg,#1A2C3A,#2C4A5C)'},
          {name:'4K Projector',     price:'₦220,000', unit:'', emoji:'📽️', grad:'linear-gradient(135deg,#1A1A2C,#353580)'},
        ]
      },
      'cable-king':{
        id:'cable-king', name:'Cable King Accessories', owner:'Henry Obasi',
        emoji:'🔌', zone:'accessories', row:'S3', stall:'C1–2', rating:4.2, reviews:876,
        products:412, years:8, open:true, verified:true, topSeller:false,
        avgPrice:'₦2,500', delivery:'Today',
        description:'Section C, Stalls 1–2 · Alaba Intl.',
        walk:'~3 min walk', gradient:'linear-gradient(135deg,#4A1A1A,#7A2828)',
        pinStyle:'',
        products_list:[
          {name:'iPhone Cable (3pk)',   price:'₦3,500',  unit:'', emoji:'🔌', grad:'linear-gradient(135deg,#2C2A1A,#6B6035)'},
          {name:'HDMI Cable 2m',        price:'₦2,200',  unit:'', emoji:'🔗', grad:'linear-gradient(135deg,#1A2C3A,#2C4A5C)'},
          {name:'Power Bank 20000mAh',  price:'₦18,000', unit:'', emoji:'🔋', grad:'linear-gradient(135deg,#0A1F1A,#1A3D30)'},
        ]
      },
      'gen-king':{
        id:'gen-king', name:'Generator King Lagos', owner:'Seun Adeleke',
        emoji:'⚡', zone:'electronics', row:'S3', stall:'C7', rating:4.6, reviews:543,
        products:67, years:12, open:true, verified:true, topSeller:true,
        avgPrice:'₦280,000', delivery:'Tomorrow',
        description:'Section C, Stall 7 · Alaba Intl.',
        walk:'~3 min walk', gradient:'linear-gradient(135deg,#2A5A10,#4A8A20)',
        pinStyle:'red',
        products_list:[
          {name:'Firman 2.8KVA Gen.',     price:'₦185,000', unit:'', emoji:'⚡', grad:'linear-gradient(135deg,#1A3C20,#2E6B38)'},
          {name:'Elepaq 3.5KVA Gen.',     price:'₦220,000', unit:'', emoji:'⚡', grad:'linear-gradient(135deg,#1A2C1A,#356B35)'},
          {name:'Honda 6.5KVA Inverter',  price:'₦680,000', unit:'', emoji:'🔋', grad:'linear-gradient(135deg,#0A1F1A,#1A3D30)'},
        ]
      },
    },
  },

  computer_village: {
    id:'computer_village', name:'Computer Village', location:'Ikeja, Lagos',
    watermark:'CV', totalStalls:1850, color:'#1A3D30',
    entrances:['Main Gate — Awolowo Way','Side — Obafemi Awolowo Rd.'],
    exits:['↑ Awolowo Way Exit','↑ Opebi Rd. Exit'],
    legend:[
      {cat:'tech',        label:'Computers & Laptops',  count:680, color:'#1A3D30'},
      {cat:'electronics', label:'Phones & Gadgets',     count:520, color:'#1B3A5C'},
      {cat:'accessories', label:'Accessories & Parts',  count:410, color:'#7A2828'},
      {cat:'misc',        label:'Services & Repairs',   count:240, color:'#5A4828'},
    ],
    rows:[
      { id:'T1', passage:'— Zone Alpha —', stalls:[
        {z:'tech',w:1, lbl:'1–2', vid:'laptop-wh', pin:1},
        {z:'tech',     lbl:'3'},
        {z:'tech',w:1, lbl:'4–5'},
        {z:'tech',     lbl:'6'},
        {z:'acc',      lbl:'7', vid:'accessories-plus'},
        {z:'tech',w:1, lbl:'8–9'},
        {z:'mis',      lbl:'10'},
        {z:'acc',      lbl:'11'},
        {z:'mis',      lbl:'12'},
      ]},
      { id:'T2', passage:'— Zone Beta —', cluster:{id:'cv2',left:'60%',count:7,color:'blue'}, stalls:[
        {z:'elec',     lbl:'1'},
        {z:'elec',w:1, lbl:'2–3', vid:'iphone-city', pin:1},
        {z:'elec',     lbl:'4'},
        {z:'acc',      lbl:'5'},
        {z:'elec',w:1, lbl:'6–7'},
        {z:'acc',      lbl:'8'},
        {z:'elec',     lbl:'9'},
        {z:'mis', w:1, lbl:'10–11'},
        {z:'acc',      lbl:'12'},
      ]},
      { id:'T3', passage:'— Zone Gamma —', stalls:[
        {z:'mis',      lbl:'1', vid:'repair-pro'},
        {z:'mis', w:1, lbl:'2–3'},
        {z:'acc',      lbl:'4'},
        {z:'mis',      lbl:'5'},
        {z:'acc', w:1, lbl:'6–7'},
        {z:'mis',      lbl:'8'},
        {z:'tech',     lbl:'9'},
        {z:'tech',w:1, lbl:'10–11'},
        {z:'mis',      lbl:'12'},
      ]},
      { id:'T4', stalls:[
        {z:'tech',     lbl:'1'},
        {z:'tech',w:1, lbl:'2–3'},
        {z:'elec',     lbl:'4'},
        {z:'tech',     lbl:'5'},
        {z:'elec',w:1, lbl:'6–7'},
        {z:'acc',      lbl:'8'},
        {z:'tech',     lbl:'9'},
        {z:'acc', w:1, lbl:'10–11'},
        {z:'mis',      lbl:'12'},
      ]},
    ],
    vendors:{
      'laptop-wh':{
        id:'laptop-wh', name:'Laptop Warehouse CV', owner:'Kingsley Eze',
        emoji:'💻', zone:'tech', row:'T1', stall:'1–2', rating:4.7, reviews:2105,
        products:230, years:15, open:true, verified:true, topSeller:true,
        avgPrice:'₦285,000', delivery:'Today',
        description:'Zone Alpha, Stalls 1–2 · Computer Village',
        walk:'~1 min walk', gradient:'linear-gradient(135deg,#0A1F1A,#1A3D30)',
        pinStyle:'red',
        products_list:[
          {name:'Dell Latitude 5420',  price:'₦385,000', unit:'', emoji:'💻', grad:'linear-gradient(135deg,#0A1F1A,#1A3D30)'},
          {name:'MacBook Air M2',      price:'₦780,000', unit:'', emoji:'💻', grad:'linear-gradient(135deg,#1A2C3A,#2C4A5C)'},
          {name:'HP EliteBook 840',    price:'₦310,000', unit:'', emoji:'💻', grad:'linear-gradient(135deg,#2C2A1A,#6B6035)'},
          {name:'Asus Gaming Laptop',  price:'₦580,000', unit:'', emoji:'🎮', grad:'linear-gradient(135deg,#2C1A0E,#6B3520)'},
        ]
      },
      'iphone-city':{
        id:'iphone-city', name:'iPhone City Lagos', owner:'Tayo Bamidele',
        emoji:'📱', zone:'electronics', row:'T2', stall:'2–3', rating:4.8, reviews:3240,
        products:145, years:9, open:true, verified:true, topSeller:true,
        avgPrice:'₦450,000', delivery:'Today',
        description:'Zone Beta, Stalls 2–3 · Computer Village',
        walk:'~2 min walk', gradient:'linear-gradient(135deg,#0D1B2A,#1B3A5C)',
        pinStyle:'dark',
        products_list:[
          {name:'iPhone 16 Pro Max',  price:'₦1,350,000', unit:'', emoji:'📱', grad:'linear-gradient(135deg,#0D1B2A,#1B3A5C)'},
          {name:'iPhone 15 128GB',    price:'₦650,000',   unit:'', emoji:'📱', grad:'linear-gradient(135deg,#1A2C3A,#2C4A5C)'},
          {name:'AirPods Pro Gen 2',  price:'₦185,000',   unit:'', emoji:'🎧', grad:'linear-gradient(135deg,#1A1A2C,#353580)'},
        ]
      },
      'accessories-plus':{
        id:'accessories-plus', name:'Accessories Plus CV', owner:'Funke Adeyemi',
        emoji:'🔌', zone:'accessories', row:'T1', stall:'7', rating:4.3, reviews:891,
        products:520, years:7, open:true, verified:true, topSeller:false,
        avgPrice:'₦5,500', delivery:'Today',
        description:'Zone Alpha, Stall 7 · Computer Village',
        walk:'~1 min walk', gradient:'linear-gradient(135deg,#4A1A1A,#7A2828)',
        pinStyle:'',
        products_list:[
          {name:'USB-C Hub 7-in-1',  price:'₦12,500', unit:'', emoji:'🔌', grad:'linear-gradient(135deg,#2C2A1A,#6B6035)'},
          {name:'Laptop Bag 15.6"',  price:'₦8,000',  unit:'', emoji:'🎒', grad:'linear-gradient(135deg,#1A2C3A,#2C4A5C)'},
          {name:'Wireless Mouse',    price:'₦4,200',  unit:'', emoji:'🖱️', grad:'linear-gradient(135deg,#1A1A2C,#353580)'},
        ]
      },
      'repair-pro':{
        id:'repair-pro', name:'Phone Repair Pro', owner:'Ahmed Balogun',
        emoji:'🔧', zone:'misc', row:'T3', stall:'1', rating:4.6, reviews:1560,
        products:42, years:11, open:true, verified:true, topSeller:false,
        avgPrice:'₦15,000', delivery:'Same Day',
        description:'Zone Gamma, Stall 1 · Computer Village',
        walk:'~3 min walk', gradient:'linear-gradient(135deg,#302818,#5A4828)',
        pinStyle:'',
        products_list:[
          {name:'Screen Replacement (iPhone)', price:'₦45,000', unit:'', emoji:'📱', grad:'linear-gradient(135deg,#0D1B2A,#1B3A5C)'},
          {name:'Battery Replacement',         price:'₦12,000', unit:'', emoji:'🔋', grad:'linear-gradient(135deg,#1A2C1A,#356B35)'},
          {name:'Motherboard Repair',          price:'₦35,000', unit:'', emoji:'🔧', grad:'linear-gradient(135deg,#2C2A1A,#6B6035)'},
        ]
      },
    },
  },

  oshodi: {
    id:'oshodi', name:'Oshodi Market', location:'Oshodi, Lagos',
    watermark:'OM', totalStalls:2100, color:'#2E6B38',
    entrances:['Gate A — Oshodi-Apapa Expressway','Gate B — Airport Rd.'],
    exits:['↑ Expressway Exit','↑ Airport Rd. Exit'],
    legend:[
      {cat:'fashion',     label:'Fashion & Clothing',  count:620, color:'#5C2890'},
      {cat:'food',        label:'Food & Provisions',   count:480, color:'#2E6B38'},
      {cat:'fabric',      label:'Fabrics',             count:380, color:'#8B4513'},
      {cat:'accessories', label:'Accessories',         count:320, color:'#7A2828'},
      {cat:'misc',        label:'General Goods',       count:300, color:'#5A4828'},
    ],
    rows:[
      { id:'O1', passage:'— Row 1 —', stalls:[
        {z:'fas', w:1, lbl:'1–2', vid:'osh-fashion', pin:1},
        {z:'fas2',     lbl:'3'},
        {z:'fab',      lbl:'4'},
        {z:'fas', w:1, lbl:'5–6'},
        {z:'fas2',     lbl:'7'},
        {z:'fab', w:1, lbl:'8–9'},
        {z:'fas',      lbl:'10'},
        {z:'acc',      lbl:'11'},
        {z:'acc',      lbl:'12'},
      ]},
      { id:'O2', passage:'— Row 2 —', stalls:[
        {z:'fod',      lbl:'1'},
        {z:'fod', w:1, lbl:'2–3', vid:'osh-food', pin:1},
        {z:'fod',      lbl:'4'},
        {z:'mis',      lbl:'5'},
        {z:'fod', w:1, lbl:'6–7'},
        {z:'mis',      lbl:'8'},
        {z:'fod',      lbl:'9'},
        {z:'mis', w:1, lbl:'10–11'},
        {z:'fod',      lbl:'12'},
      ]},
      { id:'O3', passage:'— Row 3 —', cluster:{id:'o3',left:'45%',count:9,color:'purple'}, stalls:[
        {z:'acc', w:1, lbl:'1–2'},
        {z:'mis',      lbl:'3'},
        {z:'acc',      lbl:'4', vid:'osh-acc'},
        {z:'mis', w:1, lbl:'5–6'},
        {z:'acc',      lbl:'7'},
        {z:'mis',      lbl:'8'},
        {z:'acc', w:1, lbl:'9–10'},
        {z:'mis',      lbl:'11'},
        {z:'acc',      lbl:'12'},
      ]},
      { id:'O4', passage:'— Row 4 —', stalls:[
        {z:'fab',      lbl:'1'},
        {z:'fab', w:1, lbl:'2–3'},
        {z:'fas',      lbl:'4'},
        {z:'fab',      lbl:'5'},
        {z:'fas', w:1, lbl:'6–7'},
        {z:'fab',      lbl:'8'},
        {z:'fas2',     lbl:'9'},
        {z:'fab', w:1, lbl:'10–11'},
        {z:'fas',      lbl:'12'},
      ]},
      { id:'O5', stalls:[
        {z:'mis',      lbl:'1'},
        {z:'fod', w:1, lbl:'2–3'},
        {z:'mis',      lbl:'4'},
        {z:'acc',      lbl:'5'},
        {z:'fod', w:1, lbl:'6–7'},
        {z:'mis',      lbl:'8'},
        {z:'acc',      lbl:'9'},
        {z:'fod', w:1, lbl:'10–11'},
        {z:'mis',      lbl:'12'},
      ]},
    ],
    vendors:{
      'osh-fashion':{
        id:'osh-fashion', name:'Oshodi Fashion Spot', owner:'Bukola Olatunji',
        emoji:'👗', zone:'fashion', row:'O1', stall:'1–2', rating:4.5, reviews:1102,
        products:278, years:14, open:true, verified:true, topSeller:true,
        avgPrice:'₦8,500', delivery:'Today',
        description:'Row 1, Stalls 1–2 · Oshodi Market',
        walk:'~1 min walk', gradient:'linear-gradient(135deg,#3A1560,#5C2890)',
        pinStyle:'red',
        products_list:[
          {name:'Ankara Skirt Set',  price:'₦9,500',  unit:'', emoji:'👗', grad:'linear-gradient(135deg,#2C1A2C,#6B356B)'},
          {name:'Office Wear Dress', price:'₦12,000', unit:'', emoji:'👔', grad:'linear-gradient(135deg,#1A0E2C,#3D2063)'},
          {name:'Casual Jumpsuit',   price:'₦7,500',  unit:'', emoji:'👚', grad:'linear-gradient(135deg,#2C1A0E,#6B3520)'},
          {name:'Agbada Set (men)',   price:'₦25,000', unit:'', emoji:'🥻', grad:'linear-gradient(135deg,#1A2C1A,#356B35)'},
        ]
      },
      'osh-food':{
        id:'osh-food', name:'Oshodi Food Bazaar', owner:'Mama Tunde Alausa',
        emoji:'🥘', zone:'food', row:'O2', stall:'2–3', rating:4.8, reviews:2890,
        products:62, years:22, open:true, verified:true, topSeller:true,
        avgPrice:'₦1,500', delivery:'Today',
        description:'Row 2, Stalls 2–3 · Oshodi Market',
        walk:'~2 min walk', gradient:'linear-gradient(135deg,#1A3C20,#2E6B38)',
        pinStyle:'red',
        products_list:[
          {name:'Amala + Ewedu',          price:'₦1,500', unit:'', emoji:'🥘', grad:'linear-gradient(135deg,#1A2C1A,#356B35)'},
          {name:'Buka Stew (bowl)',        price:'₦1,200', unit:'', emoji:'🍲', grad:'linear-gradient(135deg,#1A2A2C,#2A5A60)'},
          {name:'Beans + Fried Plantain',  price:'₦900',   unit:'', emoji:'🫘', grad:'linear-gradient(135deg,#2C1A0E,#6B3520)'},
        ]
      },
      'osh-acc':{
        id:'osh-acc', name:'Lagos Accessories Hub', owner:'Vivian Okafor',
        emoji:'💍', zone:'accessories', row:'O3', stall:'4', rating:4.3, reviews:641,
        products:312, years:6, open:true, verified:true, topSeller:false,
        avgPrice:'₦3,800', delivery:'Today',
        description:'Row 3, Stall 4 · Oshodi Market',
        walk:'~3 min walk', gradient:'linear-gradient(135deg,#4A1A1A,#7A2828)',
        pinStyle:'',
        products_list:[
          {name:'Gold Plated Necklace', price:'₦4,500', unit:'', emoji:'💍', grad:'linear-gradient(135deg,#2C2A1A,#6B6035)'},
          {name:'Waist Beads Set',      price:'₦2,200', unit:'', emoji:'📿', grad:'linear-gradient(135deg,#2C1A0E,#6B3520)'},
          {name:'Ankara Bag',           price:'₦5,800', unit:'', emoji:'👜', grad:'linear-gradient(135deg,#1A2C3A,#2C4A5C)'},
        ]
      },
    },
  },
};

// ── STATE ─────────────────────────────────────────────────────
let scale = 1, tx = 0, ty = 0;
let dragging = false, startX, startY, startTx, startTy;
let activeVendor = null;
let cartCount = 2;
let activeZone = 'all';
let currentMarket = ALL_MARKETS.balogun;
let zoomTimer = null;
let searchData = [];

// ── ELEMENTS ──────────────────────────────────────────────────
const viewport  = document.getElementById('viewport');
const canvas    = document.getElementById('canvas');
const sheet     = document.getElementById('bottomSheet');
const backdrop  = document.getElementById('backdrop');
const bsBody    = document.getElementById('bsBody');
const pqvOv     = document.getElementById('pqvOverlay');
const pqvCard   = document.getElementById('pqvCard');
const searchInp = document.getElementById('searchInp');
const searchRes = document.getElementById('searchResults');
const searchClear = document.getElementById('searchClear');
const zoomInd   = document.getElementById('zoomInd');

// ── MARKET RENDERING ──────────────────────────────────────────
function buildSearchData(mkt) {
  searchData = [];
  Object.values(mkt.vendors).forEach(v => {
    searchData.push({type:'vendor', id:v.id, name:v.name, sub:`${v.row} · ${capitalize(v.zone)}`, emoji:v.emoji, grad:v.gradient});
    v.products_list.forEach(p => {
      searchData.push({type:'product', name:p.name, sub:`${v.name} · ${p.price}`, vid:v.id, emoji:p.emoji, grad:p.grad});
    });
  });
  mkt.legend.forEach(l => {
    searchData.push({type:'zone', name:`${capitalize(l.cat)} Zone`, sub:`${l.count} stalls`, zone:l.cat, emoji:ZONE_DEFS[l.cat]?.emoji||'📦'});
  });
}

function renderPlan(mkt) {
  const plan = document.getElementById('plan');
  let html = `<div class="market-watermark">${mkt.watermark}</div>`;

  html += `<div class="mkt-entrance">
    <div class="ent-badge">↓ ${mkt.entrances[0]}</div>
    <div class="ent-line"></div>
    <div class="ent-badge">${mkt.entrances[1]} ↓</div>
  </div>`;

  mkt.rows.forEach(row => {
    html += `<div class="mkt-row">
      <div class="row-id">${row.id}</div>
      <div class="corridor">`;

    row.stalls.forEach((stall, si) => {
      const zd = ZONE_DEFS[stall.z] || ZONE_DEFS.mis;
      const cls = ['stall', zd.cls, stall.w ? 'wide' : ''].filter(Boolean).join(' ');
      const vid = stall.vid || '';
      html += `<div class="${cls}" data-id="${row.id}-s${si+1}" ${vid ? `data-vid="${vid}"` : ''}>
        <span class="stall-lbl">${stall.lbl}</span>`;

      if (stall.pin && vid && mkt.vendors[vid]) {
        const v = mkt.vendors[vid];
        html += `<div class="pin visible" id="pin-${vid}" style="left:50%;top:0" data-vid="${vid}">
          <div class="pin-bubble ${v.pinStyle||''}">
            <span class="pin-em">${v.emoji}</span>
            <div><div class="pin-nm">${v.name}</div><div class="pin-sc">${v.rating}★ · ${row.id}</div></div>
          </div>
        </div>`;
      }
      html += `</div>`;
    });

    if (row.userDot) {
      html += `<div class="user-pin" style="left:${row.userDot.left};top:${row.userDot.top}"><div class="user-ring"></div><div class="user-dot-el"></div></div>`;
    }
    if (row.cluster) {
      const c = row.cluster;
      html += `<div class="pin visible" id="pin-cluster-${c.id}" style="left:${c.left};top:0" data-cluster="${c.id}">
        <div class="pin-cluster ${c.color}">${c.count}</div>
      </div>`;
    }

    html += `</div></div>`;
    if (row.passage) html += `<div class="pass">${row.passage}</div>`;
  });

  html += `<div class="mkt-entrance" style="margin-top:16px">
    <div class="ent-badge" style="opacity:.4">↑ ${mkt.exits[0]}</div>
    <div class="ent-line"></div>
    <div class="ent-badge" style="opacity:.4">↑ ${mkt.exits[1]}</div>
  </div>`;

  plan.innerHTML = html;
}

function renderLegend(mkt) {
  const legend = document.getElementById('legend');
  legend.innerHTML = `<div class="leg-title">Zone Legend</div>` +
    mkt.legend.map(l => `
      <div class="leg-item" data-cat="${l.cat}" style="cursor:pointer" onclick="filterZone('${l.cat}')">
        <div class="leg-sw" style="background:${l.color}"></div>
        <div class="leg-lbl">${l.label}</div>
        <div class="leg-cnt">${l.count}</div>
      </div>`).join('');
}

function renderZoneChips(mkt) {
  const cats = document.getElementById('mapCats');
  const seen = new Set();
  const chips = [{cat:'all', label:'All Zones', color:'#fff'}];
  mkt.legend.forEach(l => {
    if (!seen.has(l.cat)) { seen.add(l.cat); chips.push({cat:l.cat, label:capitalize(l.cat), color:l.color}); }
  });
  cats.innerHTML = chips.map((c,i) => `
    <div class="map-cat${i===0?' active':''}" data-zone="${c.cat}">
      <div class="map-cat-dot" style="background:${c.color}"></div>${c.label}
    </div>`).join('');
  cats.querySelectorAll('.map-cat').forEach(cat => {
    cat.addEventListener('click', () => {
      cats.querySelectorAll('.map-cat').forEach(c => c.classList.remove('active'));
      cat.classList.add('active');
      filterZone(cat.dataset.zone);
    });
  });
}

function renderMarket(marketId, instant) {
  const mkt = ALL_MARKETS[marketId];
  if (!mkt) return;
  currentMarket = mkt;
  activeZone = 'all';

  const plan = document.getElementById('plan');
  if (!instant) plan.style.opacity = '0';

  setTimeout(() => {
    renderPlan(mkt);
    renderLegend(mkt);
    renderZoneChips(mkt);
    buildSearchData(mkt);
    updateNavPill(mkt);
    attachMapEvents();
    initPins();
    highlightStalls('');
    closeSheet();
    searchInp.value = '';
    searchClear.classList.remove('show');
    closeSearchResults();

    plan.style.transition = instant ? 'none' : 'opacity .35s';
    plan.style.opacity = '1';

    scale = 1;
    setTimeout(() => { centerOnPlan(); showZoomInd(); }, 60);
  }, instant ? 0 : 180);
}

function updateNavPill(mkt) {
  document.getElementById('marketPillName').textContent = mkt.name;
  document.title = `Market Map — ${mkt.name} · Market Mirror`;
}

// ── MARKET SWITCHER UI ────────────────────────────────────────
function renderMarketSwitcher() {
  const list = document.getElementById('msList');
  list.innerHTML = Object.values(ALL_MARKETS).map(m => `
    <div class="ms-mkt-item ${m.id === currentMarket.id ? 'active' : ''}" data-mid="${m.id}">
      <div class="ms-mkt-dot" style="background:${m.color}"></div>
      <div class="ms-mkt-info">
        <div class="ms-mkt-name">${m.name}</div>
        <div class="ms-mkt-sub">${m.location} · ${m.totalStalls.toLocaleString()} stalls</div>
      </div>
      ${m.id === currentMarket.id ? '<div class="ms-mkt-check">✓</div>' : ''}
    </div>`).join('');

  list.querySelectorAll('.ms-mkt-item').forEach(el => {
    el.addEventListener('click', () => {
      const mid = el.dataset.mid;
      closeSwitcher();
      if (mid !== currentMarket.id) {
        showToast(`📍 Switching to ${ALL_MARKETS[mid].name}…`);
        setTimeout(() => renderMarket(mid), 300);
      }
    });
  });
}

function openSwitcher() {
  renderMarketSwitcher();
  document.getElementById('marketSwitcher').classList.add('open');
  document.getElementById('marketPill').classList.add('active');
}
function closeSwitcher() {
  document.getElementById('marketSwitcher').classList.remove('open');
  document.getElementById('marketPill').classList.remove('active');
}

document.getElementById('marketPill').addEventListener('click', e => {
  e.stopPropagation();
  const sw = document.getElementById('marketSwitcher');
  sw.classList.contains('open') ? closeSwitcher() : openSwitcher();
});
document.addEventListener('click', e => {
  if (!e.target.closest('#marketSwitcher') && !e.target.closest('#marketPill')) closeSwitcher();
});

// ── PAN & ZOOM ────────────────────────────────────────────────
function applyTransform() {
  canvas.style.transform = `translate(${tx}px,${ty}px) scale(${scale})`;
}
function clampTransform() {
  const vw = viewport.offsetWidth, vh = viewport.offsetHeight - 60;
  const cw = 1200 * scale, ch = canvas.offsetHeight * scale;
  tx = Math.max(Math.min(0, vw - cw - 80), Math.min(80, tx));
  ty = Math.max(Math.min(0, vh - ch - 80), Math.min(80, ty));
}
function setScale(s, cx, cy) {
  const prev = scale;
  scale = Math.max(.45, Math.min(2.2, s));
  const r = scale / prev;
  tx = cx - r * (cx - tx);
  ty = cy - r * (cy - ty);
  clampTransform(); applyTransform(); showZoomInd();
}
function showZoomInd() {
  zoomInd.textContent = Math.round(scale * 100) + '%';
  zoomInd.classList.add('show');
  clearTimeout(zoomTimer);
  zoomTimer = setTimeout(() => zoomInd.classList.remove('show'), 1400);
}
function centerOnPlan() {
  const vw = viewport.offsetWidth, vh = viewport.offsetHeight;
  const plan = document.getElementById('plan');
  const cw = 1200, ch = plan ? plan.offsetHeight : 700;
  tx = (vw - cw * scale) / 2;
  ty = Math.max(20, (vh - ch * scale) / 2);
  applyTransform();
}
function panToStall(stallEl) {
  if (!stallEl) return;
  const vr = viewport.getBoundingClientRect();
  const sr = stallEl.getBoundingClientRect();
  const dx = (vr.left + vr.width / 2) - (sr.left + sr.width / 2);
  const dy = (vr.top + vr.height / 2) - (sr.top + sr.height / 2);
  tx += dx; ty += dy;
  clampTransform(); applyTransform();
}

// Mouse pan
viewport.addEventListener('mousedown', e => {
  if (e.target.closest('.pin,.map-search,.map-cats,.ctrl-right,.ctrl-bl,.legend,#marketSwitcher,#marketPill')) return;
  dragging = true; startX = e.clientX; startY = e.clientY; startTx = tx; startTy = ty;
  viewport.classList.add('dragging');
});
window.addEventListener('mousemove', e => {
  if (!dragging) return;
  tx = startTx + e.clientX - startX; ty = startTy + e.clientY - startY;
  clampTransform(); applyTransform();
});
window.addEventListener('mouseup', () => { dragging = false; viewport.classList.remove('dragging'); });

viewport.addEventListener('wheel', e => {
  e.preventDefault();
  const r = viewport.getBoundingClientRect();
  setScale(scale * (e.deltaY < 0 ? 1.1 : 0.91), e.clientX - r.left, e.clientY - r.top);
}, {passive: false});

let lastTouches = null, lastPinchDist = null;
viewport.addEventListener('touchstart', e => {
  if (e.touches.length === 2) lastPinchDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
  else { lastTouches = e.touches[0]; startTx = tx; startTy = ty; }
}, {passive: true});
viewport.addEventListener('touchmove', e => {
  e.preventDefault();
  if (e.touches.length === 2) {
    const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
    const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2;
    if (lastPinchDist) setScale(scale * (d / lastPinchDist), cx, cy);
    lastPinchDist = d;
  } else if (lastTouches) {
    tx = startTx + e.touches[0].clientX - lastTouches.clientX;
    ty = startTy + e.touches[0].clientY - lastTouches.clientY;
    clampTransform(); applyTransform();
  }
}, {passive: false});
viewport.addEventListener('touchend', () => { lastTouches = null; lastPinchDist = null; });

document.getElementById('zoomIn').addEventListener('click', () => { const r = viewport.getBoundingClientRect(); setScale(scale * 1.18, r.width / 2, r.height / 2); });
document.getElementById('zoomOut').addEventListener('click', () => { const r = viewport.getBoundingClientRect(); setScale(scale * 0.85, r.width / 2, r.height / 2); });
document.getElementById('resetView').addEventListener('click', () => { scale = 1; centerOnPlan(); showZoomInd(); });

// ── VENDOR SHEET ──────────────────────────────────────────────
function openSheet(vid) {
  const v = currentMarket.vendors[vid]; if (!v) return;
  activeVendor = vid;
  document.querySelectorAll('.pin').forEach(p => p.classList.remove('selected'));
  const pin = document.getElementById('pin-' + vid);
  if (pin) pin.classList.add('selected');

  bsBody.innerHTML = `
    <div class="bs-hdr">
      <div class="bs-avatar" style="background:${v.gradient}">${v.emoji}</div>
      <div class="bs-info">
        <div class="bs-badges">
          ${v.topSeller ? '<span class="bs-badge b-top">✓ Top Seller</span>' : ''}
          <span class="bs-badge b-cat">${capitalize(v.zone)}</span>
          <span class="bs-badge ${v.open ? 'b-open' : 'b-closed'}">${v.open ? '● Open now' : '● Closed'}</span>
        </div>
        <div class="bs-name">${v.name}</div>
        <div class="bs-owner">${v.owner}</div>
      </div>
      <div class="bs-right">
        <button class="bs-close" id="bsClose">✕</button>
        <div class="bs-rating">
          <span class="bs-stars">★★★★★</span>
          <span class="bs-score">${v.rating}</span>
          <span class="bs-rcount">(${v.reviews.toLocaleString()})</span>
        </div>
      </div>
    </div>
    <div class="bs-loc">
      <div class="bs-loc-dot"></div>
      ${v.description}
      <span style="color:var(--border)">·</span>
      <span class="bs-walk">${v.walk}</span>
    </div>
    <div class="bs-stats">
      <div class="bs-stat"><div class="bs-sn">${v.products}</div><div class="bs-sl">Products</div></div>
      <div class="bs-stat"><div class="bs-sn">${v.years}yr</div><div class="bs-sl">Trading</div></div>
      <div class="bs-stat"><div class="bs-sn">${v.avgPrice}</div><div class="bs-sl">Avg. price</div></div>
      <div class="bs-stat"><div class="bs-sn">${v.delivery}</div><div class="bs-sl">Delivery</div></div>
    </div>
    <div class="bs-prod-label">Top Products — tap to view</div>
    <div class="bs-prods">
      ${v.products_list.map((p, i) => `
        <div class="bs-prod" data-pid="${i}" data-vid="${v.id}">
          <div class="bs-pimg" style="background:${p.grad}">${p.emoji}</div>
          <div class="bs-pname">${p.name}</div>
          <div class="bs-pprice">${p.price}${p.unit}</div>
        </div>`).join('')}
      <div class="bs-prod" style="cursor:pointer" onclick="window.location.href='product-listing.html'">
        <div class="bs-pimg" style="background:var(--card-bg);border:1px dashed var(--border);font-size:13px;font-weight:700;color:var(--muted);font-family:'Inter',sans-serif">+${Math.max(0, v.products - v.products_list.length)}</div>
        <div class="bs-pname" style="color:var(--muted)">More</div>
      </div>
    </div>
    <div class="bs-actions">
      <button class="bs-btn-sec" id="dirBtn">📍 Directions</button>
      <button class="bs-btn-pri" id="viewShopBtn">Visit Store Page →</button>
    </div>`;

  sheet.classList.add('open');
  backdrop.classList.add('open');

  document.getElementById('bsClose').onclick = closeSheet;
  document.getElementById('viewShopBtn').onclick = () => window.location.href = `vendor.html?id=${vid}`;
  document.getElementById('dirBtn').onclick = () => showToast('📍 ' + v.description);
  document.querySelectorAll('.bs-prod[data-pid]').forEach(el => {
    el.addEventListener('click', () => openProductQV(v, v.products_list[parseInt(el.dataset.pid)]));
  });
}

function closeSheet() {
  sheet.classList.remove('open');
  backdrop.classList.remove('open');
  document.querySelectorAll('.pin').forEach(p => p.classList.remove('selected'));
  activeVendor = null;
}

backdrop.addEventListener('click', closeSheet);

// ── PRODUCT QUICK-VIEW ────────────────────────────────────────
function openProductQV(vendor, product) {
  pqvCard.innerHTML = `
    <div class="pqv-img" style="background:${product.grad}">
      <div style="position:relative;z-index:1;font-size:80px">${product.emoji}</div>
      <button class="pqv-close-btn" id="pqvClose">✕</button>
    </div>
    <div class="pqv-body">
      <div class="pqv-ven">${vendor.name} <span class="pqv-vcheck">✓ Verified</span></div>
      <div class="pqv-name">${product.name}</div>
      <div class="pqv-sub">${product.unit ? 'Minimum 3 yards · Available in multiple patterns' : '1 piece · Multiple sizes available'}</div>
      <div class="pqv-row">
        <div>
          <div class="pqv-price">${product.price}</div>
          <div class="pqv-unit">${product.unit || 'per piece'}</div>
        </div>
        <span class="pqv-badge">● In Stock</span>
      </div>
      <div class="pqv-btns">
        <button class="pqv-add" id="pqvAdd">🛒 Add to Cart</button>
        <button class="pqv-detail" onclick="window.location.href='product-detail.html'">Details</button>
      </div>
    </div>`;
  pqvOv.classList.add('open');
  document.getElementById('pqvClose').onclick = () => pqvOv.classList.remove('open');
  document.getElementById('pqvAdd').onclick = () => { addToCart(product.name); pqvOv.classList.remove('open'); };
  pqvOv.addEventListener('click', e => { if (e.target === pqvOv) pqvOv.classList.remove('open'); }, {once: true});
}

// ── CART ──────────────────────────────────────────────────────
function addToCart(name) {
  cartCount++;
  const el = document.getElementById('cartCount');
  el.textContent = cartCount;
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 350);
  showToast(`🛒 ${name} added to cart`);
}

// ── TOAST ─────────────────────────────────────────────────────
function showToast(msg, duration = 2800) {
  const wrap = document.getElementById('toastWrap');
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  wrap.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, duration);
}

// ── MAP EVENT HANDLERS (re-attached on each market render) ────
function attachMapEvents() {
  const clusterExpanded = {};

  document.querySelectorAll('.pin[data-vid]').forEach(pin => {
    pin.addEventListener('click', e => { e.stopPropagation(); openSheet(pin.dataset.vid); });
  });

  document.querySelectorAll('.pin[data-cluster]').forEach(pin => {
    pin.addEventListener('click', e => {
      e.stopPropagation();
      const cid = pin.dataset.cluster;
      if (clusterExpanded[cid]) { showToast('Zoomed into cluster'); return; }
      clusterExpanded[cid] = true;
      const el = pin.querySelector('.pin-cluster');
      if (el) { el.style.transform = 'scale(.7)'; el.style.opacity = '.3'; }
      const cnt = el ? el.textContent : '?';
      const rect = pin.getBoundingClientRect();
      const vr = viewport.getBoundingClientRect();
      setScale(Math.min(scale * 1.4, 1.8), rect.left + rect.width / 2 - vr.left, rect.top + rect.height / 2 - vr.top);
      showToast(`🔍 Showing ${cnt} vendors in this area`);
    });
  });

  document.querySelectorAll('.stall:not(.empty)').forEach(stall => {
    stall.addEventListener('click', e => {
      if (e.target.closest('.pin')) return;
      const vid = stall.dataset.vid;
      if (vid) { openSheet(vid); return; }
      const id = stall.dataset.id || '';
      const prefix = id.split('-')[0];
      const zone = getZoneCat(stall);
      showToast(`${getZoneEmoji(zone)} ${capitalize(zone)} zone · No listed vendor`);
    });
  });
}

function getZoneCat(stallEl) {
  for (const [key, zd] of Object.entries(ZONE_DEFS)) {
    if (stallEl.classList.contains(zd.cls)) return zd.cat;
  }
  return 'misc';
}

function initPins() {
  document.querySelectorAll('.pin.visible').forEach((pin, i) => {
    pin.style.transitionDelay = (i * 70) + 'ms';
    setTimeout(() => { pin.style.transitionDelay = '0ms'; }, 700 + i * 70);
  });
}

// ── SEARCH ────────────────────────────────────────────────────
searchInp.addEventListener('focus', () => { if (searchInp.value.trim()) renderSearchResults(searchInp.value); });
searchInp.addEventListener('input', () => {
  const q = searchInp.value.trim();
  searchClear.classList.toggle('show', q.length > 0);
  if (q.length > 0) renderSearchResults(q); else closeSearchResults();
  highlightStalls(q);
});
searchClear.addEventListener('click', () => {
  searchInp.value = ''; searchClear.classList.remove('show');
  closeSearchResults(); highlightStalls('');
});

function renderSearchResults(q) {
  const lq = q.toLowerCase();
  const matches = searchData.filter(d => d.name.toLowerCase().includes(lq) || (d.sub && d.sub.toLowerCase().includes(lq)));
  if (!matches.length) { searchRes.innerHTML = `<div class="sr-empty">No results for "${q}"</div>`; searchRes.classList.add('open'); return; }

  const vens  = matches.filter(d => d.type === 'vendor');
  const prods = matches.filter(d => d.type === 'product');
  const zones = matches.filter(d => d.type === 'zone');

  let html = '';
  if (vens.length)  html += `<div class="sr-section">Vendors</div>`  + vens.map((d, i)  => srItem(d, i, 'v')).join('');
  if (prods.length) html += `<div class="sr-section">Products</div>` + prods.map((d, i) => srItem(d, i, 'p')).join('');
  if (zones.length) html += `<div class="sr-section">Zones</div>`    + zones.map((d, i) => srItem(d, i, 'z')).join('');

  searchRes.innerHTML = html;
  searchRes.classList.add('open');

  // Attach click handlers with correct item reference
  searchRes.querySelectorAll('.sr-item[data-type="v"]').forEach((el, i) => {
    el.addEventListener('click', () => {
      closeSearchResults();
      searchInp.value = vens[i].name;
      const vid = vens[i].id;
      const stallEl = document.querySelector(`.stall[data-vid="${vid}"]`);
      panToStall(stallEl);
      setTimeout(() => openSheet(vid), 120);
    });
  });
  searchRes.querySelectorAll('.sr-item[data-type="p"]').forEach((el, i) => {
    el.addEventListener('click', () => {
      closeSearchResults();
      searchInp.value = prods[i].name;
      const vid = prods[i].vid;
      const stallEl = document.querySelector(`.stall[data-vid="${vid}"]`);
      panToStall(stallEl);
      setTimeout(() => openSheet(vid), 120);
    });
  });
  searchRes.querySelectorAll('.sr-item[data-type="z"]').forEach((el, i) => {
    el.addEventListener('click', () => {
      closeSearchResults();
      filterZone(zones[i].zone);
    });
  });
}

function srItem(d, i, type) {
  return `<div class="sr-item" data-type="${type}">
    <div class="sr-avatar" style="background:${d.grad || d.color || 'var(--card-bg)'}">${d.emoji || '📦'}</div>
    <div class="sr-info"><div class="sr-name">${d.name}</div><div class="sr-sub">${d.sub || ''}</div></div>
    <span class="sr-tag">${d.type}</span>
  </div>`;
}

function closeSearchResults() { searchRes.classList.remove('open'); }
document.addEventListener('click', e => { if (!e.target.closest('.ctrl-top')) closeSearchResults(); });
viewport.addEventListener('click', () => { closeSearchResults(); closeSwitcher(); });

function highlightStalls(q) {
  const stalls = document.querySelectorAll('.stall:not(.empty)');
  if (!q) { stalls.forEach(s => s.classList.remove('highlighted', 'dimmed')); return; }
  const lq = q.toLowerCase();
  stalls.forEach(s => {
    const vid = s.dataset.vid;
    const v = vid ? currentMarket.vendors[vid] : null;
    const match = v && (v.name.toLowerCase().includes(lq) || v.zone.includes(lq) || v.products_list.some(p => p.name.toLowerCase().includes(lq)));
    s.classList.toggle('highlighted', !!match);
    s.classList.toggle('dimmed', !match);
  });
}

// ── ZONE FILTER ───────────────────────────────────────────────
function filterZone(zone) {
  activeZone = zone;
  document.querySelectorAll('.map-cat').forEach(c => c.classList.toggle('active', c.dataset.zone === zone));
  const stalls = document.querySelectorAll('.stall:not(.empty)');
  if (zone === 'all') { stalls.forEach(s => { s.classList.remove('dimmed', 'highlighted'); }); return; }
  stalls.forEach(s => {
    const cat = getZoneCat(s);
    s.classList.toggle('dimmed', cat !== zone);
    s.classList.remove('highlighted');
  });
  showToast(getZoneEmoji(zone) + ' Showing ' + capitalize(zone) + ' zone');
}

// ── FILTER DRAWER ─────────────────────────────────────────────
document.getElementById('filterBtn').addEventListener('click', () => {
  document.getElementById('filterDrawer').classList.toggle('open');
});
document.getElementById('drawerClose').addEventListener('click', () => {
  document.getElementById('filterDrawer').classList.remove('open');
});
document.querySelectorAll('.fd-option').forEach(opt => {
  opt.addEventListener('click', () => {
    const check = opt.querySelector('.fd-check');
    check.classList.toggle('on');
    showToast('Filters updated');
  });
});

// ── LOCATE ME ─────────────────────────────────────────────────
document.getElementById('locateBtn').addEventListener('click', () => {
  const btn = document.getElementById('locateBtn');
  btn.classList.add('locating');
  btn.innerHTML = '<span class="locate-ico">◎</span> Locating…';
  setTimeout(() => {
    btn.classList.remove('locating');
    btn.innerHTML = '<span class="locate-ico">◎</span> Locate me';
    scale = 1.3;
    const vr = viewport.getBoundingClientRect();
    tx = vr.width / 2 - 1200 * scale * 0.73;
    ty = vr.height / 2 - 500 * scale * 0.38;
    clampTransform(); applyTransform(); showZoomInd();
    showToast('📍 You are near ' + currentMarket.rows[1]?.id + ' — ' + capitalize(currentMarket.legend[0]?.cat || '') + ' Zone');
  }, 1200);
});

// ── KEYBOARD ──────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); searchInp.focus(); }
  if (e.key === 'Escape') { closeSheet(); closeSearchResults(); pqvOv.classList.remove('open'); document.getElementById('filterDrawer').classList.remove('open'); closeSwitcher(); }
  if (e.key === '+' || e.key === '=') { const r = viewport.getBoundingClientRect(); setScale(scale * 1.15, r.width / 2, r.height / 2); }
  if (e.key === '-') { const r = viewport.getBoundingClientRect(); setScale(scale * 0.87, r.width / 2, r.height / 2); }
  if (e.key === '0') { scale = 1; centerOnPlan(); showZoomInd(); }
});

// ── HELPERS ───────────────────────────────────────────────────
function getZoneEmoji(z) { return {fabric:'🧶',leather:'👜',fashion:'👘',food:'🍱',accessories:'💍',misc:'📦',electronics:'📱',tech:'💻'}[z] || '📦'; }
function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

// ── INIT ──────────────────────────────────────────────────────
window.addEventListener('load', () => {
  renderMarket('balogun', true);
  setTimeout(() => openSheet('mama-titi'), 700);
});
