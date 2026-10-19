/**
 * Toàn bộ nội dung của portfolio nằm ở file này.
 * Để thêm ảnh: copy ảnh vào /public/images/... rồi điền đường dẫn vào field `image`
 * (ví dụ: "/images/projects/task-dashboard.jpg"). Để trống "" thì sẽ hiện khung placeholder.
 */

export const profile = {
  brand: "HENRY HOANG",
  name: "HOANG DUC BINH",
  role: "Senior UI/UX Designer",
  headline: "I AM HENRY HOANG - UI/UX DESIGNER",
  intro:
    "Hi, I am Hoang Duc Binh with 5 years of experience in UI/UX design. I have cultivated a passion for creativity and a knack for designing excellent user experiences across numerous projects, catering to both mobile applications and web user interfaces. Relishing the process of user research, wireframing, and designing visually appealing interfaces, I constantly seek opportunities to demonstrate my skills and bring value to clients. Let's collaborate, and watch your vision come to life!",
  email: "binhhoangduc21599@gmail.com",
  phone: "0966 513 696",
  cvUrl: "/cv.pdf",
  avatar: "/images/avatar.png",
  socials: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Twitter", href: "#", icon: "twitter" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
  ] as const,
};

/** Menu trên mobile */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  "UI Design",
  "UX Design",
  "Mobile App Design",
  "Web Design",
  "Interaction Design",
  "Visual Design",
  "Design System",
  "Prototype Design",
  "Wireframe Design",
];

/** Ảnh banner ghép sẵn dưới hero. Có banner thì hiện banner, để "" thì dùng lưới 5 ô bên dưới. */
export const showcaseBanner = { image: "/images/banner.png", alt: "UI/UX design showcase" };

/** Lưới ảnh ở phần showcase dưới hero (5 ô) — chỉ dùng khi showcaseBanner.image để trống */
export const showcaseImages: { image: string; alt: string }[] = [
  { image: "", alt: "Showcase large" }, // ô lớn bên trái
  { image: "", alt: "Showcase top right" },
  { image: "", alt: "Showcase bottom right" },
  { image: "", alt: "Showcase small left" },
  { image: "", alt: "Showcase small right" },
];

export type Experience = {
  company: string;
  period: string;
  summary: string;
  projects: { title: string; description: string }[];
};

