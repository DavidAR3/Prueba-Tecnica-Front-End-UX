// Componente Header
import { Component } from "@angular/core";

@Component ({
    selector: 'pm-menuPrincipal',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class Header {
    showSubMenu = false;
    showMenuMobile = true;
    hideMenuMobile = true;

    // Arreglo de elementos de menu principal
    menu: any[] = [
        {
            "itemMenu": "Check-in",
            "itemUrl": "#"
        },
        {
            "itemMenu": "Manage my booking",
            "itemUrl": "#"
        },
        {
            "itemMenu": "Information",
            "itemUrl": "#"
        }
    ];

    // Arreglo de elementos del submenu
    information: any[] = [
        {
            "itemInformation": "Help center",
            "itemUrl": "#"
        },
        {
            "itemInformation": "Flight state",
            "itemUrl": "#"
        },
        {
            "itemInformation": "Airplanes",
            "itemUrl": "#"
        },
        {
            "itemInformation": "Routes",
            "itemUrl": "#"
        }
    ];

    // Metodo que ocualta el menu princiapl en mobile para abrirlo desde el icono
    ngOnInit() {
        if (window.innerWidth < 768) {
            this.showMenuMobile = false;
        }
    }
    
    // Metodo que visualiza y oculta el submenu
    toggleSubMenu(): void {
        this.showSubMenu = !this.showSubMenu;
    }

    // Metodo que visualiza y oculta el menu principal en mobile
    toggleMenuMobile(): void {
        this.showMenuMobile = !this.showMenuMobile;
        this.hideMenuMobile = !this.hideMenuMobile;
    }
}