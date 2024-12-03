import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './Core/Services/flowbite-service.service';
import { HomeComponent } from "./Component/home/home.component";
import { NavbarComponent } from "./Component/navbar/navbar.component";
import { MarqueeComponent } from './Component/marquee/marquee.component';
import { FooterComponent } from './Component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent,MarqueeComponent,FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }}
