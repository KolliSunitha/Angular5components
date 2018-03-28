import { Component, OnInit } from '@angular/core';
import { LaptopService } from './services/laptop.service';
import { DesktopService } from './services/desktop.service';

@Component({
  selector: 'app-computer',
  providers : [ LaptopService,
    { provide: DesktopService, useExisting: LaptopService }
  ],
  template : `<h3> I work on {{computerName}} </h3>`,
 
})
export class ComputerComponent implements OnInit {
  computerName : string;

  constructor(private ComputerService : DesktopService) { }

  ngOnInit() {
    this.computerName = this.ComputerService.getComputerName();
  }

}
