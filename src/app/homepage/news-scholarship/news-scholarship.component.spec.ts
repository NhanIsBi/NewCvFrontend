import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsScholarshipComponent } from './news-scholarship.component';

describe('NewsScholarshipComponent', () => {
  let component: NewsScholarshipComponent;
  let fixture: ComponentFixture<NewsScholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsScholarshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
