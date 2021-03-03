import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; 


const importModules = [
  MatTableModule
];

@NgModule({
  imports: [ importModules ],
  exports: [ importModules ]
})
export class MaterialModule { }
