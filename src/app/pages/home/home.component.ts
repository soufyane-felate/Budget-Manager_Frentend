import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {CategoryComponent} from "../category/category.component";
import {TransactionComponent} from "../transaction/transaction.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    CategoryComponent,
    TransactionComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
