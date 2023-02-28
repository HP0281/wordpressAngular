import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule, MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkStepperModule, CdkStep } from '@angular/cdk/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatFormFieldModule} from '@angular/material/form-field'

const MATERIAL_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatCheckboxModule,
  MatToolbarModule,
  LayoutModule,
  MatDialogModule,
  MatTableModule,
  MatOptionModule,
  MatSelectModule,
  MatTabsModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSortModule,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatChipsModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatStepperModule,
  CdkStepperModule,
  MatSliderModule,
  MatProgressBarModule,
  MatExpansionModule,
  DragDropModule,
  MatFormFieldModule
];

@NgModule({
  imports: [MATERIAL_MODULES],
  declarations: [],
  exports: [MATERIAL_MODULES, CdkStep],
})
export class MaterialModule { }
