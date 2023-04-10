// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // ProfileUrl : "http://localhost:82"
  ProfileUrl : "http://192.168.1.106:82",
  ProfileImages : "http://192.168.1.106:82/images/uploads/all/",
  ProfileImagesNews : "http://192.168.1.106:82/images/uploads/all/news/",

};
// export const environment = {
//   production: false,
//   // ProfileUrl : "http://localhost:82"
//   ProfileUrl : "https://47df-185-150-164-62.eu.ngrok.io",
//   ProfileImages : "https://47df-185-150-164-62.eu.ngrok.io/images/uploads/all/",
//   ProfileImagesNews : "https://47df-185-150-164-62.eu.ngrok.io/images/uploads/all/news/",
//
// };


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.