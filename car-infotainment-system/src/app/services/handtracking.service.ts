import { Injectable, ElementRef } from '@angular/core';
import * as handtrack from 'handtrackjs'; 
@Injectable({
  providedIn: 'root'
})
export class HandtrackingService {

  constructor(video: ElementRef, canvas: ElementRef) {
    let model;

    handtrack.startVideo(video)
    .then(status =>{
      if(status){
        navigator.getUserMedia()
      }
    })

    //used to load up handtrack model
    handtrack.load()
    .then(lmodel =>{
      model = lmodel;
    });
  }
}
