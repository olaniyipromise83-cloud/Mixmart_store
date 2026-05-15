const PRINTFUL_API = "2n1KBbICdchx3piD4WuYsu9uVgRlY1dNnUOuKH7j";

async function loadProducts(){

try{

const response = await fetch(
"https://api.printful.com/store/products",
{
headers:{
Authorization:`Bearer ${PRINTFUL_API}`
}
}
);

const data = await response.json();

console.log(data);

}catch(error){

console.log(error);

}

}

loadProducts();
