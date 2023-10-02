import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import * as dataRaw from '../../../../data/tracks.json'

@Component({
  selector: 'app-tracks-pages',
  templateUrl: './tracks-pages.component.html',
  styleUrls: ['./tracks-pages.component.css']
})
export class TracksPagesComponent implements OnInit, OnDestroy {


  mockTracksList: Array<TrackModel> = [
  ]
  constructor() {

  }

  ngOnInit(): void {
     const {data}: any = (dataRaw as any).default
     this.mockTracksList = data
  }
  
  ngOnDestroy(): void {

  }
}
