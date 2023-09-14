import { FC } from 'react';
import Container from '../Container/Container';
import ArticleList from '../ArticleList/ArticleList';

interface FeedProps {

}

const Feed:FC<FeedProps> = () => {
  return (
    <Container>
      <div className='flex'>
       <ArticleList/>
       <div className='w-1/4'>tags</div> 
      </div>
    </Container>
  )
}

export default Feed;