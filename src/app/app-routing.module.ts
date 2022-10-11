import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

const routes: Routes = [
  {path: '', component: OrcamentoComponent},
  {path: 'produtos', component: ProdutosComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
