import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styles: [':host { display: block }'],
})
export class SectionComponent {
  @Input() title = '';
  @Input() collapsible = true;
}
