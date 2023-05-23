// Componente Banner Secundario
import { Component } from "@angular/core";

@Component ({
    selector: 'pm-bannerCard',
    templateUrl: './bannerCard.component.html',
    styleUrls: ['./bannerCard.component.scss']
})

export class BannerCardComponent {
    bannerCardTitle = "Our destinations";
    bannerCardSubTitle = "Discover the world";
    bannerCardDetail = "Embark on an unforgettable adventure! Discover and enjoy our fascinating destinations. We are waiting for you to explore the world together!";
    bannerCardImageUrl = "assets/images/banner2.jpg"
}