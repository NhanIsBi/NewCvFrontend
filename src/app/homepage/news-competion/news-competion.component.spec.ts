import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCompetionComponent } from './news-competion.component';

describe('NewsCompetionComponent', () => {
  let component: NewsCompetionComponent;
  let fixture: ComponentFixture<NewsCompetionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsCompetionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsCompetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
