const axios = require ('axios');

async function getUsuarios () {
  const res = await axios.get('https://jasonplaceholder.typicode.com/users')
  return res;
};

(async () => {
    resultado =await getUsuarios();
    console.log (JASON.stringify(resultado));
})();
