import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
<<<<<<< Updated upstream
import { Header2Component } from './components/header2/header2.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { SidebarLeftComponent } from './components/sidebar-left/sidebar-left.component';
import { SearchResultElementComponent } from './components/search-result-element/search-result-element.component';
=======
import { RouterModule } from "@angular/router";
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FilterTabComponent } from './components/filter-tab/filter-tab.component';
>>>>>>> Stashed changes



@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent, 
<<<<<<< Updated upstream
    UserMenuComponent,
    Header2Component, SidebarRightComponent, SidebarLeftComponent, SearchResultElementComponent],
=======
    UserMenuComponent, 
    RightSidebarComponent, 
    FilterTabComponent],
>>>>>>> Stashed changes
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    HeaderComponent,
    Header2Component,
    FooterComponent,
    SidebarComponent,
<<<<<<< Updated upstream
    SidebarRightComponent,
    SidebarLeftComponent,
    SearchResultElementComponent
=======
    UserMenuComponent, 
    RightSidebarComponent,
    FilterTabComponent
>>>>>>> Stashed changes
  ]
})
export class SharedModule { }
