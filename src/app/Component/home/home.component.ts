import { AfterViewInit, Component } from '@angular/core';
import { MarqueeComponent } from '../marquee/marquee.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MarqueeComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 
}
