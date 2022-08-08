import React, { useEffect, useState } from 'react'
import { initHeroes } from '../apiHandler';
import Card from '../components/Card';

const Home = () => {
  const [initHeroList, setInitHeroList] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchInit = async () => {
    try {
      setIsLoading(true);
      const initData = await initHeroes();
      setInitHeroList(initData);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchInit();
  }, []);

  return (
    <>
      <div className='container'>
        {isLoading === true ? (
          <h5 className='centerText'>Loading...</h5>
        ) : (
            <>
              <div className="grid-container">
                {Object.keys(initHeroList).length > 0 && initHeroList.data.results.map(hero => (
                  <Card 
                    key={hero.id}
                    id={hero.id}
                    name={hero.name}
                    thumbnail={`${hero.thumbnail.path}/portrait_fantastic.${hero.thumbnail.extension}`}
                    className="grid-item justify-content-center"
                  />
                ))}
              </div>
            </>
          )}
      </div>
    </>
  )
}

export default Home;
