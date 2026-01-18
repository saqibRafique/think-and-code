import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeFade } from './layout/shell/route-animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  animations: [routeFade],
})
export class App { }
