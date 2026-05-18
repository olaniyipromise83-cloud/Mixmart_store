export default async function handler(req, res) {

  // Allow only POST request
  if (req.method !== "POST") {
    return res.status(200).json({
      message: "API working"
    });
  }

  try {

    const { email, amount } = req.body;

    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer sk_test_5166c72d3f803d038c226f083531a55cbbc65b8f`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          amount
        })
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
