import React, { Fragment } from 'react';
import CountUp from 'react-countup';
import casesImg from '../../images/cases.svg';
import deathsImg from '../../images/deaths-large.svg';
import recoveredImg from '../../images/strength.svg';
import Moment from 'react-moment';
import styles from './CardsHU.module.css';

const Cards = ({ data }) => {
  return (
    <div id='main-content' className={`${styles.bn}`}>
      <div className='container'>
        <div className='row py-5 justify-content-between align-items-center global'>
          <div className='col-md-12'>
            <div className='row justify-content-between align-items-center'>
              <div className='col-sm-6'>
                <h2>Globális adatok</h2>
              </div>
              <div className='col-sm-6 text-sm-right'>
                <h3 className={styles.en}>
                  {data?.updated ? (
                    <span>
                      Frissítési állapot <Moment fromNow>{data?.updated}</Moment>
                    </span>
                  ) : (
                      <small className={`${styles.en} text-info`}>
                        Frissítés . . .
                      </small>
                    )}
                </h3>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 my-3'>
              <div className='row cases align-items-center justify-content-between no-gutters'>
                <div className='col-3'>
                  <img
                    src={casesImg}
                    alt='fertőzött illusztráció'
                    className='img-fluid logo'
                  />
                </div>
                <div className='col-8'>
                  <h2 className='text-info'>
                    {data?.cases ? (
                      <Fragment>
                        <CountUp
                          start={0}
                          formattingFn={num => num.toLocaleString('hu-HU')}
                          end={data?.cases}
                          duration={2.3}
                          separator={','}
                        />{' '}
                        <small className='text-dark'></small>
                      </Fragment>
                    ) : (
                        <small className={`${styles.en} text-primary`}>
                          Betöltés . . .
                        </small>
                      )}
                  </h2>
                  <h3 className='text-muted'>Fertőzött</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 my-3'>
              <div className='row deaths align-items-center justify-content-between no-gutters'>
                <div className='col-3'>
                  <img
                    src={deathsImg}
                    alt='halálozás illusztráció'
                    className='img-fluid logo'
                  />
                </div>
                <div className='col-8'>
                  <h2 className='text-danger'>
                    {data?.deaths ? (
                      <Fragment>
                        <CountUp
                          start={0}
                          formattingFn={num => num.toLocaleString('hu-HU')}
                          end={data?.deaths}
                          duration={2.3}
                          separator={','}
                        />{' '}
                        <small className='text-dark'></small>
                      </Fragment>
                    ) : (
                        <small className={`${styles.en} text-primary`}>
                          Betöltés . . .
                        </small>
                      )}
                  </h2>
                  <h3 className='text-muted'>Halálozás</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 my-3'>
              <div className='row recovered align-items-center justify-content-between no-gutters'>
                <div className='col-3'>
                  <img
                    src={recoveredImg}
                    alt='gyógyultak illusztráció'
                    className='img-fluid logo'
                  />
                </div>
                <div className='col-8'>
                  <h2 className='text-success'>
                    {data?.recovered ? (
                      <Fragment>
                        <CountUp
                          start={0}
                          formattingFn={num => num.toLocaleString('hu-HU')}
                          end={data?.recovered}
                          duration={2.3}
                          separator={','}
                        />{' '}
                        <small className='text-dark'></small>
                      </Fragment>
                    ) : (
                        <small className={`${styles.en} text-primary`}>
                          Betöltés . . .
                        </small>
                      )}
                  </h2>
                  <h3 className='text-muted'>Gyógyult</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
