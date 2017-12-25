// @flow
export * from './string';
export * from './object';
export * from './array';

/**
 * This function says hello.
 * @param name Some name to say hello for.
 * @returns The hello.
 */
const sayHello = (name: string = 'Haz'): string => `Hello, ${name}!`;

export default sayHello;
