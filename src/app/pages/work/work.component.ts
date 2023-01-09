import { Component } from '@angular/core';
import { MenuDetailsService } from 'src/app/services/menu-details.service';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  menuData:any;
  
  constructor(private service:MenuDetailsService){
    this.menuData = this.service.menuDetails;
  }

}
