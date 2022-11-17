import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetCharPipe } from './pipes/get-char.pipe';
import { EvenValuePipe } from './pipes/even-value.pipe';
import { StrToArrayPipe } from './pipes/str-to-array.pipe';
import { MouvementDirective } from './directives/mouvement.directive';



@NgModule({
  declarations: [
    GetCharPipe,
    EvenValuePipe,
    StrToArrayPipe,
    MouvementDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GetCharPipe,
    EvenValuePipe,
    StrToArrayPipe,
    MouvementDirective
  ]
})
export class SharedModule { }
