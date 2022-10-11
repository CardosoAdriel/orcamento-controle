import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrcamentoService } from 'src/app/services/orcamento/orcamento.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  orcamento!: number;

  constructor(
    private orcamentoService: OrcamentoService,
    private route: Router
  ) {
    this.orcamentoService.getValor().subscribe(
      (valor) => {
        this.orcamento = valor
      }
    )
  }

  ngOnInit(): void {
  }

  irParaOrcamento(): void {
    this.route.navigate(['/'])
  }

}
