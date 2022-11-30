import { ECadastro } from './ECadastro';
import { CadastroService } from './cadastro.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'saluFront';

  constructor(private CadastroService: CadastroService)
  {}

  obterTodosCadastros() {
    this.CadastroService.obterTodos()
      .then(cadastro => console.log(cadastro))
      .catch(error => console.error(error));
  }

  obterSomenteUm(){
    this.CadastroService.obterPorId(4)
    .then(cadastro => console.log(cadastro))
    .catch(error => console.error(error));
  }

  adicionarCadastro(){
    const cadastro: ECadastro = {
      nome: "Jhow",
      telefone: "2449-9958",
      email: "jhow@gmail.com"
    };

    this.CadastroService.adicionar(cadastro)
    .then(cadastro => console.log('🟢 Adicionado'))
    .catch(error => console.error(error));
}

atualizar(){
  const cadastro: ECadastro = {
    id: 1,
    nome: "Fernanda",
    telefone: "2445-9964",
    email: "fernanda@gmail.com"
  };

  this.CadastroService.atualizar(cadastro)
    .then(cadastro => console.log('🔵 Att', cadastro))
    .catch(error => console.error(error));
}

remover(){
  this.CadastroService.delete(7)
    .then(res => console.log('🔴 Removido', res))
    .catch(error => console.error(error));
}

}
