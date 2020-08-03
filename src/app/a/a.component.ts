import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private share:ShareService) { }

  ngOnInit() {
  }

  callCompB(){
     this.share.callComponent.emit();
  }

}