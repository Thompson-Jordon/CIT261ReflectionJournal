import Utils from "./../../services/utils.js";

function toggleFavs() {
   let favorites = null;
   let request = Utils.parseRequestURL();
   let id = request.id;
   if(window.localStorage.favorites) {
      favorites = new Set(JSON.parse(window.localStorage.favorites));
   } else {
      favorites = new Set(id);
      window.localStorage.favorites = JSON.stringify(favorites);
      return;
   }
   if (favorites.has(id)) {
      favorites.delete(id);
   } else {
      favorites.add(id);
   }
   window.localStorage.favorites = JSON.stringify(favorites);
}