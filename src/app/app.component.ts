import { Component } from '@angular/core';
import { IdGeneratorComponent } from './id-generator/id-generator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [IdGeneratorComponent]
})
export class AppComponent {
  title = 'PA-RVIA';
}