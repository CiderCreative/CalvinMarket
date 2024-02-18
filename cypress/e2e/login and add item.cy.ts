const addItemsData = require("../fixtures/addItemsData.json");
const itemTypes = require("../../constants/ItemTypes/itemTypes");

declare namespace Cypress {
  interface Chainable<Subject> {
    login(username: string, password: string): Chainable<any>;
  }
}

Cypress.Commands.add("login", (username, password) => {
  cy.visit("http://localhost:3000/LogIn");
  cy.get("#email").type(username);
  cy.get("#password").type(password);
  cy.get("button").contains("Log In").click();
});
for (let i = 0; i < 30; i++) {
  describe("log in and add item", () => {
    beforeEach(() => {
      cy.login("test@calvin.edu", "bigWin$33");
    });

    it("adds item", () => {
      // Get the session tokens (they don't persist between 'visit' calls)
      cy.wait(1000);
      cy.getCookies().then((cookies: any) => {
        cy.visit("http://localhost:3000/AddListing");
        cookies.forEach((cookie: any) => {
          cy.setCookie(cookie.name, cookie.value);
        });
      });

      const type = getRand(Object.keys(addItemsData));

      // // Enters the item name
      cy.get('input[placeholder="Item Title"]').type(
        getRand(addItemsData[type].titles),
      );

      // Enters the item price
      cy.get('input[placeholder="0"]').type(
        `${Math.floor(Math.random() * 100) + 1}`,
      );

      // Selects the type of item
      cy.get('div[id="type"]').contains("other").click();
      cy.get('div[id="dropdown elements"]').first().contains(type).click();

      // Adds images of the item
      cy.task("listFiles", type).then((files: string[]) => {
        let numberOfImages = Math.floor(Math.random() * 4) + 1;

        for (let i = 0; i < numberOfImages; i++) {
          cy.log(`Adding image ${i + 1}`);
          cy.contains("Add your images here").selectFile(
            `cypress/fixtures/${type}/${getRand(files)}`,
            { action: "drag-drop" },
          );
        }
      });

      // Fills in item details
      Object.keys(itemTypes[type]).forEach((key) => {
        const itemDetail = itemTypes[type][key];
        const testData = addItemsData[type][key];
        switch (itemDetail.type) {
          case "button":
            cy.get(`div[id='${key}']`)
              .children()
              .contains(getRand(itemDetail.options))
              .click();
            break;
          case "drop-down":
            cy.get(`div[id='${key}']`).find("[id='dropdown']").click();
            cy.get(`div[id='${key}']`)
              .children()
              .contains(getRand(itemDetail.options))
              .click();
            break;
          case "text":
            cy.get(`div[id='${key}']`)
              .children()
              .last()
              .type(getRand(testData));
            break;
          default:
            // Code for other types
            break;
        }
      });

      cy.get("button").contains("Submit").click();

      cy.intercept("POST", "/api/items/put").as("submitRequest");

      cy.wait("@submitRequest").then(({ request, response }: any) => {
        expect(response.statusCode).to.equal(200);
      });

      cy.get("button").should("contain", "Sent");
    });
  });
}
// returns a random element from the array
function getRand(items: string[]) {
  return items[Math.floor(Math.random() * items.length)];
}
