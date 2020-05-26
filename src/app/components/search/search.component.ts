import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GetdataserviceService} from '../../getdataservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private cate;
  private SEARCH;

  constructor(private route: ActivatedRoute, private router: Router, private service: GetdataserviceService) { }

  Data;

  ngOnInit() {
    this.route.queryParams.subscribe ( param => {
      this.cate = param.cat;
      if (!(typeof(param.d)  === 'undefined'))
      {
        this.SEARCH = param.d;
        console.log(this.SEARCH);
        this.func();
      }

      else {
        this.service.get_cat(this.cate).subscribe( (data1 ) => {
          this.Data = data1;
        });
      }
    });
  }

  private func() {
     this.service.get_search(this.SEARCH).subscribe( (data2) => {
      this.Data = data2;
    });
  }
}
