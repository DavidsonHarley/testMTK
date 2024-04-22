export const PAGE = 'PAGE';

export const pageNumber = (page) => ({
  type: PAGE, payload: page,
});
