import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressioncomponentComponent } from './expressioncomponent.component';

describe('ExpressioncomponentComponent', () => {
  let component: ExpressioncomponentComponent;
  let fixture: ComponentFixture<ExpressioncomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressioncomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressioncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
