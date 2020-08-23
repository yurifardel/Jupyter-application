const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://watchflix-app.herokuapp.com';

const URL_CATEGORIAS = `${URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIAS}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos(){
  console.log(URL_BACKEND);
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then(async (respostaDoServidor) =>{

      if(respostaDoServidor.ok){
        const resposta = await respostaDoServidor.json()
        return resposta;
      }

      throw new Error('Não foi possivel pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
};