import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private  fs: AngularFirestore , private storage : AngularFireStorage) {

   }

   getAllProducts()
    {
      
      return this.fs.collection('Products').valueChanges();
    }


    addProduct(Name : string , Price : Number , image : File)
    {
       let ref =   this.storage.ref('ProductsImages/' + image.name)  
       ref.put(image).then ( () =>
       {
          ref.getDownloadURL().subscribe(ProductPath =>
            {
               this.fs.collection('Products').add(
                 {
                   Name,
                   Price,
                   ProductPath

                 }
               )
            })

       }
         
       ) 

    }

   getProducts()
   {
      return this.fs.collection('Products').snapshotChanges()
   }

   deleteProducts(id)
   {
      return this.fs.doc(`Products/${id}`).delete()
   }

}
