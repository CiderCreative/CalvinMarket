//these types are to inform the create/edit pages to know what kinds of fields
// are generally wanted for each type of item

const apparel = {
  Condition: {
    type: "button",
    options: ["New", "Excellent", "Good", "Fair", "Used"],
  },
  Gender: {
    type: "button",
    options: ["Men's", "Women's", "Unisex"],
  },
  Size: {
    type: "drop-down",
    options: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  Color: {
    type: "drop-down",
    options: [
      "Black",
      "White",
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Orange",
      "Purple",
      "Pink",
      "Brown",
      "Grey",
      "Multi-Color",
    ],
  },
  Description: {
    type: "text",
    filler: "Describe your item(s) here",
  },
};

const textbook = {
  ISBN: {
    type: "text",
    filler: "ISBN",
  },
  Condition: {
    type: "button",
    options: ["New", "Excellent", "Good", "Fair", "Used"],
  },
  Description: {
    type: "text",
    filler: "Describe your item(s) here",
  },
};

const other = {
  Condition: {
    type: "button",
    options: ["New", "Excellent", "Good", "Fair", "Used"],
  },
  Description: {
    type: "text",
    filler: "Describe your item(s) here",
  },
};

const shirt = {
  Size: {
    type: "drop-down",
    options: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  Color: {
    type: "drop-down",
    options: [
      "Black",
      "White",
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Orange",
      "Purple",
      "Pink",
      "Brown",
      "Grey",
      "Multi-Color",
    ],
  },
  Description: {
    type: "text",
    filler: "Describe your item(s) here",
  },
};

const pants = {
  Size: {
    type: "drop-down",
    options: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  Condition: {
    type: "button",
    options: ["New", "Excellent", "Good", "Fair", "Used"],
  },
  Gender: {
    type: "button",
    options: ["Men's", "Women's", "Unisex"],
  },

  Waist: {
    type: "drop-down",
    options: [
      "28",
      "30",
      "32",
      "34",
      "36",
      "38",
      "40",
      "42",
      "44",
      "46",
      "48",
      "50",
    ],
  },
  Color: {
    type: "drop-down",
    options: [
      "Black",
      "White",
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Orange",
      "Purple",
      "Pink",
      "Brown",
      "Grey",
      "Multi-Color",
    ],
  },
  Description: {
    type: "text",
    filler: "Describe your item(s) here",
  },
};

const furniture = {
  Condition: {
    type: "button",
    options: ["New", "Excellent", "Good", "Fair", "Used"],
  },
  "Furniture Type": {
    type: "drop-down",
    options: ["Chair", "Table", "Desk", "Bed"],
  },
  Description: {
    type: "text",
    filler: "Describe your item(s) here",
  },
};

export default { apparel, textbook, other, shirt, pants, furniture };
