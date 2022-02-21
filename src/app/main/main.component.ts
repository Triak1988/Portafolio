import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  fullName='Javier Ortega';
  city= 'Córdoba';
  country= 'Argentina';
  textObjetivos='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eos ipsum iusto laudantium maxime recusandae itaque dolorem ex neque deserunt. Quas cupiditate, impedit quae repudiandae repellendus dolor dolores eum explicabo.'

  skills= {
    HTML: 'basico',
    CSS: 'basico',
    Bootstrap: 'basico',
    JavaScript: 'basico',
    TipeScript: 'basico',
    Angular: 'basico'
  }

  constructor() {}

  ngOnInit(): void {}

}
