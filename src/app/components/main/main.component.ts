import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {

  navigateToLocacaoGeradores(): void {
    window.open('https://geradores.smartechgeradores.com.br/locacao-geradores', '_blank');
  }
}
