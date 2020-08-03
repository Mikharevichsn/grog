/* eslint-disable no-undef */
import {
  UL_TEST,
  BASE_PROJECT_URL,
  ROUTE_BASIC_FETCH,
} from "../../constants";
describe("basic-fetch", () => {
  beforeEach(() => {
    cy.visit(`${BASE_PROJECT_URL}${ROUTE_BASIC_FETCH}`);
  });
  it("List is not empty", () => {
    cy.get(`${UL_TEST} > li`).should("have.length", 4);
  });
  it("Every li tag has author and title", () => {
    cy.get(`${UL_TEST} > li`).each((el) =>
      cy
        .wrap(el)
        .contains("автор", { matchCase: false })
        .contains("title", { matchCase: false })
    );
  });
});
