import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Item } from '../types/item';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-view-items',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './view-items.component.html',
  styleUrl: './view-items.component.css'
})
export class ViewItemsComponent implements OnInit {

  httpClient = inject(HttpClient);

  items: Item[] = [];

  ngOnInit(): void {
    this.httpClient.get<Item[]>(`${environment.apiUrl}/items`)
      .subscribe((data) => {
        console.log(data);
        this.items = data;
      });
  }

}
