// Angular Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

// Custom Components
import {AppComponent} from './app.component';
import {ReactiveFormsComponent} from './form-array/reactive-form.component';

// Module declaration
@NgModule({
	imports     : [BrowserModule, ReactiveFormsModule],
	declarations: [AppComponent, ReactiveFormsComponent],
	bootstrap   : [AppComponent]
})
export class AppModule {
}


