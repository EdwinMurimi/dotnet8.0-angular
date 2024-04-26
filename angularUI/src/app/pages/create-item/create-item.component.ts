import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-item',
  standalone: true,
  imports: [MatSnackBarModule, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './create-item.component.html',
  styleUrl: './create-item.component.css'
})
export class CreateItemComponent {

  httpClient = inject(HttpClient);

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
  ) {}

  selectedCategory!: string;
  createItemForm!: FormGroup;

  ngOnInit() {
    this.createItemForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^\d+\.?\d{0,2}$/), Validators.min(0.01)]),
      quantity: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/), Validators.min(1)]),
      category: new FormControl('', [Validators.required]),
      imageURL: new FormControl('', [Validators.required, Validators.pattern(/^(http|https):\/\/[^ "]+$/)])
    });
  }

  createItem() {
    if (this.createItemForm.valid) {
      this.httpClient.post(`${environment.apiUrl}/items`, this.createItemForm.value)
        .subscribe({
          next: (response) => {
            const snackBarRef = this.snackBar.open('Item created successfully!', 'Close', {
              duration: 5000
            });
            // Redirect after the snack bar is dismissed
            snackBarRef.afterDismissed().subscribe(() => {
              this.router.navigate(['/items']);
            });
          },
          error: (error) => {
            console.error('Error creating item', error);
            this.snackBar.open('Failed to create item. Internal Server Error.', 'Close', {
              duration: 5000
            });
          }
        });
    } else {
      console.error('Form is not valid');
      this.markAllAsTouched(this.createItemForm);
    }
  }

  private markAllAsTouched(group: FormGroup) {
    group.markAllAsTouched();
  }

}
