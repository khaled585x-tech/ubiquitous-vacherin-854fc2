/* ===========================================================================
   خالد عبدالله الريحاني — الملف الشخصي
   البيانات + العرض + التفاعلات
   ---------------------------------------------------------------------------
   لتعديل أي معلومة: عدّل الكائنات أدناه فقط، ثم أعد تحميل الصفحة.
   =========================================================================== */

/* ═════════════════════════════════════════════════════════════════════════
   1) الإعدادات العامة  ←  ضع روابطك هنا
   ═════════════════════════════════════════════════════════════════════════ */
const PROFILE = {
  name       : "خالد عبدالله الريحاني",
  role       : "أخصائي شبكات وذكاء اصطناعي",
  roleEn     : "Network Technology & AI Specialist",
  location   : "الطائف، المملكة العربية السعودية",
  phone      : "0550723312",
  phoneIntl  : "+966550723312",        //صيغة دولية للزر (داخل السعودية)
  email      : "khaled585x@gmail.com",
  cvPage     : "cv.html",              //صفحة السيرة الذاتية للطباعة

  /* معرّفات مجلدات Google Drive — تم التأكد أنها مشاركة "أي شخص لديه الرابط" */
  drive: {
    certs  : "1vHei7LvNPae0w9tKWr5bhPdrv84Au7rK",   // مجلد الشهادات
    photos : "1kCZo9IF7tPA4-Fzd6Hgf9yYQmFWmMDLv",   // مجلد التصوير
  },

  // ↓↓↓ ضع الروابط هنا — اتركها فارغة ("") لإخفاء الزر تلقائيًا ↓↓↓
  links: {
    linkedin: "",   // مثال: "https://www.linkedin.com/in/username"
    github  : "",   // مثال: "https://github.com/username"
  },
};

/* ═════════════════════════════════════════════════════════════════════════
   2) مجالات التخصص
   ═════════════════════════════════════════════════════════════════════════ */
const EXPERTISE = [
  { icon:"🌐", color:"#2f81f7", title:"شبكات الحاسب والبنية التحتية",
    text:"تصميم الشبكات، إعداد الأجهزة، استكشاف الأخطاء، البروتوكولات والبنية التحتية." },
  { icon:"🤖", color:"#7c5cff", title:"الذكاء الاصطناعي",
    text:"Machine Learning، Deep Learning، Generative AI، LLMs، RAG وAI Agents." },
  { icon:"📊", color:"#00c2a8", title:"تحليل البيانات",
    text:"Python، NumPy، Pandas، Matplotlib وScikit-learn." },
  { icon:"🛡️", color:"#d13438", title:"الأمن السيبراني",
    text:"تحليل التهديدات، الأمن الهجومي والدفاعي، Kali Linux، Wireshark وCTF." },
  { icon:"☁️", color:"#f0883e", title:"الحوسبة السحابية",
    text:"Cloud Computing ودمج حلول الذكاء الاصطناعي مع البيئات السحابية." },
  { icon:"🚀", color:"#00b36b", title:"المشاريع التقنية",
    text:"تحويل الأفكار التقنية إلى نماذج ومشاريع عملية قابلة للتطوير." },
];

/* ═════════════════════════════════════════════════════════════════════════
   3) المهارات التقنية
   ═════════════════════════════════════════════════════════════════════════ */
const SKILL_GROUPS = [
  { key:"networking", color:"#2f81f7", label:"Networking", items:[
    "Networking Fundamentals","Network Infrastructure","Network Troubleshooting",
    "Network Protocols","Switch Configuration","Network Design" ] },

  { key:"ai", color:"#7c5cff", label:"Artificial Intelligence", items:[
    "Machine Learning","Deep Learning","Generative AI","Large Language Models",
    "RAG","AI Agents","Cloud AI Integration" ] },

  { key:"data", color:"#00c2a8", label:"Python & Data", items:[
    "Python","NumPy","Pandas","Matplotlib","Scikit-learn","OpenCV" ] },

  { key:"cyber", color:"#d13438", label:"Cybersecurity", items:[
    "Threat Analysis","Cyber Threat Intelligence","MITRE ATT&CK","Penetration Testing",
    "Red Team / Blue Team","Kali Linux","Wireshark","CTF" ] },

  { key:"tools", color:"#f0883e", label:"Tools", items:[
    "Git","GitHub","VS Code","Google Colab","Linux",
    "Microsoft Office","Microsoft Office Specialist (MOS)" ] },
];

/* أعمدة "ملف المهارات" في الهيرو — عرض نسبي للتركيز لا الشهادة */
const MATRIX = [
  { label:"Networking",    val:92, color:"#2f81f7" },
  { label:"Cybersecurity", val:70, color:"#d13438" },
  { label:"Python & Data", val:65, color:"#00c2a8" },
  { label:"AI / LLMs",     val:60, color:"#7c5cff" },
  { label:"Cloud",         val:50, color:"#f0883e" },
];

/* ═════════════════════════════════════════════════════════════════════════
   4) الشهادات والدورات  —  cats تُستخدم للفلترة
   الفئات:  ai  |  cyber  |  net  |  cloud  |  mgmt  |  vol
   ═════════════════════════════════════════════════════════════════════════ */
