// Componente Offers
import { Component } from "@angular/core";

@Component ({
    selector: 'pm-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.scss']
})

export class OffersComponent {
    offersTitle = "Offers";

    // Arreglo con los datos de cada Card
    offers: any[] = [
        {
            "offerCity": "Chicago",
            "offersPrice": 600.00,
            "imageUrl": "assets/images/mire.jpg"
        },
        {
            "offerCity": "Porto",
            "offersPrice": 600.00,
            "imageUrl": "assets/images/porto.jpg"
        },
        {
            "offerCity": "Chicago",
            "offersPrice": 600.00,
            "imageUrl": "assets/images/chicago.jpg"
        }
    ];
}