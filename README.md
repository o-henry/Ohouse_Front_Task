## 오늘의 집 과제

### 구조

```
├── src
│   ├── App.tsx
│   ├── assets
│   ├── components
│   │   ├── Button
│   │   ├── Card
│   │   ├── Filter
│   │   └── index.ts
│   ├── containers
│   │   ├── PhotoList
│   │   └── index.ts
│   ├── hook
│   ├── index.tsx
└── └── styles

..대략적인 구조 ( 아래처럼 컴포넌트 합성을 사용하지는 않았습니다. )
<App>
    <PhotoList>
        <Filter>
            <Button>
                .
                .
        </Filter>
        <Card>
            <Button>
                .
                .
        </Card>
    </PhotoList>
</App>


```

비즈니스 로직의 경우 container의 PhotoList 컴포넌트 에서 최대한 관리할 수 있도록 구현하였으며, 

Card 나 Filter의 경우 Presentaition과 Container를 구분 없이 함께 사용했습니다.

---

### 기능

- 스크롤 에 따른 이미지 요청
- 스크랩 버튼 색상 변경
- 스크랩 및 새로고침 시 데이터 유지

---

### 사용 기술 스택

- Typescript
- React
- node-sass
- axios

---

### 설치
`npm i`

`npm start`

> 에러 발생시

`npm i --only=dev` (devDependencies만 따로 설치)

vscode 에서 tsconfig.json 'jsx': 'react-jsx'에러 발생시 `cmd + shift + p` `Select Typescript Version` -> `use Workspace version`
