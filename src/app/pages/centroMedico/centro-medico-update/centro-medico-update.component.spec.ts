import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroMedicoUpdateComponent } from './centro-medico-update.component';

describe('CentroMedicoUpdateComponent', () => {
  let component: CentroMedicoUpdateComponent;
  let fixture: ComponentFixture<CentroMedicoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentroMedicoUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroMedicoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
