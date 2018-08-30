import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion';
import { EspecialidadComponent } from './especialidad/especialidad';
import { TratamientoComponent } from './tratamiento/tratamiento';
@NgModule({
	declarations: [AccordionComponent,
    EspecialidadComponent,
    TratamientoComponent],
	imports: [],
	exports: [AccordionComponent,
    EspecialidadComponent,
    TratamientoComponent]
})
export class ComponentsModule {}
