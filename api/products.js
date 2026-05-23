export default async function handler(req, res) {

const PRINTFUL_KEY = "eIvy4MfNJLnV0XBOqzrC97PvTLNEhKkRFfM0l5lH";

try {

const response = await fetch(
"https://api.printful.com/store/sync/products",
{
headers: {
Authorization: `Bearer ${PRINTFUL_KEY}`
}
}
);

const data = await response.json();

const products = data.result.map(product => ({

id: product.id,

name: product.name,

thumbnail_url:
product.thumbnail_url ||

"https://via.placeholder.com/300",

retail_price:
product.sync_variants[0]?.retail_price || 5000

}));

res.status(200).json({
result: products
});

} catch (error) {

res.status(500).json({
error: error.message
});

}

}
