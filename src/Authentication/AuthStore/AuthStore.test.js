/*global expect*/
/*global jest*/
import {
    API_INITIAL,
    API_SUCCESS,
    API_FETCHING,
    API_FAILED
    
} from '@ib/api-constants';

import Cookie from 'js-cookie';
import AuthAPI from '../AuthServices/AuthAPI';
import getUserSignInResponse from '../fixture/getUserSignInResponse';
import AuthStore from './AuthStore';


let mockSetCookie = jest.fn();
Cookie.set = mockSetCookie;


describe("AuthStore Test",() => {
    let authApi;
    let authStore;
    
    beforeEach(() => {
      authApi = new AuthAPI();
      authStore = new AuthStore(authApi);
    });
    
    
    it("should test initializing authstore",()=> {
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBeFalsy();
    });
    
    
    it("should test userSignInAPI data fetching state", () => {
    const onSuccess = jest.fn();
    const onFailure = jest.fn();
    
    
    const requestObject = {
      username: "test-user",
      password: "test-password"
    };

    
    const mockLoadingPromise = new Promise(function(resolve, reject) {});
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockLoadingPromise);
    authApi.signInAPI = mockSignInAPI;

    
    authStore.userSignIn(requestObject, onSuccess, onFailure);
    expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);
    expect(onSuccess).not.toBeCalled();
    expect(onFailure).not.toBeCalled();
  });

  it("should test userSignInAPI success state", async () => {
    const onSuccess = jest.fn();
    const onFailure = jest.fn();

    const requestObject = {
      username: "test-user",
      password: "test-password"
    };

    const mockSuccessPromise = new Promise(function(resolve, reject) {
      resolve(getUserSignInResponse);
    });
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockSuccessPromise);
    authApi.signInAPI = mockSignInAPI;

    await authStore.userSignIn(requestObject, onSuccess, onFailure);
    expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
    expect(mockSetCookie).toBeCalled();
    expect(onSuccess).toBeCalled();
  });

  it("should test userSignInAPI failure state", async () => {
    const onSuccess = jest.fn();
    const onFailure = jest.fn();
    const requestObject = {
      username: "test-user",
      password: "test-password"
    };
    const mockFailurePromise = new Promise(function(resolve, reject) {
      reject(new Error("error"));
    });

    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockFailurePromise);
    authApi.signInAPI = mockSignInAPI;

    authStore = new AuthStore(authApi);
    await authStore.userSignIn(requestObject, onSuccess, onFailure);

    expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);
    expect(authStore.getUserSignInAPIError).toBe("error");
    
  });

});
    
