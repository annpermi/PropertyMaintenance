import ImageOne from "../images/info-data-1.jpg";
import ImageTwo from "../images/info-data-10.jpeg";
import ImageThree from "../images/info-data-9.jpeg";
import ImageFour from "../images/info-data-8.jpeg";
import ImageFive from "../images/info-data-7.png";
import ImageSix from "../images/info-data-6.jpeg";
import Hero from "../images/hero.jpg";

export const data = {
  addressData: {
    loc: [41.2835, -70.0995],
    title: "AB Property Maintenance",
    logo: "Alan Burney",
    poBox: "P.O Box 59",
    address: "Nantucket, MA 02554",
    tel: "508-332-9826",
    email: "alanjohnburney@hotmail.com",
    workHours: "8am - 4pm Monday - Friday",
    emergencyHours: "24 hrs a day 7 days a week for emergency alarm call",
  },
  menuData: [
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Gallery", link: "/gallery" },
  ],
  hero: {
    title: "AB Property Maintenance",
    subTitle: "Nantucket Island",
    path: "#info",
    image: Hero,
    label: "View Services",
    alt: "Place",
  },
  reviews: [
    {
      title: "AB Property Maintenance",
      subTitle: "Nantucket Island",
      path: "#info",
      label: "View Services",
      alt: "Place",
    },
    {
      title: "Siasconset",
      path: "/places",
      label: "View Place",
      alt: "Place",
    },
    {
      title: "Madaket",
      path: "/places",
      label: "View Place",
      alt: "Place",
    },
  ],
  infoData: {
    heading: "Advanced home management for your home",
    paragraphOne: `<p>AB Property Maintenance offers you, the homeowner, the ability to have one company to take care of your home's maintenance needs.</p><p>Through reliable and professional service covering both the inside and outside of your home, AB Property Maintenance on Nantucket Island is the right choice.</p><p>We have built our success and reputation on providing excellent service from friendly and professional staff.</p><p>Our commitment to customers is to provide them with the optimal level of service at a fair price. In exchange, they will provide us with repeat business and new customers through word-of-mouth advertising.</p>`,
    paragraphTwo: "You can expect the following from AB Property maintenance:",
    paragraphTwoBullets: [
      "Excellent customer service",
      "Professional Staff",
      "Reliability",
      "Quality Work",
      "Fair Pricing",
    ],
    buttonLabel: "Call Now",
    image: ImageOne,
    reverse: false,
    delay: 100,
  },
  infoDataTwo: {
    heading: "View our work",
    subtitleOne: "Caretaking",
    paragraphOne: "View Details",
    subtitleTwo: "Painting",
    paragraphTwo: "View Details",
    subtitleThree: "Pool Service",
    paragraphThree: "View Details",
    subtitleFour: "Landscaping & Gardening",
    paragraphFour: "View Details",
    buttonLabel: "View Homes",
    image_one: ImageThree,
    image_two: ImageFour,
    image_three: ImageFive,
    image_four: ImageTwo,
    reverse: true,
    delay: 300,
  },
  infoDataThree: {
    heading: "About us",
    paragraphOne:
      "<p>Since my arrival on Nantucket from the UK  in 2000, I have evolved from a painting company to a full-service property maintenance firm. This came about when a number of clients requested my continued service after the completion of their projects.</p><p>I have gained my client's trust by responding to their needs in a timely fashion and at a fair price. In order to maintain this trusted relationship, I work with a select network of sub-contractors who when needed are responsive to my calls.</p><p>Our range of services are caretaking winter watch with weekly reports and spring opening. Painting, carpentry, and power washing. Swimming pool service from May to June Opening/Closing and routine maintenance, CPO Certified.</p><p>I endeavor to respond to all requests within 24 hours. Contact us to view current and past projects (with the owner's permission).</p><p>We have an extensive list of references and will be happy to share some of the most relevant to your job with you.</p>",
    paragraphTwo: "Thank you,<br>Al Burney",
    buttonLabel: "View Homes",
    image: ImageSix,
    reverse: false,
    delay: 100,
  },
};