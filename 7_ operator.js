/**
 * 산술 연산자
 * 피연산자를 대상으로 수학적 계산을 수행해 새로운 숫자 값을 만든다.
 * 산술 연산이 불가능한 경우 NaN을 반환한다.
 */

// 이항 산술 연산자
5 + 2; // 7
5 - 2; // 3
5 * 2; // 10
5 / 2; // x2.5
5 % 2; // 1

// 단항 산술 연산자
var x = 1;
x++;
console.log(x); // 2

x--;
console.log(x); // 1

// 증가/감소 연산자는 위치에 의미가 있다.
// 피연산자 앞에 위치한 전위 증가/감소 연산자는 먼저 피연산자의 값을 증가/감소시킨 후, 다른 연산을 수행한다.
// 피연산자 뒤에 위차한 후위 증가/감소 연산자는 먼저 다른 연산을 수행한 후, 피연산자의 값을 중가/감소 시킨다.
var x = 5,
  result;

// 선헐덩 휴중거
result = x++;
console.log(result, x); // 5 6

// 선증가 후할당
result = ++x;
console.log(result, x); // 7 7

// 선헐덩 휴감소
result = x--;
console.log(result, x); // 7 6

// 선감소 후할당
result = --x;
console.log(result, x); // 5 5

// 숫자 타입이 아닌 피연산자에 + 단항 연산자를 사용하면 피연산자를 숫자 타입으로 변환하여 반환한다. 이때 피연산자를 변경하는 것은 아니고 숫자 타입으로 변환한 값을 생성해서 반환한다. 따라서 부수 효과는 없다.
var x = '1';

// 문자열을 숫자로 타입 변환한다.
console.log(+x); // 1
// 부수 효과는 없다.
console.log(x); // "1"

// 불리언 값을 숫자 타입으로 변환한다.
x = true;
console.log(+x); // 1
// 부수 효과는 없다.
console.log(x); // true

// 불리언 값을 숫자 타입으로 변환한다.
x = false;
console.log(+x); // 0
// 부수 효과는 없다.
console.log(x); // false

// 문자열을 숫자 타입으로 변환할 수 없으므로 NaN을 반환한다.
x = 'Hello';
console.log(+x); // NaN
// 부수 효과는 없다.
console.log(x); // "Hello"

// 부호를 반전한다.
-(-10); // 10
-'10'; // -10
-true; // -1
-'Hello'; // NaN

// 암묵적 타입 변환 and 타입 강제 변환
1 + true; // 2
1 + false; // 1
1 + null; // 1
+undefined; // NaN
1 + undefined; // NaN

// 할당 연산자
var x;
x = 10;

x += 5; // x = x + 5;
console.log(x); // 15

x -= 5; // x = x - 5;
console.log(x); // 10

var str = 'My name is';

// 문자 연결 연산자
str += 'Lee'; // str = str + 'Lee';
console.log(str); // 'My name is Lee'

// 일치 비교 연산자에서 주의할 것은 NaN이다.
// NaN은 자신과 일치하지 않는 유일한 값이다.
NaN === NaN; // false

// 값이 null 타입인지 확인할 때는 typeof 연산자를 사용하지 말고 일치 연산자(===)를 이용하자.
