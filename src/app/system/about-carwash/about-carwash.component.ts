import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Reviews} from "./reviews";

@Component({
  selector: 'app-about-carwash',
  templateUrl: './about-carwash.component.html',
  styleUrls: ['./about-carwash.component.css']
})
export class AboutCarwashComponent implements OnInit {

  reviews: string[] = ['Вася-норм', 'Вася-норм', 'Вася-норм', 'Вася-норм', 'Вася-норм', 'Вася-норм'];
  private baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<Reviews[]>(`${this.baseUrl}/api/public/getReviews?carWashLocation=ул. Белинского 32a`).subscribe((data: Reviews[]) => {
      data.forEach(s=>console.log(s));
    /*    this.reviews = data;*/
      }
    );
  }

}
