import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaDeleteComponent } from './cita-delete.component';

describe('CitaDeleteComponent', () => {
  let component: CitaDeleteComponent;
  let fixture: ComponentFixture<CitaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitaDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
