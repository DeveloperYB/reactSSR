# Testing React SSR

### what to do

-   서버사이드 랜더링을 테스트 합니다.
-   HOC 컴포넌트를 테스트 합니다.
-   Redux, Router를 테스트 합니다.
-   코드 스플릿팅을 테스트 합니다.

---
#### 왜? 서버사이드를 써야하는가?
> What is React Server Side Rendering and should I use it? \
https://dev.to/mladenstojanovic/what-is-react-server-side-rendering-and-should-i-use-it-5b7i
---
#### 서버사이드 렌더링 참고
> react-router :: 3장. 서버사이드 렌더링 : 벨로퍼트님 블로그 출처 \
https://velopert.com/3425

> React Server Side Rendering : La.place님 블로그 출처 \
https://dev-momo.tistory.com/entry/React-Server-Side-Rendering
---
#### 코드 스플릿팅 참고
> 리액트 프로젝트 코드 스플리팅 정복하기 : 벨로퍼트님 블로그 출처 \
https://velog.io/@velopert/react-code-splitting
---
#### HOC 참고
> 리엑트 공식 Docs \
https://reactjs.org/docs/higher-order-components.html \

> 리액트(React) 이해 4 - Higher Order Component(HOC)로 컴포넌트 재사용 하기 \
https://www.vobour.com/%EB%A6%AC%EC%95%A1%ED%8A%B8-react-%EC%9D%B4%ED%95%B4-4-higher-order-component

> 상세한 리액트 Higher Order Components 설명(React Higher Order Components in depth) \
https://www.vobour.com/%EC%83%81%EC%84%B8%ED%95%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-higher-order-components-%EC%84%A4%EB%AA%85-react

> 리액트 HOC 집중 탐구 (1) \
https://meetup.toast.com/posts/137 \
리액트 HOC 집중 탐구 (2) \
https://meetup.toast.com/posts/144

> 컴포넌트에 날개를 달아줘, 리액트 Higher-order Component (HoC)  : 벨로퍼트님 블로그 출처 \
https://velopert.com/3537



### Directory Setting Information
- src/components: 컴포넌트들이 위치하는 디렉토리입니다.

- src/pages: 각 라우트들이 위치하는 디렉토리 입니다.

- src/client: 브라우저 측에서 사용할 최상위 컴포넌트 입니다. 우리가 추후 서버사이드 렌더링을 구현 할 것이기 때문에 디렉토리를 따로 구분하였습니다. (서버사이드 렌더링을 할 때에는 서버 전용 라우터를 써야합니다.) 여기서 라우터를 설정합니다.

- src/server: 서버측에서 사용 할 리액트 관련 코드를 여기에 넣습니다.

- src/shared: 서버와 클라이언트에서 공용으로 사용되는 컴포넌트 App.js 가 여기에 위치합니다.

- src/lib: 나중에 웹 연동을 구현 할 때 사용 할 API와 코드스플리팅 할 때 필요한 코드가 여기에 위치합니다.