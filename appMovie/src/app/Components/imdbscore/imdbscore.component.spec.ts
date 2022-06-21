import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbscoreComponent } from './imdbscore.component';

describe('ImdbscoreComponent', () => {
  let component: ImdbscoreComponent;
  let fixture: ComponentFixture<ImdbscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbscoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImdbscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
