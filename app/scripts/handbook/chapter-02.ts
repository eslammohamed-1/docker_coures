import type { HandbookSection } from './types'

export type { HandbookBlock, HandbookSection } from './types'

export const CHAPTER_02_HANDBOOK: HandbookSection[] = [
  {
    id: 'chapter-goals',
    heading: 'الهدف من الشابتر',
    start: 0,
    end: 10,
    diagramIds: ['EvolutionTimelineDiagram'],
    blocks: [
      {
        type: 'summary',
        content:
          'في هذا الشابتر نفهم لماذا ظهرت الـ Containers، وكيف ترتبط بالـ Virtual Machines، وكيف تساعدنا على تشغيل التطبيقات بشكل أخف وأسهل في الـ Deployment.',
      },
      {
        type: 'list',
        content:
          'تعريف Container بشكل واضح\nفهم مشكلة الـ Physical Servers\nمعرفة كيف حسّنت الـ Virtualization استغلال الموارد\nفهم دور الـ Hypervisor\nمعرفة معنى VM Tax\nفهم لماذا الـ Containers حل عملي للـ Deployment',
      },
    ],
  },
  {
    id: 'what-is-container',
    heading: 'ما هو الـ Container؟',
    start: 0,
    end: 10,
    diagramIds: ['ContainerPackageDiagram'],
    blocks: [
      {
        type: 'definition',
        content:
          'Container\nطريقة خفيفة وسريعة لتغليف التطبيق مع كل ما يحتاجه لكي يعمل: dependencies وconfiguration وruntime basics داخل package واحدة قابلة للتشغيل.',
      },
      {
        type: 'paragraph',
        content:
          'بدل أن تكرر في كل بيئة خطوات التثبيت والإعداد، تضع التطبيق وكل احتياجاته داخل Container وتشغله بنفس الطريقة على جهازك أو على سيرفر أو داخل Cloud.',
      },
      {
        type: 'note',
        content:
          'تخيل Container كعلبة فيها التطبيق وكل ما يلزمه للعمل: Web app مع Node.js وملفات المشروع وenvironment variables والـ port المطلوب.',
      },
      {
        type: 'takeaway',
        content: 'الفكرة الأساسية: Container = تطبيق + dependencies + إعدادات التشغيل في package واحدة.',
      },
    ],
  },
  {
    id: 'container-vs-vm-purpose',
    heading: 'هل الـ Container بديل للـ Virtual Machine؟',
    start: 0,
    end: 10,
    diagramIds: ['VmContainersNestedDiagram'],
    blocks: [
      {
        type: 'note',
        content:
          'المقارنة بين Containers وVirtual Machines هدفها الفهم، وليس إثبات أن أحدهما أفضل دائمًا. في الواقع غالبًا يعملان معًا.',
      },
      {
        type: 'takeaway',
        content: 'الـ Containers ليست بديلًا مطلقًا للـ VMs؛ يمكن تشغيلها داخل VM عند الحاجة.',
      },
    ],
  },
  {
    id: 'physical-servers-problem',
    heading: 'المشكلة الأصلية: Physical Servers',
    start: 11,
    end: 33,
    diagramIds: ['PhysicalServerDiagram', 'ResourceUtilizationDiagram'],
    blocks: [
      {
        type: 'paragraph',
        content:
          'في البداية كان التصميم بسيطًا: سيرفر فعلي فيه CPU وRAM وDisk وNetwork، ثم Operating System، ثم التطبيق.',
      },
      {
        type: 'warning',
        content:
          'عندما يصبح السيرفر قويًا جدًا (مثل 32 Core و256 GB RAM) وتشغّل عليه تطبيقًا واحدًا فقط، تحصل على Waste of Resources — إهدار في الموارد.',
      },
      {
        type: 'takeaway',
        content: 'المشكلة ليست في ضعف السيرفرات، بل في صعوبة استغلالها بكفاءة لتطبيق واحد.',
      },
    ],
  },
  {
    id: 'why-not-one-server-for-all',
    heading: 'لماذا لا نضع كل التطبيقات على نفس السيرفر؟',
    start: 25,
    end: 33,
    diagramIds: ['PhysicalScalingProblemDiagram'],
    blocks: [
      {
        type: 'list',
        content:
          'صعوبة الإدارة والعزل بين الخدمات\nمشاكل أمنية وتعارض بين التطبيقات\nصعوبة التحديث بدون التأثير على باقي النظام\nفشل تطبيق واحد قد يؤثر على الباقي',
      },
      {
        type: 'paragraph',
        content:
          'الأفضل أن يكون لكل خدمة بيئة مستقلة، لكن شراء Physical Server لكل Application مكلف جدًا. من هنا ظهرت أهمية الـ Virtualization.',
      },
    ],
  },
  {
    id: 'virtualization-solution',
    heading: 'الحل الأول: Virtualization',
    start: 34,
    end: 79,
    diagramIds: ['VirtualizationArchitectureDiagram'],
    blocks: [
      {
        type: 'paragraph',
        content:
          'الـ Virtualization سمحت بتقسيم نفس الـ Physical Server إلى عدة Virtual Machines معزولة. كل VM تتصرف كسيرفر مستقل يمكن أن يشغّل Linux أو Windows أو Database أو Web Server.',
      },
      {
        type: 'takeaway',
        content: 'الـ Virtualization حلّت مشكلة إهدار الموارد عبر مشاركة نفس الـ hardware بين عدة بيئات معزولة.',
      },
    ],
  },
  {
    id: 'hypervisor-role',
    heading: 'ما هو الـ Hypervisor؟',
    start: 80,
    end: 119,
    diagramIds: ['HypervisorRoleDiagram'],
    blocks: [
      {
        type: 'definition',
        content:
          'Hypervisor\nالطبقة المسؤولة عن إنشاء وإدارة Virtual Machines وتوزيع موارد الـ hardware الافتراضية على كل VM.',
      },
      {
        type: 'steps',
        content:
          'إنشاء VM وتشغيلها وإيقافها\nتوزيع CPU وRAM وDisk\nMigrate وSnapshot وBackup\nإدارة عدة VMs على نفس السيرفر',
      },
      {
        type: 'list',
        content: 'أمثلة: VMware · Hyper-V · KVM · VirtualBox',
      },
    ],
  },
  {
    id: 'vm-tax',
    heading: 'أين ظهرت المشكلة؟ VM Tax',
    start: 120,
    end: 159,
    diagramIds: ['VmStackDiagram', 'VmTaxOverheadDiagram', 'MultipleVmsOverheadDiagram'],
    blocks: [
      {
        type: 'definition',
        content:
          'VM Tax\nالتكلفة الإضافية لاستهلاك Guest OS كامل لكل workload: RAM وCPU وDisk ووقت تشغيل وتحديثات وlicensing وإدارة.',
      },
      {
        type: 'warning',
        content:
          'التطبيق هو الهدف النهائي، لكن تشغيله داخل VM يعني تشغيل Operating System كامل بجانبه — وهذا overhead لا يخدم التطبيق مباشرة.',
      },
      {
        type: 'takeaway',
        content: 'كل VM تحتاج OS كامل، وهذا يضيف استهلاكًا في الموارد والإدارة لا يخدم التطبيق مباشرة.',
      },
    ],
  },
  {
    id: 'containers-as-lighter-solution',
    heading: 'الحل التالي: Containers',
    start: 120,
    end: 159,
    diagramIds: ['ContainerArchitectureDiagram'],
    blocks: [
      {
        type: 'paragraph',
        content:
          'بدل أن يحمل كل Application Guest OS كاملًا، تشارك الـ Containers نفس Kernel الخاص بالـ Host. لذلك تكون أخف وأسرع في التشغيل.',
      },
    ],
  },
  {
    id: 'vm-vs-container-table',
    heading: 'مقارنة مختصرة: VM vs Container',
    start: 120,
    end: 159,
    diagramIds: ['ContainerVsVmDiagram'],
    blocks: [
      {
        type: 'table',
        content:
          'العنصر | Virtual Machine | Container\nيحتوي على OS كامل؟ | نعم | لا\nالحجم | كبير نسبيًا | صغير نسبيًا\nسرعة التشغيل | أبطأ | أسرع\nاستهلاك الموارد | أعلى | أقل\nالعزل | قوي جدًا | جيد لكن مختلف\nالاستخدام | تشغيل أنظمة كاملة | تشغيل تطبيقات وخدمات\nالإدارة | أثقل | أخف وأسهل في الـ Deployment',
      },
    ],
  },
  {
    id: 'container-deployment',
    heading: 'الـ Container كطريقة Deployment',
    start: 160,
    end: 199,
    diagramIds: ['DockerRunFlowDiagram', 'ImageToContainerDiagram', 'DeploymentComparisonDiagram'],
    blocks: [
      {
        type: 'paragraph',
        content:
          'من أهم فوائد الـ Containers أنها تجعل الـ Deployment قابلًا للتكرار. تبني Image مرة واحدة، ثم تشغّل منها Containers في أي مكان.',
      },
      {
        type: 'command',
        content: 'docker run ubuntu\nيعادل تقريبًا: Pull Image ثم Create Container ثم Start Container.',
      },
      {
        type: 'list',
        content:
          'تسهيل الـ Deployment\nتقليل الأخطاء اليدوية\nتوحيد بيئة التشغيل\nتشغيل نفس التطبيق في Dev وTest وProduction\nتسهيل الـ Scaling وCI/CD',
      },
    ],
  },
  {
    id: 'vm-and-containers-together',
    heading: 'هل الـ Containers تلغي الـ VMs؟',
    start: 200,
    end: 213,
    diagramIds: ['VmContainersNestedDiagram'],
    blocks: [
      {
        type: 'note',
        content: 'لا. الـ Containers لا تلغي Virtual Machines. في كثير من الحالات يُستخدم الاثنان معًا.',
      },
      {
        type: 'takeaway',
        content: 'الـ VM يعطيك عزلًا وبنية تحتية مستقرة، والـ Container يعطيك سرعة وسهولة في تشغيل التطبيقات.',
      },
    ],
  },
  {
    id: 'chapter-summary',
    heading: 'الخلاصة العملية',
    start: 200,
    end: 213,
    blocks: [
      {
        type: 'list',
        content:
          'الـ Physical Servers سببت إهدارًا في الموارد\nالـ Virtualization حسّنت استغلال نفس الـ hardware\nكل VM تحتاج Guest OS كامل\nتكرار Guest OS ينتج عنه VM Tax\nالـ Containers تشغّل التطبيقات بطريقة أخف\nالهدف من Containers هو تسهيل وتوحيد الـ Deployment\nالـ Containers والـ VMs يمكن أن يعملا معًا',
      },
    ],
  },
  {
    id: 'glossary',
    heading: 'مصطلحات مهمة',
    start: 200,
    end: 213,
    blocks: [
      {
        type: 'glossary',
        content:
          'Container | بيئة خفيفة لتشغيل تطبيق مع dependencies الخاصة به\nImage | القالب الذي يُنشأ منه Container\nVirtual Machine | بيئة افتراضية تحتوي على Operating System كامل\nHypervisor | الطبقة التي تدير Virtual Machines\nGuest OS | نظام التشغيل داخل الـ VM\nHost OS | نظام التشغيل الأساسي على السيرفر\nVM Tax | التكلفة الإضافية لتشغيل Guest OS كامل لكل VM',
      },
    ],
  },
  {
    id: 'review-questions',
    heading: 'أسئلة مراجعة',
    start: 200,
    end: 213,
    blocks: [
      {
        type: 'questions',
        content:
          'ما الفرق الأساسي بين Container وVirtual Machine؟\nلماذا ظهرت فكرة الـ Virtualization؟\nما وظيفة الـ Hypervisor؟\nما المقصود بـ VM Tax؟\nلماذا تعتبر Containers مناسبة للـ Deployment المتكرر؟\nهل يمكن تشغيل Containers داخل Virtual Machines؟',
      },
    ],
  },
]
