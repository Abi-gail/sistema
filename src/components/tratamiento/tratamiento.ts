import {Component, Renderer, ViewChild} from '@angular/core';

/**
 * Generated class for the TratamientoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tratamiento',
  templateUrl: 'tratamiento.html'
})
export class TratamientoComponent {
    accordionExapanded =false;
    @ViewChild("ccc") cardContent: any;
  constructor( public renderer: Renderer) {
    console.log('Hello TratamientoComponent Component');
  }
    ngOnInit(){
        console.log(this.cardContent.nativeElement);
        this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms")
    }
    toggleAccordion(){
        if(this.accordionExapanded){
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height","0px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px")
        }else {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height","500px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px")

        }
        this.accordionExapanded = !this.accordionExapanded;
    }

}
