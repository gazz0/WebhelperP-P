import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { RouterModule } from "@angular/router";
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FilterTabComponent } from './components/filter-tab/filter-tab.component';



@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent, 
    UserMenuComponent, 
    RightSidebarComponent, 
    FilterTabComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UserMenuComponent, 
    RightSidebarComponent,
    FilterTabComponent
  ]
})
export class SharedModule { }
