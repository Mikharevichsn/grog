/* eslint-disable no-undef */
import {
  DIV_TEST,
  BUTTON_TEST,
  INPUT_TEST,
  BASE_PROJECT_URL,
  ROUTE_INTER_STATE,
} from "../../constants";

describe("inter-state", () => {
  const text = "privet";
  beforeEach(() => {
    cy.visit(`${BASE_PROJECT_URL}${ROUTE_INTER_STATE}`);
  });
  it("input can be modified", () => {
    cy.get(INPUT_TEST).type(text);
    cy.get(INPUT_TEST).should("have.value", text);
  });
  it("button can be clicked", () => {
    cy.get(BUTTON_TEST).click();
  });
  it("after button is clicked new field is added", () => {
    cy.get(INPUT_TEST).type(text);
    cy.get(BUTTON_TEST).click();
    cy.get(DIV_TEST);
  });
  it("multiple clicks create multiple divs", () => {
    cy.get(INPUT_TEST).type(text);
    cy.get(BUTTON_TEST).click();
    cy.get(BUTTON_TEST).click();
    cy.get(BUTTON_TEST).click();
    cy.get(DIV_TEST).should("have.length", 3);
  });
  it("added elements have correct format", () => {
    cy.get(INPUT_TEST).type(text);
    cy.get(BUTTON_TEST).click();
    cy.get(BUTTON_TEST).click();
    cy.get(BUTTON_TEST).click();
    cy.get(DIV_TEST).each((el, i) => {
      console.log(cy.wrap(el));
      cy.wrap(el).should("have.text", String(i) + text + i);
    });
  });
});
