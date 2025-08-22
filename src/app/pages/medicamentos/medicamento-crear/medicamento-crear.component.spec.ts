import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoCrearComponent } from './medicamento-crear.component';

describe('MedicamentoCrearComponent', () => {
  let component: MedicamentoCrearComponent;
  let fixture: ComponentFixture<MedicamentoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicamentoCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicamentoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
