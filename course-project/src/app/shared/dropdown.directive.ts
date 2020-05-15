import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') isOpen = false;

    // This code will register the click only in the defined element (e.g. a dropdown button).
    // If you click outside the element, this will not close the dropdown: only clicking the element itself will close it.
    // @HostListener('click') toggleOpen(eventData: Event) {
    //     this.isOpen = !this.isOpen;
    // }

    // This code instead opens the dropwdown element and can close it if you click anywhere in the document
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) { }

}