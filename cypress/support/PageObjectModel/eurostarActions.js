const eurostarElements = require('../PageObjectModel/eurostarElements.json')

export class eurostarActions {

    clickAcceptAll() {
        cy.get(eurostarElements.eurostarLocaters.AcceptAll).should('contain', 'ACCEPT ALL').click()
    }

    clickTrains() {
        cy.get(eurostarElements.eurostarLocaters.TrainsTab).should('have.text', 'Trains').click()
        cy.title().should('include', 'Eurostar train deals | Trains to Europe | Eurostar | Eurostar')
    }

    clickReturn() {
        cy.get(eurostarElements.eurostarLocaters.Return).eq(0).should('have.text', 'Return').click()
    }

    clickFrom() {
        cy.get(eurostarElements.eurostarLocaters.FromFiled).should('have.attr', 'placeholder', 'City or station').click()
    }

    clickTo() {
        cy.get(eurostarElements.eurostarLocaters.ToFiled).should('have.attr', 'placeholder', 'City or station').click()
    }

    selectFromStation(fromStationName) {
        cy.get(eurostarElements.eurostarLocaters.FromFiled).clear().type(fromStationName).should('have.value', fromStationName)
        cy.get(eurostarElements.eurostarLocaters.SelectStation).contains(fromStationName).click()
        cy.get(eurostarElements.eurostarLocaters.FromFiled).should('contain.value', fromStationName)
    }

    selectToStation(toStationName) {
        cy.get(eurostarElements.eurostarLocaters.ToFiled).clear().type(toStationName).should('have.value', toStationName)
        cy.get(eurostarElements.eurostarLocaters.SelectStation).contains(toStationName).click()
        cy.get(eurostarElements.eurostarLocaters.ToFiled).should('contain.value', toStationName)
    }

    clickWhen() {
        cy.get(eurostarElements.eurostarLocaters.WhenFiled).click()
    }

    selectCalendarDate(FromDate) {
        cy.get(eurostarElements.eurostarLocaters.CalendarDate).each(($ele) => {
            if ($ele.attr('datetime') === FromDate) {
                cy.wrap($ele).should('have.attr', 'datetime', FromDate).click()
            }
        })
    }

    clickPassengers() {
        cy.get(eurostarElements.eurostarLocaters.PassengersFiled).should('contain.value', '1 Adult').click()
    }

    clickAdultAdd() {
        cy.get(eurostarElements.eurostarLocaters.AdultPlusIcon).click()
    }

    ValidateSelectedPassengers(selectedPassengers) {
        cy.get(eurostarElements.eurostarLocaters.PassengersFiled).should('contain.value', selectedPassengers).click()
    }

    clickSearch() {
        cy.get(eurostarElements.eurostarLocaters.Serach).should('have.text', 'Search').click()
    }

    SelectOutboudPrice() {
        cy.get(eurostarElements.eurostarLocaters.OutboundPrice).eq(0).click()
    }

    clickOutboundSelect() {
        cy.get(eurostarElements.eurostarLocaters.SelectOutBound).eq(0).should('have.text', 'Select').click()
    }

    SelectReturnPrice() {
        cy.get(eurostarElements.eurostarLocaters.InboundPrice).eq(0).click()
    }

    clickInboundSelect() {
        cy.get(eurostarElements.eurostarLocaters.SelectInBound).eq(0).should('have.text', 'Select').click()
    }

    clickContinue() {
        return cy.get(eurostarElements.eurostarLocaters.Continue)
    }

    clickCheckOutAsGuest() {
        cy.get(eurostarElements.eurostarLocaters.CheckOutAsGuest).should('have.text', 'Check out as a guest').click()
    }
}