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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PatchedCategory
 */
export interface PatchedCategory {
    /**
     * 
     * @type {number}
     * @memberof PatchedCategory
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedCategory
     */
    title?: string;
}

/**
 * Check if a given object implements the PatchedCategory interface.
 */
export function instanceOfPatchedCategory(value: object): value is PatchedCategory {
    return true;
}

export function PatchedCategoryFromJSON(json: any): PatchedCategory {
    return PatchedCategoryFromJSONTyped(json, false);
}

export function PatchedCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedCategory {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'] == null ? undefined : json['title'],
    };
}

export function PatchedCategoryToJSON(value?: Omit<PatchedCategory, 'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
    };
}