const CERT_FILTERS = [
  { key:"all",   label:"الكل" },
  { key:"ai",    label:"الذكاء الاصطناعي", color:"#7c5cff" },
  { key:"cyber", label:"الأمن السيبراني",   color:"#d13438" },
  { key:"net",   label:"الشبكات",          color:"#2f81f7" },
  { key:"cloud", label:"الحوسبة السحابية", color:"#f0883e" },
  { key:"mgmt",  label:"الإدارة",          color:"#00b36b" },
  { key:"vol",   label:"التطوع",           color:"#00c2a8" },
];

const CERTS = [
  /* ---------- الذكاء الاصطناعي ---------- */
  { cats:["ai"], kind:"دورة", color:"#7c5cff",
    title:"تطبيقات تعلم الآلة في التجارة الإلكترونية",
    org:"مركز الدراسات المتقدمة في الذكاء الاصطناعي (ذكاء) – جامعة الملك سعود",
    note:"بمبادرة <b>Beyond AI</b> وبالتعاون مع شركة زد · <b>10 ساعات</b> تدريبية" },

  { cats:["ai","cloud"], kind:"ورشة عمل", year:"2026", color:"#f0883e",
    title:"Building an AI Agent on Cloud",
    org:"جمعية الحوسبة السحابية CCA بالتعاون مع مركز الجهود المشتركة المتميزة",
    note:"ورشة عمل متخصصة في بناء وكيل ذكاء اصطناعي على البيئة السحابية" },

  { cats:["ai"], kind:"معتمد TVTC", year:"2026", color:"#7c5cff",
    title:"مهارات الذكاء الاصطناعي في بيئة العمل",
    org:"مركز جمعية مراكز الأحياء بالطائف",
    note:"معتمد من <b>TVTC</b> · <b>15 ساعة</b> تدريبية – 3 أيام" },

  { cats:["ai"], kind:"مسار تدريبي", color:"#7c5cff",
    title:"صناع الذكاء الاصطناعي – IBM SkillsBuild",
    org:"IBM SkillsBuild",
    note:"المسار التدريبي لدورات <b>IBM SkillsBuild</b>" },

  { cats:["ai"], kind:"معتمد TVTC", color:"#7c5cff",
    title:"مهارات الذكاء الاصطناعي",
    org:"معهد سما المعالي للتدريب",
    note:"معتمد من <b>TVTC</b> · <b>20 ساعة</b> تدريبية – يومان" },

  /* ---------- الأمن السيبراني ---------- */
  { cats:["cyber"], kind:"دورة تحضيرية", year:"2025", color:"#d13438",
    title:"eJPT Prep Course",
    org:"نادي الأمن السيبراني بجامعة الملك فيصل بالتعاون مع نادي طويق",
    note:"الدورة التحضيرية لاختبار اختراق الشبكات والأنظمة <b>eJPT</b> · <b>16 ساعة</b> تدريبية" },

  { cats:["cyber"], kind:"معسكر", year:"2026", color:"#d13438",
    title:"CyberKickStart Bootcamp",
    org:"كلية علوم الحاسب وتقنية المعلومات بجامعة الإمام عبدالرحمن بن فيصل – نادي الأمن السيبراني",
    note:"بالشراكة مع مبادرة <b>كبسولة تحول</b> ونادي طويق" },

  { cats:["cyber"], kind:"معسكر عملي", year:"2026", color:"#d13438",
    title:"CyberGuard CTF Bootcamp",
    org:"معسكر عملي في الأمن السيبراني والتحديات التقنية",
    note:"المجالات: <b>Kali Linux · Wireshark · SQL Injection · XSS · Cryptography · CTF</b>",
    fields:["Kali Linux","Wireshark","SQL Injection","XSS","Cryptography","CTF"] },

  { cats:["cyber"], kind:"ورشة عمل", year:"2026", color:"#d13438",
    title:"تطوير مهارات الهجوم والدفاع",
    org:"CYBER SHE",
    note:"<b>Red/Blue Teaming Skills</b> — مهارات الأمن الهجومي والدفاعي" },

  /* ---------- الشبكات ---------- */
  { cats:["net"], kind:"تدريب تقني", color:"#2f81f7",
    title:"التدريب التقني – الكلية التقنية بالطائف",
    org:"الكلية التقنية بالطائف",
    note:"تدريب عملي ضمن برنامج <b>دبلوم تقنية الشبكات</b>",
    fields:["صيانة أجهزة الحاسب","عمل الفورمات","تنصيب أنظمة التشغيل","فحص أجهزة الشبكات","إعداد السويتشات","استكشاف الأخطاء وإصلاحها"] },

  /* ---------- الحوسبة السحابية ---------- */
  { cats:["cloud"], kind:"معتمد", year:"2024", color:"#f0883e",
    title:"CompTIA Cloud+",
    org:"وزارة الاتصالات وتقنية المعلومات – مبادرة مهارات المستقبل",
    note:"<b>20 ساعة</b> تدريبية" },

  /* ---------- الإدارة والقيادة ---------- */
  { cats:["mgmt"], kind:"معتمد TVTC", color:"#00b36b",
    title:"Training of Microsoft Office Specialist (MOS)",
    org:"معهد الخوارزمي العالي للتدريب",
    note:"معتمد من <b>TVTC</b> · <b>60 ساعة</b> – 20 يوم" },

  { cats:["mgmt"], kind:"معتمد TVTC", color:"#00b36b",
    title:"التخطيط الاستراتيجي الشخصي",
    org:"مركز جمعية مراكز الأحياء بالطائف",
    note:"معتمد من <b>TVTC</b> · <b>15 ساعة</b> – 3 أيام" },

  { cats:["mgmt"], kind:"معتمد TVTC", color:"#00b36b",
    title:"مهارات بناء المعارف والسلوكيات والجدارات لمدراء التطوع",
    org:"مركز جمعية مراكز الأحياء بالطائف",
    note:"معتمد من <b>TVTC</b> · <b>25 ساعة</b> – 5 أيام" },

  { cats:["mgmt"], kind:"معتمد TVTC", color:"#00b36b",
    title:"إدارة المشاريع",
    org:"معهد سما المعالي للتدريب",
    note:"<b>Project Management</b> · معتمد من <b>TVTC</b> · <b>10 ساعات</b> – يومان" },

  { cats:["mgmt"], kind:"معتمد TVTC", color:"#00b36b",
    title:"التميز الإداري",
    org:"معهد سما المعالي للتدريب",
    note:"معتمد من <b>TVTC</b> · <b>15 ساعة</b> – 3 أيام" },

  { cats:["mgmt"], kind:"معتمد TVTC", color:"#00b36b",
    title:"مهارات استخدام LinkedIn وبناء الملف الشخصي",
    org:"مركز جمعية مراكز الأحياء بالطائف",
    note:"معتمد من <b>TVTC</b> · <b>15 ساعة</b> – 3 أيام" },

  { cats:["mgmt"], kind:"معتمد TVTC", color:"#00b36b",
    title:"إعداد السيرة الذاتية بنظام ATS",
    org:"معهد طاقات للتدريب",
    note:"معتمد من <b>TVTC</b> · <b>6 ساعات</b>" },

  { cats:["mgmt","vol"], kind:"معتمد TVTC", color:"#00b36b",
    title:"مهارات موظف خدمة العملاء",
    org:"معهد سما المعالي للتدريب",
    note:"معتمد من <b>TVTC</b> · <b>20 ساعة</b> – 4 أيام" },

  { cats:["mgmt"], kind:"معتمد", year:"2026", color:"#00b36b",
    title:"التميز في خدمة العملاء",
    org:"معهد الأكاديمية الدولية المتخصصة للتدريب – HR Academy",
    note:"<b>12 ساعة</b>" },

  { cats:["mgmt"], kind:"ورشة عمل", year:"2026", color:"#00b36b",
    title:"هكذا يكون القادة",
    org:"ورشة عمل – غرفة الطائف",
    note:"ورشة عمل في مهارات القيادة وإدارة الفرق" },

  { cats:["mgmt"], kind:"تدريب مهني", color:"#00b36b",
    title:"التدريب المهني – فندق اريديوم",
    org:"فندق اريديوم",
    note:"تدريب مهني شمل:",
    fields:["إدارة المشاريع","كتابة التقارير","الذكاء العاطفي","تطبيقات الذكاء الاصطناعي"] },

  /* ---------- التطوع والعلاقات العامة ---------- */
  { cats:["vol"], kind:"ورشة عمل", year:"2026", color:"#00c2a8",
    title:"العلاقات العامة — الرسالة والأداء الاحترافي",
    org:"غرفة الطائف",
    note:"برنامج في العلاقات العامة والأداء الاحترافي" },

  { cats:["vol"], kind:"معتمد TVTC", color:"#00c2a8",
    title:"تحسين تجربة المستفيد في المجتمع التطوعي",
    org:"معهد سما المعالي للتدريب",
    note:"معتمد من <b>TVTC</b> · <b>10 ساعات</b> – يومان" },

  { cats:["vol"], kind:"ورشة عمل", year:"2024", color:"#00c2a8",
    title:"إعداد التقارير باستخدام التقنيات الذكية",
    org:"جمعية التنمية الأهلية بأملج بالتعاون مع فريق بصمتنا التطوعي",
    note:"تطبيق التقنيات الذكية في إعداد التقارير" },

  { cats:["vol"], kind:"ورشة عمل", year:"2023", color:"#00c2a8",
    title:"مفهوم التطوع بين الأفراد والمؤسسات",
    org:"العطاء الرقمي Digital Attaa",
    note:"مفهوم التطوع وعلاقته بالأفراد والمؤسسات" },

  { cats:["vol"], kind:"مبادرة", year:"2024", color:"#00c2a8",
    title:"بيدي روح المجتمع",
    org:"مبادرة للإسعافات الأولية والإنعاش القلبي الرئوي",
    note:"<b>6 ساعات</b> تطوعية" },
];

