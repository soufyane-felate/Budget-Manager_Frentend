import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService, Transaction } from './transaction.service'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionComponent {
  private transactionService = inject(TransactionService);
  transactions: Transaction[] = [];

  ngOnInit() {
    this.loadTransactions();
  }

  loadTransactions() {
    this.transactionService.getAll().subscribe(data => {
      this.transactions = data;
    });
  }

  deleteTransaction(id: number) {
    this.transactionService.delete(id).subscribe(() => {
      this.transactions = this.transactions.filter(t => t.id !== id);
    });
  }
}
