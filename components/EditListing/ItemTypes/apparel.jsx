//these types are to inform the create/edit pages to know what kinds of fields
// are generally wanted for each type of item

export const apparelType = {
    Condition: {
        type: "button",
        options: ["New", "Excellent", "Good", "Fair", "Used"]
    },
    Gender: {
        type: "button",
        options: ["Men's", "Women's", "Unisex"]
    },
    Size: {
        type: "drop-down",
        options: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    Color: {
        type: "drop-down",
        options: ["Black", "White", "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Grey", "Multi-Color"]
    },
    Description: {
        type: "text",
        filler: "enter description here"
    }

}