/* ═════════════════════════════════════════════════════════════════════════
   5) الخبرات المهنية
   ═════════════════════════════════════════════════════════════════════════ */
const JOBS = [
  { role:"موظف استقبال", org:"فندق إيلاف للشقق المفروشة",
    from:"مايو 2018", to:"أكتوبر 2019", points:[
      "استقبال وخدمة العملاء.",
      "التعامل مع احتياجات المستفيدين.",
      "تنظيم العمليات اليومية.",
      "التواصل المباشر مع العملاء." ] },

  { role:"كاشير", org:"بقالة المتعاني",
    from:"أبريل 2016", to:"أبريل 2018", points:[
      "التعامل مع العملاء.",
      "إدارة عمليات البيع والدفع.",
      "تنظيم العمليات اليومية.",
      "المحافظة على دقة العمليات المالية." ] },

  { role:"حارس أمن", org:"شركة نهضة العواصم للمقاولات المحدودة",
    from:"يونيو 2012", to:"نوفمبر 2012", points:[
      "تنفيذ مهام الأمن والحماية.",
      "الالتزام بالإجراءات والتعليمات.",
      "متابعة وتنظيم الدخول والخروج." ] },
];

/* ═════════════════════════════════════════════════════════════════════════
   6) التدريب العملي
   ═════════════════════════════════════════════════════════════════════════ */
