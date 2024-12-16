import { inject, Injectable } from '@angular/core';

import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { ProfileUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  firestore = inject(Firestore);
  addUser(user: ProfileUser): Promise<void> {
    const ref = doc(this.firestore, 'users', user.uid);
    return setDoc(ref, user);
  }
}
