import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.page.html',
  styleUrls: ['./jogo.page.scss'],
  standalone: false
})

export class JogoPage {
  escolhaUsuario: number = 0;
  escolhaComputador: number = 0;
  resultado: string = '';
  mensagemEscolhas: string = '';

  pontuacaoUsuario: number = 0;
  pontuacaoComputador: number = 0;

  resetarPontuacao() {
    this.pontuacaoUsuario = 0;
    this.pontuacaoComputador = 0;
    this.resultado = '';
    this.mensagemEscolhas = '';
  }  

  jogar() {
    this.escolhaComputador = Math.floor(Math.random() * 3) + 1;
    const escolha = +this.escolhaUsuario;

    const opcoes: any = {
      1: '🗿 Pedra',
      2: '📜 Papel',
      3: '✂️ Tesoura'
    };

    this.mensagemEscolhas = `Você escolheu: ${opcoes[escolha]} | Computador escolheu: ${opcoes[this.escolhaComputador]}`;

    if (escolha === this.escolhaComputador) {
      this.resultado = '🤝 Empate!';
    } else if (
      (escolha === 1 && this.escolhaComputador === 3) || // Pedra > Tesoura
      (escolha === 2 && this.escolhaComputador === 1) || // Papel > Pedra
      (escolha === 3 && this.escolhaComputador === 2)    // Tesoura > Papel
    ) {
      this.resultado = '🎉 Você venceu!';
      this.pontuacaoUsuario++;
    } else {
      this.resultado = '😢 Você perdeu!';
      this.pontuacaoComputador++;
    }
  }
}