const TRAINING = [
  { color:"#2f81f7", icon:"🛠️",
    title:"التدريب التقني – الكلية التقنية بالطائف",
    org:"برنامج عملي مرافق لشهادة دبلوم تقنية الشبكات",
    items:["صيانة أجهزة الحاسب","عمل الفورمات","تنصيب أنظمة التشغيل",
           "فحص أجهزة الشبكات","إعداد السويتشات","استكشاف الأخطاء وإصلاحها"] },

  { color:"#7c5cff", icon:"📝",
    title:"التدريب المهني – فندق اريديوم",
    org:"برنامج في المهارات المهنية وإدارة العمل",
    items:["إدارة المشاريع","كتابة التقارير","الذكاء العاطفي","تطبيقات الذكاء الاصطناعي"] },
];

/* ═════════════════════════════════════════════════════════════════════════
   7) التطوع
   ═════════════════════════════════════════════════════════════════════════ */
const VOL_KPIS = [
  { v:"+2,010", l:"ساعة تطوعية" },
  { v:"15",     l:"جهة تطوعية مختلفة" },
];

const VOL_SKILLS = [
  "قيادة الفرق","تنظيم الفعاليات","التخطيط للمبادرات","إدارة المهام",
  "التواصل مع الجهات","العمل الجماعي","حل المشكلات","إدارة الوقت",
];

/* ═════════════════════════════════════════════════════════════════════════
   8) المشاريع التقنية
   ═════════════════════════════════════════════════════════════════════════ */
const PROJECTS = [
  { tag:"AI + DATA", color:"#7c5cff",
    title:"AI Business Analyzer",
    sub:"تحليل بيانات الأعمال والتنبؤ بالمبيعات",
    desc:"مشروع متكامل يحلّل بيانات المبيعات الشهرية ويبني نموذج تنبؤ يدعم اتخاذ القرار، مع نظام RAG للإجابة من قاعدة معرفة، ومعالجة صور عبر OpenCV.",
    highlights:[
      "تحليل إحصائي كامل بـ NumPy: المجموع، المتوسط، الأعلى، الأدنى، الانحراف المعياري.",
      "تحليل واستكشاف البيانات وتقارير وصفية عبر Pandas.",
      "8 رسومات بيانية: خطي، أعمدة، مقارنة بمحورين، نمو المبيعات، والمقارنة بين الفعلي والمتوقع.",
      "نموذج Machine Learning (LinearRegression) مع قياس MAE ومعامل R².",
      "نموذج Deep Learning (شبكة عصبية MLPRegressor) ومقارنته بالنموذج الخطي.",
      "نظام RAG يسترجع من قاعدة معرفة ويجيب على الأسئلة.",
      "معالجة الصور بـ OpenCV: قراءة، تحويل إلى رمادي، وحفظ."
    ],
    tech:["Python","NumPy","Pandas","Matplotlib","Scikit-learn","MLPRegressor","RAG","OpenCV"],
    code:[{ label:"ai-business-analyzer.py", href:"code/ai-business-analyzer.py" },
          { label:"sales-monthly-data.csv",   href:"code/sales-monthly-data.csv" }] },

  { tag:"NLP + AI", color:"#7c5cff",
    title:"AI Sentiment Analyzer",
    sub:"تحليل مشاعر التعليقات العربية",
    desc:"نظام يصنّف مشاعر التعليقات العربية إلى إيجابي وسلبي ومحايد، بتحويل النصوص إلى أرقام ثم تدريب نموذج تصنيف وتقييمه.",
    highlights:[
      "معالجة لغة طبيعية عربية (Arabic NLP).",
      "تحويل النصوص إلى متجهات رقمية بـ TF-IDF مع n-grams (1,2).",
      "نموذج تصنيف LogisticRegression بـ 1000 تكرار.",
      "تصنيف ثلاثي: positive / negative / neutral.",
      "تقييم بالدقة (Accuracy) وتقرير تصنيف وConfusion Matrix.",
      "دالة تنبؤ على تعليقات جديدة مع نسبة الثقة."
    ],
    tech:["Python","Pandas","NumPy","Scikit-learn","TF-IDF","Logistic Regression","Matplotlib","NLP"],
    code:[{ label:"ai-sentiment-analyzer.py", href:"code/ai-sentiment-analyzer.py" }] },

  { tag:"DATA ANALYSIS", color:"#00c2a8",
    title:"Sales Analysis 2026",
    sub:"تحليل مبيعات سنوي متعدد المنتجات",
    desc:"تحليل مبيعات 10 منتجات على مدار 12 شهرًا، مع ترتيبها وتحديد الأفضل والأقل وأفضل وأضعف شهر، و4 أنواع من الرسومات البيانية.",
    highlights:[
      "بناء بيانات 10 منتجات × 12 شهرًا باستخدام NumPy وPandas.",
      "حساب الإجمالي والمتوسط لكل منتج وترتيب المنتجات تنازليًا.",
      "استخراج أفضل 5 منتجات وتحديد الأفضل والأقل مبيعًا.",
      "حساب إجمالي المبيعات شهريًا وتحديد أفضل وأضعف شهر.",
      "4 رسومات: أعمدة (حسب المنتج)، خطي (شهري)، دائري (توزيع)، وهيستوغرام."
    ],
    tech:["Python","NumPy","Pandas","Matplotlib"],
    code:[{ label:"sales-analysis-2026.py", href:"code/sales-analysis-2026.py" }] },

  { tag:"PYTHON FUNDAMENTALS", color:"#f0883e",
    title:"Python Fundamentals Toolkit",
    sub:"ثلاثة أنظمة تطبيقية بلغة Python",
    desc:"مجموعة مشاريع لبناء أساس البرمجة: إدارة سجلات الطلاب، دليل هاتف، وحاسبة أعمار — كلها بواجهة قوائم تفاعلية.",
    highlights:[
      "Student Management System: إضافة طلاب ودرجات، حالة النجاح، حساب المتوسط، والتحقق من صحة المدخلات.",
      "Phone Book: إضافة جهات اتصال، عرض القائمة، والبحث بالاسم.",
      "Birthday Calculator: التحقق من التاريخ، حساب العمر، معرفة يوم الميلاد، الترتيب حسب العمر، وإيجاد الأكبر والأصغر."
    ],
    tech:["Python","Functions","Dictionaries","Lists","datetime","Input Validation"],
    code:[{ label:"student-management-system.py", href:"code/student-management-system.py" },
          { label:"phone-book.py",                href:"code/phone-book.py" },
          { label:"birthday-calculator.py",       href:"code/birthday-calculator.py" }] },

  { tag:"NETWORKING + AI", color:"#2f81f7",
    title:"AI Network Management",
    sub:"الذكاء الاصطناعي في إدارة الشبكات",
    desc:"مفهوم تقني يهدف إلى توظيف الذكاء الاصطناعي وتعلم الآلة في تحليل حركة الشبكة، واكتشاف الأنماط غير الطبيعية، والمساعدة في التنبؤ بالمشكلات والأعطال.",
    fields:["Network Traffic Analysis","Anomaly Detection","Predictive Maintenance",
            "Intelligent Network Monitoring","AI-based Network Security"] },
];

