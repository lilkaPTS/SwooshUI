import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Reviews} from "./reviews";
import {Services} from "./services";

@Component({
  selector: 'app-about-carwash',
  templateUrl: './about-carwash.component.html',
  styleUrls: ['./about-carwash.component.css']
})
export class AboutCarwashComponent implements OnInit {

  reviews: Reviews[] = new Array();
  services: Services[] = new Array();
  private baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<Reviews[]>(`${this.baseUrl}/api/public/getReviews?carWashLocation=ул. Белинского 32a`).subscribe((data: Reviews[]) => {
        this.reviews = data;
      }
    );

    this.http.get<Services[]>(`${this.baseUrl}/api/customer/getListOfServices?carWashLocation=ул. Белинского 32a`).subscribe((data: Services[]) => {
      this.services = data;
      console.log(data);
    })
  }

}
