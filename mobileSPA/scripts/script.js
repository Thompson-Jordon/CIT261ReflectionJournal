import Utils from "./../../services/utils.js";

if (document.querySelector("#favorite")) {
   document.querySelector("#favorite").addEventListener('click', toggleFavs);
}

function toggleFavs() {
   let favorites = null;
   let request = Utils.parseRequestURL();
   let id = request.id;
   if(window.localStorage.favorites) {
      favorites = new Set(JSON.parse(window.localStorage.favorites));
   } else {
      favorites = new Set();
   }
   if (favorites.has(id)) {
      favorites.delete(id);
      if(favorites.size == 0) {
         window.localStorage.removeItem("favorites");
      } else {
      window.localStorage.favorites = JSON.stringify([...favorites]);
      }
   } else {
      favorites.add(id);
      window.localStorage.favorites = JSON.stringify([...favorites]);
   }   
}