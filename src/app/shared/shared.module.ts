/** ***********************************************************
 *
 * SHARED : The aim of this class is to store all the modules that
 * are used/shared accross the entire application modules
 *
 *********************************************************** **/

/** Angular Common Imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Uit Imports */
import {
    UitBannerModule
} from '@laposte/ui-theme';

/** Material Imports */
import {
    MatCardModule,
    MatIconModule,
    MatButtonModule
} from '@angular/material';

/** FlexLayout Imports */
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        UitBannerModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule
    ],
    exports: [
        CommonModule,
        UitBannerModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule
    ]
})
export class SharedModule { }
