import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';

// Import for Angular Module UI Components
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule, MatSidenavContent } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Import for Layout CDK -- Component Development Kit
import { LayoutModule } from '@angular/cdk/layout';

const component = [ShellComponent]

const modules = [
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatMenuModule,
  MatInputModule,
]


@NgModule({
  declarations: [...component],
  imports: [
    ...modules
  ],
  exports:[
    ...component,
    ...modules
  ]
})
export class SharedModule { }
