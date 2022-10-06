import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSchoComponent } from './news-scho.component';

describe('NewsSchoComponent', () => {
  let component: NewsSchoComponent;
  let fixture: ComponentFixture<NewsSchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsSchoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsSchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
