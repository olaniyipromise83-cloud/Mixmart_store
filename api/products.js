export default function handler(req, res) {

res.status(200).json({
result: [

{
id: 1,
name: "Luxury Handbag",
thumbnail_url: "https://your-image-link.jpg",
retail_price: 24990
},

{
id: 2,
name: "Women's Fashion Dress",
thumbnail_url: "https://your-image-link.jpg",
retail_price: 34990
},

{
id: 3,
name: "Beauty Brush Set",
thumbnail_url: "https://your-image-link.jpg",
retail_price: 12990
}

]
});

}
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
