import { ECadastro } from './ECadastro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpClient: HttpClient) { }

  obterTodos(){
    return this.httpClient.get<ECadastro[]>(`${API_PATH}`).toPromise();
  }

  obterPorId(id: number){
    return this.httpClient.get<ECadastro>(`${API_PATH}/${id}`).toPromise();
  }

  adicionar(cadastro: ECadastro){
    return this.httpClient.post<ECadastro>(`${API_PATH}`, cadastro).toPromise();
  }

  atualizar(cadastro: ECadastro){
    return this.httpClient.post<ECadastro>(`${API_PATH}${cadastro.id}`, cadastro).toPromise();
  }

  delete(cadastroId: number){
    return this.httpClient.delete<void>(`${API_PATH}${cadastroId}`).toPromise();
  }

}
