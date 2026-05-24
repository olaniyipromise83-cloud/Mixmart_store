export default async function handler(req, res) {

const PRINTFUL_KEY = "eIvy4MfNJLnV0XBOqzrC97PvTLNEhKkRFfM0l5lH";
const STORE_ID = "18168684";

try {

const response = await fetch(
`https://api.printful.com/store/products?store_id=${STORE_ID}`
{
headers: {
Authorization: `Bearer ${PRINTFUL_KEY}`
}
}
);

const data = await response.json();

const formattedProducts = data.result.map(product => {

const basePrice =
Number(product.sync_variants?.[0]?.retail_price || 0);

const finalPrice =
(basePrice * 1.2).toFixed(2);

return {

id: product.id,

name: product.name,

thumbnail_url:
product.thumbnail_url ||
"https://via.placeholder.com/300",

retail_price: finalPrice

};

});

res.status(200).json({
result: formattedProducts
});

} catch (error) {

res.status(500).json({
error: error.message
});

}

}
