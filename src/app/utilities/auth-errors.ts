import { FirebaseError } from '@angular/fire/app';

export const getFirebaseErrorMessage = ({ code }: FirebaseError): string => {
  let message: string;

  switch (code) {
    case 'auth/invalid-credential':
      message = 'Email or password is incorrect!';
      break;
    case 'auth/user-not-found':
      message = 'No account found with this email address!';
      break;
    case 'auth/wrong-password':
      message = 'The password you entered is incorrect!';
      break;
    case 'auth/invalid-email':
      message = 'The email address format is invalid!';
      break;
    case 'auth/network-request-failed':
      message = 'A network error occurred. Please try again!';
      break;
    case 'auth/too-many-requests':
      message = 'Too many failed login attempts. Try again later!';
      break;
    default:
      message =
        'An unexpected error occurred. Please contact system administrator!';
      break;
  }

  return message;
};
