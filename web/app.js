/* ---------- Apple Globalcare CRM — demo runtime ---------- */
var DESKS = ["Sales","Marketing","Support","Processing","Shipping","Pharmacy","Quality","Accounts","Legal","HR & admin"];
var SEED = {
  stage: 1,
  cur: "TK-58120",
  rules: [
    {kw:"invoice|payment|credit|receipt", desk:"Accounts"},
    {kw:"prescription|rx|dose|side effect", desk:"Pharmacy"},
    {kw:"parcel|delivery|shipment|courier|customs", desk:"Shipping"},
    {kw:"quote|price|proforma|order", desk:"Sales"},
    {kw:"batch|coa|recall|deviation|certificate", desk:"Quality"},
    {kw:"contract|clause|agreement|legal", desk:"Legal"},
    {kw:"leave|payslip|salary|holiday|offer letter", desk:"HR & admin"},
    {kw:"rfq|supplier|sourcing", desk:"Sourcing"}
  ],
  sla: {"Sales":"4 h","Support":"2 h","Pharmacy":"4 h","Shipping":"2 h","Accounts":"8 h","Quality":"8 h","Legal":"24 h","HR & admin":"8 h","Sourcing":"8 h","Processing":"4 h"},
  marginFloor: 10,
  notes: [
    {id:"N1", t:"Prescription released \u2014 T. Nakamura \u00b7 RX-2026-1180", d:"for the Processing desk \u00b7 Internal", go:"tickets", at:"16:20", read:false},
    {id:"N2", t:"Leave application \u2014 Colm B. \u00b7 22\u201326 Sep", d:"waiting for HR", go:"leavemgmt", at:"09:05", read:false},
    {id:"N3", t:"Holiday request \u2014 Founder's Day", d:"HR proposed, waiting for Admin", go:"leavemgmt", at:"Yest.", read:true}
  ],
  labels: [
    {id:"L1", name:"VIP patient", c:"#D93025"},
    {id:"L2", name:"Tender", c:"#7C3AED"},
    {id:"L3", name:"Follow-up", c:"#F59E0B"},
    {id:"L4", name:"Insurance", c:"#1D4ED8"}
  ],
  ccdecision: "",
  cccapa: false,
  wave: [
    {id:"OR-2026-0881", who:"Den R.", drug:"Blinatumomab 35 mcg", batch:"1094327", exp:"02/2028", loc:"CR-2 \u00b7 B14", qty:"3 vials", fefo:"OK", st:"picked", cold:true},
    {id:"OR-2026-0884", who:"M. Okafor", drug:"Lenvatinib 10 mg", batch:"2259870", exp:"03/2027", loc:"AM-1 \u00b7 D05", qty:"60 caps", fefo:"OK", st:"picking", cold:false},
    {id:"OR-2026-0887", who:"A. Petrova", drug:"Pembrolizumab 100 mg", batch:"3390142", exp:"07/2027", loc:"CR-1 \u00b7 A03", qty:"2 vials", fefo:"Breach", st:"held", cold:true,
     alt:{batch:"3388916", exp:"01/2027", loc:"CR-1 \u00b7 A01"}},
    {id:"OR-2026-0889", who:"S. Al Marri", drug:"Nusinersen 12 mg", batch:"5517230", exp:"04/2028", loc:"CR-2 \u00b7 B02", qty:"1 vial", fefo:"OK", st:"qa", cold:true},
    {id:"OR-2026-0890", who:"K. Mensah", drug:"Eculizumab 300 mg", batch:"4402881", exp:"09/2027", loc:"CR-1 \u00b7 A11", qty:"4 vials", fefo:"OK", st:"picked", cold:true},
    {id:"OR-2026-0892", who:"Clinique St. Anne", drug:"Imatinib 400 mg", batch:"1180934", exp:"05/2028", loc:"AM-2 \u00b7 F12", qty:"90 tabs", fefo:"OK", st:"picking", cold:false},
    {id:"OR-2026-0894", who:"R. Silva", drug:"Daratumumab 400 mg", batch:"7714028", exp:"12/2027", loc:"CR-2 \u00b7 B21", qty:"1 vial", fefo:"OK", st:"queued", cold:true}
  ],
  whphotos: 23,
  caselog: [{"c": "#0c7c94", "t": "Shipment collected by World Courier", "tag": "Now", "at": "10 Sep &middot; 18:05", "d": "AWB 020-88401925 &middot; validated 96 h shipper, 4 PCM packs, logger CT-99118 armed. ETA hospital 12 Sep 10:30.", "k": "order"}, {"c": "#1c7a52", "t": "QA release &amp; packing complete", "tag": "", "at": "10 Sep &middot; 17:05", "d": "Batch 1094327 exp 03/2028 &middot; CoA matched &middot; serialisation checked against EMVS &middot; released by Arun K.", "k": "order"}, {"c": "#8b98ab", "t": "Call — delivery window agreed", "tag": "3 m 12 s", "at": "10 Sep &middot; 14:10", "d": "Den R. confirmed the hospital pharmacy takes deliveries before 16:00 on Thursdays.", "k": "ticket"}, {"c": "#1c7a52", "t": "Payment received", "tag": "$7,180", "at": "09 Sep &middot; 11:20", "d": "Wire, EUR settled at 1.0912 &middot; invoice INV-2026-2214 &middot; AML screening clear.", "k": "payment"}, {"c": "#1c7a52", "t": "Prescription verified by pharmacist", "tag": "", "at": "08 Sep &middot; 15:36", "d": "Dr. Sara M. &mdash; prescriber licence, dose vs label, 90-day personal import limit and storage instructions all checked.", "k": "order"}, {"c": "#1d4ed8", "t": "Quote accepted &mdash; Option B (Germany)", "tag": "", "at": "07 Sep &middot; 19:02", "d": "Patient chose 6-day lead time over the lower Turkey price. Margin 12.6% &middot; FX held for the life of the quote.", "k": "quote"}, {"c": "#1d4ed8", "t": "Quote sent &mdash; 3 sourcing options", "tag": "", "at": "06 Sep &middot; 10:15", "d": "Germany $3,590 &middot; Turkey $2,410 &middot; United States $4,120 (all delivered prices per vial, incl. cold-chain freight and duty).", "k": "quote"}, {"c": "#1d4ed8", "t": "RFQ issued to 6 partners in 5 countries", "tag": "", "at": "05 Sep &middot; 09:30", "d": "United States, Germany, United Kingdom, Turkey, Australia &middot; 4 responded within SLA, 2 chased.", "k": "quote"}, {"c": "#8b98ab", "t": "Ticket TK-58120 opened on WhatsApp", "tag": "", "at": "05 Sep &middot; 09:02", "d": "Quote request for cycles 4 and 5 — routed to Sales, Priya N. assigned.", "k": "ticket"}],
  casedocs: [],
  casemgr: "Priya N.",
  rfq: {
    id:"RFQ-2026-1188", drug:"Blinatumomab 35 mcg powder for infusion",
    spec:"Originator or approved biosimilar \u00b7 cycles 4 and 5 \u00b7 2 vials per cycle",
    qty:"4 vials", need:"18 Oct", dest:"Ireland \u00b7 hospital pharmacy",
    storage:"2\u20138 \u00b0C validated lane", case:"CA-2026-0418", sent:"05 Sep 09:30",
    lines:[
      {country:"Germany", partner:"Rheinpharm GmbH \u00b7 WDA DE-4412", maker:"Amgen Europe",
       pack:"Blincyto\u00ae EU pack", batch:"1094327", exp:"03 / 2028", avail:"6 vials",
       landed:3136, lead:"6", rating:"4.8 \u00b7 61 orders", flag:"Clear",
       note:"Authorised distributor \u00b7 direct from Amgen", state:"in", sel:false},
      {country:"United States", partner:"Meridian Specialty Rx \u00b7 VAWD", maker:"Amgen Inc.",
       pack:"US NDC pack", batch:"US-77410", exp:"06 / 2028", avail:"12 vials",
       landed:3690, lead:"4", rating:"4.9 \u00b7 112 orders", flag:"Clear",
       note:"Authorised distributor \u00b7 direct from Amgen Inc.", state:"in", sel:false},
      {country:"Turkey", partner:"Anadolu Ila\u00e7 A.\u015e. \u00b7 GDP TR-1180", maker:"Amgen \u00b7 TR import",
       pack:"Turkish-language pack", batch:"TR-88213", exp:"11 / 2027", avail:"2 vials \u00b7 2 short",
       landed:2065, lead:"9", rating:"4.2 \u00b7 18 orders", flag:"Licence expires 20 Sep",
       note:"Bought from another wholesaler \u00b7 two steps from the maker", state:"in", sel:false},
      {country:"Australia", partner:"Southern Cross Pharma \u00b7 TGA", maker:"Amgen Australia",
       pack:"AU pack, English", batch:"AU-20918", exp:"09 / 2027", avail:"4 vials",
       landed:3480, lead:"12", rating:"4.6 \u00b7 37 orders", flag:"Shelf life 11 months",
       note:"Authorised distributor \u00b7 direct", state:"in", sel:false},
      {country:"United Kingdom", partner:"Thameside Healthcare", maker:"", pack:"", batch:"", exp:"",
       avail:"", landed:0, lead:"", rating:"", flag:"",
       note:"Awaiting a response \u2014 RFQ sent 05 Sep 09:30, chased 09 Sep. The 48 h SLA is breached.",
       state:"waiting", sel:false},
      {country:"India", partner:"Sunrise Global Exports", maker:"", pack:"", batch:"", exp:"",
       avail:"", landed:0, lead:"", rating:"", flag:"",
       note:"Declined \u2014 the molecule is not marketed locally and the biosimilar is not approved for this indication.",
       state:"declined", sel:false}
    ],
    log:[{t:"RFQ sent to six partners in six countries", by:"Yusuf A.", at:"05 Sep 09:30"},
         {t:"Thameside Healthcare chased \u00b7 no answer", by:"Yusuf A.", at:"09 Sep 11:10"}]
  },
  quote: {
    id:"QT-2026-0931", patient:"Den R.", drug:"Blinatumomab 35 mcg \u00b7 4 vials", case:"CA-2026-0418",
    status:"draft",
    opts:[
      {k:"A", name:"Fastest", note:"Recommended for cycle continuity", origin:"United States \u00b7 US pack",
       lead:"4", landed:3690, fee:430, show:true, def:false},
      {k:"B", name:"Balanced", note:"Pre-selected for the patient", origin:"Germany \u00b7 EU pack",
       lead:"6", landed:3136, fee:454, show:true, def:true},
      {k:"C", name:"Lowest cost", note:"Needs an English leaflet translation", origin:"Turkey \u00b7 TR pack",
       lead:"9", landed:2065, fee:345, show:true, def:false}
    ],
    log:[{t:"Quote built from three sourcing responses", by:"Priya N.", at:"11 Sep 16:40"}]
  },
  orders: [
    {id:"OR-2026-0893", drug:"Daratumumab 400 mg", who:"R. Silva", country:"Portugal", cold:true,
     note:"Batch D-44102 · certificate of analysis under review", due:"16 Sep", left:"2 d 22 h", risk:false,
     pay:"Paid", owner:"Arun K.", stage:0, val:"€7,180", case:"CA-2026-0431"},
    {id:"OR-2026-0879", drug:"Lenvatinib 10 mg", who:"M. Okafor", country:"Nigeria", cold:false,
     note:"Serialisation check pending on two packs", due:"15 Sep", left:"1 d 6 h", risk:false,
     pay:"Part paid", owner:"Arun K.", stage:0, val:"$2,940", case:"CA-2026-0402"},
    {id:"OR-2026-0874", drug:"Eculizumab 300 mg", who:"K. Mensah", country:"Ghana", cold:true,
     note:"Inbound excursion — awaiting the stability call", due:"14 Sep", left:"4 h", risk:true,
     pay:"Paid", owner:"Arun K.", stage:0, val:"$18,600", case:"CA-2026-0379"},
    {id:"OR-2026-0877", drug:"Elexacaftor combination", who:"T. Nakamura", country:"Japan", cold:false,
     note:"Yakkan Shoumei drafted, waiting on the consulate", due:"18 Sep", left:"4 d 22 h", risk:false,
     pay:"Paid", owner:"Priya N.", stage:1, val:"$24,100", case:"CA-2026-0384"},
    {id:"OR-2026-0872", drug:"Pembrolizumab 100 mg", who:"A. Petrova", country:"Kazakhstan", cold:true,
     note:"Invoice and air waybill generated", due:"15 Sep", left:"1 d 9 h", risk:false,
     pay:"Paid", owner:"Priya N.", stage:1, val:"$11,400", case:"CA-2026-0371"},
    {id:"OR-2026-0869", drug:"Ibrutinib 140 mg", who:"J. Baptiste", country:"Haiti", cold:false,
     note:"Customs data complete", due:"17 Sep", left:"3 d 22 h", risk:false,
     pay:"Awaiting payment", owner:"Priya N.", stage:1, val:"$6,220", case:"CA-2026-0388"},
    {id:"OR-2026-0866", drug:"Nusinersen 12 mg", who:"S. Al Marri", country:"United Arab Emirates", cold:true,
     note:"Shipper conditioning · 4 h left", due:"15 Sep", left:"1 d 2 h", risk:false,
     pay:"Paid", owner:"Liam C.", stage:2, val:"$21,800", case:"CA-2026-0396"},
    {id:"OR-2026-0863", drug:"Imatinib 400 mg · bulk", who:"Gulf Pharma Trading", country:"United Arab Emirates",
     cold:false, note:"Pick list printed — packing blocked", due:"16 Sep", left:"2 d 22 h", risk:false,
     pay:"INV-2176 · 17 d overdue", owner:"Liam C.", stage:2, val:"$26,400", case:"OP-2026-0218",
     hold:"Credit limit reached"},
    {id:"OR-2026-0861", drug:"Trastuzumab 440 mg", who:"P. Almeida", country:"Brazil", cold:true,
     note:"Courier pickup booked for 14:30", due:"14 Sep", left:"6 h", risk:true,
     pay:"Paid", owner:"Liam C.", stage:3, val:"$9,750", case:"CA-2026-0366"},
    {id:"OR-2026-0858", drug:"Osimertinib 80 mg", who:"L. Haddad", country:"Lebanon", cold:false,
     note:"Awaiting the air waybill confirmation", due:"15 Sep", left:"1 d 4 h", risk:false,
     pay:"Paid", owner:"Liam C.", stage:3, val:"$4,980", case:"CA-2026-0361"},
    {id:"OR-2026-0854", drug:"Blinatumomab 35 mcg", who:"Den R.", country:"Ireland", cold:true,
     note:"Excursion at Frankfurt — QA decision due", due:"12 Sep", left:"1 d late", risk:true,
     pay:"Paid", owner:"Liam C.", stage:4, val:"€7,180", case:"CA-2026-0418"},
    {id:"OR-2026-0851", drug:"Pembrolizumab 100 mg", who:"A. Petrova", country:"Kazakhstan", cold:true,
     note:"Out for delivery in Almaty", due:"13 Sep", left:"5 h", risk:false,
     pay:"Paid", owner:"Liam C.", stage:4, val:"$11,400", case:"CA-2026-0371"},
    {id:"OR-2026-0847", drug:"Nusinersen 12 mg", who:"S. Al Marri", country:"United Arab Emirates", cold:true,
     note:"Held at Dubai customs · 6 h", due:"14 Sep", left:"1 d 3 h", risk:true,
     pay:"Paid", owner:"Liam C.", stage:4, val:"$21,800", case:"CA-2026-0396"}
  ],
  orddone: [
    {id:"OR-2026-0840", drug:"Imatinib 400 mg", who:"Clinique St. Anne", at:"today 09:40 · signed by C. Mercier"},
    {id:"OR-2026-0836", drug:"Nivolumab 100 mg", who:"H. Yilmaz", at:"today 08:15 · signed by the patient"}
  ],
  ordlog: [
    {t:"<b>OR-2026-0851</b> handed to the courier in Almaty", by:"Liam C.", at:"08:20"},
    {t:"<b>OR-2026-0863</b> put on hold — credit limit reached", by:"Jia L.", at:"07:55"}
  ],
  qa: [
    {id:"OR-2026-0893", prod:"Daratumumab 400 mg / 20 mL", batch:"D-44102", sup:"Rheinpharm GmbH",
     exp:"05 / 2028", temp:"2.9 – 7.1 °C, in range", tempok:true, handling:"2–8 °C",
     forwhom:"R. Silva · promised 16 Sep", recv:"Liam C. · 12 Sep 14:20", signer:"Arun K. · RP",
     waiting:"1 h 05 m", status:"review", mine:true,
     checks:[[1,"Supplier qualified and licence in date","Rheinpharm · WDA verified 12 Aug"],
             [1,"Batch and lot match the certificate of analysis","Assay 99.2%, appearance and pH within spec"],
             [1,"Serialisation verified","2D code checked against EMVS — active, not decommissioned"],
             [1,"Expiry covers the full course","05 / 2028 · 20 months remaining"],
             [1,"Inbound temperature reviewed","Logger DE-77204 · 2.9 – 7.1 °C, no excursion"],
             [1,"Visual inspection and tamper seal","Six photographs on file · seal intact"],
             [0,"Leaflet language","German pack — the approved English translation is still to be added"],
             [1,"Segregation of duties","Received by Liam C., signed out by Arun K."]]},
    {id:"OR-2026-0890", prod:"Pembrolizumab 100 mg / 4 mL", batch:"PB-55901", sup:"Meridian Clinical Supplies",
     exp:"11 / 2027", temp:"3.4 – 6.8 °C, in range", tempok:true, handling:"2–8 °C",
     forwhom:"T. Nakamura · promised 18 Sep", recv:"Liam C. · 13 Sep 09:05", signer:"Arun K. · RP",
     waiting:"42 m", status:"ready", mine:true,
     checks:[[1,"Supplier qualified and licence in date","MHRA WDA verified 01 Sep"],
             [1,"Batch and lot match the certificate of analysis","Assay 98.8% · within spec"],
             [1,"Serialisation verified","Codes active on the national system"],
             [1,"Expiry covers the full course","11 / 2027 · 14 months remaining"],
             [1,"Inbound temperature reviewed","Logger UK-22190 · no excursion"],
             [1,"Visual inspection and tamper seal","Seal intact · photographs filed"],
             [1,"Leaflet language","English pack · correct for the destination"],
             [1,"Segregation of duties","Received and signed out by different people"]]},
    {id:"OR-2026-0888", prod:"Nusinersen 12 mg / 5 mL", batch:"NS-30117", sup:"Nordic Rare Therapeutics",
     exp:"07 / 2027", temp:"2.6 – 7.4 °C, in range", tempok:true, handling:"2–8 °C",
     forwhom:"S. Al Marri · promised 20 Sep", recv:"Mo A. · 13 Sep 11:40", signer:"Arun K. · RP",
     waiting:"28 m", status:"ready", mine:false,
     checks:[[1,"Supplier qualified and licence in date","Danish WDA verified 11 Aug"],
             [1,"Batch and lot match the certificate of analysis","Within spec"],
             [1,"Serialisation verified","Active"],
             [1,"Expiry covers the full course","07 / 2027 · 10 months remaining"],
             [1,"Inbound temperature reviewed","No excursion"],
             [1,"Visual inspection and tamper seal","Intact"],
             [1,"Leaflet language","English and Arabic in the pack"],
             [1,"Segregation of duties","Two people recorded"]]},
    {id:"OR-2026-0879", prod:"Lenvatinib 10 mg capsules", batch:"LV-77321", sup:"Meridian Clinical Supplies",
     exp:"09 / 2028", temp:"Ambient · within 15–25 °C", tempok:true, handling:"15–25 °C",
     forwhom:"M. Okafor · promised 19 Sep", recv:"Mo A. · 12 Sep 16:10", signer:"Arun K. · RP",
     waiting:"3 h 40 m", status:"review", mine:true,
     checks:[[1,"Supplier qualified and licence in date","MHRA WDA verified 01 Sep"],
             [1,"Batch and lot match the certificate of analysis","Within spec"],
             [0,"Serialisation verified","Two packs did not scan — waiting on the supplier to confirm the codes"],
             [1,"Expiry covers the full course","09 / 2028"],
             [1,"Inbound temperature reviewed","Ambient log within range"],
             [1,"Visual inspection and tamper seal","Intact"],
             [1,"Leaflet language","English pack"],
             [1,"Segregation of duties","Two people recorded"]]},
    {id:"OR-2026-0874", prod:"Eculizumab 300 mg / 30 mL", batch:"EC-10228", sup:"Nordic Rare Therapeutics",
     exp:"02 / 2028", temp:"11.4 °C for 3 h · excursion", tempok:false, handling:"2–8 °C",
     forwhom:"K. Mensah · promised 22 Sep", recv:"Liam C. · 11 Sep 08:30", signer:"Arun K. · RP",
     waiting:"6 h 20 m", status:"quarantine", mine:false,
     quarWhy:"Inbound temperature excursion beyond the manufacturer's allowance",
     checks:[[1,"Supplier qualified and licence in date","Danish WDA verified 11 Aug"],
             [1,"Batch and lot match the certificate of analysis","Within spec"],
             [1,"Serialisation verified","Active"],
             [1,"Expiry covers the full course","02 / 2028"],
             [0,"Inbound temperature reviewed","Reached 11.4 °C for 3 h — beyond the allowance, stability call with the manufacturer pending"],
             [1,"Visual inspection and tamper seal","Intact"],
             [1,"Leaflet language","English pack"],
             [1,"Segregation of duties","Two people recorded"]]},
    {id:"OR-2026-0885", prod:"Imatinib 400 mg · bulk, 400 packs", batch:"IM-88410", sup:"Anadolu Pharma",
     exp:"04 / 2027", temp:"Ambient · in range", tempok:true, handling:"15–25 °C",
     forwhom:"Gulf Pharma Trading · bulk order", recv:"Bart K. · 12 Sep 10:15", signer:"Arun K. · RP",
     waiting:"2 h 10 m", status:"review", mine:false,
     checks:[[1,"Supplier qualified and licence in date","Turkish GMP verified"],
             [1,"Batch and lot match the certificate of analysis","Within spec"],
             [1,"Serialisation verified","Bulk codes checked on a 10% sample"],
             [0,"Expiry covers the full course","04 / 2027 — seven months, short for a twelve-month contract"],
             [1,"Inbound temperature reviewed","Ambient log within range"],
             [1,"Visual inspection and tamper seal","Intact"],
             [1,"Leaflet language","English and Turkish"],
             [1,"Segregation of duties","Two people recorded"]]}
  ],
  qadev: [
    {id:"DV-2026-041", batch:"EC-10228", what:"Inbound leg reached 11.4 °C for 3 h", sev:"Major", state:"Investigation"},
    {id:"DV-2026-039", batch:"LV-77321", what:"Two packs did not scan on receipt", sev:"Minor", state:"With the supplier"}
  ],
  qalog: [
    {t:"<b>NS-30115</b> released · Nusinersen · 1 vial", by:"Arun K. · RP", at:"13 Sep 15:05"},
    {t:"<b>IM-88402</b> released · Imatinib bulk · 200 packs", by:"Arun K. · RP", at:"13 Sep 11:20"},
    {t:"<b>PB-55890</b> returned to Meridian — seal damaged on two cartons", by:"Arun K. · RP", at:"12 Sep 16:40"}
  ],
  qareleased: 6,
  rx: [
    {id:"RX-2026-1196", pat:"Den R.", dob:"04 / 1968", mrn:"88-41027", country:"Ireland",
     drug:"Blinatumomab (Blincyto®) 35 mcg vial", dose:"28 mcg / day, continuous IV infusion, days 1–28 of each cycle",
     diag:"B-cell acute lymphoblastic leukaemia, relapsed, Ph−",
     hosp:"St. James's Hospital", dept:"Department of Haematology · James's Street, Dublin 8",
     presc:"Prof. E. Fitzgerald", reg:"IMC 402188", dated:"10 Sep 2026", got:"11 Sep 08:40 · secure upload",
     tag:"Cold chain", tagc:"t-cyan", age:"02 h 14 m", sla:false, mine:true, case:"CA-2026-0418",
     auth:"4 vials · cycles 4 and 5", used:"0 vials", rel:"2 vials · cycle 4", exp:"10 Mar 2027",
     checks:[[1,"Prescriber identity & licence","IMC register checked live · specialty matches the indication"],
             [1,"Prescription authenticity","Digital signature valid · no duplicate submission"],
             [1,"Patient identity match","Name, date of birth and MRN match the KYC documents"],
             [1,"Dose, schedule & weight","Maintenance dose · step-up already completed in cycle 1"],
             [1,"Indication vs approved use","On-label · no medical director sign-off needed"],
             [1,"Interactions & contraindications","Penicillin allergy not implicated"],
             [1,"Quantity vs import limit","4 vials · under the three-month personal limit"],
             [0,"Refill timing","Requested six weeks ahead of the cycle 4 date — confirm the schedule with the clinic"],
             [1,"Storage & handling counselling","Cold-chain leaflet queued for the delivery pack"]],
     status:"queue"},
    {id:"RX-2026-1194", pat:"M. Okafor", dob:"11 / 1979", mrn:"NG-22084", country:"Nigeria",
     drug:"Lenvatinib (Lenvima®) 10 mg capsule", dose:"8 mg once daily, continuous",
     diag:"Hepatocellular carcinoma, unresectable",
     hosp:"Lagos University Teaching Hospital", dept:"Oncology day unit · Idi-Araba, Lagos",
     presc:"Dr. A. Chukwu", reg:"MDCN 68120", dated:"04 Sep 2026", got:"09 Sep 14:05 · email, countersigned",
     tag:"Past SLA", tagc:"t-red", age:"05 h 40 m", sla:true, mine:true, case:"CA-2026-0402",
     auth:"90 capsules · 3 months", used:"30 capsules", rel:"30 capsules · month 2", exp:"04 Mar 2027",
     checks:[[1,"Prescriber identity & licence","MDCN register checked · oncology"],
             [0,"Prescription authenticity","Scanned copy only — the countersigned original is still to come"],
             [1,"Patient identity match","Passport and hospital number match"],
             [1,"Dose, schedule & weight","8 mg for body weight under 60 kg · correct"],
             [1,"Indication vs approved use","On-label"],
             [0,"Interactions & contraindications","On amlodipine — blood pressure to be monitored weekly"],
             [1,"Quantity vs import limit","Within the personal import allowance"],
             [1,"Refill timing","Due now · month 1 dispensed 08 Aug"],
             [1,"Storage & handling counselling","Ambient · standard leaflet"]],
     status:"queue"},
    {id:"RX-2026-1191", pat:"S. Al Marri", dob:"02 / 2021", mrn:"AE-70155", country:"United Arab Emirates",
     drug:"Nusinersen (Spinraza®) 12 mg / 5 mL", dose:"12 mg intrathecal, maintenance every 4 months",
     diag:"Spinal muscular atrophy, type 2",
     hosp:"Al Jalila Children's Specialty Hospital", dept:"Neurology · Al Jaddaf, Dubai",
     presc:"Dr. H. Al Suwaidi", reg:"DHA 118842", dated:"08 Sep 2026", got:"10 Sep 11:20 · hospital portal",
     tag:"Paediatric", tagc:"t-amber", age:"01 h 08 m", sla:false, mine:false, case:"CA-2026-0396",
     auth:"1 vial · maintenance dose", used:"0 vials", rel:"1 vial", exp:"08 Mar 2027",
     checks:[[1,"Prescriber identity & licence","DHA register checked · paediatric neurology"],
             [1,"Prescription authenticity","Portal submission · signed by the consultant"],
             [1,"Patient identity match","Emirates ID of the guardian on file"],
             [1,"Dose, schedule & weight","Fixed 12 mg dose regardless of weight · correct"],
             [1,"Indication vs approved use","On-label for SMA type 2"],
             [1,"Interactions & contraindications","None recorded"],
             [1,"Quantity vs import limit","Single vial · within the limit"],
             [1,"Refill timing","Due 28 Sep · four months since the last dose"],
             [0,"Storage & handling counselling","Guardian counselling call not yet made"]],
     status:"queue"},
    {id:"RX-2026-1188", pat:"J. Baptiste", dob:"07 / 1990", mrn:"HT-3391", country:"Haiti",
     drug:"Ruxolitinib (Jakafi®) 15 mg tablet", dose:"15 mg twice daily",
     diag:"Steroid-refractory graft-versus-host disease",
     hosp:"Hôpital Universitaire de Mirebalais", dept:"Haematology · Mirebalais",
     presc:"Dr. M. Pierre", reg:"MSPP 4471", dated:"01 Sep 2026", got:"09 Sep 09:15 · secure upload",
     tag:"Off-label", tagc:"t-violet", age:"48 m", sla:false, mine:false, case:"CA-2026-0388",
     auth:"120 tablets · 2 months", used:"0 tablets", rel:"60 tablets · month 1", exp:"01 Mar 2027",
     checks:[[1,"Prescriber identity & licence","MSPP register checked"],
             [1,"Prescription authenticity","Signature verified against the file copy"],
             [1,"Patient identity match","Passport matches"],
             [1,"Dose, schedule & weight","Standard adult dose"],
             [0,"Indication vs approved use","Off-label in this country — medical director sign-off needed"],
             [1,"Interactions & contraindications","No interacting medicines declared"],
             [1,"Quantity vs import limit","Within the limit"],
             [1,"Refill timing","First supply"],
             [1,"Storage & handling counselling","Ambient · leaflet in French"]],
     status:"queue"},
    {id:"RX-2026-1185", pat:"K. Mensah", dob:"09 / 1984", mrn:"GH-5520", country:"Ghana",
     drug:"Eculizumab (Soliris®) 300 mg / 30 mL", dose:"900 mg IV every 14 days, maintenance",
     diag:"Paroxysmal nocturnal haemoglobinuria",
     hosp:"Korle Bu Teaching Hospital", dept:"Haematology · Accra",
     presc:"Dr. K. Boateng", reg:"MDC 22118", dated:"06 Sep 2026", got:"12 Sep 07:55 · secure upload",
     tag:"Early refill", tagc:"t-amber", age:"21 m", sla:false, mine:true, case:"CA-2026-0379",
     auth:"6 vials · 3 doses", used:"4 vials", rel:"2 vials", exp:"06 Mar 2027",
     checks:[[1,"Prescriber identity & licence","MDC register checked"],
             [1,"Prescription authenticity","Digital signature valid"],
             [1,"Patient identity match","Name and hospital number match"],
             [1,"Dose, schedule & weight","900 mg maintenance · correct"],
             [1,"Indication vs approved use","On-label"],
             [1,"Interactions & contraindications","Meningococcal vaccination confirmed 2024"],
             [1,"Quantity vs import limit","Within the limit"],
             [0,"Refill timing","Eleven days since the last supply — three days early, confirm the infusion date"],
             [1,"Storage & handling counselling","Cold chain · leaflet with the pack"]],
     status:"queue"}
  ],
  rxq: [
    {id:"Q-114", pat:"Den R.", q:"Cycle 4 and 5 dates — does the step-up dosing repeat?",
     sent:"11 Sep 09:50", state:"answered", ans:"Answered by phone 10:20 · no step-up needed"},
    {id:"Q-115", pat:"M. Okafor", q:"Current weight for the cycle 4 dose",
     sent:"12 Sep 08:10", state:"waiting", ans:""}
  ],
  rxlog: [
    {t:"<b>RX-2026-1180</b> released for T. Nakamura · 3 vials", by:"Dr. Sara M. · PSI 19882", at:"13 Sep 16:20"},
    {t:"<b>RX-2026-1179</b> rejected — dose outside the approved range", by:"Dr. Omar F. · PSI 20114", at:"13 Sep 11:05"},
    {t:"<b>Q-113</b> answered by the prescriber · supply resumed", by:"automatic", at:"12 Sep 15:40"}
  ],
  employees: [
    {id:"E1", name:"Priya N.", dept:"Support", doa:"12 Mar 2024", sal:"$42,000", leave:"12.5 d", status:"Confirmed", docs:"Complete", ben:["PF","Insurance","Med-claim","Term plan"]},
    {id:"E2", name:"Marco B.", dept:"Sales", doa:"04 Jan 2023", sal:"$58,000", leave:"9.0 d", status:"Confirmed", docs:"Complete", ben:["PF","Insurance","Med-claim","Term plan"]},
    {id:"E3", name:"Dr. Sara M.", dept:"Pharmacy", doa:"18 Aug 2022", sal:"$76,000", leave:"16.0 d", status:"Confirmed", docs:"Complete", ben:["PF","Insurance","Med-claim","Term plan","Personal accident"]},
    {id:"E4", name:"Colm B.", dept:"Shipping", doa:"27 Jun 2023", sal:"$46,000", leave:"7.5 d", status:"Confirmed", docs:"Complete", ben:["PF","Insurance","Med-claim"]},
    {id:"E5", name:"Tom R.", dept:"Digital marketing", doa:"09 Feb 2025", sal:"$39,000", leave:"11.0 d", status:"Confirmed", docs:"Missing", ben:["PF","Insurance","Med-claim"]},
    {id:"E6", name:"Neha S.", dept:"Design", doa:"21 Nov 2024", sal:"$37,000", leave:"13.5 d", status:"Confirmed", docs:"Complete", ben:["PF","Insurance","Med-claim"]},
    {id:"E7", name:"Ivan D.", dept:"Support", doa:"11 Sep 2026", sal:"$24,000", leave:"0.0 d", status:"On probation", docs:"Missing", ben:["PF"]},
    {id:"E8", name:"Bart K.", dept:"Warehouse", doa:"15 May 2021", sal:"$31,000", leave:"18.0 d", status:"Confirmed", docs:"Complete", ben:["PF","Insurance","Med-claim","Term plan","Gratuity"]},
    {id:"E9", name:"Sam W.", dept:"Sourcing", doa:"30 Mar 2026", sal:"$44,000", leave:"4.0 d", status:"On probation", docs:"Complete", ben:["PF","Insurance"]},
    {id:"E10", name:"Paul K.", dept:"Processing", doa:"08 Aug 2022", sal:"$34,000", leave:"2.0 d", status:"Notice period", docs:"Complete", ben:["PF","Insurance","Med-claim"]}
  ],
  emplog: [
    {t:"Term plan added for <b>Colm B.</b>", by:"Hannah P.", at:"11 Sep"},
    {t:"Med-claim dependants updated for <b>Dr. Sara M.</b>", by:"Hannah P.", at:"10 Sep"},
    {t:"Insurance removed for <b>Paul K.</b>, leaving 26 Sep", by:"Hannah P.", at:"09 Sep"},
    {t:"PF opened for <b>Ivan D.</b> on joining", by:"automatic", at:"11 Sep"}
  ],
  suppliers: [
    {id:"SUP-014", name:"Rheinpharm GmbH", code:"AGC-SUP-014", cat:"Wholesaler", country:"Germany", city:"Cologne",
     reg:"DE-WDA-2021-4417", contact:"Ingo M.", email:"ingo.m@rheinpharm.example", phone:"+49 221 555 0142",
     terms:"30 days", cur:"EUR", lead:"7", status:"Approved", rating:"A", audit:"12 Mar 2026", naudit:"12 Mar 2027",
     spend:"486000", note:"First call for EU-sourced oncology. Holds stock of four of our top molecules.",
     certs:[{id:"C1", type:"GDP", no:"GDP-DE-88142", body:"Bezirksregierung K\u00f6ln", issued:"14 Feb 2024", exp:"14 Feb 2027"},
            {id:"C2", type:"Wholesale licence (WDA)", no:"DE-WDA-2021-4417", body:"Land NRW", issued:"03 Jun 2021", exp:"03 Jun 2027"}]},
    {id:"SUP-021", name:"Nordic Rare Therapeutics ApS", code:"AGC-SUP-021", cat:"Named-patient supplier", country:"Denmark",
     city:"Copenhagen", reg:"DK-NP-2022-0918", contact:"Freja L.", email:"freja@nordicrare.example", phone:"+45 33 55 0188",
     terms:"45 days", cur:"EUR", lead:"12", status:"Approved", rating:"A-", audit:"22 Jan 2026", naudit:"22 Jan 2027",
     spend:"392000", note:"Named-patient routes for SMA and ultra-rare. QP release included in the price.",
     certs:[{id:"C3", type:"GDP", no:"GDP-DK-2211", body:"L\u00e6gemiddelstyrelsen", issued:"09 Sep 2023", exp:"09 Sep 2026"},
            {id:"C4", type:"Wholesale licence (WDA)", no:"DK-WDA-5512", body:"Danish Medicines Agency", issued:"11 Mar 2022", exp:"11 Mar 2028"}]},
    {id:"SUP-009", name:"Helvetica Biologics AG", code:"AGC-SUP-009", cat:"Manufacturer (MAH)", country:"Switzerland",
     city:"Basel", reg:"CH-MAH-1188", contact:"Dr. Ursula B.", email:"u.brunner@helveticabio.example", phone:"+41 61 555 0110",
     terms:"Advance", cur:"CHF", lead:"21", status:"On hold", rating:"B+", audit:"05 Nov 2025", naudit:"05 Nov 2026",
     spend:"148000", note:"On hold until the renewed EU-GMP certificate is on file. Sourcing has asked twice.",
     certs:[{id:"C5", type:"EU-GMP", no:"CH-GMP-2023-771", body:"Swissmedic", issued:"18 Oct 2023", exp:"18 Oct 2026"}]},
    {id:"SUP-032", name:"Gulf Medica Trading LLC", code:"AGC-SUP-032", cat:"Distributor", country:"United Arab Emirates",
     city:"Dubai", reg:"AE-DXB-778142", contact:"Khalid R.", email:"khalid@gulfmedica.example", phone:"+971 4 555 0166",
     terms:"60 days", cur:"AED", lead:"9", status:"Approved", rating:"B", audit:"30 Apr 2026", naudit:"30 Oct 2026",
     spend:"174000", note:"Gulf distribution partner. Watch the lead time in the Ramadan period.",
     certs:[{id:"C6", type:"GDP", no:"AE-GDP-3391", body:"Ministry of Health and Prevention", issued:"02 Dec 2023", exp:"02 Dec 2026"}]},
    {id:"SUP-018", name:"Osaka Speciality Pharma KK", code:"AGC-SUP-018", cat:"Manufacturer (MAH)", country:"Japan",
     city:"Osaka", reg:"JP-PMDA-55218", contact:"Hiro T.", email:"hiro.t@osakasp.example", phone:"+81 6 5550 0122",
     terms:"Letter of credit", cur:"JPY", lead:"28", status:"Approved", rating:"A", audit:"17 Jun 2026", naudit:"17 Jun 2027",
     spend:"268000", note:"Long lead time. Order against the forecast, not against the case.",
     certs:[{id:"C7", type:"Manufacturing licence", no:"JP-ML-9921", body:"PMDA", issued:"01 Apr 2024", exp:"01 Apr 2029"},
            {id:"C8", type:"ISO 9001", no:"ISO-JP-44120", body:"JQA", issued:"19 May 2024", exp:"19 May 2027"}]},
    {id:"SUP-041", name:"CryoLogistics Ireland Ltd", code:"AGC-SUP-041", cat:"Cold-chain packaging", country:"Ireland",
     city:"Dublin", reg:"IE-556412", contact:"Aoife D.", email:"aoife@cryologistics.example", phone:"+353 1 555 0177",
     terms:"30 days", cur:"EUR", lead:"4", status:"Approved", rating:"A", audit:"08 Aug 2026", naudit:"08 Aug 2027",
     spend:"96000", note:"Validated 2-8 \u00b0C shippers, 96-hour and 120-hour. Qualification reports on file.",
     certs:[{id:"C9", type:"ISO 9001", no:"ISO-IE-7712", body:"NSAI", issued:"26 Jan 2025", exp:"26 Jan 2028"},
            {id:"C10", type:"GDP", no:"IE-GDP-2290", body:"HPRA", issued:"14 Nov 2024", exp:"14 Nov 2027"}]},
    {id:"SUP-027", name:"Meridian Clinical Supplies Ltd", code:"AGC-SUP-027", cat:"Wholesaler", country:"United Kingdom",
     city:"Manchester", reg:"UK-WDA-118842", contact:"Sam P.", email:"sam.p@meridiancs.example", phone:"+44 161 555 0199",
     terms:"45 days", cur:"GBP", lead:"6", status:"Under review", rating:"B+", audit:"14 Feb 2025", naudit:"14 Sep 2026",
     spend:"64000", note:"Audit is due this month. Nothing new goes on order until it is closed out.",
     certs:[{id:"C11", type:"Wholesale licence (WDA)", no:"UK-WDA-118842", body:"MHRA", issued:"21 Jul 2022", exp:"21 Jul 2027"}]},
    {id:"SUP-050", name:"Andes Pharma SAC", code:"AGC-SUP-050", cat:"Distributor", country:"Peru", city:"Lima",
     reg:"PE-DIGEMID-3312", contact:"Marta C.", email:"marta@andespharma.example", phone:"+51 1 555 0121",
     terms:"Advance", cur:"USD", lead:"18", status:"Blocked", rating:"C", audit:"&mdash;", naudit:"&mdash;",
     spend:"0", note:"Blocked. No free-sale certificate on file and the last two lots arrived without a shipping log.",
     certs:[]}
  ],
  holidays: [
    {id:"H1", d:"02 Oct 2026", n:"Gandhi Jayanti", o:"India", t:"National", a:"approved 01 Jan 2026"},
    {id:"H2", d:"20 Oct 2026", n:"Diwali", o:"India", t:"National", a:"approved 01 Jan 2026"},
    {id:"H3", d:"02 Dec 2026", n:"UAE National Day", o:"UAE", t:"National", a:"approved 01 Jan 2026"},
    {id:"H4", d:"25 Dec 2026", n:"Christmas Day", o:"All offices", t:"Company-wide", a:"approved 01 Jan 2026"},
    {id:"H5", d:"01 Jan 2027", n:"New Year's Day", o:"All offices", t:"Company-wide", a:"approved 01 Jan 2026"},
    {id:"H6", d:"17 Mar 2027", n:"St Patrick's Day", o:"Ireland", t:"National", a:"approved 01 Jan 2026"}
  ],
  holreq: [
    {rid:"HR-014", action:"add", by:"Hannah P.", at:"12 Sep",
     h:{id:"H7", d:"14 Nov 2026", n:"Founder's Day", o:"All offices", t:"Company-wide"}}
  ],
  leave: [
    {id:"LV-2026-0188",who:"Priya N.",dept:"Support",type:"Earned leave",from:"14 Oct",to:"15 Oct",days:"2.0",
     reason:"Diwali travel",cover:"Noor H. covers the desk",status:"waiting",mine:true},
    {id:"LV-2026-0186",who:"Colm B.",dept:"Shipping",type:"Earned leave",from:"22 Sep",to:"26 Sep",days:"5.0",
     reason:"Annual holiday",cover:"Fatima Z. covers the Europe lanes",status:"waiting"},
    {id:"LV-2026-0184",who:"Dr. Omar F.",dept:"Pharmacy",type:"Earned leave",from:"18 Sep",to:"19 Sep",days:"2.0",
     reason:"Personal",cover:"Clashes with Dr. Sara M.",status:"waiting",clash:true},
    {id:"LV-2026-0181",who:"Bart K.",dept:"Warehouse",type:"Comp-off",from:"16 Sep",to:"16 Sep",days:"1.0",
     reason:"Worked the Saturday dispatch",cover:"Mo A.",status:"approved"},
    {id:"LV-2026-0179",who:"Ana R.",dept:"Warehouse",type:"Sick leave",from:"11 Sep",to:"11 Sep",days:"1.0",
     reason:"Recorded, no certificate needed",cover:"&mdash;",status:"recorded"},
    {id:"LV-2026-0175",who:"Zoe M.",dept:"Digital marketing",type:"Unpaid leave",from:"05 Oct",to:"09 Oct",days:"5.0",
     reason:"No balance left, loss of pay agreed",cover:"Tom R.",status:"lop"},
    {id:"LV-2026-0166",who:"Priya N.",dept:"Support",type:"Earned leave",from:"12 Aug",to:"13 Aug",days:"2.0",
     reason:"Family wedding",cover:"Noor H.",status:"approved",mine:true},
    {id:"LV-2026-0158",who:"Priya N.",dept:"Support",type:"Sick leave",from:"28 Jul",to:"28 Jul",days:"1.0",
     reason:"Fever",cover:"&mdash;",status:"recorded",mine:true},
    {id:"LV-2026-0141",who:"Priya N.",dept:"Support",type:"Casual leave",from:"09 Jun",to:"09 Jun",days:"1.0",
     reason:"Personal",cover:"Kwame O.",status:"approved",mine:true},
    {id:"LV-2026-0120",who:"Priya N.",dept:"Support",type:"Earned leave",from:"21 Apr",to:"25 Apr",days:"5.0",
     reason:"Annual holiday",cover:"Noor H.",status:"approved",mine:true}
  ],
  tickets: [
    {id:"TK-58118",from:"Den R.",who:"Patient",subj:"Re: Quote for cycles 4 and 5 — Blincyto",prev:"Quote QT-2026-0931 attached, option B at $3,590…",chan:"Email",desk:"Sales",owner:"me",unread:false,star:false,att:true,time:"11:05",pri:"Normal",folder:"sent",
     thread:[{who:"Priya N.",side:"out",chan:"Email",at:"11:05",txt:"Quote QT-2026-0931 attached. Option B at $3,590, six days, EU pack. It holds for seven days."}]},
    {id:"TK-58116",from:"St. James's Hospital",who:"Hospital",subj:"Delivery slot confirmed — Thursday 10:30",prev:"the courier will bring the temperature report…",chan:"Email",desk:"Shipping",unread:false,star:false,att:false,time:"Yest.",pri:"Normal",folder:"sent",
     thread:[{who:"Liam C.",side:"out",chan:"Email",at:"Yest.",txt:"Thursday 10:30 confirmed. The courier brings the temperature report and the CoA with the parcel."}]},
    {id:"TK-58112",from:"Rheinpharm GmbH",who:"Partner",subj:"RFQ-2026-1188 — please confirm batch and shelf life",prev:"",chan:"Portal",desk:"Sourcing",unread:false,star:true,att:false,time:"09 Sep",pri:"Normal",folder:"sent",
     thread:[{who:"Yusuf A.",side:"out",chan:"Portal",at:"09 Sep",txt:"Please confirm the batch number and remaining shelf life for the six vials offered."}]},
    {id:"TK-58123",from:"Hope Foundation",who:"NGO",subj:"Draft: Access pricing proposal for 40 patients",prev:"not sent — waiting on the landed cost from sourcing…",chan:"Email",desk:"Sales",unread:false,star:false,att:true,time:"08:12",pri:"Normal",folder:"drafts",
     thread:[{who:"Marco B.",side:"out",chan:"Email",at:"draft",txt:"Draft — access pricing for 40 patients in Ghana. Waiting on the landed cost from sourcing before this goes."}]},
    {id:"TK-58122",from:"M. Okafor",who:"Patient",subj:"Draft: Cycle 2 prescription received",prev:"",chan:"WhatsApp",desk:"Pharmacy",unread:false,star:false,att:false,time:"Yest.",pri:"Normal",folder:"drafts",
     thread:[{who:"Dr. Sara M.",side:"out",chan:"WhatsApp",at:"draft",txt:"Draft — thank you, the signed copy is received and is with the pharmacist now."}]},
    {id:"TK-58010",from:"webinar-invites@mailer.example",who:"Unknown",subj:"Free webinar: pharma supply chains in 2027",prev:"",chan:"Email",desk:"",unread:false,star:false,att:false,time:"01 Sep",pri:"Low",folder:"trash",was:"spam",
     thread:[{who:"Unknown sender",side:"in",chan:"Email",at:"01 Sep",txt:"Marketing invitation — trashed."}]},
    {id:"TK-58120",labels:["L1"],from:"Den R.",who:"Patient",subj:"Quote for cycles 4 and 5 — Blincyto",prev:"my consultant wants both cycles booked before 20 Oct…",chan:"WhatsApp",desk:"Sales",owner:"me",unread:true,star:true,att:true,time:"10:22",pri:"High",folder:"inbox",
     thread:[{who:"Den R.",side:"in",chan:"WhatsApp",at:"10:22",txt:"Cycle 3 is on its way, thank you. My consultant now wants cycles 4 and 5 booked together. Can you quote for two cycles delivered before 20 October, and does the price hold if I pay for both now?",att:["Rx-cycles-4-5.pdf · 240 KB","consultant-note.jpg · 1.1 MB"]},
             {who:"Auto-reply",side:"out",at:"10:23",txt:"Thank you — your enquiry is logged as TK-58120. A case manager will reply within 1 hour."},
             {who:"Priya N.",side:"out",at:"10:41",txt:"I have opened a sourcing request for both cycles with delivery before 20 October. You will have the options by 12 September."}]},
    {id:"TK-58117",labels:["L2"],from:"Clinique St. Anne",who:"Clinic",subj:"Bulk enquiry — 300 packs Imatinib",prev:"please quote for quarterly supply with…",chan:"LinkedIn",desk:"",unread:true,star:false,att:false,time:"09:48",pri:"High",folder:"inbox",
     thread:[{who:"Clinique St. Anne",side:"in",chan:"LinkedIn",at:"09:48",txt:"We are looking for a quarterly supply of 300 packs of Imatinib 400 mg for our day unit. Can you quote on credit terms?"}]},
    {id:"TK-58114",from:"S. Al Marri",who:"Patient",subj:"Where is my parcel?",prev:"",chan:"WhatsApp",desk:"Shipping",unread:true,star:false,att:false,time:"06:10",pri:"Urgent",folder:"inbox",breached:true,
     thread:[{who:"S. Al Marri",side:"in",chan:"WhatsApp",at:"06:10",txt:"The tracking has not moved since yesterday morning. My son's next dose is Thursday."}]},
    {id:"TK-58101",from:"A. Petrova",who:"Patient",subj:"Side effect after cycle 2",prev:"",chan:"Email",desk:"Pharmacy",unread:true,star:false,att:true,time:"Yest.",pri:"Urgent",folder:"inbox",esc:"Pharmacovigilance",
     thread:[{who:"A. Petrova",side:"in",chan:"Email",at:"Yest. 14:02",txt:"Two days after the second cycle I had a fever and a rash across my chest. My doctor has seen me.",att:["photo.jpg · 820 KB"]},
             {who:"System",side:"out",at:"Yest. 14:08",txt:"Escalated to Pharmacovigilance by rule R-01. Regulatory clock started at 14:02, day 1 of 15."}]},
    {id:"TK-58085",from:"Dr. R. Almeida",who:"Prescriber",subj:"Can you supply to Brazil? Import rules query",prev:"patient with CML, no local supply…",chan:"Google",desk:"Quality",unread:true,star:false,att:false,time:"Yest.",pri:"Normal",folder:"inbox",
     thread:[{who:"Dr. R. Almeida",side:"in",chan:"Google",at:"Yest. 12:07",txt:"I have a CML patient who cannot get nilotinib locally. What is required to import for a named patient in Brazil?"}]},
    {id:"TK-58096",from:"Gulf Pharma Trading",who:"Distributor",subj:"Price list request for Q4 — 14 molecules",prev:"",chan:"Portal",desk:"Sales",unread:true,star:false,att:true,time:"Yest.",pri:"Normal",folder:"inbox",
     thread:[{who:"Gulf Pharma Trading",side:"in",chan:"Portal",at:"Yest. 11:19",txt:"Please send your Q4 price list for the attached 14 molecules, DDP Dubai.",att:["molecule-list.xlsx · 34 KB"]}]},
    {id:"TK-58109",from:"L. Haddad",who:"Patient",subj:"Is this the genuine product?",prev:"the pack looks different from last time…",chan:"Web form",desk:"Pharmacy",unread:false,star:false,att:false,time:"Yest.",pri:"Normal",folder:"inbox",
     thread:[{who:"L. Haddad",side:"in",chan:"Web form",at:"Yest. 17:35",txt:"The carton looks different from the one I received in July. Is it the same medicine?"},
             {who:"Dr. Sara M.",side:"out",at:"Yest. 18:02",txt:"It is the same product sourced from Germany this time, so the carton is the EU pack. Batch 1094327, verified against the manufacturer's certificate."}]},
    {id:"TK-58090",labels:["L3","L4"],from:"Clinique St. Anne",who:"Clinic",subj:"Payment not credited — INV-2026-2176",prev:"our bank shows it left on…",chan:"Email",desk:"Accounts",unread:false,star:false,att:true,time:"09 Sep",pri:"High",folder:"inbox",status:"waiting",
     thread:[{who:"Clinique St. Anne",side:"in",chan:"Email",at:"09 Sep 16:44",txt:"Our bank confirms the transfer left on 2 September. Please check and release the hold.",att:["swift-advice.pdf · 88 KB"]}]},
    {id:"TK-58078",from:"Southern Cross Pharma",who:"Partner",subj:"Contract clause query on quality agreement",prev:"",chan:"Email",desk:"Legal",unread:false,star:false,att:false,time:"08 Sep",pri:"Low",folder:"inbox",
     thread:[{who:"Southern Cross Pharma",side:"in",chan:"Email",at:"08 Sep 15:50",txt:"Clause 7.2 on excursion notification — can we agree 48 hours rather than 24?"}]},
    {id:"TK-58074",from:"M. Okafor",who:"Patient",subj:"Prescription for cycle 2 attached",prev:"sending the signed copy from my…",chan:"WhatsApp",desk:"Pharmacy",unread:false,star:false,att:true,time:"08 Sep",pri:"Normal",folder:"inbox",
     thread:[{who:"M. Okafor",side:"in",chan:"WhatsApp",at:"08 Sep 10:12",txt:"Here is the signed prescription for the second cycle.",att:["rx-okafor-c2.pdf · 310 KB"]}]},
    {id:"TK-58070",from:"St. James's Hospital",who:"Hospital",subj:"Delivery window for Thursday — pharmacy closes 16:00",prev:"",chan:"Email",desk:"Shipping",unread:false,star:false,att:false,time:"08 Sep",pri:"Normal",folder:"inbox",
     thread:[{who:"St. James's Hospital",side:"in",chan:"Email",at:"08 Sep 09:30",txt:"Please make sure Thursday's cold-chain delivery arrives before 16:00 — the pharmacy closes then."}]},
    {id:"TK-58066",from:"Rheinpharm GmbH",who:"Partner",subj:"CoA for batch 1094327 attached",prev:"",chan:"Portal",desk:"Quality",unread:false,star:false,att:true,time:"07 Sep",pri:"Normal",folder:"inbox",
     thread:[{who:"Rheinpharm GmbH",side:"in",chan:"Portal",at:"07 Sep 14:20",txt:"Certificate of analysis for batch 1094327.",att:["CoA-1094327.pdf · 190 KB"]}]},
    {id:"TK-58061",from:"K. Mensah",who:"Patient",subj:"Any update on my sourcing request?",prev:"it has been nine days…",chan:"WhatsApp",desk:"Sales",unread:false,star:false,att:false,time:"07 Sep",pri:"High",folder:"inbox",
     thread:[{who:"K. Mensah",side:"in",chan:"WhatsApp",at:"07 Sep 08:05",txt:"It has been nine days since I asked about eculizumab. Is there any news?"}]},
    {id:"TK-58055",from:"T. Nakamura",who:"Patient",subj:"Yakkan Shoumei paperwork — what do I need to sign?",prev:"",chan:"Web form",desk:"Quality",unread:false,star:false,att:false,time:"06 Sep",pri:"Normal",folder:"inbox",
     thread:[{who:"T. Nakamura",side:"in",chan:"Web form",at:"06 Sep 13:44",txt:"Customs mentioned a Yakkan Shoumei. What do I need to sign and when?"}]},
    {id:"TK-58050",from:"Meridian Specialty Rx",who:"Partner",subj:"RFQ-2026-1188 response — price and batch attached",prev:"",chan:"Portal",desk:"Sales",unread:false,star:false,att:true,time:"06 Sep",pri:"Normal",folder:"inbox",
     thread:[{who:"Meridian Specialty Rx",side:"in",chan:"Portal",at:"06 Sep 16:40",txt:"Our response to RFQ-2026-1188: $3,180 ex-works, batch US-77410, expiry 06/2028, 4 days.",att:["quote-meridian.pdf · 120 KB"]}]},
    {id:"TK-58044",labels:["L4"],from:"J. Baptiste",who:"Patient",subj:"Insurance reimbursement letter request",prev:"",chan:"Email",desk:"Accounts",unread:false,star:false,att:false,time:"05 Sep",pri:"Normal",folder:"inbox",
     thread:[{who:"J. Baptiste",side:"in",chan:"Email",at:"05 Sep 11:02",txt:"My insurer needs a letter with the product, batch and price. Can you issue one?"}]},
    {id:"TK-58040",from:"Anadolu İlaç",who:"Partner",subj:"Export licence renewal — certificate attached",prev:"",chan:"Portal",desk:"Quality",unread:false,star:false,att:true,time:"05 Sep",pri:"High",folder:"inbox",
     thread:[{who:"Anadolu İlaç",side:"in",chan:"Portal",at:"05 Sep 09:15",txt:"Renewal certificate for our export licence, valid to 20 September 2027.",att:["licence-tr-1180.pdf · 260 KB"]}]},
    {id:"TK-58031",labels:["L2"],from:"Hope Foundation",who:"NGO",subj:"Grant-funded supply for 40 patients in Ghana",prev:"",chan:"LinkedIn",desk:"Sales",unread:false,star:false,att:false,time:"04 Sep",pri:"Normal",folder:"inbox",
     thread:[{who:"Hope Foundation",side:"in",chan:"LinkedIn",at:"04 Sep 15:20",txt:"We have grant funding for 40 patients needing eculizumab in Ghana. Can you supply at access pricing?"}]},
    {id:"TK-58121",from:"Pharma Expo Dubai",who:"Event",subj:"Sponsorship and stand enquiry",prev:"",chan:"Email",desk:"Marketing",unread:true,star:false,att:false,time:"08:40",pri:"Low",folder:"inbox",
     thread:[{who:"Pharma Expo Dubai",side:"in",chan:"Email",at:"08:40",txt:"Would Apple Globalcare like a stand at the February event? Packages attached on request."}]},
    {id:"TK-58119",from:"Health writer",who:"Press",subj:"Press question on named-patient supply",prev:"",chan:"LinkedIn",desk:"Marketing",unread:true,star:false,att:false,time:"Yest.",pri:"Normal",folder:"inbox",
     thread:[{who:"Health writer",side:"in",chan:"LinkedIn",at:"Yest. 15:10",txt:"I am writing about access to orphan medicines. Could someone explain how named-patient supply works?"}]},
    {id:"TK-58112",from:"Web visitor",who:"Lead",subj:"Newsletter sign-up, consent query",prev:"",chan:"Web form",desk:"Marketing",unread:false,star:false,att:false,time:"10 Sep",pri:"Low",folder:"inbox",
     thread:[{who:"Web visitor",side:"in",chan:"Web form",at:"10 Sep",txt:"What do you do with my email address if I subscribe?"}]},
    {id:"TK-58123",from:"Anonymous enquiry",who:"Unknown",subj:"Do you supply to Morocco?",prev:"",chan:"Live chat",desk:"Support",unread:true,star:false,att:false,time:"11:05",pri:"Normal",folder:"inbox",
     thread:[{who:"Anonymous enquiry",side:"in",chan:"Live chat",at:"11:05",txt:"Do you supply to Morocco, and how long does it usually take?"}]},
    {id:"TK-58120b",from:"R. Silva",who:"Patient",subj:"How do I start a request?",prev:"",chan:"Live chat",desk:"Support",unread:false,star:false,att:false,time:"10 Sep",pri:"Normal",folder:"inbox",
     thread:[{who:"R. Silva",side:"in",chan:"Live chat",at:"10 Sep",txt:"My doctor mentioned you can source a medicine we cannot get here. Where do I start?"}]},
    {id:"TK-58105",from:"M. Okafor",who:"Patient",subj:"Can you resend the pro forma invoice?",prev:"",chan:"Email",desk:"Processing",unread:true,star:false,att:false,time:"07:55",pri:"Normal",folder:"inbox",
     thread:[{who:"M. Okafor",side:"in",chan:"Email",at:"07:55",txt:"My bank needs the pro forma again, the first copy did not open."}]},
    {id:"TK-58099",from:"St. James's Hospital",who:"Hospital",subj:"Purchase order number correction",prev:"",chan:"Email",desk:"Processing",unread:false,star:false,att:false,time:"10 Sep",pri:"Normal",folder:"inbox",
     thread:[{who:"St. James's Hospital",side:"in",chan:"Email",at:"10 Sep",txt:"The PO on the order should read PO-44812, not PO-44182."}]},
    {id:"TK-58093",from:"Den R.",who:"Patient",subj:"Delivery address change before dispatch",prev:"",chan:"WhatsApp",desk:"Processing",unread:false,star:false,att:false,time:"10 Sep",pri:"Normal",folder:"inbox",
     thread:[{who:"Den R.",side:"in",chan:"WhatsApp",at:"10 Sep",txt:"Please send cycle 4 to the clinic rather than my home address."}]},
    {id:"TK-58118",from:"T. Nakamura",who:"Patient",subj:"Customs asked for a permit copy",prev:"",chan:"Web form",desk:"Shipping",unread:true,star:false,att:false,time:"06:30",pri:"High",folder:"inbox",
     thread:[{who:"T. Nakamura",side:"in",chan:"Web form",at:"06:30",txt:"Customs in Osaka are asking me for a copy of the import permit."}]},
    {id:"TK-58115",from:"Gulf Pharma Trading",who:"Distributor",subj:"Credit terms for the Q4 order",prev:"",chan:"Portal",desk:"Accounts",unread:true,star:false,att:false,time:"Yest.",pri:"Normal",folder:"inbox",
     thread:[{who:"Gulf Pharma Trading",side:"in",chan:"Portal",at:"Yest. 09:22",txt:"Can we move to 45 day terms for the Q4 order?"}]},
    {id:"TK-58116",from:"Rheinpharm GmbH",who:"Partner",subj:"Data processing agreement for review",prev:"",chan:"Portal",desk:"Legal",unread:true,star:false,att:true,time:"Yest.",pri:"Normal",folder:"inbox",
     thread:[{who:"Rheinpharm GmbH",side:"in",chan:"Portal",at:"Yest. 13:40",txt:"Our updated DPA for your review.",att:["dpa-rheinpharm-v3.pdf · 210 KB"]}]},
    {id:"TK-58113",from:"St. James's Hospital",who:"Hospital",subj:"Tender terms and conditions",prev:"",chan:"Email",desk:"Legal",unread:false,star:false,att:true,time:"10 Sep",pri:"Normal",folder:"inbox",
     thread:[{who:"St. James's Hospital",side:"in",chan:"Email",at:"10 Sep",txt:"Our standard tender terms, please confirm acceptance or mark up.",att:["tender-terms.docx · 96 KB"]}]},
    {id:"TK-58122",from:"Ivan D.",who:"Staff",subj:"System access and desk assignment",prev:"",chan:"Internal",desk:"HR & admin",unread:true,star:false,att:false,time:"09:15",pri:"Normal",folder:"inbox",
     thread:[{who:"Ivan D.",side:"in",chan:"Internal",at:"09:15",txt:"I start on the support desk today and cannot see the ticket queue yet."}]},
    {id:"TK-58124",from:"Candidate · pharmacist",who:"Candidate",subj:"Interview scheduling",prev:"",chan:"Email",desk:"HR & admin",unread:true,star:false,att:false,time:"Yest.",pri:"Normal",folder:"inbox",
     thread:[{who:"Candidate · pharmacist",side:"in",chan:"Email",at:"Yest. 16:50",txt:"Thank you for the offer of an interview — Thursday afternoon works for me."}]},
    {id:"TK-58111",from:"Warehouse team",who:"Staff",subj:"Badges for the new QA area",prev:"",chan:"Internal",desk:"HR & admin",unread:false,star:false,att:false,time:"10 Sep",pri:"Low",folder:"inbox",
     thread:[{who:"Warehouse team",side:"in",chan:"Internal",at:"10 Sep",txt:"Three of us need badge access to the new QA area."}]},
    {id:"TK-58022",from:"crypto-deals@mail.ru",who:"Unknown",subj:"Your invoice payment is pending — click here",prev:"",chan:"Email",desk:"",unread:false,star:false,att:false,time:"03 Sep",pri:"Low",folder:"spam",thread:[{who:"Unknown sender",side:"in",chan:"Email",at:"03 Sep",txt:"Caught by the spam filter on sender reputation."}]},
    {id:"TK-58018",from:"Den R.",who:"Patient",subj:"Cycle 3 delivered — thank you",prev:"",chan:"WhatsApp",desk:"Sales",unread:false,star:false,att:false,time:"02 Sep",pri:"Normal",folder:"closed",
     thread:[{who:"Den R.",side:"in",chan:"WhatsApp",at:"02 Sep",txt:"Everything arrived in good order, thank you."},{who:"Priya N.",side:"out",at:"02 Sep",txt:"Glad to hear it. Closing this one — the cycle 4 reminder is already set."}]}
  ]
};
var KEY = "aglc-crm-v1", S, SEL = {}, FOLDER = "inbox", Q = "";
/* Persistence runs through the API (web/api.js), not localStorage.
   window.CRM.state is fetched once at boot; save() debounces a PUT. */
