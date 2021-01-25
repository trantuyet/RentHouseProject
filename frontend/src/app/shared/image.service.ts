import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageDetailList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  // tslint:disable-next-line:typedef
  getImageDetailList() {
    this.imageDetailList = this.firebase.list('imageDetails');
  }

  // tslint:disable-next-line:typedef
  insertImageDetails(imageDetails: any) {
    this.imageDetailList.push(imageDetails);
  }
}
