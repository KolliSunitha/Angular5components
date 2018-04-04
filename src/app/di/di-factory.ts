
import { DiComponent } from './di.component';
import { Engine } from './Engine';
import { Tires } from './Tires';


// BAD pattern!
export class DiFactory {
  createdi() {
    let car = new DiComponent(this.createEngine(), this.createTires());
    car.description = 'Factory';
    return car;
  }

  createEngine() {
    return new Engine();
  }

  createTires() {
    return new Tires();
  }
}