import {
  appleimg,
  appleprvideo,
  carshowcaseImg,
  financeImg,
  RealestateImg,
  socialmediatemplateImg,
  teslatemplateImg,
} from "./utils";

export interface Project {
  id: number;
  projectname: string;
  card_img: string;
  banner_img: string;
  myrole: string;
  pr_title: string;
  pr_desc: string;
  challenges: string;
  product_img: string[];
  result: string;
  pr_video: string;
  pr_url: string;
  tag: string;
}

export const projectData: Project[] = [
  {
    id: 1,
    projectname: "Payman-Finance",
    card_img:
      "https://images.pexels.com/photos/7621131/pexels-photo-7621131.jpeg?auto=compress&cs=tinysrgb&w=600",
    pr_url: "paymanfinance",
    tag: "Landing",
  },
  {
    id: 2,
    projectname: "CarHub",
    card_img:
      "https://images.unsplash.com/photo-1537799531649-ddc9fa5499eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGNhciUyMGFwcHxlbnwwfDF8MHx8fDA%3D",
    pr_url: "carshowcase",
    tag: "Application",
  },
  {
    id: 3,
    projectname: "Socialmedia UI",
    card_img:
      "https://www.hollyland.com/wp-content/uploads/2023/10/image-281.png",
    pr_url: "socialmedia",
    tag: "Landing",
  },
  {
    id: 4,
    projectname: "Tesla Template",
    card_img:
      "https://images.pexels.com/photos/18977349/pexels-photo-18977349/free-photo-of-computer-in-tesla-car.jpeg?auto=compress&cs=tinysrgb&w=600",
    pr_url: "teslatemplate",
    tag: "Landing",
  },
  {
    id: 5,
    projectname: "Real Estate",
    card_img:
      "https://images.pexels.com/photos/1481105/pexels-photo-1481105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pr_url: "realestate",
    tag: "Application",
  },
  {
    id: 6,
    projectname: "Apple Website",
    card_img:
      "https://images.unsplash.com/photo-1709528922659-8f86b0f02b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    banner_img:
      "https://i.pinimg.com/originals/f5/2a/f6/f52af62948a08337a03225b8d1753280.jpg",
    myrole: "UI/UX, Front-End, Animations",
    pr_title: "The all-new chip that empowers Apple Intelligence. And you.",
    pr_desc:
      "A18 chip. Hi. IQ. Meet A18, custom-built for Apple Intelligence — and so much more. It jumps two generations ahead of the A16 Bionic chip in iPhone 15. And it powers next-level camera features like Photographic Styles and Camera Control. All with exceptional power efficiency to extend battery life.",
    challenges:
      "Heavy Pedal has carved out a prominent place in the competitive cycling apparel industry. The former website, however, was outdated and in need of a redesign to reflect a modern aesthetic and a more advanced approach to website design, specifically upgrading product pages with more functionalities and capabilities.",
    product_img: [RealestateImg],
    result:
      "The website's design embodies the cutting-edge technology and innovative thinking behind Stark Future's electric motocross bike. The dynamic design leaves a strong impression and showcases the bike's features and specifications as the user navigates the page. One of the standout features of the website is the ability to personalize and purchase the bike right from the homepage, adding convenience and ease to the buying experience. With such a technologically advanced and forward-thinking product, it was crucial for Stark Future to have a website that not only grabs attention, but also pushes the boundaries of what is possible and foresees the future of the industry. This level of sophistication and innovation perfectly aligns with Stark Future's mission to prove that electric power is superior and make a lasting impact on the world of motocross.",
    pr_video: appleprvideo,
    pr_url: "apple",
    tag: "Landing",
  },
  {
    id: 7,
    projectname: "HR Portal",
    card_img:
      "https://images.unsplash.com/photo-1598257006408-538c27529235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fEhSJTIwYXBwbGljYXRpb258ZW58MHwxfDB8fHww",
    banner_img:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    myrole: "Leader, Front-End, Integartions",
    pr_title: "Empowering Your Workforce, Simplifying HR.",
    pr_desc:
      "Where we revolutionize the way you manage your workforce. Our platform empowers businesses to streamline HR processes, all in one easy-to-use solution. By simplifying complex tasks and providing valuable insights, we help you focus on what matters most—building a stronger. With our dynamic tools and real-time analytics, your HR operations become more efficient, foster growth, and drive organizational success.",
    challenges:
      "Heavy Pedal has carved out a prominent place in the competitive cycling apparel industry. The former website, however, was outdated and in need of a redesign to reflect a modern aesthetic and a more advanced approach to website design, specifically upgrading product pages with more functionalities and capabilities.",
    product_img: [RealestateImg, financeImg],
    result:
      "The website's design embodies the cutting-edge technology and innovative thinking behind Stark Future's electric motocross bike. The dynamic design leaves a strong impression and showcases the bike's features and specifications as the user navigates the page. One of the standout features of the website is the ability to personalize and purchase the bike right from the homepage, adding convenience and ease to the buying experience. With such a technologically advanced and forward-thinking product, it was crucial for Stark Future to have a website that not only grabs attention, but also pushes the boundaries of what is possible and foresees the future of the industry. This level of sophistication and innovation perfectly aligns with Stark Future's mission to prove that electric power is superior and make a lasting impact on the world of motocross.",
    pr_video: appleprvideo,
    pr_url: "hrportal",
    tag: "Portal",
  },
].sort((a, b) => b.id - a.id);
