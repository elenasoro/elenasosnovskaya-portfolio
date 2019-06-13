import { Component } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name: string = 'Elena Sosnovskaya';
  githubLink: string = 'https://github.com/elenasoro';
  linkedinLink: string = 'https://www.linkedin.com/in/elena-sosnovskaya-191a94110/';
  projects: Project[] = [
    {name: 'angular7-tutorial', year: 2019, link:'https://github.com/elenasoro/angular7-tutorial'},
    {name: 'Daisy-react', year: 2019, link:'https://github.com/elenasoro/Daisy-react'},
    {name: 'startup', year: 2018, link:'https://github.com/elenasoro/startup'}
  ];

}
