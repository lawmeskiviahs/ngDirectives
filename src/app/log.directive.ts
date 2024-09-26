import { Directive } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'onClick()'
  }
})
export class LogDirective {

  onClick() {

    console.log('Clicked!');
  }

}
