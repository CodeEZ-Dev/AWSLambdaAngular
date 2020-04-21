import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HomeDomainService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HomeMonitor';
  temperature = '';
  smoke = '';
  humidity = '';
  human = '';

  public API_URL: string = 'https://lj1199gwu7.execute-api.us-west-2.amazonaws.com/default/GetItem';

  constructor(private appservice: HomeDomainService) {
    var response = this.appservice.getHomeDetails(this.API_URL).subscribe(data => {

      data.forEach(arrayObject => {

        this.temperature = arrayObject.payload.temperature;
        this.smoke = arrayObject.payload.smoke;
        this.humidity = arrayObject.payload.humidity;
        this.human = arrayObject.payload.human;

      });

    });

  }
}
