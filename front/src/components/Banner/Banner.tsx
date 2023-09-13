import { FC } from 'react';

import Container from '../Container/Container';

interface BannerProps { };

const Banner: FC<BannerProps> = ({ }) => {
  return (
    <main>
      <div className="bg-theme-green shadow-banner text-white p-8 mb-8">
        <Container>
          <h1 className='font-titillium drop-shadow-logo text-center text-logo pb-2'>conduit</h1>
          <p className='text-center text-2xl font-light'>A place to share your knowledge.</p>
        </Container>
      </div>
    </main>
  )
}

export default Banner;