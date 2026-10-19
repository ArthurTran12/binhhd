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
    period: "2024 - 2025",
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
  // Thêm công ty khác ở đây — nút ‹ › sẽ chuyển giữa các mục
];

export type Project = {
  title: string;
  image: string;
  href: string;
};

export const projects: Project[] = [
  { title: "Project & Task Management Dashboard", image: "/images/projects/1.png", href: "#" },
  { title: "Work Mate - UI HR Management & Task Management", image: "/images/projects/2.png", href: "#" },
  { title: "Fonoforge - AI Voice & Video Generator App UI", image: "/images/projects/3.png", href: "#" },
  { title: "ActiveStep - Step Tracker App UX Case Study", image: "/images/projects/4.png", href: "#" },
  { title: "Alipay - EWallet App Figma Template", image: "/images/projects/5.png", href: "#" },
  { title: "Modavo - Multipurpose WooCommerce", image: "/images/projects/6.png", href: "#" },
];
