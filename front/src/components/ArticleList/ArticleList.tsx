import { FC } from 'react';

import Article from '../Article/Article';

interface ArticleList {

};

const ArticleList: FC<ArticleList> = () => {
  return (
    <div className='w-3/4'>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  )
}

export default ArticleList;