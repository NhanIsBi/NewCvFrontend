import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetionDetailComponent } from './competion-detail.component';

describe('CompetionDetailComponent', () => {
  let component: CompetionDetailComponent;
  let fixture: ComponentFixture<CompetionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetionDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
