import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { Header2Component } from './components/header2/header2.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { SidebarLeftComponent } from './components/sidebar-left/sidebar-left.component';
import { SearchResultElementComponent } from './components/search-result-element/search-result-element.component';



@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent, 
    UserMenuComponent,
    Header2Component, SidebarRightComponent, SidebarLeftComponent, SearchResultElementComponent],
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
    SidebarRightComponent,
    SidebarLeftComponent,
    SearchResultElementComponent
  ]
})
export class SharedModule { }
