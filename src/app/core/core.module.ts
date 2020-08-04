import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, SideMenuComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent, HeaderComponent, SideMenuComponent
  ]
})
export class CoreModule { }
