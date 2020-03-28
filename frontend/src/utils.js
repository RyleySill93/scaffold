import normalize from 'normalize-object';


export const toCamelCase = object => normalize(object, 'camel');

export const toSnakeCase = object => normalize(object, 'snake');
