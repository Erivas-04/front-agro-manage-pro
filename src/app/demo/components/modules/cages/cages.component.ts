import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cages',
  templateUrl: './cages.component.html'
})
export class CagesComponent implements OnInit {
  values: any[];

  ngOnInit(): void {
      this.values = [
        {name: 'Pollo', code: 'P'},
        {name: 'Vaca', code: 'V'}
      ]
  }
}
