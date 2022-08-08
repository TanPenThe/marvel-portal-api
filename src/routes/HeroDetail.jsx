import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { heroDetail } from '../apiHandler'

const HeroDetail = () => {
      const { id } = useParams();
      const [heroData, setHeroData] = useState({});

      useEffect(() => {
            console.log('use efect run?');
            heroDetail(id)
                  .then((data) => setHeroData(data.data.results[0]))
                  .catch((err) => console.log(err.message))
      }, [id], []);

      if (Object.keys(heroData).length === 0) {
            console.log('no data');
            return;
      }

      return (
            <div className='container'>
                  <div className="row">
                        <div className="col-5">
                              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                              <img
                                    src={`${heroData.thumbnail.path}.${heroData.thumbnail.extension}`}
                                    alt={`${heroData.name} image`}
                                    style={{width: 350, height: 400}}
                              />
                        </div>
                        <div className="col-6">
                              <h2>Name</h2>
                              <p>{heroData.name}</p>
                              {heroData.description ? (
                                    <>
                                          <h2>Description</h2>
                                          <p>{heroData.description}</p>
                                    </>
                              ) : (
                                    <>
                                          <h2>Description</h2>
                                          <p>N/A</p>
                                    </>
                              )}
                        </div>
                  </div>
            </div>
      )
}

export default (HeroDetail)