/**
 * 타입 변환과 단축 평가
 */

// 옵셔널 체이닝 연산자
var elem = null;
var value = elem?.value;
console.log(value); // undefined

// null 병합 연산자 (nullish) - 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환, 그렇지 않으면 좌항의 피연산자 반환
// 기본값을 설정할 때 유용
var foo = null ?? 'default string';
console.log(foo); // "default string"

// null, undefined가 아니면 좌항의 피연산자를 그대로 반환
var foo2 = '' ?? 'default string';
console.log(foo2); // ""
