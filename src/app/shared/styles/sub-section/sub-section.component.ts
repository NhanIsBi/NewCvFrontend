import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-section',
  templateUrl: './sub-section.component.html',
  styles: [':host { display: block }'],
})
export class SubSectionComponent {
  @Input() subTitle = '';
}
