import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHiglight]'
})
export class BasicHiglightDirective implements OnInit {
    constructor(private elementRef: ElementRef) { }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}