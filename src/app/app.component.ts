import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public airplaneLeft = '10px';
  public speedResult;
  public move = false;

  moveAirplane(distance) {
    var roadSpeed = this.getSpeed(distance);
    this.airplaneLeft = "50px";
    this.move = true;
    this.speedResult = roadSpeed;
    setTimeout(() => {
      this.move = false;
    },3500)
  }

  public getSpeed(distance) {
    var result = 1;
    var res = [];
    var temp = 0;
    while (result * 2 + temp <= distance) {
      temp += result * 2;
      res.push(result);
      result++; 
    }
    var rest = distance - temp;
    var tempArray = res.slice();
    
    if(result <= rest) {
      res.push(result)
    }
    var finalRest = rest - result;
    if(finalRest > 0) {
      tempArray.splice(tempArray.indexOf(finalRest), 0, finalRest);
    }
    var array = res.concat(tempArray.reverse());
    if (rest < result) {
        if (rest > 0) {
            array.splice(array.lastIndexOf(rest), 0, rest);
        }
    }
    return array;
  }
}
