/**
 * contains routes that are not required for authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = [
  "/",
  "/verification",
  "/ListService",
];

/**
 * routes that are used for the authentication purpose.
 * these routes redirects the users to the desired dashboards according to their roles
 * @type {string[]}
 */
export const authRoutes: string[] = [
  "/login",
  "/signup",
  "/error",
  "/reset",
  "/new-password",
];

/**
 * The authentication prefix for the api
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * default redirect path after login success
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/dashboard";
