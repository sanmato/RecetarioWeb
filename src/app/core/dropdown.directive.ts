import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isAbierto = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isAbierto = this.elRef.nativeElement.contains(event.target)
      ? !this.isAbierto
      : false;
  }
  constructor(private elRef: ElementRef) {}
}
