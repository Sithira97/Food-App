import { Component, OnInit } from '@angular/core';
import { MenuDetailsService } from 'src/app/services/menu-details.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  menuData:any;
  constructor(private service:MenuDetailsService){
    this.menuData = this.service.menuDetails;
  }
 
    
}
