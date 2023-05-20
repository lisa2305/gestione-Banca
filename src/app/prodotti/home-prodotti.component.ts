import { Component } from '@angular/core';
import { IListaPersonaBanca } from '../lista-banca';
import { BancaService } from './persone.service';

@Component({
  selector: 'app-banca',
  templateUrl: './banca-html.component.html',
  styleUrls: ['./bancacss.component.css'],
})
export class BancaComponent {
  pers: IListaPersonaBanca[] = [];
  imm: boolean = false;
  private _listFilter: string = '';
  personeFiltrate: IListaPersonaBanca[] = [];
  fromStelle: string = '';

  constructor(private bancaservizio: BancaService) {}

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.personeFiltrate = this.datiFiltrati(value);
  }

  datiFiltrati(filtratoper: string): IListaPersonaBanca[] {
    filtratoper = filtratoper.toLocaleLowerCase();
    return this.pers.filter((p: IListaPersonaBanca) =>
      p.nomeCognome.toLocaleLowerCase().includes(filtratoper)
    );
  }

  ngOnInit() {
    this.pers = this.bancaservizio.getPersone();
    this.personeFiltrate = this.pers;
  }

  mostraImmagine() {
    this.imm = !this.imm;
    if (this.imm) {
      document.getElementById('b').innerHTML = 'Nacondi immagini';
    } else {
      document.getElementById('b').innerHTML = 'Mostra immagini';
    }
  }

  onStelleClick(valore: string): void {
    this.fromStelle = valore;
  }
}