function load(){
  if (window.CRM && window.CRM.state) return window.CRM.state;
  /* only reached if the API client is missing: keep the UI usable */
  console.warn("[CRM] API client unavailable - falling back to the bundled seed");
  return JSON.parse(JSON.stringify(SEED));
}
function save(){
  if (window.CRM) window.CRM.save(S);
}
function toast(m){ var t=document.getElementById("toast"); if(!t) return; t.textContent=m; t.classList.add("on"); clearTimeout(t._h); t._h=setTimeout(function(){t.classList.remove("on");},2200); }
function esc(s){ return String(s).replace(/[&<>]/g, function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;"}[c];}); }

var FOLDERS = {
  "inbox": function(t){ return t.folder==="inbox"; },
  "sent": function(t){ return t.folder==="sent"; },
  "drafts": function(t){ return t.folder==="drafts"; },
  "trash": function(t){ return t.folder==="trash"; },
  "starred": function(t){ return !!t.star && t.folder!=="trash"; },
  "unassigned": function(t){ return t.folder==="inbox" && !t.desk; },
  "assigned-to-me": function(t){ return t.folder==="inbox" && t.owner==="me"; },
  "escalated": function(t){ return !!t.esc && t.folder==="inbox"; },
  "waiting-on-customer": function(t){ return t.status==="waiting" && t.folder==="inbox"; },
  "snoozed": function(t){ return !!t.snoozed && t.folder==="inbox"; },
  "breached": function(t){ return !!t.breached && t.folder==="inbox"; },
  "spam": function(t){ return t.folder==="spam"; },
  "closed": function(t){ return t.folder==="closed"; }
};
var FILT = {chan:"", pri:"", unread:false, att:false};
function filtMatch(t){
  if(FILT.chan && t.chan !== FILT.chan) return false;
  if(FILT.pri && t.pri !== FILT.pri) return false;
  if(FILT.unread && !t.unread) return false;
  if(FILT.att && !t.att) return false;
  return true;
}
function labelFilter(id){ return function(t){ return t.folder !== "trash" && (t.labels || []).indexOf(id) >= 0; }; }
function folderFn(k){ return FOLDERS[k] || (k.indexOf("label:") === 0 ? labelFilter(k.slice(6)) : deskFilter(k)); }
function deskFilter(k){ return function(t){ return t.folder === "inbox" && (t.desk||"").toLowerCase().replace(/[^a-z]/g,"") === k.replace(/[^a-z]/g,""); }; }
function visible(){
  var f = folderFn(FOLDER), q = Q.toLowerCase();
  return S.tickets.filter(function(t){
    if(!f(t)) return false;
    if(!filtMatch(t)) return false;
    if(!q) return true;
    return (t.id+" "+t.from+" "+(t.who||"")+" "+t.subj+" "+(t.prev||"")+" "+t.chan+" "+(t.desk||"")+" "+(t.labels||[]).join(" ")).toLowerCase().indexOf(q) >= 0;
  });
}
var CHANCOL = {"WhatsApp":"#25a85a","LinkedIn":"#0a66c2","Email":"#6b7a90","Portal":"#c27a00","Web form":"#1d4ed8",
  "Google":"#4285f4","Live chat":"#7c3aed","Internal":"#9aa6b6","Phone":"#0e7c8c"};
var CHANTAG = {"WhatsApp":"t-green","LinkedIn":"t-violet","Email":"t-cyan","Portal":"t-amber","Web form":"t-blue","Google":"t-grey","Live chat":"t-blue","Internal":"t-grey"};
var STAR = '<svg viewBox="0 0 20 20"><path d="M10 2.6l2.3 4.7 5.2.8-3.8 3.7.9 5.2L10 14.5l-4.6 2.5.9-5.2L2.5 8.1l5.2-.8z"/></svg>';
var CLIP = '<svg class="clip" width="13" height="13" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.2 9.3 9.6 13.9a3 3 0 0 1-4.2-4.2l5.3-5.3a2 2 0 0 1 2.8 2.8l-5.3 5.3a1 1 0 0 1-1.4-1.4l4.6-4.6"/></svg>';


/* desk labels in the list */
var DESKCOL = {"Sales":"#2E8FE8","Marketing":"#8B5CF6","Digital marketing":"#3B1E9E","Design":"#F4705E",
  "Support":"#0E7C8C","Processing":"#5B34C9","Shipping":"#14908C","Warehouse":"#0B6E6B","Sourcing":"#37B44A",
  "Pharmacy":"#29CFD6","Quality":"#1E7D34","Quality & regulatory":"#1E7D34","Accounts":"#1565C0",
  "Legal":"#3E5C9A","HR & admin":"#1B3C8F","IT & systems":"#E8412B","Pharmacovigilance":"#1E7D34"};
function shade(hex, amt){
  var n = parseInt(hex.slice(1), 16), r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  r = Math.round(r + (amt < 0 ? r * amt : (255 - r) * amt));
  g = Math.round(g + (amt < 0 ? g * amt : (255 - g) * amt));
  b = Math.round(b + (amt < 0 ? b * amt : (255 - b) * amt));
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function deskLabel(name){
  if(!name) return '<span class="dlbl" style="background:#eff2f6;color:#7a8698"><i style="background:#9aa6b6"></i>Unassigned</span>';
  var c = DESKCOL[name] || "#55637a";
  return '<span class="dlbl" style="background:' + shade(c, 0.88) + ';color:' + shade(c, -0.35) + '">'
    + '<i style="background:' + c + '"></i>' + esc(name) + '</span>';
}

function renderList(){
  var tb = document.getElementById("tk-rows"); if(!tb) return;
  var rows = visible();
  var pages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE)); if(PAGE > pages) PAGE = pages; if(PAGE < 1) PAGE = 1;
  var pageRows = rows.slice((PAGE - 1) * PAGE_SIZE, PAGE * PAGE_SIZE);
  tb.innerHTML = pageRows.map(function(t){
    var flag = t.breached ? ' <span class="fp red">Breached</span>' :
               t.esc ? ' <span class="fp amber">Escalated &middot; '+esc(t.esc)+'</span>' :
               t.status === "waiting" ? ' <span class="fp grey">Waiting on customer</span>' : "";
    var prev = t.prev ? ' <span class="prev">&mdash; '+esc(t.prev)+'</span>' : "";
    var cc = CHANCOL[t.chan] || "#8b98ab";
    var labs = (t.labels || []).map(function(id){ var L = (S.labels||[]).filter(function(x){ return x.id === id; })[0];
      return L ? '<span class="lb" style="background:' + shade(L.c, 0.86) + ';color:' + shade(L.c, -0.3) + '"><i style="background:' + L.c + '"></i>' + esc(L.name) + '</span>' : ""; }).join("");
    return '<tr class="'+(t.unread?"ur":"rd")+(SEL[t.id]?" sel":"")+'" data-tid="'+t.id+'">'
      + '<td style="width:44px;padding-left:16px;overflow:visible"><span class="cb'+(SEL[t.id]?" on":"")+'" data-sel="'+t.id+'">'+(SEL[t.id]?"&#10003;":"")+'</span></td>'
      + '<td style="width:26px"><span class="st'+(t.star?" on":"")+'" data-star="'+t.id+'">'+STAR+'</span></td>'
      + '<td style="width:14px">'+(t.unread?'<span class="udot"></span>':"")+'</td>'
      + '<td style="width:210px"><span class="who">'+(t.folder==="sent"||t.folder==="drafts" ? '<span class="dim" style="font-weight:400">To </span>' : "")+esc(t.from)+'</span><span class="kind">'+esc(t.who)+'</span></td>'
      + '<td><span class="subj">'+esc(t.subj)+'</span>'+flag+labs+prev+'</td>'
      + '<td style="width:150px">'+deskLabel(t.desk)+'</td>'
      + '<td style="width:104px"><span class="chan"><i style="background:'+cc+'"></i>'+esc(t.chan)+'</span></td>'
      + '<td style="width:24px">'+(t.att?CLIP:"")+'</td>'
      + '<td style="width:78px;padding-right:16px" class="num when'+(t.breached?' late':"")+'">'+esc(t.time)+'</td></tr>';
  }).join("") || '<tr><td style="padding:22px;color:#8b98ab">'+(Q ? 'No tickets match &ldquo;'+esc(Q)+'&rdquo;.' : 'Nothing in this folder.')+'</td></tr>';
  var n = Object.keys(SEL).filter(function(k){return SEL[k];}).length;
  var sc = document.getElementById("tk-selcount"); if(sc) sc.textContent = n ? n+" selected" : "None selected";
  var tb2 = document.getElementById("tk-tools"); if(tb2) tb2.hidden = !n;
  var rs = document.getElementById("tk-restore"); if(rs) rs.hidden = FOLDER !== "trash";
  var tr = document.getElementById("tk-trash"); if(tr) tr.hidden = FOLDER === "trash";
  document.querySelectorAll("[data-tf]").forEach(function(c){ c.classList.toggle("on", !!FILT[c.getAttribute("data-tf")]); });
  var nf = (FILT.chan?1:0)+(FILT.pri?1:0)+(FILT.unread?1:0)+(FILT.att?1:0);
  var tfb = document.getElementById("tf-toggle"); if(tfb){ tfb.classList.toggle("on", nf > 0); var ns = tfb.querySelector(".n"); if(ns) ns.textContent = nf ? nf : ""; }
  var cl = document.getElementById("tf-clear"); if(cl) cl.hidden = !nf;
  var fdt = document.getElementById("fd-toggle");
  if(fdt){ var sub = ["inbox","sent","spam","drafts","trash","starred"].indexOf(FOLDER) < 0; var fn = fdt.querySelector(".n"); if(fn) fn.textContent = sub ? "1" : "";
    var fdb2 = document.getElementById("fd-bar"); fdt.classList.toggle("on", !!(fdb2 && !fdb2.hidden) || sub); }
  var ca = document.getElementById("tk-all"); if(ca) ca.className = "cb" + (n && n===rows.length ? " on" : ""), ca.innerHTML = (n && n===rows.length) ? "&#10003;" : "";
  ["tk-count","tk-count2"].forEach(function(id){ var cnt = document.getElementById(id); if(cnt) cnt.textContent = rows.length ? ((PAGE - 1) * PAGE_SIZE + 1) + " – " + Math.min(rows.length, PAGE * PAGE_SIZE) + " of " + rows.length : "0"; });
  document.querySelectorAll(".pager .btn").forEach(function(b){ var t = b.textContent.trim(); b.classList.toggle("off", (t === "‹" && PAGE <= 1) || (t === "›" && PAGE >= pages)); });
  var ft = document.getElementById("tk-foot");
  if(ft) ft.textContent = "Unread in bold · " + S.tickets.filter(function(t){return t.unread && t.folder==="inbox";}).length + " pending a first reply";
  document.querySelectorAll("[data-folder]").forEach(function(el){
    var k = el.getAttribute("data-folder"), f = folderFn(k);
    var c = S.tickets.filter(f).length, s = el.querySelector(".n"); if(s) s.textContent = k==="closed" ? "1.1k" : c;
    el.classList.toggle("on", k === FOLDER);
  });
}
function renderDetail(){
  var t = S.tickets.filter(function(x){return x.id === S.cur;})[0]; if(!t) return;
  var set = function(id,v){ var e = document.getElementById(id); if(e) e.textContent = v; };
  set("td-id", t.id); set("td-subj", t.subj); set("td-chan", t.chan); set("td-pri", t.pri);
  var th = document.getElementById("td-thread"); if(!th) return;
  th.innerHTML = '<div style="display:flex;align-items:center;gap:8px;font-size:11.5px;color:#8b98ab"><span class="pip" style="background:#8b98ab"></span>Opened on '+esc(t.chan)+' · routed to '+esc(t.desk||"Triage")+(t.esc?" · escalated to "+esc(t.esc):"")+'</div>'
    + (t.thread||[]).map(function(m){
        var out = m.side === "out", isNote = m.note;
        return '<div style="display:flex;gap:10px">'
          + '<span class="avat"'+(out?' style="background:#e8eefc;color:#1d4ed8"':"")+'>'+esc(m.who.split(" ").map(function(w){return w[0];}).join("").slice(0,2))+'</span>'
          + '<div class="'+(isNote?"thr-note":"")+'" style="flex:1;background:'+(out?"#e8eefc":"#f4f6f9")+';border-radius:10px;padding:11px 13px">'
          + '<div style="display:flex;gap:7px;align-items:center;font-size:11.5px"><b style="font-size:12.5px">'+esc(m.who)+'</b>'+(isNote?'<span class="tag t-amber" style="font-size:10px">Internal note</span>':"")
          + (m.chan?'<span class="tag '+(CHANTAG[m.chan]||"t-grey")+'" style="font-size:10px">'+esc(m.chan)+'</span>':"")
          + '<span class="dim mono" style="margin-left:auto">'+esc(m.at)+'</span></div>'
          + '<div style="margin-top:5px;font-size:12.5px">'+esc(m.txt)+'</div>'
          + ((m.att||[]).length? '<div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">'+m.att.map(function(a){return '<span class="tag t-grey">'+esc(a)+'</span>';}).join("")+'</div>':"")
          + '</div></div>';
      }).join("");
}
function openTicket(id){ S.cur = id; var t = S.tickets.filter(function(x){return x.id===id;})[0]; if(t) t.unread = false; CMODE = "reply"; save(); renderList(); renderDetail(); renderComposer(); window.__show("service"); if(t){ setTxt("title", t.id + " · " + t.subj); } TDFILES = []; tdFiles(); tdReset(); }
function bulk(action){
  var ids = Object.keys(SEL).filter(function(k){return SEL[k];});
  if(!ids.length){ toast("Select a ticket first"); return; }
  ids.forEach(function(id){
    var t = S.tickets.filter(function(x){return x.id===id;})[0]; if(!t) return;
    if(action==="assign"){ t.desk = t.desk || "Support"; t.owner = "me"; }
    if(action==="escalate"){ t.esc = t.desk === "Pharmacy" ? "Pharmacovigilance" : "Institutional"; t.pri = "Urgent"; }
    if(action==="mark"){ t.unread = false; }
    if(action==="snooze"){ t.snoozed = true; }
    if(action==="spam"){ t.folder = "spam"; }
    if(action==="close"){ t.folder = "closed"; t.unread = false; }
    if(action==="trash"){ t.was = t.folder; t.folder = "trash"; }
    if(action==="restore"){ t.folder = t.was || "inbox"; }
    if(action==="star"){ t.star = true; }
    if(action==="unlabel"){ t.labels = []; }
    if(action==="label"){ var pk = document.getElementById("lb-pick"); if(pk && pk.value){ t.labels = t.labels || []; if(t.labels.indexOf(pk.value) < 0) t.labels.push(pk.value); } }
  });
  var word = {assign:"assigned",escalate:"escalated",mark:"marked read",snooze:"snoozed",spam:"moved to spam",close:"closed",
              trash:"moved to trash",restore:"restored",star:"starred",unlabel:"cleared of labels",label:"labelled"}[action];
  SEL = {}; save(); renderList();
  toast(ids.length + " ticket" + (ids.length>1?"s ":" ") + word);
}

var LVTAG = {waiting:["t-amber","Waiting with HR"], approved:["t-green","Approved"], rejected:["t-red","Rejected"],
             recorded:["t-green","Recorded"], lop:["t-grey","Approved &middot; loss of pay"]};
function lvRows(){ return (S.leave || []); }
function renderMyLeave(){
  var tb = document.getElementById("ml-rows"); if(!tb) return;
  var mine = lvRows().filter(function(l){ return l.mine; });
  tb.innerHTML = mine.map(function(l){
    var t = LVTAG[l.status] || LVTAG.waiting;
    var dates = l.from === l.to ? l.from : l.from + " &ndash; " + l.to;
    return '<tr><td><b>'+esc(l.type)+'</b></td><td class="mono">'+dates+'</td><td class="num">'+l.days+'</td>'
      + '<td>'+esc(l.reason)+'</td><td class="dim">'+(l.status==="waiting"?"Hannah P. &middot; HR":"Hannah P.")+'</td>'
      + '<td><span class="tag '+t[0]+'">'+t[1]+'</span></td></tr>';
  }).join("") || '<tr><td style="padding:22px;color:#8b98ab">Nothing applied for yet.</td></tr>';
}
function renderLeaveMgmt(){
  var tb = document.getElementById("lm-rows"); if(!tb) return;
  var rows = lvRows().slice().sort(function(a,b){ return (a.status==="waiting"?0:1) - (b.status==="waiting"?0:1); });
  tb.innerHTML = rows.map(function(l){
    var t = LVTAG[l.status] || LVTAG.waiting;
    var dates = l.from === l.to ? l.from : l.from + " &ndash; " + l.to;
    var act = l.status === "waiting"
      ? '<span class="btn sm pri" data-lv="approve" data-id="'+l.id+'">Approve</span> '
        + '<span class="btn sm" data-lv="reject" data-id="'+l.id+'">Reject</span>'
      : '<span class="dim" style="font-size:12px">decided</span>';
    return '<tr><td><b>'+esc(l.who)+'</b></td><td>'+esc(l.dept)+'</td><td>'+esc(l.type)+'</td>'
      + '<td class="mono">'+dates+'</td><td class="num">'+l.days+'</td>'
      + '<td'+(l.clash?' style="color:#9c2c2c"':' class="dim"')+'>'+l.cover+'</td>'
      + '<td><span class="tag '+t[0]+'">'+t[1]+'</span></td>'
      + '<td style="text-align:right;white-space:nowrap">'+act+'</td></tr>';
  }).join("");
  var n = lvRows().filter(function(l){ return l.status === "waiting"; }).length;
  var kp = document.getElementById("lm-kpi"); if(kp) kp.textContent = n;
  var w = document.getElementById("lm-waiting");
  if(w){ w.textContent = n + (n === 1 ? " waiting" : " waiting"); w.className = "tag " + (n ? "t-amber" : "t-green"); }
}
function lvTicket(l){
  S.tickets.unshift({id:"TK-"+(58200 + lvRows().length), from:l.who, who:"Staff",
    subj:"Leave application · " + l.type + " · " + l.from + (l.from===l.to?"":" to "+l.to),
    prev:l.reason, chan:"Internal", desk:"HR & admin", unread:true, star:false, att:false,
    time:"now", pri:"Normal", folder:"inbox",
    thread:[{who:l.who, side:"in", chan:"Internal", at:"now",
             txt:l.days+" day(s) "+l.type.toLowerCase()+" from "+l.from+" to "+l.to+". "+l.reason+
                 (l.cover ? " Cover: "+l.cover+"." : "")}]});
}


var HOLTAG = {"Company-wide":"t-blue","National":"t-grey","Emergency closure":"t-red","Floating":"t-cyan"};
var ACTTAG = {add:["t-green","Add"], edit:["t-blue","Change"], remove:["t-red","Remove"]};
function isAdmin(){ return window.__ROLE === "admin"; }
function holById(id){ return (S.holidays||[]).filter(function(h){ return h.id === id; })[0]; }
function renderHolidays(){
  var hs = S.holidays || [], rq = S.holreq || [];
  var a = document.getElementById("hol-rows");
  if(a) a.innerHTML = hs.map(function(h){
    return '<tr><td class="mono">'+esc(h.d)+'</td><td><b>'+esc(h.n)+'</b></td><td>'+esc(h.o)+'</td>'
      + '<td><span class="tag '+(HOLTAG[h.t]||"t-grey")+'">'+esc(h.t)+'</span></td></tr>';
  }).join("");
  var b = document.getElementById("hol-admin");
  if(b) b.innerHTML = hs.map(function(h){
    return '<tr><td class="mono">'+esc(h.d)+'</td><td><b>'+esc(h.n)+'</b></td><td>'+esc(h.o)+'</td>'
      + '<td><span class="tag '+(HOLTAG[h.t]||"t-grey")+'">'+esc(h.t)+'</span></td>'
      + '<td class="dim">'+esc(h.a || "")+'</td>'
      + '<td style="text-align:right;white-space:nowrap">'
      + '<span class="btn sm gh" data-hol-edit="'+h.id+'">Edit</span> '
      + '<span class="btn sm gh" data-hol-remove="'+h.id+'">Remove</span></td></tr>';
  }).join("");
  var c = document.getElementById("hol-req");
  if(c) c.innerHTML = rq.map(function(q){
    var at = ACTTAG[q.action] || ACTTAG.add;
    var h = q.action === "remove" ? (holById(q.h.id) || q.h) : q.h;
    var act = isAdmin()
      ? '<span class="btn sm pri" data-holreq="approve" data-rid="'+q.rid+'">Approve</span> '
        + '<span class="btn sm" data-holreq="reject" data-rid="'+q.rid+'">Reject</span>'
      : '<span class="tag t-amber">With Admin</span>';
    return '<tr><td><span class="tag '+at[0]+'">'+at[1]+'</span></td><td class="mono">'+esc(h.d)+'</td>'
      + '<td><b>'+esc(h.n)+'</b></td><td>'+esc(h.o)+'</td>'
      + '<td><span class="tag '+(HOLTAG[h.t]||"t-grey")+'">'+esc(h.t)+'</span></td>'
      + '<td class="dim">'+esc(q.by)+' &middot; '+esc(q.at)+'</td>'
      + '<td style="text-align:right;white-space:nowrap">'+act+'</td></tr>';
  }).join("") || '<tr><td colspan="7" style="padding:18px 26px;color:#8b98ab">Nothing waiting on Admin.</td></tr>';
  var pc = document.getElementById("hol-pend");
  if(pc){ pc.textContent = rq.length; pc.className = "tag " + (rq.length ? "t-amber" : "t-green"); }
  var nt = document.getElementById("hol-note");
  if(nt) nt.textContent = isAdmin()
    ? "You are viewing as Admin — approve here and it reaches every desk and the SBU immediately."
    : "HR proposes, Admin approves, and only then does it reach every calendar.";
}


/* ---------- supplier master: directory, record, certificates ---------- */
var TODAY = new Date();
var MON = {jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};
function pdate(s){
  if(!s) return null;
  var m = String(s).trim().match(/^(\d{1,2})\s+([A-Za-z]{3})[a-z]*\s+(\d{4})$/);
  if(m) return new Date(+m[3], MON[m[2].toLowerCase()], +m[1]);
  m = String(s).trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if(m) return new Date(+m[1], +m[2]-1, +m[3]);
  return null;
}
function days_to(s){ var d = pdate(s); return d ? Math.round((d - TODAY) / 86400000) : null; }
function certState(c){
  var n = days_to(c.exp);
  if(n === null) return {cls:"t-grey", txt:"No date"};
  if(n < 0) return {cls:"t-red", txt:"Expired " + (-n) + " d ago"};
  if(n <= 90) return {cls:"t-amber", txt:"Expires in " + n + " d"};
  return {cls:"t-green", txt:"Valid"};
}
function supState(s){
  var worst = null;
  (s.certs||[]).forEach(function(c){ var n = days_to(c.exp); if(n !== null && (worst === null || n < worst)) worst = n; });
  if(!(s.certs||[]).length) return {cls:"t-grey", txt:"None on file", k:"None on file"};
  if(worst < 0) return {cls:"t-red", txt:"Expired", k:"Expired"};
  if(worst <= 90) return {cls:"t-amber", txt:worst + " d left", k:"Expiring in 90 days"};
  return {cls:"t-green", txt:"Valid", k:"Valid"};
}
var STATUSTAG = {"Approved":"t-green", "On hold":"t-amber", "Under review":"t-blue", "Blocked":"t-red"};
var SUPSEL = null, SUPEDIT = null, SUPDEL = null, CERTEDIT = null;
var SUPF = {q:"", status:"", cat:"", country:"", cert:""};

function money(v, cur){
  var n = Number(String(v).replace(/[^0-9.]/g, "")) || 0;
  var sym = {EUR:"€", USD:"$", GBP:"£", INR:"₹", AED:"AED ", JPY:"¥", CHF:"CHF "}[cur] || "";
  return sym + n.toLocaleString("en-US");
}
function supById(id){ return (S.suppliers||[]).filter(function(s){ return s.id === id; })[0]; }
function supMatch(s){
  var q = SUPF.q.toLowerCase();
  if(q && (s.name + " " + s.code + " " + s.contact + " " + s.city + " " + s.reg).toLowerCase().indexOf(q) < 0) return false;
  if(SUPF.status && s.status !== SUPF.status) return false;
  if(SUPF.cat && s.cat !== SUPF.cat) return false;
  if(SUPF.country && s.country !== SUPF.country) return false;
  if(SUPF.cert && supState(s).k !== SUPF.cert) return false;
  return true;
}
function setTxt(id, v){ var e = document.getElementById(id); if(e) e.textContent = v; }

function renderSuppliers(){
  var body = document.getElementById("sup-rows");
  if(!body) return;
  var all = S.suppliers || [], rows = all.filter(supMatch), out = "";
  rows.forEach(function(s){
    var st = supState(s), tg = STATUSTAG[s.status] || "t-grey";
    var acts = (SUPDEL === s.id)
      ? '<span class="tag t-red">Remove?</span> <span class="act" data-supdel-yes="' + s.id + '">Yes, remove</span>'
        + ' <span class="act" data-supdel-no="1">Keep</span>'
      : '<span class="act" data-supopen="' + s.id + '">Open</span> <span class="act" data-supedit="' + s.id
        + '" style="margin-left:12px">Edit</span> <span class="act" data-supdel="' + s.id + '" style="margin-left:12px">Remove</span>';
    out += '<tr' + (SUPSEL === s.id ? ' class="ur"' : '') + '><td><b>' + esc(s.name) + '</b>'
      + '<div class="dim mono" style="font-size:11px">' + esc(s.code) + '</div></td>'
      + '<td>' + esc(s.cat) + '</td><td>' + esc(s.country) + '<div class="dim" style="font-size:11px">' + esc(s.city) + '</div></td>'
      + '<td><span class="tag ' + st.cls + '">' + st.txt + '</span>'
      + '<div class="dim" style="font-size:11px">' + ((s.certs || []).length) + ' on file</div></td>'
      + '<td><b>' + esc(s.rating) + '</b></td>'
      + '<td><span class="tag ' + tg + '">' + esc(s.status) + '</span></td>'
      + '<td class="num mono">' + money(s.spend, s.cur) + '</td>'
      + '<td style="text-align:right;white-space:nowrap">' + acts + '</td></tr>';
  });
  if(!rows.length) out = '<tr><td colspan="8" class="dim" style="padding:26px;text-align:center">'
    + 'No supplier matches these filters. <span class="act" data-supclear="1">Clear the filters</span></td></tr>';
  body.innerHTML = out;
  setTxt("sf-count", rows.length + " of " + all.length + " suppliers");

  var appr = 0, hold = 0, exp = 0, aud = 0;
  all.forEach(function(s){
    if(s.status === "Approved") appr++;
    if(s.status === "On hold" || s.status === "Blocked") hold++;
    (s.certs || []).forEach(function(c){ var n = days_to(c.exp); if(n !== null && n <= 90) exp++; });
    var na = days_to(s.naudit); if(na !== null && na <= 60) aud++;
  });
  setTxt("sk-appr", appr); setTxt("sk-exp", exp); setTxt("sk-aud", aud); setTxt("sk-hold", hold);
  setTxt("sk-appr-note", "of " + all.length + " on the master");
  setTxt("sk-exp-note", exp ? "chase the renewal" : "nothing expiring");
  setTxt("sk-aud-note", aud ? "inside 60 days" : "none due");
  setTxt("sk-hold-note", hold ? "cannot be quoted or ordered from" : "everyone is clear to order from");
  renderSupPanel();
}

function line(k, v){ return '<div style="display:flex;gap:12px"><span class="dim" style="min-width:132px">' + k
  + '</span><span style="flex:1">' + v + '</span></div>'; }

function renderSupPanel(){
  var panel = document.getElementById("sup-panel");
  if(!panel) return;
  var s = SUPSEL ? supById(SUPSEL) : null;
  panel.hidden = !s;
  if(!s) return;
  var st = supState(s);
  setTxt("sup-p-name", s.name);
  setTxt("sup-p-sub", s.code + " · " + s.cat + " · " + s.city + ", " + s.country);
  document.getElementById("sup-p-left").innerHTML =
    line("Status", '<span class="tag ' + (STATUSTAG[s.status] || "t-grey") + '">' + esc(s.status) + '</span>'
         + ' <span class="tag ' + st.cls + '" style="margin-left:6px">' + st.txt + '</span>')
    + line("Rating", "<b>" + esc(s.rating) + "</b>")
    + line("Registration", '<span class="mono">' + esc(s.reg || "—") + '</span>')
    + line("Contact", esc(s.contact) + '<div class="dim">' + esc(s.email) + " · " + esc(s.phone) + '</div>')
    + line("Note", '<span class="muted">' + esc(s.note || "—") + '</span>');
  document.getElementById("sup-p-right").innerHTML =
    line("Payment terms", esc(s.terms))
    + line("Currency", esc(s.cur))
    + line("Lead time", esc(s.lead) + " days")
    + line("Spend, year to date", '<span class="mono">' + money(s.spend, s.cur) + '</span>')
    + line("Last audit", esc(s.audit || "—"))
    + line("Next audit", esc(s.naudit || "—"));
  var body = document.getElementById("ct-rows"), out = "";
  (s.certs || []).forEach(function(c){
    var cs = certState(c);
    var acts = (SUPDEL === "cert:" + c.id)
      ? '<span class="act" data-certdel-yes="' + c.id + '">Yes, remove</span> <span class="act" data-supdel-no="1" style="margin-left:10px">Keep</span>'
      : '<span class="act" data-certedit="' + c.id + '">Edit</span> <span class="act" data-certdel="' + c.id + '" style="margin-left:12px">Remove</span>';
    out += '<tr><td><b>' + esc(c.type) + '</b></td><td class="mono">' + esc(c.no) + '</td><td>' + esc(c.body)
      + '</td><td class="mono">' + esc(c.issued) + '</td><td class="mono">' + esc(c.exp) + '</td>'
      + '<td><span class="tag ' + cs.cls + '">' + cs.txt + '</span></td>'
      + '<td style="text-align:right;white-space:nowrap">' + acts + '</td></tr>';
  });
  if(!(s.certs || []).length) out = '<tr><td colspan="7" class="dim" style="padding:22px;text-align:center">'
    + 'Nothing on file yet — this supplier cannot go on an RFQ until a certificate is added.</td></tr>';
  body.innerHTML = out;
}

var SUPFIELDS = [["sp-name","name"],["sp-code","code"],["sp-cat","cat"],["sp-country","country"],["sp-city","city"],
  ["sp-reg","reg"],["sp-contact","contact"],["sp-email","email"],["sp-phone","phone"],["sp-terms","terms"],
  ["sp-cur","cur"],["sp-lead","lead"],["sp-status","status"],["sp-rating","rating"],["sp-audit","audit"],
  ["sp-naudit","naudit"],["sp-spend","spend"],["sp-note","note"]];

function supFormOpen(id){
  SUPEDIT = id || null;
  var s = id ? supById(id) : null, f = document.getElementById("sup-form");
  if(!f) return;
  SUPFIELDS.forEach(function(p){
    var e = document.getElementById(p[0]); if(!e) return;
    e.value = s ? (s[p[1]] === "&mdash;" ? "" : (s[p[1]] || "")) : (p[1] === "spend" || p[1] === "lead" ? "" : "");
  });
  setTxt("sp-err", "");
  setTxt("sup-form-title", s ? "Edit " + s.name : "New supplier");
  setTxt("sup-form-sub", s ? "changes are written to the audit trail" : "everything here is editable later");
  f.hidden = false;
  var n = document.getElementById("sp-name"); if(n) n.focus();
}

function supSave(){
  var get = function(id){ var e = document.getElementById(id); return e ? e.value.trim() : ""; };
  if(!get("sp-name")){ setTxt("sp-err", "A supplier needs a name."); return; }
  var s = SUPEDIT ? supById(SUPEDIT) : {id:"SUP-" + (100 + Math.floor(Math.random() * 800)), certs:[]};
  SUPFIELDS.forEach(function(p){ s[p[1]] = get(p[0]); });
  if(!s.code) s.code = "AGC-" + s.id;
  if(!SUPEDIT){ S.suppliers.unshift(s); SUPSEL = s.id; }
  save(); document.getElementById("sup-form").hidden = true;
  toast(SUPEDIT ? s.name + " updated" : s.name + " added to the supplier master");
  SUPEDIT = null; renderSuppliers();
}

function certFormOpen(id){
  CERTEDIT = id || null;
  var s = supById(SUPSEL), c = id && s ? (s.certs || []).filter(function(x){ return x.id === id; })[0] : null;
  var f = document.getElementById("ct-form"); if(!f) return;
  [["ct-type","type"],["ct-no","no"],["ct-body","body"],["ct-issued","issued"],["ct-exp","exp"]].forEach(function(p){
    var e = document.getElementById(p[0]); if(e) e.value = c ? c[p[1]] : (p[0] === "ct-type" ? e.value : "");
  });
  setTxt("ct-err", ""); f.hidden = false;
}

function certSave(){
  var s = supById(SUPSEL); if(!s) return;
  var get = function(id){ var e = document.getElementById(id); return e ? e.value.trim() : ""; };
  if(!get("ct-no")){ setTxt("ct-err", "Put the certificate number in."); return; }
  if(!pdate(get("ct-exp"))){ setTxt("ct-err", "Expiry must read like 31 Dec 2027."); return; }
  var c = CERTEDIT ? (s.certs || []).filter(function(x){ return x.id === CERTEDIT; })[0]
                   : {id:"C" + Math.floor(Math.random() * 9000 + 1000)};
  c.type = get("ct-type"); c.no = get("ct-no"); c.body = get("ct-body");
  c.issued = get("ct-issued"); c.exp = get("ct-exp");
  if(!CERTEDIT){ s.certs = s.certs || []; s.certs.push(c); }
  save(); document.getElementById("ct-form").hidden = true;
  toast(c.type + " saved for " + s.name);
  CERTEDIT = null; renderSuppliers();
}


/* ---------- employees & benefits (HR) ---------- */
var BENEFITS = ["PF", "Insurance", "Med-claim", "Term plan", "Gratuity", "Personal accident", "ESI", "Transport allowance"];
var BENTAG = {"PF":"t-blue", "Insurance":"t-cyan", "Med-claim":"t-green", "Term plan":"t-violet",
  "Gratuity":"t-amber", "Personal accident":"t-grey", "ESI":"t-grey", "Transport allowance":"t-grey"};
var EMPEDIT = null, EMPDEL = null, EMPADD = null;
var EMPFIELDS = [["em-name","name"],["em-dept","dept"],["em-doa","doa"],["em-sal","sal"],
                 ["em-leave","leave"],["em-status","status"],["em-docs","docs"]];

function empById(id){ return (S.employees || []).filter(function(e){ return e.id === id; })[0]; }
function empLog(txt){
  S.emplog = S.emplog || [];
  S.emplog.unshift({t: txt, by: "Hannah P.", at: "today"});
  if(S.emplog.length > 8) S.emplog.pop();
}
function renderEmployees(){
  var body = document.getElementById("emp-rows");
  if(!body) return;
  var all = S.employees || [], out = "";
  all.forEach(function(e){
    var chips = (e.ben || []).map(function(bn){
      return '<span class="tag ' + (BENTAG[bn] || "t-grey") + '" style="margin:0 5px 4px 0">' + esc(bn)
        + ' <span data-benrm="' + e.id + "|" + esc(bn) + '" style="cursor:pointer;font-weight:600;opacity:.65">&times;</span></span>';
    }).join("");
    var adder = (EMPADD === e.id)
      ? '<span style="display:inline-flex;gap:6px;align-items:center;margin-top:4px">'
        + '<select id="ben-pick" class="dd" style="height:26px;font-size:12px">'
        + BENEFITS.filter(function(bn){ return (e.ben || []).indexOf(bn) < 0; })
                  .map(function(bn){ return "<option>" + bn + "</option>"; }).join("")
        + '</select><span class="act" data-bensave="' + e.id + '">Add</span>'
        + '<span class="act" data-bencancel="1" style="color:#8b98ab">Cancel</span></span>'
      : '<span class="act" data-benadd="' + e.id + '" style="font-size:11.5px">+ Add</span>';
    if(EMPADD === e.id && (e.ben || []).length >= BENEFITS.length)
      adder = '<span class="dim" style="font-size:11.5px">everything is already on</span>';
    var acts = (EMPDEL === e.id)
      ? '<span class="tag t-red">Remove?</span> <span class="act" data-empdel-yes="' + e.id + '">Yes</span>'
        + ' <span class="act" data-empdel-no="1" style="margin-left:8px">Keep</span>'
      : '<span class="act" data-empedit="' + e.id + '">Edit</span>'
        + ' <span class="act" data-empdel="' + e.id + '" style="margin-left:12px">Remove</span>';
    var stag = e.status === "On probation" ? "t-amber" : (e.status === "Notice period" ? "t-grey" : "t-green");
    out += '<tr><td><b>' + esc(e.name) + '</b>'
      + '<div style="margin-top:3px"><span class="tag ' + stag + '">' + esc(e.status) + '</span>'
      + (e.docs === "Missing" ? ' <span class="tag t-red">Document missing</span>' : '') + '</div></td>'
      + '<td>' + esc(e.dept) + '</td><td class="mono">' + esc(e.doa) + '</td>'
      + '<td class="num mono">' + esc(e.sal) + '</td><td class="num mono">' + esc(e.leave) + '</td>'
      + '<td>' + chips + '<div>' + adder + '</div></td>'
      + '<td style="text-align:right;white-space:nowrap">' + acts + '</td></tr>';
  });
  if(!all.length) out = '<tr><td colspan="7" class="dim" style="padding:26px;text-align:center">'
    + 'No employee records yet. Use <b>Add an employee</b> to start.</td></tr>';
  body.innerHTML = out;

  var prob = 0, miss = 0;
  all.forEach(function(e){ if(e.status === "On probation") prob++; if(e.docs === "Missing") miss++; });
  setTxt("ek-pay", all.length); setTxt("ek-prob", prob); setTxt("ek-docs", miss);
  setTxt("ek-pay-note", "salaried people on the master");
  setTxt("ek-docs-note", miss ? "chase before the next payroll" : "every record is complete");

  var log = document.getElementById("emp-log");
  if(log) log.innerHTML = (S.emplog || []).map(function(l){
    return '<div style="display:flex;gap:10px"><span class="pip" style="background:var(--accent);margin-top:6px"></span>'
      + '<span>' + l.t + ' <span class="dim">&middot; ' + esc(l.by) + ' &middot; ' + esc(l.at) + '</span></span></div>';
  }).join("");
}
function empFormOpen(id){
  EMPEDIT = id || null;
  var e = id ? empById(id) : null, f = document.getElementById("emp-form");
  if(!f) return;
  EMPFIELDS.forEach(function(p){
    var el = document.getElementById(p[0]); if(!el) return;
    el.value = e ? (e[p[1]] || "") : (p[0] === "em-dept" || p[0] === "em-status" || p[0] === "em-docs" ? el.value : "");
  });
  setTxt("em-err", "");
  setTxt("emp-form-title", e ? "Edit " + e.name : "Add an employee");
  f.hidden = false;
  var n = document.getElementById("em-name"); if(n) n.focus();
}
function empSave(){
  var get = function(id){ var el = document.getElementById(id); return el ? el.value.trim() : ""; };
  if(!get("em-name")){ setTxt("em-err", "A record needs a name."); return; }
  var e = EMPEDIT ? empById(EMPEDIT) : {id: "E" + Math.floor(Math.random() * 9000 + 1000), ben: ["PF"]};
  EMPFIELDS.forEach(function(p){ e[p[1]] = get(p[0]); });
  if(!e.leave) e.leave = "0.0";
  if(!EMPEDIT){ S.employees.unshift(e); empLog("<b>" + esc(e.name) + "</b> added to the people master"); }
  else empLog("Record updated for <b>" + esc(e.name) + "</b>");
  save(); document.getElementById("emp-form").hidden = true;
  toast(EMPEDIT ? e.name + " updated" : e.name + " added — PF opens automatically");
  EMPEDIT = null; renderEmployees();
}


/* ---------- document viewer: payslips and policy papers ---------- */
var COMPANY = "Apple Globalcare India Pvt Ltd &middot; 4th floor, Prestige Tech Park, Bengaluru 560103 &middot; CIN U51397KA2019PTC122104";
var ME = {name:"Priya N.", role:"Senior agent &middot; Support desk", id:"AGC-0142", grade:"Grade 4",
          uan:"1004 8821 7734", pan:"AXXPN4417K", bank:"HDFC · ****4471", doj:"12 Mar 2024"};
var DOCMARK = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none">'
  + '<circle cx="12" cy="12" r="9.1" stroke="currentColor" stroke-width="1.8"/>'
  + '<rect x="9.15" y="6.9" width="5.7" height="10.2" rx="2.85" fill="currentColor"/></svg>';

function docHead(title, sub, meta){
  return '<div class="dochd"><div class="docmark">' + DOCMARK + '</div>'
    + '<div><h1>' + title + '</h1><div class="dim" style="font-size:12px">' + sub + '</div></div>'
    + '<div class="docmeta">' + meta + '</div></div>';
}
function openDoc(barTitle, html){
  var w = document.getElementById("docwrap"); if(!w) return;
  document.getElementById("doc-title").textContent = barTitle;
  document.getElementById("docsheet").innerHTML = html;
  w.hidden = false;
}
function closeDoc(){ var w = document.getElementById("docwrap"); if(w) w.hidden = true; }

function payslipDoc(monthKey){
  var src = document.querySelector('[data-slip="' + monthKey + '"]');
  var sel = document.getElementById("slipmonth"), label = monthKey;
  if(sel) for(var i = 0; i < sel.options.length; i++) if(sel.options[i].value === monthKey) label = sel.options[i].text;
  var tbl = src ? src.innerHTML : '<div class="dim">This month is not on file.</div>';
  return docHead("Payslip &mdash; " + label, COMPANY, "Payslip no. PS/" + monthKey.replace("-", "/") + "/0142<br>Generated " + fmtDate(new Date()))
    + '<div class="grid2">'
    + '<div class="kv"><span>Employee</span><span><b>' + ME.name + '</b></span></div>'
    + '<div class="kv"><span>Employee number</span><span>' + ME.id + '</span></div>'
    + '<div class="kv"><span>Designation</span><span>' + ME.role + '</span></div>'
    + '<div class="kv"><span>Grade</span><span>' + ME.grade + '</span></div>'
    + '<div class="kv"><span>Date of joining</span><span>' + ME.doj + '</span></div>'
    + '<div class="kv"><span>UAN</span><span>' + ME.uan + '</span></div>'
    + '<div class="kv"><span>PAN</span><span>' + ME.pan + '</span></div>'
    + '<div class="kv"><span>Paid into</span><span>' + ME.bank + '</span></div>'
    + '</div>' + tbl
    + '<div class="docfoot">This payslip is generated from the payroll record and needs no signature. '
    + 'Employer provident fund, gratuity accrual and the insurance premiums shown are paid by the company on top of '
    + 'gross pay and are not deducted from it. Questions go to the HR desk, which answers inside one working day.</div>';
}

var POLICIES = {
  "Form 16 \u00b7 2025-26": {
    no:"F16/2025-26/0142", insurer:"Income Tax Department \u2014 issued by the company as deductor",
    cover:"Tax deducted at source on salary", lives:"Self", valid:"01 Apr 2025 \u2013 31 Mar 2026",
    rows:[["Gross salary paid","&#8377;18,12,400"],["Exemptions claimed","&#8377;2,04,000 \u00b7 HRA and conveyance"],
          ["Deductions, Chapter VI-A","&#8377;1,50,000 \u00b7 80C, and &#8377;25,000 \u00b7 80D"],
          ["Taxable income","&#8377;14,33,400"],["Tax deducted and deposited","&#8377;1,84,200"],
          ["TAN of the deductor","BLRA09912F"]],
    foot:"Part A is downloaded from TRACES and Part B is generated from payroll. Use it when you file your return."},
  "Medical insurance card": {
    no:"MC-IN-22107", insurer:"Star Health &amp; Allied Insurance", cover:"&#8377;5,00,000 family floater",
    lives:"Self, spouse and two children", valid:"01 Apr 2026 &ndash; 31 Mar 2027",
    rows:[["Network hospitals","8,400 cashless hospitals across India"],
          ["Room rent","Single private room, no sub-limit"],
          ["Pre-existing conditions","Covered, waiting period waived under the group policy"],
          ["Maternity","&#8377;75,000, 9-month waiting period"],
          ["Cashless helpline","1800 425 2255, quote the policy number above"]],
    foot:"Carry the number on your phone; the hospital desk needs only that and a photo ID."},
  "Medical insurance policy": {
    no:"GMC-88214", insurer:"Star Health &amp; Allied Insurance", cover:"&#8377;5,00,000 family floater",
    lives:"83 lives on the company policy", valid:"01 Apr 2026 &ndash; 31 Mar 2027",
    rows:[["Claim, cashless","HR tells the insurer 48 hours before a planned admission"],
          ["Claim, reimbursement","Upload bills here, settled in about fifteen working days"],
          ["Exclusions","Cosmetic work, dental unless from an accident, and anything not prescribed"],
          ["Adding a dependant","Within 30 days of a marriage or birth, otherwise at renewal"]],
    foot:"The full wording and the hospital list are filed with this certificate in the document vault."},
  "Term plan certificate": {
    no:"TP-IN-55190", insurer:"HDFC Life", cover:"&#8377;1,00,00,000 sum assured",
    lives:"Self", valid:"Renewed annually on 01 April",
    rows:[["Nominee","On file with HR &mdash; check it once a year"],
          ["Premium","Paid in full by the company, not deducted from pay"],
          ["Portability","Convertible to a personal policy within 30 days of leaving"]],
    foot:"The nominee named here decides who receives the sum assured. Change it with HR at any time."},
  "Group life insurance certificate": {
    no:"POL-IN-88412", insurer:"ICICI Prudential", cover:"3&times; cost to company",
    lives:"83 lives", valid:"01 Apr 2026 &ndash; 31 Mar 2027",
    rows:[["Basis","Three times your cost to company on the date of claim"],
          ["Premium","Company paid"],
          ["Claim","HR files it; payment goes straight to the nominee"]],
    foot:"Cover starts on the date of appointment and ends on the last working day."},
  "Personal accident certificate": {
    no:"PA-IN-31044", insurer:"Bajaj Allianz", cover:"&#8377;50,00,000, worldwide",
    lives:"Self", valid:"01 Apr 2026 &ndash; 31 Mar 2027",
    rows:[["Scope","On duty and off duty, anywhere in the world"],
          ["Permanent disability","Full sum assured"],
          ["Temporary disability","Weekly benefit up to 104 weeks"],
          ["Medical expenses","Up to 10% of the claim"]],
    foot:"Travel on company business is covered without a separate declaration."},
  "Provident fund passbook": {
    no:"UAN 1004 8821 7734", insurer:"Employees' Provident Fund Organisation", cover:"12% of basic and DA, matched",
    lives:"Self", valid:"Since 12 Mar 2024",
    rows:[["Your contribution","&#8377;9,540 a month"],["Company contribution","&#8377;9,540 a month"],
          ["Balance","&#8377;4,58,220 as at 31 Aug 2026"],["Interest","8.25% for 2025&ndash;26, credited annually"],
          ["Withdrawal","Online on the EPFO portal with the UAN above"]],
    foot:"The passbook is refreshed from the EPFO on the first working day of each month."},
  "Gratuity statement": {
    no:"GR-0142", insurer:"Company obligation, funded", cover:"15 days of pay for each completed year",
    lives:"Self", valid:"Payable after five years of service",
    rows:[["Accrued to date","&#8377;1,02,400"],["Qualifying service","2 years 6 months"],
          ["Formula","Last basic &times; 15 / 26 &times; completed years"]],
    foot:"Gratuity accrues from the date of appointment and is paid with the full and final settlement."}
};

function policyDoc(name){
  var d = POLICIES[name];
  if(!d) return docHead(name, COMPANY, "") + '<div class="dim">This document is not on file yet.</div>';
  var rows = d.rows.map(function(r){ return '<tr><td style="width:34%;color:#55637a">' + r[0] + '</td><td>' + r[1] + '</td></tr>'; }).join("");
  return docHead(name, COMPANY, "Issued to " + ME.name + "<br>" + ME.id)
    + '<div class="grid2">'
    + '<div class="kv"><span>Document number</span><span><b>' + d.no + '</b></span></div>'
    + '<div class="kv"><span>Insurer or body</span><span>' + d.insurer + '</span></div>'
    + '<div class="kv"><span>Cover</span><span>' + d.cover + '</span></div>'
    + '<div class="kv"><span>Lives covered</span><span>' + d.lives + '</span></div>'
    + '<div class="kv"><span>Valid</span><span>' + d.valid + '</span></div>'
    + '<div class="kv"><span>Held by</span><span>' + ME.name + " &middot; " + ME.grade + '</span></div>'
    + '</div><table><thead><tr><th>Item</th><th>What it says</th></tr></thead><tbody>' + rows + '</tbody></table>'
    + '<div class="docfoot">' + d.foot + ' HR can add or remove any benefit on your record; the change shows here the same day.</div>';
}


/* ---------- Rx desk: prescription verification ---------- */
var RXSEL = null, RXF = "all";
function rxList(){ return (S.rx || []).filter(function(r){ return r.status !== "verified" && r.status !== "rejected"; }); }
function rxVisible(){
  return rxList().filter(function(r){
    if(RXF === "mine") return !!r.mine;
    if(RXF === "sla") return !!r.sla;
    if(RXF === "query") return r.status === "query";
    return true;
  });
}
function rxById(id){ return (S.rx || []).filter(function(r){ return r.id === id; })[0]; }
function rxCurrent(){
  var r = RXSEL ? rxById(RXSEL) : null;
  if(!r || r.status === "verified" || r.status === "rejected"){ r = rxVisible()[0] || rxList()[0] || null; RXSEL = r ? r.id : null; }
  return r;
}
function rxLog(txt, by){
  S.rxlog = S.rxlog || [];
  S.rxlog.unshift({t: txt, by: by || "Dr. Sara M. · PSI 19882", at: "now"});
  if(S.rxlog.length > 8) S.rxlog.pop();
}
function renderRx(){
  var q = document.getElementById("rx-queue");
  if(!q) return;
  var rows = rxVisible(), cur = rxCurrent();
  q.innerHTML = rows.map(function(r){
    var on = cur && r.id === cur.id;
    return '<div data-rxpick="' + r.id + '" style="padding:10px 13px;border-bottom:1px solid #f3f5f8;cursor:pointer;'
      + (on ? 'border-left:3px solid var(--accent);background:var(--tint2)' : 'border-left:3px solid transparent') + '">'
      + '<div style="display:flex;align-items:center;gap:6px"><b style="font-size:12.5px">' + esc(r.pat) + '</b>'
      + '<span class="tag ' + (r.status === "query" ? "t-grey" : r.tagc) + '">' + (r.status === "query" ? "With prescriber" : esc(r.tag)) + '</span>'
      + '<span class="mono' + (r.sla ? '' : ' dim') + '" style="margin-left:auto;font-size:11px'
      + (r.sla ? ';color:#9c2c2c' : '') + '">' + esc(r.age) + '</span></div>'
      + '<div class="dim" style="font-size:12px;margin-top:2px">' + esc(r.drug.split("(")[0].trim()) + ' &middot; ' + esc(r.country) + '</div></div>';
  }).join("") || '<div class="dim" style="padding:26px 14px;text-align:center;font-size:12.5px">'
    + 'Nothing in this filter. Every prescription here has been dealt with.</div>';
  setTxt("rx-count", rows.length + (RXF === "all" ? " waiting" : " shown"));
  document.querySelectorAll("[data-rxf]").forEach(function(c){
    var on = c.getAttribute("data-rxf") === RXF;
    c.className = "tag " + (on ? "t-blue" : "t-grey");
  });

  var L = document.getElementById("rx-left"), R = document.getElementById("rx-right");
  if(!cur){
    setTxt("rx-title", "Nothing waiting");
    setTxt("rx-sub", "the queue is clear");
    if(L) L.innerHTML = '<span class="dim">Every prescription has been released, rejected or sent back to the prescriber.</span>';
    if(R) R.innerHTML = "";
    ["rx-checks","rx-ledger"].forEach(function(id){ var e = document.getElementById(id); if(e) e.innerHTML = ""; });
    setTxt("rx-checkcount", "");
    setTxt("rx-dec-note", "");
    ["rx-verify","rx-query","rx-reject"].forEach(function(id){ var b = document.getElementById(id); if(b) b.hidden = true; });
    renderRxSide();
    return;
  }
  ["rx-verify","rx-query","rx-reject"].forEach(function(id){ var b = document.getElementById(id); if(b) b.hidden = false; });
  setTxt("rx-title", "Prescription — " + cur.pat);
  setTxt("rx-sub", cur.id + " · received " + cur.got);
  L.innerHTML = line("Patient", "<b>" + esc(cur.pat) + "</b> &middot; DOB " + esc(cur.dob) + " &middot; MRN " + esc(cur.mrn))
    + line("Diagnosis", esc(cur.diag))
    + line("Medicine", "<b>" + esc(cur.drug) + "</b>")
    + line("Dose", esc(cur.dose))
    + line("Case", '<span class="mono">' + esc(cur.case) + "</span>");
  R.innerHTML = line("Hospital", "<b>" + esc(cur.hosp) + "</b><div class='dim'>" + esc(cur.dept) + "</div>")
    + line("Prescriber", esc(cur.presc) + " &middot; " + esc(cur.reg))
    + line("Dated", esc(cur.dated))
    + line("Country", esc(cur.country))
    + line("Waiting", '<span class="' + (cur.sla ? "tag t-red" : "mono") + '">' + esc(cur.age) + (cur.sla ? " · past SLA" : "") + "</span>");

  var ok = 0;
  var cbox = document.getElementById("rx-checks");
  cbox.innerHTML = (cur.checks || []).map(function(c){
    if(c[0]) ok++;
    return '<div style="display:flex;gap:10px"><span class="ck ' + (c[0] ? "ok" : "warn") + '">' + (c[0] ? "&#10003;" : "!") + '</span>'
      + '<span><b>' + esc(c[1]) + '</b><div class="dim" style="font-size:12px">' + esc(c[2]) + '</div></span></div>';
  }).join("");
  setTxt("rx-checkcount", ok + " of " + (cur.checks || []).length + " clear");
  document.getElementById("rx-ledger").innerHTML =
    line("Authorised", esc(cur.auth)) + line("Dispensed so far", esc(cur.used))
    + line("This release", "<b>" + esc(cur.rel) + "</b>") + line("Prescription expires", esc(cur.exp))
    + '<div class="hr"></div><div class="dim" style="font-size:12px">No repeat is dispensed after that date without a '
    + 'fresh prescription. The remaining authority stays on the case for the next cycle.</div>';
  var open = (cur.checks || []).filter(function(c){ return !c[0]; }).length;
  setTxt("rx-dec-note", open ? open + (open === 1 ? " check needs a decision" : " checks need a decision")
                             : "every check is clear");
  setTxt("rx-dec-sub", cur.status === "query" ? "waiting on the prescriber" : "pharmacist release");
  renderRxSide();
}
function renderRxSide(){
  var qb = document.getElementById("rx-queries");
  if(qb) qb.innerHTML = (S.rxq || []).map(function(q){
    return "<tr><td><b>" + esc(q.q) + "</b>" + (q.ans ? '<div class="dim" style="font-size:12px">' + esc(q.ans) + "</div>" : "")
      + "</td><td>" + esc(q.pat) + '</td><td class="mono">' + esc(q.sent) + "</td><td>"
      + (q.state === "answered" ? '<span class="tag t-green">Answered</span>' : '<span class="tag t-amber">Waiting</span>')
      + "</td></tr>";
  }).join("") || '<tr><td colspan="4" class="dim" style="padding:22px;text-align:center">No open queries.</td></tr>';
  var ab = document.getElementById("rx-audit");
  if(ab) ab.innerHTML = (S.rxlog || []).map(function(l){
    return '<div style="display:flex;gap:10px"><span class="pip" style="background:var(--accent);margin-top:6px"></span>'
      + "<span>" + l.t + '<div class="dim" style="font-size:12px">' + esc(l.by) + " &middot; " + esc(l.at) + "</div></span></div>";
  }).join("");
}


/* ---------- QA / QC release ---------- */
var QASEL = null, QAF = "open", QAMINE = false;
var QASTAT = {review:["t-amber","In review"], ready:["t-green","Ready to sign"], quarantine:["t-red","Quarantined"],
              released:["t-blue","Released"], returned:["t-grey","Returned to supplier"], destroyed:["t-grey","Destroyed"]};
function qaById(id){ return (S.qa || []).filter(function(b){ return b.id === id; })[0]; }
function qaOpenChecks(b){ return (b.checks || []).filter(function(c){ return !c[0]; }).length; }
function qaState(b){
  if(b.status === "released" || b.status === "returned" || b.status === "destroyed") return b.status;
  if(b.status === "quarantine") return "quarantine";
  return qaOpenChecks(b) ? "review" : "ready";
}
function qaVisible(){
  return (S.qa || []).filter(function(b){
    var st = qaState(b);
    if(QAMINE && !b.mine) return false;
    if(QAF === "open") return st === "review" || st === "ready";
    if(QAF === "ready") return st === "ready";
    if(QAF === "quarantine") return st === "quarantine";
    return st === "released" || st === "returned" || st === "destroyed";
  });
}
function qaCurrent(){
  var b = QASEL ? qaById(QASEL) : null;
  if(!b || qaVisible().indexOf(b) < 0){ b = qaVisible()[0] || (S.qa || [])[0] || null; QASEL = b ? b.id : null; }
  return b;
}
function qaLog(txt){
  S.qalog = S.qalog || [];
  S.qalog.unshift({t: txt, by: "Arun K. · RP", at: "now"});
  if(S.qalog.length > 8) S.qalog.pop();
}
function renderQA(){
  var body = document.getElementById("qa-rows");
  if(!body) return;
  var rows = qaVisible(), cur = qaCurrent();
  body.innerHTML = rows.map(function(b){
    var st = QASTAT[qaState(b)], ok = (b.checks || []).length - qaOpenChecks(b);
    return '<tr data-qapick="' + b.id + '" style="cursor:pointer"' + (cur && cur.id === b.id ? ' class="ur"' : '') + '>'
      + '<td class="mono"><b>' + esc(b.id) + '</b></td>'
      + '<td><b>' + esc(b.prod) + '</b><div class="dim mono" style="font-size:11px">' + esc(b.batch) + '</div></td>'
      + '<td>' + esc(b.sup.split(" ")[0]) + '</td><td class="mono">' + esc(b.exp) + '</td>'
      + '<td>' + (b.tempok ? '<span class="tag t-green">In range</span>' : '<span class="tag t-red">Excursion</span>')
      + '</td><td class="mono">' + ok + " of " + (b.checks || []).length + '</td>'
      + '<td class="mono dim">' + esc(b.waiting) + '</td>'
      + '<td><span class="tag ' + st[0] + '">' + st[1] + '</span></td></tr>';
  }).join("") || '<tr><td colspan="8" class="dim" style="padding:26px;text-align:center">Nothing in this filter.</td></tr>';
  setTxt("qa-count", rows.length + " shown" + (QAMINE ? " · mine only" : ""));
  document.querySelectorAll("[data-qaf]").forEach(function(c){
    c.className = "tag " + (c.getAttribute("data-qaf") === QAF ? "t-blue" : "t-grey");
  });
  var mineBtn = document.getElementById("qa-mine");
  if(mineBtn) mineBtn.textContent = QAMINE ? "Show every queue" : "My queue";

  var kpiWait = 0, kpiQuar = 0;
  (S.qa || []).forEach(function(b){
    var st = qaState(b);
    if(st === "review" || st === "ready") kpiWait++;
    if(st === "quarantine") kpiQuar++;
  });
  setTxt("qk-wait", kpiWait); setTxt("qk-quar", kpiQuar);
  setTxt("qk-rel", S.qareleased || 0);
  setTxt("qk-dev", (S.qadev || []).length);
  setTxt("qk-wait-note", kpiWait ? "nothing ships until it is signed" : "the queue is clear");
  setTxt("qk-quar-note", kpiQuar ? "held, awaiting a decision" : "nothing on hold");

  var panel = document.getElementById("qa-panel");
  if(!cur){ if(panel) panel.hidden = true; renderQASide(); return; }
  if(panel) panel.hidden = false;
  var st2 = qaState(cur);
  setTxt("qa-title", cur.prod);
  setTxt("qa-sub", cur.id + " · batch " + cur.batch + " · " + QASTAT[st2][1]);
  document.getElementById("qa-left").innerHTML =
    line("Supplier", "<b>" + esc(cur.sup) + "</b>")
    + line("Batch", '<span class="mono">' + esc(cur.batch) + "</span> &middot; expiry " + esc(cur.exp))
    + line("Handling", '<span class="tag t-cyan">' + esc(cur.handling) + "</span>")
    + line("Inbound temperature", (cur.tempok ? "" : '<span class="tag t-red" style="margin-right:6px">Excursion</span>') + esc(cur.temp));
  document.getElementById("qa-right").innerHTML =
    line("Held for", esc(cur.forwhom))
    + line("Received by", esc(cur.recv))
    + line("Signs release", esc(cur.signer))
    + line("Waiting", '<span class="mono">' + esc(cur.waiting) + "</span>")
    + (cur.quarWhy ? line("Held because", '<span class="tag t-red">' + esc(cur.quarWhy) + "</span>") : "");
  var open = qaOpenChecks(cur);
  document.getElementById("qa-checks").innerHTML = (cur.checks || []).map(function(c, i){
    return '<div style="display:flex;gap:10px;align-items:flex-start"><span class="ck ' + (c[0] ? "ok" : "warn") + '">'
      + (c[0] ? "&#10003;" : "!") + '</span><span style="flex:1"><b>' + esc(c[1]) + '</b>'
      + '<div class="dim" style="font-size:12px">' + esc(c[2]) + '</div></span>'
      + (c[0] ? "" : '<span class="act" data-qaclear="' + i + '">Clear this check</span>') + '</div>';
  }).join("");
  setTxt("qa-checkcount", ((cur.checks || []).length - open) + " of " + (cur.checks || []).length + " clear");
  setTxt("qa-note", st2 === "released" ? "released — the batch is with the warehouse"
    : st2 === "returned" ? "returned to the supplier"
    : st2 === "destroyed" ? "destroyed under witness"
    : open ? "release is blocked while " + open + (open === 1 ? " check is open" : " checks are open")
    : "every check is clear — ready for signature");
  ["qa-release","qa-quar","qa-dev","qa-return","qa-destroy"].forEach(function(id){
    var btn = document.getElementById(id); if(!btn) return;
    var settled = (st2 === "released" || st2 === "returned" || st2 === "destroyed");
    btn.hidden = settled
      || (id === "qa-release" && (open > 0 || st2 === "quarantine"))
      || (id === "qa-quar" && st2 === "quarantine")
      || ((id === "qa-return" || id === "qa-destroy") && st2 !== "quarantine");
  });
  renderQASide();
}
function renderQASide(){
  var d = document.getElementById("qa-devs");
  if(d) d.innerHTML = (S.qadev || []).map(function(v){
    var sev = v.sev === "Critical" ? "t-red" : (v.sev === "Major" ? "t-amber" : "t-grey");
    return '<tr><td class="mono"><b>' + esc(v.id) + "</b></td><td class='mono'>" + esc(v.batch) + "</td><td>" + esc(v.what)
      + '</td><td><span class="tag ' + sev + '">' + esc(v.sev) + "</span></td><td>" + esc(v.state) + "</td></tr>";
  }).join("") || '<tr><td colspan="5" class="dim" style="padding:22px;text-align:center">No open deviations.</td></tr>';
  var l = document.getElementById("qa-log");
  if(l) l.innerHTML = (S.qalog || []).map(function(x){
    return '<div style="display:flex;gap:10px"><span class="pip" style="background:var(--accent);margin-top:6px"></span>'
      + "<span>" + x.t + '<div class="dim" style="font-size:12px">' + esc(x.by) + " &middot; " + esc(x.at) + "</div></span></div>";
  }).join("");
}


/* ---------- orders: the fulfilment board ---------- */
var STAGES = ["QA / QC release", "Processing", "Warehouse", "Dispatch", "In transit"];
var STEPS = [
  ["Batch checked against the certificate of analysis", "Serialisation verified", "Responsible person signs the release"],
  ["Invoice and proforma raised", "Export and customs data completed", "Import permit filed where one is needed"],
  ["Pick list printed", "Shipper conditioned and packed with the logger", "Weight and dimensions recorded"],
  ["Air waybill raised", "Courier booked and handed over", "Customer told it is on the way"],
  ["Tracked leg by leg", "Temperature watched against the profile", "Proof of delivery filed against the case"]
];
var ORDSEL = null, ORDCOLD = false, ORDRISK = false;
function ordById(id){ return (S.orders || []).filter(function(o){ return o.id === id; })[0]; }
function ordShown(o){
  if(ORDCOLD && !o.cold) return false;
  if(ORDRISK && !o.risk && !o.hold) return false;
  return true;
}
function ordCurrent(){
  var o = ORDSEL ? ordById(ORDSEL) : null;
  if(!o){ o = (S.orders || []).filter(ordShown)[0] || (S.orders || [])[0] || null; ORDSEL = o ? o.id : null; }
  return o;
}
function ordLog(txt, by){
  S.ordlog = S.ordlog || [];
  S.ordlog.unshift({t: txt, by: by || "Liam C.", at: "now"});
  if(S.ordlog.length > 8) S.ordlog.pop();
}
function renderOrders(){
  var board = document.getElementById("ord-board");
  if(!board) return;
  var cur = ordCurrent();
  board.innerHTML = STAGES.map(function(st, i){
    var items = (S.orders || []).filter(function(o){ return o.stage === i && ordShown(o); });
    var cards = items.map(function(o){
      var on = cur && cur.id === o.id;
      return '<div data-ordpick="' + o.id + '" style="background:#fff;border:1px solid '
        + (on ? "var(--accent)" : "#e7ecf3") + ';border-radius:12px;padding:11px 12px;cursor:pointer;'
        + (on ? "box-shadow:0 0 0 3px var(--tint)" : "") + '">'
        + '<div style="display:flex;align-items:center;gap:6px">'
        + '<span class="mono" style="font-size:11px;font-weight:600">' + esc(o.id) + '</span>'
        + (o.cold ? '<span class="tag t-cyan" style="font-size:10px">2&ndash;8&deg;</span>' : "")
        + (o.hold ? '<span class="tag t-red" style="font-size:10px">Hold</span>'
                  : (o.risk ? '<span class="tag t-amber" style="font-size:10px">At risk</span>' : ""))
        + '</div>'
        + '<div style="font-size:12.5px;font-weight:600;margin-top:4px">' + esc(o.drug) + '</div>'
        + '<div class="dim" style="font-size:11.5px">' + esc(o.who) + " &middot; " + esc(o.country) + '</div>'
        + '<div class="dim" style="font-size:11.5px;margin-top:5px">' + esc(o.note) + '</div>'
        + '<div style="display:flex;align-items:center;gap:8px;margin-top:7px">'
        + '<span class="mono" style="font-size:11px' + (o.risk ? ";color:#9c2c2c" : "") + '">' + esc(o.due) + " &middot; " + esc(o.left) + '</span>'
        + '<span class="act" data-ordnext="' + o.id + '" style="margin-left:auto;font-size:11.5px">'
        + (i === STAGES.length - 1 ? "Delivered" : "Move on") + '</span></div></div>';
    }).join("");
    return '<div style="flex:1;min-width:210px;display:flex;flex-direction:column;gap:9px">'
      + '<div style="display:flex;align-items:center;gap:7px;padding:0 2px">'
      + '<b style="font-size:12.5px">' + st + '</b>'
      + '<span class="tag t-grey" style="font-size:10.5px">' + items.length + '</span></div>'
      + (cards || '<div class="dim" style="font-size:11.5px;padding:10px 2px">Nothing here.</div>')
      + '</div>';
  }).join("");

  var open = 0, risk = 0, hold = 0;
  (S.orders || []).forEach(function(o){ open++; if(o.risk) risk++; if(o.hold) hold++; });
  setTxt("ok-open", open); setTxt("ok-risk", risk); setTxt("ok-hold", hold);
  setTxt("ok-done", (S.orddone || []).length);
  setTxt("ok-risk-note", risk ? "less than a day of float" : "every order has float");
  setTxt("ok-hold-note", hold ? "nothing moves until it is cleared" : "nothing is held");
  var cb = document.getElementById("ord-cold"); if(cb) cb.textContent = ORDCOLD ? "Show every order" : "Cold chain only";
  var rb = document.getElementById("ord-risk"); if(rb) rb.textContent = ORDRISK ? "Show every order" : "At risk only";

  var panel = document.getElementById("ord-panel");
  if(!cur){ if(panel) panel.hidden = true; renderOrdSide(); return; }
  if(panel) panel.hidden = false;
  setTxt("ord-title", cur.drug + " · " + cur.who);
  setTxt("ord-sub", cur.id + " · " + STAGES[cur.stage] + (cur.hold ? " · on hold" : ""));
  document.getElementById("ord-left").innerHTML =
    line("Order", '<span class="mono">' + esc(cur.id) + "</span> &middot; " + esc(cur.val))
    + line("For", "<b>" + esc(cur.who) + "</b> &middot; " + esc(cur.country))
    + line("Case", '<span class="mono">' + esc(cur.case) + "</span>")
    + line("Handling", cur.cold ? '<span class="tag t-cyan">2&ndash;8 &deg;C</span>' : '<span class="tag t-grey">Ambient</span>');
  document.getElementById("ord-right").innerHTML =
    line("Promised", esc(cur.due) + " &middot; " + esc(cur.left) + (cur.risk ? ' <span class="tag t-amber">at risk</span>' : ""))
    + line("Payment", esc(cur.pay))
    + line("Owner", esc(cur.owner))
    + (cur.hold ? line("Held because", '<span class="tag t-red">' + esc(cur.hold) + "</span>") : line("Latest", esc(cur.note)));
  setTxt("ord-stagesub", STAGES[cur.stage] + " · stage " + (cur.stage + 1) + " of " + STAGES.length);
  document.getElementById("ord-steps").innerHTML = STAGES.map(function(st, i){
    var done = i < cur.stage, now = i === cur.stage;
    return '<div style="display:flex;gap:10px;align-items:flex-start">'
      + '<span class="ck ' + (done ? "ok" : (now ? "warn" : "no")) + '">' + (done ? "&#10003;" : (now ? "&middot;" : "")) + '</span>'
      + '<span style="flex:1"><b>' + st + '</b>'
      + (now ? '<div class="dim" style="font-size:12px">' + STEPS[i].join(" &middot; ") + '</div>' : "")
      + '</span>' + (now ? '<span class="tag t-blue">Here now</span>' : "") + '</div>';
  }).join("");
  setTxt("ord-note", cur.hold ? "held — " + cur.hold
    : (cur.stage === STAGES.length - 1 ? "the next move marks it delivered" : "moves to " + STAGES[cur.stage + 1]));
  var nb = document.getElementById("ord-next"); if(nb) nb.hidden = !!cur.hold;
  var hb = document.getElementById("ord-hold"); if(hb) hb.hidden = !!cur.hold;
  var ub = document.getElementById("ord-unhold"); if(ub) ub.hidden = !cur.hold;
  renderOrdSide();
}
function renderOrdSide(){
  var d = document.getElementById("ord-done");
  if(d) d.innerHTML = (S.orddone || []).map(function(o){
    return '<tr><td class="mono"><b>' + esc(o.id) + "</b></td><td>" + esc(o.drug) + "</td><td>" + esc(o.who)
      + '</td><td class="dim">' + esc(o.at) + "</td></tr>";
  }).join("") || '<tr><td colspan="4" class="dim" style="padding:22px;text-align:center">Nothing delivered yet today.</td></tr>';
  var l = document.getElementById("ord-log");
  if(l) l.innerHTML = (S.ordlog || []).map(function(x){
    return '<div style="display:flex;gap:10px"><span class="pip" style="background:var(--accent);margin-top:6px"></span>'
      + "<span>" + x.t + '<div class="dim" style="font-size:12px">' + esc(x.by) + " &middot; " + esc(x.at) + "</div></span></div>";
  }).join("");
}
function ordAdvance(id){
  var o = ordById(id); if(!o) return;
  if(o.hold){ toast(o.id + " is on hold — clear the hold first"); return; }
  if(o.stage >= STAGES.length - 1){
    S.orddone = S.orddone || [];
    S.orddone.unshift({id:o.id, drug:o.drug, who:o.who, at:"now · proof of delivery filed"});
    S.orders = S.orders.filter(function(x){ return x.id !== o.id; });
    ordLog("<b>" + o.id + "</b> delivered to " + esc(o.who) + " · signed for");
    if(ORDSEL === o.id) ORDSEL = null;
    save(); renderOrders();
    toast(o.id + " delivered — the proof of delivery is on the case");
    return;
  }
  o.stage++;
  o.note = STEPS[o.stage][0];
  ordLog("<b>" + o.id + "</b> moved to " + STAGES[o.stage]);
  save(); renderOrders();
  toast(o.id + " moved to " + STAGES[o.stage]);
}


/* ---------- quote builder ---------- */
function qtPrice(o){ return (+o.landed || 0) + (+o.fee || 0); }
function qtMargin(o){ var p = qtPrice(o); return p ? (+o.fee || 0) / p * 100 : 0; }
function usd(n){ return "$" + Math.round(n).toLocaleString("en-US"); }
function qtDefault(){ return (S.quote.opts || []).filter(function(o){ return o.def; })[0] || (S.quote.opts || [])[0]; }
function qtLog(txt, by){
  S.quote.log = S.quote.log || [];
  S.quote.log.unshift({t: txt, by: by || "Priya N.", at: "now"});
  if(S.quote.log.length > 8) S.quote.log.pop();
}
function renderQuote(){
  var body = document.getElementById("qt-opts");
  if(!body || !S.quote) return;
  var q = S.quote, sent = q.status !== "draft";
  setTxt("qt-title", "Quote " + q.id);
  setTxt("qt-sub", q.patient + " · " + q.drug + " · case " + q.case
    + (q.status === "draft" ? " · draft" : q.status === "sent" ? " · sent, waiting on the patient" : " · accepted"));
  body.innerHTML = (q.opts || []).map(function(o){
    var m = qtMargin(o), low = m < (S.marginFloor || 10);
    return '<tr' + (o.def ? ' class="ur"' : '') + '><td><b>' + esc(o.k) + " · " + esc(o.name) + '</b>'
      + '<div class="dim" style="font-size:11.5px">' + esc(o.note || "") + '</div></td>'
      + '<td>' + esc(o.origin) + '</td><td class="mono">' + esc(o.lead) + ' days</td>'
      + '<td class="num mono">' + usd(+o.landed) + '</td><td class="num mono">' + usd(+o.fee) + '</td>'
      + '<td class="num mono"><b>' + usd(qtPrice(o)) + '</b></td>'
      + '<td class="num"><span class="tag ' + (low ? "t-red" : "t-green") + '">' + m.toFixed(1) + '%</span></td>'
      + '<td style="white-space:nowrap">'
      + (o.def ? '<span class="tag t-blue">Default</span>'
               : '<span class="act" data-optdef="' + o.k + '">Make default</span>')
      + ' <span class="act" data-optshow="' + o.k + '" style="margin-left:10px">' + (o.show ? "Hide" : "Show") + '</span>'
      + ' <span class="act" data-optrm="' + o.k + '" style="margin-left:10px">Remove</span></td></tr>';
  }).join("") || '<tr><td colspan="8" class="dim" style="padding:26px;text-align:center">'
    + 'No options yet — add one from a sourcing response.</td></tr>';

  var d = qtDefault(), shown = (q.opts || []).filter(function(o){ return o.show; }).length;
  setTxt("qt-k-opts", shown);
  setTxt("qt-k-opts-note", (q.opts || []).length + " built, " + shown + " on the quote");
  setTxt("qt-k-price", d ? usd(qtPrice(d)) : "—");
  setTxt("qt-k-price-note", d ? d.k + " · " + d.origin : "");
  setTxt("qt-k-margin", d ? qtMargin(d).toFixed(1) + "%" : "—");
  setTxt("qt-k-margin-note", d && qtMargin(d) < 10 ? "below the floor — needs the business head" : "floor is 10%");
  setTxt("qt-k-state", q.status === "draft" ? "Draft" : q.status === "sent" ? "Sent" : "Accepted");
  setTxt("qt-k-state-note", q.status === "draft" ? "not with the patient yet"
    : q.status === "sent" ? "valid for 7 days" : "order raised on the board");
  setTxt("qt-note", !d ? "add an option before sending"
    : qtMargin(d) < (S.marginFloor || 10) ? "the default option is below the margin floor — the business head must approve it"
    : q.status === "draft" ? "auto-approved · margin is above the floor"
    : q.status === "sent" ? "sent · the patient can accept from the portal"
    : "accepted · the order is on the fulfilment board");
  var sb = document.getElementById("qt-send"); if(sb) sb.hidden = q.status !== "draft";
  var ab = document.getElementById("qt-accept"); if(ab) ab.hidden = q.status !== "sent";
  var rb = document.getElementById("qt-requote"); if(rb) rb.hidden = q.status === "draft";
  var l = document.getElementById("qt-log");
  if(l) l.innerHTML = (q.log || []).map(function(x){
    return '<div style="display:flex;gap:10px"><span class="pip" style="background:var(--accent);margin-top:6px"></span>'
      + "<span>" + x.t + '<div class="dim" style="font-size:12px">' + esc(x.by) + " &middot; " + esc(x.at) + "</div></span></div>";
  }).join("") || '<div class="dim">Nothing sent yet.</div>';
}


/* ---------- sourcing desk ---------- */
function srLog(txt, by){
  S.rfq.log = S.rfq.log || [];
  S.rfq.log.unshift({t: txt, by: by || "Yusuf A.", at: "now"});
  if(S.rfq.log.length > 8) S.rfq.log.pop();
}
function renderSourcing(){
  var body = document.getElementById("sr-rows");
  if(!body || !S.rfq) return;
  var r = S.rfq;
  setTxt("sr-title", r.drug);
  setTxt("sr-sub", r.id + " · sent " + r.sent + " · case " + r.case);
  document.getElementById("sr-left").innerHTML =
    line("Requirement", "<b>" + esc(r.drug) + "</b><div class='dim'>" + esc(r.spec) + "</div>")
    + line("Quantity", esc(r.qty)) + line("Needed by", esc(r.need))
    + line("Case", '<span class="mono">' + esc(r.case) + "</span>");
  document.getElementById("sr-right").innerHTML =
    line("Destination", esc(r.dest)) + line("Storage", '<span class="tag t-cyan">' + esc(r.storage) + "</span>")
    + line("Asked", (r.lines || []).length + " partners in "
           + (function(){ var c = {}; (r.lines||[]).forEach(function(l){ c[l.country] = 1; }); return Object.keys(c).length; })()
           + " countries")
    + line("RFQ sent", esc(r.sent));

  body.innerHTML = (r.lines || []).map(function(l, i){
    var waiting = l.state === "waiting", declined = l.state === "declined";
    var flagTag = l.flag === "Clear" ? '<span class="tag t-green">Clear</span>'
      : '<span class="tag t-amber">' + esc(l.flag) + "</span>";
    if(waiting || declined){
      return '<tr><td></td><td><b>' + esc(l.country) + '</b><div class="dim" style="font-size:11.5px">'
        + esc(l.partner) + '</div></td><td colspan="6" class="dim">' + esc(l.note) + '</td>'
        + '<td>' + (waiting ? '<span class="act" data-srchase="' + i + '">Chase</span>'
                            : '<span class="tag t-grey">Closed</span>') + '</td></tr>';
    }
    return '<tr' + (l.sel ? ' class="ur"' : '') + '><td><span class="cb' + (l.sel ? " on" : "")
      + '" data-srcsel="' + i + '" style="cursor:pointer;background:' + (l.sel ? "var(--accent)" : "#fff")
      + ';border-color:' + (l.sel ? "var(--accent)" : "#c7d0dc") + '">' + (l.sel ? "&#10003;" : "") + '</span></td>'
      + '<td><b>' + esc(l.country) + '</b><div class="dim" style="font-size:11.5px">' + esc(l.partner) + '</div></td>'
      + '<td>' + esc(l.maker) + '<div class="dim" style="font-size:11.5px">' + esc(l.pack) + '</div></td>'
      + '<td class="mono" style="font-size:11.5px">' + esc(l.batch) + '<div class="dim">' + esc(l.exp) + '</div></td>'
      + '<td>' + esc(l.avail) + '</td>'
      + '<td class="num mono"><b>' + usd(+l.landed) + '</b></td>'
      + '<td class="mono">' + esc(l.lead) + ' d</td>'
      + '<td class="dim" style="font-size:11.5px">' + esc(l.rating) + '</td>'
      + '<td>' + flagTag + '</td></tr>';
  }).join("");

  var ins = (r.lines || []).filter(function(l){ return l.state === "in"; });
  var sel = ins.filter(function(l){ return l.sel; });
  var best = ins.length ? Math.min.apply(null, ins.map(function(l){ return +l.landed; })) : 0;
  var bestLine = ins.filter(function(l){ return +l.landed === best; })[0];
  setTxt("sr-k-asked", (r.lines || []).length);
  setTxt("sr-k-asked-note", (r.lines || []).filter(function(l){ return l.state === "waiting"; }).length + " still to answer");
  setTxt("sr-k-in", ins.length);
  setTxt("sr-k-in-note", (r.lines || []).filter(function(l){ return l.state === "declined"; }).length + " declined");
  setTxt("sr-k-best", best ? usd(best) : "—");
  setTxt("sr-k-best-note", bestLine ? bestLine.country + " · " + bestLine.lead + " days" : "");
  setTxt("sr-k-sel", sel.length);
  setTxt("sr-k-sel-note", sel.length ? "ready to build the quote" : "tick the lines to compare");
  setTxt("sr-count", ins.length + " responses · landed cost per vial, all-in");
  setTxt("sr-note", sel.length ? sel.length + (sel.length === 1 ? " line selected" : " lines selected")
                               : "tick the responses you want the patient to see");
  var l2 = document.getElementById("sr-log");
  if(l2) l2.innerHTML = (r.log || []).map(function(x){
    return '<div style="display:flex;gap:10px"><span class="pip" style="background:var(--accent);margin-top:6px"></span>'
      + "<span>" + x.t + '<div class="dim" style="font-size:12px">' + esc(x.by) + " &middot; " + esc(x.at) + "</div></span></div>";
  }).join("");
}


/* ---------- patient case ---------- */
var CASETAB = "all";
function caseLog(entry){ S.caselog = S.caselog || []; S.caselog.unshift(entry); }
function renderCase(){
  var tl = document.getElementById("case-timeline");
  if(!tl) return;
  var rows = (S.caselog || []).filter(function(e){ return CASETAB === "all" || e.k === CASETAB; });
  tl.innerHTML = rows.map(function(e, i){
    var last = i === rows.length - 1;
    var tag = e.tag ? '<span class="tag ' + (e.tag === "Now" ? "t-cyan" : (/\$/.test(e.tag) ? "t-green" : "t-grey")) + '">' + e.tag + '</span>' : "";
    return '<div style="display:flex;gap:12px">'
      + '<div style="display:flex;flex-direction:column;align-items:center;width:16px">'
      + '<span class="pip" style="width:9px;height:9px;background:' + e.c + (e.tag === "Now" ? ';box-shadow:0 0 0 3px #e0f1f5' : '') + '"></span>'
      + (last ? '' : '<span style="flex:1;width:1.5px;background:#e2e7ee"></span>') + '</div>'
      + '<div style="padding-bottom:' + (last ? '2' : '14') + 'px;flex:1">'
      + '<div style="display:flex;align-items:center;gap:8px"><b style="font-size:13px">' + e.t + '</b>' + tag
      + '<span class="dim mono" style="margin-left:auto;font-size:11.5px">' + e.at + '</span></div>'
      + '<div class="dim" style="font-size:12.5px">' + e.d + '</div></div></div>';
  }).join("") || '<div class="dim" style="padding:18px 0;font-size:12.5px">Nothing of this kind on the case yet.</div>';
  document.querySelectorAll("[data-casetab]").forEach(function(tb){ tb.classList.toggle("on", tb.getAttribute("data-casetab") === CASETAB); });
  var mg = document.getElementById("cs-manager"); if(mg) mg.textContent = S.casemgr || "Priya N.";
  var av = document.getElementById("cs-manager-av");
  if(av) av.textContent = (S.casemgr || "Priya N.").split(" ").map(function(w){ return w[0]; }).join("").slice(0,2).toUpperCase();
  var docs = document.getElementById("cs-docs");
  if(docs){
    docs.querySelectorAll("[data-casedoc]").forEach(function(n){ n.parentNode.removeChild(n); });
    (S.casedocs || []).forEach(function(d){
      var div = document.createElement("div");
      div.setAttribute("data-casedoc", "1");
      div.style.cssText = "display:flex;align-items:center;gap:9px;padding:8px 14px;border-top:1px solid #f3f5f8";
      div.innerHTML = '<span class="ck ok">&#10003;</span><div style="flex:1"><div>' + esc(d.t) + '</div>'
        + '<div class="dim" style="font-size:11.5px">Added ' + esc(d.at) + ' &middot; filed against the case</div></div>';
      docs.appendChild(div);
    });
  }
  var ex = document.getElementById("cs-conv-extra");
  if(ex) ex.innerHTML = (S.caselog || []).filter(function(e){ return e.k === "ticket" && e.fresh; }).map(function(e){
    return '<div style="display:flex;align-items:center;gap:7px;color:#8b98ab"><span class="pip" style="background:#8b98ab"></span><span>'
      + e.t + ' &middot; ' + e.at + '</span></div>';
  }).join("");
}


/* ---------- warehouse: pick, pack, seal ---------- */
var WHST = {queued:["t-grey","Queued","Start picking"], picking:["t-blue","Picking","Mark picked"], picked:["t-blue","Picked","Pack"],
            packed:["t-green","Packed","Seal below"], held:["t-red","Held",""], qa:["t-amber","QA release",""], gone:["t-grey","With courier",""]};
var WHSEL = "OR-2026-0881";
function whById(id){ return (S.wave || []).filter(function(w){ return w.id === id; })[0]; }
function renderWarehouse(){
  var tb = document.getElementById("wh-rows");
  if(!tb) return;
  tb.innerHTML = (S.wave || []).map(function(w){
    var st = WHST[w.st] || WHST.queued, held = w.st === "held";
    var act = held ? '<span class="act" data-whfix="' + w.id + '">Use ' + w.alt.batch + '</span> <span class="act" data-whreason="' + w.id + '" style="margin-left:10px">Record reason</span>'
      : (st[2] && w.st !== "packed" ? '<span class="act" data-whnext="' + w.id + '">' + st[2] + '</span>' : (w.st === "packed" ? '<span class="dim">ready to seal</span>' : ""));
    var row = '<tr' + (held ? ' style="background:#fdf4f4"' : (WHSEL === w.id ? ' class="ur"' : '')) + ' data-whpick="' + w.id + '">'
      + '<td class="mono" style="white-space:nowrap">' + esc(w.id) + '</td><td style="white-space:nowrap">' + esc(w.who) + '</td>'
      + '<td style="white-space:nowrap">' + esc(w.drug) + '</td><td class="mono">' + esc(w.batch) + '</td>'
      + '<td class="mono dim">' + esc(w.exp) + '</td><td class="mono dim" style="white-space:nowrap">' + esc(w.loc) + '</td>'
      + '<td class="num" style="white-space:nowrap">' + esc(w.qty) + '</td>'
      + '<td><span class="tag ' + (w.fefo === "OK" ? "t-green" : "t-red") + '">' + esc(w.fefo) + '</span></td>'
      + '<td><span class="tag ' + st[0] + '">' + st[1] + '</span></td>'
      + '<td style="white-space:nowrap;text-align:right">' + act + '</td></tr>';
    if(held) row += '<tr style="background:#fdf4f4"><td colspan="10" style="padding-top:0">'
      + '<div class="flagbar" style="background:#fbe9e9;color:#9c2c2c"><span class="ck warn" style="background:#ad3131">!</span><span>Batch <b class="mono">'
      + w.alt.batch + '</b> expires <b class="mono">' + w.alt.exp + '</b> and sits in <b class="mono">' + w.alt.loc
      + '</b> &mdash; enough to fill this line. Pick it first or record a reason. Scanning ' + esc(w.batch) + ' will reject at the terminal.</span></div></td></tr>';
    return row;
  }).join("");
  var open = (S.wave || []).filter(function(w){ return w.st !== "gone"; }).length;
  setTxt("wk-pick", open); setTxt("wk-photo", S.whphotos || 0);
  var cur = whById(WHSEL);
  setTxt("wh-pack-id", cur ? cur.id : ""); setTxt("wh-pack-id2", cur ? cur.id : "");
  var sb = document.getElementById("wh-seal");
  if(sb) sb.hidden = !cur || (cur.st !== "picked" && cur.st !== "packed");
  setTxt("wh-seal-note", !cur ? "" : cur.st === "gone" ? "handed to the courier — tracked on Cold chain"
    : cur.st === "packed" || cur.st === "picked" ? "logger armed · photographs on file" : "pick and pack first");
}


/* ---------- cold chain: excursion decision ---------- */
function renderColdChain(){
  var st = document.getElementById("cc-state");
  if(!st) return;
  var d = S.ccdecision || "";
  st.className = "tag " + (d === "released" ? "t-green" : d === "quarantine" ? "t-amber" : "t-red");
  st.textContent = d === "released" ? "Released after excursion" : d === "quarantine" ? "Quarantine on arrival" : "Excursion under review";
  var ck = document.getElementById("cc-ck-qa"); if(ck){ ck.className = "ck " + (d ? "ok" : "no"); ck.innerHTML = d ? "&#10003;" : ""; }
  setTxt("cc-ck-qa-txt", d === "released" ? "QA release decision — released by Arun K." : d === "quarantine" ? "QA release decision — quarantine on arrival" : "QA release decision — due before customs");
  var cp = document.getElementById("cc-ck-capa"); if(cp){ cp.className = "ck " + (S.cccapa ? "ok" : "no"); cp.innerHTML = S.cccapa ? "&#10003;" : ""; }
  setTxt("cc-ck-capa-txt", S.cccapa ? "CAPA DV-2026-044 raised: ramp handling agreement with carrier" : "CAPA: ramp handling agreement with carrier");
  var cb = document.getElementById("cc-capa"); if(cb) cb.hidden = !!S.cccapa;
  ["cc-release","cc-quar"].forEach(function(id){ var b = document.getElementById(id); if(b) b.hidden = !!d; });
  setTxt("cc-note", d === "released" ? "The hospital, the patient and the courier have been told. Delivery stays on 12 Sep 10:30."
    : d === "quarantine" ? "Dublin will hold the shipper unopened for QA. The patient has been told the date may move."
    : "Within the manufacturer’s allowance — a decision is needed before customs at 13:20.");
}
function tempReportDoc(){
  var rows = [["10 Sep 19:40","Dispatched, Frankfurt partner warehouse","4.2 °C","In range"],
    ["10 Sep 23:00","Road to FRA cargo","3.8 °C","In range"],["11 Sep 04:15","Airport acceptance","4.1 °C","In range"],
    ["11 Sep 06:12","Ramp hold begins — outside the cool area","6.9 °C","Rising"],
    ["11 Sep 06:24","Ramp hold","8.9 °C","Above 8 °C — excursion"],["11 Sep 06:34","Loaded, hold ends","7.6 °C","Recovering"],
    ["11 Sep 07:14","In flight LH 990","5.1 °C","In range"],["11 Sep 10:00","In flight","4.6 °C","In range"]];
  return docHead("Temperature report — SHP-2026-3391", "Logger CT-99118 · 5-minute interval · Blinatumomab 35 mcg for Den R.",
      "Shipper budget used 47%<br>Generated " + fmtDate(new Date()))
    + '<div class="grid2">'
    + '<div class="kv"><span>Permitted range</span><span>2 – 8 °C, never above 25 °C</span></div>'
    + '<div class="kv"><span>Mean kinetic temperature</span><span><b>4.6 °C</b></span></div>'
    + '<div class="kv"><span>Time out of range</span><span>22 minutes</span></div>'
    + '<div class="kv"><span>Cumulative above 8 °C</span><span>0.37 h of 8 h allowed</span></div>'
    + '<div class="kv"><span>Peak</span><span>8.9 °C at 06:24 on 11 Sep</span></div>'
    + '<div class="kv"><span>Assessment</span><span>' + (S.ccdecision === "quarantine" ? "Held for QA on arrival" : "Within the manufacturer’s allowance — fit for release") + '</span></div>'
    + '</div><table><thead><tr><th>Time</th><th>Leg</th><th>Reading</th><th>State</th></tr></thead><tbody>'
    + rows.map(function(r){ return "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td><td><b>" + r[2] + "</b></td><td>" + r[3] + "</td></tr>"; }).join("")
    + '</tbody></table><div class="docfoot">This report is written from the logger memory at each scan and cannot be edited. '
    + 'It travels with the parcel and is handed to the hospital pharmacy with the certificate of analysis.</div>';
}


var MONS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function fmtDate(d){ return String(d.getDate()).padStart(2,"0") + " " + MONS[d.getMonth()] + " " + d.getFullYear(); }
function nowStr(){ var d = new Date(); return String(d.getHours()).padStart(2,"0") + ":" + String(d.getMinutes()).padStart(2,"0"); }
function routeDesk(text){
  var s = (text || "").toLowerCase();
  var rules = S.rules || [];
  for(var i = 0; i < rules.length; i++){
    var kws = rules[i].kw.toLowerCase().split("|");
    for(var j = 0; j < kws.length; j++) if(kws[j].trim() && s.indexOf(kws[j].trim()) >= 0) return rules[i].desk;
  }
  return "Support";
}
var CANNED = {
  "Sales": ["Quote attached — holds 7 days", "Chasing your decision", "Proforma raised, payment link inside"],
  "Support": ["Received, looking into it", "Delivery brief", "Need the signed prescription"],
  "Pharmacy": ["Prescription received and with the pharmacist", "Query for your prescriber", "Storage and handling leaflet"],
  "Shipping": ["Collected — tracking link", "Delivery window confirmed", "Customs hold — what happens next"],
  "Accounts": ["Payment received, thank you", "Invoice attached", "Gentle reminder — invoice due"],
  "Quality": ["CoA received and matched", "Batch released", "Deviation acknowledged"],
  "_": ["Thank you — received", "We will come back to you today", "Please send the document"]
};
var CANNED_TXT = {
  "Quote attached — holds 7 days": "Thank you for coming back to us. The quote is attached; it holds for seven days and the cold-chain surcharge is included. Tell me to proceed and I will raise the proforma today.",
  "Chasing your decision": "A quick note to check whether you have had a chance to look at the quote. The price holds until the date on it; after that we re-quote at the day's rate.",
  "Proforma raised, payment link inside": "The proforma is raised and the secure payment link is below. Once it clears, sourcing confirms the batch and the pharmacist check runs in parallel.",
  "Received, looking into it": "Thank you — we have this and are looking into it now. You will hear from us today.",
  "Delivery brief": "The parcel travels in a validated 2–8 °C shipper with a temperature logger. The pharmacy receives the temperature report, the certificate of analysis and the invoice with it — nothing is needed from you on arrival.",
  "Need the signed prescription": "To move this on we need the signed prescription. A clear photo or scan is fine; the pharmacist verifies it the same day.",
  "Prescription received and with the pharmacist": "Thank you, the signed prescription is received and is with the pharmacist now. We will confirm once it is verified.",
  "Query for your prescriber": "The pharmacist has a question for your prescriber before release. We have written to the clinic directly and will update you as soon as they answer.",
  "Storage and handling leaflet": "The storage and handling leaflet for this medicine is attached. Keep it refrigerated at 2–8 °C, do not freeze, and keep it in the carton to protect it from light.",
  "Collected — tracking link": "Your parcel has been collected. The tracking link is below; it updates at every scan, including the temperature reading.",
  "Delivery window confirmed": "The delivery window is confirmed. The courier will call the pharmacy 30 minutes before arrival.",
  "Customs hold — what happens next": "The parcel is held at customs for a routine document check. Our broker is on it; this typically clears within a working day and the temperature stays within range in the shipper.",
  "Payment received, thank you": "Payment received, thank you. The order moves to sourcing now and you will have the batch confirmation shortly.",
  "Invoice attached": "The invoice is attached. Payment terms and bank details are on it; let us know if your finance team needs anything else.",
  "Gentle reminder — invoice due": "A gentle reminder that the invoice attached falls due this week. If payment has already left, please ignore this note.",
  "CoA received and matched": "The certificate of analysis is received and matches the batch. QA release follows.",
  "Batch released": "The batch has been released by our responsible person and is with the warehouse for packing.",
  "Deviation acknowledged": "The deviation is logged and under investigation. You will have our CAPA within five working days.",
  "Thank you — received": "Thank you, we have received this.",
  "We will come back to you today": "We will come back to you today with an answer.",
  "Please send the document": "Could you send the document across when you have a moment? A photo or scan is fine."
};
var NOTE_CANNED = ["Waiting on the clinic", "Pharmacist to check dose", "Escalate if no reply by tomorrow", "Payment expected this week"];
function cannedFor(desk){ return (CANNED[desk] || CANNED["_"]).concat(CANNED["_"].filter(function(c){ return (CANNED[desk]||[]).indexOf(c) < 0; }).slice(0,1)); }

function notify(title, detail, go){
  S.notes = S.notes || [];
  S.notes.unshift({id:"N" + Date.now().toString(36) + Math.floor(Math.random()*99), t:title, d:detail || "", go:go || "", at:nowStr(), read:false});
  if(S.notes.length > 30) S.notes.pop();
  renderNotes();
}
function raiseTicket(t){
  S.tickets.unshift(t);
  notify(t.subj, "for the " + (t.desk || "triage") + " desk · " + (t.chan || ""), "tickets");
}
function renderNotes(){
  var n = (S.notes || []).filter(function(x){ return !x.read; }).length;
  var badge = document.getElementById("nb-count"); if(badge){ badge.textContent = n; badge.hidden = !n; }
  var list = document.getElementById("nb-list"); if(!list) return;
  list.innerHTML = (S.notes || []).slice(0, 12).map(function(x){
    return '<div class="nbi' + (x.read ? "" : " ur") + '" data-noteopen="' + x.id + '"><span class="udot" style="' + (x.read ? "visibility:hidden" : "") + '"></span>'
      + '<div style="flex:1;min-width:0"><div class="nbt">' + x.t + '</div><div class="nbd">' + esc(x.d) + '</div></div>'
      + '<span class="dim mono" style="font-size:11px">' + esc(x.at) + '</span></div>';
  }).join("") || '<div class="dim" style="padding:22px;text-align:center;font-size:12.5px">Nothing yet. Anything raised for another desk lands here.</div>';
}

/* ---------- compose — the Gmail-style writer, same as the Amber inbox ---------- */
var CPID = null, CPATT = false, CPFILES = [], CP = null, CPRANGE = null, ACTIVE_ED = "cp-body";
var SMARTBAR = {"cp-body":"cp-smart", "td-reply":"td-smart"};
function edEl(){ return document.getElementById(ACTIVE_ED); }
var WI = {   /* Material Design icons, filled — the Gmail set */
  bold:'M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z',
  italic:'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z',
  under:'M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z',
  strike:'M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z',
  color:'M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z',
  hilite:'M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z',
  ul:'M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z',
  ol:'M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z',
  indent:'M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z',
  outdent:'M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z',
  align:'M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z',
  quote:'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z',
  link:'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
  clear:'M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z',
  undo:'M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z',
  redo:'M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z',
  clip:'M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z',
  img:'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z',
  emoji:'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z',
  drive:'M7.71 3.5L1.15 15l3.43 6h13.42l3.43-6L14.87 3.5zM9.22 5h5.56l5.14 9H14.5L9.22 5zm-1.1 1.64L12.6 14H4.3l3.82-7.36zM5.42 19l1.72-3h10.9l-1.72 3z',
  lock:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z',
  sign:'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
  wand:'M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z',
  tpl:'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
  more:'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
  trash:'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
  clock:'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z',
  down:'M7 10l5 5 5-5z', check:'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
  min:'M6 19h12v2H6z', max:'M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z', x:'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  text:'M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z', pdf:'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z'
};
function wi(n, s){ return '<svg width="' + (s || 20) + '" height="' + (s || 20) + '" viewBox="0 0 24 24" fill="currentColor"><path d="' + WI[n] + '"/></svg>'; }
var CP_COLORS = ['#1A1D23', '#C62828', '#EF6C00', '#F9A825', '#2E7D32', '#1565C0', '#6A1B9A', '#6B7280'];
var CP_HILITES = ['transparent', '#FFF59D', '#C8E6C9', '#BBDEFB', '#FFCDD2', '#E1BEE7'];
var EMOJI = ["🙂","🙏","👍","✅","📎","📅","📦","❄️","💊","📄","⏰","🚚","✈️","⚠️","💬","📞"];
var SIG = {name:"Priya N.", role:"Patient services", co:"Apple Globalcare", tel:"+353 1 555 0142", mail:"care@appleglobalcare.com"};
function sigHtml(){ return '<div class="wsig" contenteditable="false"><b>' + esc(SIG.name) + '</b><br>' + esc(SIG.role) + ' · ' + esc(SIG.co) + '<br><span>' + esc(SIG.tel) + ' · ' + esc(SIG.mail) + '</span></div>'; }
function sigText(){ return "\n\n" + SIG.name + "\n" + SIG.role + " · " + SIG.co + "\n" + SIG.tel + " · " + SIG.mail; }
/* Smart Compose: the start of a sentence -> the rest of it */
var SMART = [
  ["please find", " attached the quote with the pack origin, lead time and the conditions that apply."],
  ["thank you for", " your enquiry. We can source this from a licensed partner and will come back with a quote."],
  ["we can source", " this medicine from a licensed partner in the EU with a current GMP certificate."],
  ["the quote is", " valid for 7 days while the FX lock holds, DDP to the named hospital pharmacy."],
  ["kindly share", " the prescription, the patient's passport page and the hospital pharmacy address so we can open the case."],
  ["lead time", " is 5–7 working days from payment, shipped on a validated 2–8 °C lane."],
  ["the batch", " has been released by our QA pharmacist and the temperature report will travel with the parcel."],
  ["as discussed", " on the call, the pharmacist check runs in parallel with sourcing so nothing waits."],
  ["looking forward", " to supporting the patient on this course."],
  ["let me know", " if you need anything else from our side."],
  ["we are pleased", " to confirm that the documents you requested are attached."],
  ["could you", " confirm the number of vials and the delivery address so we can quote accurately?"]
];
var CP_DOCS = [["Prescription — cycles 4 and 5.pdf","PDF","210 KB"],["Quote QT-2026-0931.pdf","PDF","96 KB"],["CoA batch 1094327.pdf","PDF","140 KB"],
               ["Temperature report SHP-2026-3391.pdf","PDF","320 KB"],["Import permit IE-2026-118.pdf","PDF","88 KB"],["Patient information leaflet (EN).pdf","PDF","1.2 MB"]];
var FT_COL = {PDF:"#D93025", XLS:"#188038", DOC:"#1A73E8", JPG:"#F9AB00", PNG:"#F9AB00", FILE:"#546E7A"};

function cpWindowHtml(){
  var desks = ["Sales","Marketing","Support","Processing","Shipping","Pharmacy","Quality","Accounts","Legal","HR & admin","Sourcing","Warehouse"];
  return '<div class="cmph" id="cp-hd"><span class="ttl" id="cp-title">New message</span>'
    + '<span class="hb" id="cp-min" title="Minimise">' + wi('min', 18) + '</span>'
    + '<span class="hb" id="cp-max" title="Full screen">' + wi('max', 16) + '</span>'
    + '<span class="hb" id="cp-x" title="Save & close">' + wi('x', 18) + '</span></div>'
    + '<div class="cmpb" id="cp-bodywrap">'
    + '<div class="crow"><span class="cl">To</span><span class="chips" id="cp-tochips"></span><input id="cp-to" placeholder="Recipients" autocomplete="off">'
    + '<span class="ccl" id="cp-cc-btn">Cc</span><span class="ccl" id="cp-bcc-btn">Bcc</span></div>'
    + '<div class="crow" id="cp-cc-row" hidden><span class="cl">Cc</span><span class="chips" id="cp-ccchips"></span><input id="cp-cc" autocomplete="off"></div>'
    + '<div class="crow" id="cp-bcc-row" hidden><span class="cl">Bcc</span><span class="chips" id="cp-bccchips"></span><input id="cp-bcc" autocomplete="off"></div>'
    + '<div class="crow"><input id="cp-subj" placeholder="Subject"></div>'
    + '<div class="cai">'
    +   '<span class="wpop"><span class="wb ai" data-w="pop" data-pop="ai" title="Help me write">' + wi('wand', 18) + '<span>Help me write</span>' + wi('down', 16) + '</span>'
    +   '<span class="wmenu" data-pal="ai">' + [["formal","Formalise"],["friendly","Friendlier"],["short","Shorten"],["long","Elaborate"],["fix","Fix spelling & grammar"],["bullets","Turn into bullet points"]]
          .map(function(a){ return '<span class="mi" data-w="ai" data-v="' + a[0] + '">' + wi('wand', 16) + a[1] + '</span>'; }).join('') + '</span></span>'
    +   '<span class="wpop"><span class="wb" data-w="pop" data-pop="tpl" data-cpt="tpl" title="Templates">' + wi('tpl') + '</span><span class="wmenu" data-pal="tpl" id="cp-tplmenu"></span></span>'
    +   '<span class="copts"><label><span>Channel</span><select id="cp-chan"><option>Email</option><option>WhatsApp</option><option>SMS</option><option>Phone call (log)</option><option>Internal</option></select></label>'
    +   '<label><span>Desk</span><select id="cp-desk"><option value="">Auto-route</option>' + desks.map(function(d){ return '<option>' + d + '</option>'; }).join('') + '</select></label>'
    +   '<label><span>Priority</span><select id="cp-pri"><option>Normal</option><option>High</option><option>Urgent</option><option>Low</option></select></label></span>'
    + '</div>'
    + '<div class="wed" id="cp-body" contenteditable="true" spellcheck="true"></div>'
    + '<div class="wsmart" id="cp-smart" hidden><span class="k">Tab</span><span class="t"></span><span class="mut">Smart Compose</span></div>'
    + '<div class="cfiles" id="cp-attach-note"></div>'
    + '<div class="wfmt" id="cp-fmt">'
    +   '<span class="wb" data-fmt="undo" title="Undo (Ctrl+Z)">' + wi('undo') + '</span><span class="wb" data-fmt="redo" title="Redo (Ctrl+Y)">' + wi('redo') + '</span><span class="wsp"></span>'
    +   '<select class="wsel" data-w="font" title="Font"><option>Sans Serif</option><option value="Georgia">Serif</option><option value="ui-monospace">Fixed width</option><option value="Verdana">Wide</option></select>'
    +   '<span class="wpop"><span class="wb" data-w="pop" data-pop="sz" title="Size">' + wi('text') + wi('down', 16) + '</span><span class="wmenu" data-pal="sz">'
    +     [["2","Small"],["3","Normal"],["5","Large"],["6","Huge"]].map(function(a){ return '<span class="mi" data-w="size" data-v="' + a[0] + '">' + a[1] + '</span>'; }).join('') + '</span></span><span class="wsp"></span>'
    +   '<span class="wb" data-fmt="bold" title="Bold (Ctrl+B)">' + wi('bold') + '</span><span class="wb" data-fmt="italic" title="Italic (Ctrl+I)">' + wi('italic') + '</span><span class="wb" data-fmt="underline" title="Underline (Ctrl+U)">' + wi('under') + '</span>'
    +   '<span class="wpop"><span class="wb col" data-w="pop" data-pop="col" title="Text colour">' + wi('color') + '<i class="cbar"></i></span>'
    +     '<span class="wpal" data-pal="col"><span class="plbl">Text colour</span><span class="prow">' + CP_COLORS.map(function(c){ return '<i data-w="forecolor" data-v="' + c + '" style="background:' + c + '"></i>'; }).join('') + '</span>'
    +     '<span class="plbl">Background colour</span><span class="prow">' + CP_HILITES.map(function(c){ return '<i data-w="hilitecolor" data-v="' + c + '" style="background:' + c + (c === 'transparent' ? ';border:1px dashed #c5cfdd' : '') + '"></i>'; }).join('') + '</span></span></span><span class="wsp"></span>'
    +   '<span class="wb" data-w="align" title="Align">' + wi('align') + '</span>'
    +   '<span class="wb" data-fmt="insertOrderedList" title="Numbered list">' + wi('ol') + '</span><span class="wb" data-fmt="insertUnorderedList" title="Bulleted list">' + wi('ul') + '</span>'
    +   '<span class="wb" data-fmt="outdent" title="Indent less">' + wi('outdent') + '</span><span class="wb" data-fmt="indent" title="Indent more">' + wi('indent') + '</span>'
    +   '<span class="wb" data-w="quote" title="Quote">' + wi('quote') + '</span><span class="wb" data-fmt="strikeThrough" title="Strikethrough">' + wi('strike') + '</span>'
    +   '<span class="wb" data-fmt="removeFormat" title="Remove formatting">' + wi('clear') + '</span>'
    + '</div>'
    + '<div class="cmpf">'
    +   '<span class="sendg wpop"><span class="gsend" id="cp-send">Send</span><span class="gsend sch" id="cp-sendmore" data-w="pop" data-pop="sch" title="More send options">' + wi('down', 20) + '</span>'
    +   '<span class="wmenu up" data-pal="sch"><span class="plbl">Send and&hellip;</span>'
    +     '<span class="mi" data-cpsend="close">' + wi('check', 16) + 'Send and close the ticket</span><span class="mi" data-cpsend="wait">' + wi('clock', 16) + 'Send and mark waiting on customer</span>'
    +     '<span class="plbl">Schedule send</span>'
    +     [["tmr","Tomorrow morning","8:00 AM"],["tmra","Tomorrow afternoon","1:00 PM"],["mon","Monday morning","8:00 AM"]].map(function(a){ return '<span class="mi" data-cpsend="sched" data-v="' + a[0] + '">' + wi('clock', 16) + a[1] + '<span class="mut" style="margin-left:auto">' + a[2] + '</span></span>'; }).join('')
    +     '<span class="mi pick">' + wi('clock', 16) + '<input type="datetime-local" id="cp-when"><span class="btn sm pri" data-cpsend="pick">Schedule</span></span>'
    +   '</span></span>'
    +   '<span class="gicons">'
    +     '<span class="wb on" data-cpt="fmt" title="Formatting options">' + wi('text') + '</span>'
    +     '<span class="wb" id="cp-attach" title="Attach files">' + wi('clip') + '</span>'
    +     '<span class="wpop"><span class="wb" data-w="pop" data-pop="link" data-cpt="link" title="Insert link (Ctrl+K)">' + wi('link') + '</span>'
    +       '<span class="wmenu up" data-pal="link"><span class="plbl">Insert link</span><span class="lk"><input id="cp-linktxt" placeholder="Text to show"><input id="cp-linkurl" placeholder="https://"><span class="btn sm pri" id="cp-linkgo">Insert</span></span></span></span>'
    +     '<span class="wpop"><span class="wb" data-w="pop" data-pop="emoji" data-cpt="emoji" title="Insert emoji">' + wi('emoji') + '</span>'
    +       '<span class="wpal" data-pal="emoji"><span class="em">' + EMOJI.map(function(e){ return '<span data-cpemoji="' + e + '">' + e + '</span>'; }).join('') + '</span></span></span>'
    +     '<span class="wpop"><span class="wb" data-w="pop" data-pop="vault" title="Attach from the case documents">' + wi('drive') + '</span>'
    +       '<span class="wmenu up" data-pal="vault"><span class="plbl">Case documents</span>' + CP_DOCS.map(function(d, i){ return '<span class="mi" data-cpdoc="' + i + '"><span class="ft" style="background:' + FT_COL[d[1]] + '">' + d[1] + '</span>' + esc(d[0]) + '<span class="mut" style="margin-left:auto">' + d[2] + '</span></span>'; }).join('') + '</span></span>'
    +     '<span class="wb" data-w="img" title="Insert photo">' + wi('img') + '</span>'
    +     '<span class="wb" data-w="conf" id="cp-conf" title="Confidential mode">' + wi('lock') + '</span>'
    +     '<span class="wb on" data-cpt="sig" id="cp-sig" title="Signature on / off">' + wi('sign') + '</span>'
    +     '<span class="wpop"><span class="wb" data-w="pop" data-pop="more" data-cpt="more" title="More options">' + wi('more') + '</span>'
    +       '<span class="wmenu up" data-pal="more"><span class="mi" data-cpmore="urgent">Mark as urgent</span><span class="mi" data-cpmore="receipt">Request a read receipt</span><span class="mi" data-cpmore="label">Label on send</span><span class="mi" data-cpmore="plain">Plain-text mode</span><span class="mi" data-cpmore="print">Print</span></span></span>'
    +   '</span>'
    +   '<span style="flex:1"></span><span class="mut" id="cp-saved" style="font-size:11.5px"></span>'
    +   '<span class="wb" id="cp-discard" title="Discard draft">' + wi('trash') + '</span>'
    + '</div></div>';
}
function cpEnsure(){
  var w = document.getElementById("cp-panel");
  if(!w){ w = document.createElement("div"); w.className = "cmpw"; w.id = "cp-panel"; w.hidden = true; w.innerHTML = cpWindowHtml(); document.body.appendChild(w); cpWire(w); }
  return w;
}
function cpTextToHtml(t){ return '<div>' + esc(t || "").replace(/\n/g, "<br>") + '</div>'; }
function cpOpen(draft, opts){
  var w = cpEnsure(); opts = opts || {}; ACTIVE_ED = "cp-body"; CPRANGE = null;
  CPID = draft ? draft.id : null;
  CPFILES = draft && draft.att ? [["quote.pdf","PDF","96 KB"]] : (opts.files || []).slice(); CPATT = CPFILES.length > 0;
  CP = {to: draft ? [draft.from] : (opts.to ? [opts.to] : []), cc: [], bcc: [], sig: true, conf: false};
  var set = function(id, v){ var e = document.getElementById(id); if(e) e.value = v || ""; };
  set("cp-to", ""); set("cp-cc", ""); set("cp-bcc", "");
  set("cp-subj", draft ? draft.subj.replace(/^Draft: /, "") : (opts.subject || ""));
  set("cp-chan", draft ? draft.chan : (opts.chan || "Email")); set("cp-desk", draft ? (draft.desk || "") : (opts.desk || "")); set("cp-pri", draft ? draft.pri : "Normal");
  var body = document.getElementById("cp-body");
  var txt = draft && draft.thread && draft.thread[0] ? draft.thread[0].txt.replace(/^Draft — /, "") : (opts.body || "");
  body.innerHTML = (txt ? cpTextToHtml(txt) : '<div><br></div>') + sigHtml();
  setTxt("cp-title", draft ? "Draft — " + draft.id : (opts.title || "New message"));
  ["cp-cc-row","cp-bcc-row","cp-smart"].forEach(function(id){ var e = document.getElementById(id); if(e) e.hidden = true; });
  var fm = document.getElementById("cp-fmt"); fm.hidden = false; w.querySelector('[data-cpt="fmt"]').classList.add("on");
  document.getElementById("cp-sig").classList.add("on"); document.getElementById("cp-conf").classList.remove("on");
  w.classList.remove("min"); w.classList.remove("max"); cpDim(false); cpClosePops();
  cpChips(); cpAttRender(); cpTplMenu(); setTxt("cp-saved", "");
  w.hidden = false;
  setTimeout(function(){ var f = CP.to.length ? (document.getElementById("cp-subj").value ? body : document.getElementById("cp-subj")) : document.getElementById("cp-to"); f.focus(); if(f === body) cpCaretEnd(); }, 20);
}
function cpDim(on){
  var d = document.getElementById("gmc-dim");
  if(!d){ d = document.createElement("div"); d.id = "gmc-dim"; document.body.appendChild(d); }
  d.hidden = !on;
}
function cpChips(){
  [["to","cp-tochips"],["cc","cp-ccchips"],["bcc","cp-bccchips"]].forEach(function(p){
    var el = document.getElementById(p[1]); if(!el || !CP) return;
    el.innerHTML = CP[p[0]].map(function(a, i){ return '<span class="chip"><i>' + esc(a.replace(/[^A-Za-z ]/g, "").split(" ").filter(Boolean).slice(0, 2).map(function(x){ return x[0]; }).join("").toUpperCase() || "?") + '</i>' + esc(a) + '<b data-unchip="' + p[0] + ':' + i + '">×</b></span>'; }).join("");
  });
}
function cpAttRender(){
  var el = document.getElementById("cp-attach-note"); if(!el) return;
  el.innerHTML = CPFILES.map(function(f, i){ return '<span class="att"><span class="ft" style="background:' + (FT_COL[f[1]] || FT_COL.FILE) + '">' + esc(f[1]) + '</span><span style="min-width:0"><span class="fn">' + esc(f[0]) + '</span><br><span class="fs">' + esc(f[2]) + '</span></span><b data-cpatt-x="' + i + '" title="Remove">×</b></span>'; }).join("");
  CPATT = CPFILES.length > 0;
}
function cpDesk(){ return (document.getElementById("cp-desk") || {value:""}).value || routeDesk((document.getElementById("cp-subj") || {value:""}).value); }
function cpTplMenu(){
  var m = document.getElementById("cp-tplmenu"); if(!m) return;
  m.innerHTML = '<span class="plbl">Insert template · ' + esc(cpDesk()) + ' desk</span>' + cannedFor(cpDesk()).map(function(c){ return '<span class="mi" data-cpcan="' + esc(c) + '">' + esc(c) + '</span>'; }).join("")
    + '<span class="mi" data-cpcan="__save"><b>Save this message as a template</b></span>';
}
function cpCanned(){ cpTplMenu(); }
function cpClosePops(){ var w = document.getElementById("cp-panel"); if(w) w.querySelectorAll(".wpop.open").forEach(function(p){ p.classList.remove("open"); }); }
function cpBodyText(ed){
  var c = ed.cloneNode(true); c.querySelectorAll(".wsig,.qt").forEach(function(x){ x.remove(); });
  var t = document.createElement("textarea");
  t.innerHTML = c.innerHTML.replace(/<br\s*\/?>/gi, "\n").replace(/<\/(div|p|li|blockquote|h\d)>/gi, "\n").replace(/<li[^>]*>/gi, "• ").replace(/<[^>]+>/g, "");
  return t.value.replace(/ /g, " ").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}
function cpSetBody(ed, text){ var sig = ed.querySelector(".wsig"); ed.innerHTML = cpTextToHtml(text); if(sig) ed.appendChild(sig); }
function cpInsertAtTop(ed, text){ var cur = cpBodyText(ed); cpSetBody(ed, cur ? text + "\n\n" + cur : text); }
function cpRestoreSel(){
  var body = edEl(); if(!body) return;
  var sel = window.getSelection();
  if(CPRANGE && body.contains(CPRANGE.commonAncestorContainer) && !(CPRANGE.commonAncestorContainer.closest && CPRANGE.commonAncestorContainer.closest(".wsig"))){ sel.removeAllRanges(); sel.addRange(CPRANGE); body.focus(); return; }
  body.focus();
  var first = body.firstChild, r = document.createRange();
  if(first && !(first.classList && first.classList.contains("wsig"))){ r.selectNodeContents(first); r.collapse(false); } else { r.setStart(body, 0); r.collapse(true); }
  sel.removeAllRanges(); sel.addRange(r);
}
function cpCaretEnd(){
  var body = edEl(), sel = window.getSelection(), r = document.createRange();
  var last = null; for(var i = body.childNodes.length - 1; i >= 0; i--){ var n = body.childNodes[i]; if(!(n.classList && n.classList.contains("wsig"))){ last = n; break; } }
  if(!last){ last = document.createElement("div"); last.innerHTML = "<br>"; body.insertBefore(last, body.firstChild); }
  r.selectNodeContents(last); r.collapse(false); sel.removeAllRanges(); sel.addRange(r); CPRANGE = r.cloneRange();
}
function cpInsertHtml(html){
  cpRestoreSel();
  try{ document.execCommand("insertHTML", false, html); }catch(e){ edEl().innerHTML += html; }
  var sel = window.getSelection(); if(sel.rangeCount) CPRANGE = sel.getRangeAt(0).cloneRange();
}
function cpExec(cmd, v){ cpRestoreSel(); document.execCommand(cmd, false, v == null ? null : v); var sel = window.getSelection(); if(sel.rangeCount) CPRANGE = sel.getRangeAt(0).cloneRange(); }
function cpSmartSuggest(){
  var ed = edEl(), bar = document.getElementById(SMARTBAR[ACTIVE_ED]); if(!ed || !bar) return;
  var sel = window.getSelection(); if(!sel.rangeCount){ bar.hidden = true; return; }
  var node = sel.anchorNode; if(!node || !ed.contains(node)){ bar.hidden = true; return; }
  var r = sel.getRangeAt(0).cloneRange(); r.setStart(ed, 0);
  var f = r.cloneContents(); f.querySelectorAll(".wsig,.qt").forEach(function(x){ x.remove(); });
  var text = (f.textContent || "").toLowerCase();
  var frag = text.split(/[.!?]\s*/).pop().replace(/^\s+/, "");
  var hit = frag.length >= 4 && SMART.filter(function(s){ return (s[0].indexOf(frag) === 0 && frag.length >= Math.min(6, s[0].length)) || (frag.length >= s[0].length && frag.slice(-s[0].length) === s[0]); })[0];
  if(!hit){ bar.hidden = true; return; }
  var rest = frag.length >= hit[0].length ? hit[1] : hit[0].slice(frag.length) + hit[1];
  bar.querySelector(".t").textContent = rest; bar.setAttribute("data-rest", rest); bar.hidden = false;
}
function cpAcceptSmart(){ var bar = document.getElementById(SMARTBAR[ACTIVE_ED]); if(!bar || bar.hidden) return; cpExec("insertText", bar.getAttribute("data-rest")); bar.hidden = true; }
function cpAiWrite(mode, who){
  var ed = edEl(); who = who || (CP && CP.to[0] ? CP.to[0] : "there");
  var t = cpBodyText(ed);
  if(!t) t = "Thank you for your enquiry. We can source this from a licensed partner and will come back with a quote by " + fmtDate(new Date(TODAY.getTime() + 2*864e5)) + ".";
  var sentences = t.replace(/\n+/g, " ").split(/(?<=[.!?])\s+/).filter(Boolean);
  var out = {
    formal: "Dear " + who + ",\n\n" + t.replace(/^(hi|hello|dear)[^\n]*\n+/i, "") + "\n\nWith kind regards,",
    friendly: "Hi " + who + ",\n\nHope you are doing well. " + t.replace(/^(hi|hello|dear)[^\n]*\n+/i, "") + "\n\nThanks and best,",
    short: sentences.slice(0, 2).join(" "),
    long: t + "\n\nFor reference: the medicine ships on a validated 2–8 °C lane with a temperature report, QA releases every batch before dispatch, and the quote holds for 7 days while the FX lock is live. Happy to set up a short call if that helps.",
    fix: sentences.map(function(s){ return s.charAt(0).toUpperCase() + s.slice(1); }).join(" ").replace(/\s+,/g, ",").replace(/\bi\b/g, "I").replace(/\s{2,}/g, " "),
    bullets: sentences.map(function(s){ return "• " + s.replace(/[.]$/, ""); }).join("\n")
  }[mode];
  cpSetBody(ed, out);
  toast({formal:"Formal tone", friendly:"Friendlier tone", short:"Shortened", long:"Expanded with the service details", fix:"Spelling and grammar fixed", bullets:"Bullet points"}[mode] + " — read it before you send");
}
function cpAddr(k){
  var inp = document.getElementById(k === "to" ? "cp-to" : k === "cc" ? "cp-cc" : "cp-bcc"); if(!inp) return;
  var v = inp.value.trim(); if(v){ CP[k].push(v); inp.value = ""; cpChips(); }
}
function cpClose(discard){
  var w = document.getElementById("cp-panel"); if(!w) return;
  var c = cpCollect();
  if(!discard && (c.to || c.subj || c.body)){ cpStore(true, true); return; }
  w.hidden = true; w.classList.remove("max"); cpDim(false); cpClosePops(); CPID = null; CPATT = false; CPFILES = [];
}
function cpCollect(){
  var g = function(id){ var e = document.getElementById(id); return e ? e.value.trim() : ""; };
  var body = document.getElementById("cp-body");
  var to = CP ? CP.to.concat(g("cp-to") ? [g("cp-to")] : []) : [];
  var cc = CP ? CP.cc.concat(g("cp-cc") ? [g("cp-cc")] : []) : [];
  return {to:to.join(", "), cc:cc.join(", "), chan:g("cp-chan") || "Email", desk:g("cp-desk"), pri:g("cp-pri") || "Normal", subj:g("cp-subj"),
          body: body ? cpBodyText(body) : "", sig: !!(body && body.querySelector(".wsig"))};
}
function cpStore(asDraft, quiet, when){
  var c = cpCollect();
  if(!asDraft && !c.to){ toast("Who is it to?"); document.getElementById("cp-to").focus(); return; }
  if(!asDraft && !c.subj && !c.body){ toast("Write a subject or a message"); return; }
  var desk = c.desk || routeDesk(c.subj + " " + c.body);
  var existing = CPID ? S.tickets.filter(function(x){ return x.id === CPID; })[0] : null;
  var t = existing || {id:"TK-" + (59200 + Math.floor(Math.random()*700)), unread:false, star:false, labels:[]};
  t.from = c.to || "(no recipient)"; t.who = c.chan === "Internal" ? "Internal" : "Contact"; t.chan = c.chan === "Phone call (log)" ? "Phone" : c.chan;
  t.desk = desk; t.pri = c.pri; t.att = CPATT; t.time = when ? "Sched." : nowStr();
  t.subj = (asDraft ? "Draft: " : "") + (c.subj || "(no subject)");
  t.prev = c.body.slice(0, 70) + (c.body.length > 70 ? "…" : "");
  t.folder = asDraft ? "drafts" : (c.chan === "Internal" ? "inbox" : "sent");
  if(!asDraft && c.chan === "Internal"){ t.unread = true; t.who = "Internal"; }
  t.thread = [{who: c.chan === "Internal" ? "Internal note" : SIG.name, side:"out", chan:t.chan, at: asDraft ? (when ? "scheduled " + when : "draft") : nowStr(),
               txt:(asDraft ? "Draft — " : "") + (c.body || "(empty)") + (c.sig && !asDraft ? sigText() : "") + (c.cc ? "\n\nCc: " + c.cc : "")}];
  if(!existing) S.tickets.unshift(t);
  if(!asDraft && c.chan === "Internal") notify("Internal note — " + t.subj, "for the " + desk + " desk", "tickets");
  save();
  var w = document.getElementById("cp-panel"); if(w){ w.hidden = true; w.classList.remove("max"); } cpDim(false); cpClosePops();
  CPID = null; CPATT = false; CPFILES = [];
  renderLabels(); renderList();
  toast(when ? "Scheduled — goes out " + when + ", held in Drafts" : asDraft ? (quiet ? "Draft saved — find it under Drafts" : "Saved to Drafts")
    : (c.chan === "Internal" ? "Note sent to the " + desk + " desk" : "Sent on " + t.chan + " — threaded on the " + desk + " desk"));
}
function cpSched(v){
  var d = new Date(TODAY.getTime() + 864e5), when;
  if(v === "tmr") when = fmtDate(d) + " 08:00"; else if(v === "tmra") when = fmtDate(d) + " 13:00";
  else if(v === "mon"){ var m = new Date(TODAY.getTime()); do{ m = new Date(m.getTime() + 864e5); }while(m.getDay() !== 1); when = "Mon " + fmtDate(m) + " 08:00"; }
  else { var inp = document.getElementById("cp-when"); if(!inp || !inp.value){ toast("Pick a date and time first"); return; } when = inp.value.replace("T", " "); }
  cpStore(true, true, when);
}
/* wiring — all inside the window, so nothing leaks into the page handler */
function cpWire(w){
  var ed = function(){ return document.getElementById("cp-body"); };
  w.addEventListener("mousedown", function(e){
    ACTIVE_ED = "cp-body";
    if(e.target.closest(".wfmt,.cmpf,.cai,.wpal .em") && !e.target.closest("select,input,textarea,[contenteditable]")) e.preventDefault();
  });
  w.addEventListener("click", function(e){
    var el;
    if((el = e.target.closest("[data-w='pop']"))){ var p = el.closest(".wpop"), was = p.classList.contains("open"); cpClosePops(); if(!was){ p.classList.add("open"); var f = p.querySelector(".wmenu input, .wpal input"); if(f) setTimeout(function(){ f.focus(); }, 10); } e.stopPropagation(); return; }
    var keep = e.target.closest(".lk, .pick");
    if(!keep) cpClosePops();
    if((el = e.target.closest("[data-fmt]"))){ cpExec(el.getAttribute("data-fmt")); return; }
    if((el = e.target.closest("[data-w='size']"))){ cpExec("fontSize", el.getAttribute("data-v")); return; }
    if((el = e.target.closest("[data-w='forecolor'],[data-w='hilitecolor']"))){ cpExec(el.getAttribute("data-w"), el.getAttribute("data-v")); return; }
    if((el = e.target.closest("[data-w='align']"))){ var cur = el.getAttribute("data-al") || "left", nx = {left:"center", center:"right", right:"left"}[cur]; el.setAttribute("data-al", nx); cpExec("justify" + nx.charAt(0).toUpperCase() + nx.slice(1)); el.title = "Align " + nx; return; }
    if((el = e.target.closest("[data-w='quote']"))){ cpExec("formatBlock", "blockquote"); return; }
    if((el = e.target.closest("[data-w='ai']"))){ cpAiWrite(el.getAttribute("data-v")); return; }
    if((el = e.target.closest("[data-cpcan]"))){
      var cc2 = el.getAttribute("data-cpcan"), cs2 = document.getElementById("cp-subj");
      if(cc2 === "__save"){ toast("Saved as a template for the " + cpDesk() + " desk"); return; }
      cpInsertAtTop(ed(), CANNED_TXT[cc2] || cc2); if(cs2 && !cs2.value) cs2.value = cc2; toast("Template inserted — edit it before sending"); return;
    }
    if((el = e.target.closest("[data-cpemoji]"))){ cpInsertHtml(el.getAttribute("data-cpemoji") + " "); return; }
    if((el = e.target.closest("#cp-linkgo"))){
      var lt = (document.getElementById("cp-linktxt").value || "").trim(), lu = (document.getElementById("cp-linkurl").value || "").trim();
      if(!lu){ toast("Paste the address first"); return; }
      cpInsertHtml('<a href="' + esc(lu) + '">' + esc(lt || lu) + '</a> '); cpClosePops(); return;
    }
    if((el = e.target.closest("[data-cpt='fmt']"))){ var fm = document.getElementById("cp-fmt"); fm.hidden = !fm.hidden; el.classList.toggle("on", !fm.hidden); return; }
    if((el = e.target.closest("[data-cpt='sig']"))){ el.classList.toggle("on"); var s = ed().querySelector(".wsig"); if(s) s.remove(); else ed().insertAdjacentHTML("beforeend", sigHtml()); return; }
    if((el = e.target.closest("#cp-attach"))){ CPFILES.push(CPFILES.length ? ["temperature-report.pdf","PDF","320 KB"] : ["quote.pdf","PDF","96 KB"]); cpAttRender(); toast("Attached"); return; }
    if((el = e.target.closest("[data-cpdoc]"))){ var d = CP_DOCS[+el.getAttribute("data-cpdoc")]; CPFILES.push(d.slice()); cpAttRender(); toast("Attached from the case documents"); return; }
    if((el = e.target.closest("[data-cpatt-x]"))){ CPFILES.splice(+el.getAttribute("data-cpatt-x"), 1); cpAttRender(); return; }
    if((el = e.target.closest("[data-w='img']"))){ toast("Inline images are pasted or dropped into the editor"); return; }
    if((el = e.target.closest("[data-w='conf']"))){ el.classList.toggle("on"); CP.conf = el.classList.contains("on"); toast(CP.conf ? "Confidential mode — no forwarding, copying, printing or download · expires in 7 days" : "Confidential mode off"); return; }
    if((el = e.target.closest("[data-cpmore]"))){
      var mo = el.getAttribute("data-cpmore");
      if(mo === "urgent"){ document.getElementById("cp-pri").value = "Urgent"; toast("Marked urgent"); }
      else if(mo === "receipt") toast("Read receipt will be requested");
      else if(mo === "label") toast("The " + cpDesk() + " desk label will be applied on send");
      else if(mo === "plain"){ cpSetBody(ed(), cpBodyText(ed())); toast("Formatting removed"); }
      else if(mo === "print") window.print();
      return;
    }
    if((el = e.target.closest("[data-unchip]"))){ var pr = el.getAttribute("data-unchip").split(":"); CP[pr[0]].splice(+pr[1], 1); cpChips(); return; }
    if((el = e.target.closest("#cp-cc-btn"))){ document.getElementById("cp-cc-row").hidden = false; el.hidden = true; document.getElementById("cp-cc").focus(); return; }
    if((el = e.target.closest("#cp-bcc-btn"))){ document.getElementById("cp-bcc-row").hidden = false; el.hidden = true; document.getElementById("cp-bcc").focus(); return; }
    if((el = e.target.closest("#cp-min"))){ w.classList.toggle("min"); w.classList.remove("max"); cpDim(false); return; }
    if((el = e.target.closest("#cp-max"))){ w.classList.toggle("max"); w.classList.remove("min"); cpDim(w.classList.contains("max")); return; }
    if((el = e.target.closest("#cp-x"))){ cpClose(false); return; }
    if((el = e.target.closest("#cp-discard"))){ cpClose(true); toast("Discarded"); return; }
    if((el = e.target.closest("#cp-send"))){ cpAddr("to"); cpStore(false); return; }
    if((el = e.target.closest("[data-cpsend]"))){
      var sm = el.getAttribute("data-cpsend"); cpAddr("to");
      if(sm === "sched" || sm === "pick"){ cpSched(sm === "pick" ? "pick" : el.getAttribute("data-v")); return; }
      cpStore(false); if(sm === "close") toast("Sent and closed"); else toast("Sent — waiting on the customer"); return;
    }
    if((el = e.target.closest("#cp-hd")) && w.classList.contains("min")){ w.classList.remove("min"); return; }
  });
  w.addEventListener("change", function(e){
    e.stopPropagation();
    var s = e.target.closest("select[data-w]"); if(s){ cpExec(s.getAttribute("data-w") === "font" ? "fontName" : "fontSize", s.value || "inherit"); }
    if(e.target.id === "cp-desk" || e.target.id === "cp-chan") cpTplMenu();
  });
  ["cp-to","cp-cc","cp-bcc"].forEach(function(id){ var inp = document.getElementById(id); var k = id === "cp-to" ? "to" : id === "cp-cc" ? "cc" : "bcc";
    inp.addEventListener("keydown", function(e){
      if(e.key === "Enter" || e.key === "," || (e.key === "Tab" && inp.value.trim())){ e.preventDefault(); cpAddr(k); }
      if(e.key === "Backspace" && !inp.value){ CP[k].pop(); cpChips(); }
    });
  });
  document.getElementById("cp-subj").addEventListener("input", cpTplMenu);
  var body = ed();
  body.addEventListener("mousedown", function(e){ if(e.target === body || e.target.closest(".wsig")){ e.preventDefault(); body.focus(); cpCaretEnd(); } });
  body.addEventListener("input", function(){ cpSmartSuggest(); var s = document.getElementById("cp-saved"); s.textContent = "Draft saved"; clearTimeout(s._t); s._t = setTimeout(function(){ s.textContent = ""; }, 1500); });
  body.addEventListener("keydown", function(e){
    if(e.key === "Tab"){ var bar = document.getElementById("cp-smart"); if(bar && !bar.hidden){ e.preventDefault(); cpAcceptSmart(); } }
    if(e.key === "Escape"){ var b2 = document.getElementById("cp-smart"); if(b2 && !b2.hidden){ b2.hidden = true; e.stopPropagation(); } }
    if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k"){ e.preventDefault(); w.querySelector("[data-pop='link']").click(); }
  });
  w.addEventListener("keydown", function(e){
    if((e.ctrlKey || e.metaKey) && e.key === "Enter"){ e.preventDefault(); cpAddr("to"); cpStore(false); }
    if(e.key === "Escape"){ if(w.querySelector(".wpop.open")){ cpClosePops(); return; } if(w.classList.contains("max")){ w.classList.remove("max"); cpDim(false); return; } cpClose(false); }
  });
}


/* ---------- generic actions: every button and link does something real ----------
   Three primitives: a form sheet built from the nearest table (add / edit rows), a printable
   document built from the nearest card (export / view / history), and a state change on the
   nearest row (hold / release / submit …) with a log line and, where it crosses desks, a ticket. */
var PAGE = 1, PAGE_SIZE = 24;
var GF = null;   /* the open form: {title, fields, onSave} */
function curScreen(){ var s = document.querySelector(".screen:not([hidden])"); return s ? s.getAttribute("data-screen") : ""; }
function cardOf(el){ return el.closest(".card") || el.closest(".screen"); }
function tableOf(el){ var c = cardOf(el); var t = c && c.querySelector("table"); if(!t){ var sc = el.closest(".screen"); t = sc && sc.querySelector("table"); } return t; }
function cardTitle(el){ var c = cardOf(el), h = c && c.querySelector("h2, h1, .ch h2"); return h ? h.textContent.trim() : (document.getElementById("title") || {textContent:""}).textContent; }
function headersOf(t){ return t ? [].map.call(t.querySelectorAll("thead th"), function(th){ return th.textContent.trim(); }) : []; }
function gfEnsure(){
  var w = document.getElementById("gform");
  if(!w){
    w = document.createElement("div"); w.id = "gform"; w.hidden = true;
    w.innerHTML = '<div class="gf-sheet"><div class="gf-hd"><h2 id="gf-title"></h2><span class="dim" id="gf-sub"></span><span class="gf-x" id="gf-x">&times;</span></div>'
      + '<div class="gf-body" id="gf-body"></div>'
      + '<div class="gf-ft"><span class="dim" id="gf-note"></span><span style="margin-left:auto;display:flex;gap:8px"><span class="btn" id="gf-cancel">Cancel</span><span class="btn pri" id="gf-save">Save</span></span></div></div>';
    document.body.appendChild(w);
    w.addEventListener("click", function(e){
      if(e.target.closest("#gf-x") || e.target.closest("#gf-cancel") || e.target === w){ gfClose(); return; }
      if(e.target.closest("#gf-save")){ gfSave(); return; }
    });
    w.addEventListener("keydown", function(e){ if(e.key === "Escape") gfClose(); if(e.key === "Enter" && e.target.tagName === "INPUT"){ e.preventDefault(); gfSave(); } });
  }
  return w;
}
/* fields: [{k, label, value, type:'text'|'select'|'textarea'|'date', options}] */
function gfOpen(title, sub, fields, onSave, saveLabel, note){
  var w = gfEnsure(); GF = {fields:fields, onSave:onSave};
  setTxt("gf-title", title); setTxt("gf-sub", sub || ""); setTxt("gf-note", note || "");
  document.getElementById("gf-save").textContent = saveLabel || "Save";
  document.getElementById("gf-body").innerHTML = '<div class="frm">' + fields.map(function(f, i){
    var inner;
    if(f.type === "select") inner = '<select data-gf="' + i + '">' + (f.options || []).map(function(o){ return '<option' + (o === f.value ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join("") + '</select>';
    else if(f.type === "textarea") inner = '<textarea data-gf="' + i + '" rows="3" style="width:100%;border:1px solid #dde3ec;border-radius:9px;padding:9px 11px;font:inherit;font-size:13px">' + esc(f.value || "") + '</textarea>';
    else inner = '<input data-gf="' + i + '" type="' + (f.type === "date" ? "date" : "text") + '" value="' + esc(f.value || "") + '" placeholder="' + esc(f.ph || "") + '">';
    return '<label class="fld' + (f.wide ? " w2" : f.type === "textarea" ? " w2" : "") + '"><span class="lbl">' + esc(f.label) + '</span>' + inner + '</label>';
  }).join("") + '</div>';
  w.hidden = false;
  var first = w.querySelector("input, select, textarea"); if(first) setTimeout(function(){ first.focus(); }, 20);
}
function gfClose(){ var w = document.getElementById("gform"); if(w) w.hidden = true; GF = null; }
function gfSave(){
  if(!GF) return;
  var vals = {}; var missing = null;
  GF.fields.forEach(function(f, i){ var e = document.querySelector('[data-gf="' + i + '"]'); var v = e ? e.value.trim() : ""; vals[f.k] = v; if(f.req && !v && !missing) missing = f.label; });
  if(missing){ toast(missing + " is needed"); return; }
  var fn = GF.onSave; gfClose(); if(fn) fn(vals);
}
function statusTag(text, tone){ return '<span class="tag ' + (tone || "t-blue") + '">' + esc(text) + '</span>'; }
function todayShort(){ return fmtDate(TODAY).slice(0, 6); }
function rowFromFields(headers, vals, fields){
  return '<tr class="fresh">' + headers.map(function(h, i){
    var f = fields.filter(function(x){ return x.label === h; })[0];
    if(f) return '<td>' + (f.tag ? statusTag(vals[f.k] || f.value, f.tone) : esc(vals[f.k] || "")) + '</td>';
    if(/^(status|state)$/i.test(h)) return '<td>' + statusTag("New", "t-blue") + '</td>';
    if(/^(date|when|raised|created|logged|opened)/i.test(h)) return '<td>' + todayShort() + '</td>';
    if(/^(owner|by|who)$/i.test(h)) return '<td>' + esc(ME.name) + '</td>';
    return '<td></td>';
  }).join("") + '</tr>';
}
function logLine(card, text){
  if(!card) return;
  var box = card.querySelector(".actlog");
  if(!box){ box = document.createElement("div"); box.className = "actlog"; card.appendChild(box); }
  box.insertAdjacentHTML("afterbegin", '<div><b>' + nowStr() + '</b> · ' + esc(text) + ' · ' + esc(ME.name) + '</div>');
}
function rowTag(row, text, tone){
  var tg = row && row.querySelector(".tag"); if(!tg) return false;
  tg.className = "tag " + tone; tg.textContent = text; return true;
}
function addFormFor(el, title, extra){
  var t = tableOf(el), headers = headersOf(t).filter(function(h){ return h && !/^(actions?|&nbsp;|)$/i.test(h); });
  if(!headers.length) headers = ["Name", "Detail"];
  var fields = headers.slice(0, 7).map(function(h, i){
    var f = {k:"f" + i, label:h, req:i === 0};
    if(/^(status|state)$/i.test(h)){ f.type = "select"; f.options = ["New", "Open", "In progress", "Pending", "Approved"]; f.tag = true; f.tone = "t-blue"; }
    else if(/(date|when|due|expires|valid)/i.test(h)) f.type = "date";
    else if(/(note|comment|detail|description|reason)/i.test(h)) f.type = "textarea";
    return f;
  });
  (extra || []).forEach(function(x){ fields.push(x); });
  gfOpen(title, "on " + cardTitle(el), fields, function(vals){
    var tb = t && t.querySelector("tbody");
    if(tb) tb.insertAdjacentHTML("afterbegin", rowFromFields(headersOf(t), vals, fields));
    logLine(cardOf(el), title + ": " + (vals.f0 || ""));
    toast(title + " — saved" + (vals.f0 ? ": " + vals.f0 : ""));
    if(GA_AFTER[title]) GA_AFTER[title](vals, el);
  }, /^(log|report|raise|apply|submit)/i.test(title) ? title.split(" ")[0] : "Save");
}
function editFormFor(el){
  var row = el.closest("tr"), t = tableOf(el);
  if(!row){ addFormFor(el, "Edit " + cardTitle(el).toLowerCase()); return; }
  var headers = headersOf(t), cells = [].slice.call(row.querySelectorAll("td"));
  var fields = []; cells.forEach(function(td, i){ var h = headers[i]; if(!h || /^(actions?)$/i.test(h) || td.querySelector(".btn,.act")) return; fields.push({k:"c" + i, label:h, value:td.textContent.trim(), wide:i === 0}); });
  gfOpen("Edit", (cells[0] ? cells[0].textContent.trim() : ""), fields, function(vals){
    fields.forEach(function(f){ var td = cells[+f.k.slice(1)]; if(td && !td.querySelector(".tag")) td.textContent = vals[f.k]; });
    logLine(cardOf(el), "Edited " + (cells[0] ? cells[0].textContent.trim() : "")); toast("Saved");
  });
}
function docFor(el, title){
  var c = cardOf(el), t = tableOf(el);
  var body = "";
  if(t){ var clone = t.cloneNode(true); clone.querySelectorAll(".btn,.act,.cb,.st").forEach(function(x){ x.remove(); }); clone.removeAttribute("style"); body = '<div class="doctable">' + clone.outerHTML + '</div>'; }
  else if(c){ var cc = c.cloneNode(true); cc.querySelectorAll(".btn,.act,.ch").forEach(function(x){ x.remove(); }); body = '<div style="font-size:12.5px;line-height:1.6">' + cc.innerHTML + '</div>'; }
  openDoc(title, docHead(title, ((document.getElementById("title") || {}).textContent || cardTitle(el)) + " · " + (typeof COMPANY !== "undefined" ? COMPANY : "Apple Globalcare"), "Generated " + fmtDate(TODAY) + " " + nowStr() + "<br>by " + ME.name) + body
    + '<div class="dim" style="margin-top:18px;font-size:11px">Printed from the CRM · ' + esc(title) + ' · for internal use</div>');
  logLine(c, title + " generated");
}
function ticketFor(subj, desk, chan, prev, pri){
  raiseTicket({id:"TK-" + (59900 + Math.floor(Math.random()*90)), from:ME.name, who:"Internal", subj:subj, prev:prev || "", chan:chan || "Internal", desk:desk, unread:true, star:false, att:false, time:nowStr(), pri:pri || "Normal", folder:"inbox", labels:[],
    thread:[{who:ME.name, side:"out", chan:chan || "Internal", at:nowStr(), txt:prev || subj}]});
  save();
}
/* what happens after a form on certain titles */
var GA_AFTER = {
  "Report a breach": function(v){ ticketFor("Data breach reported — " + (v.f0 || ""), "Legal", "Internal", "72-hour clock started · DPO to assess", "Urgent"); ticketFor("Breach containment — " + (v.f0 || ""), "IT & systems", "Internal", "Isolate and preserve logs", "Urgent"); },
  "Log a return": function(v){ ticketFor("Return logged — " + (v.f0 || ""), "Quality", "Internal", "Quarantine on receipt, QA decision needed"); },
  "Start recall": function(v){ ticketFor("Recall started — " + (v.f0 || ""), "Quality", "Internal", "Notify every consignee, hold remaining stock", "Urgent"); ticketFor("Recall — customer notices", "Support", "Internal", "Patients and pharmacies to be called today", "High"); },
  "Log an event": function(v){ ticketFor("Adverse event — " + (v.f0 || ""), "Pharmacy", "Internal", "Pharmacovigilance assessment within 24 h", "High"); },
  "Raise PO": function(v){ ticketFor("Purchase order raised — " + (v.f0 || ""), "Accounts", "Internal", "Approve and release payment"); },
  "New invoice": function(v){ ticketFor("Invoice raised — " + (v.f0 || ""), "Accounts", "Email", "Sent to the customer, due in 30 days"); },
  "Apply for leave": function(v){ ticketFor("Leave request — " + ME.name, "HR & admin", "Internal", (v.f0 || "") + " · awaiting HR approval"); },
  "New application": function(v){ ticketFor("Import permit application — " + (v.f0 || ""), "Processing", "Internal", "Broker to lodge with customs"); },
  "Log a request": function(v){ ticketFor("Data subject request — " + (v.f0 || ""), "Legal", "Internal", "30-day statutory deadline"); },
  "New request": function(v){ ticketFor("Document request — " + (v.f0 || ""), "Quality", "Internal", "Controlled copy to issue"); },
  "Connect a channel": function(v){ notify("Channel connected — " + (v.f0 || ""), "routing live on the ticket desk", "routing"); },
  "Add channel": function(v){ notify("Order channel added — " + (v.f0 || ""), "orders will route to Processing", "channels"); }
};
/* state verbs on the nearest row */
var VERBS = [
  [/^place hold|^hold/i,            "On hold",    "t-amber", "placed on hold"],
  [/^release/i,                     "Released",   "t-green", "released"],
  [/^lock/i,                        "Locked",     "t-grey",  "locked"],
  [/^decline/i,                     "Declined",   "t-red",   "declined"],
  [/^submit|^send this|^send$/i,    "Submitted",  "t-blue",  "submitted"],
  [/^escalate/i,                    "Escalated",  "t-red",   "escalated"],
  [/^reject/i,                      "Rejected",   "t-red",   "rejected"],
  [/^move to quarantine/i,          "Quarantine", "t-amber", "moved to quarantine"],
  [/^book in/i,                     "Booked in",  "t-green", "booked in"],
  [/^retry/i,                       "Retried",    "t-green", "retried"],
  [/^swap|^delegate|^reassign/i,    "Reassigned", "t-blue",  "reassigned"],
  [/^match/i,                       "Matched",    "t-green", "matched"],
  [/^run/i,                         "Run",        "t-green", "run"],
  [/^save/i,                        "Saved",      "t-green", "saved"],
  [/^discard/i,                     "Discarded",  "t-grey",  "discarded"],
  [/^send reminder|^chase/i,        "Reminded",   "t-blue",  "reminder sent"],
  [/^approve|^confirm|^sign/i,      "Approved",   "t-green", "approved"],
  [/^rebuild/i,                     "Rebuilt",    "t-green", "rebuilt"]
];
function genericAction(el){
  var label = el.textContent.trim().replace(/\s+/g, " "), first = label.split(" · ")[0], scr = curScreen(), card = cardOf(el), row = el.closest("tr");
  /* paging on the ticket list */
  if(label === "‹" || label === "›"){ var tot = visible().length, pages = Math.max(1, Math.ceil(tot / PAGE_SIZE)); PAGE = Math.min(pages, Math.max(1, PAGE + (label === "›" ? 1 : -1))); renderList(); return; }
  /* navigation by label */
  var NAV = [[/open the case/i, "cases"], [/open rfq/i, "sourcing"], [/^payroll$/i, "payroll"], [/hr view/i, "hrdash"], [/leave management/i, "leavemgmt"], [/^documents$/i, "docs"], [/open a recall/i, "recalls"], [/^quotes$/i, "quotes"],
             [/open the inbox|open inbox/i, "tickets"], [/^reports$/i, "reports"], [/document vault/i, "docs"], [/^people$/i, "people"]];
  for(var i = 0; i < NAV.length; i++) if(NAV[i][0].test(first)){ window.__show(NAV[i][1]); return; }
  /* documents */
  if(/export|download|print|board pack|version history|full audit|^diary|alarm log|country register|^diff|broker view|view quote|view & print|^view |^open$|^open original|assemble pack|all countries|edit matrix|edit templates|permissions|configure|set limits/i.test(first)){
    docFor(el, /export/i.test(first) ? cardTitle(el) + " — export" : /download/i.test(first) ? "Download — " + cardTitle(el) : /print/i.test(first) ? cardTitle(el) : first + " — " + cardTitle(el)); return;
  }
  /* cross-desk sends */
  if(/^send to finance/i.test(first)){ rowTag(row, "With Finance", "t-blue"); ticketFor("Goods-in to invoice — " + (row ? row.querySelector("td").textContent.trim() : "receipt"), "Accounts", "Internal", "Receipt matched, ready to pay the supplier"); logLine(card, "Sent to Finance"); toast("Sent to Finance — ticket on the Accounts desk"); return; }
  if(/^move to quarantine/i.test(first)){ rowTag(row, "Quarantine", "t-amber"); ticketFor("Quarantined at goods-in — " + (row ? row.querySelector("td").textContent.trim() : "receipt"), "Quality", "Internal", "QA decision needed before release", "High"); logLine(card, "Moved to quarantine"); toast("Moved to quarantine — QA has the decision"); return; }
  if(/^reject at door/i.test(first)){ rowTag(row, "Rejected", "t-red"); ticketFor("Rejected at the door — " + (row ? row.querySelector("td").textContent.trim() : "receipt"), "Sourcing", "Internal", "Supplier to collect and re-ship", "High"); logLine(card, "Rejected at the door"); toast("Rejected — Sourcing told to arrange the re-ship"); return; }
  if(/^escalate to authority/i.test(first)){ rowTag(row, "With authority", "t-red"); ticketFor("Recall escalated to the authority", "Legal", "Internal", "Regulator notified, 24-hour acknowledgement expected", "Urgent"); logLine(card, "Escalated to the authority"); toast("Escalated — Legal and Quality notified"); return; }
  if(/^send this week/i.test(first)){ notify("Weekly review sent to Admin", "from the business head · " + fmtDate(TODAY), "admin"); logLine(card, "Weekly review sent to Admin"); toast("Sent to Admin — they will see it in notifications"); return; }
  if(/^email it to me/i.test(first)){ logLine(card, "Payslip emailed"); toast("Emailed to " + ME.name.split(" ")[0].toLowerCase() + "@appleglobalcare.com"); return; }
  if(/^ask a question/i.test(first)){ cpOpen(null, {to:"Apple Globalcare — patient services", subject:"Question from the patient portal", chan:"Email", desk:"Support", title:"Ask a question"}); return; }
  if(/^report a side effect/i.test(first)){ addFormFor(el, "Report a side effect", [{k:"sym", label:"What happened", type:"textarea", req:true}]); GA_AFTER["Report a side effect"] = function(v){ ticketFor("Side effect reported via the portal", "Pharmacy", "Portal", v.sym || "", "Urgent"); }; return; }
  if(/^draft notification/i.test(first)){ cpOpen(null, {to:"Data Protection Commission", subject:"Personal data breach notification — Article 33", chan:"Email", desk:"Legal", title:"Draft notification", body:"Dear Sir or Madam,\n\nApple Globalcare notifies a personal data breach discovered on " + fmtDate(TODAY) + ". Nature of the breach, categories and approximate number of data subjects, likely consequences and the measures taken follow below.\n\n"}); return; }
  if(/^record decision not to notify/i.test(first)){ addFormFor(el, "Decision not to notify", [{k:"why", label:"Reasoning (kept on file)", type:"textarea", req:true}]); return; }
  if(/^run simulation/i.test(first)){ docFor(el, "Routing simulation — last 500 tickets"); toast("Simulated on the last 500 tickets — 96% would route the same way"); return; }
  if(/^run payroll/i.test(first)){ gfOpen("Run payroll", "September 2026", [{k:"m", label:"Period", type:"select", options:["September 2026", "October 2026"], value:"September 2026"}, {k:"c", label:"Confirm", type:"select", options:["Dry run — show totals only", "Run and lock the period"]}], function(v){ logLine(card, "Payroll " + (v.c.indexOf("lock") >= 0 ? "run and locked" : "dry run") + " — " + v.m); notify("Payroll " + (v.c.indexOf("lock") >= 0 ? "run" : "dry run") + " — " + v.m, "48 payslips · Legal excluded (case to case)", "payroll"); toast(v.c.indexOf("lock") >= 0 ? "Payroll run — 48 payslips issued, period locked" : "Dry run complete — totals shown in the log"); }, "Run"); return; }
  if(/^edit$/i.test(first)){ editFormFor(el); return; }
  /* forms for anything that creates */
  if(/^(new|add|create|log|raise|report|book in|apply|draft|schedule|record|upload|connect|assemble|build|open builder|start|rebuild|swap|delegate|set limits|place hold)/i.test(first)){
    if(/^(swap|delegate|place hold|rebuild)/i.test(first)){ /* fall through to verbs */ }
    else { addFormFor(el, first.replace(/^open builder$/i, "New campaign").replace(/^build segment$/i, "New segment").replace(/^upload$/i, "Upload a document").replace(/^schedule$/i, "Schedule")); return; }
  }
  /* state verbs */
  for(var j = 0; j < VERBS.length; j++){
    if(VERBS[j][0].test(first)){
      var what = row ? row.querySelector("td").textContent.trim() : cardTitle(el);
      rowTag(row, VERBS[j][1], VERBS[j][2]); logLine(card, first + " — " + what); toast(what + " " + VERBS[j][3]);
      if(/^escalate/i.test(first)) notify("Escalated — " + what, "from " + cardTitle(el), scr);
      return;
    }
  }
  /* last resort: still do something visible */
  logLine(card, first); toast(first + " — done");
}


/* ---------- ticket composer (reply / internal note) ---------- */
var CMODE = "reply";
/* ---------- the reply box in a ticket gets the same writer as Compose ---------- */
var TDFILES = [];
function smartReplies(t){
  if(!t) return [];
  if(t.breached) return ["Apologies for the delay — I am on this now and will update you within the hour.", "Your parcel is with the courier; the tracking link follows in a moment.", "Let us set up a quick call so I can walk you through where it stands."];
  var d = (t.desk || "").toLowerCase();
  if(d === "pharmacy") return ["The pharmacist will review this and come back within 24 hours.", "Please send a photo of the pack with the batch number and expiry.", "Please stop the dose until the pharmacist has spoken to you."];
  if(d === "sales") return ["The quote follows by tomorrow with the pack origin and lead time.", "Which cycle is this for, and how many vials do you need?", "Thank you — we can source this from a licensed EU partner."];
  if(d === "quality") return ["CoA received, thank you — matching it to the batch now.", "Batch released; dispatch is scheduled on the cold-chain lane.", "We need the deviation report before release — can you send it today?"];
  if(d === "shipping") return ["Delivery is confirmed for Thursday between 10:00 and 12:00.", "The temperature report travels with the parcel and is sent to you on delivery.", "The courier will call the pharmacy 30 minutes before arrival."];
  if(d === "accounts") return ["Payment received, thank you — the receipt is attached.", "The payment link is valid for 48 hours; let me know if it has expired.", "The invoice is attached; 30-day terms as agreed."];
  return ["Noted, thank you.", "I will come back to you by " + fmtDate(new Date(TODAY.getTime() + 864e5)) + ".", "Let us discuss on a call."];
}
function tdWriterHtml(){
  return '<div class="comp-tabs">'
    + '<span class="ctab on" data-cmode="reply">Reply</span><span class="ctab" data-cmode="note">Internal note</span>'
    + '<span class="comp-note" id="td-comp-note"></span></div>'
    + '<div class="twr">'
    + '<div class="wreplies" id="td-replies"></div>'
    + '<div class="cai" style="padding-top:0">'
    +   '<span class="wpop"><span class="wb ai" data-w="pop" data-pop="ai" title="Help me write">' + wi('wand', 18) + '<span>Help me write</span>' + wi('down', 16) + '</span>'
    +   '<span class="wmenu" data-pal="ai">' + [["formal","Formalise"],["friendly","Friendlier"],["short","Shorten"],["long","Elaborate"],["fix","Fix spelling & grammar"],["bullets","Turn into bullet points"]]
          .map(function(a){ return '<span class="mi" data-w="ai" data-v="' + a[0] + '">' + wi('wand', 16) + a[1] + '</span>'; }).join('') + '</span></span>'
    +   '<span class="wpop"><span class="wb" data-w="pop" data-pop="tpl" title="Templates">' + wi('tpl') + '</span><span class="wmenu" data-pal="tpl" id="td-tplmenu"></span></span>'
    +   '<span class="copts"><label><span>Then</span><select id="td-after"><option value="">Keep open</option><option value="waiting">Wait on customer</option><option value="closed">Close the ticket</option></select></label></span>'
    + '</div>'
    + '<div class="wed" id="td-reply" contenteditable="true" spellcheck="true"></div>'
    + '<div class="wsmart" id="td-smart" hidden><span class="k">Tab</span><span class="t"></span><span class="mut">Smart Compose</span></div>'
    + '<div class="cfiles" id="td-files"></div>'
    + '<div class="wfmt" id="td-fmt">'
    +   '<span class="wb" data-fmt="undo" title="Undo">' + wi('undo') + '</span><span class="wb" data-fmt="redo" title="Redo">' + wi('redo') + '</span><span class="wsp"></span>'
    +   '<span class="wb" data-fmt="bold" title="Bold">' + wi('bold') + '</span><span class="wb" data-fmt="italic" title="Italic">' + wi('italic') + '</span><span class="wb" data-fmt="underline" title="Underline">' + wi('under') + '</span>'
    +   '<span class="wpop"><span class="wb col" data-w="pop" data-pop="col" title="Text colour">' + wi('color') + '<i class="cbar"></i></span>'
    +     '<span class="wpal" data-pal="col"><span class="plbl">Text colour</span><span class="prow">' + CP_COLORS.map(function(c){ return '<i data-w="forecolor" data-v="' + c + '" style="background:' + c + '"></i>'; }).join('') + '</span>'
    +     '<span class="plbl">Background colour</span><span class="prow">' + CP_HILITES.map(function(c){ return '<i data-w="hilitecolor" data-v="' + c + '" style="background:' + c + (c === 'transparent' ? ';border:1px dashed #c5cfdd' : '') + '"></i>'; }).join('') + '</span></span></span><span class="wsp"></span>'
    +   '<span class="wb" data-fmt="insertOrderedList" title="Numbered list">' + wi('ol') + '</span><span class="wb" data-fmt="insertUnorderedList" title="Bulleted list">' + wi('ul') + '</span>'
    +   '<span class="wb" data-fmt="outdent" title="Indent less">' + wi('outdent') + '</span><span class="wb" data-fmt="indent" title="Indent more">' + wi('indent') + '</span>'
    +   '<span class="wb" data-w="quote" title="Quote">' + wi('quote') + '</span><span class="wb" data-fmt="strikeThrough" title="Strikethrough">' + wi('strike') + '</span><span class="wb" data-fmt="removeFormat" title="Remove formatting">' + wi('clear') + '</span>'
    + '</div>'
    + '<div class="cmpf">'
    +   '<span class="sendg"><span class="gsend" id="td-send">Send reply</span></span>'
    +   '<span class="gicons">'
    +     '<span class="wb on" data-tdw="fmt" title="Formatting options">' + wi('text') + '</span>'
    +     '<span class="wb" id="td-attach" title="Attach file">' + wi('clip') + '</span>'
    +     '<span class="wpop"><span class="wb" data-w="pop" data-pop="link" title="Insert link">' + wi('link') + '</span><span class="wmenu up" data-pal="link"><span class="plbl">Insert link</span><span class="lk"><input id="td-linktxt" placeholder="Text to show"><input id="td-linkurl" placeholder="https://"><span class="btn sm pri" id="td-linkgo">Insert</span></span></span></span>'
    +     '<span class="wpop"><span class="wb" data-w="pop" data-pop="emoji" title="Insert emoji">' + wi('emoji') + '</span><span class="wpal" data-pal="emoji"><span class="em">' + EMOJI.map(function(e){ return '<span data-tdemoji="' + e + '">' + e + '</span>'; }).join('') + '</span></span></span>'
    +     '<span class="wpop"><span class="wb" data-w="pop" data-pop="vault" title="Attach from the case documents">' + wi('drive') + '</span><span class="wmenu up" data-pal="vault"><span class="plbl">Case documents</span>' + CP_DOCS.map(function(d, i){ return '<span class="mi" data-tddoc="' + i + '"><span class="ft" style="background:' + FT_COL[d[1]] + '">' + d[1] + '</span>' + esc(d[0]) + '<span class="mut" style="margin-left:auto">' + d[2] + '</span></span>'; }).join('') + '</span></span>'
    +     '<span class="wb on" data-tdw="sig" id="td-sig" title="Signature on / off">' + wi('sign') + '</span>'
    +   '</span>'
    +   '<span style="flex:1"></span><span class="mut" id="td-saved" style="font-size:11.5px"></span>'
    +   '<span class="wb" id="td-discard" title="Discard">' + wi('trash') + '</span>'
    + '</div></div>';
}
function tdReset(){
  var ed = document.getElementById("td-reply"); if(!ed) return;
  ed.innerHTML = '<div><br></div>' + (CMODE === "note" ? "" : sigHtml());
  TDFILES = []; tdFiles();
}
function tdFiles(){
  var el = document.getElementById("td-files"); if(!el) return;
  el.innerHTML = TDFILES.map(function(f, i){ return '<span class="att"><span class="ft" style="background:' + (FT_COL[f[1]] || FT_COL.FILE) + '">' + esc(f[1]) + '</span><span style="min-width:0"><span class="fn">' + esc(f[0]) + '</span><br><span class="fs">' + esc(f[2]) + '</span></span><b data-tdatt-x="' + i + '" title="Remove">×</b></span>'; }).join("");
}
function tdWire(box){
  box.addEventListener("mousedown", function(e){
    ACTIVE_ED = "td-reply";
    if(e.target.closest(".wfmt,.cmpf,.cai,.wpal .em,.wreplies") && !e.target.closest("select,input,textarea,[contenteditable]")) e.preventDefault();
    var ed = document.getElementById("td-reply");
    if(e.target === ed || e.target.closest(".wsig")){ e.preventDefault(); ed.focus(); cpCaretEnd(); }
  });
  box.addEventListener("click", function(e){
    var el, ed = document.getElementById("td-reply"), t = S.tickets.filter(function(x){ return x.id === S.cur; })[0];
    var closePops = function(){ box.querySelectorAll(".wpop.open").forEach(function(p){ p.classList.remove("open"); }); };
    if((el = e.target.closest("[data-w='pop']"))){ var p = el.closest(".wpop"), was = p.classList.contains("open"); closePops(); if(!was){ p.classList.add("open"); var f = p.querySelector("input"); if(f) setTimeout(function(){ f.focus(); }, 10); } e.stopPropagation(); return; }
    if(!e.target.closest(".lk")) closePops();
    if((el = e.target.closest("[data-fmt]"))){ cpExec(el.getAttribute("data-fmt")); e.stopPropagation(); return; }
    if((el = e.target.closest("[data-w='forecolor'],[data-w='hilitecolor']"))){ cpExec(el.getAttribute("data-w"), el.getAttribute("data-v")); e.stopPropagation(); return; }
    if((el = e.target.closest("[data-w='quote']"))){ cpExec("formatBlock", "blockquote"); e.stopPropagation(); return; }
    if((el = e.target.closest("[data-w='ai']"))){ cpAiWrite(el.getAttribute("data-v"), t ? t.from : "there"); e.stopPropagation(); return; }
    if((el = e.target.closest("[data-tdemoji]"))){ cpInsertHtml(el.getAttribute("data-tdemoji") + " "); e.stopPropagation(); return; }
    if((el = e.target.closest("#td-linkgo"))){ var lt = (document.getElementById("td-linktxt").value || "").trim(), lu = (document.getElementById("td-linkurl").value || "").trim(); if(!lu){ toast("Paste the address first"); return; } cpInsertHtml('<a href="' + esc(lu) + '">' + esc(lt || lu) + '</a> '); closePops(); e.stopPropagation(); return; }
    if((el = e.target.closest("[data-tdw='fmt']"))){ var fm = document.getElementById("td-fmt"); fm.hidden = !fm.hidden; el.classList.toggle("on", !fm.hidden); e.stopPropagation(); return; }
    if((el = e.target.closest("[data-tdw='sig']"))){ el.classList.toggle("on"); var sg = ed.querySelector(".wsig"); if(sg) sg.remove(); else ed.insertAdjacentHTML("beforeend", sigHtml()); e.stopPropagation(); return; }
    if((el = e.target.closest("[data-tddoc]"))){ TDFILES.push(CP_DOCS[+el.getAttribute("data-tddoc")].slice()); tdFiles(); toast("Attached from the case documents"); e.stopPropagation(); return; }
    if((el = e.target.closest("[data-tdatt-x]"))){ TDFILES.splice(+el.getAttribute("data-tdatt-x"), 1); tdFiles(); e.stopPropagation(); return; }
    if((el = e.target.closest("[data-tdreply]"))){ cpInsertAtTop(ed, el.getAttribute("data-tdreply")); cpCaretEnd(); e.stopPropagation(); return; }
    if((el = e.target.closest("#td-discard"))){ tdReset(); toast("Discarded"); e.stopPropagation(); return; }
  });
  var ed = document.getElementById("td-reply");
  ed.addEventListener("focus", function(){ ACTIVE_ED = "td-reply"; });
  ed.addEventListener("input", function(){ cpSmartSuggest(); var s = document.getElementById("td-saved"); if(s){ s.textContent = "Draft kept on the ticket"; clearTimeout(s._t); s._t = setTimeout(function(){ s.textContent = ""; }, 1500); } });
  ed.addEventListener("keydown", function(e){
    if(e.key === "Tab"){ var bar = document.getElementById("td-smart"); if(bar && !bar.hidden){ e.preventDefault(); cpAcceptSmart(); } }
    if((e.ctrlKey || e.metaKey) && e.key === "Enter"){ e.preventDefault(); document.getElementById("td-send").click(); }
  });
}
function renderComposer(){
  var box = document.getElementById("td-comp"); if(!box) return;
  var t = S.tickets.filter(function(x){ return x.id === S.cur; })[0]; if(!t) return;
  if(!box.querySelector("#td-reply")){ box.classList.add("writer"); box.innerHTML = tdWriterHtml(); tdWire(box); tdReset(); }
  var note = CMODE === "note";
  box.classList.toggle("noteMode", note);
  document.querySelectorAll("[data-cmode]").forEach(function(c){ c.classList.toggle("on", c.getAttribute("data-cmode") === CMODE); });
  var nt = document.getElementById("td-comp-note");
  if(nt) nt.innerHTML = note ? "Stays inside Apple Globalcare. " + esc(t.from) + " never sees it."
    : "Goes out on <b>" + esc(t.chan) + "</b> to " + esc(t.from) + " as Apple Globalcare " + esc(t.desk || "Support");
  var sb = document.getElementById("td-send"); if(sb) sb.textContent = note ? "Save note" : "Send reply";
  var af = document.getElementById("td-after"); if(af) af.parentElement.hidden = note;
  var rp = document.getElementById("td-replies");
  if(rp) rp.innerHTML = (note ? NOTE_CANNED : smartReplies(t)).map(function(c){ return '<span class="wr" data-tdreply="' + esc(c) + '">' + esc(c) + '</span>'; }).join("");
  var tm = document.getElementById("td-tplmenu");
  if(tm) tm.innerHTML = '<span class="plbl">' + (note ? "Note templates" : "Templates · " + esc(t.desk || "Support") + " desk") + '</span>' + (note ? NOTE_CANNED : cannedFor(t.desk)).map(function(c){ return '<span class="mi" data-tdcan="' + esc(c) + '">' + esc(c) + '</span>'; }).join("");
  var ed = document.getElementById("td-reply"), sg = ed && ed.querySelector(".wsig"), sgb = document.getElementById("td-sig");
  if(ed){ if(note && sg) sg.remove(); if(!note && !sg && sgb && sgb.classList.contains("on")) ed.insertAdjacentHTML("beforeend", sigHtml()); }
  if(sgb) sgb.parentElement.style.display = note ? "none" : "";
  if(t.pendingAtt && !TDFILES.some(function(f){ return f[0] === t.pendingAtt; })){ TDFILES.push([t.pendingAtt, "PDF", "96 KB"]); tdFiles(); }
}


/* ---------- admin: routing rules, margin floor, SLA targets ---------- */
function renderAdmin(){
  var tb = document.getElementById("ad-rulerows"); if(!tb) return;
  tb.innerHTML = (S.rules || []).map(function(rl, i){
    return '<tr><td class="mono dim">' + (i + 1) + '</td><td>' + rl.kw.split("|").map(function(k){ return '<span class="tag t-grey" style="margin:0 4px 4px 0">' + esc(k.trim()) + '</span>'; }).join("") + '</td>'
      + '<td>' + deskLabel(rl.desk) + '</td><td style="text-align:right;white-space:nowrap">'
      + (i > 0 ? '<span class="act" data-ruleup="' + i + '">Up</span> ' : '') + '<span class="act" data-ruledel="' + i + '" style="margin-left:10px">Remove</span></td></tr>';
  }).join("") || '<tr><td colspan="4" class="dim" style="padding:22px;text-align:center">No rules — everything lands on Support.</td></tr>';
  var fl = document.getElementById("ad-floor"); if(fl && document.activeElement !== fl) fl.value = S.marginFloor || 10;
  var sl = document.getElementById("ad-sla");
  if(sl) sl.innerHTML = Object.keys(S.sla || {}).map(function(d){
    return '<label class="fld" style="min-width:0"><span class="lbl">' + esc(d) + '</span><input data-sla="' + esc(d) + '" value="' + esc(S.sla[d]) + '" style="width:100%"></label>';
  }).join("");
}

/* ---------- gmail-style labels ---------- */
var LBC = "#D93025";
function renderLabels(){
  var bar = document.getElementById("tk-labels");
  if(!bar) return;
  bar.innerHTML = (S.labels || []).map(function(L){
    return '<span class="fchip sm' + (FOLDER === "label:" + L.id ? " on" : "") + '" data-folder="label:' + L.id + '">'
      + '<i class="pip" style="background:' + L.c + '"></i><span>' + esc(L.name) + '</span><span class="n">0</span>'
      + '<span class="lbx" data-lbdel="' + L.id + '" title="Delete this label">&times;</span></span>';
  }).join("") || '<span class="dim" style="font-size:11.5px;padding:5px 10px">No labels yet</span>';
  if(FOLDER && !FOLDERS[FOLDER] && FOLDER.indexOf("label:") !== 0){
    var dn = {sales:"Sales",marketing:"Marketing",support:"Support",processing:"Processing",shipping:"Shipping",pharmacy:"Pharmacy",
              quality:"Quality",accounts:"Accounts",legal:"Legal",hradmin:"HR & admin",digital:"Digital marketing",design:"Design",
              warehouse:"Warehouse",sourcing:"Sourcing",it:"IT & systems"}[FOLDER] || FOLDER;
    bar.innerHTML += '<span class="fchip sm on" data-folder="' + FOLDER + '"><i class="pip" style="background:' + (DESKCOL[dn] || "#fff") + '"></i>'
      + '<span>' + esc(dn) + ' desk</span><span class="n">0</span><span class="lbx" data-folder="inbox" style="opacity:.9" title="Back to the inbox">&times;</span></span>';
  }
  var pk = document.getElementById("lb-pick");
  if(pk) pk.innerHTML = '<option value="">Choose a label</option>' + (S.labels || []).map(function(L){ return '<option value="' + L.id + '">' + esc(L.name) + '</option>'; }).join("");
  document.querySelectorAll(".lbsw").forEach(function(s){ s.classList.toggle("on", s.getAttribute("data-lbc") === LBC); });
}

window.__crmInit = function(show){
  window.__show = show;
  window.__onRole = function(){ renderHolidays(); }; S = load();
  renderLabels(); renderList(); renderDetail(); renderComposer(); renderNotes(); renderAdmin(); renderMyLeave(); renderLeaveMgmt(); renderHolidays(); renderSuppliers(); renderEmployees(); renderRx(); renderQA(); renderOrders(); renderQuote(); renderSourcing(); renderCase(); renderWarehouse(); renderColdChain();
  document.addEventListener("click", function(e){
    var el;
    if(e.target.closest("#cp-panel") || e.target.closest("#gform")) return;   /* the compose window and form sheet handle their own clicks */
    if((el = e.target.closest("#doc-close"))){ closeDoc(); return; }
    if((el = e.target.closest("#doc-print"))){ try{ window.print(); }catch(err){ toast("Use your browser's print dialog to save as PDF"); } return; }
    if((el = e.target.closest("#slipdl"))){
      var sm = document.getElementById("slipmonth");
      openDoc("Payslip", payslipDoc(sm ? sm.value : "2026-09")); return;
    }
    if((el = e.target.closest("[data-slipdoc]"))){ openDoc("Payslip", payslipDoc(el.getAttribute("data-slipdoc"))); return; }
    if((el = e.target.closest("[data-policy]"))){
      var nm = el.getAttribute("data-policy");
      openDoc(nm, policyDoc(nm)); return;
    }
    if((el = e.target.closest("#cc-release"))){
      S.ccdecision = "released";
      qaLog("<b>SHP-2026-3391</b> released after excursion EX-2026-0142 · within allowance");
      raiseTicket({id:"TK-" + (59100 + Math.floor(Math.random()*90)), from:"QA desk", who:"Staff",
        subj:"Released after excursion — SHP-2026-3391 · Den R.", prev:"", chan:"Internal", desk:"Shipping",
        unread:true, star:false, att:false, time:"now", pri:"Normal", folder:"inbox",
        thread:[{who:"Arun K.", side:"in", chan:"Internal", at:"now", txt:"Excursion EX-2026-0142 assessed within the manufacturer's allowance. Deliver as planned, 12 Sep 10:30."}]});
      save(); renderColdChain(); renderList(); renderQA();
      toast("Released — Shipping, the hospital and the patient have been told");
      return;
    }
    if((el = e.target.closest("#cc-quar"))){
      S.ccdecision = "quarantine";
      S.qa.unshift({id:"OR-2026-0881", prod:"Blinatumomab 35 mcg", batch:"1094327", sup:"Rheinpharm GmbH",
        exp:"02 / 2028", temp:"8.9 °C for 22 min · excursion", tempok:false, handling:"2–8 °C",
        forwhom:"Den R. · promised 12 Sep", recv:"Dublin hub · on arrival", signer:"Arun K. · RP",
        waiting:"on arrival", status:"quarantine", mine:true, quarWhy:"Inbound temperature excursion beyond the manufacturer's allowance",
        checks:[[1,"Supplier qualified and licence in date","Rheinpharm · WDA verified 12 Aug"],[1,"Batch and lot match the certificate of analysis","Within spec"],
                [1,"Serialisation verified","Active"],[1,"Expiry covers the full course","02 / 2028"],
                [0,"Inbound temperature reviewed","8.9 °C for 22 minutes at FRA — stability call with Amgen pending"],
                [1,"Visual inspection and tamper seal","To be checked on arrival"],[1,"Leaflet language","English pack"],[1,"Segregation of duties","Two people recorded"]]});
      qaLog("<b>SHP-2026-3391</b> to be quarantined on arrival — excursion EX-2026-0142");
      save(); renderColdChain(); renderQA();
      toast("Quarantine on arrival — the batch is now in the QA release queue");
      return;
    }
    if((el = e.target.closest("#cc-capa"))){
      S.cccapa = true;
      S.qadev.unshift({id:"DV-2026-044", batch:"1094327", what:"Ramp hold at FRA outside the cool area — carrier handling agreement needed", sev:"Major", state:"CAPA open"});
      save(); renderColdChain(); renderQA(); toast("CAPA raised with the carrier — DV-2026-044 on the QMS board");
      return;
    }
    if((el = e.target.closest("#cc-report"))){ openDoc("Temperature report", tempReportDoc()); return; }
    if((el = e.target.closest("#cc-track"))){ toast("LH 990 landed Dublin 12:48 — customs clearance in progress, 14 °C ambient at the shed"); return; }
    if((el = e.target.closest("#cc-rules"))){ toast("Alert rules: warn at 7.5 °C, alarm at 8 °C, page QA after 15 minutes out of range"); return; }
    if((el = e.target.closest("[data-whnext]"))){
      var w = whById(el.getAttribute("data-whnext")); if(!w) return;
      w.st = w.st === "queued" ? "picking" : w.st === "picking" ? "picked" : "packed";
      if(w.st === "packed") S.whphotos = (S.whphotos || 0) + 1;
      WHSEL = w.id; save(); renderWarehouse();
      toast(w.id + " " + (w.st === "packed" ? "packed — six photographs filed" : WHST[w.st][1].toLowerCase()));
      return;
    }
    if((el = e.target.closest("[data-whfix]"))){
      var wf = whById(el.getAttribute("data-whfix")); if(!wf) return;
      wf.batch = wf.alt.batch; wf.exp = wf.alt.exp; wf.loc = wf.alt.loc; wf.fefo = "OK"; wf.st = "picking";
      save(); renderWarehouse(); toast("Switched to batch " + wf.batch + " — FEFO satisfied, line released");
      return;
    }
    if((el = e.target.closest("[data-whreason]"))){
      var wr = whById(el.getAttribute("data-whreason")); if(!wr) return;
      wr.fefo = "Override"; wr.st = "picking";
      save(); renderWarehouse(); toast("Reason recorded — QA will see the FEFO override on release");
      return;
    }
    if((el = e.target.closest("tr[data-whpick]")) && !e.target.closest(".act")){ WHSEL = el.getAttribute("data-whpick"); renderWarehouse(); return; }
    if((el = e.target.closest("#wh-seal"))){
      var ws = whById(WHSEL); if(!ws) return;
      if(ws.st !== "packed" && ws.st !== "picked"){ toast("Pack it first"); return; }
      ws.st = "gone";
      raiseTicket({id:"TK-" + (59000 + Math.floor(Math.random()*90)), from:"Warehouse", who:"Staff",
        subj:"Handed to courier — " + ws.id + " · " + ws.who, prev:"", chan:"Internal", desk:"Shipping",
        unread:true, star:false, att:true, time:"now", pri:"Normal", folder:"inbox",
        thread:[{who:"Liam C.", side:"in", chan:"Internal", at:"now", txt:ws.drug + " for " + ws.who + " sealed and collected. Logger armed, AWB on the shipment."}]});
      save(); renderWarehouse(); renderList();
      toast(ws.id + " sealed and handed to the courier — Shipping has the AWB");
      return;
    }
    if((el = e.target.closest("#wh-reprint"))){ toast("Labels reprinted for " + WHSEL); return; }
    if((el = e.target.closest("#wh-labels"))){ toast((S.wave||[]).filter(function(w){ return w.st !== "gone"; }).length + " pick labels sent to the printer"); return; }
    if((el = e.target.closest("#wh-assign"))){ toast("Wave 3 assigned — cold chain to Mo A., ambient to Bart K."); return; }
    if((el = e.target.closest("#wh-stocktake"))){ toast("Cycle count started for CR-1 and CR-2 — 28 locations"); return; }
    if((el = e.target.closest("#wh-bookin"))){ toast("Goods-in opened — scan the first carton to start"); return; }
    if((el = e.target.closest("#wh-alarms"))){ toast("Alarm log: CR-1 door open 2 m 10 s at 07:42 — acknowledged by Bart K."); return; }
    if((el = e.target.closest("#wh-photos"))){ toast("Six photographs for " + WHSEL + " — seal, logger, contents, label, shipper, pallet"); return; }
    if((el = e.target.closest("[data-casetab]"))){ CASETAB = el.getAttribute("data-casetab"); renderCase(); return; }
    if((el = e.target.closest("#cs-logcall"))){ var lf = document.getElementById("cs-lform"); if(lf){ lf.hidden = false; } var cf0 = document.getElementById("cs-cform"); if(cf0) cf0.hidden = true; return; }
    if((el = e.target.closest("#cs-lcancel"))){ document.getElementById("cs-lform").hidden = true; return; }
    if((el = e.target.closest("#cs-lgo"))){
      var what = (document.getElementById("cs-lwhat") || {value:""}).value.trim(), len = (document.getElementById("cs-llen") || {value:""}).value.trim() || "2 m";
      if(!what){ toast("Say what was agreed on the call"); return; }
      caseLog({c:"#8b98ab", t:"Call — " + esc(what), tag:esc(len), at:"today", d:"Logged by " + (S.casemgr || "Priya N.") + " from the case.", k:"ticket", fresh:true});
      document.getElementById("cs-lwhat").value = ""; document.getElementById("cs-lform").hidden = true;
      save(); renderCase(); toast("Call logged on the case and the ticket");
      return;
    }
    if((el = e.target.closest("#cs-checkin"))){ var cf = document.getElementById("cs-cform"); if(cf) cf.hidden = false; var lf0 = document.getElementById("cs-lform"); if(lf0) lf0.hidden = true; return; }
    if((el = e.target.closest("#cs-ccancel"))){ document.getElementById("cs-cform").hidden = true; return; }
    if((el = e.target.closest("#cs-cgo"))){
      var when = (document.getElementById("cs-cwhen") || {value:""}).value.trim() || "17 Sep 10:00";
      var how = (document.getElementById("cs-chow") || {value:"Call"}).value, about = (document.getElementById("cs-cwhat") || {value:""}).value.trim() || "How the cycle went";
      caseLog({c:"#1d4ed8", t:"Check-in booked — " + esc(how) + " on " + esc(when), tag:"Planned", at:"today", d:esc(about) + ". Reminder set for " + (S.casemgr || "Priya N.") + ".", k:"ticket", fresh:true});
      raiseTicket({id:"TK-" + (58900 + Math.floor(Math.random()*90)), from:"Den R.", who:"Patient",
        subj:"Check-in " + when + " — " + about, prev:"", chan:how === "Call" ? "Phone" : how, desk:"Support",
        unread:false, star:false, att:false, time:"now", pri:"Normal", folder:"inbox", snoozed:true,
        thread:[{who:S.casemgr || "Priya N.", side:"out", at:"now", txt:"Check-in booked by " + how + " for " + when + ": " + about}]});
      document.getElementById("cs-cform").hidden = true;
      save(); renderCase(); renderList(); toast("Check-in booked — it sits snoozed on the desk until " + when);
      return;
    }
    if((el = e.target.closest("#cs-reply")) || (el = e.target.closest("#cs-wa"))){
      S.cur = "TK-58120"; save(); renderDetail(); window.__show("service");
      var rb = document.getElementById("td-reply"); if(rb) rb.focus();
      toast(el.id === "cs-wa" ? "Replying on WhatsApp — the thread is open" : "The ticket thread is open");
      return;
    }
    if((el = e.target.closest("#cs-reassign"))){ var rf = document.getElementById("cs-rform"); if(rf) rf.hidden = !rf.hidden; return; }
    if((el = e.target.closest("#cs-rcancel"))){ document.getElementById("cs-rform").hidden = true; return; }
    if((el = e.target.closest("#cs-rgo"))){
      var who = (document.getElementById("cs-rwho") || {value:"Priya N."}).value, why = (document.getElementById("cs-rwhy") || {value:""}).value.trim();
      var was = S.casemgr || "Priya N."; S.casemgr = who;
      caseLog({c:"#1d4ed8", t:"Case reassigned to " + esc(who), tag:"", at:"today", d:"From " + esc(was) + (why ? " — " + esc(why) : "") + ". The patient has been told who to expect.", k:"ticket"});
      document.getElementById("cs-rform").hidden = true;
      save(); renderCase(); toast("Case is now with " + who);
      return;
    }
    if((el = e.target.closest("#cs-upload"))){ var uf = document.getElementById("cs-uform"); if(uf) uf.hidden = !uf.hidden; return; }
    if((el = e.target.closest("#cs-ucancel"))){ document.getElementById("cs-uform").hidden = true; return; }
    if((el = e.target.closest("#cs-ugo"))){
      var ut = (document.getElementById("cs-utype") || {value:"Document"}).value;
      S.casedocs = S.casedocs || []; S.casedocs.push({t:ut, at:"today"});
      caseLog({c:"#1c7a52", t:esc(ut) + " filed", tag:"", at:"today", d:"Added to the vault against the case; retention 8 years.", k:"order"});
      document.getElementById("cs-uform").hidden = true;
      save(); renderCase(); toast(ut + " filed against the case");
      return;
    }
    if((el = e.target.closest("#cs-history"))){ toast("Consent v3.1 (12 Jun) ← v3.0 (14 Feb) ← v2.2 (02 Nov 2025) — each signed and filed"); return; }
    if((el = e.target.closest("[data-srcsel]"))){
      var ix = +el.getAttribute("data-srcsel");
      if(S.rfq.lines[ix]){ S.rfq.lines[ix].sel = !S.rfq.lines[ix].sel; save(); renderSourcing(); }
      return;
    }
    if((el = e.target.closest("[data-srchase]"))){
      var iw = +el.getAttribute("data-srchase"), lw = S.rfq.lines[iw];
      if(lw){
        lw.note = "Chased again just now \u2014 asked for an answer by the end of the day, or we close the line.";
        srLog("<b>" + esc(lw.partner) + "</b> chased again");
        raiseTicket({id:"TK-" + (58800 + Math.floor(Math.random()*90)), from:lw.partner, who:"Partner",
          subj:"Chase \u2014 " + S.rfq.id + " \u00b7 " + S.rfq.drug, prev:"", chan:"Email", desk:"Sourcing",
          unread:false, star:false, att:false, time:"now", pri:"High", folder:"inbox",
          thread:[{who:"Yusuf A.", side:"out", chan:"Email", at:"now",
                   txt:"Second chase on " + S.rfq.id + ". We need price, availability and shelf life today."}]});
        save(); renderSourcing(); renderList();
        toast(lw.partner + " chased \u2014 the email is on the sourcing desk");
      }
      return;
    }
    if((el = e.target.closest("#sr-chase"))){
      var waiting = (S.rfq.lines || []).filter(function(l){ return l.state === "waiting"; });
      if(!waiting.length){ toast("Everyone has answered"); return; }
      waiting.forEach(function(l){ l.note = "Chased again just now \u2014 answer wanted today."; });
      srLog(waiting.length + " partner" + (waiting.length === 1 ? "" : "s") + " chased in one go");
      save(); renderSourcing();
      toast(waiting.length + " partner" + (waiting.length === 1 ? "" : "s") + " chased");
      return;
    }
    if((el = e.target.closest("#sr-selall"))){
      var ins = (S.rfq.lines || []).filter(function(l){ return l.state === "in"; })
        .sort(function(a, b2){ return a.landed - b2.landed; });
      (S.rfq.lines || []).forEach(function(l){ l.sel = false; });
      ins.slice(0, 3).forEach(function(l){ l.sel = true; });
      save(); renderSourcing(); toast("The three cheapest compliant lines are selected");
      return;
    }
    if((el = e.target.closest("#sr-addsrc"))){ var sf = document.getElementById("sr-form"); if(sf) sf.hidden = false; return; }
    if((el = e.target.closest("#sr-cancel"))){ var sf2 = document.getElementById("sr-form"); if(sf2) sf2.hidden = true; return; }
    if((el = e.target.closest("#sr-save"))){
      var g2 = function(id){ var x = document.getElementById(id); return x ? x.value.trim() : ""; };
      if(!g2("sr-partner") || !g2("sr-landed")){ setTxt("sr-err", "A partner and a landed cost are needed."); return; }
      S.rfq.lines.push({country:g2("sr-country"), partner:g2("sr-partner"), maker:"Added by the desk",
        pack:g2("sr-pack") || "\u2014", batch:"\u2014", exp:"\u2014", avail:g2("sr-avail") || "\u2014",
        landed:+g2("sr-landed"), lead:g2("sr-lead") || "7", rating:"new partner",
        flag:g2("sr-flag") || "Clear", note:"Added manually", state:"in", sel:false});
      srLog("<b>" + esc(g2("sr-partner")) + "</b> added manually from " + esc(g2("sr-country")));
      ["sr-partner","sr-pack","sr-avail","sr-landed","sr-lead","sr-flag"].forEach(function(id){
        var x = document.getElementById(id); if(x) x.value = ""; });
      setTxt("sr-err", "");
      document.getElementById("sr-form").hidden = true;
      save(); renderSourcing(); toast("Source added to the comparison");
      return;
    }
    if((el = e.target.closest("#sr-build"))){
      var picked = (S.rfq.lines || []).filter(function(l){ return l.sel && l.state === "in"; });
      if(!picked.length){ toast("Tick at least one response first"); return; }
      var blocked = picked.filter(function(l){ return /expire/i.test(l.flag); });
      if(blocked.length){
        toast(blocked[0].partner + " cannot go on a quote \u2014 the licence lapses before delivery");
        return;
      }
      var used = (S.quote.opts || []).map(function(o){ return o.k; });
      var letters = "ABCDEFGH".split("").filter(function(c){ return used.indexOf(c) < 0; });
      picked.forEach(function(l, n){
        S.quote.opts.push({k: letters[n] || "X", name: l.lead <= "5" ? "Fastest" : "Balanced",
          note:"From " + l.partner.split(" \u00b7 ")[0], origin: l.country + " \u00b7 pack",
          lead: l.lead, landed: +l.landed, fee: Math.round(l.landed * 0.145), show:true, def:false});
      });
      if(!(S.quote.opts || []).filter(function(o){ return o.def; }).length && S.quote.opts.length)
        S.quote.opts[0].def = true;
      S.quote.status = "draft";
      qtLog(picked.length + " sourcing response" + (picked.length === 1 ? "" : "s") + " brought onto the quote");
      srLog("Quote built from " + picked.length + " response" + (picked.length === 1 ? "" : "s"));
      (S.rfq.lines || []).forEach(function(l){ l.sel = false; });
      save(); renderSourcing(); renderQuote();
      toast("Quote built \u2014 check the margin before sending");
      window.__show("quotes");
      return;
    }
    if((el = e.target.closest("#qt-addopt"))){ var qf = document.getElementById("qt-form"); if(qf) qf.hidden = false; return; }
    if((el = e.target.closest("#qo-cancel"))){ var qf2 = document.getElementById("qt-form"); if(qf2) qf2.hidden = true; return; }
    if((el = e.target.closest("#qo-save"))){
      var g = function(id){ var x = document.getElementById(id); return x ? x.value.trim() : ""; };
      if(!g("qo-landed") || !g("qo-fee")){ setTxt("qo-err", "A landed cost and a fee are needed."); return; }
      var used = (S.quote.opts || []).map(function(o){ return o.k; });
      var letters = "ABCDEFGH".split("").filter(function(c){ return used.indexOf(c) < 0; });
      S.quote.opts.push({k: letters[0] || "X", name: g("qo-name"), note: g("qo-note"),
        origin: g("qo-origin"), lead: g("qo-lead") || "7",
        landed: +g("qo-landed"), fee: +g("qo-fee"), show: true, def: false});
      qtLog("Option " + (letters[0] || "X") + " added \u00b7 " + g("qo-origin"));
      ["qo-landed","qo-fee","qo-lead","qo-note"].forEach(function(id){ var x = document.getElementById(id); if(x) x.value = ""; });
      setTxt("qo-err", "");
      document.getElementById("qt-form").hidden = true;
      save(); renderQuote(); toast("Option added to the quote");
      return;
    }
    if((el = e.target.closest("[data-optdef]"))){
      var kd = el.getAttribute("data-optdef");
      (S.quote.opts || []).forEach(function(o){ o.def = (o.k === kd); if(o.k === kd) o.show = true; });
      qtLog("Option " + kd + " made the default the patient sees");
      save(); renderQuote(); toast("Option " + kd + " is now the default");
      return;
    }
    if((el = e.target.closest("[data-optshow]"))){
      var ks = el.getAttribute("data-optshow");
      (S.quote.opts || []).forEach(function(o){ if(o.k === ks) o.show = !o.show; });
      save(); renderQuote();
      return;
    }
    if((el = e.target.closest("[data-optrm]"))){
      var kr = el.getAttribute("data-optrm");
      S.quote.opts = (S.quote.opts || []).filter(function(o){ return o.k !== kr; });
      if(S.quote.opts.length && !S.quote.opts.filter(function(o){ return o.def; }).length) S.quote.opts[0].def = true;
      qtLog("Option " + kr + " taken off the quote");
      save(); renderQuote(); toast("Option " + kr + " removed");
      return;
    }
    if((el = e.target.closest("#qt-send"))){
      var dflt = qtDefault();
      if(!dflt){ toast("Add an option before sending"); return; }
      if(qtMargin(dflt) < (S.marginFloor || 10)){ toast("Below the margin floor \u2014 the business head has to approve it first"); return; }
      S.quote.status = "sent";
      qtLog("Quote sent to " + esc(S.quote.patient) + " \u00b7 default option " + dflt.k + " at " + usd(qtPrice(dflt)));
      raiseTicket({id:"TK-" + (58700 + Math.floor(Math.random()*90)), from:S.quote.patient, who:"Patient",
        subj:"Quote " + S.quote.id + " \u2014 " + S.quote.drug, prev:"", chan:"Email", desk:"Sales",
        unread:false, star:false, att:true, time:"now", pri:"Normal", folder:"inbox",
        thread:[{who:"Priya N.", side:"out", chan:"Email", at:"now",
                 txt:"Quote " + S.quote.id + " attached. Option " + dflt.k + " at " + usd(qtPrice(dflt))
                     + ", " + dflt.lead + " days, " + dflt.origin + ". It holds for seven days."}]});
      save(); renderQuote(); renderList();
      toast("Quote sent \u2014 it is on the patient portal and in their email");
      return;
    }
    if((el = e.target.closest("#qt-accept"))){
      var da = qtDefault();
      S.quote.status = "accepted";
      qtLog("Patient accepted option " + (da ? da.k : "") + " \u00b7 order raised");
      S.orders.unshift({id:"OR-2026-09" + Math.floor(Math.random()*90 + 10), drug:"Blinatumomab 35 mcg",
        who:S.quote.patient, country:"Ireland", cold:true, note:"Raised from " + S.quote.id,
        due:"20 Sep", left:"5 d", risk:false, pay:"Awaiting payment", owner:"Priya N.", stage:0,
        val: da ? usd(qtPrice(da)) : "\u2014", case:S.quote.case});
      save(); renderQuote(); renderOrders();
      toast("Accepted \u2014 the order is on the fulfilment board at QA release");
      return;
    }
    if((el = e.target.closest("#qt-requote"))){
      S.quote.status = "draft";
      qtLog("Re-quoted \u2014 the FX lock and validity start again");
      save(); renderQuote(); toast("Back to draft \u2014 change the options and send it again");
      return;
    }
    if((el = e.target.closest("[data-ordnext]"))){ ordAdvance(el.getAttribute("data-ordnext")); return; }
    if((el = e.target.closest("[data-ordpick]"))){ ORDSEL = el.getAttribute("data-ordpick"); renderOrders(); return; }
    if((el = e.target.closest("#ord-next"))){ var oc = ordCurrent(); if(oc) ordAdvance(oc.id); return; }
    if((el = e.target.closest("#ord-cold"))){ ORDCOLD = !ORDCOLD; renderOrders(); return; }
    if((el = e.target.closest("#ord-risk"))){ ORDRISK = !ORDRISK; renderOrders(); return; }
    if((el = e.target.closest("#ord-hold"))){ var hf = document.getElementById("ord-hform"); if(hf) hf.hidden = false; return; }
    if((el = e.target.closest("#ord-hcancel"))){ var hf2 = document.getElementById("ord-hform"); if(hf2) hf2.hidden = true; return; }
    if((el = e.target.closest("#ord-hgo"))){
      var oh = ordCurrent(), why = (document.getElementById("ord-hreason") || {value:""}).value;
      if(oh){
        oh.hold = why;
        ordLog("<b>" + oh.id + "</b> put on hold \u2014 " + esc(why));
        raiseTicket({id:"TK-" + (58600 + Math.floor(Math.random()*90)), from:"Processing desk", who:"Staff",
          subj:"Order on hold \u2014 " + oh.id + " \u00b7 " + oh.who, prev:"", chan:"Internal", desk:"Accounts",
          unread:true, star:false, att:false, time:"now", pri:"High", folder:"inbox",
          thread:[{who:"Liam C.", side:"in", chan:"Internal", at:"now",
                   txt:"Held: " + why + ". " + oh.drug + " for " + oh.who + " will miss " + oh.due + " unless this clears."}]});
      }
      document.getElementById("ord-hform").hidden = true;
      save(); renderOrders(); renderList();
      toast("Held \u2014 accounts has been told and the customer sees the delay on the portal");
      return;
    }
    if((el = e.target.closest("#ord-unhold"))){
      var ou = ordCurrent(); if(!ou) return;
      var was = ou.hold; ou.hold = "";
      ordLog("Hold cleared on <b>" + ou.id + "</b> \u00b7 " + esc(was || ""));
      save(); renderOrders();
      toast("Hold cleared \u2014 " + ou.id + " is moving again");
      return;
    }
    if((el = e.target.closest("[data-qapick]"))){ QASEL = el.getAttribute("data-qapick"); renderQA(); return; }
    if((el = e.target.closest("[data-qaf]"))){ QAF = el.getAttribute("data-qaf"); renderQA(); return; }
    if((el = e.target.closest("#qa-mine"))){ QAMINE = !QAMINE; renderQA(); return; }
    if((el = e.target.closest("[data-qaclear]"))){
      var bq = qaCurrent(), ix = +el.getAttribute("data-qaclear");
      if(bq && bq.checks[ix]){
        bq.checks[ix][0] = 1;
        bq.checks[ix][2] = bq.checks[ix][2] + " \u2014 cleared by Arun K., evidence filed";
        qaLog("Check cleared on <b>" + bq.batch + "</b> \u00b7 " + esc(bq.checks[ix][1]));
        save(); renderQA(); toast(bq.checks[ix][1] + " cleared");
      }
      return;
    }
    if((el = e.target.closest("#qa-release"))){
      var b1 = qaCurrent(); if(!b1) return;
      if(qaOpenChecks(b1)){ toast("Release is blocked while a check is open"); return; }
      b1.status = "released";
      S.qareleased = (S.qareleased || 0) + 1;
      qaLog("<b>" + b1.batch + "</b> released \u00b7 " + esc(b1.prod));
      raiseTicket({id:"TK-" + (58400 + Math.floor(Math.random()*90)), from:"QA desk", who:"Staff",
        subj:"Batch released \u2014 " + b1.batch + " \u00b7 " + b1.prod, prev:"", chan:"Internal", desk:"Warehouse",
        unread:true, star:false, att:false, time:"now", pri:"Normal", folder:"inbox",
        thread:[{who:"Arun K.", side:"in", chan:"Internal", at:"now",
                 txt:"Batch " + b1.batch + " is released for " + b1.forwhom + ". Pick, pack and book the shipper."}]});
      QASEL = null; save(); renderQA(); renderList();
      toast(b1.batch + " released \u2014 the warehouse can pack it");
      return;
    }
    if((el = e.target.closest("#qa-quar"))){ var qf = document.getElementById("qa-qform"); if(qf) qf.hidden = false; return; }
    if((el = e.target.closest("#qa-qcancel"))){ var qf2 = document.getElementById("qa-qform"); if(qf2) qf2.hidden = true; return; }
    if((el = e.target.closest("#qa-qgo"))){
      var b2 = qaCurrent(), why = (document.getElementById("qa-qreason") || {value:""}).value;
      if(b2){
        b2.status = "quarantine"; b2.quarWhy = why;
        qaLog("<b>" + b2.batch + "</b> quarantined \u2014 " + esc(why));
        raiseTicket({id:"TK-" + (58500 + Math.floor(Math.random()*90)), from:"QA desk", who:"Staff",
          subj:"Batch quarantined \u2014 " + b2.batch, prev:"", chan:"Internal", desk:"Sourcing",
          unread:true, star:false, att:false, time:"now", pri:"High", folder:"inbox",
          thread:[{who:"Arun K.", side:"in", chan:"Internal", at:"now",
                   txt:"Quarantined: " + why + ". Tell " + b2.sup + " and hold anything else in transit from them."}]});
      }
      document.getElementById("qa-qform").hidden = true;
      save(); renderQA(); renderList();
      toast("Quarantined \u2014 sourcing has been asked to take it up with the supplier");
      return;
    }
    if((el = e.target.closest("#qa-dev"))){ var df = document.getElementById("qa-dform"); if(df) df.hidden = false; return; }
    if((el = e.target.closest("#qa-dcancel"))){ var df2 = document.getElementById("qa-dform"); if(df2) df2.hidden = true; return; }
    if((el = e.target.closest("#qa-dgo"))){
      var b3 = qaCurrent(), tx = document.getElementById("qa-dtext");
      if(!tx || !tx.value.trim()){ setTxt("qa-derr", "Say in one line what happened."); return; }
      S.qadev.unshift({id:"DV-2026-0" + (42 + (S.qadev || []).length), batch: b3 ? b3.batch : "\u2014",
        what: tx.value.trim(), sev:(document.getElementById("qa-dsev")||{value:"Minor"}).value, state:"Investigation"});
      qaLog("Deviation raised on <b>" + (b3 ? b3.batch : "\u2014") + "</b> \u00b7 " + esc(tx.value.trim()));
      tx.value = ""; setTxt("qa-derr", "");
      document.getElementById("qa-dform").hidden = true;
      save(); renderQA();
      toast("Deviation raised \u2014 it is on the QMS board with a CAPA owner");
      return;
    }
    if((el = e.target.closest("#qa-return"))){
      var b4 = qaCurrent(); if(!b4) return;
      b4.status = "returned";
      qaLog("<b>" + b4.batch + "</b> returned to " + esc(b4.sup));
      QASEL = null; save(); renderQA();
      toast(b4.batch + " returned to " + b4.sup + " \u2014 a credit note is expected");
      return;
    }
    if((el = e.target.closest("#qa-destroy"))){
      var b5 = qaCurrent(); if(!b5) return;
      b5.status = "destroyed";
      qaLog("<b>" + b5.batch + "</b> destroyed under witness \u00b7 certificate filed");
      QASEL = null; save(); renderQA();
      toast(b5.batch + " destroyed \u2014 the certificate is filed against the batch");
      return;
    }
    if((el = e.target.closest("#qa-coa"))){ toast("Certificate of analysis opened \u2014 the view is logged"); return; }
    if((el = e.target.closest("[data-rxpick]"))){ RXSEL = el.getAttribute("data-rxpick"); renderRx(); return; }
    if((el = e.target.closest("[data-rxf]"))){ RXF = el.getAttribute("data-rxf"); renderRx(); return; }
    if((el = e.target.closest("#rx-verify"))){
      var r = rxCurrent(); if(!r) return;
      var open = (r.checks || []).filter(function(c){ return !c[0]; }).length;
      r.status = "verified";
      rxLog("<b>" + r.id + "</b> released for " + esc(r.pat) + " \u00b7 " + esc(r.rel)
            + (open ? " \u00b7 " + open + " check noted and cleared by the pharmacist" : ""));
      var tk = {id:"TK-" + (58200 + Math.floor(Math.random()*90)), from:"Pharmacy desk", who:"Staff",
        subj:"Prescription released \u2014 " + r.pat + " \u00b7 " + r.id, prev:"", chan:"Internal", desk:"Processing",
        unread:true, star:false, att:false, time:"now", pri:"Normal", folder:"inbox",
        thread:[{who:"Dr. Sara M.", side:"in", chan:"Internal", at:"now",
                 txt:"Released " + r.rel + " against " + r.id + ". Processing can pick, pack and ship."}]};
      raiseTicket(tk);
      RXSEL = null; save(); renderRx(); renderList();
      toast(r.id + " released \u2014 processing has been told");
      return;
    }
    if((el = e.target.closest("#rx-query")) || (el = e.target.closest("#rx-newq"))){
      var qf = document.getElementById("rx-qform"); if(qf) qf.hidden = false;
      var rf = document.getElementById("rx-rform"); if(rf) rf.hidden = true;
      var qt = document.getElementById("rx-qtext"); if(qt) qt.focus();
      return;
    }
    if((el = e.target.closest("#rx-qcancel"))){ var qf2 = document.getElementById("rx-qform"); if(qf2) qf2.hidden = true; return; }
    if((el = e.target.closest("#rx-qsend"))){
      var rq = rxCurrent(), txtEl = document.getElementById("rx-qtext");
      if(!txtEl || !txtEl.value.trim()){ setTxt("rx-qerr", "Say what you need from the prescriber."); return; }
      if(rq){
        rq.status = "query";
        S.rxq.unshift({id:"Q-" + (116 + (S.rxq||[]).length), pat:rq.pat, q:txtEl.value.trim(),
                       sent:"now \u00b7 " + (document.getElementById("rx-qchan")||{value:"Secure email"}).value,
                       state:"waiting", ans:""});
        rxLog("Query sent to " + esc(rq.presc) + " on <b>" + rq.id + "</b> \u00b7 supply held");
      }
      txtEl.value = ""; setTxt("rx-qerr", "");
      document.getElementById("rx-qform").hidden = true;
      save(); renderRx();
      toast("Query sent \u2014 the prescription is held until it is answered");
      return;
    }
    if((el = e.target.closest("#rx-reject"))){
      var rf2 = document.getElementById("rx-rform"); if(rf2) rf2.hidden = false;
      var qf3 = document.getElementById("rx-qform"); if(qf3) qf3.hidden = true;
      return;
    }
    if((el = e.target.closest("#rx-rcancel"))){ var rf3 = document.getElementById("rx-rform"); if(rf3) rf3.hidden = true; return; }
    if((el = e.target.closest("#rx-rsend"))){
      var rr = rxCurrent(), reason = (document.getElementById("rx-reason")||{value:""}).value;
      if(rr){
        rr.status = "rejected";
        rxLog("<b>" + rr.id + "</b> rejected \u2014 " + esc(reason));
        raiseTicket({id:"TK-" + (58300 + Math.floor(Math.random()*90)), from:"Pharmacy desk", who:"Staff",
          subj:"Prescription rejected \u2014 " + rr.pat + " \u00b7 " + rr.id, prev:"", chan:"Internal", desk:"Support",
          unread:true, star:false, att:false, time:"now", pri:"High", folder:"inbox",
          thread:[{who:"Dr. Sara M.", side:"in", chan:"Internal", at:"now",
                   txt:"Rejected: " + reason + ". Tell the patient and the clinic, and ask for a corrected prescription."}]});
      }
      document.getElementById("rx-rform").hidden = true;
      RXSEL = null; save(); renderRx(); renderList();
      toast("Rejected \u2014 support has been asked to tell the patient and the clinic");
      return;
    }
    if((el = e.target.closest("#rx-original"))){ toast("Opening the signed original \u2014 the view is logged against your name"); return; }
    if((el = e.target.closest("#emp-new"))){ empFormOpen(null); return; }
    if((el = e.target.closest("[data-empedit]"))){ empFormOpen(el.getAttribute("data-empedit")); return; }
    if((el = e.target.closest("#em-save"))){ empSave(); return; }
    if((el = e.target.closest("#em-cancel"))){ document.getElementById("emp-form").hidden = true; EMPEDIT = null; return; }
    if((el = e.target.closest("[data-empdel-yes]"))){
      var eid = el.getAttribute("data-empdel-yes"), gone = empById(eid);
      S.employees = S.employees.filter(function(x){ return x.id !== eid; });
      if(gone) empLog("<b>" + esc(gone.name) + "</b> removed from the people master");
      EMPDEL = null; save(); renderEmployees();
      toast(gone ? gone.name + " removed \u2014 payroll stops from the next run" : "Record removed"); return;
    }
    if((el = e.target.closest("[data-empdel]"))){ EMPDEL = el.getAttribute("data-empdel"); renderEmployees(); return; }
    if((el = e.target.closest("[data-empdel-no]"))){ EMPDEL = null; renderEmployees(); return; }
    if((el = e.target.closest("[data-benadd]"))){ EMPADD = el.getAttribute("data-benadd"); renderEmployees(); return; }
    if((el = e.target.closest("[data-bencancel]"))){ EMPADD = null; renderEmployees(); return; }
    if((el = e.target.closest("[data-bensave]"))){
      var emp = empById(el.getAttribute("data-bensave")), pick = document.getElementById("ben-pick");
      if(emp && pick && pick.value){
        emp.ben = emp.ben || []; emp.ben.push(pick.value);
        empLog(esc(pick.value) + " added for <b>" + esc(emp.name) + "</b>");
        toast(pick.value + " added for " + emp.name + " \u2014 live from the next payroll run");
      }
      EMPADD = null; save(); renderEmployees(); return;
    }
    if((el = e.target.closest("[data-benrm]"))){
      var parts = el.getAttribute("data-benrm").split("|"), emp2 = empById(parts[0]);
      if(emp2){
        emp2.ben = (emp2.ben || []).filter(function(x){ return x !== parts[1]; });
        empLog(esc(parts[1]) + " removed for <b>" + esc(emp2.name) + "</b>");
        toast(parts[1] + " removed for " + emp2.name + " \u2014 ends from the next payroll run");
      }
      save(); renderEmployees(); return;
    }
    if((el = e.target.closest("#sup-new"))){ SUPEDIT = null; supFormOpen(null); return; }
    if((el = e.target.closest("[data-supedit]"))){ SUPSEL = el.getAttribute("data-supedit"); SUPDEL = null; supFormOpen(SUPSEL); renderSuppliers(); return; }
    if((el = e.target.closest("#sup-p-edit"))){ if(SUPSEL) supFormOpen(SUPSEL); return; }
    if((el = e.target.closest("#sp-save"))){ supSave(); return; }
    if((el = e.target.closest("#sp-cancel"))){ document.getElementById("sup-form").hidden = true; SUPEDIT = null; return; }
    if((el = e.target.closest("[data-supopen]"))){ SUPSEL = el.getAttribute("data-supopen"); SUPDEL = null; renderSuppliers();
      var pn = document.getElementById("sup-panel"); if(pn) pn.scrollIntoView({block:"nearest"}); return; }
    if((el = e.target.closest("#sup-p-close"))){ SUPSEL = null; renderSuppliers(); return; }
    if((el = e.target.closest("[data-supdel-yes]"))){
      var did = el.getAttribute("data-supdel-yes"), gone = supById(did);
      S.suppliers = S.suppliers.filter(function(x){ return x.id !== did; });
      if(SUPSEL === did) SUPSEL = null;
      SUPDEL = null; save(); renderSuppliers();
      toast(gone ? gone.name + " removed from the supplier master" : "Supplier removed"); return;
    }
    if((el = e.target.closest("[data-supdel]"))){ SUPDEL = el.getAttribute("data-supdel"); renderSuppliers(); return; }
    if((el = e.target.closest("[data-supdel-no]"))){ SUPDEL = null; renderSuppliers(); return; }
    if((el = e.target.closest("[data-supclear]")) || (el = e.target.closest("#sf-clear"))){
      SUPF = {q:"", status:"", cat:"", country:"", cert:""};
      ["sf-q","sf-status","sf-cat","sf-country","sf-cert"].forEach(function(id){ var f = document.getElementById(id); if(f) f.value = ""; });
      renderSuppliers(); return;
    }
    if((el = e.target.closest("#sup-export"))){
      toast("Exported " + (S.suppliers || []).filter(supMatch).length + " suppliers to CSV"); return;
    }
    if((el = e.target.closest("#ct-add"))){ CERTEDIT = null; certFormOpen(null); return; }
    if((el = e.target.closest("[data-certedit]"))){ certFormOpen(el.getAttribute("data-certedit")); return; }
    if((el = e.target.closest("#ct-save"))){ certSave(); return; }
    if((el = e.target.closest("#ct-cancel"))){ document.getElementById("ct-form").hidden = true; CERTEDIT = null; return; }
    if((el = e.target.closest("[data-certdel-yes]"))){
      var cid = el.getAttribute("data-certdel-yes"), sp = supById(SUPSEL);
      if(sp){ sp.certs = (sp.certs || []).filter(function(x){ return x.id !== cid; }); }
      SUPDEL = null; save(); renderSuppliers(); toast("Certificate removed \u2014 the supplier state was recalculated"); return;
    }
    if((el = e.target.closest("[data-certdel]"))){ SUPDEL = "cert:" + el.getAttribute("data-certdel"); renderSuppliers(); return; }
    if((el = e.target.closest("[data-sel]"))){ var id = el.getAttribute("data-sel"); SEL[id] = !SEL[id]; renderList(); e.stopPropagation(); return; }
    if((el = e.target.closest("[data-star]"))){ var t = S.tickets.filter(function(x){return x.id===el.getAttribute("data-star");})[0]; t.star = !t.star; save(); renderList(); e.stopPropagation(); return; }
    if((el = e.target.closest("#tk-all"))){ var rows = visible(), all = rows.every(function(t){return SEL[t.id];}); rows.forEach(function(t){ SEL[t.id] = !all; }); renderList(); return; }
    if((el = e.target.closest("[data-deskinbox]"))){
      FOLDER = el.getAttribute("data-deskinbox"); SEL = {}; Q = "";
      var sb = document.getElementById("tk-search"); if(sb) sb.value = "";
      renderLabels(); renderList(); window.__show("tickets"); return;
    }
    if((el = e.target.closest("[data-lbdel]"))){
      e.stopPropagation();
      var lid = el.getAttribute("data-lbdel"), gone = (S.labels||[]).filter(function(x){ return x.id === lid; })[0];
      S.labels = (S.labels || []).filter(function(x){ return x.id !== lid; });
      S.tickets.forEach(function(tk){ if(tk.labels) tk.labels = tk.labels.filter(function(x){ return x !== lid; }); });
      if(FOLDER === "label:" + lid) FOLDER = "inbox";
      save(); renderLabels(); renderList(); toast((gone ? gone.name : "Label") + " deleted \u2014 removed from every ticket");
      return;
    }
    if((el = e.target.closest("#lb-new"))){ var lf = document.getElementById("lb-form"); if(lf){ lf.hidden = !lf.hidden; if(!lf.hidden){ var ln = document.getElementById("lb-name"); if(ln) ln.focus(); } } return; }
    if((el = e.target.closest("#lb-cancel"))){ document.getElementById("lb-form").hidden = true; return; }
    if((el = e.target.closest("[data-lbc]"))){ LBC = el.getAttribute("data-lbc"); renderLabels(); return; }
    if((el = e.target.closest("#lb-save"))){
      var nm = (document.getElementById("lb-name") || {value:""}).value.trim();
      if(!nm){ toast("Give the label a name"); return; }
      S.labels = S.labels || [];
      S.labels.push({id:"L" + Date.now().toString(36), name:nm, c:LBC});
      document.getElementById("lb-name").value = ""; document.getElementById("lb-form").hidden = true;
      save(); renderLabels(); renderList(); toast("Label \u201c" + nm + "\u201d created");
      return;
    }
    if((el = e.target.closest("#lb-apply"))){
      var pk2 = document.getElementById("lb-pick");
      if(!pk2) return;
      if(pk2.hidden){ pk2.hidden = false; pk2.focus(); return; }
      if(!pk2.value){ toast("Choose a label first"); return; }
      bulk("label"); pk2.hidden = true; pk2.value = ""; return;
    }
    if((el = e.target.closest("[data-tf]"))){
      var k = el.getAttribute("data-tf"); FILT[k] = !FILT[k]; renderList(); return;
    }
    if((el = e.target.closest("#tf-clear"))){
      FILT = {chan:"", pri:"", unread:false, att:false};
      ["tf-chan","tf-pri"].forEach(function(id){ var f = document.getElementById(id); if(f) f.value = ""; });
      renderList(); return;
    }
    if((el = e.target.closest("#fd-toggle"))){ var fdb = document.getElementById("fd-bar"); if(fdb) fdb.hidden = !fdb.hidden; el.classList.toggle("on", !fdb.hidden); return; }
    if((el = e.target.closest("#tf-toggle"))){ var fb = document.getElementById("tk-filters"); if(fb) fb.hidden = !fb.hidden; return; }
    if((el = e.target.closest("[data-bulk]"))){ bulk(el.getAttribute("data-bulk")); return; }
    if((el = e.target.closest("[data-folder]"))){ FOLDER = el.getAttribute("data-folder"); SEL = {}; PAGE = 1; renderLabels(); renderList(); return; }
    if((el = e.target.closest("tr[data-tid]"))){
      var tid0 = el.getAttribute("data-tid"), t0 = S.tickets.filter(function(x){ return x.id === tid0; })[0];
      if(t0 && t0.folder === "drafts"){ cpOpen(t0); return; }
      openTicket(tid0); return;
    }
    if((el = e.target.closest("#td-send"))){
      var inp = document.getElementById("td-reply"), t = S.tickets.filter(function(x){return x.id===S.cur;})[0];
      var body = inp ? cpBodyText(inp) : "";
      if(!(body && t)){ toast(CMODE === "note" ? "Write the note first" : "Type a reply first"); return; }
      if(CMODE === "note"){
        t.thread.push({who:"Priya N.", side:"out", at:nowStr(), txt:body, note:true});
        tdReset(); save(); renderDetail(); toast("Note saved \u2014 only the desk can see it");
        return;
      }
      var m = {who:"Priya N.", side:"out", at:nowStr(), txt:body + (inp.querySelector(".wsig") ? sigText() : "")};
      if(TDFILES.length){ m.att = TDFILES.map(function(f){ return f[0]; }); t.att = true; t.pendingAtt = ""; }
      t.thread.push(m); tdReset(); t.unread = false;
      var after = (document.getElementById("td-after") || {value:""}).value;
      if(after === "waiting"){ t.status = "waiting"; }
      if(after === "closed"){ t.folder = "closed"; }
      save(); renderList(); renderDetail(); renderComposer();
      toast("Reply sent on " + t.chan + (after === "closed" ? " \u2014 ticket closed" : after === "waiting" ? " \u2014 waiting on the customer" : ""));
      if(after === "closed") window.__show("tickets");
      return;
    }
    if((el = e.target.closest("[data-cmode]"))){ CMODE = el.getAttribute("data-cmode"); renderComposer(); return; }
    if((el = e.target.closest("[data-tdcan]"))){
      var cv = el.getAttribute("data-tdcan"), ta2 = document.getElementById("td-reply");
      if(ta2){ ACTIVE_ED = "td-reply"; cpInsertAtTop(ta2, (CMODE === "note" ? cv : (CANNED_TXT[cv] || cv))); ta2.focus(); cpCaretEnd(); toast("Template inserted — edit it before sending"); }
      return;
    }
    if((el = e.target.closest("#ad-addrule"))){ var rf = document.getElementById("ad-ruleform"); if(rf) rf.hidden = !rf.hidden; return; }
    if((el = e.target.closest("#ad-rulecancel"))){ document.getElementById("ad-ruleform").hidden = true; return; }
    if((el = e.target.closest("#ad-rulesave"))){
      var kw = (document.getElementById("ad-kw") || {value:""}).value.trim(), dk = (document.getElementById("ad-desk") || {value:"Support"}).value;
      if(!kw){ toast("Give the rule at least one keyword"); return; }
      S.rules = S.rules || []; S.rules.push({kw:kw, desk:dk});
      document.getElementById("ad-kw").value = ""; document.getElementById("ad-ruleform").hidden = true;
      save(); renderAdmin(); toast("Rule added — “" + kw.split("|")[0] + "” now routes to " + dk);
      return;
    }
    if((el = e.target.closest("[data-ruledel]"))){ var ri = +el.getAttribute("data-ruledel"); var gone = S.rules.splice(ri, 1)[0]; save(); renderAdmin(); toast("Rule removed — " + (gone ? gone.desk : "")); return; }
    if((el = e.target.closest("[data-ruleup]"))){ var ru = +el.getAttribute("data-ruleup"); var tmp = S.rules[ru]; S.rules[ru] = S.rules[ru - 1]; S.rules[ru - 1] = tmp; save(); renderAdmin(); return; }
    if((el = e.target.closest("#ad-floorsave"))){
      var fv = parseFloat((document.getElementById("ad-floor") || {value:""}).value);
      if(isNaN(fv) || fv < 0 || fv > 60){ toast("Give a floor between 0 and 60"); return; }
      S.marginFloor = fv; save(); renderQuote(); renderAdmin(); toast("Margin floor is now " + fv + "% — every quote checks against it");
      return;
    }
    if((el = e.target.closest("#cp-open"))){ cpOpen(null); return; }
    if((el = e.target.closest("#gmc-dim"))){ var pn4 = document.getElementById("cp-panel"); if(pn4){ pn4.classList.remove("max"); } cpDim(false); return; }
    if((el = e.target.closest("#nb-btn"))){ var nbp = document.getElementById("nb-panel"); if(nbp) nbp.hidden = !nbp.hidden; renderNotes(); return; }
    if((el = e.target.closest("#nb-clear"))){ (S.notes||[]).forEach(function(x){ x.read = true; }); save(); renderNotes(); return; }
    if((el = e.target.closest("[data-noteopen]"))){
      var nid = el.getAttribute("data-noteopen"), nn = (S.notes||[]).filter(function(x){ return x.id === nid; })[0];
      if(nn){ nn.read = true; save(); renderNotes(); var nbp2 = document.getElementById("nb-panel"); if(nbp2) nbp2.hidden = true; if(nn.go) window.__show(nn.go); }
      return;
    }
    if((el = e.target.closest("#td-esc2"))){ var eb = document.getElementById("td-esc"); if(eb){ eb.click(); } return; }
    if((el = e.target.closest("#td-resolve2"))){ var rb = document.getElementById("td-resolve"); if(rb){ rb.click(); } return; }
    if((el = e.target.closest("#td-transfer"))){
      var host = el.parentNode, old = document.getElementById("td-deskpick");
      if(old){ old.parentNode.removeChild(old); return; }
      var box = document.createElement("span");
      box.id = "td-deskpick";
      box.style.cssText = "display:inline-flex;gap:6px;align-items:center;margin-left:8px";
      box.innerHTML = '<select class="dd" id="td-deskval" style="height:28px;font-size:12px">'
        + DESKS.map(function(d){ return "<option>" + d + "</option>"; }).join("")
        + '</select><span class="btn sm pri" id="td-deskgo">Move</span>';
      host.appendChild(box);
      return;
    }
    if((el = e.target.closest("#td-deskgo"))){
      var tv = S.tickets.filter(function(x){ return x.id === S.cur; })[0];
      var pick = document.getElementById("td-deskval");
      if(tv && pick){
        tv.desk = pick.value; tv.esc = ""; tv.breached = false;
        tv.thread.push({who:"System", side:"out", at:"now", txt:"Transferred to " + pick.value + ". The clock restarts on that desk's SLA."});
        save(); renderList(); renderDetail();
        toast(tv.id + " moved to " + pick.value);
      }
      var bx = document.getElementById("td-deskpick"); if(bx) bx.parentNode.removeChild(bx);
      return;
    }
    if((el = e.target.closest("#td-merge"))){
      var tm = S.tickets.filter(function(x){ return x.id === S.cur; })[0];
      var other = S.tickets.filter(function(x){ return x.id !== S.cur && x.folder === "inbox" && x.from === (tm||{}).from; })[0];
      if(tm && other){
        tm.thread = tm.thread.concat((other.thread || []).map(function(m){ var c = JSON.parse(JSON.stringify(m)); c.txt = "[merged from " + other.id + "] " + c.txt; return c; }));
        other.folder = "closed"; other.mergedInto = tm.id;
        save(); renderList(); renderDetail(); toast(other.id + " merged into " + tm.id);
      } else toast("Nothing else open from this sender to merge");
      return;
    }
    if((el = e.target.closest("#td-insert"))){
      var box2 = document.getElementById("td-reply");
      if(box2){
        box2.value = "Thank you for coming back to us. I have the quote for cycles 4 and 5 ready and have attached it "
          + "here. It holds for 14 days, and the cold-chain surcharge is included. Tell me to proceed and I will raise "
          + "the proforma today.";
        box2.focus(); toast("Saved reply inserted \u2014 edit it before sending");
      }
      return;
    }
    if((el = e.target.closest("#td-attach"))){
      var ta = S.tickets.filter(function(x){ return x.id === S.cur; })[0];
      if(ta){ TDFILES.push(["quote_CA-2026-0418_cycles4-5.pdf", "PDF", "96 KB"]); tdFiles(); toast("quote_CA-2026-0418_cycles4-5.pdf attached to the reply"); }
      return;
    }
    if((el = e.target.closest("#td-wait"))){
      var tw = S.tickets.filter(function(x){ return x.id === S.cur; })[0];
      if(tw){
        tw.status = tw.status === "waiting" ? "" : "waiting";
        tw.thread.push({who:"System", side:"out", at:"now", txt: tw.status === "waiting"
          ? "Waiting on the customer. The SLA clock is paused until they reply."
          : "Clock restarted \u2014 no longer waiting on the customer."});
        save(); renderList(); renderDetail();
        toast(tw.status === "waiting" ? tw.id + " is now waiting on the customer" : tw.id + " clock restarted");
      }
      return;
    }
    if((el = e.target.closest("#td-spam"))){
      var ts = S.tickets.filter(function(x){ return x.id === S.cur; })[0];
      if(ts){ ts.folder = "spam"; ts.unread = false; save(); renderList();
        toast(ts.id + " marked as spam \u2014 the sender is blocked on that channel");
        window.__show("tickets"); }
      return;
    }
    if((el = e.target.closest("#td-prichange"))){
      var tp = S.tickets.filter(function(x){ return x.id === S.cur; })[0];
      if(tp){
        var order = ["Low", "Normal", "High", "Urgent"];
        tp.pri = order[(order.indexOf(tp.pri) + 1) % order.length];
        save(); renderList(); renderDetail(); toast(tp.id + " priority set to " + tp.pri);
      }
      return;
    }
    if((el = e.target.closest("#td-resolve")) || (el = e.target.closest("#td-close"))){
      var t2 = S.tickets.filter(function(x){return x.id===S.cur;})[0];
      if(t2){ t2.folder="closed"; t2.unread=false; save(); renderList(); toast(t2.id+" closed"); window.__show("tickets"); }
      return;
    }
    if((el = e.target.closest("#td-esc"))){
      var t3 = S.tickets.filter(function(x){return x.id===S.cur;})[0];
      if(t3){ t3.esc = "Pharmacovigilance"; t3.pri="Urgent"; t3.thread.push({who:"System",side:"out",at:"now",txt:"Escalated to Pharmacovigilance. Clock reset to that desk's SLA."}); save(); renderList(); renderDetail(); toast(t3.id+" escalated to Pharmacovigilance"); }
      return;
    }
    if((el = e.target.closest("#reset-demo"))){
      if(window.CRM){
        window.CRM.reset().then(function(fresh){
          S = fresh; SEL = {}; FOLDER = "inbox";
          renderLabels(); renderList(); renderDetail(); renderComposer(); renderNotes();
          renderAdmin(); renderMyLeave(); renderLeaveMgmt(); renderHolidays();
          renderSuppliers(); renderEmployees(); renderRx(); renderQA(); renderOrders();
          renderQuote(); renderSourcing(); renderCase(); renderWarehouse(); renderColdChain();
          toast("Demo data reset");
        });
      }
      return; }
    if((el = e.target.closest("#hd-declare"))){
      var hf = document.getElementById("hd-form"); if(hf) hf.hidden = !hf.hidden; return;
    }
    if((el = e.target.closest("#hd-cancel"))){
      var hf2 = document.getElementById("hd-form");
      if(hf2){ hf2.hidden = true; hf2.removeAttribute("data-editing"); }
      var sb = document.getElementById("hd-submit"); if(sb) sb.textContent = "Send to Admin for approval";
      return;
    }
    if((el = e.target.closest("[data-hol-edit]"))){
      var h0 = holById(el.getAttribute("data-hol-edit")); if(!h0) return;
      var f3 = document.getElementById("hd-form"); if(!f3) return;
      f3.hidden = false; f3.setAttribute("data-editing", h0.id);
      document.getElementById("hd-date").value = h0.d;
      document.getElementById("hd-name").value = h0.n;
      document.getElementById("hd-office").value = h0.o;
      document.getElementById("hd-type").value = h0.t;
      document.getElementById("hd-submit").textContent = "Send the change to Admin";
      toast("Editing " + h0.n + " — Admin still has to approve it");
      return;
    }
    if((el = e.target.closest("#hd-submit"))){
      var gh = function(id){ var x = document.getElementById(id); return x ? x.value.trim() : ""; };
      var name = gh("hd-name");
      if(!name){ toast("Give the holiday a name"); return; }
      var form = document.getElementById("hd-form"), editing = form.getAttribute("data-editing");
      var h = {id: editing || ("H" + (100 + (S.holreq||[]).length + (S.holidays||[]).length)),
               d:gh("hd-date"), n:name, o:gh("hd-office"), t:gh("hd-type")};
      S.holreq.unshift({rid:"HR-" + (20 + (S.holreq||[]).length), action: editing ? "edit" : "add",
                        by:"Hannah P.", at:"today", h:h});
      save();
      form.hidden = true; form.removeAttribute("data-editing");
      document.getElementById("hd-name").value = "";
      document.getElementById("hd-submit").textContent = "Send to Admin for approval";
      renderHolidays();
      toast("Sent to Admin — it reaches the calendars once approved");
      return;
    }
    if((el = e.target.closest("[data-hol-remove]"))){
      var hid = el.getAttribute("data-hol-remove"), hr0 = holById(hid);
      S.holreq.unshift({rid:"HR-" + (20 + (S.holreq||[]).length), action:"remove", by:"Hannah P.", at:"today",
                        h:{id:hid, d:hr0.d, n:hr0.n, o:hr0.o, t:hr0.t}});
      save(); renderHolidays();
      toast("Removal sent to Admin for approval");
      return;
    }
    if((el = e.target.closest("[data-holreq]"))){
      var rid = el.getAttribute("data-rid"), how2 = el.getAttribute("data-holreq");
      var qi = (S.holreq||[]).map(function(x){ return x.rid; }).indexOf(rid);
      if(qi < 0) return;
      var q = S.holreq.splice(qi, 1)[0];
      if(how2 === "approve"){
        if(q.action === "add"){ q.h.a = "approved today"; S.holidays.unshift(q.h); }
        if(q.action === "edit"){
          var idx = S.holidays.map(function(x){ return x.id; }).indexOf(q.h.id);
          q.h.a = "approved today";
          if(idx >= 0) S.holidays[idx] = q.h; else S.holidays.unshift(q.h);
        }
        if(q.action === "remove"){
          S.holidays = S.holidays.filter(function(x){ return x.id !== q.h.id; });
        }
        S.tickets.unshift({id:"TK-"+(58400 + (S.holidays||[]).length), from:"Admin", who:"Announcement",
          subj:(q.h.t === "Emergency closure" ? "Emergency closure · " : "Holiday calendar · ") +
               (q.action === "remove" ? "removed " : q.action === "edit" ? "changed " : "") + q.h.n + " · " + q.h.d,
          prev:q.h.o, chan:"Internal", desk:"HR & admin", unread:true, star:false, att:false, time:"now",
          pri:(q.h.t === "Emergency closure" ? "Urgent" : "Normal"), folder:"inbox",
          thread:[{who:"Admin", side:"out", chan:"Internal", at:"now",
                   txt:"Approved. " + q.h.n + " on " + q.h.d + " applies to " + q.h.o +
                       ". Every desk calendar and the SBU view have been updated."}]});
      }
      save(); renderHolidays(); renderList();
      toast(q.h.n + (how2 === "approve" ? " approved — every calendar updated" : " rejected — nothing changed"));
      return;
    }
    if((el = e.target.closest("#lv-apply"))){
      var f = document.getElementById("lv-form"); if(f) f.hidden = !f.hidden; return;
    }
    if((el = e.target.closest("#lv-cancel"))){
      var f2 = document.getElementById("lv-form"); if(f2) f2.hidden = true; return;
    }
    if((el = e.target.closest("#lv-submit"))){
      var g = function(id){ var x = document.getElementById(id); return x ? x.value.trim() : ""; };
      var reason = g("lv-reason");
      if(!reason){ toast("Tell HR why, even briefly"); return; }
      var l = {id:"LV-2026-0"+(190 + lvRows().length), who:"Priya N.", dept:"Support", type:g("lv-type"),
               from:g("lv-from"), to:g("lv-to"), days:g("lv-days") || "1.0", reason:reason,
               cover:g("lv-cover") || "&mdash;", status:"waiting", mine:true};
      S.leave.unshift(l); lvTicket(l); save();
      document.getElementById("lv-form").hidden = true;
      document.getElementById("lv-reason").value = ""; document.getElementById("lv-cover").value = "";
      renderMyLeave(); renderLeaveMgmt(); renderHolidays(); renderList();
      toast("Sent to HR — it is on their desk now");
      return;
    }
    if((el = e.target.closest("[data-lv]"))){
      var id = el.getAttribute("data-id"), how = el.getAttribute("data-lv");
      var rec = lvRows().filter(function(x){ return x.id === id; })[0];
      if(rec){
        rec.status = how === "approve" ? "approved" : "rejected";
        S.tickets.forEach(function(t){
          if(t.desk === "HR & admin" && t.subj.indexOf("Leave application") === 0 && t.from === rec.who){
            t.folder = "closed"; t.unread = false;
          }
        });
        save(); renderLeaveMgmt(); renderMyLeave(); renderList();
        toast(rec.who + " · leave " + (how === "approve" ? "approved" : "rejected") + " — they have been told");
      }
      return;
    }
    if((el = e.target.closest("[data-assign]"))){
      var who = el.getAttribute("data-assign");
      if(who === "auto"){
        var card = el.closest(".card"), n = 0;
        card.querySelectorAll("tbody tr").forEach(function(tr){
          var o = tr.querySelector(".own"), b = tr.querySelector("[data-assign]");
          if(o && b && /Unassigned/.test(o.textContent)){
            var name = b.getAttribute("data-assign");
            if(name && name !== "auto"){ o.innerHTML = name; b.className = "btn sm gh"; b.textContent = "Reassign"; n++; }
          }
        });
        toast(n ? n + " item" + (n>1?"s":"") + " assigned to the lightest load on this desk" : "Everything on this desk already has an owner");
      } else {
        var row = el.closest("tr"), o2 = row && row.querySelector(".own");
        if(o2){ o2.innerHTML = who; el.className = "btn sm gh"; el.textContent = "Reassign";
                toast(row.querySelector("td").textContent.trim() + " assigned to " + who); }
      }
      return;
    }
    if((el = e.target.closest(".tab")) && !el.hasAttribute("data-go")){ var box = el.parentElement; box.querySelectorAll(".tab").forEach(function(x){ x.classList.remove("on"); }); el.classList.add("on"); return; }
    if((el = e.target.closest(".cb"))){ el.classList.toggle("on"); el.innerHTML = el.classList.contains("on") ? "&#10003;" : ""; return; }
    if((el = e.target.closest(".btn, .act")) && !el.hasAttribute("data-go")){ genericAction(el); return; }
  });
  [["sf-q","q"],["sf-status","status"],["sf-cat","cat"],["sf-country","country"],["sf-cert","cert"]].forEach(function(p){
    var f = document.getElementById(p[0]);
    if(f) f.addEventListener(f.tagName === "SELECT" ? "change" : "input", function(){ SUPF[p[1]] = f.value; renderSuppliers(); });
  });
  document.addEventListener("selectionchange", function(){
    var body = document.getElementById("cp-body"), sel = window.getSelection();
    if(body && sel.rangeCount && body.contains(sel.getRangeAt(0).commonAncestorContainer)) CPRANGE = sel.getRangeAt(0).cloneRange();
  });
  document.addEventListener("keydown", function(ev){
    if(ev.key === "Escape"){
      if(ev.target && ev.target.closest && ev.target.closest("#cp-panel")) return;
      closeDoc();
    }
  });
  var slip = document.getElementById("slipmonth");
  if (slip) slip.addEventListener("change", function(){
    document.querySelectorAll("[data-slip]").forEach(function(d){
      d.hidden = d.getAttribute("data-slip") !== slip.value;
    });
    var dl = document.getElementById("slipdl");
    if (dl) dl.textContent = "Download " + slip.options[slip.selectedIndex].text;
    toast("Showing " + slip.options[slip.selectedIndex].text);
  });
  [["tf-chan","chan"],["tf-pri","pri"]].forEach(function(pr){
    var f = document.getElementById(pr[0]); if(f) f.addEventListener("change", function(){ FILT[pr[1]] = f.value; renderList(); });
  });
  document.addEventListener("change", function(ev){
    var sEl = ev.target.closest && ev.target.closest("[data-sla]");
    if(sEl){ S.sla = S.sla || {}; S.sla[sEl.getAttribute("data-sla")] = sEl.value.trim(); save(); toast(sEl.getAttribute("data-sla") + " first reply target: " + sEl.value.trim()); }
  });
  var s = document.getElementById("tk-search");
  if(s) s.addEventListener("input", function(){ Q = s.value; PAGE = 1; renderList(); });
  var r = document.getElementById("td-reply");
  if(r) r.addEventListener("keydown", function(e){ if(e.key === "Enter"){ document.getElementById("td-send").click(); } });
};
