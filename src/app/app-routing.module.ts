import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthModule } from './auth/auth.modul';



const routes: Routes = [
  { path: '', redirectTo: 'products',pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule,
    AuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
