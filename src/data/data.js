import ImageOne from "../images/info-data-1.jpg";
import ImageTwo from "../images/info-data-10.jpeg";
import ImageThree from "../images/info-data-9.jpeg";
import ImageFour from "../images/info-data-8.jpeg";
import ImageFive from "../images/pool.jpg";
import ImageSix from "../images/info-data-6.jpeg";
import Hero from "../images/hero.jpg";

export const data = {
  addressData: {
    loc: [41.272766, -70.10412],
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
    { title: "Home", link: "/", id: "1" },
    { title: "About", link: "/about", id: "2" },
    { title: "Services", link: "/services", id: "3" },
    { title: "Gallery", link: "/gallery", id: "4" },
  ],
  services: [
    { title: "Caretaking", link: "/caretaking", id: "1" },
    { title: "Painting", link: "/painting", id: "2" },
    { title: "Pool Service", link: "/pool-service", id: "3" },
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
      alt: "Place1",
    },
    {
      title: "Siasconset",
      path: "/places",
      label: "View Place",
      alt: "Place2",
    },
    {
      title: "Madaket",
      path: "/places",
      label: "View Place",
      alt: "Place3",
    },
  ],
  infoData: {
    heading: "Advanced home management for your home on Nantucket since 2002",
    paragraphOne: `<p>AB Property Maintenance offers you, the homeowner, the ability to have one company to take care of your home's maintenance needs.</p><p>Through reliable and professional service covering both the inside and outside of your home, AB Property Maintenance on Nantucket Island is the right choice.</p><p>We have built our success and reputation on providing excellent service from friendly and professional staff.</p><p>Our commitment to customers is to provide them with the optimal level of service at a fair price. In exchange, they will provide us with repeat business and new customers through word-of-mouth advertising.</p><p>Fully Licensed, Insured and CPO certified Pool and Spa operator</p>`,
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
  testimonials: [
    {
      id: 1,
      title:
        '"So far this winter, not only have you remodeled our bathroom and replaced windows, but upon your discoveries, you have had our heat & garage door repaired, and have arranged for our phone line to be fixed. This all happened when we were playing in the snow and this has real value to us. Thank you for allowing us to sleep well knowing our beautiful Cape home is properly cared for. I can’t wait to see our new shower; betting it will be beautiful and perfect."',
      subTitle: "Jody and Garden, Clients for 7 years",
    },
    {
      id: 2,
      title:
        '"Thank you so much for sending your handyman to us yesterday. He is a treasure — worked all afternoon and completed most of the punch list. He is so neat and efficient."',
      subTitle: "Debby and Chuck, Clients for 13 years",
    },
    {
      id: 3,
      title:
        '"Everything is absolutely perfect, thank you very much. We couldn’t be happier: love the new window, door and paint colors. The yard and gardens look great. And, as always, it’s so nice to arrive to a very clean house."',
      subTitle: "Isabel, Client for 10 years",
    },
    {
      id: 4,
      title:
        '"I would like to extend our thanks to you and your organization for giving us peace of mind. In the past, it has been difficult ensuring that our second home on the Cape is properly maintained. We’ve been so happy with your service. We especially like receiving the email evaluations and photos of the property. You have taken that worry out of second home ownership. Thanks for doing a valuable service and a great job."',
      subTitle: "Michael & Nancy, Clients for 3 years",
    },
  ],
  infoDataFive: {
    heading: "Painting",
    paragraphTwoBullets: [
      "Pressure washing of exterior surfaces, siding, decks, roofs and walkways;",
      "Painting Interior / Exterior;",
      "General Maintenance;",
      "Weatherproofing and caulking;",
      "Exotic wood finishes;",
      "Carpentry;",
      "Gutter cleaning and oiling;",
      "Window repairs including glass replacement.",
    ],
    image: ImageTwo,
    reverse: true,
    delay: 100,
  },
  infoDataFour: {
    heading: "Caretaking",
    paragraphTwoBullets: [
      "Weekly visits to the property with a weekly email report containing pictures of thermostats, exterior, and interior rooms.",
      "Inspection of residence both interior and exterior for maintenance issues, damage or potential for loss.",
      "Inspection of (Propane/Oil) to ensure adequate volume for seasonal heating needs.",
      "Inspection of Mechanicals especially when domestic water remains on year-round. Boilers, Furnaces, and/or heat pumps are confirmed to be functioning properly and thermostats are at the appropriate temperature setting.",
      "Inspection of Communication, Alarm, and Security Devices to confirm functionality and proper system monitoring when applicable.Notification to Owner of any issues and/or potential issues.",
      "24-hour emergency response service with access to plumbing, heating, electrical, and mechanical contractors, in addition to the standard house building subcontractors we use on a regular basis.",
      "Additional property checks necessitated as a result of extreme weather such as hurricanes, high winds, heavy snows, sub-zero temperatures, or at the request of the homeowner, are completed and billed at an hourly basis. 45.00",
      "Pre Season point to point inspection and house set up.",
      "Painting Powerwashing and Carpentry Maintenance.",
      "Vehicles Storage and Detailing.",
    ],
    image: ImageOne,
    reverse: false,
    delay: 100,
  },
  infoDataSix: {
    heading: "Pool Service",
    paragraphOne:
      "<p>We provide pool attendants  and concierge service  to  HOAs, semi-public pools,community pools and hotels in line with Nantucket Town and State guidelines.</p><p>All our pool attendants are  CPO certified.</p>",
    paragraphTwo: "Weekly and Daily Pool Cleaning and Maintenance:",
    paragraphTwoBullets: [
      "Skimming/Netting Surface;",
      "Cleaning Skimmer and Pump Baskets;",
      "Brushing Tile Lines;",
      "Brushing Walls;",
      "Vacuuming Pool as needed;",
      "Testing and Maintaining Chemical Levels.",
    ],
    image: ImageOne,
    reverse: false,
    delay: 100,
  },
};
