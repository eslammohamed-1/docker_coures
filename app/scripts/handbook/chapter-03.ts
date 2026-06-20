import type { HandbookSection } from './types'

export const CHAPTER_03_HANDBOOK: HandbookSection[] = [
  {
    id: 'chapter-goals',
    heading: 'الهدف من الشابتر',
    start: 0,
    end: 10,
    blocks: [
      {
        type: 'summary',
        content:
          'في هذا الشابتر نفهم البنية الداخلية للـ Container: أين المشكلة في الـ VM، معنى Shared Kernel، فكرة Layers والـ Image، ودور Namespaces و cgroups في العزل والتحكم في الموارد.',
      },
      {
        type: 'list',
        content:
          'أين توجد المشكلة داخل الـ Virtual Machine\nالفرق بين Kernel Mode و User Mode\nمعنى Shared Kernel\nلماذا الـ Container لا يحتوي Kernel مستقل\nتشبيه Base Disk و Differencing Disk\nمعنى Image و Container\nحدود الاعتماد على Kernel مشترك\nدور Namespaces و cgroups',
      },
    ],
  },
  {
    id: 'vm-problem-location',
    heading: 'أين توجد المشكلة في الـ Virtual Machine؟',
    start: 11,
    end: 25,
    diagramIds: ['VmInternalStackDiagram'],
    blocks: [
      {
        type: 'paragraph',
        content:
          'في الـ VM التقليدية الهدف غالبًا تشغيل Application، لكن علشان يشتغل لازم يكون عندك Virtual Hardware وGuest OS كامل وKernel وUser Mode components وServices وLibraries — قبل ما توصل للتطبيق نفسه.',
      },
      {
        type: 'takeaway',
        content: 'جزء كبير من الـ VM مش موجود لخدمة التطبيق مباشرة، بل لتجهيز بيئة تشغيل كاملة.',
      },
    ],
  },
  {
    id: 'guest-os-repeat',
    heading: 'المشكلة الحقيقية: Operating System كامل لكل VM',
    start: 26,
    end: 45,
    diagramIds: ['MultipleVmsOverheadDiagram'],
    blocks: [
      {
        type: 'warning',
        content:
          'لو عندك 100 VM، غالبًا عندك 100 Guest OS — يعني 100 مجموعة Updates وPatches وConfiguration وMonitoring وBackup وLicensing ومساحة Disk وRAM وCPU overhead.',
      },
      {
        type: 'note',
        content:
          'التطبيق غالبًا لا يحتاج OS كامل. يحتاج Kernel وملفات ومكتبات وRuntime وConfiguration — لكن لا يحتاج Desktop Environment وGUI وServices غير مرتبطة.',
      },
      {
        type: 'takeaway',
        content: 'المشكلة ليست في الـ VM نفسها، بل في تكرار نظام تشغيل كامل لكل workload.',
      },
    ],
  },
  {
    id: 'kernel-user-mode',
    heading: 'Kernel Mode vs User Mode',
    start: 46,
    end: 79,
    diagramIds: ['KernelUserModeDiagram'],
    blocks: [
      {
        type: 'definition',
        content:
          'Kernel Mode\nالجزء الأساسي من نظام التشغيل المسؤول عن CPU وRAM وDisk وNetwork وProcesses وFilesystems وHardware — لا يمكن الاستغناء عنه.',
      },
      {
        type: 'definition',
        content:
          'User Mode\nالجزء الأعلى من OS: GUI وCLI وShell وServices وDaemons وDesktop environment — مهم في أنظمة كاملة لكن ليس كلها مطلوبة لكل Application.',
      },
      {
        type: 'takeaway',
        content: 'الـ Kernel ضروري دائمًا؛ كثير من أجزاء User Mode زائدة لتشغيل تطبيق واحد داخل Container.',
      },
    ],
  },
  {
    id: 'shared-kernel',
    heading: 'الفكرة المحورية: Shared Kernel',
    start: 46,
    end: 79,
    diagramIds: ['SharedKernelDiagram'],
    blocks: [
      {
        type: 'definition',
        content:
          'Shared Kernel\nبدل أن يكون لكل Application Guest OS كامل، تشارك الـ Containers نفس Kernel الخاص بالـ Host Operating System.',
      },
      {
        type: 'paragraph',
        content:
          'الـ Container لا يحتوي على Kernel مستقل. على Linux Host، كل Containers تستخدم Linux Kernel الموجود على الجهاز — معزولة عن بعضها لكنها تشترك في نفس الـ Kernel.',
      },
      {
        type: 'table',
        content:
          'العنصر | Virtual Machine | Container\nKernel | Kernel داخل كل Guest OS | يستخدم Host Kernel\nUser Mode كامل | موجود غالبًا | الأجزاء المطلوبة فقط\nالحجم | أكبر | أصغر\nالتشغيل | أبطأ نسبيًا | أسرع\nالعزل | قوي على مستوى VM | عزل عبر Kernel features',
      },
    ],
  },
  {
    id: 'container-not-mini-vm',
    heading: 'هل الـ Container هو VM صغيرة؟',
    start: 46,
    end: 79,
    blocks: [
      {
        type: 'warning',
        content: 'لا. الـ Container ليس Virtual Machine صغيرة. الـ VM لها Guest OS وKernel خاص بها؛ الـ Container Process أو مجموعة Processes معزولة تستخدم Kernel الـ Host.',
      },
      {
        type: 'list',
        content:
          'Isolation عبر Kernel features\nResource limits\nFilesystem view خاص\nNetwork view خاص\nProcess tree خاص',
      },
    ],
  },
  {
    id: 'base-disk-analogy',
    heading: 'تشبيه مهم: Base Disk و Differencing Disk',
    start: 80,
    end: 119,
    diagramIds: ['BaseDiskDifferencingDiagram'],
    blocks: [
      {
        type: 'paragraph',
        content:
          'لو عندك VM Template بحجم 100GB وتريد 30 VM: Full Copy يستهلك ~3000GB. بدل كده، كل VM تعتمد على Base Disk وتخزن الفروقات فقط في Differencing Disk — غالبًا 1–3GB حسب التغييرات.',
      },
      {
        type: 'note',
        content: 'الـ Snapshots تعمل بنفس الفكرة: طبقات جديدة فوق Base Disk، ويمكن الرجوع لحالة سابقة بحذف آخر Differencing Disk.',
      },
      {
        type: 'takeaway',
        content: 'نفس المبدأ يفسر Container Layers: أساس مشترك + تغييرات فقط.',
      },
    ],
  },
  {
    id: 'container-layers',
    heading: 'Container Layers فوق Kernel واحد',
    start: 120,
    end: 159,
    diagramIds: ['ImageLayersDiagram'],
    blocks: [
      {
        type: 'definition',
        content:
          'Container Layer\nتغيير في filesystem: إضافة أو حذف أو تعديل ملفات، تثبيت package، إضافة runtime أو application code أو configuration.',
      },
      {
        type: 'warning',
        content: 'الـ Kernel ليس داخل الـ Image. الـ Image تحتوي user-space files فقط فوق Kernel موجود بالفعل على الـ Host.',
      },
      {
        type: 'steps',
        content:
          'Layer 1: Fedora base files\nLayer 2: Install Python\nLayer 3: Install Python packages\nLayer 4: Add application code\nLayer 5: Add configuration',
      },
    ],
  },
  {
    id: 'distro-images',
    heading: 'لماذا Ubuntu و Fedora و Alpine Images؟',
    start: 160,
    end: 199,
    blocks: [
      {
        type: 'note',
        content:
          'كل Linux distributions تشترك في Linux Kernel. الفرق في User-space: package manager وlibraries وfile layout وdefault tools.',
      },
      {
        type: 'flow',
        content:
          'Linux Kernel + Ubuntu user-space = Ubuntu\nLinux Kernel + Fedora user-space = Fedora\nLinux Kernel + Alpine user-space = Alpine',
      },
      {
        type: 'takeaway',
        content: 'وجود Layers يتيح إعادة استخدام base مشترك، تحسين caching، وتقليل المساحة والتحميل من Registry.',
      },
    ],
  },
  {
    id: 'image-template',
    heading: 'Image كـ Template قابلة لإعادة الاستخدام',
    start: 200,
    end: 239,
    diagramIds: ['ImageToContainerDiagram'],
    blocks: [
      {
        type: 'definition',
        content:
          'Container Image\nTemplate read-only: مجموعة Layers وfilesystem وmetadata وdefault command — تُستخدم لإنشاء Containers.',
      },
      {
        type: 'comparison',
        content: 'Image | Static read-only template\nContainer | Running أو stopped instance مع writable layer فوق الـ image',
      },
      {
        type: 'table',
        content:
          'العنصر | Image | Container\nالحالة | Static template | Running / Stopped instance\nالكتابة | Read-only layers | Writable layer فوق image\nالتشبيه | VM Template | VM running instance\nالتكرار | أكثر من Container منها | نسخة مستقلة وقت التشغيل',
      },
    ],
  },
  {
    id: 'build-pull-run',
    heading: 'Build و Pull و Run',
    start: 240,
    end: 279,
    diagramIds: ['DockerRunFlowDiagram'],
    blocks: [
      {
        type: 'steps',
        content:
          'Build: Dockerfile → docker build → Image\nPull: تنزيل Image من Registry\nCreate: إنشاء Container من Image\nStart: تشغيل Container\nRun: docker run = Pull (إن لزم) + Create + Start',
      },
      {
        type: 'command',
        content: 'docker run ubuntu\nيضيف Writable Layer فوق read-only layers ثم يشغّل main process.',
      },
    ],
  },
  {
    id: 'registry-tags',
    heading: 'Registry و Repository و Tags',
    start: 240,
    end: 279,
    diagramIds: ['RegistryHierarchyDiagram'],
    blocks: [
      {
        type: 'paragraph',
        content:
          'الـ Images تُخزّن في Registry مثل Docker Hub. مثال: docker.io/library/ubuntu:22.04 — Registry: docker.io · Repository: library/ubuntu · Tag: 22.04',
      },
      {
        type: 'command',
        content: 'python:3.11\nRepository: python · Tag: 3.11',
      },
    ],
  },
  {
    id: 'kernel-compatibility',
    heading: 'حدود الاعتماد على Kernel مشترك',
    start: 280,
    end: 319,
    diagramIds: ['ImageManifestDiagram'],
    blocks: [
      {
        type: 'warning',
        content:
          'Linux Container يحتاج Linux Kernel · Windows Container يحتاج Windows Kernel. لا يمكن تشغيل Linux Container مباشرة فوق Windows Kernel بدون VM أو WSL2.',
      },
      {
        type: 'list',
        content:
          'Ubuntu Container على Fedora Host: نعم — الاتنين Linux\nLinux Container على Windows Host: ليس مباشرة — يحتاج Linux Kernel (Docker Desktop / WSL2 / VM)\nWindows Container على Linux Host: لا',
      },
      {
        type: 'note',
        content:
          'Manifest List تختار النسخة المناسبة حسب OS وCPU Architecture عند Pull — مثل linux/amd64 وlinux/arm64.',
      },
    ],
  },
  {
    id: 'namespaces-cgroups',
    heading: 'Namespaces و cgroups',
    start: 320,
    end: 339,
    diagramIds: ['NamespacesCgroupsDiagram'],
    blocks: [
      {
        type: 'definition',
        content:
          'Namespaces\nتعزل ما تراه العملية: PID وNetwork وMount وHostname وIPC وUsers — كل Container يرى نسخة خاصة من موارد النظام.',
      },
      {
        type: 'definition',
        content:
          'cgroups\nتراقب وتحدد استهلاك الموارد: CPU وRAM وI/O وعدد Processes — تتابع Process وأبناءها كوحدة واحدة.',
      },
      {
        type: 'takeaway',
        content: 'Namespaces = Isolation · cgroups = Resource Control — مع Image Layers وRuntime يكوّنوا فكرة Container.',
      },
    ],
  },
  {
    id: 'container-process-tree',
    heading: 'الـ Container كـ Process Tree',
    start: 340,
    end: 355,
    diagramIds: ['ContainerProcessTreeDiagram'],
    blocks: [
      {
        type: 'paragraph',
        content:
          'في Linux الـ Container ليس كيانًا سحريًا — هو Process Tree. runc يشغّل main process داخل بيئة معزولة. داخل Container قد ترى نفسك PID 1، بينما على Host لك PID مختلف.',
      },
      {
        type: 'note',
        content: 'Docker لم يخترع كل شيء من الصفر — جمع Kernel features وImage وRegistry وCLI بطريقة سهلة للمطورين والـ DevOps.',
      },
    ],
  },
  {
    id: 'full-architecture',
    heading: 'الصورة الكاملة للـ Container Architecture',
    start: 340,
    end: 363,
    diagramIds: ['FullContainerArchitectureDiagram', 'ContainerVsVmDiagram'],
    blocks: [
      {
        type: 'paragraph',
        content:
          'Host Kernel يوفّر Namespaces و cgroups. Container Runtime (Docker/containerd/runc) يشغّل Containers من Image Layers مع Writable Layer لكل instance.',
      },
    ],
  },
  {
    id: 'chapter-summary',
    heading: 'الخلاصة العملية',
    start: 356,
    end: 363,
    blocks: [
      {
        type: 'list',
        content:
          'المشكلة في VM: تكرار Guest OS كامل\nOS = Kernel Mode + User Mode\nContainer يستخدم Host Kernel ولا يحتاج Guest OS كامل\nImage = read-only layers قابلة لإعادة الاستخدام\nContainer = instance شغالة + writable layer\nLinux containers تحتاج Linux Kernel\nNamespaces للعزل · cgroups للتحكم في الموارد\nContainer في النهاية Process Tree معزولة',
      },
    ],
  },
  {
    id: 'glossary',
    heading: 'مصطلحات مهمة',
    start: 356,
    end: 363,
    blocks: [
      {
        type: 'glossary',
        content:
          'Kernel | الجزء الأساسي من OS المسؤول عن الموارد والـ Hardware\nUser Mode | CLI وGUI وServices وTools في user-space\nShared Kernel | أكثر من Container يشارك نفس Host Kernel\nContainer Image | Template read-only من Layers وmetadata\nLayer | تغيير filesystem داخل Image\nWritable Layer | طبقة كتابة تُضاف عند تشغيل Container\nRegistry | مكان تخزين Images مثل Docker Hub\nNamespace | Kernel feature لعزل رؤية العمليات\nrunc | Low-level runtime لتشغيل container كـ isolated process\nManifest List | نسخ Image حسب OS وArchitecture',
      },
    ],
  },
  {
    id: 'review-questions',
    heading: 'أسئلة مراجعة',
    start: 356,
    end: 363,
    blocks: [
      {
        type: 'questions',
        content:
          'ما المشكلة الأساسية في Guest OS داخل كل VM؟\nما الفرق بين Kernel Mode و User Mode؟\nلماذا لا يحتوي Container على Kernel مستقل؟\nما الفرق بين Image و Container؟\nما معنى Layer داخل Image؟\nلماذا Linux Container يحتاج Linux Kernel؟\nهل يمكن Ubuntu Container على Fedora Host؟\nما وظيفة Namespaces و cgroups؟\nكيف يُعتبر Container Process Tree؟\nما دور Manifest List؟',
      },
    ],
  },
]
