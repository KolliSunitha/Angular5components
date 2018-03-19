import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormscomponentsComponent } from './formscomponents.component';

describe('FormscomponentsComponent', () => {
  let component: FormscomponentsComponent;
  let fixture: ComponentFixture<FormscomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormscomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormscomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
