import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {Platform} from '@ionic/angular';
import {HTTP} from '@ionic-native/http/ngx';
import {StorageProvider} from './providers/storage';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { FunctionsProvider } from './helper/functions';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(),
        AppRoutingModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Platform,
        StorageProvider,
        FunctionsProvider,
        HTTP,
        DatePipe,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
