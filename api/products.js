export default async function handler(req, res) {

const PRINTFUL_KEY = "eIvy4MfNJLnV0XBOqzrC97PvTLNEhKkRFfM0l5lH";

try {

const response = await fetch(
"https://api.printful.com/store/products",
{
headers: {
Authorization: `Bearer ${PRINTFUL_KEY}`
}
}
);

const data = await response.json();

res.status(200).json(data);

} catch (error) {

res.status(500).json({
error: error.message
});

}

}
