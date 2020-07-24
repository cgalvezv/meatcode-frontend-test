import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [
    MatSnackBarModule,
    MatRippleModule
  ],
  exports: [
    MatSnackBarModule,
    MatRippleModule
  ]
})
export class MaterialModule { }
