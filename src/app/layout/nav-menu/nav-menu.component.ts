import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  imports: [RouterLink],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {
  private router = inject(Router);

  navigateTo(event: Event): void {
      const selectElement = event.target as HTMLSelectElement;
      const path = selectElement.value;
      
      // Navega a la ruta si se seleccionó una opción válida
      if (path) {
        this.router.navigate([path]);
      }
  }
}
