/* eslint-disable no-undef */
import {
  DIV_TEST,
  INPUT_TEST,
  BASE_PROJECT_URL,
  ROUTE_BASIC_STATE,
} from "../../constants";
describe("basic-state", () => {
  beforeEach(() => {
    cy.visit(`${BASE_PROJECT_URL}${ROUTE_BASIC_STATE}`);
  });
  it("input can be modified", () => {
    const text = "privet";
    cy.get(INPUT_TEST).type(text);
    cy.get(DIV_TEST).contains(text);
  });
});
