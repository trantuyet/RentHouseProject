import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HouseService} from "../house.service";
import {Router} from "@angular/router";
// import {ImageService} from "shared/image.service";


@Component({
  selector: 'app-listhouse',
  templateUrl: './listhouse.component.html',
  styles: ['listhouse.component.css']
})
export class ListhouseComponent implements OnInit {
  listHouse = [];
  images: any;
  formSearch: FormGroup;
  constructor(private houseService: HouseService,
              private route: Router,
              // private imageService: ImageService,
              private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.houseService.getAllHouse().subscribe(
        (data: never[]) => {
        this.listHouse = data;
      });
    // this.imageService.getOneimage().subscribe((data: any) => {
    //   this.images = data;
    // });
    this.formSearch = this.fb.group({
      name:[''],
      pricePerDay: [],
      address: [],
      // image: [],
    })
  }
  search() {
    this.houseService.multiSearch(this.formSearch.value).subscribe((data: never[]) => {
      console.log(data);
      this.listHouse = data;
    });
  }

}

