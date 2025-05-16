import { Component } from '@angular/core';
import {BudgetService} from "../../Services/budget.service";
import {Budget} from "../../Models/budget.model";

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent {
  budgets: Budget[] = [];
  newBudget: Partial<Budget> = {};

  constructor(private service: BudgetService) {
}
addBudget() {
  if (this.newBudget.category && this.newBudget.limit != null) {
    this.service.addBudget({
      id: 0,
      category: this.newBudget.category,
      limit: this.newBudget.limit,
      spent: 0,
    });
    this.newBudget={};

  }
}
}
