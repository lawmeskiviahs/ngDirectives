import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onClick($event)'
  }
})
export class SafeLinkDirective {
  queryParams = input('myapp');
  elementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

  constructor() {

    console.log("Inside safeLink directive");
  }

  onClick(event: MouseEvent) {

    const wantsToLeave = window.confirm('You will be redirected upon confirmation. Are you sure you want to be redirected?');

    if (wantsToLeave) {
      const address = this.elementRef.nativeElement.href;
      this.elementRef.nativeElement.href = address + '?from='+ this.queryParams()
      return;
    }
    event.preventDefault();
  }
}