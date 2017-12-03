import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VetementinfoPage } from './vetementinfo';

@NgModule({
  declarations: [
    VetementinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(VetementinfoPage),
  ],
})
export class VetementinfoPageModule {}
