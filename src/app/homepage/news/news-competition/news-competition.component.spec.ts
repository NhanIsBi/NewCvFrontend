import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCompetitionComponent } from './news-competition.component';

describe('NewsCompetitionComponent', () => {
  let component: NewsCompetitionComponent;
  let fixture: ComponentFixture<NewsCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsCompetitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
