import {Budget} from "../Models/budget.model";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class BudgetService {
  private budget:Budget[] = [];
  getBudgets(): Budget[] {
    return this.budget;
  }
addBudget(budget: Budget) {
    budget.id = Date.now();
    budget.spent = 0;
    this.budget.push(budget);
}
updateBudget(budgetupdate: Budget) {
const match = this.budget.findIndex(a =>a.id === budgetupdate.id)
  if (match !== -1) {
  this.budget[match] = budgetupdate;
  }
}
deleteBudget(id: number) {
    this.budget= this.budget.filter(a => a.id !== id);
}

}

