/**
 * Extracts the value from an object
 *
 * Avoids angular errors when object property doesn't exist
 * 
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'objectProperty'
})

export class ObjectProperty implements PipeTransform {

	transform(value, params) {
		const prop = this.get(value, params);
		return prop;
	}

	get(obj, key) {
			return key.split('.').reduce(function(o, x) {
					return (typeof o === 'undefined' || o === null) ? o : o[x];
			}, obj);
	}
}
