// Componente Banner Principal
import { Component } from "@angular/core";

@Component ({
    selector: 'pm-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})

export class BannerComponent {
    bannerTitle = 'Take a rest';
    bannerDetail = 'Discover all the offers available at the best prices for the whole country and the worldS'
}