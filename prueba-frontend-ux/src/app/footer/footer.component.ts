// Componente Footer
import { Component } from "@angular/core";

@Component ({
    selector: 'pm-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
    footerTitleDestination = "Destinations";
    footerTitleLegal = "Legal information";
    footerTitleBook = "Book your flight";

    // Arreglo de enlaces del Footer de Destinations
    destinations: any[] = [
        {
            "destinationCity": "Madrid",
            "destinationUrl": "#"
        },
        {
            "destinationCity": "Barcelona",
            "destinationUrl": "#"
        },
        {
            "destinationCity": "London",
            "destinationUrl": "#"
        },
        {
            "destinationCity": "Paris",
            "destinationUrl": "#"
        },
        {
            "destinationCity": "Rome",
            "destinationUrl": "#"
        }
    ];

    // Arreglo de enlaces del Footer de informacion legal 
    legalInformation: any[] = [
        {
            "legalInformationName": "Privacy policy",
            "legalInformationUrl": "#"
        },
        {
            "legalInformationName": "Cookie policies",
            "legalInformationUrl": "#"
        },
        {
            "legalInformationName": "Data treatment",
            "legalInformationUrl": "#"
        }
    ];

    // Arreglo de enlaces del Footer de Book Your Flight
    bookYourFlight: any[] = [
        {
            "bookYourFlightName": "Search flights",
            "bookYourFlightUrl": "#"
        },
        {
            "bookYourFlightName": "Price calendar",
            "bookYourFlightUrl": "#"
        },
        {
            "bookYourFlightName": "Destination map",
            "bookYourFlightUrl": "#"
        },
        {
            "bookYourFlightName": "Flight times",
            "bookYourFlightUrl": "#"
        }
    ];

    // Arreglo de enlaces secundarios del Footer
    footerLight: any[] = [
        {
            "itemFooterLight": "Website terms of use",
            "itemFooterLightUrl": "#"
        },
        {
            "itemFooterLight": "Site map",
            "itemFooterLightUrl": "#"
        },
        {
            "itemFooterLight": "Environment",
            "itemFooterLightUrl": "#"
        },
        {
            "itemFooterLight": "contact@arilines.com",
            "itemFooterLightUrl": "#"
        },
    ];

}