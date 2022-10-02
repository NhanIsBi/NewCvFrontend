import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsRecruitComponent } from './news-recruit.component';

describe('NewsRecruitComponent', () => {
  let component: NewsRecruitComponent;
  let fixture: ComponentFixture<NewsRecruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsRecruitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsRecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
