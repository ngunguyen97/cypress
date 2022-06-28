describe.only("todos", () => {
  beforeEach(() => {
    cy.login();
  });

  it("user can add, check and delete todos", () => {
    cy.findByRole("textbox", {
      name: /title/i,
    })
      .type("Todo1")
      .type("{enter}");

    cy.findByRole("textbox", {
      name: /title/i,
    })
      .type("Todo2")
      .type("{enter}");

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1500);

    cy.findByText(/todo1/i).should("exist");
    cy.findByText(/todo2/i).should("exist");
    cy.findByText(/Total Todos: 2/i).should("exist");

    cy.findByRole("checkbox", { name: /todo1/i }).check();
    cy.findByText(/ Todos: 2/i).should("exist");

    cy.get(".todo-Todo2").within(() => {
      cy.findByRole("button", { name: /remove/i }).click({ force: true });
    });

    cy.findByText(/Total Todos: 1/i).should("exist");
    //cy.screenshot();
  });
});

// describe.skip("todos example", () => {
//   beforeEach(() => {
//     cy.visit("/");
//   });
//   it("add todo", () => {
//     cy.findByRole("textbox", {
//       name: /title/i,
//     })
//       .type("Todo1")
//       .type("{enter}");

//     cy.findByText(/todo1/i).should("exist");
//   });

//   it.only("remove todo", () => {
//     cy.findByRole("textbox", {
//       name: /title/i,
//     })
//       .type("Todo1")
//       .type("{enter}");

//     cy.findByRole("textbox", {
//       name: /title/i,
//     })
//       .type("Todo2")
//       .type("{enter}");

//     // eslint-disable-next-line cypress/no-unnecessary-waiting
//     cy.wait(1500);

//     cy.get(".todo-Todo2").within(() => {
//       cy.findByRole("button", { name: /remove/i }).click({ force: true });
//     });
//     cy.findByText(/todo2/i).should("not.exist");
//   });
// });
