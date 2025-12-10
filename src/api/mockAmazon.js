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
      image: "https://m.media-amazon.com/images/I/71xKzVsy7fL._AC_SX425_.jpg"
    },
    {
      title: "XGHJY Powerbank 30000mAh",
      brand: "XGHJY",
      price: "24.99",
      image: "https://m.media-amazon.com/images/I/61pN5z9YtZL._AC_SX425_.jpg"
    },
    {
      title: "Philips Rasierer Series 3000",
      brand: "Philips",
      price: "49.99",
      image: "https://m.media-amazon.com/images/I/71wJuaZyKXL._AC_SX425_.jpg"
    },
    {
      title: "JYTK9 USB-C Schnellladekabel",
      brand: "JYTK9",
      price: "6.99",
      image: "https://m.media-amazon.com/images/I/51o1eKZx8CL._AC_SX425_.jpg"
    }
  ];
}