/* ═════════════════════════════════════════════════════════════════════════
   9) الرؤية المهنية واللغات
   ═════════════════════════════════════════════════════════════════════════ */
const VISION = [
  { icon:"🌐", color:"#2f81f7", title:"Network Technology", text:"بناء وإدارة البنية التحتية للشبكات." },
  { icon:"🤖", color:"#7c5cff", title:"Artificial Intelligence", text:"تطوير حلول تعتمد على الذكاء الاصطناعي وتعلم الآلة." },
  { icon:"🛡️", color:"#d13438", title:"Cybersecurity", text:"تحليل التهديدات وتعزيز أمن الأنظمة والشبكات." },
];

const LANGS = [
  { globe:"🇸🇦", name:"العربية",  level:"اللغة الأم" },
  { globe:"🇬🇧", name:"الإنجليزية", level:"مستوى عملي محدود" },
];

const EDU_TOPICS = [
  "أساسيات الشبكات","تصميم البنية التحتية للشبكات","إعداد السويتشات والشبكات",
  "استكشاف أخطاء الشبكات وإصلاحها","أنظمة التشغيل","صيانة أجهزة الحاسب",
  "تقنيات الاتصال","إدارة الأنظمة",
];

const HERO_STATS = [
  { v:"+2,010", l:"ساعة تطوعية" },
  { v:"15",     l:"جهة تطوعية" },
  { v:"4.71",   l:"معدل الشهادة / 5" },
  { v:"3",      l:"مجالات تقنية رئيسية" },
];


/* ═════════════════════════════════════════════════════════════════════════
                            أدوات مساعدة
   ═════════════════════════════════════════════════════════════════════════ */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const esc = s => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");


/* ═════════════════════════════════════════════════════════════════════════
                            1) الروابط والتواصل
   ═════════════════════════════════════════════════════════════════════════ */
function applyLinks() {
  $$(".js-social").forEach(a => {
    const url = PROFILE.links[a.dataset.net];
    if (url) {
      a.href = url;
    } else {
      // لا رابط بعد → يُعطَّل الزر بدل أن يفتح صفحة فارغة
      a.classList.add("off");
      a.removeAttribute("href");
      a.setAttribute("aria-disabled", "true");
      a.title = "الرابط غير مضاف بعد — أضفه في portfolio/app.js";
    }
  });

  $("#cTel").href   = "tel:" + PROFILE.phoneIntl;
  $("#cMail").href  = "mailto:" + PROFILE.email;
  $("#cTelTxt").textContent = PROFILE.phone;
  $("#cTelTxt2").textContent = PROFILE.phone;
  $("#cMailTxt").textContent = PROFILE.email;
  $("#cMail").textContent = PROFILE.email;
  $('a[href="cv.html"]').href = PROFILE.cvPage;
}


