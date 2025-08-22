import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaUpdateComponent } from './cita-update.component';

describe('CitaUpdateComponent', () => {
  let component: CitaUpdateComponent;
  let fixture: ComponentFixture<CitaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitaUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
