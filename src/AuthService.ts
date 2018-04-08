

export class AuthService {
    public static SERVICE_NAME = 'AuthService';

    public angularAuth0;

    constructor($state, angularAuth0, $timeout) {
        this.angularAuth0 = angularAuth0;
    }


    public login() {
        this.angularAuth0.authorize();
    }

}

export function initAuthService(angular: IAngularStatic) {
    AuthService.$inject = ['$state', 'angularAuth0', '$timeout'];
    angular.module('app').service('AuthService', AuthService);
}
