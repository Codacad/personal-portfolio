import React, { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "FAQ Accordion",
      description: "A simple FAQ accordion made with vanilla JavaScript.",
      url: "https://www.frontendmentor.io/solutions/responsive-faaccordion-component-bEhs19Hqkz",
      live_url: "https://codacad.github.io/fa-accordion/",
      gh_url: "https://github.com/Codacad/fa-accordion",
      date_of_submission:"17 December 2023"
    },
    {
      id: 2,
      name: "Responsive Advice Generator App",
      description: `An app that generates random advice built with ReactJS.`,
      url:"https://www.frontendmentor.io/solutions/responsive-advice-generator-app-zr4Boh0XF_",
      live_url:"https://codacad.github.io/advice-generator-app/",
      gh_url:"https://github.com/Codacad/advice-generator-app",
      date_of_submission:"14 December 2023"
    },
    {
      id: 3,
      name: "Responsive Expenses Chart Component",
      description:"A responsive expense chart component created using ReactJS.",
      url:"https://www.frontendmentor.io/solutions/responsive-expenses-chart-component-zS_-pDM-7i",
      live_url:"https://codacad.github.io/expenses-chart-component/",
      gh_url:"https://github.com/Codacad/expenses-chart-component",
      date_of_submission:"13 December 2023"
    },
    {
      id: 4,
      name: "QR Code Component",
      description: "A QR code component created in HTML & CSS",
      url:"https://www.frontendmentor.io/solutions/qr-code-component-BvEWmtWmBk",
      live_url:"https://codacad.github.io/qr-code-component/",
      gh_url:"https://github.com/Codacad/qr-code-component",
      date_of_submission:"09 December 2023"
    },
    {
      id: 5,
      name: "Order Summary Component",
      description: "An order summary component created using HTML & CSS",
      url:"https://www.frontendmentor.io/solutions/order-summary-component-qZJqppKmMx",
      live_url:"https://codacad.github.io/order-summary-component/",
      gh_url:"https://github.com/Codacad/order-summary-component",
      date_of_submission:"10 December 2023"
    },
    {
      id: 6,
      name: "Product Preview Card Component with React",
      description: "A product preview card component created using React and TailwindCSS.",
      url:"https://www.frontendmentor.io/solutions/product-preview-card-component-with-react-XA6NWcm8iD",
      live_url:"https://codacad.github.io/product-preview-card-component/",
      gh_url:"https://github.com/Codacad/product-preview-card-component",
      date_of_submission:"29 November 2023"
    },
    {
      id: 7,
      name: "New Home Page (ReactJS, CSS, Responsive Design)",
      description: "A product preview card component created using React and TailwindCSS.",
      url:"https://www.frontendmentor.io/solutions/new-home-page-reactjs-css-responsive-design-dNLwzRf0mw",
      live_url:"https://codacad.github.io/news-homepage/",
      gh_url:"https://github.com/Codacad/news-homepage",
      date_of_submission:"07 October 2023"
    },
    {
      id: 8,
      name: "Intro Section with Dropdown (ReactJS, CSS, JavaScript, Reach Hooks)",
      description: "A dropdown menu that displays additional information when a user hovers over an item on the intro section of a landing page.",
      url:"https://www.frontendmentor.io/solutions/intro-section-with-dropdown-reactjs-css-javascript-reach-hooks-n3JMrnV2jt",
      live_url:"https://codacad.github.io/Intro-Section-With-Dropdown/",
      gh_url:"https://github.com/Codacad/Intro-Section-With-Dropdown",
      date_of_submission:"07 October 2023"
    },
    {
      id: 9,
      name: "Newsletter Signup Form with Success Message",
      description: "A newsletter sign up form that displays a success message when the email is submitted.",
      url:"https://www.frontendmentor.io/solutions/newsletter-signup-form-with-success-message-dP72UrE_l3",
      live_url:"https://codacad.github.io/newsletter-signup/",
      gh_url:"https://github.com/Codacad/newsletter-signup",
      date_of_submission:"09 July 2023"
    },
    {
      id: 10,
      name: "Interactive Rating Component",
      description: "An interactive rating component made in VanillaJS",
      url:"https://www.frontendmentor.io/solutions/interactive-rating-component-gltf8Q6MVY",
      live_url:"https://codacad.github.io/rating-component/",
      gh_url:"https://github.com/Codacad/rating-component",
      date_of_submission:"20 July 2023"
    },
    {
      id: 11,
      name: "Sunnyside Agency Landing Page",
      description: "A landing page for a digital agency showcasing services, built using HTML, CSS, and JavaScript.",
      url:"https://www.frontendmentor.io/solutions/sunnyside-agency-landing-page-3fQlY2DJlg",
      live_url:"https://codacad.github.io/sunnyside-agency-landing-opage/",
      gh_url:"https://github.com/Codacad/sunnyside-agency-landing-opage",
      date_of_submission:"01 October 2023"
    },
    {
      id: 12,
      name: "Responsive Results Summary Component",
      description: "A responsive results summary component built using HTML & CSS",
      url:"https://www.frontendmentor.io/solutions/responsive-results-summary-component-aHvCQ51p4V",
      live_url:"https://codacad.github.io/result-summary-component/",
      gh_url:"https://github.com/Codacad/result-summary-component",
      date_of_submission:"09 July 2023"
    },
    {
      id: 13,
      name: "Responsive landing page using CSS Grid & Flexbox",
      description: "A responsive design of a landing page using CSS grid and flexbox.",
      url:"https://www.frontendmentor.io/solutions/responsive-landing-page-using-css-grid-and-flexbox-y72T9xYG-",
      live_url:"https://codacad.github.io/frontendmentor-challenge-1/",
      gh_url:"https://github.com/Codacad/frontendmentor-challenge-1",
      date_of_submission:"12 March 2022"
    }
  ]);
  return (
    <>
      <div className="bg-white projects relative"></div>
    </>
  );
};

export default Projects;
