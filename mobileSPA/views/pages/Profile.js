import Utils from "./../../services/utils.js";
import Heroes from "./../../services/heroes.js";

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
  for (let i = 0; i <= 563; i++) {
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
            <img id="animate" class="hero_pic" src="${person.images.md}" alt="Image of ${person.name}">
            <h2>${person.name}</h2>
            <p> Id : ${person.id} </p>
            <p> Alignment : ${person.biography.alignment} </p>
            <p> Publisher : ${person.biography.publisher} </p>
            <h2> Power Stats </h2>
            <p> Intelligence : ${person.powerstats.intelligence} </p>
            <p> Strength : ${person.powerstats.strength} </p>
            <p> Speed : ${person.powerstats.speed} </p>
            <p> Durability : ${person.powerstats.durability} </p>
            <p> Power : ${person.powerstats.power} </p>
            <p> Combat : ${person.powerstats.combat} </p>
            <input type="button" id="favorite" value="Toggle Favorites"></input>
         </section>
      `;
    return view;
  },
  after_render: async () => {}
};

export default Profile;
