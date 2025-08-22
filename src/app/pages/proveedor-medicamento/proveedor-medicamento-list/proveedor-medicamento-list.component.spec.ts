import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorMedicamentoListComponent } from './proveedor-medicamento-list.component';

describe('ProveedorMedicamentoListComponent', () => {
  let component: ProveedorMedicamentoListComponent;
  let fixture: ComponentFixture<ProveedorMedicamentoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveedorMedicamentoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedorMedicamentoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
