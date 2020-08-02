/* eslint-disable no-undef */
import {
  BASIC_FETCH_UL_TEST,
  BASE_PROJECT_URL,
  ROUTE_BASIC_FETCH,
} from "../../constants";
describe("basic-fetch", () => {
  beforeEach(() => {
    cy.visit(`${BASE_PROJECT_URL}${ROUTE_BASIC_FETCH}`);
  });
  it("List is not empty", () => {
    cy.get(`${BASIC_FETCH_UL_TEST} > li`).should("have.length", 4);
  });
  it("Every li tag has author and title", () => {
    cy.get(`${BASIC_FETCH_UL_TEST} > li`).each((el) =>
      cy
        .wrap(el)
        .contains("автор", { matchCase: false })
        .and("contain", "title")
    );
  });
});
