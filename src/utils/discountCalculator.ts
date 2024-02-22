// Discount price based on continent and category of product
export const discountCalculator = (category: String, continent: String) => {
  if (continent === "Africa" || continent === "Asia") {
    switch (category) {
      case "Surgery":
        return 20;
      case "Consult":
        return 5;
      case "Lab":
        return 10;
      case "Treatment":
        return 15;
      default:
        return 3;
    }
  } else return 3;
};