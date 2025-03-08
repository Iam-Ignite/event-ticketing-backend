
export const eventsData = [
    {
      id: "1",
      name: "Summer Music Festival",
      date: "2025-06-15T18:00:00",
      location: "Central Park",
      description: "A night of amazing music under the stars featuring top artists from around the world.",
      ticketsAvailable: 200,
      price: 75.00,
      image: "https://i.scdn.co/image/ab67616d00001e020831fe63bece83201dd926a6"
    },
    {
      id: "2",
      name: "Tech Conference 2025",
      date: "2025-07-22T09:00:00",
      location: "Convention Center",
      description: "The biggest tech event of the year with keynotes, workshops, and networking opportunities.",
      ticketsAvailable: 0, // Sold out
      price: 150.00,
      image: "https://media.bitcot.com/wp-content/uploads/2025/02/Tech-Conferences-in-2025-1.jpg"
    },
    {
      id: "3",
      name: "Cooking Masterclass",
      date: "2025-05-10T11:00:00",
      location: "Culinary Institute",
      description: "Learn cooking techniques from world-renowned chefs in this interactive masterclass.",
      ticketsAvailable: 50,
      price: 120.00,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2X8_QZ21_gRXN12W3Jhpa6NC5CIcerz4AaQ&s"
    },
    {
      id: "4",
      name: "Comedy Night",
      date: "2025-04-25T20:00:00",
      location: "Laugh Factory",
      description: "A night of laughs with the best stand-up comedians in the country.",
      ticketsAvailable: 100,
      price: 45.00,
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/665360/capsule_616x353.jpg?t=1728499660"
    },
    {
      id: "5",
      name: "Business Leadership Summit",
      date: "2025-08-05T08:30:00",
      location: "Grand Hotel Conference Room",
      description: "Connect with industry leaders and learn strategies to grow your business.",
      ticketsAvailable: 25,
      price: 250.00,
      image: "https://www.businessinternational.it/GetImage/Eventi/4903/2Evento"
    }
  ];
  
  export const generateOrderNumber = () => {
    const prefix = "ORD";
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0");
    return `${prefix}-${timestamp}-${random}`;
  };
  