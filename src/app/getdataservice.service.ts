import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataserviceService {

  constructor(private http: HttpClient) { }


    get_cat(cate)
    {
      return this.http.get('http://localhost:8080/product/get_cate/' + cate);
    }


  get_search(SEARCH)
  {
    return this.http.get('http://localhost:8080/product/search/' + SEARCH);
  }

  get1() {
    return this.http.get('http://localhost:8080/product/post1');
  }
}
