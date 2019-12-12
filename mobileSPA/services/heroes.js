let Heroes = async () => {
   if(window.localStorage.heroDB) {
      return JSON.parse(window.localStorage.heroDB);
   }
   const options = {
      method: "GET"
   };
   try {
      let response = await fetch("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json",
      options);
      const json = await response.json();
      window.localStorage.heroDB = JSON.stringify(json);
      return json;
   } catch (err){
      console.log("Error getting json", err);
   }
}

export default Heroes;