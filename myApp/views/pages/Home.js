import Heroes from "./../../services/heroes.js"
/**********************************************
 * App Home page
 **********************************************/
let getHeroes = async () => {
    let heroes = await Heroes();
    return heroes;
};

let Home = {
   render : async () => {
      let people = await getHeroes();
      let view = /*html*/`
      <section class="section list_div">
        <h1>Home</h1>
        ${people.map( person =>/*html*/`
        <div class="hero_list"><a href="#/p/${person.id}">${person.name}</a></div>`).join('\n')}
      </section>`

      return view;
   },
   after_render : async () => {}
}

export default Home;
