import React from 'react';
import './Project.css';

const projects = [
  {
    name: 'MERN-Ecommerce-site',
    image: 'https://static.vecteezy.com/system/resources/previews/002/179/047/original/website-landing-page-mockup-for-e-commerce-free-vector.jpg',
    TechStack:'Tech Stack: React, Node.js, MongoDB, Express.js, Firebase',
    codeLink: 'https://github.com/9787351813/Mern-Ecommerce-site.git',
    demoLink: 'https://trendz-home-collection.vercel.app/',
  },
  {
    name: 'MERN-Food delivery app',
    image: 'https://i.ytimg.com/vi/pMR_3FQxdYo/maxresdefault.jpg',
    TechStack:'Tech Stack: React, Node.js, MongoDB, Express.js, stripe',
    codeLink: 'https://github.com/9787351813/Food-Delivery-mern-app-main.git',
    demoLink: 'https://food-delivery-mern-app-psi.vercel.app/',
  },
  {
    name: 'MERN-Social media chat app',
    image: 'https://raw.githubusercontent.com/nz-m/SocialEcho/main/resources/UI-community.png',
    TechStack:'Tech Stack: React, Node.js, MongoDB, Express.js',
    codeLink: 'https://github.com/9787351813/DashboardFE.git',
    demoLink: 'https://socialecho.netlify.app/',
  },
  {
    name: 'MERN-HR Management Dashboard',
    image: 'https://bst.icons8.com/wp-content/uploads/2020/03/dashboard-design-concept.png',
    TechStack:'Tech Stack: React, Node.js, MongoDB, Express.js',
    codeLink: 'https://github.com/9787351813/DashboardFE.git',
    demoLink: 'https://eloquent-elf-77d442.netlify.app',
  },
  {
    name: 'Shopping cart',
    image: 'https://1.bp.blogspot.com/-d3naBjwfrSE/VHVRNle-CLI/AAAAAAAAACo/2ADzqat6xR4/s1600/shopping-cart-1920.jpg',
    description: 'Shopping cart using React that allows users to add and remove items from the cart.',
    codeLink: 'https://github.com/9787351813/ShopTask.git',
    demoLink: ' https://leafy-llama-bfdf1d.netlify.app/',
  },
  {
    name: 'Rest Countries & Weather using fetch API',
    image: ' https://shots.codepen.io/username/pen/oNOEYqo-800.jpg?version=1712266944',
    description: 'Implement the rest countries and open weather map APIs using fetch() API.',
    codeLink: 'https://github.com/9787351813/countries-fetch-API.git',
    demoLink: 'https://guileless-quokka-db0774.netlify.app/',
  },
  {
    name: 'E-Commerce',
    image: 'https://www.shopweb.in/images/imageforecommercewebsite.jpg',
    description: 'Created a cart page with per-item price, per-item quantity,Total quantity and total amount',
    codeLink: 'https://github.com/9787351813/ReactRedux.git',
    demoLink: 'https://frabjous-cranachan-22b586.netlify.app/',
  },
  {
    name: 'Login-Register using React',
    image: 'https://uicookies.com/wp-content/uploads/2019/05/login-form-11.jpg',
    description: 'created a login and register form in React',
    codeLink: 'https://github.com/9787351813/login-register-form-in-React.git',
    demoLink: 'hhttps://login-register-form-in-react.vercel.app/',
  },
  {
    name: 'Todo List',
    image: 'https://pluspng.com/img-png/to-do-list-png-the-power-of-a-to-do-list-imodelafrica-1024.png',
    description: 'Create a Todo App which have All CRUD Functionalities',
    codeLink: 'https://github.com/9787351813/TodoTask.git',
    demoLink: 'https://hilarious-syrniki-0a63a9.netlify.app/',
  },
  
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">Projects</h2>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4 d-flex align-items-stretch" key={index}>
              <div className="card project-card">
                <img src={project.image} className="card-img-top" alt={project.name} />
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <p className="card-text tech-stack">{project.TechStack}</p>
                  <a href={project.codeLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Code</a>
                  <a href={project.demoLink} className="btn btn-warning" target="_blank" rel="noopener noreferrer">Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
