import { Component, inject } from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';
import {Transaction, TransactionService} from "../../service/service.transactions.component";

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule,NgFor],
  templateUrl: 'transaction.component.html',
  styleUrls: ['transaction.component.css']
})
export class TransactionComponent {
  private transactionService = inject(TransactionService);
  transactions: Transaction[] = [];

  ngOnInit() {
    //this.loadTransactions();
  }

  // loadTransactions() {
  //   this.transactionService.getAll().subscribe(data => {
  //     this.transactions = data;
  //   });
  // }
  //
  // deleteTransaction(id: number) {
  //   this.transactionService.delete(id).subscribe(() => {
  //     this.transactions = this.transactions.filter(t => t.id !== id);
  //   });
  // }
}
