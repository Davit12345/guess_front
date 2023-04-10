import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Platform} from '@ionic/angular';
import {HTTP} from '@ionic-native/http/ngx';
import {StorageProvider} from '../providers/storage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  static serverUrl = "http://localhost:82/api/";



  private headers: any = {
    'Content-Type': 'application/json'
  };

  // get lang() {
  //   return TranslateConfigService.language.currentLang;
  // }

  private headers_with_token: any;

  private isDesktop: boolean;

  private static sessionId: string = "";

  constructor(
      private http: HTTP, // for http requests
      private pc_http: HttpClient,
      private platform: Platform,
      // public network: Network,
      // private loadingProvider: PopoverProvider, //for loading
      // private popoverProvider:PopoverProvider,
  ) {
    this.checkPlatform();
  }

  /** r_function
   *
   */

  async post(endpoint: string, body: any, config: { loadingStart?: boolean, loadingEnd?: boolean }) {


    localStorage.setItem('network',null)

    let currentToken = localStorage.getItem('TOKEN');

    if (body == null)
      body = {};

    this.headers_with_token = {
      'Content-Type': 'application/json',
      'token': currentToken
    };

    let requestHeaders = this.headers;
    if (currentToken) {
      requestHeaders = this.headers_with_token;
    }
    requestHeaders.language = 'en';

    const apiCall = () => new Promise(
        (resolve, reject) => {

          if (this.isDesktop) {
            requestHeaders = {headers: new HttpHeaders(requestHeaders)};
            const request = this.pc_http.post(
                ApiService.serverUrl + endpoint,
                body,
                requestHeaders
            )
                .subscribe(
                    ((response: any) => {
                      if (config.loadingEnd)
                          resolve(response);
                        // });
                      else
                        resolve(response);
                    }),
                    (err => {

                      reject(err);
                      throw new Error();
                    }));
          } else {

            const request = this.http.post(
                ApiService.serverUrl + endpoint,
                body,
                requestHeaders
            ).then(response => {

                  resolve(response);

            })
                .catch(err => {

                      reject(err);
                      throw new Error();
                })

          }
        }
    );

    return apiCall;
  }

  private checkPlatform() {

    this.isDesktop = (this.platform.is("desktop") || this.platform.is("pwa"));
    //
    // // DEVELOPMENT
    this.isDesktop = this.isDesktop || (this.platform.is("android") || this.platform.is("ios"));
    // // DEVELOPMENT-END
  }



}
