import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private  fs: AngularFirestore) {

   }

   getAllProducts()
    {
      
      return this.fs.collection('Products').valueChanges();
    }
}
