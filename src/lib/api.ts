import axios from 'axios';

export const getData = (pageNumber: number) =>
  axios.get(
    `https://bucketplace-coding-test.s3.amazonaws.com/cards/page_${pageNumber}.json`,
  );
