export const FriendlyErrorMessage = (errorCode) => {
  switch (errorCode) {
    case "auth/invalid-email":
      return "The email address is badly formatted.";
    case "auth/user-not-found":
      return "There is no user corresponding to this email.";
    case "auth/wrong-password":
      return "The password is invalid or the user does not have a password.";
    case "auth/email-already-in-use":
      return "The email address is already in use by another account.";
    case "auth/weak-password":
      return "The password must be 6 characters long or more.";
    case "auth/missing-password":
      return "The password must be input.";
    case "auth/invalid-credential":
      return "The email address or the password is invalid.";
    // Add more cases as needed
    default:
      return "An unknown error occurred. Please try again.";
  }
};
