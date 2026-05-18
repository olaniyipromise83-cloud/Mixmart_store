export default async function handler(req, res) {

if(req.method !== "POST"){
return res.status(405).json({
message: "Method not allowed"
});
}

try{

const { email, amount } = req.body;

const response = await fetch(
"https://api.paystack.co/transaction/initialize",
{
method: "POST",

headers: {
Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
"Content-Type": "application/json"
},

body: JSON.stringify({
email,
amount: amount * 100,
currency: "USD"
})

}
);

const data = await response.json();

res.status(200).json(data);

}catch(error){

res.status(500).json({
error: error.message
});

}

}
