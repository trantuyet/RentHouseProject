import { Component, OnInit } from '@angular/core';
import {ImageService} from "../shared/image.service";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  constructor( private service: ImageService) { }

  ngOnInit(): void {
    this.service.getImageDetailList();
  }

}
