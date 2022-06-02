export const deepCopy = <T>(source: T): any => {
  return Array.isArray(source)
    ? source.map(item => deepCopy(item))
    : source instanceof Date
      ? new Date(source.getTime())
      : source && typeof source === 'object'
        ? Object.getOwnPropertyNames(source).reduce((o, prop) => {
          //@ts-ignore
          o[prop] = deepCopy(source[prop]);
          //@ts-ignore
          Object.defineProperty(o, prop, Object.getOwnPropertyDescriptor(source, prop));
          return o;
        }, Object.create(Object.getPrototypeOf(source)))
        : source as T;
}