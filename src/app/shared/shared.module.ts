import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeListComponent } from "./components/poke-list/poke-list.component";
import { SearchComponent } from "./components/search/search.component";
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    PokeListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    PokeListComponent,
    SearchComponent
  ]
})
export class SharedModule { }