/* ═════════════════════════════════════════════════════════════════════════
   1b) مجلدات Google Drive  —  عارض الملفات الرسمي من Google
   ═════════════════════════════════════════════════════════════════════════ */
function mountDrive(prefix, folderId) {
  const bar   = $(`#${prefix}DriveBar`);
  const open  = $(`#${prefix}DriveOpen`);
  const view  = $(`#${prefix}DriveView`);
  const frame = view && view.querySelector("iframe");
  if (!bar || !view || !frame || !folderId) return;

  const folderUrl = "https://drive.google.com/drive/folders/" + folderId;

  bar.hidden = false;                       // أظهر الشريط فقط إذا وُجد المعرّف
  open.href   = folderUrl;

  // لا تحمّل الـ iframe إلا عند الضغط — يوفّر ~
  let loaded = false;
  const load = () => {
    if (loaded) return;
    loaded = true;
    frame.src = "https://drive.google.com/embeddedfolderview?id=" +
                encodeURIComponent(folderId) + "#list";
  };

  const btn = $(`#${prefix}DriveToggle`);
  btn.addEventListener("click", () => {
    const openNow = view.hidden;
    view.hidden = !openNow;
    btn.setAttribute("aria-expanded", openNow);
    if (openNow) load();
  });
}


/* ═════════════════════════════════════════════════════════════════════════
                            2) الهيرو
   ═════════════════════════════════════════════════════════════════════════ */
function renderHero() {
  $("#heroStats").innerHTML = HERO_STATS.map(s =>
    `<li><b>${esc(s.v)}</b><span>${esc(s.l)}</span></li>`).join("");

  $("#heroMatrix").innerHTML = MATRIX.map(m => `
    <div class="hc-row">
      <div class="hc-lab"><span>${esc(m.label)}</span><b data-val="${m.val}">0%</b></div>
      <div class="hc-bar"><i style="background:${m.color}" data-w="${m.val}"></i></div>
    </div>`).join("");
}


/* ═════════════════════════════════════════════════════════════════════════
                            3) التعليم
   ═════════════════════════════════════════════════════════════════════════ */
function renderEducation() {
  $("#eduTopics").innerHTML = EDU_TOPICS.map(t => `<li>${esc(t)}</li>`).join("");
}


/* ═════════════════════════════════════════════════════════════════════════
                            4) مجالات التخصص
   ═════════════════════════════════════════════════════════════════════════ */
function renderExpertise() {
  $("#expertiseGrid").innerHTML = EXPERTISE.map(e => `
    <article class="exp-card rv" style="--c:${e.color}">
      <div class="exp-ico">${e.icon}</div>
      <h3>${esc(e.title)}</h3>
      <p>${esc(e.text)}</p>
    </article>`).join("");
}


/* ═════════════════════════════════════════════════════════════════════════
                            5) المهارات
   ═════════════════════════════════════════════════════════════════════════ */
function renderSkills() {
  $("#skillsGrid").innerHTML = SKILL_GROUPS.map(g => `
    <div class="sk-group rv" style="--c:${g.color}">
      <div class="sk-top">
        <div class="sk-ico">${g.icon || "▣"}</div>
        <span class="sk-name" dir="ltr">${esc(g.label)}</span>
        <span class="sk-n">${g.items.length}</span>
      </div>
      <ul class="tags">${g.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>
    </div>`).join("");
}


/* ═════════════════════════════════════════════════════════════════════════
                            6) الشهادات + الفلترة
   ═════════════════════════════════════════════════════════════════════════ */
let certFilter = "all";

function certCard(c, i) {
  const color = c.color || "#2f81f7";
  return `
    <article class="cert rv" data-i="${i}" data-cats="${c.cats.join(" ")}" style="--c:${color}">
      <div class="cert-head">
        <span class="cert-kind">${esc(c.kind)}</span>
        ${c.year ? `<span class="cert-yr">${esc(c.year)}</span>` : ""}
      </div>
      <h3>${esc(c.title)}</h3>
      <p class="cert-org">${esc(c.org)}</p>
      ${c.note ? `<p class="cert-note">${c.note}</p>` : ""}
    </article>`;
}

function renderCerts() {
  const grid = $("#certsGrid");

  // أزرار الفلترة مع عدّاد لكل مجال
  $("#certFilters").innerHTML = CERT_FILTERS.map(f => {
    const n = f.key === "all" ? CERTS.length : CERTS.filter(c => c.cats.includes(f.key)).length;
    const style = f.color ? `style="--c:${f.color}"` : "";
    return `<button class="fchip${f.key === certFilter ? " on" : ""}" data-f="${f.key}"
              role="tab" aria-selected="${f.key === certFilter}" ${style}>
              ${esc(f.label)} <i>${n}</i></button>`;
  }).join("");

  grid.innerHTML = CERTS.map(certCard).join("") +
    `<p class="empty-note" id="certEmpty" hidden>لا توجد دورات في هذا المجال بعد.</p>`;

  applyCertFilter();
}

