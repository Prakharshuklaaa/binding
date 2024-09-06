import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div>
  Welcome to test...
  <h1>{{name}}</h1>
  </div>
  `,
  styles: []
})

export class TestComponent implements  OnInit{

  public name = "Prakhar";

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
