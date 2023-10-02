import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tracks-pages',
  templateUrl: './tracks-pages.component.html',
  styleUrls: ['./tracks-pages.component.css']
})
export class TracksPagesComponent implements OnInit, OnDestroy {


  mockTracksList = [
    {
      name: 'BEBE (Oficial)'
    },
    {
      name: 'BEBE (Oficial)'
    },
    {
      name: 'BEBE (Oficial)'
    }
  ]
  constructor() {

  }

  ngOnInit(): void {
     
  }
  
  ngOnDestroy(): void {

  }
}
