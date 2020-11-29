## 오늘의 집 과제

### 구조

```
.
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

<App>
    <PhotoList>
        <Filter />
        <Card />
    </PhotoList>
</App>
```

- Controller의 경우 container의 PhotoList 컴포넌트 에서 최대한 관리할 수 있도록 구현하였으며, Card 나 Filter의 경우 Presentaition과 Container를 구분할 필요가 없어서 함께 사용했습니다.

### 기능

- 스크롤 에 따른 이미지 요청
- 스크랩 및 새로고침 시 데이터 유지

### 사용 기술 스택

- Typescript
- React
- node-sass
- axios
