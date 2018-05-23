# Gulp & Typescript A to Z

Gulp 와 Typescript 를 활용하여 개발을 시작하기 위한 코드 베이스

## Prerequisite

### Gulp

Gulp 는 Node 개발을 쉽게 자동화해주는 도구로 여기에서는 `TypeScript`와 `Nodemon`을 사용하고 있다.

### TypeScript

아래 링크 참조

*   [공식 문서](https://www.typescriptlang.org/docs/home.html)
*   [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/content/docs/getting-started.html)

## Development

```bash
yarn start
```

#### `yarn start` 설명

1.  `package.json`에서 `scripts.start` 실행
2.  `gulpfile.js`에서 `default` 실행
3.  `default`의 선행 조건으로 `watch`, `scripts` 실행
4.  `scripts`에서는 `src`안에 있는 `typescript` 소스코드를 일반 `javascript` 소스코드로 빌드하여 `dist`에 위치
5.  빌드가 끝나면 `watch`를 실행하여 `src`에 변화가 생기는 경우 자동으로 `scripts`가 실행되도록 선언
6.  `watch`가 끝나면 `default`의 `nodemon`이 실행되는데 `nodemon`에서도 `watch` 옵션을 선언하여 `scripts` 실행 후 `dist`에 변화가 생기면 `node`를 재실행

## Build

```bash
yarn build
```

## License

[MIT](LICENSE)
