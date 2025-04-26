export const projects = [
  {
    title: "Internal Booking System",
    description: "A booking system for events with Whatsapp and Slack Communications.",
    fullDescription: "An advanced internal booking system designed to streamline event management with integrated communication channels. This system allows users to create, manage, and track event bookings while automatically sending notifications via Whatsapp and posting updates to relevant Slack channels. Built with a FastAPI backend and integrated with Twilio for messaging capabilities.",
    technologies: ["Twilio", "FastAPI", "HTML/CSS/JS", "Airtable", "Rest API", "Render"],
    github: "#",
    live: "#",
    image: "/img/airtable.png",
    gif: "/img/airtable-demo.gif", // You'll need to replace with actual GIF path
    features: [
      "Real-time booking availability updates",
      "Automated Whatsapp notifications to attendees",
      "Slack channel integration for team updates",
      "Airtable database for flexible data management",
      "Admin dashboard for event management",
      "Custom reporting and analytics"
    ]
  },
  {
    title: "Real Estate Dashboard",
    description: "Analytics dashboard for sell/rent prices and ROI on Argentina's real estate market/submarkets.",
    fullDescription: "A comprehensive real estate analytics platform focusing on Argentina's property market. This dashboard provides investors and real estate professionals with detailed market insights, property valuations, and return-on-investment calculations. The system aggregates data from multiple sources to create a holistic view of market trends across different submarkets within Argentina.",
    technologies: ["FastAPI", "React", "PostgreSQL", "Linux", "Servers", "Rest API"],
    github: "#",
    live: "#",
    image: "/img/inmoingo.png",
    gif: "/img/inmoingo-demo.gif", // You'll need to replace with actual GIF path
    features: [
      "Interactive price heat maps by neighborhood",
      "Historical price trend analysis",
      "ROI calculator with customizable parameters",
      "Real-time market data integration",
      "Comparative submarket analysis",
      "Investment opportunity scoring system"
    ]
  },
  {
    title: "MIBs Property Reports",
    description: "Interactive property reports with market trends and map information.",
    fullDescription: "A specialized property reporting tool that generates detailed, interactive reports for individual properties. These reports combine property-specific data with broader market trends, location analysis, and visual mapping to provide comprehensive insights. The system utilizes various data sources to create a complete picture of a property's value, location advantages, and market position.",
    technologies: ["Flask", "HTML/CSS/JS", "Rest API", "Chart.js", "Leaflet", "AWS", "SQL"],
    github: "#",
    live: "#",
    image: "/img/property_report.png",
    gif: "/img/property_report-demo.gif", // You'll need to replace with actual GIF path
    features: [
      "Customizable property analysis reports",
      "Interactive maps showing proximity to amenities",
      "Comparative market analysis with similar properties",
      "Historical price trends and future projections",
      "Exportable PDF reports for clients",
      "Integration with multiple listing services"
    ]
  },
  {
    title: "MIBs Suburb Reports",
    description: "Interactive report with market insights, demographics and map information.",
    fullDescription: "An advanced suburb analysis platform that provides detailed insights into neighborhood characteristics, market performance, and demographic data. These interactive reports help real estate professionals, investors, and homebuyers make informed decisions by understanding the full context of a suburb, including development trends, population shifts, and property value patterns.",
    technologies: ["Flask", "HTML/CSS/JS", "Rest API", "Chart.js", "Leaflet", "AWS", "SQL"],
    github: "#",
    live: "#",
    image: "/img/suburb_report.png",
    gif: "/img/suburb_report-demo.gif", // You'll need to replace with actual GIF path
    features: [
      "Demographic analysis with age, income, and occupation data",
      "School zone mapping and education statistics",
      "Crime rate analysis and safety scoring",
      "Transportation and commute time visualization",
      "Property value trends by property type",
      "Future development and infrastructure projects"
    ]
  },
  {
    title: "TREXO: Backtesting App",
    description: "Interactive report with market insights, demographics and map information.",
    fullDescription: "TREXO is a sophisticated backtesting application designed for financial traders and analysts to evaluate trading strategies against historical market data. The platform incorporates advanced data analysis tools, LLM-powered strategy optimization, and comprehensive performance metrics to help users refine their trading approaches. Built with a Django backend and enhanced with AI capabilities via Claude and ChatGPT integrations.",
    technologies: ["Django", "Django-rest", "HTML/CSS/JS", "LLM", "Claude", "ChatGPT", "SQLite"],
    github: "#",
    live: "#",
    image: "/img/trexo.png",
    gif: "/img/trexo-demo.gif", // You'll need to replace with actual GIF path
    features: [
      "Comprehensive strategy backtesting against historical data",
      "AI-powered trading strategy suggestions",
      "Performance analytics with customizable metrics",
      "Risk assessment and volatility analysis",
      "Strategy comparison and optimization tools",
      "Automated report generation with natural language summaries"
    ]
  },
  {
    title: "Cooly Digital Marketing Website",
    description: "Wordpress site for digital marketing agency.",
    fullDescription: "A custom-designed WordPress website for Cooly, a digital marketing agency. This project focused on creating a visually striking online presence that showcases the agency's services, portfolio, and expertise. The site features AI-generated content and imagery to create a modern, professional appearance while maintaining excellent performance and user experience.",
    technologies: ["Wordrpress", "ChatGPT", "MidJourney"],
    github: "#",
    live: "https://coolyaustralia.com/",
    image: "/img/cooly.png",
    gif: "/img/cooly-demo.gif", // You'll need to replace with actual GIF path
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
