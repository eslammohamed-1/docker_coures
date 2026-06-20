const courseData = [
  {
    "id": 1,
    "title": "Intro",
    "duration": 30.0,
    "isReady": true,
    "transcription": [
      {
        "timestamps": {
          "from": "00:00:00,000",
          "to": "00:00:02,640"
        },
        "offsets": {
          "from": 0,
          "to": 2640
        },
        "text": "مساء الخير إن كان مساءً، وصباح الخير إن كان صباحاً."
      },
      {
        "timestamps": {
          "from": "00:00:02,640",
          "to": "00:00:05,920"
        },
        "offsets": {
          "from": 2640,
          "to": 5920
        },
        "text": "في الفيديو ده هنتكلم عن الـ Containers بشكل عام."
      },
      {
        "timestamps": {
          "from": "00:00:05,920",
          "to": "00:00:07,660"
        },
        "offsets": {
          "from": 5920,
          "to": 7660
        },
        "text": "هنتكلم عن Introduction للـ Containers."
      },
      {
        "timestamps": {
          "from": "00:00:07,660",
          "to": "00:00:09,020"
        },
        "offsets": {
          "from": 7660,
          "to": 9020
        },
        "text": "بعد كده هنتكلم عن Docker."
      },
      {
        "timestamps": {
          "from": "00:00:09,020",
          "to": "00:00:11,020"
        },
        "offsets": {
          "from": 9020,
          "to": 11020
        },
        "text": "هنتكلم عن الشغل مع الـ Containers."
      },
      {
        "timestamps": {
          "from": "00:00:11,020",
          "to": "00:00:12,040"
        },
        "offsets": {
          "from": 11020,
          "to": 12040
        },
        "text": "والشغل مع الـ Images."
      },
      {
        "timestamps": {
          "from": "00:00:12,040",
          "to": "00:00:13,960"
        },
        "offsets": {
          "from": 12040,
          "to": 13960
        },
        "text": "بعد كده هنتكلم عن الـ Network والـ Storage."
      },
      {
        "timestamps": {
          "from": "00:00:13,960",
          "to": "00:00:15,240"
        },
        "offsets": {
          "from": 13960,
          "to": 15240
        },
        "text": "هنتكلم عن Docker Compose."
      },
      {
        "timestamps": {
          "from": "00:00:15,240",
          "to": "00:00:17,520"
        },
        "offsets": {
          "from": 15240,
          "to": 17520
        },
        "text": "هنتكلم عن Docker Swarm و Docker Stack."
      },
      {
        "timestamps": {
          "from": "00:00:17,520",
          "to": "00:00:19,480"
        },
        "offsets": {
          "from": 17520,
          "to": 19480
        },
        "text": "وبعد كده هنتكلم شوية..."
      },
      {
        "timestamps": {
          "from": "00:00:19,480",
          "to": "00:00:21,460"
        },
        "offsets": {
          "from": 19480,
          "to": 21460
        },
        "text": "Introduction عن Kubernetes."
      },
      {
        "timestamps": {
          "from": "00:00:21,460",
          "to": "00:00:26,360"
        },
        "offsets": {
          "from": 21460,
          "to": 26360
        },
        "text": "وبعد كده في الآخر هنشوف إزاي نقدر نحط الثعبان في العلبة."
      },
      {
        "timestamps": {
          "from": "00:00:26,360",
          "to": "00:00:28,200"
        },
        "offsets": {
          "from": 26360,
          "to": 28200
        },
        "text": "ابقوا معنا وأتمنى لكم مشاهدة مفيدة."
      }
    ]
  },
  {
    "id": 2,
    "title": "Introduction to Containers",
    "duration": 1159.0,
    "isReady": true,
    "transcription": [
      {
        "timestamps": {
          "from": "00:00:00,000",
          "to": "00:00:22,000"
        },
        "offsets": {
          "from": 0,
          "to": 22000
        },
        "text": "يلا بينا يا شطار نتكلم عن الـ Container، وفي البداية زي ما بنعمل كل مرة هندي تعريف عام للـ Containers بتعمل إيه، وبعد كده نتكلم إحنا عايزينها ليه ونتناقش مع بعض في حتة هي هتنفعنا ولا لأ في موضوع شغل الـ Data بتاعنا."
      },
      {
        "timestamps": {
          "from": "00:00:22,000",
          "to": "00:00:35,000"
        },
        "offsets": {
          "from": 22000,
          "to": 35000
        },
        "text": "في البداية خليني أديك تعريف سريع للـ Containers قد يكون غامض شوية، ممكن يكون بيطرح أسئلة أكتر ما بيقدم إجابات، لكن واحدة واحدة الدنيا هتبدأ تنور معانا وهنعرف هنشتغل بإيه."
      },
      {
        "timestamps": {
          "from": "00:00:35,000",
          "to": "00:00:37,000"
        },
        "offsets": {
          "from": 35000,
          "to": 37000
        },
        "text": "انفحني دلوقتي واشرح لي بعدين."
      },
      {
        "timestamps": {
          "from": "00:00:37,000",
          "to": "00:00:52,000"
        },
        "offsets": {
          "from": 37000,
          "to": 52000
        },
        "text": "الـ Containers هي طريقة سهلة وسريعة وخفيفة الوزن (Lightweight) أقدر بيها إني أعمل Bundle لـ Application معينة بالـ Requirements بتاعتها، وأقدر أعمل Deploy للـ Application دي."
      },
      {
        "timestamps": {
          "from": "00:00:52,000",
          "to": "00:01:12,000"
        },
        "offsets": {
          "from": 52000,
          "to": 72000
        },
        "text": "بأكتر من حاجة بطريقة Efficient، أنا عارف إن التعريف غامض شوية، ممكن تيجي تقولي هي في الآخر طريقة بعمل بيها Application بحطها في علبة بالـ Dependencies والـ Requirements بتاعتها وأقدر أشتغل بيها من أي حتة، طب ما الـ Virtual Machine بتعمل الكلام ده؟"
      },
      {
        "timestamps": {
          "from": "00:01:12,000",
          "to": "00:01:22,000"
        },
        "offsets": {
          "from": 72000,
          "to": 82000
        },
        "text": "صح مظبوط، أكيد الـ Virtual Machine بتعمل الكلام ده، ونقطة الـ Virtual Machine هنا في الكلام عن الـ Containers مهمة جداً جداً."
      },
      {
        "timestamps": {
          "from": "00:01:22,000",
          "to": "00:01:29,000"
        },
        "offsets": {
          "from": 82000,
          "to": 89000
        },
        "text": "لأن إحنا طول ما إحنا ماشيين في الفيديو ده هنلاقي نفسنا بنعمل مقارنات ما بين الـ Containers والـ Virtual Machines."
      },
      {
        "timestamps": {
          "from": "00:01:29,000",
          "to": "00:01:36,000"
        },
        "offsets": {
          "from": 89000,
          "to": 96000
        },
        "text": "والمقارنات دي مش هدفها إني أشوف مين أحسن، الـ Container ولا الـ Virtual Machine، أبداً، المقارنات دي هدفها حاجتين."
      },
      {
        "timestamps": {
          "from": "00:01:36,000",
          "to": "00:01:47,000"
        },
        "offsets": {
          "from": 96000,
          "to": 107000
        },
        "text": "الحاجة الأولى هي إننا نفهم الـ Containers أكتر، كل ما قدرنا نقارب ما بين الـ Container والـ Virtual Machine ده هيوضح لنا الفرق بين الاتنين، يعني إيه Container ويعني إيه Virtual Machine."
      },
      {
        "timestamps": {
          "from": "00:01:47,000",
          "to": "00:01:51,000"
        },
        "offsets": {
          "from": 107000,
          "to": 111000
        },
        "text": "الحاجة التانية هي إننا نشوف إزاي الاتنين يقدروا يشتغلوا مع بعض."
      },
      {
        "timestamps": {
          "from": "00:01:51,000",
          "to": "00:01:59,000"
        },
        "offsets": {
          "from": 111000,
          "to": 119000
        },
        "text": "بالشكل اللي يدينا النتائج اللي محتاجينها، مش علشان نشوف أستعمل Virtual Machine بس ولا أستعمل الـ Container بس."
      },
      {
        "timestamps": {
          "from": "00:01:59,000",
          "to": "00:02:05,000"
        },
        "offsets": {
          "from": 119000,
          "to": 125000
        },
        "text": "وبما إننا بدأنا الكلام عن موضوع الـ Virtual Machine، فتعالوا نتكلم ونحكي قصة الـ Virtual Machines من الأول."
      },
      {
        "timestamps": {
          "from": "00:02:05,000",
          "to": "00:02:18,000"
        },
        "offsets": {
          "from": 125000,
          "to": 138000
        },
        "text": "تعالوا نشوف أصلاً الـ Virtual Machine دي ظهرت ليه واحتاجناها في إيه، وإيه المشاكل اللي حلتها، وواحدة واحدة هنبدأ نشوف الخطوة اللي بعدها وهي الـ Containers خدناها ليه."
      },
      {
        "timestamps": {
          "from": "00:02:18,000",
          "to": "00:02:20,000"
        },
        "offsets": {
          "from": 138000,
          "to": 140000
        },
        "text": "دلوقتي هو الموضوع بدأ إزاي أصلاً؟"
      },
      {
        "timestamps": {
          "from": "00:02:20,000",
          "to": "00:02:26,000"
        },
        "offsets": {
          "from": 140000,
          "to": 146000
        },
        "text": "الموضوع بدأ من الستينات، فكرة الـ Virtualization دي ظهرت من الستينات ما تستغربش."
      },
      {
        "timestamps": {
          "from": "00:02:26,000",
          "to": "00:02:35,000"
        },
        "offsets": {
          "from": 146000,
          "to": 155000
        },
        "text": "موضوع الـ Virtualization ده قديم جداً، زيه زي كل Concept تقريباً بنستعمله وبنطبقه في عالم الـ Computer بتاعنا ده."
      },
      {
        "timestamps": {
          "from": "00:02:35,000",
          "to": "00:02:45,000"
        },
        "offsets": {
          "from": 155000,
          "to": 165000
        },
        "text": "الأفكار دي مش جديدة خالص، بالعكس دي أفكار قديمة جداً بتتنفذ بطريقة مختلفة شوية عن زمان، أو بقت متاحة للناس بطريقة مختلفة."
      },
      {
        "timestamps": {
          "from": "00:02:45,000",
          "to": "00:02:49,000"
        },
        "offsets": {
          "from": 165000,
          "to": 169000
        },
        "text": "فخلينا من البداية خالص، إنت أصلاً كنت بتبدأ بـ Physical Server."
      },
      {
        "timestamps": {
          "from": "00:02:49,000",
          "to": "00:02:56,000"
        },
        "offsets": {
          "from": 169000,
          "to": 176000
        },
        "text": "ده Server عادي جداً، والسيرفر ده فيه Hardware."
      },
      {
        "timestamps": {
          "from": "00:02:56,000",
          "to": "00:03:02,000"
        },
        "offsets": {
          "from": 176000,
          "to": 182000
        },
        "text": "الـ Hardware ده CPU و RAM و Disk و Network، اللي إنت عارفه بقى."
      },
      {
        "timestamps": {
          "from": "00:03:02,000",
          "to": "00:03:07,000"
        },
        "offsets": {
          "from": 182000,
          "to": 187000
        },
        "text": "فاللي بتعمله إنك بتعمل Installation لـ Operating System على السيرفر ده."
      },
      {
        "timestamps": {
          "from": "00:03:07,000",
          "to": "00:03:14,000"
        },
        "offsets": {
          "from": 187000,
          "to": 194000
        },
        "text": "بتنزل Operating System على السيرفر، وفوق الـ Operating System ده بتنزل الـ Applications بتاعتك."
      },
      {
        "timestamps": {
          "from": "00:03:14,000",
          "to": "00:03:18,000"
        },
        "offsets": {
          "from": 194000,
          "to": 198000
        },
        "text": "تمام، ممكن يكون فيها شوية Requirements و Dependencies لغاية ما توصل للـ Application اللي محتاجها."
      },
      {
        "timestamps": {
          "from": "00:03:18,000",
          "to": "00:03:31,000"
        },
        "offsets": {
          "from": 198000,
          "to": 211000
        },
        "text": "لغاية كده كانت الدنيا تمام جداً، تخيل إننا في السبعينات مثلاً، الزمن الجميل."
      },
      {
        "timestamps": {
          "from": "00:03:31,000",
          "to": "00:03:47,000"
        },
        "offsets": {
          "from": 211000,
          "to": 227000
        },
        "text": "اللي حصل بقى إن المشكلة ظهرت لما بحتاج أعمل Deployment لأكثر من Server، فكنت بحتاج أجيب Physical Server تاني وأنزل Operating System تاني وأنزل Applications مرة تانية وهكذا."
      },
      {
        "timestamps": {
          "from": "00:03:47,000",
          "to": "00:04:07,000"
        },
        "offsets": {
          "from": 227000,
          "to": 247000
        },
        "text": "حصلت الإشكالية لما بدأت الـ Specs بتاعة الـ Hardware تزيد، وبقى عندي Servers فيها 16 Core و 32 Core و 128 Core، ورامات بتوصل لـ Terabyte RAM."
      },
      {
        "timestamps": {
          "from": "00:04:07,000",
          "to": "00:04:16,000"
        },
        "offsets": {
          "from": 247000,
          "to": 256000
        },
        "text": "لما تجيب Physical Server زي ده وتنزل عليه Operating System واحد، إنت كده بتهدر Resources، وده Waste of Resources، طب افرض أنا محتاج Server تاني؟"
      },
      {
        "timestamps": {
          "from": "00:04:16,000",
          "to": "00:04:22,240"
        },
        "offsets": {
          "from": 256000,
          "to": 262240
        },
        "text": "يكون Linux، وسيرفر تالت يكون مثلاً Windows، وسيرفر رابع يكون حاجة."
      },
      {
        "timestamps": {
          "from": "00:04:22,240",
          "to": "00:04:28,960"
        },
        "offsets": {
          "from": 262240,
          "to": 268960
        },
        "text": "تانية، كل مرة هتشتري سيرفر جديد وتنزل عليه نوع معين، ما إنت مش هينفع."
      },
      {
        "timestamps": {
          "from": "00:04:28,960",
          "to": "00:04:33,820"
        },
        "offsets": {
          "from": 268960,
          "to": 273820
        },
        "text": "تعمل سيرفر واحد عليه كل حاجة في الدنيا، ده مش صح في الـ Design."
      },
      {
        "timestamps": {
          "from": "00:04:33,820",
          "to": "00:04:37,480"
        },
        "offsets": {
          "from": 273820,
          "to": 277480
        },
        "text": "والـ Security والحاجات دي، الصح إنه لازم يكون السيرفر."
      },
      {
        "timestamps": {
          "from": "00:04:37,480",
          "to": "00:04:43,000"
        },
        "offsets": {
          "from": 277480,
          "to": 283000
        },
        "text": "Dedicated Server للـ Web Server مثلاً، فبسبب الإهدار ده."
      },
      {
        "timestamps": {
          "from": "00:04:43,000",
          "to": "00:04:47,860"
        },
        "offsets": {
          "from": 283000,
          "to": 287860
        },
        "text": "وبسبب قلة الكفاءة في الـ Management للـ Resources وللـ Performance."
      },
      {
        "timestamps": {
          "from": "00:04:47,860",
          "to": "00:04:51,700"
        },
        "offsets": {
          "from": 287860,
          "to": 291700
        },
        "text": "والـ Security والحاجات دي، ظهر الـ Concept بتاع الـ Virtualization."
      },
      {
        "timestamps": {
          "from": "00:04:51,700",
          "to": "00:04:55,360"
        },
        "offsets": {
          "from": 291700,
          "to": 295360
        },
        "text": "Concept الـ Virtualization اللي فيه منه الـ Hardware Virtualization."
      },
      {
        "timestamps": {
          "from": "00:04:55,360",
          "to": "00:04:59,740"
        },
        "offsets": {
          "from": 295360,
          "to": 299740
        },
        "text": "إنك تعمل Virtualize للـ Network والـ CPU والـ Disk."
      },
      {
        "timestamps": {
          "from": "00:04:59,740",
          "to": "00:05:05,620"
        },
        "offsets": {
          "from": 299740,
          "to": 305620
        },
        "text": "والـ Disks وخلافه، لغاية ما وصلنا لفكرة إنك تعمل Virtualize."
      },
      {
        "timestamps": {
          "from": "00:05:05,620",
          "to": "00:05:09,100"
        },
        "offsets": {
          "from": 305620,
          "to": 309100
        },
        "text": "للـ Operating System كله بإنك تعمل Virtual Machine، ففكرة."
      },
      {
        "timestamps": {
          "from": "00:05:09,100",
          "to": "00:05:12,400"
        },
        "offsets": {
          "from": 309100,
          "to": 312400
        },
        "text": "الـ Virtual Machine إن نفس السيرفر ده بدل ما نضيع."
      },
      {
        "timestamps": {
          "from": "00:05:12,400",
          "to": "00:05:15,820"
        },
        "offsets": {
          "from": 312400,
          "to": 315820
        },
        "text": "الـ Resources بتاعته عشان أنزل عليه حاجة واحدة بس، لا هو نفس السيرفر."
      },
      {
        "timestamps": {
          "from": "00:05:15,820",
          "to": "00:05:23,860"
        },
        "offsets": {
          "from": 315820,
          "to": 323860
        },
        "text": "السيرفر ده على الـ Hardware هنا هنزل أكتر من VM وكل VM ليها دورها."
      },
      {
        "timestamps": {
          "from": "00:05:23,860",
          "to": "00:05:26,320"
        },
        "offsets": {
          "from": 323860,
          "to": 326320
        },
        "text": "أنا عارف طبعاً أنا مش هشرح Virtualization أنا عارف إنها اتقالت أكتر من مية مرة."
      },
      {
        "timestamps": {
          "from": "00:05:26,320",
          "to": "00:05:31,720"
        },
        "offsets": {
          "from": 326320,
          "to": 331720
        },
        "text": "هي الفكرة إن بقى عندك سيرفر، وجوه السيرفر ده فيه"
      },
      {
        "timestamps": {
          "from": "00:05:31,720",
          "to": "00:05:38,320"
        },
        "offsets": {
          "from": 331720,
          "to": 338320
        },
        "text": "الـ OS بتاعه والـ Applications بتاعته، بس السيرفر ده بيتعامل كأنه سيرفر"
      },
      {
        "timestamps": {
          "from": "00:05:38,320",
          "to": "00:05:39,080"
        },
        "offsets": {
          "from": 338320,
          "to": 339080
        },
        "text": "مستقل تماماً وخاص."
      },
      {
        "timestamps": {
          "from": "00:05:39,080",
          "to": "00:05:43,100"
        },
        "offsets": {
          "from": 339080,
          "to": 343100
        },
        "text": "الـ VM ممكن ما تعرفش إنها نازلة على Physical Server أصلاً، وهنا برضه"
      },
      {
        "timestamps": {
          "from": "00:05:43,100",
          "to": "00:05:52,460"
        },
        "offsets": {
          "from": 343100,
          "to": 352460
        },
        "text": "VM تانية وهنا VM تانية، هنا ممكن تنزل OS وهنا تنزل OS، وكل واحدة معاها الـ Files بتاعتها."
      },
      {
        "timestamps": {
          "from": "00:05:52,460",
          "to": "00:05:57,920"
        },
        "offsets": {
          "from": 352460,
          "to": 357920
        },
        "text": "وخلافه، فكده قدرت إن أنا أستغل الـ Resources اللي على السيرفر ده"
      },
      {
        "timestamps": {
          "from": "00:05:57,920",
          "to": "00:06:01,760"
        },
        "offsets": {
          "from": 357920,
          "to": 361760
        },
        "text": "أحسن، وكده محتجتش إن أنا في كل مرة أحتاج أجيب مثلاً أعمل"
      },
      {
        "timestamps": {
          "from": "00:06:01,760",
          "to": "00:06:09,060"
        },
        "offsets": {
          "from": 361760,
          "to": 369060
        },
        "text": "سيرفر جديد أو أزود سيرفر، محتجتش إن أنا"
      },
      {
        "timestamps": {
          "from": "00:06:09,060",
          "to": "00:06:12,900"
        },
        "offsets": {
          "from": 369060,
          "to": 372900
        },
        "text": "أشتري Physical Server جديد، لأن هو Physical Server واحد بس فيه أكتر"
      },
      {
        "timestamps": {
          "from": "00:06:12,900",
          "to": "00:06:16,860"
        },
        "offsets": {
          "from": 372900,
          "to": 376860
        },
        "text": "Resources ممكنة وأبدأ إن أنا أقسمه عن طريق الـ Virtualization دي، بس أنا عشان"
      },
      {
        "timestamps": {
          "from": "00:06:16,860",
          "to": "00:06:21,820"
        },
        "offsets": {
          "from": 376860,
          "to": 381820
        },
        "text": "أعمل ده احتجت حاجتين، الحاجة الأولانية احتجت Layer هنا كده"
      },
      {
        "timestamps": {
          "from": "00:06:21,820",
          "to": "00:06:25,880"
        },
        "offsets": {
          "from": 381820,
          "to": 385880
        },
        "text": "فوق الـ Hardware على طول اسمها"
      },
      {
        "timestamps": {
          "from": "00:06:25,880",
          "to": "00:06:38,900"
        },
        "offsets": {
          "from": 385880,
          "to": 398900
        },
        "text": "الـ Hypervisor، اللي هي اللي بتخلي الـ VM تعرف تكلم الـ Hardware أو تتكلم"
      },
      {
        "timestamps": {
          "from": "00:06:38,900",
          "to": "00:06:43,600"
        },
        "offsets": {
          "from": 398900,
          "to": 403600
        },
        "text": "أو تتخيل إنها بتكلم الـ Hardware مباشرة، طبعاً الـ Layer دي"
      },
      {
        "timestamps": {
          "from": "00:06:43,600",
          "to": "00:06:49,440"
        },
        "offsets": {
          "from": 403600,
          "to": 409440
        },
        "text": "هي اللي هتعمل Virtualization للهاردوير جوه بس تبقى Virtual، فتلاقي"
      },
      {
        "timestamps": {
          "from": "00:06:49,440",
          "to": "00:06:55,560"
        },
        "offsets": {
          "from": 409440,
          "to": 415560
        },
        "text": "الـ VM دي مثلاً إنت حددت لها 4 Cores، والسيرفر ده مثلاً يكون"
      },
      {
        "timestamps": {
          "from": "00:06:55,560",
          "to": "00:06:59,700"
        },
        "offsets": {
          "from": 415560,
          "to": 419700
        },
        "text": "عليه مثلاً 256 Core إنت واخد منهم 4 Cores بس."
      },
      {
        "timestamps": {
          "from": "00:06:59,700",
          "to": "00:07:04,000"
        },
        "offsets": {
          "from": 419700,
          "to": 424000
        },
        "text": "وممكن ما يكونش عليه العدد ده بس إنت واخد حتة من الـ Cores بتاعة"
      },
      {
        "timestamps": {
          "from": "00:07:04,000",
          "to": "00:07:12,200"
        },
        "offsets": {
          "from": 424000,
          "to": 432200
        },
        "text": "السيرفر ده وهكذا. دي الطريقة اللي بتشتغل بيها. وطبعاً الموضوع"
      },
      {
        "timestamps": {
          "from": "00:07:12,200",
          "to": "00:07:17,240"
        },
        "offsets": {
          "from": 432200,
          "to": 437240
        },
        "text": "كبر أكتر من كده. تقدر كمان إنك إنت تجيب Physical Server تاني تنزل كمان"
      },
      {
        "timestamps": {
          "from": "00:07:17,240",
          "to": "00:07:25,740"
        },
        "offsets": {
          "from": 437240,
          "to": 445740
        },
        "text": "VMs تانية هنا وتانية هنا، وتعمل Cluster ما بين الاتنين وهكذا. فالموضوع"
      },
      {
        "timestamps": {
          "from": "00:07:25,740",
          "to": "00:07:29,580"
        },
        "offsets": {
          "from": 445740,
          "to": 449580
        },
        "text": "بقى كويس وEfficient وعظيم جداً جداً. لاحظ كمان إن أنا قلت إن أنا"
      },
      {
        "timestamps": {
          "from": "00:07:29,580",
          "to": "00:07:33,840"
        },
        "offsets": {
          "from": 449580,
          "to": 453840
        },
        "text": "محتاج الـ Component الأولانية اللي هي الـ Hypervisor. والـ Component التانية"
      },
      {
        "timestamps": {
          "from": "00:07:33,840",
          "to": "00:07:37,440"
        },
        "offsets": {
          "from": 453840,
          "to": 457440
        },
        "text": "هي الـ Management Software. إنت محتاج Software يخليك تقدر إنك إنت"
      },
      {
        "timestamps": {
          "from": "00:07:37,440",
          "to": "00:07:46,000"
        },
        "offsets": {
          "from": 457440,
          "to": 466000
        },
        "text": "تـ Manage الـ VMs. فكرة الـ Virtualization دي نقطة مهمة جداً."
      },
      {
        "timestamps": {
          "from": "00:07:46,000",
          "to": "00:07:49,040"
        },
        "offsets": {
          "from": 466000,
          "to": 469040
        },
        "text": "إنت ممكن تكون بتسمع المصطلح ده، ممكن بعضنا ما يكونش عارف إيه ده."
      },
      {
        "timestamps": {
          "from": "00:07:49,040",
          "to": "00:07:55,820"
        },
        "offsets": {
          "from": 469040,
          "to": 475820
        },
        "text": "ده عبارة عن عمليتين. لو جينا مثلاً عند الحتة بتاعة الـ Provisioning."
      },
      {
        "timestamps": {
          "from": "00:07:55,820",
          "to": "00:08:03,680"
        },
        "offsets": {
          "from": 475820,
          "to": 483680
        },
        "text": "الجزء المتعلق بالعمليات بإن أنا أعمل Install للـ VM."
      },
      {
        "timestamps": {
          "from": "00:08:03,680",
          "to": "00:08:09,320"
        },
        "offsets": {
          "from": 483680,
          "to": 489320
        },
        "text": "وأعمل الـ Virtual Machine، فده الجزء المتعلق بالـ Build"
      },
      {
        "timestamps": {
          "from": "00:08:09,320",
          "to": "00:08:15,120"
        },
        "offsets": {
          "from": 489320,
          "to": 495120
        },
        "text": "بتاع الـ Virtual Machine. والجزء التاني هو الـ Management، ده الجزء المتعلق"
      },
      {
        "timestamps": {
          "from": "00:08:15,120",
          "to": "00:08:19,840"
        },
        "offsets": {
          "from": 495120,
          "to": 499840
        },
        "text": "بالـ Administration بتاع الـ Virtual Machine. يعني إن أنا"
      },
      {
        "timestamps": {
          "from": "00:08:19,840",
          "to": "00:08:25,540"
        },
        "offsets": {
          "from": 499840,
          "to": 505540
        },
        "text": "أقوم الـ Virtual Machine، أو إني أعمل Migration للـ Virtual Machine دي"
      },
      {
        "timestamps": {
          "from": "00:08:25,540",
          "to": "00:08:28,320"
        },
        "offsets": {
          "from": 505540,
          "to": 508320
        },
        "text": "من Physical Server لـ Physical Server تاني. ده الجزء اللي ملوش"
      },
      {
        "timestamps": {
          "from": "00:08:28,320",
          "to": "00:08:31,060"
        },
        "offsets": {
          "from": 508320,
          "to": 511060
        },
        "text": "علاقة بالـ Virtual Machine دي جواها إيه؟ ليه علاقة بإن"
      },
      {
        "timestamps": {
          "from": "00:08:31,060",
          "to": "00:08:37,540"
        },
        "offsets": {
          "from": 511060,
          "to": 517540
        },
        "text": "الـ Virtual Machine دي Up and Running، Stopped، Created، Backup"
      },
      {
        "timestamps": {
          "from": "00:08:37,540",
          "to": "00:08:43,180"
        },
        "offsets": {
          "from": 517540,
          "to": 523180
        },
        "text": "Restore، Snapshots وهكذا. يبقى أنا محتاج الجزء ده"
      },
      {
        "timestamps": {
          "from": "00:08:43,180",
          "to": "00:08:46,420"
        },
        "offsets": {
          "from": 523180,
          "to": 526420
        },
        "text": "يبقى موجود، الجزء ده بيعمله الـ Management Software ده. مثلاً"
      },
      {
        "timestamps": {
          "from": "00:08:46,420",
          "to": "00:08:51,520"
        },
        "offsets": {
          "from": 526420,
          "to": 531520
        },
        "text": "على ذلك مثلاً لو إنت شغال بـ VMware مثلاً فإنت"
      },
      {
        "timestamps": {
          "from": "00:08:51,520",
          "to": "00:08:56,560"
        },
        "offsets": {
          "from": 531520,
          "to": 536560
        },
        "text": "عندك ده اللي هو الـ Software أو التكنولوجيا"
      },
      {
        "timestamps": {
          "from": "00:08:56,560",
          "to": "00:09:00,900"
        },
        "offsets": {
          "from": 536560,
          "to": 540900
        },
        "text": "اللي أنت بتـ Manage بيها الحتة دي، إنك أنت..."
      },
      {
        "timestamps": {
          "from": "00:09:00,900",
          "to": "00:09:03,540"
        },
        "offsets": {
          "from": 540900,
          "to": 543540
        },
        "text": "وتبني (Build) كمان الـ Virtual Machine. شغال Hypervisor ده"
      },
      {
        "timestamps": {
          "from": "00:09:03,540",
          "to": "00:09:08,280"
        },
        "offsets": {
          "from": 543540,
          "to": 548280
        },
        "text": "لو أنت شغال مثلاً أو لو أنت شغال..."
      },
      {
        "timestamps": {
          "from": "00:09:08,280",
          "to": "00:09:14,280"
        },
        "offsets": {
          "from": 548280,
          "to": 554280
        },
        "text": "Microsoft. يبقى كل الـ Virtual Machines وظيفتها إنها"
      },
      {
        "timestamps": {
          "from": "00:09:14,280",
          "to": "00:09:18,300"
        },
        "offsets": {
          "from": 554280,
          "to": 558300
        },
        "text": "تعمل الحاجتين دول، إنها تديني الـ Resources دي أياً كان نوعها إيه؟"
      },
      {
        "timestamps": {
          "from": "00:09:18,300",
          "to": "00:09:23,040"
        },
        "offsets": {
          "from": 558300,
          "to": 563040
        },
        "text": "ده في منه كذا نوع، في منه اللي بينزل على الـ..."
      },
      {
        "timestamps": {
          "from": "00:09:23,040",
          "to": "00:09:27,600"
        },
        "offsets": {
          "from": 563040,
          "to": 567600
        },
        "text": "يعني بينزل بعد الـ Hardware على طول، وفي منه الـ Type 1"
      },
      {
        "timestamps": {
          "from": "00:09:27,600",
          "to": "00:09:30,740"
        },
        "offsets": {
          "from": 567600,
          "to": 570740
        },
        "text": "بينزل في Ring 1، وفي منه اللي بيبقى موجود"
      },
      {
        "timestamps": {
          "from": "00:09:30,740",
          "to": "00:09:38,740"
        },
        "offsets": {
          "from": 570740,
          "to": 578740
        },
        "text": "كمجرد موجود في الـ OS، وفي منه اللي بينزل على"
      },
      {
        "timestamps": {
          "from": "00:09:38,740",
          "to": "00:09:43,960"
        },
        "offsets": {
          "from": 578740,
          "to": 583960
        },
        "text": "مباشرة مش محتاج تنزل OS الأول، بحيث إنك لما بتشغل السيرفر لأول"
      },
      {
        "timestamps": {
          "from": "00:09:43,960",
          "to": "00:09:48,160"
        },
        "offsets": {
          "from": 583960,
          "to": 588160
        },
        "text": "مرة في الحياة أول حاجة بتعملها هي دي، فده موجود وده موجود وده موجود"
      },
      {
        "timestamps": {
          "from": "00:09:48,160",
          "to": "00:09:53,560"
        },
        "offsets": {
          "from": 588160,
          "to": 593560
        },
        "text": "بس بغض النظر نوعه إيه، وظيفته في الآخر إنه يخليك تعرف تشوف"
      },
      {
        "timestamps": {
          "from": "00:09:53,560",
          "to": "00:10:00,580"
        },
        "offsets": {
          "from": 593560,
          "to": 600580
        },
        "text": "اللي موجودة عندك في الـ Hardware ده. صدق ولا تصدق"
      },
      {
        "timestamps": {
          "from": "00:10:00,580",
          "to": "00:10:07,040"
        },
        "offsets": {
          "from": 600580,
          "to": 607040
        },
        "text": "كل اللي أنا قلته ده فيه بالظبط قصاده في الـ Containers عشان كده دايماً"
      },
      {
        "timestamps": {
          "from": "00:10:07,040",
          "to": "00:10:10,580"
        },
        "offsets": {
          "from": 607040,
          "to": 610580
        },
        "text": "هنقول طول ما إحنا شغالين في الفيديو ده، أحسن حاجة تفهم بيها"
      },
      {
        "timestamps": {
          "from": "00:10:10,580",
          "to": "00:10:13,680"
        },
        "offsets": {
          "from": 610580,
          "to": 613680
        },
        "text": "الـ Container إنك تقارنها بالـ Virtual Machine. ليه؟ عشان إحنا"
      },
      {
        "timestamps": {
          "from": "00:10:13,680",
          "to": "00:10:16,100"
        },
        "offsets": {
          "from": 613680,
          "to": 616100
        },
        "text": "فاهمين Virtual Machine كويس واشتغلنا بيها كتير وعارفين وظيفتها"
      },
      {
        "timestamps": {
          "from": "00:10:16,100",
          "to": "00:10:19,800"
        },
        "offsets": {
          "from": 616100,
          "to": 619800
        },
        "text": "إيه. لغاية كده تمام ولغاية كده مش عاملة لي أي مشكلة"
      },
      {
        "timestamps": {
          "from": "00:10:19,800",
          "to": "00:10:23,840"
        },
        "offsets": {
          "from": 619800,
          "to": 623840
        },
        "text": "خالص. أنا عايز مثلاً أعمل إيه؟ مثلاً عايز أعمل..."
      },
      {
        "timestamps": {
          "from": "00:10:23,840",
          "to": "00:10:27,760"
        },
        "offsets": {
          "from": 623840,
          "to": 627760
        },
        "text": "Web Application مثلاً، الـ Web Application دي فيها"
      },
      {
        "timestamps": {
          "from": "00:10:27,760",
          "to": "00:10:32,100"
        },
        "offsets": {
          "from": 627760,
          "to": 632100
        },
        "text": "Component Web مثلاً، وفيها Component الـ Application"
      },
      {
        "timestamps": {
          "from": "00:10:32,100",
          "to": "00:10:34,780"
        },
        "offsets": {
          "from": 632100,
          "to": 634780
        },
        "text": "الـ Back-end بتاع الويب، وفيها Component Database."
      },
      {
        "timestamps": {
          "from": "00:10:34,780",
          "to": "00:10:39,180"
        },
        "offsets": {
          "from": 634780,
          "to": 639180
        },
        "text": "مثلاً، دي أبسط حاجة خالص. عادي جداً ده هننزله مثلاً على"
      },
      {
        "timestamps": {
          "from": "00:10:39,180",
          "to": "00:10:43,140"
        },
        "offsets": {
          "from": 639180,
          "to": 643140
        },
        "text": "Virtual Machine أو Virtual Machines Cluster. ونفس الكلام"
      },
      {
        "timestamps": {
          "from": "00:10:43,140",
          "to": "00:10:47,760"
        },
        "offsets": {
          "from": 643140,
          "to": 647760
        },
        "text": "هننزله مثلاً على واحد أو أكتر، ونفس الكلام في الـ Database هننزله"
      },
      {
        "timestamps": {
          "from": "00:10:47,760",
          "to": "00:10:51,820"
        },
        "offsets": {
          "from": 647760,
          "to": 651820
        },
        "text": "مثلاً على Database Cluster. دي Virtual Machine ودي Virtual Machine"
      },
      {
        "timestamps": {
          "from": "00:10:51,820",
          "to": "00:10:54,820"
        },
        "offsets": {
          "from": 651820,
          "to": 654820
        },
        "text": "ودي Virtual Machine وهكذا. وكل دول هننزلهم مثلاً على أكتر من"
      },
      {
        "timestamps": {
          "from": "00:10:54,820",
          "to": "00:10:58,220"
        },
        "offsets": {
          "from": 654820,
          "to": 658220
        },
        "text": "Physical Server مثلاً أو Cluster من الـ Physical Servers. لغاية كده"
      },
      {
        "timestamps": {
          "from": "00:10:58,220",
          "to": "00:11:01,340"
        },
        "offsets": {
          "from": 658220,
          "to": 661340
        },
        "text": "برضو مفيش أي مشكلة خالص، الدنيا لغاية دلوقتي تمام جداً"
      },
      {
        "timestamps": {
          "from": "00:11:01,340",
          "to": "00:11:07,460"
        },
        "offsets": {
          "from": 661340,
          "to": 667460
        },
        "text": "خالص وما فيش فيها أي مشكلة. المشكلة بقى إنه ظهرت احتياجات"
      },
      {
        "timestamps": {
          "from": "00:11:07,460",
          "to": "00:11:12,580"
        },
        "offsets": {
          "from": 667460,
          "to": 672580
        },
        "text": "أكتر في الـ Performance، والحتة بتاعة الـ DevOps دي مهمة"
      },
      {
        "timestamps": {
          "from": "00:11:12,580",
          "to": "00:11:16,360"
        },
        "offsets": {
          "from": 672580,
          "to": 676360
        },
        "text": "جداً وهكذا. زي إيه؟ إيه الإشكاليات مثلاً اللي ممكن تكون"
      },
      {
        "timestamps": {
          "from": "00:11:16,360",
          "to": "00:11:19,600"
        },
        "offsets": {
          "from": 676360,
          "to": 679600
        },
        "text": "ظهرت؟ أو التحديات اللي إحنا محتاجين"
      },
      {
        "timestamps": {
          "from": "00:11:19,600",
          "to": "00:11:25,840"
        },
        "offsets": {
          "from": 679600,
          "to": 685840
        },
        "text": "لها حل، إني ألاقي حل أحسن في الحتة دي. هقولك هنا."
      },
      {
        "timestamps": {
          "from": "00:11:25,840",
          "to": "00:11:31,720"
        },
        "offsets": {
          "from": 685840,
          "to": 691720
        },
        "text": "دلوقتي إحنا مش اتفقنا إن دي عبارة عن شبه الـ Physical"
      },
      {
        "timestamps": {
          "from": "00:11:31,720",
          "to": "00:11:37,580"
        },
        "offsets": {
          "from": 691720,
          "to": 697580
        },
        "text": "بالظبط؟ يعني بتعمل عليها الـ OS بتاعك وبتنزل عليها"
      },
      {
        "timestamps": {
          "from": "00:11:37,580",
          "to": "00:11:42,440"
        },
        "offsets": {
          "from": 697580,
          "to": 702440
        },
        "text": "حاجتك وهكذا. صح؟ دي أنت مثلاً بتعمل لها"
      },
      {
        "timestamps": {
          "from": "00:11:42,440",
          "to": "00:11:46,460"
        },
        "offsets": {
          "from": 702440,
          "to": 706460
        },
        "text": "Assignment مثلاً لـ 8GB RAM، أوكي؟ وبتعمل لها مثلاً"
      },
      {
        "timestamps": {
          "from": "00:11:46,460",
          "to": "00:11:53,900"
        },
        "offsets": {
          "from": 706460,
          "to": 713900
        },
        "text": "4 Cores مثلاً تمام؟ في الآخر الـ Resources دي أنت بتعملها في"
      },
      {
        "timestamps": {
          "from": "00:11:53,900",
          "to": "00:11:58,820"
        },
        "offsets": {
          "from": 713900,
          "to": 718820
        },
        "text": "في الآخر خالص علشان الـ Application، إنت مش محتاج كل ده."
      },
      {
        "timestamps": {
          "from": "00:11:58,820",
          "to": "00:12:04,160"
        },
        "offsets": {
          "from": 718820,
          "to": 724160
        },
        "text": "اللي جواه. إنت كل ده مجرد مقدمات ومطلوبة منك علشان تعرف في"
      },
      {
        "timestamps": {
          "from": "00:12:04,160",
          "to": "00:12:12,300"
        },
        "offsets": {
          "from": 724160,
          "to": 732300
        },
        "text": "الآخر تنزل الـ Application. فإنت كل الجزء اللي قبل ما توصل لحتة"
      },
      {
        "timestamps": {
          "from": "00:12:12,300",
          "to": "00:12:17,160"
        },
        "offsets": {
          "from": 732300,
          "to": 737160
        },
        "text": "الـ Application بتاعتك، إنت بالفعل ملوش لازمة، هو كل وظيفته بس إن"
      },
      {
        "timestamps": {
          "from": "00:12:17,160",
          "to": "00:12:22,800"
        },
        "offsets": {
          "from": 737160,
          "to": 742800
        },
        "text": "الـ Application يشتغل. بالإضافة إلى إن الـ Resources دي زي مثلاً إنت"
      },
      {
        "timestamps": {
          "from": "00:12:22,800",
          "to": "00:12:27,720"
        },
        "offsets": {
          "from": 742800,
          "to": 747720
        },
        "text": "بـ Assign تمانية جيجا مثلاً للـ Virtual Machine، رامات، وبـ Assign أربعة Cores"
      },
      {
        "timestamps": {
          "from": "00:12:27,720",
          "to": "00:12:32,280"
        },
        "offsets": {
          "from": 747720,
          "to": 752280
        },
        "text": "تمانية Cores أو ستة Cores والـ Disks وخلافه، مش كلها Dedicated"
      },
      {
        "timestamps": {
          "from": "00:12:32,280",
          "to": "00:12:37,920"
        },
        "offsets": {
          "from": 752280,
          "to": 757920
        },
        "text": "للـ Application. لأ، ده جزء كبير منها أصلاً ضايع في الحاجات اللي هي"
      },
      {
        "timestamps": {
          "from": "00:12:37,920",
          "to": "00:12:42,160"
        },
        "offsets": {
          "from": 757920,
          "to": 762160
        },
        "text": "بتاعة الـ Application، اللي هي من ضمنها مثلاً بتاعة الـ Virtual Machine."
      },
      {
        "timestamps": {
          "from": "00:12:42,160",
          "to": "00:12:48,340"
        },
        "offsets": {
          "from": 762160,
          "to": 768340
        },
        "text": "فإنت فيه هدر برضه في الـ Resources، الهدر ده مشكلته بتسوء أكتر كل"
      },
      {
        "timestamps": {
          "from": "00:12:48,340",
          "to": "00:12:51,220"
        },
        "offsets": {
          "from": 768340,
          "to": 771220
        },
        "text": "ما احتجت إن يكون عندك Virtual Machines أكتر. لو إنت"
      },
      {
        "timestamps": {
          "from": "00:12:51,220",
          "to": "00:12:54,820"
        },
        "offsets": {
          "from": 771220,
          "to": 774820
        },
        "text": "عندك مثلاً Internet Scale، وبـ Application مثلاً عند راجل"
      },
      {
        "timestamps": {
          "from": "00:12:54,820",
          "to": "00:12:59,500"
        },
        "offsets": {
          "from": 774820,
          "to": 779500
        },
        "text": "ربنا فاتح عليك وعملت Company فيها مثلاً Website بيخش"
      },
      {
        "timestamps": {
          "from": "00:12:59,500",
          "to": "00:13:04,720"
        },
        "offsets": {
          "from": 779500,
          "to": 784720
        },
        "text": "لك آلاف الناس في الثانية، فإنت هتلاقي نفسك محتاج مثلاً"
      },
      {
        "timestamps": {
          "from": "00:13:04,720",
          "to": "00:13:12,020"
        },
        "offsets": {
          "from": 784720,
          "to": 792020
        },
        "text": "أربعين، خمسين، ستين VM، ومثلاً حجمهم ضخم جداً"
      },
      {
        "timestamps": {
          "from": "00:13:12,020",
          "to": "00:13:19,520"
        },
        "offsets": {
          "from": 792020,
          "to": 799520
        },
        "text": "إنت محتاج VMs كتيرة جداً جداً، كل دول ليها الـ Overhead بتاعها."
      },
      {
        "timestamps": {
          "from": "00:13:19,520",
          "to": "00:13:28,400"
        },
        "offsets": {
          "from": 799520,
          "to": 808400
        },
        "text": "وليها الـ OS بتاعها، وليها الـ Resources اللي بتستهلكها. إنت"
      },
      {
        "timestamps": {
          "from": "00:13:28,400",
          "to": "00:13:32,480"
        },
        "offsets": {
          "from": 808400,
          "to": 812480
        },
        "text": "كل ده ضايع منك كدرايب، بيسموه بالمناسبة، هو اسمه حتى"
      },
      {
        "timestamps": {
          "from": "00:13:32,480",
          "to": "00:13:36,680"
        },
        "offsets": {
          "from": 812480,
          "to": 816680
        },
        "text": "كده، المصطلح ده لو قريته في حتة، ففي VM Tax."
      },
      {
        "timestamps": {
          "from": "00:13:36,680",
          "to": "00:13:41,880"
        },
        "offsets": {
          "from": 816680,
          "to": 821880
        },
        "text": "للـ VM، الـ Tax بتاع الـ VM ده حاجة منها ومش بس"
      },
      {
        "timestamps": {
          "from": "00:13:41,880",
          "to": "00:13:45,240"
        },
        "offsets": {
          "from": 821880,
          "to": 825240
        },
        "text": "Resources، يعني الـ Resources دي حاجة من الحاجات، إن أنا كل مرة محتاج"
      },
      {
        "timestamps": {
          "from": "00:13:45,240",
          "to": "00:13:49,380"
        },
        "offsets": {
          "from": 825240,
          "to": 829380
        },
        "text": "Application، بنزل VM علشان الـ Application اللي أنا"
      },
      {
        "timestamps": {
          "from": "00:13:49,380",
          "to": "00:13:52,500"
        },
        "offsets": {
          "from": 829380,
          "to": 832500
        },
        "text": "منزلها دي. لأ في حاجة تانية كمان، دلوقتي إنت الـ Application بتاعك ده"
      },
      {
        "timestamps": {
          "from": "00:13:52,500",
          "to": "00:13:55,800"
        },
        "offsets": {
          "from": 832500,
          "to": 835800
        },
        "text": "أو الـ Application بتاعك مش محتاج License، ده لو فرضنا يعني"
      },
      {
        "timestamps": {
          "from": "00:13:55,800",
          "to": "00:13:59,580"
        },
        "offsets": {
          "from": 835800,
          "to": 839580
        },
        "text": "إن الـ OS مش Linux مثلاً Ubuntu أو أي"
      },
      {
        "timestamps": {
          "from": "00:13:59,580",
          "to": "00:14:06,180"
        },
        "offsets": {
          "from": 839580,
          "to": 846180
        },
        "text": "Distro مثلاً، إنت منزل مثلاً أي حاجة بتحتاج تدفع لها"
      },
      {
        "timestamps": {
          "from": "00:14:06,180",
          "to": "00:14:12,600"
        },
        "offsets": {
          "from": 846180,
          "to": 852600
        },
        "text": "License، و Windows طبعاً هتدفع لها License، فإنت كل VM من دي محتاج"
      },
      {
        "timestamps": {
          "from": "00:14:12,600",
          "to": "00:14:15,600"
        },
        "offsets": {
          "from": 852600,
          "to": 855600
        },
        "text": "تشوف الـ Licensing بتاعها شكله عامل إزاي؟ ربما ميكونش زي"
      },
      {
        "timestamps": {
          "from": "00:14:15,600",
          "to": "00:14:19,020"
        },
        "offsets": {
          "from": 855600,
          "to": 859020
        },
        "text": "الـ License بتاعة الـ Physical Machine، وفيه Scheme كده من الـ Licensing"
      },
      {
        "timestamps": {
          "from": "00:14:19,020",
          "to": "00:14:22,380"
        },
        "offsets": {
          "from": 859020,
          "to": 862380
        },
        "text": "بيسهل لك شوية العملية، لكن في الأول وفي الآخر إنت بتدفع برضه"
      },
      {
        "timestamps": {
          "from": "00:14:22,380",
          "to": "00:14:29,100"
        },
        "offsets": {
          "from": 862380,
          "to": 869100
        },
        "text": "License للـ Operating System اللي جوه، محتاج تعمله"
      },
      {
        "timestamps": {
          "from": "00:14:29,100",
          "to": "00:14:32,820"
        },
        "offsets": {
          "from": 869100,
          "to": 872820
        },
        "text": "Maintenance، والـ Application ده في حد"
      },
      {
        "timestamps": {
          "from": "00:14:32,820",
          "to": "00:14:37,740"
        },
        "offsets": {
          "from": 872820,
          "to": 877740
        },
        "text": "ذاته ليه برضه الـ Configuration بتاعته، الـ Updates"
      },
      {
        "timestamps": {
          "from": "00:14:37,740",
          "to": "00:14:41,400"
        },
        "offsets": {
          "from": 877740,
          "to": 881400
        },
        "text": "الـ Patches، الـ Upgrade بتاعها، وإنك تخلي بالك إن الـ Service قايمة"
      },
      {
        "timestamps": {
          "from": "00:14:41,400",
          "to": "00:14:46,560"
        },
        "offsets": {
          "from": 881400,
          "to": 886560
        },
        "text": "والـ Service مش عارف إيه، ده الـ Maintenance لكل واحدة على حدة. شوف"
      },
      {
        "timestamps": {
          "from": "00:14:46,560",
          "to": "00:14:53,160"
        },
        "offsets": {
          "from": 886560,
          "to": 893160
        },
        "text": "عندك كام بقى؟ عشرة، خمستاشر، مية، متين، تلتمية، ألف.. كل الـ Applications"
      },
      {
        "timestamps": {
          "from": "00:14:53,160",
          "to": "00:14:57,480"
        },
        "offsets": {
          "from": 893160,
          "to": 897480
        },
        "text": "محتاجة عناية خاصة، محتاجة License، محتاجة"
      },
      {
        "timestamps": {
          "from": "00:14:57,480",
          "to": "00:15:02,640"
        },
        "offsets": {
          "from": 897480,
          "to": 902640
        },
        "text": "الـ Resources بتاعتها، بتستهلك زيادة وربما تكون أصلاً بتستهلك"
      },
      {
        "timestamps": {
          "from": "00:15:02,640",
          "to": "00:15:04,800"
        },
        "offsets": {
          "from": 902640,
          "to": 904800
        },
        "text": "Resources أكتر من الـ Resources اللي بيستهلكها الـ Application أصلاً اللي"
      },
      {
        "timestamps": {
          "from": "00:15:04,800",
          "to": "00:15:09,000"
        },
        "offsets": {
          "from": 904800,
          "to": 909000
        },
        "text": "بنزلها عليها، فدي برضه من ضمن التحديات اللي موجودة عندنا."
      },
      {
        "timestamps": {
          "from": "00:15:09,000",
          "to": "00:15:11,760"
        },
        "offsets": {
          "from": 909000,
          "to": 911760
        },
        "text": "حتى الآن إحنا ما عندناش أحسن من كدة، وده كويس، ده أرحم بكثير"
      },
      {
        "timestamps": {
          "from": "00:15:11,760",
          "to": "00:15:16,020"
        },
        "offsets": {
          "from": 911760,
          "to": 916020
        },
        "text": "جداً جداً من أكيد ما.. يعني آمين، ما عندناش مشكلة خالص. بس هل فيه"
      },
      {
        "timestamps": {
          "from": "00:15:16,020",
          "to": "00:15:20,040"
        },
        "offsets": {
          "from": 916020,
          "to": 920040
        },
        "text": "طريقة أحسن من كدة؟ يعني هل فيه طريقة إن أنا أوفر بيها على نفسي وجع"
      },
      {
        "timestamps": {
          "from": "00:15:20,040",
          "to": "00:15:24,540"
        },
        "offsets": {
          "from": 920040,
          "to": 924540
        },
        "text": "القلب ده؟ فيه حاجة تانية كمان، والحاجة التانية دي برضه ليها علاقة برضه"
      },
      {
        "timestamps": {
          "from": "00:15:24,540",
          "to": "00:15:30,420"
        },
        "offsets": {
          "from": 924540,
          "to": 930420
        },
        "text": "بالجزء بتاع الـ VM.. اللي هو إيه؟ أنا لما هاجي أعمل علشان أنزل عليها"
      },
      {
        "timestamps": {
          "from": "00:15:30,420",
          "to": "00:15:41,100"
        },
        "offsets": {
          "from": 930420,
          "to": 941100
        },
        "text": "مثلاً مثلاً، ده إنت محتاج واحد بيفهم في البتاع ده، فبالتالي هتجيب"
      },
      {
        "timestamps": {
          "from": "00:15:41,100",
          "to": "00:15:44,160"
        },
        "offsets": {
          "from": 941100,
          "to": 944160
        },
        "text": "واحد هيقعد يعمل لك مثلاً إيه؟ مثلاً 20 أو 30 VM."
      },
      {
        "timestamps": {
          "from": "00:15:44,160",
          "to": "00:15:50,460"
        },
        "offsets": {
          "from": 944160,
          "to": 950460
        },
        "text": "مثلاً يعني، لازم يخش ويعمل لك الـ Configuration بتاعتها، بالذات لو كانت مختلفة"
      },
      {
        "timestamps": {
          "from": "00:15:50,460",
          "to": "00:15:54,120"
        },
        "offsets": {
          "from": 950460,
          "to": 954120
        },
        "text": "عن بعض في الـ Setup بتاعها، هي مش حاجة سهلة يعني."
      },
      {
        "timestamps": {
          "from": "00:15:54,540",
          "to": "00:15:59,160"
        },
        "offsets": {
          "from": 954540,
          "to": 959160
        },
        "text": "فممكن تقولي أه بس أنا فيه حل تاني أقدر إن أنا أعمله، أقدر إن"
      },
      {
        "timestamps": {
          "from": "00:15:59,160",
          "to": "00:16:02,760"
        },
        "offsets": {
          "from": 959160,
          "to": 962760
        },
        "text": "أنا مثلاً آجي أجيب مثلاً الراجل الـ Admin ده، أقوله بص يا معلم"
      },
      {
        "timestamps": {
          "from": "00:16:02,760",
          "to": "00:16:09,300"
        },
        "offsets": {
          "from": 962760,
          "to": 969300
        },
        "text": "إنت كـرِييت لي مثلاً VM، أنا أقدر إن أنا أعمل كدة، أقدر إن"
      },
      {
        "timestamps": {
          "from": "00:16:09,300",
          "to": "00:16:13,500"
        },
        "offsets": {
          "from": 969300,
          "to": 973500
        },
        "text": "أنا آجي أقوله بص اعملي كدة واظبطها لي إن هي تبقى مثلاً"
      },
      {
        "timestamps": {
          "from": "00:16:13,500",
          "to": "00:16:20,820"
        },
        "offsets": {
          "from": 973500,
          "to": 980820
        },
        "text": "مثلاً، وسيف لي الـ VM دي، ظبط لي كل حاجة فيها وخليها لي"
      },
      {
        "timestamps": {
          "from": "00:16:20,820",
          "to": "00:16:24,060"
        },
        "offsets": {
          "from": 980820,
          "to": 984060
        },
        "text": "بقى إيه؟ على المفتاح، تمام؟ وحول لي الـ VM دي وقفل الـ VM ده"
      },
      {
        "timestamps": {
          "from": "00:16:24,060",
          "to": "00:16:31,020"
        },
        "offsets": {
          "from": 984060,
          "to": 991020
        },
        "text": "وتحولها لي مثلاً لـ Template، VM Template، واعمل لي VM تانية تبقى"
      },
      {
        "timestamps": {
          "from": "00:16:31,020",
          "to": "00:16:35,520"
        },
        "offsets": {
          "from": 991020,
          "to": 995520
        },
        "text": "مثلاً Secondary NameNode، وVM تالتة تبقى مثلاً Template لـ DataNode."
      },
      {
        "timestamps": {
          "from": "00:16:35,520",
          "to": "00:16:40,020"
        },
        "offsets": {
          "from": 995520,
          "to": 1000020
        },
        "text": "وVM رابعة تبقى مثلاً YARN، وهكذا بقى، تمام؟ وأياً كانت بقى"
      },
      {
        "timestamps": {
          "from": "00:16:40,020",
          "to": "00:16:43,380"
        },
        "offsets": {
          "from": 1000020,
          "to": 1003380
        },
        "text": "يعني شغل.. أنا بتكلم بلغة الـ Big Data بتاعتي يعني"
      },
      {
        "timestamps": {
          "from": "00:16:43,380",
          "to": "00:16:48,480"
        },
        "offsets": {
          "from": 1003380,
          "to": 1008480
        },
        "text": "بس، ده بقى على كل الأشكال التانية اللي موجودة يعني، واعمل"
      },
      {
        "timestamps": {
          "from": "00:16:48,480",
          "to": "00:16:53,580"
        },
        "offsets": {
          "from": 1008480,
          "to": 1013580
        },
        "text": "الـ Templates دي كلها، وفي كل مرة عايز أعمل Provision لـ Virtual Machine"
      },
      {
        "timestamps": {
          "from": "00:16:53,580",
          "to": "00:16:57,840"
        },
        "offsets": {
          "from": 1013580,
          "to": 1017840
        },
        "text": "هاخد Copy من الـ Template دي، تمام؟ وأعمل VM تانية تبقى هي"
      },
      {
        "timestamps": {
          "from": "00:16:57,840",
          "to": "00:17:02,280"
        },
        "offsets": {
          "from": 1017840,
          "to": 1022280
        },
        "text": "تمام؟ وتقدر الـ Template دي.. أعتقد الـ Template ده معروف."
      },
      {
        "timestamps": {
          "from": "00:17:02,280",
          "to": "00:17:06,360"
        },
        "offsets": {
          "from": 1022280,
          "to": 1026360
        },
        "text": "Template زي مثلاً Word أو أي حاجة، يعني إنت الـ Template ده هو في"
      },
      {
        "timestamps": {
          "from": "00:17:06,360",
          "to": "00:17:09,660"
        },
        "offsets": {
          "from": 1026360,
          "to": 1029660
        },
        "text": "الأول وفي الآخر هو برضه Template، وفيه فراغات وبتاع تكتب إنت فيها"
      },
      {
        "timestamps": {
          "from": "00:17:09,660",
          "to": "00:17:12,660"
        },
        "offsets": {
          "from": 1029660,
          "to": 1032660
        },
        "text": "التفاصيل، بس إنت في الأول وفي الآخر ما بتكتبش على الـ Template."
      },
      {
        "timestamps": {
          "from": "00:17:12,660",
          "to": "00:17:16,380"
        },
        "offsets": {
          "from": 1032660,
          "to": 1036380
        },
        "text": "إنت بتاخد منها نسخة، وبعدين بتقوم معدل في النسخة دي، نفس"
      },
      {
        "timestamps": {
          "from": "00:17:16,380",
          "to": "00:17:20,460"
        },
        "offsets": {
          "from": 1036380,
          "to": 1040460
        },
        "text": "الطريقة بالظبط في الـ VM تعمل كدة، وتقولي مثلاً أنا Hadoop مثلاً"
      },
      {
        "timestamps": {
          "from": "00:17:20,460",
          "to": "00:17:24,300"
        },
        "offsets": {
          "from": 1040460,
          "to": 1044300
        },
        "text": "بعمل له Setup مثلاً بياخد لي ساعة، يعني كل مرة بعمل Setup بياخد ساعة، لا"
      },
      {
        "timestamps": {
          "from": "00:17:24,300",
          "to": "00:17:28,380"
        },
        "offsets": {
          "from": 1044300,
          "to": 1048380
        },
        "text": "ما إنتش محتاج تعمل حاجة زي كدة، إنت هتوفر في وقتك جامد جداً جداً"
      },
      {
        "timestamps": {
          "from": "00:17:28,380",
          "to": "00:17:33,060"
        },
        "offsets": {
          "from": 1048380,
          "to": 1053060
        },
        "text": "وتظبطها وتعمل كل الـ Configurations اللي إنت محتاجها، وبعد كدة تقوم"
      },
      {
        "timestamps": {
          "from": "00:17:33,060",
          "to": "00:17:35,880"
        },
        "offsets": {
          "from": 1053060,
          "to": 1055880
        },
        "text": "عامل Freeze للـ Virtual Machine دي وتعمل لها Template وبتاع وتبقى هي"
      },
      {
        "timestamps": {
          "from": "00:17:35,880",
          "to": "00:17:39,840"
        },
        "offsets": {
          "from": 1055880,
          "to": 1059840
        },
        "text": "الـ Template بتاعتك، لما تعوز بقى يبقى عندك مثلاً Hadoop شغال"
      },
      {
        "timestamps": {
          "from": "00:17:39,840",
          "to": "00:17:47,520"
        },
        "offsets": {
          "from": 1059840,
          "to": 1067520
        },
        "text": "مثلاً في الـ VMs، هتاخد من الـ Template دي وتعمل لها Clone"
      },
      {
        "timestamps": {
          "from": "00:17:47,520",
          "to": "00:17:53,880"
        },
        "offsets": {
          "from": 1067520,
          "to": 1073880
        },
        "text": "وتفتح الـ VM بيها وتعدل اللي إنت محتاج إنك تعدله، كويس"
      },
      {
        "timestamps": {
          "from": "00:17:53,880",
          "to": "00:17:59,160"
        },
        "offsets": {
          "from": 1073880,
          "to": 1079160
        },
        "text": "كدة؟ ده صح، ده صح وموجود برضه، بس هنا برضه فيه عندنا إشكالات"
      },
      {
        "timestamps": {
          "from": "00:17:59,160",
          "to": "00:18:03,360"
        },
        "offsets": {
          "from": 1079160,
          "to": 1083360
        },
        "text": "غيرها، إنك إنت في كل مرة تيجي تحتاج تعمل الـ Template، إنت"
      },
      {
        "timestamps": {
          "from": "00:18:03,360",
          "to": "00:18:07,800"
        },
        "offsets": {
          "from": 1083360,
          "to": 1087800
        },
        "text": "محتاج واحد فاهم، محتاج حد فاهم في التكنولوجي دي، فالجزء بتاع"
      },
      {
        "timestamps": {
          "from": "00:18:07,800",
          "to": "00:18:09,120"
        },
        "offsets": {
          "from": 1087800,
          "to": 1089120
        },
        "text": "الـ DevOps ده فيه برضه"
      },
      {
        "timestamps": {
          "from": "00:18:09,120",
          "to": "00:18:13,800"
        },
        "offsets": {
          "from": 1089120,
          "to": 1093800
        },
        "text": "Dependency إن لازم يكون الـ Tools نفسها تكون موجودة، طب افرض إن أنا"
      },
      {
        "timestamps": {
          "from": "00:18:13,800",
          "to": "00:18:22,620"
        },
        "offsets": {
          "from": 1093800,
          "to": 1102620
        },
        "text": "عايز كراجل DevOps عايز أعمل Deploy لـ Applications زي"
      },
      {
        "timestamps": {
          "from": "00:18:22,620",
          "to": "00:18:30,420"
        },
        "offsets": {
          "from": 1102620,
          "to": 1110420
        },
        "text": "الـ Web أو الـ Hadoop أو أي حاجة، أعمل Deploy لأي عدد من النسخ منها"
      },
      {
        "timestamps": {
          "from": "00:18:30,420",
          "to": "00:18:34,680"
        },
        "offsets": {
          "from": 1110420,
          "to": 1114680
        },
        "text": "عندي في VM أو في أي بيئة تانية من غير أصلاً ما أكون عارف"
      },
      {
        "timestamps": {
          "from": "00:18:34,680",
          "to": "00:18:38,400"
        },
        "offsets": {
          "from": 1114680,
          "to": 1118400
        },
        "text": "الـ Installation هيتعمل إزاي، ولا يهمني ولا عارف حتى"
      },
      {
        "timestamps": {
          "from": "00:18:38,400",
          "to": "00:18:42,720"
        },
        "offsets": {
          "from": 1118400,
          "to": 1122720
        },
        "text": "الـ Application دي فيها إيه، عشان ده لو هيتعمل يدوي هيكون صعب جداً جداً. أنت"
      },
      {
        "timestamps": {
          "from": "00:18:42,720",
          "to": "00:18:46,800"
        },
        "offsets": {
          "from": 1122720,
          "to": 1126800
        },
        "text": "محتاج تعمل Template لكل حاجة، أي حاجة بقى"
      },
      {
        "timestamps": {
          "from": "00:18:46,800",
          "to": "00:18:50,760"
        },
        "offsets": {
          "from": 1126800,
          "to": 1130760
        },
        "text": "تخطر في بالك هتحتاج تعمل لها Template. بس في طريقة تانية"
      },
      {
        "timestamps": {
          "from": "00:18:50,760",
          "to": "00:18:56,100"
        },
        "offsets": {
          "from": 1130760,
          "to": 1136100
        },
        "text": "أحسن من كده برضه، والـ Container بيحل الإشكاليات دي. تاني إحنا"
      },
      {
        "timestamps": {
          "from": "00:18:56,100",
          "to": "00:18:58,740"
        },
        "offsets": {
          "from": 1136100,
          "to": 1138740
        },
        "text": "مش بنقول إن الـ Container أحسن، بل بالعكس أنت هتشوف إن في حاجات"
      },
      {
        "timestamps": {
          "from": "00:18:58,740",
          "to": "00:19:03,180"
        },
        "offsets": {
          "from": 1138740,
          "to": 1143180
        },
        "text": "الـ VMs فيها أحسن، والنتيجة النهائية تبقى إننا"
      },
      {
        "timestamps": {
          "from": "00:19:03,180",
          "to": "00:19:06,900"
        },
        "offsets": {
          "from": 1143180,
          "to": 1146900
        },
        "text": "نستعمل الاتنين مع بعض والاتنين يكملوا بعض، مش إننا نستعمل"
      },
      {
        "timestamps": {
          "from": "00:19:06,900",
          "to": "00:19:12,600"
        },
        "offsets": {
          "from": 1146900,
          "to": 1152600
        },
        "text": "حاجة بدل التانية، أو على حسب الـ Use case بتاعتك. طيب تعالوا نبدأ نشوف"
      },
      {
        "timestamps": {
          "from": "00:19:12,600",
          "to": "00:19:16,080"
        },
        "offsets": {
          "from": 1152600,
          "to": 1156080
        },
        "text": "نحل الإشكاليات دي إزاي أو نحاول نعالج الموقف ده إزاي أو"
      },
      {
        "timestamps": {
          "from": "00:19:16,080",
          "to": "00:19:19,040"
        },
        "offsets": {
          "from": 1156080,
          "to": 1159040
        },
        "text": "نحسن من الـ Solution اللي موجود بتاع"
      }
    ]
  },
  {
    "id": 3,
    "title": "Container Architecture",
    "duration": 1825.0,
    "isReady": true,
    "transcription": [
      {
        "timestamps": {
          "from": "00:00:00,000",
          "to": "00:00:08,000"
        },
        "offsets": {
          "from": 0,
          "to": 8000
        },
        "text": "ودلوقتي أنا إيه أكبر إشكالية عندي؟ أكبر إشكالية اللي عملالي الأزمة دي كلها هي حتة الـ Operating System اللي موجود في كل Virtual Machine دي."
      },
      {
        "timestamps": {
          "from": "00:00:08,000",
          "to": "00:00:14,000"
        },
        "offsets": {
          "from": 8000,
          "to": 14000
        },
        "text": "لو قدرت تتخلص من الفكرة دي، لو خليناها بالمنظر ده، الـ Virtual Machine شكلها هيبقى عامل إزاي؟"
      },
      {
        "timestamps": {
          "from": "00:00:14,000",
          "to": "00:00:20,000"
        },
        "offsets": {
          "from": 14000,
          "to": 20000
        },
        "text": "تاني Virtual Machine هناخد لون تاني كده عشان الناس ما تزعلش، هنخليه أحمر عشان ما نوجعش عين الناس."
      },
      {
        "timestamps": {
          "from": "00:00:20,000",
          "to": "00:00:28,000"
        },
        "offsets": {
          "from": 20000,
          "to": 28000
        },
        "text": "دي الـ Virtual Machine اللي عندي، جوه الـ Virtual Machine دي في عندي الـ Layer بتاعة الـ Virtual Hardware اللي مقدمها لي الـ Hypervisor."
      },
      {
        "timestamps": {
          "from": "00:00:28,000",
          "to": "00:00:35,000"
        },
        "offsets": {
          "from": 28000,
          "to": 35000
        },
        "text": "وعندي هنا الـ Operating System الكامل اللي فيه الإشكالية بكل الحاجات اللي جواه، وبعد كده عندي شوية Dependencies، تمام؟"
      },
      {
        "timestamps": {
          "from": "00:00:35,000",
          "to": "00:00:41,000"
        },
        "offsets": {
          "from": 35000,
          "to": 41000
        },
        "text": "وبعد كده عندي الـ Application بتاعتي اللي هي Running واللي أنا محتاجها أصلاً من الـ Virtual Machine واللي عشانها عملت الـ Virtual Machine."
      },
      {
        "timestamps": {
          "from": "00:00:41,000",
          "to": "00:00:48,000"
        },
        "offsets": {
          "from": 41000,
          "to": 48000
        },
        "text": "الإشكالية عندي فين هنا؟ الإشكالية في الـ Operating System ده، نعمل إيه في موضوع الـ Operating System ده؟"
      },
      {
        "timestamps": {
          "from": "00:00:48,000",
          "to": "00:00:56,000"
        },
        "offsets": {
          "from": 48000,
          "to": 56000
        },
        "text": "لو قدرت إني آخد بس الـ Application مع الـ Dependency وأخرجهم بره وأتعامل مع الحتة دي اللي هي الـ Application بتاعي."
      },
      {
        "timestamps": {
          "from": "00:00:56,000",
          "to": "00:01:07,000"
        },
        "offsets": {
          "from": 56000,
          "to": 67000
        },
        "text": "بس من غير الـ Operating System ده، يا سلام، كده يبقى أنا عملت كل اللي أنا محتاجه، وكده قدرت إني أحل المعضلة دي."
      },
      {
        "timestamps": {
          "from": "00:01:07,000",
          "to": "00:01:16,000"
        },
        "offsets": {
          "from": 67000,
          "to": 76000
        },
        "text": "طب أعمل ده إزاي؟ قالك طب بص خلينا نقسم المسافة نصين، يعني نمسك العصاية من النص."
      },
      {
        "timestamps": {
          "from": "00:01:16,000",
          "to": "00:01:24,000"
        },
        "offsets": {
          "from": 76000,
          "to": 84000
        },
        "text": "هو الـ Operating System نفسه ده عبارة عن إيه؟ لو خرجنا الـ Operating System ده بره، تمام؟ ده الـ Operating System."
      },
      {
        "timestamps": {
          "from": "00:01:24,000",
          "to": "00:01:53,980"
        },
        "offsets": {
          "from": 84000,
          "to": 113980
        },
        "text": "الـ Operating System نفسه عبارة عن حاجتين: عبارة عن Kernel وشوية OS specification أو سموها الـ Kernel Mode والـ User Mode. أنت لما بتعمل Start للـ Operating System بيبدأ في الأول خالص يتعرف على الـ Hardware اللي موجودة، بيشوف الـ Motherboard والـ RAMs والـ Disks والـ Network والكلام ده، دي الحتة اللي في الأول، ده اللي بيسموه Kernel Mode وده عبارة عن شوية الـ Components الرئيسية."
      },
      {
        "timestamps": {
          "from": "00:01:53,980",
          "to": "00:02:06,420"
        },
        "offsets": {
          "from": 113980,
          "to": 126420
        },
        "text": "الـ Fundamentals اللي موجودة في الـ Operating System اللي بتتعرف على الـ Hardware. تمام؟ بعد كده أول ما بتدخل على الحتة اللي بعد الـ Graphic Interface اللي بتكتب فيها الـ Username والـ Password وتدخل على الـ Operating System، في شوية Services أو Daemons تانية بتشتغل."
      },
      {
        "timestamps": {
          "from": "00:02:06,420",
          "to": "00:02:13,200"
        },
        "offsets": {
          "from": 126420,
          "to": 133200
        },
        "text": "اللي هي الحتة بتاعة الـ Graphic Interface أو الـ Command Line Interface وشوية الحاجات التانية اللي ليها علاقة بالـ User Mode جوه الـ Operating System."
      },
      {
        "timestamps": {
          "from": "00:02:13,200",
          "to": "00:02:16,000"
        },
        "offsets": {
          "from": 133200,
          "to": 136000
        },
        "text": "كويس كده؟ ده اللي هو الجزء بتاع الـ User Mode."
      },
      {
        "timestamps": {
          "from": "00:02:16,000",
          "to": "00:02:18,000"
        },
        "offsets": {
          "from": 136000,
          "to": 138000
        },
        "text": "يبقى أنا عندي الـ User Mode وعندي الـ Kernel Mode."
      },
      {
        "timestamps": {
          "from": "00:02:18,000",
          "to": "00:02:20,000"
        },
        "offsets": {
          "from": 138000,
          "to": 140000
        },
        "text": "الـ User Mode ده أنا مش محتاجه."
      },
      {
        "timestamps": {
          "from": "00:02:20,000",
          "to": "00:02:22,000"
        },
        "offsets": {
          "from": 140000,
          "to": 142000
        },
        "text": "أنا مش محتاج الـ User Mode ده."
      },
      {
        "timestamps": {
          "from": "00:02:22,000",
          "to": "00:02:25,800"
        },
        "offsets": {
          "from": 142000,
          "to": 145800
        },
        "text": "اللي موجود في كل Virtual Machine ده أنا مش محتاجه."
      },
      {
        "timestamps": {
          "from": "00:02:25,800",
          "to": "00:02:29,800"
        },
        "offsets": {
          "from": 145800,
          "to": 149800
        },
        "text": "ما أنا بالفعل محتاج إيه؟ أنا بالفعل محتاج الـ Kernel بس."
      },
      {
        "timestamps": {
          "from": "00:02:29,800",
          "to": "00:02:32,800"
        },
        "offsets": {
          "from": 149800,
          "to": 152800
        },
        "text": "لأن هو ده اللي هيخلينا نتعرف على الـ Hardware وده مفيش غنى عنه."
      },
      {
        "timestamps": {
          "from": "00:02:32,800",
          "to": "00:02:34,200"
        },
        "offsets": {
          "from": 152800,
          "to": 154200
        },
        "text": "ده ملوش غنى."
      },
      {
        "timestamps": {
          "from": "00:02:34,200",
          "to": "00:02:40,600"
        },
        "offsets": {
          "from": 154200,
          "to": 160600
        },
        "text": "لازم الـ Kernel ده. سواء كنت بالـ Virtual Machine بالمنظر ده هشوف الـ Virtual Hardware أو هشوف الـ Physical Hardware الأصلي."
      },
      {
        "timestamps": {
          "from": "00:02:40,600",
          "to": "00:02:41,900"
        },
        "offsets": {
          "from": 160600,
          "to": 161900
        },
        "text": "تمام؟ طب حلو."
      },
      {
        "timestamps": {
          "from": "00:02:41,900",
          "to": "00:02:44,700"
        },
        "offsets": {
          "from": 161900,
          "to": 164700
        },
        "text": "يبقى أنا محتاج في الأصل هو الـ Kernel Mode ده."
      },
      {
        "timestamps": {
          "from": "00:02:44,700",
          "to": "00:02:46,700"
        },
        "offsets": {
          "from": 164700,
          "to": 166700
        },
        "text": "ده اللي أنا محتاجه بالفعل."
      },
      {
        "timestamps": {
          "from": "00:02:46,700",
          "to": "00:02:53,700"
        },
        "offsets": {
          "from": 166700,
          "to": 173700
        },
        "text": "طب ما أنا عندي الـ Kernel ده موجود أصلاً في الـ Operating System الأصلي اللي موجود على الـ Physical Machine؟"
      },
      {
        "timestamps": {
          "from": "00:02:53,700",
          "to": "00:02:57,700"
        },
        "offsets": {
          "from": 173700,
          "to": 177700
        },
        "text": "يعني لو هنزل الـ Containers بتاعتي دي على الـ Physical Machine."
      },
      {
        "timestamps": {
          "from": "00:02:57,700",
          "to": "00:03:00,700"
        },
        "offsets": {
          "from": 177700,
          "to": 180700
        },
        "text": "مثلاً أنا Already عندي Operating System على الـ Physical Machine."
      },
      {
        "timestamps": {
          "from": "00:03:00,700",
          "to": "00:03:02,700"
        },
        "offsets": {
          "from": 180700,
          "to": 182700
        },
        "text": "لو أنت منزل ده Virtual Machine."
      },
      {
        "timestamps": {
          "from": "00:03:02,700",
          "to": "00:03:05,700"
        },
        "offsets": {
          "from": 182700,
          "to": 185700
        },
        "text": "مثلاً لو الـ Virtual Machine دي منزلها على الـ Physical Machine."
      },
      {
        "timestamps": {
          "from": "00:03:05,700",
          "to": "00:03:07,700"
        },
        "offsets": {
          "from": 185700,
          "to": 187700
        },
        "text": "الـ Physical Machine في الأصل فيها Operating System."
      },
      {
        "timestamps": {
          "from": "00:03:07,700",
          "to": "00:03:09,700"
        },
        "offsets": {
          "from": 187700,
          "to": 189700
        },
        "text": "اللي هو الـ Host Operating System."
      },
      {
        "timestamps": {
          "from": "00:03:09,700",
          "to": "00:03:14,700"
        },
        "offsets": {
          "from": 189700,
          "to": 194700
        },
        "text": "اللي من بعده بتبدأ تنزل الـ Management Software اللي بتعمل Create للـ Virtual Machine."
      },
      {
        "timestamps": {
          "from": "00:03:14,700",
          "to": "00:03:17,700"
        },
        "offsets": {
          "from": 194700,
          "to": 197700
        },
        "text": "تمام الـ Operating System ده فيه Kernel."
      },
      {
        "timestamps": {
          "from": "00:03:17,700",
          "to": "00:03:22,700"
        },
        "offsets": {
          "from": 197700,
          "to": 202700
        },
        "text": "هل أقدر إني أستعمل الـ Kernel بتاع الـ Operating System ده؟"
      },
      {
        "timestamps": {
          "from": "00:03:22,700",
          "to": "00:03:27,700"
        },
        "offsets": {
          "from": 202700,
          "to": 207700
        },
        "text": "لو قدرت بس إني أستعمل الـ Kernel بتاع الـ Operating System اللي نازل عليه الـ Container."
      },
      {
        "timestamps": {
          "from": "00:03:27,700",
          "to": "00:03:29,700"
        },
        "offsets": {
          "from": 207700,
          "to": 209700
        },
        "text": "سواء كانت الـ Virtual Machine أو الـ Physical Machine."
      },
      {
        "timestamps": {
          "from": "00:03:29,700",
          "to": "00:03:33,700"
        },
        "offsets": {
          "from": 209700,
          "to": 213700
        },
        "text": "وأستغنى عن الـ User Mode ده، يبقى قطعت نص السكة."
      },
      {
        "timestamps": {
          "from": "00:03:33,700",
          "to": "00:03:36,700"
        },
        "offsets": {
          "from": 213700,
          "to": 216700
        },
        "text": "قطعت كده نص الطريق."
      },
      {
        "timestamps": {
          "from": "00:03:36,700",
          "to": "00:03:38,700"
        },
        "offsets": {
          "from": 216700,
          "to": 218700
        },
        "text": "لو الـ Applications والحاجات دي."
      },
      {
        "timestamps": {
          "from": "00:03:38,700",
          "to": "00:03:42,700"
        },
        "offsets": {
          "from": 218700,
          "to": 222700
        },
        "text": "بدل ما استعمل الـ OS بتاع كل Virtual Machine على حدة."
      },
      {
        "timestamps": {
          "from": "00:03:42,700",
          "to": "00:03:46,700"
        },
        "offsets": {
          "from": 222700,
          "to": 226700
        },
        "text": "لو خدت بس الـ Kernel المشترك ما بين كل الـ Virtual Machines."
      },
      {
        "timestamps": {
          "from": "00:03:46,700",
          "to": "00:03:49,700"
        },
        "offsets": {
          "from": 226700,
          "to": 229700
        },
        "text": "اللي هو موجود على الـ Operating System الأصلي."
      },
      {
        "timestamps": {
          "from": "00:03:49,700",
          "to": "00:03:51,700"
        },
        "offsets": {
          "from": 229700,
          "to": 231700
        },
        "text": "اللي هو الـ Host Operating System."
      },
      {
        "timestamps": {
          "from": "00:03:51,700",
          "to": "00:03:52,700"
        },
        "offsets": {
          "from": 231700,
          "to": 232700
        },
        "text": "حليت المشكلة."
      },
      {
        "timestamps": {
          "from": "00:03:52,700",
          "to": "00:03:55,700"
        },
        "offsets": {
          "from": 232700,
          "to": 235700
        },
        "text": "يبقى الـ Kernel اللي على الـ Host Operating System ده."
      },
      {
        "timestamps": {
          "from": "00:03:55,700",
          "to": "00:03:59,700"
        },
        "offsets": {
          "from": 235700,
          "to": 239700
        },
        "text": "Shared ما بين كل الـ Applications بتاعتي."
      },
      {
        "timestamps": {
          "from": "00:03:59,700",
          "to": "00:04:04,700"
        },
        "offsets": {
          "from": 239700,
          "to": 244700
        },
        "text": "وهي دي أول وأهم فكرة في الـ Containers."
      },
      {
        "timestamps": {
          "from": "00:04:04,700",
          "to": "00:04:06,700"
        },
        "offsets": {
          "from": 244700,
          "to": 246700
        },
        "text": "والفكرة الرئيسية في الـ Containers."
      },
      {
        "timestamps": {
          "from": "00:04:06,700",
          "to": "00:04:07,700"
        },
        "offsets": {
          "from": 246700,
          "to": 247700
        },
        "text": "فكرة الـ Containers."
      },
      {
        "timestamps": {
          "from": "00:04:07,700",
          "to": "00:04:12,700"
        },
        "offsets": {
          "from": 247700,
          "to": 252700
        },
        "text": "إنها بتعتمد مباشرة على الـ Kernel بتاع الـ Operating System."
      },
      {
        "timestamps": {
          "from": "00:04:12,700",
          "to": "00:04:14,700"
        },
        "offsets": {
          "from": 252700,
          "to": 254700
        },
        "text": "اللي نازل عليه الـ Virtual Machine."
      },
      {
        "timestamps": {
          "from": "00:04:14,700",
          "to": "00:04:16,700"
        },
        "offsets": {
          "from": 254700,
          "to": 256700
        },
        "text": "أو حتى لو إنت هتنزل على الـ Physical Machine."
      },
      {
        "timestamps": {
          "from": "00:04:16,700",
          "to": "00:04:19,700"
        },
        "offsets": {
          "from": 256700,
          "to": 259700
        },
        "text": "اللي هو الـ Kernel بتاع الـ Operating System اللي نازل على الـ Physical Machine."
      },
      {
        "timestamps": {
          "from": "00:04:19,700",
          "to": "00:04:25,700"
        },
        "offsets": {
          "from": 259700,
          "to": 265700
        },
        "text": "ومحتاجش إن أنا أعمل Operating System لكل Application هحتاج إن أنا أعملها."
      },
      {
        "timestamps": {
          "from": "00:04:25,700",
          "to": "00:04:33,700"
        },
        "offsets": {
          "from": 265700,
          "to": 273700
        },
        "text": "دي أول حاجة عندنا أو أول نقطة مفصلية في الـ Containers."
      },
      {
        "timestamps": {
          "from": "00:04:33,700",
          "to": "00:04:36,700"
        },
        "offsets": {
          "from": 273700,
          "to": 276700
        },
        "text": "يبقى أنا بالطريقة دي استفدت إيه؟"
      },
      {
        "timestamps": {
          "from": "00:04:36,700",
          "to": "00:04:38,700"
        },
        "offsets": {
          "from": 276700,
          "to": 278700
        },
        "text": "لو أنا عندي الـ Container ده."
      },
      {
        "timestamps": {
          "from": "00:04:38,700",
          "to": "00:04:39,700"
        },
        "offsets": {
          "from": 278700,
          "to": 279700
        },
        "text": "عندي شوية Containers."
      },
      {
        "timestamps": {
          "from": "00:04:39,700",
          "to": "00:04:45,700"
        },
        "offsets": {
          "from": 279700,
          "to": 285700
        },
        "text": "والـ Containers دي كل اللي محتاجاه هو Kernel واحد بس."
      },
      {
        "timestamps": {
          "from": "00:04:45,700",
          "to": "00:04:48,700"
        },
        "offsets": {
          "from": 285700,
          "to": 288700
        },
        "text": "للـ Virtual Machine اللي الـ Container نازل عليه."
      },
      {
        "timestamps": {
          "from": "00:04:48,700",
          "to": "00:04:51,700"
        },
        "offsets": {
          "from": 288700,
          "to": 291700
        },
        "text": "أو للـ Physical Machine اللي الـ Containers نازلة عليه."
      },
      {
        "timestamps": {
          "from": "00:04:51,700",
          "to": "00:04:58,700"
        },
        "offsets": {
          "from": 291700,
          "to": 298700
        },
        "text": "بالطريقة دي استغنيت عن فكرة الـ Full Operating System اللي أنا محتاج إن أنا أعمله Installation في كل Virtual Machine."
      },
      {
        "timestamps": {
          "from": "00:04:58,700",
          "to": "00:05:00,700"
        },
        "offsets": {
          "from": 298700,
          "to": 300700
        },
        "text": "وبالطريقة دي مفيش Licensing."
      },
      {
        "timestamps": {
          "from": "00:05:00,700",
          "to": "00:05:02,700"
        },
        "offsets": {
          "from": 300700,
          "to": 302700
        },
        "text": "بالطريقة دي مفيش أكتر من Attack Surface."
      },
      {
        "timestamps": {
          "from": "00:05:02,700",
          "to": "00:05:04,700"
        },
        "offsets": {
          "from": 302700,
          "to": 304700
        },
        "text": "مع كل الـ VMs كان بيبقى فيها Kernel بتاعها."
      },
      {
        "timestamps": {
          "from": "00:05:04,700",
          "to": "00:05:05,700"
        },
        "offsets": {
          "from": 304700,
          "to": 305700
        },
        "text": "الـ VM بيبقى فيها Kernel بتاعها."
      },
      {
        "timestamps": {
          "from": "00:05:05,700",
          "to": "00:05:06,700"
        },
        "offsets": {
          "from": 305700,
          "to": 306700
        },
        "text": "والـ User Mode بتاعها."
      },
      {
        "timestamps": {
          "from": "00:05:06,700",
          "to": "00:05:07,700"
        },
        "offsets": {
          "from": 306700,
          "to": 307700
        },
        "text": "الـ Kernel بتاعها."
      },
      {
        "timestamps": {
          "from": "00:05:07,700",
          "to": "00:05:08,700"
        },
        "offsets": {
          "from": 307700,
          "to": 308700
        },
        "text": "والـ User Mode بتاعها."
      },
      {
        "timestamps": {
          "from": "00:05:08,700",
          "to": "00:05:09,700"
        },
        "offsets": {
          "from": 308700,
          "to": 309700
        },
        "text": "مبقاش ده موجود."
      },
      {
        "timestamps": {
          "from": "00:05:09,700",
          "to": "00:05:16,700"
        },
        "offsets": {
          "from": 309700,
          "to": 316700
        },
        "text": "بالطريقة دي مبقتش محتاج إن أنا أخلي بالي وأعمل الـ Operations والـ Security Measures بتاعتي على كل VM لوحدها."
      },
      {
        "timestamps": {
          "from": "00:05:16,700",
          "to": "00:05:17,700"
        },
        "offsets": {
          "from": 316700,
          "to": 317700
        },
        "text": "كل VM فيها OS لوحده."
      },
      {
        "timestamps": {
          "from": "00:05:17,700",
          "to": "00:05:18,700"
        },
        "offsets": {
          "from": 317700,
          "to": 318700
        },
        "text": "وكل OS ليه الـ Updates بتاعته."
      },
      {
        "timestamps": {
          "from": "00:05:18,700",
          "to": "00:05:19,700"
        },
        "offsets": {
          "from": 318700,
          "to": 319700
        },
        "text": "والـ Patches بتاعته."
      },
      {
        "timestamps": {
          "from": "00:05:19,700",
          "to": "00:05:20,700"
        },
        "offsets": {
          "from": 319700,
          "to": 320700
        },
        "text": "والـ Upgrade بتاعه."
      },
      {
        "timestamps": {
          "from": "00:05:20,700",
          "to": "00:05:21,700"
        },
        "offsets": {
          "from": 320700,
          "to": 321700
        },
        "text": "والكلام ده."
      },
      {
        "timestamps": {
          "from": "00:05:21,700",
          "to": "00:05:23,700"
        },
        "offsets": {
          "from": 321700,
          "to": 323700
        },
        "text": "مش محتاج إن أنا أعمل الكلام ده."
      },
      {
        "timestamps": {
          "from": "00:05:23,700",
          "to": "00:05:29,700"
        },
        "offsets": {
          "from": 323700,
          "to": 329700
        },
        "text": "بالطريقة دي محتجتش إن أنا أدفع Licensing لكل Virtual Machine بالـ Operating System اللي موجود عليها."
      },
      {
        "timestamps": {
          "from": "00:05:29,700",
          "to": "00:05:37,700"
        },
        "offsets": {
          "from": 329700,
          "to": 337700
        },
        "text": "حاجات كتير جداً اتحلت بمجرد ما فكرت أخلي الـ Container يعتمد بس على الـ Kernel."
      },
      {
        "timestamps": {
          "from": "00:05:37,700",
          "to": "00:05:38,700"
        },
        "offsets": {
          "from": 337700,
          "to": 338700
        },
        "text": "طب أعمل ده إزاي؟"
      },
      {
        "timestamps": {
          "from": "00:05:38,700",
          "to": "00:05:40,700"
        },
        "offsets": {
          "from": 338700,
          "to": 340700
        },
        "text": "أقولك تعمل ده إزاي."
      },
      {
        "timestamps": {
          "from": "00:05:40,700",
          "to": "00:05:44,700"
        },
        "offsets": {
          "from": 340700,
          "to": 344700
        },
        "text": "برضه بفكرة من الـ Virtual Machine."
      },
      {
        "timestamps": {
          "from": "00:05:44,700",
          "to": "00:05:50,700"
        },
        "offsets": {
          "from": 344700,
          "to": 350700
        },
        "text": "تعالوا برضه نرجع تاني لفكرة الـ Virtual Machine ونشوف نقطة أو Concept مهم جداً في موضوع الـ Virtual Machines ده."
      },
      {
        "timestamps": {
          "from": "00:05:50,700",
          "to": "00:05:54,700"
        },
        "offsets": {
          "from": 350700,
          "to": 354700
        },
        "text": "آجي مثلاً أعمل New Page After."
      },
      {
        "timestamps": {
          "from": "00:05:54,700",
          "to": "00:05:57,700"
        },
        "offsets": {
          "from": 354700,
          "to": 357700
        },
        "text": "الـ Virtual Machine لو تفتكروا إحنا اتكلمنا عن موضوع الـ Template."
      },
      {
        "timestamps": {
          "from": "00:05:57,700",
          "to": "00:05:58,700"
        },
        "offsets": {
          "from": 357700,
          "to": 358700
        },
        "text": "لو تفتكروا يعني."
      },
      {
        "timestamps": {
          "from": "00:05:58,700",
          "to": "00:06:05,700"
        },
        "offsets": {
          "from": 358700,
          "to": 365700
        },
        "text": "واللي اشتغل بالـ Virtual Machines كتير جداً هيكون عارف فكرة الـ Base Disks."
      },
      {
        "timestamps": {
          "from": "00:06:05,700",
          "to": "00:06:06,700"
        },
        "offsets": {
          "from": 365700,
          "to": 366700
        },
        "text": "أنا بكتب Disks."
      },
      {
        "timestamps": {
          "from": "00:06:06,700",
          "to": "00:06:07,700"
        },
        "offsets": {
          "from": 366700,
          "to": 367700
        },
        "text": "Base Disks."
      },
      {
        "timestamps": {
          "from": "00:06:07,700",
          "to": "00:06:08,700"
        },
        "offsets": {
          "from": 367700,
          "to": 368700
        },
        "text": "Okay."
      },
      {
        "timestamps": {
          "from": "00:06:08,700",
          "to": "00:06:10,700"
        },
        "offsets": {
          "from": 368700,
          "to": 370700
        },
        "text": "إيه فكرة الـ Base Disks دي؟"
      },
      {
        "timestamps": {
          "from": "00:06:10,700",
          "to": "00:06:11,700"
        },
        "offsets": {
          "from": 370700,
          "to": 371700
        },
        "text": "إن أنا كان عندي مثلاً VM A."
      },
      {
        "timestamps": {
          "from": "00:06:11,700",
          "to": "00:06:17,700"
        },
        "offsets": {
          "from": 371700,
          "to": 377700
        },
        "text": "الـ VM A دي مثلاً هتبقى الـ Template بتاعة الـ Web VMs اللي هتبقى موجودة عندي في الـ Solution."
      },
      {
        "timestamps": {
          "from": "00:06:17,700",
          "to": "00:06:18,700"
        },
        "offsets": {
          "from": 377700,
          "to": 378700
        },
        "text": "ماشي."
      },
      {
        "timestamps": {
          "from": "00:06:18,700",
          "to": "00:06:21,700"
        },
        "offsets": {
          "from": 378700,
          "to": 381700
        },
        "text": "دي هتبقى الـ Web Template."
      },
      {
        "timestamps": {
          "from": "00:06:21,700",
          "to": "00:06:22,700"
        },
        "offsets": {
          "from": 381700,
          "to": 382700
        },
        "text": "Okay."
      },
      {
        "timestamps": {
          "from": "00:06:22,700",
          "to": "00:06:23,700"
        },
        "offsets": {
          "from": 382700,
          "to": 383700
        },
        "text": "هعمل إيه بقى؟"
      },
      {
        "timestamps": {
          "from": "00:06:23,700",
          "to": "00:06:25,700"
        },
        "offsets": {
          "from": 383700,
          "to": 385700
        },
        "text": "هقوم جاي على الـ VM A دي."
      },
      {
        "timestamps": {
          "from": "00:06:25,700",
          "to": "00:06:26,700"
        },
        "offsets": {
          "from": 385700,
          "to": 386700
        },
        "text": "منزل الـ Operating System بتاعي."
      },
      {
        "timestamps": {
          "from": "00:06:26,700",
          "to": "00:06:27,700"
        },
        "offsets": {
          "from": 386700,
          "to": 387700
        },
        "text": "كله بقى Full."
      },
      {
        "timestamps": {
          "from": "00:06:27,700",
          "to": "00:06:28,700"
        },
        "offsets": {
          "from": 387700,
          "to": 388700
        },
        "text": "Full Operating System بتاعي."
      },
      {
        "timestamps": {
          "from": "00:06:28,700",
          "to": "00:06:29,700"
        },
        "offsets": {
          "from": 388700,
          "to": 389700
        },
        "text": "منزل الـ Dependencies."
      },
      {
        "timestamps": {
          "from": "00:06:29,700",
          "to": "00:06:31,700"
        },
        "offsets": {
          "from": 389700,
          "to": 391700
        },
        "text": "عامل شوية Settings و Configuration."
      },
      {
        "timestamps": {
          "from": "00:06:31,700",
          "to": "00:06:32,700"
        },
        "offsets": {
          "from": 391700,
          "to": 392700
        },
        "text": "منزل الـ Requirements."
      },
      {
        "timestamps": {
          "from": "00:06:32,700",
          "to": "00:06:37,700"
        },
        "offsets": {
          "from": 392700,
          "to": 397700
        },
        "text": "وبعد كده في الآخر منزل الـ Web Application بتاعتي."
      },
      {
        "timestamps": {
          "from": "00:06:37,700",
          "to": "00:06:38,700"
        },
        "offsets": {
          "from": 397700,
          "to": 398700
        },
        "text": "وبس كده."
      },
      {
        "timestamps": {
          "from": "00:06:38,700",
          "to": "00:06:40,700"
        },
        "offsets": {
          "from": 398700,
          "to": 400700
        },
        "text": "دي هتبقى الـ Template."
      },
      {
        "timestamps": {
          "from": "00:06:40,700",
          "to": "00:06:43,700"
        },
        "offsets": {
          "from": 400700,
          "to": 403700
        },
        "text": "الـ Virtual Machines دي ليها Virtual Hard Disk."
      },
      {
        "timestamps": {
          "from": "00:06:43,700",
          "to": "00:06:50,700"
        },
        "offsets": {
          "from": 403700,
          "to": 410700
        },
        "text": "الـ Virtual Hard Disk ده لو أنت مثلاً شغال على Hyper-V هيبقى VHD."
      },
      {
        "timestamps": {
          "from": "00:06:50,700",
          "to": "00:06:53,700"
        },
        "offsets": {
          "from": 410700,
          "to": 413700
        },
        "text": "الفايل بيبقى VHD. مثلاً."
      },
      {
        "timestamps": {
          "from": "00:06:53,700",
          "to": "00:06:54,700"
        },
        "offsets": {
          "from": 413700,
          "to": 414700
        },
        "text": "Okay."
      },
      {
        "timestamps": {
          "from": "00:06:54,700",
          "to": "00:06:56,700"
        },
        "offsets": {
          "from": 414700,
          "to": 416700
        },
        "text": "الـ VHD file ده بعد ما بتخلص الـ Virtual Machine."
      },
      {
        "timestamps": {
          "from": "00:06:56,700",
          "to": "00:06:58,700"
        },
        "offsets": {
          "from": 416700,
          "to": 418700
        },
        "text": "وتبقى هي دي الـ Template، تمام؟"
      },
      {
        "timestamps": {
          "from": "00:06:58,700",
          "to": "00:07:05,700"
        },
        "offsets": {
          "from": 418700,
          "to": 425700
        },
        "text": "ده بيبقى الـ Virtual Disk اللي بيسموه الـ Base Disk."
      },
      {
        "timestamps": {
          "from": "00:07:05,700",
          "to": "00:07:09,700"
        },
        "offsets": {
          "from": 425700,
          "to": 429700
        },
        "text": "وفي مقولة أخرى بيسموه برضه الـ Base Image."
      },
      {
        "timestamps": {
          "from": "00:07:09,700",
          "to": "00:07:11,700"
        },
        "offsets": {
          "from": 429700,
          "to": 431700
        },
        "text": "دي نقطة مهمة برضه عشان الـ Concept ده."
      },
      {
        "timestamps": {
          "from": "00:07:11,700",
          "to": "00:07:12,700"
        },
        "offsets": {
          "from": 431700,
          "to": 432700
        },
        "text": "هتلاقيه متكرر معانا."
      },
      {
        "timestamps": {
          "from": "00:07:12,700",
          "to": "00:07:14,700"
        },
        "offsets": {
          "from": 432700,
          "to": 434700
        },
        "text": "Base Image."
      },
      {
        "timestamps": {
          "from": "00:07:14,700",
          "to": "00:07:19,700"
        },
        "offsets": {
          "from": 434700,
          "to": 439700
        },
        "text": "لما تحب تعمل مثلاً من الـ Template دي."
      },
      {
        "timestamps": {
          "from": "00:07:19,700",
          "to": "00:07:23,700"
        },
        "offsets": {
          "from": 439700,
          "to": 443700
        },
        "text": "تعمل منها مثلاً 30 أو 40 VMs علشان هيبقوا موجودين في الـ Cluster بتاعك."
      },
      {
        "timestamps": {
          "from": "00:07:23,700",
          "to": "00:07:25,700"
        },
        "offsets": {
          "from": 443700,
          "to": 445700
        },
        "text": "الـ Load Balancing Cluster بتاعك الخاص بالـ Web."
      },
      {
        "timestamps": {
          "from": "00:07:25,700",
          "to": "00:07:26,700"
        },
        "offsets": {
          "from": 445700,
          "to": 446700
        },
        "text": "مثلاً يعني."
      },
      {
        "timestamps": {
          "from": "00:07:26,700",
          "to": "00:07:29,700"
        },
        "offsets": {
          "from": 446700,
          "to": 449700
        },
        "text": "هتعمل من الـ VM دي عشرات الـ VMs التانية."
      },
      {
        "timestamps": {
          "from": "00:07:29,700",
          "to": "00:07:31,700"
        },
        "offsets": {
          "from": 449700,
          "to": 451700
        },
        "text": "اللي بيحصل إيه؟"
      },
      {
        "timestamps": {
          "from": "00:07:31,700",
          "to": "00:07:32,700"
        },
        "offsets": {
          "from": 451700,
          "to": 452700
        },
        "text": "عندك طريقين."
      },
      {
        "timestamps": {
          "from": "00:07:32,700",
          "to": "00:07:33,700"
        },
        "offsets": {
          "from": 452700,
          "to": 453700
        },
        "text": "عندك إنك تاخد Copy منها."
      },
      {
        "timestamps": {
          "from": "00:07:33,700",
          "to": "00:07:37,700"
        },
        "offsets": {
          "from": 453700,
          "to": 457700
        },
        "text": "تاخد Copy كامل مثلاً من الـ Virtual Disk ده."
      },
      {
        "timestamps": {
          "from": "00:07:37,700",
          "to": "00:07:40,700"
        },
        "offsets": {
          "from": 457700,
          "to": 460700
        },
        "text": "Copy كامل من الـ VHD ده."
      },
      {
        "timestamps": {
          "from": "00:07:40,700",
          "to": "00:07:42,700"
        },
        "offsets": {
          "from": 460700,
          "to": 462700
        },
        "text": "وتشغل الـ VMs دي."
      },
      {
        "timestamps": {
          "from": "00:07:42,700",
          "to": "00:07:43,700"
        },
        "offsets": {
          "from": 462700,
          "to": 463700
        },
        "text": "وتاخد Copy منه تاني."
      },
      {
        "timestamps": {
          "from": "00:07:43,700",
          "to": "00:07:46,700"
        },
        "offsets": {
          "from": 463700,
          "to": 466700
        },
        "text": "وثالث ورابع وخامس وعشرة وعشرين ومية وميتين وتلتمية."
      },
      {
        "timestamps": {
          "from": "00:07:46,700",
          "to": "00:07:48,700"
        },
        "offsets": {
          "from": 466700,
          "to": 468700
        },
        "text": "تقدر تعمل الكلام ده."
      },
      {
        "timestamps": {
          "from": "00:07:48,700",
          "to": "00:07:49,700"
        },
        "offsets": {
          "from": 468700,
          "to": 469700
        },
        "text": "تقدر تعمل ده."
      },
      {
        "timestamps": {
          "from": "00:07:49,700",
          "to": "00:07:50,700"
        },
        "offsets": {
          "from": 469700,
          "to": 470700
        },
        "text": "بس مش ده الصح."
      },
      {
        "timestamps": {
          "from": "00:07:50,700",
          "to": "00:07:51,700"
        },
        "offsets": {
          "from": 470700,
          "to": 471700
        },
        "text": "ليه بقى؟"
      },
      {
        "timestamps": {
          "from": "00:07:51,700",
          "to": "00:07:52,700"
        },
        "offsets": {
          "from": 471700,
          "to": 472700
        },
        "text": "لأسباب كتير."
      },
      {
        "timestamps": {
          "from": "00:07:52,700",
          "to": "00:07:54,700"
        },
        "offsets": {
          "from": 472700,
          "to": 474700
        },
        "text": "غير موضوع الـ Disk Space."
      },
      {
        "timestamps": {
          "from": "00:07:54,700",
          "to": "00:07:56,700"
        },
        "offsets": {
          "from": 474700,
          "to": 476700
        },
        "text": "مش دي الطريقة الـ Efficient."
      },
      {
        "timestamps": {
          "from": "00:07:56,700",
          "to": "00:07:58,700"
        },
        "offsets": {
          "from": 476700,
          "to": 478700
        },
        "text": "أما الطريقة الـ Efficient إيه؟"
      },
      {
        "timestamps": {
          "from": "00:07:58,700",
          "to": "00:08:02,700"
        },
        "offsets": {
          "from": 478700,
          "to": 482700
        },
        "text": "الطريقة الـ Efficient إنك تعتمد على الـ Virtual Disk ده."
      },
      {
        "timestamps": {
          "from": "00:08:02,700",
          "to": "00:08:04,700"
        },
        "offsets": {
          "from": 482700,
          "to": 484700
        },
        "text": "اللي هو الـ Base Image دي."
      },
      {
        "timestamps": {
          "from": "00:08:04,700",
          "to": "00:08:05,700"
        },
        "offsets": {
          "from": 484700,
          "to": 485700
        },
        "text": "تعتمد عليه كـ Template."
      },
      {
        "timestamps": {
          "from": "00:08:05,700",
          "to": "00:08:07,700"
        },
        "offsets": {
          "from": 485700,
          "to": 487700
        },
        "text": "وتيجي تعمل هنا Virtual Disk تاني."
      },
      {
        "timestamps": {
          "from": "00:08:07,700",
          "to": "00:08:09,700"
        },
        "offsets": {
          "from": 487700,
          "to": 489700
        },
        "text": "نوع تاني من الـ Virtual Disk."
      },
      {
        "timestamps": {
          "from": "00:08:09,700",
          "to": "00:08:11,700"
        },
        "offsets": {
          "from": 489700,
          "to": 491700
        },
        "text": "بيسموه الـ Differencing Virtual Disk."
      },
      {
        "timestamps": {
          "from": "00:08:11,700",
          "to": "00:08:13,700"
        },
        "offsets": {
          "from": 491700,
          "to": 493700
        },
        "text": "أو الـ Differencing Virtual Disk."
      },
      {
        "timestamps": {
          "from": "00:08:13,700",
          "to": "00:08:17,700"
        },
        "offsets": {
          "from": 493700,
          "to": 497700
        },
        "text": "اللي هو مثلاً الـ AVHD في الـ Hyper-V مثلاً."
      },
      {
        "timestamps": {
          "from": "00:08:17,700",
          "to": "00:08:20,700"
        },
        "offsets": {
          "from": 497700,
          "to": 500700
        },
        "text": "الـ Differencing Virtual Disk ده زي ما هو باين من الاسم."
      },
      {
        "timestamps": {
          "from": "00:08:20,700",
          "to": "00:08:50,100"
        },
        "offsets": {
          "from": 500700,
          "to": 530100
        },
        "text": "إيه اللي فيه؟ هو فيه بس شوية الحاجات اللي اختلفت عن هنا. أنت بعد ما عملت من الـ Template دي، غيرت فيها شوية حاجات وغيرت اسم الماشين وغيرت الـ configuration بتاعتها، شوية اختلافات عن الـ Base Image دي. الاختلافات دي بس هي اللي هتبقى موجودة. فلو كان السايز بتاعه مثلاً 100 جيجا، ده هتلاقي السايز بتاعه 1 جيجا مثلاً."
      },
      {
        "timestamps": {
          "from": "00:08:50,700",
          "to": "00:09:18,400"
        },
        "offsets": {
          "from": 530700,
          "to": 558400
        },
        "text": "مش أكتر من كده، 1 جيجا أو 2 جيجا أو 3 جيجا، اللي هو الفروقات عن ده. ويبقى الـ Base Image ده بتاع الديسك ده، يبقى الديسك الأصلي بتاعها هو مجموع الديسكين. ونفس الكلام لو جيت بعد كده حبيت تعمل واحدة تانية مثلاً وأخدت Snapshot من دي."
      },
      {
        "timestamps": {
          "from": "00:09:18,400",
          "to": "00:09:46,120"
        },
        "offsets": {
          "from": 558400,
          "to": 586120
        },
        "text": "أوكي، وكملت عليها. لما بتاخد Snapshot بتعمل Link تاني عن ده. ليه بتعمل الديسك ده؟ علشان لو جيت في المستقبل مثلاً وحبيت ترجع للـ State القديمة بعد ما لعبت في الـ configuration وخربت الدنيا، ترجع للـ State القديمة إزاي؟ تعمل Delete..."
      },
      {
        "timestamps": {
          "from": "00:09:48,400",
          "to": "00:10:00,540"
        },
        "offsets": {
          "from": 588400,
          "to": 600540
        },
        "text": "للـ Virtual Disk ده. تمام؟ هترجع لك الـ VM زي ما كانت. يبقى تلاحظ هنا إن الـ Concept ده شغال إزاي؟ شغال إن أنا عندي هنا Base Image."
      },
      {
        "timestamps": {
          "from": "00:10:00,540",
          "to": "00:10:11,660"
        },
        "offsets": {
          "from": 600540,
          "to": 611660
        },
        "text": "أوكي؟ وبعد كده في Differencing Disk، وبعد كده Differencing Disk تاني وتالت، وهكذا بقى على حسب عدد الـ Snapshots اللي أنت..."
      },
      {
        "timestamps": {
          "from": "00:10:11,660",
          "to": "00:10:21,360"
        },
        "offsets": {
          "from": 611660,
          "to": 621360
        },
        "text": "واخدها. كل Differencing Disk بيعتمد على اللي قبله. ده الـ Parent بتاع ده، وده الـ Parent بتاع ده وهكذا. تمام؟ دي الطريقة..."
      },
      {
        "timestamps": {
          "from": "00:10:21,360",
          "to": "00:10:31,240"
        },
        "offsets": {
          "from": 621360,
          "to": 631240
        },
        "text": "اللي بتشتغل بيها. في طريقة مشابهة ليها جداً في الـ Containers. أوريك بقى الفكرة إيه؟ مش أنت عاوز..."
      },
      {
        "timestamps": {
          "from": "00:10:31,240",
          "to": "00:10:41,180"
        },
        "offsets": {
          "from": 631240,
          "to": 641180
        },
        "text": "تعمل الـ Container؟ لو افترضنا مثلاً دي الـ Machine بتاعتك، Virtual ولا Physical، تمام؟ وأنت قلت إن كل اللي محتاجه الـ Kernel بس بتاع الـ Operating System."
      },
      {
        "timestamps": {
          "from": "00:10:41,660",
          "to": "00:10:48,840"
        },
        "offsets": {
          "from": 641660,
          "to": 648840
        },
        "text": "الـ Kernel بتاع الـ Windows دايماً واحد، والـ Kernel بتاع الـ Linux دايماً واحد. تمام؟ هنتكلم تاني على الحتة دي. عاوز تيجي..."
      },
      {
        "timestamps": {
          "from": "00:10:48,840",
          "to": "00:10:54,840"
        },
        "offsets": {
          "from": 648840,
          "to": 654840
        },
        "text": "تعمل Container. طبعاً الـ Application دي في الأول وفي الآخر ما زالت هتحتاج Operating System، وممكن كمان تحتاج حاجات من..."
      },
      {
        "timestamps": {
          "from": "00:10:54,840",
          "to": "00:11:01,960"
        },
        "offsets": {
          "from": 654840,
          "to": 661960
        },
        "text": "الـ Operating System الأصلي، يعني هتحتاج حاجات من الـ Operating System وممكن ما تحتاجش على حسب هي محتاجة إيه بس."
      },
      {
        "timestamps": {
          "from": "00:11:01,960",
          "to": "00:11:12,540"
        },
        "offsets": {
          "from": 661960,
          "to": 672540
        },
        "text": "اللي بالتأكيد مش محتاجة كل حاجة في الـ Operating System، فتقدر تعمل إيه بقى؟ تقدر تيجي من الـ Kernel ده وتقوم عامل Container، تمام؟"
      },
      {
        "timestamps": {
          "from": "00:11:12,540",
          "to": "00:11:20,960"
        },
        "offsets": {
          "from": 672540,
          "to": 680960
        },
        "text": "اعتبرنا ده Container، الـ Container ده يكمل على الـ Kernel. يكمل إزاي؟ خلينا ناخد الـ Container ده من برة، اعتبرنا هو ده"
      },
      {
        "timestamps": {
          "from": "00:11:20,960",
          "to": "00:11:31,100"
        },
        "offsets": {
          "from": 680960,
          "to": 691100
        },
        "text": "الـ Container. Okay؟ ده الـ Container، يكمل على الـ Kernel. يبدأ بالـ Kernel اللي موجود أصلاً على الـ Physical Machine، أو"
      },
      {
        "timestamps": {
          "from": "00:11:31,100",
          "to": "00:11:42,260"
        },
        "offsets": {
          "from": 691100,
          "to": 702260
        },
        "text": "على الـ Physical Machine اللي إنت حاطط عليها الـ Container. يزود شوية على الـ Kernel يحط بقية الـ Libraries المطلوبة، شوية الحتة المطلوبة"
      },
      {
        "timestamps": {
          "from": "00:11:42,260",
          "to": "00:11:53,240"
        },
        "offsets": {
          "from": 702260,
          "to": 713240
        },
        "text": "مثلاً في حتة صغنونة كده، وشوية مثلاً إلى آخره. وبعدين بعد ما"
      },
      {
        "timestamps": {
          "from": "00:11:53,240",
          "to": "00:12:00,240"
        },
        "offsets": {
          "from": 713240,
          "to": 720240
        },
        "text": "يحتاج ينزل الحاجات المطلوبة بس، يقوم كمان عامل Layer تانية للـ Requirements"
      },
      {
        "timestamps": {
          "from": "00:12:00,240",
          "to": "00:12:07,800"
        },
        "offsets": {
          "from": 720240,
          "to": 727800
        },
        "text": "اللي إنت محتاجها فوق. عامل هنا Layer مثلاً للـ Requirements، و Layer تانية Requirements"
      },
      {
        "timestamps": {
          "from": "00:12:07,800",
          "to": "00:12:15,180"
        },
        "offsets": {
          "from": 727800,
          "to": 735180
        },
        "text": "مثلاً، Layer تالتة بقى هي الـ Application بتاعتك. فتلاقي لما تنزل الـ Container ده"
      },
      {
        "timestamps": {
          "from": "00:12:15,180",
          "to": "00:12:22,300"
        },
        "offsets": {
          "from": 735180,
          "to": 742300
        },
        "text": "كده، لما تيجي تنزله على الـ Machine دي، كأن الـ Container ده بدأ بالـ Kernel"
      },
      {
        "timestamps": {
          "from": "00:12:22,300",
          "to": "00:12:29,380"
        },
        "offsets": {
          "from": 742300,
          "to": 749380
        },
        "text": "وراح مكمل الحتة بس اللي هو محتاجها بعد الـ Kernel لغاية ما يوصل للـ Application. فبقى"
      },
      {
        "timestamps": {
          "from": "00:12:29,380",
          "to": "00:12:36,140"
        },
        "offsets": {
          "from": 749380,
          "to": 756140
        },
        "text": "كأنه زي اللي إحنا اتكلمنا عليها دي بس متشال منها كل"
      },
      {
        "timestamps": {
          "from": "00:12:36,140",
          "to": "00:12:41,800"
        },
        "offsets": {
          "from": 756140,
          "to": 761800
        },
        "text": "الحاجات اللي في الـ Application اللي إحنا مش محتاجينها. وده ما كنتش"
      },
      {
        "timestamps": {
          "from": "00:12:41,800",
          "to": "00:12:46,660"
        },
        "offsets": {
          "from": 761800,
          "to": 766660
        },
        "text": "تقدر تعمله بالـ Application العادي. نفس الوضع برضه هجيب مثلاً Container"
      },
      {
        "timestamps": {
          "from": "00:12:46,660",
          "to": "00:12:53,780"
        },
        "offsets": {
          "from": 766660,
          "to": 773780
        },
        "text": "تاني، هيكمل برضه على الـ Kernel ده بـ Layer تانية، بـ Requirements تانية"
      },
      {
        "timestamps": {
          "from": "00:12:53,780",
          "to": "00:12:59,380"
        },
        "offsets": {
          "from": 773780,
          "to": 779380
        },
        "text": "بـ Application تانية وهكذا. لاحظ نقطة بقى مهمة هنا، إحنا كنا"
      },
      {
        "timestamps": {
          "from": "00:12:59,380",
          "to": "00:13:05,560"
        },
        "offsets": {
          "from": 779380,
          "to": 785560
        },
        "text": "بدأنا الكلام فيها، اللي هي فكرة إنه لو أنا عندي مثلاً Linux"
      },
      {
        "timestamps": {
          "from": "00:13:05,560",
          "to": "00:13:12,220"
        },
        "offsets": {
          "from": 785560,
          "to": 792220
        },
        "text": "Linux Kernel مثلاً، الـ Linux Kernel في كل حاجة Linux في الدنيا"
      },
      {
        "timestamps": {
          "from": "00:13:12,220",
          "to": "00:13:16,720"
        },
        "offsets": {
          "from": 792220,
          "to": 796720
        },
        "text": "هو واحد. ممكن الـ Versions بتاعتها تختلف مفيش مشاكل يعني"
      },
      {
        "timestamps": {
          "from": "00:13:16,720",
          "to": "00:13:21,400"
        },
        "offsets": {
          "from": 796720,
          "to": 801400
        },
        "text": "بس هو واحد، هو الـ Kernel واحد. فالجزء اللي هو بتاع الـ Kernel ده"
      },
      {
        "timestamps": {
          "from": "00:13:21,400",
          "to": "00:13:28,520"
        },
        "offsets": {
          "from": 801400,
          "to": 808520
        },
        "text": "ده دايماً واحد. اللي بيخلي الـ Linux يبقى Fedora أو يبقى"
      },
      {
        "timestamps": {
          "from": "00:13:28,520",
          "to": "00:13:33,020"
        },
        "offsets": {
          "from": 808520,
          "to": 813020
        },
        "text": "Ubuntu أو SUSE مثلاً أو CentOS أو Linux Mint أو Kali Linux أو"
      },
      {
        "timestamps": {
          "from": "00:13:33,020",
          "to": "00:13:36,620"
        },
        "offsets": {
          "from": 813020,
          "to": 816620
        },
        "text": "آلاف الـ Distributions اللي إنت بتشوفها دي هي الحتة بتاعت الـ User"
      },
      {
        "timestamps": {
          "from": "00:13:36,620",
          "to": "00:13:42,380"
        },
        "offsets": {
          "from": 816620,
          "to": 822380
        },
        "text": "Mode. هي الحتة بتاعت الـ OS Specifications. هات Linux Kernel"
      },
      {
        "timestamps": {
          "from": "00:13:42,380",
          "to": "00:13:46,880"
        },
        "offsets": {
          "from": 822380,
          "to": 826880
        },
        "text": "زود عليه شوية Specifications بقى Red Hat. هات Linux Kernel زود"
      },
      {
        "timestamps": {
          "from": "00:13:46,880",
          "to": "00:13:54,500"
        },
        "offsets": {
          "from": 826880,
          "to": 834500
        },
        "text": "عليه شوية Specifications بقى Ubuntu. دي بقى الفكرة. ده اللي"
      },
      {
        "timestamps": {
          "from": "00:13:54,500",
          "to": "00:13:58,380"
        },
        "offsets": {
          "from": 834500,
          "to": 838380
        },
        "text": "إحنا عايزين نعمله بالـ Container، إن أنا يبدأ لي بالـ Kernel اللي هو"
      },
      {
        "timestamps": {
          "from": "00:13:58,520",
          "to": "00:14:02,540"
        },
        "offsets": {
          "from": 838520,
          "to": 842540
        },
        "text": "ثابت في كل الـ Operating System، في كل حاجة اسمها Linux هو ثابت."
      },
      {
        "timestamps": {
          "from": "00:14:02,540",
          "to": "00:14:07,520"
        },
        "offsets": {
          "from": 842540,
          "to": 847520
        },
        "text": "الـ Kernel في كل الـ Windows هو ثابت، وزود عليه بس اللي إنت محتاجه."
      },
      {
        "timestamps": {
          "from": "00:14:07,520",
          "to": "00:14:13,040"
        },
        "offsets": {
          "from": 847520,
          "to": 853040
        },
        "text": "في الـ User Mode أو في الـ OS Specifications. وبعد كده"
      },
      {
        "timestamps": {
          "from": "00:14:13,040",
          "to": "00:14:20,060"
        },
        "offsets": {
          "from": 853040,
          "to": 860060
        },
        "text": "اعمل الـ Application بتاعتك. دي الفكرة الرئيسية والمهمة والأهم على الإطلاق"
      },
      {
        "timestamps": {
          "from": "00:14:20,060",
          "to": "00:14:22,520"
        },
        "offsets": {
          "from": 860060,
          "to": 862520
        },
        "text": "بتاعت الـ Containers اللي حلت الإشكاليات اللي إحنا كنا"
      },
      {
        "timestamps": {
          "from": "00:14:22,520",
          "to": "00:14:27,200"
        },
        "offsets": {
          "from": 862520,
          "to": 867200
        },
        "text": "بنتكلم عليها دي. بقى أصبح عندك الـ Container ده فيه الـ Application بتاعتك وفيه"
      },
      {
        "timestamps": {
          "from": "00:14:27,200",
          "to": "00:14:28,280"
        },
        "offsets": {
          "from": 867200,
          "to": 868280
        },
        "text": "الجزء المطلوب بس."
      },
      {
        "timestamps": {
          "from": "00:14:28,280",
          "to": "00:14:30,680"
        },
        "offsets": {
          "from": 868280,
          "to": 870680
        },
        "text": "من الـ Operating System من الـ User Mode بتاع الـ Operating System"
      },
      {
        "timestamps": {
          "from": "00:14:30,680",
          "to": "00:14:33,920"
        },
        "offsets": {
          "from": 870680,
          "to": 873920
        },
        "text": "علشان الـ Application تشتغل. مش محتاج تدفع License."
      },
      {
        "timestamps": {
          "from": "00:14:33,920",
          "to": "00:14:38,180"
        },
        "offsets": {
          "from": 873920,
          "to": 878180
        },
        "text": "مش محتاج إنك تخلي بالك من الـ Backups وكل حاجة موجودة"
      },
      {
        "timestamps": {
          "from": "00:14:38,180",
          "to": "00:14:44,600"
        },
        "offsets": {
          "from": 878180,
          "to": 884600
        },
        "text": "في الـ Kernel الأصلي، كل حاجة في الـ Kernel الأصلي بتاع الـ Machine"
      },
      {
        "timestamps": {
          "from": "00:14:44,600",
          "to": "00:14:47,240"
        },
        "offsets": {
          "from": 884600,
          "to": 887240
        },
        "text": "الأصلية اللي نازل عليها الـ Container، سواء كانت VM أو سواء كانت"
      },
      {
        "timestamps": {
          "from": "00:14:47,240",
          "to": "00:14:49,740"
        },
        "offsets": {
          "from": 887240,
          "to": 889740
        },
        "text": "Physical Machine."
      },
      {
        "timestamps": {
          "from": "00:14:49,740",
          "to": "00:14:58,040"
        },
        "offsets": {
          "from": 889740,
          "to": 898040
        },
        "text": "طيب الفكرة دي بقى زي الـ..."
      },
      {
        "timestamps": {
          "from": "00:14:58,040",
          "to": "00:15:02,420"
        },
        "offsets": {
          "from": 898040,
          "to": 902420
        },
        "text": "في الـ Virtual Machine اللي هي الـ Base Disk والـ Differencing Disk ومش"
      },
      {
        "timestamps": {
          "from": "00:14:02,420",
          "to": "00:15:05,720"
        },
        "offsets": {
          "from": 902420,
          "to": 905720
        },
        "text": "عارفين إيه وبتاع. قصادها معمولة إزاي في الـ Containers؟ قصادها معمولة"
      },
      {
        "timestamps": {
          "from": "00:15:05,720",
          "to": "00:15:10,520"
        },
        "offsets": {
          "from": 905720,
          "to": 910520
        },
        "text": "في الـ Containers عن طريق الـ Layers. يعني إيه الـ Layers؟ يعني لو بدأت"
      },
      {
        "timestamps": {
          "from": "00:15:10,520",
          "to": "00:15:16,640"
        },
        "offsets": {
          "from": 910520,
          "to": 916640
        },
        "text": "مثلاً بـ Container فاضي خالص، بدأ من Linux Kernel مثلاً."
      },
      {
        "timestamps": {
          "from": "00:15:16,640",
          "to": "00:15:23,720"
        },
        "offsets": {
          "from": 916640,
          "to": 923720
        },
        "text": "وجيت نزلت فيه شوية حاجات مثلاً Fedora. أوكي؟ بقى عندي"
      },
      {
        "timestamps": {
          "from": "00:15:23,720",
          "to": "00:15:34,700"
        },
        "offsets": {
          "from": 923720,
          "to": 934700
        },
        "text": "الـ Fedora. أوكي؟ نزلت دي، أول Layer دي نزلناها، حتى قلت"
      },
      {
        "timestamps": {
          "from": "00:15:34,700",
          "to": "00:15:39,920"
        },
        "offsets": {
          "from": 934700,
          "to": 939920
        },
        "text": "Layer كده بالغلط. أول حاجة نزلناها في الـ Container ده فوق"
      },
      {
        "timestamps": {
          "from": "00:15:39,920",
          "to": "00:15:46,760"
        },
        "offsets": {
          "from": 939920,
          "to": 946760
        },
        "text": "الـ Kernel دي اسمها Layer. ده كده اسمه Layer. ممكن توقف لغاية كده."
      },
      {
        "timestamps": {
          "from": "00:15:46,760",
          "to": "00:15:53,480"
        },
        "offsets": {
          "from": 946760,
          "to": 953480
        },
        "text": "ويبقى الـ Container ده هو بس Container Fedora مثلاً بينزل على Kernel."
      },
      {
        "timestamps": {
          "from": "00:15:53,480",
          "to": "00:15:56,840"
        },
        "offsets": {
          "from": 953480,
          "to": 956840
        },
        "text": "يبقى أنت عندك مثلاً Ubuntu Machine، عندك Red Hat Machine، عندك"
      },
      {
        "timestamps": {
          "from": "00:15:56,840",
          "to": "00:16:00,920"
        },
        "offsets": {
          "from": 956840,
          "to": 960920
        },
        "text": "CentOS Machine، عندك SUSE Machine، ومنزل عليها Container في"
      },
      {
        "timestamps": {
          "from": "00:16:00,920",
          "to": "00:16:05,180"
        },
        "offsets": {
          "from": 960920,
          "to": 965180
        },
        "text": "دورة. الـ Container ده خد الـ Kernel بتاعك، أهي أنت الماشين بتاعتك"
      },
      {
        "timestamps": {
          "from": "00:16:05,180",
          "to": "00:16:10,520"
        },
        "offsets": {
          "from": 965180,
          "to": 970520
        },
        "text": "إيه؟ خد الـ Kernel بتاعك وزود عليه، بقى عندي Container Fedora. أوكي؟"
      },
      {
        "timestamps": {
          "from": "00:16:10,520",
          "to": "00:16:16,280"
        },
        "offsets": {
          "from": 970520,
          "to": 976280
        },
        "text": "وممكن أزود عليها حاجات تانية، هنزل مثلاً Python، هنزل مثلاً شوية"
      },
      {
        "timestamps": {
          "from": "00:16:16,280",
          "to": "00:16:25,460"
        },
        "offsets": {
          "from": 976280,
          "to": 985460
        },
        "text": "Packages بتاعة Python مثلاً، هنزل جواها أي حاجة بقى. أوكي؟"
      },
      {
        "timestamps": {
          "from": "00:16:25,460",
          "to": "00:16:30,920"
        },
        "offsets": {
          "from": 985460,
          "to": 990920
        },
        "text": "أي حاجة تانية هتنزلها تاني هنا، بتعدل في الـ Container ده بتعمل"
      },
      {
        "timestamps": {
          "from": "00:16:30,920",
          "to": "00:16:38,540"
        },
        "offsets": {
          "from": 990920,
          "to": 998540
        },
        "text": "Layer تانية. ممكن بعد ما عملت التعديل ده رحت عملت تعديل تاني في الفايلات"
      },
      {
        "timestamps": {
          "from": "00:16:38,540",
          "to": "00:16:46,080"
        },
        "offsets": {
          "from": 998540,
          "to": 1006080
        },
        "text": "الأولانية، نزلت مثلاً دي خلاص بعد ما نزلتها."
      },
      {
        "timestamps": {
          "from": "00:16:46,080",
          "to": "00:16:52,080"
        },
        "offsets": {
          "from": 1006080,
          "to": 1012080
        },
        "text": "جيت عملت تغيير في الـ Python files والـ Configuration files. ده"
      },
      {
        "timestamps": {
          "from": "00:16:52,080",
          "to": "00:17:01,620"
        },
        "offsets": {
          "from": 1012080,
          "to": 1021620
        },
        "text": "تعديل تاني، بقت Layer تانية. كل واحدة من دول ممكن تعتبرهم Layers."
      },
      {
        "timestamps": {
          "from": "00:17:01,620",
          "to": "00:17:06,660"
        },
        "offsets": {
          "from": 1021620,
          "to": 1026660
        },
        "text": "هم في الحقيقة عبارة عن Changes في الـ Files، فايلات اتضافت، فايلات اتمسحت، فايلات"
      },
      {
        "timestamps": {
          "from": "00:17:06,660",
          "to": "00:17:14,820"
        },
        "offsets": {
          "from": 1026660,
          "to": 1034820
        },
        "text": "اتعدلت وهكذا. فممكن كل واحدة من دول تعتبرها Layer. اعتبر دي اللي هي"
      },
      {
        "timestamps": {
          "from": "00:17:14,820",
          "to": "00:17:15,880"
        },
        "offsets": {
          "from": 1034820,
          "to": 1035880
        },
        "text": "الـ Base."
      },
      {
        "timestamps": {
          "from": "00:17:15,880",
          "to": "00:17:24,040"
        },
        "offsets": {
          "from": 1035880,
          "to": 1044040
        },
        "text": "اعتبره كده. وكل واحدة من دول هي الصورة النهائية. النتيجة"
      },
      {
        "timestamps": {
          "from": "00:17:24,040",
          "to": "00:17:28,900"
        },
        "offsets": {
          "from": 1044040,
          "to": 1048900
        },
        "text": "النهائية بتاعة الـ Container هي مجموع الـ Layers دي كلها لغاية ما"
      },
      {
        "timestamps": {
          "from": "00:17:28,900",
          "to": "00:17:34,720"
        },
        "offsets": {
          "from": 1048900,
          "to": 1054720
        },
        "text": "توصل للـ Layer اللي فيها الـ Application بتاعتك. تنزل بقى"
      },
      {
        "timestamps": {
          "from": "00:17:34,720",
          "to": "00:17:40,480"
        },
        "offsets": {
          "from": 1054720,
          "to": 1060480
        },
        "text": "كده الـ Container ده على Ubuntu Machine بقى عندك"
      },
      {
        "timestamps": {
          "from": "00:17:40,480",
          "to": "00:17:45,680"
        },
        "offsets": {
          "from": 1060480,
          "to": 1065680
        },
        "text": "Container كما لو كان عندي Fedora فيها Application."
      },
      {
        "timestamps": {
          "from": "00:17:45,680",
          "to": "00:17:50,900"
        },
        "offsets": {
          "from": 1065680,
          "to": 1070900
        },
        "text": "بدأت بالـ Kernel بتاعك أنت، وزودت عليه شوية بقى Fedora، زودت شوية"
      },
      {
        "timestamps": {
          "from": "00:17:50,900",
          "to": "00:17:54,680"
        },
        "offsets": {
          "from": 1070900,
          "to": 1074680
        },
        "text": "بقى فيه Python، زودت شوية بقى فيه Packages، زودت شوية بقى عندي"
      },
      {
        "timestamps": {
          "from": "00:17:54,680",
          "to": "00:17:59,420"
        },
        "offsets": {
          "from": 1074680,
          "to": 1079420
        },
        "text": "Python و Web Application مثلاً، Web Application معمولة بـ"
      },
      {
        "timestamps": {
          "from": "00:17:59,420",
          "to": "00:18:05,060"
        },
        "offsets": {
          "from": 1079420,
          "to": 1085060
        },
        "text": "Python نازلة على Fedora. وتفضل الـ Layers دي موجودة بالمنظر"
      },
      {
        "timestamps": {
          "from": "00:18:05,060",
          "to": "00:18:09,560"
        },
        "offsets": {
          "from": 1085060,
          "to": 1089560
        },
        "text": "ده. طب هل أقدر إني أعمل Merge للـ Layers دي كلها في بعض؟ آه"
      },
      {
        "timestamps": {
          "from": "00:18:09,560",
          "to": "00:18:12,920"
        },
        "offsets": {
          "from": 1089560,
          "to": 1092920
        },
        "text": "تقدر. زي ما بتقدر تعمل Merge للـ Virtual Disks على فكرة كلها."
      },
      {
        "timestamps": {
          "from": "00:18:12,920",
          "to": "00:18:15,860"
        },
        "offsets": {
          "from": 1092920,
          "to": 1095860
        },
        "text": "تقدر في وقت من الأوقات تعمل Merge لكل"
      },
      {
        "timestamps": {
          "from": "00:18:15,860",
          "to": "00:18:21,680"
        },
        "offsets": {
          "from": 1095860,
          "to": 1101680
        },
        "text": "الـ Virtual Disks، ده موجود في كل الـ Virtual Machine technologies."
      },
      {
        "timestamps": {
          "from": "00:18:21,680",
          "to": "00:18:25,880"
        },
        "offsets": {
          "from": 1101680,
          "to": 1105880
        },
        "text": "أقدر إني أعمل ده، بس أحسن لي ما أعملوش. أحسن لي إن أنا"
      },
      {
        "timestamps": {
          "from": "00:18:25,880",
          "to": "00:18:28,640"
        },
        "offsets": {
          "from": 1105880,
          "to": 1108640
        },
        "text": "ما أعملوش، وهنشوف وإحنا شغالين بقى أحسن لنا ليه إننا ما"
      },
      {
        "timestamps": {
          "from": "00:18:28,640",
          "to": "00:18:33,200"
        },
        "offsets": {
          "from": 1108640,
          "to": 1113200
        },
        "text": "نعملوش. خلصت كده يا باشا الـ Container بتاعك، ده فيه كل حاجة."
      },
      {
        "timestamps": {
          "from": "00:18:33,200",
          "to": "00:18:36,440"
        },
        "offsets": {
          "from": 1113200,
          "to": 1116440
        },
        "text": "اللي إنت محتاجها، زي بالظبط لما كنت بتحاول تجهز الـ Virtual"
      },
      {
        "timestamps": {
          "from": "00:18:36,440",
          "to": "00:18:40,040"
        },
        "offsets": {
          "from": 1116440,
          "to": 1120040
        },
        "text": "Machine بتاعتك اللي هي الـ Template دي. خلاص بقى الـ Container ده Template"
      },
      {
        "timestamps": {
          "from": "00:18:40,040",
          "to": "00:18:44,000"
        },
        "offsets": {
          "from": 1120040,
          "to": 1124000
        },
        "text": "بالنسبة لك، ينفع أعيد استخدامه بعد كده في أي Linux"
      },
      {
        "timestamps": {
          "from": "00:18:44,000",
          "to": "00:18:48,740"
        },
        "offsets": {
          "from": 1124000,
          "to": 1128740
        },
        "text": "Machine تانية. خلاص تمام، لما تبقى جاهز وراضي عن الـ Container ده،"
      },
      {
        "timestamps": {
          "from": "00:18:48,740",
          "to": "00:18:56,780"
        },
        "offsets": {
          "from": 1128740,
          "to": 1136780
        },
        "text": "بيتحول لحاجة اسمها Image، سواء Container Image أو Image بس. الـ Image ده في"
      },
      {
        "timestamps": {
          "from": "00:18:56,780",
          "to": "00:19:01,740"
        },
        "offsets": {
          "from": 1136780,
          "to": 1141740
        },
        "text": "الـ Container هو بالظبط الـ VM Template."
      },
      {
        "timestamps": {
          "from": "00:19:02,460",
          "to": "00:19:07,980"
        },
        "offsets": {
          "from": 1142460,
          "to": 1147980
        },
        "text": "الـ Image دي عبارة عن Container مقفول، Container Read-only، فيها"
      },
      {
        "timestamps": {
          "from": "00:19:07,980",
          "to": "00:19:12,720"
        },
        "offsets": {
          "from": 1147980,
          "to": 1152720
        },
        "text": "Layers وكل الـ Layers دي Read-only. وظيفتها إنك تاخد منها"
      },
      {
        "timestamps": {
          "from": "00:19:12,720",
          "to": "00:19:23,060"
        },
        "offsets": {
          "from": 1152720,
          "to": 1163060
        },
        "text": "نسخة تعمل منها Container. فهنا الـ Container بالنسبة للـ Image"
      },
      {
        "timestamps": {
          "from": "00:19:23,060",
          "to": "00:19:31,720"
        },
        "offsets": {
          "from": 1163060,
          "to": 1171720
        },
        "text": "بالظبط زي الـ VM بالنسبة للـ VM Template."
      },
      {
        "timestamps": {
          "from": "00:19:31,720",
          "to": "00:19:39,120"
        },
        "offsets": {
          "from": 1171720,
          "to": 1179120
        },
        "text": "نفس الفكرة بالظبط، الـ Image دي في الأصل كانت Container قعدنا"
      },
      {
        "timestamps": {
          "from": "00:19:39,120",
          "to": "00:19:47,060"
        },
        "offsets": {
          "from": 1179120,
          "to": 1187060
        },
        "text": "نبني فيه ونعمل Setup للـ Container ده، ونزلنا كذا وكذا. خلاص أنا كده"
      },
      {
        "timestamps": {
          "from": "00:19:47,060",
          "to": "00:19:53,600"
        },
        "offsets": {
          "from": 1187060,
          "to": 1193600
        },
        "text": "بقيت تمام، هتقفله وتحوله لـ Image، زي ما بتعمل بالظبط في الـ VM."
      },
      {
        "timestamps": {
          "from": "00:19:53,600",
          "to": "00:20:00,620"
        },
        "offsets": {
          "from": 1193600,
          "to": 1200620
        },
        "text": "تمام؟ هتعمل الـ Image دي، خلاص تمام؟ احتجت إني أستخدمها، احتجت"
      },
      {
        "timestamps": {
          "from": "00:20:00,620",
          "to": "00:20:06,920"
        },
        "offsets": {
          "from": 1200620,
          "to": 1206920
        },
        "text": "إني أعمل منها نسخ كتير، هتعامل مع الـ Image دي زي"
      },
      {
        "timestamps": {
          "from": "00:20:06,920",
          "to": "00:20:16,160"
        },
        "offsets": {
          "from": 1206920,
          "to": 1216160
        },
        "text": "الـ Template بتاع الـ VM. فهنا الجزء اللي بيطلع من الـ Image ليه مسميات، نمشي واحدة"
      },
      {
        "timestamps": {
          "from": "00:20:16,160",
          "to": "00:20:19,280"
        },
        "offsets": {
          "from": 1216160,
          "to": 1219280
        },
        "text": "واحدة وهنمسح الجزء ده."
      },
      {
        "timestamps": {
          "from": "00:20:23,600",
          "to": "00:20:28,840"
        },
        "offsets": {
          "from": 1223600,
          "to": 1228840
        },
        "text": "ونمشي واحدة واحدة على حسب المصطلحات الموجودة."
      },
      {
        "timestamps": {
          "from": "00:20:28,840",
          "to": "00:20:35,260"
        },
        "offsets": {
          "from": 1228840,
          "to": 1235260
        },
        "text": "فهنا الـ Container لما يتحول لـ Image ده اسمه Build، بتعمل Build"
      },
      {
        "timestamps": {
          "from": "00:20:35,260",
          "to": "00:20:42,520"
        },
        "offsets": {
          "from": 1235260,
          "to": 1242520
        },
        "text": "للـ Image. الـ Running VM لما تتحول لـ VM Template اسمها"
      },
      {
        "timestamps": {
          "from": "00:20:42,520",
          "to": "00:20:49,260"
        },
        "offsets": {
          "from": 1242520,
          "to": 1249260
        },
        "text": "Export. لما تاخد نسخة من الـ VM Template عشان تبقى"
      },
      {
        "timestamps": {
          "from": "00:20:49,260",
          "to": "00:20:53,580"
        },
        "offsets": {
          "from": 1249260,
          "to": 1253580
        },
        "text": "Running VM دي اسمها Import. دي مصطلحات"
      },
      {
        "timestamps": {
          "from": "00:20:53,580",
          "to": "00:20:58,180"
        },
        "offsets": {
          "from": 1253580,
          "to": 1258180
        },
        "text": "الـ VM. تمام؟ الـ Image عشان تتحول لـ Container ده اسمه"
      },
      {
        "timestamps": {
          "from": "00:20:58,180",
          "to": "00:21:06,220"
        },
        "offsets": {
          "from": 1258180,
          "to": 1266220
        },
        "text": "Pull للـ Image مع Create. هنشوف الكلام ده، أوكي؟ بس المهم"
      },
      {
        "timestamps": {
          "from": "00:21:06,220",
          "to": "00:21:09,920"
        },
        "offsets": {
          "from": 1266220,
          "to": 1269920
        },
        "text": "الـ Concept دلوقتي مش مشكلة المصطلحات دي، المهم الـ Concept."
      },
      {
        "timestamps": {
          "from": "00:21:09,920",
          "to": "00:21:18,080"
        },
        "offsets": {
          "from": 1269920,
          "to": 1278080
        },
        "text": "الـ Template بتاعة الـ Container اسمها Image، جواها الـ File System."
      },
      {
        "timestamps": {
          "from": "00:21:18,080",
          "to": "00:21:23,400"
        },
        "offsets": {
          "from": 1278080,
          "to": 1283400
        },
        "text": "مستقلة كـ File System،"
      },
      {
        "timestamps": {
          "from": "00:21:23,400",
          "to": "00:21:27,060"
        },
        "offsets": {
          "from": 1283400,
          "to": 1287060
        },
        "text": "وكل Layer عبارة عن تعديل حصل، والـ Layer اللي بعدها تعديل على"
      },
      {
        "timestamps": {
          "from": "00:21:27,060",
          "to": "00:21:31,500"
        },
        "offsets": {
          "from": 1287060,
          "to": 1291500
        },
        "text": "اللي تحتها، والتعديل ده يكون إضافة أو مسح أو حذف أو"
      },
      {
        "timestamps": {
          "from": "00:21:31,500",
          "to": "00:21:35,700"
        },
        "offsets": {
          "from": 1291500,
          "to": 1295700
        },
        "text": "أي حاجة تانية. نفس الوضع بالظبط في الـ VM Template."
      },
      {
        "timestamps": {
          "from": "00:21:35,700",
          "to": "00:21:42,120"
        },
        "offsets": {
          "from": 1295700,
          "to": 1302120
        },
        "text": "وفكرة التعديلات فيها هي نفس الفكرة بالظبط. يبقى الـ VM"
      },
      {
        "timestamps": {
          "from": "00:21:42,120",
          "to": "00:21:47,340"
        },
        "offsets": {
          "from": 1302120,
          "to": 1307340
        },
        "text": "أحولها لـ VM Template وده Export. الـ Container أحوله لـ"
      },
      {
        "timestamps": {
          "from": "00:21:47,340",
          "to": "00:21:50,340"
        },
        "offsets": {
          "from": 1307340,
          "to": 1310340
        },
        "text": "Image. وبعد كده أرجع آخد من الـ Image أحولها لـ Container تاني، آخد من"
      },
      {
        "timestamps": {
          "from": "00:21:50,340",
          "to": "00:21:56,280"
        },
        "offsets": {
          "from": 1310340,
          "to": 1316280
        },
        "text": "الـ Template وأعمل منها نسخة تانية. أوكي؟ طيب هنا في نقطة مهمة،"
      },
      {
        "timestamps": {
          "from": "00:21:56,280",
          "to": "00:21:59,700"
        },
        "offsets": {
          "from": 1316280,
          "to": 1319700
        },
        "text": "إني بدأت بالـ Kernel لأني قلت إن دي أهم فكرة."
      },
      {
        "timestamps": {
          "from": "00:21:59,700",
          "to": "00:22:04,500"
        },
        "offsets": {
          "from": 1319700,
          "to": 1324500
        },
        "text": "الفكرة المحورية وعمود الخيمة في الـ Container إن ما يهمنيش أي"
      },
      {
        "timestamps": {
          "from": "00:22:04,500",
          "to": "00:22:09,780"
        },
        "offsets": {
          "from": 1324500,
          "to": 1329780
        },
        "text": "حاجة في الـ Machine اللي شغال عليها غير الـ Kernel، تكون"
      },
      {
        "timestamps": {
          "from": "00:22:09,780",
          "to": "00:22:14,880"
        },
        "offsets": {
          "from": 1329780,
          "to": 1334880
        },
        "text": "زي ما تكون. قولي دي Fedora، دي Linux، قولي ده Windows 10،"
      },
      {
        "timestamps": {
          "from": "00:22:14,880",
          "to": "00:22:17,940"
        },
        "offsets": {
          "from": 1334880,
          "to": 1337940
        },
        "text": "ده Windows 11، ده Windows Server، ده كله اسمه Windows"
      },
      {
        "timestamps": {
          "from": "00:22:17,940",
          "to": "00:22:22,800"
        },
        "offsets": {
          "from": 1337940,
          "to": 1342800
        },
        "text": "Kernel. ما يهمنيش أي حاجة تانية، بالطريقة دي."
      },
      {
        "timestamps": {
          "from": "00:22:22,800",
          "to": "00:22:29,100"
        },
        "offsets": {
          "from": 1342800,
          "to": 1349100
        },
        "text": "كمان أنا لو خدت بالك قللت الاعتمادية لما يجي"
      },
      {
        "timestamps": {
          "from": "00:22:29,100",
          "to": "00:22:33,420"
        },
        "offsets": {
          "from": 1349100,
          "to": 1353420
        },
        "text": "مثلاً عندك الـ Application دي، في من ضمن"
      },
      {
        "timestamps": {
          "from": "00:22:33,420",
          "to": "00:22:37,860"
        },
        "offsets": {
          "from": 1353420,
          "to": 1357860
        },
        "text": "الحاجات حاجة اسمها مثلاً، فبقول لك إن الـ Application دي"
      },
      {
        "timestamps": {
          "from": "00:22:37,860",
          "to": "00:22:41,580"
        },
        "offsets": {
          "from": 1357860,
          "to": 1361580
        },
        "text": "تنزل مثلاً على Windows 10، الـ Application دي محتاجة Windows"
      },
      {
        "timestamps": {
          "from": "00:22:41,580",
          "to": "00:22:46,020"
        },
        "offsets": {
          "from": 1361580,
          "to": 1366020
        },
        "text": "8، الـ Application دي محتاجة مثلاً."
      },
      {
        "timestamps": {
          "from": "00:22:46,020",
          "to": "00:22:47,340"
        },
        "offsets": {
          "from": 1366020,
          "to": 1367340
        },
        "text": "الـ Application دي محتاجة مثلاً Fedora."
      },
      {
        "timestamps": {
          "from": "00:22:47,940",
          "to": "00:22:53,100"
        },
        "offsets": {
          "from": 1367940,
          "to": 1373100
        },
        "text": "أو محتاجة Ubuntu مثلاً، حتى دي أنا مابقتش محتاجها ولا"
      },
      {
        "timestamps": {
          "from": "00:22:53,100",
          "to": "00:22:59,460"
        },
        "offsets": {
          "from": 1373100,
          "to": 1379460
        },
        "text": "بتفرق معايا، في الآخر دي إيه؟ Fedora مثلاً، ما"
      },
      {
        "timestamps": {
          "from": "00:22:59,460",
          "to": "00:23:05,760"
        },
        "offsets": {
          "from": 1379460,
          "to": 1385760
        },
        "text": "يهمنيش بقى، ليه بقى؟ لأن في الآخر الـ Kernel بتاع ده واحد، في"
      },
      {
        "timestamps": {
          "from": "00:23:05,760",
          "to": "00:23:10,680"
        },
        "offsets": {
          "from": 1385760,
          "to": 1390680
        },
        "text": "الآخر أنت محتاج يا Windows يا Linux، عايز Linux يعمل حاجة"
      },
      {
        "timestamps": {
          "from": "00:23:10,680",
          "to": "00:23:16,020"
        },
        "offsets": {
          "from": 1390680,
          "to": 1396020
        },
        "text": "عشان أنا هنزل Linux، الحتة بتاعة إنه يكون Fedora أو إنه"
      },
      {
        "timestamps": {
          "from": "00:23:16,020",
          "to": "00:23:17,760"
        },
        "offsets": {
          "from": 1396020,
          "to": 1397760
        },
        "text": "يكون Ubuntu أو مش عارف إيه هتبقى"
      },
      {
        "timestamps": {
          "from": "00:23:17,940",
          "to": "00:23:22,140"
        },
        "offsets": {
          "from": 1397940,
          "to": 1402140
        },
        "text": "نفسه، فدي الطريقة عشان كده هنقول في التعريف الأول إن أنا بقى"
      },
      {
        "timestamps": {
          "from": "00:22:14,140",
          "to": "00:23:25,920"
        },
        "offsets": {
          "from": 1402140,
          "to": 1405920
        },
        "text": "خالص، أنا كده عندي طريقة بعمل بيها Bundle للـ Application بالـ Requirements"
      },
      {
        "timestamps": {
          "from": "00:23:25,920",
          "to": "00:23:31,260"
        },
        "offsets": {
          "from": 1405920,
          "to": 1411260
        },
        "text": "والـ Dependencies بتاعتها، أوكي؟ مابقتش محتاج إني أنزل Fedora"
      },
      {
        "timestamps": {
          "from": "00:23:31,260",
          "to": "00:23:35,160"
        },
        "offsets": {
          "from": 1411260,
          "to": 1415160
        },
        "text": "في VM Linux وفي VM Fedora وفي VM مثلاً Windows 8"
      },
      {
        "timestamps": {
          "from": "00:23:35,160",
          "to": "00:23:37,980"
        },
        "offsets": {
          "from": 1415160,
          "to": 1417980
        },
        "text": "وفي VM Windows 10 وفي VM Windows Server، مابقتش محتاج"
      },
      {
        "timestamps": {
          "from": "00:23:37,980",
          "to": "00:23:42,780"
        },
        "offsets": {
          "from": 1417980,
          "to": 1422780
        },
        "text": "إني أعمل ده، في الآخر الـ Application دي بتنزل يا Linux"
      },
      {
        "timestamps": {
          "from": "00:23:42,780",
          "to": "00:23:50,940"
        },
        "offsets": {
          "from": 1422780,
          "to": 1430940
        },
        "text": "يا Windows. تاني، أعمل ده بقى إزاي؟ يعني إزاي الـ Container اعتمد"
      },
      {
        "timestamps": {
          "from": "00:23:50,940",
          "to": "00:23:57,360"
        },
        "offsets": {
          "from": 1430940,
          "to": 1437360
        },
        "text": "على الـ Kernel بس وكمل؟ هقول لك بقى إزاي، الحقيقة ده بيرجع لـ"
      },
      {
        "timestamps": {
          "from": "00:23:57,360",
          "to": "00:24:05,520"
        },
        "offsets": {
          "from": 1437360,
          "to": 1445520
        },
        "text": "موجود برضو من السبعينات، وصدق أو لا تصدق، الـ Container ده ماهواش"
      },
      {
        "timestamps": {
          "from": "00:24:05,520",
          "to": "00:24:12,240"
        },
        "offsets": {
          "from": 1445520,
          "to": 1452240
        },
        "text": "حاجة حديثة خالص، دي حاجة بقالها 50 سنة، أصلاً بتاع زمان"
      },
      {
        "timestamps": {
          "from": "00:24:12,240",
          "to": "00:24:17,580"
        },
        "offsets": {
          "from": 1452240,
          "to": 1457580
        },
        "text": "والـ Linux systems كلها بتعتمد أصلاً على الـ Containers، بس بتعتمد على"
      },
      {
        "timestamps": {
          "from": "00:24:17,580",
          "to": "00:24:25,320"
        },
        "offsets": {
          "from": 1457580,
          "to": 1465320
        },
        "text": "الـ Containers عندها جوه الـ Kernel، مفيش عندها Component كده اسمها"
      },
      {
        "timestamps": {
          "from": "00:24:25,320",
          "to": "00:24:29,820"
        },
        "offsets": {
          "from": 1465320,
          "to": 1469820
        },
        "text": "Container، لأ دي بتعتمد على الـ Containers في الـ Kernel، إزاي؟"
      },
      {
        "timestamps": {
          "from": "00:24:29,820",
          "to": "00:24:35,400"
        },
        "offsets": {
          "from": 1469820,
          "to": 1475400
        },
        "text": "هقول لك أنا إزاي، الـ Unix systems والـ Linux systems بتعتمد جوه الـ Kernel"
      },
      {
        "timestamps": {
          "from": "00:24:35,400",
          "to": "00:24:38,300"
        },
        "offsets": {
          "from": 1475400,
          "to": 1478300
        },
        "text": "على حاجة اسمها"
      },
      {
        "timestamps": {
          "from": "00:24:41,700",
          "to": "00:24:46,860"
        },
        "offsets": {
          "from": 1481700,
          "to": 1486860
        },
        "text": "ده مش حوارنا دلوقتي، فانا هتكلم بس بسرعة فيها عشان أوريك إن"
      },
      {
        "timestamps": {
          "from": "00:24:46,860",
          "to": "00:24:55,740"
        },
        "offsets": {
          "from": 1486860,
          "to": 1495740
        },
        "text": "الـ Concept أصلاً موجود، دي عبارة عن طريقة بيقدر بيها"
      },
      {
        "timestamps": {
          "from": "00:24:55,740",
          "to": "00:25:00,960"
        },
        "offsets": {
          "from": 1495740,
          "to": 1500960
        },
        "text": "Linux أو Unix إنه يعمل Monitor لـ Process معينة استهلكت"
      },
      {
        "timestamps": {
          "from": "00:25:00,960",
          "to": "00:25:09,620"
        },
        "offsets": {
          "from": 1500960,
          "to": 1509620
        },
        "text": "RAMs وهكذا، أنت بتبدأ مثلاً Process، أي Process ولكن مثلاً"
      },
      {
        "timestamps": {
          "from": "00:25:09,620",
          "to": "00:25:16,160"
        },
        "offsets": {
          "from": 1509620,
          "to": 1516160
        },
        "text": "الـ Process دي أول ما اشتغلت خدت مثلاً 200GB RAM مثلاً"
      },
      {
        "timestamps": {
          "from": "00:25:16,160",
          "to": "00:25:22,520"
        },
        "offsets": {
          "from": 1516160,
          "to": 1522520
        },
        "text": "وخدت مثلاً 1 Core وخدت قد كدة، دي وظيفتها إن هي"
      },
      {
        "timestamps": {
          "from": "00:22:22,520",
          "to": "00:25:25,700"
        },
        "offsets": {
          "from": 1522520,
          "to": 1525700
        },
        "text": "تعمل Monitor للكلام ده، تفضل طول الوقت متابعة زي ما أنت بتعمل كدة"
      },
      {
        "timestamps": {
          "from": "00:25:25,700",
          "to": "00:25:33,020"
        },
        "offsets": {
          "from": 1525700,
          "to": 1533020
        },
        "text": "بتبص على أو بتكتب مثلاً top في Linux وتشوف كل Process عندك واخدة"
      },
      {
        "timestamps": {
          "from": "00:25:33,020",
          "to": "00:25:36,320"
        },
        "offsets": {
          "from": 1533020,
          "to": 1536320
        },
        "text": "قد إيه، ده موجود طبعاً في الـ cgroups، وظيفتها موجودة في كل"
      },
      {
        "timestamps": {
          "from": "00:25:36,320",
          "to": "00:25:42,680"
        },
        "offsets": {
          "from": 1536320,
          "to": 1542680
        },
        "text": "الـ cgroups، وظيفتها إنها تعمل Monitor، ومش بس Monitor، إنها كمان تقدر"
      },
      {
        "timestamps": {
          "from": "00:25:42,680",
          "to": "00:25:46,460"
        },
        "offsets": {
          "from": 1542680,
          "to": 1546460
        },
        "text": "تعمل Assign للـ Resources دي، لأن كدة لما تبقى لنا مثلاً Process معينة"
      },
      {
        "timestamps": {
          "from": "00:25:46,460",
          "to": "00:25:49,880"
        },
        "offsets": {
          "from": 1546460,
          "to": 1549880
        },
        "text": "الـ Process دي ما تاخدش أكتر مثلاً من 100MB RAM أو إيه كدة؟"
      },
      {
        "timestamps": {
          "from": "00:25:49,880",
          "to": "00:25:53,480"
        },
        "offsets": {
          "from": 1549880,
          "to": 1553480
        },
        "text": "عامل 100MB RAM تمام؟ ما تاخدش أكتر مثلاً من 3 Cores مثلاً."
      },
      {
        "timestamps": {
          "from": "00:25:53,480",
          "to": "00:26:00,020"
        },
        "offsets": {
          "from": 1553480,
          "to": 1560020
        },
        "text": "ما تاخدش مثلاً أكتر من كذا. فالـ cgroups دي عبارة عن تكنولوجي"
      },
      {
        "timestamps": {
          "from": "00:26:00,020",
          "to": "00:26:06,740"
        },
        "offsets": {
          "from": 1560020,
          "to": 1566740
        },
        "text": "موجودة من زمان جداً جداً. وظيفتها إنها تعمل monitor و set"
      },
      {
        "timestamps": {
          "from": "00:26:06,740",
          "to": "00:26:14,300"
        },
        "offsets": {
          "from": 1566740,
          "to": 1574300
        },
        "text": "بتاع الـ process بكل عيالها. ما أنت الـ process دي ممكن تفتح process تانية تعمل لها execute"
      },
      {
        "timestamps": {
          "from": "00:26:14,300",
          "to": "00:26:19,700"
        },
        "offsets": {
          "from": 1574300,
          "to": 1579700
        },
        "text": "لـ process تانية اللي هي الـ child processes. تمام؟ فكل الـ processes دي كلها على"
      },
      {
        "timestamps": {
          "from": "00:26:19,700",
          "to": "00:26:24,440"
        },
        "offsets": {
          "from": 1579700,
          "to": 1584440
        },
        "text": "بعضها كده بتشوف هي مستعملة قد إيه. الـ process دي من"
      },
      {
        "timestamps": {
          "from": "00:26:24,440",
          "to": "00:26:29,240"
        },
        "offsets": {
          "from": 1584440,
          "to": 1589240
        },
        "text": "أول ما اشتغلت بكل عيالها اللي هي خلفتهم كـ process تانية"
      },
      {
        "timestamps": {
          "from": "00:26:29,240",
          "to": "00:26:35,720"
        },
        "offsets": {
          "from": 1589240,
          "to": 1595720
        },
        "text": "خدوا قد إيه؟ فده الـ cgroups. والـ namespaces حاجة شبه كده شوية بس وظيفتها إنها"
      },
      {
        "timestamps": {
          "from": "00:26:35,720",
          "to": "00:26:47,520"
        },
        "offsets": {
          "from": 1595720,
          "to": 1607520
        },
        "text": "تعمل isolation. يعني عندي مثلاً الـ process هي هي نفسها عملت process تانية اسمها"
      },
      {
        "timestamps": {
          "from": "00:26:47,520",
          "to": "00:26:55,980"
        },
        "offsets": {
          "from": 1607520,
          "to": 1615980
        },
        "text": "مثلاً process 2 وعملت process تالتة اسمها process 3. و process 2 راحت فتحت"
      },
      {
        "timestamps": {
          "from": "00:26:55,980",
          "to": "00:26:58,980"
        },
        "offsets": {
          "from": 1615980,
          "to": 1618980
        },
        "text": "كمان process 4."
      },
      {
        "timestamps": {
          "from": "00:26:59,240",
          "to": "00:27:06,620"
        },
        "offsets": {
          "from": 1619240,
          "to": 1626620
        },
        "text": "و process 3 راحت فتحت مثلاً process 5 و process 6. وظيفة"
      },
      {
        "timestamps": {
          "from": "00:26:06,620",
          "to": "00:27:11,420"
        },
        "offsets": {
          "from": 1626620,
          "to": 1631420
        },
        "text": "الـ namespaces دي إنها تتأكد إن الـ resources بتاعة الـ processes دي"
      },
      {
        "timestamps": {
          "from": "00:27:11,420",
          "to": "00:27:18,380"
        },
        "offsets": {
          "from": 1631420,
          "to": 1638380
        },
        "text": "كلها جوه بعضها، إن الـ processes دي كلها شايفين بعض وشايفين الـ context بتاعهم"
      },
      {
        "timestamps": {
          "from": "00:27:18,380",
          "to": "00:27:26,240"
        },
        "offsets": {
          "from": 1638380,
          "to": 1646240
        },
        "text": "وتقدر لو فيه حاجة هنا تتشاف من هنا وهكذا. الاتنين دول مع بعض"
      },
      {
        "timestamps": {
          "from": "00:27:26,240",
          "to": "00:27:31,040"
        },
        "offsets": {
          "from": 1646240,
          "to": 1651040
        },
        "text": "والـ namespaces لو فكرت فيها هي تقريباً الـ Container. تقريباً هي"
      },
      {
        "timestamps": {
          "from": "00:27:31,040",
          "to": "00:27:36,380"
        },
        "offsets": {
          "from": 1651040,
          "to": 1656380
        },
        "text": "الـ Container. يعني لو أنت تخيلت مثلاً إن الـ Container نفسه كـ technology"
      },
      {
        "timestamps": {
          "from": "00:27:36,380",
          "to": "00:27:42,740"
        },
        "offsets": {
          "from": 1656380,
          "to": 1662740
        },
        "text": "كـ process يعني بدأ مثلاً بـ process واحدة. تمام؟"
      },
      {
        "timestamps": {
          "from": "00:27:42,740",
          "to": "00:27:53,860"
        },
        "offsets": {
          "from": 1662740,
          "to": 1673860
        },
        "text": "اسمها مثلاً runc. والـ runc دي راحت عاملة الـ isolation اللي إحنا"
      },
      {
        "timestamps": {
          "from": "00:27:53,860",
          "to": "00:27:59,320"
        },
        "offsets": {
          "from": 1673860,
          "to": 1679320
        },
        "text": "اتكلمنا عليه. والـ process الأولانية راحت تعمل processes تانية."
      },
      {
        "timestamps": {
          "from": "00:27:59,320",
          "to": "00:28:09,700"
        },
        "offsets": {
          "from": 1679320,
          "to": 1689700
        },
        "text": "مثلاً دي فتحت تانية، وده عمل مثلاً كذا process"
      },
      {
        "timestamps": {
          "from": "00:28:09,700",
          "to": "00:28:19,960"
        },
        "offsets": {
          "from": 1689700,
          "to": 1699960
        },
        "text": "وعمل كل ده. بالنسبة لـ Linux هي في الأصل process واحدة بس بدأت"
      },
      {
        "timestamps": {
          "from": "00:28:19,960",
          "to": "00:28:23,840"
        },
        "offsets": {
          "from": 1699960,
          "to": 1703840
        },
        "text": "اللي هي runc دي بكل الـ child processes اللي نشأت منها."
      },
      {
        "timestamps": {
          "from": "00:28:23,860",
          "to": "00:28:31,000"
        },
        "offsets": {
          "from": 1703860,
          "to": 1711000
        },
        "text": "ويقدر Linux يتعامل معاهم كوحدة واحدة. كلهم مع بعض كوحدة"
      },
      {
        "timestamps": {
          "from": "00:28:31,000",
          "to": "00:28:38,800"
        },
        "offsets": {
          "from": 1711000,
          "to": 1718800
        },
        "text": "واحدة. وعن طريق الـ namespaces هيـ isolate كل الـ processes دي بكل اللي خرج منها عن أي حاجة"
      },
      {
        "timestamps": {
          "from": "00:28:38,800",
          "to": "00:28:49,300"
        },
        "offsets": {
          "from": 1718800,
          "to": 1729300
        },
        "text": "تانية موجودة في الـ OS، لا هما يشوفوها ولا هي تشوفهم. ده وده أصلاً حتى"
      },
      {
        "timestamps": {
          "from": "00:28:49,300",
          "to": "00:28:56,260"
        },
        "offsets": {
          "from": 1729300,
          "to": 1736260
        },
        "text": "مجازاً كان بيطلق عليها process group في Linux. ويقدر الـ kernel يتعامل"
      },
      {
        "timestamps": {
          "from": "00:28:56,260",
          "to": "00:29:00,940"
        },
        "offsets": {
          "from": 1736260,
          "to": 1740940
        },
        "text": "معاهم مش بس كوحدة واحدة، يقدر كمان إنه يبعت لهم signals. ودي برضو"
      },
      {
        "timestamps": {
          "from": "00:29:00,940",
          "to": "00:29:03,820"
        },
        "offsets": {
          "from": 1740940,
          "to": 1743820
        },
        "text": "هتشوفها، مش هنتكلم عليها كتير بس ممكن تقابلها. زي"
      },
      {
        "timestamps": {
          "from": "00:29:03,820",
          "to": "00:29:10,060"
        },
        "offsets": {
          "from": 1743820,
          "to": 1750060
        },
        "text": "إيه؟ زي الـ SIGINT مثلاً أو الـ signals بشكل عام وهكذا"
      },
      {
        "timestamps": {
          "from": "00:29:10,060",
          "to": "00:29:14,440"
        },
        "offsets": {
          "from": 1750060,
          "to": 1754440
        },
        "text": "يعني. فلما أبعت signal للـ process دي، ولما أبعت signal"
      },
      {
        "timestamps": {
          "from": "00:29:14,440",
          "to": "00:29:17,140"
        },
        "offsets": {
          "from": 1754440,
          "to": 1757140
        },
        "text": "للـ process الأولى اللي هي الـ parent process،"
      },
      {
        "timestamps": {
          "from": "00:29:17,140",
          "to": "00:29:26,260"
        },
        "offsets": {
          "from": 1757140,
          "to": 1766260
        },
        "text": "فيقوم موقف كل حاجة، اللي هو يعمل stop للـ container كله. دي الفكرة"
      },
      {
        "timestamps": {
          "from": "00:29:26,260",
          "to": "00:29:35,140"
        },
        "offsets": {
          "from": 1766260,
          "to": 1775140
        },
        "text": "الأصلية. وعشان فكرة الـ isolation دي موجودة في الـ Linux Kernel، فأنا مش"
      },
      {
        "timestamps": {
          "from": "00:29:35,140",
          "to": "00:29:40,720"
        },
        "offsets": {
          "from": 1775140,
          "to": 1780720
        },
        "text": "محتاج غير الـ Kernel بس بتاع Linux. وده دايماً موجود سواء كان"
      },
      {
        "timestamps": {
          "from": "00:29:40,720",
          "to": "00:29:46,600"
        },
        "offsets": {
          "from": 1780720,
          "to": 1786600
        },
        "text": "في Fedora أو Debian أو CentOS أو حتى"
      },
      {
        "timestamps": {
          "from": "00:29:46,600",
          "to": "00:29:51,100"
        },
        "offsets": {
          "from": 1786600,
          "to": 1791100
        },
        "text": "Suse Linux في كل الـ Linux distributions. ليه؟ عشان موجود في"
      },
      {
        "timestamps": {
          "from": "00:29:51,100",
          "to": "00:29:56,860"
        },
        "offsets": {
          "from": 1791100,
          "to": 1796860
        },
        "text": "الـ Kernel. فبما إن أنا كواحد هعمل implement للـ container، مش"
      },
      {
        "timestamps": {
          "from": "00:29:56,860",
          "to": "00:30:00,580"
        },
        "offsets": {
          "from": 1796860,
          "to": 1800580
        },
        "text": "محتاج أكتر من ده، يبقى أنا مش محتاج أكتر من الـ Kernel عشان"
      },
      {
        "timestamps": {
          "from": "00:30:00,580",
          "to": "00:30:06,040"
        },
        "offsets": {
          "from": 1800580,
          "to": 1806040
        },
        "text": "أعمل الـ container بتاعي. دي الفكرة الرئيسية. مش هخوض كتير في"
      },
      {
        "timestamps": {
          "from": "00:30:06,040",
          "to": "00:30:10,180"
        },
        "offsets": {
          "from": 1806040,
          "to": 1810180
        },
        "text": "الموضوع بالتفصيل، بس أنت عرفت إزاي قدرت أخلي الـ container"
      },
      {
        "timestamps": {
          "from": "00:30:10,720",
          "to": "00:30:14,620"
        },
        "offsets": {
          "from": 1810720,
          "to": 1814620
        },
        "text": "أحقق الفكرة بتاعة إن أنا أعتمد بس على الـ Kernel وأستغنى عن"
      },
      {
        "timestamps": {
          "from": "00:30:14,620",
          "to": "00:30:18,700"
        },
        "offsets": {
          "from": 1814620,
          "to": 1818700
        },
        "text": "وكل المشاكل اللي جاية معاه. عملت ده إزاي؟ عملت ده عن طريق إن أنا"
      },
      {
        "timestamps": {
          "from": "00:30:18,700",
          "to": "00:30:22,660"
        },
        "offsets": {
          "from": 1818700,
          "to": 1822660
        },
        "text": "غصت جوه الـ Kernel، وتلاقي تكنولوجيا في الـ Kernel تساعدني"
      },
      {
        "timestamps": {
          "from": "00:30:22,660",
          "to": "00:30:24,960"
        },
        "offsets": {
          "from": 1822660,
          "to": 1824960
        },
        "text": "إن أنا أعمل ده اللي هي:"
      }
    ]
  },
  {
    "id": 4,
    "title": "Introduction to Docker",
    "duration": 1044.0,
    "isReady": true,
    "transcription": [
      {
        "timestamps": {
          "from": "00:00:00,000",
          "to": "00:00:29,520"
        },
        "offsets": {
          "from": 0,
          "to": 29520
        },
        "text": "آخر حتة في الـ Architecture قبل ما نبدأ نلغوص إيدينا في الـ Containers، تذكر إن الـ Containers ده Concept، وزي ما الـ Virtual Machine نفسها Concept. الطريقة اللي بيتعمل بيها Implementation للـ Containers والتكنولوجي اللي محتاجها، زي مثلاً في الـ Virtual Machine محتاج تكنولوجي زي الـ Hyper-V أو الـ Hypervisor، والتكنولوجي اللي بـ Create بيها الـ VM وتعمل Start و Stop وهكذا."
      },
      {
        "timestamps": {
          "from": "00:00:29,520",
          "to": "00:00:59,040"
        },
        "offsets": {
          "from": 29520,
          "to": 59040
        },
        "text": "والـ Virtual Machine عموماً فيها حاجات تانية، زي الـ IP والـ Storage والحاجات دي. فالتكنولوجيز دي كتيرة، وزي ما تكنولوجيز الـ Virtualization فيها أنواع كتير بتطبق الـ Concept، كمان التكنولوجيز بتاعة الـ Containers كتيرة وبتطبق الـ Concept بتاع الـ Containers، أشهرهم على الإطلاق واللي هنركز عليها النهاردة هي Docker."
      },
      {
        "timestamps": {
          "from": "00:00:59,040",
          "to": "00:01:28,240"
        },
        "offsets": {
          "from": 59040,
          "to": 88240
        },
        "text": "Docker دي شركة اسمها Docker Inc، مكنش اسمها كدة في الأول، كانت شركة تقريباً من سنة 2010 وكان اسمها dotCloud، هتلاقوني كاتب لكم التفاصيل دي في الـ Notes على الـ Repo. المهم إن Docker هي الشركة اللي خرجت الـ Containers من رحم الـ Linux Kernel والـ Unix Kernel وخلتها متاحة للناس تستخدمها."
      },
      {
        "timestamps": {
          "from": "00:01:28,560",
          "to": "00:01:49,980"
        },
        "offsets": {
          "from": 88560,
          "to": 109980
        },
        "text": "Docker عندها تكنولوجي اسمه Docker برضو، متتلخبطش الشركة اسمها Docker والسوفت وير اسمه Docker. الـ Docker ده زي الـ Hyper-V أو الـ VMware، هو اللي بقدر من خلاله أتعامل مع الـ Containers."
      },
      {
        "timestamps": {
          "from": "00:01:49,980",
          "to": "00:01:58,080"
        },
        "offsets": {
          "from": 109980,
          "to": 118080
        },
        "text": "وأقدر بيه أعمل الـ Lifecycle بتاعة الـ Containers، إني أعمل Build للـ Container والـ Images، وأقدر أعمل Run و Execute."
      },
      {
        "timestamps": {
          "from": "00:01:58,080",
          "to": "00:02:10,480"
        },
        "offsets": {
          "from": 118080,
          "to": 130480
        },
        "text": "أعمل Run و Stop و Execute للـ Containers. ويستحسن طبعاً تعمل Account على Docker، تدخل على docker.com."
      },
      {
        "timestamps": {
          "from": "00:02:10,480",
          "to": "00:02:18,780"
        },
        "offsets": {
          "from": 130480,
          "to": 138780
        },
        "text": "وتعمل Account مجاني، وبعدها تقدر تعمل Install للـ Docker. و Docker فيه منه نوعين."
      },
      {
        "timestamps": {
          "from": "00:02:18,780",
          "to": "00:02:27,600"
        },
        "offsets": {
          "from": 138780,
          "to": 147600
        },
        "text": "يعني السوفت وير نفسه فيه منه 2 Offerings، واحد هو الـ Community Edition وده Free و Open Source، وفي"
      },
      {
        "timestamps": {
          "from": "00:02:27,600",
          "to": "00:02:34,500"
        },
        "offsets": {
          "from": 147600,
          "to": 154500
        },
        "text": "منه الـ Enterprise Edition وده بفلوس عشان فيه Features و Licenses زيادة."
      },
      {
        "timestamps": {
          "from": "00:02:34,500",
          "to": "00:02:44,340"
        },
        "offsets": {
          "from": 154500,
          "to": 164340
        },
        "text": "في حتة كمان ممكن تلخبطنا فخلينا نركز فيها، فكرة إن الـ Containers أنواع، وهما نوعين لحد دلوقتي."
      },
      {
        "timestamps": {
          "from": "00:02:44,340",
          "to": "00:02:57,120"
        },
        "offsets": {
          "from": 164340,
          "to": 177120
        },
        "text": "الـ Container يا إما Windows Container يا إما Linux Container، مفيش حاجة"
      },
      {
        "timestamps": {
          "from": "00:02:57,120",
          "to": "00:03:04,680"
        },
        "offsets": {
          "from": 177120,
          "to": 184680
        },
        "text": "تالتة، مفيش Mac Container. يا إما Windows فيستخدم الـ Windows Kernel، يا إما Linux فيستخدم الـ Linux Kernel."
      },
      {
        "timestamps": {
          "from": "00:03:04,680",
          "to": "00:03:13,980"
        },
        "offsets": {
          "from": 184680,
          "to": 193980
        },
        "text": "السوفت وير نفسه بتاع Docker بينزل على Windows و Linux و Mac. فالسوفت وير لو نزل"
      },
      {
        "timestamps": {
          "from": "00:03:13,980",
          "to": "00:03:19,140"
        },
        "offsets": {
          "from": 193980,
          "to": 199140
        },
        "text": "على Linux هيعمل Linux Containers، ولو نزل على Windows هيعمل Windows Containers."
      },
      {
        "timestamps": {
          "from": "00:03:19,140",
          "to": "00:03:26,640"
        },
        "offsets": {
          "from": 199140,
          "to": 206640
        },
        "text": "تمام، طب لو نزل على Mac؟ دي بقى التريكة. لو نزلت Docker"
      },
      {
        "timestamps": {
          "from": "00:03:26,640",
          "to": "00:03:31,800"
        },
        "offsets": {
          "from": 206640,
          "to": 211800
        },
        "text": "على Linux خلاص هتعمل Linux Containers. لكن لو نزلت Docker على Windows أو Mac"
      },
      {
        "timestamps": {
          "from": "00:03:31,800",
          "to": "00:03:37,140"
        },
        "offsets": {
          "from": 211800,
          "to": 217140
        },
        "text": "هنا Docker هيكون اسمه Docker Desktop. الـ Version اللي بينزل على Windows اسمه Docker Desktop."
      },
      {
        "timestamps": {
          "from": "00:03:37,140",
          "to": "00:03:46,380"
        },
        "offsets": {
          "from": 217140,
          "to": 226380
        },
        "text": "والـ Version اللي على Mac اسمه Docker Desktop for Mac. لو نزلته على Windows هيبدأ يشوف لو أنت"
      },
      {
        "timestamps": {
          "from": "00:03:46,380",
          "to": "00:04:05,080"
        },
        "offsets": {
          "from": 226380,
          "to": 245080
        },
        "text": "مفعل الـ Hyper-V، ودي تكنولوجي Microsoft للـ Virtualization، هيسألك محتاج Linux Containers ولا لأ. لو قولتله أيوه،"
      },
      {
        "timestamps": {
          "from": "00:04:05,080",
          "to": "00:04:15,380"
        },
        "offsets": {
          "from": 245080,
          "to": 255380
        },
        "text": "هيقوم مكريه VM Linux على Windows،"
      },
      {
        "timestamps": {
          "from": "00:04:15,380",
          "to": "00:04:20,160"
        },
        "offsets": {
          "from": 255380,
          "to": 260160
        },
        "text": "والـ Linux Containers هيحطها جوه الـ VM دي."
      },
      {
        "timestamps": {
          "from": "00:04:20,160",
          "to": "00:04:36,640"
        },
        "offsets": {
          "from": 260160,
          "to": 276640
        },
        "text": "في الحالة دي تقدر وأنت على Windows تعمل Windows Containers و Linux Containers. الـ Windows Containers على الـ Windows Kernel، والـ Linux Containers على الـ Linux VM اللي عملها Docker Desktop."
      },
      {
        "timestamps": {
          "from": "00:04:36,640",
          "to": "00:04:42,640"
        },
        "offsets": {
          "from": 276640,
          "to": 282640
        },
        "text": "نفس الكلام في Mac، هينزلك Virtual Machine Linux برضو،"
      },
      {
        "timestamps": {
          "from": "00:04:42,640",
          "to": "00:04:45,360"
        },
        "offsets": {
          "from": 282640,
          "to": 285360
        },
        "text": "وجوه الـ Mac تقدر تعمل"
      },
      {
        "timestamps": {
          "from": "00:04:45,360",
          "to": "00:04:51,840"
        },
        "offsets": {
          "from": 285360,
          "to": 291840
        },
        "text": "Linux Containers. عشان منتلخبطش، الـ Container يا Windows يا"
      },
      {
        "timestamps": {
          "from": "00:04:51,840",
          "to": "00:04:57,600"
        },
        "offsets": {
          "from": 291840,
          "to": 297600
        },
        "text": "Linux. أما لو هتنزل Docker Desktop على Windows هيديك"
      },
      {
        "timestamps": {
          "from": "00:04:57,600",
          "to": "00:05:01,380"
        },
        "offsets": {
          "from": 297600,
          "to": 301380
        },
        "text": "الـ Option ده، وده ظريف جداً ومش موجود في Linux، لأن"
      },
      {
        "timestamps": {
          "from": "00:05:01,380",
          "to": "00:05:05,220"
        },
        "offsets": {
          "from": 301380,
          "to": 305220
        },
        "text": "Docker Desktop بيديك Features زيادة، زي مثلاً"
      },
      {
        "timestamps": {
          "from": "00:05:05,220",
          "to": "00:05:09,660"
        },
        "offsets": {
          "from": 305220,
          "to": 309660
        },
        "text": "Docker Dashboard اللي بتوريك الـ Containers والـ Images"
      },
      {
        "timestamps": {
          "from": "00:05:09,660",
          "to": "00:05:12,540"
        },
        "offsets": {
          "from": 309660,
          "to": 312540
        },
        "text": "اللي عندك، ومين شغال ومين واقف،"
      },
      {
        "timestamps": {
          "from": "00:05:12,540",
          "to": "00:05:15,120"
        },
        "offsets": {
          "from": 312540,
          "to": 315120
        },
        "text": "ودي Default ومش موجودة في Linux، بس هنشوف لها حل."
      },
      {
        "timestamps": {
          "from": "00:05:15,120",
          "to": "00:05:20,940"
        },
        "offsets": {
          "from": 315120,
          "to": 320940
        },
        "text": "متقلقش، هنشوف لها حل. فخلينا نبدأ نجرب"
      },
      {
        "timestamps": {
          "from": "00:05:20,940",
          "to": "00:05:28,020"
        },
        "offsets": {
          "from": 320940,
          "to": 328020
        },
        "text": "الكلام ده، وقبل ما نجرب نعمل Install للـ Docker"
      },
      {
        "timestamps": {
          "from": "00:05:28,020",
          "to": "00:05:31,380"
        },
        "offsets": {
          "from": 328020,
          "to": 331380
        },
        "text": "عندنا على Linux، خليني الأول أوريكم حاجة."
      },
      {
        "timestamps": {
          "from": "00:05:31,380",
          "to": "00:05:37,200"
        },
        "offsets": {
          "from": 331380,
          "to": 337200
        },
        "text": "على الـ Linux Machine، فيه Web site معمول"
      },
      {
        "timestamps": {
          "from": "00:05:37,200",
          "to": "00:05:40,440"
        },
        "offsets": {
          "from": 337200,
          "to": 340440
        },
        "text": "من شركة Docker نفسها، اسمه"
      },
      {
        "timestamps": {
          "from": "00:05:40,440",
          "to": "00:05:47,700"
        },
        "offsets": {
          "from": 340440,
          "to": 347700
        },
        "text": "labs.play-with-docker.com. وده زي"
      },
      {
        "timestamps": {
          "from": "00:05:47,700",
          "to": "00:05:50,820"
        },
        "offsets": {
          "from": 347700,
          "to": 350820
        },
        "text": "ما هو واضح من اسمه عبارة عن Lab. تقدر من الـ Browser بس"
      },
      {
        "timestamps": {
          "from": "00:05:50,820",
          "to": "00:05:55,680"
        },
        "offsets": {
          "from": 350820,
          "to": 355680
        },
        "text": "من غير ما تعمل أي حاجة تانية، هيعمل لك Lab"
      },
      {
        "timestamps": {
          "from": "00:05:55,680",
          "to": "00:06:00,360"
        },
        "offsets": {
          "from": 355680,
          "to": 360360
        },
        "text": "صغير تجرب فيه Docker وتلعب فيه شوية قبل ما نبدأ."
      },
      {
        "timestamps": {
          "from": "00:06:00,360",
          "to": "00:06:06,480"
        },
        "offsets": {
          "from": 360360,
          "to": 366480
        },
        "text": "ما تعملش مشكلة بس الفكرة إن في أوقات كتيرة بيبقى بيماكس."
      },
      {
        "timestamps": {
          "from": "00:06:06,480",
          "to": "00:06:12,960"
        },
        "offsets": {
          "from": 366480,
          "to": 372960
        },
        "text": "بقى مبيقبلش زيادة، وده طبيعي بيحصل فنعذر"
      },
      {
        "timestamps": {
          "from": "00:06:12,960",
          "to": "00:06:16,740"
        },
        "offsets": {
          "from": 372960,
          "to": 376740
        },
        "text": "الناس. لكن قبل ما تشتغل بيه لازم تعمل Login. الـ Login"
      },
      {
        "timestamps": {
          "from": "00:06:16,740",
          "to": "00:06:20,640"
        },
        "offsets": {
          "from": 376740,
          "to": 380640
        },
        "text": "بتاعك ده هيبقى Login بتاع Docker. فأنت لازم الأول تروح على"
      },
      {
        "timestamps": {
          "from": "00:06:20,640",
          "to": "00:06:29,340"
        },
        "offsets": {
          "from": 380640,
          "to": 389340
        },
        "text": "docker.com. ومن docker.com هنا تعمل Create لـ Docker"
      },
      {
        "timestamps": {
          "from": "00:06:29,340",
          "to": "00:06:34,200"
        },
        "offsets": {
          "from": 389340,
          "to": 394200
        },
        "text": "Docker Account. تمام؟ بعد ما تعمل Docker Account ده هتروح هنا"
      },
      {
        "timestamps": {
          "from": "00:06:34,200",
          "to": "00:06:39,060"
        },
        "offsets": {
          "from": 394200,
          "to": 399060
        },
        "text": "وتعمل Login بالـ Docker Account بتاعك. فأنا هعمل هنا Login بالأكونت"
      },
      {
        "timestamps": {
          "from": "00:06:39,060",
          "to": "00:06:41,700"
        },
        "offsets": {
          "from": 399060,
          "to": 401700
        },
        "text": "بتاعي. الأكونت بتاعي اسمه esami76. وده اللي"
      },
      {
        "timestamps": {
          "from": "00:06:41,700",
          "to": "00:06:46,320"
        },
        "offsets": {
          "from": 401700,
          "to": 406320
        },
        "text": "إنت هتشوف منه. ده اللي هيبقى بتاعي اللي إنت هتنزل منه الـ"
      },
      {
        "timestamps": {
          "from": "00:06:46,320",
          "to": "00:06:51,480"
        },
        "offsets": {
          "from": 406320,
          "to": 411480
        },
        "text": "Images اللي إحنا عاملينها. وهكتب الـ Password. أتمنى إن"
      },
      {
        "timestamps": {
          "from": "00:06:51,480",
          "to": "00:06:54,300"
        },
        "offsets": {
          "from": 411480,
          "to": 414300
        },
        "text": "أنا أكون فاكرها."
      },
      {
        "timestamps": {
          "from": "00:06:54,300",
          "to": "00:06:58,040"
        },
        "offsets": {
          "from": 414300,
          "to": 418040
        },
        "text": "مش محتاج أعمل Save."
      },
      {
        "timestamps": {
          "from": "00:06:59,340",
          "to": "00:07:03,780"
        },
        "offsets": {
          "from": 419340,
          "to": 423780
        },
        "text": "أتمنى يكون شغال. هو للأسف هتطلع لك رسالة زي"
      },
      {
        "timestamps": {
          "from": "00:07:03,780",
          "to": "00:07:07,440"
        },
        "offsets": {
          "from": 423780,
          "to": 427440
        },
        "text": "كده أحياناً، إننا دلوقتي Out of capacity."
      },
      {
        "timestamps": {
          "from": "00:07:07,440",
          "to": "00:07:11,520"
        },
        "offsets": {
          "from": 427440,
          "to": 431520
        },
        "text": "هوقف الفيديو وأستنى شوية وأجرب مرة تانية عشان نشتغل عليه قبل"
      },
      {
        "timestamps": {
          "from": "00:07:11,520",
          "to": "00:07:16,020"
        },
        "offsets": {
          "from": 431520,
          "to": 436020
        },
        "text": "ما نعمل Installation عشان أوريك شكله عامل إزاي. لو"
      },
      {
        "timestamps": {
          "from": "00:07:16,020",
          "to": "00:07:18,960"
        },
        "offsets": {
          "from": 436020,
          "to": 438960
        },
        "text": "استنيت عليه شوية، ساعة، ساعتين، يوم، يومين، أسبوع، أسبوعين"
      },
      {
        "timestamps": {
          "from": "00:07:18,960",
          "to": "00:07:21,840"
        },
        "offsets": {
          "from": 438960,
          "to": 441840
        },
        "text": "هتلاقيه فتح معانا. إحنا بس عايزين نجرب"
      },
      {
        "timestamps": {
          "from": "00:07:21,840",
          "to": "00:07:25,800"
        },
        "offsets": {
          "from": 441840,
          "to": 445800
        },
        "text": "Docker قبل ما نبدأ، لو حابب تجربه بنفسك قبل ما"
      },
      {
        "timestamps": {
          "from": "00:07:25,800",
          "to": "00:07:31,800"
        },
        "offsets": {
          "from": 445800,
          "to": 451800
        },
        "text": "تعمل Install، بعد ما يفتح معاك هيديك حوالي 4 ساعات إن"
      },
      {
        "timestamps": {
          "from": "00:07:31,800",
          "to": "00:07:36,900"
        },
        "offsets": {
          "from": 451800,
          "to": 456900
        },
        "text": "تقعد تلعب براحتك، ممكن تنزل أكتر كمان. فأول"
      },
      {
        "timestamps": {
          "from": "00:07:36,900",
          "to": "00:07:39,480"
        },
        "offsets": {
          "from": 456900,
          "to": 459480
        },
        "text": "حاجة تبدأ بيها، تقوله Add New Instance. لما تقوله Add New"
      },
      {
        "timestamps": {
          "from": "00:07:39,480",
          "to": "00:07:43,680"
        },
        "offsets": {
          "from": 459480,
          "to": 463680
        },
        "text": "Instance هيكريت لك Lab. خليني برضه أحاول"
      },
      {
        "timestamps": {
          "from": "00:07:43,680",
          "to": "00:07:48,960"
        },
        "offsets": {
          "from": 463680,
          "to": 468960
        },
        "text": "أكبر. شايف الـ Font ده بيكبر إزاي؟ شايف شكله مبيكبرش"
      },
      {
        "timestamps": {
          "from": "00:07:48,960",
          "to": "00:07:55,200"
        },
        "offsets": {
          "from": 468960,
          "to": 475200
        },
        "text": "بطريقة عادية. على قد ما قدرت. فده الـ Terminal بتاعي، لو"
      },
      {
        "timestamps": {
          "from": "00:07:55,200",
          "to": "00:08:00,840"
        },
        "offsets": {
          "from": 475200,
          "to": 480840
        },
        "text": "قلتله docker هيوريني الـ Client والـ Server. لو قلت"
      },
      {
        "timestamps": {
          "from": "00:08:00,840",
          "to": "00:08:06,360"
        },
        "offsets": {
          "from": 480840,
          "to": 486360
        },
        "text": "له docker info هيديني برضه معلومات عن الـ Client والـ Server وهتلاحظ إن أنا"
      },
      {
        "timestamps": {
          "from": "00:08:06,360",
          "to": "00:08:11,460"
        },
        "offsets": {
          "from": 486360,
          "to": 491460
        },
        "text": "هنا معنديش أي Images خالص. لو جيت قلت"
      },
      {
        "timestamps": {
          "from": "00:08:11,460",
          "to": "00:08:13,420"
        },
        "offsets": {
          "from": 491460,
          "to": 493420
        },
        "text": "له مثلاً docker run"
      },
      {
        "timestamps": {
          "from": "00:08:13,680",
          "to": "00:08:21,100"
        },
        "offsets": {
          "from": 493680,
          "to": 501100
        },
        "text": "Container -it"
      },
      {
        "timestamps": {
          "from": "00:08:21,100",
          "to": "00:08:27,500"
        },
        "offsets": {
          "from": 501100,
          "to": 507500
        },
        "text": "alpine:latest مثلاً. دي نسخة Linux، ومستعملة كتير جداً"
      },
      {
        "timestamps": {
          "from": "00:08:27,500",
          "to": "00:08:31,600"
        },
        "offsets": {
          "from": 507500,
          "to": 511600
        },
        "text": "في الـ Containers، لأنها فعلاً نسخة صغيرة. Linux"
      },
      {
        "timestamps": {
          "from": "00:08:31,600",
          "to": "00:08:35,200"
        },
        "offsets": {
          "from": 511600,
          "to": 515200
        },
        "text": "Image صغيرة جداً. الـ Size بتاعها 5 ميجا."
      },
      {
        "timestamps": {
          "from": "00:08:35,200",
          "to": "00:08:38,900"
        },
        "offsets": {
          "from": 515200,
          "to": 518900
        },
        "text": "فهقوله -it. والـ -it دي هنتكلم عليها بالتفصيل"
      },
      {
        "timestamps": {
          "from": "00:08:38,900",
          "to": "00:08:43,100"
        },
        "offsets": {
          "from": 518900,
          "to": 523100
        },
        "text": "أكتر. بس باختصار كده، -i معناها Interactive."
      },
      {
        "timestamps": {
          "from": "00:08:43,100",
          "to": "00:08:48,020"
        },
        "offsets": {
          "from": 523100,
          "to": 528020
        },
        "text": "والـ -t هي Terminal. الـ -it هي"
      },
      {
        "timestamps": {
          "from": "00:08:48,020",
          "to": "00:08:52,160"
        },
        "offsets": {
          "from": 528020,
          "to": 532160
        },
        "text": "Terminal. يعني خليني أدخل جوه الـ Container ووريني الـ Terminal بتاعة"
      },
      {
        "timestamps": {
          "from": "00:08:52,160",
          "to": "00:08:55,940"
        },
        "offsets": {
          "from": 532160,
          "to": 535940
        },
        "text": "الـ Container و Attach للـ Standard input و Output. خليني أتعامل مع"
      },
      {
        "timestamps": {
          "from": "00:08:55,940",
          "to": "00:09:01,820"
        },
        "offsets": {
          "from": 535940,
          "to": 541820
        },
        "text": "الـ Container ده. كأني عملت SSH على الـ Container"
      },
      {
        "timestamps": {
          "from": "00:09:01,820",
          "to": "00:09:08,720"
        },
        "offsets": {
          "from": 541820,
          "to": 548720
        },
        "text": "وشغلي جوه الـ Shell. بدوس Enter بيعمل Retrieve"
      },
      {
        "timestamps": {
          "from": "00:09:08,720",
          "to": "00:09:12,520"
        },
        "offsets": {
          "from": 548720,
          "to": 552520
        },
        "text": "الـ Image. وزي ما أنت شايف هيدخلني على Terminal mode."
      },
      {
        "timestamps": {
          "from": "00:09:12,520",
          "to": "00:09:16,780"
        },
        "offsets": {
          "from": 552520,
          "to": 556780
        },
        "text": "ده كده أنا جوه الـ Container. لو أنا جيت قولت له كده هيقول لي"
      },
      {
        "timestamps": {
          "from": "00:09:16,780",
          "to": "00:09:21,580"
        },
        "offsets": {
          "from": 556780,
          "to": 561580
        },
        "text": "الـ Container الـ Hostname بتاعه ده. والـ Host ده هو الـ Hostname"
      },
      {
        "timestamps": {
          "from": "00:09:21,580",
          "to": "00:09:26,200"
        },
        "offsets": {
          "from": 561580,
          "to": 566200
        },
        "text": "بتاع الـ Container. لو أنا قولت له مثلاً /etc/"
      },
      {
        "timestamps": {
          "from": "00:09:26,200",
          "to": "00:09:32,180"
        },
        "offsets": {
          "from": 566200,
          "to": 572180
        },
        "text": "release. عشان أجيب معلومات عن الـ Linux release ده، هيقول لي ده"
      },
      {
        "timestamps": {
          "from": "00:09:32,180",
          "to": "00:09:36,800"
        },
        "offsets": {
          "from": 572180,
          "to": 576800
        },
        "text": "الـ Version 3.15 Alpine Linux والـ URL والحاجات"
      },
      {
        "timestamps": {
          "from": "00:09:36,800",
          "to": "00:09:41,940"
        },
        "offsets": {
          "from": 576800,
          "to": 581940
        },
        "text": "دي. أقدر وأنا جوه هنا أقول له مثلاً ls فأشوف"
      },
      {
        "timestamps": {
          "from": "00:09:41,940",
          "to": "00:09:47,700"
        },
        "offsets": {
          "from": 581940,
          "to": 587700
        },
        "text": "الحاجات اللي موجودة. أقدر إن أنا أقول له echo مثلاً Hello."
      },
      {
        "timestamps": {
          "from": "00:09:47,700",
          "to": "00:09:52,260"
        },
        "offsets": {
          "from": 587700,
          "to": 592260
        },
        "text": "Containers. فهيكتب لي Hello Containers وهكذا. عشان أخرج بره"
      },
      {
        "timestamps": {
          "from": "00:09:52,260",
          "to": "00:09:55,860"
        },
        "offsets": {
          "from": 592260,
          "to": 595860
        },
        "text": "الـ Container ده هقول له exit. وده هيعمل Exit للـ Container. الـ Container كده الحالة"
      },
      {
        "timestamps": {
          "from": "00:09:55,860",
          "to": "00:10:01,620"
        },
        "offsets": {
          "from": 595860,
          "to": 601620
        },
        "text": "بتاعته اسمها Exited. لو جيت قولت له docker container -a"
      },
      {
        "timestamps": {
          "from": "00:10:01,620",
          "to": "00:10:03,960"
        },
        "offsets": {
          "from": 601620,
          "to": 603960
        },
        "text": "عشان يجيب لي كل الـ Containers اللي Running واللي مش Running. هيقول"
      },
      {
        "timestamps": {
          "from": "00:10:03,960",
          "to": "00:10:07,140"
        },
        "offsets": {
          "from": 603960,
          "to": 607140
        },
        "text": "لي إن فيه Container ده الـ ID بتاعه. وهتلاحظ إن الـ ID هو هو"
      },
      {
        "timestamps": {
          "from": "00:10:07,140",
          "to": "00:10:10,980"
        },
        "offsets": {
          "from": 607140,
          "to": 610980
        },
        "text": "نفسه الـ Hostname بتاع الـ Container. دي الـ Image بتاعته وده الـ Command اللي"
      },
      {
        "timestamps": {
          "from": "00:10:10,980",
          "to": "00:10:15,960"
        },
        "offsets": {
          "from": 610980,
          "to": 615960
        },
        "text": "كان Running من حوالي دقيقة. والحالة بتاعته دلوقتي Exited."
      },
      {
        "timestamps": {
          "from": "00:10:15,960",
          "to": "00:10:20,340"
        },
        "offsets": {
          "from": 615960,
          "to": 620340
        },
        "text": "وده الـ Name بتاعه. مش عارف الاسم ده إيه بالظبط."
      },
      {
        "timestamps": {
          "from": "00:10:20,340",
          "to": "00:10:25,620"
        },
        "offsets": {
          "from": 620340,
          "to": 625620
        },
        "text": "الاسم غريب وظريف. بالمثل برضه أقدر إن أنا أقول له"
      },
      {
        "timestamps": {
          "from": "00:10:25,620",
          "to": "00:10:36,560"
        },
        "offsets": {
          "from": 625620,
          "to": 636560
        },
        "text": "مثلاً docker container -it python."
      },
      {
        "timestamps": {
          "from": "00:10:36,560",
          "to": "00:10:43,980"
        },
        "offsets": {
          "from": 636560,
          "to": 643980
        },
        "text": "برضه هيجيب الـ Image بتاعة Python وهتشتغل في الـ Interactive"
      },
      {
        "timestamps": {
          "from": "00:10:43,980",
          "to": "00:10:48,360"
        },
        "offsets": {
          "from": 643980,
          "to": 648360
        },
        "text": "mode. وبعدين هنا إنت ممكن تتخيل إيه ممكن يكون الـ Interactive mode"
      },
      {
        "timestamps": {
          "from": "00:10:48,360",
          "to": "00:10:55,860"
        },
        "offsets": {
          "from": 648360,
          "to": 655860
        },
        "text": "بتاع الـ Image بتاعة Python. ببساطة هتبقى الـ Python Interpreter اللي"
      },
      {
        "timestamps": {
          "from": "00:10:55,860",
          "to": "00:10:59,400"
        },
        "offsets": {
          "from": 655860,
          "to": 659400
        },
        "text": "هو الـ REPL mode بتاع Python. هتلاحظ إن الـ Image دي المرة دي"
      },
      {
        "timestamps": {
          "from": "00:10:59,400",
          "to": "00:11:05,980"
        },
        "offsets": {
          "from": 659400,
          "to": 665980
        },
        "text": "أكبر شوية وأتقل شوية لأنها مش مجرد Image عادية."
      },
      {
        "timestamps": {
          "from": "00:11:05,980",
          "to": "00:11:10,780"
        },
        "offsets": {
          "from": 665980,
          "to": 670780
        },
        "text": "لا دي Image نازل فيها حاجات كتير، نازل فيها شوية"
      },
      {
        "timestamps": {
          "from": "00:11:10,780",
          "to": "00:11:15,400"
        },
        "offsets": {
          "from": 670780,
          "to": 675400
        },
        "text": "Python وحاجات تانية كتير. هتلاحظ إنه"
      },
      {
        "timestamps": {
          "from": "00:11:15,400",
          "to": "00:11:20,020"
        },
        "offsets": {
          "from": 675400,
          "to": 680020
        },
        "text": "مدخلني على الـ Python Interactive mode، وقال لي إن ده Python"
      },
      {
        "timestamps": {
          "from": "00:11:20,020",
          "to": "00:11:24,400"
        },
        "offsets": {
          "from": 680020,
          "to": 684400
        },
        "text": "مثلاً 3.10.2. هاجي هنا أقدر برضه كالعادة"
      },
      {
        "timestamps": {
          "from": "00:11:24,400",
          "to": "00:11:35,980"
        },
        "offsets": {
          "from": 684400,
          "to": 695980
        },
        "text": "أقول له مثلاً print('Hello Python Container')."
      },
      {
        "timestamps": {
          "from": "00:11:35,980",
          "to": "00:11:40,540"
        },
        "offsets": {
          "from": 695980,
          "to": 700540
        },
        "text": "عشان أتأكد إنه شغال. وبعدين أقول له exit() فهيقوم خارج"
      },
      {
        "timestamps": {
          "from": "00:11:40,540",
          "to": "00:11:46,300"
        },
        "offsets": {
          "from": 700540,
          "to": 706300
        },
        "text": "بره الـ Container خالص. بمجرد ما خرجت من الـ Python خرجت"
      },
      {
        "timestamps": {
          "from": "00:11:46,300",
          "to": "00:11:50,500"
        },
        "offsets": {
          "from": 706300,
          "to": 710500
        },
        "text": "بره الـ Container خالص. كالعادة برضه لو قلت له docker container"
      },
      {
        "timestamps": {
          "from": "00:11:50,500",
          "to": "00:11:57,040"
        },
        "offsets": {
          "from": 710500,
          "to": 717040
        },
        "text": "لو جيت قولت له docker images عشان نشوف الـ Images"
      },
      {
        "timestamps": {
          "from": "00:11:57,040",
          "to": "00:12:00,520"
        },
        "offsets": {
          "from": 717040,
          "to": 720520
        },
        "text": "اللي موجودة هيقول لي إنت عندك واحدة الـ Alpine والتانية"
      },
      {
        "timestamps": {
          "from": "00:12:00,520",
          "to": "00:12:05,980"
        },
        "offsets": {
          "from": 720520,
          "to": 725980
        },
        "text": "بتاعة الـ Python. والـ Image دي كانت Created في المكان اللي"
      },
      {
        "timestamps": {
          "from": "00:12:05,980",
          "to": "00:12:09,580"
        },
        "offsets": {
          "from": 725980,
          "to": 729580
        },
        "text": "أنا سحبتها منه والـ Size بتاعها. لاحظ إن الفرق في الـ Size"
      },
      {
        "timestamps": {
          "from": "00:12:09,580",
          "to": "00:12:16,060"
        },
        "offsets": {
          "from": 729580,
          "to": 736060
        },
        "text": "عامل إزاي؟ الـ Alpine Image حوالي 5.5 ميجا تقريباً، والـ Python"
      },
      {
        "timestamps": {
          "from": "00:12:16,060",
          "to": "00:12:20,560"
        },
        "offsets": {
          "from": 736060,
          "to": 740560
        },
        "text": "Image حوالي 1 جيجا بايت. أوكيه؟ لأن طبعاً واضح"
      },
      {
        "timestamps": {
          "from": "00:12:20,560",
          "to": "00:12:26,980"
        },
        "offsets": {
          "from": 740560,
          "to": 746980
        },
        "text": "إن الفرق في محتويات الـ Image دي أو عدد الـ Layers اللي جواها."
      },
      {
        "timestamps": {
          "from": "00:12:26,980",
          "to": "00:12:31,540"
        },
        "offsets": {
          "from": 746980,
          "to": 751540
        },
        "text": "من الحاجات اللي أقدر أعملها برضه"
      },
      {
        "timestamps": {
          "from": "00:12:31,540",
          "to": "00:12:35,560"
        },
        "offsets": {
          "from": 751540,
          "to": 755560
        },
        "text": "إن أنا آجي هنا أقول له مثلاً خلينا نجيب Image"
      },
      {
        "timestamps": {
          "from": "00:12:35,560",
          "to": "00:12:40,000"
        },
        "offsets": {
          "from": 755560,
          "to": 760000
        },
        "text": "فيها Web Service. مثلاً حاجة زي Nginx. الـ Nginx ده عبارة"
      },
      {
        "timestamps": {
          "from": "00:12:40,000",
          "to": "00:12:44,920"
        },
        "offsets": {
          "from": 760000,
          "to": 764920
        },
        "text": "عن Web Service، أو هو مش Web Service بس، هو في الحقيقة Internet"
      },
      {
        "timestamps": {
          "from": "00:12:44,920",
          "to": "00:12:49,420"
        },
        "offsets": {
          "from": 764920,
          "to": 769420
        },
        "text": "Information Server. ده عبارة عن Web Service و Load Balancer وفي"
      },
      {
        "timestamps": {
          "from": "00:12:49,420",
          "to": "00:12:54,760"
        },
        "offsets": {
          "from": 769420,
          "to": 774760
        },
        "text": "حاجة زي الـ IIS بتاع Microsoft مثلاً."
      },
      {
        "timestamps": {
          "from": "00:12:54,760",
          "to": "00:12:58,700"
        },
        "offsets": {
          "from": 774760,
          "to": 778700
        },
        "text": "بس هو Open Source ومستعمل كتير جداً في"
      },
      {
        "timestamps": {
          "from": "00:12:58,700",
          "to": "00:13:28,680"
        },
        "offsets": {
          "from": 778700,
          "to": 808680
        },
        "text": "هقوله docker container run -it عشان أدخل جوه الـ container، برضه لو أنا محتاج ده، بس أنا عايز أخلي الـ container ده يرن في الـ background لأنه هيعملي Web Service. فلو فتحت الـ container في الـ Interactive Mode هيفتحلي الـ logs بتاعة الـ web وأنا مش عايز كده، أنا عايزه يرن في الـ background يشغل الـ Web Service وأقدر استعمل الـ Web Service اللي في الـ container."
      },
      {
        "timestamps": {
          "from": "00:13:28,680",
          "to": "00:13:58,240"
        },
        "offsets": {
          "from": 808680,
          "to": 838240
        },
        "text": "وهو Running هقوله -d (dash d)، ودي اللي هي Detached Mode يعني متدخلنيش جوه الـ container، وده عكس الـ -it. أنا عايزه يشتغل في الـ background مش عايز أشتغل معاه Interactively، فالـ -d هي عكس الـ -it. هقوله docker container run -d وكمان هعمل Mapping للـ ports 80 على 80، دي Web Service بتشتغل على Port 80. الـ -p بيعمل Mapping للـ ports."
      },
      {
        "timestamps": {
          "from": "00:13:58,660",
          "to": "00:14:27,000"
        },
        "offsets": {
          "from": 838660,
          "to": 867000
        },
        "text": "بيعمل Mapping للـ Port 80 جوه الـ container لـ Port 80 في الـ Docker Host أو الماشين اللي شغال عليها الـ Docker Engine. أي حاجة على الماشين (الـ Docker Host) على Port 80 يحولها للـ container اللي هكريته على Port 80. كأنه بيعمل Expose للـ Port من جوه الـ container لبره للـ Host. هقوله Nginx."
      },
      {
        "timestamps": {
          "from": "00:14:27,000",
          "to": "00:14:39,180"
        },
        "offsets": {
          "from": 867000,
          "to": 879180
        },
        "text": "latest وأدوس Enter. هتلاحظ إنه بعد ما يخلص هتلاقي إنه"
      },
      {
        "timestamps": {
          "from": "00:14:39,180",
          "to": "00:14:45,300"
        },
        "offsets": {
          "from": 879180,
          "to": 885300
        },
        "text": "مش هيعمل أي حاجة وهيرجعني للـ Terminal عادي جداً. لما أرجع"
      },
      {
        "timestamps": {
          "from": "00:14:45,300",
          "to": "00:14:51,000"
        },
        "offsets": {
          "from": 885300,
          "to": 891000
        },
        "text": "للـ Host لو قولتله docker container ls هيقولي إنت عندك"
      },
      {
        "timestamps": {
          "from": "00:14:51,000",
          "to": "00:14:56,160"
        },
        "offsets": {
          "from": 891000,
          "to": 896160
        },
        "text": "container، ده الـ ID بتاعه والـ Image بتاعته Nginx."
      },
      {
        "timestamps": {
          "from": "00:14:56,160",
          "to": "00:15:00,000"
        },
        "offsets": {
          "from": 896160,
          "to": 900000
        },
        "text": "وفي Docker Entrypoint script بيشغل الـ service."
      },
      {
        "timestamps": {
          "from": "00:15:00,000",
          "to": "00:15:05,580"
        },
        "offsets": {
          "from": 900000,
          "to": 905580
        },
        "text": "من 7 ثواني وهو بقاله 5 ثواني. والـ Ports اللي هي"
      },
      {
        "timestamps": {
          "from": "00:15:05,580",
          "to": "00:15:11,040"
        },
        "offsets": {
          "from": 905580,
          "to": 911040
        },
        "text": "أربع أصفار، يعني أي حاجة Exposed من Port 80 لـ Port 80. من Port"
      },
      {
        "timestamps": {
          "from": "00:15:11,040",
          "to": "00:15:14,160"
        },
        "offsets": {
          "from": 911040,
          "to": 914160
        },
        "text": "80 جوه الـ container لـ Port 80 على الـ Host. بمعنى إني لو جيت"
      },
      {
        "timestamps": {
          "from": "00:15:14,160",
          "to": "00:15:18,960"
        },
        "offsets": {
          "from": 914160,
          "to": 918960
        },
        "text": "قولتله كده، طبعاً أنا في الـ Host ده معنديش"
      },
      {
        "timestamps": {
          "from": "00:15:18,960",
          "to": "00:15:22,020"
        },
        "offsets": {
          "from": 918960,
          "to": 922020
        },
        "text": "Web Browser جوه الـ Host، أنا فاتح الـ Terminal بس. فلو"
      },
      {
        "timestamps": {
          "from": "00:15:22,020",
          "to": "00:15:25,680"
        },
        "offsets": {
          "from": 922020,
          "to": 925680
        },
        "text": "جيت قولتله مثلاً curl، هلاقي الـ curl نازل. curl HTTP"
      },
      {
        "timestamps": {
          "from": "00:15:25,680",
          "to": "00:15:31,980"
        },
        "offsets": {
          "from": 925680,
          "to": 931980
        },
        "text": "localhost، و Port 80 هو الـ Default. ودوست Enter"
      },
      {
        "timestamps": {
          "from": "00:15:31,980",
          "to": "00:15:37,620"
        },
        "offsets": {
          "from": 931980,
          "to": 937620
        },
        "text": "هلاقي بيدي ريسبونس، وهتلاقي في"
      },
      {
        "timestamps": {
          "from": "00:15:37,620",
          "to": "00:15:44,640"
        },
        "offsets": {
          "from": 937620,
          "to": 944640
        },
        "text": "الـ Response هنا باين إنه Nginx أو"
      },
      {
        "timestamps": {
          "from": "00:15:44,640",
          "to": "00:15:51,360"
        },
        "offsets": {
          "from": 944640,
          "to": 951360
        },
        "text": "حاجة زي كده. ده Response من Port 80 من الـ Host"
      },
      {
        "timestamps": {
          "from": "00:15:51,360",
          "to": "00:15:55,380"
        },
        "offsets": {
          "from": 951360,
          "to": 955380
        },
        "text": "نفسه، وأنا شغال على الـ Host. ليه ده ظاهر؟"
      },
      {
        "timestamps": {
          "from": "00:15:55,380",
          "to": "00:15:58,440"
        },
        "offsets": {
          "from": 955380,
          "to": 958440
        },
        "text": "علشان الـ container رانينج (Running). لو حبيت أعمل Stop للـ container وجيت"
      },
      {
        "timestamps": {
          "from": "00:15:58,440",
          "to": "00:16:04,140"
        },
        "offsets": {
          "from": 958440,
          "to": 964140
        },
        "text": "وقولتله docker stop، مش فاكر الـ Container ID كان كام؟"
      },
      {
        "timestamps": {
          "from": "00:16:04,140",
          "to": "00:16:10,080"
        },
        "offsets": {
          "from": 964140,
          "to": 970080
        },
        "text": "نشوف اسم الـ container أو الـ ID بتاعه."
      },
      {
        "timestamps": {
          "from": "00:16:10,080",
          "to": "00:16:14,460"
        },
        "offsets": {
          "from": 970080,
          "to": 974460
        },
        "text": "مش راضي يعمل Scroll ليه؟"
      },
      {
        "timestamps": {
          "from": "00:16:14,640",
          "to": "00:16:21,060"
        },
        "offsets": {
          "from": 974640,
          "to": 981060
        },
        "text": "أطلع فوق هنا، docker container. الـ Scroll مهنج عندي."
      },
      {
        "timestamps": {
          "from": "00:16:21,060",
          "to": "00:16:25,060"
        },
        "offsets": {
          "from": 981060,
          "to": 985060
        },
        "text": "مش مشكلة، لو جيت قولتله docker container."
      },
      {
        "timestamps": {
          "from": "00:12:35,560",
          "to": "00:12:40,000"
        },
        "offsets": {
          "from": 755560,
          "to": 760000
        },
        "text": "docker container ls مرة تانية. ممكن أستعمل الاسم وممكن"
      },
      {
        "timestamps": {
          "from": "00:16:34,300",
          "to": "00:16:38,260"
        },
        "offsets": {
          "from": 994300,
          "to": 998260
        },
        "text": "أستعمل الـ ID. فممكن أستعمل الاسم أو الـ ID"
      },
      {
        "timestamps": {
          "from": "00:16:38,260",
          "to": "00:16:43,980"
        },
        "offsets": {
          "from": 998260,
          "to": 1003980
        },
        "text": "مثلاً 39d. هاجي أقوله docker container stop"
      },
      {
        "timestamps": {
          "from": "00:16:44,640",
          "to": "00:16:52,080"
        },
        "offsets": {
          "from": 1004640,
          "to": 1012080
        },
        "text": "39d. كده الـ container وقف. لو عملت docker container"
      },
      {
        "timestamps": {
          "from": "00:16:52,080",
          "to": "00:16:55,380"
        },
        "offsets": {
          "from": 1012080,
          "to": 1015380
        },
        "text": "ls مش هلاقيه، لأنه بقى Stopped Container. لو"
      },
      {
        "timestamps": {
          "from": "00:16:55,380",
          "to": "00:16:59,220"
        },
        "offsets": {
          "from": 1015380,
          "to": 1019220
        },
        "text": "دوست -a هلاقيه. لو المرة دي حاولت أعمل تاني"
      },
      {
        "timestamps": {
          "from": "00:16:59,220",
          "to": "00:17:05,100"
        },
        "offsets": {
          "from": 1019220,
          "to": 1025100
        },
        "text": "curl لـ Port 80 من على الـ Host هيديني fail. لأن"
      },
      {
        "timestamps": {
          "from": "00:17:05,100",
          "to": "00:17:10,180"
        },
        "offsets": {
          "from": 1025100,
          "to": 1030180
        },
        "text": "الـ container بقى Stopped. لو رحت بصيت على الـ Images بـ docker image"
      },
      {
        "timestamps": {
          "from": "00:17:10,180",
          "to": "00:17:14,080"
        },
        "offsets": {
          "from": 1030180,
          "to": 1034080
        },
        "text": "ls، هيوريني إن عندي 3 Images: الـ Python والـ Nginx"
      },
      {
        "timestamps": {
          "from": "00:17:14,080",
          "to": "00:17:17,140"
        },
        "offsets": {
          "from": 1034080,
          "to": 1037140
        },
        "text": "والـ Alpine اللي نزلناه. ده كده بسرعة عشان نشوف الـ images."
      },
      {
        "timestamps": {
          "from": "00:17:17,140",
          "to": "00:17:22,300"
        },
        "offsets": {
          "from": 1037140,
          "to": 1042300
        },
        "text": "العب مع Docker وأشوف الدنيا شغالة إزاي من غير"
      },
      {
        "timestamps": {
          "from": "00:17:22,300",
          "to": "00:17:25,960"
        },
        "offsets": {
          "from": 1042300,
          "to": 1045960
        },
        "text": "محتاج إني أنزل Docker عندي."
      }
    ]
  },
  {
    "id": 5,
    "title": "Installing Docker",
    "duration": 1179.0,
    "isReady": true,
    "transcription": [
      {
        "timestamps": {
          "from": "00:00:00,000",
          "to": "00:00:08,180"
        },
        "offsets": {
          "from": 0,
          "to": 8180
        },
        "text": "طيب تعالوا بقى نشوف نعمل Installation إزاي locally لـ Docker علشان نبدأ نشتغل مع الـ Containers."
      },
      {
        "timestamps": {
          "from": "00:00:08,180",
          "to": "00:00:15,280"
        },
        "offsets": {
          "from": 8180,
          "to": 15280
        },
        "text": "دلوقتي إحنا زي ما قولنا قبل كده Docker فيه منه 3 حاجات ممكن تعمل Installation بيها."
      },
      {
        "timestamps": {
          "from": "00:00:15,280",
          "to": "00:00:19,920"
        },
        "offsets": {
          "from": 15280,
          "to": 19920
        },
        "text": "عندك Docker Desktop for Mac وعندك for Windows وعندك Docker for Linux."
      },
      {
        "timestamps": {
          "from": "00:00:19,920",
          "to": "00:00:21,760"
        },
        "offsets": {
          "from": 19920,
          "to": 21760
        },
        "text": "ما فيش Linux Docker Desktop."
      },
      {
        "timestamps": {
          "from": "00:00:21,760",
          "to": "00:00:27,320"
        },
        "offsets": {
          "from": 21760,
          "to": 27320
        },
        "text": "الطريقة اللي كنت بعمل بيها Installation هي إنك تروح على الـ Website بتاع Docker."
      },
      {
        "timestamps": {
          "from": "00:00:27,320",
          "to": "00:00:32,380"
        },
        "offsets": {
          "from": 27320,
          "to": 32380
        },
        "text": "أو اكتب حتى في الـ Search في Google بتاعك، اكتب Get Docker."
      },
      {
        "timestamps": {
          "from": "00:00:32,380",
          "to": "00:00:37,580"
        },
        "offsets": {
          "from": 32380,
          "to": 37580
        },
        "text": "فهيدخلك على الـ Page دي، هنروح على Docker for Linux."
      },
      {
        "timestamps": {
          "from": "00:00:37,580",
          "to": "00:00:42,160"
        },
        "offsets": {
          "from": 37580,
          "to": 42160
        },
        "text": "هتختار الـ Distro بتاعتك اللي هتعمل عليها Installation، أنا هختار Ubuntu."
      },
      {
        "timestamps": {
          "from": "00:00:42,160",
          "to": "00:00:49,840"
        },
        "offsets": {
          "from": 42160,
          "to": 49840
        },
        "text": "تأكد إن الـ Installation بتاعك أو الـ Version بتاعك أو الـ Distro بتاعتك بتاعت Linux موجودة هنا."
      },
      {
        "timestamps": {
          "from": "00:00:49,840",
          "to": "00:00:55,780"
        },
        "offsets": {
          "from": 49840,
          "to": 55780
        },
        "text": "أنا عندي ده الـ Version اللي موجود عندي للـ Distro بتاعت Ubuntu."
      },
      {
        "timestamps": {
          "from": "00:00:55,780",
          "to": "00:00:57,160"
        },
        "offsets": {
          "from": 55780,
          "to": 57160
        },
        "text": "وهتلاقي كالعادة،"
      },
      {
        "timestamps": {
          "from": "00:00:57,320",
          "to": "00:01:03,080"
        },
        "offsets": {
          "from": 57320,
          "to": 63080
        },
        "text": "كالعادة في Linux أكتر من طريقة تعمل بيها الـ Installation، ممكن تعمل Installation من Debian package نفسها، تعمل لها Download و Install."
      },
      {
        "timestamps": {
          "from": "00:01:03,080",
          "to": "00:01:10,140"
        },
        "offsets": {
          "from": 63080,
          "to": 70140
        },
        "text": "ممكن تعمل Installation واحدة واحدة كده، وهتلاقي أول خطوة إنك تشيل أي Version قديم من Docker موجود."
      },
      {
        "timestamps": {
          "from": "00:01:10,140",
          "to": "00:01:17,940"
        },
        "offsets": {
          "from": 70140,
          "to": 77940
        },
        "text": "كان فيه Version قديم اسمه docker.io بينزل مع الـ Distro بتاعت Linux، تأكد إنك شايله لأن الـ Version الجديد بقى اسمه Docker CE أو Community Edition."
      },
      {
        "timestamps": {
          "from": "00:01:17,940",
          "to": "00:01:26,720"
        },
        "offsets": {
          "from": 77940,
          "to": 86720
        },
        "text": "وبعد كده هتمشي خطوة خطوة في الـ Installation، تنزل الـ Requirements الأول، الـ Required packages الأول، وبعد كده تنزل الـ GPG وكلام من ده."
      },
      {
        "timestamps": {
          "from": "00:01:26,720",
          "to": "00:01:34,220"
        },
        "offsets": {
          "from": 86720,
          "to": 94220
        },
        "text": "والخطوات دي هتلاقيها موجودة عندك في الـ Notebook، وفيه كمان طريقة سهلة أنا بشوفها أظرف لو حابب."
      },
      {
        "timestamps": {
          "from": "00:01:34,220",
          "to": "00:01:44,140"
        },
        "offsets": {
          "from": 94220,
          "to": 104140
        },
        "text": "اللي هي إنك تستعمل Shell script هما عاملينها، الـ Shell script دي اسمها get-docker، وهي اللي هتعمل الـ Installation وهتعمل Check على"
      },
      {
        "timestamps": {
          "from": "00:01:44,140",
          "to": "00:01:51,500"
        },
        "offsets": {
          "from": 104140,
          "to": 111500
        },
        "text": "الـ Requirements، لو مش موجودة هتعمل لها Installation، لو موجودة خلاص، وتتأكد من الـ Version بتاعك بتاع Linux."
      },
      {
        "timestamps": {
          "from": "00:01:51,500",
          "to": "00:02:02,980"
        },
        "offsets": {
          "from": 111500,
          "to": 122980
        },
        "text": "بتاع Ubuntu، وتعمل لك الـ Proper Installation، وتعمل Download للـ Binaries والـ Installation بتاعها. فهاجي هنا هختار Copy للـ Docker script."
      },
      {
        "timestamps": {
          "from": "00:02:02,980",
          "to": "00:02:16,740"
        },
        "offsets": {
          "from": 122980,
          "to": 136740
        },
        "text": "ممكن تشوف الـ Docker script تعمل لها Download وتشوفها لو حبيت تبص عليها، وبعدين هنروح نفتح الـ Terminal."
      },
      {
        "timestamps": {
          "from": "00:02:16,740",
          "to": "00:02:30,940"
        },
        "offsets": {
          "from": 136740,
          "to": 150940
        },
        "text": "نكبر الـ Terminal دي شوية كده ونعمل الـ Installation عادي، Download الأول للـ Script وبعد كده نكتب.."
      },
      {
        "timestamps": {
          "from": "00:02:31,740",
          "to": "00:02:37,860"
        },
        "offsets": {
          "from": 151740,
          "to": 157860
        },
        "text": "مش هتاخد أكتر من دقيقة، والميزة كمان في الـ Script دي إنها مابتسألكش على أي حاجة خالص، هي"
      },
      {
        "timestamps": {
          "from": "00:02:37,860",
          "to": "00:02:49,980"
        },
        "offsets": {
          "from": 157860,
          "to": 169980
        },
        "text": "Silent تماماً، هتعمل Check على كل حاجة، تتأكد من الـ Version، وتعمل الحاجات اللي ناقصة لـ Docker."
      },
      {
        "timestamps": {
          "from": "00:02:49,980",
          "to": "00:03:00,100"
        },
        "offsets": {
          "from": 169980,
          "to": 180100
        },
        "text": "الـ Script دي لما تخلص، هنحتاج نتأكد إن الـ Installation تم صح، وبعدين نمشي واحدة واحدة في الشغل مع الـ Images والـ Containers."
      },
      {
        "timestamps": {
          "from": "00:03:00,100",
          "to": "00:03:07,860"
        },
        "offsets": {
          "from": 180100,
          "to": 187860
        },
        "text": "وهنرجع تاني نتكلم في حتة أخيرة عن الـ Architecture قبل ما نبدأ نكمل شغل على طول في الـ Commands."
      },
      {
        "timestamps": {
          "from": "00:03:07,860",
          "to": "00:03:20,900"
        },
        "offsets": {
          "from": 187860,
          "to": 200900
        },
        "text": "بعد ما الـ Installation يخلص، بيبعتلك رسالة تقول لك إن الـ Installation خلص، وفيه كمان رسالة مهمة ليها علاقة بموضوع الـ Privileged user."
      },
      {
        "timestamps": {
          "from": "00:03:20,900",
          "to": "00:03:27,360"
        },
        "offsets": {
          "from": 200900,
          "to": 207360
        },
        "text": "هنا بيقول لك: To run Docker as a non-privileged user, consider setting up Docker daemon in rootless mode for your user."
      },
      {
        "timestamps": {
          "from": "00:03:27,360",
          "to": "00:03:37,360"
        },
        "offsets": {
          "from": 207360,
          "to": 217360
        },
        "text": "فيه هنا نقطة، لو تفتكر إحنا اتكلمنا إن Docker أو الـ Containers بشكل عام بتشتغل مع الـ Kernel بتاع الـ Operating System بتاعك."
      },
      {
        "timestamps": {
          "from": "00:03:37,360",
          "to": "00:03:47,360"
        },
        "offsets": {
          "from": 217360,
          "to": 227360
        },
        "text": "أنا عندي هنا Virtual Machine اللي هي Apollo، والـ Virtual Machine دي الـ Docker Containers اللي هتشتغل عليها هتشتغل من الـ Kernel بتاع الـ Linux بتاع الـ Apollo VM دي."
      },
      {
        "timestamps": {
          "from": "00:03:47,360",
          "to": "00:03:58,360"
        },
        "offsets": {
          "from": 227360,
          "to": 238360
        },
        "text": "علشان تشتغل بالـ Kernel هتحتاج طول الوقت تقريباً إنك تشتغل بـ Privileged account، يعني هتشتغل بـ Sudo privileges."
      },
      {
        "timestamps": {
          "from": "00:03:58,360",
          "to": "00:04:06,860"
        },
        "offsets": {
          "from": 238360,
          "to": 246860
        },
        "text": "علشان نتخلص من ده فيه حل، بس خليني أوريك الأول شكل المشكلة بعد ما خلصت الـ Installation."
      },
      {
        "timestamps": {
          "from": "00:04:06,860",
          "to": "00:04:16,460"
        },
        "offsets": {
          "from": 246860,
          "to": 256460
        },
        "text": "لو روحت كتبت docker info مثلاً، هيقولي الـ Client وهيديني رد من الـ Client بيوريني"
      },
      {
        "timestamps": {
          "from": "00:04:16,460",
          "to": "00:04:22,360"
        },
        "offsets": {
          "from": 256460,
          "to": 262360
        },
        "text": "الـ Version بتاع الـ Client، ودايماً Docker ليه 2 Components، عندي Client component وعندي Server component."
      },
      {
        "timestamps": {
          "from": "00:04:22,360",
          "to": "00:04:30,160"
        },
        "offsets": {
          "from": 262360,
          "to": 270160
        },
        "text": "الـ Server component أو الـ Daemon component ده اللي هو Docker Daemon، وده المسؤول عن الـ General configuration وهو اللي بيكريت"
      },
      {
        "timestamps": {
          "from": "00:04:30,160",
          "to": "00:04:36,360"
        },
        "offsets": {
          "from": 270160,
          "to": 276360
        },
        "text": "الـ Containers وغيرها. الـ Client component دي اللي هي الـ Command lines اللي بنشتغل بيها علشان"
      },
      {
        "timestamps": {
          "from": "00:04:36,360",
          "to": "00:04:42,660"
        },
        "offsets": {
          "from": 276360,
          "to": 282660
        },
        "text": "نعمل Build لـ Image، Run لـ Container، Stop لـ Container.. الـ Command lines دي هي الـ Client."
      },
      {
        "timestamps": {
          "from": "00:04:42,660",
          "to": "00:04:48,960"
        },
        "offsets": {
          "from": 282660,
          "to": 288960
        },
        "text": "هتلاحظ هنا إن في الجزء بتاع السيرفر بيقولي: Error got permission denied."
      },
      {
        "timestamps": {
          "from": "00:04:48,960",
          "to": "00:05:00,860"
        },
        "offsets": {
          "from": 288960,
          "to": 300860
        },
        "text": "وهو بيحاول يأكسس docker.sock، وده الـ Daemon component أو الـ API بتاعت Docker اللي بتستقبل"
      },
      {
        "timestamps": {
          "from": "00:05:00,860",
          "to": "00:05:05,860"
        },
        "offsets": {
          "from": 300860,
          "to": 305860
        },
        "text": "الـ Commands بتاعتك، زي Docker container أو Docker image، أياً كانت الـ Commands اللي بتستقبلها."
      },
      {
        "timestamps": {
          "from": "00:05:05,860",
          "to": "00:05:16,360"
        },
        "offsets": {
          "from": 305860,
          "to": 316360
        },
        "text": "وعلشان ده يتنفذ ويشتغل، محتاج أقوله في الأول sudo docker info، ساعتها هتلاقيه قادر يشتغل."
      },
      {
        "timestamps": {
          "from": "00:05:16,360",
          "to": "00:05:23,260"
        },
        "offsets": {
          "from": 316360,
          "to": 323260
        },
        "text": "وهيوريك رد الـ Server component، وهيوريك عدد الـ containers اللي موجودين، مين فيهم up and running ومين فيهم مش running، وعدد"
      },
      {
        "timestamps": {
          "from": "00:05:23,260",
          "to": "00:05:31,060"
        },
        "offsets": {
          "from": 323260,
          "to": 331060
        },
        "text": "الـ images اللي موجودة وإلى آخره. طالما الـ client بيرد عليّ والـ Server بيرد عليّ، يبقى كده Docker شغال عندك"
      },
      {
        "timestamps": {
          "from": "00:05:31,060",
          "to": "00:05:35,360"
        },
        "offsets": {
          "from": 331060,
          "to": 335360
        },
        "text": "صح والدنيا okay بالنسبة لي. لو عايز أتخلص من فكرة إن أنا كل ما"
      },
      {
        "timestamps": {
          "from": "00:05:35,360",
          "to": "00:05:45,360"
        },
        "offsets": {
          "from": 335360,
          "to": 345360
        },
        "text": "أجي أكتب command أقول له sudo docker كذا sudo docker كذا، فحل من الحلول غير إن أنا أشتغل بالـ root user، يعني حل"
      },
      {
        "timestamps": {
          "from": "00:05:45,360",
          "to": "00:05:51,360"
        },
        "offsets": {
          "from": 345360,
          "to": 351360
        },
        "text": "من الحلول إن أنا أحط الـ user account بتاعي في group اسمها docker. الـ Docker بعد ما بيعمل الـ installation بيعمل group اسمها"
      },
      {
        "timestamps": {
          "from": "00:05:51,360",
          "to": "00:06:00,160"
        },
        "offsets": {
          "from": 351360,
          "to": 360160
        },
        "text": "docker، خليني أوريك الـ group دي، لو قلت له sudo getent group، هتلاقي إن فيه group اسمها"
      },
      {
        "timestamps": {
          "from": "00:06:00,160",
          "to": "00:06:04,860"
        },
        "offsets": {
          "from": 360160,
          "to": 364860
        },
        "text": "docker هنا. اللي أنا محتاج أعمله إن الـ user account بتاعي ده محتاج أحطه"
      },
      {
        "timestamps": {
          "from": "00:06:04,860",
          "to": "00:06:09,660"
        },
        "offsets": {
          "from": 364860,
          "to": 369660
        },
        "text": "في الـ group دي. عشان تتأكد برضه من الـ groups اللي موجودة عندك، لو قلت له"
      },
      {
        "timestamps": {
          "from": "00:06:09,660",
          "to": "00:06:14,360"
        },
        "offsets": {
          "from": 369660,
          "to": 374360
        },
        "text": "groups، هيوريك كل الـ groups اللي الـ user account بتاعك member فيها، فهتلاقي عندنا"
      },
      {
        "timestamps": {
          "from": "00:06:14,360",
          "to": "00:06:22,860"
        },
        "offsets": {
          "from": 374360,
          "to": 382860
        },
        "text": "معنديش docker هنا. عشان أضيف الـ account بتاعي للـ docker group هقول له sudo usermod -"
      },
      {
        "timestamps": {
          "from": "00:06:22,860",
          "to": "00:06:29,860"
        },
        "offsets": {
          "from": 382860,
          "to": 389860
        },
        "text": "aG وادي له اسم الـ group وبعدين اسم الـ user account. لو عملت groups مرة"
      },
      {
        "timestamps": {
          "from": "00:06:29,860",
          "to": "00:06:34,860"
        },
        "offsets": {
          "from": 389860,
          "to": 394860
        },
        "text": "تانية مش هلاقي حاجة، لأني محتاج أعمل restart للـ machine أو أعمل log off"
      },
      {
        "timestamps": {
          "from": "00:06:34,860",
          "to": "00:06:44,560"
        },
        "offsets": {
          "from": 394860,
          "to": 404560
        },
        "text": "مرة تانية علشان ياخد الـ token بتاع الـ group دي، لكن لو قلت تاني sudo getent group"
      },
      {
        "timestamps": {
          "from": "00:06:44,560",
          "to": "00:06:47,860"
        },
        "offsets": {
          "from": 404560,
          "to": 407860
        },
        "text": "هتلاقي دلوقتي إن الـ group اللي اسمها docker بقى فيها الـ account اللي اسمه سامي"
      },
      {
        "timestamps": {
          "from": "00:06:47,860",
          "to": "00:06:52,060"
        },
        "offsets": {
          "from": 407860,
          "to": 412060
        },
        "text": "فالمفروض دلوقتي اللي هنعمله إني هعمل log off أو restart علشان"
      },
      {
        "timestamps": {
          "from": "00:06:52,060",
          "to": "00:07:00,860"
        },
        "offsets": {
          "from": 412060,
          "to": 420860
        },
        "text": "أتأكد إن الـ account واخد الـ permissions بتاعة الـ group. عملت restart للـ VM، خلينا نتأكد"
      },
      {
        "timestamps": {
          "from": "00:07:00,860",
          "to": "00:07:04,660"
        },
        "offsets": {
          "from": 420860,
          "to": 424660
        },
        "text": "تاني دلوقتي، هاجي أقول له groups، فكده بقى موجود في الـ group. دلوقتي لو قلت له"
      },
      {
        "timestamps": {
          "from": "00:07:04,660",
          "to": "00:07:11,660"
        },
        "offsets": {
          "from": 424660,
          "to": 431660
        },
        "text": "docker info هيرد عليّ من غير ما أحتاج أعمل sudo. طيب تعالى بقى"
      },
      {
        "timestamps": {
          "from": "00:07:11,660",
          "to": "00:07:16,660"
        },
        "offsets": {
          "from": 431660,
          "to": 436660
        },
        "text": "واحدة واحدة نمشي خطوة خطوة في موضوع التعامل مع الـ images والـ containers."
      },
      {
        "timestamps": {
          "from": "00:07:16,660",
          "to": "00:07:21,660"
        },
        "offsets": {
          "from": 436660,
          "to": 441660
        },
        "text": "طبيعي أول حاجة هتعملها إنك هتعمل pull للـ image زي ما اتفقنا، هتاخد"
      },
      {
        "timestamps": {
          "from": "00:07:21,660",
          "to": "00:07:27,660"
        },
        "offsets": {
          "from": 441660,
          "to": 447660
        },
        "text": "تسحب نسخة من الـ image دي تخليها عندك في الـ local registry بتاع Docker."
      },
      {
        "timestamps": {
          "from": "00:07:27,660",
          "to": "00:07:34,460"
        },
        "offsets": {
          "from": 447660,
          "to": 454460
        },
        "text": "الـ registry ده storage فيها الـ images، اعتبرها الـ storage account اللي إنت حاطط فيه كل الـ"
      },
      {
        "timestamps": {
          "from": "00:07:34,460",
          "to": "00:07:41,460"
        },
        "offsets": {
          "from": 454460,
          "to": 461460
        },
        "text": "machine templates، زي الـ drive اللي فيه templates. فعشان أعمل الموضوع ده خطوة خطوة،"
      },
      {
        "timestamps": {
          "from": "00:07:41,460",
          "to": "00:07:47,460"
        },
        "offsets": {
          "from": 461460,
          "to": 467460
        },
        "text": "أول حاجة خلينا نعمل pull مثلاً لـ image زي Fedora. طبعاً أنا عندي الـ machine دي"
      },
      {
        "timestamps": {
          "from": "00:07:47,460",
          "to": "00:07:57,460"
        },
        "offsets": {
          "from": 467460,
          "to": 477460
        },
        "text": "Ubuntu، فهاجي أقول له docker image pull. هقول ملحوظة هنا، إن أنا عندي شوية حاجات بعملها في الـ images"
      },
      {
        "timestamps": {
          "from": "00:07:57,460",
          "to": "00:08:04,260"
        },
        "offsets": {
          "from": 477460,
          "to": 484260
        },
        "text": "زي مثلاً إني أعمل pull أو push أو delete لـ image، أو أشوف الـ images اللي موجودة، فأي حاجة ليها علاقة"
      },
      {
        "timestamps": {
          "from": "00:08:04,260",
          "to": "00:08:11,260"
        },
        "offsets": {
          "from": 484260,
          "to": 491260
        },
        "text": "بالـ images، أي حاجة هعملها عليها هيبقى الـ command بتاعها docker image. وعندي حاجات تانية هعملها على الـ level بتاع"
      },
      {
        "timestamps": {
          "from": "00:08:11,260",
          "to": "00:08:17,260"
        },
        "offsets": {
          "from": 491260,
          "to": 497260
        },
        "text": "الـ containers، فأي حاجة ليها علاقة باللي هيتعمل على الـ level بتاع الـ containers الـ command هيبدأ بـ docker container."
      },
      {
        "timestamps": {
          "from": "00:08:17,260",
          "to": "00:08:24,260"
        },
        "offsets": {
          "from": 497260,
          "to": 504260
        },
        "text": "يبقى أي حاجة على الـ image بـ docker image، وأي حاجة في الـ containers بـ docker container. أنا دلوقتي عايز أعمل"
      },
      {
        "timestamps": {
          "from": "00:08:24,260",
          "to": "00:08:34,060"
        },
        "offsets": {
          "from": 504260,
          "to": 514060
        },
        "text": "pull لـ image من الـ images، يبقى هستعمل docker image pull وبعد كده أقول له اسم الـ image، ولتكن Fedora."
      },
      {
        "timestamps": {
          "from": "00:08:34,060",
          "to": "00:08:41,060"
        },
        "offsets": {
          "from": 514060,
          "to": 521060
        },
        "text": "عرفت اسم الـ image منين؟ وإيه هي الـ images الموجودة؟ ده اللي هنشوفه كمان شوية لما نعمل explore للـ Docker Hub."
      },
      {
        "timestamps": {
          "from": "00:08:41,060",
          "to": "00:08:52,060"
        },
        "offsets": {
          "from": 521060,
          "to": 532060
        },
        "text": "فهقول له docker image pull fedora وأدوس enter، هيقول لي latest ويبدأ يعمل pull للـ layers بتاعة الـ image الأول."
      },
      {
        "timestamps": {
          "from": "00:08:52,060",
          "to": "00:08:57,060"
        },
        "offsets": {
          "from": 532060,
          "to": 537060
        },
        "text": "هيعمل download للـ layers دي، والـ layers بتنزل compressed عشان الـ network، وبعد كده"
      },
      {
        "timestamps": {
          "from": "00:08:57,060",
          "to": "00:09:03,860"
        },
        "offsets": {
          "from": 537060,
          "to": 543860
        },
        "text": "هيعمل لها uncompress وتكون موجودة عندنا. خلصت كده هيقول لي إن"
      },
      {
        "timestamps": {
          "from": "00:09:03,860",
          "to": "00:09:13,660"
        },
        "offsets": {
          "from": 543860,
          "to": 553660
        },
        "text": "فيه layer واحدة بس اللي هي دي، ودي الـ SHA بتاعة الـ image زي Git بالضبط، وده هنشوف فيه شبه كبير"
      },
      {
        "timestamps": {
          "from": "00:09:13,660",
          "to": "00:09:21,660"
        },
        "offsets": {
          "from": 553660,
          "to": 561660
        },
        "text": "ما بين الـ containers وبين Git، أو ما بين Docker وبين GitHub. زي ما كانت الـ objects بتاعة"
      },
      {
        "timestamps": {
          "from": "00:09:21,660",
          "to": "00:09:33,660"
        },
        "offsets": {
          "from": 561660,
          "to": 573660
        },
        "text": "Git ليها SHA-1 hash، الـ SHA-1 هو 40 hexadecimal character. نفس الوضع بالضبط موجود في Docker بس بدل ما"
      },
      {
        "timestamps": {
          "from": "00:09:33,660",
          "to": "00:09:50,660"
        },
        "offsets": {
          "from": 573660,
          "to": 590660
        },
        "text": "Git كان بيستعمل SHA-1، الـ Docker هيستعمل SHA-256، اللي هو برضه hexadecimal characters بس 64 حرف مش 40 زي Git. وبرضه كل حاجة في Docker ليها"
      },
      {
        "timestamps": {
          "from": "00:09:50,660",
          "to": "00:10:03,460"
        },
        "offsets": {
          "from": 590660,
          "to": 603460
        },
        "text": "الـ SHA-256 بتاعها. فهاجي هنا بعد ما خلص الـ download، خلينا نبص الـ images اللي موجودة عندنا، وعشان أشوفها هقول له docker image ls."
      },
      {
        "timestamps": {
          "from": "00:10:03,460",
          "to": "00:10:09,760"
        },
        "offsets": {
          "from": 603460,
          "to": 609760
        },
        "text": "وبرضه زي ما هنشوف كمان شوية، هقول له docker container. أوكي؟"
      },
      {
        "timestamps": {
          "from": "00:10:09,760",
          "to": "00:10:15,100"
        },
        "offsets": {
          "from": 609760,
          "to": 615100
        },
        "text": "قريب شوية من Linux مثلاً أو"
      },
      {
        "timestamps": {
          "from": "00:10:15,100",
          "to": "00:10:21,700"
        },
        "offsets": {
          "from": 615100,
          "to": 621700
        },
        "text": "Windows. هيقول لي هنا إنت عندك واحدة بس والـ Tag بتاعها"
      },
      {
        "timestamps": {
          "from": "00:10:21,700",
          "to": "00:10:28,600"
        },
        "offsets": {
          "from": 621700,
          "to": 628600
        },
        "text": "هنتعرف على الموضوع ده كمان شوية، والـ Image"
      },
      {
        "timestamps": {
          "from": "00:10:28,600",
          "to": "00:10:31,960"
        },
        "offsets": {
          "from": 628600,
          "to": 631960
        },
        "text": "دي من 7 أسابيع، الشخص اللي عاملها"
      },
      {
        "timestamps": {
          "from": "00:10:31,960",
          "to": "00:10:35,080"
        },
        "offsets": {
          "from": 631960,
          "to": 635080
        },
        "text": "ورفعها عملها من 7 أسابيع والـ Size بتاعها 100"
      },
      {
        "timestamps": {
          "from": "00:10:35,080",
          "to": "00:10:39,640"
        },
        "offsets": {
          "from": 635080,
          "to": 639640
        },
        "text": "53 ميجا بايت. الـ Image كلها الـ Size بتاعها 153"
      },
      {
        "timestamps": {
          "from": "00:10:39,640",
          "to": "00:10:46,660"
        },
        "offsets": {
          "from": 639640,
          "to": 646660
        },
        "text": "ميجا بايت. هتشوف الـ Layers بتاعتها أقل من 1 ميجا. Okay؟ طب عايز أبدأ"
      },
      {
        "timestamps": {
          "from": "00:10:46,660",
          "to": "00:10:51,100"
        },
        "offsets": {
          "from": 646660,
          "to": 651100
        },
        "text": "أعمل Container لـ Fedora ده وأفتح الـ Container ده. الخطوة اللي"
      },
      {
        "timestamps": {
          "from": "00:10:51,100",
          "to": "00:10:56,020"
        },
        "offsets": {
          "from": 651100,
          "to": 656020
        },
        "text": "بعد كده بعد ما بعمل Pull للـ Image هعمل Create للـ Container. هاجي أقول"
      },
      {
        "timestamps": {
          "from": "00:10:56,020",
          "to": "00:11:00,460"
        },
        "offsets": {
          "from": 656020,
          "to": 660460
        },
        "text": "له Docker Container. بما إن أنا هعمل للـ Container حاجة ليها علاقة بالـ Container."
      },
      {
        "timestamps": {
          "from": "00:11:00,460",
          "to": "00:11:05,680"
        },
        "offsets": {
          "from": 660460,
          "to": 665680
        },
        "text": "هقول له Docker Container. هقول له docker container create. وبعدين هقول"
      },
      {
        "timestamps": {
          "from": "00:11:05,680",
          "to": "00:11:09,040"
        },
        "offsets": {
          "from": 665680,
          "to": 669040
        },
        "text": "له -it. هتعرف دلوقتي إيه -it ده، وبسرعة"
      },
      {
        "timestamps": {
          "from": "00:11:09,040",
          "to": "00:11:12,820"
        },
        "offsets": {
          "from": 669040,
          "to": 672820
        },
        "text": "الـ i معناها Interactive، والـ t دي اللي هي Terminal أو"
      },
      {
        "timestamps": {
          "from": "00:11:12,820",
          "to": "00:11:15,940"
        },
        "offsets": {
          "from": 672820,
          "to": 675940
        },
        "text": "Pseudo terminal. لأن أنا عايز أشتغل Inter-"
      },
      {
        "timestamps": {
          "from": "00:11:15,940",
          "to": "00:11:19,180"
        },
        "offsets": {
          "from": 675940,
          "to": 679180
        },
        "text": "active مع الـ Container وأفتح الـ Terminal جوه الـ Container. كما لو"
      },
      {
        "timestamps": {
          "from": "00:11:19,180",
          "to": "00:11:23,260"
        },
        "offsets": {
          "from": 679180,
          "to": 683260
        },
        "text": "كان الـ Container ده مثلاً جواه Terminal، فأنا عايز أشتغل"
      },
      {
        "timestamps": {
          "from": "00:11:23,260",
          "to": "00:11:26,260"
        },
        "offsets": {
          "from": 683260,
          "to": 686260
        },
        "text": "جوه الـ Terminal دي. ماشي؟ والـ -i"
      },
      {
        "timestamps": {
          "from": "00:11:26,260",
          "to": "00:11:29,620"
        },
        "offsets": {
          "from": 686260,
          "to": 689620
        },
        "text": "دي اللي هي Interactive، يعني إيه؟ أخلي الـ Input والـ Output أنا"
      },
      {
        "timestamps": {
          "from": "00:11:29,620",
          "to": "00:11:33,160"
        },
        "offsets": {
          "from": 689620,
          "to": 693160
        },
        "text": "قادر أشوفه وقادر أباصي Standard Input"
      },
      {
        "timestamps": {
          "from": "00:11:33,160",
          "to": "00:11:37,540"
        },
        "offsets": {
          "from": 693160,
          "to": 697540
        },
        "text": "للـ Container وآخد الـ Standard Output. Okay؟ وبعد كده بعد ما"
      },
      {
        "timestamps": {
          "from": "00:11:37,540",
          "to": "00:11:40,780"
        },
        "offsets": {
          "from": 697540,
          "to": 700780
        },
        "text": "أقول له -it هقول له أنا عايز الـ Container ده يتعمل من"
      },
      {
        "timestamps": {
          "from": "00:11:40,780",
          "to": "00:11:46,120"
        },
        "offsets": {
          "from": 700780,
          "to": 706120
        },
        "text": "الـ Image اللي اسمها Fedora، فهقول له fedora. والـ Image أهي. تمام؟"
      },
      {
        "timestamps": {
          "from": "00:11:46,120",
          "to": "00:11:49,600"
        },
        "offsets": {
          "from": 706120,
          "to": 709600
        },
        "text": "أو أديله الـ ID بتاع الـ Image. هقول له من الـ Image اللي اسمها fedora."
      },
      {
        "timestamps": {
          "from": "00:11:49,600",
          "to": "00:11:54,220"
        },
        "offsets": {
          "from": 709600,
          "to": 714220
        },
        "text": "يعني create container. وكريت لي الـ Container ده بالـ Interactive mode."
      },
      {
        "timestamps": {
          "from": "00:11:54,220",
          "to": "00:11:57,400"
        },
        "offsets": {
          "from": 714220,
          "to": 717400
        },
        "text": "أقدر أتعامل مع الـ Terminal بتاعته. ليه؟ أنا عارف"
      },
      {
        "timestamps": {
          "from": "00:11:57,400",
          "to": "00:12:01,660"
        },
        "offsets": {
          "from": 717400,
          "to": 721660
        },
        "text": "إنه Terminal لأنه Linux Container، وفيه جواه Fedora."
      },
      {
        "timestamps": {
          "from": "00:12:01,660",
          "to": "00:12:05,680"
        },
        "offsets": {
          "from": 721660,
          "to": 725680
        },
        "text": "Image. الـ Fedora ده Linux distribution. تمام؟ من الـ Image"
      },
      {
        "timestamps": {
          "from": "00:12:05,680",
          "to": "00:12:08,620"
        },
        "offsets": {
          "from": 725680,
          "to": 728620
        },
        "text": "اللي اسمها Fedora، والـ Terminal اللي أنا"
      },
      {
        "timestamps": {
          "from": "00:12:08,620",
          "to": "00:12:13,660"
        },
        "offsets": {
          "from": 728620,
          "to": 733660
        },
        "text": "هتعامل معاها الـ Command اللي هتعامل معاه اللي هو bash."
      },
      {
        "timestamps": {
          "from": "00:12:13,660",
          "to": "00:12:19,720"
        },
        "offsets": {
          "from": 733660,
          "to": 739720
        },
        "text": "اللي هو Bash shell. ماشي؟ وأدوس Enter. كالعادة برضه دي هتشوفها"
      },
      {
        "timestamps": {
          "from": "00:12:19,720",
          "to": "00:12:25,180"
        },
        "offsets": {
          "from": 739720,
          "to": 745180
        },
        "text": "على طول بقى، هيديني الـ ID بتاع الـ Container ده. هتلاقي إنه بيبدأ"
      },
      {
        "timestamps": {
          "from": "00:12:25,180",
          "to": "00:12:28,480"
        },
        "offsets": {
          "from": 745180,
          "to": 748480
        },
        "text": "بـ 90b... و64"
      },
      {
        "timestamps": {
          "from": "00:12:28,480",
          "to": "00:12:31,840"
        },
        "offsets": {
          "from": 748480,
          "to": 751840
        },
        "text": "Hexadecimal characters. عشان أشوف الـ Containers اللي موجودة عندي"
      },
      {
        "timestamps": {
          "from": "00:12:31,840",
          "to": "00:12:38,020"
        },
        "offsets": {
          "from": 751840,
          "to": 758020
        },
        "text": "هقول له docker container برضه، ولكن docker container لوحدها كده"
      },
      {
        "timestamps": {
          "from": "00:12:38,020",
          "to": "00:12:42,880"
        },
        "offsets": {
          "from": 758020,
          "to": 762880
        },
        "text": "بتجيب كل الـ Containers اللي شغالة عندي. الـ Containers ليها"
      },
      {
        "timestamps": {
          "from": "00:12:42,880",
          "to": "00:12:52,240"
        },
        "offsets": {
          "from": 762880,
          "to": 772240
        },
        "text": "أكتر من State، ممكن تكون Running أو Exited مثلاً. فعشان"
      },
      {
        "timestamps": {
          "from": "00:12:52,240",
          "to": "00:12:57,700"
        },
        "offsets": {
          "from": 772240,
          "to": 777700
        },
        "text": "أشوف كل الـ Containers اللي شغالة واللي مش شغالة هقول له -a، ممكن أقول"
      },
      {
        "timestamps": {
          "from": "00:12:57,700",
          "to": "00:13:05,020"
        },
        "offsets": {
          "from": 777700,
          "to": 785020
        },
        "text": "له --all أو -a، عشان أشوف كل حاجة. لو قلت له من غير"
      },
      {
        "timestamps": {
          "from": "00:13:05,020",
          "to": "00:13:07,420"
        },
        "offsets": {
          "from": 785020,
          "to": 787420
        },
        "text": "الـ -a مش هيديني أي حاجة. خلاص أنا"
      },
      {
        "timestamps": {
          "from": "00:13:07,420",
          "to": "00:13:11,620"
        },
        "offsets": {
          "from": 787420,
          "to": 791620
        },
        "text": "من غير الـ -a بيوريني الـ Running بس. Okay؟ الـ Container اللي هي"
      },
      {
        "timestamps": {
          "from": "00:13:11,620",
          "to": "00:13:16,540"
        },
        "offsets": {
          "from": 791620,
          "to": 796540
        },
        "text": "بتاعتها. فهنا هقول له الـ Container ده الـ ID بتاعه أو"
      },
      {
        "timestamps": {
          "from": "00:13:16,540",
          "to": "00:13:20,260"
        },
        "offsets": {
          "from": 796540,
          "to": 800260
        },
        "text": "مش ده الـ ID، ده أول 12 Hex characters، ده الـ characters من"
      },
      {
        "timestamps": {
          "from": "00:13:20,260",
          "to": "00:13:25,840"
        },
        "offsets": {
          "from": 800260,
          "to": 805840
        },
        "text": "الـ ID أو الـ Hash بتاع الـ Container. الـ Image اللي مبني عليها"
      },
      {
        "timestamps": {
          "from": "00:13:25,840",
          "to": "00:13:30,340"
        },
        "offsets": {
          "from": 805840,
          "to": 810340
        },
        "text": "الـ Container ده اسمها Fedora. الـ Command اللي الـ Container متكاريت"
      },
      {
        "timestamps": {
          "from": "00:13:30,340",
          "to": "00:13:35,140"
        },
        "offsets": {
          "from": 810340,
          "to": 815140
        },
        "text": "بيه اللي أنت هتتعامل معاه، وهو من 45 ثانية لأنها لسه"
      },
      {
        "timestamps": {
          "from": "00:13:35,140",
          "to": "00:13:39,640"
        },
        "offsets": {
          "from": 815140,
          "to": 819640
        },
        "text": "مكاريت الـ Container ده. OK؟ والـ Status بتاعته. وفي اسم كده"
      },
      {
        "timestamps": {
          "from": "00:13:39,640",
          "to": "00:13:44,980"
        },
        "offsets": {
          "from": 819640,
          "to": 824980
        },
        "text": "غريب كده. OK؟ هنشوف برضه هنتعامل إزاي مع موضوع الأسامي"
      },
      {
        "timestamps": {
          "from": "00:13:44,980",
          "to": "00:13:47,620"
        },
        "offsets": {
          "from": 824980,
          "to": 827620
        },
        "text": "دي. بس ده اسم سهل لتعرف تتعامل بيه مع الـ Container بدل ما تتعامل"
      },
      {
        "timestamps": {
          "from": "00:13:47,620",
          "to": "00:13:53,740"
        },
        "offsets": {
          "from": 827620,
          "to": 833740
        },
        "text": "مع الـ ID. بعد ما كريت الـ Container كده أنا كنت عملت للـ Template اللي"
      },
      {
        "timestamps": {
          "from": "00:13:53,740",
          "to": "00:14:00,220"
        },
        "offsets": {
          "from": 833740,
          "to": 840220
        },
        "text": "هي OK؟ اللي هي بالنسبة لي، عملت لها Create Container عليها"
      },
      {
        "timestamps": {
          "from": "00:14:00,220",
          "to": "00:14:04,360"
        },
        "offsets": {
          "from": 840220,
          "to": 844360
        },
        "text": "يعني أخدت Copy منها. OK؟ وبعد كده الخطوة اللي"
      },
      {
        "timestamps": {
          "from": "00:14:04,360",
          "to": "00:14:07,840"
        },
        "offsets": {
          "from": 844360,
          "to": 847840
        },
        "text": "بعدها أنا أبدأ أعمل Start للـ Container ده. فعشان أعمل Start للـ Container ده"
      },
      {
        "timestamps": {
          "from": "00:14:07,840",
          "to": "00:14:13,080"
        },
        "offsets": {
          "from": 847840,
          "to": 853080
        },
        "text": "وأبدأ أتعامل معاه. هقول له docker container برضه."
      },
      {
        "timestamps": {
          "from": "00:14:13,080",
          "to": "00:14:24,640"
        },
        "offsets": {
          "from": 853080,
          "to": 864640
        },
        "text": "وأقول له start -i. تمام؟"
      },
      {
        "timestamps": {
          "from": "00:14:24,640",
          "to": "00:14:27,280"
        },
        "offsets": {
          "from": 864640,
          "to": 867280
        },
        "text": "الـ Container ده أنا لسه عامله من شوية. أقدر إن أنا أكتب له اسم"
      },
      {
        "timestamps": {
          "from": "00:14:27,280",
          "to": "00:14:30,820"
        },
        "offsets": {
          "from": 867280,
          "to": 870820
        },
        "text": "الـ Container. أقدر إن أنا أكتب له الـ ID بتاع الـ Container"
      },
      {
        "timestamps": {
          "from": "00:14:30,820",
          "to": "00:14:33,580"
        },
        "offsets": {
          "from": 870820,
          "to": 873580
        },
        "text": "أو أول كام حرف منهم برضه زي ما كنا بنتعامل مع Git لو تفتكر."
      },
      {
        "timestamps": {
          "from": "00:14:33,580",
          "to": "00:14:37,240"
        },
        "offsets": {
          "from": 873580,
          "to": 877240
        },
        "text": "فأقدر أقول له مثلاً start الـ Container interactive اللي هو"
      },
      {
        "timestamps": {
          "from": "00:14:37,240",
          "to": "00:14:41,680"
        },
        "offsets": {
          "from": 877240,
          "to": 881680
        },
        "text": "اسمه 90b مثلاً، أهو أول كام character منهم 90b."
      },
      {
        "timestamps": {
          "from": "00:14:41,680",
          "to": "00:14:49,960"
        },
        "offsets": {
          "from": 881680,
          "to": 889960
        },
        "text": "OK؟ ودوس Enter. لما هعمل كده هتلاقيه راح مدخلني في"
      },
      {
        "timestamps": {
          "from": "00:14:49,960",
          "to": "00:14:54,340"
        },
        "offsets": {
          "from": 889960,
          "to": 894340
        },
        "text": "Terminal تانية خالص شكلها غريب وشكلها root وأنا أقول لك"
      },
      {
        "timestamps": {
          "from": "00:14:54,340",
          "to": "00:15:00,040"
        },
        "offsets": {
          "from": 894340,
          "to": 900040
        },
        "text": "الـ Username هو root واسم الـ Machine. الماشين اسمها كده."
      },
      {
        "timestamps": {
          "from": "00:15:00,040",
          "to": "00:15:03,560"
        },
        "offsets": {
          "from": 900040,
          "to": 903560
        },
        "text": "لو عملت كده هتلاقي الـ Machine أصلاً مش موجودة فيها."
      },
      {
        "timestamps": {
          "from": "00:15:03,580",
          "to": "00:15:08,800"
        },
        "offsets": {
          "from": 903580,
          "to": 908800
        },
        "text": "خلينا نعمل /etc دي حتة برضه هنتكلم عليها. cat /etc/"
      },
      {
        "timestamps": {
          "from": "00:15:08,800",
          "to": "00:15:17,120"
        },
        "offsets": {
          "from": 908800,
          "to": 917120
        },
        "text": "أعتقد كان اسمه hostname، الفايل لو أنا فاكر صح. فهتلاقي ده اسم"
      },
      {
        "timestamps": {
          "from": "00:15:17,120",
          "to": "00:15:23,180"
        },
        "offsets": {
          "from": 917120,
          "to": 923180
        },
        "text": "الـ Machine اللي جوه الـ Container. وهتلاقي إن دي هي هي برضه نفسها"
      },
      {
        "timestamps": {
          "from": "00:15:23,180",
          "to": "00:15:26,880"
        },
        "offsets": {
          "from": 923180,
          "to": 926880
        },
        "text": "الـ ID بتاع الـ Container. الـ ID بتاع الـ Container هو هو نفس"
      },
      {
        "timestamps": {
          "from": "00:15:26,880",
          "to": "00:15:30,920"
        },
        "offsets": {
          "from": 926880,
          "to": 930920
        },
        "text": "الاسم. هنشوف برضه إزاي نقدر إننا نتعامل ونغير ده. ومدخلني"
      },
      {
        "timestamps": {
          "from": "00:15:30,920",
          "to": "00:15:33,560"
        },
        "offsets": {
          "from": 930920,
          "to": 933560
        },
        "text": "في الـ Terminal دي. وتلاحظ حتى إن أنا لما قلت له hostname"
      },
      {
        "timestamps": {
          "from": "00:13:33,580",
          "to": "00:15:37,720"
        },
        "offsets": {
          "from": 933580,
          "to": 937720
        },
        "text": "عشان أجيب اسم الـ Container أو اسم الـ Machine اللي شايفها"
      },
      {
        "timestamps": {
          "from": "00:15:37,720",
          "to": "00:15:41,500"
        },
        "offsets": {
          "from": 937720,
          "to": 941500
        },
        "text": "الـ Container، مدانيش أي حاجة خالص أو أداني إن الـ Command ده مش"
      },
      {
        "timestamps": {
          "from": "00:15:41,500",
          "to": "00:15:45,400"
        },
        "offsets": {
          "from": 941500,
          "to": 945400
        },
        "text": "موجود. وده علشان ده من الـ Fedora. زي ما إحنا قلنا إيه؟"
      },
      {
        "timestamps": {
          "from": "00:15:45,400",
          "to": "00:15:50,140"
        },
        "offsets": {
          "from": 945400,
          "to": 950140
        },
        "text": "كل الهيلمان بتاع الـ OS إحنا مش محتاجينه. إحنا محتاجين بس"
      },
      {
        "timestamps": {
          "from": "00:15:50,140",
          "to": "00:15:54,040"
        },
        "offsets": {
          "from": 950140,
          "to": 954040
        },
        "text": "الـ Minimal. اللي حصل إنه الـ Container ده ولو أنا حبيت إن"
      },
      {
        "timestamps": {
          "from": "00:15:54,040",
          "to": "00:15:58,000"
        },
        "offsets": {
          "from": 954040,
          "to": 958000
        },
        "text": "أنا أفتح Window تانية كده عشان أشوف الـ Containers اللي موجودة"
      },
      {
        "timestamps": {
          "from": "00:15:58,000",
          "to": "00:16:01,820"
        },
        "offsets": {
          "from": 958000,
          "to": 961820
        },
        "text": "عندي. لو قلت له docker container"
      },
      {
        "timestamps": {
          "from": "00:16:01,820",
          "to": "00:16:03,180"
        },
        "offsets": {
          "from": 961820,
          "to": 963180
        },
        "text": "ls."
      },
      {
        "timestamps": {
          "from": "00:16:03,580",
          "to": "00:16:06,040"
        },
        "offsets": {
          "from": 963580,
          "to": 966040
        },
        "text": "دلوقتي أقدر إن أنا أعمل ls لأن هو خلاص أنا عارف إن أنا"
      },
      {
        "timestamps": {
          "from": "00:16:06,040",
          "to": "00:16:09,280"
        },
        "offsets": {
          "from": 966040,
          "to": 969280
        },
        "text": "شغال على الـ Status بتاعته. فيقول لي إن الـ Container ID ده اللي هو مبني"
      },
      {
        "timestamps": {
          "from": "00:16:09,280",
          "to": "00:16:12,520"
        },
        "offsets": {
          "from": 969280,
          "to": 972520
        },
        "text": "على الـ Image اللي اسمها Fedora، اللي الـ Command اللي Running"
      },
      {
        "timestamps": {
          "from": "00:16:12,520",
          "to": "00:16:18,940"
        },
        "offsets": {
          "from": 972520,
          "to": 978940
        },
        "text": "جوه bash. من تلات دقايق وهو بقاله حوالي دقيقة."
      },
      {
        "timestamps": {
          "from": "00:16:18,940",
          "to": "00:16:23,920"
        },
        "offsets": {
          "from": 978940,
          "to": 983920
        },
        "text": "دقيقة. فهاجي هنا تاني، هرجع هنا تاني وأضطر إني، خليني"
      },
      {
        "timestamps": {
          "from": "00:16:23,920",
          "to": "00:16:26,140"
        },
        "offsets": {
          "from": 983920,
          "to": 986140
        },
        "text": "أجيب أشغل بس الحاجات اللي موجودة، عمال Container للآلة عشان"
      },
      {
        "timestamps": {
          "from": "00:16:26,140",
          "to": "00:16:30,440"
        },
        "offsets": {
          "from": 986140,
          "to": 990440
        },
        "text": "أنضف كل حاجة. أقدر إني هنا آجي أقول له مثلاً ls، فيوري"
      },
      {
        "timestamps": {
          "from": "00:16:30,440",
          "to": "00:16:35,100"
        },
        "offsets": {
          "from": 990440,
          "to": 995100
        },
        "text": "الحاجات اللي موجودة هنا. أقدر إني أقول له مثلاً، مثلاً"
      },
      {
        "timestamps": {
          "from": "00:16:35,100",
          "to": "00:16:41,120"
        },
        "offsets": {
          "from": 995100,
          "to": 1001120
        },
        "text": "وريني الـ OS بتاع الـ Machine دي. هقول له /etc"
      },
      {
        "timestamps": {
          "from": "00:16:41,120",
          "to": "00:16:47,420"
        },
        "offsets": {
          "from": 1001120,
          "to": 1007420
        },
        "text": "/os-release. فيقول لي دي عبارة عن Fedora. الـ ID"
      },
      {
        "timestamps": {
          "from": "00:16:47,420",
          "to": "00:16:51,860"
        },
        "offsets": {
          "from": 1007420,
          "to": 1011860
        },
        "text": "Fedora. وده الـ Codename، مفيش Codename. وده عبارة عن Fedora"
      },
      {
        "timestamps": {
          "from": "00:16:51,860",
          "to": "00:16:56,120"
        },
        "offsets": {
          "from": 1011860,
          "to": 1016120
        },
        "text": "Linux 35 Container Image. تمام؟ وهكذا بقى"
      },
      {
        "timestamps": {
          "from": "00:16:56,140",
          "to": "00:17:01,780"
        },
        "offsets": {
          "from": 1016140,
          "to": 1021780
        },
        "text": "شوية حاجات ليها علاقة بالـ Container نفسه. كده كأني"
      },
      {
        "timestamps": {
          "from": "00:17:01,780",
          "to": "00:17:10,000"
        },
        "offsets": {
          "from": 1021780,
          "to": 1030000
        },
        "text": "عملت Machine صغيرة جوه الـ Machine بتاعتي اللي هي Apollo. فدي فكرة"
      },
      {
        "timestamps": {
          "from": "00:17:10,000",
          "to": "00:17:14,900"
        },
        "offsets": {
          "from": 1030000,
          "to": 1034900
        },
        "text": "الـ Container. بس هنا في نقطة مهمة. لو أنا جيت كده قلت له"
      },
      {
        "timestamps": {
          "from": "00:17:14,900",
          "to": "00:17:17,120"
        },
        "offsets": {
          "from": 1034900,
          "to": 1037120
        },
        "text": "مش عارف الـ command موجود ولا لأ. الـ command حتى مش موجود"
      },
      {
        "timestamps": {
          "from": "00:17:17,120",
          "to": "00:17:20,140"
        },
        "offsets": {
          "from": 1037120,
          "to": 1040140
        },
        "text": "عشان أشوف الحاجات اللي جوه. بس هنشوفها في Container تاني. عشان"
      },
      {
        "timestamps": {
          "from": "00:17:20,140",
          "to": "00:17:26,060"
        },
        "offsets": {
          "from": 1040140,
          "to": 1046060
        },
        "text": "نشوف الـ process. أنا كتبت exit من هنا. ده المفروض إنه"
      },
      {
        "timestamps": {
          "from": "00:17:26,060",
          "to": "00:17:31,880"
        },
        "offsets": {
          "from": 1046060,
          "to": 1051880
        },
        "text": "لو إنت مشغل أي Terminal ولا أي حاجة وقلت له exit هيقوم قافل"
      },
      {
        "timestamps": {
          "from": "00:17:31,880",
          "to": "00:17:38,600"
        },
        "offsets": {
          "from": 1051880,
          "to": 1058600
        },
        "text": "الـ Terminal. تمام؟ هيـ terminate الـ session نفسها. لو جيت قلت له exit ودوست"
      },
      {
        "timestamps": {
          "from": "00:17:38,600",
          "to": "00:17:44,600"
        },
        "offsets": {
          "from": 1058600,
          "to": 1064600
        },
        "text": "Enter. هلاقيه راح مخرجني من الـ Container كله، وراح مرجعني تاني"
      },
      {
        "timestamps": {
          "from": "00:17:44,600",
          "to": "00:17:49,740"
        },
        "offsets": {
          "from": 1064600,
          "to": 1069740
        },
        "text": "على الـ Prompt الأصلي. ولو رحت هنا كده قلت له وريني الـ processes هيقول"
      },
      {
        "timestamps": {
          "from": "00:17:49,740",
          "to": "00:17:55,980"
        },
        "offsets": {
          "from": 1069740,
          "to": 1075980
        },
        "text": "لي مفيش. لو جيت قلت له docker ps -a في الآخر."
      },
      {
        "timestamps": {
          "from": "00:17:55,980",
          "to": "00:17:58,720"
        },
        "offsets": {
          "from": 1075980,
          "to": 1078720
        },
        "text": "فيقول لي إن إنت عندك الـ Container اللي هو كذا ده"
      },
      {
        "timestamps": {
          "from": "00:17:58,720",
          "to": "00:18:03,820"
        },
        "offsets": {
          "from": 1078720,
          "to": 1083820
        },
        "text": "مش عارف إيه بتاعه. والـ Container ده حالته Exited."
      },
      {
        "timestamps": {
          "from": "00:18:03,820",
          "to": "00:18:09,280"
        },
        "offsets": {
          "from": 1083820,
          "to": 1089280
        },
        "text": "والـ Exit code بتاعه كان 127 اللي هو إنه"
      },
      {
        "timestamps": {
          "from": "00:18:09,280",
          "to": "00:18:15,940"
        },
        "offsets": {
          "from": 1089280,
          "to": 1095940
        },
        "text": "Terminated يعني. ليه بقى كده؟ ليه عمل Container بمجرد ما أنا"
      },
      {
        "timestamps": {
          "from": "00:18:15,940",
          "to": "00:18:20,080"
        },
        "offsets": {
          "from": 1095940,
          "to": 1100080
        },
        "text": "عملت exit من الـ Shell أو الـ Terminal بتاعة"
      },
      {
        "timestamps": {
          "from": "00:18:20,080",
          "to": "00:18:25,860"
        },
        "offsets": {
          "from": 1100080,
          "to": 1105860
        },
        "text": "الـ Container. ده Concept تاني مهم عايزين نبدأ نركز فيه بقى."
      },
      {
        "timestamps": {
          "from": "00:18:25,980",
          "to": "00:18:31,440"
        },
        "offsets": {
          "from": 1105980,
          "to": 1111440
        },
        "text": "بس قبل ما نعمل الكلام ده خليني أجرب Container تاني. هجيب"
      },
      {
        "timestamps": {
          "from": "00:18:31,440",
          "to": "00:18:36,180"
        },
        "offsets": {
          "from": 1111440,
          "to": 1116180
        },
        "text": "Container تاني. عايز الـ Container التاني ده Python Container."
      },
      {
        "timestamps": {
          "from": "00:18:36,180",
          "to": "00:18:41,520"
        },
        "offsets": {
          "from": 1116180,
          "to": 1121520
        },
        "text": "فيه Python Image. تمام؟ فهيجي أقول له برضه docker image pull"
      },
      {
        "timestamps": {
          "from": "00:18:41,520",
          "to": "00:18:47,520"
        },
        "offsets": {
          "from": 1121520,
          "to": 1127520
        },
        "text": "وأقول له python. ودوس Enter. نسيت بس أكتب docker في الأول. docker"
      },
      {
        "timestamps": {
          "from": "00:18:47,520",
          "to": "00:18:53,340"
        },
        "offsets": {
          "from": 1127520,
          "to": 1133340
        },
        "text": "image pull python. هيقوم عامل Download لكل الـ layers بتاعة الـ Image دي."
      },
      {
        "timestamps": {
          "from": "00:18:53,340",
          "to": "00:18:56,700"
        },
        "offsets": {
          "from": 1133340,
          "to": 1136700
        },
        "text": "خد بالك إن هنا عندي أكتر، وده طبيعي ومنطقي. قبل كده"
      },
      {
        "timestamps": {
          "from": "00:18:56,700",
          "to": "00:18:59,220"
        },
        "offsets": {
          "from": 1136700,
          "to": 1139220
        },
        "text": "الـ Container اللي أنا عامله كان Container صغير بتاع Fedora بس، يدوبك"
      },
      {
        "timestamps": {
          "from": "00:18:59,220",
          "to": "00:19:06,960"
        },
        "offsets": {
          "from": 1139220,
          "to": 1146960
        },
        "text": "كامل. ده كانت ناقصة فيه commands كمان يعني. إنما هنا ده عبارة"
      },
      {
        "timestamps": {
          "from": "00:19:06,960",
          "to": "00:19:12,860"
        },
        "offsets": {
          "from": 1146960,
          "to": 1152860
        },
        "text": "عن Container وفيه Python نازل ومية فل"
      },
      {
        "timestamps": {
          "from": "00:19:12,860",
          "to": "00:19:17,640"
        },
        "offsets": {
          "from": 1152860,
          "to": 1157640
        },
        "text": "وعشرة. خلص خلاص عمل Download لكل الـ Images. عمل الـ pull بتاعها وكل"
      },
      {
        "timestamps": {
          "from": "00:19:17,640",
          "to": "00:19:23,280"
        },
        "offsets": {
          "from": 1157640,
          "to": 1163280
        },
        "text": "حاجة تمام. لو رحت قلت له docker image ls. فهيقول لي دلوقتي"
      },
      {
        "timestamps": {
          "from": "00:19:23,280",
          "to": "00:19:27,120"
        },
        "offsets": {
          "from": 1163280,
          "to": 1167120
        },
        "text": "إنت عندك اتنين Images؛ عندك الـ Fedora دي اللي إحنا كنا نزلناها"
      },
      {
        "timestamps": {
          "from": "00:19:27,120",
          "to": "00:19:31,620"
        },
        "offsets": {
          "from": 1167120,
          "to": 1171620
        },
        "text": "وعندك Python والـ Tag بتاعها والـ Image ID أهو. تمام؟ ومتكريتة"
      },
      {
        "timestamps": {
          "from": "00:19:31,620",
          "to": "00:19:36,960"
        },
        "offsets": {
          "from": 1171620,
          "to": 1176960
        },
        "text": "من تلات أيام. والـ Size بتاعها 917. 917"
      },
      {
        "timestamps": {
          "from": "00:19:36,960",
          "to": "00:19:39,000"
        },
        "offsets": {
          "from": 1176960,
          "to": 1179000
        },
        "text": "ميجا. OK؟ تعالى بقى نجرب"
      }
    ]
  },
  {
    "id": 6,
    "title": "Container = Application",
    "duration": 964.0,
    "isReady": true,
    "transcription": [
      {
        "timestamps": {
          "from": "00:00:00,000",
          "to": "00:00:14,380"
        },
        "offsets": {
          "from": 0,
          "to": 14380
        },
        "text": "نجرب نكريت Container ونعمل الكلام ده. في طريقة ظريفة أقدر أختصر بيها فكرة Docker Create وبعدين Docker Start. في طريقة سهلة إني أقول له Docker Container Run."
      },
      {
        "timestamps": {
          "from": "00:00:14,380",
          "to": "00:00:29,700"
        },
        "offsets": {
          "from": 14380,
          "to": 29700
        },
        "text": "الـ Container Run command ده هو بالظبط الـ Docker Create زائد الـ Docker Start. بيعمل Create و Start في نفس الوقت، ومش بس كده، ده كمان Docker Run لو الـ Image مش موجودة عندك قبل"
      },
      {
        "timestamps": {
          "from": "00:00:29,700",
          "to": "00:00:34,860"
        },
        "offsets": {
          "from": 29700,
          "to": 34860
        },
        "text": "كده ومعملتلاش Pull قبل كده، هو هيعملها Pull كمان. فـ Docker Run ده"
      },
      {
        "timestamps": {
          "from": "00:00:34,860",
          "to": "00:00:39,720"
        },
        "offsets": {
          "from": 34860,
          "to": 39720
        },
        "text": "ممكن يختصر الـ Docker Image Pull، والـ Docker Container Create، والـ Docker"
      },
      {
        "timestamps": {
          "from": "00:00:39,720",
          "to": "00:00:46,920"
        },
        "offsets": {
          "from": 39720,
          "to": 46920
        },
        "text": "Container Start. تمام؟ هاجي أقول له هنا Docker Container -it"
      },
      {
        "timestamps": {
          "from": "00:00:46,920",
          "to": "00:00:51,040"
        },
        "offsets": {
          "from": 46920,
          "to": 51040
        },
        "text": "-it."
      },
      {
        "timestamps": {
          "from": "00:00:51,800",
          "to": "00:01:01,040"
        },
        "offsets": {
          "from": 51800,
          "to": 61040
        },
        "text": "وأقول له اعمل لي من الـ Image اللي اسمها python وأدوس Enter. حصل إيه"
      },
      {
        "timestamps": {
          "from": "00:01:01,040",
          "to": "00:01:07,880"
        },
        "offsets": {
          "from": 61040,
          "to": 67880
        },
        "text": "بقى؟ بص كده الشكل اختلف، الشكل هنا إداني الـ Prompt بتاع Python لو"
      },
      {
        "timestamps": {
          "from": "00:01:07,880",
          "to": "00:01:11,660"
        },
        "offsets": {
          "from": 67880,
          "to": 71660
        },
        "text": "تفتكروا لما اتكلمنا في الفيديو بتاع Python. فده"
      },
      {
        "timestamps": {
          "from": "00:01:11,660",
          "to": "00:01:18,800"
        },
        "offsets": {
          "from": 71660,
          "to": 78800
        },
        "text": "بيقول لي إن ده واداني الـ REPL، يعني لو جيت كده"
      },
      {
        "timestamps": {
          "from": "00:01:18,800",
          "to": "00:01:19,840"
        },
        "offsets": {
          "from": 78800,
          "to": 79840
        },
        "text": "وقلت له print"
      },
      {
        "timestamps": {
          "from": "00:01:19,840",
          "to": "00:01:25,060"
        },
        "offsets": {
          "from": 79840,
          "to": 85060
        },
        "text": "\"hello\""
      },
      {
        "timestamps": {
          "from": "00:01:25,060",
          "to": "00:01:28,080"
        },
        "offsets": {
          "from": 85060,
          "to": 88080
        },
        "text": "\"containers\""
      },
      {
        "timestamps": {
          "from": "00:01:28,080",
          "to": "00:01:30,040"
        },
        "offsets": {
          "from": 88080,
          "to": 90040
        },
        "text": "ودست Enter هيعمل print"
      },
      {
        "timestamps": {
          "from": "00:01:30,040",
          "to": "00:01:31,820"
        },
        "offsets": {
          "from": 90040,
          "to": 91820
        },
        "text": "وقلت له 1+1"
      },
      {
        "timestamps": {
          "from": "00:01:31,820",
          "to": "00:01:33,080"
        },
        "offsets": {
          "from": 91820,
          "to": 93080
        },
        "text": "هيدينا الـ Result"
      },
      {
        "timestamps": {
          "from": "00:01:33,080",
          "to": "00:01:36,320"
        },
        "offsets": {
          "from": 93080,
          "to": 96320
        },
        "text": "Python عادي جداً كأني كتبت"
      },
      {
        "timestamps": {
          "from": "00:01:36,320",
          "to": "00:01:37,580"
        },
        "offsets": {
          "from": 96320,
          "to": 97580
        },
        "text": "Python 3 عندي في"
      },
      {
        "timestamps": {
          "from": "00:01:37,580",
          "to": "00:01:39,120"
        },
        "offsets": {
          "from": 97580,
          "to": 99120
        },
        "text": "في الـ Operating System"
      },
      {
        "timestamps": {
          "from": "00:01:39,120",
          "to": "00:01:41,300"
        },
        "offsets": {
          "from": 99120,
          "to": 101300
        },
        "text": "ده لو كان Python أوريدي نازل عندي"
      },
      {
        "timestamps": {
          "from": "00:01:41,300",
          "to": "00:01:44,760"
        },
        "offsets": {
          "from": 101300,
          "to": 104760
        },
        "text": "طبعاً أو الـ Version اللي هو 3.10.2"
      },
      {
        "timestamps": {
          "from": "00:01:44,760",
          "to": "00:01:45,840"
        },
        "offsets": {
          "from": 104760,
          "to": 105840
        },
        "text": "ده كان نزل عندي."
      },
      {
        "timestamps": {
          "from": "00:01:45,840",
          "to": "00:01:47,160"
        },
        "offsets": {
          "from": 105840,
          "to": 107160
        },
        "text": "بقى عندي Python."
      },
      {
        "timestamps": {
          "from": "00:01:47,160",
          "to": "00:01:51,300"
        },
        "offsets": {
          "from": 107160,
          "to": 111300
        },
        "text": "لاحظ بقى لو جيت خرجت من هنا وقلت له exit"
      },
      {
        "timestamps": {
          "from": "00:01:51,300",
          "to": "00:01:53,120"
        },
        "offsets": {
          "from": 111300,
          "to": 113120
        },
        "text": "عارفين إننا بنخرج بـ Control+D أو exit"
      },
      {
        "timestamps": {
          "from": "00:01:53,120",
          "to": "00:01:56,060"
        },
        "offsets": {
          "from": 113120,
          "to": 116060
        },
        "text": "عشان نخرج من الـ REPL Mode بتاع Python"
      },
      {
        "timestamps": {
          "from": "00:01:56,060",
          "to": "00:01:57,480"
        },
        "offsets": {
          "from": 116060,
          "to": 117480
        },
        "text": "ودست Enter"
      },
      {
        "timestamps": {
          "from": "00:01:57,480",
          "to": "00:02:01,100"
        },
        "offsets": {
          "from": 117480,
          "to": 121100
        },
        "text": "خرجني من الـ Container كله"
      },
      {
        "timestamps": {
          "from": "00:02:01,100",
          "to": "00:02:05,560"
        },
        "offsets": {
          "from": 121100,
          "to": 125560
        },
        "text": "وده الـ Concept المهم اللي عايزين نأكد عليه دلوقتي"
      },
      {
        "timestamps": {
          "from": "00:02:05,560",
          "to": "00:02:10,960"
        },
        "offsets": {
          "from": 125560,
          "to": 130960
        },
        "text": "الـ Container عبارة عن Bundle من الـ Application بكل الـ Dependencies بتاعتها"
      },
      {
        "timestamps": {
          "from": "00:02:10,960",
          "to": "00:02:15,560"
        },
        "offsets": {
          "from": 130960,
          "to": 135560
        },
        "text": "ووظيفة الـ Container إنه يشغل Process واحدة بس."
      },
      {
        "timestamps": {
          "from": "00:02:17,160",
          "to": "00:02:24,660"
        },
        "offsets": {
          "from": 137160,
          "to": 144660
        },
        "text": "كل هدف الـ Container إنه يعمل Run لـ Process واحدة بس. لو الـ Process دي"
      },
      {
        "timestamps": {
          "from": "00:02:24,660",
          "to": "00:02:30,720"
        },
        "offsets": {
          "from": 144660,
          "to": 150720
        },
        "text": "حصل لها Terminate الـ Container كله ملوش لازمة. واحدة واحدة تاني كده"
      },
      {
        "timestamps": {
          "from": "00:02:30,720",
          "to": "00:02:36,960"
        },
        "offsets": {
          "from": 150720,
          "to": 156960
        },
        "text": "ونشوف الحكاية دي من الأول خالص وبالراحة. دلوقتي لو أنت"
      },
      {
        "timestamps": {
          "from": "00:02:36,960",
          "to": "00:02:39,060"
        },
        "offsets": {
          "from": 156960,
          "to": 159060
        },
        "text": "عندك Virtual Machine. إحنا دايماً قلنا عشان نفهم"
      },
      {
        "timestamps": {
          "from": "00:02:39,060",
          "to": "00:02:41,820"
        },
        "offsets": {
          "from": 159060,
          "to": 161820
        },
        "text": "الـ Container دايماً بنقارنه بالـ Virtual Machine. لو أنت عندك"
      },
      {
        "timestamps": {
          "from": "00:02:41,820",
          "to": "00:02:47,100"
        },
        "offsets": {
          "from": 161820,
          "to": 167100
        },
        "text": "Virtual Machine، إحنا متفقين إن الـ Virtual Machine دي فيها"
      },
      {
        "timestamps": {
          "from": "00:02:47,100",
          "to": "00:02:53,880"
        },
        "offsets": {
          "from": 167100,
          "to": 173880
        },
        "text": "Operating System، وأوريدي فيها شوية حاجات، وبعدين فيها"
      },
      {
        "timestamps": {
          "from": "00:02:53,880",
          "to": "00:02:59,460"
        },
        "offsets": {
          "from": 173880,
          "to": 179460
        },
        "text": "الـ Apps بتاعتك، وممكن يكون فيها Apps تانية. تمام؟ أي App تانية إنت"
      },
      {
        "timestamps": {
          "from": "00:02:59,460",
          "to": "00:03:04,260"
        },
        "offsets": {
          "from": 179460,
          "to": 184260
        },
        "text": "ممكن تنزلها سواء محتاجها لنفس الحاجة دي أو مش محتاجها."
      },
      {
        "timestamps": {
          "from": "00:03:04,260",
          "to": "00:03:08,040"
        },
        "offsets": {
          "from": 184260,
          "to": 188040
        },
        "text": "أو تنزل نسخة تانية زيها مثلاً لأي سبب من الأسباب. وكده تبقى"
      },
      {
        "timestamps": {
          "from": "00:03:08,040",
          "to": "00:03:14,320"
        },
        "offsets": {
          "from": 188040,
          "to": 194320
        },
        "text": "هي مثلاً وهي نفسها كمان. دي"
      },
      {
        "timestamps": {
          "from": "00:03:14,320",
          "to": "00:03:21,280"
        },
        "offsets": {
          "from": 194320,
          "to": 201280
        },
        "text": "كل اللي فيها أنت ممكن تستعمله. لما تفتح ممكن تستفيد من كل"
      },
      {
        "timestamps": {
          "from": "00:03:21,280",
          "to": "00:03:30,220"
        },
        "offsets": {
          "from": 201280,
          "to": 210220
        },
        "text": "حاجة موجودة جواها. فيها نظام كامل نزل عندك بالكامل."
      },
      {
        "timestamps": {
          "from": "00:03:30,220",
          "to": "00:03:33,940"
        },
        "offsets": {
          "from": 210220,
          "to": 213940
        },
        "text": "نزل عندك بالكامل. فأنا ممكن أفتح وما استعملش حتى اللي أنا"
      },
      {
        "timestamps": {
          "from": "00:03:33,940",
          "to": "00:03:38,440"
        },
        "offsets": {
          "from": 213940,
          "to": 218440
        },
        "text": "منزلها هنا. أنا ممكن أستعمل مباشرة، لأن فيها نظام كامل."
      },
      {
        "timestamps": {
          "from": "00:03:38,440",
          "to": "00:03:44,260"
        },
        "offsets": {
          "from": 218440,
          "to": 224260
        },
        "text": "كاملة وفيها كل شيء. فلذلك لما تفتح بتبقى بالنسبة لك"
      },
      {
        "timestamps": {
          "from": "00:03:44,260",
          "to": "00:03:49,420"
        },
        "offsets": {
          "from": 224260,
          "to": 229420
        },
        "text": "كاملة جداً، مفيش مشكلة خالص. الـ Container مش كده. فكرة الـ Container"
      },
      {
        "timestamps": {
          "from": "00:03:49,420",
          "to": "00:03:52,360"
        },
        "offsets": {
          "from": 229420,
          "to": 232360
        },
        "text": "مش إن أنا أقعد أستعمل الحاجات دي كلها. فكرة الـ Container إن أنا"
      },
      {
        "timestamps": {
          "from": "00:03:52,360",
          "to": "00:03:55,960"
        },
        "offsets": {
          "from": 232360,
          "to": 235960
        },
        "text": "بعمل Bundle للـ Application بالـ requirements دي بس، إن أنا يبقى عندي الـ Container"
      },
      {
        "timestamps": {
          "from": "00:03:55,960",
          "to": "00:04:00,360"
        },
        "offsets": {
          "from": 235960,
          "to": 240360
        },
        "text": "بتاعي فيه بس الـ Application بتاعتي."
      },
      {
        "timestamps": {
          "from": "00:04:00,360",
          "to": "00:04:07,840"
        },
        "offsets": {
          "from": 240360,
          "to": 247840
        },
        "text": "وفيه الجزء اللي يا دوب بس يرن الـ Application بتاعتي. فأنا"
      },
      {
        "timestamps": {
          "from": "00:04:07,840",
          "to": "00:04:12,900"
        },
        "offsets": {
          "from": 247840,
          "to": 252900
        },
        "text": "الـ Container بتاعي هو عبارة عن الـ Application دي بس. الـ Container"
      },
      {
        "timestamps": {
          "from": "00:04:12,900",
          "to": "00:04:21,220"
        },
        "offsets": {
          "from": 252900,
          "to": 261220
        },
        "text": "يساوي الـ Application. فلو أنت قفلت الـ Application دي،"
      },
      {
        "timestamps": {
          "from": "00:04:21,220",
          "to": "00:04:25,680"
        },
        "offsets": {
          "from": 261220,
          "to": 265680
        },
        "text": "الـ Container ملوش لازمة. الكلام"
      },
      {
        "timestamps": {
          "from": "00:04:25,680",
          "to": "00:04:29,400"
        },
        "offsets": {
          "from": 265680,
          "to": 269400
        },
        "text": "ده مش هو هو بالنسبة للـ VM؛ أنت ممكن الـ Application تتقفل وأنت"
      },
      {
        "timestamps": {
          "from": "00:04:29,400",
          "to": "00:04:33,420"
        },
        "offsets": {
          "from": 269400,
          "to": 273420
        },
        "text": "عندك لسه الـ Operating System بتاع الـ VM قايم. الوضع ده مش"
      },
      {
        "timestamps": {
          "from": "00:04:33,420",
          "to": "00:04:38,580"
        },
        "offsets": {
          "from": 273420,
          "to": 278580
        },
        "text": "هو هو في الـ Container. حتى لو كان الـ Container ده كل اللي فيه هو"
      },
      {
        "timestamps": {
          "from": "00:03:38,580",
          "to": "00:04:41,900"
        },
        "offsets": {
          "from": 278580,
          "to": 281900
        },
        "text": "الـ Operating System. يعني أنا من شوية نزلت Container Fedora."
      },
      {
        "timestamps": {
          "from": "00:04:41,900",
          "to": "00:04:46,520"
        },
        "offsets": {
          "from": 281900,
          "to": 286520
        },
        "text": "والـ Container ده كل اللي فيه عبارة عن جزء Operating System"
      },
      {
        "timestamps": {
          "from": "00:04:46,520",
          "to": "00:04:50,120"
        },
        "offsets": {
          "from": 286520,
          "to": 290120
        },
        "text": "specifications. تمام؟ بتزود على الـ Kernel بتاعك؛ أنت عندك Kernel"
      },
      {
        "timestamps": {
          "from": "00:04:50,120",
          "to": "00:04:53,060"
        },
        "offsets": {
          "from": 290120,
          "to": 293060
        },
        "text": "أنا عندي Kernel مثلاً Ubuntu، عندي Kernel Linux اللي هو Ubuntu."
      },
      {
        "timestamps": {
          "from": "00:04:53,060",
          "to": "00:04:56,600"
        },
        "offsets": {
          "from": 293060,
          "to": 296600
        },
        "text": "مثلاً، هو خد جزء من الـ Kernel زود عليه شوية specifications وراح"
      },
      {
        "timestamps": {
          "from": "00:04:56,600",
          "to": "00:05:01,220"
        },
        "offsets": {
          "from": 296600,
          "to": 301220
        },
        "text": "مشغل أو عامل Distribution مثلاً Fedora. كويس كده؟ فوق"
      },
      {
        "timestamps": {
          "from": "00:10:00,000",
          "to": "00:10:03,760"
        },
        "offsets": {
          "from": 600000,
          "to": 603760
        },
        "text": "كويس كده؟ فوق الـ Operating System ده فيه Application running برضو."
      },
      {
        "timestamps": {
          "from": "00:10:03,760",
          "to": "00:10:06,760"
        },
        "offsets": {
          "from": 603760,
          "to": 606760
        },
        "text": "الـ Application دي هي Bash."
      },
      {
        "timestamps": {
          "from": "00:10:06,760",
          "to": "00:10:08,760"
        },
        "offsets": {
          "from": 606760,
          "to": 608760
        },
        "text": "هي الـ Bash shell."
      },
      {
        "timestamps": {
          "from": "00:10:08,760",
          "to": "00:10:13,600"
        },
        "offsets": {
          "from": 608760,
          "to": 613600
        },
        "text": "فالـ Container ده اللي أنا نزلته من شوية، أول Container أنا نزلته"
      },
      {
        "timestamps": {
          "from": "00:10:13,600",
          "to": "00:10:17,600"
        },
        "offsets": {
          "from": 613600,
          "to": 617600
        },
        "text": "هو فيه Application فعلاً؛ إيه هي الـ Application دي؟ Bash."
      },
      {
        "timestamps": {
          "from": "00:10:17,600",
          "to": "00:10:21,900"
        },
        "offsets": {
          "from": 617600,
          "to": 621900
        },
        "text": "لو الـ Bash دي قفلت زي ما عملت Exit منها،"
      },
      {
        "timestamps": {
          "from": "00:10:21,900",
          "to": "00:10:26,400"
        },
        "offsets": {
          "from": 621900,
          "to": 626400
        },
        "text": "لو Terminated خلاص مفيش أي Application running في الـ Container."
      },
      {
        "timestamps": {
          "from": "00:10:26,400",
          "to": "00:10:35,400"
        },
        "offsets": {
          "from": 626400,
          "to": 635400
        },
        "text": "فكل Container لازم وحتماً ولابد يبقى فيه Command بيشغل الـ Container ده أو بيشتغل جواه."
      },
      {
        "timestamps": {
          "from": "00:10:35,400",
          "to": "00:10:43,400"
        },
        "offsets": {
          "from": 635400,
          "to": 643400
        },
        "text": "الـ Container بيساوي الـ Command اللي شغال جواه."
      },
      {
        "timestamps": {
          "from": "00:10:43,400",
          "to": "00:10:51,400"
        },
        "offsets": {
          "from": 643400,
          "to": 651400
        },
        "text": "في المثال بتاع Fedora، الـ Container بتاعي ده الـ Command اللي أنا شغلته كان Bash."
      },
      {
        "timestamps": {
          "from": "00:10:51,400",
          "to": "00:10:55,400"
        },
        "offsets": {
          "from": 651400,
          "to": 655400
        },
        "text": "فالـ Container طول ما هو Up and running، طول ما الـ Bash شغالة."
      },
      {
        "timestamps": {
          "from": "00:10:55,400",
          "to": "00:11:00,560"
        },
        "offsets": {
          "from": 655400,
          "to": 660560
        },
        "text": "معنى إن الـ Container يقفل إن الـ Bash دي تقفل. ومعنى إن"
      },
      {
        "timestamps": {
          "from": "00:11:00,560",
          "to": "00:11:04,400"
        },
        "offsets": {
          "from": 660560,
          "to": 664400
        },
        "text": "الـ Bash تقفل إن الـ Container يقفل. لما نزلت الـ Container بتاع"
      },
      {
        "timestamps": {
          "from": "00:11:04,400",
          "to": "00:11:11,600"
        },
        "offsets": {
          "from": 664400,
          "to": 671600
        },
        "text": "Python، الـ Command اللي جوه كان Python3. هنتأكد منه دلوقتي."
      },
      {
        "timestamps": {
          "from": "00:11:11,600",
          "to": "00:11:17,720"
        },
        "offsets": {
          "from": 671600,
          "to": 677720
        },
        "text": "ده الـ Command اللي مقوّم الـ Container. لو الـ Command ده قفل أو حصل له Terminate"
      },
      {
        "timestamps": {
          "from": "00:11:17,720",
          "to": "00:11:23,300"
        },
        "offsets": {
          "from": 677720,
          "to": 683300
        },
        "text": "بأي شكل من الأشكال، كل الـ Container هيحصل له Terminate. فالـ Container هو"
      },
      {
        "timestamps": {
          "from": "00:11:23,300",
          "to": "00:11:30,080"
        },
        "offsets": {
          "from": 683300,
          "to": 690080
        },
        "text": "ما هوش قايم بذاته. فما ينفعش إنك تفتح مثلاً... وتكون قافله مثلاً."
      },
      {
        "timestamps": {
          "from": "00:11:30,080",
          "to": "00:11:34,280"
        },
        "offsets": {
          "from": 690080,
          "to": 694280
        },
        "text": "الـ Python مثلاً وراح عمال متفسح في حتة تانية. لا ما ينفعش. طب"
      },
      {
        "timestamps": {
          "from": "00:11:34,280",
          "to": "00:11:38,000"
        },
        "offsets": {
          "from": 694280,
          "to": 698000
        },
        "text": "أنا ينفع إن أنا أقفل نفس الـ Container وأفتحه تاني بس بـ Command"
      },
      {
        "timestamps": {
          "from": "00:11:38,000",
          "to": "00:11:43,280"
        },
        "offsets": {
          "from": 698000,
          "to": 703280
        },
        "text": "تاني؟ أيوه ينفع، ينفع عادي جداً جداً. مش أنا عندي دلوقتي الـ Container"
      },
      {
        "timestamps": {
          "from": "00:11:43,280",
          "to": "00:11:49,400"
        },
        "offsets": {
          "from": 703280,
          "to": 709400
        },
        "text": "بتاع Python؟ تعالوا نرجع له مرة تانية. لو جيت كده على"
      },
      {
        "timestamps": {
          "from": "00:11:49,500",
          "to": "00:11:59,280"
        },
        "offsets": {
          "from": 709500,
          "to": 719280
        },
        "text": "رجعت مرة تانية هنا كده، وقلت له docker container -a، أوكي؟"
      },
      {
        "timestamps": {
          "from": "00:11:59,280",
          "to": "00:12:07,920"
        },
        "offsets": {
          "from": 719280,
          "to": 727920
        },
        "text": "هالاقي إنه عندي 2 Containers والاتنين Exited تمام؟ ومنهم"
      },
      {
        "timestamps": {
          "from": "00:12:07,920",
          "to": "00:12:12,240"
        },
        "offsets": {
          "from": 727920,
          "to": 732240
        },
        "text": "كان الـ Container اللي هو بتاع Python ده والـ Command بتاعه اللي كان مقوّم"
      },
      {
        "timestamps": {
          "from": "00:12:12,240",
          "to": "00:12:15,600"
        },
        "offsets": {
          "from": 732240,
          "to": 735600
        },
        "text": "الـ Container اللي كان شغال جوه الـ Container اللي هو العمود بتاع"
      },
      {
        "timestamps": {
          "from": "00:12:15,600",
          "to": "00:12:18,900"
        },
        "offsets": {
          "from": 735600,
          "to": 738900
        },
        "text": "الـ Container، لو اتقفلت أصلاً كان python3 اللي هو بالظبط كأني"
      },
      {
        "timestamps": {
          "from": "00:12:18,900",
          "to": "00:12:21,540"
        },
        "offsets": {
          "from": 738900,
          "to": 741540
        },
        "text": "باكتب python3 عندي على Linux عادي جداً جداً، فيفتح لي اللي هو"
      },
      {
        "timestamps": {
          "from": "00:12:21,540",
          "to": "00:12:28,080"
        },
        "offsets": {
          "from": 741540,
          "to": 748080
        },
        "text": "الـ REPL Command أو الـ REPL Interface. طب أنا ممكن أفتح الـ Container ده؟"
      },
      {
        "timestamps": {
          "from": "00:12:28,080",
          "to": "00:12:33,180"
        },
        "offsets": {
          "from": 748080,
          "to": 753180
        },
        "text": "بس بـ Command تاني؟ تعالوا كده نجرب. آجي أقول له docker"
      },
      {
        "timestamps": {
          "from": "00:12:33,180",
          "to": "00:12:43,660"
        },
        "offsets": {
          "from": 753180,
          "to": 763660
        },
        "text": "container آجي أقول له docker container run -it python"
      },
      {
        "timestamps": {
          "from": "00:12:43,660",
          "to": "00:12:50,560"
        },
        "offsets": {
          "from": 763660,
          "to": 770560
        },
        "text": "نسيت بس run، فـ docker container run -it python وأقول له /bin"
      },
      {
        "timestamps": {
          "from": "00:12:50,560",
          "to": "00:12:57,100"
        },
        "offsets": {
          "from": 770560,
          "to": 777100
        },
        "text": "/bash. عايز أفتح الـ Container زي ما كنت فاتحه قبل كده، بس"
      },
      {
        "timestamps": {
          "from": "00:12:57,100",
          "to": "00:13:01,300"
        },
        "offsets": {
          "from": 777100,
          "to": 781300
        },
        "text": "المرة دي أنا مش عايز أعمل Run لـ python3 command، أنا عايز أعمل Run للـ bash"
      },
      {
        "timestamps": {
          "from": "00:13:01,300",
          "to": "00:13:07,420"
        },
        "offsets": {
          "from": 781300,
          "to": 787420
        },
        "text": "command. وأدوس Enter، فلاقيه راح مدخلني على الـ Container ده، هو هو"
      },
      {
        "timestamps": {
          "from": "00:13:07,420",
          "to": "00:13:11,620"
        },
        "offsets": {
          "from": 787420,
          "to": 791620
        },
        "text": "اللي هو من شوية كان مدخلني عليه ومشغل Python REPL mode."
      },
      {
        "timestamps": {
          "from": "00:13:11,620",
          "to": "00:13:17,320"
        },
        "offsets": {
          "from": 791620,
          "to": 797320
        },
        "text": "بس المرة دي راح مدخلني على الـ Container ده وفتح لي الـ Terminal. لو"
      },
      {
        "timestamps": {
          "from": "00:13:17,320",
          "to": "00:13:27,580"
        },
        "offsets": {
          "from": 797320,
          "to": 807580
        },
        "text": "جيت كده قلت له... ده بيوريني على الـ Machine بتاعتي. في الحالة دي"
      },
      {
        "timestamps": {
          "from": "00:13:27,580",
          "to": "00:13:32,860"
        },
        "offsets": {
          "from": 807580,
          "to": 812860
        },
        "text": "هيوريني فين؟ على الـ Container اللي هي جوه الـ Container. فهلاقي إنه جوه"
      },
      {
        "timestamps": {
          "from": "00:13:32,860",
          "to": "00:13:35,920"
        },
        "offsets": {
          "from": 812860,
          "to": 815920
        },
        "text": "الـ Container فيه Process واحدة. أنت شايف اتنين هنا، عارف إنك أنت شايف"
      },
      {
        "timestamps": {
          "from": "00:13:35,920",
          "to": "00:13:39,100"
        },
        "offsets": {
          "from": 815920,
          "to": 819100
        },
        "text": "اتنين، بس واحدة منهم هي اللي أنا لسه ضاربه من شوية، فما هيش"
      },
      {
        "timestamps": {
          "from": "00:13:39,100",
          "to": "00:13:44,620"
        },
        "offsets": {
          "from": 819100,
          "to": 824620
        },
        "text": "موجودة يعني. الـ Process الـ Container قايم علشانها، علشانها"
      },
      {
        "timestamps": {
          "from": "00:13:44,620",
          "to": "00:13:50,740"
        },
        "offsets": {
          "from": 824620,
          "to": 830740
        },
        "text": "هي دايماً الـ Process الـ ID بتاعها واحد، الـ PID 1، اللي"
      },
      {
        "timestamps": {
          "from": "00:13:50,740",
          "to": "00:13:56,800"
        },
        "offsets": {
          "from": 830740,
          "to": 836800
        },
        "text": "هي اللي أنا كتبتها هنا دي، اللي هي bash. لو الـ PID 1 جوه"
      },
      {
        "timestamps": {
          "from": "00:13:56,800",
          "to": "00:14:02,860"
        },
        "offsets": {
          "from": 836800,
          "to": 842860
        },
        "text": "الـ Container حصل له Terminated، الـ Container هيـ Terminate. ده مهم جداً جداً عشان"
      },
      {
        "timestamps": {
          "from": "00:14:02,860",
          "to": "00:14:06,100"
        },
        "offsets": {
          "from": 842860,
          "to": 846100
        },
        "text": "دايماً تبقى حاطه في دماغك وإحنا شغالين في الـ Container. طب هل معنى"
      },
      {
        "timestamps": {
          "from": "00:14:06,100",
          "to": "00:14:09,580"
        },
        "offsets": {
          "from": 846100,
          "to": 849580
        },
        "text": "كده إن أنا ما أقدرش إني أعمل Run لأي Process تانية جواه؟ لا، تقدر تقدر"
      },
      {
        "timestamps": {
          "from": "00:14:09,580",
          "to": "00:14:14,740"
        },
        "offsets": {
          "from": 849580,
          "to": 854740
        },
        "text": "تعمل Run ما فيش مشاكل، بس العمود بتاعه هو دي. فاكرين لما"
      },
      {
        "timestamps": {
          "from": "00:14:14,740",
          "to": "00:14:21,940"
        },
        "offsets": {
          "from": 854740,
          "to": 861940
        },
        "text": "اتكلمنا عن الـ Init ونقول إن ده الأصل بتاع فكرة الـ Process، وعندي هنا"
      },
      {
        "timestamps": {
          "from": "00:14:21,940",
          "to": "00:14:27,640"
        },
        "offsets": {
          "from": 861940,
          "to": 867640
        },
        "text": "الـ Process الأولانية اللي بينبثق منها كل الـ Processes التانية هي دي الفكرة. أنا"
      },
      {
        "timestamps": {
          "from": "00:14:27,640",
          "to": "00:14:36,060"
        },
        "offsets": {
          "from": 867640,
          "to": 876060
        },
        "text": "هنا أقدر آجي أقول له مثلاً ps فيقول لي إن اللي عندك هو ده."
      },
      {
        "timestamps": {
          "from": "00:14:36,100",
          "to": "00:14:42,940"
        },
        "offsets": {
          "from": 876100,
          "to": 882940
        },
        "text": "هو ده عادي. طب لو قلت له python هيقوم يفتح لي اللي أنا شفته من"
      },
      {
        "timestamps": {
          "from": "00:14:42,940",
          "to": "00:14:49,780"
        },
        "offsets": {
          "from": 882940,
          "to": 889780
        },
        "text": "شوية لما عملت Run للـ Container من غير أي Command. فهاجي هنا عادي جداً"
      },
      {
        "timestamps": {
          "from": "00:14:49,780",
          "to": "00:15:00,160"
        },
        "offsets": {
          "from": 889780,
          "to": 900160
        },
        "text": "جداً، ده عادي جداً جداً. طب أنا جاي أعمل exit من هنا. لما عملت exit من"
      },
      {
        "timestamps": {
          "from": "00:20:00,000",
          "to": "00:20:07,080"
        },
        "offsets": {
          "from": 1200000,
          "to": 1207080
        },
        "text": "هنا حصل إيه؟ خرجني على الـ Terminal اللي جوه الـ Container. قبل كده لما"
      },
      {
        "timestamps": {
          "from": "00:20:07,080",
          "to": "00:20:12,900"
        },
        "offsets": {
          "from": 1207080,
          "to": 1212900
        },
        "text": "عملت exit خرجني من الـ Container كله. الـ Container كله حصل له stop. ليه؟"
      },
      {
        "timestamps": {
          "from": "00:20:12,900",
          "to": "00:20:18,960"
        },
        "offsets": {
          "from": 1212900,
          "to": 1218960
        },
        "text": "لأن دي كانت الـ Process الوحيدة اللي شغالة. إنما لما دخلت من جوه"
      },
      {
        "timestamps": {
          "from": "00:20:18,960",
          "to": "00:20:28,000"
        },
        "offsets": {
          "from": 1218960,
          "to": 1228000
        },
        "text": "بتاعة الـ Container بقت عندي، وماكانتش هي."
      },
      {
        "timestamps": {
          "from": "00:20:28,000",
          "to": "00:20:35,520"
        },
        "offsets": {
          "from": 1228000,
          "to": 1235520
        },
        "text": "عندي هنا مين؟ عندي هنا الـ bash. لو عملت exit دلوقتي هيخرجني بره."
      },
      {
        "timestamps": {
          "from": "00:20:35,520",
          "to": "00:20:41,240"
        },
        "offsets": {
          "from": 1235520,
          "to": 1241240
        },
        "text": "بره الـ Container. كده الـ Container كله ملوش لازمة، ما"
      },
      {
        "timestamps": {
          "from": "00:20:41,240",
          "to": "00:20:47,460"
        },
        "offsets": {
          "from": 1241240,
          "to": 1247460
        },
        "text": "فيش جوه الـ Container. أكني عندي مثلاً VM مفيش عليها أي"
      },
      {
        "timestamps": {
          "from": "00:20:47,460",
          "to": "00:20:53,480"
        },
        "offsets": {
          "from": 1247460,
          "to": 1253480
        },
        "text": "أصلاً، كده كأنها قفلت. ده معناه إيه؟ لما ميكونش عندك ولا"
      },
      {
        "timestamps": {
          "from": "00:20:53,480",
          "to": "00:20:56,900"
        },
        "offsets": {
          "from": 1253480,
          "to": 1256900
        },
        "text": "process running، لا operating system process ولا application process ولا أي حاجة."
      },
      {
        "timestamps": {
          "from": "00:20:56,900",
          "to": "00:21:00,200"
        },
        "offsets": {
          "from": 1256900,
          "to": 1260200
        },
        "text": "الـ VM مفيهاش أي process running. إيه الـ VM دي؟ دي VM"
      },
      {
        "timestamps": {
          "from": "00:21:00,200",
          "to": "00:21:05,480"
        },
        "offsets": {
          "from": 1260200,
          "to": 1265480
        },
        "text": "مقفولة، VM كأنك عملتلها Shutdown. دي طلقة يعني"
      },
      {
        "timestamps": {
          "from": "00:21:05,480",
          "to": "00:21:12,080"
        },
        "offsets": {
          "from": 1265480,
          "to": 1272080
        },
        "text": "قبلة الرحمة، OK؟ فالـ Concept ده Concept مهم جداً جداً وأنت شغال في"
      },
      {
        "timestamps": {
          "from": "00:21:12,080",
          "to": "00:21:16,700"
        },
        "offsets": {
          "from": 1272080,
          "to": 1276700
        },
        "text": "الـ Containers عشان تعرف الفرق ما بينه وما بين الـ VM. أقدر إن أنا أعمل Run"
      },
      {
        "timestamps": {
          "from": "00:21:16,700",
          "to": "00:21:20,660"
        },
        "offsets": {
          "from": 1276700,
          "to": 1280660
        },
        "text": "لأكثر من Process، إحنا فعلاً عملنا Run لأكثر من Process. بل أنا"
      },
      {
        "timestamps": {
          "from": "00:21:20,660",
          "to": "00:21:24,240"
        },
        "offsets": {
          "from": 1280660,
          "to": 1284240
        },
        "text": "أقدر مثلاً إن أنا أدخل تاني جوه الـ Container. خلينا نفتح الـ Container"
      },
      {
        "timestamps": {
          "from": "00:21:24,240",
          "to": "00:21:31,220"
        },
        "offsets": {
          "from": 1284240,
          "to": 1291220
        },
        "text": "مرة تانية وندخل عليه، وأقدر أجي هنا أقوله مثلاً sudo"
      },
      {
        "timestamps": {
          "from": "00:21:31,220",
          "to": "00:21:41,120"
        },
        "offsets": {
          "from": 1291220,
          "to": 1301120
        },
        "text": "مثلاً، بس sudo مش موجود عشان أنا على الـ root طبعاً. أنت"
      },
      {
        "timestamps": {
          "from": "00:21:41,120",
          "to": "00:21:44,960"
        },
        "offsets": {
          "from": 1301120,
          "to": 1304960
        },
        "text": "هتلاحظ إن فيه Commands كتيرة بتبقى ناقصة لأن أنا مش محتاج كل حاجة"
      },
      {
        "timestamps": {
          "from": "00:21:44,960",
          "to": "00:21:49,980"
        },
        "offsets": {
          "from": 1304960,
          "to": 1309980
        },
        "text": "موجودة جوه الـ Container ده. أقدر بعد ما أعمل الـ Update ده"
      },
      {
        "timestamps": {
          "from": "00:21:49,980",
          "to": "00:21:59,160"
        },
        "offsets": {
          "from": 1309980,
          "to": 1319160
        },
        "text": "أتعامل عادي جداً جداً، أكني بتعامل مع Linux عادي مفيش منه أي"
      },
      {
        "timestamps": {
          "from": "00:21:59,160",
          "to": "00:22:04,200"
        },
        "offsets": {
          "from": 1319160,
          "to": 1324200
        },
        "text": "مشكلة خالص، لأن كل دي عبارة عن Layers بتضاف للأصل بتاع"
      },
      {
        "timestamps": {
          "from": "00:22:04,200",
          "to": "00:22:11,160"
        },
        "offsets": {
          "from": 1324200,
          "to": 1331160
        },
        "text": "الـ Image بتاعة الـ Template. أكني بعمل Snapshot لو تفتكر. OK؟ بس بعد ما"
      },
      {
        "timestamps": {
          "from": "00:22:11,160",
          "to": "00:22:18,480"
        },
        "offsets": {
          "from": 1331160,
          "to": 1338480
        },
        "text": "بشيل الـ Container ده وأمسحه، كل ده بيروح. OK؟ فدي نقطة"
      },
      {
        "timestamps": {
          "from": "00:22:18,480",
          "to": "00:22:26,700"
        },
        "offsets": {
          "from": 1338480,
          "to": 1346700
        },
        "text": "مهمة في الفرق الجوهري ما بينه وبين الـ VM. طيب من الحاجات"
      },
      {
        "timestamps": {
          "from": "00:22:26,700",
          "to": "00:22:30,180"
        },
        "offsets": {
          "from": 1346700,
          "to": 1350180
        },
        "text": "برضو اللي أنا قادر أعملها إن أنا بعد مثلاً ما أخرج من هنا أقول"
      },
      {
        "timestamps": {
          "from": "00:22:30,180",
          "to": "00:22:40,980"
        },
        "offsets": {
          "from": 1350180,
          "to": 1360980
        },
        "text": "له من هنا كده، هاجي أقوله مثلاً الـ Container ده قادر أشيله خالص"
      },
      {
        "timestamps": {
          "from": "00:22:40,980",
          "to": "00:22:48,060"
        },
        "offsets": {
          "from": 1360980,
          "to": 1368060
        },
        "text": "من عندي، هقوله docker container rm واسم الـ Container"
      },
      {
        "timestamps": {
          "from": "00:22:48,060",
          "to": "00:22:52,320"
        },
        "offsets": {
          "from": 1368060,
          "to": 1372320
        },
        "text": "يا إما اسمه مثلاً زي كده، يا إما أديله الـ ID، أكتب أول شوية"
      },
      {
        "timestamps": {
          "from": "00:22:52,320",
          "to": "00:22:55,140"
        },
        "offsets": {
          "from": 1372320,
          "to": 1375140
        },
        "text": "حروف من الـ ID. وأقدر أشيل أكتر من Container، فأجي أقوله"
      },
      {
        "timestamps": {
          "from": "00:22:55,140",
          "to": "00:23:03,240"
        },
        "offsets": {
          "from": 1375140,
          "to": 1383240
        },
        "text": "مثلاً bd8 وكمان 42d وكمان 9"
      },
      {
        "timestamps": {
          "from": "00:23:03,240",
          "to": "00:23:08,160"
        },
        "offsets": {
          "from": 1383240,
          "to": 1388160
        },
        "text": "fb، هكتبلك بس أول كام حرف من الـ ID علامة على الـ Container اللي"
      },
      {
        "timestamps": {
          "from": "00:23:08,160",
          "to": "00:23:13,980"
        },
        "offsets": {
          "from": 1388160,
          "to": 1393980
        },
        "text": "عايز تعمله Delete. لو رحت تاني عملت docker container"
      },
      {
        "timestamps": {
          "from": "00:23:13,980",
          "to": "00:23:18,480"
        },
        "offsets": {
          "from": 1393980,
          "to": 1398480
        },
        "text": "ls -a هيقولي إن كله اتمسح، وفيه واحدة نسيتها اللي هي دي."
      },
      {
        "timestamps": {
          "from": "00:23:18,480",
          "to": "00:23:23,520"
        },
        "offsets": {
          "from": 1398480,
          "to": 1403520
        },
        "text": "OK، خلينا نمسح دي كمان اللي هي"
      },
      {
        "timestamps": {
          "from": "00:23:23,520",
          "to": "00:23:30,720"
        },
        "offsets": {
          "from": 1403520,
          "to": 1410720
        },
        "text": "كده معنديش أي Containers خالص. نفس الوضع برضو وبنفس الـ Command هو"
      },
      {
        "timestamps": {
          "from": "00:23:30,720",
          "to": "00:23:34,740"
        },
        "offsets": {
          "from": 1410720,
          "to": 1414740
        },
        "text": "هو، هقدر أعمل Delete للـ Images بنفس الطريقة، بس بدل ما"
      },
      {
        "timestamps": {
          "from": "00:23:34,740",
          "to": "00:23:37,980"
        },
        "offsets": {
          "from": 1414740,
          "to": 1417980
        },
        "text": "أقوله container أقوله image. خلينا نشوف الـ Images اللي عندنا"
      },
      {
        "timestamps": {
          "from": "00:23:37,980",
          "to": "00:23:46,320"
        },
        "offsets": {
          "from": 1417980,
          "to": 1426320
        },
        "text": "كده أقوله docker image ls، هيقولي عندك two images اللي هما دول."
      },
      {
        "timestamps": {
          "from": "00:23:46,320",
          "to": "00:23:51,840"
        },
        "offsets": {
          "from": 1426320,
          "to": 1431840
        },
        "text": "هقوله برضو تاني docker image rm، وأقوله python. المرة دي"
      },
      {
        "timestamps": {
          "from": "00:23:51,840",
          "to": "00:23:57,620"
        },
        "offsets": {
          "from": 1431840,
          "to": 1437620
        },
        "text": "هستعمل الاسم، ممكن أستعمل الاسم وممكن الـ ID، وأقوله Fedora."
      },
      {
        "timestamps": {
          "from": "00:23:57,620",
          "to": "00:24:04,260"
        },
        "offsets": {
          "from": 1437620,
          "to": 1444260
        },
        "text": "هيـ Delete كل الـ Layers بتاعتهم كلهم. نقطة على موضوع الـ Layers دي لما إحنا قلنا إن"
      },
      {
        "timestamps": {
          "from": "00:24:04,260",
          "to": "00:24:09,420"
        },
        "offsets": {
          "from": 1444260,
          "to": 1449420
        },
        "text": "ممكن الـ Image بتاعتك دي كلها تعملها Flatten وتتعمل تبقى Layer واحدة"
      },
      {
        "timestamps": {
          "from": "00:24:09,420",
          "to": "00:24:13,560"
        },
        "offsets": {
          "from": 1449420,
          "to": 1453560
        },
        "text": "بس، وقلنا إن لأ، الأحسن إنك تخلي الـ Layers دي. ليه الأحسن؟"
      },
      {
        "timestamps": {
          "from": "00:24:13,560",
          "to": "00:24:18,660"
        },
        "offsets": {
          "from": 1453560,
          "to": 1458660
        },
        "text": "إنك تخلي الـ Layers هو الأحسن، لأنه بيقدر يستعمل نفس"
      },
      {
        "timestamps": {
          "from": "00:24:18,660",
          "to": "00:24:22,620"
        },
        "offsets": {
          "from": 1458660,
          "to": 1462620
        },
        "text": "الـ Layers لو متكررة. فافرض أنا دلوقتي كان عندي مثلاً"
      },
      {
        "timestamps": {
          "from": "00:24:22,620",
          "to": "00:24:27,240"
        },
        "offsets": {
          "from": 1462620,
          "to": 1467240
        },
        "text": "في Fedora. جيت مثلاً أو عندي Image في Fedora. جيت عملت مثلاً"
      },
      {
        "timestamps": {
          "from": "00:24:27,240",
          "to": "00:24:33,000"
        },
        "offsets": {
          "from": 1467240,
          "to": 1473000
        },
        "text": "جبت Image مثلاً Ubuntu. الـ Ubuntu هيبقى ليها Layers. جيت رحت منزل Image"
      },
      {
        "timestamps": {
          "from": "00:24:33,000",
          "to": "00:24:37,500"
        },
        "offsets": {
          "from": 1473000,
          "to": 1477500
        },
        "text": "تانية Python زي ما عملت من شوية. لو كانت الـ Image بتاعة Python مبنية"
      },
      {
        "timestamps": {
          "from": "00:24:37,500",
          "to": "00:24:42,720"
        },
        "offsets": {
          "from": 1477500,
          "to": 1482720
        },
        "text": "على Ubuntu تقدر تستعمل الـ Layers الأساسية بتاعة الـ Image بتاعة"
      },
      {
        "timestamps": {
          "from": "00:24:42,720",
          "to": "00:24:48,120"
        },
        "offsets": {
          "from": 1482720,
          "to": 1488120
        },
        "text": "Ubuntu. ساعتها Docker مش هيحتاج إنه يعمل Download للـ Layer"
      },
      {
        "timestamps": {
          "from": "00:24:48,120",
          "to": "00:24:56,460"
        },
        "offsets": {
          "from": 1488120,
          "to": 1496460
        },
        "text": "دي نفسها تاني طالما هي موجودة. فتقدر كذا Image تتشارك فيها وبعد كدة"
      },
      {
        "timestamps": {
          "from": "00:24:56,460",
          "to": "00:25:02,760"
        },
        "offsets": {
          "from": 1496460,
          "to": 1502760
        },
        "text": "Docker يحط الـ Layer دي في الـ Cache، فأقدر إني استعملها"
      },
      {
        "timestamps": {
          "from": "00:30:00,000",
          "to": "00:30:03,840"
        },
        "offsets": {
          "from": 1800000,
          "to": 1803840
        },
        "text": "فأقدر إني استعملها على طول. لو عملت لها"
      },
      {
        "timestamps": {
          "from": "00:30:03,840",
          "to": "00:30:08,520"
        },
        "offsets": {
          "from": 1803840,
          "to": 1808520
        },
        "text": "Squash هتبقى دي الـ Identity بتاعتها، ومفيش حد تاني هيقدر يستعملها."
      },
      {
        "timestamps": {
          "from": "00:30:08,520",
          "to": "00:30:12,960"
        },
        "offsets": {
          "from": 1808520,
          "to": 1812960
        },
        "text": "لذلك كل Layer من الـ Layers ليها الـ Identity بتاعتها، ليها الـ Hash"
      },
      {
        "timestamps": {
          "from": "00:30:12,960",
          "to": "00:30:16,440"
        },
        "offsets": {
          "from": 1812960,
          "to": 1816440
        },
        "text": "بتاعها. وبالـ Hash ده أقدر أعرف إذا كانت الـ Layer دي أقدر"
      },
      {
        "timestamps": {
          "from": "00:30:16,440",
          "to": "00:30:21,600"
        },
        "offsets": {
          "from": 1816440,
          "to": 1821600
        },
        "text": "أستعملها ولا لأ. عملت مثلاً Download لـ Image تانية، لقيت الـ Image دي"
      },
      {
        "timestamps": {
          "from": "00:30:21,600",
          "to": "00:30:26,520"
        },
        "offsets": {
          "from": 1821600,
          "to": 1826520
        },
        "text": "متكونة مثلاً من 3 Layers، من ضمنهم Layer عندي، فمش هعمل"
      },
      {
        "timestamps": {
          "from": "00:30:26,520",
          "to": "00:30:32,760"
        },
        "offsets": {
          "from": 1826520,
          "to": 1832760
        },
        "text": "Download للـ Layer دي، هستعمل من اللي موجودين. فلذلك إنك تسيبه"
      },
      {
        "timestamps": {
          "from": "00:30:32,760",
          "to": "00:30:38,520"
        },
        "offsets": {
          "from": 1832760,
          "to": 1838520
        },
        "text": "هو يعمل Manage للموضوع ده يبقى أحسن. تمام؟ يبقى كدة إحنا شفنا"
      },
      {
        "timestamps": {
          "from": "00:30:38,520",
          "to": "00:30:43,740"
        },
        "offsets": {
          "from": 1838520,
          "to": 1843740
        },
        "text": "Basic Commands في Docker. شفنا إزاي"
      },
      {
        "timestamps": {
          "from": "00:30:43,740",
          "to": "00:30:47,940"
        },
        "offsets": {
          "from": 1843740,
          "to": 1847940
        },
        "text": "إزاي"
      },
      {
        "timestamps": {
          "from": "00:30:47,940",
          "to": "00:30:53,680"
        },
        "offsets": {
          "from": 1847940,
          "to": 1853680
        },
        "text": "تمام؟ شفنا الفكرة إن كل"
      },
      {
        "timestamps": {
          "from": "00:30:53,680",
          "to": "00:30:55,680"
        },
        "offsets": {
          "from": 1853680,
          "to": 1855680
        },
        "text": "أو Application running"
      },
      {
        "timestamps": {
          "from": "00:30:55,680",
          "to": "00:30:58,500"
        },
        "offsets": {
          "from": 1855680,
          "to": 1858500
        },
        "text": "Application مرتبطة بالـ Container، والـ Container مرتبط بالـ Application"
      },
      {
        "timestamps": {
          "from": "00:30:58,500",
          "to": "00:31:02,220"
        },
        "offsets": {
          "from": 1858500,
          "to": 1862220
        },
        "text": "قفلت الـ Application دي الـ Container هيقفل معاك"
      },
      {
        "timestamps": {
          "from": "00:31:02,220",
          "to": "00:31:04,220"
        },
        "offsets": {
          "from": 1862220,
          "to": 1864220
        },
        "text": "Okay"
      }
    ]
  },
  {
    "id": 7,
    "title": "Docker Engine Architecture",
    "duration": 476.0,
    "isReady": true,
    "transcription": [
      {
        "timestamps": {
          "from": "00:00:00,000",
          "to": "00:00:12,000"
        },
        "offsets": {
          "from": 0,
          "to": 12000
        },
        "text": "أول حاجة عايز أقولها بالتفصيل بس، هنرجع للأرقام الأخيرة، بس مش هطول في الحتة دي."
      },
      {
        "timestamps": {
          "from": "00:00:12,000",
          "to": "00:00:22,000"
        },
        "offsets": {
          "from": 12000,
          "to": 22000
        },
        "text": "أول حاجة عايز أقولها عن الـ Docker Engine نفسه، لما عملنا docker version، شفنا الـ Client والـ Server."
      },
      {
        "timestamps": {
          "from": "00:00:22,000",
          "to": "00:00:31,000"
        },
        "offsets": {
          "from": 22000,
          "to": 31000
        },
        "text": "الـ Docker كـ Engine، هو اللي بيعمل الـ Container وبيديره زي الـ Hyper-V مثلاً في الـ Virtual Machines أو الـ VMware."
      },
      {
        "timestamps": {
          "from": "00:00:31,000",
          "to": "00:00:39,000"
        },
        "offsets": {
          "from": 31000,
          "to": 39000
        },
        "text": "بيتكون من 3 حاجات رئيسية، أول حاجة الـ runc والـ containerd والـ Daemon، هناخدهم واحدة واحدة."
      },
      {
        "timestamps": {
          "from": "00:00:39,000",
          "to": "00:00:49,000"
        },
        "offsets": {
          "from": 39000,
          "to": 49000
        },
        "text": "دلوقتي يعني إيه Daemon؟ الـ Docker Daemon أو اسمه dockerd في Linux، ده الـ Engine، الـ Server-side بتاع Docker."
      },
      {
        "timestamps": {
          "from": "00:00:49,000",
          "to": "00:00:52,000"
        },
        "offsets": {
          "from": 49000,
          "to": 52000
        },
        "text": "ده وظيفته إنه يخلي الـ Docker يشتغل بشكل سليم."
      },
      {
        "timestamps": {
          "from": "00:00:52,000",
          "to": "00:00:57,000"
        },
        "offsets": {
          "from": 52000,
          "to": 57000
        },
        "text": "لأن لما بنتكلم عن الـ Containers، إحنا مقلناش إن الـ Container محتاج بس الـ Runtime عشان يتعامل مع نظام التشغيل."
      },
      {
        "timestamps": {
          "from": "00:00:57,000",
          "to": "00:01:06,000"
        },
        "offsets": {
          "from": 57000,
          "to": 66000
        },
        "text": "ويبدأ يكمل عليه، اللي بيوصل الـ Container لبعضها وبيتحكم فيها هو الـ Docker Daemon."
      },
      {
        "timestamps": {
          "from": "00:01:06,000",
          "to": "00:01:19,000"
        },
        "offsets": {
          "from": 66000,
          "to": 79000
        },
        "text": "الـ Daemon برضه هو اللي بيستقبل الـ Commands، زي ما شفنا لما عملنا docker image pull، و docker container run، و create، و start، و exec."
      },
      {
        "timestamps": {
          "from": "00:01:19,000",
          "to": "00:01:22,000"
        },
        "offsets": {
          "from": 79000,
          "to": 82000
        },
        "text": "كل الـ Commands دي بتيجي من الـ Docker Client."
      },
      {
        "timestamps": {
          "from": "00:01:22,000",
          "to": "00:01:24,000"
        },
        "offsets": {
          "from": 82000,
          "to": 84000
        },
        "text": "وبتروح للـ Daemon."
      },
      {
        "timestamps": {
          "from": "00:01:24,000",
          "to": "00:01:36,000"
        },
        "offsets": {
          "from": 84000,
          "to": 96000
        },
        "text": "وهو بيشوف إنت محتاج إيه، محتاج Image، ولا Network، ولا User، ولا تكريت Container."
      },
      {
        "timestamps": {
          "from": "00:01:36,000",
          "to": "00:01:38,000"
        },
        "offsets": {
          "from": 96000,
          "to": 98000
        },
        "text": "وبينفذ على الأساس ده."
      },
      {
        "timestamps": {
          "from": "00:01:38,000",
          "to": "00:01:46,000"
        },
        "offsets": {
          "from": 98000,
          "to": 106000
        },
        "text": "لو الطلب ليه علاقة بإنك تشغل Container، فاللي بيحصل إن الـ Daemon بيباصي الـ Request للـ containerd."
      },
      {
        "timestamps": {
          "from": "00:01:46,000",
          "to": "00:01:52,000"
        },
        "offsets": {
          "from": 106000,
          "to": 112000
        },
        "text": "الـ containerd هو عبارة عن Component، ووظيفته إدارة أي حاجة ليها علاقة بالـ Container."
      },
      {
        "timestamps": {
          "from": "00:01:52,000",
          "to": "00:02:00,000"
        },
        "offsets": {
          "from": 112000,
          "to": 120000
        },
        "text": "لو هتصنع Container من أول وجديد، فاللي بيحصل إن الـ containerd هو اللي بيبدأ العملية."
      },
      {
        "timestamps": {
          "from": "00:02:00,000",
          "to": "00:02:08,000"
        },
        "offsets": {
          "from": 120000,
          "to": 128000
        },
        "text": "الـ runc هو وقت الـ execution للـ container، كل container شغال بيبقى عبارة عن process runc."
      },
      {
        "timestamps": {
          "from": "00:02:08,000",
          "to": "00:02:15,000"
        },
        "offsets": {
          "from": 128000,
          "to": 135000
        },
        "text": "والـ containerd وظيفتها تعمل الـ lifecycle management زي الـ start والـ stop والـ pause وحاجات زي كده."
      },
      {
        "timestamps": {
          "from": "00:02:15,000",
          "to": "00:02:16,000"
        },
        "offsets": {
          "from": 135000,
          "to": 136000
        },
        "text": "ده بشكل عام."
      },
      {
        "timestamps": {
          "from": "00:02:16,000",
          "to": "00:02:19,000"
        },
        "offsets": {
          "from": 136000,
          "to": 139000
        },
        "text": "فإنت في الأول مثلاً بتكتب أي Command."
      },
      {
        "timestamps": {
          "from": "00:02:19,000",
          "to": "00:02:22,000"
        },
        "offsets": {
          "from": 139000,
          "to": 142000
        },
        "text": "docker container run"
      },
      {
        "timestamps": {
          "from": "00:02:22,000",
          "to": "00:02:24,000"
        },
        "offsets": {
          "from": 142000,
          "to": 144000
        },
        "text": "وشوية switches."
      },
      {
        "timestamps": {
          "from": "00:02:24,000",
          "to": "00:02:27,000"
        },
        "offsets": {
          "from": 144000,
          "to": 147000
        },
        "text": "وتدوس Enter."
      },
      {
        "timestamps": {
          "from": "00:02:27,000",
          "to": "00:02:30,000"
        },
        "offsets": {
          "from": 147000,
          "to": 150000
        },
        "text": "اللي بيحصل إن الكلام ده بيروح للـ Docker Daemon."
      },
      {
        "timestamps": {
          "from": "00:02:30,000",
          "to": "00:02:37,000"
        },
        "offsets": {
          "from": 150000,
          "to": 157000
        },
        "text": "الـ Docker Daemon بياخد الـ request ويباصيه للـ containerd."
      },
      {
        "timestamps": {
          "from": "00:02:37,000",
          "to": "00:02:41,000"
        },
        "offsets": {
          "from": 157000,
          "to": 161000
        },
        "text": "الـ containerd ده هو اللي وظيفته إنه يجهز الـ container."
      },
      {
        "timestamps": {
          "from": "00:02:41,000",
          "to": "00:02:44,000"
        },
        "offsets": {
          "from": 161000,
          "to": 164000
        },
        "text": "وبعدين يبعت الـ container ده للـ runc."
      },
      {
        "timestamps": {
          "from": "00:02:44,000",
          "to": "00:02:48,000"
        },
        "offsets": {
          "from": 164000,
          "to": 168000
        },
        "text": "الـ runc بيشوف فين الـ Image اللي المفروض يشغل الـ container على أساسها."
      },
      {
        "timestamps": {
          "from": "00:02:48,000",
          "to": "00:02:51,000"
        },
        "offsets": {
          "from": 168000,
          "to": 171000
        },
        "text": "وبيعمل container تاني بـ runc تانية وهكذا."
      },
      {
        "timestamps": {
          "from": "00:02:51,000",
          "to": "00:02:52,000"
        },
        "offsets": {
          "from": 171000,
          "to": 172000
        },
        "text": "يبقى الـ container ده قايم."
      },
      {
        "timestamps": {
          "from": "00:02:52,000",
          "to": "00:02:54,000"
        },
        "offsets": {
          "from": 172000,
          "to": 174000
        },
        "text": "لأن بيبقى عندي containerd واحدة بس."
      },
      {
        "timestamps": {
          "from": "00:02:54,000",
          "to": "00:02:56,000"
        },
        "offsets": {
          "from": 174000,
          "to": 176000
        },
        "text": "جوه الـ Docker Host."
      },
      {
        "timestamps": {
          "from": "00:02:56,000",
          "to": "00:03:00,000"
        },
        "offsets": {
          "from": 176000,
          "to": 180000
        },
        "text": "أو الـ machine اللي نازل عليها الـ Docker Engine نفسه."
      },
      {
        "timestamps": {
          "from": "00:03:00,000",
          "to": "00:03:03,000"
        },
        "offsets": {
          "from": 180000,
          "to": 183000
        },
        "text": "وعندي Docker Daemon واحد بس اللي هو dockerd."
      },
      {
        "timestamps": {
          "from": "00:03:03,000",
          "to": "00:03:05,000"
        },
        "offsets": {
          "from": 183000,
          "to": 185000
        },
        "text": "ولكل container شغال."
      },
      {
        "timestamps": {
          "from": "00:03:05,000",
          "to": "00:03:07,000"
        },
        "offsets": {
          "from": 185000,
          "to": 187000
        },
        "text": "هتلاقي عندك الـ runc."
      },
      {
        "timestamps": {
          "from": "00:03:07,000",
          "to": "00:03:10,000"
        },
        "offsets": {
          "from": 187000,
          "to": 190000
        },
        "text": "اللي هي المسؤولة عن الـ container ده."
      },
      {
        "timestamps": {
          "from": "00:03:10,000",
          "to": "00:03:12,000"
        },
        "offsets": {
          "from": 190000,
          "to": 192000
        },
        "text": "وده بيتسمى Loosely."
      },
      {
        "timestamps": {
          "from": "00:03:12,000",
          "to": "00:03:14,000"
        },
        "offsets": {
          "from": 192000,
          "to": 194000
        },
        "text": "Coupled Architecture."
      },
      {
        "timestamps": {
          "from": "00:03:14,000",
          "to": "00:03:15,000"
        },
        "offsets": {
          "from": 194000,
          "to": 195000
        },
        "text": "إنه"
      },
      {
        "timestamps": {
          "from": "00:03:15,000",
          "to": "00:03:18,000"
        },
        "offsets": {
          "from": 195000,
          "to": 198000
        },
        "text": "مش الـ Daemon هو اللي بيعمل كل حاجة في كل حتة"
      },
      {
        "timestamps": {
          "from": "00:03:18,000",
          "to": "00:03:20,000"
        },
        "offsets": {
          "from": 198000,
          "to": 200000
        },
        "text": "ولا الـ containerd هي اللي بتعمل كل حاجة في كل حتة"
      },
      {
        "timestamps": {
          "from": "00:03:20,000",
          "to": "00:03:22,000"
        },
        "offsets": {
          "from": 200000,
          "to": 202000
        },
        "text": "ولا الـ runc هي اللي بتعمل كل حاجة في كل حتة"
      },
      {
        "timestamps": {
          "from": "00:03:22,000",
          "to": "00:03:26,000"
        },
        "offsets": {
          "from": 202000,
          "to": 206000
        },
        "text": "يبقى ده الـ Architecture بشكل عام"
      },
      {
        "timestamps": {
          "from": "00:03:26,000",
          "to": "00:03:28,000"
        },
        "offsets": {
          "from": 206000,
          "to": 208000
        },
        "text": "مع كل Container بيتكاريت"
      },
      {
        "timestamps": {
          "from": "00:03:28,000",
          "to": "00:03:30,000"
        },
        "offsets": {
          "from": 208000,
          "to": 210000
        },
        "text": "لما تكاريت الـ Container"
      },
      {
        "timestamps": {
          "from": "00:03:30,000",
          "to": "00:03:32,000"
        },
        "offsets": {
          "from": 210000,
          "to": 212000
        },
        "text": "بتشتغل الـ runc"
      },
      {
        "timestamps": {
          "from": "00:03:32,000",
          "to": "00:03:35,000"
        },
        "offsets": {
          "from": 212000,
          "to": 215000
        },
        "text": "الـ runc دي كـ Process دايماً Running"
      },
      {
        "timestamps": {
          "from": "00:03:35,000",
          "to": "00:03:37,000"
        },
        "offsets": {
          "from": 215000,
          "to": 217000
        },
        "text": "علشان ما تبقاش مرتبطة بالـ Container"
      },
      {
        "timestamps": {
          "from": "00:03:37,000",
          "to": "00:03:39,000"
        },
        "offsets": {
          "from": 217000,
          "to": 219000
        },
        "text": "وعشان الـ Container ما يبقاش مرتبط بالـ containerd"
      },
      {
        "timestamps": {
          "from": "00:03:39,000",
          "to": "00:03:41,000"
        },
        "offsets": {
          "from": 219000,
          "to": 221000
        },
        "text": "ولا يبقى مرتبط بالـ Docker Daemon نفسه"
      },
      {
        "timestamps": {
          "from": "00:03:41,000",
          "to": "00:03:43,000"
        },
        "offsets": {
          "from": 221000,
          "to": 223000
        },
        "text": "بحيث إنك ممكن تعمل Upgrade"
      },
      {
        "timestamps": {
          "from": "00:03:43,000",
          "to": "00:03:46,000"
        },
        "offsets": {
          "from": 223000,
          "to": 226000
        },
        "text": "للـ Daemon، تعمل Start أو Stop للـ Daemon نفسه"
      },
      {
        "timestamps": {
          "from": "00:03:46,000",
          "to": "00:03:49,000"
        },
        "offsets": {
          "from": 226000,
          "to": 229000
        },
        "text": "ويفضل الـ Container شغال و Up & Running"
      },
      {
        "timestamps": {
          "from": "00:03:49,000",
          "to": "00:03:52,000"
        },
        "offsets": {
          "from": 229000,
          "to": 232000
        },
        "text": "دايماً بيبقى فيه Process اسمها shim"
      },
      {
        "timestamps": {
          "from": "00:03:52,000",
          "to": "00:03:56,000"
        },
        "offsets": {
          "from": 232000,
          "to": 236000
        },
        "text": "دي عبارة عن Process فيها شوية من الـ containerd"
      },
      {
        "timestamps": {
          "from": "00:03:56,000",
          "to": "00:03:58,000"
        },
        "offsets": {
          "from": 236000,
          "to": 238000
        },
        "text": "وارثة شوية حاجات من الـ containerd"
      },
      {
        "timestamps": {
          "from": "00:03:58,000",
          "to": "00:04:00,000"
        },
        "offsets": {
          "from": 238000,
          "to": 240000
        },
        "text": "وشوية حاجات من الـ runc"
      },
      {
        "timestamps": {
          "from": "00:04:00,000",
          "to": "00:04:02,000"
        },
        "offsets": {
          "from": 240000,
          "to": 242000
        },
        "text": "بتفضل دايماً قايمة مع الـ Container"
      },
      {
        "timestamps": {
          "from": "00:04:02,000",
          "to": "00:04:05,000"
        },
        "offsets": {
          "from": 242000,
          "to": 245000
        },
        "text": "تخليك إنك أياً كان اللي حصل في الـ containerd"
      },
      {
        "timestamps": {
          "from": "00:04:05,000",
          "to": "00:04:07,000"
        },
        "offsets": {
          "from": 245000,
          "to": 247000
        },
        "text": "عملت Start عملت Stop عملت Upgrade"
      },
      {
        "timestamps": {
          "from": "00:04:07,000",
          "to": "00:04:09,000"
        },
        "offsets": {
          "from": 247000,
          "to": 249000
        },
        "text": "ده ما يأثرش على الـ Container اللي شغال"
      },
      {
        "timestamps": {
          "from": "00:04:09,000",
          "to": "00:04:11,000"
        },
        "offsets": {
          "from": 249000,
          "to": 251000
        },
        "text": "فتقلل اعتمادية الـ Container"
      },
      {
        "timestamps": {
          "from": "00:04:11,000",
          "to": "00:04:13,000"
        },
        "offsets": {
          "from": 251000,
          "to": 253000
        },
        "text": "على الـ runc وعلى الـ containerd"
      },
      {
        "timestamps": {
          "from": "00:04:13,000",
          "to": "00:04:14,000"
        },
        "offsets": {
          "from": 253000,
          "to": 254000
        },
        "text": "وعلى الـ Docker Daemon نفسه"
      },
      {
        "timestamps": {
          "from": "00:04:14,000",
          "to": "00:04:16,000"
        },
        "offsets": {
          "from": 254000,
          "to": 256000
        },
        "text": "لو إنت فورت الـ Docker Engine كله"
      },
      {
        "timestamps": {
          "from": "00:04:16,000",
          "to": "00:04:19,000"
        },
        "offsets": {
          "from": 256000,
          "to": 259000
        },
        "text": "ونزلت Docker من أول وجديد"
      },
      {
        "timestamps": {
          "from": "00:04:19,000",
          "to": "00:04:21,000"
        },
        "offsets": {
          "from": 259000,
          "to": 261000
        },
        "text": "هتلاقي الـ Container شغالة و Up and Running عادي جداً"
      },
      {
        "timestamps": {
          "from": "00:04:21,000",
          "to": "00:04:23,000"
        },
        "offsets": {
          "from": 261000,
          "to": 263000
        },
        "text": "وما اتأثرتش"
      },
      {
        "timestamps": {
          "from": "00:04:23,000",
          "to": "00:04:27,000"
        },
        "offsets": {
          "from": 263000,
          "to": 267000
        },
        "text": "فده الـ Engine نفسه"
      },
      {
        "timestamps": {
          "from": "00:04:27,000",
          "to": "00:04:30,000"
        },
        "offsets": {
          "from": 267000,
          "to": 270000
        },
        "text": "علشان تشوف الـ Engine دي عندك أكتر من طريقة"
      },
      {
        "timestamps": {
          "from": "00:04:30,000",
          "to": "00:04:32,000"
        },
        "offsets": {
          "from": 270000,
          "to": 272000
        },
        "text": "ممكن تشوف الـ Process الـ Running"
      },
      {
        "timestamps": {
          "from": "00:04:32,000",
          "to": "00:04:34,000"
        },
        "offsets": {
          "from": 272000,
          "to": 274000
        },
        "text": "وتشوف الـ containerd وتشوف الـ Docker"
      },
      {
        "timestamps": {
          "from": "00:04:34,000",
          "to": "00:04:37,000"
        },
        "offsets": {
          "from": 274000,
          "to": 277000
        },
        "text": "تعال أوريك مثال على ده"
      },
      {
        "timestamps": {
          "from": "00:04:37,000",
          "to": "00:04:40,000"
        },
        "offsets": {
          "from": 277000,
          "to": 280000
        },
        "text": "هنروح على الـ Machine اللي عليها الـ Docker"
      },
      {
        "timestamps": {
          "from": "00:04:40,000",
          "to": "00:04:42,000"
        },
        "offsets": {
          "from": 280000,
          "to": 282000
        },
        "text": "أو اللي اسمها Docker Host"
      },
      {
        "timestamps": {
          "from": "00:04:42,000",
          "to": "00:04:44,000"
        },
        "offsets": {
          "from": 282000,
          "to": 284000
        },
        "text": "وهاجي أقول له مثلاً"
      },
      {
        "timestamps": {
          "from": "00:04:44,000",
          "to": "00:04:46,000"
        },
        "offsets": {
          "from": 284000,
          "to": 286000
        },
        "text": "ps -lef"
      },
      {
        "timestamps": {
          "from": "00:04:46,000",
          "to": "00:04:49,000"
        },
        "offsets": {
          "from": 286000,
          "to": 289000
        },
        "text": "وأقول له هات لي أي حاجة عليها كلمة"
      },
      {
        "timestamps": {
          "from": "00:04:49,000",
          "to": "00:04:51,000"
        },
        "offsets": {
          "from": 289000,
          "to": 291000
        },
        "text": "فيها Docker"
      },
      {
        "timestamps": {
          "from": "00:04:51,000",
          "to": "00:04:53,000"
        },
        "offsets": {
          "from": 291000,
          "to": 293000
        },
        "text": "نشوف الـ processes الـ running"
      },
      {
        "timestamps": {
          "from": "00:04:53,000",
          "to": "00:04:55,000"
        },
        "offsets": {
          "from": 293000,
          "to": 295000
        },
        "text": "هنجرب كده"
      },
      {
        "timestamps": {
          "from": "00:04:55,000",
          "to": "00:05:00,000"
        },
        "offsets": {
          "from": 295000,
          "to": 300000
        },
        "text": "فهيوريني إن فيه process running اللي هي dockerd"
      },
      {
        "timestamps": {
          "from": "00:05:00,000",
          "to": "00:05:02,000"
        },
        "offsets": {
          "from": 300000,
          "to": 302000
        },
        "text": "تمام؟ ده الـ Docker Daemon"
      },
      {
        "timestamps": {
          "from": "00:05:02,000",
          "to": "00:05:05,000"
        },
        "offsets": {
          "from": 302000,
          "to": 305000
        },
        "text": "لو بالمثل برضه قلت له وريني مثلاً"
      },
      {
        "timestamps": {
          "from": "00:05:05,000",
          "to": "00:05:09,000"
        },
        "offsets": {
          "from": 305000,
          "to": 309000
        },
        "text": "الـ container"
      },
      {
        "timestamps": {
          "from": "00:05:09,000",
          "to": "00:05:13,000"
        },
        "offsets": {
          "from": 309000,
          "to": 313000
        },
        "text": "فهيوريني إن فيه container دي running"
      },
      {
        "timestamps": {
          "from": "00:05:13,000",
          "to": "00:05:15,000"
        },
        "offsets": {
          "from": 313000,
          "to": 315000
        },
        "text": "تمام؟ فده الـ Docker Daemon"
      },
      {
        "timestamps": {
          "from": "00:05:15,000",
          "to": "00:05:17,000"
        },
        "offsets": {
          "from": 315000,
          "to": 317000
        },
        "text": "ودي الـ container دي"
      },
      {
        "timestamps": {
          "from": "00:05:17,000",
          "to": "00:05:19,000"
        },
        "offsets": {
          "from": 317000,
          "to": 319000
        },
        "text": "بالمثل برضه لما نيجي نشغل container"
      },
      {
        "timestamps": {
          "from": "00:05:19,000",
          "to": "00:05:21,000"
        },
        "offsets": {
          "from": 319000,
          "to": 321000
        },
        "text": "برضه أو تشوف الـ process اللي هي running"
      },
      {
        "timestamps": {
          "from": "00:05:21,000",
          "to": "00:05:23,000"
        },
        "offsets": {
          "from": 321000,
          "to": 323000
        },
        "text": "أو الـ shim اللي running لكل container"
      },
      {
        "timestamps": {
          "from": "00:05:23,000",
          "to": "00:05:25,000"
        },
        "offsets": {
          "from": 323000,
          "to": 325000
        },
        "text": "من الـ containers اللي أنت شغال عليها"
      },
      {
        "timestamps": {
          "from": "00:05:25,000",
          "to": "00:05:30,000"
        },
        "offsets": {
          "from": 325000,
          "to": 330000
        },
        "text": "يبقى ده كان الـ structure بشكل عام"
      },
      {
        "timestamps": {
          "from": "00:05:30,000",
          "to": "00:05:32,000"
        },
        "offsets": {
          "from": 330000,
          "to": 332000
        },
        "text": "مثال على ذلك إنت مثلاً عملت"
      },
      {
        "timestamps": {
          "from": "00:05:32,000",
          "to": "00:05:34,000"
        },
        "offsets": {
          "from": 332000,
          "to": 334000
        },
        "text": "docker container run command"
      },
      {
        "timestamps": {
          "from": "00:05:34,000",
          "to": "00:05:36,000"
        },
        "offsets": {
          "from": 334000,
          "to": 336000
        },
        "text": "أو قلت له مثلاً docker container run"
      },
      {
        "timestamps": {
          "from": "00:05:36,000",
          "to": "00:05:39,000"
        },
        "offsets": {
          "from": 336000,
          "to": 339000
        },
        "text": "alpine أو python أو mongo، أي حاجة"
      },
      {
        "timestamps": {
          "from": "00:05:39,000",
          "to": "00:05:41,000"
        },
        "offsets": {
          "from": 339000,
          "to": 341000
        },
        "text": "اللي هيحصل إن الـ command ده"
      },
      {
        "timestamps": {
          "from": "00:05:41,000",
          "to": "00:05:43,000"
        },
        "offsets": {
          "from": 341000,
          "to": 343000
        },
        "text": "هيروح للـ API"
      },
      {
        "timestamps": {
          "from": "00:05:43,000",
          "to": "00:05:46,000"
        },
        "offsets": {
          "from": 343000,
          "to": 346000
        },
        "text": "بتاع الـ Docker اللي موجود في الـ Docker Daemon"
      },
      {
        "timestamps": {
          "from": "00:05:46,000",
          "to": "00:05:49,000"
        },
        "offsets": {
          "from": 346000,
          "to": 349000
        },
        "text": "الـ Docker Daemon هيشوف المفروض إيه اللي يتعمل اللي إنت طلبته"
      },
      {
        "timestamps": {
          "from": "00:05:49,000",
          "to": "00:05:51,000"
        },
        "offsets": {
          "from": 349000,
          "to": 351000
        },
        "text": "مثلاً كنت بتـ create container"
      },
      {
        "timestamps": {
          "from": "00:05:51,000",
          "to": "00:05:55,000"
        },
        "offsets": {
          "from": 351000,
          "to": 355000
        },
        "text": "والـ container ده هيرن مثلاً بـ switches معينة"
      },
      {
        "timestamps": {
          "from": "00:05:55,000",
          "to": "00:05:57,000"
        },
        "offsets": {
          "from": 355000,
          "to": 357000
        },
        "text": "بيشوف هل الـ image موجودة عندك locally"
      },
      {
        "timestamps": {
          "from": "00:05:57,000",
          "to": "00:05:58,000"
        },
        "offsets": {
          "from": 357000,
          "to": 358000
        },
        "text": "ولا مش عندك"
      },
      {
        "timestamps": {
          "from": "00:05:58,000",
          "to": "00:05:59,000"
        },
        "offsets": {
          "from": 358000,
          "to": 359000
        },
        "text": "لو الـ image موجودة locally عندك"
      },
      {
        "timestamps": {
          "from": "00:05:59,000",
          "to": "00:06:01,000"
        },
        "offsets": {
          "from": 359000,
          "to": 361000
        },
        "text": "هيبدأ إنه يباصي الكلام ده للـ containerd"
      },
      {
        "timestamps": {
          "from": "00:06:01,000",
          "to": "00:06:03,000"
        },
        "offsets": {
          "from": 361000,
          "to": 363000
        },
        "text": "اللي هيكاريت الـ container بناءً على الـ image"
      },
      {
        "timestamps": {
          "from": "00:06:03,000",
          "to": "00:06:04,000"
        },
        "offsets": {
          "from": 363000,
          "to": 364000
        },
        "text": "اللي موجودة locally"
      },
      {
        "timestamps": {
          "from": "00:06:04,000",
          "to": "00:06:06,000"
        },
        "offsets": {
          "from": 364000,
          "to": 366000
        },
        "text": "لو الـ image مش موجودة locally"
      },
      {
        "timestamps": {
          "from": "00:06:06,000",
          "to": "00:06:08,000"
        },
        "offsets": {
          "from": 366000,
          "to": 368000
        },
        "text": "هيضطر الـ dockerd قبل ما يعمل الكلام ده"
      },
      {
        "timestamps": {
          "from": "00:06:08,000",
          "to": "00:06:09,000"
        },
        "offsets": {
          "from": 368000,
          "to": 369000
        },
        "text": "يعمل download للـ image"
      },
      {
        "timestamps": {
          "from": "00:06:09,000",
          "to": "00:06:13,000"
        },
        "offsets": {
          "from": 369000,
          "to": 373000
        },
        "text": "يعمل pull للـ image من الـ Docker Hub مثلاً"
      },
      {
        "timestamps": {
          "from": "00:06:13,000",
          "to": "00:06:15,000"
        },
        "offsets": {
          "from": 373000,
          "to": 375000
        },
        "text": "تمام؟ بعد كده الـ containerd هيباصي"
      },
      {
        "timestamps": {
          "from": "00:06:15,000",
          "to": "00:06:17,000"
        },
        "offsets": {
          "from": 375000,
          "to": 377000
        },
        "text": "الـ request ده للـ runc"
      },
      {
        "timestamps": {
          "from": "00:06:17,000",
          "to": "00:06:19,000"
        },
        "offsets": {
          "from": 377000,
          "to": 379000
        },
        "text": "والـ runc هي اللي فعلاً هتبدأ تبني الـ container"
      },
      {
        "timestamps": {
          "from": "00:06:19,000",
          "to": "00:06:22,000"
        },
        "offsets": {
          "from": 379000,
          "to": 382000
        },
        "text": "من الـ image اللي موجودة أو اللي اتعمل لها pull"
      },
      {
        "timestamps": {
          "from": "00:06:22,000",
          "to": "00:06:23,000"
        },
        "offsets": {
          "from": 382000,
          "to": 383000
        },
        "text": "أوكي؟"
      },
      {
        "timestamps": {
          "from": "00:06:23,000",
          "to": "00:06:26,000"
        },
        "offsets": {
          "from": 383000,
          "to": 386000
        },
        "text": "فده بشكل عام وزي ما إحنا قلنا الـ benefit"
      },
      {
        "timestamps": {
          "from": "00:06:26,000",
          "to": "00:06:29,000"
        },
        "offsets": {
          "from": 386000,
          "to": 389000
        },
        "text": "إن الـ container runtime يبقى decoupled"
      },
      {
        "timestamps": {
          "from": "00:06:29,000",
          "to": "00:06:32,000"
        },
        "offsets": {
          "from": 389000,
          "to": 392000
        },
        "text": "decoupled من الـ Docker daemon نفسه"
      },
      {
        "timestamps": {
          "from": "00:06:32,000",
          "to": "00:06:35,000"
        },
        "offsets": {
          "from": 392000,
          "to": 395000
        },
        "text": "أوكي؟ ده حتى بيسموه daemon-less containers"
      },
      {
        "timestamps": {
          "from": "00:06:35,000",
          "to": "00:06:37,000"
        },
        "offsets": {
          "from": 395000,
          "to": 397000
        },
        "text": "يعني ممكن الـ container يشتغل"
      },
      {
        "timestamps": {
          "from": "00:06:37,000",
          "to": "00:06:39,000"
        },
        "offsets": {
          "from": 397000,
          "to": 399000
        },
        "text": "والـ daemon بتعمله upgrade أو أي حاجة ثانية"
      },
      {
        "timestamps": {
          "from": "00:06:39,000",
          "to": "00:06:40,000"
        },
        "offsets": {
          "from": 399000,
          "to": 400000
        },
        "text": "أوكي؟"
      },
      {
        "timestamps": {
          "from": "00:06:40,000",
          "to": "00:06:44,000"
        },
        "offsets": {
          "from": 400000,
          "to": 404000
        },
        "text": "الـ API أو الـ Docker daemon بيلسن على"
      },
      {
        "timestamps": {
          "from": "00:06:44,000",
          "to": "00:06:46,000"
        },
        "offsets": {
          "from": 404000,
          "to": 406000
        },
        "text": "/var/run/docker.sock"
      },
      {
        "timestamps": {
          "from": "00:06:46,000",
          "to": "00:06:47,000"
        },
        "offsets": {
          "from": 406000,
          "to": 407000
        },
        "text": "تمام؟"
      },
      {
        "timestamps": {
          "from": "00:06:47,000",
          "to": "00:06:49,000"
        },
        "offsets": {
          "from": 407000,
          "to": 409000
        },
        "text": "لما تلاقي ده Running عندك"
      },
      {
        "timestamps": {
          "from": "00:06:49,000",
          "to": "00:06:53,000"
        },
        "offsets": {
          "from": 409000,
          "to": 413000
        },
        "text": "لما الـ Docker ياخد Access لده"
      },
      {
        "timestamps": {
          "from": "00:06:53,000",
          "to": "00:06:54,000"
        },
        "offsets": {
          "from": 413000,
          "to": 414000
        },
        "text": "أو الـ container ياخد Access لده"
      },
      {
        "timestamps": {
          "from": "00:06:54,000",
          "to": "00:06:57,000"
        },
        "offsets": {
          "from": 414000,
          "to": 417000
        },
        "text": "علشان يقدر يباصي الـ client"
      },
      {
        "timestamps": {
          "from": "00:06:57,000",
          "to": "00:07:02,000"
        },
        "offsets": {
          "from": 417000,
          "to": 422000
        },
        "text": "الـ Docker client يباصي الـ commands للـ Docker"
      },
      {
        "timestamps": {
          "from": "00:07:02,000",
          "to": "00:07:03,000"
        },
        "offsets": {
          "from": 422000,
          "to": 423000
        },
        "text": "أوكي؟"
      },
      {
        "timestamps": {
          "from": "00:07:03,000",
          "to": "00:07:08,000"
        },
        "offsets": {
          "from": 423000,
          "to": 428000
        },
        "text": "By default الـ Docker daemon بيلسن على Port 2375"
      },
      {
        "timestamps": {
          "from": "00:07:08,000",
          "to": "00:07:13,000"
        },
        "offsets": {
          "from": 428000,
          "to": 433000
        },
        "text": "TCP Port وبيلسن على HTTP يعني مش Secure"
      },
      {
        "timestamps": {
          "from": "00:07:13,000",
          "to": "00:07:17,000"
        },
        "offsets": {
          "from": 433000,
          "to": 437000
        },
        "text": "دي Security issue موجودة في الـ Docker"
      },
      {
        "timestamps": {
          "from": "00:07:17,000",
          "to": "00:07:19,000"
        },
        "offsets": {
          "from": 437000,
          "to": 439000
        },
        "text": "عشان تتجاوز الـ Security issues دي"
      },
      {
        "timestamps": {
          "from": "00:07:19,000",
          "to": "00:07:21,000"
        },
        "offsets": {
          "from": 439000,
          "to": 441000
        },
        "text": "تقدر تشتغل بالـ TLS وتستخدم Certificate"
      },
      {
        "timestamps": {
          "from": "00:07:21,000",
          "to": "00:07:28,000"
        },
        "offsets": {
          "from": 441000,
          "to": 448000
        },
        "text": "سواء كانت Self-signed certificate أو CA certificate"
      },
      {
        "timestamps": {
          "from": "00:07:28,000",
          "to": "00:07:30,000"
        },
        "offsets": {
          "from": 448000,
          "to": 450000
        },
        "text": "هسيب لك الخطوات هنا"
      },
      {
        "timestamps": {
          "from": "00:07:30,000",
          "to": "00:07:34,000"
        },
        "offsets": {
          "from": 450000,
          "to": 454000
        },
        "text": "وهسيب لك Link ليها برضه عشان تشوف الخطوات بالترتيب"
      },
      {
        "timestamps": {
          "from": "00:07:34,000",
          "to": "00:07:38,000"
        },
        "offsets": {
          "from": 454000,
          "to": 458000
        },
        "text": "تقدر تعمل Configure للـ Docker إنه ميسلنش على HTTP"
      },
      {
        "timestamps": {
          "from": "00:07:38,000",
          "to": "00:07:39,000"
        },
        "offsets": {
          "from": 458000,
          "to": 459000
        },
        "text": "بيلسن على HTTPS مثلاً"
      },
      {
        "timestamps": {
          "from": "00:07:39,000",
          "to": "00:07:40,000"
        },
        "offsets": {
          "from": 459000,
          "to": 460000
        },
        "text": "أوكي؟"
      },
      {
        "timestamps": {
          "from": "00:07:40,000",
          "to": "00:07:44,000"
        },
        "offsets": {
          "from": 460000,
          "to": 464000
        },
        "text": "فأنا هسيب لك الخطوات دي هنا في الـ Note"
      },
      {
        "timestamps": {
          "from": "00:07:44,000",
          "to": "00:07:46,000"
        },
        "offsets": {
          "from": 464000,
          "to": 466000
        },
        "text": "الفرق ده هيفرق كتير مع الناس"
      },
      {
        "timestamps": {
          "from": "00:07:46,000",
          "to": "00:07:49,000"
        },
        "offsets": {
          "from": 466000,
          "to": 469000
        },
        "text": "اللي حياتها كلها الـ Containers في الـ Production"
      },
      {
        "timestamps": {
          "from": "00:07:49,000",
          "to": "00:07:51,000"
        },
        "offsets": {
          "from": 469000,
          "to": 471000
        },
        "text": "وإحنا محتاجينه لأسباب تانية"
      },
      {
        "timestamps": {
          "from": "00:07:51,000",
          "to": "00:07:55,000"
        },
        "offsets": {
          "from": 471000,
          "to": 475000
        },
        "text": "فده كان الـ Docker engine بشكل عام"
      }
    ]
  },
  {
    "id": 8,
    "title": "Images - Deep Dive",
    "duration": 2760.0,
    "isReady": true,
    "transcription": [
      {
        "timestamps": {
          "from": "00:00:00,000",
          "to": "00:00:04,000"
        },
        "offsets": {
          "from": 0,
          "to": 4000
        },
        "text": "هنتكلم بالتفصيل أكتر عن الـ Images."
      },
      {
        "timestamps": {
          "from": "00:00:04,000",
          "to": "00:00:07,000"
        },
        "offsets": {
          "from": 4000,
          "to": 7000
        },
        "text": "أخدنا فكرة عامة وشوفنا شكل الـ Image وشوفنا الـ Layers."
      },
      {
        "timestamps": {
          "from": "00:00:07,000",
          "to": "00:00:10,000"
        },
        "offsets": {
          "from": 7000,
          "to": 10000
        },
        "text": "بس خلينا نتكلم بتفصيل شوية."
      },
      {
        "timestamps": {
          "from": "00:00:10,000",
          "to": "00:00:12,000"
        },
        "offsets": {
          "from": 10000,
          "to": 12000
        },
        "text": "لأن ده هيفرق معانا في الشغل مع الـ Containers."
      },
      {
        "timestamps": {
          "from": "00:00:12,000",
          "to": "00:00:16,000"
        },
        "offsets": {
          "from": 12000,
          "to": 16000
        },
        "text": "وهيفرق معانا وإحنا بنعمل Build للـ Image."
      },
      {
        "timestamps": {
          "from": "00:00:16,000",
          "to": "00:00:18,000"
        },
        "offsets": {
          "from": 16000,
          "to": 18000
        },
        "text": "دلوقتي، إيه هي الـ Image؟"
      },
      {
        "timestamps": {
          "from": "00:00:18,000",
          "to": "00:00:21,000"
        },
        "offsets": {
          "from": 18000,
          "to": 21000
        },
        "text": "الـ Image هي الـ Packaged Application."
      },
      {
        "timestamps": {
          "from": "00:00:21,000",
          "to": "00:00:24,000"
        },
        "offsets": {
          "from": 21000,
          "to": 24000
        },
        "text": "أو الـ Bundled Application."
      },
      {
        "timestamps": {
          "from": "00:00:24,000",
          "to": "00:00:32,000"
        },
        "offsets": {
          "from": 24000,
          "to": 32000
        },
        "text": "فبيكون فيها كل الـ Layers أو كل الـ Files بداية من الـ Files اللي فوق الـ Kernel level."
      },
      {
        "timestamps": {
          "from": "00:00:32,000",
          "to": "00:00:35,000"
        },
        "offsets": {
          "from": 32000,
          "to": 35000
        },
        "text": "الـ Kernel أنا واخده من الـ Operating System، واخده من الـ Docker Host."
      },
      {
        "timestamps": {
          "from": "00:00:35,000",
          "to": "00:00:39,000"
        },
        "offsets": {
          "from": 35000,
          "to": 39000
        },
        "text": "تمام، بعد كده إنت احتجت شوية حاجات زيادة فوق الـ Kernel وشوية حاجات فوق كمان."
      },
      {
        "timestamps": {
          "from": "00:00:39,000",
          "to": "00:00:43,000"
        },
        "offsets": {
          "from": 39000,
          "to": 43000
        },
        "text": "وشوية Services كمان وشوية Applications وشوية Source Code وحاجات زي كده."
      },
      {
        "timestamps": {
          "from": "00:00:43,000",
          "to": "00:00:46,000"
        },
        "offsets": {
          "from": 43000,
          "to": 46000
        },
        "text": "كل الكلام ده بيبقى Layers جوه الـ Image دي."
      },
      {
        "timestamps": {
          "from": "00:00:46,000",
          "to": "00:00:55,400"
        },
        "offsets": {
          "from": 46000,
          "to": 55400
        },
        "text": "في الحقيقة الـ Image دي عبارة عن وصف للـ Template نفسها."
      },
      {
        "timestamps": {
          "from": "00:00:55,400",
          "to": "00:00:58,600"
        },
        "offsets": {
          "from": 55400,
          "to": 58600
        },
        "text": "كلمة Image دي عبارة عن File عادي خالص."
      },
      {
        "timestamps": {
          "from": "00:00:58,600",
          "to": "00:01:02,500"
        },
        "offsets": {
          "from": 58600,
          "to": 62500
        },
        "text": "دي عبارة عن File عادي خالص بيوصف الـ Image دي اتعملت إزاي."
      },
      {
        "timestamps": {
          "from": "00:01:02,500",
          "to": "00:01:08,100"
        },
        "offsets": {
          "from": 62500,
          "to": 68100
        },
        "text": "بدأت بإيه، نزلت إيه، عملت Copy لفايلات إيه، وعملت Installation لأبليكيشن إيه."
      },
      {
        "timestamps": {
          "from": "00:01:08,100",
          "to": "00:01:10,900"
        },
        "offsets": {
          "from": 68100,
          "to": 70900
        },
        "text": "فتحت Port إيه، وهكذا لبقية الحاجات."
      },
      {
        "timestamps": {
          "from": "00:01:10,900",
          "to": "00:01:12,900"
        },
        "offsets": {
          "from": 70900,
          "to": 72900
        },
        "text": "ده مجرد وصف، وده اللي بنسميه الـ Image."
      },
      {
        "timestamps": {
          "from": "00:01:12,900",
          "to": "00:01:23,940"
        },
        "offsets": {
          "from": 72900,
          "to": 83940
        },
        "text": "اللي بيبقى فيها الـ configuration بتاعها."
      },
      {
        "timestamps": {
          "from": "00:01:23,940",
          "to": "00:01:33,060"
        },
        "offsets": {
          "from": 83940,
          "to": 93060
        },
        "text": "التوصيف ده بيبقى ليه اسم محدد ومعروف جداً."
      },
      {
        "timestamps": {
          "from": "00:01:33,060",
          "to": "00:01:38,860"
        },
        "offsets": {
          "from": 93060,
          "to": 98860
        },
        "text": "إحنا قلنا دايماً هنفهم بمبدأ الـ Virtual Machine."
      },
      {
        "timestamps": {
          "from": "00:01:38,860",
          "to": "00:01:43,860"
        },
        "offsets": {
          "from": 98860,
          "to": 103860
        },
        "text": "الـ Virtual Machine عشان تكون هي الـ Template."
      },
      {
        "timestamps": {
          "from": "00:01:43,860",
          "to": "00:01:47,860"
        },
        "offsets": {
          "from": 103860,
          "to": 107860
        },
        "text": "أنا عارف إن الـ Virtual Machine دي هتكون مقفولة، وعارف إن اللي..."
      },
      {
        "timestamps": {
          "from": "00:01:47,860",
          "to": "00:01:51,860"
        },
        "offsets": {
          "from": 107860,
          "to": 111860
        },
        "text": "هياخد Copy هيعمل Import للـ Virtual Machine دي عشان يعمل منها Running Virtual Machine."
      },
      {
        "timestamps": {
          "from": "00:01:51,860",
          "to": "00:01:55,860"
        },
        "offsets": {
          "from": 111860,
          "to": 115860
        },
        "text": "هيعمل تعديلات تانية، هيغير مثلاً الـ Name، هيعمل Execute..."
      },
      {
        "timestamps": {
          "from": "00:01:55,860",
          "to": "00:01:59,860"
        },
        "offsets": {
          "from": 115860,
          "to": 119860
        },
        "text": "مثلاً لـ Scripts عشان يعمل Initialize لحاجة، هيعدل..."
      },
      {
        "timestamps": {
          "from": "00:01:59,860",
          "to": "00:02:03,860"
        },
        "offsets": {
          "from": 119860,
          "to": 123860
        },
        "text": "الـ IP address، أو أي شيء من هذا القبيل. الحاجات اللي اتعملت في..."
      },
      {
        "timestamps": {
          "from": "00:02:03,860",
          "to": "00:02:07,860"
        },
        "offsets": {
          "from": 123860,
          "to": 127860
        },
        "text": "الـ Virtual Machine علشان تتقفل وتبقى Template، ده اسمه Build time commands."
      },
      {
        "timestamps": {
          "from": "00:02:07,860",
          "to": "00:02:16,180"
        },
        "offsets": {
          "from": 127860,
          "to": 136180
        },
        "text": "دي الـ Commands اللي اتعملت علشان توصف الـ Image دي اتبنت إزاي."
      },
      {
        "timestamps": {
          "from": "00:02:16,180",
          "to": "00:02:22,400"
        },
        "offsets": {
          "from": 136180,
          "to": 142400
        },
        "text": "علشان أعمل Create للـ Container أو أعمل الـ Import ده."
      },
      {
        "timestamps": {
          "from": "00:02:22,400",
          "to": "00:02:27,760"
        },
        "offsets": {
          "from": 142400,
          "to": 147760
        },
        "text": "في Commands تانية بشغلها، زي ما جيت مثلاً شغلت..."
      },
      {
        "timestamps": {
          "from": "00:02:27,760",
          "to": "00:02:32,560"
        },
        "offsets": {
          "from": 147760,
          "to": 152560
        },
        "text": "الـ Bash مثلاً لو تفتكر، وزي ما جيت قلت له..."
      },
      {
        "timestamps": {
          "from": "00:02:32,560",
          "to": "00:02:35,960"
        },
        "offsets": {
          "from": 152560,
          "to": 155960
        },
        "text": "شغل الـ Shell المعينة مثلاً، الحاجات دي..."
      },
      {
        "timestamps": {
          "from": "00:02:35,960",
          "to": "00:02:43,400"
        },
        "offsets": {
          "from": 155960,
          "to": 163400
        },
        "text": "اسمها Run time. أي Commands اتعملت أثناء مرحلة بناء الـ Image دي..."
      },
      {
        "timestamps": {
          "from": "00:02:43,400",
          "to": "00:02:48,380"
        },
        "offsets": {
          "from": 163400,
          "to": 168380
        },
        "text": "اسمها Build time، وأي Scripts أو أي حاجة هتتعمل وقت ما أعمل..."
      },
      {
        "timestamps": {
          "from": "00:02:48,380",
          "to": "00:02:54,560"
        },
        "offsets": {
          "from": 168380,
          "to": 174560
        },
        "text": "Run، ده هيفرق معانا كمان شوية وإحنا بنبني الـ Image وبنعمل Create..."
      },
      {
        "timestamps": {
          "from": "00:02:54,560",
          "to": "00:03:01,280"
        },
        "offsets": {
          "from": 174560,
          "to": 181280
        },
        "text": "للـ Container. يبقى الـ Image وكل اللي فيها ده بنسميه Build time."
      },
      {
        "timestamps": {
          "from": "00:03:01,280",
          "to": "00:03:05,480"
        },
        "offsets": {
          "from": 181280,
          "to": 185480
        },
        "text": "والـ Container اللي معمول له Create من الـ Image دي..."
      },
      {
        "timestamps": {
          "from": "00:03:05,480",
          "to": "00:03:11,180"
        },
        "offsets": {
          "from": 185480,
          "to": 191180
        },
        "text": "ده اسمه Run time. أي حاجة هتعملها في الـ Container بتبقى في الـ Run time. تمام؟ شفنا إحنا..."
      },
      {
        "timestamps": {
          "from": "00:03:11,180",
          "to": "00:03:17,480"
        },
        "offsets": {
          "from": 191180,
          "to": 197480
        },
        "text": "مثلاً عليها، وشوفنا لما جينا نكريت الـ Container إزاي عملناها مرة"
      },
      {
        "timestamps": {
          "from": "00:03:17,480",
          "to": "00:03:21,380"
        },
        "offsets": {
          "from": 197480,
          "to": 201380
        },
        "text": "مرة بالـ Start ومرة بالـ Create وبعد كده Start، ومرة"
      },
      {
        "timestamps": {
          "from": "00:03:21,380",
          "to": "00:03:24,620"
        },
        "offsets": {
          "from": 201380,
          "to": 204620
        },
        "text": "بالـ Run على طول، وقلنا إن الـ Run هي عبارة عن الاتنين؛ الـ Create"
      },
      {
        "timestamps": {
          "from": "00:03:24,620",
          "to": "00:03:29,780"
        },
        "offsets": {
          "from": 204620,
          "to": 209780
        },
        "text": "والـ Start. تمام؟ تعال نتكلم بقى على موضوع لما نيجي نعمل"
      },
      {
        "timestamps": {
          "from": "00:03:29,780",
          "to": "00:03:33,260"
        },
        "offsets": {
          "from": 209780,
          "to": 213260
        },
        "text": "للـ Image، اللي إحنا عملنا منها كذا مثال سواء كان"
      },
      {
        "timestamps": {
          "from": "00:03:33,260",
          "to": "00:03:39,020"
        },
        "offsets": {
          "from": 213260,
          "to": 219020
        },
        "text": "Alpine ولا Ubuntu ولا Python ولا أي حاجة. الـ Image المفروض إن"
      },
      {
        "timestamps": {
          "from": "00:03:39,020",
          "to": "00:03:42,500"
        },
        "offsets": {
          "from": 219020,
          "to": 222500
        },
        "text": "هي تبقى صغيرة جداً، والأصل فيها إن هي تبقى صغيرة جداً."
      },
      {
        "timestamps": {
          "from": "00:03:42,500",
          "to": "00:03:46,340"
        },
        "offsets": {
          "from": 222500,
          "to": 226340
        },
        "text": "لأن أنت في الأصل مش هتشتغل من الـ Image مباشرة. في الأصل"
      },
      {
        "timestamps": {
          "from": "00:03:46,340",
          "to": "00:03:49,760"
        },
        "offsets": {
          "from": 226340,
          "to": 229760
        },
        "text": "المفروض إن الـ Image دي هتبقى مجرد Base وأنت هتبني عليها"
      },
      {
        "timestamps": {
          "from": "00:03:49,760",
          "to": "00:03:55,280"
        },
        "offsets": {
          "from": 229760,
          "to": 235280
        },
        "text": "بتاعك في الـ Container. هتاخد بس الـ Image وتبدأ تضيف أي حاجة زيادة"
      },
      {
        "timestamps": {
          "from": "00:03:55,280",
          "to": "00:03:59,420"
        },
        "offsets": {
          "from": 235280,
          "to": 239420
        },
        "text": "أنت عايزها في الـ Container، مش المفروض إن الـ Image دي تيجي جاهزة"
      },
      {
        "timestamps": {
          "from": "00:03:59,420",
          "to": "00:04:04,100"
        },
        "offsets": {
          "from": 239420,
          "to": 244100
        },
        "text": "إلا لو كانت Image مثلاً Ubuntu. مثلاً يعني أنت"
      },
      {
        "timestamps": {
          "from": "00:04:04,100",
          "to": "00:04:07,340"
        },
        "offsets": {
          "from": 244100,
          "to": 247340
        },
        "text": "عايز Image Ubuntu، ولحد كبير أنت مابتحتاجش حاجة زي كده."
      },
      {
        "timestamps": {
          "from": "00:04:07,340",
          "to": "00:04:12,200"
        },
        "offsets": {
          "from": 247340,
          "to": 252200
        },
        "text": "إيه اللي هيخليني يبقى عندي Container وظيفته بس إنه Ubuntu؟ مثلاً يعني."
      },
      {
        "timestamps": {
          "from": "00:04:12,200",
          "to": "00:04:16,700"
        },
        "offsets": {
          "from": 252200,
          "to": 256700
        },
        "text": "في الغالب مابتحتاجش كده. أمال أنا ليه عندي Ubuntu؟ وليه عندي"
      },
      {
        "timestamps": {
          "from": "00:04:16,700",
          "to": "00:04:24,440"
        },
        "offsets": {
          "from": 256700,
          "to": 264440
        },
        "text": "Fedora؟ وليه عندي Linux؟ علشان ده يبقى مجرد Base تكمل أنت"
      },
      {
        "timestamps": {
          "from": "00:04:24,440",
          "to": "00:04:29,240"
        },
        "offsets": {
          "from": 264440,
          "to": 269240
        },
        "text": "عليه وتعمل Customize للـ Application بتاعتك المميزة العظيمة جداً"
      },
      {
        "timestamps": {
          "from": "00:04:29,240",
          "to": "00:04:35,420"
        },
        "offsets": {
          "from": 269240,
          "to": 275420
        },
        "text": "جداً، وبعدين تعمل Build لـ Image تانية. فتبقى أنت جايب Image ومزود"
      },
      {
        "timestamps": {
          "from": "00:04:35,420",
          "to": "00:04:39,800"
        },
        "offsets": {
          "from": 275420,
          "to": 279800
        },
        "text": "عليها وعامل بعد كده Export لـ Image تانية. كأن بالظبط أنا"
      },
      {
        "timestamps": {
          "from": "00:04:39,800",
          "to": "00:04:45,860"
        },
        "offsets": {
          "from": 279800,
          "to": 285860
        },
        "text": "بعمل لك مثلاً Windows؛ الـ VM دي مافيهاش غير Windows بس."
      },
      {
        "timestamps": {
          "from": "00:04:45,860",
          "to": "00:04:50,300"
        },
        "offsets": {
          "from": 285860,
          "to": 290300
        },
        "text": "الأصل إنك أنت مش محتاج VM Windows لمجرد إنه Windows، أنت"
      },
      {
        "timestamps": {
          "from": "00:04:50,300",
          "to": "00:04:52,400"
        },
        "offsets": {
          "from": 290300,
          "to": 292400
        },
        "text": "طبيعي إنك أنت عايز تعمل فيه حاجات تانية. إن شاء الله حتى"
      },
      {
        "timestamps": {
          "from": "00:04:52,400",
          "to": "00:04:56,600"
        },
        "offsets": {
          "from": 292400,
          "to": 296600
        },
        "text": "هتنزل عليه SQL مثلاً. إن شاء الله حتى هتنزل عليه أي حاجة، بس أنت"
      },
      {
        "timestamps": {
          "from": "00:04:56,600",
          "to": "00:05:14,290"
        },
        "offsets": {
          "from": 296600,
          "to": 314290
        },
        "text": "هتاخد الـ Image الـ Base دي بتاعت Windows، تنزل عليها وتعدل حاجات أو إلى آخره، وبعدين تعمل أنت Template تانية."
      },
      {
        "timestamps": {
          "from": "00:05:14,290",
          "to": "00:05:21,820"
        },
        "offsets": {
          "from": 314290,
          "to": 321820
        },
        "text": "فطبعاً أنت عملت Template من الـ Template الأولى؛ أخدتها وعدلت فيها وعملت Template تانية خاصة بيك."
      },
      {
        "timestamps": {
          "from": "00:10:00,000",
          "to": "00:10:07,080"
        },
        "offsets": {
          "from": 600000,
          "to": 607080
        },
        "text": "تنزل عليها شوية حاجات وتعدل فيها"
      },
      {
        "timestamps": {
          "from": "00:10:07,080",
          "to": "00:10:14,160"
        },
        "offsets": {
          "from": 607080,
          "to": 614160
        },
        "text": "أو إلى آخره، وبعدين تعمل أنت Template تانية. فطبعاً أنت"
      },
      {
        "timestamps": {
          "from": "00:10:14,160",
          "to": "00:10:18,540"
        },
        "offsets": {
          "from": 614160,
          "to": 618540
        },
        "text": "عامل Template من الـ Template؛ أخدت الـ Template الأولى، أخدت منها"
      },
      {
        "timestamps": {
          "from": "00:10:18,540",
          "to": "00:10:24,840"
        },
        "offsets": {
          "from": 618540,
          "to": 624840
        },
        "text": "Copy، عدلت فيها شوية وعملت Template تانية. أوكي؟ فلذلك الـ Image"
      },
      {
        "timestamps": {
          "from": "00:10:24,840",
          "to": "00:10:28,140"
        },
        "offsets": {
          "from": 624840,
          "to": 628140
        },
        "text": "الأصلية اللي أنت بتعمل لها Pull المفروض إن هي تبقى أقل ما يمكن."
      },
      {
        "timestamps": {
          "from": "00:10:28,140",
          "to": "00:10:33,000"
        },
        "offsets": {
          "from": 628140,
          "to": 633000
        },
        "text": "وتبقى أصغر ما يمكن. أنت هتلاقي عندك Images مساحتها 1 ميجا؛ حقيقي"
      },
      {
        "timestamps": {
          "from": "00:10:33,000",
          "to": "00:10:36,720"
        },
        "offsets": {
          "from": 633000,
          "to": 636720
        },
        "text": "فيها 1 ميجا لا أكتر ولا أقل، وهتلاقي Images مساحتها 5 ميجا."
      },
      {
        "timestamps": {
          "from": "00:10:36,720",
          "to": "00:10:40,200"
        },
        "offsets": {
          "from": 636720,
          "to": 640200
        },
        "text": "وفي Images بتوصل لحد الـ Gigabytes على حسب"
      },
      {
        "timestamps": {
          "from": "00:10:40,200",
          "to": "00:10:44,400"
        },
        "offsets": {
          "from": 640200,
          "to": 644400
        },
        "text": "الـ Images دي جاية Shipped بإيه؟ وفيها إيه"
      },
      {
        "timestamps": {
          "from": "00:10:44,400",
          "to": "00:10:48,900"
        },
        "offsets": {
          "from": 644400,
          "to": 648900
        },
        "text": "جواها وإيه اللي نازل معاها وهكذا. حاجة تانية هنا لو أخدت"
      },
      {
        "timestamps": {
          "from": "00:10:48,900",
          "to": "00:10:53,380"
        },
        "offsets": {
          "from": 648900,
          "to": 653380
        },
        "text": "بالك إن إحنا في أوقات اسم الـ Image كان بيتغير سنة؛"
      },
      {
        "timestamps": {
          "from": "00:10:53,380",
          "to": "00:10:56,180"
        },
        "offsets": {
          "from": 653380,
          "to": 656180
        },
        "text": "يعني مرة استعملنا مثلاً Ubuntu، ومرة استعملنا Ubuntu"
      },
      {
        "timestamps": {
          "from": "00:10:56,180",
          "to": "00:10:59,260"
        },
        "offsets": {
          "from": 656180,
          "to": 659260
        },
        "text": "وبعدين Colon (نقطتين فوق بعض) وLatest مثلاً يعني."
      },
      {
        "timestamps": {
          "from": "00:10:59,260",
          "to": "00:11:03,020"
        },
        "offsets": {
          "from": 659260,
          "to": 663020
        },
        "text": "فنيجي هنا، خلينا نتكلم على موضوع الـ Image Naming ده"
      },
      {
        "timestamps": {
          "from": "00:11:03,020",
          "to": "00:11:07,020"
        },
        "offsets": {
          "from": 663020,
          "to": 667020
        },
        "text": "وخلينا نتوقف هنا قليلاً بس علشان نشرح الحتة دي."
      },
      {
        "timestamps": {
          "from": "00:11:07,020",
          "to": "00:11:12,620"
        },
        "offsets": {
          "from": 667020,
          "to": 672620
        },
        "text": "وهتلاقي، ولحسن الحظ اللي تابع الكلام بتاعنا في فيديو الـ Git"
      },
      {
        "timestamps": {
          "from": "00:11:12,620",
          "to": "00:11:14,620"
        },
        "offsets": {
          "from": 672620,
          "to": 674620
        },
        "text": "هتلاقي فيه وجه شبه كبير جداً جداً."
      },
      {
        "timestamps": {
          "from": "00:11:14,620",
          "to": "00:11:17,500"
        },
        "offsets": {
          "from": 674620,
          "to": 677500
        },
        "text": "دلوقتي الـ Images دي اللي أنت بتعملها Pull."
      },
      {
        "timestamps": {
          "from": "00:11:18,900",
          "to": "00:11:22,500"
        },
        "offsets": {
          "from": 678900,
          "to": 682500
        },
        "text": "الـ Image اللي أنت بتعملها Pull دي، أنت بتعملها Pull منين؟ أنا ما"
      },
      {
        "timestamps": {
          "from": "00:11:22,500",
          "to": "00:11:26,040"
        },
        "offsets": {
          "from": 682500,
          "to": 686040
        },
        "text": "قولتلوش أنا عايز أعمل Pull منين؟ لما جيت قولت له Docker image pull"
      },
      {
        "timestamps": {
          "from": "00:11:26,040",
          "to": "00:11:29,220"
        },
        "offsets": {
          "from": 686040,
          "to": 689220
        },
        "text": "Ubuntu أو Python، أنا ما قولتلوش أنا عايز أعمل Pull منين؟ وإزاي"
      },
      {
        "timestamps": {
          "from": "00:11:29,220",
          "to": "00:11:33,300"
        },
        "offsets": {
          "from": 689220,
          "to": 693300
        },
        "text": "عارف هيجيبها منين؟ By default الـ Pull بتاع الـ Image ده بيتعمل من"
      },
      {
        "timestamps": {
          "from": "00:11:33,300",
          "to": "00:11:38,160"
        },
        "offsets": {
          "from": 693300,
          "to": 698160
        },
        "text": "Registry. By default من غير ما أقول له أي حاجة الـ Registry اللي"
      },
      {
        "timestamps": {
          "from": "00:11:38,160",
          "to": "00:11:41,880"
        },
        "offsets": {
          "from": 698160,
          "to": 701880
        },
        "text": "فيها كل الـ Images اللي أنا محتاجها بتكون موجودة في Hub"
      },
      {
        "timestamps": {
          "from": "00:11:41,880",
          "to": "00:11:49,500"
        },
        "offsets": {
          "from": 701880,
          "to": 709500
        },
        "text": "hub.docker.com، دي الـ Default Registry. يعني إيه بقى Registry؟"
      },
      {
        "timestamps": {
          "from": "00:11:49,500",
          "to": "00:11:58,140"
        },
        "offsets": {
          "from": 709500,
          "to": 718140
        },
        "text": "الـ Registry ده مجرد مخزن فيه Repositories، وكل Repo فيه الـ Versions بتاعته. طب"
      },
      {
        "timestamps": {
          "from": "00:11:58,140",
          "to": "00:12:04,140"
        },
        "offsets": {
          "from": 718140,
          "to": 724140
        },
        "text": "الـ Registry دي متقسمة إزاي؟ أنا أقولك بقى متقسمة إزاي، الـ Registry دي"
      },
      {
        "timestamps": {
          "from": "00:12:04,140",
          "to": "00:12:09,580"
        },
        "offsets": {
          "from": 724140,
          "to": 729580
        },
        "text": "متقسمة كالتالي، خليني أقول مثلاً دي اللي هي.."
      },
      {
        "timestamps": {
          "from": "00:12:11,880",
          "to": "00:12:15,780"
        },
        "offsets": {
          "from": 731880,
          "to": 735780
        },
        "text": "تخيل إن هي دي الـ Registry بتاعتي، اللي هي مثلاً hub.docker.com"
      },
      {
        "timestamps": {
          "from": "00:12:15,780",
          "to": "00:12:23,140"
        },
        "offsets": {
          "from": 735780,
          "to": 743140
        },
        "text": "hub.docker.com، الـ Registry دي متقسمة Repos أو Repositories."
      },
      {
        "timestamps": {
          "from": "00:12:23,140",
          "to": "00:12:28,360"
        },
        "offsets": {
          "from": 743140,
          "to": 748360
        },
        "text": "ده Repo وده Repo تاني وتالت ورابع وهكذا، في Repo تاني هنا."
      },
      {
        "timestamps": {
          "from": "00:12:28,360",
          "to": "00:12:33,440"
        },
        "offsets": {
          "from": 748360,
          "to": 753440
        },
        "text": "وهكذا وده كمان برضه Repo وهكذا. إيه الـ Repo ده؟ الـ Repo ده"
      },
      {
        "timestamps": {
          "from": "00:12:33,440",
          "to": "00:12:41,020"
        },
        "offsets": {
          "from": 753440,
          "to": 761020
        },
        "text": "هو عبارة عن مجموعة Versions من Image معينة. يعني إيه؟ يعني أنا مثلاً عندي"
      },
      {
        "timestamps": {
          "from": "00:12:41,020",
          "to": "00:12:47,920"
        },
        "offsets": {
          "from": 761020,
          "to": 767920
        },
        "text": "الـ Repo بتاع Ubuntu مثلاً يعني، الـ Repo اسمه Ubuntu، أوكي؟"
      },
      {
        "timestamps": {
          "from": "00:12:47,920",
          "to": "00:12:54,040"
        },
        "offsets": {
          "from": 767920,
          "to": 774040
        },
        "text": "جوه الـ Repo بتاع Ubuntu ده فيه كل الـ Versions بتاعة Ubuntu بكل الـ Tags بتاعتها."
      },
      {
        "timestamps": {
          "from": "00:12:54,040",
          "to": "00:12:59,920"
        },
        "offsets": {
          "from": 774040,
          "to": 779920
        },
        "text": "أنت مش كل مرة بتعمل مثلاً Ubuntu Image"
      },
      {
        "timestamps": {
          "from": "00:12:59,920",
          "to": "00:13:04,540"
        },
        "offsets": {
          "from": 779920,
          "to": 784540
        },
        "text": "مثلاً وبعد كدة بتنزل فبتعمل Update عليها، بعدين تقوم عامل زي"
      },
      {
        "timestamps": {
          "from": "00:13:04,540",
          "to": "00:13:09,100"
        },
        "offsets": {
          "from": 784540,
          "to": 789100
        },
        "text": "بالظبط ما كنا بنعمل في الـ Git، تقعد تعدل شوية في الـ Code بتاعك وبعدين تقوم"
      },
      {
        "timestamps": {
          "from": "00:13:09,100",
          "to": "00:13:12,760"
        },
        "offsets": {
          "from": 789100,
          "to": 792760
        },
        "text": "عامل Commit فتبعت الكلام ده على الـ History، بعدين تعمل Commit"
      },
      {
        "timestamps": {
          "from": "00:13:12,760",
          "to": "00:13:15,940"
        },
        "offsets": {
          "from": 792760,
          "to": 795940
        },
        "text": "تاني، تعدل تعديلات وCommit تاني، وتعدل تعديل وCommit تاني"
      },
      {
        "timestamps": {
          "from": "00:13:15,940",
          "to": "00:13:23,260"
        },
        "offsets": {
          "from": 795940,
          "to": 803260
        },
        "text": "وهكذا. أوكي؟ فكل مرة أنت بتعمل التعديل ده، كان فيه عندنا حاجة اسمها"
      },
      {
        "timestamps": {
          "from": "00:13:23,260",
          "to": "00:13:27,340"
        },
        "offsets": {
          "from": 803260,
          "to": 807340
        },
        "text": "الـ Tag. الـ Tag ده اللي هو إيه؟ الـ Tag ده هو إنك أنت تيجي على"
      },
      {
        "timestamps": {
          "from": "00:13:27,340",
          "to": "00:13:31,660"
        },
        "offsets": {
          "from": 807340,
          "to": 811660
        },
        "text": "واحدة من الـ Commits وتقول بص بقى يا معلم الـ Commit دي"
      },
      {
        "timestamps": {
          "from": "00:13:31,660",
          "to": "00:13:37,600"
        },
        "offsets": {
          "from": 811660,
          "to": 817600
        },
        "text": "بقت Version، وتعدل وتعمل Commit، تعدل وتعمل Commit، وبعد"
      },
      {
        "timestamps": {
          "from": "00:13:37,600",
          "to": "00:13:41,020"
        },
        "offsets": {
          "from": 817600,
          "to": 821020
        },
        "text": "أسبوعين تلاتة تيجي تقوله: بص بقى الـ Commit دي يا معلم علّم"
      },
      {
        "timestamps": {
          "from": "00:13:41,020",
          "to": "00:13:46,780"
        },
        "offsets": {
          "from": 821020,
          "to": 826780
        },
        "text": "عليها واكتب بين قوسين إن ده Version، ده كده اسمه Tag والـ Tag ده"
      },
      {
        "timestamps": {
          "from": "00:13:46,780",
          "to": "00:13:51,760"
        },
        "offsets": {
          "from": 826780,
          "to": 831760
        },
        "text": "موجود برضه في Git، فتلاقي مثلاً عندي هنا Ubuntu"
      },
      {
        "timestamps": {
          "from": "00:13:51,760",
          "to": "00:13:56,740"
        },
        "offsets": {
          "from": 831760,
          "to": 836740
        },
        "text": "إحنا قلنا إن خلاص الـ Repo ده فيه Image واحدة بـ Versions مختلفة، فعندي"
      },
      {
        "timestamps": {
          "from": "00:13:56,740",
          "to": "00:14:03,280"
        },
        "offsets": {
          "from": 836740,
          "to": 843280
        },
        "text": "هنا مثلاً ده Version 1 أوكي، وبعد كدة Version 1.1"
      },
      {
        "timestamps": {
          "from": "00:14:03,280",
          "to": "00:14:16,640"
        },
        "offsets": {
          "from": 843280,
          "to": 856640
        },
        "text": "وبعد كدة مثلاً Version 2 وهكذا، تمام؟ اسم الـ Repo أو اسم الـ Image"
      },
      {
        "timestamps": {
          "from": "00:14:16,640",
          "to": "00:14:22,880"
        },
        "offsets": {
          "from": 856640,
          "to": 862880
        },
        "text": "في Docker. يبقى الـ Image نفسها، مثلاً وليكن الـ Image"
      },
      {
        "timestamps": {
          "from": "00:14:22,880",
          "to": "00:14:31,140"
        },
        "offsets": {
          "from": 862880,
          "to": 871140
        },
        "text": "اللي جاية من الـ Repo دي، اسمها Ubuntu أوكي؟ والـ Tag بتاعها اللي هو"
      },
      {
        "timestamps": {
          "from": "00:14:31,140",
          "to": "00:14:34,840"
        },
        "offsets": {
          "from": 871140,
          "to": 874840
        },
        "text": "هو الـ Version بتاعها مثلاً اللي هو V1.0"
      },
      {
        "timestamps": {
          "from": "00:14:34,840",
          "to": "00:14:38,340"
        },
        "offsets": {
          "from": 874840,
          "to": 878340
        },
        "text": "الـ Repo اسمه Ubuntu"
      },
      {
        "timestamps": {
          "from": "00:14:38,340",
          "to": "00:14:42,840"
        },
        "offsets": {
          "from": 878340,
          "to": 882840
        },
        "text": "الـ Version أو الـ Tag اسمه V1.0"
      },
      {
        "timestamps": {
          "from": "00:14:42,840",
          "to": "00:14:44,840"
        },
        "offsets": {
          "from": 882840,
          "to": 884840
        },
        "text": "الـ Tag ده يكون اسمه زي ما يكون، مش هتفرق معانا."
      },
      {
        "timestamps": {
          "from": "00:14:44,840",
          "to": "00:14:46,840"
        },
        "offsets": {
          "from": 884840,
          "to": 886840
        },
        "text": "إنت بتختار أي اسم."
      },
      {
        "timestamps": {
          "from": "00:14:46,840",
          "to": "00:14:49,340"
        },
        "offsets": {
          "from": 886840,
          "to": 889340
        },
        "text": "سميها حسن مش هتفرق كتير."
      },
      {
        "timestamps": {
          "from": "00:14:49,340",
          "to": "00:14:54,040"
        },
        "offsets": {
          "from": 889340,
          "to": 894040
        },
        "text": "الـ Repo بعد كده colon."
      },
      {
        "timestamps": {
          "from": "00:14:54,040",
          "to": "00:14:57,040"
        },
        "offsets": {
          "from": 894040,
          "to": 897040
        },
        "text": "الـ Tag كده اسمه الـ Image Name."
      },
      {
        "timestamps": {
          "from": "00:14:57,040",
          "to": "00:14:59,740"
        },
        "offsets": {
          "from": 897040,
          "to": 899740
        },
        "text": "يبقى الـ Image Name."
      },
      {
        "timestamps": {
          "from": "00:20:00,000",
          "to": "00:20:03,580"
        },
        "offsets": {
          "from": 1200000,
          "to": 1203580
        },
        "text": "ده بيساوي."
      },
      {
        "timestamps": {
          "from": "00:20:03,580",
          "to": "00:20:05,120"
        },
        "offsets": {
          "from": 1203580,
          "to": 1205120
        },
        "text": "الـ Repo."
      },
      {
        "timestamps": {
          "from": "00:20:05,120",
          "to": "00:20:08,300"
        },
        "offsets": {
          "from": 1205120,
          "to": 1208300
        },
        "text": "بعدين نقطتين فوق بعض (colon)."
      },
      {
        "timestamps": {
          "from": "00:20:08,300",
          "to": "00:20:08,900"
        },
        "offsets": {
          "from": 1208300,
          "to": 1208900
        },
        "text": "الـ Tag."
      },
      {
        "timestamps": {
          "from": "00:20:08,900",
          "to": "00:20:15,660"
        },
        "offsets": {
          "from": 1208900,
          "to": 1215660
        },
        "text": "يبقى عندي."
      },
      {
        "timestamps": {
          "from": "00:20:15,660",
          "to": "00:20:18,140"
        },
        "offsets": {
          "from": 1215660,
          "to": 1218140
        },
        "text": "الـ Image مثلاً، في عندي Image مثلاً."
      },
      {
        "timestamps": {
          "from": "00:20:18,140",
          "to": "00:20:18,660"
        },
        "offsets": {
          "from": 1218140,
          "to": 1218660
        },
        "text": "Python."
      },
      {
        "timestamps": {
          "from": "00:20:18,660",
          "to": "00:20:23,080"
        },
        "offsets": {
          "from": 1218660,
          "to": 1223080
        },
        "text": "3.2."
      },
      {
        "timestamps": {
          "from": "00:20:23,080",
          "to": "00:20:25,000"
        },
        "offsets": {
          "from": 1223080,
          "to": 1225000
        },
        "text": "عندي Image مثلاً."
      },
      {
        "timestamps": {
          "from": "00:20:25,000",
          "to": "00:20:26,560"
        },
        "offsets": {
          "from": 1225000,
          "to": 1226560
        },
        "text": "Ubuntu."
      },
      {
        "timestamps": {
          "from": "00:20:26,560",
          "to": "00:20:28,000"
        },
        "offsets": {
          "from": 1226560,
          "to": 1228000
        },
        "text": "ما إحنا لسه متكلمين على Ubuntu."
      },
      {
        "timestamps": {
          "from": "00:20:28,000",
          "to": "00:20:29,640"
        },
        "offsets": {
          "from": 1228000,
          "to": 1229640
        },
        "text": "مثلاً."
      },
      {
        "timestamps": {
          "from": "00:20:29,640",
          "to": "00:20:32,880"
        },
        "offsets": {
          "from": 1229640,
          "to": 1232880
        },
        "text": "20.04."
      },
      {
        "timestamps": {
          "from": "00:20:32,880",
          "to": "00:20:36,560"
        },
        "offsets": {
          "from": 1232880,
          "to": 1236560
        },
        "text": "الاثنين مع بعض."
      },
      {
        "timestamps": {
          "from": "00:20:36,560",
          "to": "00:20:38,160"
        },
        "offsets": {
          "from": 1236560,
          "to": 1238160
        },
        "text": "كده ده اسمه الـ Image Name."
      },
      {
        "timestamps": {
          "from": "00:20:38,160",
          "to": "00:20:40,820"
        },
        "offsets": {
          "from": 1238160,
          "to": 1240820
        },
        "text": "اللي على الشمال دي اسمه الـ Repo."
      },
      {
        "timestamps": {
          "from": "00:20:40,820",
          "to": "00:20:43,700"
        },
        "offsets": {
          "from": 1240820,
          "to": 1243700
        },
        "text": "واللي على اليمين ده."
      },
      {
        "timestamps": {
          "from": "00:20:43,700",
          "to": "00:20:44,640"
        },
        "offsets": {
          "from": 1243700,
          "to": 1244640
        },
        "text": "ده اللي هو الـ Tag."
      },
      {
        "timestamps": {
          "from": "00:20:44,640",
          "to": "00:20:46,620"
        },
        "offsets": {
          "from": 1244640,
          "to": 1246620
        },
        "text": "الـ Repo مع الـ Tag مع بعض."
      },
      {
        "timestamps": {
          "from": "00:20:46,620",
          "to": "00:20:48,740"
        },
        "offsets": {
          "from": 1246620,
          "to": 1248740
        },
        "text": "الاثنين اسمهم الـ Image."
      },
      {
        "timestamps": {
          "from": "00:20:48,740",
          "to": "00:20:51,140"
        },
        "offsets": {
          "from": 1248740,
          "to": 1251140
        },
        "text": "يبقى الـ Registry عندي."
      },
      {
        "timestamps": {
          "from": "00:20:51,140",
          "to": "00:20:52,620"
        },
        "offsets": {
          "from": 1251140,
          "to": 1252620
        },
        "text": "متقسمة لمجموعة من الـ Repo."
      },
      {
        "timestamps": {
          "from": "00:20:52,620",
          "to": "00:20:54,880"
        },
        "offsets": {
          "from": 1252620,
          "to": 1254880
        },
        "text": "كل Repo هو عبارة عن."
      },
      {
        "timestamps": {
          "from": "00:20:54,880",
          "to": "00:20:59,800"
        },
        "offsets": {
          "from": 1254880,
          "to": 1259800
        },
        "text": "Image واحدة بس بـ Tags مختلفة. يعني ما ينفعش أجي هنا في."
      },
      {
        "timestamps": {
          "from": "00:21:09,800",
          "to": "00:21:14,600"
        },
        "offsets": {
          "from": 1259800,
          "to": 1264600
        },
        "text": "الـ Repo بتاع Ubuntu وأعمل مثلاً Image تانية خالص مالهاش."
      },
      {
        "timestamps": {
          "from": "00:21:04,600",
          "to": "00:21:10,180"
        },
        "offsets": {
          "from": 1264600,
          "to": 1270180
        },
        "text": "أي علاقة بالموضوع. لا ما ينفعش، هتلاقي فيه."
      },
      {
        "timestamps": {
          "from": "00:21:10,180",
          "to": "00:21:16,000"
        },
        "offsets": {
          "from": 1270180,
          "to": 1276000
        },
        "text": "Repo اسمه مثلاً hadoop-sudo، ومثلاً Repo تاني اسمه web، و Repo."
      },
      {
        "timestamps": {
          "from": "00:21:16,000",
          "to": "00:21:18,940"
        },
        "offsets": {
          "from": 1276000,
          "to": 1278940
        },
        "text": "تاني اسمه httpd-alpine أو حاجة زي كده، مش فاكر."
      },
      {
        "timestamps": {
          "from": "00:21:18,940",
          "to": "00:21:24,040"
        },
        "offsets": {
          "from": 1278940,
          "to": 1284040
        },
        "text": "حاجة كده. كويس كده؟ طيب هنا في نقطة تانية برضه في موضوع."
      },
      {
        "timestamps": {
          "from": "00:21:24,880",
          "to": "00:21:40,880"
        },
        "offsets": {
          "from": 1284880,
          "to": 1300880
        },
        "text": "لما أقول له docker image pull مثلاً python:3.9.7."
      },
      {
        "timestamps": {
          "from": "00:21:40,880",
          "to": "00:21:48,880"
        },
        "offsets": {
          "from": 1300880,
          "to": 1308880
        },
        "text": "هل الـ Repos دي جوه الـ Registry سايحة على بعض؟ اللي يخطف أول اسم خلاص؟ لا مابتبقاش سايحة كده."
      },
      {
        "timestamps": {
          "from": "00:21:49,880",
          "to": "00:21:56,380"
        },
        "offsets": {
          "from": 1309880,
          "to": 1316380
        },
        "text": "عندنا Official Images. إيه هي الـ Official Images؟"
      },
      {
        "timestamps": {
          "from": "00:21:56,380",
          "to": "00:22:02,880"
        },
        "offsets": {
          "from": 1316380,
          "to": 1322880
        },
        "text": "دي الـ Images اللي Docker شايفاها أصلية."
      },
      {
        "timestamps": {
          "from": "00:22:02,880",
          "to": "00:22:12,380"
        },
        "offsets": {
          "from": 1322880,
          "to": 1332380
        },
        "text": "من المصدر الأصلي مثلاً من Microsoft أو IBM أو MongoDB أو Apache."
      },
      {
        "timestamps": {
          "from": "00:22:12,380",
          "to": "00:22:15,380"
        },
        "offsets": {
          "from": 1332380,
          "to": 1335380
        },
        "text": "Images Official."
      },
      {
        "timestamps": {
          "from": "00:22:15,380",
          "to": "00:22:24,380"
        },
        "offsets": {
          "from": 1335380,
          "to": 1344380
        },
        "text": "إذا أردت الـ Image الـ Official عشان تكتب أي شيء، يجب عليك الـ Image الـ Official عشان تكتب Python."
      },
      {
        "timestamps": {
          "from": "00:22:24,380",
          "to": "00:22:28,380"
        },
        "offsets": {
          "from": 1344380,
          "to": 1348380
        },
        "text": "إذا أردت الـ Image الـ Official عشان تكتب أي شيء، يجب عليك الـ Image الـ Official عشان تكتب Python."
      },
      {
        "timestamps": {
          "from": "00:22:28,380",
          "to": "00:22:39,380"
        },
        "offsets": {
          "from": 1348380,
          "to": 1359380
        },
        "text": "إذا أردت الـ Image الـ Official عشان تكتب أي شيء، لازم تختار الـ Image الـ Official."
      },
      {
        "timestamps": {
          "from": "00:22:39,380",
          "to": "00:22:43,040"
        },
        "offsets": {
          "from": 1359380,
          "to": 1363040
        },
        "text": "والـ Tag بتاع Hadoop V1."
      },
      {
        "timestamps": {
          "from": "00:22:43,040",
          "to": "00:22:50,500"
        },
        "offsets": {
          "from": 1363040,
          "to": 1370500
        },
        "text": "حلو كده؟ هل لو إنت قلت له docker image pull hadoop-sudo هيجيبها لك؟ لأ مش هيجيبها لك."
      },
      {
        "timestamps": {
          "from": "00:22:50,500",
          "to": "00:22:57,140"
        },
        "offsets": {
          "from": 1370500,
          "to": 1377140
        },
        "text": "لأن الـ Image دي مش Official، دي Image عاملها الفقير إلى الله اللي هو أنا."
      },
      {
        "timestamps": {
          "from": "00:22:57,140",
          "to": "00:23:01,500"
        },
        "offsets": {
          "from": 1377140,
          "to": 1381500
        },
        "text": "طيب تعمل إيه علشان تجيب الـ Images اللي مش Official؟"
      },
      {
        "timestamps": {
          "from": "00:23:01,500",
          "to": "00:23:07,100"
        },
        "offsets": {
          "from": 1381500,
          "to": 1387100
        },
        "text": "تيجي هنا تقوم حاطط اسم الـ Account قبل الـ Repo."
      },
      {
        "timestamps": {
          "from": "00:23:07,100",
          "to": "00:23:12,980"
        },
        "offsets": {
          "from": 1387100,
          "to": 1392980
        },
        "text": "فأنا الـ Account بتاعي مثلاً asami76، أوكيه؟"
      },
      {
        "timestamps": {
          "from": "00:23:12,980",
          "to": "00:23:19,280"
        },
        "offsets": {
          "from": 1392980,
          "to": 1399280
        },
        "text": "وتقوم عامل slash، أوكيه؟ كده هيروح للأكونت اللي اسمه asami."
      },
      {
        "timestamps": {
          "from": "00:23:19,280",
          "to": "00:23:23,720"
        },
        "offsets": {
          "from": 1399280,
          "to": 1403720
        },
        "text": "76 ويشوف جوه هل عنده Repo اسمه hadoop-sudo ولا"
      },
      {
        "timestamps": {
          "from": "00:23:23,720",
          "to": "00:23:28,700"
        },
        "offsets": {
          "from": 1403720,
          "to": 1408700
        },
        "text": "لأ؟ وبعدين يدخل جوه الـ hadoop-sudo ويشوف الـ Tag اللي اسمه"
      },
      {
        "timestamps": {
          "from": "00:23:28,700",
          "to": "00:23:35,360"
        },
        "offsets": {
          "from": 1408700,
          "to": 1415360
        },
        "text": "1.0، دي الطريقة اللي بيشتغل بيها. من ضمن الحاجات"
      },
      {
        "timestamps": {
          "from": "00:23:35,360",
          "to": "00:23:38,720"
        },
        "offsets": {
          "from": 1415360,
          "to": 1418720
        },
        "text": "اللي تقدر تعملها برضه، إنك مثلاً لو أنا عندي مثلاً"
      },
      {
        "timestamps": {
          "from": "00:23:38,720",
          "to": "00:23:45,260"
        },
        "offsets": {
          "from": 1418720,
          "to": 1425260
        },
        "text": "Python، ده Repo Official Image. أوكيه؟ جوه الـ Repo"
      },
      {
        "timestamps": {
          "from": "00:23:45,260",
          "to": "00:23:49,700"
        },
        "offsets": {
          "from": 1425260,
          "to": 1429700
        },
        "text": "بتاع Python ده أنا عندي كتير، مثلاً 2.7.8 مثلاً."
      },
      {
        "timestamps": {
          "from": "00:23:49,700",
          "to": "00:23:55,880"
        },
        "offsets": {
          "from": 1429700,
          "to": 1435880
        },
        "text": "عندي مثلاً 3.8.10 مثلاً، وعندي مثلاً"
      },
      {
        "timestamps": {
          "from": "00:23:55,880",
          "to": "00:24:02,180"
        },
        "offsets": {
          "from": 1435880,
          "to": 1442180
        },
        "text": "3.9.7، عندي مثلاً 3.10.0. فإنت لو عايز"
      },
      {
        "timestamps": {
          "from": "00:24:02,180",
          "to": "00:24:06,320"
        },
        "offsets": {
          "from": 1442180,
          "to": 1446320
        },
        "text": "تجيب Image من الـ Images دول، هتقول له أنا عايز docker image"
      },
      {
        "timestamps": {
          "from": "00:24:06,320",
          "to": "00:24:13,700"
        },
        "offsets": {
          "from": 1446320,
          "to": 1453700
        },
        "text": "pull python:2.7.8 أو python:3.8.10 مثلاً."
      },
      {
        "timestamps": {
          "from": "00:24:13,700",
          "to": "00:24:19,520"
        },
        "offsets": {
          "from": 1453700,
          "to": 1459520
        },
        "text": "يعني، طب افرض إنت مش عارف وعايز أحدث حاجة في Python وخلاص."
      },
      {
        "timestamps": {
          "from": "00:24:19,520",
          "to": "00:24:27,320"
        },
        "offsets": {
          "from": 1459520,
          "to": 1467320
        },
        "text": "أحدث حاجة في الـ Repo اللي اسمه Python."
      },
      {
        "timestamps": {
          "from": "00:24:27,320",
          "to": "00:24:30,320"
        },
        "offsets": {
          "from": 1467320,
          "to": 1470320
        },
        "text": "تعمل إيه؟ أقدر إني أقول له كده:"
      },
      {
        "timestamps": {
          "from": "00:24:30,320",
          "to": "00:24:31,320"
        },
        "offsets": {
          "from": 1470320,
          "to": 1471320
        },
        "text": "docker برضه"
      },
      {
        "timestamps": {
          "from": "00:24:31,320",
          "to": "00:24:33,460"
        },
        "offsets": {
          "from": 1471320,
          "to": 1473460
        },
        "text": "image"
      },
      {
        "timestamps": {
          "from": "00:24:33,460",
          "to": "00:24:36,040"
        },
        "offsets": {
          "from": 1473460,
          "to": 1476040
        },
        "text": "pull"
      },
      {
        "timestamps": {
          "from": "00:24:36,040",
          "to": "00:24:39,320"
        },
        "offsets": {
          "from": 1476040,
          "to": 1479320
        },
        "text": "وأقول له python اللي هو اسم الـ Repo"
      },
      {
        "timestamps": {
          "from": "00:24:39,320",
          "to": "00:24:42,880"
        },
        "offsets": {
          "from": 1479320,
          "to": 1482880
        },
        "text": "وبعد الـ colon أقول له latest."
      },
      {
        "timestamps": {
          "from": "00:24:42,880",
          "to": "00:24:49,080"
        },
        "offsets": {
          "from": 1482880,
          "to": 1489080
        },
        "text": "latest دي كلمة، ده مش اسم الـ Tag."
      },
      {
        "timestamps": {
          "from": "00:24:49,080",
          "to": "00:24:50,600"
        },
        "offsets": {
          "from": 1489080,
          "to": 1490600
        },
        "text": "ده مجرد keyword."
      },
      {
        "timestamps": {
          "from": "00:24:50,600",
          "to": "00:24:54,280"
        },
        "offsets": {
          "from": 1490600,
          "to": 1494280
        },
        "text": "لما Docker Hub يشوف كلمة latest دي،"
      },
      {
        "timestamps": {
          "from": "00:24:54,620",
          "to": "00:25:02,300"
        },
        "offsets": {
          "from": 1494620,
          "to": 1502300
        },
        "text": "هيعرف إن إنت عايز آخر حاجة خالص اتضافت، آخر Tag موجود جوه الـ Repo."
      },
      {
        "timestamps": {
          "from": "00:30:00,000",
          "to": "00:30:05,280"
        },
        "offsets": {
          "from": 1800000,
          "to": 1805280
        },
        "text": "الموجود جوه الـ Repo اللي اسمه Python. أوكيه؟ تعالوا نشوف"
      },
      {
        "timestamps": {
          "from": "00:30:05,280",
          "to": "00:30:13,100"
        },
        "offsets": {
          "from": 1805280,
          "to": 1813100
        },
        "text": "مثال على كده من Docker Hub، هروح على"
      },
      {
        "timestamps": {
          "from": "00:30:13,100",
          "to": "00:30:21,040"
        },
        "offsets": {
          "from": 1813100,
          "to": 1821040
        },
        "text": "Docker Hub زي ما اتفقنا، الـ Registry اسمها hub.docker.com."
      },
      {
        "timestamps": {
          "from": "00:30:21,040",
          "to": "00:30:29,880"
        },
        "offsets": {
          "from": 1821040,
          "to": 1829880
        },
        "text": "هتعمل Login بالأكونت بتاعك عشان تقدر تعمل Browse."
      },
      {
        "timestamps": {
          "from": "00:30:30,000",
          "to": "00:30:34,720"
        },
        "offsets": {
          "from": 1830000,
          "to": 1834720
        },
        "text": "asami76 ده الأكونت بتاعي في Docker عشان لما"
      },
      {
        "timestamps": {
          "from": "00:30:34,720",
          "to": "00:30:41,260"
        },
        "offsets": {
          "from": 1834720,
          "to": 1841260
        },
        "text": "تيجي تأخد Images من عندي وتكتب الباسورد."
      },
      {
        "timestamps": {
          "from": "00:30:41,260",
          "to": "00:30:50,240"
        },
        "offsets": {
          "from": 1841260,
          "to": 1850240
        },
        "text": "أول حاجة هتفتح عندك الـ Home بتاعتك، أنا عندي هنا"
      },
      {
        "timestamps": {
          "from": "00:30:50,240",
          "to": "00:30:54,920"
        },
        "offsets": {
          "from": 1850240,
          "to": 1854920
        },
        "text": "مثلاً أربعة. عندي مثلاً Hadoop وعندي مثلاً Hadoop Pseudo وعندي"
      },
      {
        "timestamps": {
          "from": "00:30:54,920",
          "to": "00:30:59,660"
        },
        "offsets": {
          "from": 1854920,
          "to": 1859660
        },
        "text": "مثلاً Docker Host. وعندي New Web. وتلاقي ده برضه ممكن يكون"
      },
      {
        "timestamps": {
          "from": "00:30:59,660",
          "to": "00:31:06,080"
        },
        "offsets": {
          "from": 1859660,
          "to": 1866080
        },
        "text": "بالظبط زي GitHub. أوكي؟ لو جيت مثلاً على Hadoop Pseudo مثلاً و Hadoop"
      },
      {
        "timestamps": {
          "from": "00:31:06,080",
          "to": "00:31:14,060"
        },
        "offsets": {
          "from": 1866080,
          "to": 1874060
        },
        "text": "Pseudo ده عبارة عن Image فيها كل الـ Hadoop يعني كلها نازلة فيه"
      },
      {
        "timestamps": {
          "from": "00:31:14,060",
          "to": "00:31:20,720"
        },
        "offsets": {
          "from": 1874060,
          "to": 1880720
        },
        "text": "تمام؟ فكل Hadoop نازل يعني. هتلاقي حتى هنا الـ Description بتاعها إن"
      },
      {
        "timestamps": {
          "from": "00:31:20,720",
          "to": "00:31:23,720"
        },
        "offsets": {
          "from": 1880720,
          "to": 1883720
        },
        "text": "أنا لما أجي أجيب الـ Image دي أعمل لها Pull إزاي؟ تمام؟ اللي هو عكس"
      },
      {
        "timestamps": {
          "from": "00:31:23,720",
          "to": "00:31:32,300"
        },
        "offsets": {
          "from": 1883720,
          "to": 1892300
        },
        "text": "الـ Command، هاجي أقول له وده اسم الـ Image كده. ده"
      },
      {
        "timestamps": {
          "from": "00:31:32,300",
          "to": "00:31:39,080"
        },
        "offsets": {
          "from": 1892300,
          "to": 1899080
        },
        "text": "كده اسم الـ Image. الـ Account بتاعي slash. فهتلاقي عندي هنا كده"
      },
      {
        "timestamps": {
          "from": "00:31:39,080",
          "to": "00:31:44,900"
        },
        "offsets": {
          "from": 1899080,
          "to": 1904900
        },
        "text": "لو دخلت على الـ Repo ده ودخلت عليه كده. هتلاقي أنا ما"
      },
      {
        "timestamps": {
          "from": "00:31:44,900",
          "to": "00:31:53,300"
        },
        "offsets": {
          "from": 1904900,
          "to": 1913300
        },
        "text": "عندي غير الـ Tag ده. فلو كتبت له أو كتبت له"
      },
      {
        "timestamps": {
          "from": "00:31:53,300",
          "to": "00:31:59,780"
        },
        "offsets": {
          "from": 1913300,
          "to": 1919780
        },
        "text": "أو ما قلتش حاجة هيجيب دايماً آخر نسخة في آخر Tag أو آخر"
      },
      {
        "timestamps": {
          "from": "00:31:59,780",
          "to": "00:32:04,640"
        },
        "offsets": {
          "from": 1919780,
          "to": 1924640
        },
        "text": "موجود في الـ Repo ده. أوكي؟ تعالى نبص كده ونروح على الـ Docker Hub. لما تخش"
      },
      {
        "timestamps": {
          "from": "00:32:04,640",
          "to": "00:32:09,680"
        },
        "offsets": {
          "from": 1924640,
          "to": 1929680
        },
        "text": "عليه كده، هتلاقي دايماً هو بيبدأ بشوية Images."
      },
      {
        "timestamps": {
          "from": "00:32:09,680",
          "to": "00:32:13,040"
        },
        "offsets": {
          "from": 1929680,
          "to": 1933040
        },
        "text": "بشوية Images. دي الـ Images اللي موجودة"
      },
      {
        "timestamps": {
          "from": "00:32:13,040",
          "to": "00:32:17,600"
        },
        "offsets": {
          "from": 1933040,
          "to": 1937600
        },
        "text": "عندي. بتقدر تعمل Search طبعاً. هتلاقي عندك العديد والعديد"
      },
      {
        "timestamps": {
          "from": "00:32:17,600",
          "to": "00:32:21,360"
        },
        "offsets": {
          "from": 1937600,
          "to": 1941360
        },
        "text": "والعديد من الـ Images. تمام؟ هتلاقي أشهرها مثلاً Nginx."
      },
      {
        "timestamps": {
          "from": "00:32:23,300",
          "to": "00:32:36,300"
        },
        "offsets": {
          "from": 1943300,
          "to": 1956300
        },
        "text": "بص مثلاً الـ Image دي كام مرة اتعمل لها Download؟ كام مرة اتعمل لها Pull؟ مليار مرة"
      },
      {
        "timestamps": {
          "from": "00:32:36,300",
          "to": "00:32:44,300"
        },
        "offsets": {
          "from": 1956300,
          "to": 1964300
        },
        "text": "مليار؟ طيب تخيل إنت فايتك إيه؟ فيه مليار مرة اتعمل لها Download"
      },
      {
        "timestamps": {
          "from": "00:32:44,300",
          "to": "00:32:49,560"
        },
        "offsets": {
          "from": 1964300,
          "to": 1969560
        },
        "text": "Alpine مثلاً دي اللي هي Version من Linux ومشهورة جداً جداً"
      },
      {
        "timestamps": {
          "from": "00:32:49,560",
          "to": "00:32:53,800"
        },
        "offsets": {
          "from": 1969560,
          "to": 1973800
        },
        "text": "ومشهورة جداً لما بنتعامل مع موضوع الـ Containers وكده"
      },
      {
        "timestamps": {
          "from": "00:32:53,800",
          "to": "00:32:57,600"
        },
        "offsets": {
          "from": 1973800,
          "to": 1977600
        },
        "text": "عشان بتستعمل كتير جداً في الـ Containers لأنها Lightweight جداً"
      },
      {
        "timestamps": {
          "from": "00:32:57,600",
          "to": "00:32:59,360"
        },
        "offsets": {
          "from": 1977600,
          "to": 1979360
        },
        "text": "الـ Image مساحتها 5 ميجا"
      },
      {
        "timestamps": {
          "from": "00:32:59,360",
          "to": "00:33:00,100"
        },
        "offsets": {
          "from": 1979360,
          "to": 1980100
        },
        "text": "كلام فاضي يعني"
      },
      {
        "timestamps": {
          "from": "00:33:00,100",
          "to": "00:33:03,680"
        },
        "offsets": {
          "from": 1980100,
          "to": 1983680
        },
        "text": "هتلاقي حاجات بقى ليها علاقة بالـ Network مثلاً"
      },
      {
        "timestamps": {
          "from": "00:33:03,680",
          "to": "00:33:04,600"
        },
        "offsets": {
          "from": 1983680,
          "to": 1984600
        },
        "text": "Load Balancer زي ما إحنا عارفين"
      },
      {
        "timestamps": {
          "from": "00:33:04,600",
          "to": "00:33:05,360"
        },
        "offsets": {
          "from": 1984600,
          "to": 1985360
        },
        "text": "هتلاقي مثلاً Ubuntu"
      },
      {
        "timestamps": {
          "from": "00:33:05,360",
          "to": "00:33:06,540"
        },
        "offsets": {
          "from": 1985360,
          "to": 1986540
        },
        "text": "مثلاً يعني"
      },
      {
        "timestamps": {
          "from": "00:33:06,540",
          "to": "00:33:07,800"
        },
        "offsets": {
          "from": 1986540,
          "to": 1987800
        },
        "text": "هتلاقي مثلاً Python"
      },
      {
        "timestamps": {
          "from": "00:33:07,800",
          "to": "00:33:09,960"
        },
        "offsets": {
          "from": 1987800,
          "to": 1989960
        },
        "text": "هتلاقي Python برضه نزل مثلاً مليار مرة"
      },
      {
        "timestamps": {
          "from": "00:33:14,300",
          "to": "00:33:19,300"
        },
        "offsets": {
          "from": 1994300,
          "to": 1999300
        },
        "text": "هتلاقي شوية References ودسكربشن، وده MD file بالمناسبة ده Markdown file"
      },
      {
        "timestamps": {
          "from": "00:33:19,300",
          "to": "00:33:24,300"
        },
        "offsets": {
          "from": 1999300,
          "to": 2004300
        },
        "text": "برضه زي الـ GitHub Repo. ولو رحت على الـ Tags"
      },
      {
        "timestamps": {
          "from": "00:33:24,300",
          "to": "00:33:29,300"
        },
        "offsets": {
          "from": 2004300,
          "to": 2009300
        },
        "text": "هتلاقي جوه الـ Tags هنا فيه Tags. يعني بص كده هتلاقي فيه Tags"
      },
      {
        "timestamps": {
          "from": "00:33:29,300",
          "to": "00:33:34,300"
        },
        "offsets": {
          "from": 2009300,
          "to": 2014300
        },
        "text": "ماشي؟ هتقدر إنك إنت بقى تستعمل"
      },
      {
        "timestamps": {
          "from": "00:33:34,300",
          "to": "00:33:39,300"
        },
        "offsets": {
          "from": 2014300,
          "to": 2019300
        },
        "text": "الـ Version اللي إنت عايزه. هتلاحظ هنا بقى فيه شوية حاجات. يعني هتلاحظ مثلاً"
      },
      {
        "timestamps": {
          "from": "00:33:39,300",
          "to": "00:33:47,160"
        },
        "offsets": {
          "from": 2019300,
          "to": 2027160
        },
        "text": "إن فيه الـ Architecture بتاعها مثلاً"
      },
      {
        "timestamps": {
          "from": "00:33:47,160",
          "to": "00:33:53,640"
        },
        "offsets": {
          "from": 2027160,
          "to": 2033640
        },
        "text": "Windows، وفي تانية Linux. تمام؟ وهتلاقي حاجة تانية، هتلاقي بقى"
      },
      {
        "timestamps": {
          "from": "00:33:53,640",
          "to": "00:33:58,320"
        },
        "offsets": {
          "from": 2033640,
          "to": 2038320
        },
        "text": "حاجات زي كده يعني. ماشي؟ وده هينقلنا للنقطة"
      },
      {
        "timestamps": {
          "from": "00:33:58,320",
          "to": "00:34:04,740"
        },
        "offsets": {
          "from": 2038320,
          "to": 2044740
        },
        "text": "التانية بس خلينا نخلص من دي الأول. أوكي؟ عايز تجيب"
      },
      {
        "timestamps": {
          "from": "00:34:04,740",
          "to": "00:34:09,720"
        },
        "offsets": {
          "from": 2044740,
          "to": 2049720
        },
        "text": "الـ Image تقول Docker Pull Python وهينزل. بس هنا فيه بقى نقطة."
      },
      {
        "timestamps": {
          "from": "00:34:09,720",
          "to": "00:34:13,020"
        },
        "offsets": {
          "from": 2049720,
          "to": 2053020
        },
        "text": "ده اللي هو زي ما قلنا هيسحبنا للنقطة التانية اللي هي بتاعة"
      },
      {
        "timestamps": {
          "from": "00:34:13,020",
          "to": "00:34:18,900"
        },
        "offsets": {
          "from": 2053020,
          "to": 2058900
        },
        "text": "بعد ما اتكلمنا عن الـ Naming واتكلمنا عن الـ Registry، قلنا"
      },
      {
        "timestamps": {
          "from": "00:34:18,900",
          "to": "00:34:23,040"
        },
        "offsets": {
          "from": 2058900,
          "to": 2063040
        },
        "text": "الـ Registry بتتقسم لـ Repos، كل Repo فيها نفس الـ Image هي هي بس"
      },
      {
        "timestamps": {
          "from": "00:34:23,040",
          "to": "00:34:28,920"
        },
        "offsets": {
          "from": 2063040,
          "to": 2068920
        },
        "text": "بـ Tags مختلفة. ده الـ Concept بتاع الـ Registry. اتكلمنا عن الـ Official."
      },
      {
        "timestamps": {
          "from": "00:34:28,920",
          "to": "00:34:35,040"
        },
        "offsets": {
          "from": 2068920,
          "to": 2075040
        },
        "text": "إحنا شفنا كل اللي شفناه من شوية ده كان"
      },
      {
        "timestamps": {
          "from": "00:34:35,040",
          "to": "00:34:40,500"
        },
        "offsets": {
          "from": 2075040,
          "to": 2080500
        },
        "text": "سواء لما جبنا Ubuntu أو لما جبنا Alpine، كل ده كان"
      },
      {
        "timestamps": {
          "from": "00:34:40,500",
          "to": "00:34:43,920"
        },
        "offsets": {
          "from": 2080500,
          "to": 2083920
        },
        "text": "Official. أوكي؟ تعالوا بقى نشوف الـ Unofficial من حسابي الشخصي مثلاً،"
      },
      {
        "timestamps": {
          "from": "00:34:43,920",
          "to": "00:34:47,400"
        },
        "offsets": {
          "from": 2083920,
          "to": 2087400
        },
        "text": "خلينا نشوف الوضع ماشي إزاي. "
      },
      {
        "timestamps": {
          "from": "00:34:47,400",
          "to": "00:34:53,340"
        },
        "offsets": {
          "from": 2087400,
          "to": 2093340
        },
        "text": "تمام؟ هنا بقى فيه نقطة تانية، خلينا قبل ما"
      },
      {
        "timestamps": {
          "from": "00:34:53,340",
          "to": "00:34:59,220"
        },
        "offsets": {
          "from": 2093340,
          "to": 2099220
        },
        "text": "ندخل في الموضوع ده، من ضمن الحاجات الكويسة جداً برضه"
      },
      {
        "timestamps": {
          "from": "00:34:59,220",
          "to": "00:35:04,920"
        },
        "offsets": {
          "from": 2099220,
          "to": 2104920
        },
        "text": "دي يمكن لو كنت أخدت بالك منها وإحنا بنبص على"
      },
      {
        "timestamps": {
          "from": "00:40:00,000",
          "to": "00:40:02,500"
        },
        "offsets": {
          "from": 2400000,
          "to": 2402500
        },
        "text": "ودي يمكن لو كنت أخدت بالك منها"
      },
      {
        "timestamps": {
          "from": "00:40:02,500",
          "to": "00:40:05,500"
        },
        "offsets": {
          "from": 2402500,
          "to": 2405500
        },
        "text": "وإحنا بنبص على الـ Explore،"
      },
      {
        "timestamps": {
          "from": "00:40:05,500",
          "to": "00:40:08,500"
        },
        "offsets": {
          "from": 2405500,
          "to": 2408500
        },
        "text": "لما نروح كده مثلاً على الـ Explore"
      },
      {
        "timestamps": {
          "from": "00:40:08,500",
          "to": "00:40:11,500"
        },
        "offsets": {
          "from": 2408500,
          "to": 2411500
        },
        "text": "هتلاقي وإحنا واقفين على الـ Containers"
      },
      {
        "timestamps": {
          "from": "00:40:11,500",
          "to": "00:40:14,500"
        },
        "offsets": {
          "from": 2411500,
          "to": 2414500
        },
        "text": "هتلاقي إنه في الـ Filtration بيقولك إنت عايز"
      },
      {
        "timestamps": {
          "from": "00:40:14,500",
          "to": "00:40:17,500"
        },
        "offsets": {
          "from": 2414500,
          "to": 2417500
        },
        "text": "Verified Publisher ولا Official Image،"
      },
      {
        "timestamps": {
          "from": "00:40:17,500",
          "to": "00:40:20,500"
        },
        "offsets": {
          "from": 2417500,
          "to": 2420500
        },
        "text": "وهتلاقيها برضه على حسب"
      },
      {
        "timestamps": {
          "from": "00:40:20,500",
          "to": "00:40:23,500"
        },
        "offsets": {
          "from": 2420500,
          "to": 2423500
        },
        "text": "الغرض منها، عايز مثلاً Base Images،"
      },
      {
        "timestamps": {
          "from": "00:40:23,500",
          "to": "00:40:26,500"
        },
        "offsets": {
          "from": 2423500,
          "to": 2426500
        },
        "text": "عايز Databases، عايز DevOps Tools، عايز Monitoring،"
      },
      {
        "timestamps": {
          "from": "00:40:26,500",
          "to": "00:40:29,500"
        },
        "offsets": {
          "from": 2426500,
          "to": 2429500
        },
        "text": "عايز Operating Systems. وفي كمان حاجة تانية"
      },
      {
        "timestamps": {
          "from": "00:40:29,500",
          "to": "00:40:37,200"
        },
        "offsets": {
          "from": 2429500,
          "to": 2437200
        },
        "text": "وهي إنه هيسألك إنت عايز الـ Operating System إيه بتاع الـ Container"
      },
      {
        "timestamps": {
          "from": "00:40:37,200",
          "to": "00:40:40,900"
        },
        "offsets": {
          "from": 2437200,
          "to": 2440900
        },
        "text": "وعايز الـ Architecture إيه. الـ Operating System بتاع الـ Container إحنا خلاص"
      },
      {
        "timestamps": {
          "from": "00:40:40,900",
          "to": "00:40:44,400"
        },
        "offsets": {
          "from": 2440900,
          "to": 2444400
        },
        "text": "اتفقنا عليه، أي Image هتنزلها وتعمل منها Container يا إما هيكون"
      },
      {
        "timestamps": {
          "from": "00:40:44,400",
          "to": "00:40:48,000"
        },
        "offsets": {
          "from": 2444400,
          "to": 2448000
        },
        "text": "Windows يا إما هيكون Linux، ما فيش حاجة تانية. أوكي؟ الـ Container يا"
      },
      {
        "timestamps": {
          "from": "00:40:48,000",
          "to": "00:40:52,600"
        },
        "offsets": {
          "from": 2448000,
          "to": 2452600
        },
        "text": "يكون Windows يا يكون Linux. من ضمن الحاجات التانية برضه اللي تقدر"
      },
      {
        "timestamps": {
          "from": "00:40:52,600",
          "to": "00:40:56,100"
        },
        "offsets": {
          "from": 2452600,
          "to": 2456100
        },
        "text": "إنك تحددها لأن ده بيفرق كمان في الـ Kernel، هي"
      },
      {
        "timestamps": {
          "from": "00:40:56,100",
          "to": "00:40:59,940"
        },
        "offsets": {
          "from": 2456100,
          "to": 2459940
        },
        "text": "الـ Architecture، الـ Architecture بتاع الجهاز بتاعك. أوكي؟ فإنت"
      },
      {
        "timestamps": {
          "from": "00:40:59,940",
          "to": "00:41:05,940"
        },
        "offsets": {
          "from": 2459940,
          "to": 2465940
        },
        "text": "عندك بقى كل الـ Architectures موجودة، زي ARM و ARM 64 و IBM و IBM Z و Power"
      },
      {
        "timestamps": {
          "from": "00:41:05,940",
          "to": "00:41:14,100"
        },
        "offsets": {
          "from": 2465940,
          "to": 2474100
        },
        "text": "و X86، وكل الـ Architectures موجودة. فإنت ممكن تختار الـ Operating System."
      },
      {
        "timestamps": {
          "from": "00:41:14,100",
          "to": "00:41:16,860"
        },
        "offsets": {
          "from": 2474100,
          "to": 2476860
        },
        "text": "يعني الـ Container ده هتنزله على إيه؟ هل Windows Container ولا"
      },
      {
        "timestamps": {
          "from": "00:41:16,860",
          "to": "00:41:22,380"
        },
        "offsets": {
          "from": 2476860,
          "to": 2482380
        },
        "text": "Linux Container؟ والـ Architecture بتاع الـ Docker Host بتاعك. أوكي؟ فيعمل"
      },
      {
        "timestamps": {
          "from": "00:41:22,380",
          "to": "00:41:30,480"
        },
        "offsets": {
          "from": 2482380,
          "to": 2490480
        },
        "text": "لك الـ Pull بناءً على كده. بس فيه نقطة ظريفة، إن أنا"
      },
      {
        "timestamps": {
          "from": "00:41:30,480",
          "to": "00:41:36,960"
        },
        "offsets": {
          "from": 2490480,
          "to": 2496960
        },
        "text": "أقدر لو رحت مثلاً على Python، هتلاقي إنه لما"
      },
      {
        "timestamps": {
          "from": "00:41:36,960",
          "to": "00:41:40,080"
        },
        "offsets": {
          "from": 2496960,
          "to": 2500080
        },
        "text": "تيجي تسحب الـ Image دي أو تيجي تعمل الـ Image دي هقولك اعمل"
      },
      {
        "timestamps": {
          "from": "00:41:40,080",
          "to": "00:41:47,580"
        },
        "offsets": {
          "from": 2500080,
          "to": 2507580
        },
        "text": "مثلاً Python بس. كويس كده؟ طب لو أنا هشتغل على Linux Container أو"
      },
      {
        "timestamps": {
          "from": "00:41:47,580",
          "to": "00:41:49,580"
        },
        "offsets": {
          "from": 2507580,
          "to": 2509580
        },
        "text": "أو هشتغل على Windows Container،"
      },
      {
        "timestamps": {
          "from": "00:41:49,580",
          "to": "00:41:54,360"
        },
        "offsets": {
          "from": 2509580,
          "to": 2514360
        },
        "text": "Docker بيعرف منين الـ Operating System بتاعي؟"
      },
      {
        "timestamps": {
          "from": "00:41:54,360",
          "to": "00:41:56,700"
        },
        "offsets": {
          "from": 2514360,
          "to": 2516700
        },
        "text": "وبيعرف منين الـ Architecture بتاعي؟"
      },
      {
        "timestamps": {
          "from": "00:41:56,700",
          "to": "00:42:01,120"
        },
        "offsets": {
          "from": 2516700,
          "to": 2521120
        },
        "text": "أنا هنا ما حددتلوش الـ Image اللي هنزلها دي"
      },
      {
        "timestamps": {
          "from": "00:42:01,120",
          "to": "00:42:02,980"
        },
        "offsets": {
          "from": 2521120,
          "to": 2522980
        },
        "text": "هي هتكون Windows ولا Linux."
      },
      {
        "timestamps": {
          "from": "00:42:02,980",
          "to": "00:42:06,420"
        },
        "offsets": {
          "from": 2522980,
          "to": 2526420
        },
        "text": "وما حددتلوش الـ Architecture بتاعي هيبقى إيه."
      },
      {
        "timestamps": {
          "from": "00:42:06,420",
          "to": "00:42:12,060"
        },
        "offsets": {
          "from": 2526420,
          "to": 2532060
        },
        "text": "نيجي هنا بقى لـ Concept مهم في الـ Image وهو موضوع الـ Manifest File."
      },
      {
        "timestamps": {
          "from": "00:42:12,740",
          "to": "00:42:19,700"
        },
        "offsets": {
          "from": 2532740,
          "to": 2539700
        },
        "text": "أنا شوف ده، أنا ملخبط الترتيب شوية بس مش مشكلة هنرجع"
      },
      {
        "timestamps": {
          "from": "00:42:19,700",
          "to": "00:42:28,100"
        },
        "offsets": {
          "from": 2539700,
          "to": 2548100
        },
        "text": "تاني. ده بيبقى File موجود لإنك لو أخدت بالك من شوية إحنا"
      },
      {
        "timestamps": {
          "from": "00:42:28,100",
          "to": "00:42:33,740"
        },
        "offsets": {
          "from": 2548100,
          "to": 2553740
        },
        "text": "قلنا إنك لما دخلت لإن كان فيه Image لويندوز، وكانت"
      },
      {
        "timestamps": {
          "from": "00:42:33,740",
          "to": "00:42:41,540"
        },
        "offsets": {
          "from": 2553740,
          "to": 2561540
        },
        "text": "باينة أعتقد مثلاً، وكان فيه Image تانية للينكس، وكانت Image تانية"
      },
      {
        "timestamps": {
          "from": "00:42:41,540",
          "to": "00:42:49,040"
        },
        "offsets": {
          "from": 2561540,
          "to": 2602220
        },
        "text": "مثلاً نزلها على IBM Z وهكذا. من ضمن الحاجات اللي ممكن"
      },
      {
        "timestamps": {
          "from": "00:42:49,040",
          "to": "00:42:53,000"
        },
        "offsets": {
          "from": 2569040,
          "to": 2573000
        },
        "text": "تعملها وإنت بترفع الـ Image بتاعتك إنك تعمل أكتر من"
      },
      {
        "timestamps": {
          "from": "00:42:53,000",
          "to": "00:42:58,640"
        },
        "offsets": {
          "from": 2573000,
          "to": 2578640
        },
        "text": "Image وتعمل Manifest File للـ Repo ده. والـ Manifest File ده تقول إن"
      },
      {
        "timestamps": {
          "from": "00:42:58,640",
          "to": "00:43:07,220"
        },
        "offsets": {
          "from": 2578640,
          "to": 2587220
        },
        "text": "أنا عندي هنا في Images لويندوز وImages للينكس، والـ Images بتاعة"
      },
      {
        "timestamps": {
          "from": "00:43:07,220",
          "to": "00:43:10,220"
        },
        "offsets": {
          "from": 2587220,
          "to": 2590220
        },
        "text": "بتاعت ويندوز خد منها الـ Layers الفلانية."
      },
      {
        "timestamps": {
          "from": "00:43:10,220",
          "to": "00:43:13,220"
        },
        "offsets": {
          "from": 2590220,
          "to": 2593220
        },
        "text": "والـ Images بتاعت لينكس خد منها الـ Layer الفلانية."
      },
      {
        "timestamps": {
          "from": "00:43:13,220",
          "to": "00:43:16,220"
        },
        "offsets": {
          "from": 2593220,
          "to": 2596220
        },
        "text": "وعندي Images للـ Architectures الفلانية."
      },
      {
        "timestamps": {
          "from": "00:43:16,220",
          "to": "00:43:19,220"
        },
        "offsets": {
          "from": 2596220,
          "to": 2599220
        },
        "text": "ده بيسموه"
      },
      {
        "timestamps": {
          "from": "00:43:19,220",
          "to": "00:43:22,220"
        },
        "offsets": {
          "from": 2599220,
          "to": 2602220
        },
        "text": "الـ Manifest List."
      },
      {
        "timestamps": {
          "from": "00:43:22,220",
          "to": "00:43:25,220"
        },
        "offsets": {
          "from": 2602220,
          "to": 2605220
        },
        "text": "الـ Manifest List إن أنا أقول له إن الـ Repo بتاعي فيه ده"
      },
      {
        "timestamps": {
          "from": "00:43:25,220",
          "to": "00:43:28,220"
        },
        "offsets": {
          "from": 2605220,
          "to": 2608220
        },
        "text": "وفيه ده وفيه ده وفيه ده وفي شوية حاجات تانية."
      },
      {
        "timestamps": {
          "from": "00:43:28,220",
          "to": "00:43:31,220"
        },
        "offsets": {
          "from": 2608220,
          "to": 2611220
        },
        "text": "لما تيجي أنت كـ Docker Hub"
      },
      {
        "timestamps": {
          "from": "00:43:31,220",
          "to": "00:43:34,220"
        },
        "offsets": {
          "from": 2611220,
          "to": 2614220
        },
        "text": "تكتشف إن اللي طالب منك"
      },
      {
        "timestamps": {
          "from": "00:43:34,220",
          "to": "00:43:37,440"
        },
        "offsets": {
          "from": 2614220,
          "to": 2617440
        },
        "text": "الـ Image دي، ده واحد قاعد على Machine Ubuntu"
      },
      {
        "timestamps": {
          "from": "00:43:37,440",
          "to": "00:43:40,080"
        },
        "offsets": {
          "from": 2617440,
          "to": 2620080
        },
        "text": "على x86 system."
      },
      {
        "timestamps": {
          "from": "00:43:40,080",
          "to": "00:43:42,640"
        },
        "offsets": {
          "from": 2620080,
          "to": 2622640
        },
        "text": "روح كده افتح الـ Manifest List"
      },
      {
        "timestamps": {
          "from": "00:43:42,640",
          "to": "00:43:45,220"
        },
        "offsets": {
          "from": 2622640,
          "to": 2625220
        },
        "text": "وشوف كده الـ Image اللي هي"
      },
      {
        "timestamps": {
          "from": "00:43:45,220",
          "to": "00:43:45,220"
        },
        "offsets": {
          "from": 2625220,
          "to": 2625220
        },
        "text": ""
      },
      {
        "timestamps": {
          "from": "00:43:45,220",
          "to": "00:43:51,100"
        },
        "offsets": {
          "from": 2625220,
          "to": 2631100
        },
        "text": "Linux مثلاً AMD64، شوف الـ Manifest بتاعها إيه."
      },
      {
        "timestamps": {
          "from": "00:43:51,100",
          "to": "00:43:53,740"
        },
        "offsets": {
          "from": 2631100,
          "to": 2633740
        },
        "text": "هيقول لك الـ Manifest بتاعها خد الـ Layer الفلانية والـ Layer الفلانية."
      },
      {
        "timestamps": {
          "from": "00:43:53,740",
          "to": "00:43:57,460"
        },
        "offsets": {
          "from": 2633740,
          "to": 2637460
        },
        "text": "والـ Layer الفلانية دي إحدى الميزات بتاعة إن الـ Layers نفسها تبقى"
      },
      {
        "timestamps": {
          "from": "00:43:57,460",
          "to": "00:44:03,700"
        },
        "offsets": {
          "from": 2637460,
          "to": 2643700
        },
        "text": "منفصلة عن بعض، وبرضه في الـ Repo بتاعنا ده أنا ما عنديش من"
      },
      {
        "timestamps": {
          "from": "00:44:03,700",
          "to": "00:44:11,320"
        },
        "offsets": {
          "from": 2643700,
          "to": 2651320
        },
        "text": "الـ Images، أنا عندي أساسية والفرق ما بين Image وImage تانية هو الـ Layer"
      },
      {
        "timestamps": {
          "from": "00:44:11,320",
          "to": "00:44:15,640"
        },
        "offsets": {
          "from": 2651320,
          "to": 2655640
        },
        "text": "المختلفة بس. فبالتالي أقدر لو إنت مثلاً"
      },
      {
        "timestamps": {
          "from": "00:44:15,640",
          "to": "00:44:23,620"
        },
        "offsets": {
          "from": 2655640,
          "to": 2663620
        },
        "text": "لو الـ Layer مثلاً هي هي، والاختلاف مثلاً"
      },
      {
        "timestamps": {
          "from": "00:44:23,620",
          "to": "00:44:27,640"
        },
        "offsets": {
          "from": 2663620,
          "to": 2667640
        },
        "text": "من Architecture لـ Architecture تانية بتبقى Layers تانية فوقيها مثلاً."
      },
      {
        "timestamps": {
          "from": "00:44:27,640",
          "to": "00:44:34,480"
        },
        "offsets": {
          "from": 2667640,
          "to": 2674480
        },
        "text": "فلو ده الحاصل وده الموجود، تقدر عن طريق ده"
      },
      {
        "timestamps": {
          "from": "00:44:34,480",
          "to": "00:44:40,540"
        },
        "offsets": {
          "from": 2674480,
          "to": 2680540
        },
        "text": "تمام؟ إنك تحدد بالظبط إيه اللي بينزل عليه"
      },
      {
        "timestamps": {
          "from": "00:44:40,540",
          "to": "00:44:45,220"
        },
        "offsets": {
          "from": 2680540,
          "to": 2685220
        },
        "text": "الـ Repo بتاعك، وإيه الـ Architecture اللي بينزل عليها الـ Repo بتاعك. لو"
      },
      {
        "timestamps": {
          "from": "00:44:45,220",
          "to": "00:44:49,540"
        },
        "offsets": {
          "from": 2685220,
          "to": 2689540
        },
        "text": "ده ما كانش موجود، لو ده مش موجود، وأنا عندي الـ Image"
      },
      {
        "timestamps": {
          "from": "00:44:49,540",
          "to": "00:44:54,760"
        },
        "offsets": {
          "from": 2689540,
          "to": 2694760
        },
        "text": "Linux بس AMD64 بس، وإنت عايز تعمل Windows Container منها،"
      },
      {
        "timestamps": {
          "from": "00:44:54,760",
          "to": "00:44:58,420"
        },
        "offsets": {
          "from": 2694760,
          "to": 2698420
        },
        "text": "اللي هيحصل هيفرقع في وشك، هيقول لك لا مش عارف أعمل Container. هينزل"
      },
      {
        "timestamps": {
          "from": "00:44:58,420",
          "to": "00:45:00,400"
        },
        "offsets": {
          "from": 2698420,
          "to": 2700400
        },
        "text": "الـ Image ويقول لك هيفرقع في وشك، هيقول لك أنا مش عارف أعمل"
      },
      {
        "timestamps": {
          "from": "00:50:00,000",
          "to": "00:50:18,050"
        },
        "offsets": {
          "from": 3000000,
          "to": 3018050
        },
        "text": "مش عارف أعمل الـ Container ده. فدي فكرة الـ Manifest File. نرجع تاني لـ Architecture الـ Image، الـ Architecture بتاع الـ Image زي ما قلنا قبل كده إنه عبارة عن Layers ومجموعة من الـ Read."
      },
      {
        "timestamps": {
          "from": "00:50:18,050",
          "to": "00:50:29,840"
        },
        "offsets": {
          "from": 3018050,
          "to": 3029840
        },
        "text": "Layers فقط زي فكرة بالضبط الـ Base Disk بتاع الـ Virtual Machine، بعد كده تعمل Disk تاني Differencing Disk، وبعدين Disk تاني Differencing Disk لو عندك Snapshot وهكذا، وكل Disk هو عبارة عن"
      },
      {
        "timestamps": {
          "from": "00:50:29,840",
          "to": "00:50:33,620"
        },
        "offsets": {
          "from": 3029840,
          "to": 3033620
        },
        "text": "الـ Disk اللي قبله والزيادة عليه، والزيادة دي ممكن تكون تعديل أو"
      },
      {
        "timestamps": {
          "from": "00:50:33,620",
          "to": "00:50:37,100"
        },
        "offsets": {
          "from": 3033620,
          "to": 3037100
        },
        "text": "إضافة أو حذف أو أي حاجة. نفس الفكرة بالضبط، عندي هنا دي"
      },
      {
        "timestamps": {
          "from": "00:50:37,100",
          "to": "00:50:40,580"
        },
        "offsets": {
          "from": 3037100,
          "to": 3040580
        },
        "text": "اللي هي أول واحدة خالص، غالباً بتبقى اللي فوق الـ Kernel على طول،"
      },
      {
        "timestamps": {
          "from": "00:50:40,580",
          "to": "00:50:44,840"
        },
        "offsets": {
          "from": 3040580,
          "to": 3044840
        },
        "text": "اللي هي بتكمل الـ Kernel. تمام؟ بعد كده التانية الله"
      },
      {
        "timestamps": {
          "from": "00:50:44,840",
          "to": "00:50:47,600"
        },
        "offsets": {
          "from": 3044840,
          "to": 3047600
        },
        "text": "أعلم بتعمل إيه، التالتة الله أعلم فيها إيه، يمكن"
      },
      {
        "timestamps": {
          "from": "00:50:47,600",
          "to": "00:50:53,900"
        },
        "offsets": {
          "from": 3047600,
          "to": 3053900
        },
        "text": "أي حاجة، لغاية آخر واحدة محتاجها، وبعدين"
      },
      {
        "timestamps": {
          "from": "00:50:53,900",
          "to": "00:50:58,040"
        },
        "offsets": {
          "from": 3053900,
          "to": 3058040
        },
        "text": "بتقوم قافلها بالضبة والمفتاح لما تتعمل Image، مش إنت"
      },
      {
        "timestamps": {
          "from": "00:50:58,040",
          "to": "00:51:02,120"
        },
        "offsets": {
          "from": 3058040,
          "to": 3062120
        },
        "text": "طبعاً ده بيتعمل Automatic لما تعمل Image. تمام؟ لما تيجي"
      },
      {
        "timestamps": {
          "from": "00:51:02,120",
          "to": "00:51:08,840"
        },
        "offsets": {
          "from": 3062120,
          "to": 3068840
        },
        "text": "تعمل Pull للـ Image دي، اللي هيعمله إنه"
      },
      {
        "timestamps": {
          "from": "00:51:08,840",
          "to": "00:51:11,840"
        },
        "offsets": {
          "from": 3068840,
          "to": 3071840
        },
        "text": "هيعمل Download طبعاً بعد ما يعرف إنت هتجيب الـ Image دي منين"
      },
      {
        "timestamps": {
          "from": "00:51:11,840",
          "to": "00:51:17,300"
        },
        "offsets": {
          "from": 3071840,
          "to": 3077300
        },
        "text": "والكلام ده، هيعمل Download للـ Layers دي واحدة واحدة، والـ Layers"
      },
      {
        "timestamps": {
          "from": "00:51:17,300",
          "to": "00:51:21,620"
        },
        "offsets": {
          "from": 3077300,
          "to": 3081620
        },
        "text": "دي طالما إنت بتعمل لها Download، فيقوم عامل لها Download."
      },
      {
        "timestamps": {
          "from": "00:51:21,620",
          "to": "00:51:28,040"
        },
        "offsets": {
          "from": 3081620,
          "to": 3088040
        },
        "text": "بعد كده لغاية ما تلاقي بيقولك مثلاً الـ Layer دي"
      },
      {
        "timestamps": {
          "from": "00:51:28,040",
          "to": "00:51:33,680"
        },
        "offsets": {
          "from": 3088040,
          "to": 3093680
        },
        "text": "هيقعد هنا شوية لغاية ما يخلص كل الـ Layers دي، وبعدين يديك"
      },
      {
        "timestamps": {
          "from": "00:51:33,680",
          "to": "00:51:42,840"
        },
        "offsets": {
          "from": 3093680,
          "to": 3102840
        },
        "text": "الـ Hash بتاع كل Layer لوحدها، وبعدين بتاع الصورة ككل. زي مثلاً لما"
      },
      {
        "timestamps": {
          "from": "00:51:42,840",
          "to": "00:51:49,620"
        },
        "offsets": {
          "from": 3102840,
          "to": 3109620
        },
        "text": "نعمل Docker Image Pull Ubuntu:latest. تمام؟ فبتبقى كل"
      },
      {
        "timestamps": {
          "from": "00:51:49,620",
          "to": "00:51:55,140"
        },
        "offsets": {
          "from": 3109620,
          "to": 3115140
        },
        "text": "Layer من دول ليها الـ ID بتاعها علشان لو جيت حبيت أستعمل Image"
      },
      {
        "timestamps": {
          "from": "00:51:55,140",
          "to": "00:52:00,000"
        },
        "offsets": {
          "from": 3115140,
          "to": 3120000
        },
        "text": "تانية، أعمل Download لـ Image تانية وشاءت الأقدار إن الـ Image"
      },
      {
        "timestamps": {
          "from": "00:52:00,000",
          "to": "00:52:04,380"
        },
        "offsets": {
          "from": 3120000,
          "to": 3124380
        },
        "text": "التانية دي فيها Layers متكررة، مش هحتاج إني أعمل Download"
      },
      {
        "timestamps": {
          "from": "00:52:04,380",
          "to": "00:52:07,500"
        },
        "offsets": {
          "from": 3124380,
          "to": 3127500
        },
        "text": "للـ Layers دي تاني، أنا Already عندي الـ Layer دي هاخد نسخة عندي"
      },
      {
        "timestamps": {
          "from": "00:52:07,500",
          "to": "00:52:12,060"
        },
        "offsets": {
          "from": 3127500,
          "to": 3132060
        },
        "text": "وخلاص. تمام؟ فدي ميزة من مزايا موضوع الـ Layers ده."
      },
      {
        "timestamps": {
          "from": "00:52:12,060",
          "to": "00:52:27,700"
        },
        "offsets": {
          "from": 3132060,
          "to": 3147700
        },
        "text": "مثلاً لو جيت عملت"
      },
      {
        "timestamps": {
          "from": "00:52:27,700",
          "to": "00:52:42,060"
        },
        "offsets": {
          "from": 3147700,
          "to": 3162060
        },
        "text": "..."
      },
      {
        "timestamps": {
          "from": "00:52:42,060",
          "to": "00:52:47,220"
        },
        "offsets": {
          "from": 3162060,
          "to": 3167220
        },
        "text": "لشوية ملفات نزلت مثلاً وهكذا. تمام؟ فدي تبقى مثلاً"
      },
      {
        "timestamps": {
          "from": "00:52:47,220",
          "to": "00:52:54,480"
        },
        "offsets": {
          "from": 3167220,
          "to": 3174480
        },
        "text": "بتاعة الـ Path. الـ Layer هي عبارة عن شوية Files. تمام؟ الـ Layer"
      },
      {
        "timestamps": {
          "from": "00:52:54,480",
          "to": "00:52:56,640"
        },
        "offsets": {
          "from": 3174480,
          "to": 3176640
        },
        "text": "الأولانية ممكن تبقى شوية Files مثلاً اللي بتـ Extend بيها"
      },
      {
        "timestamps": {
          "from": "00:52:56,640",
          "to": "00:53:01,860"
        },
        "offsets": {
          "from": 3176640,
          "to": 3181860
        },
        "text": "الـ Kernel، وشوية Files تانية عبارة عن شوية Command lines تبقى"
      },
      {
        "timestamps": {
          "from": "00:53:01,860",
          "to": "00:53:06,600"
        },
        "offsets": {
          "from": 3181860,
          "to": 3186600
        },
        "text": "موجودة في Linux عندك مثلاً. الـ Files والـ Layers دي"
      },
      {
        "timestamps": {
          "from": "00:53:06,600",
          "to": "00:53:10,080"
        },
        "offsets": {
          "from": 3186600,
          "to": 3190080
        },
        "text": "ممكن زي ما قلنا كل Layer تضيف شوية Files، يعني مثلاً هنا"
      },
      {
        "timestamps": {
          "from": "00:53:10,080",
          "to": "00:53:12,540"
        },
        "offsets": {
          "from": 3190080,
          "to": 3192540
        },
        "text": "الـ Layer الأولانية فيها File 1 و 2 و 3 مثلاً، الـ Layer"
      },
      {
        "timestamps": {
          "from": "00:53:12,540",
          "to": "00:53:15,360"
        },
        "offsets": {
          "from": 3192540,
          "to": 3195360
        },
        "text": "التانية فيها File 4 و 5 و 6، ملهاش علاقة خالص بالأولانية،"
      },
      {
        "timestamps": {
          "from": "00:53:15,360",
          "to": "00:53:22,800"
        },
        "offsets": {
          "from": 3195360,
          "to": 3202800
        },
        "text": "بتزود بس Files. لكن ممكن مثلاً تكون الـ Layer التالتة"
      },
      {
        "timestamps": {
          "from": "00:53:22,800",
          "to": "00:53:26,940"
        },
        "offsets": {
          "from": 3202800,
          "to": 3206940
        },
        "text": "يكون فيها مثلاً File 7، وممكن يكون File 7 ده"
      },
      {
        "timestamps": {
          "from": "00:53:26,940",
          "to": "00:53:31,320"
        },
        "offsets": {
          "from": 3206940,
          "to": 3211320
        },
        "text": "عبارة عن تعديل لـ File 5. تمام؟ فده برضه ممكن يبقى موجود."
      },
      {
        "timestamps": {
          "from": "00:53:31,320",
          "to": "00:53:35,520"
        },
        "offsets": {
          "from": 3211320,
          "to": 3215520
        },
        "text": "إيه اللي بيحصل؟ اللي بيحصل إن Docker لما بيـ Build الـ Image دي"
      },
      {
        "timestamps": {
          "from": "00:53:35,520",
          "to": "00:53:39,000"
        },
        "offsets": {
          "from": 3215520,
          "to": 3219000
        },
        "text": "بيعملها طبقات، بيعمل الطبقة دي الأول، وبعد كده الطبقة اللي"
      },
      {
        "timestamps": {
          "from": "00:53:39,000",
          "to": "00:53:42,000"
        },
        "offsets": {
          "from": 3219000,
          "to": 3222000
        },
        "text": "فوقيها. لو جت الطبقة اللي بعدها عدلت في File 5، هيعدل في"
      },
      {
        "timestamps": {
          "from": "00:53:42,000",
          "to": "00:53:46,200"
        },
        "offsets": {
          "from": 3222000,
          "to": 3226200
        },
        "text": "File 5 بس مش في الـ Layer دي، هيعدل في النسخة اللي فوق، فيبقى المجموع"
      },
      {
        "timestamps": {
          "from": "00:53:46,200",
          "to": "00:53:50,940"
        },
        "offsets": {
          "from": 3226200,
          "to": 3230940
        },
        "text": "النهائي بتاع الـ 3 Layers دول هو 1، 2، 3، 4، 5"
      },
      {
        "timestamps": {
          "from": "00:53:50,940",
          "to": "00:53:59,160"
        },
        "offsets": {
          "from": 3230940,
          "to": 3239160
        },
        "text": "متعدل 6. فده شكل الـ Layers بشكل عام."
      },
      {
        "timestamps": {
          "from": "00:53:59,160",
          "to": "00:54:03,780"
        },
        "offsets": {
          "from": 3239160,
          "to": 3243780
        },
        "text": "Squashed، يعني أنا عندي 1، 2، 3، 4، 7 وبعدين"
      },
      {
        "timestamps": {
          "from": "00:54:03,780",
          "to": "00:54:09,600"
        },
        "offsets": {
          "from": 3243780,
          "to": 3249600
        },
        "text": "6، عشان 7 ده هو تعديل لـ 5. تعالوا"
      },
      {
        "timestamps": {
          "from": "00:54:09,600",
          "to": "00:54:15,720"
        },
        "offsets": {
          "from": 3249600,
          "to": 3255720
        },
        "text": "نشوف مثال على Image، وخلينا المرة دي ننزل Image"
      },
      {
        "timestamps": {
          "from": "00:54:15,720",
          "to": "00:54:20,760"
        },
        "offsets": {
          "from": 3255720,
          "to": 3260760
        },
        "text": "بتاعتنا اللي هي Hadoop مثلاً دي. خلينا نروح"
      },
      {
        "timestamps": {
          "from": "00:54:20,760",
          "to": "00:54:28,860"
        },
        "offsets": {
          "from": 3260760,
          "to": 3268860
        },
        "text": "على Apollo، نرجع لـ Apollo مرة تانية ونعمل حاجة"
      },
      {
        "timestamps": {
          "from": "00:54:28,860",
          "to": "00:54:31,440"
        },
        "offsets": {
          "from": 3268860,
          "to": 3271440
        },
        "text": "في الموضوع ده عشان شكلها مزعج جداً والعملية هتتلخبط قوي."
      },
      {
        "timestamps": {
          "from": "00:54:31,440",
          "to": "00:54:35,820"
        },
        "offsets": {
          "from": 3271440,
          "to": 3275820
        },
        "text": "لو جيت قلت له الأول Docker image ls"
      },
      {
        "timestamps": {
          "from": "00:54:35,820",
          "to": "00:54:38,220"
        },
        "offsets": {
          "from": 3275820,
          "to": 3278220
        },
        "text": "عشان نشوف إذا كان عندي Images ولا معنديش خالص."
      },
      {
        "timestamps": {
          "from": "00:54:38,220",
          "to": "00:54:40,320"
        },
        "offsets": {
          "from": 3278220,
          "to": 3280320
        },
        "text": "ومادام معنديش Images يبقى معنديش Containers."
      },
      {
        "timestamps": {
          "from": "00:54:40,320",
          "to": "00:54:43,260"
        },
        "offsets": {
          "from": 3280320,
          "to": 3283260
        },
        "text": "الـ Containers بتتعمل من الـ Images اللي موجودة. فهاجي أقول له مثلاً"
      },
      {
        "timestamps": {
          "from": "00:54:43,260",
          "to": "00:54:43,260"
        },
        "offsets": {
          "from": 3283260,
          "to": 3283260
        },
        "text": "Docker image"
      },
      {
        "timestamps": {
          "from": "00:54:43,260",
          "to": "00:54:51,240"
        },
        "offsets": {
          "from": 3283260,
          "to": 3291240
        },
        "text": "Docker image أو Container، نزل واعمل Container على طول."
      },
      {
        "timestamps": {
          "from": "00:54:51,240",
          "to": "00:54:57,840"
        },
        "offsets": {
          "from": 3291240,
          "to": 3297840
        },
        "text": "أو Docker container run، وخليني أفتكر كانت -it"
      },
      {
        "timestamps": {
          "from": "00:54:57,840",
          "to": "00:55:02,700"
        },
        "offsets": {
          "from": 3297840,
          "to": 3302700
        },
        "text": "-it، كنت فاكر من عندنا من الـ Hub من الـ Repos اللي عندي."
      },
      {
        "timestamps": {
          "from": "01:00:00,000",
          "to": "01:00:05,340"
        },
        "offsets": {
          "from": 3600000,
          "to": 3605340
        },
        "text": "من الـ Repos اللي عندي، هاجي هنا مثلاً وأقول له أنا سايب"
      },
      {
        "timestamps": {
          "from": "01:00:05,340",
          "to": "01:00:12,000"
        },
        "offsets": {
          "from": 3605340,
          "to": 3612000
        },
        "text": "لكم برضه هنا إزاي تعملوا Download للـ Repo ده."
      },
      {
        "timestamps": {
          "from": "01:00:12,000",
          "to": "01:00:20,880"
        },
        "offsets": {
          "from": 3612000,
          "to": 3620880
        },
        "text": "نرجع هنا كده."
      },
      {
        "timestamps": {
          "from": "01:00:20,880",
          "to": "01:00:28,660"
        },
        "offsets": {
          "from": 3620880,
          "to": 3628660
        },
        "text": "هاجي أقول له مثلاً Docker container run -it -it زي ما"
      },
      {
        "timestamps": {
          "from": "01:00:28,660",
          "to": "01:00:32,980"
        },
        "offsets": {
          "from": 3628660,
          "to": 3632980
        },
        "text": "قلنا اللي هي -i و -t. والـ -i يعني interactive، يعني أنا"
      },
      {
        "timestamps": {
          "from": "01:00:32,980",
          "to": "01:00:36,880"
        },
        "offsets": {
          "from": 3632980,
          "to": 3636880
        },
        "text": "عايز أتفاعل مع الـ Container، مش مجرد ترن"
      },
      {
        "timestamps": {
          "from": "01:00:36,880",
          "to": "01:00:41,080"
        },
        "offsets": {
          "from": 3636880,
          "to": 3641080
        },
        "text": "الـ Container وتخرج، لا أنا عايز Interaction. والـ -t هي"
      },
      {
        "timestamps": {
          "from": "01:00:41,080",
          "to": "01:00:46,000"
        },
        "offsets": {
          "from": 3641080,
          "to": 3646000
        },
        "text": "الـ Pseudo terminal، يعني طلع لي الـ Terminal."
      },
      {
        "timestamps": {
          "from": "01:00:46,000",
          "to": "01:00:51,820"
        },
        "offsets": {
          "from": 3646000,
          "to": 3651820
        },
        "text": "root at hostname وبعد كدة الـ Hash بتاعة الـ Prompt. والـ --name"
      },
      {
        "timestamps": {
          "from": "01:00:51,820",
          "to": "01:01:56,320"
        },
        "offsets": {
          "from": 3651820,
          "to": 3656320
        },
        "text": "--name دي عشان أدي الـ Container ده اسم. إنتوا شوفتوا الـ Containers ليها"
      },
      {
        "timestamps": {
          "from": "01:00:56,320",
          "to": "01:01:01,540"
        },
        "offsets": {
          "from": 3656320,
          "to": 3661540
        },
        "text": "أسامي ظريفة جداً، عبارة عن صفة واسم."
      },
      {
        "timestamps": {
          "from": "01:01:01,540",
          "to": "01:01:04,240"
        },
        "offsets": {
          "from": 3661540,
          "to": 3664240
        },
        "text": "زي Happy Sunosee اللي شفناها وحاجات"
      },
      {
        "timestamps": {
          "from": "01:01:04,240",
          "to": "01:01:06,580"
        },
        "offsets": {
          "from": 3664240,
          "to": 3666580
        },
        "text": "زي كدة. بس لو مش عاجباني"
      },
      {
        "timestamps": {
          "from": "01:01:06,580",
          "to": "01:01:10,000"
        },
        "offsets": {
          "from": 3666580,
          "to": 3670000
        },
        "text": "الأسماء دي، هدي للـ Container اسم هسميه مثلاً"
      },
      {
        "timestamps": {
          "from": "01:01:10,000",
          "to": "01:01:13,960"
        },
        "offsets": {
          "from": 3670000,
          "to": 3673960
        },
        "text": "Hadoop. مش ضروري بس ممكن تسميه كده."
      },
      {
        "timestamps": {
          "from": "01:01:13,960",
          "to": "01:01:22,120"
        },
        "offsets": {
          "from": 3673960,
          "to": 3682120
        },
        "text": "وعندنا -h عشان أعمل Hostname للـ Container."
      },
      {
        "timestamps": {
          "from": "01:01:22,120",
          "to": "01:01:27,580"
        },
        "offsets": {
          "from": 3682120,
          "to": 3687580
        },
        "text": "لو أخدت بالك الـ Container ID الـ default بتاعه بيبقى أول 12 Hexadecimal characters من الـ Digest."
      },
      {
        "timestamps": {
          "from": "01:01:27,580",
          "to": "01:01:31,220"
        },
        "offsets": {
          "from": 3687580,
          "to": 3691220
        },
        "text": "الـ ID الكبير ده، أول 12 حرف منه بيبقوا الـ Hostname."
      },
      {
        "timestamps": {
          "from": "01:01:31,220",
          "to": "01:01:35,120"
        },
        "offsets": {
          "from": 3691220,
          "to": 3695120
        },
        "text": "لو عايز أغير اسم الـ Operating system اللي جوه الـ Container"
      },
      {
        "timestamps": {
          "from": "01:01:35,120",
          "to": "01:01:38,120"
        },
        "offsets": {
          "from": 3695120,
          "to": 3698120
        },
        "text": "بستخدم -h وأسميه بالاسم ده."
      },
      {
        "timestamps": {
          "from": "01:01:38,120",
          "to": "01:01:41,520"
        },
        "offsets": {
          "from": 3698120,
          "to": 3701520
        },
        "text": "عشان أسحب الـ Image زي ما شفنا هقول له A776"
      },
      {
        "timestamps": {
          "from": "01:01:41,520",
          "to": "01:01:43,520"
        },
        "offsets": {
          "from": 3701520,
          "to": 3703520
        },
        "text": "بعد كدة اسم الـ Repo"
      },
      {
        "timestamps": {
          "from": "01:01:43,520",
          "to": "01:01:47,060"
        },
        "offsets": {
          "from": 3703520,
          "to": 3707060
        },
        "text": "بعد كدة Colon والـ Tag"
      },
      {
        "timestamps": {
          "from": "01:01:47,060",
          "to": "01:01:50,060"
        },
        "offsets": {
          "from": 3707060,
          "to": 3710060
        },
        "text": "دي كلها مع بعضها اسمها Image."
      },
      {
        "timestamps": {
          "from": "01:01:50,060",
          "to": "01:01:52,060"
        },
        "offsets": {
          "from": 3710060,
          "to": 3712060
        },
        "text": "كل ده مع بعضه كده هو الـ Image Name."
      },
      {
        "timestamps": {
          "from": "01:01:52,060",
          "to": "01:01:54,060"
        },
        "offsets": {
          "from": 3712060,
          "to": 3714060
        },
        "text": "Ok اللي هو ال-Repo"
      },
      {
        "timestamps": {
          "from": "01:01:54,060",
          "to": "01:01:56,060"
        },
        "offsets": {
          "from": 3714060,
          "to": 3716060
        },
        "text": "Colon ال-Tag"
      },
      {
        "timestamps": {
          "from": "01:01:56,060",
          "to": "01:01:58,060"
        },
        "offsets": {
          "from": 3716060,
          "to": 3718060
        },
        "text": "ال-Repo عندي هنا هو ده"
      },
      {
        "timestamps": {
          "from": "01:01:58,060",
          "to": "01:02:01,060"
        },
        "offsets": {
          "from": 3718060,
          "to": 3721060
        },
        "text": "ال-Repo هو 76"
      },
      {
        "timestamps": {
          "from": "01:02:01,060",
          "to": "01:02:03,060"
        },
        "offsets": {
          "from": 3721060,
          "to": 3723060
        },
        "text": "Slash hadoop-sudo"
      },
      {
        "timestamps": {
          "from": "01:02:03,060",
          "to": "01:02:05,060"
        },
        "offsets": {
          "from": 3723060,
          "to": 3725060
        },
        "text": "ده كده اسمه ال-Repo"
      },
      {
        "timestamps": {
          "from": "01:02:05,060",
          "to": "01:02:06,060"
        },
        "offsets": {
          "from": 3725060,
          "to": 3726060
        },
        "text": "Colon ال-Tag"
      },
      {
        "timestamps": {
          "from": "01:02:06,060",
          "to": "01:02:07,060"
        },
        "offsets": {
          "from": 3726060,
          "to": 3727060
        },
        "text": "وبعدين بقوله Bash"
      },
      {
        "timestamps": {
          "from": "01:02:07,060",
          "to": "01:02:09,060"
        },
        "offsets": {
          "from": 3727060,
          "to": 3729060
        },
        "text": "أنا هنا لما قلت له أنا عايز -it"
      },
      {
        "timestamps": {
          "from": "01:02:09,060",
          "to": "01:02:11,060"
        },
        "offsets": {
          "from": 3729060,
          "to": 3731060
        },
        "text": "يعني أنا عايز Terminal لازم أقوله أنا"
      },
      {
        "timestamps": {
          "from": "01:02:11,060",
          "to": "01:02:13,060"
        },
        "offsets": {
          "from": 3731060,
          "to": 3733060
        },
        "text": "هعمل Interact مع إيه؟ لازم يطلع لي Command"
      },
      {
        "timestamps": {
          "from": "01:02:13,060",
          "to": "01:02:15,060"
        },
        "offsets": {
          "from": 3733060,
          "to": 3735060
        },
        "text": "أنهي؟ عايز Bash ولا عايز مثلاً Sh؟"
      },
      {
        "timestamps": {
          "from": "01:02:15,060",
          "to": "01:02:20,060"
        },
        "offsets": {
          "from": 3735060,
          "to": 3740060
        },
        "text": "ولا عايز أي Shell موجودة جوه ال-Container على حسب أنت بنيت ال-Image إزاي"
      },
      {
        "timestamps": {
          "from": "01:02:20,060",
          "to": "01:02:24,060"
        },
        "offsets": {
          "from": 3740060,
          "to": 3744060
        },
        "text": "في ال-Build time أنهي Terminal كانت موجودة"
      },
      {
        "timestamps": {
          "from": "01:02:24,060",
          "to": "01:02:31,060"
        },
        "offsets": {
          "from": 3744060,
          "to": 3751060
        },
        "text": "وأنا كمان في الآخر قلت لك أنا عايز كمان Execute Command من جوه ال-Container"
      },
      {
        "timestamps": {
          "from": "01:02:31,060",
          "to": "01:02:34,060"
        },
        "offsets": {
          "from": 3751060,
          "to": 3754060
        },
        "text": "ال-Command ده هو عبارة عن Shell Script"
      },
      {
        "timestamps": {
          "from": "01:02:34,060",
          "to": "01:02:41,060"
        },
        "offsets": {
          "from": 3754060,
          "to": 3761060
        },
        "text": "دي Shell Script وأنا ببني ال-Image عملتها وحطيتها جوه ال-Container"
      },
      {
        "timestamps": {
          "from": "01:02:41,060",
          "to": "01:02:54,120"
        },
        "offsets": {
          "from": 3761060,
          "to": 3774120
        },
        "text": "عشان لما أجي أقوم ال-Container"
      },
      {
        "timestamps": {
          "from": "01:02:54,120",
          "to": "01:03:11,060"
        },
        "offsets": {
          "from": 3774120,
          "to": 3791060
        },
        "text": ""
      },
      {
        "timestamps": {
          "from": "01:03:11,060",
          "to": "01:03:14,960"
        },
        "offsets": {
          "from": 3791060,
          "to": 3794960
        },
        "text": "مثلاً ال-Shell Script دي، وال-Shell Script دي من جوه"
      },
      {
        "timestamps": {
          "from": "01:03:14,960",
          "to": "01:03:20,000"
        },
        "offsets": {
          "from": 3794960,
          "to": 3800000
        },
        "text": "ال-Container بتنفذ أي حاجة تانية من جوه، ده هتلاقيه"
      },
      {
        "timestamps": {
          "from": "01:03:20,000",
          "to": "01:03:24,440"
        },
        "offsets": {
          "from": 3800000,
          "to": 3804440
        },
        "text": "كل الناس تقريباً عندهم ده، وتقريباً حتى فيه اسم مشهور"
      },
      {
        "timestamps": {
          "from": "01:03:24,440",
          "to": "01:03:30,380"
        },
        "offsets": {
          "from": 3804440,
          "to": 3810380
        },
        "text": "ليها يعني فيه حاجة زي اسم ال-Shell Script اللي"
      },
      {
        "timestamps": {
          "from": "01:03:30,380",
          "to": "01:03:35,780"
        },
        "offsets": {
          "from": 3810380,
          "to": 3815780
        },
        "text": "بتشتغل جوه ال-Container. تمام؟ فأنا حطيت دي جوه"
      },
      {
        "timestamps": {
          "from": "01:03:35,780",
          "to": "01:03:41,020"
        },
        "offsets": {
          "from": 3815780,
          "to": 3821020
        },
        "text": "وعملت ده، هوريك أنا عملت إزاي ال-Container ده فما تقلقش."
      },
      {
        "timestamps": {
          "from": "01:03:41,020",
          "to": "01:03:48,540"
        },
        "offsets": {
          "from": 3821020,
          "to": 3828540
        },
        "text": "وأدوس Enter، هتشوف بقى لما بعمل Run لل-Container ده."
      },
      {
        "timestamps": {
          "from": "01:03:48,540",
          "to": "01:03:52,460"
        },
        "offsets": {
          "from": 3828540,
          "to": 3832460
        },
        "text": "أول حاجة إنه بيبدأ يعمل Download للـ Layers، هتلاقي عندي Layers كتيرة هنا"
      },
      {
        "timestamps": {
          "from": "01:03:52,460",
          "to": "01:03:56,360"
        },
        "offsets": {
          "from": 3832460,
          "to": 3836360
        },
        "text": "لأن أنا عندي Hadoop فكل حاجة جاهزة، Ok؟ فبيعمل Download الأول"
      },
      {
        "timestamps": {
          "from": "01:03:56,360",
          "to": "01:04:02,120"
        },
        "offsets": {
          "from": 3836360,
          "to": 3842120
        },
        "text": "وبعد الـ Download بيقوم عامل Extract وبعد ما يخلص يبقى Done، وكل Layer من"
      },
      {
        "timestamps": {
          "from": "01:04:02,120",
          "to": "01:04:06,560"
        },
        "offsets": {
          "from": 3842120,
          "to": 3846560
        },
        "text": "الـ Layers الكتير دي هتلاقي لها الـ Hash بتاعها، طبعاً أنت عندك"
      },
      {
        "timestamps": {
          "from": "01:04:06,560",
          "to": "01:04:10,160"
        },
        "offsets": {
          "from": 3846560,
          "to": 3850160
        },
        "text": "في Layers كبيرة جداً 1 جيجا وشوية وده عادي ومنطقي جداً لأن"
      },
      {
        "timestamps": {
          "from": "01:04:10,160",
          "to": "01:04:16,100"
        },
        "offsets": {
          "from": 3850160,
          "to": 3856100
        },
        "text": "أنا Already منزل Java و Already منزل Hadoop ومنزل ميت ألف حاجة"
      },
      {
        "timestamps": {
          "from": "01:04:16,100",
          "to": "01:04:20,240"
        },
        "offsets": {
          "from": 3856100,
          "to": 3860240
        },
        "text": "جاية كمان مع Hadoop، ممكن ترجع للفيديو اللي إحنا اتكلمنا عنه"
      },
      {
        "timestamps": {
          "from": "01:04:20,240",
          "to": "01:04:27,200"
        },
        "offsets": {
          "from": 3860240,
          "to": 3867200
        },
        "text": "بتاع Hadoop عشان تشوف الـ Setup تم إزاي في العموم، Ok؟"
      },
      {
        "timestamps": {
          "from": "01:04:27,200",
          "to": "01:04:30,800"
        },
        "offsets": {
          "from": 3867200,
          "to": 3870800
        },
        "text": "وهتشوف إزاي ده من أول الحاجات اللي هتبدأ تحسسك، طب أنا"
      },
      {
        "timestamps": {
          "from": "01:04:30,800",
          "to": "01:04:35,000"
        },
        "offsets": {
          "from": 3870800,
          "to": 3875000
        },
        "text": "محتاج ال-Containers في إيه؟ كدا هتعرف أنت محتاج ال-Containers في"
      },
      {
        "timestamps": {
          "from": "01:04:35,000",
          "to": "01:04:39,560"
        },
        "offsets": {
          "from": 3875000,
          "to": 3879560
        },
        "text": "إيه. إحنا أخدنا قد إيه وقت نعمل ال-Hadoop؟ كام ساعة عشان نعمل"
      },
      {
        "timestamps": {
          "from": "01:04:39,560",
          "to": "01:04:42,860"
        },
        "offsets": {
          "from": 3879560,
          "to": 3882860
        },
        "text": "ال-Containers ونعمل Configuration والدنيا تبوظ فنعدل تاني"
      },
      {
        "timestamps": {
          "from": "01:04:42,860",
          "to": "01:04:49,280"
        },
        "offsets": {
          "from": 3882860,
          "to": 3889280
        },
        "text": "والدنيا تضرب في وشنا فنعدل تاني. هتشوف إزاي بالطريقة السهلة"
      },
      {
        "timestamps": {
          "from": "01:04:49,280",
          "to": "01:04:55,100"
        },
        "offsets": {
          "from": 3889280,
          "to": 3895100
        },
        "text": "دي قدرت إني أعمل Configure للـ Hadoop كله على Container وبقى عندي"
      },
      {
        "timestamps": {
          "from": "01:04:55,100",
          "to": "01:05:03,140"
        },
        "offsets": {
          "from": 3895100,
          "to": 3903140
        },
        "text": "دي الـ Node اللي هي الـ Container ده، كل الـ Setup بتاع Hadoop من غير مجهود."
      },
      {
        "timestamps": {
          "from": "01:10:00,000",
          "to": "01:10:06,000"
        },
        "offsets": {
          "from": 4200000,
          "to": 4206000
        },
        "text": "بتاع Hadoop من غير أي مجهود ولا أي حاجة، كأنني بالظبط عملت Virtual Machine."
      },
      {
        "timestamps": {
          "from": "01:10:06,000",
          "to": "01:10:12,000"
        },
        "offsets": {
          "from": 4206000,
          "to": 4212000
        },
        "text": "بس شوف بقى لو إنت هتعمل Download لـ Virtual Machine عليها Hadoop أو Linux Operating System ومش عارف إيه وبتاع."
      },
      {
        "timestamps": {
          "from": "01:10:12,000",
          "to": "01:10:14,000"
        },
        "offsets": {
          "from": 4212000,
          "to": 4214000
        },
        "text": "وتعمل Start من أول وجديد، تاخد وقت قد إيه؟"
      },
      {
        "timestamps": {
          "from": "01:10:14,000",
          "to": "01:10:18,000"
        },
        "offsets": {
          "from": 4214000,
          "to": 4218000
        },
        "text": "تمام، واحنا قاعدين بندردش مع بعض عشان نضيع وقت، خلص كل حاجة."
      },
      {
        "timestamps": {
          "from": "01:10:18,000",
          "to": "01:10:27,000"
        },
        "offsets": {
          "from": 4218000,
          "to": 4227000
        },
        "text": "ولو حد كان متابع السلسلة بتاعت Hadoop، هتلاقي إنه عمل Start أهو للـ Name Node."
      },
      {
        "timestamps": {
          "from": "01:10:27,000",
          "to": "01:10:36,620"
        },
        "offsets": {
          "from": 4227000,
          "to": 4236620
        },
        "text": "عمل Start للداتا Node، عمل Start للـ Resource Manager والـ Node Manager. لو قلت له jps طبعاً، هو دخلني كده جوه الـ Terminal بتاع الـ Container."
      },
      {
        "timestamps": {
          "from": "01:10:36,620",
          "to": "01:10:49,040"
        },
        "offsets": {
          "from": 4236620,
          "to": 4249040
        },
        "text": "وهتلاحظ إن اسم الـ Container هنا متغير، اسم الـ OS اللي جوه الـ Container متغير. كده لو حبيت إن أنا أشوف الـ Container نفسه اسمه إيه هقول له docker container"
      },
      {
        "timestamps": {
          "from": "01:10:49,040",
          "to": "01:10:53,180"
        },
        "offsets": {
          "from": 4249040,
          "to": 4253180
        },
        "text": "ls. فهلاقي إن أنا عندي Container واحد بس Running. تمام؟"
      },
      {
        "timestamps": {
          "from": "01:10:53,180",
          "to": "01:10:57,920"
        },
        "offsets": {
          "from": 4253180,
          "to": 4257920
        },
        "text": "الـ Container ده، ده الـ ID بتاعه، وده اسم الـ Image. خدت بالك بقى إن"
      },
      {
        "timestamps": {
          "from": "01:10:57,920",
          "to": "01:11:02,360"
        },
        "offsets": {
          "from": 4257920,
          "to": 4262360
        },
        "text": "هو تحت اسم الـ Image هنا كل ده، كل وجع القلب ده اسمه"
      },
      {
        "timestamps": {
          "from": "01:11:02,360",
          "to": "01:11:06,500"
        },
        "offsets": {
          "from": 4262360,
          "to": 4266500
        },
        "text": "الـ Image. ده اسم الـ Image، أوكي؟ والـ Command اللي Running جوه الـ Container"
      },
      {
        "timestamps": {
          "from": "01:11:06,500",
          "to": "01:11:14,300"
        },
        "offsets": {
          "from": 4266500,
          "to": 4274300
        },
        "text": "باسم تمام؟ وهتلاقي إنه شغال من دقيقة والـ Status بتاعته Up بقاله حوالي"
      },
      {
        "timestamps": {
          "from": "01:11:14,300",
          "to": "01:11:19,580"
        },
        "offsets": {
          "from": 4274300,
          "to": 4279580
        },
        "text": "دقيقة برضه، وهتلاقي إن فيه شوية Ports، طبعاً دي الـ Ports بتاعة"
      },
      {
        "timestamps": {
          "from": "01:11:19,580",
          "to": "01:11:24,860"
        },
        "offsets": {
          "from": 4279580,
          "to": 4284860
        },
        "text": "Hadoop، تمام؟ وهتلاقي إن اسم الـ Container في"
      },
      {
        "timestamps": {
          "from": "01:11:24,860",
          "to": "01:11:27,020"
        },
        "offsets": {
          "from": 4284860,
          "to": 4287020
        },
        "text": "الآخر، بدل الاسم الـ Funny العجيب ده اللي كان بيتعمل قبل"
      },
      {
        "timestamps": {
          "from": "01:11:27,020",
          "to": "01:11:31,940"
        },
        "offsets": {
          "from": 4287020,
          "to": 4291940
        },
        "text": "كده، بقى اسمه hadoop-c. يبقى كده اسم الـ Container بقى hadoop-c."
      },
      {
        "timestamps": {
          "from": "01:11:31,940",
          "to": "01:11:36,080"
        },
        "offsets": {
          "from": 4291940,
          "to": 4296080
        },
        "text": "ده اللي هو الـ ID بتاعه، واسم اللي جوه الـ Container هو hadoop"
      },
      {
        "timestamps": {
          "from": "01:11:36,080",
          "to": "01:11:42,560"
        },
        "offsets": {
          "from": 4296080,
          "to": 4302560
        },
        "text": "برضه، أوكي؟ فهرجع هنا تاني للـ Container. لو جيت في الـ Container"
      },
      {
        "timestamps": {
          "from": "01:11:42,560",
          "to": "01:11:48,740"
        },
        "offsets": {
          "from": 4302560,
          "to": 4308740
        },
        "text": "قلت له jps، دي عشان أشوف كل الـ Processes على الـ Java Virtual Machine. أوكي؟"
      },
      {
        "timestamps": {
          "from": "01:11:48,740",
          "to": "01:11:53,180"
        },
        "offsets": {
          "from": 4308740,
          "to": 4313180
        },
        "text": "فهلاقي إن أنا عندي Node Manager قايم، الـ Name Node قايم، والـ Data Node قايمة،"
      },
      {
        "timestamps": {
          "from": "01:11:53,180",
          "to": "01:11:58,580"
        },
        "offsets": {
          "from": 4313180,
          "to": 4318580
        },
        "text": "والـ Resource Manager، كله كله في التمام. كويس كده؟ وأنا عارف عشان"
      },
      {
        "timestamps": {
          "from": "01:11:58,580",
          "to": "01:12:03,740"
        },
        "offsets": {
          "from": 4318580,
          "to": 4323740
        },
        "text": "عشان أنا عارف إن Hadoop بيبقى معاه الـ"
      },
      {
        "timestamps": {
          "from": "01:12:03,740",
          "to": "01:12:06,860"
        },
        "offsets": {
          "from": 4323740,
          "to": 4326860
        },
        "text": "Web UI اللي بتقدر تشوف منه الـ Resources و"
      },
      {
        "timestamps": {
          "from": "01:12:06,860",
          "to": "01:12:12,500"
        },
        "offsets": {
          "from": 4326860,
          "to": 4332500
        },
        "text": "الكلام ده. فلو جيت قلت له ip addr show عشان أعرف إيه"
      },
      {
        "timestamps": {
          "from": "01:12:12,500",
          "to": "01:12:15,080"
        },
        "offsets": {
          "from": 4332500,
          "to": 4335080
        },
        "text": "الـ IP Address اللي الـ Container خده؟ الـ Container لازم ياخد IP Address طبعاً."
      },
      {
        "timestamps": {
          "from": "01:12:15,080",
          "to": "01:12:20,060"
        },
        "offsets": {
          "from": 4335080,
          "to": 4340060
        },
        "text": "فهلاقي إن الـ IP Address هو 172.17.0.2."
      },
      {
        "timestamps": {
          "from": "01:12:20,060",
          "to": "01:12:23,180"
        },
        "offsets": {
          "from": 4340060,
          "to": 4343180
        },
        "text": "وإنت By default هتلاقي الـ Containers كلها بتاخد By default"
      },
      {
        "timestamps": {
          "from": "01:12:23,180",
          "to": "01:12:27,020"
        },
        "offsets": {
          "from": 4343180,
          "to": 4347020
        },
        "text": "172.x.x.x. أوكي؟ فده الـ IP Address، لو جيت"
      },
      {
        "timestamps": {
          "from": "01:12:27,020",
          "to": "01:12:36,020"
        },
        "offsets": {
          "from": 4347020,
          "to": 4356020
        },
        "text": "هنا مثلاً، وقلت له http://"
      },
      {
        "timestamps": {
          "from": "01:12:36,020",
          "to": "01:12:39,980"
        },
        "offsets": {
          "from": 4356020,
          "to": 4359980
        },
        "text": "9870 وده الـ Port اللي بيشتغل بيه الـ Hadoop، هتلاقي"
      },
      {
        "timestamps": {
          "from": "01:12:39,980",
          "to": "01:12:44,300"
        },
        "offsets": {
          "from": 4359980,
          "to": 4364300
        },
        "text": "إن Hadoop شغال عندي هنا، أوكي؟ هتلاقي Hadoop شغال لو"
      },
      {
        "timestamps": {
          "from": "01:12:44,300",
          "to": "01:12:49,700"
        },
        "offsets": {
          "from": 4364300,
          "to": 4369700
        },
        "text": "رحت عليه هتلاقي الـ Data Node شغالة. خليني أكبر دي شوية"
      },
      {
        "timestamps": {
          "from": "01:12:49,700",
          "to": "01:12:53,600"
        },
        "offsets": {
          "from": 4369700,
          "to": 4373600
        },
        "text": "كده. هو الماوس بيجري ليه كده؟"
      },
      {
        "timestamps": {
          "from": "01:12:53,600",
          "to": "01:13:02,160"
        },
        "offsets": {
          "from": 4373600,
          "to": 4382160
        },
        "text": "زوم يا عم عادل زي الناس. ماشي؟ هتلاقي عندي Data Node"
      },
      {
        "timestamps": {
          "from": "01:13:02,160",
          "to": "01:13:05,520"
        },
        "offsets": {
          "from": 4382160,
          "to": 4385520
        },
        "text": "أهي. لو رحت مثلاً على Utilities عشان أشوف الـ File System"
      },
      {
        "timestamps": {
          "from": "01:13:05,520",
          "to": "01:13:09,160"
        },
        "offsets": {
          "from": 4385520,
          "to": 4389160
        },
        "text": "بتاعي، هلاقي الـ File System فاضي."
      },
      {
        "timestamps": {
          "from": "01:13:09,160",
          "to": "01:13:12,300"
        },
        "offsets": {
          "from": 4389160,
          "to": 4392300
        },
        "text": "بس أقدر إن أنا أعمل Create لـ Directory مثلاً، أسميه"
      },
      {
        "timestamps": {
          "from": "01:13:12,300",
          "to": "01:13:17,740"
        },
        "offsets": {
          "from": 4392300,
          "to": 4397740
        },
        "text": "test-dir مثلاً، أي حاجة، وأقول له Create."
      },
      {
        "timestamps": {
          "from": "01:13:17,740",
          "to": "01:13:24,100"
        },
        "offsets": {
          "from": 4397740,
          "to": 4404100
        },
        "text": "ممكن لو أنا رحت تاني رجعت بقى للـ Container. أنا"
      },
      {
        "timestamps": {
          "from": "01:13:24,100",
          "to": "01:13:26,980"
        },
        "offsets": {
          "from": 4404100,
          "to": 4406980
        },
        "text": "رجعت تاني جوه ال-Container. أنا كده جوه ال-Container، تمام؟"
      },
      {
        "timestamps": {
          "from": "01:13:26,980",
          "to": "01:13:36,940"
        },
        "offsets": {
          "from": 4406980,
          "to": 4416940
        },
        "text": "وقلت له مثلاً HDFS DFS، مش فاكر اسم الـ"
      },
      {
        "timestamps": {
          "from": "01:13:36,940",
          "to": "01:13:46,960"
        },
        "offsets": {
          "from": 4416940,
          "to": 4426960
        },
        "text": "Command إيه؟ أعتقد HDFS، كان باين؟"
      },
      {
        "timestamps": {
          "from": "01:13:47,740",
          "to": "01:13:50,500"
        },
        "offsets": {
          "from": 4427740,
          "to": 4430500
        },
        "text": "أتذكر بالظبط كان HDFS"
      },
      {
        "timestamps": {
          "from": "01:13:50,500",
          "to": "01:13:53,220"
        },
        "offsets": {
          "from": 4430500,
          "to": 4433220
        },
        "text": "ls"
      },
      {
        "timestamps": {
          "from": "01:13:53,220",
          "to": "01:14:01,900"
        },
        "offsets": {
          "from": 4433220,
          "to": 4441900
        },
        "text": "في حاجة أنا كاتبها غلط في ال-Command"
      },
      {
        "timestamps": {
          "from": "01:14:01,900",
          "to": "01:14:03,580"
        },
        "offsets": {
          "from": 4441900,
          "to": 4443580
        },
        "text": "ثواني وهعرفها"
      },
      {
        "timestamps": {
          "from": "01:14:03,580",
          "to": "01:14:06,020"
        },
        "offsets": {
          "from": 4443580,
          "to": 4446020
        },
        "text": "كانت"
      },
      {
        "timestamps": {
          "from": "01:14:06,020",
          "to": "01:14:10,340"
        },
        "offsets": {
          "from": 4446020,
          "to": 4450340
        },
        "text": "كانت hdfs dfs"
      },
      {
        "timestamps": {
          "from": "01:14:10,340",
          "to": "01:14:12,060"
        },
        "offsets": {
          "from": 4450340,
          "to": 4452060
        },
        "text": "أظن لازم أحط dash-ls"
      },
      {
        "timestamps": {
          "from": "01:14:12,060",
          "to": "01:14:15,320"
        },
        "offsets": {
          "from": 4452060,
          "to": 4455320
        },
        "text": "أظن كده لو أنا فاكر صح"
      },
      {
        "timestamps": {
          "from": "01:14:15,320",
          "to": "01:14:17,440"
        },
        "offsets": {
          "from": 4455320,
          "to": 4457440
        },
        "text": "أتمنى أكون فاكر صح"
      },
      {
        "timestamps": {
          "from": "01:14:17,740",
          "to": "01:14:22,000"
        },
        "offsets": {
          "from": 4457740,
          "to": 4462000
        },
        "text": "أعتقد كان ال-Port 9000 لو أنا برضه فاكر صح"
      },
      {
        "timestamps": {
          "from": "01:14:22,000",
          "to": "01:14:26,280"
        },
        "offsets": {
          "from": 4462000,
          "to": 4466280
        },
        "text": "تمام، يبقى أنا هنا عملت"
      },
      {
        "timestamps": {
          "from": "01:14:26,280",
          "to": "01:14:34,400"
        },
        "offsets": {
          "from": 4466280,
          "to": 4474400
        },
        "text": "كده أنا كأني بعمل list لكل ال-Folders اللي موجودة في ال-HDFS System بتاعي"
      },
      {
        "timestamps": {
          "from": "01:14:34,400",
          "to": "01:14:38,580"
        },
        "offsets": {
          "from": 4474400,
          "to": 4478580
        },
        "text": "فوراني إن عندي Directory اسمه مثلاً TestD"
      },
      {
        "timestamps": {
          "from": "01:14:38,580",
          "to": "01:14:44,160"
        },
        "offsets": {
          "from": 4478580,
          "to": 4484160
        },
        "text": "فلو جيت قلت له برضه، أتمنى أكون فاكر صح، كانت ال-dash mkdir"
      },
      {
        "timestamps": {
          "from": "01:14:45,320",
          "to": "01:15:00,150"
        },
        "offsets": {
          "from": 4485320,
          "to": 4500150
        },
        "text": "وهسميه مثلاً testuser"
      },
      {
        "timestamps": {
          "from": "01:15:00,150",
          "to": "01:15:15,320"
        },
        "offsets": {
          "from": 4500150,
          "to": 4515320
        },
        "text": "تمام"
      },
      {
        "timestamps": {
          "from": "01:20:00,000",
          "to": "01:20:06,000"
        },
        "offsets": {
          "from": 4800000,
          "to": 4806000
        },
        "text": "هنا تمام، كل ده أنا كده جوه ال-Container. في دقيقة بقى"
      },
      {
        "timestamps": {
          "from": "01:20:06,000",
          "to": "01:20:14,580"
        },
        "offsets": {
          "from": 4806000,
          "to": 4814580
        },
        "text": "عندي Container فيه ال-Namenode وكل حاجة، تمام؟ لو جيت هنا"
      },
      {
        "timestamps": {
          "from": "01:20:14,580",
          "to": "01:20:24,720"
        },
        "offsets": {
          "from": 4814580,
          "to": 4824720
        },
        "text": "من هنا، حبيت أشوف ال-Containers اللي موجودة ب-dash-a"
      },
      {
        "timestamps": {
          "from": "01:20:24,720",
          "to": "01:20:30,480"
        },
        "offsets": {
          "from": 4824720,
          "to": 4830480
        },
        "text": "تمام؟ هلاقي إن ال-State بتاعته، لو رحت هنا عملت Refresh"
      },
      {
        "timestamps": {
          "from": "01:20:30,480",
          "to": "01:20:35,460"
        },
        "offsets": {
          "from": 4830480,
          "to": 4835460
        },
        "text": "وهتلاقي بوم! ضربت في وشي وقال لي معرفكش، طبعاً هنا"
      },
      {
        "timestamps": {
          "from": "01:20:35,460",
          "to": "01:20:38,880"
        },
        "offsets": {
          "from": 4835460,
          "to": 4838880
        },
        "text": "في نقطة مهمة، وهي فكرة إن ال-Directories اللي أنا"
      },
      {
        "timestamps": {
          "from": "01:20:38,880",
          "to": "01:20:45,180"
        },
        "offsets": {
          "from": 4838880,
          "to": 4845180
        },
        "text": "عملتها دي إيه اللي حصل فيها جوه ال-Containers؟ فبما إن"
      },
      {
        "timestamps": {
          "from": "01:20:45,180",
          "to": "01:20:49,620"
        },
        "offsets": {
          "from": 4845180,
          "to": 4849620
        },
        "text": "ال-Container ضرب في وشك، خلاص خلص الموضوع. ال-Container لو"
      },
      {
        "timestamps": {
          "from": "01:20:49,620",
          "to": "01:20:54,000"
        },
        "offsets": {
          "from": 4849620,
          "to": 4854000
        },
        "text": "اتعمله Stop وتمسح، كل الحاجات اللي موجودة راحت. طبعاً لو ما"
      },
      {
        "timestamps": {
          "from": "01:20:54,000",
          "to": "01:20:56,880"
        },
        "offsets": {
          "from": 4854000,
          "to": 4856880
        },
        "text": "اتمسحش ال-Container خلاص كل حاجة موجودة جواه من غير مشاكل. لكن لو"
      },
      {
        "timestamps": {
          "from": "01:20:56,880",
          "to": "01:21:00,540"
        },
        "offsets": {
          "from": 4856880,
          "to": 4860540
        },
        "text": "اتمسح ال-Container كل الحاجات اللي موجودة جواه طبعاً اتمسحت، لأنها مش"
      },
      {
        "timestamps": {
          "from": "01:21:00,540",
          "to": "01:21:04,560"
        },
        "offsets": {
          "from": 4860540,
          "to": 4864560
        },
        "text": "متسيفة في ال-Image، تمام؟ ال-Image زي ما اتفقنا، فدي نقطة"
      },
      {
        "timestamps": {
          "from": "01:21:04,560",
          "to": "01:21:07,440"
        },
        "offsets": {
          "from": 4864560,
          "to": 4867440
        },
        "text": "مهمة ليها علاقة بال-Volumes أو ال-Storage بتاعة ال-Container ودي"
      },
      {
        "timestamps": {
          "from": "01:21:07,440",
          "to": "01:21:11,460"
        },
        "offsets": {
          "from": 4867440,
          "to": 4871460
        },
        "text": "حاجة محتاجين نبص فيها كمان شوية، تمام؟"
      },
      {
        "timestamps": {
          "from": "01:21:11,460",
          "to": "01:21:18,360"
        },
        "offsets": {
          "from": 4871460,
          "to": 4878360
        },
        "text": "خلينا بقى نبص على حاجة، لو رجعت هنا تاني وقلت له"
      },
      {
        "timestamps": {
          "from": "01:21:18,360",
          "to": "01:21:24,720"
        },
        "offsets": {
          "from": 4878360,
          "to": 4884720
        },
        "text": "docker images، هلاقي عندي ال-Image دي اللي أنا عملتها، تمام؟"
      },
      {
        "timestamps": {
          "from": "01:21:24,720",
          "to": "01:21:28,320"
        },
        "offsets": {
          "from": 4884720,
          "to": 4888320
        },
        "text": "ده ال-Repo وده ال-Tag، تمام؟ عشان كده تفتكروا إحنا"
      },
      {
        "timestamps": {
          "from": "01:21:28,320",
          "to": "01:21:31,560"
        },
        "offsets": {
          "from": 4888320,
          "to": 4891560
        },
        "text": "قلنا ليه ده اسمه Repository مش Image، تمام؟ لأن ال-Image"
      },
      {
        "timestamps": {
          "from": "01:21:31,560",
          "to": "01:21:36,180"
        },
        "offsets": {
          "from": 4891560,
          "to": 4896180
        },
        "text": "عبارة عن ده زائد ده، ال-Repo ده وال-Tag ده."
      },
      {
        "timestamps": {
          "from": "01:21:36,180",
          "to": "01:21:39,960"
        },
        "offsets": {
          "from": 4896180,
          "to": 4899960
        },
        "text": "وده ال-Image ID و Created من 11 يوم، أنا مكريته من 11"
      },
      {
        "timestamps": {
          "from": "01:21:39,960",
          "to": "01:21:44,880"
        },
        "offsets": {
          "from": 4899960,
          "to": 4904880
        },
        "text": "يوم تقريباً، وده ال-Size بتاعه، تمام؟ لما أنا"
      },
      {
        "timestamps": {
          "from": "01:21:44,880",
          "to": "01:21:48,300"
        },
        "offsets": {
          "from": 4904880,
          "to": 4908300
        },
        "text": "لو عندي بالمنظر ده وحبيت إني أعرف الـ Image دي جواها إيه"
      },
      {
        "timestamps": {
          "from": "01:21:48,300",
          "to": "01:21:52,800"
        },
        "offsets": {
          "from": 4908300,
          "to": 4912800
        },
        "text": "فيها إيه ومين اللي عملها؟ عايز أعرف بيانات عن الـ Image"
      },
      {
        "timestamps": {
          "from": "01:21:52,800",
          "to": "01:22:01,980"
        },
        "offsets": {
          "from": 4912800,
          "to": 4921980
        },
        "text": "دي. فأقدر أستعمل أمر اسمه Docker Image Inspect أو Docker"
      },
      {
        "timestamps": {
          "from": "01:22:01,980",
          "to": "01:22:09,840"
        },
        "offsets": {
          "from": 4921980,
          "to": 4929840
        },
        "text": "أو Docker عموماً، في كل الـ CLI بتاع Docker بيديك معلومات عن الشيء"
      },
      {
        "timestamps": {
          "from": "01:22:09,840",
          "to": "01:22:15,540"
        },
        "offsets": {
          "from": 4929840,
          "to": 4935540
        },
        "text": "اللي إنت بتعمله Inspect. فهقول له إما أديله اسم"
      },
      {
        "timestamps": {
          "from": "01:22:15,540",
          "to": "01:22:18,660"
        },
        "offsets": {
          "from": 4935540,
          "to": 4938660
        },
        "text": "الـ Image أو أديله الـ ID بتاعها أو أول شوية من"
      },
      {
        "timestamps": {
          "from": "01:22:18,660",
          "to": "01:22:25,020"
        },
        "offsets": {
          "from": 4938660,
          "to": 4945020
        },
        "text": "الـ ID. الـ Inspection هيطلع في JSON"
      },
      {
        "timestamps": {
          "from": "01:22:25,020",
          "to": "01:22:28,920"
        },
        "offsets": {
          "from": 4945020,
          "to": 4948920
        },
        "text": "file. الـ JSON file ده هو اللي هيبقى فيه المعلومات عن الـ Image"
      },
      {
        "timestamps": {
          "from": "01:22:28,920",
          "to": "01:22:32,880"
        },
        "offsets": {
          "from": 4948920,
          "to": 4952880
        },
        "text": "دي. مش هنخوض فيه كله، زي ما إنت شايف بدأت العملية توسع مننا"
      },
      {
        "timestamps": {
          "from": "01:22:32,880",
          "to": "01:22:37,440"
        },
        "offsets": {
          "from": 4952880,
          "to": 4957440
        },
        "text": "والـ Terminal مابقتش ملاحقة على كل حاجة. بس خلينا واحدة واحدة"
      },
      {
        "timestamps": {
          "from": "01:22:37,440",
          "to": "01:22:45,120"
        },
        "offsets": {
          "from": 4957440,
          "to": 4965120
        },
        "text": "نبص على شوية حاجات مهمة. مثلاً ده الـ ID بتاع الـ Image. وده"
      },
      {
        "timestamps": {
          "from": "01:22:45,120",
          "to": "01:22:52,140"
        },
        "offsets": {
          "from": 4965120,
          "to": 4972140
        },
        "text": "الـ Tag. وده الـ Image name. وده الـ Author بتاع الـ Image. وده الـ Comment"
      },
      {
        "timestamps": {
          "from": "01:22:52,140",
          "to": "01:22:57,960"
        },
        "offsets": {
          "from": 4972140,
          "to": 4977960
        },
        "text": "الـ Comment بتاع الـ Commit بتاع الـ Image. فاكر الـ Commit اللي إنت كنت"
      },
      {
        "timestamps": {
          "from": "01:22:57,960",
          "to": "01:23:01,800"
        },
        "offsets": {
          "from": 4977960,
          "to": 4981800
        },
        "text": "بتعمله زمان في Git و GitHub. ولما تيجي تعمل Commit لازم تحط"
      },
      {
        "timestamps": {
          "from": "01:23:01,800",
          "to": "01:23:07,200"
        },
        "offsets": {
          "from": 4981800,
          "to": 4987200
        },
        "text": "message. فده الـ Comment. هل فيه Parent Image؟"
      },
      {
        "timestamps": {
          "from": "01:23:07,200",
          "to": "01:23:12,720"
        },
        "offsets": {
          "from": 4987200,
          "to": 4992720
        },
        "text": "مفيش؟ والـ Created في الوقت ده. وده الـ Container اللي شغال من"
      },
      {
        "timestamps": {
          "from": "01:23:12,720",
          "to": "01:23:20,640"
        },
        "offsets": {
          "from": 4992720,
          "to": 5000640
        },
        "text": "الـ Image. هتلاقي مثلاً الـ Hostname. ودي"
      },
      {
        "timestamps": {
          "from": "01:23:20,640",
          "to": "01:23:26,460"
        },
        "offsets": {
          "from": 5000640,
          "to": 5006460
        },
        "text": "الـ Exposed Ports. دي اللي وأنا ببني الـ Image قلت له خلي بالك"
      },
      {
        "timestamps": {
          "from": "01:23:26,460",
          "to": "01:23:31,080"
        },
        "offsets": {
          "from": 5006460,
          "to": 5011080
        },
        "text": "الـ Image دي لما تشتغل وتعمل منها Container لازم تفتح فيها"
      },
      {
        "timestamps": {
          "from": "01:23:31,080",
          "to": "01:23:36,000"
        },
        "offsets": {
          "from": 5011080,
          "to": 5016000
        },
        "text": "الـ Ports الفلانية، اللي هي الـ Port ده وده وده. لو تفتكر بتاع"
      },
      {
        "timestamps": {
          "from": "01:23:36,000",
          "to": "01:23:39,000"
        },
        "offsets": {
          "from": 5016000,
          "to": 5019000
        },
        "text": "الـ 9000 ده بتاعه. ولو تفتكر الـ 8088 ده اللي"
      },
      {
        "timestamps": {
          "from": "01:23:39,000",
          "to": "01:23:45,300"
        },
        "offsets": {
          "from": 5019000,
          "to": 5025300
        },
        "text": "هو بتاع الـ Hadoop. تمام وهكذا. هتلاقي شوية وهتلاقي"
      },
      {
        "timestamps": {
          "from": "01:23:45,300",
          "to": "01:23:51,240"
        },
        "offsets": {
          "from": 5025300,
          "to": 5031240
        },
        "text": "كمان الـ Command اللي أنا عملته Run وأنا"
      },
      {
        "timestamps": {
          "from": "01:23:51,240",
          "to": "01:23:55,260"
        },
        "offsets": {
          "from": 5031240,
          "to": 5035260
        },
        "text": "بكريت الـ Container، اللي هو جوا الـ CMD. هتلاقي الـ Command اللي"
      },
      {
        "timestamps": {
          "from": "01:23:55,260",
          "to": "01:24:02,940"
        },
        "offsets": {
          "from": 5035260,
          "to": 5042940
        },
        "text": "هو bash -c واسم الـ bootstrap shell اللي أنا استعملتها"
      },
      {
        "timestamps": {
          "from": "01:24:02,940",
          "to": "01:24:09,420"
        },
        "offsets": {
          "from": 5042940,
          "to": 5049420
        },
        "text": "علشان أشغل. دي الـ Image طبعاً، هل فيه Volumes؟ لأ مفيش"
      },
      {
        "timestamps": {
          "from": "01:24:09,420",
          "to": "01:24:13,140"
        },
        "offsets": {
          "from": 5049420,
          "to": 5053140
        },
        "text": "Volumes متعرفة. الـ Entrypoint لأ. شوية حاجات"
      },
      {
        "timestamps": {
          "from": "01:24:13,140",
          "to": "01:24:17,160"
        },
        "offsets": {
          "from": 5053140,
          "to": 5057160
        },
        "text": "كدة ومن ضمنها كمان في الآخر خالص هتلاقي الـ Layers بتاعة الـ Image دي"
      },
      {
        "timestamps": {
          "from": "01:24:17,160",
          "to": "01:24:25,980"
        },
        "offsets": {
          "from": 5057160,
          "to": 5065980
        },
        "text": "بتاعة الـ Image. وده الـ Digest بتاع الـ Image. بنفس الشكل برضو أقدر"
      },
      {
        "timestamps": {
          "from": "01:24:25,980",
          "to": "01:24:32,820"
        },
        "offsets": {
          "from": 5065980,
          "to": 5072820
        },
        "text": "أقول له برضو Docker Container Inspect. علشان هو مستخبي أو"
      },
      {
        "timestamps": {
          "from": "01:24:32,820",
          "to": "01:24:36,480"
        },
        "offsets": {
          "from": 5072820,
          "to": 5076480
        },
        "text": "مقفول. فبنفس الطريقة برضو هاجي أقول له Docker"
      },
      {
        "timestamps": {
          "from": "01:24:36,480",
          "to": "01:24:42,360"
        },
        "offsets": {
          "from": 5076480,
          "to": 5082360
        },
        "text": "Container Inspect. فلما هعمل Inspect هقول له الـ ID بتاع"
      },
      {
        "timestamps": {
          "from": "01:24:42,360",
          "to": "01:24:47,700"
        },
        "offsets": {
          "from": 5082360,
          "to": 5087700
        },
        "text": "الـ Container أو أول شوية منه. بنفس الطريقة برضو هيديني"
      },
      {
        "timestamps": {
          "from": "01:24:47,700",
          "to": "01:24:54,000"
        },
        "offsets": {
          "from": 5087700,
          "to": 5094000
        },
        "text": "كل حاجة ليها علاقة بالـ Container ده. أنا وصلت فين كدة"
      },
      {
        "timestamps": {
          "from": "01:24:54,000",
          "to": "01:25:05,280"
        },
        "offsets": {
          "from": 5094000,
          "to": 5105280
        },
        "text": "هنا؟ أهو. هتلاقي شوية معلومات مشابهة جداً"
      },
      {
        "timestamps": {
          "from": "01:30:00,000",
          "to": "01:30:05,940"
        },
        "offsets": {
          "from": 5400000,
          "to": 5405940
        },
        "text": "هتلاقي شوية معلومات مشابهة جداً من الحاجات اللي"
      },
      {
        "timestamps": {
          "from": "01:30:05,940",
          "to": "01:30:10,740"
        },
        "offsets": {
          "from": 5405940,
          "to": 5410740
        },
        "text": "كانت موجودة جوا الـ Image، وإمتى اتعمل ده"
      },
      {
        "timestamps": {
          "from": "01:30:10,740",
          "to": "01:30:14,280"
        },
        "offsets": {
          "from": 5410740,
          "to": 5414280
        },
        "text": "والـ Status بتاعته مثلاً، هو مثلاً هل هو Running؟"
      },
      {
        "timestamps": {
          "from": "01:30:14,280",
          "to": "01:30:20,580"
        },
        "offsets": {
          "from": 5414280,
          "to": 5420580
        },
        "text": "لأ، هل هو Paused؟ لأ، هل هو Restarting؟ لأ. حاجات زي كدة. الـ Driver"
      },
      {
        "timestamps": {
          "from": "01:30:20,580",
          "to": "01:30:26,520"
        },
        "offsets": {
          "from": 5420580,
          "to": 5426520
        },
        "text": "اللي مستخدمه، والـ Platform بتاعه Linux، والاسم"
      },
      {
        "timestamps": {
          "from": "01:30:26,520",
          "to": "01:30:31,920"
        },
        "offsets": {
          "from": 5426520,
          "to": 5431920
        },
        "text": "الـ Operating System مثلاً، وهكذا بقى شوية البيانات والتفاصيل."
      },
      {
        "timestamps": {
          "from": "01:30:31,920",
          "to": "01:30:36,240"
        },
        "offsets": {
          "from": 5431920,
          "to": 5436240
        },
        "text": "دي ومن ضمنها مثلاً هتلاقي حاجة زي إيه؟ لو نزلنا تحت شوية."
      },
      {
        "timestamps": {
          "from": "01:30:36,240",
          "to": "01:30:48,300"
        },
        "offsets": {
          "from": 5436240,
          "to": 5448300
        },
        "text": "مثلاً هتلاقي إننا لو نزلنا شوية كده، حالياً مش"
      },
      {
        "timestamps": {
          "from": "01:30:48,300",
          "to": "01:30:53,280"
        },
        "offsets": {
          "from": 5448300,
          "to": 5453280
        },
        "text": "موجود لأنه دلوقتي مقفول. لو كان شغال كنت هتلاقي الـ IP بتاعه اللي"
      },
      {
        "timestamps": {
          "from": "01:30:53,280",
          "to": "01:30:55,060"
        },
        "offsets": {
          "from": 5453280,
          "to": 5455060
        },
        "text": "كان 172.17 مثلاً."
      },
      {
        "timestamps": {
          "from": "01:30:55,060",
          "to": "01:30:56,300"
        },
        "offsets": {
          "from": 5455060,
          "to": 5456300
        },
        "text": "تمام."
      },
      {
        "timestamps": {
          "from": "01:30:56,300",
          "to": "01:30:58,060"
        },
        "offsets": {
          "from": 5456300,
          "to": 5458060
        },
        "text": "كويس."
      },
      {
        "timestamps": {
          "from": "01:30:58,060",
          "to": "01:30:59,760"
        },
        "offsets": {
          "from": 5458060,
          "to": 5459760
        },
        "text": "لحسن الحظ."
      }
    ]
  },
  {
    "id": 9,
    "title": "Docker in VSCode",
    "duration": 671.0,
    "isReady": true,
    "transcription": [
      {
        "timestamps": {
          "from": "00:00:00,000",
          "to": "00:00:02,760"
        },
        "offsets": {
          "from": 0,
          "to": 2760
        },
        "text": "الدنيا اتزحمت شوية في الـ commands"
      },
      {
        "timestamps": {
          "from": "00:00:02,760",
          "to": "00:00:06,120"
        },
        "offsets": {
          "from": 2760,
          "to": 6120
        },
        "text": "الـ Terminal خلاص فاض بيها"
      },
      {
        "timestamps": {
          "from": "00:00:06,120",
          "to": "00:00:08,960"
        },
        "offsets": {
          "from": 6120,
          "to": 8960
        },
        "text": "فلحسن الحظ مين هيسعفنا في الموضوع ده؟"
      },
      {
        "timestamps": {
          "from": "00:00:08,960",
          "to": "00:00:12,800"
        },
        "offsets": {
          "from": 8960,
          "to": 12800
        },
        "text": "مين أشهر Graphical Interface نتعامل معاه؟"
      },
      {
        "timestamps": {
          "from": "00:00:12,800",
          "to": "00:00:14,560"
        },
        "offsets": {
          "from": 12800,
          "to": 14560
        },
        "text": "Visual Studio Code"
      },
      {
        "timestamps": {
          "from": "00:00:14,560",
          "to": "00:00:16,640"
        },
        "offsets": {
          "from": 14560,
          "to": 16640
        },
        "text": "هنعمل الكلام ده.. هاجي أقول له مثلاً"
      },
      {
        "timestamps": {
          "from": "00:00:16,640",
          "to": "00:00:22,480"
        },
        "offsets": {
          "from": 16640,
          "to": 22480
        },
        "text": "خلينا نعمل Directory عشان نبدأ نحط فيه شوية الـ Files بتاعتنا اللي هنستعملها"
      },
      {
        "timestamps": {
          "from": "00:00:22,480",
          "to": "00:00:26,000"
        },
        "offsets": {
          "from": 22480,
          "to": 26000
        },
        "text": "مثلاً mkdir docker"
      },
      {
        "timestamps": {
          "from": "00:00:26,000",
          "to": "00:00:29,200"
        },
        "offsets": {
          "from": 26000,
          "to": 29200
        },
        "text": "بلاش لخبطة، أخليها docker-work"
      },
      {
        "timestamps": {
          "from": "00:00:29,200",
          "to": "00:00:31,360"
        },
        "offsets": {
          "from": 29200,
          "to": 31360
        },
        "text": "وأقول له cd"
      },
      {
        "timestamps": {
          "from": "00:00:31,360",
          "to": "00:00:32,680"
        },
        "offsets": {
          "from": 31360,
          "to": 32680
        },
        "text": "docker-work"
      },
      {
        "timestamps": {
          "from": "00:00:32,680",
          "to": "00:00:36,880"
        },
        "offsets": {
          "from": 32680,
          "to": 36880
        },
        "text": "وأجي من هنا أقول له code ."
      },
      {
        "timestamps": {
          "from": "00:00:36,880",
          "to": "00:40,960"
        },
        "offsets": {
          "from": 36880,
          "to": 40960
        },
        "text": "حقيقة Visual Studio Code في الموضوع ده"
      },
      {
        "timestamps": {
          "from": "00:00:40,960",
          "to": "00:00:41,840"
        },
        "offsets": {
          "from": 40960,
          "to": 41840
        },
        "text": "Trust it"
      },
      {
        "timestamps": {
          "from": "00:00:41,840",
          "to": "00:00:45,400"
        },
        "offsets": {
          "from": 41840,
          "to": 45400
        },
        "text": "طبعاً Visual Studio Code كان فيه فيديو عنه"
      },
      {
        "timestamps": {
          "from": "00:00:45,400",
          "to": "00:00:51,520"
        },
        "offsets": {
          "from": 45400,
          "to": 51520
        },
        "text": "عشان لو ده جديد عليك تقدر ترجع للفيديو ده"
      },
      {
        "timestamps": {
          "from": "00:00:51,520",
          "to": "00:00:53,600"
        },
        "offsets": {
          "from": 51520,
          "to": 53600
        },
        "text": "إيه بقى هينفعنا هنا؟"
      },
      {
        "timestamps": {
          "from": "00:00:53,600",
          "to": "00:00:56,040"
        },
        "offsets": {
          "from": 53600,
          "to": 56040
        },
        "text": "Extension ليه علاقة بـ Docker"
      },
      {
        "timestamps": {
          "from": "00:00:56,040",
          "to": "00:00:58,400"
        },
        "offsets": {
          "from": 56040,
          "to": 58400
        },
        "text": "والـ Extension ده هيسهل علينا حاجات كتير جداً"
      },
      {
        "timestamps": {
          "from": "00:00:58,400",
          "to": "00:01:00,680"
        },
        "offsets": {
          "from": 58400,
          "to": 60680
        },
        "text": "هيسهل حاجات كتير، بس كان مهم برضو في الأول"
      },
      {
        "timestamps": {
          "from": "00:01:00,680",
          "to": "00:01:04,600"
        },
        "offsets": {
          "from": 60680,
          "to": 64600
        },
        "text": "أنا عارف كل مرة بتزعلوا مني: طالما في Graphical Interface واجعين قلبنا ليه؟"
      },
      {
        "timestamps": {
          "from": "00:01:04,600",
          "to": "00:01:05,920"
        },
        "offsets": {
          "from": 64600,
          "to": 65920
        },
        "text": "المهم الـ Architecture"
      },
      {
        "timestamps": {
          "from": "00:01:05,920",
          "to": "00:01:06,880"
        },
        "offsets": {
          "from": 65920,
          "to": 66880
        },
        "text": "المهم الـ Concept"
      },
      {
        "timestamps": {
          "from": "00:01:06,880",
          "to": "00:01:12,240"
        },
        "offsets": {
          "from": 66880,
          "to": 72240
        },
        "text": "وبعد كده مش مهم نعمل الكلام ده بإيه، سواء بـ Graphical Interface ولا بالـ Command Line"
      },
      {
        "timestamps": {
          "from": "00:01:12,240",
          "to": "00:01:18,680"
        },
        "offsets": {
          "from": 72240,
          "to": 78680
        },
        "text": "لحسن الحظ طبعاً الناس اللي بيشتغلوا بـ Docker Dashboard وبالـ Docker Desktop بتاع Windows و Mac"
      },
      {
        "timestamps": {
          "from": "00:01:18,680",
          "to": "00:01:20,360"
        },
        "offsets": {
          "from": 78680,
          "to": 80360
        },
        "text": "الكلام ده مش محتاجينه يعني"
      },
      {
        "timestamps": {
          "from": "00:01:20,360",
          "to": "00:01:23,320"
        },
        "offsets": {
          "from": 80360,
          "to": 83320
        },
        "text": "بس إحنا بقى غلابة، بنضطر أحياناً"
      },
      {
        "timestamps": {
          "from": "00:01:23,320",
          "to": "00:01:26,120"
        },
        "offsets": {
          "from": 83320,
          "to": 86120
        },
        "text": "فنضطر إننا نستعمل حاجة زي كده"
      },
      {
        "timestamps": {
          "from": "00:01:26,120",
          "to": "00:01:27,880"
        },
        "offsets": {
          "from": 86120,
          "to": 87880
        },
        "text": "فأنا هروح على الـ Extensions"
      },
      {
        "timestamps": {
          "from": "00:01:27,880",
          "to": "00:01:29,840"
        },
        "offsets": {
          "from": 87880,
          "to": 89840
        },
        "text": "وهقول له عايز.."
      },
      {
        "timestamps": {
          "from": "00:01:29,840",
          "to": "00:01:35,240"
        },
        "offsets": {
          "from": 89840,
          "to": 95240
        },
        "text": "طبعاً الـ Recommended Extensions المفروض إنه بيديك Recommendation بناءً على"
      },
      {
        "timestamps": {
          "from": "00:01:35,240",
          "to": "00:01:40,040"
        },
        "offsets": {
          "from": 95240,
          "to": 100040
        },
        "text": "الحاجات اللي أنت عامل لها Installation عندك في الـ Machine دي"
      },
      {
        "timestamps": {
          "from": "00:01:40,040",
          "to": "00:01:43,160"
        },
        "offsets": {
          "from": 100040,
          "to": 103160
        },
        "text": "فالمفروض إن Docker يبقى من ضمن الحاجات اللي تطلع في الأول، لكن إيه"
      },
      {
        "timestamps": {
          "from": "00:01:43,160",
          "to": "00:01:46,880"
        },
        "offsets": {
          "from": 103160,
          "to": 106880
        },
        "text": "يبدو إنه مش في أحسن حالاته بس هي موجودة هنا"
      },
      {
        "timestamps": {
          "from": "00:01:46,880",
          "to": "00:01:50,080"
        },
        "offsets": {
          "from": 106880,
          "to": 110080
        },
        "text": "المفروض تطلع في أول 3 أو 4 مثلاً"
      },
      {
        "timestamps": {
          "from": "00:01:50,080",
          "to": "00:01:54,680"
        },
        "offsets": {
          "from": 110080,
          "to": 114680
        },
        "text": "فالـ Docker Extension ده من Microsoft وفيه تقريباً كل الحاجات اللي إحنا"
      },
      {
        "timestamps": {
          "from": "00:01:54,680",
          "to": "00:01:58,880"
        },
        "offsets": {
          "from": 114680,
          "to": 118880
        },
        "text": "محتاجينها، لأننا برضه مش بنحتاج أكتر من كده قوي"
      },
      {
        "timestamps": {
          "from": "00:01:58,880",
          "to": "00:02:04,240"
        },
        "offsets": {
          "from": 118880,
          "to": 124240
        },
        "text": "فأنا هعمل Install للـ Docker Extension، هتلاقيه عامل زي الحوت الظريف ده"
      },
      {
        "timestamps": {
          "from": "00:02:04,240",
          "to": "00:02:10,160"
        },
        "offsets": {
          "from": 124240,
          "to": 130160
        },
        "text": "الحوت ده هو الرمز بتاع Docker، وبالمناسبة كلمة Docker دي"
      },
      {
        "timestamps": {
          "from": "00:02:10,160",
          "to": "00:02:15,400"
        },
        "offsets": {
          "from": 130160,
          "to": 135400
        },
        "text": "جاية من الـ Dock اللي هو رصيف السفن، مش عارف اسمه إيه بالظبط"
      },
      {
        "timestamps": {
          "from": "00:02:15,400",
          "to": "00:02:20,260"
        },
        "offsets": {
          "from": 135400,
          "to": 140260
        },
        "text": "ودوكر ده كان هو الشخص العتال أو الشيال اللي"
      },
      {
        "timestamps": {
          "from": "00:02:20,260",
          "to": "00:02:27,160"
        },
        "offsets": {
          "from": 140260,
          "to": 147160
        },
        "text": "بينقل العلب على المركب، وده كان اسمه Docker، ده الشخص"
      },
      {
        "timestamps": {
          "from": "00:02:27,160",
          "to": "00:02:34,180"
        },
        "offsets": {
          "from": 147160,
          "to": 154180
        },
        "text": "اللي بيحط العلب في المركب. Okay، فأنا هحتاج Docker ده."
      },
      {
        "timestamps": {
          "from": "00:02:34,180",
          "to": "00:02:41,200"
        },
        "offsets": {
          "from": 154180,
          "to": 161200
        },
        "text": "بس وأعتقد كده خلاص، ده بالنسبة لي كفاية. هتلاحظ إني"
      },
      {
        "timestamps": {
          "from": "00:02:41,200",
          "to": "00:02:44,920"
        },
        "offsets": {
          "from": 161200,
          "to": 164920
        },
        "text": "رحت هنا، خليني بس أظبطلك الـ Interface وأكبر شوية"
      },
      {
        "timestamps": {
          "from": "00:02:44,920",
          "to": "00:02:48,400"
        },
        "offsets": {
          "from": 164920,
          "to": 168400
        },
        "text": "الـ Fonts والحاجات دي علشان العملية تبقى أوضح شوية."
      },
      {
        "timestamps": {
          "from": "00:02:48,400",
          "to": "00:02:54,400"
        },
        "offsets": {
          "from": 168400,
          "to": 174400
        },
        "text": "ثواني وجايلكم، أوعى تغير المحطة، هظبطلكم"
      },
      {
        "timestamps": {
          "from": "00:02:54,400",
          "to": "00:02:59,740"
        },
        "offsets": {
          "from": 174400,
          "to": 179740
        },
        "text": "الـ Interface وبقى شكله جميل. Okay؟ هتلاقي إنه لما نزلنا"
      },
      {
        "timestamps": {
          "from": "00:02:59,740",
          "to": "00:03:05,500"
        },
        "offsets": {
          "from": 179740,
          "to": 185500
        },
        "text": "Docker في VS Code، طبعاً هو عارف إنك بالفعل منزل Docker"
      },
      {
        "timestamps": {
          "from": "00:03:05,500",
          "to": "00:03:11,260"
        },
        "offsets": {
          "from": 185500,
          "to": 191260
        },
        "text": "موجود، ولذلك قادر إنه يأكسس الـ Resources اللي موجودة. هتلاقي عندك هنا"
      },
      {
        "timestamps": {
          "from": "00:03:11,260",
          "to": "00:03:14,860"
        },
        "offsets": {
          "from": 191260,
          "to": 194860
        },
        "text": "مثلاً الـ Section اللي فوق ده، الـ Section ده اللي هو الـ Images Section."
      },
      {
        "timestamps": {
          "from": "00:03:14,860",
          "to": "00:03:18,880"
        },
        "offsets": {
          "from": 194860,
          "to": 198880
        },
        "text": "وهنا Section مش مهم عندي دلوقتي، أنا حتى ممكن أخبيه أصلاً مش"
      },
      {
        "timestamps": {
          "from": "00:03:18,880",
          "to": "00:03:23,200"
        },
        "offsets": {
          "from": 198880,
          "to": 203200
        },
        "text": "محتاجه دلوقتي. Okay؟ فانا عندي هنا الـ Images. هنا لو عملت ده"
      },
      {
        "timestamps": {
          "from": "00:03:23,200",
          "to": "00:03:27,640"
        },
        "offsets": {
          "from": 203200,
          "to": 207640
        },
        "text": "هيقولك إن عندك الـ Image، الـ Image دي اسمها أو الـ ID بتاعها"
      },
      {
        "timestamps": {
          "from": "00:03:27,640",
          "to": "00:03:30,460"
        },
        "offsets": {
          "from": 207640,
          "to": 210460
        },
        "text": "asamy670 مثلاً، والـ Tag بتاعها اللي هو 01."
      },
      {
        "timestamps": {
          "from": "00:03:30,460",
          "to": "00:03:36,160"
        },
        "offsets": {
          "from": 210460,
          "to": 216160
        },
        "text": "لو عملت كده هيبدأ يديك معلومات عنها، من ضمنها"
      },
      {
        "timestamps": {
          "from": "00:03:36,160",
          "to": "00:03:39,760"
        },
        "offsets": {
          "from": 216160,
          "to": 219760
        },
        "text": "مثلاً الـ Ports وتفاصيل تانية تحت هنا"
      },
      {
        "timestamps": {
          "from": "00:03:39,760",
          "to": "00:03:43,900"
        },
        "offsets": {
          "from": 219760,
          "to": 223900
        },
        "text": "الـ Ports وكلام من ده. لو جيت على نفس الوضع بالظبط هيعرفك"
      },
      {
        "timestamps": {
          "from": "00:03:43,900",
          "to": "00:03:47,020"
        },
        "offsets": {
          "from": 223900,
          "to": 227020
        },
        "text": "الـ Image اللي هو مبني عليها. مثلاً هنا هيقولك إن الـ Container ده مبني"
      },
      {
        "timestamps": {
          "from": "00:03:47,020",
          "to": "00:03:51,220"
        },
        "offsets": {
          "from": 227020,
          "to": 231220
        },
        "text": "على الـ Image دي، وبيديك شوية بيانات مثلاً إن"
      },
      {
        "timestamps": {
          "from": "00:03:51,220",
          "to": "00:03:54,580"
        },
        "offsets": {
          "from": 231220,
          "to": 234580
        },
        "text": "ده Container 1 مثلاً وهتلاقي حتى عليه علامة الـ Stop دي."
      },
      {
        "timestamps": {
          "from": "00:03:54,580",
          "to": "00:03:58,300"
        },
        "offsets": {
          "from": 234580,
          "to": 238300
        },
        "text": "Okay؟ فتعرف إن علامة الـ Stop دي معناها إنه مش"
      },
      {
        "timestamps": {
          "from": "00:03:58,300",
          "to": "00:04:02,440"
        },
        "offsets": {
          "from": 238300,
          "to": 242440
        },
        "text": "شغال دلوقتي. فهنا بيوريك الـ Containers وهنا بيوريك"
      },
      {
        "timestamps": {
          "from": "00:04:02,440",
          "to": "00:04:09,460"
        },
        "offsets": {
          "from": 242440,
          "to": 249460
        },
        "text": "مثلاً الـ Images. بنفس الوضع لو جيت قلت له:"
      },
      {
        "timestamps": {
          "from": "00:04:09,460",
          "to": "00:04:09,460"
        },
        "offsets": {
          "from": 249460,
          "to": 249460
        },
        "text": "Docker مثلاً..."
      },
      {
        "timestamps": {
          "from": "00:04:09,460",
          "to": "00:04:14,140"
        },
        "offsets": {
          "from": 249460,
          "to": 254140
        },
        "text": "Docker مثلاً..."
      },
      {
        "timestamps": {
          "from": "00:04:14,140",
          "to": "00:04:14,140"
        },
        "offsets": {
          "from": 254140,
          "to": 254140
        },
        "text": "..."
      },
      {
        "timestamps": {
          "from": "00:04:14,140",
          "to": "00:04:44,140"
        },
        "offsets": {
          "from": 254140,
          "to": 284140
        },
        "text": "..."
      },
      {
        "timestamps": {
          "from": "00:04:44,140",
          "to": "00:04:48,580"
        },
        "offsets": {
          "from": 284140,
          "to": 288580
        },
        "text": "Images يعني. هتلاقي إن عندي هنا 2 Images، واحدة اللي"
      },
      {
        "timestamps": {
          "from": "00:04:48,580",
          "to": "00:04:54,040"
        },
        "offsets": {
          "from": 288580,
          "to": 294040
        },
        "text": "هي asamy670 وعندي بايثون. أقدر"
      },
      {
        "timestamps": {
          "from": "00:04:54,040",
          "to": "00:04:58,960"
        },
        "offsets": {
          "from": 294040,
          "to": 298960
        },
        "text": "برضو من هنا، ودي بايثون، أقدر مثلاً"
      },
      {
        "timestamps": {
          "from": "00:04:58,960",
          "to": "00:05:02,920"
        },
        "offsets": {
          "from": 298960,
          "to": 302920
        },
        "text": "أعمل لو تفتكر اللي إحنا عملناها من شوية"
      },
      {
        "timestamps": {
          "from": "00:05:02,920",
          "to": "00:05:05,860"
        },
        "offsets": {
          "from": 302920,
          "to": 305860
        },
        "text": "دي، أقدر برضو أعمل كده، خليني بس أنزل"
      },
      {
        "timestamps": {
          "from": "00:05:05,860",
          "to": "00:05:09,220"
        },
        "offsets": {
          "from": 305860,
          "to": 309220
        },
        "text": "الـ Terminal دي شوية. لو جيت كده أقدر أقول له"
      },
      {
        "timestamps": {
          "from": "00:05:09,220",
          "to": "00:05:13,360"
        },
        "offsets": {
          "from": 309220,
          "to": 313360
        },
        "text": "Run. و Run دي معناها Create Container، يعني docker container run. Okay؟"
      },
      {
        "timestamps": {
          "from": "00:05:13,360",
          "to": "00:05:18,700"
        },
        "offsets": {
          "from": 313360,
          "to": 318700
        },
        "text": "وممكن أقول له اعملي Container واشتغل بالـ -it."
      },
      {
        "timestamps": {
          "from": "00:05:18,700",
          "to": "00:05:23,260"
        },
        "offsets": {
          "from": 318700,
          "to": 323260
        },
        "text": "Okay؟ وأقدر أقول له..."
      },
      {
        "timestamps": {
          "from": "00:05:23,260",
          "to": "00:05:26,860"
        },
        "offsets": {
          "from": 323260,
          "to": 326860
        },
        "text": "أقدر أعدل في الـ Tag وهكذا، وأقدر أقول له تمام؟"
      },
      {
        "timestamps": {
          "from": "00:02:54,400",
          "to": "00:02:59,740"
        },
        "offsets": {
          "from": 174400,
          "to": 179740
        },
        "text": "اللي هي Docker image. Okay؟ فلو قلت له هيفتح لي الكلام"
      },
      {
        "timestamps": {
          "from": "00:05:31,960",
          "to": "00:05:36,820"
        },
        "offsets": {
          "from": 331960,
          "to": 336820
        },
        "text": "ده هنا، وبدأ يتشيك شوية. ليه يتشيك؟"
      },
      {
        "timestamps": {
          "from": "00:05:36,820",
          "to": "00:05:39,460"
        },
        "offsets": {
          "from": 336820,
          "to": 339460
        },
        "text": "شوية؟ لأن ده خلاص بقى text file وأقدر أعمل فيه"
      },
      {
        "timestamps": {
          "from": "00:05:39,460",
          "to": "00:05:43,180"
        },
        "offsets": {
          "from": 339460,
          "to": 343180
        },
        "text": "Control + F وسيرش وحاجات زي كده لو أنا عايز."
      },
      {
        "timestamps": {
          "from": "00:05:43,180",
          "to": "00:05:48,460"
        },
        "offsets": {
          "from": 343180,
          "to": 348460
        },
        "text": "ماشي؟ هيقول لي مثلاً ده Python:latest"
      },
      {
        "timestamps": {
          "from": "00:05:48,460",
          "to": "00:05:52,180"
        },
        "offsets": {
          "from": 348460,
          "to": 352180
        },
        "text": "وكلام من ده. لو جيت مثلاً حبيت إني"
      },
      {
        "timestamps": {
          "from": "00:05:52,180",
          "to": "00:05:56,920"
        },
        "offsets": {
          "from": 352180,
          "to": 356920
        },
        "text": "أعرف مين الـ CMD مثلاً أو الـ Command اللي شغال جوه الـ Image"
      },
      {
        "timestamps": {
          "from": "00:05:56,920",
          "to": "00:06:00,460"
        },
        "offsets": {
          "from": 356920,
          "to": 360460
        },
        "text": "دي، هو Python. تمام؟ زي ما إحنا عارفين Python 3."
      },
      {
        "timestamps": {
          "from": "00:06:00,460",
          "to": "00:06:05,200"
        },
        "offsets": {
          "from": 360460,
          "to": 365200
        },
        "text": "زي ما شفنا قبل كده، يوريني مثلاً الـ Layers وخلافه."
      },
      {
        "timestamps": {
          "from": "00:06:05,200",
          "to": "00:06:10,600"
        },
        "offsets": {
          "from": 365200,
          "to": 370600
        },
        "text": "من ضمن الحاجات اللي أقدر أعملها برضه بسرعة هنا إني آجي كده."
      },
      {
        "timestamps": {
          "from": "00:06:10,600",
          "to": "00:06:15,040"
        },
        "offsets": {
          "from": 370600,
          "to": 375040
        },
        "text": "إني آجي هنا Right-click وأقوله Run Interactive. فـ Run Interactive"
      },
      {
        "timestamps": {
          "from": "00:06:15,040",
          "to": "00:06:19,960"
        },
        "offsets": {
          "from": 375040,
          "to": 379960
        },
        "text": "دي معناها Create لي من الـ Image دي في الـ Interactive mode."
      },
      {
        "timestamps": {
          "from": "00:06:19,960",
          "to": "00:06:25,600"
        },
        "offsets": {
          "from": 379960,
          "to": 385600
        },
        "text": "فأقوله Run Interactive، هيفتح لي تابة تانية هنا."
      },
      {
        "timestamps": {
          "from": "00:06:25,600",
          "to": "00:06:30,400"
        },
        "offsets": {
          "from": 385600,
          "to": 390400
        },
        "text": "في Visual Studio Code، تمام؟ اسمها Python:latest."
      },
      {
        "timestamps": {
          "from": "00:06:30,400",
          "to": "00:06:35,440"
        },
        "offsets": {
          "from": 390400,
          "to": 395440
        },
        "text": "Task تمام، وبعد كده اسم اليوزر بتاعي."
      },
      {
        "timestamps": {
          "from": "00:06:35,440",
          "to": "00:06:41,380"
        },
        "offsets": {
          "from": 395440,
          "to": 401380
        },
        "text": "وهتلاقيه فاتح الـ Terminal بتاع الـ Container. عمل Create لـ Container هنا."
      },
      {
        "timestamps": {
          "from": "00:06:41,380",
          "to": "00:06:45,100"
        },
        "offsets": {
          "from": 401380,
          "to": 405100
        },
        "text": "وعليها العلامة الخضراء دي. تمام، عمل Create لـ Container وحتى اسم"
      },
      {
        "timestamps": {
          "from": "00:06:45,100",
          "to": "00:06:47,560"
        },
        "offsets": {
          "from": 405100,
          "to": 407560
        },
        "text": "الـ Container باين هنا كمان. بص كده هتلاقي اسم"
      },
      {
        "timestamps": {
          "from": "00:06:47,560",
          "to": "00:06:52,480"
        },
        "offsets": {
          "from": 407560,
          "to": 412480
        },
        "text": "الـ Container اسمه quirky_feynman، ماشي؟ اسم عشوائي."
      },
      {
        "timestamps": {
          "from": "00:06:52,480",
          "to": "00:06:57,880"
        },
        "offsets": {
          "from": 412480,
          "to": 417880
        },
        "text": "لو جيت هنا وعملت"
      },
      {
        "timestamps": {
          "from": "00:06:57,880",
          "to": "00:07:04,960"
        },
        "offsets": {
          "from": 417880,
          "to": 424960
        },
        "text": "Control + L، وكتبت docker ps، هشوف الـ Container"
      },
      {
        "timestamps": {
          "from": "00:07:04,960",
          "to": "00:07:09,160"
        },
        "offsets": {
          "from": 424960,
          "to": 429160
        },
        "text": "الـ ID بتاعه، والـ Image، والـ Command بتاعه Python. تمام؟"
      },
      {
        "timestamps": {
          "from": "00:07:09,160",
          "to": "00:07:13,540"
        },
        "offsets": {
          "from": 429160,
          "to": 433540
        },
        "text": "والـ Status، واسمه quirky_feynman. فلو أنا"
      },
      {
        "timestamps": {
          "from": "00:07:13,540",
          "to": "00:07:17,320"
        },
        "offsets": {
          "from": 433540,
          "to": 437320
        },
        "text": "رجعت تاني لده، دي Shell مفتوحة مؤقتاً لما"
      },
      {
        "timestamps": {
          "from": "00:07:17,320",
          "to": "00:07:20,980"
        },
        "offsets": {
          "from": 437320,
          "to": 440980
        },
        "text": "قلت له Run Interactive. وكالعادة زي ما إنت عارف لو"
      },
      {
        "timestamps": {
          "from": "00:07:20,980",
          "to": "00:07:29,380"
        },
        "offsets": {
          "from": 440980,
          "to": 449380
        },
        "text": "جينا هنا وكتبت import sys مثلاً. كده خلاص."
      },
      {
        "timestamps": {
          "from": "00:07:29,380",
          "to": "00:07:43,240"
        },
        "offsets": {
          "from": 449380,
          "to": 463240
        },
        "text": "print(sys.version) هيوريك الـ version اللي موجود."
      },
      {
        "timestamps": {
          "from": "00:07:43,240",
          "to": "00:07:47,080"
        },
        "offsets": {
          "from": 463240,
          "to": 467080
        },
        "text": "مثلاً أنا كده جوه الـ Container. والـ Container شغال"
      },
      {
        "timestamps": {
          "from": "00:07:47,080",
          "to": "00:07:53,020"
        },
        "offsets": {
          "from": 467080,
          "to": 473020
        },
        "text": "وأنا جوه الـ Shell بتاعته. تمام؟ عايز تعمل Exit"
      },
      {
        "timestamps": {
          "from": "00:07:53,020",
          "to": "00:07:58,540"
        },
        "offsets": {
          "from": 473020,
          "to": 478540
        },
        "text": "منه، فهنعمل Exit. هتلاقي إنه"
      },
      {
        "timestamps": {
          "from": "00:07:58,540",
          "to": "00:08:05,740"
        },
        "offsets": {
          "from": 478540,
          "to": 485740
        },
        "text": "خرج من الـ Terminal. وشوية وهتلاقي الـ Container ده بقى"
      },
      {
        "timestamps": {
          "from": "00:08:05,740",
          "to": "00:08:11,200"
        },
        "offsets": {
          "from": 485740,
          "to": 491200
        },
        "text": "Exited. بس أعتقد إنه لسه Running. تمام؟ هعمل Right-click"
      },
      {
        "timestamps": {
          "from": "00:08:11,200",
          "to": "00:08:16,840"
        },
        "offsets": {
          "from": 491200,
          "to": 496840
        },
        "text": "هنا وأقوله Stop مثلاً. فالـ Container ده هتلاقيه"
      },
      {
        "timestamps": {
          "from": "00:08:16,840",
          "to": "00:08:22,300"
        },
        "offsets": {
          "from": 496840,
          "to": 502300
        },
        "text": "بعد 10 ثواني بيحاول يقفل."
      },
      {
        "timestamps": {
          "from": "00:08:22,300",
          "to": "00:08:26,140"
        },
        "offsets": {
          "from": 502300,
          "to": 506140
        },
        "text": "لو الـ Container ماتقفلش بعد 10 ثواني، هياخد"
      },
      {
        "timestamps": {
          "from": "00:08:26,140",
          "to": "00:08:31,360"
        },
        "offsets": {
          "from": 506140,
          "to": 511360
        },
        "text": "رصاصة الرحمة. تمام؟ فالـ Container كده اتمسح وما"
      },
      {
        "timestamps": {
          "from": "00:08:31,360",
          "to": "00:08:34,540"
        },
        "offsets": {
          "from": 511360,
          "to": 514540
        },
        "text": "بقاش موجود عندي. بنفس الوضع برضه من هنا"
      },
      {
        "timestamps": {
          "from": "00:08:34,540",
          "to": "00:08:38,380"
        },
        "offsets": {
          "from": 514540,
          "to": 518380
        },
        "text": "أقدر أقوله مثلاً Remove أو أي حاجة."
      },
      {
        "timestamps": {
          "from": "00:08:38,380",
          "to": "00:08:46,600"
        },
        "offsets": {
          "from": 518380,
          "to": 526600
        },
        "text": "وأقدر كمان من هنا من الـ Images لو عايز أعمل"
      },
      {
        "timestamps": {
          "from": "00:08:46,600",
          "to": "00:08:51,940"
        },
        "offsets": {
          "from": 526600,
          "to": 531940
        },
        "text": "لـ Images، أتأكد إن الـ Images دي مفيش منها Containers. من الحاجات اللي"
      },
      {
        "timestamps": {
          "from": "00:08:51,940",
          "to": "00:08:55,840"
        },
        "offsets": {
          "from": 531940,
          "to": 535840
        },
        "text": "أقدر أعملها برضه في الـ Images إني أقوله مثلاً docker"
      },
      {
        "timestamps": {
          "from": "00:08:55,840",
          "to": "00:09:02,740"
        },
        "offsets": {
          "from": 535840,
          "to": 542740
        },
        "text": "rmi، أحياناً بتبقى عايز تعمل Remove لكل الـ Images."
      },
      {
        "timestamps": {
          "from": "00:09:02,740",
          "to": "00:09:07,060"
        },
        "offsets": {
          "from": 542740,
          "to": 547060
        },
        "text": "اللي عندك، فبدل ما تعمل واحدة واحدة وإنت في وقت من الأوقات"
      },
      {
        "timestamps": {
          "from": "00:09:07,060",
          "to": "00:09:10,600"
        },
        "offsets": {
          "from": 547060,
          "to": 550600
        },
        "text": "اللي عندك بقى ألف Images، فبدل ما تقول له واحدة واحدة"
      },
      {
        "timestamps": {
          "from": "00:09:10,600",
          "to": "00:09:16,120"
        },
        "offsets": {
          "from": 550600,
          "to": 556120
        },
        "text": "في طريقة ظريفة، لو أنا جيت قلت له Docker images فهيوريني"
      },
      {
        "timestamps": {
          "from": "00:09:16,360",
          "to": "00:09:23,020"
        },
        "offsets": {
          "from": 556360,
          "to": 563020
        },
        "text": "الـ Images، لو قلت له Docker images -q هيوريني الـ IDs بتاعة"
      },
      {
        "timestamps": {
          "from": "00:09:23,020",
          "to": "00:09:33,940"
        },
        "offsets": {
          "from": 563020,
          "to": 573940
        },
        "text": "الـ Images، فلو أنا جيت قلت له حط لي ده في Command وقلت"
      },
      {
        "timestamps": {
          "from": "00:09:33,940",
          "to": "00:09:46,120"
        },
        "offsets": {
          "from": 573940,
          "to": 586120
        },
        "text": "له Docker rmi واستخدمت كل الـ Result من الـ Command ده، فكده هيـ Remove"
      },
      {
        "timestamps": {
          "from": "00:09:46,120",
          "to": "00:09:53,320"
        },
        "offsets": {
          "from": 586120,
          "to": 593320
        },
        "text": "كل الـ Images، تمام؟ في حاجة هنا برضه خبر قد يبدو وحش"
      },
      {
        "timestamps": {
          "from": "00:09:53,320",
          "to": "00:09:57,340"
        },
        "offsets": {
          "from": 593320,
          "to": 597340
        },
        "text": "للبعض، بس معلش ممكن يكون الخبر وحش بس تسمعه مني أحسن"
      },
      {
        "timestamps": {
          "from": "00:09:57,340",
          "to": "00:10:03,460"
        },
        "offsets": {
          "from": 597340,
          "to": 603460
        },
        "text": "تسمعه من حد غريب، لو عايز تبقى متمكن في Docker وكده"
      },
      {
        "timestamps": {
          "from": "00:20:00,000",
          "to": "00:20:29,980"
        },
        "offsets": {
          "from": 1200000,
          "to": 1229980
        },
        "text": "عشان تتحكم في Docker Container وفي موضوع الـ Images وكده زي ما هنشوف كمان شوية، إنت محتاج تكون عارف Basic Linux commands يعني Basic to Middle، مش Basic اللي هو حاجات بسيطة وخلاص، لا فيه شوية حاجات تانية برضه محتاج تعرفها، تعرف شوية الـ Commands الـ Related للـ Files والـ Drivers والـ Users والـ Groups والـ Permissions، ده مهم جداً."
      },
      {
        "timestamps": {
          "from": "00:20:30,000",
          "to": "00:20:48,900"
        },
        "offsets": {
          "from": 1230000,
          "to": 1248900
        },
        "text": "ومش بس علشان Docker، كمان علشان موضوع الـ Data Engineering، فلو إنت عايز تبقى Data Engineer كويس لازم تبقى عارف Linux، فربما لو ضغطتوا عليا ممكن أعمل فيديو أشرح فيه الـ Commands اللي محتاجها عشان تبقى Data Engineer."
      },
      {
        "timestamps": {
          "from": "00:20:48,900",
          "to": "00:20:53,900"
        },
        "offsets": {
          "from": 1248900,
          "to": 1253900
        },
        "text": "فده بالنسبة للـ Image، خلينا نرجع هنا تاني."
      },
      {
        "timestamps": {
          "from": "00:20:53,900",
          "to": "00:20:56,740"
        },
        "offsets": {
          "from": 1253900,
          "to": 1256740
        },
        "text": "يبقى إحنا شفنا الـ Image Pull."
      },
      {
        "timestamps": {
          "from": "00:20:56,740",
          "to": "00:20:57,960"
        },
        "offsets": {
          "from": 1256740,
          "to": 1257960
        },
        "text": "والـ Inspect."
      },
      {
        "timestamps": {
          "from": "00:20:57,960",
          "to": "00:21:01,380"
        },
        "offsets": {
          "from": 1257960,
          "to": 1261380
        },
        "text": "الـ Manifest ده إحنا اتكلمنا عنه."
      },
      {
        "timestamps": {
          "from": "00:21:01,380",
          "to": "00:21:03,520"
        },
        "offsets": {
          "from": 1261380,
          "to": 1263520
        },
        "text": "الـ Buildx لسه هنتكلم عنه."
      },
      {
        "timestamps": {
          "from": "00:21:03,520",
          "to": "00:21:05,000"
        },
        "offsets": {
          "from": 1263520,
          "to": 1265000
        },
        "text": "والـ Remove."
      },
      {
        "timestamps": {
          "from": "00:21:05,000",
          "to": "00:21:07,720"
        },
        "offsets": {
          "from": 1265000,
          "to": 1267720
        },
        "text": "فده كان فيما يخص"
      },
      {
        "timestamps": {
          "from": "00:21:07,720",
          "to": "00:21:09,900"
        },
        "offsets": {
          "from": 1267720,
          "to": 1269900
        },
        "text": "الـ Docker Images بالتفصيل."
      }
    ]
  },
  {
    "id": 10,
    "title": "Containers - Deep Dive",
    "duration": 912.0,
    "isReady": true,
    "transcription": [
      {
        "timestamps": {
          "from": "00:00:00,000",
          "to": "00:00:03,840"
        },
        "offsets": {
          "from": 0,
          "to": 3840
        },
        "text": "هنتكلم بالتفصيل أكتر عن الـ Container بقى. إحنا اتكلمنا كتير"
      },
      {
        "timestamps": {
          "from": "00:00:03,840",
          "to": "00:00:07,620"
        },
        "offsets": {
          "from": 3840,
          "to": 7620
        },
        "text": "عن الـ Container وفي حاجات كتيرة هنعملها. إيه"
      },
      {
        "timestamps": {
          "from": "00:00:07,620",
          "to": "00:00:13,320"
        },
        "offsets": {
          "from": 7620,
          "to": 13320
        },
        "text": "الـ Container؟ الـ Container هو الـ instance بتاع الـ Image. الـ Image عبارة عن زي"
      },
      {
        "timestamps": {
          "from": "00:00:13,320",
          "to": "00:00:20,640"
        },
        "offsets": {
          "from": 13320,
          "to": 20640
        },
        "text": "Image مقفولة. الـ Container بالنسبة للـ Image زي الـ Object للـ Class."
      },
      {
        "timestamps": {
          "from": "00:00:20,640",
          "to": "00:00:26,160"
        },
        "offsets": {
          "from": 20640,
          "to": 26160
        },
        "text": "يبقى فكرة الـ Container إن أنا بدل ما أشغل VM كاملة بالـ OS"
      },
      {
        "timestamps": {
          "from": "00:00:26,160",
          "to": "00:00:30,000"
        },
        "offsets": {
          "from": 26160,
          "to": 30000
        },
        "text": "الكلام اللي إحنا قلناه كتير قبل كده ده. إحنا بنشغل Container جاي من"
      },
      {
        "timestamps": {
          "from": "00:00:30,000",
          "to": "00:00:36,840"
        },
        "offsets": {
          "from": 30000,
          "to": 36840
        },
        "text": "Build للأول وبعد كده منها بعمل الـ Container. إزاي بعمل"
      },
      {
        "timestamps": {
          "from": "00:00:36,840",
          "to": "00:00:40,680"
        },
        "offsets": {
          "from": 36840,
          "to": 40680
        },
        "text": "الكلام ده؟ شفنا أكتر من طريقة. الطريقة الأصلية هي إن"
      },
      {
        "timestamps": {
          "from": "00:00:40,680",
          "to": "00:00:47,640"
        },
        "offsets": {
          "from": 40680,
          "to": 47640
        },
        "text": "أنا بعمل Build الأول وبعد كده Run. في طريقة أسرع بكتير هي إن أنا أعمل Docker"
      },
      {
        "timestamps": {
          "from": "00:00:47,640",
          "to": "00:01:51,960"
        },
        "offsets": {
          "from": 47640,
          "to": 51960
        },
        "text": "Run. الـ Docker Run ده بيعمل كل حاجة، بيعمل Pull لو هي مش موجودة، وبعد كده"
      },
      {
        "timestamps": {
          "from": "00:00:51,960",
          "to": "00:00:55,080"
        },
        "offsets": {
          "from": 51960,
          "to": 55080
        },
        "text": "بيعمل Create للـ Container، وبعد كده بيعمل Start للـ Container."
      },
      {
        "timestamps": {
          "from": "00:00:55,080",
          "to": "00:00:57,900"
        },
        "offsets": {
          "from": 55080,
          "to": 57900
        },
        "text": "من ضمن الـ Commands الكتيرة اللي إحنا استعملناها أو الـ Switches اللي"
      },
      {
        "timestamps": {
          "from": "00:00:57,900",
          "to": "00:01:01,560"
        },
        "offsets": {
          "from": 57900,
          "to": 61560
        },
        "text": "إحنا استعملناها هو الـ -it. الـ Dash it ده"
      },
      {
        "timestamps": {
          "from": "00:01:01,560",
          "to": "00:01:05,280"
        },
        "offsets": {
          "from": 61560,
          "to": 65280
        },
        "text": "اللي هو بيدخلك في الـ Interactive Mode بتاع الـ Container على حسب"
      },
      {
        "timestamps": {
          "from": "00:01:05,280",
          "to": "00:01:08,520"
        },
        "offsets": {
          "from": 65280,
          "to": 68520
        },
        "text": "إيه الـ Application اللي إنت هتعمل لها Run. الـ Default command شكله"
      },
      {
        "timestamps": {
          "from": "00:01:08,520",
          "to": "00:01:11,940"
        },
        "offsets": {
          "from": 68520,
          "to": 71940
        },
        "text": "عامل كده: docker container run، وبعد كده شوية Switches على حسب إنت"
      },
      {
        "timestamps": {
          "from": "00:01:11,940",
          "to": "00:01:15,420"
        },
        "offsets": {
          "from": 71940,
          "to": 75420
        },
        "text": "عايز تعمل إيه أو عايز تعمل Run للـ Container ده إزاي. وبعد كده"
      },
      {
        "timestamps": {
          "from": "00:01:15,420",
          "to": "00:01:20,640"
        },
        "offsets": {
          "from": 75420,
          "to": 80640
        },
        "text": "الـ Image name اللي هي هتبقى الـ Repo والـ Tag سواء الـ Repo دي كانت"
      },
      {
        "timestamps": {
          "from": "00:01:20,640",
          "to": "00:01:24,360"
        },
        "offsets": {
          "from": 80640,
          "to": 84360
        },
        "text": "Official ولا مش Official زي ما شفنا. وبعد كده بتديله"
      },
      {
        "timestamps": {
          "from": "00:01:24,360",
          "to": "00:01:29,100"
        },
        "offsets": {
          "from": 84360,
          "to": 89100
        },
        "text": "الـ Application. الـ Application دي هتبقى الـ Main process بتاعة الـ Container."
      },
      {
        "timestamps": {
          "from": "00:01:29,100",
          "to": "00:01:32,760"
        },
        "offsets": {
          "from": 89100,
          "to": 92760
        },
        "text": "اللي هي بتبقى الـ Application اللي شغال في PID 1، اللي هي"
      },
      {
        "timestamps": {
          "from": "00:01:32,760",
          "to": "00:01:36,000"
        },
        "offsets": {
          "from": 92760,
          "to": 96000
        },
        "text": "بيبقى على أساسها الـ Container running. اللي هي لو لأي سبب"
      },
      {
        "timestamps": {
          "from": "00:01:36,000",
          "to": "00:01:40,920"
        },
        "offsets": {
          "from": 96000,
          "to": 100920
        },
        "text": "من الأسباب الـ Container بيقف. فده مهم جداً، الـ Application دي"
      },
      {
        "timestamps": {
          "from": "00:01:40,920",
          "to": "00:01:47,400"
        },
        "offsets": {
          "from": 100920,
          "to": 107400
        },
        "text": "ممكن تبقى مثلاً الـ Shell، ممكن تبقى Database لما نزلنا، ممكن"
      },
      {
        "timestamps": {
          "from": "00:01:47,400",
          "to": "00:01:52,260"
        },
        "offsets": {
          "from": 107400,
          "to": 112260
        },
        "text": "تكون كذا حاجة بقى على حسب إنت الـ Container ده فيه أي Applications"
      },
      {
        "timestamps": {
          "from": "00:01:52,260",
          "to": "00:01:55,500"
        },
        "offsets": {
          "from": 112260,
          "to": 115500
        },
        "text": "أصلاً، أو تكون إنت اللي مكريه الـ Container ده وعارف إيه"
      },
      {
        "timestamps": {
          "from": "00:01:55,500",
          "to": "00:01:59,820"
        },
        "offsets": {
          "from": 115500,
          "to": 119820
        },
        "text": "الـ Application اللي إنت عايز تعمل لها Run جوه الـ Container ده. بيبقى عندي"
      },
      {
        "timestamps": {
          "from": "00:01:59,820",
          "to": "00:02:04,320"
        },
        "offsets": {
          "from": 119820,
          "to": 124320
        },
        "text": "Docker container stop لو أنا عايز أوقف الـ Container، و Docker container"
      },
      {
        "timestamps": {
          "from": "00:02:04,320",
          "to": "00:02:06,900"
        },
        "offsets": {
          "from": 124320,
          "to": 126900
        },
        "text": "start لو عايز أشغل الـ Container وفي الآخر لو عايز أمسحه عندي"
      },
      {
        "timestamps": {
          "from": "00:02:06,900",
          "to": "00:02:14,700"
        },
        "offsets": {
          "from": 126900,
          "to": 134700
        },
        "text": "الـ rm. ده كده مقارنة سريعة باللي إحنا كنا"
      },
      {
        "timestamps": {
          "from": "00:02:14,700",
          "to": "00:02:24,120"
        },
        "offsets": {
          "from": 134700,
          "to": 144120
        },
        "text": "اتكلمنا عليه، إن بيبقى الـ Host بتاعك أياً كانت التكنولوجيا"
      },
      {
        "timestamps": {
          "from": "00:02:24,120",
          "to": "00:02:27,960"
        },
        "offsets": {
          "from": 144120,
          "to": 147960
        },
        "text": "اللي إنت بتستخدمها هي إيه، وبعد كده الـ Docker Engine"
      },
      {
        "timestamps": {
          "from": "00:02:27,960",
          "to": "00:02:34,080"
        },
        "offsets": {
          "from": 147960,
          "to": 154080
        },
        "text": "وجواه بيبقى فيه الـ Application. الـ Container بيبقى عبارة عن الـ Image"
      },
      {
        "timestamps": {
          "from": "00:02:34,080",
          "to": "00:02:38,160"
        },
        "offsets": {
          "from": 154080,
          "to": 158160
        },
        "text": "وعليها الـ Container layers. ده شرحناه قبل كده واتكلمنا"
      },
      {
        "timestamps": {
          "from": "00:02:38,160",
          "to": "00:02:47,340"
        },
        "offsets": {
          "from": 158160,
          "to": 167340
        },
        "text": "على الموضوع ده قبل كده. وشوفنا وجربنا قبل كده إننا ندخل"
      },
      {
        "timestamps": {
          "from": "00:02:47,340",
          "to": "00:02:52,080"
        },
        "offsets": {
          "from": 167340,
          "to": 172080
        },
        "text": "مثلاً جوه الـ Terminal لما بقوله دخلني جوه"
      },
      {
        "timestamps": {
          "from": "00:02:52,080",
          "to": "00:02:57,840"
        },
        "offsets": {
          "from": 172080,
          "to": 177840
        },
        "text": "الـ Shell بتاعة الـ Image. لاحظ إن في أوقات بقوله أنا عايز"
      },
      {
        "timestamps": {
          "from": "00:02:57,840",
          "to": "00:03:02,160"
        },
        "offsets": {
          "from": 177840,
          "to": 182160
        },
        "text": "الـ -it وبعد كده بعد اسم الـ Image بكتب له sh أو bash وفي"
      },
      {
        "timestamps": {
          "from": "00:03:02,160",
          "to": "00:03:06,900"
        },
        "offsets": {
          "from": 182160,
          "to": 186900
        },
        "text": "أوقات مابكتبهاش. ليه أحياناً لازم أكتب"
      },
      {
        "timestamps": {
          "from": "00:03:06,900",
          "to": "00:03:09,900"
        },
        "offsets": {
          "from": 186900,
          "to": 189900
        },
        "text": "وليه أحياناً مابكتبش؟ ده برضو هنتعرف عليه أكتر لما نيجي نتكلم"
      },
      {
        "timestamps": {
          "from": "00:03:09,900",
          "to": "00:03:16,800"
        },
        "offsets": {
          "from": 189900,
          "to": 196800
        },
        "text": "على الجزء الجاي والسكشن الجاي بتاع الـ Containerizing يبقى"
      },
      {
        "timestamps": {
          "from": "00:03:16,800",
          "to": "00:03:20,880"
        },
        "offsets": {
          "from": 196800,
          "to": 200880
        },
        "text": "مهم جداً تعرف هنا إن الـ Application اللي هتبقى في الـ Container سواء"
      },
      {
        "timestamps": {
          "from": "00:03:20,880",
          "to": "00:03:24,360"
        },
        "offsets": {
          "from": 200880,
          "to": 204360
        },
        "text": "إنت كتبتها أو هي مكتوبة في مكان ما قبل كده، هي دي اللي هتبقى على"
      },
      {
        "timestamps": {
          "from": "00:03:24,360",
          "to": "00:03:28,140"
        },
        "offsets": {
          "from": 204360,
          "to": 208140
        },
        "text": "أساسها الـ Container ده، لو هي مقفولة الـ Container هيتقفل."
      },
      {
        "timestamps": {
          "from": "00:03:28,140",
          "to": "00:03:33,840"
        },
        "offsets": {
          "from": 208140,
          "to": 213840
        },
        "text": "بتاعة الـ Container خلينا مثلاً نعمل Run للـ Command ده"
      },
      {
        "timestamps": {
          "from": "00:03:33,840",
          "to": "00:03:40,560"
        },
        "offsets": {
          "from": 213840,
          "to": 220560
        },
        "text": "كده. هاخد ده مثلاً نرجع تاني للـ Terminal بتاعتنا. واجي أقوله Docker"
      },
      {
        "timestamps": {
          "from": "00:03:40,560",
          "to": "00:03:43,860"
        },
        "offsets": {
          "from": 220560,
          "to": 223860
        },
        "text": "Run --name sousan هسمي الـ Container بتاعي sousan لأن هو"
      },
      {
        "timestamps": {
          "from": "00:03:43,860",
          "to": "00:03:47,160"
        },
        "offsets": {
          "from": 223860,
          "to": 227160
        },
        "text": "بيديله أسماء ظريفة، أنا مثلاً كنت مسميه بسيوني"
      },
      {
        "timestamps": {
          "from": "00:03:47,160",
          "to": "00:03:49,980"
        },
        "offsets": {
          "from": 227160,
          "to": 229980
        },
        "text": "قبل كده، المرة دي هسميه sousan."
      },
      {
        "timestamps": {
          "from": "00:03:49,980",
          "to": "00:03:54,240"
        },
        "offsets": {
          "from": 229980,
          "to": 234240
        },
        "text": "-it ubuntu:latest وهقوله الـ Application اللي عايزها تعمل Run"
      },
      {
        "timestamps": {
          "from": "00:03:54,240",
          "to": "00:03:57,960"
        },
        "offsets": {
          "from": 234240,
          "to": 237960
        },
        "text": "أو الـ Terminal اللي عايزها تفتح اللي هي الـ bash. تمام؟ وهدوس Enter."
      },
      {
        "timestamps": {
          "from": "00:03:57,960",
          "to": "00:04:02,040"
        },
        "offsets": {
          "from": 237960,
          "to": 242040
        },
        "text": "لاحظ إن أنا بعد ما أعمل كده هو هيسحب الـ Image دي لو هي مش"
      },
      {
        "timestamps": {
          "from": "00:04:02,040",
          "to": "00:04:06,000"
        },
        "offsets": {
          "from": 242040,
          "to": 246000
        },
        "text": "موجودة، هلاقي الـ Image دي موجودة هنا، وهلاقي Container"
      },
      {
        "timestamps": {
          "from": "00:04:06,000",
          "to": "00:04:08,940"
        },
        "offsets": {
          "from": 246000,
          "to": 248940
        },
        "text": "Running أهو. تمام؟ كده بقيت أسرع، خلاص إنت عايز تتأكد هو Running"
      },
      {
        "timestamps": {
          "from": "00:04:08,940",
          "to": "00:04:12,360"
        },
        "offsets": {
          "from": 248940,
          "to": 252360
        },
        "text": "ولا لأ، أقوله docker container ls. تمام؟ هلاقي Container Running أهو"
      },
      {
        "timestamps": {
          "from": "00:04:12,360",
          "to": "00:04:16,020"
        },
        "offsets": {
          "from": 252360,
          "to": 256020
        },
        "text": "حتى اسمه sousan، هو ده الـ ID بتاع الـ Container"
      },
      {
        "timestamps": {
          "from": "00:11:01,920",
          "to": "00:04:19,380"
        },
        "offsets": {
          "from": 256020,
          "to": 259380
        },
        "text": "اللي هو أول 12 Hexadecimal characters من الـ ID بتاع"
      },
      {
        "timestamps": {
          "from": "00:04:19,380",
          "to": "00:04:23,880"
        },
        "offsets": {
          "from": 259380,
          "to": 263880
        },
        "text": "الـ Container، هيدخلني على الـ Terminal بتاعة الـ Container، قادر إن أنا آجي"
      },
      {
        "timestamps": {
          "from": "00:04:23,880",
          "to": "00:04:27,960"
        },
        "offsets": {
          "from": 263880,
          "to": 267960
        },
        "text": "هنا أقوله كده زي ما كنت بكتب في الـ Example مثلاً Jan"
      },
      {
        "timestamps": {
          "from": "00:04:27,960",
          "to": "00:04:37,500"
        },
        "offsets": {
          "from": 267960,
          "to": 277500
        },
        "text": "مثلاً 25th، أوكي ممكن أعمل echo لده كده"
      },
      {
        "timestamps": {
          "from": "00:04:37,500",
          "to": "00:04:42,840"
        },
        "offsets": {
          "from": 277500,
          "to": 282840
        },
        "text": "مثلاً لـ file. أقوله مثلاً اكتب الكلام ده في file وأقوله"
      },
      {
        "timestamps": {
          "from": "00:04:42,840",
          "to": "00:04:49,500"
        },
        "offsets": {
          "from": 282840,
          "to": 289500
        },
        "text": "مثلاً file. أنا كده شغال جوه الـ Container، يعني لو عملت ls هتلاقي"
      },
      {
        "timestamps": {
          "from": "00:04:49,500",
          "to": "00:04:54,480"
        },
        "offsets": {
          "from": 289500,
          "to": 294480
        },
        "text": "الـ file موجود. بس لو مسحت الـ Container ده الـ file ده هيروح."
      },
      {
        "timestamps": {
          "from": "00:04:54,480",
          "to": "00:04:56,880"
        },
        "offsets": {
          "from": 294480,
          "to": 296880
        },
        "text": "ودي من النقاط اللي إحنا عايزين نحلها. يعني دي من"
      },
      {
        "timestamps": {
          "from": "00:04:56,880",
          "to": "00:04:59,040"
        },
        "offsets": {
          "from": 296880,
          "to": 299040
        },
        "text": "الإشكالات اللي إحنا عايزين نحلها، زي إن إحنا نشوف عندنا"
      },
      {
        "timestamps": {
          "from": "00:04:59,040",
          "to": "00:05:05,460"
        },
        "offsets": {
          "from": 299040,
          "to": 305460
        },
        "text": "للـ Container. لأن كده مش ده اللي إنت عايزه. يبقى دي"
      },
      {
        "timestamps": {
          "from": "00:10:00,000",
          "to": "00:10:05,400"
        },
        "offsets": {
          "from": 600000,
          "to": 605400
        },
        "text": "للـ Container. لأن كده مش ده اللي إنت عايزه. يبقى دي"
      },
      {
        "timestamps": {
          "from": "00:10:05,400",
          "to": "00:10:09,540"
        },
        "offsets": {
          "from": 605400,
          "to": 609540
        },
        "text": "فكرة الـ Container. إحنا شفنا كل الكلام ده قبل كده. من"
      },
      {
        "timestamps": {
          "from": "00:10:09,540",
          "to": "00:10:12,060"
        },
        "offsets": {
          "from": 609540,
          "to": 612060
        },
        "text": "ضمن الحاجات برضه اللي تعرفها هي موضوع إنك تعمل stop"
      },
      {
        "timestamps": {
          "from": "00:10:12,060",
          "to": "00:10:14,340"
        },
        "offsets": {
          "from": 612060,
          "to": 614340
        },
        "text": "للـ Container. إنك تعمل stop للـ Container. افتكر إحنا كنا"
      },
      {
        "timestamps": {
          "from": "00:10:14,340",
          "to": "00:10:17,880"
        },
        "offsets": {
          "from": 614340,
          "to": 617880
        },
        "text": "اتكلمنا لما اتكلمنا على موضوع الـ Namespaces. قلنا إنه بتبقى"
      },
      {
        "timestamps": {
          "from": "00:10:17,880",
          "to": "00:10:22,380"
        },
        "offsets": {
          "from": 617880,
          "to": 622380
        },
        "text": "فيه Signal زي ما الـ Kernel بيبعتها لـ Group معينة لـ Process"
      },
      {
        "timestamps": {
          "from": "00:10:22,380",
          "to": "00:10:25,860"
        },
        "offsets": {
          "from": 622380,
          "to": 625860
        },
        "text": "معينة عشان توقف الـ Process دي. من ضمن الحاجات دي حاجة"
      },
      {
        "timestamps": {
          "from": "00:10:25,860",
          "to": "00:10:31,500"
        },
        "offsets": {
          "from": 625860,
          "to": 631500
        },
        "text": "زي الـ SIGTERM. الـ SIGTERM دي الـ Kernel بيستخدمها عشان يعمل terminate"
      },
      {
        "timestamps": {
          "from": "00:10:31,500",
          "to": "00:10:39,060"
        },
        "offsets": {
          "from": 631500,
          "to": 639060
        },
        "text": "للـ Process. الـ SIGTERM دي بتبقى بيسموها Graceful Stop. اللي هو إنك"
      },
      {
        "timestamps": {
          "from": "00:10:39,060",
          "to": "00:10:43,620"
        },
        "offsets": {
          "from": 639060,
          "to": 643620
        },
        "text": "إنت تلم الحاجات بتاعتك وتظبط حالك علشان أنا عايز"
      },
      {
        "timestamps": {
          "from": "00:10:43,620",
          "to": "00:10:46,560"
        },
        "offsets": {
          "from": 643620,
          "to": 646560
        },
        "text": "أقفل الـ Container ده، أو علشان عايز أعمل terminate للـ Process اللي"
      },
      {
        "timestamps": {
          "from": "00:10:46,560",
          "to": "00:10:52,320"
        },
        "offsets": {
          "from": 646560,
          "to": 652320
        },
        "text": "هي PID 1. تمام؟ اللي هي بالنسبة لي مين PID 1؟ لو رجعت تاني هنا كده"
      },
      {
        "timestamps": {
          "from": "00:10:52,320",
          "to": "00:10:57,800"
        },
        "offsets": {
          "from": 652320,
          "to": 657800
        },
        "text": "لو رجعت هنا تاني ده Container Running، لو قولت له ps هلاقي إنه"
      },
      {
        "timestamps": {
          "from": "00:10:57,800",
          "to": "00:11:01,920"
        },
        "offsets": {
          "from": 657800,
          "to": 661920
        },
        "text": "الـ Process اللي الـ PID بتاعها 1 هي bash اللي أنا كتبتها له."
      },
      {
        "timestamps": {
          "from": "00:11:01,920",
          "to": "00:11:06,180"
        },
        "offsets": {
          "from": 661920,
          "to": 666180
        },
        "text": "وأنا بعمل Run للـ Container، فمعنى إني أعمل Terminate للـ Container ده معناها إن"
      },
      {
        "timestamps": {
          "from": "00:11:06,180",
          "to": "00:11:12,240"
        },
        "offsets": {
          "from": 666180,
          "to": 672240
        },
        "text": "إني أبعت SIGTERM للـ Process اللي هي bash دي. أول ما"
      },
      {
        "timestamps": {
          "from": "00:11:12,240",
          "to": "00:11:16,500"
        },
        "offsets": {
          "from": 672240,
          "to": 676500
        },
        "text": "الـ Process دي يحصل لها Terminate، الـ Container كله هيحصله Terminate. هيستنى عشر"
      },
      {
        "timestamps": {
          "from": "00:11:16,500",
          "to": "00:11:21,060"
        },
        "offsets": {
          "from": 676500,
          "to": 681060
        },
        "text": "ثواني، لو الـ Container مقدرش إنه يعمل Wrap up أو يقفل ويحصل له Terminate"
      },
      {
        "timestamps": {
          "from": "00:11:21,060",
          "to": "00:11:24,900"
        },
        "offsets": {
          "from": 681060,
          "to": 684900
        },
        "text": "والـ Process دي طولت وبقى فيها حاجات كتيرة بتلم وراها ومش عارفين إيه"
      },
      {
        "timestamps": {
          "from": "00:11:24,900",
          "to": "00:11:28,980"
        },
        "offsets": {
          "from": 684900,
          "to": 688980
        },
        "text": "حاجات زي كده، هيبعت Signal تانية اسمها SIGKILL. والـ SIGKILL دي"
      },
      {
        "timestamps": {
          "from": "00:11:28,980",
          "to": "00:11:31,440"
        },
        "offsets": {
          "from": 688980,
          "to": 691440
        },
        "text": "اللي هي زي رصاصة الرحمة كده، إنك هتيجي من ورا الـ Container"
      },
      {
        "timestamps": {
          "from": "00:11:31,440",
          "to": "00:11:36,120"
        },
        "offsets": {
          "from": 691440,
          "to": 696120
        },
        "text": "وتقوم ضربه طلقة في دماغه. تمام؟ فدي الطريقة اللي أنا بعمل"
      },
      {
        "timestamps": {
          "from": "00:11:36,120",
          "to": "00:11:41,100"
        },
        "offsets": {
          "from": 696120,
          "to": 701100
        },
        "text": "بيها Terminate من الـ Graphical Interface لو عايز، أقدر إني آجي"
      },
      {
        "timestamps": {
          "from": "00:11:41,100",
          "to": "00:11:44,940"
        },
        "offsets": {
          "from": 701100,
          "to": 704940
        },
        "text": "من هنا كده وأقول له Stop. هياخد العشر ثواني بتاعته"
      },
      {
        "timestamps": {
          "from": "00:11:44,940",
          "to": "00:11:49,140"
        },
        "offsets": {
          "from": 704940,
          "to": 709140
        },
        "text": "وممكن قبل العشر ثواني، لو قعد أكتر من عشر ثواني الـ Container"
      },
      {
        "timestamps": {
          "from": "00:11:49,140",
          "to": "00:11:54,660"
        },
        "offsets": {
          "from": 709140,
          "to": 714660
        },
        "text": "هياخد الطلقة في رأسه. تمام؟ فكده الـ Container"
      },
      {
        "timestamps": {
          "from": "00:11:54,660",
          "to": "00:11:57,840"
        },
        "offsets": {
          "from": 714660,
          "to": 717840
        },
        "text": "بقى Stopped عندي. أقدر إني Right-click عليه وأقول له"
      },
      {
        "timestamps": {
          "from": "00:11:57,840",
          "to": "00:12:04,560"
        },
        "offsets": {
          "from": 717840,
          "to": 724560
        },
        "text": "Start. تمام؟ الحاجات دي إحنا شفنا الكلام ده برضه قبل"
      },
      {
        "timestamps": {
          "from": "00:12:04,560",
          "to": "00:12:06,780"
        },
        "offsets": {
          "from": 724560,
          "to": 726780
        },
        "text": "كده. فيه من ضمن الحاجات اللي ممكن تعملها، إنك تعمل حاجة"
      },
      {
        "timestamps": {
          "from": "00:12:06,780",
          "to": "00:12:12,960"
        },
        "offsets": {
          "from": 726780,
          "to": 732960
        },
        "text": "اسمها Restart Policy. يحصل إيه لو الـ Container عندك، فيه تلاتة Option اللي"
      },
      {
        "timestamps": {
          "from": "00:12:12,960",
          "to": "00:12:19,800"
        },
        "offsets": {
          "from": 732960,
          "to": 739800
        },
        "text": "هما (no, always, on-failure). دي من ضمن الحاجات اللي بتديك"
      },
      {
        "timestamps": {
          "from": "00:12:19,800",
          "to": "00:12:22,920"
        },
        "offsets": {
          "from": 739800,
          "to": 742920
        },
        "text": "شوية مرونة للـ Container، إنه لو لقى لسبب من الأسباب"
      },
      {
        "timestamps": {
          "from": "00:12:22,920",
          "to": "00:12:29,100"
        },
        "offsets": {
          "from": 742920,
          "to": 749100
        },
        "text": "الـ Container ده وقف بطريقة غير إنك إنت اللي عايز توقفه"
      },
      {
        "timestamps": {
          "from": "00:12:29,100",
          "to": "00:12:33,720"
        },
        "offsets": {
          "from": 749100,
          "to": 753720
        },
        "text": "لكن لو لقى لسبب من الأسباب وإنت مش قاصد، إن"
      },
      {
        "timestamps": {
          "from": "00:12:33,720",
          "to": "00:12:40,080"
        },
        "offsets": {
          "from": 753720,
          "to": 760080
        },
        "text": "حصل Crash فممكن الـ Container يعمل Restart لنفسه. هسيب لك دي برضه"
      },
      {
        "timestamps": {
          "from": "00:12:40,080",
          "to": "00:12:44,880"
        },
        "offsets": {
          "from": 760080,
          "to": 764880
        },
        "text": "عشان تعمل assign للـ Restart بيبقى من الـ Command نفسه اللي بتعمل بيه Run"
      },
      {
        "timestamps": {
          "from": "00:12:44,880",
          "to": "00:12:48,060"
        },
        "offsets": {
          "from": 764880,
          "to": 768060
        },
        "text": "للـ Container. إنك بتقول له docker container run وتديله اسم"
      },
      {
        "timestamps": {
          "from": "00:12:48,060",
          "to": "00:12:52,020"
        },
        "offsets": {
          "from": 768060,
          "to": 772020
        },
        "text": "الـ Container لو عايز مثلاً، وبتستخدم الـ flag اللي هو --restart."
      },
      {
        "timestamps": {
          "from": "00:12:52,020",
          "to": "00:12:57,120"
        },
        "offsets": {
          "from": 772020,
          "to": 777120
        },
        "text": "فتقول له always أو on-failure، وهسيب لك الـ text بتاعها"
      },
      {
        "timestamps": {
          "from": "00:12:57,120",
          "to": "00:12:59,460"
        },
        "offsets": {
          "from": 777120,
          "to": 779460
        },
        "text": "والـ Description بتاعها عشان تعرف الفرق ما بين التلات أنواع."
      },
      {
        "timestamps": {
          "from": "00:12:59,460",
          "to": "00:13:03,360"
        },
        "offsets": {
          "from": 779460,
          "to": 783360
        },
        "text": "شفنا برضه في المثال الأولاني موضوع الـ"
      },
      {
        "timestamps": {
          "from": "00:13:03,360",
          "to": "00:13:07,860"
        },
        "offsets": {
          "from": 783360,
          "to": 787860
        },
        "text": "Web Service example ده اللي هو Nginx. وقلنا إنه من"
      },
      {
        "timestamps": {
          "from": "00:13:07,860",
          "to": "00:13:11,280"
        },
        "offsets": {
          "from": 787860,
          "to": 791280
        },
        "text": "ضمن الحاجات اللي ممكن تعملها برضه إنك تعمل Port Mapping."
      },
      {
        "timestamps": {
          "from": "00:13:11,280",
          "to": "00:13:17,340"
        },
        "offsets": {
          "from": 791280,
          "to": 797340
        },
        "text": "الـ Port Mapping ده هو إنك تعمل mapping للبورت من الـ Host للـ Container."
      },
      {
        "timestamps": {
          "from": "00:13:17,340",
          "to": "00:13:20,760"
        },
        "offsets": {
          "from": 797340,
          "to": 800760
        },
        "text": "الـ Container ممكن يكون Web Service مثلاً زي Nginx وشغال"
      },
      {
        "timestamps": {
          "from": "00:13:20,760",
          "to": "00:13:25,260"
        },
        "offsets": {
          "from": 800760,
          "to": 805260
        },
        "text": "بيعمل Expose لبورت 80 مثلاً. علشان تخلي الـ Container ده متاح"
      },
      {
        "timestamps": {
          "from": "00:13:25,260",
          "to": "00:13:30,960"
        },
        "offsets": {
          "from": 805260,
          "to": 810960
        },
        "text": "من بره من الـ Host نفسه، ممكن تعمل كده بس دي مش أحسن طريقة"
      },
      {
        "timestamps": {
          "from": "00:13:30,960",
          "to": "00:13:34,920"
        },
        "offsets": {
          "from": 810960,
          "to": 814920
        },
        "text": "إني أعمل ده، ولما نيجي نتكلم عن الـ Networking هنشوف طرق تانية"
      },
      {
        "timestamps": {
          "from": "00:13:34,920",
          "to": "00:13:38,460"
        },
        "offsets": {
          "from": 814920,
          "to": 818460
        },
        "text": "أحسن من كده بكتير. بس كتجربة زي ما عملنا قبل"
      },
      {
        "timestamps": {
          "from": "00:13:38,460",
          "to": "00:13:45,480"
        },
        "offsets": {
          "from": 818460,
          "to": 825480
        },
        "text": "كده لو جيت قلت له مثلاً اعمل Run لـ container Nginx"
      },
      {
        "timestamps": {
          "from": "00:13:45,480",
          "to": "00:13:50,280"
        },
        "offsets": {
          "from": 825480,
          "to": 830280
        },
        "text": "وشغله بـ -d يعني الـ Container يشتغل في الـ Background"
      },
      {
        "timestamps": {
          "from": "00:13:50,280",
          "to": "00:13:53,520"
        },
        "offsets": {
          "from": 830280,
          "to": 833520
        },
        "text": "أنا مش محتاج أشوف منه أي output، ودي"
      },
      {
        "timestamps": {
          "from": "00:13:53,520",
          "to": "00:13:58,980"
        },
        "offsets": {
          "from": 833520,
          "to": 838980
        },
        "text": "اللي هي عكس الـ -it. لو جيت قلت له برضه نفس"
      },
      {
        "timestamps": {
          "from": "00:13:58,980",
          "to": "00:14:03,240"
        },
        "offsets": {
          "from": 838980,
          "to": 843240
        },
        "text": "الوضع، اعمل Paste وهات الـ Container ده. هيروح"
      },
      {
        "timestamps": {
          "from": "00:14:03,240",
          "to": "00:14:07,860"
        },
        "offsets": {
          "from": 843240,
          "to": 847860
        },
        "text": "هيعمل Pull للـ Image اللي هي Nginx دي، ويقوم مكاريت Container."
      },
      {
        "timestamps": {
          "from": "00:14:07,860",
          "to": "00:14:13,140"
        },
        "offsets": {
          "from": 847860,
          "to": 853140
        },
        "text": "Based على الـ Nginx هيسميه web server، وحيعمل Expose للـ Port 80."
      },
      {
        "timestamps": {
          "from": "00:14:13,140",
          "to": "00:14:16,800"
        },
        "offsets": {
          "from": 853140,
          "to": 856800
        },
        "text": "80. لو تفتكروا وإحنا بنعمل الكلام ده في"
      },
      {
        "timestamps": {
          "from": "00:14:16,800",
          "to": "00:14:20,760"
        },
        "offsets": {
          "from": 856800,
          "to": 860760
        },
        "text": "اللاب، استعملنا Curl علشان أنا مكنتش عارف أو معنديش Access"
      },
      {
        "timestamps": {
          "from": "00:14:20,760",
          "to": "00:14:24,540"
        },
        "offsets": {
          "from": 860760,
          "to": 864540
        },
        "text": "للـ Graphical Interface بتاع الـ Docker Host. أنا هنا عندي Access للـ Graphical"
      },
      {
        "timestamps": {
          "from": "00:14:24,540",
          "to": "00:14:30,240"
        },
        "offsets": {
          "from": 864540,
          "to": 870240
        },
        "text": "Interface بتاع الـ Docker Host، فاضل إن أنا أروح على الـ Browser"
      },
      {
        "timestamps": {
          "from": "00:14:30,240",
          "to": "00:14:39,120"
        },
        "offsets": {
          "from": 870240,
          "to": 879120
        },
        "text": "وأكتب localhost، الـ Port 80 أو هو الـ Default Port 80."
      },
      {
        "timestamps": {
          "from": "00:14:39,120",
          "to": "00:14:45,120"
        },
        "offsets": {
          "from": 879120,
          "to": 885120
        },
        "text": "وأدوس Enter فيقول لي Welcome to Nginx. الـ Page دي"
      },
      {
        "timestamps": {
          "from": "00:14:45,120",
          "to": "00:14:49,800"
        },
        "offsets": {
          "from": 885120,
          "to": 889800
        },
        "text": "جاية من جوه الـ Container، ليه؟ علشان أنا عملت Mapping للـ Port. فلو أنا على"
      },
      {
        "timestamps": {
          "from": "00:14:49,800",
          "to": "00:14:55,620"
        },
        "offsets": {
          "from": 889800,
          "to": 895620
        },
        "text": "لما هدخل على الـ Port 80، الـ Host هيقوم بعمل Forward للـ Request ده جوه"
      },
      {
        "timestamps": {
          "from": "00:14:55,620",
          "to": "00:14:59,760"
        },
        "offsets": {
          "from": 895620,
          "to": 899760
        },
        "text": "الـ Container وبعدين يرجع لي الـ Response بتاعه. فلو أنا جيت"
      },
      {
        "timestamps": {
          "from": "00:14:59,760",
          "to": "00:15:05,540"
        },
        "offsets": {
          "from": 899760,
          "to": 905540
        },
        "text": "هنا وعملت Stop للـ Container اللي هو Nginx ده."
      },
      {
        "timestamps": {
          "from": "00:20:00,000",
          "to": "00:20:07,500"
        },
        "offsets": {
          "from": 1200000,
          "to": 1207500
        },
        "text": "هنا وعملت Stop للـ Container اللي هو Nginx ده، وعملت"
      },
      {
        "timestamps": {
          "from": "00:20:07,500",
          "to": "00:20:12,300"
        },
        "offsets": {
          "from": 1207500,
          "to": 1212300
        },
        "text": "Refresh هنا هيديني Error. نفس بالضبط اللي إحنا عملناه في"
      },
      {
        "timestamps": {
          "from": "00:20:12,300",
          "to": "00:20:19,200"
        },
        "offsets": {
          "from": 1212300,
          "to": 1219200
        },
        "text": "موضوع الـ Hello Container. فدي حاجة تانية برضه"
      },
      {
        "timestamps": {
          "from": "00:20:19,200",
          "to": "00:20:24,000"
        },
        "offsets": {
          "from": 1219200,
          "to": 1224000
        },
        "text": "من ضمن الحاجات اللي أقدر أدير بيها الـ Container. في مثال هنا"
      },
      {
        "timestamps": {
          "from": "00:20:24,000",
          "to": "00:20:29,400"
        },
        "offsets": {
          "from": 1224000,
          "to": 1229400
        },
        "text": "برضه نعمله، إن ده مثلاً Container لـ SQL Server موجود"
      },
      {
        "timestamps": {
          "from": "00:20:29,400",
          "to": "00:20:59,400"
        },
        "offsets": {
          "from": 1229400,
          "to": 1259400
        },
        "text": "هتلاقي إنه على حسب الـ Configuration..."
      },
      {
        "timestamps": {
          "from": "00:20:59,400",
          "to": "00:21:05,400"
        },
        "offsets": {
          "from": 1259400,
          "to": 1265400
        },
        "text": "وعايز الـ Image تبقى جاية من Microsoft Container Registry"
      },
      {
        "timestamps": {
          "from": "00:21:05,400",
          "to": "00:21:07,400"
        },
        "offsets": {
          "from": 1265400,
          "to": 1267400
        },
        "text": "mcr.microsoft.com"
      },
      {
        "timestamps": {
          "from": "00:21:07,400",
          "to": "00:21:09,400"
        },
        "offsets": {
          "from": 1267400,
          "to": 1269400
        },
        "text": "/mssql ده اسم الـ Repo"
      },
      {
        "timestamps": {
          "from": "00:21:09,400",
          "to": "00:21:11,400"
        },
        "offsets": {
          "from": 1269400,
          "to": 1271400
        },
        "text": "تمام وبعد كده"
      },
      {
        "timestamps": {
          "from": "00:21:11,400",
          "to": "00:21:13,400"
        },
        "offsets": {
          "from": 1271400,
          "to": 1273400
        },
        "text": "/server وعايزه"
      },
      {
        "timestamps": {
          "from": "00:21:13,400",
          "to": "00:21:15,400"
        },
        "offsets": {
          "from": 1273400,
          "to": 1275400
        },
        "text": "2019-latest ده اللي هو الـ Version بتاع"
      },
      {
        "timestamps": {
          "from": "00:21:15,400",
          "to": "00:21:17,400"
        },
        "offsets": {
          "from": 1275400,
          "to": 1277400
        },
        "text": "الـ SQL."
      },
      {
        "timestamps": {
          "from": "00:21:17,400",
          "to": "00:21:19,400"
        },
        "offsets": {
          "from": 1277400,
          "to": 1279400
        },
        "text": "فلو رحت تاني"
      },
      {
        "timestamps": {
          "from": "00:21:19,400",
          "to": "00:21:21,400"
        },
        "offsets": {
          "from": 1279400,
          "to": 1281400
        },
        "text": "على الـ Command Line"
      },
      {
        "timestamps": {
          "from": "00:21:21,400",
          "to": "00:21:23,400"
        },
        "offsets": {
          "from": 1281400,
          "to": 1283400
        },
        "text": "وجيت هنا"
      },
      {
        "timestamps": {
          "from": "00:21:23,400",
          "to": "00:21:27,400"
        },
        "offsets": {
          "from": 1283400,
          "to": 1287400
        },
        "text": "عملت Paste لده"
      },
      {
        "timestamps": {
          "from": "00:21:27,400",
          "to": "00:21:32,680"
        },
        "offsets": {
          "from": 1287400,
          "to": 1292680
        },
        "text": "إنه هيروح يعمل Download للـ Container بتاع الـ SQL"
      },
      {
        "timestamps": {
          "from": "00:21:32,680",
          "to": "00:21:37,120"
        },
        "offsets": {
          "from": 1292680,
          "to": 1297120
        },
        "text": "Server ده، وياخد الـ Data اللي على أساسها بياخد الـ Username"
      },
      {
        "timestamps": {
          "from": "00:21:37,120",
          "to": "00:21:40,180"
        },
        "offsets": {
          "from": 1297120,
          "to": 1300180
        },
        "text": "والـ Password والكلام ده. الـ Username هو sa. وده"
      },
      {
        "timestamps": {
          "from": "00:21:40,180",
          "to": "00:21:43,360"
        },
        "offsets": {
          "from": 1300180,
          "to": 1303360
        },
        "text": "Microsoft SQL للي مش عارفه. وبعد"
      },
      {
        "timestamps": {
          "from": "00:21:43,360",
          "to": "00:21:48,280"
        },
        "offsets": {
          "from": 1303360,
          "to": 1308280
        },
        "text": "كده يقوم عامل Mapping لـ Port 1433 علشان أقدر إن"
      },
      {
        "timestamps": {
          "from": "00:21:48,280",
          "to": "00:21:52,480"
        },
        "offsets": {
          "from": 1308280,
          "to": 1312480
        },
        "text": "أنا أستعمل الـ SQL Server اللي جوه الـ Container ده من بره من الـ Host"
      },
      {
        "timestamps": {
          "from": "00:21:52,480",
          "to": "00:21:56,860"
        },
        "offsets": {
          "from": 1312480,
          "to": 1316860
        },
        "text": "نفسه أو من أي حتة تانية. تمام؟ فلو أنا جيت على"
      },
      {
        "timestamps": {
          "from": "00:21:56,860",
          "to": "00:22:00,820"
        },
        "offsets": {
          "from": 1316860,
          "to": 1320820
        },
        "text": "الـ SQL هنا، الـ Password كانت password. لو جيت هنا"
      },
      {
        "timestamps": {
          "from": "00:22:00,820",
          "to": "00:22:09,160"
        },
        "offsets": {
          "from": 1320820,
          "to": 1329160
        },
        "text": "وقلت له ضيف لي مثلاً Connection لـ SQL Server، فبقول له"
      },
      {
        "timestamps": {
          "from": "00:22:09,160",
          "to": "00:22:14,200"
        },
        "offsets": {
          "from": 1329160,
          "to": 1334200
        },
        "text": "مثلاً الـ Server Name هو '.' (dot) اللي هو الـ Localhost، الماشين"
      },
      {
        "timestamps": {
          "from": "00:22:14,200",
          "to": "00:22:19,300"
        },
        "offsets": {
          "from": 1334200,
          "to": 1339300
        },
        "text": "اللي اسمها Apollo دي، والـ Database name مثلاً هي الـ Master."
      },
      {
        "timestamps": {
          "from": "00:22:19,300",
          "to": "00:22:28,840"
        },
        "offsets": {
          "from": 1339300,
          "to": 1348840
        },
        "text": "Database، SQL Login SA، ومش محتاج."
      },
      {
        "timestamps": {
          "from": "00:22:28,840",
          "to": "00:22:35,200"
        },
        "offsets": {
          "from": 1348840,
          "to": 1355200
        },
        "text": "مش محتاج، خليني أتأكد تاني منها، تقريبًا أنا دوست"
      },
      {
        "timestamps": {
          "from": "00:22:35,200",
          "to": "00:22:40,720"
        },
        "offsets": {
          "from": 1355200,
          "to": 1360720
        },
        "text": "اخترت String غلط أو حاجة، فأنا هعمل تاني وهقوله برضه اسم"
      },
      {
        "timestamps": {
          "from": "00:22:40,720",
          "to": "00:22:45,400"
        },
        "offsets": {
          "from": 1360720,
          "to": 1365400
        },
        "text": "السيرفر ده، ركز بقى المرة دي، دي الـ Master Database بتاعة SQL Server."
      },
      {
        "timestamps": {
          "from": "00:22:45,400",
          "to": "00:22:49,300"
        },
        "offsets": {
          "from": 1365400,
          "to": 1369300
        },
        "text": "دوس Enter، في الـ SQL Login هختار SQL Login، أنت لما"
      },
      {
        "timestamps": {
          "from": "00:22:49,300",
          "to": "00:22:52,960"
        },
        "offsets": {
          "from": 1369300,
          "to": 1372960
        },
        "text": "ما اخترتهاش المرة اللي فاتت، فالـ Username هيبقى SA."
      },
      {
        "timestamps": {
          "from": "00:22:52,960",
          "to": "00:23:00,100"
        },
        "offsets": {
          "from": 1372960,
          "to": 1380100
        },
        "text": "والـ Password هتبقى Password، عايز تسيف الـ Password مش فارق معايا."
      },
      {
        "timestamps": {
          "from": "00:23:00,100",
          "to": "00:23:05,200"
        },
        "offsets": {
          "from": 1380100,
          "to": 1385200
        },
        "text": "يعني الـ Profile Name مش فارق معايا، فبعد ما هخلص كده هلاقي"
      },
      {
        "timestamps": {
          "from": "00:23:05,200",
          "to": "00:23:10,120"
        },
        "offsets": {
          "from": 1385200,
          "to": 1390120
        },
        "text": "إنه بقى على SQL Server، وهلاقي عندي هنا السيستم."
      },
      {
        "timestamps": {
          "from": "00:23:10,120",
          "to": "00:23:15,040"
        },
        "offsets": {
          "from": 1390120,
          "to": 1395040
        },
        "text": "بتاعة SQL Server والـ Logins بقى والكلام ده."
      },
      {
        "timestamps": {
          "from": "00:23:15,040",
          "to": "00:23:20,360"
        },
        "offsets": {
          "from": 1395040,
          "to": 1400360
        },
        "text": "قادر إن أنا أعمل هنا مثلاً Create Database."
      },
      {
        "timestamps": {
          "from": "00:23:20,360",
          "to": "00:23:30,300"
        },
        "offsets": {
          "from": 1400360,
          "to": 1410300
        },
        "text": "هنا وأقوله Execute فالمفروض إنه هنا يكاريت."
      },
      {
        "timestamps": {
          "from": "00:23:30,300",
          "to": "00:23:35,300"
        },
        "offsets": {
          "from": 1410300,
          "to": 1415300
        },
        "text": "لو جيت عملت كده هلاقي فيه Database اسمها Test DB أو"
      },
      {
        "timestamps": {
          "from": "00:23:35,300",
          "to": "00:23:43,100"
        },
        "offsets": {
          "from": 1415300,
          "to": 1423100
        },
        "text": "DB. وطبعاً الـ Database دي فاضية مفيش أي حاجة خالص، وقادر إن"
      },
      {
        "timestamps": {
          "from": "00:23:43,100",
          "to": "00:23:48,200"
        },
        "offsets": {
          "from": 1423100,
          "to": 1428200
        },
        "text": "أنا أتعامل عادي مع SQL Server خالص. إنما"
      },
      {
        "timestamps": {
          "from": "00:23:48,200",
          "to": "00:23:54,260"
        },
        "offsets": {
          "from": 1428200,
          "to": 1434260
        },
        "text": "لو أنا جيت في Docker هنا ورحت عملت مثلاً Stop للـ Container ده."
      },
      {
        "timestamps": {
          "from": "00:23:54,260",
          "to": "00:24:00,920"
        },
        "offsets": {
          "from": 1434260,
          "to": 1440920
        },
        "text": "ورجعت تاني على SQL Server عندي وعملت Refresh هلاقي"
      },
      {
        "timestamps": {
          "from": "00:24:00,920",
          "to": "00:24:08,300"
        },
        "offsets": {
          "from": 1440920,
          "to": 1448300
        },
        "text": "إيه اللي حصل؟ مش هيرجع. فدي برضه بحاول أوريكوا أكتر"
      },
      {
        "timestamps": {
          "from": "00:24:08,300",
          "to": "00:24:14,540"
        },
        "offsets": {
          "from": 1448300,
          "to": 1454540
        },
        "text": "من Example على إزاي ممكن أستعمل الـ Containers عشان أنت"
      },
      {
        "timestamps": {
          "from": "00:24:14,540",
          "to": "00:24:19,760"
        },
        "offsets": {
          "from": 1454540,
          "to": 1459760
        },
        "text": "يبقى عندك فكرة كويسة إزاي فكرة الـ Containers دي ممكن تكون"
      },
      {
        "timestamps": {
          "from": "00:24:19,760",
          "to": "00:24:24,620"
        },
        "offsets": {
          "from": 1459760,
          "to": 1464620
        },
        "text": "مفيدة. بص أنا عملت الـ SQL في ثواني، مسافة الـ Download بس، وبقى"
      },
      {
        "timestamps": {
          "from": "00:24:24,620",
          "to": "00:24:29,180"
        },
        "offsets": {
          "from": 1464620,
          "to": 1469180
        },
        "text": "عندي SQL Server شغال، فتخيل. يعني في آخر الفيديو ده"
      },
      {
        "timestamps": {
          "from": "00:24:29,180",
          "to": "00:24:37,100"
        },
        "offsets": {
          "from": 1469180,
          "to": 1477100
        },
        "text": "نبدأ نشوف تطبيقات أكتر لـ Python، وكالعادة برضه"
      },
      {
        "timestamps": {
          "from": "00:24:37,100",
          "to": "00:24:37,100"
        },
        "offsets": {
          "from": 1477100,
          "to": 1477100
        },
        "text": "قادر إن أنا أعمل الـ Inspect ده، وشفنا الـ Inspect إزاي."
      },
      {
        "timestamps": {
          "from": "00:24:37,100",
          "to": "00:25:07,100"
        },
        "offsets": {
          "from": 1477100,
          "to": 1507100
        },
        "text": "وقدرت أعمل الـ Inspection ده، وشفنا الـ Inspect إزاي."
      },
      {
        "timestamps": {
          "from": "00:30:00,000",
          "to": "00:30:07,500"
        },
        "offsets": {
          "from": 1800000,
          "to": 1807500
        },
        "text": "لو هو أو f- عشان تعمل Force حتى لو كان فيه Container الـ Status بتاعته Attached."
      },
      {
        "timestamps": {
          "from": "00:30:07,500",
          "to": "00:30:11,800"
        },
        "offsets": {
          "from": 1807500,
          "to": 1811800
        },
        "text": "تمام فده كان فيما يخص الـ Containers."
      }
    ]
  },
  {
    "id": 11,
    "title": "Network",
    "duration": 2631.0,
    "isReady": false,
    "transcription": []
  },
  {
    "id": 12,
    "title": "Storage",
    "duration": 2091.0,
    "isReady": true,
    "transcription": [
      {
        "timestamps": {
          "from": "00:00:00,000",
          "to": "00:00:10,460"
        },
        "offsets": {
          "from": 0,
          "to": 10460
        },
        "text": "تعالوا نتكلم أكتر شوية عن الـ Container Volumes والـ Storage، نقطة مهمة كررناها كتير قبل كده بس خلينا نعيد عليها مرة تانية."
      },
      {
        "timestamps": {
          "from": "00:00:10,460",
          "to": "00:00:16,880"
        },
        "offsets": {
          "from": 10460,
          "to": 16880
        },
        "text": "الـ Containers متصممة إن هي تبقى Isolated و Immutable، و Immutable يعني مش Read/Write."
      },
      {
        "timestamps": {
          "from": "00:00:16,880",
          "to": "00:00:25,260"
        },
        "offsets": {
          "from": 16880,
          "to": 25260
        },
        "text": "الهدف من الـ Container إنه بيـ Simulate الـ Application، زي مثلاً الـ Python Container هو Python Application."
      },
      {
        "timestamps": {
          "from": "00:00:25,260",
          "to": "00:00:35,620"
        },
        "offsets": {
          "from": 25260,
          "to": 35620
        },
        "text": "الـ Nginx Container هو Nginx Application، المفروض إنه بيؤدي غرضه وبيخرج، حتى كمان بيتقال على الـ Containers إنها Stateless."
      },
      {
        "timestamps": {
          "from": "00:00:35,620",
          "to": "00:00:41,680"
        },
        "offsets": {
          "from": 35620,
          "to": 41680
        },
        "text": "الـ Concept بتاع Stateless و Stateful ده هنتكلم عنه أكتر لما نتكلم على الـ Services في الـ Docker Compose."
      },
      {
        "timestamps": {
          "from": "00:00:41,680",
          "to": "00:00:45,900"
        },
        "offsets": {
          "from": 41680,
          "to": 45900
        },
        "text": "بس فكرة الـ Container إنه بيبقى Isolated وبيؤدي وظيفة واحدة وبيخرج."
      },
      {
        "timestamps": {
          "from": "00:00:45,900",
          "to": "00:00:49,160"
        },
        "offsets": {
          "from": 45900,
          "to": 49160
        },
        "text": "علاقته بالـ Storage المفروض متبقاش علاقة دائمة."
      },
      {
        "timestamps": {
          "from": "00:00:49,160",
          "to": "00:00:54,920"
        },
        "offsets": {
          "from": 49160,
          "to": 54920
        },
        "text": "أي حاجة بتتكريت جوه الـ Container بيبقى عمرها من عمر الـ Container نفسه."
      },
      {
        "timestamps": {
          "from": "00:00:54,920",
          "to": "00:00:58,880"
        },
        "offsets": {
          "from": 54920,
          "to": 58880
        },
        "text": "بتعيش طول ما هو عايش وبتموت مع الـ Container لما"
      },
      {
        "timestamps": {
          "from": "00:00:58,880",
          "to": "00:01:04,160"
        },
        "offsets": {
          "from": 58880,
          "to": 64160
        },
        "text": "الـ Container بيتشال. لكن في أوقات كتيرة بتحتاج إن"
      },
      {
        "timestamps": {
          "from": "00:01:04,160",
          "to": "00:01:08,720"
        },
        "offsets": {
          "from": 64160,
          "to": 68720
        },
        "text": "تحتاج إنها تكتب حاجة والـ Storage دي تبقى"
      },
      {
        "timestamps": {
          "from": "00:01:08,720",
          "to": "00:01:11,960"
        },
        "offsets": {
          "from": 68720,
          "to": 71960
        },
        "text": "منفصلة، الـ Lifecycle بتاعتها منفصلة عن الـ Lifecycle بتاعة"
      },
      {
        "timestamps": {
          "from": "00:01:11,960",
          "to": "00:01:14,960"
        },
        "offsets": {
          "from": 71960,
          "to": 74960
        },
        "text": "الـ Container، مش لما الـ Container يموت الـ Lifecycle هي كمان"
      },
      {
        "timestamps": {
          "from": "00:01:14,960",
          "to": "00:01:23,660"
        },
        "offsets": {
          "from": 74960,
          "to": 83660
        },
        "text": "تموت. وعشان كده Docker بيقدم حلول بتخلي الـ Container يقدر"
      },
      {
        "timestamps": {
          "from": "00:01:23,660",
          "to": "00:01:29,060"
        },
        "offsets": {
          "from": 83660,
          "to": 89060
        },
        "text": "إنه يكتب بره الـ Container، تمام؟ لكن قبل ما نيجي للحتة دي"
      },
      {
        "timestamps": {
          "from": "00:01:29,060",
          "to": "00:01:34,820"
        },
        "offsets": {
          "from": 89060,
          "to": 94820
        },
        "text": "خلينا نتكلم على نوعين داتا في الـ Container. في عندي نوع اللي هو"
      },
      {
        "timestamps": {
          "from": "00:01:34,820",
          "to": "00:01:40,640"
        },
        "offsets": {
          "from": 94820,
          "to": 100640
        },
        "text": "الـ Ephemeral Data، هو اللي إحنا قلنا عليه، الداتا اللي عمرها من عمر"
      },
      {
        "timestamps": {
          "from": "00:01:40,640",
          "to": "00:01:46,040"
        },
        "offsets": {
          "from": 100640,
          "to": 106040
        },
        "text": "الـ Container نفسه. أمثلة عليها كنا شفناها لما عملنا"
      },
      {
        "timestamps": {
          "from": "00:01:46,040",
          "to": "00:01:50,120"
        },
        "offsets": {
          "from": 106040,
          "to": 110120
        },
        "text": "Copy لفايل من الـ Docker Host لجوه الـ Docker Container. هو"
      },
      {
        "timestamps": {
          "from": "00:01:50,120",
          "to": "00:01:55,160"
        },
        "offsets": {
          "from": 110120,
          "to": 115160
        },
        "text": "دخل جوه الـ Docker Container، بس لو عملت Remove للـ Container ده"
      },
      {
        "timestamps": {
          "from": "00:01:55,160",
          "to": "00:02:00,380"
        },
        "offsets": {
          "from": 115160,
          "to": 120380
        },
        "text": "خلاص الفايل هيتشال معاه. ليه بقى بيحصل الكلام ده؟ ليه الداتا"
      },
      {
        "timestamps": {
          "from": "00:02:00,380",
          "to": "00:02:03,140"
        },
        "offsets": {
          "from": 120380,
          "to": 123140
        },
        "text": "اللي بيكريتها الـ Container جواه بتموت مع الـ Container"
      },
      {
        "timestamps": {
          "from": "00:02:03,140",
          "to": "00:02:08,180"
        },
        "offsets": {
          "from": 123140,
          "to": 128180
        },
        "text": "نفسه؟ اللي بيحصل إننا لو رجعنا للـ Architecture الأصلي بتاع"
      },
      {
        "timestamps": {
          "from": "00:02:08,180",
          "to": "00:02:11,000"
        },
        "offsets": {
          "from": 128180,
          "to": 131000
        },
        "text": "الـ Image، إنت لو سحبت مثلاً Image Python زي ما إحنا"
      },
      {
        "timestamps": {
          "from": "00:01:11,000",
          "to": "00:02:15,080"
        },
        "offsets": {
          "from": 131000,
          "to": 135080
        },
        "text": "عملنا، الـ Image بتاعت Python دي بتبقى عبارة عن Layers، وقلنا"
      },
      {
        "timestamps": {
          "from": "00:02:15,080",
          "to": "00:02:18,440"
        },
        "offsets": {
          "from": 135080,
          "to": 138440
        },
        "text": "إن الـ Image كلها بتبقى عبارة عن الـ File System اللي فيه الـ Layers دي"
      },
      {
        "timestamps": {
          "from": "00:02:18,440",
          "to": "00:02:22,820"
        },
        "offsets": {
          "from": 138440,
          "to": 142820
        },
        "text": "والـ Layers دي عبارة عن الـ File System. الـ Image دي كلها لما"
      },
      {
        "timestamps": {
          "from": "00:02:22,820",
          "to": "00:02:28,580"
        },
        "offsets": {
          "from": 142820,
          "to": 148580
        },
        "text": "بتكريت Container من الـ Image اللي هي Python دي، اللي بيحصل إنه بيكريت"
      },
      {
        "timestamps": {
          "from": "00:02:28,580",
          "to": "00:02:34,820"
        },
        "offsets": {
          "from": 148580,
          "to": 154820
        },
        "text": "Layer زيادة، الـ Layer دي بتبقى إضافة فوق الـ Image، وهو ده"
      },
      {
        "timestamps": {
          "from": "00:02:34,820",
          "to": "00:02:39,860"
        },
        "offsets": {
          "from": 154820,
          "to": 159860
        },
        "text": "بالفعل اللي بيبقى الـ Container. الـ Container بيبقى مجرد Layer إضافية على"
      },
      {
        "timestamps": {
          "from": "00:02:39,860",
          "to": "00:02:43,940"
        },
        "offsets": {
          "from": 159860,
          "to": 163940
        },
        "text": "الـ Layers اللي مسحوب منها الـ Image بتاعت الـ Container ده. في الـ Layer"
      },
      {
        "timestamps": {
          "from": "00:02:43,940",
          "to": "00:02:47,360"
        },
        "offsets": {
          "from": 163940,
          "to": 167360
        },
        "text": "دي بقى هي اللي إنت بتدخل وتكتب فيها وتعمل Copy فيها"
      },
      {
        "timestamps": {
          "from": "00:02:47,360",
          "to": "00:02:53,720"
        },
        "offsets": {
          "from": 167360,
          "to": 173720
        },
        "text": "وتطلع فيها الـ Outputs بتاعتك. الـ Layer دي هي اللي"
      },
      {
        "timestamps": {
          "from": "00:02:53,720",
          "to": "00:02:59,120"
        },
        "offsets": {
          "from": 173720,
          "to": 179120
        },
        "text": "بيبقى عمرها من عمر الـ Container، وبتتكريت الـ Layer دي"
      },
      {
        "timestamps": {
          "from": "00:02:59,120",
          "to": "00:03:08,720"
        },
        "offsets": {
          "from": 179120,
          "to": 188720
        },
        "text": "كـ Folder جوه، وطول ما الـ Container موجود سواء كان Running أو غيره"
      },
      {
        "timestamps": {
          "from": "00:03:08,720",
          "to": "00:03:13,640"
        },
        "offsets": {
          "from": 188720,
          "to": 193640
        },
        "text": "الفولدر ده موجود. لما بتعمل Delete للـ Container ده الفولدر ده كله"
      },
      {
        "timestamps": {
          "from": "00:03:13,640",
          "to": "00:03:22,040"
        },
        "offsets": {
          "from": 193640,
          "to": 202040
        },
        "text": "بيروح، فبالتالي عمر الداتا دي مربوط بعمر الـ Container. تعالوا نشوف ده."
      },
      {
        "timestamps": {
          "from": "00:03:22,040",
          "to": "00:03:26,360"
        },
        "offsets": {
          "from": 202040,
          "to": 206360
        },
        "text": "أنا عندي هنا الجهاز فاضي خالص، نضفنا كل حاجة مطرح ما كنا بنجرب"
      },
      {
        "timestamps": {
          "from": "00:03:26,360",
          "to": "00:03:33,020"
        },
        "offsets": {
          "from": 206360,
          "to": 213020
        },
        "text": "قبل كده. خليني أدخل على المكان اللي الـ Docker فيه بيعمل Maintain"
      },
      {
        "timestamps": {
          "from": "00:03:33,020",
          "to": "00:03:36,680"
        },
        "offsets": {
          "from": 213020,
          "to": 216680
        },
        "text": "للـ Images والـ Layers بتاعتها والـ Storage الخاصة بيها."
      },
      {
        "timestamps": {
          "from": "00:03:36,680",
          "to": "00:03:44,920"
        },
        "offsets": {
          "from": 216680,
          "to": 224920
        },
        "text": "في الـ Container، المكان ده هيكون فيه cd /var/lib"
      },
      {
        "timestamps": {
          "from": "00:03:44,920",
          "to": "00:03:51,180"
        },
        "offsets": {
          "from": 224920,
          "to": 231180
        },
        "text": "Docker. وعشان ده، فمش هعرف أدخل عليه باليوزر"
      },
      {
        "timestamps": {
          "from": "00:03:51,180",
          "to": "00:03:56,340"
        },
        "offsets": {
          "from": 231180,
          "to": 236340
        },
        "text": "العادي، فاضطريت إني أدخل عليه بالـ super user. لو بصيت"
      },
      {
        "timestamps": {
          "from": "00:03:56,340",
          "to": "00:04:02,220"
        },
        "offsets": {
          "from": 236340,
          "to": 242220
        },
        "text": "جوة هنا هلاقي حاجات مهمة بالنسبة لنا، من ضمنها مثلاً الـ"
      },
      {
        "timestamps": {
          "from": "00:04:02,220",
          "to": "00:04:17,580"
        },
        "offsets": {
          "from": 242220,
          "to": 257580
        },
        "text": "Drivers. في Docker بتنزل Drivers معينة زي ما كان فيه"
      },
      {
        "timestamps": {
          "from": "00:04:17,580",
          "to": "00:04:21,520"
        },
        "offsets": {
          "from": 257580,
          "to": 261520
        },
        "text": "Network drivers مختلفة زي ما شفنا من شوية، بس عشان"
      },
      {
        "timestamps": {
          "from": "00:04:21,520",
          "to": "00:04:26,460"
        },
        "offsets": {
          "from": 261520,
          "to": 266460
        },
        "text": "Docker يقدر إنه يعمل represent للـ Container للـ storage اللي برة زي"
      },
      {
        "timestamps": {
          "from": "00:04:26,460",
          "to": "00:04:29,820"
        },
        "offsets": {
          "from": 266460,
          "to": 269820
        },
        "text": "ما في الـ Network كده، عشان الـ Container يشوف الـ Network لازم يكون"
      },
      {
        "timestamps": {
          "from": "00:04:29,820",
          "to": "00:04:35,520"
        },
        "offsets": {
          "from": 269820,
          "to": 275520
        },
        "text": "فيه Driver. فـ الـ Driver المستخدم هو الـ Overlay2."
      },
      {
        "timestamps": {
          "from": "00:04:35,520",
          "to": "00:04:39,660"
        },
        "offsets": {
          "from": 275520,
          "to": 279660
        },
        "text": "ماتتلخبطش ما بينه وما بين بتاع الـ Network، هما الاتنين اسمهم Drivers"
      },
      {
        "timestamps": {
          "from": "00:04:39,660",
          "to": "00:04:47,560"
        },
        "offsets": {
          "from": 279660,
          "to": 287560
        },
        "text": "بس بتاع الـ Storage اسمه Overlay2. جوه هنا هنشوف الفكرة اللي"
      },
      {
        "timestamps": {
          "from": "00:04:47,560",
          "to": "00:04:53,560"
        },
        "offsets": {
          "from": 287560,
          "to": 293560
        },
        "text": "اتكلمنا عليها بخصوص الـ non-persistent data اللي شفناها في الـ Container."
      },
      {
        "timestamps": {
          "from": "00:04:53,560",
          "to": "00:04:57,560"
        },
        "offsets": {
          "from": 293560,
          "to": 297560
        },
        "text": "فلو جيت كده قلت له cd overlay2 و ls"
      },
      {
        "timestamps": {
          "from": "00:04:57,560",
          "to": "00:05:02,560"
        },
        "offsets": {
          "from": 297560,
          "to": 302560
        },
        "text": "هلاقيه فاضي دلوقتي، فيه folder واحد بس system folder اسمه L مالناش دعوة بيه."
      },
      {
        "timestamps": {
          "from": "00:10:00,000",
          "to": "00:10:05,760"
        },
        "offsets": {
          "from": 600000,
          "to": 605760
        },
        "text": "Folder اسمه L مالناش دعوة بيه. دلوقتي خليني أروح أعمل"
      },
      {
        "timestamps": {
          "from": "00:10:05,760",
          "to": "00:10:13,500"
        },
        "offsets": {
          "from": 605760,
          "to": 613500
        },
        "text": "مثلاً هاجي أقول له Docker image"
      },
      {
        "timestamps": {
          "from": "00:10:13,500",
          "to": "00:10:22,320"
        },
        "offsets": {
          "from": 613500,
          "to": 622320
        },
        "text": "عفواً CentOS. هعمل CentOS، هلاقي إن CentOS"
      },
      {
        "timestamps": {
          "from": "00:10:22,320",
          "to": "00:10:25,800"
        },
        "offsets": {
          "from": 622320,
          "to": 625800
        },
        "text": "دي فيها Layer واحدة، الـ Image دي فيها Layer"
      },
      {
        "timestamps": {
          "from": "00:10:25,800",
          "to": "00:10:31,560"
        },
        "offsets": {
          "from": 625800,
          "to": 631560
        },
        "text": "واحدة بس. لو رجعت تاني هنا وعملت ls مرة"
      },
      {
        "timestamps": {
          "from": "00:10:31,560",
          "to": "00:10:34,380"
        },
        "offsets": {
          "from": 631560,
          "to": 634380
        },
        "text": "تانية، هلاقي إنه غير الـ Folder اللي كان موجود قبل كده اللي"
      },
      {
        "timestamps": {
          "from": "00:10:34,380",
          "to": "00:10:37,440"
        },
        "offsets": {
          "from": 634380,
          "to": 637440
        },
        "text": "مالناش دعوة بيه، بقى فيه Folder تاني هنا اسمه كبير زي ما إنت"
      },
      {
        "timestamps": {
          "from": "00:10:37,440",
          "to": "00:10:43,800"
        },
        "offsets": {
          "from": 637440,
          "to": 643800
        },
        "text": "شايف، الـ ID بتاعه. لو دخلت جوه الـ Folder ده"
      },
      {
        "timestamps": {
          "from": "00:10:43,800",
          "to": "00:10:50,220"
        },
        "offsets": {
          "from": 643800,
          "to": 650220
        },
        "text": "وعملت ls هلاقي إن بقى فيه Folder اسمه diff، لو دخلت على"
      },
      {
        "timestamps": {
          "from": "00:10:50,220",
          "to": "00:10:59,520"
        },
        "offsets": {
          "from": 650220,
          "to": 659520
        },
        "text": "الـ directory اللي اسمه diff ده، هلاقي فيه الـ root file system."
      },
      {
        "timestamps": {
          "from": "00:10:59,520",
          "to": "00:11:12,300"
        },
        "offsets": {
          "from": 659520,
          "to": 672300
        },
        "text": "دي اللي لما بتعمل pull للـ Image بتبقى هي الـ layers. خلينا"
      },
      {
        "timestamps": {
          "from": "00:11:12,300",
          "to": "00:11:19,080"
        },
        "offsets": {
          "from": 672300,
          "to": 679080
        },
        "text": "نشوف الكلام ده، هنطلع بره هنا مش محتاج ده خلاص."
      },
      {
        "timestamps": {
          "from": "00:11:19,080",
          "to": "00:11:28,140"
        },
        "offsets": {
          "from": 679080,
          "to": 688140
        },
        "text": "لو جيت هنا، نطلع بره كده، لو جيت هنا وقلت"
      },
      {
        "timestamps": {
          "from": "00:11:28,140",
          "to": "00:11:34,860"
        },
        "offsets": {
          "from": 688140,
          "to": 694860
        },
        "text": "له docker run -it. مش لازم أكتب container"
      },
      {
        "timestamps": {
          "from": "00:11:34,860",
          "to": "00:11:40,500"
        },
        "offsets": {
          "from": 694860,
          "to": 700500
        },
        "text": "بس ماشي، docker run -it --name، خلينا نديله اسم"
      },
      {
        "timestamps": {
          "from": "00:11:40,500",
          "to": "00:11:48,120"
        },
        "offsets": {
          "from": 700500,
          "to": 708120
        },
        "text": "مثلاً centos-c، وأقوله من الـ Image اللي هي centos"
      },
      {
        "timestamps": {
          "from": "00:11:48,120",
          "to": "00:11:57,840"
        },
        "offsets": {
          "from": 708120,
          "to": 717840
        },
        "text": "وأقوله bash. دلوقتي أنا عملت run من الـ Image اللي اسمها centos."
      },
      {
        "timestamps": {
          "from": "00:11:57,840",
          "to": "00:12:05,640"
        },
        "offsets": {
          "from": 717840,
          "to": 725640
        },
        "text": "تمام؟ خلينا نرجع تاني للـ directory ونشوف جواه إيه. هاجي"
      },
      {
        "timestamps": {
          "from": "00:12:05,640",
          "to": "00:12:13,140"
        },
        "offsets": {
          "from": 725640,
          "to": 733140
        },
        "text": "هنا هقوله ls مرة تانية، هلاقي المرة"
      },
      {
        "timestamps": {
          "from": "00:12:13,140",
          "to": "00:12:19,200"
        },
        "offsets": {
          "from": 733140,
          "to": 739200
        },
        "text": "دي كريت لي 2 Folders بأسماء طويلة بالمنظر ده."
      },
      {
        "timestamps": {
          "from": "00:12:19,200",
          "to": "00:12:22,380"
        },
        "offsets": {
          "from": 739200,
          "to": 742380
        },
        "text": "خلينا نشوف الـ Directory التاني اللي هو عمله اللي أوله db"
      },
      {
        "timestamps": {
          "from": "00:12:22,380",
          "to": "00:12:34,120"
        },
        "offsets": {
          "from": 742380,
          "to": 754120
        },
        "text": "7 ده. لو عملت cd db7 مثلاً وبعدين cd diff، هلاقي"
      },
      {
        "timestamps": {
          "from": "00:12:34,120",
          "to": "00:12:38,320"
        },
        "offsets": {
          "from": 754120,
          "to": 758320
        },
        "text": "جوة الـ diff folder ده، يعني جوة الـ Directory ده اللي أنا"
      },
      {
        "timestamps": {
          "from": "00:12:38,320",
          "to": "00:12:41,060"
        },
        "offsets": {
          "from": 758320,
          "to": 761060
        },
        "text": "جواه شوية directories تانية زي dev و link وكلام من ده."
      },
      {
        "timestamps": {
          "from": "00:12:41,060",
          "to": "00:12:50,300"
        },
        "offsets": {
          "from": 761060,
          "to": 770300
        },
        "text": "جوه مش هلاقي حاجة. تمام؟ تعال نرجع"
      },
      {
        "timestamps": {
          "from": "00:12:50,300",
          "to": "00:12:53,600"
        },
        "offsets": {
          "from": 770300,
          "to": 773600
        },
        "text": "للـ Container. هاجي للـ Container اللي أنا فيه ده."
      },
      {
        "timestamps": {
          "from": "00:12:53,600",
          "to": "00:12:58,460"
        },
        "offsets": {
          "from": 773600,
          "to": 778460
        },
        "text": "هاجي أقول له مثلاً أو خلينا نشوف اللي موجودة. هلاقي فيه"
      },
      {
        "timestamps": {
          "from": "00:12:58,460",
          "to": "00:13:06,440"
        },
        "offsets": {
          "from": 778460,
          "to": 786440
        },
        "text": "شوية كده اللي هي بتاعة، هقول له دخلنا كده في، هلاقي"
      },
      {
        "timestamps": {
          "from": "00:13:06,440",
          "to": "00:13:23,300"
        },
        "offsets": {
          "from": 786440,
          "to": 803300
        },
        "text": "إن جوه مثلاً فيه شوية كده. عشان"
      },
      {
        "timestamps": {
          "from": "00:13:23,300",
          "to": "00:13:35,880"
        },
        "offsets": {
          "from": 803300,
          "to": 815880
        },
        "text": "ما نتلخبطش بس."
      },
      {
        "timestamps": {
          "from": "00:13:35,880",
          "to": "00:13:44,760"
        },
        "offsets": {
          "from": 815880,
          "to": 824760
        },
        "text": "تمام؟ هرجع تاني هنا كده للـ Docker هعمل مرة تانية هلاقي جوه، تمام؟"
      },
      {
        "timestamps": {
          "from": "00:13:44,760",
          "to": "00:13:51,660"
        },
        "offsets": {
          "from": 824760,
          "to": 831660
        },
        "text": "خد بالك إحنا فين؟ إحنا جوه ده. هلاقي بقى فيه Folder اسمه. لو"
      },
      {
        "timestamps": {
          "from": "00:13:51,660",
          "to": "00:13:59,220"
        },
        "offsets": {
          "from": 831660,
          "to": 839220
        },
        "text": "دخلت جوه. هلاقي بقى فيه File اسمه. هعمل وأعتقد زي ما أنتم"
      },
      {
        "timestamps": {
          "from": "00:13:59,220",
          "to": "00:14:02,280"
        },
        "offsets": {
          "from": 839220,
          "to": 842280
        },
        "text": "متوقعين يعني هتلاقوا اللي إحنا كتبناه من شوية."
      },
      {
        "timestamps": {
          "from": "00:14:02,280",
          "to": "00:14:08,760"
        },
        "offsets": {
          "from": 842280,
          "to": 848760
        },
        "text": "يبقى الحاجات اللي أنا عمال بعملها جوه ده، التغييرات اللي أنا"
      },
      {
        "timestamps": {
          "from": "00:14:08,760",
          "to": "00:14:19,560"
        },
        "offsets": {
          "from": 848760,
          "to": 859560
        },
        "text": "بغيرها جوه ده في الأصل هي عبارة عن موجود في الـ Container بيأكسس"
      },
      {
        "timestamps": {
          "from": "00:14:19,560",
          "to": "00:14:26,160"
        },
        "offsets": {
          "from": 859560,
          "to": 866160
        },
        "text": "ده وبيعمل جوه تغييرات. كل ما هاجي أعدل في حاجة، التعديلات"
      },
      {
        "timestamps": {
          "from": "00:14:26,160",
          "to": "00:14:31,620"
        },
        "offsets": {
          "from": 866160,
          "to": 871620
        },
        "text": "هتروح في الحتة دي. ودي هي الحتة بتاعة الـ Layer اللي هي. طول ما أنت"
      },
      {
        "timestamps": {
          "from": "00:14:31,620",
          "to": "00:14:36,060"
        },
        "offsets": {
          "from": 871620,
          "to": 876060
        },
        "text": "جوه الـ Container والـ Container مفيش أي مشكلة خالص. Okay؟ اطلع بره"
      },
      {
        "timestamps": {
          "from": "00:14:36,060",
          "to": "00:14:38,200"
        },
        "offsets": {
          "from": 876060,
          "to": 878200
        },
        "text": "كده."
      },
      {
        "timestamps": {
          "from": "00:14:38,200",
          "to": "00:14:48,300"
        },
        "offsets": {
          "from": 878200,
          "to": 888300
        },
        "text": "Okay؟ طول ما أنا جوه الـ Container الـ Folder ده موجود وشغال، عايز"
      },
      {
        "timestamps": {
          "from": "00:14:48,300",
          "to": "00:14:51,780"
        },
        "offsets": {
          "from": 888300,
          "to": 891780
        },
        "text": "توقف الـ Container مفيش مشكلة، تيجي تفتحه تاني هيفضل الـ Layer"
      },
      {
        "timestamps": {
          "from": "00:14:51,780",
          "to": "00:14:54,660"
        },
        "offsets": {
          "from": 891780,
          "to": 894660
        },
        "text": "موجودة وزي الـ Folder عادي ومفيش أي مشكلة خالص. المشكلة بتحصل"
      },
      {
        "timestamps": {
          "from": "00:14:54,660",
          "to": "00:14:59,460"
        },
        "offsets": {
          "from": 894660,
          "to": 899460
        },
        "text": "إمتى بقى؟ بتحصل لما آجي أقول له exit مثلاً من الـ Container ده"
      },
      {
        "timestamps": {
          "from": "00:14:59,460",
          "to": "00:15:03,360"
        },
        "offsets": {
          "from": 899460,
          "to": 903360
        },
        "text": "وبعدين آجي أقوم ماسح الـ Container كله كده على بعضه يعني. Okay؟"
      },
      {
        "timestamps": {
          "from": "00:20:00,000",
          "to": "00:20:06,420"
        },
        "offsets": {
          "from": 1200000,
          "to": 1206420
        },
        "text": "هاجي أو أمسح الـ Container كله كده على بعضه يعني. Okay؟ أو Docker"
      },
      {
        "timestamps": {
          "from": "00:20:06,420",
          "to": "00:20:14,220"
        },
        "offsets": {
          "from": 1206420,
          "to": 1214220
        },
        "text": "Container، Okay؟ وأرجع هنا تاني وأقول له هتروح كلها مع"
      },
      {
        "timestamps": {
          "from": "00:20:14,220",
          "to": "00:20:17,940"
        },
        "offsets": {
          "from": 1214220,
          "to": 1217940
        },
        "text": "الـ Container وعشان كده كنا بنقول إن اللي بتتكريت دي عمرها من عمر"
      },
      {
        "timestamps": {
          "from": "00:20:17,940",
          "to": "00:20:27,420"
        },
        "offsets": {
          "from": 1217940,
          "to": 1227420
        },
        "text": "الـ Container نفسه. فده كده شكل من أشكال، دي الفكرة بتاعته وده السبب"
      },
      {
        "timestamps": {
          "from": "00:20:27,420",
          "to": "00:20:30,300"
        },
        "offsets": {
          "from": 1227420,
          "to": 1230300
        },
        "text": "اللي بيخلي أي حاجة أنت بتعملها جوه الـ Container بتفضل عايشة طول ما"
      },
      {
        "timestamps": {
          "from": "00:20:30,300",
          "to": "00:20:37,260"
        },
        "offsets": {
          "from": 1230300,
          "to": 1237260
        },
        "text": "الـ Container موجود. طب بنبدأ نحل المشكلة دي إزاي؟ أنت أكيد في"
      },
      {
        "timestamps": {
          "from": "00:20:37,260",
          "to": "00:20:40,560"
        },
        "offsets": {
          "from": 1237260,
          "to": 1240560
        },
        "text": "وقت من الأوقات هتحتاج إن يكون عندك الـ Container مثلاً ليه علاقة"
      },
      {
        "timestamps": {
          "from": "00:20:40,560",
          "to": "00:20:43,500"
        },
        "offsets": {
          "from": 1240560,
          "to": 1243500
        },
        "text": "بـ Data سواء هو اللي بيكريت الـ Data أو هو اللي بيشتغل على"
      },
      {
        "timestamps": {
          "from": "00:20:43,500",
          "to": "00:20:47,400"
        },
        "offsets": {
          "from": 1243500,
          "to": 1247400
        },
        "text": "الـ Data دي. والـ Data دي ثابتة ملهاش علاقة بالـ Container. أو"
      },
      {
        "timestamps": {
          "from": "00:20:47,400",
          "to": "00:20:49,740"
        },
        "offsets": {
          "from": 1247400,
          "to": 1249740
        },
        "text": "إن يكون كذا Container عايزين يشوفوا نفس الـ Data مع بعض يعني"
      },
      {
        "timestamps": {
          "from": "00:20:49,740",
          "to": "00:20:52,800"
        },
        "offsets": {
          "from": 1249740,
          "to": 1252800
        },
        "text": "تخيل أنت عندك مثلاً Web Server وعندك Database Server مثلاً يعني"
      },
      {
        "timestamps": {
          "from": "00:20:52,800",
          "to": "00:20:58,380"
        },
        "offsets": {
          "from": 1252800,
          "to": 1258380
        },
        "text": "وهكذا يعني. فأول حل وأسرع حل لحاجة زي كده إنك تعمل حاجة"
      },
      {
        "timestamps": {
          "from": "00:20:58,380",
          "to": "00:21:03,420"
        },
        "offsets": {
          "from": 1258380,
          "to": 1263420
        },
        "text": "اسمها Bind Mount. الـ Bind Mount إنك تعمل جوه"
      },
      {
        "timestamps": {
          "from": "00:21:03,420",
          "to": "00:21:08,520"
        },
        "offsets": {
          "from": 1263420,
          "to": 1268520
        },
        "text": "الـ Container، تعمل Folder من الـ Docker Host يتشاف جوه الـ Container. ويتشاف"
      },
      {
        "timestamps": {
          "from": "00:21:08,520",
          "to": "00:21:12,660"
        },
        "offsets": {
          "from": 1268520,
          "to": 1272660
        },
        "text": "بشكل دائم وبصورة دائمة. Okay؟ وكل ما تغير حاجة في الـ Docker Host"
      },
      {
        "timestamps": {
          "from": "00:21:12,660",
          "to": "00:21:16,740"
        },
        "offsets": {
          "from": 1272660,
          "to": 1276740
        },
        "text": "جوه الـ Container. ده Mounting عادي زي الـ Mounting اللي بيتعمل في"
      },
      {
        "timestamps": {
          "from": "00:21:16,740",
          "to": "00:21:21,540"
        },
        "offsets": {
          "from": 1276740,
          "to": 1281540
        },
        "text": "عادي جداً. Okay؟ فنعمل ده إزاي؟ تعالى ناخد مثال وأعتقد إننا"
      },
      {
        "timestamps": {
          "from": "00:21:21,540",
          "to": "00:21:26,100"
        },
        "offsets": {
          "from": 1281540,
          "to": 1286100
        },
        "text": "كنا خدناه قبل كده، خليني أعمل exit من الـ Mode ده مش محتاجه"
      },
      {
        "timestamps": {
          "from": "00:21:26,100",
          "to": "00:21:32,400"
        },
        "offsets": {
          "from": 1286100,
          "to": 1292400
        },
        "text": "دلوقتي، خليني أدخله بعدين. لو أنا جيت عملت تمام؟"
      },
      {
        "timestamps": {
          "from": "00:21:32,400",
          "to": "00:21:37,800"
        },
        "offsets": {
          "from": 1292400,
          "to": 1297800
        },
        "text": "خليني مثلاً أو خليني أعمل حاجة الأول، أنا كان عندي الـ File"
      },
      {
        "timestamps": {
          "from": "00:21:37,800",
          "to": "00:21:43,440"
        },
        "offsets": {
          "from": 1297800,
          "to": 1303440
        },
        "text": "ده اللي هو file.py ده. لو تفتكروا إحنا عملنا له وعملنا له"
      },
      {
        "timestamps": {
          "from": "00:21:43,440",
          "to": "00:21:45,960"
        },
        "offsets": {
          "from": 1303440,
          "to": 1305960
        },
        "text": "وبعدين قلنا إن أنا كل مرة هاجي أغير في الفايل هحتاج إن أنا"
      },
      {
        "timestamps": {
          "from": "00:21:45,960",
          "to": "00:21:49,500"
        },
        "offsets": {
          "from": 1305960,
          "to": 1309500
        },
        "text": "يا إما أفرمت الـ Container وأعمله من أول وجديد فيشوف التغييرات وده"
      },
      {
        "timestamps": {
          "from": "00:21:49,500",
          "to": "00:21:53,100"
        },
        "offsets": {
          "from": 1309500,
          "to": 1313100
        },
        "text": "طبعاً مش منطقي، فخلينا نعمل حاجة هنا، خلينا مثلاً نـ Create"
      },
      {
        "timestamps": {
          "from": "00:21:53,100",
          "to": "00:21:58,740"
        },
        "offsets": {
          "from": 1313100,
          "to": 1318740
        },
        "text": "مثلاً هنا هسميه مثلاً code، أوكي؟ خلينا ننقل الفايل ده نحطه جوه"
      },
      {
        "timestamps": {
          "from": "00:21:58,740",
          "to": "00:22:04,980"
        },
        "offsets": {
          "from": 1318740,
          "to": 1324980
        },
        "text": "code، هـ Move الفايل ده جوه اللي اسمه code، إنك إنت"
      },
      {
        "timestamps": {
          "from": "00:22:04,980",
          "to": "00:22:11,100"
        },
        "offsets": {
          "from": 1324980,
          "to": 1331100
        },
        "text": "لما تيجي تـ Create الـ Container تقولي الـ Container ده خد الـ Directory ده"
      },
      {
        "timestamps": {
          "from": "00:22:11,100",
          "to": "00:22:13,500"
        },
        "offsets": {
          "from": 1331100,
          "to": 1333500
        },
        "text": "Copy عندك في الـ Container"
      },
      {
        "timestamps": {
          "from": "00:22:13,500",
          "to": "00:22:15,600"
        },
        "offsets": {
          "from": 1333500,
          "to": 1335600
        },
        "text": "بس مش Copy هو بيبقى Mounting"
      },
      {
        "timestamps": {
          "from": "00:22:15,600",
          "to": "00:22:16,840"
        },
        "offsets": {
          "from": 1335600,
          "to": 1336840
        },
        "text": "هو بيبقى كأن"
      },
      {
        "timestamps": {
          "from": "00:22:16,840",
          "to": "00:22:19,120"
        },
        "offsets": {
          "from": 1336840,
          "to": 1339120
        },
        "text": "الـ Container ده"
      },
      {
        "timestamps": {
          "from": "00:22:19,120",
          "to": "00:22:20,820"
        },
        "offsets": {
          "from": 1339120,
          "to": 1340820
        },
        "text": "جواه Shortcut"
      },
      {
        "timestamps": {
          "from": "00:22:20,820",
          "to": "00:22:23,200"
        },
        "offsets": {
          "from": 1340820,
          "to": 1343200
        },
        "text": "للـ Directory اللي موجود في الـ Host"
      },
      {
        "timestamps": {
          "from": "00:22:23,200",
          "to": "00:22:24,940"
        },
        "offsets": {
          "from": 1343200,
          "to": 1344940
        },
        "text": "فمش Copy هو Mount"
      },
      {
        "timestamps": {
          "from": "00:22:24,940",
          "to": "00:22:28,080"
        },
        "offsets": {
          "from": 1344940,
          "to": 1348080
        },
        "text": "أوكي فخليني"
      },
      {
        "timestamps": {
          "from": "00:22:28,080",
          "to": "00:22:29,880"
        },
        "offsets": {
          "from": 1348080,
          "to": 1349880
        },
        "text": "خليني نشوف مثال على كده"
      },
      {
        "timestamps": {
          "from": "00:22:29,880",
          "to": "00:22:31,060"
        },
        "offsets": {
          "from": 1349880,
          "to": 1351060
        },
        "text": "لو جيت قلت له Docker"
      },
      {
        "timestamps": {
          "from": "00:22:31,060",
          "to": "00:22:33,820"
        },
        "offsets": {
          "from": 1351060,
          "to": 1353820
        },
        "text": "container"
      },
      {
        "timestamps": {
          "from": "00:22:33,820",
          "to": "00:22:35,920"
        },
        "offsets": {
          "from": 1353820,
          "to": 1355920
        },
        "text": "run"
      },
      {
        "timestamps": {
          "from": "00:22:35,920",
          "to": "00:22:37,620"
        },
        "offsets": {
          "from": 1355920,
          "to": 1357620
        },
        "text": "-it"
      },
      {
        "timestamps": {
          "from": "00:22:37,620",
          "to": "00:22:39,840"
        },
        "offsets": {
          "from": 1357620,
          "to": 1359840
        },
        "text": "هقول له بقى"
      },
      {
        "timestamps": {
          "from": "00:22:39,840",
          "to": "00:22:44,820"
        },
        "offsets": {
          "from": 1359840,
          "to": 1364820
        },
        "text": "-v أو --volume، والـ v دي يعني for volume، وهقول"
      },
      {
        "timestamps": {
          "from": "00:22:44,820",
          "to": "00:22:49,500"
        },
        "offsets": {
          "from": 1364820,
          "to": 1369500
        },
        "text": "له أنا عايز إنك إنت تحط لي الـ code Directory ده تعمل له"
      },
      {
        "timestamps": {
          "from": "00:22:49,500",
          "to": "00:22:54,540"
        },
        "offsets": {
          "from": 1369500,
          "to": 1374540
        },
        "text": "Shortcut جوه الـ Container، المهم هنا إنك إنت لازم تحط"
      },
      {
        "timestamps": {
          "from": "00:22:54,540",
          "to": "00:23:02,400"
        },
        "offsets": {
          "from": 1374540,
          "to": 1382400
        },
        "text": "الـ Path الكامل من الـ Host للـ Container، عشان نعمل ده خلينا"
      },
      {
        "timestamps": {
          "from": "00:23:02,400",
          "to": "00:23:09,200"
        },
        "offsets": {
          "from": 1382400,
          "to": 1389200
        },
        "text": "نشوف ونتأكد بس الـ Path بتاعي إيه لو أنا قلت له كدة مثلاً code."
      },
      {
        "timestamps": {
          "from": "00:23:09,200",
          "to": "00:23:12,560"
        },
        "offsets": {
          "from": 1389200,
          "to": 1392560
        },
        "text": "أحسن طريقة وأسهل طريقة إنك تعمل كده، فآجي آخد أنا ده كده"
      },
      {
        "timestamps": {
          "from": "00:23:12,560",
          "to": "00:23:23,400"
        },
        "offsets": {
          "from": 1392560,
          "to": 1403400
        },
        "text": "Copy، وأروح هنا كده وأقوله من الـ Host من الـ /home"
      },
      {
        "timestamps": {
          "from": "00:23:23,400",
          "to": "00:23:33,480"
        },
        "offsets": {
          "from": 1403400,
          "to": 1413480
        },
        "text": "/sami/code وديه على /app مثلاً جوه الـ Container، حتى لو كان"
      },
      {
        "timestamps": {
          "from": "00:23:33,480",
          "to": "00:23:36,660"
        },
        "offsets": {
          "from": 1413480,
          "to": 1416660
        },
        "text": "الـ Directory ده مش موجود هو هيـ Create جوه الـ Container، أوكي؟"
      },
      {
        "timestamps": {
          "from": "00:23:36,660",
          "to": "00:23:44,940"
        },
        "offsets": {
          "from": 1416660,
          "to": 1424940
        },
        "text": "وهقوله Run مثلاً Python Container وأنا"
      },
      {
        "timestamps": {
          "from": "00:23:44,940",
          "to": "00:23:48,580"
        },
        "offsets": {
          "from": 1424940,
          "to": 1428580
        },
        "text": "عايز أفتح الـ Python Container مش عايز أفتح أولاً خليها"
      },
      {
        "timestamps": {
          "from": "00:23:48,580",
          "to": "00:23:55,700"
        },
        "offsets": {
          "from": 1428580,
          "to": 1435700
        },
        "text": "Python عادي مش فارق يعني، هيـ Execute طبعاً Python Image لسه"
      },
      {
        "timestamps": {
          "from": "00:23:55,700",
          "to": "00:23:59,500"
        },
        "offsets": {
          "from": 1435700,
          "to": 1439500
        },
        "text": "مش موجودة، هيـ Download الـ Image وبعدين هيفتح لي الـ REPL mode"
      },
      {
        "timestamps": {
          "from": "00:23:59,500",
          "to": "00:24:02,860"
        },
        "offsets": {
          "from": 1439500,
          "to": 1442860
        },
        "text": "بتاع Python عادي لأن هو ده الـ Default command أو الـ Default"
      },
      {
        "timestamps": {
          "from": "00:24:02,860",
          "to": "00:24:11,800"
        },
        "offsets": {
          "from": 1442860,
          "to": 1451800
        },
        "text": "اللي بتشتغل جواه، بعد ما يخلص هيفتح، هدخل هنا أعمل لها Expand فوق"
      },
      {
        "timestamps": {
          "from": "00:24:11,800",
          "to": "00:24:18,460"
        },
        "offsets": {
          "from": 1451800,
          "to": 1458460
        },
        "text": "شوية كده، هدخل على الـ REPL mode، لو جيت قلت له import os"
      },
      {
        "timestamps": {
          "from": "00:24:18,460",
          "to": "00:24:26,500"
        },
        "offsets": {
          "from": 1458460,
          "to": 1466500
        },
        "text": "وقلت له os.listdir ونروح على الـ Path على طول اللي هو كان"
      },
      {
        "timestamps": {
          "from": "00:24:26,500",
          "to": "00:24:36,520"
        },
        "offsets": {
          "from": 1466500,
          "to": 1476520
        },
        "text": "/app فهلاقي إنه فعلاً عمل لي الفولدر وفعلاً جواه"
      },
      {
        "timestamps": {
          "from": "00:24:36,520",
          "to": "00:24:44,480"
        },
        "offsets": {
          "from": 1476520,
          "to": 1484480
        },
        "text": "الفايل، لو تفتكر إحنا كنا قلنا مثلاً لو قولت له"
      },
      {
        "timestamps": {
          "from": "00:24:44,480",
          "to": "00:24:54,240"
        },
        "offsets": {
          "from": 1484480,
          "to": 1494240
        },
        "text": "open('/app/code/file.py')"
      },
      {
        "timestamps": {
          "from": "00:24:54,240",
          "to": "00:24:57,240"
        },
        "offsets": {
          "from": 1494240,
          "to": 1497240
        },
        "text": "file ده .read"
      },
      {
        "timestamps": {
          "from": "00:24:57,240",
          "to": "00:25:04,240"
        },
        "offsets": {
          "from": 1497240,
          "to": 1504240
        },
        "text": "صح؟ على إنه عمل execution للفايل ده."
      },
      {
        "timestamps": {
          "from": "00:30:00,000",
          "to": "00:30:05,640"
        },
        "offsets": {
          "from": 1800000,
          "to": 1805640
        },
        "text": "صح؟ على إنه عمل execution للفايل ده. دلوقتي بقى ودي الحاجة اللي"
      },
      {
        "timestamps": {
          "from": "00:30:05,640",
          "to": "00:30:09,480"
        },
        "offsets": {
          "from": 1805640,
          "to": 1809480
        },
        "text": "إحنا مكناش عارفين نعملها المرة اللي فاتت إن أنا هقول له"
      },
      {
        "timestamps": {
          "from": "00:30:09,480",
          "to": "00:30:17,220"
        },
        "offsets": {
          "from": 1809480,
          "to": 1817220
        },
        "text": "كده مثلاً أعرف أي حاجة، OK؟ وأقوم لما أعمل execute تاني هنا"
      },
      {
        "timestamps": {
          "from": "00:30:17,220",
          "to": "00:30:24,120"
        },
        "offsets": {
          "from": 1817220,
          "to": 1824120
        },
        "text": "من نفس الـ Container هلاقي حصل، لأن هو مباشرة شايف الـ data بتاعته. ده"
      },
      {
        "timestamps": {
          "from": "00:30:24,120",
          "to": "00:30:28,620"
        },
        "offsets": {
          "from": 1824120,
          "to": 1828620
        },
        "text": "ده مش copy ده Mount، OK. فدي طريقة والـ type ده اسمه"
      },
      {
        "timestamps": {
          "from": "00:30:28,620",
          "to": "00:30:33,660"
        },
        "offsets": {
          "from": 1828620,
          "to": 1833660
        },
        "text": "Mount. دلوقتي لو الـ Container ده اتمسح وفتحت واحد تاني"
      },
      {
        "timestamps": {
          "from": "00:30:33,660",
          "to": "00:30:41,820"
        },
        "offsets": {
          "from": 1833660,
          "to": 1841820
        },
        "text": "مكانه برضه هيشتغل عادي مفيش مشكلة، لأن الـ content ده"
      },
      {
        "timestamps": {
          "from": "00:30:41,820",
          "to": "00:30:47,700"
        },
        "offsets": {
          "from": 1841820,
          "to": 1847700
        },
        "text": "أو الـ storage دي عندي هنا على الـ Host ملهاش علاقة بالـ Container. فدي"
      },
      {
        "timestamps": {
          "from": "00:30:47,700",
          "to": "00:30:52,200"
        },
        "offsets": {
          "from": 1847700,
          "to": 1852200
        },
        "text": "برضه طريقة من الطرق اللي بقدر أعمل بيها، بس برضه فيه"
      },
      {
        "timestamps": {
          "from": "00:30:52,200",
          "to": "00:30:56,940"
        },
        "offsets": {
          "from": 1852200,
          "to": 1856940
        },
        "text": "طريقة تانية أحسن من كده وهي إنك تعمل Docker"
      },
      {
        "timestamps": {
          "from": "00:30:56,940",
          "to": "00:31:05,220"
        },
        "offsets": {
          "from": 1856940,
          "to": 1865220
        },
        "text": "Volume. الـ Volume وده هيرجعنا تاني للـ Docker اللي إحنا كنا"
      },
      {
        "timestamps": {
          "from": "00:31:05,220",
          "to": "00:31:08,440"
        },
        "offsets": {
          "from": 1865220,
          "to": 1868440
        },
        "text": "شفناه من شوية، sorry."
      },
      {
        "timestamps": {
          "from": "00:31:08,440",
          "to": "00:31:15,180"
        },
        "offsets": {
          "from": 1868440,
          "to": 1875180
        },
        "text": "الـ Docker Volume هو عبارة عن directory برضه بيكريته"
      },
      {
        "timestamps": {
          "from": "00:31:15,180",
          "to": "00:31:18,240"
        },
        "offsets": {
          "from": 1875180,
          "to": 1878240
        },
        "text": "Docker بس بيكريته في مكان معين، اللي هو المكان اللي إحنا"
      },
      {
        "timestamps": {
          "from": "00:31:18,240",
          "to": "00:31:21,400"
        },
        "offsets": {
          "from": 1878240,
          "to": 1881400
        },
        "text": "كنا فيه، خليني أدخل كده على"
      },
      {
        "timestamps": {
          "from": "00:31:22,200",
          "to": "00:31:28,200"
        },
        "offsets": {
          "from": 1882200,
          "to": 1888200
        },
        "text": "نفس المكان التاني اللي هو cd /var/lib/docker"
      },
      {
        "timestamps": {
          "from": "00:31:28,200",
          "to": "00:31:32,200"
        },
        "offsets": {
          "from": 1888200,
          "to": 1892200
        },
        "text": "وقلنا هنا إن كان فيه directory اسمه volumes"
      },
      {
        "timestamps": {
          "from": "00:31:32,200",
          "to": "00:31:36,200"
        },
        "offsets": {
          "from": 1892200,
          "to": 1896200
        },
        "text": "لو بصيت على volumes دلوقتي"
      },
      {
        "timestamps": {
          "from": "00:31:36,200",
          "to": "00:31:39,200"
        },
        "offsets": {
          "from": 1896200,
          "to": 1899200
        },
        "text": "هلاقي فيه بس شوية metadata database وحاجات زي كده"
      },
      {
        "timestamps": {
          "from": "00:31:39,200",
          "to": "00:31:41,200"
        },
        "offsets": {
          "from": 1899200,
          "to": 1901200
        },
        "text": "مفهوش volumes متكريتة"
      },
      {
        "timestamps": {
          "from": "00:31:41,200",
          "to": "00:31:45,200"
        },
        "offsets": {
          "from": 1901200,
          "to": 1905200
        },
        "text": "علشان أكريت Volume أقدر أجيب هنا كده وأقول له"
      },
      {
        "timestamps": {
          "from": "00:31:45,200",
          "to": "00:31:51,200"
        },
        "offsets": {
          "from": 1905200,
          "to": 1911200
        },
        "text": "docker volume create"
      },
      {
        "timestamps": {
          "from": "00:31:51,200",
          "to": "00:31:57,920"
        },
        "offsets": {
          "from": 1911200,
          "to": 1917920
        },
        "text": "الـ commands متشابهة جداً، Docker سميه مثلاً myvol."
      },
      {
        "timestamps": {
          "from": "00:31:57,920",
          "to": "00:32:02,960"
        },
        "offsets": {
          "from": 1917920,
          "to": 1922960
        },
        "text": "لما هكريت الـ Volume ده هتلاقي حتى عندك على الشمال"
      },
      {
        "timestamps": {
          "from": "00:32:02,960",
          "to": "00:32:06,860"
        },
        "offsets": {
          "from": 1922960,
          "to": 1926860
        },
        "text": "كده بقى فيه هنا Volume وتقدر تدوس كليك عليه"
      },
      {
        "timestamps": {
          "from": "00:32:06,860",
          "to": "00:32:12,800"
        },
        "offsets": {
          "from": 1926860,
          "to": 1932800
        },
        "text": "وتعمل Inspect، ولما تعمل هيقولك الـ myvol اللي إنت كريته ده"
      },
      {
        "timestamps": {
          "from": "00:32:12,800",
          "to": "00:32:16,880"
        },
        "offsets": {
          "from": 1932800,
          "to": 1936880
        },
        "text": "متكريت فين فعلا عندك أصلاً في الـ Host، يعني ده الـ Mount point أهو اللي"
      },
      {
        "timestamps": {
          "from": "00:32:16,880",
          "to": "00:32:22,700"
        },
        "offsets": {
          "from": 1936880,
          "to": 1942700
        },
        "text": "/var/lib/docker/volumes/myvol/_data/ OK؟"
      },
      {
        "timestamps": {
          "from": "00:32:22,700",
          "to": "00:32:27,140"
        },
        "offsets": {
          "from": 1942700,
          "to": 1947140
        },
        "text": "فأقدر إني أرجع هنا تاني وأقول له ls مرة تانية"
      },
      {
        "timestamps": {
          "from": "00:32:27,140",
          "to": "00:32:34,340"
        },
        "offsets": {
          "from": 1947140,
          "to": 1954340
        },
        "text": "فهلاقي myvol، هقول له cd myvol وبعدين ls فهلاقي الـ"
      },
      {
        "timestamps": {
          "from": "00:32:34,340",
          "to": "00:32:40,340"
        },
        "offsets": {
          "from": 1954340,
          "to": 1960340
        },
        "text": "_data. دلوقتي بقى وأنا بكريت الـ Container أقدر إن"
      },
      {
        "timestamps": {
          "from": "00:32:40,340",
          "to": "00:32:43,560"
        },
        "offsets": {
          "from": 1960340,
          "to": 1963560
        },
        "text": "أنا بنفس الـ switch اللي استعملته اللي هو -v"
      },
      {
        "timestamps": {
          "from": "00:32:43,560",
          "to": "00:32:49,260"
        },
        "offsets": {
          "from": 1963560,
          "to": 1969260
        },
        "text": "أقول له مكانه يبقى فين في"
      },
      {
        "timestamps": {
          "from": "00:32:49,260",
          "to": "00:32:53,580"
        },
        "offsets": {
          "from": 1969260,
          "to": 1973580
        },
        "text": "الـ Container. بنفس الطريقة اللي كريت بيها الـ Container من شوية: Docker"
      },
      {
        "timestamps": {
          "from": "00:32:53,580",
          "to": "00:33:04,260"
        },
        "offsets": {
          "from": 1973580,
          "to": 1984260
        },
        "text": "container -it -v المرة دي هقول له من غير"
      },
      {
        "timestamps": {
          "from": "00:33:04,260",
          "to": "00:33:09,720"
        },
        "offsets": {
          "from": 1984260,
          "to": 1989720
        },
        "text": "من غير أي path ولا أي حاجة لأنه خلاص هو عارف ده رايح"
      },
      {
        "timestamps": {
          "from": "00:33:09,720",
          "to": "00:33:13,800"
        },
        "offsets": {
          "from": 1989720,
          "to": 1993800
        },
        "text": "وجاي منين، عارف مكانه فين، وهقول له خلي ده برضه في"
      },
      {
        "timestamps": {
          "from": "00:33:13,800",
          "to": "00:33:19,320"
        },
        "offsets": {
          "from": 1993800,
          "to": 1999320
        },
        "text": "/app/code. وأقول له python. OK؟ والمرة دي خلينا"
      },
      {
        "timestamps": {
          "from": "00:33:19,320",
          "to": "00:33:24,660"
        },
        "offsets": {
          "from": 1999320,
          "to": 2004660
        },
        "text": "مش مهم إن أنا أفتح Python نفسه."
      },
      {
        "timestamps": {
          "from": "00:33:24,660",
          "to": "00:33:32,100"
        },
        "offsets": {
          "from": 2004660,
          "to": 2012100
        },
        "text": "على طول. لو جيت قلت له cd / فهلاقي code. OK?"
      },
      {
        "timestamps": {
          "from": "00:33:32,100",
          "to": "00:33:37,560"
        },
        "offsets": {
          "from": 2012100,
          "to": 2017560
        },
        "text": "cd code. مفيش أي حاجة عشان مفيش عندي حاجة في"
      },
      {
        "timestamps": {
          "from": "00:33:37,560",
          "to": "00:33:43,560"
        },
        "offsets": {
          "from": 2017560,
          "to": 2023560
        },
        "text": "اللي إحنا كريتناه على الـ Host. لو رجعت للـ Host هنا وقلت"
      },
      {
        "timestamps": {
          "from": "00:33:43,560",
          "to": "00:33:52,640"
        },
        "offsets": {
          "from": 2023560,
          "to": 2032640
        },
        "text": "له cd underscore وقلت له مثلاً"
      },
      {
        "timestamps": {
          "from": "00:33:52,640",
          "to": "00:34:06,920"
        },
        "offsets": {
          "from": 2032640,
          "to": 2046920
        },
        "text": "مثلاً volume، وخلينا نبقى مميزين شوية عشان ملخبطش"
      },
      {
        "timestamps": {
          "from": "00:34:06,920",
          "to": "00:34:15,080"
        },
        "offsets": {
          "from": 2046920,
          "to": 2055080
        },
        "text": "نفسنا. دي زي ما هي، وده زي ما هو. في مثلاً file 1"
      },
      {
        "timestamps": {
          "from": "00:34:15,080",
          "to": "00:34:24,320"
        },
        "offsets": {
          "from": 2055080,
          "to": 2064320
        },
        "text": "مثلاً. بقى عندي الفايل ده موجود هنا. هرجع تاني للـ Container"
      },
      {
        "timestamps": {
          "from": "00:34:24,320",
          "to": "00:34:29,660"
        },
        "offsets": {
          "from": 2064320,
          "to": 2069660
        },
        "text": "وهقول له ls هلاقي الفايل موجود. دلوقتي قادر إن أنا أقول له file"
      },
      {
        "timestamps": {
          "from": "00:34:29,660",
          "to": "00:34:35,380"
        },
        "offsets": {
          "from": 2069660,
          "to": 2075380
        },
        "text": "1. هي نفس الفكرة، فكرة مشابهة"
      },
      {
        "timestamps": {
          "from": "00:34:35,380",
          "to": "00:34:43,780"
        },
        "offsets": {
          "from": 2075380,
          "to": 2083780
        },
        "text": "للي إحنا عملناها بس ده شكل احترافي أكتر. وكمان علشان"
      },
      {
        "timestamps": {
          "from": "00:34:43,780",
          "to": "00:34:52,480"
        },
        "offsets": {
          "from": 2083780,
          "to": 2092480
        },
        "text": "لما تبدأ تنقل Data من Docker تاني فمش محتاج إنك تعمل Keep track"
      },
      {
        "timestamps": {
          "from": "00:34:52,480",
          "to": "00:34:58,840"
        },
        "offsets": {
          "from": 2092480,
          "to": 2098840
        },
        "text": "ده فين، فخلاص إحنا عارفين إن كله هيتكاريت في نفس المكان ده"
      },
      {
        "timestamps": {
          "from": "00:34:58,840",
          "to": "00:35:04,720"
        },
        "offsets": {
          "from": 2098840,
          "to": 2104720
        },
        "text": "في أي Docker Host. OK؟ فلما تيجي تنقل الـ Configuration دي"
      },
      {
        "timestamps": {
          "from": "00:40:00,000",
          "to": "00:40:04,800"
        },
        "offsets": {
          "from": 2400000,
          "to": 2404800
        },
        "text": "في أي Docker Host. OK، فلما تيجي الـ Configuration دي على"
      },
      {
        "timestamps": {
          "from": "00:40:04,800",
          "to": "00:40:08,040"
        },
        "offsets": {
          "from": 2404800,
          "to": 2408040
        },
        "text": "أي حتة تانية خلاص إحنا عارفين فين المكان ده بيبقى ثابت في كل"
      },
      {
        "timestamps": {
          "from": "00:40:08,040",
          "to": "00:40:18,900"
        },
        "offsets": {
          "from": 2408040,
          "to": 2418900
        },
        "text": "الـ Linux Host. OK؟ فده شكل الـ Mount اللي إحنا"
      },
      {
        "timestamps": {
          "from": "00:40:18,900",
          "to": "00:40:24,540"
        },
        "offsets": {
          "from": 2418900,
          "to": 2424540
        },
        "text": "شفناه والـ Volumes بتاع Docker Host. Docker create volume. أنا"
      },
      {
        "timestamps": {
          "from": "00:40:24,540",
          "to": "00:40:30,360"
        },
        "offsets": {
          "from": 2424540,
          "to": 2430360
        },
        "text": "رحت كده، خلينا نخرج من هنا خلاص مش محتاجه، وآجي هنا"
      },
      {
        "timestamps": {
          "from": "00:40:30,360",
          "to": "00:40:38,580"
        },
        "offsets": {
          "from": 2430360,
          "to": 2438580
        },
        "text": "أقول له docker volume ls فده هيوريني اللي موجود عندي وقادر"
      },
      {
        "timestamps": {
          "from": "00:40:38,580",
          "to": "00:40:45,180"
        },
        "offsets": {
          "from": 2438580,
          "to": 2445180
        },
        "text": "إن أنا أتعامل معاه زي أي Object تاني في Docker. من الحاجات التانية اللي تقدر تعملها"
      },
      {
        "timestamps": {
          "from": "00:40:45,180",
          "to": "00:40:53,280"
        },
        "offsets": {
          "from": 2445180,
          "to": 2453280
        },
        "text": "برضه إن حتى ده اللي موجود في الـ Docker تقدر إنك كمان تعمله على"
      },
      {
        "timestamps": {
          "from": "00:40:53,280",
          "to": "00:41:01,200"
        },
        "offsets": {
          "from": 2453280,
          "to": 2461200
        },
        "text": "أي Driver تاني مش لازم يكون Local، ممكن كمان يكون بيشاور على Cloud"
      },
      {
        "timestamps": {
          "from": "00:41:01,200",
          "to": "00:41:08,520"
        },
        "offsets": {
          "from": 2461200,
          "to": 2468520
        },
        "text": "أو بيشاور على NFS، فبالطريقة دي هتخلي الـ Container بتاعك إنه"
      },
      {
        "timestamps": {
          "from": "00:41:08,520",
          "to": "00:41:15,840"
        },
        "offsets": {
          "from": 2468520,
          "to": 2475840
        },
        "text": "يشوف Data سواء كانت موجودة عندك على الـ Host أو لا."
      },
      {
        "timestamps": {
          "from": "00:41:15,840",
          "to": "00:41:21,540"
        },
        "offsets": {
          "from": 2475840,
          "to": 2481540
        },
        "text": "دي مراجعة سريعة. إحنا قلنا إن الفكرة"
      },
      {
        "timestamps": {
          "from": "00:41:21,540",
          "to": "00:41:24,840"
        },
        "offsets": {
          "from": 2481540,
          "to": 2484840
        },
        "text": "الأساسية إن الـ Container المفروض إنه ما"
      },
      {
        "timestamps": {
          "from": "00:41:24,840",
          "to": "00:41:31,080"
        },
        "offsets": {
          "from": 2484840,
          "to": 2491080
        },
        "text": "بيتغيرش، والفرق ما بين الـ Container وما بين الـ Image إن الـ Container"
      },
      {
        "timestamps": {
          "from": "00:41:31,080",
          "to": "00:41:42,600"
        },
        "offsets": {
          "from": 2491080,
          "to": 2502600
        },
        "text": "بيبقى فيه زيادة Writable Layer، واللي بيحصل إن الـ Layer دي عمرها من"
      },
      {
        "timestamps": {
          "from": "00:41:42,600",
          "to": "00:41:49,080"
        },
        "offsets": {
          "from": 2502600,
          "to": 2509080
        },
        "text": "عمر الـ Container، وعشان يبقى عندك Persistence فإنت عندك حاجة من اتنين:"
      },
      {
        "timestamps": {
          "from": "00:41:49,080",
          "to": "00:41:53,080"
        },
        "offsets": {
          "from": 2509080,
          "to": 2513080
        },
        "text": "إما إنك تعمل Bind Mount ويكون عندك Directory موجود على"
      },
      {
        "timestamps": {
          "from": "00:41:53,080",
          "to": "00:41:57,080"
        },
        "offsets": {
          "from": 2513080,
          "to": 2517080
        },
        "text": "الـ Host، والـ Directory ده بتعمله Mapping وإنت بتكاريت الـ Container"
      },
      {
        "timestamps": {
          "from": "00:41:57,080",
          "to": "00:42:01,080"
        },
        "offsets": {
          "from": 2517080,
          "to": 2521080
        },
        "text": "تقدر إنك تعمله Mount جوه الـ Container"
      },
      {
        "timestamps": {
          "from": "00:42:01,080",
          "to": "00:42:05,080"
        },
        "offsets": {
          "from": 2521080,
          "to": 2525080
        },
        "text": "وبالتالي هتفصل الـ Lifecycle بتاعة الـ Storage عن"
      },
      {
        "timestamps": {
          "from": "00:42:05,080",
          "to": "00:42:09,080"
        },
        "offsets": {
          "from": 2525080,
          "to": 2529080
        },
        "text": "الـ Lifecycle بتاعة الـ Container. وطريقة تانية"
      },
      {
        "timestamps": {
          "from": "00:42:09,080",
          "to": "00:42:13,080"
        },
        "offsets": {
          "from": 2529080,
          "to": 2533080
        },
        "text": "هي إنك تعمل Docker Volume، وده بيبقى عبارة"
      },
      {
        "timestamps": {
          "from": "00:42:13,080",
          "to": "00:42:17,080"
        },
        "offsets": {
          "from": 2533080,
          "to": 2537080
        },
        "text": "عن Directory بيتكاريت جوه"
      },
      {
        "timestamps": {
          "from": "00:42:17,080",
          "to": "00:42:24,280"
        },
        "offsets": {
          "from": 2537080,
          "to": 2544280
        },
        "text": "الـ Docker Root وتقدر إنك تعمل Attach لأي Third-party Drivers للكلام ده، فبالتالي"
      },
      {
        "timestamps": {
          "from": "00:42:24,280",
          "to": "00:42:29,680"
        },
        "offsets": {
          "from": 2544280,
          "to": 2549680
        },
        "text": "أياً كان إيه اللي هيبقى جوه الـ Directory ده بيشاور على"
      },
      {
        "timestamps": {
          "from": "00:42:29,680",
          "to": "00:42:35,500"
        },
        "offsets": {
          "from": 2549680,
          "to": 2555500
        },
        "text": "فين، سواء كان Mount point أو Shortcut لحاجة على الـ Network."
      },
      {
        "timestamps": {
          "from": "00:42:35,500",
          "to": "00:42:40,000"
        },
        "offsets": {
          "from": 2555500,
          "to": 2560000
        },
        "text": "Cloud أو Shared Storage مثلاً في SAN أو أي شيء من هذا القبيل."
      },
      {
        "timestamps": {
          "from": "00:42:40,000",
          "to": "00:42:46,120"
        },
        "offsets": {
          "from": 2560000,
          "to": 2566120
        },
        "text": "الـ Container هيبقى ليه Access. ليه؟ عملنا Inspect عشان نشوف فين الـ Path بتاع"
      },
      {
        "timestamps": {
          "from": "00:42:46,120",
          "to": "00:42:50,080"
        },
        "offsets": {
          "from": 2566120,
          "to": 2570080
        },
        "text": "الـ Volume اللي إحنا بنـ Createـه. تقدر إن أنت كمان نفس الـ Volume ده"
      },
      {
        "timestamps": {
          "from": "00:42:50,080",
          "to": "00:42:54,820"
        },
        "offsets": {
          "from": 2570080,
          "to": 2574820
        },
        "text": "تعمله على أكتر من Container. فكذا Container يشوفوا نفس الـ Data هي هي."
      },
      {
        "timestamps": {
          "from": "00:42:54,820",
          "to": "00:43:01,720"
        },
        "offsets": {
          "from": 2574820,
          "to": 2581720
        },
        "text": "شفنا وكلمتا برضه على الموضوع ده، إن أنا لو أنا"
      },
      {
        "timestamps": {
          "from": "00:43:01,720",
          "to": "00:43:06,280"
        },
        "offsets": {
          "from": 2581720,
          "to": 2586280
        },
        "text": "عملت Volume واحد بس أقدر أخليه أكتر من Container يقدروا يقروا"
      },
      {
        "timestamps": {
          "from": "00:43:06,280",
          "to": "00:43:12,580"
        },
        "offsets": {
          "from": 2586280,
          "to": 2592580
        },
        "text": "ويكتبوا في نفس الـ Path هو هو. OK؟ فده كان بس حتة زيادة كده"
      },
      {
        "timestamps": {
          "from": "00:43:12,580",
          "to": "00:43:17,160"
        },
        "offsets": {
          "from": 2592580,
          "to": 2597160
        },
        "text": "على موضوع الـ Container Volumes. طيب تعالوا نتنقل بقى لموضوع"
      },
      {
        "timestamps": {
          "from": "00:43:17,160",
          "to": "00:43:22,880"
        },
        "offsets": {
          "from": 2597160,
          "to": 2602880
        },
        "text": "تاني. دلوقتي اللي أنا عايز أعمله إن أنا أـ Build Image من"
      },
      {
        "timestamps": {
          "from": "00:43:22,880",
          "to": "00:43:27,560"
        },
        "offsets": {
          "from": 2602880,
          "to": 2607560
        },
        "text": "Container، أبدأ بـ Container يبدأ بـ Image معينة وعايز أـ Build الـ Application"
      },
      {
        "timestamps": {
          "from": "00:43:27,560",
          "to": "00:43:31,020"
        },
        "offsets": {
          "from": 2607560,
          "to": 2611020
        },
        "text": "بتاعتي. وبعد ما أـ Build الـ Application بتاعتي، أنا عايز أقدر إن أنا"
      },
      {
        "timestamps": {
          "from": "00:43:31,020",
          "to": "00:43:35,840"
        },
        "offsets": {
          "from": 2611020,
          "to": 2615840
        },
        "text": "أعيد استخدام الـ Application دي في أكتر من Environment. طبيعي إنك"
      },
      {
        "timestamps": {
          "from": "00:43:35,840",
          "to": "00:43:39,360"
        },
        "offsets": {
          "from": 2615840,
          "to": 2619360
        },
        "text": "أنت مثلاً لو أنت Developer أو أي حاجة أو Data Engineer أو"
      },
      {
        "timestamps": {
          "from": "00:43:39,360",
          "to": "00:43:44,820"
        },
        "offsets": {
          "from": 2619360,
          "to": 2624820
        },
        "text": "DevOps، هتبقى عندك الـ Environment بتاعتك، هتعمل فيها مثلاً Container مسحوب من"
      },
      {
        "timestamps": {
          "from": "00:43:44,820",
          "to": "00:43:50,220"
        },
        "offsets": {
          "from": 2624820,
          "to": 2630220
        },
        "text": "Image معينة، تبدأ تعدل في الـ Container ده وتحط مثلاً الـ Files بتاعتك، هتحط مثلاً"
      },
      {
        "timestamps": {
          "from": "00:43:50,220",
          "to": "00:43:58,800"
        },
        "offsets": {
          "from": 2630220,
          "to": 2638800
        },
        "text": "الـ Code بتاعك، هتـ Create الـ Database بتاعتك إلى آخره، لغاية ما الـ Application تبقى جاهزة."
      },
      {
        "timestamps": {
          "from": "00:43:58,800",
          "to": "00:44:01,500"
        },
        "offsets": {
          "from": 2638800,
          "to": 2641500
        },
        "text": "بعد ما الـ Application تبقى Ready والـ Container خلاص بيعمل اللي أنت عايز"
      },
      {
        "timestamps": {
          "from": "00:44:01,500",
          "to": "00:44:05,940"
        },
        "offsets": {
          "from": 2641500,
          "to": 2645940
        },
        "text": "تعمله، أنت عايز بقى تعيد استخدام الـ Container ده. فواحدة من الطرق اللي"
      },
      {
        "timestamps": {
          "from": "00:44:05,940",
          "to": "00:44:10,080"
        },
        "offsets": {
          "from": 2645940,
          "to": 2650080
        },
        "text": "تخليك تعمل حاجة زي كده إنك أنت تحول الـ Container ده بعد ما تعدل وتلعب فيه"
      },
      {
        "timestamps": {
          "from": "00:44:10,080",
          "to": "00:44:15,240"
        },
        "offsets": {
          "from": 2650080,
          "to": 2655240
        },
        "text": "وتعمل الـ Setup بتاعك كله ويبقى جاهز، تحول الـ Container لـ Image، والـ Image دي"
      },
      {
        "timestamps": {
          "from": "00:44:15,240",
          "to": "00:44:20,220"
        },
        "offsets": {
          "from": 2655240,
          "to": 2660220
        },
        "text": "ينفع إنك أنت تسحبها في أكتر من حتة، في أكتر من Environment أو أي"
      },
      {
        "timestamps": {
          "from": "00:44:20,220",
          "to": "00:44:25,620"
        },
        "offsets": {
          "from": 2660220,
          "to": 2665620
        },
        "text": "Machine تانية، وتعيد استخدامها مرة تانية من غير ما تعيد كل الشغل من أول"
      },
      {
        "timestamps": {
          "from": "00:44:25,620",
          "to": "00:44:31,860"
        },
        "offsets": {
          "from": 2665620,
          "to": 2671860
        },
        "text": "وجديد في Environments مختلفة. واحدة من الطرق دي هي إننا نـ Build"
      },
      {
        "timestamps": {
          "from": "00:44:31,860",
          "to": "00:44:36,480"
        },
        "offsets": {
          "from": 2671860,
          "to": 2676480
        },
        "text": "Container Image، يعني أبدأ أعدل فيها زي ما أنا عايز وبعدين"
      },
      {
        "timestamps": {
          "from": "00:44:36,480",
          "to": "00:44:41,100"
        },
        "offsets": {
          "from": 2676480,
          "to": 2681100
        },
        "text": "أحول الـ Container ده بعد كل التعديلات دي لـ Image جديدة. هعمل"
      },
      {
        "timestamps": {
          "from": "00:44:41,100",
          "to": "00:44:45,900"
        },
        "offsets": {
          "from": 2681100,
          "to": 2685900
        },
        "text": "ده إزاي؟ هتعامل مع الـ Container معاملة Virtual Machine. فعلاً نبدأ"
      },
      {
        "timestamps": {
          "from": "00:44:45,900",
          "to": "00:44:51,600"
        },
        "offsets": {
          "from": 2685900,
          "to": 2691600
        },
        "text": "كده بـ Python Project صغير. والـ Python Project ده هيبقى Simple Flask"
      },
      {
        "timestamps": {
          "from": "00:44:51,600",
          "to": "00:44:59,160"
        },
        "offsets": {
          "from": 2691600,
          "to": 2699160
        },
        "text": "Application. الـ Flask ده بيعمل Web Pages. وغير إن هو بيعمل Web Pages"
      },
      {
        "timestamps": {
          "from": "00:44:59,160",
          "to": "00:45:08,580"
        },
        "offsets": {
          "from": 2699160,
          "to": 2708580
        },
        "text": "بشكل عام هو كمان جواه الـ Server اللي هو بيـ Run، يعني يخلي الماشين"
      },
      {
        "timestamps": {
          "from": "00:50:00,000",
          "to": "00:50:08,080"
        },
        "offsets": {
          "from": 3000000,
          "to": 3008080
        },
        "text": "بشكل عام هو كمان جواه الـ Server اللي هو بيـ Run، يعني يخلي"
      },
      {
        "timestamps": {
          "from": "00:50:08,080",
          "to": "00:50:15,040"
        },
        "offsets": {
          "from": 3008080,
          "to": 3015040
        },
        "text": "الـ Machine بتاعتك تشغل اللي أنت كاتبه جواه. أنا شخصياً ما أعرفش"
      },
      {
        "timestamps": {
          "from": "00:50:15,040",
          "to": "00:50:21,140"
        },
        "offsets": {
          "from": 3015040,
          "to": 3021140
        },
        "text": "أي حاجة خالص عن الـ Flask ولذلك استعملت الـ Example بتاع الـ Documentation."
      },
      {
        "timestamps": {
          "from": "00:50:21,140",
          "to": "00:50:27,700"
        },
        "offsets": {
          "from": 3021140,
          "to": 3027700
        },
        "text": "أنا جايبه من هناك، هتلاقوه كله عندكم بس هو بسيط خالص يعني حاجة"
      },
      {
        "timestamps": {
          "from": "00:50:27,700",
          "to": "00:50:31,000"
        },
        "offsets": {
          "from": 3027700,
          "to": 3031000
        },
        "text": "بسيطة خالص. وبعد كده هنشوف حاجات أعقد شوية من كده في"
      },
      {
        "timestamps": {
          "from": "00:50:31,000",
          "to": "00:50:35,500"
        },
        "offsets": {
          "from": 3031000,
          "to": 3035500
        },
        "text": "الشغل بتاعنا. فخلينا نعمل إيه؟ خلينا"
      },
      {
        "timestamps": {
          "from": "00:50:35,500",
          "to": "00:50:43,840"
        },
        "offsets": {
          "from": 3035500,
          "to": 3043840
        },
        "text": "آجي كده وأقول له أنا عايز Docker Container Run. وهسمي"
      },
      {
        "timestamps": {
          "from": "00:50:43,840",
          "to": "00:50:51,280"
        },
        "offsets": {
          "from": 3043840,
          "to": 3051280
        },
        "text": "الـ Container ده وهقول له بدأني من Ubuntu مثلاً، والمرة دي أنا عايز أتعامل مع"
      },
      {
        "timestamps": {
          "from": "00:50:51,280",
          "to": "00:50:58,780"
        },
        "offsets": {
          "from": 3051280,
          "to": 3058780
        },
        "text": "الـ Shell مش مع الـ Background، لأن أنا هكتب Code وهعمل"
      },
      {
        "timestamps": {
          "from": "00:50:58,780",
          "to": "00:51:04,420"
        },
        "offsets": {
          "from": 3058780,
          "to": 3064420
        },
        "text": "Update وحاجات زي كده. فأنا عملت فعلاً الـ Container أهو. وأنا كده"
      },
      {
        "timestamps": {
          "from": "00:51:04,420",
          "to": "00:51:08,800"
        },
        "offsets": {
          "from": 3064420,
          "to": 3068800
        },
        "text": "دخلت جوه الـ Container. أول حاجة عايز أعملها طبعاً أتأكد إن"
      },
      {
        "timestamps": {
          "from": "00:51:08,800",
          "to": "00:51:12,460"
        },
        "offsets": {
          "from": 3068800,
          "to": 3072460
        },
        "text": "دي الحاجة الوحيدة اللي أنا مش محتاج أحملها، هي موجودة عندي."
      },
      {
        "timestamps": {
          "from": "00:51:12,460",
          "to": "00:51:17,740"
        },
        "offsets": {
          "from": 3072460,
          "to": 3077740
        },
        "text": "عارف إنها بتنزل باللي موجود حتى الآن. الخطوة اللي جاية"
      },
      {
        "timestamps": {
          "from": "00:51:17,740",
          "to": "00:51:21,400"
        },
        "offsets": {
          "from": 3077740,
          "to": 3081400
        },
        "text": "اللي أنا عايز أعملها إن أنا أكتب الكود بتاعي."
      },
      {
        "timestamps": {
          "from": "00:51:21,400",
          "to": "00:51:28,180"
        },
        "offsets": {
          "from": 3081400,
          "to": 3088180
        },
        "text": "الكود بتاع Flask، اللي هو الـ Flask app بتاعي. فهقول له مثلاً وأعمل"
      },
      {
        "timestamps": {
          "from": "00:51:28,180",
          "to": "00:51:35,800"
        },
        "offsets": {
          "from": 3088180,
          "to": 3095800
        },
        "text": "مثلاً هسميه وده اللي أنا هشتغل جواه. أنا معنديش طبعاً في"
      },
      {
        "timestamps": {
          "from": "00:51:35,800",
          "to": "00:51:40,960"
        },
        "offsets": {
          "from": 3095800,
          "to": 3100960
        },
        "text": "محترمة يعني في الغالب مش هتلاقي عندك، بالذات في حاجة زي"
      },
      {
        "timestamps": {
          "from": "00:51:40,960",
          "to": "00:51:45,520"
        },
        "offsets": {
          "from": 3100960,
          "to": 3105520
        },
        "text": "مش هتلاقي حاجة زي كده. فلو أنا جيت قلت له مثلاً هلاقي إن"
      },
      {
        "timestamps": {
          "from": "00:51:45,520",
          "to": "00:51:52,000"
        },
        "offsets": {
          "from": 3105520,
          "to": 3112000
        },
        "text": "معنديش install. فأنا محتاج تفتكر إنها بتيجي بأقل حاجات ممكنة نازلة"
      },
      {
        "timestamps": {
          "from": "00:51:52,000",
          "to": "00:52:03,100"
        },
        "offsets": {
          "from": 3112000,
          "to": 3123100
        },
        "text": "جوه. فمضطر إن أنا، فلو جيت قلت له هيديني error لإن الـ Image اللي نازلة"
      },
      {
        "timestamps": {
          "from": "00:52:03,100",
          "to": "00:52:13,300"
        },
        "offsets": {
          "from": 3123100,
          "to": 3133300
        },
        "text": "اللي نازل عليها، يعني للأسف الـ packages مش موجودة فلازم تعمل الأول"
      },
      {
        "timestamps": {
          "from": "00:52:13,300",
          "to": "00:52:21,820"
        },
        "offsets": {
          "from": 3133300,
          "to": 3141820
        },
        "text": "apt-get update عشان تعرف تعمل install، فمضطر إن أنا أقول له. بعد ما أقول له"
      },
      {
        "timestamps": {
          "from": "00:52:21,820",
          "to": "00:52:28,300"
        },
        "offsets": {
          "from": 3141820,
          "to": 3148300
        },
        "text": "يستحسن برضه إن أنا أقول له upgrade. ممكن أقول له ده شوية مثلاً عشان"
      },
      {
        "timestamps": {
          "from": "00:52:28,300",
          "to": "00:52:34,060"
        },
        "offsets": {
          "from": 3148300,
          "to": 3154060
        },
        "text": "كمان يعمل upgrade لكل الـ packages الموجودة قبل ما أبدأ. لاحظ دلوقتي إن"
      },
      {
        "timestamps": {
          "from": "00:52:34,060",
          "to": "00:52:39,160"
        },
        "offsets": {
          "from": 3154060,
          "to": 3159160
        },
        "text": "اللي أنا بعمله دلوقتي ده كما لو كنت بتعامل مع"
      },
      {
        "timestamps": {
          "from": "00:52:39,160",
          "to": "00:52:43,660"
        },
        "offsets": {
          "from": 3159160,
          "to": 3163660
        },
        "text": "Virtual Machine. كما لو كان عندي Virtual Machine مثلاً نازل عليها"
      },
      {
        "timestamps": {
          "from": "00:52:43,660",
          "to": "00:52:50,680"
        },
        "offsets": {
          "from": 3163660,
          "to": 3170680
        },
        "text": "وأنا واحدة واحدة ببدأ إن أنا أنزل وأعمل update للـ packages بتاعتي قبل ما"
      },
      {
        "timestamps": {
          "from": "00:52:50,680",
          "to": "00:52:57,040"
        },
        "offsets": {
          "from": 3170680,
          "to": 3177040
        },
        "text": "أعمل الكود بتاعي. هخلي ده"
      },
      {
        "timestamps": {
          "from": "00:52:57,040",
          "to": "00:53:03,500"
        },
        "offsets": {
          "from": 3177040,
          "to": 3183500
        },
        "text": "يخلص ونكمل. كده خلاص، دلوقتي قادر إني أقول له"
      },
      {
        "timestamps": {
          "from": "00:53:03,500",
          "to": "00:53:11,420"
        },
        "offsets": {
          "from": 3183500,
          "to": 3191420
        },
        "text": "apt-get install vim. فدلوقتي قادر يشوف الـ package ويروح يعمل لها install."
      },
      {
        "timestamps": {
          "from": "00:53:11,420",
          "to": "00:53:18,360"
        },
        "offsets": {
          "from": 3191420,
          "to": 3198360
        },
        "text": "عملت الـ installation بتاعتي، فدلوقتي بقى عندي vim. فأقدر دلوقتي إني أقول"
      },
      {
        "timestamps": {
          "from": "00:53:18,360",
          "to": "00:53:25,480"
        },
        "offsets": {
          "from": 3198360,
          "to": 3205480
        },
        "text": "له vim وأقول له فايل اسمه hello.py. هيفتح لي الـ interface بتاع"
      },
      {
        "timestamps": {
          "from": "00:53:25,480",
          "to": "00:53:31,240"
        },
        "offsets": {
          "from": 3205480,
          "to": 3211240
        },
        "text": "الكود. هنا هبدأ أكتب بقى الكود بتاعي. أنا واخد الكود"
      },
      {
        "timestamps": {
          "from": "00:53:31,240",
          "to": "00:53:37,240"
        },
        "offsets": {
          "from": 3211240,
          "to": 3217240
        },
        "text": "ده من الـ website مع إضافات بسيطة من عندي."
      },
      {
        "timestamps": {
          "from": "00:53:37,240",
          "to": "00:53:49,160"
        },
        "offsets": {
          "from": 3217240,
          "to": 3229160
        },
        "text": "فأنا هاخد الكود من هنا، وهاجي هنا أعمل paste. فده الكود اللي موجود على"
      },
      {
        "timestamps": {
          "from": "00:53:49,160",
          "to": "00:53:54,840"
        },
        "offsets": {
          "from": 3229160,
          "to": 3234840
        },
        "text": "الـ website. خلاص أنا كده بالنسبة لي هقفل."
      },
      {
        "timestamps": {
          "from": "00:53:54,840",
          "to": "00:53:58,560"
        },
        "offsets": {
          "from": 3234840,
          "to": 3238560
        },
        "text": "أتأكد بس إن الدنيا تمام. كده خلاص أنا عندي الكود بتاع"
      },
      {
        "timestamps": {
          "from": "00:53:58,560",
          "to": "00:54:04,140"
        },
        "offsets": {
          "from": 3238560,
          "to": 3244140
        },
        "text": "الـ app بتاعي موجود. أنا لو جيت دلوقتي وقلت له execute"
      },
      {
        "timestamps": {
          "from": "00:54:04,140",
          "to": "00:54:11,400"
        },
        "offsets": {
          "from": 3244140,
          "to": 3251400
        },
        "text": "لـ hello.py هيديني error، لإنه مش موجود في الـ environment، فمضطر إن أنا أعمل"
      },
      {
        "timestamps": {
          "from": "00:54:11,400",
          "to": "00:54:17,900"
        },
        "offsets": {
          "from": 3251400,
          "to": 3257900
        },
        "text": "install لـ Flask. فعشان كده لازم أقول له"
      },
      {
        "timestamps": {
          "from": "00:54:17,900",
          "to": "00:54:27,720"
        },
        "offsets": {
          "from": 3257900,
          "to": 3267720
        },
        "text": "pip install flask. هيروح يعمل الـ installation، وبعد ما يخلص هقدر أقول له"
      },
      {
        "timestamps": {
          "from": "00:54:27,720",
          "to": "00:54:35,160"
        },
        "offsets": {
          "from": 3267720,
          "to": 3275160
        },
        "text": "execute لـ hello.py ده. فدلوقتي لقيت إن عندي خلاص الـ Container"
      },
      {
        "timestamps": {
          "from": "00:54:35,160",
          "to": "00:54:39,460"
        },
        "offsets": {
          "from": 3275160,
          "to": 3279460
        },
        "text": "دلوقتي شغال. الـ Web Server شغال أهو Serving Flask app hello."
      },
      {
        "timestamps": {
          "from": "00:54:39,460",
          "to": "00:54:43,000"
        },
        "offsets": {
          "from": 3279460,
          "to": 3283000
        },
        "text": "Environment production وبيقول لي خلي بالك متعملش ده في"
      },
      {
        "timestamps": {
          "from": "00:54:43,000",
          "to": "00:54:46,300"
        },
        "offsets": {
          "from": 3283000,
          "to": 3286300
        },
        "text": "Production. This is a development server. وده running"
      },
      {
        "timestamps": {
          "from": "00:54:46,300",
          "to": "00:54:50,480"
        },
        "offsets": {
          "from": 3286300,
          "to": 3290480
        },
        "text": "دلوقتي و listening على الـ Port ده. كده خلاص هو ده"
      },
      {
        "timestamps": {
          "from": "00:54:50,480",
          "to": "00:54:54,520"
        },
        "offsets": {
          "from": 3290480,
          "to": 3294520
        },
        "text": "اللي أنا عايزه. أنا خلصت خلاص الـ setup بتاعي. طبعاً"
      },
      {
        "timestamps": {
          "from": "00:54:54,520",
          "to": "00:54:56,800"
        },
        "offsets": {
          "from": 3294520,
          "to": 3296800
        },
        "text": "إنت عندك في الـ environment بتاعك الموضوع أعقد من كده. وإحنا هنشوف"
      },
      {
        "timestamps": {
          "from": "00:54:56,800",
          "to": "00:54:59,980"
        },
        "offsets": {
          "from": 3296800,
          "to": 3299980
        },
        "text": "مثال أعقد من كده كمان. بس تخيل إننا كده خلاص عملنا"
      },
      {
        "timestamps": {
          "from": "01:00:00,000",
          "to": "01:00:06,720"
        },
        "offsets": {
          "from": 3600000,
          "to": 3606720
        },
        "text": "الـ Image بتاعتنا، عملنا الكود بتاعنا، نزلنا الـ packages وعملنا run للـ command."
      },
      {
        "timestamps": {
          "from": "01:00:06,720",
          "to": "01:00:14,520"
        },
        "offsets": {
          "from": 3606720,
          "to": 3614520
        },
        "text": "عشان نتأكد إن الدنيا تمام. طيب، عايز بقى الـ Container المعقد"
      },
      {
        "timestamps": {
          "from": "01:00:14,520",
          "to": "01:00:18,180"
        },
        "offsets": {
          "from": 3614520,
          "to": 3618180
        },
        "text": "بتاعي ده بعد ما خلصته، عايز بقى أحول الـ Container ده لـ Image عشان أقدر"
      },
      {
        "timestamps": {
          "from": "01:00:18,180",
          "to": "01:00:21,960"
        },
        "offsets": {
          "from": 3618180,
          "to": 3621960
        },
        "text": "إني أشحن الـ Image دي في أكتر من حتة، أعمل لها مثلاً Push وأرجع مثلاً"
      },
      {
        "timestamps": {
          "from": "01:00:21,960",
          "to": "01:00:28,080"
        },
        "offsets": {
          "from": 3621960,
          "to": 3628080
        },
        "text": "أسترجعها أو أعمل لها Pull في حتة تانية وهكذا."
      },
      {
        "timestamps": {
          "from": "01:00:28,080",
          "to": "01:00:33,240"
        },
        "offsets": {
          "from": 3628080,
          "to": 3633240
        },
        "text": "فاللي أنا هعمله إن أنا هعمل Exit من هنا خلاص، خرجت بره."
      },
      {
        "timestamps": {
          "from": "01:00:33,240",
          "to": "01:00:37,800"
        },
        "offsets": {
          "from": 3633240,
          "to": 3637800
        },
        "text": "ده وهقول له Exit كده. الـ Container طبعاً كده لسه"
      },
      {
        "timestamps": {
          "from": "01:00:37,800",
          "to": "01:00:41,640"
        },
        "offsets": {
          "from": 3637800,
          "to": 3641640
        },
        "text": "موجود بس هو Stopped. أوكي؟ فاللي هقدر أعمله إن أنا آجي أقول له"
      },
      {
        "timestamps": {
          "from": "01:00:41,640",
          "to": "01:00:49,740"
        },
        "offsets": {
          "from": 3641640,
          "to": 3649740
        },
        "text": "Docker Commit. تلاقي دي حتى شبه Git جداً. فأقول له Docker Commit"
      },
      {
        "timestamps": {
          "from": "01:00:49,740",
          "to": "01:00:55,080"
        },
        "offsets": {
          "from": 3649740,
          "to": 3655080
        },
        "text": "و Docker Commit ده بياخد أولاً الـ Container طبعاً. الـ Argument"
      },
      {
        "timestamps": {
          "from": "01:00:55,080",
          "to": "01:01:00,360"
        },
        "offsets": {
          "from": 3655080,
          "to": 3660360
        },
        "text": "التاني هو الـ Image اللي إنت هتعمل لها Export، اسم الـ Image إيه؟ فأنا"
      },
      {
        "timestamps": {
          "from": "01:01:00,360",
          "to": "01:01:06,120"
        },
        "offsets": {
          "from": 3660360,
          "to": 3666120
        },
        "text": "هقول له هاخد الـ Container اللي أنا عملته ده وهعمل Image، وخلي"
      },
      {
        "timestamps": {
          "from": "01:01:06,120",
          "to": "01:01:10,380"
        },
        "offsets": {
          "from": 3666120,
          "to": 3670380
        },
        "text": "بالي إن أنا هسمي الـ Image بالاسم اللي أنا عامل له Account على"
      },
      {
        "timestamps": {
          "from": "01:01:10,380",
          "to": "01:01:16,140"
        },
        "offsets": {
          "from": 3670380,
          "to": 3676140
        },
        "text": "Docker Hub، فأكتب الـ Account بتاعي الأول وبعد كده هسميه"
      },
      {
        "timestamps": {
          "from": "01:01:16,140",
          "to": "01:01:24,240"
        },
        "offsets": {
          "from": 3676140,
          "to": 3684240
        },
        "text": "هسميها، أوكي؟ وأديها Tag مثلاً 1.0. مش مهم التسمية، مش"
      },
      {
        "timestamps": {
          "from": "01:01:24,240",
          "to": "01:01:26,820"
        },
        "offsets": {
          "from": 3684240,
          "to": 3686820
        },
        "text": "مهم الـ Version، مش مهم الـ Tag، بس إنت يستحسن إنك"
      },
      {
        "timestamps": {
          "from": "01:01:26,820",
          "to": "01:01:30,720"
        },
        "offsets": {
          "from": 3686820,
          "to": 3690720
        },
        "text": "يكون عندك Convention للتسمية بتاعة الـ Image بتاعتك عشان تسهل عليك"
      },
      {
        "timestamps": {
          "from": "01:01:30,720",
          "to": "01:01:38,400"
        },
        "offsets": {
          "from": 3690720,
          "to": 3698400
        },
        "text": "إنك بعد كده لما نيجي نعمل Push لـ Docker Hub. أوكي؟ هعمل كده ولما"
      },
      {
        "timestamps": {
          "from": "01:01:38,400",
          "to": "01:01:43,500"
        },
        "offsets": {
          "from": 3698400,
          "to": 3703500
        },
        "text": "يخلص هيعمل حاجتين، هيوريني الـ ID بتاع الـ Image دي وهتلاقي عندك على"
      },
      {
        "timestamps": {
          "from": "01:01:43,500",
          "to": "01:01:47,760"
        },
        "offsets": {
          "from": 3703500,
          "to": 3707760
        },
        "text": "الشمال كمان بقى فيه عندك Image جديدة مكنتش موجودة قبل"
      },
      {
        "timestamps": {
          "from": "01:01:47,760",
          "to": "01:01:51,780"
        },
        "offsets": {
          "from": 3707760,
          "to": 3711780
        },
        "text": "كده، اسم الـ Image أو اسم الـ Repo بتاعها باسمي 76"
      },
      {
        "timestamps": {
          "from": "01:01:51,780",
          "to": "01:02:00,300"
        },
        "offsets": {
          "from": 3711780,
          "to": 3720300
        },
        "text": "/ py-flask والـ Tag بتاعها 1.0. أوكي؟ دلوقتي بقى لو"
      },
      {
        "timestamps": {
          "from": "01:02:00,300",
          "to": "01:02:07,020"
        },
        "offsets": {
          "from": 3720300,
          "to": 3727020
        },
        "text": "أنا حتى عملت Delete لده خالص، دلوقتي أقدر أعمل Run من الـ Image"
      },
      {
        "timestamps": {
          "from": "01:02:07,020",
          "to": "01:02:16,240"
        },
        "offsets": {
          "from": 3727020,
          "to": 3736240
        },
        "text": "الجديدة دي. فلو قلت له Docker Run -it"
      },
      {
        "timestamps": {
          "from": "01:02:16,240",
          "to": "01:02:20,800"
        },
        "offsets": {
          "from": 3736240,
          "to": 3740800
        },
        "text": "أسميه Container بس كفاية."
      },
      {
        "timestamps": {
          "from": "01:02:20,800",
          "to": "01:02:27,940"
        },
        "offsets": {
          "from": 3740800,
          "to": 3747940
        },
        "text": "هكتب له بقى اسم الـ Image الجديدة اللي أنا عاملها دي، فممكن بقى"
      },
      {
        "timestamps": {
          "from": "01:02:27,940",
          "to": "01:02:33,020"
        },
        "offsets": {
          "from": 3747940,
          "to": 3753020
        },
        "text": "للسهولة كده، وعشان ما تغلطش في الكتابة وكلام من ده،"
      },
      {
        "timestamps": {
          "from": "01:02:33,020",
          "to": "01:02:41,960"
        },
        "offsets": {
          "from": 3753020,
          "to": 3761960
        },
        "text": "ممكن من الـ UI بتاعها تاخد الـ Name من هنا، وافتكر إن أنا"
      },
      {
        "timestamps": {
          "from": "01:02:41,960",
          "to": "01:02:50,600"
        },
        "offsets": {
          "from": 3761960,
          "to": 3770600
        },
        "text": "محتاج أو قادر إن أنا بما إني هعمل Run على طول، قادر"
      },
      {
        "timestamps": {
          "from": "01:02:50,600",
          "to": "01:02:55,460"
        },
        "offsets": {
          "from": 3770600,
          "to": 3775460
        },
        "text": "إني آجي كده مثلاً وبدل -it، أنا حتى مش محتاج -it، هقول له"
      },
      {
        "timestamps": {
          "from": "01:02:55,460",
          "to": "01:03:01,940"
        },
        "offsets": {
          "from": 3775460,
          "to": 3781940
        },
        "text": "بس الـ Command اللي هيتعمل له Run، آخر Command عملته في"
      },
      {
        "timestamps": {
          "from": "01:03:01,940",
          "to": "01:03:12,040"
        },
        "offsets": {
          "from": 3781940,
          "to": 3792040
        },
        "text": "الـ"
      },
      {
        "timestamps": {
          "from": "01:03:12,040",
          "to": "01:03:25,530"
        },
        "offsets": {
          "from": 3792040,
          "to": 3805530
        },
        "text": "الـ"
      },
      {
        "timestamps": {
          "from": "01:03:25,530",
          "to": "01:03:31,940"
        },
        "offsets": {
          "from": 3805530,
          "to": 3811940
        },
        "text": "الـ Container."
      },
      {
        "timestamps": {
          "from": "01:03:31,940",
          "to": "01:03:37,840"
        },
        "offsets": {
          "from": 3811940,
          "to": 3817840
        },
        "text": "أتأكد بس إن الـ Port mapping والحاجات دي مظبوطة عشان ما يضربش"
      },
      {
        "timestamps": {
          "from": "01:03:37,840",
          "to": "01:03:45,480"
        },
        "offsets": {
          "from": 3817840,
          "to": 3825480
        },
        "text": "معانا. كده الـ Container قام وهتلاقي إنه"
      },
      {
        "timestamps": {
          "from": "01:03:45,480",
          "to": "01:03:51,360"
        },
        "offsets": {
          "from": 3825480,
          "to": 3831360
        },
        "text": "الـ Command عمل Mapping للـ Port صح 5000:5000 وادي"
      },
      {
        "timestamps": {
          "from": "01:03:51,360",
          "to": "01:03:56,860"
        },
        "offsets": {
          "from": 3831360,
          "to": 3836860
        },
        "text": "الـ Container. هنشوف كده لو أنا فتحت الـ Browser عندي على"
      },
      {
        "timestamps": {
          "from": "01:03:56,860",
          "to": "01:04:00,940"
        },
        "offsets": {
          "from": 3836860,
          "to": 3840940
        },
        "text": "Port 5000."
      },
      {
        "timestamps": {
          "from": "01:04:01,940",
          "to": "01:04:08,600"
        },
        "offsets": {
          "from": 3841940,
          "to": 3848600
        },
        "text": "localhost:5000، هلاقي رده من Flask (Hello World)."
      },
      {
        "timestamps": {
          "from": "01:04:08,600",
          "to": "01:04:14,240"
        },
        "offsets": {
          "from": 3848600,
          "to": 3854240
        },
        "text": "أوكي؟ يبقى كده الـ Build بتاع الـ Image اتعمل صح. الـ Runtime أو"
      },
      {
        "timestamps": {
          "from": "01:04:14,240",
          "to": "01:04:21,140"
        },
        "offsets": {
          "from": 3854240,
          "to": 3861140
        },
        "text": "الـ Run بتاع الـ Container اتعمل صح."
      },
      {
        "timestamps": {
          "from": "01:04:21,140",
          "to": "01:04:26,660"
        },
        "offsets": {
          "from": 3861140,
          "to": 3866660
        },
        "text": "Alpine لو أنا فاكر صح يعني. لا يبقى أعتقد الاسم أنا"
      },
      {
        "timestamps": {
          "from": "01:04:26,660",
          "to": "01:04:33,560"
        },
        "offsets": {
          "from": 3866660,
          "to": 3873560
        },
        "text": "مش فاكره صح خليني أتأكد كده. ده كان الـ Image بتاعي اللي أنا"
      },
      {
        "timestamps": {
          "from": "01:04:33,560",
          "to": "01:04:45,420"
        },
        "offsets": {
          "from": 3873560,
          "to": 3885420
        },
        "text": "عملته. اسمه إيه؟ Blue. هات ده كده Copy. وآجي هنا كده."
      },
      {
        "timestamps": {
          "from": "01:04:45,420",
          "to": "01:04:51,000"
        },
        "offsets": {
          "from": 3885420,
          "to": 3891000
        },
        "text": "تمام أحلى ميزة بقى في Alpine. Okay؟ طيب"
      }
    ]
  },
  {
    "id": 13,
    "title": "Containerizing an Application",
    "duration": 1981.0,
    "isReady": true,
    "transcription": [
      {
        "timestamps": {
          "from": "00:00:00,000",
          "to": "00:00:09,200"
        },
        "offsets": {
          "from": 0,
          "to": 9200
        },
        "text": "لغاية كده الدنيا OK مفيش فيها مشكلة، لكن برضه الطريقة دي ماهياش أحسن طريقة. إيه السبب؟"
      },
      {
        "timestamps": {
          "from": "00:00:09,200",
          "to": "00:00:18,000"
        },
        "offsets": {
          "from": 9200,
          "to": 18000
        },
        "text": "بالطريقة دي افرض أي حد تاني دخل مثلاً حب إنه يعدل في الـ Website، حب يعدل في الـ Code."
      },
      {
        "timestamps": {
          "from": "00:00:18,000",
          "to": "00:00:24,200"
        },
        "offsets": {
          "from": 18000,
          "to": 24200
        },
        "text": "مثلاً شال صفحة، مش عايز مثلاً الصفحة دي، فهيعمل إيه؟"
      },
      {
        "timestamps": {
          "from": "00:00:24,200",
          "to": "00:00:33,380"
        },
        "offsets": {
          "from": 24200,
          "to": 33380
        },
        "text": "هتضطر إنه يقوم عامل Container تاني ويقوم داخل من الـ Container معدل في الـ Code اللي هو hello.py اللي معمول له Hard-coded جوه الـ Image."
      },
      {
        "timestamps": {
          "from": "00:00:33,380",
          "to": "00:00:40,040"
        },
        "offsets": {
          "from": 33380,
          "to": 40040
        },
        "text": "يعدل في الـ Code ده ويسيف الكلام ده، ويطلع بره الـ Container ويعمل Commit ويعمل Image جديدة."
      },
      {
        "timestamps": {
          "from": "00:00:40,040",
          "to": "00:00:46,620"
        },
        "offsets": {
          "from": 40040,
          "to": 46620
        },
        "text": "وكل مرة Image جديدة، كل ما يحتاج يعدل يقوم داخل وعامل التعديل وعامل Image جديدة."
      },
      {
        "timestamps": {
          "from": "00:00:46,620",
          "to": "00:00:53,620"
        },
        "offsets": {
          "from": 46620,
          "to": 53620
        },
        "text": "فالطريقة دي مش Optimum في الشغل بتاع الـ DevOps وبتاع الـ Containers."
      },
      {
        "timestamps": {
          "from": "00:00:53,620",
          "to": "00:00:54,620"
        },
        "offsets": {
          "from": 53620,
          "to": 54620
        },
        "text": "ينفع تتعامل؟ آه ينفع تتعامل."
      },
      {
        "timestamps": {
          "from": "00:00:54,620",
          "to": "00:00:57,620"
        },
        "offsets": {
          "from": 54620,
          "to": 57620
        },
        "text": "لو إنت لوحدك وده الـ Container بتاعك إنت لوحدك وعمرك ما هتشيره مع حد،"
      },
      {
        "timestamps": {
          "from": "00:00:57,620",
          "to": "00:00:59,620"
        },
        "offsets": {
          "from": 57620,
          "to": 59620
        },
        "text": "ومستعمله علشان الـ Dev والـ Test بس."
      },
      {
        "timestamps": {
          "from": "00:00:59,620",
          "to": "00:01:02,620"
        },
        "offsets": {
          "from": 59620,
          "to": 62620
        },
        "text": "آه مفيش مشاكل خالص."
      },
      {
        "timestamps": {
          "from": "00:01:02,620",
          "to": "00:01:10,620"
        },
        "offsets": {
          "from": 62620,
          "to": 70620
        },
        "text": "إنما في طريقة أشيك وأحسن وأكتر فاعلية، يعني Efficient أكتر."
      },
      {
        "timestamps": {
          "from": "00:01:10,620",
          "to": "00:01:17,820"
        },
        "offsets": {
          "from": 70620,
          "to": 77820
        },
        "text": "في إن أنا أبني وأوصل لنفس النتيجة دي بشكل أسهل بكتير."
      },
      {
        "timestamps": {
          "from": "00:01:17,820",
          "to": "00:01:25,680"
        },
        "offsets": {
          "from": 77820,
          "to": 85680
        },
        "text": "في التعديل والحذف وهكذا. اللي هي إيه بقى؟ فاكر إحنا"
      },
      {
        "timestamps": {
          "from": "00:01:25,680",
          "to": "00:01:29,340"
        },
        "offsets": {
          "from": 85680,
          "to": 89340
        },
        "text": "الخطوات اللي إحنا عملناها علشان نبني الـ Image الجديدة دي؟ إحنا"
      },
      {
        "timestamps": {
          "from": "00:01:29,340",
          "to": "00:01:34,380"
        },
        "offsets": {
          "from": 89340,
          "to": 94380
        },
        "text": "دخلنا ملقيناش الـ Editor، فاضطرينا ننزل وعملنا Update الأول وبعدين روحنا"
      },
      {
        "timestamps": {
          "from": "00:01:34,380",
          "to": "00:01:41,400"
        },
        "offsets": {
          "from": 94380,
          "to": 101400
        },
        "text": "منزلين الـ Editor وبعد كده روحنا عاملين Install للفلاسك مثلاً عن طريق..."
      },
      {
        "timestamps": {
          "from": "00:01:41,400",
          "to": "00:01:47,700"
        },
        "offsets": {
          "from": 101400,
          "to": 107700
        },
        "text": "مثلاً عملنا Install للفلاسك وعملنا كذا خطوة، في خطوات إحنا"
      },
      {
        "timestamps": {
          "from": "00:01:47,700",
          "to": "00:01:53,760"
        },
        "offsets": {
          "from": 107700,
          "to": 113760
        },
        "text": "عملناها، نفس الخطوات دي بدل ما أنا أدخل أعملها كل مرة علشان"
      },
      {
        "timestamps": {
          "from": "00:01:53,760",
          "to": "00:02:01,680"
        },
        "offsets": {
          "from": 113760,
          "to": 121680
        },
        "text": "الـ Image دي أقدر إني أستعمل File عادي خالص يبقى جواه"
      },
      {
        "timestamps": {
          "from": "00:02:01,680",
          "to": "00:02:17,490"
        },
        "offsets": {
          "from": 121680,
          "to": 137490
        },
        "text": "بتقول لـ Docker هو يعمل إيه، بتقول لـ Docker Engine يعمل إيه علشان يعمل Build لنفس الـ Image دي من غير ما أحتاج أعمل Container ولا أعمل Download لـ Image وأدخل جوه الـ Container وأعمل الـ Updates."
      },
      {
        "timestamps": {
          "from": "00:02:17,490",
          "to": "00:02:18,640"
        },
        "offsets": {
          "from": 137490,
          "to": 138640
        },
        "text": "الكلام ده كله مش محتاجه."
      },
      {
        "timestamps": {
          "from": "00:02:18,640",
          "to": "00:02:22,420"
        },
        "offsets": {
          "from": 138640,
          "to": 142420
        },
        "text": "أعمل Instruction File، والـ Instruction File ده حتى"
      },
      {
        "timestamps": {
          "from": "00:02:22,420",
          "to": "00:02:23,820"
        },
        "offsets": {
          "from": 142420,
          "to": 143820
        },
        "text": "أبسط من الـ Scripts."
      },
      {
        "timestamps": {
          "from": "00:02:23,820",
          "to": "00:02:26,460"
        },
        "offsets": {
          "from": 143820,
          "to": 146460
        },
        "text": "الفكرة في الـ Instruction File"
      },
      {
        "timestamps": {
          "from": "00:02:26,460",
          "to": "00:02:28,180"
        },
        "offsets": {
          "from": 146460,
          "to": 148180
        },
        "text": "إن أنا أقول"
      },
      {
        "timestamps": {
          "from": "00:02:28,180",
          "to": "00:02:30,180"
        },
        "offsets": {
          "from": 148180,
          "to": 150180
        },
        "text": "Docker يعمل إيه"
      },
      {
        "timestamps": {
          "from": "00:02:30,180",
          "to": "00:02:32,620"
        },
        "offsets": {
          "from": 150180,
          "to": 152620
        },
        "text": "من غير ما أحتاج أقوله يعملهم إزاي."
      },
      {
        "timestamps": {
          "from": "00:02:32,620",
          "to": "00:02:34,320"
        },
        "offsets": {
          "from": 152620,
          "to": 154320
        },
        "text": "بتعمل مجرد Instructions."
      },
      {
        "timestamps": {
          "from": "00:02:34,320",
          "to": "00:02:36,980"
        },
        "offsets": {
          "from": 154320,
          "to": 156980
        },
        "text": "يعني مثلاً: اسحب لي الـ Image بتاعة Python،"
      },
      {
        "timestamps": {
          "from": "00:02:36,980",
          "to": "00:02:38,980"
        },
        "offsets": {
          "from": 156980,
          "to": 158980
        },
        "text": "Run الـ Command الفلاني،"
      },
      {
        "timestamps": {
          "from": "00:02:38,980",
          "to": "00:02:41,700"
        },
        "offsets": {
          "from": 158980,
          "to": 161700
        },
        "text": "غير لي الـ Environment Variables،"
      },
      {
        "timestamps": {
          "from": "00:02:41,700",
          "to": "00:02:44,020"
        },
        "offsets": {
          "from": 161700,
          "to": 164020
        },
        "text": "غير الـ Working Directory،"
      },
      {
        "timestamps": {
          "from": "00:02:44,020",
          "to": "00:02:47,940"
        },
        "offsets": {
          "from": 164020,
          "to": 167940
        },
        "text": "لما تيجي تفتح Container افتحه بالـ Command الفلاني."
      },
      {
        "timestamps": {
          "from": "00:02:47,940",
          "to": "00:02:52,280"
        },
        "offsets": {
          "from": 167940,
          "to": 172280
        },
        "text": "بدل ما أدخل أعمل كل الحاجات اللي أنا عملتها دي بنفسي."
      },
      {
        "timestamps": {
          "from": "00:02:52,280",
          "to": "00:02:55,140"
        },
        "offsets": {
          "from": 172280,
          "to": 175140
        },
        "text": "ده اللي إحنا عايزين نشوفه، وده اسمه الـ Dockerfile."
      },
      {
        "timestamps": {
          "from": "00:02:55,140",
          "to": "00:02:59,180"
        },
        "offsets": {
          "from": 175140,
          "to": 179180
        },
        "text": "تعالوا بقى نشوف إزاي عن طريق الـ Dockerfile ده"
      },
      {
        "timestamps": {
          "from": "00:02:59,180",
          "to": "00:03:06,580"
        },
        "offsets": {
          "from": 179180,
          "to": 186580
        },
        "text": "نقدر نعمل نفس اللي عملناه من شوية بس بشكل أشيك وبشكل Professional وشغل عالي."
      },
      {
        "timestamps": {
          "from": "00:03:06,580",
          "to": "00:03:09,980"
        },
        "offsets": {
          "from": 186580,
          "to": 189980
        },
        "text": "نعمل الكلام ده عن طريق File اسمه Dockerfile."
      },
      {
        "timestamps": {
          "from": "00:03:09,980",
          "to": "00:03:19,420"
        },
        "offsets": {
          "from": 189980,
          "to": 199420
        },
        "text": "الـ File بيبقى اسمه كده: Dockerfile، من غير Extension ومن غير أي حاجة، حتى هتلاقي VS Code متعرف عليه ومديله أيكون السمكة."
      },
      {
        "timestamps": {
          "from": "00:03:19,420",
          "to": "00:03:21,220"
        },
        "offsets": {
          "from": 199420,
          "to": 201220
        },
        "text": "ماشي، مدي الأيكون بتاع السمكة."
      },
      {
        "timestamps": {
          "from": "00:03:21,220",
          "to": "00:03:23,660"
        },
        "offsets": {
          "from": 201220,
          "to": 203660
        },
        "text": "الفايل ده سهل جداً جداً."
      },
      {
        "timestamps": {
          "from": "00:03:23,660",
          "to": "00:03:27,140"
        },
        "offsets": {
          "from": 203660,
          "to": 207140
        },
        "text": "ممكن تواجه صعوبات شوية في الأول."
      },
      {
        "timestamps": {
          "from": "00:03:27,140",
          "to": "00:03:32,320"
        },
        "offsets": {
          "from": 207140,
          "to": 212320
        },
        "text": "بس لما توسخ إيدك جامد فيها، هتلاقي إن الموضوع سهل وبيمشي معاك زي السكينة في الحلاوة."
      },
      {
        "timestamps": {
          "from": "00:03:32,320",
          "to": "00:03:36,880"
        },
        "offsets": {
          "from": 212320,
          "to": 216880
        },
        "text": "تاخد تجربة Test وتضيفها في الـ Code بتاعه، وتلاحظ تلاقي الدنيا شغالة معاك."
      },
      {
        "timestamps": {
          "from": "00:03:36,880",
          "to": "00:03:40,340"
        },
        "offsets": {
          "from": 216880,
          "to": 220340
        },
        "text": "فناخد صورة مبسطة جداً للي إحنا عملناه."
      },
      {
        "timestamps": {
          "from": "00:03:40,340",
          "to": "00:03:43,320"
        },
        "offsets": {
          "from": 220340,
          "to": 223320
        },
        "text": "افتكر الخطوات اللي إحنا عملناها."
      },
      {
        "timestamps": {
          "from": "00:03:43,320",
          "to": "00:03:46,280"
        },
        "offsets": {
          "from": 223320,
          "to": 226280
        },
        "text": "علشان نبني الـ Image اللي إحنا بنيناها من شوية دي."
      },
      {
        "timestamps": {
          "from": "00:03:46,980",
          "to": "00:04:03,330"
        },
        "offsets": {
          "from": 226980,
          "to": 243330
        },
        "text": "الخطوات كانت إيه؟ مبدئياً أنا بدأت بـ"
      },
      {
        "timestamps": {
          "from": "00:04:03,330",
          "to": "00:04:16,980"
        },
        "offsets": {
          "from": 243330,
          "to": 256980
        },
        "text": "بـ الـ FROM."
      },
      {
        "timestamps": {
          "from": "00:04:16,980",
          "to": "00:04:26,820"
        },
        "offsets": {
          "from": 256980,
          "to": 266820
        },
        "text": "فالـ FROM command ده أو الـ FROM instruction، دي بتعرف الـ Docker Engine لما تيجي تعمل الـ Build هبدأ بأي Image."
      },
      {
        "timestamps": {
          "from": "00:04:26,820",
          "to": "00:04:39,220"
        },
        "offsets": {
          "from": 266820,
          "to": 279220
        },
        "text": "الـ instructions زي ما أنت شايفها باللون ده، لا هو أحمر ولا هو Orange، البنات هيعرفوا أكتر في الألوان."
      },
      {
        "timestamps": {
          "from": "00:04:39,220",
          "to": "00:04:45,120"
        },
        "offsets": {
          "from": 279220,
          "to": 285120
        },
        "text": "بس الـ instructions دي زي ما أنت شايفها كده، كل instruction بتكتب على سطر لوحدها."
      },
      {
        "timestamps": {
          "from": "00:04:45,120",
          "to": "00:04:50,760"
        },
        "offsets": {
          "from": 285120,
          "to": 290760
        },
        "text": "ممكن أحط مسافات، وممكن أقول مثلاً قبل دي كده آجي."
      },
      {
        "timestamps": {
          "from": "00:04:50,760",
          "to": "00:05:02,280"
        },
        "offsets": {
          "from": 290760,
          "to": 302280
        },
        "text": "أقول له مثلاً سطر فاضي، فممكن أحط وممكن أسيب كده براحتك."
      },
      {
        "timestamps": {
          "from": "00:10:00,000",
          "to": "00:10:04,740"
        },
        "offsets": {
          "from": 600000,
          "to": 604740
        },
        "text": "ممكن أسيب سطر Empty براحتك، بس خلي بالك من نقطة، كل خطوة هتتنفذ."
      },
      {
        "timestamps": {
          "from": "00:10:04,740",
          "to": "00:10:10,920"
        },
        "offsets": {
          "from": 604740,
          "to": 610920
        },
        "text": "ورا بعضهم بالترتيب، يعني الأول دي وبعد كده دي."
      },
      {
        "timestamps": {
          "from": "00:10:10,920",
          "to": "00:10:13,920"
        },
        "offsets": {
          "from": 610920,
          "to": 613920
        },
        "text": "بعد كده دي وبعد كده دي، فخلي بالك عشان الـ Order ده بيفرق."
      },
      {
        "timestamps": {
          "from": "00:10:13,920",
          "to": "00:10:19,800"
        },
        "offsets": {
          "from": 613920,
          "to": 619800
        },
        "text": "فممكن مثلاً تكتب Command وبعدين تكريت الملف اللي أنت"
      },
      {
        "timestamps": {
          "from": "00:10:19,800",
          "to": "00:10:23,340"
        },
        "offsets": {
          "from": 619800,
          "to": 623340
        },
        "text": "عايز تعمل له Execute جواه، فالدنيا هتبوظ في وشك. فنمشي واحدة واحدة."
      },
      {
        "timestamps": {
          "from": "00:10:23,340",
          "to": "00:10:28,080"
        },
        "offsets": {
          "from": 623340,
          "to": 628080
        },
        "text": "بالترتيب كأنك بتعمل الكلام ده مانيوال، فأول حاجة إيه؟"
      },
      {
        "timestamps": {
          "from": "00:10:28,080",
          "to": "00:10:32,980"
        },
        "offsets": {
          "from": 628080,
          "to": 632980
        },
        "text": "هحدد الـ Image، اسمها إيه؟ اسمها Python. الخطوة اللي بعدها."
      },
      {
        "timestamps": {
          "from": "00:10:32,980",
          "to": "00:10:39,880"
        },
        "offsets": {
          "from": 632980,
          "to": 639880
        },
        "text": "بقول WORKDIR، الـ WORKDIR ده instruction بيقول لـ Docker اعمل."
      },
      {
        "timestamps": {
          "from": "00:10:39,880",
          "to": "00:10:44,780"
        },
        "offsets": {
          "from": 639880,
          "to": 644780
        },
        "text": "Change Directory للـ Directory اللي اسمه app/. بس خلي بالك."
      },
      {
        "timestamps": {
          "from": "00:10:44,780",
          "to": "00:10:48,980"
        },
        "offsets": {
          "from": 644780,
          "to": 648980
        },
        "text": "الـ app/ ده مكنش أصلاً موجود في الـ Image، هتقولي أيوه بالظبط."
      },
      {
        "timestamps": {
          "from": "00:10:48,980",
          "to": "00:10:52,780"
        },
        "offsets": {
          "from": 648980,
          "to": 652780
        },
        "text": "برافو عليك أنت كده صاحي معايا. الـ WORKDIR دي لو."
      },
      {
        "timestamps": {
          "from": "00:10:52,780",
          "to": "00:10:56,080"
        },
        "offsets": {
          "from": 652780,
          "to": 656080
        },
        "text": "الـ Directory مش موجود هتكريته، يعني هتعمل mkdir."
      },
      {
        "timestamps": {
          "from": "00:10:56,080",
          "to": "00:11:09,080"
        },
        "offsets": {
          "from": 656080,
          "to": 669080
        },
        "text": "وبعدين تعمل cd. بعد ما تعمل الكلام ده يبقى أنت كده في الخطوة دي واقف في الـ Terminal جوه الـ Directory اللي هو app/."
      },
      {
        "timestamps": {
          "from": "00:11:09,080",
          "to": "00:11:19,080"
        },
        "offsets": {
          "from": 669080,
          "to": 679080
        },
        "text": "الخطوة دي بقى اللي هي الـ COPY، الـ COPY بتعمل Copy لأي Content من الـ Directory اللي أنت واقف عليه لجوه الـ Container."
      },
      {
        "timestamps": {
          "from": "00:11:19,080",
          "to": "00:11:40,260"
        },
        "offsets": {
          "from": 679080,
          "to": 700260
        },
        "text": "الـ Directory اللي أنا واقف عليه ده، اللي فيه ملفات الكود، ده بيسموه الـ Build Context، الـ Directory اللي نفذت من خلاله."
      },
      {
        "timestamps": {
          "from": "00:11:40,260",
          "to": "00:11:46,260"
        },
        "offsets": {
          "from": 700260,
          "to": 706260
        },
        "text": "الـ Build، لإنك كل ما هتيجي تعمل Build لحاجة وتيجي تقوله مثلاً."
      },
      {
        "timestamps": {
          "from": "00:11:46,260",
          "to": "00:11:56,100"
        },
        "offsets": {
          "from": 706260,
          "to": 716100
        },
        "text": "هيدور عليه فين؟ هيدور في الـ Context، فأنا هقوله الفايل."
      },
      {
        "timestamps": {
          "from": "00:11:56,100",
          "to": "00:12:00,720"
        },
        "offsets": {
          "from": 716100,
          "to": 720720
        },
        "text": "اللي اسمه requirements.txt هيجيبه منين؟ هيجيبه من نفس الـ Directory."
      },
      {
        "timestamps": {
          "from": "00:12:00,720",
          "to": "00:12:04,980"
        },
        "offsets": {
          "from": 720720,
          "to": 724980
        },
        "text": "لو موجود في Folder تاني لازم تشاور عليه، فلو كان موجود."
      },
      {
        "timestamps": {
          "from": "00:12:04,980",
          "to": "00:12:08,280"
        },
        "offsets": {
          "from": 724980,
          "to": 728280
        },
        "text": "جوه الـ Directory اللي اسمه code مثلاً، يبقى لازم أقوله كده."
      },
      {
        "timestamps": {
          "from": "00:12:08,280",
          "to": "00:12:15,180"
        },
        "offsets": {
          "from": 728280,
          "to": 735180
        },
        "text": "code/، فتخلي بالك من التريكات الصغيرة دي. هيكوبي ده."
      },
      {
        "timestamps": {
          "from": "00:12:15,180",
          "to": "00:12:20,640"
        },
        "offsets": {
          "from": 735180,
          "to": 740640
        },
        "text": "فين؟ على الـ ( . )، والـ Dot دي معناها الـ current directory."
      },
      {
        "timestamps": {
          "from": "00:12:20,640",
          "to": "00:12:30,360"
        },
        "offsets": {
          "from": 740640,
          "to": 750360
        },
        "text": "بعد ما يعمل Copy جوه الـ Container أو الـ Image."
      },
      {
        "timestamps": {
          "from": "00:12:30,360",
          "to": "00:12:36,060"
        },
        "offsets": {
          "from": 750360,
          "to": 756060
        },
        "text": "الخطوة اللي بعدها إنه هيعمل RUN pip install -r."
      },
      {
        "timestamps": {
          "from": "00:12:36,060",
          "to": "00:12:41,880"
        },
        "offsets": {
          "from": 756060,
          "to": 761880
        },
        "text": "requirements.txt، الفايل ده اللي فيه الـ Modules."
      },
      {
        "timestamps": {
          "from": "00:12:41,880",
          "to": "00:12:45,540"
        },
        "offsets": {
          "from": 761880,
          "to": 765540
        },
        "text": "الـ Frameworks أو الـ packages اللي أنا عايز أعملها import. قلت له"
      },
      {
        "timestamps": {
          "from": "00:12:45,540",
          "to": "00:12:49,020"
        },
        "offsets": {
          "from": 765540,
          "to": 769020
        },
        "text": "لا طب وليه أوجع دماغي؟ طب ما كنت أكتب هنا على طول pip"
      },
      {
        "timestamps": {
          "from": "00:12:49,020",
          "to": "00:12:52,260"
        },
        "offsets": {
          "from": 769020,
          "to": 772260
        },
        "text": "install Flask زي ما عملت قبل كدة؟ تقدر طبعاً، تقدر."
      },
      {
        "timestamps": {
          "from": "00:12:52,260",
          "to": "00:12:56,460"
        },
        "offsets": {
          "from": 772260,
          "to": 776460
        },
        "text": "بس إنت إيه رأيك؟ كدة أحسن ولا مش أحسن؟ بدل ما أحتاج إن أنا"
      },
      {
        "timestamps": {
          "from": "00:12:56,460",
          "to": "00:13:00,060"
        },
        "offsets": {
          "from": 776460,
          "to": 780060
        },
        "text": "أروح أعدل في الـ Dockerfile ولا أعدل جوه الـ Image أصلاً؟"
      },
      {
        "timestamps": {
          "from": "00:13:00,060",
          "to": "00:13:04,980"
        },
        "offsets": {
          "from": 780060,
          "to": 784980
        },
        "text": "الـ Container يعني أخلي كل الحاجات اللي أنا عايز أعملها برة خالص. دي"
      },
      {
        "timestamps": {
          "from": "00:13:04,980",
          "to": "00:13:12,660"
        },
        "offsets": {
          "from": 784980,
          "to": 792660
        },
        "text": "طريقة بتنظم الـ setup بتاعك. ممكن في المستقبل تحتاج إنك"
      },
      {
        "timestamps": {
          "from": "00:13:12,660",
          "to": "00:13:17,100"
        },
        "offsets": {
          "from": 792660,
          "to": 797100
        },
        "text": "تغير الـ Flask دي مثلاً من Version لـ Version تاني، تنزل في"
      },
      {
        "timestamps": {
          "from": "00:13:17,100",
          "to": "00:13:20,340"
        },
        "offsets": {
          "from": 797100,
          "to": 800340
        },
        "text": "الـ Version أو تطلع في الـ Version لأن أنا جوه دي أقدر أقوله مثلاً"
      },
      {
        "timestamps": {
          "from": "00:13:20,340",
          "to": "00:13:24,120"
        },
        "offsets": {
          "from": 800340,
          "to": 804120
        },
        "text": "إن Flask مثلاً تكون أكبر من Version معين، أقدر أعمل ده."
      },
      {
        "timestamps": {
          "from": "00:13:24,120",
          "to": "00:13:30,060"
        },
        "offsets": {
          "from": 804120,
          "to": 810060
        },
        "text": "Ok؟ فتقدر إنك تعدل فيها التعديلات دي، فاستحسن"
      },
      {
        "timestamps": {
          "from": "00:13:30,060",
          "to": "00:13:37,560"
        },
        "offsets": {
          "from": 810060,
          "to": 817560
        },
        "text": "طبعاً إن الكلام ده يكون خارج الـ Image نفسها. يبقى"
      },
      {
        "timestamps": {
          "from": "00:13:37,560",
          "to": "00:13:41,520"
        },
        "offsets": {
          "from": 817560,
          "to": 821520
        },
        "text": "الخطوة التانية إن أنا هعمل Copy، ما فيش دلوقتي غيره، Ok؟"
      },
      {
        "timestamps": {
          "from": "00:13:41,520",
          "to": "00:13:45,660"
        },
        "offsets": {
          "from": 821520,
          "to": 825660
        },
        "text": "الخطوة اللي بعدها هعمل Copy تاني، هعمل Copy لإيه؟"
      },
      {
        "timestamps": {
          "from": "00:13:45,660",
          "to": "00:13:53,280"
        },
        "offsets": {
          "from": 825660,
          "to": 833280
        },
        "text": "للفايل، تمام؟ فين الفايل ده؟ أهو، في نفس الـ Directory اللي بعمل منه Build"
      },
      {
        "timestamps": {
          "from": "00:13:53,280",
          "to": "00:14:00,660"
        },
        "offsets": {
          "from": 833280,
          "to": 840660
        },
        "text": "جوه، وخلي بالك أنا في النص هنا لو جيت غيرت كدة"
      },
      {
        "timestamps": {
          "from": "00:14:00,660",
          "to": "00:14:07,860"
        },
        "offsets": {
          "from": 840660,
          "to": 847860
        },
        "text": "وقلت له أي حاجة، الـ code مثلاً هيتغير، اتخيل نفسك إن دي اللي"
      },
      {
        "timestamps": {
          "from": "00:14:07,860",
          "to": "00:14:19,800"
        },
        "offsets": {
          "from": 847860,
          "to": 859800
        },
        "text": "هي بعد ما أعمل Copy للفايل ده، هعمل EXPOSE لـ Port 5000، ده"
      },
      {
        "timestamps": {
          "from": "00:14:19,800",
          "to": "00:14:22,620"
        },
        "offsets": {
          "from": 859800,
          "to": 862620
        },
        "text": "instruction بيعمل Expose للـ Port."
      },
      {
        "timestamps": {
          "from": "00:14:22,620",
          "to": "00:14:26,500"
        },
        "offsets": {
          "from": 862620,
          "to": 866500
        },
        "text": "Port 5000 عشان ما تضطرش إنك تعمل الكلام ده ساعة"
      },
      {
        "timestamps": {
          "from": "00:14:26,500",
          "to": "00:14:31,020"
        },
        "offsets": {
          "from": 866500,
          "to": 871020
        },
        "text": "الـ Runtime بتاع الـ Container. آخر حاجة خالص هقول له"
      },
      {
        "timestamps": {
          "from": "00:14:31,020",
          "to": "00:14:36,920"
        },
        "offsets": {
          "from": 871020,
          "to": 876920
        },
        "text": "CMD، والـ CMD ده بيعمل Execute لـ Command. إيه الـ Command اللي أنا عايز أعمله Execution؟"
      },
      {
        "timestamps": {
          "from": "00:14:36,920",
          "to": "00:14:42,480"
        },
        "offsets": {
          "from": 876920,
          "to": 882480
        },
        "text": "اللي هو كان python hello.py، لو تفتكر الـ Execution بتاع hello.py ده"
      },
      {
        "timestamps": {
          "from": "00:14:42,480",
          "to": "00:14:46,900"
        },
        "offsets": {
          "from": 882480,
          "to": 886900
        },
        "text": "هو اللي عمل Execution للـ Flask code اللي إحنا كاتبينه وشغل"
      },
      {
        "timestamps": {
          "from": "00:14:46,900",
          "to": "00:14:52,780"
        },
        "offsets": {
          "from": 886900,
          "to": 892780
        },
        "text": "الـ Web Service بتاعة الـ Flask. نقطة هنا بس"
      },
      {
        "timestamps": {
          "from": "00:14:52,780",
          "to": "00:14:56,320"
        },
        "offsets": {
          "from": 892780,
          "to": 896320
        },
        "text": "تخلي بالك منها، ودي هنتكلم عليها بالتفصيل كمان شوية،"
      },
      {
        "timestamps": {
          "from": "00:14:56,320",
          "to": "00:15:02,260"
        },
        "offsets": {
          "from": 896320,
          "to": 902260
        },
        "text": "بس خليني أقولها لك دلوقتي، الـ Command ده بيتنفذ ساعة"
      },
      {
        "timestamps": {
          "from": "00:20:00,000",
          "to": "00:20:04,100"
        },
        "offsets": {
          "from": 1200000,
          "to": 1204100
        },
        "text": "الـ Command ده بيتنفذ ساعة الـ Runtime بتاع الـ Container."
      },
      {
        "timestamps": {
          "from": "00:20:04,100",
          "to": "00:20:07,600"
        },
        "offsets": {
          "from": 1204100,
          "to": 1207600
        },
        "text": "يعني ده مالوش لازمة إنه يتنفذ جوه الـ Image."
      },
      {
        "timestamps": {
          "from": "00:20:07,600",
          "to": "00:20:10,300"
        },
        "offsets": {
          "from": 1207600,
          "to": 1210300
        },
        "text": "الـ Image دي أصلاً شوية Layers مقفولين."
      },
      {
        "timestamps": {
          "from": "00:20:10,300",
          "to": "00:20:14,900"
        },
        "offsets": {
          "from": 1210300,
          "to": 1214900
        },
        "text": "Read-only، فإيه لازمته إن يبقى فيه Command بيشتغل جوه الـ Image؟ ملهاش أي معنى أصلاً."
      },
      {
        "timestamps": {
          "from": "00:20:14,900",
          "to": "00:20:17,900"
        },
        "offsets": {
          "from": 1214900,
          "to": 1217900
        },
        "text": "أكنك مثلاً عندك Virtual Machine مقفولة،"
      },
      {
        "timestamps": {
          "from": "00:20:17,900",
          "to": "00:20:22,400"
        },
        "offsets": {
          "from": 1217900,
          "to": 1222400
        },
        "text": "وبتقولي جوه الـ Virtual Machine المقفولة دي افتح لي الـ Notepad، ما هي مقفولة أصلاً."
      },
      {
        "timestamps": {
          "from": "00:20:22,400",
          "to": "00:20:25,700"
        },
        "offsets": {
          "from": 1222400,
          "to": 1225700
        },
        "text": "فيبقى فيه Command فيه Instructions"
      },
      {
        "timestamps": {
          "from": "00:20:25,700",
          "to": "00:20:29,000"
        },
        "offsets": {
          "from": 1225700,
          "to": 1229000
        },
        "text": "جوه الـ Dockerfile مابتتنفذش"
      },
      {
        "timestamps": {
          "from": "00:20:29,000",
          "to": "00:20:34,340"
        },
        "offsets": {
          "from": 1229000,
          "to": 1234340
        },
        "text": "إلا ساعة الـ Run بتاع الـ Container."
      },
      {
        "timestamps": {
          "from": "00:20:34,340",
          "to": "00:20:37,740"
        },
        "offsets": {
          "from": 1234340,
          "to": 1237740
        },
        "text": "ساعة لما أشغل Container من الـ Image دي."
      },
      {
        "timestamps": {
          "from": "00:20:37,740",
          "to": "00:20:44,600"
        },
        "offsets": {
          "from": 1237740,
          "to": 1244600
        },
        "text": "الحاجات دي بتشتغل في الـ Runtime بس، دي مجرد ملحوظة بس."
      },
      {
        "timestamps": {
          "from": "00:20:44,600",
          "to": "00:20:48,040"
        },
        "offsets": {
          "from": 1244600,
          "to": 1248040
        },
        "text": "ملحوظة وأنت بتعمل Build للـ Image، إنك لما تيجي تعمل منها Container،"
      },
      {
        "timestamps": {
          "from": "00:20:48,040",
          "to": "00:20:51,000"
        },
        "offsets": {
          "from": 1248040,
          "to": 1251000
        },
        "text": "أول حاجة تتنفذ في الـ Container هو الـ Command ده."
      },
      {
        "timestamps": {
          "from": "00:20:51,000",
          "to": "00:20:57,640"
        },
        "offsets": {
          "from": 1251000,
          "to": 1257640
        },
        "text": "وغالبا هتبقى الحاجة الوحيدة اللي هتتنفذ في الـ Command لأن إحنا قلنا إن الـ Container بيبقى Process واحدة بس هي اللي شغالة."
      },
      {
        "timestamps": {
          "from": "00:20:57,640",
          "to": "00:21:08,640"
        },
        "offsets": {
          "from": 1257640,
          "to": 1268640
        },
        "text": "فلو عندك حاجات من ضمن الحاجات دي اللي ما بتتنفذش إلا ساعة ما بتعمل Create للـ Container ما بتبقاش محروقة جوة الـ Image نفسها."
      },
      {
        "timestamps": {
          "from": "00:21:08,640",
          "to": "00:21:10,900"
        },
        "offsets": {
          "from": 1268640,
          "to": 1270900
        },
        "text": "بتبقى موجودة في الـ Metadata بتاعت الـ Image."
      },
      {
        "timestamps": {
          "from": "00:21:10,900",
          "to": "00:21:15,280"
        },
        "offsets": {
          "from": 1270900,
          "to": 1275280
        },
        "text": "فالـ Image هيبقى ليها الـ Layers بتاعتها وهيبقى ليها الـ Metadata."
      },
      {
        "timestamps": {
          "from": "00:21:15,280",
          "to": "00:21:19,340"
        },
        "offsets": {
          "from": 1275280,
          "to": 1279340
        },
        "text": "ولذلك الـ Instructions دي فيه Instructions بتعمل تعديلات."
      },
      {
        "timestamps": {
          "from": "00:21:19,340",
          "to": "00:21:22,460"
        },
        "offsets": {
          "from": 1279340,
          "to": 1282460
        },
        "text": "يعني مثلا أنا هنا عملت Create لـ Directory اسمه /app."
      },
      {
        "timestamps": {
          "from": "00:21:22,460",
          "to": "00:21:26,040"
        },
        "offsets": {
          "from": 1282460,
          "to": 1286040
        },
        "text": "فالـ Creation بتاع الـ Directory ده حاجة بتعدل في الـ Layers."
      },
      {
        "timestamps": {
          "from": "00:21:26,040",
          "to": "00:21:34,500"
        },
        "offsets": {
          "from": 1286040,
          "to": 1294500
        },
        "text": "ده تعديل في الـ Layers نفسها. ففي Commands عندي بتعدل في الـ Layers زي:"
      },
      {
        "timestamps": {
          "from": "00:21:34,500",
          "to": "00:21:38,340"
        },
        "offsets": {
          "from": 1294500,
          "to": 1298340
        },
        "text": "مثلاً إني أعمل Create لـ Directory. الـ WORKDIR لوحدها ما بتعدلش في الـ"
      },
      {
        "timestamps": {
          "from": "00:21:38,340",
          "to": "00:21:41,700"
        },
        "offsets": {
          "from": 1298340,
          "to": 1301700
        },
        "text": "Layers. إنما الـ WORKDIR لو اضطرت تعمل Create للـ Directory يبقى"
      },
      {
        "timestamps": {
          "from": "00:21:41,700",
          "to": "00:21:46,200"
        },
        "offsets": {
          "from": 1301700,
          "to": 1306200
        },
        "text": "عدلت في الـ Layers. وعندك مثلاً Commands زي COPY و ADD زي ما هنشوف"
      },
      {
        "timestamps": {
          "from": "00:21:46,200",
          "to": "00:21:51,000"
        },
        "offsets": {
          "from": 1306200,
          "to": 1311000
        },
        "text": "كمان شوية. الحاجات دي بتعمل حاجة ما كانتش موجودة قبل كده في"
      },
      {
        "timestamps": {
          "from": "00:21:51,000",
          "to": "00:21:57,120"
        },
        "offsets": {
          "from": 1311000,
          "to": 1317120
        },
        "text": "الـ File System. ففي تغيير حصل في الـ File System. أي أمر بيعمل تغيير في"
      },
      {
        "timestamps": {
          "from": "00:21:57,120",
          "to": "00:22:02,760"
        },
        "offsets": {
          "from": 1317120,
          "to": 1322760
        },
        "text": "الـ File System بيعتبر زيادة. Docker بينفذ الكلام ده إزاي بقى؟"
      },
      {
        "timestamps": {
          "from": "00:22:02,760",
          "to": "00:22:09,120"
        },
        "offsets": {
          "from": 1322760,
          "to": 1329120
        },
        "text": "هنشوف كده وإحنا بنعمل Build للـ Image دي. هنشوف إزاي Docker بينفذ"
      },
      {
        "timestamps": {
          "from": "00:22:09,120",
          "to": "00:22:12,660"
        },
        "offsets": {
          "from": 1329120,
          "to": 1332660
        },
        "text": "الكلام ده لأننا هنشوف الـ output بتاعه. خلاص يبقى أنا كده عندي الخطوات"
      },
      {
        "timestamps": {
          "from": "00:22:12,660",
          "to": "00:22:15,840"
        },
        "offsets": {
          "from": 1332660,
          "to": 1335840
        },
        "text": "هي هي تقريباً نفس الخطوات اللي أنا عملتها، أو نفس"
      },
      {
        "timestamps": {
          "from": "00:21:15,840",
          "to": "00:22:21,840"
        },
        "offsets": {
          "from": 1335840,
          "to": 1341840
        },
        "text": "نتائج الخطوات اللي أنا عملتها. بدأت بالـ Python base image، عملت Create"
      },
      {
        "timestamps": {
          "from": "00:22:21,840",
          "to": "00:22:29,340"
        },
        "offsets": {
          "from": 1341840,
          "to": 1349340
        },
        "text": "لـ Directory وعملت Change directory ليه. عملت Install للـ Flask"
      },
      {
        "timestamps": {
          "from": "00:22:29,340",
          "to": "00:22:37,920"
        },
        "offsets": {
          "from": 1349340,
          "to": 1357920
        },
        "text": "Framework. كنت كاتب الكود قبلها في مكان وقلت له يعمل Copy"
      },
      {
        "timestamps": {
          "from": "00:22:37,920",
          "to": "00:22:42,120"
        },
        "offsets": {
          "from": 1357920,
          "to": 1362120
        },
        "text": "للفايل ده جوه الـ Image. ما احتجتش إني أدخل بقى جوه الـ Image وأفتح"
      },
      {
        "timestamps": {
          "from": "00:22:42,120",
          "to": "00:22:46,620"
        },
        "offsets": {
          "from": 1362120,
          "to": 1366620
        },
        "text": "الـ VIM وأكتبه وأعمل Copy/Paste للكود. لا أنا مجهز الكود على"
      },
      {
        "timestamps": {
          "from": "00:22:46,620",
          "to": "00:22:53,580"
        },
        "offsets": {
          "from": 1366620,
          "to": 1373580
        },
        "text": "جنب وعملت له Copy جوه الـ Image. وبعد كده قلت له لما"
      },
      {
        "timestamps": {
          "from": "00:22:53,580",
          "to": "00:22:58,860"
        },
        "offsets": {
          "from": 1373580,
          "to": 1378860
        },
        "text": "أجي أعمل Create لـ Container بناءً على الـ Image اللي إنت بنتها لي دي، اعمل"
      },
      {
        "timestamps": {
          "from": "00:22:58,860",
          "to": "00:23:03,060"
        },
        "offsets": {
          "from": 1378860,
          "to": 1383060
        },
        "text": "Expose لـ Port 5000 واعمل Run للـ Command ده. تعالوا بقى نشوف"
      },
      {
        "timestamps": {
          "from": "00:23:03,060",
          "to": "00:23:09,960"
        },
        "offsets": {
          "from": 1383060,
          "to": 1389960
        },
        "text": "الكلام ده In Action. عشان أقول لـ Docker يبني لي Image بناءً على"
      },
      {
        "timestamps": {
          "from": "00:23:09,960",
          "to": "00:23:17,400"
        },
        "offsets": {
          "from": 1389960,
          "to": 1397400
        },
        "text": "الـ Instructions اللي في الـ Dockerfile دي، هقول له Docker Build. بعد ما بقول"
      },
      {
        "timestamps": {
          "from": "00:23:17,400",
          "to": "00:23:20,040"
        },
        "offsets": {
          "from": 1397400,
          "to": 1400040
        },
        "text": "له Docker Build لازم أقول له اسم الـ Image إيه؟ زي ما جينا عملنا"
      },
      {
        "timestamps": {
          "from": "00:23:20,040",
          "to": "00:23:23,400"
        },
        "offsets": {
          "from": 1400040,
          "to": 1403400
        },
        "text": "Docker Commit، لما خلصنا الـ Container وخرجنا منه وقلت له"
      },
      {
        "timestamps": {
          "from": "00:23:23,400",
          "to": "00:23:26,760"
        },
        "offsets": {
          "from": 1403400,
          "to": 1406760
        },
        "text": "Docker Commit. هنا هقول له Docker Build، وهقول له t- عشان أعرف"
      },
      {
        "timestamps": {
          "from": "00:23:26,760",
          "to": "00:23:31,020"
        },
        "offsets": {
          "from": 1406760,
          "to": 1411020
        },
        "text": "له الـ Tag بتاع الـ Image دي. فهقول له زي ما عملنا من شوية، كانت"
      },
      {
        "timestamps": {
          "from": "00:23:31,020",
          "to": "00:23:35,760"
        },
        "offsets": {
          "from": 1411020,
          "to": 1415760
        },
        "text": "الـ Image هي asami76 ودي كانت"
      },
      {
        "timestamps": {
          "from": "00:23:35,760",
          "to": "00:23:42,420"
        },
        "offsets": {
          "from": 1415760,
          "to": 1422420
        },
        "text": "هاجي هنا كده أقول له asami76/نفس الاسم"
      },
      {
        "timestamps": {
          "from": "00:23:42,420",
          "to": "00:23:49,740"
        },
        "offsets": {
          "from": 1422420,
          "to": 1429740
        },
        "text": "بالظبط بس المرة دي هحط Tag. وبعدين لازم أديله، لازم"
      },
      {
        "timestamps": {
          "from": "00:23:49,740",
          "to": "00:23:54,480"
        },
        "offsets": {
          "from": 1429740,
          "to": 1434480
        },
        "text": "أقول له إنت هتعمل Build منين؟ حدد المكان اللي هتعمل منه Build. وهنا على"
      },
      {
        "timestamps": {
          "from": "00:23:54,480",
          "to": "00:24:02,280"
        },
        "offsets": {
          "from": 1442280,
          "to": 1442280
        },
        "text": "فكرة الحاجة الجميلة إن إنت ممكن تشاور له بأكثر"
      },
      {
        "timestamps": {
          "from": "00:24:02,280",
          "to": "00:24:06,300"
        },
        "offsets": {
          "from": 1442280,
          "to": 1446300
        },
        "text": "من طريقة. ممكن أقول له بص في نفس المكان اللي أنا واقف"
      },
      {
        "timestamps": {
          "from": "00:24:06,300",
          "to": "00:24:11,760"
        },
        "offsets": {
          "from": 1446300,
          "to": 1451760
        },
        "text": "عليه ده، دور على الـ Dockerfile. والـ Dockerfile اسمه اللي"
      },
      {
        "timestamps": {
          "from": "00:24:11,760",
          "to": "00:24:16,020"
        },
        "offsets": {
          "from": 1451760,
          "to": 1456020
        },
        "text": "هو Dockerfile اللي شفناه والـ D capital. تمام؟ وممكن أديله GitHub"
      },
      {
        "timestamps": {
          "from": "00:24:16,020",
          "to": "00:24:21,900"
        },
        "offsets": {
          "from": 1456020,
          "to": 1461900
        },
        "text": "Location. أقول له روح على الـ GitHub Repo ده، ومن جوه الـ Repo دور."
      },
      {
        "timestamps": {
          "from": "00:24:21,900",
          "to": "00:24:25,980"
        },
        "offsets": {
          "from": 1461900,
          "to": 1465980
        },
        "text": "على Dockerfile واعمل Build لـ Image. ودي بقى من الحاجات الجميلة جداً"
      },
      {
        "timestamps": {
          "from": "00:24:25,980",
          "to": "00:24:30,120"
        },
        "offsets": {
          "from": 1465980,
          "to": 1470120
        },
        "text": "جداً. وممكن يكون Docker Hub ده موجود مثلاً في Tarball file."
      },
      {
        "timestamps": {
          "from": "00:24:30,120",
          "to": "00:24:40,120"
        },
        "offsets": {
          "from": 1470120,
          "to": 1480120
        },
        "text": "أوكي في Archive file، وأقول له Build لـ Docker Image دي من Dockerfile اللي جوه الـ Archive"
      },
      {
        "timestamps": {
          "from": "00:24:40,120",
          "to": "00:24:52,660"
        },
        "offsets": {
          "from": 1480120,
          "to": 1492660
        },
        "text": "عندي كذا Option في الموضوع ده، فدي من الحاجات العظيمة جداً في Docker، وده برضه من الحاجات اللي بتخليك تعرف تشوف شكل التعاون ما بين Docker وما بين GitHub"
      },
      {
        "timestamps": {
          "from": "00:24:52,660",
          "to": "00:24:55,660"
        },
        "offsets": {
          "from": 1492660,
          "to": 1495660
        },
        "text": "وهنعمله"
      },
      {
        "timestamps": {
          "from": "00:24:55,660",
          "to": "00:24:58,660"
        },
        "offsets": {
          "from": 1495660,
          "to": 1498660
        },
        "text": "لما نيجي نعمله"
      },
      {
        "timestamps": {
          "from": "00:24:58,660",
          "to": "00:25:01,660"
        },
        "offsets": {
          "from": 1498660,
          "to": 1501660
        },
        "text": "خلونا نبص واحدة واحدة على المستخدمين"
      },
      {
        "timestamps": {
          "from": "00:30:00,000",
          "to": "00:30:06,880"
        },
        "offsets": {
          "from": 1800000,
          "to": 1806880
        },
        "text": "واحدة واحدة على الـ Output علشان نفهم ده تم إزاي. في الأول خالص"
      },
      {
        "timestamps": {
          "from": "00:30:06,880",
          "to": "00:30:16,500"
        },
        "offsets": {
          "from": 1806880,
          "to": 1816500
        },
        "text": "فين الـ Scroll؟ أيوه. في الأول خالص قال لي كالعادة"
      },
      {
        "timestamps": {
          "from": "00:30:16,500",
          "to": "00:30:21,240"
        },
        "offsets": {
          "from": 1816500,
          "to": 1821240
        },
        "text": "أنت عندك Dockerfile فابعته لـ Docker Daemon. أول خطوة قال لك"
      },
      {
        "timestamps": {
          "from": "00:30:21,240",
          "to": "00:30:27,900"
        },
        "offsets": {
          "from": 1821240,
          "to": 1827900
        },
        "text": "Step 1 of 7. Step 1 of 7 يبقى أول حاجة راح عمل"
      },
      {
        "timestamps": {
          "from": "00:30:27,900",
          "to": "00:30:33,660"
        },
        "offsets": {
          "from": 1827900,
          "to": 1833660
        },
        "text": "الـ Layer دي عبارة عن إيه؟ عبارة عن الـ Base image اللي هي"
      },
      {
        "timestamps": {
          "from": "00:30:33,660",
          "to": "00:30:40,860"
        },
        "offsets": {
          "from": 1833660,
          "to": 1840860
        },
        "text": "Python. الخطوة اللي بعدها دي، علشان ماكانتش موجودة فراح عامل"
      },
      {
        "timestamps": {
          "from": "00:30:40,860",
          "to": "00:30:46,080"
        },
        "offsets": {
          "from": 1840860,
          "to": 1846080
        },
        "text": "برضه Layer تانية. الشغل اللي بيعمله ده بيعمله"
      },
      {
        "timestamps": {
          "from": "00:30:46,080",
          "to": "00:30:53,640"
        },
        "offsets": {
          "from": 1846080,
          "to": 1853640
        },
        "text": "فين؟ بيعملها في كل مرة يحتاج إنه يعدل تعديل."
      },
      {
        "timestamps": {
          "from": "00:30:53,640",
          "to": "00:31:12,280"
        },
        "offsets": {
          "from": 1853640,
          "to": 1872280
        },
        "text": "الـ Layers دي بتتعمل في زي Temp Container، يعني تقريباً بيعمل نفس اللي حضرتك عملته بالظبط. وإحنا عملنا Build لـ Image إزاي؟ عملنا Temp Container وجوه الـ Container عملنا التعديل بتاعنا وبعد ما"
      },
      {
        "timestamps": {
          "from": "00:31:12,280",
          "to": "00:31:22,380"
        },
        "offsets": {
          "from": 1872280,
          "to": 1882380
        },
        "text": "عدلنا في الـ Container خرجنا منه وبنينا Image، عملنا Commit لـ Image based on الـ Container ده. ده تقريباً اللي بيعمله Docker في الـ Background."
      },
      {
        "timestamps": {
          "from": "00:31:22,380",
          "to": "00:31:44,040"
        },
        "offsets": {
          "from": 1882380,
          "to": 1904040
        },
        "text": "بس اللي بيعمله إن كل Step بتعملها وبتعدل بيعمل قصادها Layer. إنما اللي أنت عملته وعملت Commit بعدين إن كل اللي أنت عملته ده كان في Layer واحدة بس."
      },
      {
        "timestamps": {
          "from": "00:31:44,040",
          "to": "00:31:47,460"
        },
        "offsets": {
          "from": 1904040,
          "to": 1907460
        },
        "text": "Layer واحدة بس. فكل اللي أنت عملته كان Layer واحدة بس. هنا"
      },
      {
        "timestamps": {
          "from": "00:31:47,460",
          "to": "00:31:51,900"
        },
        "offsets": {
          "from": 1907460,
          "to": 1911900
        },
        "text": "بيعمله على أكتر من Layer. يبقى الخطوة الأولانية عمل Layer. بعد كدة"
      },
      {
        "timestamps": {
          "from": "00:31:51,900",
          "to": "00:31:57,360"
        },
        "offsets": {
          "from": 1911900,
          "to": 1917360
        },
        "text": "عمل Layer تانية. بعد كدة راح عمل للـ Container. وبعدين راح خد Layer"
      },
      {
        "timestamps": {
          "from": "00:31:57,360",
          "to": "00:32:02,880"
        },
        "offsets": {
          "from": 1917360,
          "to": 1922880
        },
        "text": "تانية من الـ Two layers دول. بعد كدة في الخطوة التالتة عمل عليها"
      },
      {
        "timestamps": {
          "from": "00:32:02,880",
          "to": "00:32:10,080"
        },
        "offsets": {
          "from": 1922880,
          "to": 1930080
        },
        "text": "Layer. الـ RUN بتاع pip install اللي عمل Install لـ Flask. تمام؟ عمل"
      },
      {
        "timestamps": {
          "from": "00:32:10,080",
          "to": "00:32:17,940"
        },
        "offsets": {
          "from": 1930080,
          "to": 1937940
        },
        "text": "عليها تمام، وده الـ ID بتاع التعديل اللي أنت عملته. تمام؟ فراح"
      },
      {
        "timestamps": {
          "from": "00:32:17,940",
          "to": "00:32:21,780"
        },
        "offsets": {
          "from": 1937940,
          "to": 1941780
        },
        "text": "عامل Pull للفلاسك وعمل له Install. أوكي؟"
      },
      {
        "timestamps": {
          "from": "00:32:21,780",
          "to": "00:32:29,760"
        },
        "offsets": {
          "from": 1941780,
          "to": 1949760
        },
        "text": "بعد ما خلص الكلام ده راح عمل للـ Container. فهتلاقي واحدة واحدة"
      },
      {
        "timestamps": {
          "from": "00:32:29,760",
          "to": "00:32:34,680"
        },
        "offsets": {
          "from": 1949760,
          "to": 1954680
        },
        "text": "بيعمل كدة كل مرة، يعمل Container ويعدل تعديل ويقفل"
      },
      {
        "timestamps": {
          "from": "00:32:34,680",
          "to": "00:32:40,020"
        },
        "offsets": {
          "from": 1954680,
          "to": 1960020
        },
        "text": "الـ Container. تعديل واحد ويقفل الـ Container وهكذا. خلص خالص الكلام"
      },
      {
        "timestamps": {
          "from": "00:32:40,020",
          "to": "00:32:49,020"
        },
        "offsets": {
          "from": 1960020,
          "to": 1969020
        },
        "text": "ده لغاية ما الخطوة دي خلصناها برضه."
      },
      {
        "timestamps": {
          "from": "00:32:49,020",
          "to": "00:32:55,680"
        },
        "offsets": {
          "from": 1969020,
          "to": 1975680
        },
        "text": "في الآخر خالص راح عامل بعد ما خلص الـ Copy للفايل اللي هو"
      },
      {
        "timestamps": {
          "from": "00:32:55,680",
          "to": "00:32:59,400"
        },
        "offsets": {
          "from": 1975680,
          "to": 1979400
        },
        "text": "hello.py ده كان الخطوة الخامسة. الخطوة السادسة كانت الـ EXPOSE بتاع"
      },
      {
        "timestamps": {
          "from": "00:32:59,400",
          "to": "00:33:03,960"
        },
        "offsets": {
          "from": 1979400,
          "to": 1983960
        },
        "text": "Port 5000. عمل لي Intermediate Container. آخر حاجة"
      },
      {
        "timestamps": {
          "from": "00:33:03,960",
          "to": "00:33:10,320"
        },
        "offsets": {
          "from": 1983960,
          "to": 1990320
        },
        "text": "خالص اللي هي الـ CMD. وفي الآخر خالص خلص الـ Build. بص هنا كدة على"
      },
      {
        "timestamps": {
          "from": "00:33:10,320",
          "to": "00:33:17,880"
        },
        "offsets": {
          "from": 1990320,
          "to": 1997880
        },
        "text": "الشمال هتلاقي إنه بقى في عندي Images. يعني"
      },
      {
        "timestamps": {
          "from": "00:33:17,880",
          "to": "00:33:26,880"
        },
        "offsets": {
          "from": 1997880,
          "to": 2006880
        },
        "text": "عندي أوكي؟ واحدة Python والتانية Image تانية. أوكي؟ تعالوا"
      },
      {
        "timestamps": {
          "from": "00:33:26,880",
          "to": "00:33:33,600"
        },
        "offsets": {
          "from": 2006880,
          "to": 2013600
        },
        "text": "هنعمل Inspect لـ Images دي. لو جيت عملت Inspect لـ Image دي كدة، هننزل ده شوية"
      },
      {
        "timestamps": {
          "from": "00:33:33,600",
          "to": "00:33:42,240"
        },
        "offsets": {
          "from": 2013600,
          "to": 2022240
        },
        "text": "هتلاقي إن دي الـ Metadata بتاعة الـ Image دي اللي بتقولك الـ Image دي إيه، ده الـ Inspection بتاع الـ Image."
      },
      {
        "timestamps": {
          "from": "00:33:42,240",
          "to": "00:33:51,840"
        },
        "offsets": {
          "from": 2022240,
          "to": 2031840
        },
        "text": "هتلاقي إن ده اسم الـ Repository والـ Tag لاسم الـ Image، يعني ده الـ Parent بتاع الـ Image اللي هو الـ Python."
      },
      {
        "timestamps": {
          "from": "00:33:51,840",
          "to": "00:33:55,440"
        },
        "offsets": {
          "from": 2031840,
          "to": 2035440
        },
        "text": "وهتلاقي لو نزلنا تحت شوية كدة"
      },
      {
        "timestamps": {
          "from": "00:33:56,880",
          "to": "00:34:16,540"
        },
        "offsets": {
          "from": 2036880,
          "to": 2056540
        },
        "text": "هتلاقي إنه من ضمن الـ Configurations اللي جوه الـ Metadata بتاعة الـ Image دي، عندي هنا CMD ومكتوب فيها /bin/sh"
      },
      {
        "timestamps": {
          "from": "00:34:16,540",
          "to": "00:34:18,540"
        },
        "offsets": {
          "from": 2056540,
          "to": 2058540
        },
        "text": "عارف منين"
      },
      {
        "timestamps": {
          "from": "00:34:18,540",
          "to": "00:34:20,200"
        },
        "offsets": {
          "from": 2058540,
          "to": 2060200
        },
        "text": "إني عايز أعمل Execute"
      },
      {
        "timestamps": {
          "from": "00:34:20,200",
          "to": "00:34:22,680"
        },
        "offsets": {
          "from": 2060200,
          "to": 2062680
        },
        "text": "من الـ Shell command ده Default؟"
      },
      {
        "timestamps": {
          "from": "00:34:22,680",
          "to": "00:34:24,740"
        },
        "offsets": {
          "from": 2062680,
          "to": 2064740
        },
        "text": "ده Default بالذات لو إنت كتبت"
      },
      {
        "timestamps": {
          "from": "00:34:24,740",
          "to": "00:34:26,560"
        },
        "offsets": {
          "from": 2064740,
          "to": 2066560
        },
        "text": "له الـ CMD من غير"
      },
      {
        "timestamps": {
          "from": "00:34:26,560",
          "to": "00:34:28,700"
        },
        "offsets": {
          "from": 2066560,
          "to": 2068700
        },
        "text": "الأقواس اللي إحنا هنتكلم عليها كمان شوية"
      },
      {
        "timestamps": {
          "from": "00:34:28,700",
          "to": "00:34:30,460"
        },
        "offsets": {
          "from": 2068700,
          "to": 2070460
        },
        "text": "بس هو By default عارف إنك عايز"
      },
      {
        "timestamps": {
          "from": "00:34:30,460",
          "to": "00:34:31,420"
        },
        "offsets": {
          "from": 2070460,
          "to": 2071420
        },
        "text": "تعمل Run من الـ Shell command"
      },
      {
        "timestamps": {
          "from": "00:34:31,420",
          "to": "00:34:34,340"
        },
        "offsets": {
          "from": 2071420,
          "to": 2074340
        },
        "text": "هيعمل Execute لـ python.py"
      },
      {
        "timestamps": {
          "from": "00:34:34,340",
          "to": "00:34:36,800"
        },
        "offsets": {
          "from": 2074340,
          "to": 2076800
        },
        "text": "وفي الآخر برضه هنا"
      },
      {
        "timestamps": {
          "from": "00:34:36,800",
          "to": "00:34:38,720"
        },
        "offsets": {
          "from": 2076800,
          "to": 2078720
        },
        "text": "خد هنا بس عشان الوقت"
      },
      {
        "timestamps": {
          "from": "00:34:38,720",
          "to": "00:34:38,980"
        },
        "offsets": {
          "from": 2078720,
          "to": 2078980
        },
        "text": "بالشكل ده"
      },
      {
        "timestamps": {
          "from": "00:34:38,980",
          "to": "00:34:42,340"
        },
        "offsets": {
          "from": 2078980,
          "to": 2082340
        },
        "text": "Exposed ports"
      },
      {
        "timestamps": {
          "from": "00:34:42,340",
          "to": "00:34:44,400"
        },
        "offsets": {
          "from": 2082340,
          "to": 2084400
        },
        "text": "اللي هو ده"
      },
      {
        "timestamps": {
          "from": "00:34:44,400",
          "to": "00:34:45,980"
        },
        "offsets": {
          "from": 2084400,
          "to": 2085980
        },
        "text": "في حين إنه"
      },
      {
        "timestamps": {
          "from": "00:34:45,980",
          "to": "00:34:49,700"
        },
        "offsets": {
          "from": 2085980,
          "to": 2089700
        },
        "text": "الـ Image اللي إحنا عملناها قبل كده، تعال نبص عليها. تعال نعمل Inspect"
      },
      {
        "timestamps": {
          "from": "00:34:49,700",
          "to": "00:34:53,700"
        },
        "offsets": {
          "from": 2089700,
          "to": 2093700
        },
        "text": "للـ Image اللي إحنا عملناها قبل كده عن طريق الـ Container."
      },
      {
        "timestamps": {
          "from": "00:34:53,700",
          "to": "00:35:00,320"
        },
        "offsets": {
          "from": 2093700,
          "to": 2100320
        },
        "text": "هاجي أبص على الـ Ports دي هلاقي إنه مش عامل في الـ Metadata إن أنا"
      },
      {
        "timestamps": {
          "from": "00:40:00,000",
          "to": "00:40:04,860"
        },
        "offsets": {
          "from": 2400000,
          "to": 2404860
        },
        "text": "إني عامل Expose للبورتس. مش قايل إنه عامل Expose للبورتس."
      },
      {
        "timestamps": {
          "from": "00:40:04,860",
          "to": "00:40:11,340"
        },
        "offsets": {
          "from": 2404860,
          "to": 2411340
        },
        "text": "هاجي أبص على الـ CMD، هنا هلاقي إن الـ CMD هو bash. الـ bash ده"
      },
      {
        "timestamps": {
          "from": "00:40:11,340",
          "to": "00:40:16,680"
        },
        "offsets": {
          "from": 2411340,
          "to": 2416680
        },
        "text": "جاي منين؟ ده واخدها Inherited من الـ Python. فمفيش عندي اللي هو"
      },
      {
        "timestamps": {
          "from": "00:40:16,680",
          "to": "00:40:20,400"
        },
        "offsets": {
          "from": 2416680,
          "to": 2420400
        },
        "text": "الـ Command line ده. وبالتالي أنا لما كنت بعمل Create لـ Container من الـ Image"
      },
      {
        "timestamps": {
          "from": "00:40:20,400",
          "to": "00:40:24,360"
        },
        "offsets": {
          "from": 2420400,
          "to": 2424360
        },
        "text": "القديمة دي كنت مضطر إني في الآخر وأنا بعمل Create للـ Container أقول"
      },
      {
        "timestamps": {
          "from": "00:40:24,360",
          "to": "00:40:31,260"
        },
        "offsets": {
          "from": 2424360,
          "to": 2431260
        },
        "text": "بقول له عايز python hello.py. تعال بقى"
      },
      {
        "timestamps": {
          "from": "00:40:31,260",
          "to": "00:40:37,800"
        },
        "offsets": {
          "from": 2431260,
          "to": 2437800
        },
        "text": "نعمل Create لـ Container من الـ Image الجديدة دي، اللي مبنية جديد دي. فهقول"
      },
      {
        "timestamps": {
          "from": "00:40:37,800",
          "to": "00:40:48,420"
        },
        "offsets": {
          "from": 2437800,
          "to": 2448420
        },
        "text": "له docker container -d عايزه في الـ Background. وهقول له"
      },
      {
        "timestamps": {
          "from": "00:40:48,420",
          "to": "00:40:54,240"
        },
        "offsets": {
          "from": 2448420,
          "to": 2454240
        },
        "text": "اسم الـ Image دي زي ما هي، خليني بس بدل ما نقعد نغلط"
      },
      {
        "timestamps": {
          "from": "00:40:54,240",
          "to": "00:41:03,700"
        },
        "offsets": {
          "from": 2454240,
          "to": 2463700
        },
        "text": "في الـ Spelling. هسميه برضه py-flask."
      },
      {
        "timestamps": {
          "from": "00:41:03,700",
          "to": "00:41:14,020"
        },
        "offsets": {
          "from": 2463700,
          "to": 2474020
        },
        "text": "وفي الآخر هباصي له اسم الـ Image تمام؟ الـ Repo بالـ Tag. أوكي؟"
      },
      {
        "timestamps": {
          "from": "00:41:14,020",
          "to": "00:41:22,000"
        },
        "offsets": {
          "from": 2474020,
          "to": 2482000
        },
        "text": "ونعمل Execute. تمام؟ الـ Execution تم. الـ Container اشتغل وهو"
      },
      {
        "timestamps": {
          "from": "00:41:22,000",
          "to": "00:41:31,260"
        },
        "offsets": {
          "from": 2482000,
          "to": 2491260
        },
        "text": "شغال تمام. وهتلاقي إنه 5000. خلينا نتأكد كده، كان لازم"
      },
      {
        "timestamps": {
          "from": "00:41:31,260",
          "to": "00:41:35,760"
        },
        "offsets": {
          "from": 2491260,
          "to": 2495760
        },
        "text": "أعتقد إني كان لازم أعمل دي، كان لازم إننا"
      },
      {
        "timestamps": {
          "from": "00:41:35,760",
          "to": "00:41:41,360"
        },
        "offsets": {
          "from": 2495760,
          "to": 2501360
        },
        "text": "نسيت إني أحط -p، مش تفكروني؟ خلينا نعيد ده تاني"
      },
      {
        "timestamps": {
          "from": "00:41:41,360",
          "to": "00:41:51,660"
        },
        "offsets": {
          "from": 2501360,
          "to": 2511660
        },
        "text": "معلش، وهاجي هنا أقول له -p 5000:5000"
      },
      {
        "timestamps": {
          "from": "00:41:52,000",
          "to": "00:41:57,700"
        },
        "offsets": {
          "from": 2512000,
          "to": 2517700
        },
        "text": "أوكي. عملت الـ Container. شغال في الـ Background. هروح تاني على"
      },
      {
        "timestamps": {
          "from": "00:41:57,700",
          "to": "00:42:05,200"
        },
        "offsets": {
          "from": 2517700,
          "to": 2525200
        },
        "text": "الـ Browser. نفس الكلام بتاع المرة اللي فاتت بالظبط. يعني برضه"
      },
      {
        "timestamps": {
          "from": "00:42:05,200",
          "to": "00:42:12,640"
        },
        "offsets": {
          "from": 2525200,
          "to": 2532640
        },
        "text": "هنا أبو شيماء لسه موجود معانا. دلوقتي بقى لو أنا"
      },
      {
        "timestamps": {
          "from": "00:42:12,640",
          "to": "00:42:16,060"
        },
        "offsets": {
          "from": 2532640,
          "to": 2536060
        },
        "text": "حبيت إني أعدل أي تعديل في الـ Image دي، مش محتاج أفتح"
      },
      {
        "timestamps": {
          "from": "00:42:16,060",
          "to": "00:42:20,860"
        },
        "offsets": {
          "from": 2536060,
          "to": 2540860
        },
        "text": "Container وأعدل فيه وأغير في الكود وبعدين أعمل Exit وأروح"
      },
      {
        "timestamps": {
          "from": "00:42:20,860",
          "to": "00:42:25,060"
        },
        "offsets": {
          "from": 2540860,
          "to": 2545060
        },
        "text": "أعمل Commit، مش هحتاج أي حاجة من دي خالص. كل ما هنالك إن أنا"
      },
      {
        "timestamps": {
          "from": "00:42:25,060",
          "to": "00:42:30,340"
        },
        "offsets": {
          "from": 2545060,
          "to": 2550340
        },
        "text": "هاجي هنا، قال لنا نوقف الـ Container ده خلاص مش عايزينه، قمت جاي كده"
      },
      {
        "timestamps": {
          "from": "00:42:30,340",
          "to": "00:42:39,460"
        },
        "offsets": {
          "from": 2550340,
          "to": 2559460
        },
        "text": "هنا مثلاً على الـ hello.py وهاجي هنا كده."
      },
      {
        "timestamps": {
          "from": "00:42:39,460",
          "to": "00:42:49,340"
        },
        "offsets": {
          "from": 2559460,
          "to": 2569340
        },
        "text": "Again مثلاً، الـ simple data دي وبعدين قمت جاي هنا كده."
      },
      {
        "timestamps": {
          "from": "00:42:50,860",
          "to": "00:42:55,720"
        },
        "offsets": {
          "from": 2570860,
          "to": 2575720
        },
        "text": "قمت جاي عامل الـ Build مرة تانية، والمرة دي هقول له مثلاً.. تمام؟"
      },
      {
        "timestamps": {
          "from": "00:42:55,720",
          "to": "00:42:55,720"
        },
        "offsets": {
          "from": 2575720,
          "to": 2575720
        },
        "text": "خلص الـ Execution."
      },
      {
        "timestamps": {
          "from": "00:42:55,720",
          "to": "00:43:25,720"
        },
        "offsets": {
          "from": 2575720,
          "to": 2605720
        },
        "text": "خلص الـ Execution، بيـ Execute."
      },
      {
        "timestamps": {
          "from": "00:43:25,720",
          "to": "00:43:32,080"
        },
        "offsets": {
          "from": 2605720,
          "to": 2612080
        },
        "text": "هلاقي إنه عمل Image جديد وخلاص ما احتجتش بقى أفتح Container وأدخل"
      },
      {
        "timestamps": {
          "from": "00:43:32,080",
          "to": "00:43:35,620"
        },
        "offsets": {
          "from": 2612080,
          "to": 2615620
        },
        "text": "وأعدل وأعمل، مش محتاج كل الفيلم الهندي ده. كل حاجة بقت موجودة"
      },
      {
        "timestamps": {
          "from": "00:43:35,620",
          "to": "00:43:43,000"
        },
        "offsets": {
          "from": 2615620,
          "to": 2623000
        },
        "text": "بره في الـ context، كل اللي عليا دلوقتي إني أعمله إن أنا"
      },
      {
        "timestamps": {
          "from": "00:43:43,000",
          "to": "00:43:53,140"
        },
        "offsets": {
          "from": 2623000,
          "to": 2633140
        },
        "text": "أجي هنا نفس ده هو هو هعمله وأرفعه على الـ GitHub عندي. خلاص"
      },
      {
        "timestamps": {
          "from": "00:43:53,140",
          "to": "00:43:57,640"
        },
        "offsets": {
          "from": 2633140,
          "to": 2637640
        },
        "text": "آدي الـ Image أهي. لا محتاجة Image وبتاع ولا أي حاجة خالص. أي حد"
      },
      {
        "timestamps": {
          "from": "00:43:57,640",
          "to": "00:44:03,520"
        },
        "offsets": {
          "from": 2637640,
          "to": 2643520
        },
        "text": "هيقدر إنه يعمل Clone للـ Repo ده، ويـ Execute الـ Docker"
      },
      {
        "timestamps": {
          "from": "00:44:03,520",
          "to": "00:44:08,260"
        },
        "offsets": {
          "from": 2643520,
          "to": 2648260
        },
        "text": "Build، ويدي لها الـ Tag اللي هو عايزه، ويشاور على المكان بتاع"
      },
      {
        "timestamps": {
          "from": "00:44:08,260",
          "to": "00:44:13,660"
        },
        "offsets": {
          "from": 2648260,
          "to": 2653660
        },
        "text": "الـ Build Context، هيـ Build نفس الـ Image بتاعتي بالظبط. فالموضوع"
      },
      {
        "timestamps": {
          "from": "00:44:13,660",
          "to": "00:44:18,280"
        },
        "offsets": {
          "from": 2653660,
          "to": 2658280
        },
        "text": "كده أعتقد إن هو بقى أسهل وأشيك بكثير جداً جداً جداً من الشغل"
      },
      {
        "timestamps": {
          "from": "00:44:18,280",
          "to": "00:44:22,720"
        },
        "offsets": {
          "from": 2658280,
          "to": 2662720
        },
        "text": "البلدي اللي إحنا كنا شغالينه من شوية ده. Okay؟ فدي كده مقدمة"
      },
      {
        "timestamps": {
          "from": "00:44:22,720",
          "to": "00:44:31,660"
        },
        "offsets": {
          "from": 2662720,
          "to": 2671660
        },
        "text": "عن إزاي تـ Build الـ Image بتاعتك.. ده الاسم بتاعها. Okay؟ خلينا"
      },
      {
        "timestamps": {
          "from": "00:44:31,660",
          "to": "00:44:39,700"
        },
        "offsets": {
          "from": 2671660,
          "to": 2679700
        },
        "text": "نعمل Recap بسرعة وخلينا أوريكم من الكتاب اللي"
      },
      {
        "timestamps": {
          "from": "00:44:39,700",
          "to": "00:44:43,300"
        },
        "offsets": {
          "from": 2679700,
          "to": 2683300
        },
        "text": "إحنا كنا شغالين منه، بس هو اشتغل بمثال مختلف وأنا هسيب لكم"
      },
      {
        "timestamps": {
          "from": "00:44:43,300",
          "to": "00:44:48,100"
        },
        "offsets": {
          "from": 2683300,
          "to": 2688100
        },
        "text": "المثال المختلف ده وهسيب لكم الـ Repo بتاعه عشان تجربوه. يبقى"
      },
      {
        "timestamps": {
          "from": "00:44:48,100",
          "to": "00:44:53,620"
        },
        "offsets": {
          "from": 2688100,
          "to": 2693620
        },
        "text": "فكرة إنك تبني الكود بتاعك، تحط كل الكود على جنب،"
      },
      {
        "timestamps": {
          "from": "00:44:53,620",
          "to": "00:45:00,820"
        },
        "offsets": {
          "from": 2693620,
          "to": 2700820
        },
        "text": "والداتا بتاعتك على جنب، عدل فيها زي ما إنت عايز بره"
      },
      {
        "timestamps": {
          "from": "00:50:00,000",
          "to": "00:50:06,000"
        },
        "offsets": {
          "from": 3000000,
          "to": 3006000
        },
        "text": "عايز بره الـ Image والكلام ده. وبعدين لما تشاور بقى على الـ main"
      },
      {
        "timestamps": {
          "from": "00:50:06,000",
          "to": "00:50:09,360"
        },
        "offsets": {
          "from": 3006000,
          "to": 3009360
        },
        "text": "File زي اللي عندك، هتحتاج تعمل لها Build. الـ Context بتاعك ده اللي فيه كل"
      },
      {
        "timestamps": {
          "from": "00:50:09,360",
          "to": "00:50:16,260"
        },
        "offsets": {
          "from": 3009360,
          "to": 3016260
        },
        "text": "الكود والداتا والحاجات دي كلها، ده كله زي ما هو كده جوه الـ Context بتاعك."
      },
      {
        "timestamps": {
          "from": "00:50:16,260",
          "to": "00:50:23,700"
        },
        "offsets": {
          "from": 3016260,
          "to": 3023700
        },
        "text": "ودي الخطوات بشكل عام. بتكتب الكود بتاعك، بتعمل Dockerfile زي ما إحنا"
      },
      {
        "timestamps": {
          "from": "00:50:23,700",
          "to": "00:50:32,700"
        },
        "offsets": {
          "from": 3023700,
          "to": 3032700
        },
        "text": "بتعمل Image وترن عليها Container تتأكد إن كل حاجة تمام وبعد كده تقوم عامل لها Push للـ Registry اللي هي مثلاً Docker Hub."
      },
      {
        "timestamps": {
          "from": "00:50:32,700",
          "to": "00:50:38,700"
        },
        "offsets": {
          "from": 3032700,
          "to": 3038700
        },
        "text": "هنشوف الكلام ده برضه in action. الجزئية دي ربما تكون الجزئية اللي بتاخد أكتر وقت منك"
      },
      {
        "timestamps": {
          "from": "00:50:38,700",
          "to": "00:50:48,700"
        },
        "offsets": {
          "from": 3038700,
          "to": 3048700
        },
        "text": "لأنك هتلاقي نفسك بتعك كتير وإنت شغال. الـ instructions شكلها تافه وبسيط بس فيه شوية تركات كده لازم تخلي بالك منها."
      },
      {
        "timestamps": {
          "from": "00:50:48,700",
          "to": "00:50:53,000"
        },
        "offsets": {
          "from": 3048700,
          "to": 3053000
        },
        "text": "معظم التركات اللي لازم تخلي بالك منها، ودي هنتك عليها كمان شوية،"
      },
      {
        "timestamps": {
          "from": "00:50:53,000",
          "to": "00:50:57,700"
        },
        "offsets": {
          "from": 3053000,
          "to": 3057700
        },
        "text": "هي فكرة إنك تنقل تفكيرك، تـ Switch الـ Context بتاع التفكير بتاعك"
      },
      {
        "timestamps": {
          "from": "00:50:57,700",
          "to": "00:51:00,920"
        },
        "offsets": {
          "from": 3057700,
          "to": 3060920
        },
        "text": "من إنك بتـ Build Image ولا بتـ Run Container."
      },
      {
        "timestamps": {
          "from": "00:51:00,920",
          "to": "00:51:04,780"
        },
        "offsets": {
          "from": 3060920,
          "to": 3064780
        },
        "text": "اللي هي فكرة الـ Build time والـ Container Runtime."
      },
      {
        "timestamps": {
          "from": "00:51:04,780",
          "to": "00:51:09,480"
        },
        "offsets": {
          "from": 3064780,
          "to": 3069480
        },
        "text": "السويتش ده هو اللي لازم تركز فيه."
      },
      {
        "timestamps": {
          "from": "00:51:09,480",
          "to": "00:51:16,620"
        },
        "offsets": {
          "from": 3069480,
          "to": 3076620
        },
        "text": "نقطة تانية كمان لازم تركز فيها إن Docker Build وهو شغال بيبني Containers ويمسحها."
      },
      {
        "timestamps": {
          "from": "00:51:16,620",
          "to": "00:51:23,620"
        },
        "offsets": {
          "from": 3076620,
          "to": 3083620
        },
        "text": "فكل مرة هيبني Container ويمسحه لازم تخلي بالك إنه لما يمسحه لو إنت محتاج حاجة من القديم تتنقل معاك للجديد."
      },
      {
        "timestamps": {
          "from": "00:51:23,620",
          "to": "00:51:31,620"
        },
        "offsets": {
          "from": 3083620,
          "to": 3091620
        },
        "text": "أنا عارف إن ده غامض شوية، بس هنركز عليه أكتر أو هنتكلم عليه أكتر وإحنا بنتكلم بالتفصيل عن الـ instructions بتاعت الـ Dockerfile."
      },
      {
        "timestamps": {
          "from": "00:51:31,620",
          "to": "00:51:42,180"
        },
        "offsets": {
          "from": 3091620,
          "to": 3102180
        },
        "text": "هنا مديك مثال مثلاً وده أنا سايب لكم الـ GitHub Repo بتاع الراجل نايجل بولتون اللي عامل الكتاب."
      },
      {
        "timestamps": {
          "from": "00:51:42,180",
          "to": "00:51:50,200"
        },
        "offsets": {
          "from": 3102180,
          "to": 3110200
        },
        "text": "هو عامل Dockerfile لـ JavaScript، يعني عامل كود JavaScript بسيط."
      },
      {
        "timestamps": {
          "from": "00:52:00,200",
          "to": "00:52:05,300"
        },
        "offsets": {
          "from": 3110200,
          "to": 3125300
        },
        "text": "بيشتغل بـ Node.js، بدأ بـ Alpine Image ومنزل Node.js ومنزل الـ JavaScript code بتاعه، وبيـ Execute الكود ده وفي الآخر بيـ Run Website."
      },
      {
        "timestamps": {
          "from": "00:52:05,300",
          "to": "00:52:11,380"
        },
        "offsets": {
          "from": 3125300,
          "to": 3131380
        },
        "text": "هي هي بالضبط، بدل ما كنت بعملها بـ JavaScript وNode.js، عملتها بـ Python وFlask."
      },
      {
        "timestamps": {
          "from": "00:52:11,380",
          "to": "00:52:19,840"
        },
        "offsets": {
          "from": 3131380,
          "to": 3139840
        },
        "text": "هي هي بالضبط مش فارقة أي حاجة خالص، بس عشان أربطها بالـ Context بتاعنا اللي شغالين بيه في القناة هنا، اللي هو الـ Engineering وPython."
      },
      {
        "timestamps": {
          "from": "00:52:20,200",
          "to": "00:52:26,780"
        },
        "offsets": {
          "from": 3140200,
          "to": 3146780
        },
        "text": "فهنا بيوريك مثلاً إن أول سطر خالص في الـ Image هو FROM Alpine."
      },
      {
        "timestamps": {
          "from": "00:52:26,780",
          "to": "00:52:30,280"
        },
        "offsets": {
          "from": 3146780,
          "to": 3150280
        },
        "text": "ده أول سطر خالص موجود في الـ Dockerfile بتاعه."
      },
      {
        "timestamps": {
          "from": "00:52:30,280",
          "to": "00:52:32,640"
        },
        "offsets": {
          "from": 3150280,
          "to": 3152640
        },
        "text": "ودي الـ Base Layer."
      },
      {
        "timestamps": {
          "from": "00:52:32,640",
          "to": "00:52:36,500"
        },
        "offsets": {
          "from": 3152640,
          "to": 3156500
        },
        "text": "بعد كده RUN apk add npm."
      },
      {
        "timestamps": {
          "from": "00:52:36,500",
          "to": "00:52:40,960"
        },
        "offsets": {
          "from": 3156500,
          "to": 3160960
        },
        "text": "apk ده اللي هو الـ Package Manager بتاع Alpine."
      },
      {
        "timestamps": {
          "from": "00:52:40,960",
          "to": "00:52:44,260"
        },
        "offsets": {
          "from": 3160960,
          "to": 3164260
        },
        "text": "زي الـ apt بتاع Ubuntu أو Debian."
      },
      {
        "timestamps": {
          "from": "00:52:44,260",
          "to": "00:52:51,760"
        },
        "offsets": {
          "from": 3164260,
          "to": 3171760
        },
        "text": "تمام، هنا بعد ما يـ Run الـ apk كده تمام، وبعد كده هيقوم عامل..."
      },
      {
        "timestamps": {
          "from": "00:52:51,760",
          "to": "00:53:01,300"
        },
        "offsets": {
          "from": 3171760,
          "to": 3181300
        },
        "text": "لكل الحاجات اللي موجودة، بس خلي بالك إنه لازم يكون..."
      },
      {
        "timestamps": {
          "from": "00:53:01,300",
          "to": "00:53:05,740"
        },
        "offsets": {
          "from": 3181300,
          "to": 3185740
        },
        "text": "ده موجود هنا، مش هيـ Create، فلازم تخلي بالك منها."
      },
      {
        "timestamps": {
          "from": "00:53:05,740",
          "to": "00:53:10,840"
        },
        "offsets": {
          "from": 3185740,
          "to": 3190840
        },
        "text": "لو مش موجود وعايز تتأكد إنه موجود، ممكن تعمله، وبعد كده..."
      },
      {
        "timestamps": {
          "from": "00:53:10,840",
          "to": "00:53:24,340"
        },
        "offsets": {
          "from": 3190840,
          "to": 3204340
        },
        "text": "هيـ Run وهيـ Execute. دي الخطوات اللي بتبني بيها الـ Image."
      },
      {
        "timestamps": {
          "from": "00:53:24,340",
          "to": "00:53:30,520"
        },
        "offsets": {
          "from": 3204340,
          "to": 3210520
        },
        "text": "ده الشكل اللي لازم تخلي بالك منه وأنت بتعمل Build."
      },
      {
        "timestamps": {
          "from": "00:53:30,520",
          "to": "00:53:36,700"
        },
        "offsets": {
          "from": 3210520,
          "to": 3216700
        },
        "text": "إحنا اتكلمنا عنه قبل كده، وده هيسهل لك الموضوع. دي الطريقة..."
      },
      {
        "timestamps": {
          "from": "00:53:36,700",
          "to": "00:53:39,820"
        },
        "offsets": {
          "from": 3216700,
          "to": 3219820
        },
        "text": "اللي بيـ Execute بيها أو بيـ Run بيها زي ما عملنا بالضبط."
      },
      {
        "timestamps": {
          "from": "00:53:39,820",
          "to": "00:53:46,720"
        },
        "offsets": {
          "from": 3219820,
          "to": 3226720
        },
        "text": "container run -d، وبعد كده بيعمل Expose، وممكن تديله اسم مثلاً."
      },
      {
        "timestamps": {
          "from": "00:53:46,720",
          "to": "00:53:52,780"
        },
        "offsets": {
          "from": 3226720,
          "to": 3232780
        },
        "text": "وفي الآخر بتقول له اسم الـ Image بتاعتك اللي عملت لها Create."
      },
      {
        "timestamps": {
          "from": "00:53:52,780",
          "to": "00:54:01,840"
        },
        "offsets": {
          "from": 3232780,
          "to": 3241840
        },
        "text": "اللي الـ docker build عمل لها Create. فده بشكل عام الـ Context."
      },
      {
        "timestamps": {
          "from": "00:54:01,840",
          "to": "00:54:04,420"
        },
        "offsets": {
          "from": 3241840,
          "to": 3244420
        },
        "text": "لو فيه أي حاجة محتاجين نضيفها، هنتكلم على موضوع الـ Multi-stage..."
      },
      {
        "timestamps": {
          "from": "00:54:04,420",
          "to": "00:54:09,700"
        },
        "offsets": {
          "from": 3244420,
          "to": 3249700
        },
        "text": "في الـ Section الجاي، بس قبل ما نتنقل من الـ Section ده..."
      },
      {
        "timestamps": {
          "from": "00:54:09,700",
          "to": "00:54:14,620"
        },
        "offsets": {
          "from": 3249700,
          "to": 3254620
        },
        "text": "عشان ماننساش، إحنا دلوقتي في الـ Dockerfile اللي عملناه."
      },
      {
        "timestamps": {
          "from": "00:54:14,620",
          "to": "00:54:19,120"
        },
        "offsets": {
          "from": 3254620,
          "to": 3259120
        },
        "text": "إللي عملناه إننا سحبنا الـ Python Image، وبعد كده..."
      },
      {
        "timestamps": {
          "from": "00:54:19,120",
          "to": "00:54:25,960"
        },
        "offsets": {
          "from": 3259120,
          "to": 3265960
        },
        "text": "إدينا له شوية أوامر عشان ينفذها."
      },
      {
        "timestamps": {
          "from": "00:54:25,960",
          "to": "00:54:30,580"
        },
        "offsets": {
          "from": 3265960,
          "to": 3270580
        },
        "text": "أي تعديل قصاده بيتعمل Layer. تعالوا نشوف الكلام ده تم ولا لأ."
      },
      {
        "timestamps": {
          "from": "00:54:30,580",
          "to": "00:54:34,380"
        },
        "offsets": {
          "from": 3270580,
          "to": 3274380
        },
        "text": "إيه تاني؟ تعالوا نراجع الـ Instructions اللي هنا بتعمل Layers."
      },
      {
        "timestamps": {
          "from": "00:54:34,380",
          "to": "00:54:38,280"
        },
        "offsets": {
          "from": 3274380,
          "to": 3278280
        },
        "text": "طبعاً فيه الـ Python Image اللي اتسحبت دي أصلاً عبارة عن Layers."
      },
      {
        "timestamps": {
          "from": "00:54:38,280",
          "to": "00:54:43,080"
        },
        "offsets": {
          "from": 3278280,
          "to": 3283080
        },
        "text": "الـ WORKDIR /app ده مش موجود أصلاً في الـ Image."
      },
      {
        "timestamps": {
          "from": "00:54:43,080",
          "to": "00:54:46,080"
        },
        "offsets": {
          "from": 3283080,
          "to": 3286080
        },
        "text": "الـ Python اللي مبنية على Debian Image زي ما شفنا أول مرة."
      },
      {
        "timestamps": {
          "from": "00:54:46,080",
          "to": "00:54:48,080"
        },
        "offsets": {
          "from": 3286080,
          "to": 3288080
        },
        "text": "يبقى دي Layer."
      },
      {
        "timestamps": {
          "from": "00:54:48,080",
          "to": "00:54:53,080"
        },
        "offsets": {
          "from": 3288080,
          "to": 3293080
        },
        "text": "COPY requirements.txt، طبعاً الفايل ده مش موجود في الـ Image."
      },
      {
        "timestamps": {
          "from": "00:54:53,080",
          "to": "00:54:55,080"
        },
        "offsets": {
          "from": 3293080,
          "to": 3295080
        },
        "text": "تمام؟ فدي Layer جديدة."
      },
      {
        "timestamps": {
          "from": "00:54:55,080",
          "to": "00:54:57,080"
        },
        "offsets": {
          "from": 3295080,
          "to": 3297080
        },
        "text": "الـ RUN ده..."
      },
      {
        "timestamps": {
          "from": "00:54:57,080",
          "to": "00:55:01,320"
        },
        "offsets": {
          "from": 3297080,
          "to": 3301320
        },
        "text": "الـ RUN ده بيعمل Install للـ Module أو الـ Framework بتاع Flask."
      },
      {
        "timestamps": {
          "from": "01:00:00,000",
          "to": "01:00:05,340"
        },
        "offsets": {
          "from": 3600000,
          "to": 3605340
        },
        "text": "بتاع Flask، يبقى دي Layer تانية، وبعدين دي كمان..."
      },
      {
        "timestamps": {
          "from": "01:00:05,340",
          "to": "01:00:09,820"
        },
        "offsets": {
          "from": 3605340,
          "to": 3609820
        },
        "text": "Layer. كده بقى عندي 4 Layers زيادة."
      },
      {
        "timestamps": {
          "from": "01:00:09,820",
          "to": "01:00:14,520"
        },
        "offsets": {
          "from": 3609820,
          "to": 3614520
        },
        "text": "الـ EXPOSE والـ CMD بيعدلوا في الـ Metadata بتاعة الـ Image."
      },
      {
        "timestamps": {
          "from": "01:00:14,520",
          "to": "01:00:18,060"
        },
        "offsets": {
          "from": 3614520,
          "to": 3618060
        },
        "text": "مش بيضيفوا حاجة جوه الـ Image نفسها، هما بيعدلوا في الـ Metadata."
      },
      {
        "timestamps": {
          "from": "01:00:18,060",
          "to": "01:00:22,920"
        },
        "offsets": {
          "from": 3618060,
          "to": 3622920
        },
        "text": "بيفرقوا معانا وإحنا بنعمل Create للـ Container."
      },
      {
        "timestamps": {
          "from": "01:00:22,920",
          "to": "01:00:27,720"
        },
        "offsets": {
          "from": 3622920,
          "to": 3627720
        },
        "text": "مش بيأثروا في الـ Image Layers نفسها. تمام؟"
      },
      {
        "timestamps": {
          "from": "01:00:27,720",
          "to": "01:00:31,380"
        },
        "offsets": {
          "from": 3627720,
          "to": 3631380
        },
        "text": "هنا أربعة زيادة. ده اللي أنا متوقع إني هشوفه في الـ Image"
      },
      {
        "timestamps": {
          "from": "01:00:31,380",
          "to": "01:00:33,720"
        },
        "offsets": {
          "from": 3631380,
          "to": 3633720
        },
        "text": "الجديدة اللي اتبنت دي. تعالى نشوف الكلام ده إذا كان صح ولا"
      },
      {
        "timestamps": {
          "from": "01:00:33,720",
          "to": "01:00:38,880"
        },
        "offsets": {
          "from": 3633720,
          "to": 3638880
        },
        "text": "غلط. مبدئياً أنا عندي الـ Python Image دي. لو رحت عملت لها"
      },
      {
        "timestamps": {
          "from": "01:00:38,880",
          "to": "01:00:45,060"
        },
        "offsets": {
          "from": 3638880,
          "to": 3645060
        },
        "text": "Inspect. هبص على الـ Image دي لو نزلت في الآخر تحت خالص كده"
      },
      {
        "timestamps": {
          "from": "01:00:45,060",
          "to": "01:00:48,540"
        },
        "offsets": {
          "from": 3645060,
          "to": 3648540
        },
        "text": "هلاقي الـ Layers بتاعة الـ Image دي. تعالى ناخد الـ Layers دي"
      },
      {
        "timestamps": {
          "from": "01:00:48,540",
          "to": "01:00:57,780"
        },
        "offsets": {
          "from": 3648540,
          "to": 3657780
        },
        "text": "كده. وتعالى نعمل إيه؟ تعالى نعمل File كده نسميه"
      },
      {
        "timestamps": {
          "from": "01:00:57,780",
          "to": "01:01:04,440"
        },
        "offsets": {
          "from": 3657780,
          "to": 3664440
        },
        "text": "مثلاً Diff File مثلاً. Okay؟ فيه هنا الـ Layers دي. وهراجع"
      },
      {
        "timestamps": {
          "from": "01:01:04,440",
          "to": "01:01:08,520"
        },
        "offsets": {
          "from": 3664440,
          "to": 3668520
        },
        "text": "تاني هنا على Docker وأشوف الـ Image اللي أنا كريتها دي. وأعمل لها"
      },
      {
        "timestamps": {
          "from": "01:01:08,520",
          "to": "01:01:14,040"
        },
        "offsets": {
          "from": 3668520,
          "to": 3674040
        },
        "text": "Inspect وأشوف الـ Layers بتاعتها. ألاقي هنا شوية Layers برضه فيها أهي."
      },
      {
        "timestamps": {
          "from": "01:01:14,040",
          "to": "01:01:20,100"
        },
        "offsets": {
          "from": 3674040,
          "to": 3680100
        },
        "text": "وهاخد الـ Layers دي كلها تاني برضه زي ما عملت في الـ Python. وهاقوم"
      },
      {
        "timestamps": {
          "from": "01:01:20,100",
          "to": "01:01:26,160"
        },
        "offsets": {
          "from": 3680100,
          "to": 3686160
        },
        "text": "رايح على الـ Diff ده. تمام؟ وأقوم أعمل كده. Okay؟ عشان طريقة"
      },
      {
        "timestamps": {
          "from": "01:01:26,160",
          "to": "01:01:29,820"
        },
        "offsets": {
          "from": 3686160,
          "to": 3689820
        },
        "text": "بلدي شوية بس دي أصلاً حاجات في دماغي. دلوقتي أنا"
      },
      {
        "timestamps": {
          "from": "01:01:29,820",
          "to": "01:01:34,560"
        },
        "offsets": {
          "from": 3689820,
          "to": 3694560
        },
        "text": "عندي شوية الـ Layers اللي فوق ديت. اللي فوق دي هنا هو. دي بتاعة"
      },
      {
        "timestamps": {
          "from": "01:01:34,560",
          "to": "01:01:42,300"
        },
        "offsets": {
          "from": 3694560,
          "to": 3702300
        },
        "text": "الـ Base Image ودي بتاعة الـ Image الجديدة اللي إحنا عملناها. طريقة بلدي"
      },
      {
        "timestamps": {
          "from": "01:01:42,300",
          "to": "01:01:48,540"
        },
        "offsets": {
          "from": 3702300,
          "to": 3708540
        },
        "text": "كده. بس هنا في إيه؟ هنا في تسعة Layers. يبقى في تسعة."
      },
      {
        "timestamps": {
          "from": "01:01:48,540",
          "to": "01:01:53,760"
        },
        "offsets": {
          "from": 3708540,
          "to": 3713760
        },
        "text": "Okay؟ في الـ Image الجديدة عندي من 11 لـ 23."
      },
      {
        "timestamps": {
          "from": "01:01:53,760",
          "to": "01:01:59,640"
        },
        "offsets": {
          "from": 3713760,
          "to": 3719640
        },
        "text": "23 ناقص 11 زائد 1 يعني 13. Okay؟ لاحظ بقى حاجة هنا"
      },
      {
        "timestamps": {
          "from": "01:01:59,640",
          "to": "01:02:06,180"
        },
        "offsets": {
          "from": 3719640,
          "to": 3726180
        },
        "text": "مهمة بقى. لو أنا جيت كده عملت Inspect على ده كده. بص هلاقي الـ Layer"
      },
      {
        "timestamps": {
          "from": "01:02:06,180",
          "to": "01:02:18,240"
        },
        "offsets": {
          "from": 3726180,
          "to": 3738240
        },
        "text": "دي أول Layer موجودة في الـ Base Image هي أول Layer موجودة في الـ Image بتاعتي. وهياخد نفس"
      },
      {
        "timestamps": {
          "from": "01:02:18,240",
          "to": "01:02:23,220"
        },
        "offsets": {
          "from": 3738240,
          "to": 3743220
        },
        "text": "الـ Layer اللي هي في الـ Python Image ويبدأ يبني عليها. وبناءً عليه، أنا متوقع إن أنا لو"
      },
      {
        "timestamps": {
          "from": "01:02:23,220",
          "to": "01:02:26,700"
        },
        "offsets": {
          "from": 3743220,
          "to": 3746700
        },
        "text": "شفت الـ Layer الأولانية دي هلاقيها موجودة هنا. لو شفت الـ Layer"
      },
      {
        "timestamps": {
          "from": "01:02:26,700",
          "to": "01:02:30,660"
        },
        "offsets": {
          "from": 3746700,
          "to": 3750660
        },
        "text": "التانية دي هلاقيها هنا. لغاية ما الـ Layer التاسعة هلاقيها موجودة"
      },
      {
        "timestamps": {
          "from": "01:02:30,660",
          "to": "01:02:36,180"
        },
        "offsets": {
          "from": 3750660,
          "to": 3756180
        },
        "text": "هنا. وبعد الـ Layer التاسعة هلاقي فيه أربعة تانيين انضافوا ما كانوش"
      },
      {
        "timestamps": {
          "from": "01:02:36,180",
          "to": "01:02:41,100"
        },
        "offsets": {
          "from": 3756180,
          "to": 3761100
        },
        "text": "موجودين قبل كده. إيه هم الأربعة اللي إحنا"
      },
      {
        "timestamps": {
          "from": "01:02:41,100",
          "to": "01:02:49,980"
        },
        "offsets": {
          "from": 3761100,
          "to": 3769980
        },
        "text": "قلنا عليهم. عشان عملية الـ Copy والـ Run. Okay؟ فحبيت"
      },
      {
        "timestamps": {
          "from": "01:02:49,980",
          "to": "01:02:53,700"
        },
        "offsets": {
          "from": 3769980,
          "to": 3773700
        },
        "text": "بس إني أوضح الحتة دي وأعتقد إن الحتة دي هتكون وضحت أكتر"
      },
      {
        "timestamps": {
          "from": "01:02:53,700",
          "to": "01:02:59,460"
        },
        "offsets": {
          "from": 3773700,
          "to": 3779460
        },
        "text": "إزاي الـ Docker بيشتغل أو إزاي بيعمل Build للـ Image بناءً"
      },
      {
        "timestamps": {
          "from": "01:02:59,460",
          "to": "01:03:02,820"
        },
        "offsets": {
          "from": 3779460,
          "to": 3782820
        },
        "text": "على الـ Dockerfiles."
      }
    ]
  },
  {
    "id": 14,
    "title": "Dockerfile - Deep Dive",
    "duration": 4215.0,
    "isReady": false,
    "transcription": []
  },
  {
    "id": 15,
    "title": "Image Registries",
    "duration": 632.0,
    "isReady": false,
    "transcription": []
  },
  {
    "id": 16,
    "title": "Docker Compose",
    "duration": 2922.0,
    "isReady": false,
    "transcription": []
  },
  {
    "id": 17,
    "title": "Docker Swarm",
    "duration": 3565.0,
    "isReady": false,
    "transcription": []
  },
  {
    "id": 18,
    "title": "Docker Stack",
    "duration": 1378.0,
    "isReady": false,
    "transcription": []
  },
  {
    "id": 19,
    "title": "Portainer",
    "duration": 562.0,
    "isReady": false,
    "transcription": []
  },
  {
    "id": 20,
    "title": "Introduction to Kubernetes",
    "duration": 288.0,
    "isReady": false,
    "transcription": []
  },
  {
    "id": 21,
    "title": "K8s High Level Architecture",
    "duration": 885.0,
    "isReady": false,
    "transcription": []
  },
  {
    "id": 22,
    "title": "Installing Minikube",
    "duration": 706.0,
    "isReady": false,
    "transcription": []
  },
  {
    "id": 23,
    "title": "K8s Logical Architecture",
    "duration": 930.0,
    "isReady": false,
    "transcription": []
  },
  {
    "id": 24,
    "title": "K8s Sample Deployment",
    "duration": 2275.0,
    "isReady": false,
    "transcription": []
  },
  {
    "id": 25,
    "title": "K8s in VSCode",
    "duration": 271.0,
    "isReady": false,
    "transcription": []
  },
  {
    "id": 26,
    "title": "Jupyter in Containers",
    "duration": 848.0,
    "isReady": false,
    "transcription": []
  }
];
