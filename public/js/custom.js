const packageServiceEndpoint = "http://localhost:9001/packages";
async function onCheckout() {
  const body = {
    receiverAddress: document.getElementById("street_address").value,
    receiverName:
      document.getElementById("first_name").value +
      document.getElementById("last_name").value,
    receiverEmail: document.getElementById("email_address").value,
    senderAddress: "Høgevej 25, 8210 Aarhus",
    senderName: "KARL FASHION",
    weightKg: 2,
  };
  const response = await fetch(packageServiceEndpoint, {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());

  console.log(response);
}
