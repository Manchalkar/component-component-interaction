import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit,OnDestroy {

  constructor(private share:ShareService) { }
  
  subService:Subscription;

  ngOnInit() {
   
   //get call when click on component A button
    this.subService = this.share.callComponent.subscribe(() => {
      (document.getElementsByClassName('compb')[0] as HTMLDivElement).style.display="block";
    });
  }

  /**
   *After Subscribe need to unsubscribe the service
   */
  ngOnDestroy(){
    if(this.subService){
      this.subService.unsubscribe();
    }
  }

}