import React, { Fragment } from 'react';
import CountUp from 'react-countup';
import casesImg from '../../images/cases.svg';
import deathsImg from '../../images/deaths-large.png';
import recoveredImg from '../../images/recovered.png';
import Moment from 'react-moment';
import 'moment/locale/hu';

const Cards = ({ data }) => {
  return (
    <div className='landing'>
      <div className='container'>
        <div className='row py-5 justify-content-between align-items-center global'>
          <div className='col-md-12'>
            <div className='col-sm-6'>
              <h2>Globális adatok</h2>
            </div>
            <div className='col-sm-6 text-sm-right'>
              <h3>
                {data?.updated ? (
                  <small className='text-muted'>
                    Adatok frissítése <Moment fromNow>{data?.updated}</Moment>
                  </small>
                ) : (
                    <small className='text-info'>Frissítés . . .</small>
                  )}
              </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 my-3'>
              <div className='row cases align-items-center justify-content-between'>
                <div className='col-3'>
                  <img
                    src={casesImg}
                    alt='fertőzöttek illusztráció'
                    className='img-fluid logo'
                  />
                </div>
                <div className='col-8'>
                  <h2 className='text-info'>
                    {data?.cases ? (
                      <Fragment>
                        <CountUp
                          start={0}
                          end={data?.cases}
                          duration={2.3}
                          separator={','}
                        />
                      </Fragment>
                    ) : (
                        <small className='text-primary'>Betöltés . . .</small>
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
                          end={data?.deaths}
                          duration={2.3}
                          separator={','}
                        />
                      </Fragment>
                    ) : (
                        <small className='text-primary'>Betöltés . . .</small>
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
                          end={data?.recovered}
                          duration={2.3}
                          separator={','}
                        />
                      </Fragment>
                    ) : (
                        <small className='text-primary'>Betöltés . . .</small>
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
