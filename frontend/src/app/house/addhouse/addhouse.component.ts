import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize} from "rxjs/operators";
import { ImageService} from "../../shared/image.service";

@Component({
  selector: 'app-addhouse',
  templateUrl: './addhouse.component.html',
  styleUrls: ['./addhouse.component.css']
})
export class AddhouseComponent implements OnInit {
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup( {
    namehouse: new FormControl('', Validators.required),
    typeofroom: new FormControl('', Validators.required),
    bedroom: new FormControl('', Validators.required),
    bathroom: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    desc: new FormControl(''),
    priceperday: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required)
  });

  constructor(private storage: AngularFireStorage, private service: ImageService) { }

  ngOnInit(){
    this.resetForm();
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '/assets/images/default.jpg';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue: { namehouse: any; imageUrl: any; }) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      const filePath = `${formValue.namehouse}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue.imageUrl = url;
            this.service.insertImageDetails(formValue);
            this.resetForm();
          });
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate.controls;
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      namehouse: '',
      typeofroom: '',
      bedroom: '',
      bathroom: '',
      address: '',
      desc: '',
      priceperday: '',
      imageUrl: ''
    });
    this.imgSrc = '/assets/images/default.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }
}
