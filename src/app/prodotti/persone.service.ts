import { Injectable } from '@angular/core';
import { IListaPersonaBanca } from '../lista-banca';

@Injectable({
  providedIn: 'root',
})
export class BancaService {
  getPersone(): IListaPersonaBanca[] {
    return [
      {
        nomeCognome: 'Paperina',
        anno: '12/05/1974',
        conto: 7502,
        imageUrl:
          'https://www.topolino.it/wp-content/uploads/2019/12/paperinaintera.png',
      },
      {
        nomeCognome: 'Pluto',
        anno: '12/05/1974',
        conto: 2500,
        imageUrl: 'https://radiobau.it/wp-content/uploads/2017/02/Pluto2.jpg',
      },
      {
        nomeCognome: 'Minni',
        anno: '01/12/1934',
        conto: 17050,
        imageUrl:
          'https://e7.pngegg.com/pngimages/845/94/png-clipart-minnie-mouse-mickey-mouse-cartoon-drawing-minnie-mouse-minnie-mouse-mickey-mouse.png',
      },
      {
        nomeCognome: 'Zio paperone',
        anno: '25/01/2005',
        conto: 27002,
        imageUrl:
          'https://www.topolino.it/wp-content/uploads/2019/12/ziopaperoneintera.png',
      },
      {
        nomeCognome: 'Clarabella',
        anno: '08/07/1999',
        conto: 700,
        imageUrl:
          'https://www.topolino.it/wp-content/uploads/2019/11/clarabella_intera.png',
      },
      {
        nomeCognome: 'Pippo',
        anno: '30/05/2001',
        conto: 8200,
        imageUrl:
          'https://www.topolino.it/wp-content/uploads/2019/12/pippointera.png',
      },
      {
        nomeCognome: 'Brigitta',
        anno: '25/07/1978',
        conto: 25700,
        imageUrl:
          'https://www.topolino.it/wp-content/uploads/2019/11/brigitta_intera.png',
      },
      {
        nomeCognome: 'Qui Quo Qua',
        anno: '28/07/1999',
        conto: 1700,
        imageUrl:
          'https://www.topolino.it/wp-content/uploads/2019/12/quiquoequaintera.png',
      },
    ];
  }
}
