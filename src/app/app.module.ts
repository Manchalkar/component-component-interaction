import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

import { ShareService } from './share.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AComponent, BComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ShareService]
})
export class AppModule { }
