export default async function handler(req, res) {

const PRINTFUL_API = "eIvy4MfNJLnV0XBOqzrC97PvTLNEhKkRFfM0l5lH";

try {

const response = await fetch("https://api.printful.com/store/products", {
headers: {
Authorization: `Bearer ${PRINTFUL_API}`
}
});

const data = await response.json();

// send products to frontend safely
res.status(200).json(data);

} catch (error) {

res.status(500).json({ error: "Failed to load products" });

}

}
