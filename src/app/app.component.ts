import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',*/
  template : `<p>
  Angular Routers works!
</p>

<nav>
  <a routerLink="./router2" routerLinkActive="active">Router2</a>
  <a routerLink="./router1" routerLinkActive="active">Router1</a>
</nav>
<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular5';
  imageUrl = 'assets/images/recon.jpg';
}
