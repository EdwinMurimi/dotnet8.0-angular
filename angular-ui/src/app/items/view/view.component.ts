import { Component } from '@angular/core';
import { Item } from '../item';
import { ItemsService } from '../items.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [ItemsService],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  items: Item[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getAll().subscribe((data: Item[])=>{
      this.items = data;
      console.log(this.items);
    })  
  }

}
