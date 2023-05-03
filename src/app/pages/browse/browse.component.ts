import { Component, OnInit } from '@angular/core';
import { BrowseObject } from '../../shared/constants/constants';

import { Image } from '../../shared/models/Image';
import { GalleryService } from '../../shared/services/gallery.service';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit{
  browseObject: Array<any> = BrowseObject;
  chosenImage: any;

  constructor(){}

  ngOnInit(): void {
    
  }
  loadImage(imageObject: any) {
    this.chosenImage = imageObject;
  }
  
}
