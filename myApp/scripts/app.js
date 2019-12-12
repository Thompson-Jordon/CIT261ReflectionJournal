"use strict"; // Helps to write cleaner code. You cannot use undeclared vars

// import pages here
import Home          from '../views/pages/Home.js'
import Profile       from '../views/pages/Profile.js'
import Error404      from '../views/pages/Error404.js'

// Components
import Navbar        from '../views/components/Navbar.js'
import Footer        from '../views/components/Footer.js'

// Services
import Utils         from '../services/utils.js'

//Here is a list of supported routes
const routes = {
   // add applicable routes
   '/'            : Home,
   '/p/:id'       : Profile
};

// code to handle router
// https://javascript.info/async-await a good explanation of "async"
const router = async () => { 

   // lazy load view elements:
   const header = null || document.getElementById('header');
   const content = null || document.getElementById('content');
   const footer = null || document.getElementById('footer');

   // Render Header and Footer
   header.innerHTML = await Navbar.render();
   await Navbar.after_render();
   footer.innerHTML = await Footer.render();
   await Footer.after_render();


   // Get the URL from the addressbar
   let request = Utils.parseRequestURL();

   // Parse the URL 
   let parseURL = (request.resource ? '/' + request.resource : '/') + (request.id ?  '/:id' : '') + (request.verb ? '/' + request.verb : '');

   // Get the page from the hash of supported routes
   // if the parsed URL is not in the supported list then post 404 page
   let page = routes[parseURL] ? routes[parseURL] : Error404;
   content.innerHTML = await page.render();
   await page.after_render();
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);