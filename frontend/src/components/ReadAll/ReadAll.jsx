import Card from "../Card/Card";
import "./ReadAll.css"

const items = [
    {
        _id: "1234",
        nome:"Namjoon",
        imagemUrl: "https://pbs.twimg.com/profile_images/1458192159279038473/I7S0CnS8_400x400.jpg"
    },
    {
        _id: "1234",
        nome: "Jk",
        imagemUrl:"https://akamai.sscdn.co/uploadfile/letras/fotos/1/1/f/d/11fd2af330736cb78d5d0a048c1ea88b.jpg"
    },
    {
        _id:"1234",
        nome: "Jin",
        imagemUrl:"https://img.etimg.com/thumb/msid-94131512,width-1600,height-1600,imgsize-40864,overlay-etpanache/photo.jpg"
    },

];


function ReadAll (){
    return <div className= "ReadAll">
        {items.map(function (item) {
            console.log(item);
            return <Card key={"card-" + item._id} item={item} />;
        })}
    </div>
}

export default ReadAll;