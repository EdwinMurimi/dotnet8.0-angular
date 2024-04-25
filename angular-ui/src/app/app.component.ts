import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ui';

  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/']);
  }

  navigateToAddForm() {
    this.router.navigateByUrl('/items/create');
  }
}
