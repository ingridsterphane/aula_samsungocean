import Card from "../Card/Card";
import "./ReadAll.css"

const items = [
    {
        _id: "63f773a70f5f0e919a375ab2",
        nome:"Namjoon",
        imagemUrl: "https://pbs.twimg.com/profile_images/1458192159279038473/I7S0CnS8_400x400.jpg",
        tags: ["Idol: lindo", "Amo: ele"]
    },
    {
        _id: "63f773690f5f0e919a375ab0",
        nome: "Jk",
        imagemUrl:"https://akamai.sscdn.co/uploadfile/letras/fotos/1/1/f/d/11fd2af330736cb78d5d0a048c1ea88b.jpg",
        tags: ["Idol: lindo", "Amo: ele"]
    },
    {
        _id:"63f7738b0f5f0e919a375ab1",
        nome: "Jin",
        imagemUrl:"https://img.etimg.com/thumb/msid-94131512,width-1600,height-1600,imgsize-40864,overlay-etpanache/photo.jpg",
        tags: ["Idol: lindo", "Amo: ele"]
    },

];

 function ReadAll() {
    const items = [];

  async function realizarrequisicao() {
    // Realizar requisição para backend obtendo a lista de itens
    const url="http:localhost:3000/item";
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  }

  realizarrequisicao();

    return <div className= "ReadAll">
        {items.map(function (item) {
          
            return <Card key={"card-" + item._id} item={item} />;
        })}
    </div>
 };

export default ReadAll;
