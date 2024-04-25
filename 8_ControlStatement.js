/**
 * 제어문
 * forEach, map, filter
 */

// 블록문
// if...else 문은 불리언 값으로 평가 되어야 한다.
// 불리언 값이 아니면 암묵적 타입 변환으로 강제 변환이 된다.
// 자바스크립트는 if...else 문과 switch 문으로 두 가지 조건문을 제공한다.

/**
 * switch 문
 * switch 문을 탈출하지 않고 모든 case 문과 default문이 실행 되는 것을 폴스루(fall through)라고 한다.
 */
/*
switch (표현식)(
  case 표현식1:
    switch 문의 표현식과 표현식1이 일치하면 실행될 문;
    break;
  case 표현식2:
    switch 문의 표현식과 표현식2이 일치하면 실행될 문;
    break;
  default:
    switch 문의 표현식과 일치하는 case 문이 없을 때 실행될 문;
)
*/

// 폴스루를 활용한 문
// if...else 문으로 해결이 가능하면 switch 문보단 if...else 문을 사용하는 편이 좋다.
// 길어진다면 가독성이 좋은 switch 문을 사용하는 편이 좋다.
var year = 2000;
var month = 2;
var day = 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
    day = 31;
    break;
  case 4:
  case 6:
  case 9:
    day = 30;
    break;
  case 2:
    days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    break;
  default:
    console.log();
}
console.log(days);

/**
 * 반복문
 * 결과가 참인 경우 코드를 실행한다. 이는 조거문이 거짓일 때까지 반복한다.
 * for문 (i 변수를 사용한다. interaction)
 * while 문은 반복 횟수가 불명확힐 때 주로 사용한다.
 * 무한루프에서 탈출하기 위해선 코드 블록 내에 if...else 문을 작성한다.
 * do...while
 *
 */
while (true) {}

var count = 0;

while (true) {
  console.log(count);
  count++;
  if (count === 3) break;
}
