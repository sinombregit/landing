import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "adminpro-7e194", appId: "1:179320935653:web:e218db25bdb6b33d0db00c", storageBucket: "adminpro-7e194.firebasestorage.app", apiKey: "AIzaSyCExmGBOeSk354Bi5rbiRRnKLpcvQguF14", authDomain: "adminpro-7e194.firebaseapp.com", messagingSenderId: "179320935653", measurementId: "G-RZ5PDQEH4X", projectNumber: "179320935653", version: "2" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({ projectId: "token-6e9f4", appId: "1:825027202955:web:533c979b2aa0189df8a98e", storageBucket: "token-6e9f4.firebasestorage.app", apiKey: "AIzaSyDT4Xde0XcqnNetrTnTrkq2wE1pC4yAN7g", authDomain: "token-6e9f4.firebaseapp.com", messagingSenderId: "825027202955", measurementId: "G-9MTN9WNFMD", projectNumber: "825027202955", version: "2" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({ projectId: "token-6e9f4", appId: "1:825027202955:web:ab1d41ef1451eec8f8a98e", storageBucket: "token-6e9f4.firebasestorage.app", apiKey: "AIzaSyDT4Xde0XcqnNetrTnTrkq2wE1pC4yAN7g", authDomain: "token-6e9f4.firebaseapp.com", messagingSenderId: "825027202955", measurementId: "G-27PSF3CX69", projectNumber: "825027202955", version: "2" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({ projectId: "adminpro-7e194", appId: "1:179320935653:web:e218db25bdb6b33d0db00c", storageBucket: "adminpro-7e194.firebasestorage.app", apiKey: "AIzaSyCExmGBOeSk354Bi5rbiRRnKLpcvQguF14", authDomain: "adminpro-7e194.firebaseapp.com", messagingSenderId: "179320935653", measurementId: "G-RZ5PDQEH4X", projectNumber: "179320935653", version: "2" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ]
};