function applyCertFilter() {
  const nodes = $$("#certsGrid .cert");
  let shown = 0;

  nodes.forEach(el => {
    const cats = (el.dataset.cats || "").split(" ");
    const ok = certFilter === "all" || cats.includes(certFilter);
    el.classList.toggle("hide", !ok);
    if (ok) shown++;
  });

  const f = CERT_FILTERS.find(x => x.key === certFilter);
  $("#certCount").innerHTML =
    `عرض <b>${shown}</b> من <b>${CERTS.length}</b> — المجال: <b>${esc(f.label)}</b>`;
  $("#certEmpty").hidden = shown > 0;

  $$("#certFilters .fchip").forEach(b => {
    const on = b.dataset.f === certFilter;
    b.classList.toggle("on", on);
    b.setAttribute("aria-selected", on);
  });

  // أعِد حركة الظهور للعناصر الظاهرة
  observeReveal();
}


/* ═════════════════════════════════════════════════════════════════════════
                            7) الخبرات
   ═════════════════════════════════════════════════════════════════════════ */
function renderJobs() {
  $("#jobsList").innerHTML = JOBS.map(j => `
    <article class="job rv">
      <div class="job-top">
        <h3>${esc(j.role)}</h3>
        <span class="job-org">${esc(j.org)}</span>
        <span class="job-when">${esc(j.from)} — ${esc(j.to)}</span>
      </div>
      <ul>${j.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
    </article>`).join("");
}


/* ═════════════════════════════════════════════════════════════════════════
                            8) التطوع
   ═════════════════════════════════════════════════════════════════════════ */
function renderVolunteer() {
  $("#volKpis").innerHTML = VOL_KPIS.map(k =>
    `<div class="kpi"><b>${esc(k.v)}</b><span>${esc(k.l)}</span></div>`).join("");
  $("#volTags").innerHTML = VOL_SKILLS.map(s => `<li>${esc(s)}</li>`).join("");
}


/* ═════════════════════════════════════════════════════════════════════════
                            9) التدريب العملي
   ═════════════════════════════════════════════════════════════════════════ */
function renderTraining() {
  $("#trainingGrid").innerHTML = TRAINING.map(t => `
    <article class="tr-card rv" style="--c:${t.color}">
      <div class="tr-head">
        <span style="font-size:19px">${t.icon}</span>
        <h3>${esc(t.title)}</h3>
      </div>
      <p class="tr-org">${esc(t.org)}</p>
      <ul class="tr-list">${t.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>
    </article>`).join("");
}


/* ═════════════════════════════════════════════════════════════════════════
                            10) المشاريع + النافذة
   ═════════════════════════════════════════════════════════════════════════ */
function renderProjects() {
  $("#projectsGrid").innerHTML = PROJECTS.map((p, i) => `
    <button class="card rv" style="--c:${p.color}" data-p="${i}"
            aria-haspopup="dialog">
      <span class="pc-tag">${esc(p.tag)}</span>
      <h3>${esc(p.title)}</h3>
      <span class="sub">${esc(p.sub)}</span>
      <p>${esc(p.desc)}</p>
      <span class="more">عرض التفاصيل
        <svg viewBox="0 0 24 24" class="ico" style="width:14px;height:14px"><path d="M5 12h14m0 0-5-5m5 5-5 5"/></svg>
      </span>
    </button>`).join("");
}

let lastFocus = null;

