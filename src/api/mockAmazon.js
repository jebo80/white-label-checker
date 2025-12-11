export async function searchAmazonMock(query) {
  if (!query) return [];

  return [
    {
      title: "Bluetooth Kopfhörer Noise Cancelling",
      brand: "XCY-Store",
      price: "39.99",
      image: "https://via.placeholder.com/300",
      url: "https://www.amazon.de",
      isWhiteLabel: true,
    },
    {
      title: "USB-C Schnellladegerät 30W",
      brand: "TechPro",
      price: "14.99",
      image: "https://via.placeholder.com/300",
      url: "https://www.amazon.de",
      isWhiteLabel: false,
    }
  ];
}
