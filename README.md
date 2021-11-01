# React로 짠 구구단 - JS로만 구현해보자

## 구조

<img width="904" alt="스크린샷 2021-11-01 오전 10 49 44" src="https://user-images.githubusercontent.com/78203399/139610625-c00cb99f-0bcf-47b1-925f-aab9104d0ded.png">

### app.js

- 전체적인 데이터들의 정보들을 가지고 있고(객관식 곱셉 정보, 문제 정보, 이벤트 동작 함수 등등 ) 각 컴포넌트(answer.js, nextBtn.js, question.js, category.js)에게 할당하여 랜더링하는 식으로 구현하였다.

- 유지보수, 확장성 측면을 고려하여 이때 함수 파라미터만을 이용하여 최대한에 느슨한 결합을 유지하도록 노력하였다.

### model.js

- localStorage를 활용하여 새로고침 사용 시 현제 화면 상태를 유지한다. 따라서 model.js에서는 localStorage값을 읽고 쓰는 함수를 선언하였다.

### answer.js, question.js, nextBtn.js, category.js

- 각 컴포넌트들에게 render함수, setState함수를 선언하여 각 컴포넌트마다 랜더링 및 재렌더링 할 수 있는 함수 구현

- 각 컴포넌트에서 발생하는 이벤트를 선언

---

## 인상깊은 오류

### P) 문제

해당 프로젝트에는 제출, 다음 문제라는 두 버튼이 존재한다. 하지만 제출 버튼을 눌렀을 때 다음 페이지로 넘어가고 다음 문제를 눌렀을 때 정답, 또는 오답이 나오는 오류가 발생하였다.

### C) 원인

button에 대한 명확한 정의가 되어있지 않아 발생한 오류였다.

### S) 해결

```html
<button type="button"></button> <button type="reset"></button>
```

버튼 마다 type을 지정해준다면 이를 해결할 수 있다. (기본값은 submit)

## 느낀점

- React로 간단하게 쓰인 코드들이 javascript로 직접 구현할 경우 굉장히 복잡하다는 것을 알게 되었다.
  특히 나같은 경우 많은 컴포넌트들로 구성하였기 때문에 특히 더 많은 파일들이 필요했던 거 같다.

- 이를 통해서 리액트가 어떤 구조로 이루어져있고 어떤식으로 state를 변경하고 렌더하는지 확실히 알게 되는 거 같다.
