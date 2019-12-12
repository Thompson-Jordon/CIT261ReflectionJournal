import Utils from "./../../services/utils.js";
import Heroes from "../../services/heroes.js";

let getHeroes = async (id) => {
  /*const options = {
    method: "GET"
  };
  try {
    const response = await fetch(
      "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/" + id + ".json",
      options
    );
    const json = await response.json();
    return json;
  } catch (err) {
    console.log("Error getting json", err);
  }*/
  let heroes = await Heroes();
  for (let i = 1; i <= 563; i++) {
    if (heroes[i].id == id) {
      return heroes[i];
    }
  }
};

let Profile = {
  render: async () => {
    let request = Utils.parseRequestURL();
    let person = await getHeroes(request.id);
    let view = /*html*/ `
         <section class="section">
            <img class="hero_pic" src="${person.images.md}" alt="Image of ${person.name}">
            <h1>${person.name}</h1>
            <p> Id : ${person.id} </p>
            <p> Alignment : ${person.biography.alignment} </p>
            <p> Publisher : ${person.biography.publisher} </p>
            <button id="favorite" onclick="toggleFavs()">Add to Favorites</button>
         </section>
      `;
    return view;
  },
  after_render: async () => {}
};

export default Profile;
