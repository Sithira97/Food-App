import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuDetailsService } from 'src/app/services/menu-details.service';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent {
  getworkID:any;
  menuData:any;
  constructor(private param:ActivatedRoute,private service:MenuDetailsService){
    this.getworkID = this.param.snapshot.paramMap.get('id');
    console.log(this.getworkID,'getwork');
    if(this.getworkID){
      this.menuData = this.service.menuDetails.filter((value)=>{
        return value.id == this.getworkID;
      })
    }
  }

}
