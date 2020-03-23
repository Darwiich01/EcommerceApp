import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  ProductsArr : Array<any>

  @ViewChild('image') image : ElementRef

  constructor( private products : ProductServiceService) { }

  ngOnInit() {

    this.products.getProducts().subscribe(cs =>
      {
         this.ProductsArr = cs.map( x=> 
          {
            return{
              id: x.payload.doc.id,
              ...x.payload.doc.data() as { }
            }
          })
          
          console.log( this.ProductsArr)
      })

     

  }

  addNewProduct(f : NgForm )
  {
     let name = f.value.name, 
         price = f.value.price,
         image = (this.image.nativeElement as HTMLInputElement).files[0]
     
         this.products.addProduct( name , price , image)
    
  }

  updateProductPrice(i)
  {

  }

  deleteProduct(index)
  {
    this.products.deleteProducts(this.ProductsArr[index].id)
    
  }
}
