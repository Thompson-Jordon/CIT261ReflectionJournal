import Heroes from "./../../services/heroes.js";
/**********************************************
 * App Favorites page
 **********************************************/
let Favorites = {
  render: async () => {
    let heroes = await Heroes();
    let view = "";
    if (JSON.parse(window.localStorage.favorites)) {
      let favs = new Set(JSON.parse(window.localStorage.favorites));
      view = /*html*/ `
      <section class="section list_div">
        <h1>Favorite Heroes</h1>`;
      for (let i = 0; i < 563; i++) {
        if (favs.has(`${heroes[i].id}`)) {
          view +=
              /*html*/ `
         <div class="hero_list"><a href="#/p/${heroes[i].id}">${heroes[i].name}</a></div>`;
        }
      }
      view += `</section>`;
    } else {
      view = /*html*/ `<div class="hero_list">There are no favorites</div>`;
    }
    return view;
  },
  after_render: async () => {}
};

export default Favorites;
