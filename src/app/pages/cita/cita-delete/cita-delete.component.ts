import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterLink, Router, ActivatedRoute } from '@angular/router';
import { CitaReadDTO } from '../../../interfaces/cita.model';
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { CitaService } from '../../../services/cita.service';

@Component({
  selector: 'app-cita-delete',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, /*RouterLink,*/ MatSnackBarModule],
  templateUrl: './cita-delete.component.html',
  styleUrl: './cita-delete.component.css'
})
export class CitaDeleteComponent {
  citaId!: number;
  citaData!: CitaReadDTO;

  constructor(
    private citaService : CitaService,
    private rote : ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar

  ) 
  { }

}

