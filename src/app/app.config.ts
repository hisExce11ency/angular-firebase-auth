import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"angular-firebase-auth-a7fbf","appId":"1:370450938851:web:cf09745f3926c1f4643ed6","storageBucket":"angular-firebase-auth-a7fbf.firebasestorage.app","apiKey":"AIzaSyA7yW4QYBmhCRDK_obmSa4PGGVFj7N-K6E","authDomain":"angular-firebase-auth-a7fbf.firebaseapp.com","messagingSenderId":"370450938851"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), provideAnimationsAsync()]
};
