const PRINTFUL_API = "eIvy4MfNJLnV0XBOqzrC97PvTLNEhKkRFfM0l5lH";

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
