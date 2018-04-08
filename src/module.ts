import { routesProvider } from "./routes";

const app = angular.module('app', ['ui.router', 'auth0.auth0']).config(configRoutesAndAuth);

app.config(routesProvider);