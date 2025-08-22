import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroMedicoCreateComponent } from './centro-medico-create.component';

describe('CentroMedicoCreateComponent', () => {
  let component: CentroMedicoCreateComponent;
  let fixture: ComponentFixture<CentroMedicoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentroMedicoCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroMedicoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