export const experiences: Experience[] = [
  {
    company: "CHTLAB Technology Research and Development Joint Stock Company",
    period: "2024 - 2026",
    summary:
      "Served as a Senior UI/UX Designer, leading the design team in developing both client outsourcing projects and in-house products. Responsible for end-to-end design execution, establishing design standards, and mentoring team members to deliver high-quality digital experiences.",
    projects: [
      {
        title: "NOTT - Healthcare & Medical Device Platform",
        description:
          "Spearheaded the end-to-end UI/UX architecture for a comprehensive remote healthcare platform integrated with IoT medical devices. Conducted user research with patients and healthcare professionals to design intuitive real-time health tracking dashboards, automated threshold-based medical alert systems, and interactive direct communication channels connecting users with hospital specialists.",
      },
      {
        title: "PADTON - Next-Gen Blockchain & Digital Banking Platform",
        description:
          "Led research and development and UI/UX design for an innovative Web3 digital banking ecosystem. Designed secure, transparent, and user-friendly financial interfaces for crypto/fiat management, cross-border payments, and asset tracking, and launched an integrated Telegram Mini App.",
      },
      {
        title: "PLUGILO - AI-Powered Product Discovery & Social Commerce Platform",
        description:
          "Designed a data-driven social commerce experience that leverages Artificial Intelligence to revolutionize how consumers search, compare, and discover products online, leading to over 50,000+ downloads on the App Store.",
      },
      {
        title: "EVSAFE - Smart EV Charging Network & Station Management System",
        description:
          "Thiết kế toàn bộ trải nghiệm người dùng cho hệ thống trạm sạc xe điện, từ tìm trạm sạc theo thời gian thực, đặt chỗ, quản lý tiến trình sạc đến thanh toán, cùng Zalo Mini App giúp tài xế quét mã sạc nhanh.",
      },
    ],
  },
  {
    company: "REDDOT Technology Company",
    period: "2023 - 2024",
    summary:
      "Served as Senior UI/UX Designer, taking charge of end-to-end design execution and business process analysis. Led the research, feature architecture, and product design for digital banking transformation initiatives and cryptocurrency/digital currency platforms, bridging complex financial logic into intuitive, secure user experiences.",
    projects: [
      {
        title: "Foundation - Digital Currency & Crypto Asset Management Platform",
        description:
          "Spearheaded the UI/UX architecture and business requirement analysis for Foundation, a digital currency trading and crypto asset management platform. Designed robust financial workflows, secure digital wallet interfaces, real-time market data visualization, and seamless transaction execution systems to ensure a highly intuitive and trusted user experience for cryptocurrency investors.",
      },
      {
        title: "InSolution - Digital Vehicle & Travel Insurance Platform",
        description:
          "Led the UI/UX design and business analysis for InSolution, an end-to-end digital insurance platform specializing in vehicle (auto/motorcycle) and travel insurance. Streamlined complex policy purchasing flows, instant quote calculations, and customized coverage options. Designed intuitive online claims submission portals and automated policy issuance systems, delivering a fast, transparent, and frictionless buying experience.",
      },
    ],
  },
  {
    company: "Nexrise Technology Company",
    period: "2022 - 2023",
    summary:
      "Served as Junior UI/UX Designer, collaborating on end-to-end design solutions for e-commerce and edtech platforms. Responsible for creating wireframes, interactive prototypes, and UI components, while optimizing digital storefronts, product catalogs, and online course learning flows to deliver engaging, user-friendly experiences.",
    projects: [
      {
        title: "Ecomdex - Crypto-Enabled E-Commerce Platform",
        description:
          "Collaborated as a Junior UI/UX Designer on Ecomdex, an innovative e-commerce platform integrating digital currency and cryptocurrency payment gateways. Designed intuitive product discovery workflows, streamlined checkout systems supporting crypto transactions, and user-friendly wallet integration interfaces to bridge traditional online shopping with decentralized finance.",
      },
      {
        title: "Clicksale - Multi-Subject E-Learning & Course Sales Platform",
        description:
          "Contributed as a Junior UI/UX Designer to Clicksale, an all-in-one educational platform offering multi-subject course packages and learning management tools for teachers and students. Designed clean course catalog layouts, seamless package purchasing/subscription flows, interactive student learning dashboards, and efficient classroom management tools for educators.",
      },
    ],
  },
  {
    company: "Avitex Technology Company",
    period: "2021 - 2022",
    summary:
      "Served as Fresher UI/UX Designer, focusing on designing high-quality Web and Mobile App templates for ThemeForest. Responsible for researching market design trends, creating modern UI layouts, responsive Web/App templates, and building component-based design systems tailored for commercial marketplace standards.",
    projects: [],
  },
  // Thêm công ty khác ở đây — nút ‹ › sẽ chuyển giữa các mục
];

export type Project = {
  title: string;
  image: string;
  href: string;
};

/** Trang danh sách project trên Behance (nút "View All Works") */
export const allWorksUrl = "https://www.behance.net/hoangbinh21/projects";

const behance = (path: string) => `https://www.behance.net/gallery/${path}`;

export const projects: Project[] = [
  { title: "Project & Task Management Dashboard", image: "/images/projects/1.png", href: behance("219180865/Project-Task-Management-Dashboard-UI-KIT") },
  { title: "Work Mate - UI HR Management & Task Management", image: "/images/projects/2.png", href: behance("212559635/Work-Mate-UI-HR-Management-Task-Management") },
  { title: "Fonoforge - AI Voice & Video Generator App UI", image: "/images/projects/3.png", href: behance("197692081/AI-Voice-Video-Generator-App-UI") },
  { title: "ActiveStep - Step Tracker App UX Case Study", image: "/images/projects/4.png", href: behance("212560497/ActiveStep-Step-Traker-App-UX-Case-Study") },
  { title: "Alipay - EWallet App Figma Template", image: "/images/projects/5.png", href: allWorksUrl /* chưa có trên Behance */ },
  { title: "Modavo - Multipurpose WooCommerce", image: "/images/projects/6.png", href: behance("219275461/Multipurpose-WooCommerce") },
];
