export const If = ({test, children}) => ( test ? children : (null));

export const NavigateTo = (history, page, {query, book}) => {
  switch (page) {
    case 'search':
      history.push('/search?q='+query, { query });
      break;
    case 'home':
      history.push('/');
      break;
    case 'book':
      history.push(`/book/${book.id}`);
      break;
    default:
  }
};
