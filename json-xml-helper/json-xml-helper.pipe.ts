import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'JsonXmlHelper'
})

export class JsonXmlHelper implements PipeTransform {

	transform(value) {
		const isArray = Array.isArray(value);
		if (isArray) {
			value = value[0];
		}
		return value;
	}

	extractItems(value) {
		if (Array.isArray(value.item)) {
			return value.item;
		} else {
			return [value.item];
		}
	}
}