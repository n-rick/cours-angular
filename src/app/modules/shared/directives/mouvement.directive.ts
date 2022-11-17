import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMouvement]'
})
export class MouvementDirective {
  @Input('appMouvement') couleur = '';
  @HostBinding('style.backgroundColor') bg = '';
  // constructor(private elt: ElementRef) {

  // }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.bg = this.couleur;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.bg = 'white';
  }
  // changerCouleur(couleur: string) {
  //   this.bg = couleur;
  // }
}
