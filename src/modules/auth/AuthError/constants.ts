const DEFAULT_ERROR_MESSAGE =
  "Щось пішло не так, спробуйте пізніше або зверніться до адміністратора сайту";
const INVALID_EMAIL_ERROR =
  'Спробуйте повторно увійти через пошту НУ "Львівська політехніка". Або зверність до адміністратора сайту';

export const AUTH_ERRORS = {
  Signin: INVALID_EMAIL_ERROR,
  OAuthSignin: INVALID_EMAIL_ERROR,
  OAuthCallback: INVALID_EMAIL_ERROR,
  OAuthCreateAccount: INVALID_EMAIL_ERROR,
  EmailCreateAccount: INVALID_EMAIL_ERROR,
  Callback: INVALID_EMAIL_ERROR,
  OAuthAccountNotLinked: DEFAULT_ERROR_MESSAGE,
  EmailSignin: DEFAULT_ERROR_MESSAGE,
  CredentialsSignin: DEFAULT_ERROR_MESSAGE,
  default: DEFAULT_ERROR_MESSAGE,
} as const;

