import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ShareService {

  constructor() { }

  public callComponent: EventEmitter<ShareService> = new EventEmitter<ShareService>();

}