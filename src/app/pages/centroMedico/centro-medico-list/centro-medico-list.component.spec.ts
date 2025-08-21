import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroMedicoListComponent } from './centro-medico-list.component';

describe('CentroMedicoListComponent', () => {
  let component: CentroMedicoListComponent;
  let fixture: ComponentFixture<CentroMedicoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentroMedicoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroMedicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
