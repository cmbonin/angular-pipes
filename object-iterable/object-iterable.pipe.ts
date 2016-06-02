/**
 * This pipe converts objects to suit ngFor format
 */
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'objectIterable'
})
export class ObjectIterable {
  transform(dict: Object) {
    var a = [];
    for (var key in dict) {
      if (dict.hasOwnProperty(key)) {
        a.push({ key: key, val: dict[key] });
      }
    }
    return a;
  }
}