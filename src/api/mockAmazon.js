// Simuliert eine API-Anfrage an Amazon
export async function searchAmazonMock(query) {
  console.log("Mock API Anfrage für:", query);

  // Simulierte Wartezeit wie bei einer echten API
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Beispiel-Daten (können wir später beliebig erweitern)
    return [
    {
      title: "Bosch Professional Schlagbohrmaschine",
      brand: "Bosch",
      price: "89.99",
      image: "https://via.placeholder.com/150?text=Bosch"
    },
    {
      title: "XGHJY Powerbank 30000mAh",
      brand: "XGHJY",
      price: "24.99",
      image: "https://via.placeholder.com/150?text=Powerbank"
    },
    {
      title: "Philips Rasierer Series 3000",
      brand: "Philips",
      price: "49.99",
      image: "https://via.placeholder.com/150?text=Philips"
    },
    {
      title: "JYTK9 USB-C Schnellladekabel",
      brand: "JYTK9",
      price: "6.99",
      image: "https://via.placeholder.com/150?text=USB-C"
    }
  ];

}
