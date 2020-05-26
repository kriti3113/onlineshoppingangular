import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GetdataserviceService} from '../../getdataservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private service: GetdataserviceService) { }

  SEARCH = '';
  Data;
  ngOnInit(): void {
    // this.service.get1().subscribe( (data1 ) => {
    //   this.Data = data1;
    // } );
  }

  search() {
    this.router.navigate(['/getpro'] , { queryParams : {d : this.SEARCH }});
  }
}
