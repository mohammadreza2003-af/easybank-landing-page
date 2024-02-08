type Link = {
  title: string;
  id: string;
};

type icon = {
  path: string;
  alt: string;
};

type typeIconList = {
  icon: icon;
  title: string;
  dis: string;
};

type typeFooterlinks = {
  href: string;
  title: string;
};

type author = {
  name: string;
};
type articles = typeIconList & author;

const navLinks: Link[] = [
  {
    title: "Home",
    id: "Link-1",
  },
  {
    title: "About",
    id: "Link-2",
  },
  {
    title: "Blog",
    id: "Link-3",
  },
  {
    title: "Careers",
    id: "Link-4",
  },
];

const iconList: typeIconList[] = [
  {
    icon: {
      path: "/icon-budgeting.svg",
      alt: "Icon-1",
    },
    title: "Online Banking",
    dis: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: {
      path: "/icon-onboarding.svg",
      alt: "Icon-2",
    },
    title: "Simple Budgeting",
    dis: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    icon: {
      path: "/icon-online.svg",
      alt: "Icon-3",
    },
    title: "Fast Onboarding",
    dis: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: {
      path: "/icon-api.svg",
      alt: "Icon-4",
    },
    title: "Open API",
    dis: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];
const articlesList: articles[] = [
  {
    name: "By Claire Robinson",
    icon: {
      path: "/image-currency.jpg",
      alt: "img-1",
    },
    title: "Receive money in any currency with no fees",
    dis: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    name: "By Wilson Hutton",
    icon: {
      path: "/image-restaurant.jpg",
      alt: "img-2",
    },
    title: "Treat yourself without worrying about money",
    dis: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    name: "By Wilson Hutton",
    icon: {
      path: "/image-plane.jpg",
      alt: "img-3",
    },
    title: "Take your Easybank card wherever you go",
    dis: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    name: "By Claire Robinson",
    icon: {
      path: "/image-confetti.jpg",
      alt: "img-4",
    },
    title: "Our invite-only Beta accounts are now live!",
    dis: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …",
  },
];

const socialIcons: icon[] = [
  {
    path: "/icon-facebook.svg",
    alt: "icon-1",
  },
  {
    path: "/icon-youtube.svg",
    alt: "icon-2",
  },
  {
    path: "/icon-twitter.svg",
    alt: "icon-3",
  },
  {
    path: "/icon-pinterest.svg",
    alt: "icon-4",
  },
  {
    path: "/icon-instagram.svg",
    alt: "icon-5",
  },
];

const footerLinks: typeFooterlinks[] = [
  { href: "#", title: "About Us" },
  { href: "#", title: "Contact" },
  { href: "#", title: "Blog" },
  { href: "#", title: "Careers" },
  { href: "#", title: "Support" },
  { href: "#", title: "Privacy Policy" },
];

export { navLinks, iconList, articlesList, socialIcons, footerLinks };
