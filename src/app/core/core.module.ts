/** ***********************************************************
 *
 * CORE : The aim of this class is to store all the mdules adn components that
 * have to be declared only ones in the app. Here we are talking about
 * the core of the application, all the components/modules that represent
 * the layout of the application
 *
 *********************************************************** **/

/** Angular Common Imports */
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

/** Ui Theme Imports */
import {
    UitBodyModule, UitFooterModule, UitHeaderModule,
    UitViewModule, UitContentModule, UitSidebarModule
} from '@laposte/ui-theme';

/** Guards */
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        UitBodyModule,
        UitFooterModule,
        UitHeaderModule,
        UitViewModule,
        UitContentModule,
        UitSidebarModule
    ],
    exports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        UitBodyModule,
        UitFooterModule,
        UitHeaderModule,
        UitViewModule,
        UitContentModule,
        UitSidebarModule
    ],
})
export class CoreModule {

    /**
     * CoreModule constructor
     *
     * @param parentModule
     */
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        // Check if this module is beeing loaded already
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
