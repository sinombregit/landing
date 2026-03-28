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
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "adminpro-7e194", appId: "1:179320935653:web:e218db25bdb6b33d0db00c", storageBucket: "adminpro-7e194.firebasestorage.app", apiKey: "AIzaSyCExmGBOeSk354Bi5rbiRRnKLpcvQguF14", authDomain: "adminpro-7e194.firebaseapp.com", messagingSenderId: "179320935653", measurementId: "G-RZ5PDQEH4X", projectNumber: "179320935653", version: "2" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ]
};