function openProject(i) {
  const p = PROJECTS[i];
  if (!p) return;

  const hasTech   = p.tech   && p.tech.length;
  const hasFields = p.fields && p.fields.length;
  const hasHigh   = p.highlights && p.highlights.length;
  const hasCode   = p.code   && p.code.length;

  lastFocus = document.activeElement;

  $("#mTitle").textContent = p.title;
  $("#mBody").innerHTML = `
    <span class="mb-tag" style="--c:${p.color}">${esc(p.tag)}</span>
    <p class="mb-sub" style="--c:${p.color}">${esc(p.sub)}</p>
    <p class="mb-desc">${esc(p.desc)}</p>
    ${hasHigh ? `<h5 class="mb-h">أبرز ما تم تنفيذه</h5>
                 <ul class="mb-list" style="--c:${p.color}">${p.highlights.map(h => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
    ${hasTech ? `<h5 class="mb-h">التقنيات</h5>
                 <div class="mb-chips">${p.tech.map(t => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
    ${hasFields ? `<h5 class="mb-h">المجالات</h5>
                  <ul class="mb-list" style="--c:${p.color}">${p.fields.map(f => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
    ${!hasTech && !hasFields ? `<h5 class="mb-h">الحالة</h5>
                  <ul class="mb-list" style="--c:${p.color}"><li>مشروع قيد التطوير — التفاصيل قابلة للتوسعة.</li></ul>` : ""}
    ${hasCode ? `<h5 class="mb-h">ملفات المشروع</h5>
                 <div class="mb-code">${p.code.map(c =>
                   `<a class="code-link" href="${esc(c.href)}" target="_blank" rel="noopener">
                      <svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M9 18l-6-6 6-6m6 0l6 6-6 6"/></svg>
                      <span dir="ltr">${esc(c.label)}</span></a>`).join("")}</div>` : ""}`;

  const m = $("#modal");
  m.hidden = false;
  document.body.classList.add("lock");
  $("#mClose").focus();
}

function closeProject() {
  const m = $("#modal");
  if (m.hidden) return;
  m.hidden = true;
  document.body.classList.remove("lock");
  if (lastFocus && document.contains(lastFocus)) lastFocus.focus();  // أعِد التركيز للزر
  lastFocus = null;
}


/* ═════════════════════════════════════════════════════════════════════════
                            11) الرؤية واللغات
   ═════════════════════════════════════════════════════════════════════════ */
function renderVision() {
  $("#visionGrid").innerHTML = VISION.map((v, i) => `
    <article class="vis-card rv" style="--c:${v.color}">
      <span class="vis-n">0${i + 1}</span>
      <div class="exp-ico">${v.icon}</div>
      <h3 dir="ltr" style="text-align:start">${esc(v.title)}</h3>
      <p>${esc(v.text)}</p>
    </article>`).join("");

  $("#langsGrid").innerHTML = LANGS.map(l => `
    <div class="lang rv">
      <span class="lang-globe">${l.globe}</span>
      <div><b>${esc(l.name)}</b><span>${esc(l.level)}</span></div>
    </div>`).join("");
}


/* ═════════════════════════════════════════════════════════════════════════
                            12) شريط التنقّل والتمرير
   ═════════════════════════════════════════════════════════════════════════ */
function initNav() {
  const nav    = $("#nav");
  const burger = $("#burger");
  const links  = $("#navLinks");
  const prog   = $("#navProg");
  const toTop  = $("#toTop");

  // قائمة الجوال
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.classList.toggle("on", open);
    burger.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", e => {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      burger.classList.remove("on");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  // تمييز القسم الحالي
  const secs = $$("main .sec[id]");
  const map  = new Map(secs.map(s => [s.id, $(`.nav-links a[href="#${s.id}"]`)]));

  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const a = map.get(en.target.id);
      if (!a) return;
      $$(".nav-links a").forEach(x => x.classList.remove("active"));
      a.classList.add("active");
    });
  }, { rootMargin: "-25% 0px -70% 0px", threshold: 0 });
  secs.forEach(s => io.observe(s));

  // شريط التمرير + زر أعلى
  const onScroll = () => {
    const y   = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
    nav.classList.toggle("stuck", y > 12);
    toTop.classList.toggle("on", y > 600);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop.addEventListener("click", () =>
    scrollTo({ top: 0, behavior: "smooth" }));
}


/* ═════════════════════════════════════════════════════════════════════════
                            13) حركة الظهور
   ═════════════════════════════════════════════════════════════════════════ */
let revealIO;

function observeReveal() {
  const items = $$(".rv:not(.in)");
  if (!items.length) return;

  // متصفح قديم بلا IntersectionObserver → أظهر المحتوى فورًا بدل بقائه مخفيًا
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("in"));
    return;
  }

  if (!revealIO) {
    revealIO = new IntersectionObserver((ents, obs) => {
      ents.forEach(en => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        obs.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
  }
  items.forEach(el => revealIO.observe(el));
}


/* ═════════════════════════════════════════════════════════════════════════
                            14) تحريك أشرطة "الملف"
   ═════════════════════════════════════════════════════════════════════════ */
function animateMatrix() {
  const run = () => $$("#heroMatrix .hc-bar i").forEach((bar, i) => {
    bar.style.width = bar.dataset.w + "%";
    const lab = bar.parentElement.parentElement.querySelector("[data-val]");
    let v = 0;
    const target = +bar.dataset.w;
    const step = () => {
      v += Math.max(1, Math.ceil(target / 26));
      if (v >= target) { v = target; }
      lab.textContent = v + "%";
      if (v < target) requestAnimationFrame(step);
    };
    setTimeout(step, 120 + i * 110);
  });

  const m = $(".hero-card");
  if (!m) return;

  // متصفح قديم بلا IntersectionObserver → املأ الأشرطة مباشرة بلا حركة
  if (!("IntersectionObserver" in window)) { run(); return; }

  new IntersectionObserver((e, o) => {
    if (e[0].isIntersecting) { run(); o.disconnect(); }
  }, { threshold: 0.25 }).observe(m);
}


/* ═════════════════════════════════════════════════════════════════════════
                            15) التشغيل
   ═════════════════════════════════════════════════════════════════════════ */
function init() {
  applyLinks();
  mountDrive("certs",  PROFILE.drive.certs);
  mountDrive("photos", PROFILE.drive.photos);
  renderHero();
  renderEducation();
  renderExpertise();
  renderSkills();
  renderCerts();
  renderJobs();
  renderVolunteer();
  renderTraining();
  renderProjects();
  renderVision();

  // الفلترة
  $("#certFilters").addEventListener("click", e => {
    const b = e.target.closest(".fchip");
    if (!b) return;
    certFilter = b.dataset.f;
    applyCertFilter();
  });

  // نافذة المشروع
  $("#projectsGrid").addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (card) openProject(+card.dataset.p);
  });
  $("#mClose").addEventListener("click", closeProject);
  $("#modal").addEventListener("click", e => {
    if (e.target.id === "modal") closeProject();
  });
  addEventListener("keydown", e => {
    if (e.key === "Escape" && !$("#modal").hidden) closeProject();
  });

  initNav();
  observeReveal();
  animateMatrix();
}

document.addEventListener("DOMContentLoaded", init);
