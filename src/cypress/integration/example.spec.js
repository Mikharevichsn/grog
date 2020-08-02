/* eslint-disable no-undef */
import { EXAMPLE_TEST, BASE_PROJECT_URL } from "../../constants";

describe("example works", () => {
  it("vasya displays correctly", () => {
    cy.visit(BASE_PROJECT_URL);
    cy.get(EXAMPLE_TEST).contains("Имя: Вася");
  });
});
