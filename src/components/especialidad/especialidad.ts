import {Component, Renderer, ViewChild} from '@angular/core';

/**
 * Generated class for the EspecialidadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'especialidad',
  templateUrl: 'especialidad.html'
})
export class EspecialidadComponent {

    accordionExapanded =false;
    @ViewChild("ccc") cardContent: any;

  constructor(public renderer: Renderer) {
    console.log('Hello EspecialidadComponent Component');
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
