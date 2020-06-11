import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
    imports: [CommonModule, HttpClientModule,CollapseModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
                
            },
            defaultLanguage:localStorage.getItem("lng")
        })],
    declarations: [],
    exports: [TranslateModule,
        CommonModule, FormsModule]
})
export class SharedModule { }

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);}