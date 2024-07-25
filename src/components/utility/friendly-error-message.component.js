export const FriendlyErrorMessage = (errorCode) => {
  switch (errorCode) {
    case "auth/invalid-email":
      return "Error: The email address is badly formatted.";
    case "auth/user-not-found":
      return "Error: There is no user corresponding to this email.";
    case "auth/wrong-password":
      return "Error: The password is invalid or the user does not have a password.";
    case "auth/email-already-in-use":
      return "Error: The email address is already in use by another account.";
    case "auth/weak-password":
      return "Error: The password must be 6 characters long or more.";
    case "auth/missing-password":
      return "Error: The password must be input.";
    case "auth/invalid-credential":
      return "Error: The email address or the password is invalid.";
    // Add more cases as needed
    default:
      return "Error: An unknown error occurred. Please try again.";
  }
};
