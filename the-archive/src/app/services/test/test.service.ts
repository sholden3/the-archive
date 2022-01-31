import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { 
    
  }

  getResource() {
    this.http.get("http://localhost:8080/resource").subscribe(data => {
      console.log(data);
    })
  }
}
