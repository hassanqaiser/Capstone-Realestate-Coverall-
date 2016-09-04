import {LoadingContainer}  from './components/loading-container';
import {FilterTextboxComponent}  from './components/filterTextbox.component';

import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { SortByDirective } from './directives/sortby.directive';
import { Sorter } from './utils/sorter';
import { TrackByService } from './services/trackby.service';
import { DataService } from './services/data.service';
import {House} from './services/idb.service';
import { UploadService } from './services/upload.service';

@NgModule({
  declarations: [CapitalizePipe, TrimPipe, SortByDirective],
  imports: [
    CommonModule
  ],
  exports:      [ CapitalizePipe, TrimPipe, SortByDirective, 
                  CommonModule, FormsModule, HttpModule ],
  providers: []
})

export class sharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: sharedModule,
      providers: [ Sorter, TrackByService, DataService, House, UploadService ]
    };
  }
}

export {LoadingContainer}
export {FilterTextboxComponent}
export { DataService }
export { House }