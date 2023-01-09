import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuDetailsService {

  constructor() { }

  menuDetails = [
    {
      id:1,
      menuName:"Paneer Grilled Sandwich",
      menuDetails:"Pan-fried masala paneer.",
      menuDate:200,
      menuImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      menuName:"Veggie Supreme",
      menuDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      menuDate:369,
      menuImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      menuName:"Paneer Burger",
      menuDetails:"panner",
      menuDate:149,
      menuImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      menuName:"Veg Masala Roll In Naan",
      menuDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      menuDate:140,
      menuImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      menuName:"Indulgence Brownie",
      menuDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      menuDate:105,
      menuImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      menuName:"Oreo Cheesecake Ice Cream",
      menuDetails:"Oreo ice cream",
      menuDate:219,
      menuImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]
}
