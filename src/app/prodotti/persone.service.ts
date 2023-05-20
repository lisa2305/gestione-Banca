import { Injectable } from '@angular/core';
import { IListaPersonaBanca } from '../lista-banca';

@Injectable({
  providedIn: 'root',
})
export class BancaService {
  getPersone(): IListaPersonaBanca[] {
    return [];
  }
}
