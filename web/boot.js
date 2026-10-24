(function(){
  var META = {"command":["Operations","Command Centre"],"service":["Service Desk","TK-58120 · Quote for cycles 4 and 5"],"tdash":["Service Desk","Ticket overview"],"tickets":["Service Desk","All tickets"],"routing":["Service Desk","Channels & routing rules"],"cases":["Patient Cases","Case CA-2026-0418 · Den R."],"rx":["Rx Desk","Prescription verification queue"],"campaigns":["Marketing","Campaigns & journeys"],"sourcing":["Sourcing Desk","RFQ-2026-1188 · Blinatumomab 35 mcg"],"partners":["Partner Network","Scorecards & qualification"],"quotes":["Quotes & Proforma","QT-2026-0931 · Den R."],"orders":["Orders","Fulfilment pipeline"],"qa":["QA / QC Release","Release queue · batch D-44102"],"wh":["Warehouse","Picking, packing & dispatch"],"cold":["Cold Chain","SHP-2026-3391 · Frankfurt → Dublin"],"docs":["Document Vault","Customers › Den R. › CA-2026-0418"],"compliance":["Compliance & QMS","Regulatory, quality and legal register"],"pv":["Pharmacovigilance","Adverse events & regulatory clocks"],"finance":["Finance","Invoicing, payables & margin"],"people":["People & Training","Staff, SOPs and competency"],"reports":["Reports","Performance & insight"],"admin":["Admin","Settings & business rules"],"channels":["Channels","Order sources & the rules each one sets"],"institutional":["Institutional","Bulk, hospital and tender pipeline"],"legal":["Legal","Contracts, obligations & claims"],"pportal":["Patient Portal","What the patient sees"],"bportal":["Partner Portal","What the partner sees"],"goodsin":["Goods In","Receipting & PO matching"],"recalls":["Recalls & Returns","Recall execution, returns & destruction"],"permits":["Permits & Customs","Import permits, entries & duty"],"demand":["Demand Planning","Forecast, cover & forward buys"],"makers":["Manufacturers","MAH relationships & access programmes"],"suppliers":["Supply chain","Supplier master, certificates & licences"],"purchasing":["Supply chain","Purchase orders & committed spend"],"dpo":["Data Protection","Breaches, requests & transfers"],"ddigital":["Departments","Digital marketing desk"],"ddesign":["Departments","Design desk"],"dit":["Departments","IT & systems desk"],"dwh":["Departments","Warehouse desk"],"dsource":["Departments","Sourcing & procurement desk"],"hrdash":["People & payroll","HR dashboard"],"employees":["People & payroll","Employees & benefits"],"attend":["People & payroll","Attendance"],"payroll":["People & payroll","Payroll & incentive"],"letters":["People & payroll","Letters & documents"],"myspace":["People & payroll","My workspace"],"catalogue":["Master Data","Product catalogue"],"accounts":["Master Data","Customer accounts"],"pricebook":["Master Data","Price book & rate contracts"],"stock":["Master Data","Stock & batch ledger"],"trace":["Records","Serialisation & track and trace"],"cdr":["Records","Controlled drugs register"],"assist":["Patient Care","Patient assistance & affordability"],"refill":["Patient Care","Therapy & refill programme"],"roles":["Admin","Roles, permissions & the org tree"],"audit":["Records","Audit trail & e-signature"],"signin":["Access","Signing in"],"lanes":["Fulfil","Couriers, lanes & shippers"],"mypay":["My Profile","My salary & payslips"],"myleave":["My Profile","My leave"],"mybenefits":["My Profile","My benefits"],"claims":["My Profile","Claims & expenses"],"leavemgmt":["People & payroll","Leave management"],"ctc":["People & payroll","Salary structure & grades"],"sbu":["Business Head","Apollo SBU · whole business"],"depts":["Departments","Every desk at a glance"],"dsales":["Departments","Sales desk"],"dmkt":["Departments","Marketing desk"],"dsupport":["Departments","Support desk"],"dproc":["Departments","Order processing desk"],"dship":["Departments","Shipping desk"],"dpharm":["Departments","Pharmacy desk"],"dqual":["Departments","Quality & regulatory desk"],"dacct":["Departments","Accounts desk"],"dlegal":["Departments","Legal desk"],"dadmin":["Departments","HR & admin desk"],"blueprint":["Blueprint","Module map, teams and build sequence"]};
  var DEPTKEY = {"dsales":"dsales","dmkt":"dmkt","ddigital":"ddigital","ddesign":"ddesign","dsupport":"dsupport","dproc":"dproc","dship":"dship","dwh":"dwh","dsource":"dsource","dpharm":"dpharm","dqual":"dqual","dacct":"dacct","dlegal":"dlegal","dit":"dit","dadmin":"dadmin","hrdash":"dadmin","employees":"dadmin","attend":"dadmin","payroll":"dadmin","letters":"dadmin"};
  var FLOW_ORDER_JS = ["tickets","cases","sourcing","quotes","rx","finance","qa","wh","cold","docs"];
  var PH = {};
  function show(key){
    var found = false;
    document.querySelectorAll('.screen').forEach(function(s){
      var on = s.getAttribute('data-screen') === key;
      s.hidden = !on; if (on) found = true;
    });
    if (!found) return;
    if (typeof ROLES !== 'undefined' && ROLES && ROLE && !roleAllows(key)) { return show(ROLES[ROLE].home); }
    document.documentElement.setAttribute('data-dept', DEPTKEY[key] || '');
    var navKey = (key === 'depts' || (META[key] && META[key][0] === 'Departments')) ? 'depts' : key;
    document.querySelectorAll('.nav').forEach(function(n){
      n.classList.toggle('on', n.getAttribute('data-go') === navKey);
    });
    var act = document.querySelector('.secbody .nav.on');
    document.querySelectorAll('.navsec').forEach(function(s){
      s.classList.toggle('open', !!(act && s.contains(act)));
    });
    var order = FLOW_ORDER_JS;
    var idx = order.indexOf(key);
    document.querySelectorAll('.fstep').forEach(function(f){
      var i = order.indexOf(f.getAttribute('data-k'));
      f.classList.toggle('on', i === idx && idx >= 0);
      f.classList.toggle('done', idx >= 0 && i < idx);
    });
    var m = META[key] || PH[key];
    if (m) { document.getElementById('crumb').textContent = m[0]; document.getElementById('title').textContent = m[1] || m[0]; }
    document.getElementById('content').scrollTop = 0;
    try { localStorage.setItem('aglc-screen', key); } catch(e){}
  }
  document.addEventListener('click', function(e){
    var sh = e.target.closest('.sechd');
    if (sh) {
      var sec = sh.parentNode, was = sec.classList.contains('open');
      document.querySelectorAll('.navsec').forEach(function(s){ s.classList.remove('open'); });
      if (!was) sec.classList.add('open');
      return;
    }
    var g = e.target.closest('[data-go]');
    if (g) { e.preventDefault(); show(g.getAttribute('data-go')); return; }
    var t = e.target.closest('.sw');
    if (t) {
      var th = t.getAttribute('data-theme');
      document.documentElement.setAttribute('data-theme', th);
      document.querySelectorAll('.sw').forEach(function(b){ b.setAttribute('aria-pressed', String(b === t)); });
      try { localStorage.setItem('aglc-theme', th); } catch(e2){}
    }
  });
  var startScreen = 'command', startTheme = 'deep';
  try {
    startScreen = localStorage.getItem('aglc-screen') || startScreen;
    startTheme = localStorage.getItem('aglc-theme') || startTheme;
  } catch(e){}
  document.documentElement.setAttribute('data-theme', startTheme);
  document.querySelectorAll('.sw').forEach(function(b){ b.setAttribute('aria-pressed', String(b.getAttribute('data-theme') === startTheme)); });
  show(startScreen);
  if (window.__crmInit) {
    if (window.CRM) window.CRM.ready(function(){ window.__crmInit(show); });
    else window.__crmInit(show);
  }

  var ROLES = {
    admin:   {n:"Raj K.",    r:"Admin &middot; board",     i:"RK", home:"command", all:true},
    sbu:     {n:"R. Kanyal", r:"SBU head &middot; Apollo", i:"RK", home:"sbu",   deny:["admin","employees","letters","cdr"]},
    dsales   :{n:"Marco B.", r:"Sales lead", i:"MB", home:"dsales", nav:["myspace","mypay","myleave","mybenefits","claims","attend","signin","tickets","docs","reports","tdash","cases","institutional","channels","quotes","sourcing","partners","orders","pportal","bportal","catalogue","accounts","pricebook","assist","refill"]},
    dmkt     :{n:"Aisha K.", r:"Marketing lead", i:"AK", home:"dmkt", nav:["myspace","mypay","myleave","mybenefits","claims","attend","signin","tickets","docs","reports","tdash","routing","campaigns","channels","cases","refill"]},
    ddigital :{n:"Tom R.", r:"Digital marketing lead", i:"TR", home:"ddigital", nav:["myspace","mypay","myleave","mybenefits","claims","attend","signin","tickets","docs","reports","tdash","campaigns","channels","cases","routing"]},
    ddesign  :{n:"Neha S.", r:"Design lead", i:"NS", home:"ddesign", nav:["myspace","mypay","myleave","mybenefits","claims","attend","signin","tickets","docs","reports","campaigns","pportal","bportal","catalogue"]},
    dsupport :{n:"Priya N.", r:"Support lead", i:"PN", home:"dsupport", nav:["myspace","mypay","myleave","mybenefits","claims","attend","signin","tickets","docs","reports","tdash","routing","cases","channels","orders","cold","pportal","assist","refill","accounts"]},
    dproc    :{n:"Rosa M.", r:"Processing lead", i:"RM", home:"dproc", nav:["purchasing","myspace","mypay","myleave","mybenefits","claims","attend","signin","tickets","docs","reports","orders","quotes","goodsin","wh","permits","finance","stock","catalogue","accounts","lanes"]},
    dship    :{n:"Colm B.", r:"Shipping lead", i:"CB", home:"dship", nav:["myspace","mypay","myleave","mybenefits","claims","attend","signin","tickets","docs","reports","orders","wh","cold","permits","recalls","bportal","stock","trace","lanes"]},
    dwh      :{n:"Bart K.", r:"Warehouse lead", i:"BK", home:"dwh", nav:["purchasing","myspace","mypay","myleave","mybenefits","claims","attend","signin","tickets","docs","reports","wh","goodsin","cold","orders","recalls","stock","trace","catalogue","lanes"]},
    dsource  :{n:"Yusuf A.", r:"Sourcing lead", i:"YA", home:"dsource", nav:["suppliers","purchasing","myspace","mypay","myleave","mybenefits","claims","attend","signin","tickets","docs","reports","sourcing","partners","makers","quotes","demand","cases","catalogue","pricebook","stock","lanes"]},
    dpharm   :{n:"Dr. Sara M.", r:"Responsible pharmacist", i:"SM", home:"dpharm", nav:["myspace","mypay","myleave","mybenefits","claims","attend","signin","tickets","docs","reports","rx","cases","pv","qa","compliance","catalogue","stock","cdr","trace","assist","refill"]},
    dqual    :{n:"Grace A.", r:"QA &amp; regulatory lead", i:"GA", home:"dqual", nav:["suppliers","myspace","mypay","myleave","mybenefits","claims","attend","signin","tickets","docs","reports","qa","compliance","pv","recalls","goodsin","permits","makers","stock","trace","cdr","audit","catalogue"]},
    dacct    :{n:"Jia L.", r:"Accounts lead", i:"JL", home:"dacct", nav:["suppliers","purchasing","myspace","mypay","myleave","mybenefits","claims","attend","signin","tickets","docs","reports","finance","orders","quotes","accounts","pricebook","assist","ctc"]},
    dlegal   :{n:"Claire D.", r:"Counsel &middot; case to case", i:"CD", home:"dlegal", nav:["suppliers","tickets","docs","reports","legal","dpo","compliance","partners","makers","finance","accounts","audit"]},
    dit      :{n:"Ravi K.", r:"IT &amp; systems lead", i:"RK", home:"dit", nav:["myspace","mypay","myleave","mybenefits","claims","attend","signin","tickets","docs","reports","admin","dpo","people","roles","audit"]},
    dadmin   :{n:"Hannah P.", r:"HR lead", i:"HP", home:"dadmin", nav:["myspace","mypay","myleave","mybenefits","claims","attend","signin","tickets","docs","reports","hrdash","employees","payroll","letters","people","dpo","admin","roles","leavemgmt","ctc"]},
  };
  var ROLE = "admin";
  function roleAllows(k){
    var R = ROLES[ROLE];
    if (R.all) return true;
    if (k === "service") k = "tickets";
    if (ROLES[k]) return k === R.home;          // another role's own dashboard
    if (k === "depts") return false;
    if (R.nav) { return R.nav.indexOf(k) >= 0; }
    return (R.deny || []).indexOf(k) < 0;
  }
  function applyRole(key, jump){
    ROLE = ROLES[key] ? key : "admin";
    var R = ROLES[ROLE], dept = !!R.nav;
    document.querySelectorAll('.nav[data-go]').forEach(function(n){
      var k = n.getAttribute('data-go'), lbl = n.querySelector('span:not(.cnt)');
      if (n.id === 'nav-depts') {
        if (!n.__par) { n.__par = n.parentNode; n.__home = n.nextSibling; }
        var wrap = document.querySelector('.navwrap');
        if (dept) { n.setAttribute('data-go', R.home); if (lbl) lbl.textContent = 'My desk';
                    if (wrap.firstChild !== n) wrap.insertBefore(n, wrap.firstChild); }
        else { n.setAttribute('data-go', 'depts'); if (lbl) lbl.textContent = 'Department Desks';
               if (n.parentNode !== n.__par) n.__par.insertBefore(n, n.__home); }
        n.hidden = false;
        return;
      }
      n.hidden = !roleAllows(k);
    });
    document.querySelectorAll('.navsec').forEach(function(s){
      var seen = false;
      s.querySelectorAll('.nav[data-go]').forEach(function(n){ if (!n.hidden) seen = true; });
      s.hidden = !seen;
    });
    document.querySelectorAll('.fstep[data-go]').forEach(function(f){ f.hidden = !roleAllows(f.getAttribute('data-go')); });
    var fb = document.querySelector('.flowbar'); if (fb) fb.hidden = dept;
    document.querySelectorAll('.tab[data-go]').forEach(function(tb){
      var k = tb.getAttribute('data-go');
      tb.hidden = dept && (ROLES[k] || k === 'depts') && k !== ROLE;
    });
    var me = document.querySelector('.me');
    if (me) me.innerHTML = '<div class="avatar">' + R.i + '</div><div><div style="font-size:11.5px;font-weight:500">' + R.n +
                           '</div><div class="rl">' + R.r + '</div></div>';
    var earns = ["admin","sbu","dsales","dmkt","ddigital"].indexOf(ROLE) >= 0;
    ["my-incentive","my-incentive-note"].forEach(function(id){ var e = document.getElementById(id); if (e) e.hidden = !earns; });
    var ni = document.getElementById('no-incentive'); if (ni) ni.hidden = earns;
    window.__ROLE = ROLE; if (window.__onRole) window.__onRole(ROLE);
    var sel = document.getElementById('viewas'); if (sel) sel.value = ROLE;
    try { localStorage.setItem('aglc-role', ROLE); } catch(e){}
    var open = document.querySelector('.screen:not([hidden])');
    var cur = open && open.getAttribute('data-screen');
    if (jump || !cur || !roleAllows(cur)) show(R.home);
  }
  var vs = document.getElementById('viewas');
  if (vs) vs.addEventListener('change', function(){ applyRole(vs.value, true); });
  var startRole = 'admin';
  try { startRole = localStorage.getItem('aglc-role') || startRole; } catch(e){}
  if (window.CRM) window.CRM.ready(function(){ applyRole(startRole, false); });
  else applyRole(startRole, false);
})();
