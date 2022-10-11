import { Produto } from './../../models/produto.interface';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrcamentoService } from 'src/app/services/orcamento/orcamento.service';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})
export class OrcamentoComponent implements OnInit {

  formOrcamento: any

  total: number = 0

  constructor(
    private orcamentoService: OrcamentoService,
    private produtoService: ProdutoService,
    private route: Router
  ) {

    this.formOrcamento = new FormGroup({
      orcamento: new FormControl("", Validators.compose([
        Validators.required,
        Validators.max(1500),
        Validators.min(20)
      ]))
    })

  }

  ngOnInit(): void {
    this.checkProduto()
  }

  gravarOrcamento(orcamento: NgForm) {
    const valorOrcamento = orcamento.value.orcamento - this.total

    this.total = 0

    this.orcamentoService.setValor(valorOrcamento)

    this.irParaProdutos()

    orcamento.reset()
  }

  checkProduto() {
    this.produtoService.checkProdutos().subscribe(
      data => {
        data.forEach(
          (produto: any) => {
            this.total += produto.total

          }
        )
      }
    )
  }

  irParaProdutos() {
    this.route.navigate(['/produtos'])
  }

}
