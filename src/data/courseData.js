const courseData = [
  {
    id: "biz",
    title: "How to Start a Business",
    image: require("../images/Icons/cat4.png"),
    description: "Learn the basics of setting up a successful beauty brand.",
    videos: [
      {
        title: "Getting Started (Free)",
        description: "How to register, budget, and structure your business.",
        url: "../images/vids/GettingStarted-Business.mp4",
        thumbnail: "/vids/learninghubintro.png",
        locked: false
      },
      { title: "Business Plan Guide", description: "Step-by-step plan structure.", locked: true },
      { title: "Sourcing Materials", description: "Find reliable suppliers.", locked: true },
      { title: "Costing & Pricing", description: "Price for profit & scale.", locked: true },
      { title: "Marketing Tips", description: "Promote your brand effectively.", locked: true },
    ]
  },
  {
    id: "emulsions",
    title: "How to Create Emulsions",
    image: require("../images/Icons/cat3.png"),
    description: "Make creamy lotions, serums & more with emulsifiers.",
    videos: [
      {
        title: "Intro to Emulsions (Free)",
        description: "Understanding oil + water blends.",
        url: "videos/emulsions-intro.mp4",
        thumbnail: "images/thumbnails/emulsion.jpg",
        locked: false
      },
      { title: "Equipment Needed", description: "Tools for safe production.", locked: true },
      { title: "Formulation Basics", description: "Start with simple formulas.", locked: true },
      { title: "Preservatives 101", description: "Keep your products safe.", locked: true },
      { title: "Stability Testing", description: "Ensure shelf-stable formulas.", locked: true },
    ]
  },
  {
    id: "bodyOils",
    title: "How to Create Body Oils",
    image: require("../images/Icons/cat2.png"),
    description: "Craft nourishing, aromatic body oils at home.",
    videos: [
      {
        title: "Oil Blending Basics (Free)",
        description: "Simple oil combinations for all skin types.",
        url: "videos/body-oils.mp4",
        thumbnail: "images/thumbnails/oils.jpg",
        locked: false
      },
      { title: "Carrier Oils 101", description: "Properties and uses.", locked: true },
      { title: "Essential Oil Safety", description: "Avoid irritation.", locked: true },
      { title: "Packaging Tips", description: "What bottles to use?", locked: true },
      { title: "Labeling & Branding", description: "Regulations & design.", locked: true },
    ]
  },
  
];

export default courseData;
