import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'ehiring-container-layout',
  templateUrl: './container-layout.component.html',
  styleUrls: ['./container-layout.component.css'],
})
export class ContainerLayoutComponent {
  @Input() rightHeader: TemplateRef<unknown> | null = null;
  @Input() leftHeader: TemplateRef<unknown> | null = null;
  @Input() rightBody: TemplateRef<unknown> | null = null;
  @Input() leftBody: TemplateRef<unknown> | null = null;
  @Input() topBody: TemplateRef<unknown> | null = null;
  @Input() showTopBody = false;
  @Input() showSideBar = false;
}
