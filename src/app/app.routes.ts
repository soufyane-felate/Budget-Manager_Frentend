import { Routes } from '@angular/router';
import {TransactionComponent} from "./pages/transaction/transaction.component";
import {HomeComponent} from "./pages/home/home.component";
import {CategoryComponent} from "./pages/category/category.component";
import {FormComponent} from "./pages/form/form.component";

export const routes: Routes = [
  {path:"transaction",component:TransactionComponent},
  {path:"home",component:HomeComponent},
  {path:"category",component:CategoryComponent},
  {path:"addForm",component:FormComponent}
];
