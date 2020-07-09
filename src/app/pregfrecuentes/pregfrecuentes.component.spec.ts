import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregfrecuentesComponent } from './pregfrecuentes.component';

describe('PregfrecuentesComponent', () => {
  let component: PregfrecuentesComponent;
  let fixture: ComponentFixture<PregfrecuentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregfrecuentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregfrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
