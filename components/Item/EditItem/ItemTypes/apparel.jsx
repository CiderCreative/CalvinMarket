//these types are to inform the create/edit pages to know what kinds of fields
// are generally wanted for each type of item

export const apparelType = {
    condition: {
        type: "button", 
        options: ["New", "Excellent", "Good", "Fair", "Used"]
    },
    gender: {
        type: "button",
        options: ["Men's", "Women's", "Unisex"]
    },
    size: {
        type: "drop-down",
        options: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    color: {
        type: "drop-down",
        options: ["Black", "White", "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Grey", "Multi-Color"]
    },
    description: {
        type: "text",
        filler: "enter description here"
    }

}