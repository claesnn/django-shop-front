/* tslint:disable */
/* eslint-disable */
/**
 * Shop Project API
 * Just playing around with Django
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Address,
  PatchedAddress,
} from '../models/index';
import {
    AddressFromJSON,
    AddressToJSON,
    PatchedAddressFromJSON,
    PatchedAddressToJSON,
} from '../models/index';

export interface AddressesCreateRequest {
    address: Omit<Address, 'id'>;
}

export interface AddressesDestroyRequest {
    id: number;
}

export interface AddressesPartialUpdateRequest {
    id: number;
    patchedAddress?: Omit<PatchedAddress, 'id'>;
}

export interface AddressesRetrieveRequest {
    id: number;
}

export interface AddressesUpdateRequest {
    id: number;
    address: Omit<Address, 'id'>;
}

/**
 * 
 */
export class AddressesApi extends runtime.BaseAPI {

    /**
     */
    async addressesCreateRaw(requestParameters: AddressesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Address>> {
        if (requestParameters['address'] == null) {
            throw new runtime.RequiredError(
                'address',
                'Required parameter "address" was null or undefined when calling addressesCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/addresses/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddressToJSON(requestParameters['address']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddressFromJSON(jsonValue));
    }

    /**
     */
    async addressesCreate(requestParameters: AddressesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Address> {
        const response = await this.addressesCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async addressesDestroyRaw(requestParameters: AddressesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling addressesDestroy().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/addresses/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async addressesDestroy(requestParameters: AddressesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addressesDestroyRaw(requestParameters, initOverrides);
    }

    /**
     */
    async addressesListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Address>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/addresses/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AddressFromJSON));
    }

    /**
     */
    async addressesList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Address>> {
        const response = await this.addressesListRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async addressesPartialUpdateRaw(requestParameters: AddressesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Address>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling addressesPartialUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/addresses/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedAddressToJSON(requestParameters['patchedAddress']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddressFromJSON(jsonValue));
    }

    /**
     */
    async addressesPartialUpdate(requestParameters: AddressesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Address> {
        const response = await this.addressesPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async addressesRetrieveRaw(requestParameters: AddressesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Address>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling addressesRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/addresses/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddressFromJSON(jsonValue));
    }

    /**
     */
    async addressesRetrieve(requestParameters: AddressesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Address> {
        const response = await this.addressesRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async addressesUpdateRaw(requestParameters: AddressesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Address>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling addressesUpdate().'
            );
        }

        if (requestParameters['address'] == null) {
            throw new runtime.RequiredError(
                'address',
                'Required parameter "address" was null or undefined when calling addressesUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/addresses/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AddressToJSON(requestParameters['address']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddressFromJSON(jsonValue));
    }

    /**
     */
    async addressesUpdate(requestParameters: AddressesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Address> {
        const response = await this.addressesUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
