/// <reference types="cypress"/>

import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps"
import { eurostarActions } from "../../support/PageObjectModel/eurostarActions"
const EurostarTestdata = require('../../fixtures/EurostarTestdata.json')

const eurostar = new eurostarActions()

Given('I am on the Eurostar website', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.title().should('include', EurostarTestdata.PageTitle)
    cy.url().should('include', Cypress.env('baseUrl'))
})

And('Click Accept All', () => {
    eurostar.clickAcceptAll()
})

And('I click on Trains', () => {
    eurostar.clickTrains()
})

And('I click on Return', () => {
    eurostar.clickReturn()
})

Then('I enter {string} in the from field', (fromStation) => {
    eurostar.clickFrom()
    eurostar.selectFromStation(fromStation)
})

And('I enter {string} in the to field', (toStation) => {
    eurostar.clickTo()
    eurostar.selectToStation(toStation)
})

Then('I select from date as {string}', (FromDate) => {
    eurostar.clickWhen()
    eurostar.selectCalendarDate(FromDate)
})

And('I select to date as {string}', (ToDate) => {
    eurostar.selectCalendarDate(ToDate)
})

And('I select 2 adults as passengers', () => {
    eurostar.clickPassengers()
    eurostar.clickAdultAdd()
    eurostar.ValidateSelectedPassengers(EurostarTestdata.SelectedPassengers)
})

And('I click on Search', () => {
    eurostar.clickSearch()
    cy.title().should('contain', EurostarTestdata.TrainSearchTitle)
})

Then('I select the outbound price', () => {
    eurostar.SelectOutboudPrice()
    eurostar.clickOutboundSelect()
})

And('I select the return price', () => {
    eurostar.SelectReturnPrice()
    eurostar.clickInboundSelect()
})

And('I click continue', () => {
    eurostar.clickContinue().should('have.text', EurostarTestdata.Continue).click()
    cy.title().should('contain', 'Travel Extras')
})

When('I click continue without any extras', () => {
    eurostar.clickContinue().should('have.text', EurostarTestdata.ContinueWithoutExtras).click()
    cy.title().should('include', EurostarTestdata.CheckoutTitle)
})

Then('I check out as a guest', () => {
    eurostar.clickCheckOutAsGuest()
})

And('I capture the checkout screen', () => {
    cy.screenshot()
    cy.get('.fAbQnq').screenshot()
})