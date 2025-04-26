export const projects = [
  {
    title: "Internal Booking System",
    subtitle: "Side Project",
    description: "A booking system for events with Whatsapp/Email communications and calendar events.",
    fullDescription: "An advanced internal booking system designed to streamline event management with integrated communication channels. This system allows employees to create, manage, and track event bookings while automatically sending notifications via Whatsapp to customers and posting updates to relevant Slack channels. Built with a FastAPI backend and integrated with Twilio for messaging capabilities.",
    technologies: ["Twilio", "FastAPI", "HTML/CSS/JS", "Airtable", "Rest API", "Render"],
    github: "#",
    live: "#",
    image: "/img/airtable.png",
    gif: ["/img/airtable.gif", "/img/twilio.gif", "/img/wpp.gif"],
    features: [
      "Internal form to create bookings and events",
      "Automated Whatsapp and email notifications to attendees",
      "Whatsapp automated bot to deliver basic information",
      "Slack channel integration for new bookings, inquiries and clients in CRM",
      "Airtable database for flexible data management",
      "Automated generation of prices documents (PDF) based on database price changes",
      "Based on FastAPI rest APIs, Airtable for database, Twilio for Whatsapp Notifications and Slack for internal communications",
    ]
  },
  {
    title: "Real Estate Dashboard",
    subtitle: "Personal Project",
    description: "Analytics dashboard for sell/rent prices and ROI on Argentina's real estate market/submarkets.",
    fullDescription: "A comprehensive real estate analytics platform focusing on Argentina's property market. This table provides investors with market information on prices, listings and ROI. The system aggregates data to create view of market trends across different submarkets within Argentina.",
    technologies: ["FastAPI", "React", "PostgreSQL", "Linux", "Servers", "Rest API", "Data Engineering"],
    github: "#",
    live: "#",
    image: "/img/inmoingo.png",
    gif: ["/img/inmoinfo.gif","/img/inmoinfo_sql.gif"],
    features: [
      "Data scrapping, aggregation and loading pipeline with weekly run using FastAPI and PostgreSQL",
      "Metrics for different property types and grouped by number of bedrroms",
      "Median Sale Price, Median Rent Price, Median Lot Price, Median Anualized Return, Number of Listings, Number of real estate developments",
      "Sort by metrics and filter by location",
      "Data inline with government location data",
      "Allow investors to find the best investment opportunities"
    ]
  },
  {
    title: "Real Estate Property Reports",
    subtitle: "Job Related Project",
    description: "Interactive property reports with market trends and map information.",
    fullDescription: "A specialized property reporting tool that generates detailed, interactive reports for individual properties. These reports combine property-specific data with broader market trends, location analysis, and visual mapping to provide comprehensive insights. The system utilizes various data sources to create a complete picture of a property's value, location advantages, and market position.",
    technologies: ["Flask", "HTML/CSS/JS", "Rest API", "Chart.js", "Leaflet", "AWS", "SQL"],
    github: "#",
    live: "#",
    image: "/img/property_report.png",
    gif: ["/img/property_reports.gif"],
    features: [
      "Comprehensive property analysis with market trends",
      "Interactive maps showing proximity to amenities, risks around, zoning and more",
      "Comparative market analysis with similar properties",
      "Historical price trends and property transacion history",
      "Integration with multiple listing services",
      "Stripe inline payment system for report generation for free users",
      "In-report authentication and user tracking",
    ]
  },
  {
    title: "Suburb Reports",
    subtitle: "Job Related Project",
    description: "Interactive report with market insights, demographics and map information.",
    fullDescription: "An advanced suburb analysis platform that provides detailed insights into neighborhood characteristics, market performance, and demographic data. These interactive reports help real estate professionals, investors, and homebuyers make informed decisions by understanding the full context of a suburb, including development trends, population shifts, and property value patterns.",
    technologies: ["Flask", "HTML/CSS/JS", "Rest API", "Chart.js", "Leaflet", "AWS", "SQL"],
    github: "#",
    live: "#",
    image: "/img/suburb_report.png",
    gif: ["/img/suburb_report.gif"],
    features: [
      "Market insights with price trends and forecasts for units and houses",
      "Properties for sale and rent in the area",
      "Demographic analysis with age, income, and occupation data",
      "School zone mapping and education statistics",
      "Transportation and commute time visualization",
      "Property value trends by property type",
      "Future development and infrastructure projects",
      "Similar Suburbs algorithm to find comparable neighborhoods",
      "GPT generated suburb descriptions and summaries",
      "In-report authentication and user tracking",
    ]
  },
  {
    title: "TREXO: Backtesting App",
    subtitle: "Personal Project",
    description: "Interactive report with market insights, demographics and map information.",
    fullDescription: "TREXO is a backtesting application designed for technical traders to evaluate trading strategies against historical market data. The platform develops and tests a LLM-powered strategy generating comprehensive performance metrics to help users refine their trading approaches. Built with a Django backend with AI capabilities via Claude and ChatGPT integrations.",
    technologies: ["Django", "Django-rest", "HTML/CSS/JS", "LLM", "Claude", "ChatGPT", "SQLite", "Redis"],
    github: "#",
    live: "https://www.youtube.com/watch?v=ssYe2k0u3WM",
    image: "/img/trexo.png",
    gif: ["/img/trexo.gif"],
    features: [
      "Strategy backtesting against assets historical data",
      "AI-generated trading strategies",
      "Performance analytics with trading metrics",
      "Risk assessment and volatility analysis",
      "Strategy comparison against different assets and time frames",
      "Automated titles and descriptions generation using LLMs"
    ]
  },
  {
    title: "Cooly Digital Marketing Website",
    subtitle: "Side Project",
    description: "Wordpress site for digital marketing agency.",
    fullDescription: "A custom-designed WordPress website for Cooly, a digital marketing agency. This project was developed to showcase the agency's services, portfolio, and pricing. The site features a modern design, user-friendly navigation, and is optimized for search engines. The content was generated using AI tools like ChatGPT for SEO optimization, while visuals were created with MidJourney to enhance the brand's online presence. Focuse was on delivering the website fastly to start promoting the agency.",
    technologies: ["Wordrpress", "ChatGPT", "MidJourney"],
    github: "#",
    live: "https://coolyaustralia.com/",
    image: "/img/cooly.png",
    gif: ["/img/cooly_2.gif"],
    features: [
      "Custom WordPress theme development",
      "AI-generated content optimized for SEO",
      "MidJourney created visuals and brand imagery",
      "Responsive design for all device types",
      "Integrated contact forms and client portal",
      "Performance optimization for fast loading"
    ]
  }
];

export const skills = {
  frontend: [["JavaScript",80],["HTML5",90],["CSS3",90],["React",68],["Tailwind CSS",70],["Styled Components",80],["Chart.js",95],["Leaflet",90]],
  backend: [["Python",90],["FastAPI",75],["Flask",80],["Django",60],["PostgreSQL",80],["Linux",60],["AWS",50],["SQL",80],["AI/ML",80]],
  tools: [["Git",90],["GitHub",90],["VS Code",97],["Airtable",90],["Twilio",80],["Webflow",90],["CI/CD",70],["Slack",99],["LLMs",85]]
};
