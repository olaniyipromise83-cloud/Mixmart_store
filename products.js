export default async function handler(req, res) {

const response = await fetch(
"https://api.printful.com/store/products",
{
headers:{
Authorization:"Bearer eIvy4MfNJLnV0XBOqzrC97PvTLNEhKkRFfM0l5lH"
}
}
);

const data = await response.json();

res.status(200).json(data);

}
