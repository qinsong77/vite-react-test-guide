export function deepClone<T = any>(target: T, hashMap = new WeakMap()) {
  if (target === null) return target // typeof null === 'object'
  if (typeof target !== 'object') return target // undefined, string, number, function, symbol
  // 是对象的话就要进行深拷贝
  // 处理循环引用
  if (hashMap.get(target as Object)) {
    return hashMap.get(target as Object)
  }

  // @ts-ignore
  const cloneTarget = new target.constructor()
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  // 防止循环引用
  hashMap.set(target, cloneTarget)
  const stringType = Object.prototype.toString.call(target)
  switch (stringType) {
    case '[object Boolean]':
    case '[object Number]':
    case '[object String]':
    case '[object Error]':
    case '[object Date]':
    case '[object RegExp]':
      return new target.constructor(target)
    case '[object Set]':
      target.forEach(v => cloneTarget.add(deepClone(v, hashMap)))
      break
    case '[object Map]':
      target.forEach((v, k) => cloneTarget.set(k, deepClone(v, hashMap)))
      break
    case '[object Array]':
      target.forEach((v, index) => (cloneTarget[index] = deepClone(v, hashMap)))
      break
    case '[object Object]':
      // eslint-disable-next-line no-case-declarations
      const keys = Object.keys(target)
      keys.forEach(key => (cloneTarget[key] = deepClone(target[key], hashMap)))
      break
    default:
  }
  return cloneTarget
}
