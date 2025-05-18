import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navItems = [
    { label: 'home', link: 'home', type: 'link' },
    { label: 'transaction', link: 'transaction', type: 'link' },
    { label: 'category', link: 'category', type: 'link' },
  ];



  handleItemClick(item: any, event: Event): void {
    if (item.type === 'action' && item.action) {
      event.preventDefault();
      item.action();
    }
  }

}
