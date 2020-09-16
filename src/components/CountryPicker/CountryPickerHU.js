import React, { useEffect, useState, Fragment } from 'react';
import { fetchCountryData } from '../../api';
import { Select } from 'antd';
import CountUp from 'react-countup';
import casesImg from '../../images/cases.svg';
import deathsImg from '../../images/deaths-large.svg';
import recoveredImg from '../../images/strength.svg';
import criticImg from '../../images/hospital.svg';
import styles from './CountryPickerHU.module.css';
const { Option } = Select;

const CountryPicker = ({ handleCountryChange, localData, country }) => {
  const [fetchedCountryData, setFetchedCountryData] = useState([]);
  useEffect(() => {
    const fetchedAPI = async () => {
      setFetchedCountryData(await fetchCountryData());
    };
    fetchedAPI();
  }, [setFetchedCountryData]);

  return (
    <div className={styles.bn}>
      <div className='row justify-content-between align-items-center p-3'>
        <div className='col-md-12 text-center'>
          <h2 className='mb-5'>
            Ország adatok
          </h2>
        </div>
        <div className='my-3 d-flex align-items-center'>
          <h3 className={`${styles.en} mb-0`}>
            {localData?.country ? (
              localData.country
            ) : (
                <small className={`${styles.en} text-primary`}>
                  Betöltés . . .
                </small>
              )}
          </h3>
          &nbsp; &nbsp;
          <div>
            {localData?.flag ? (
              <img
                src={localData.flag}
                style={{ width: '35px' }}
                alt='zászló illusztráció'
              />
            ) : null}
          </div>
        </div>
        <div className='my-3'>
          <div className={`${styles.en} form-row`}>
          <label for="id_select" className="sr-only"> Válassz az országok közül </label>
            <Select className="country" id="id_select" autofocus="true"
              onChange={country => handleCountryChange(country)}
              showSearch
              size={'large'}
              style={{ width: 200 }}
              placeholder='Válassz az országok közül'
              optionFilterProp='children'
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value='hungary'>Hungary</Option>
              {fetchedCountryData?.map((data, i) => (
                <Option key={i} value={data.code}>
                  {data.country}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className='row local'>
        <div className='col-md-4 my-3'>
          <div className='row cases align-items-center justify-content-between no-gutters'>
            <div className='col-3'>
              <img src={casesImg} alt='fertőzöttek illusztráció' className='img-fluid logo' />
            </div>
            <div className='col-8'>
              <h2 className='text-info'>
                {localData?.cases >= 0 ? (
                  <Fragment>
                    <CountUp
                      formattingFn={num => num.toLocaleString('hu-HU')}
                      start={0}
                      end={localData.cases}
                      duration={2.3}
                      separator={','}
                    />{' '}
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
              <img src={deathsImg} alt='halálozás illusztráció' className='img-fluid logo' />
            </div>
            <div className='col-8'>
              <h2 className='text-danger'>
                {localData?.deaths >= 0 ? (
                  <Fragment>
                    <CountUp
                      formattingFn={num => num.toLocaleString('hu-HU')}
                      start={0}
                      end={localData.deaths}
                      duration={2.3}
                      separator={','}
                    />{' '}
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
              <img src={recoveredImg} alt='gyógyultak illusztráció' className='img-fluid logo' />
            </div>
            <div className='col-8'>
              <h2 className='text-success'>
                {localData?.recovered >= 0 ? (
                  <Fragment>
                    <CountUp
                      formattingFn={num => num.toLocaleString('hu-HU')}
                      start={0}
                      end={localData.recovered}
                      duration={2.3}
                      separator={','}
                    />{' '}
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
      <div className='row local'>
        <div className='col-md-12 my-3 py-3 text-left'>
          <h3>Mai adatok </h3>
        </div>
        <div className='col-md-4 my-3'>
          <div className='row cases align-items-center justify-content-between no-gutters'>
            <div className='col-3'>
              <img src={casesImg} alt='fertőzöttek illusztráció' className='img-fluid logo' />
            </div>
            <div className='col-8'>
              <h2 className='text-info'>
                {localData?.todayCases >= 0 ? (
                  <Fragment>
                    <CountUp
                      formattingFn={num => num.toLocaleString('hu-HU')}
                      start={0}
                      end={localData.todayCases}
                      duration={2.3}
                      separator={','}
                    />{' '}
                  </Fragment>
                ) : (
                    <small className={`${styles.en} text-primary`}>
                      Betöltés . . .
                    </small>
                  )}
              </h2>
              <h3 className='text-muted'>Új esetek</h3>
            </div>
          </div>
        </div>
        <div className='col-md-4 my-3'>
          <div className='row deaths align-items-center justify-content-between no-gutters'>
            <div className='col-3'>
              <img src={deathsImg} alt='halálozás illusztráció' className='img-fluid logo' />
            </div>
            <div className='col-8'>
              <h2 className='text-danger'>
                {localData?.todayDeaths >= 0 ? (
                  <Fragment>
                    <CountUp
                      formattingFn={num => num.toLocaleString('hu-HU')}
                      start={0}
                      end={localData.todayDeaths}
                      duration={2.3}
                      separator={','}
                    />{' '}
                  </Fragment>
                ) : (
                    <small className={`${styles.en} text-primary`}>
                      Betöltés . . .
                    </small>
                  )}
              </h2>
              <h3 className='text-muted'>Halálozás ma</h3>
            </div>
          </div>
        </div>
        <div className='col-md-4 my-3'>
          <div className='row critical align-items-center justify-content-between no-gutters'>
            <div className='col-3'>
              <img src={criticImg} alt='kritikus illusztráció' className='img-fluid logo' />
            </div>
            <div className='col-8'>
              <h2 className='text-primary'>
                {localData?.critical >= 0 ? (
                  <Fragment>
                    <CountUp
                      formattingFn={num => num.toLocaleString('hu-HU')}
                      start={0}
                      end={localData.critical}
                      duration={2.3}
                      separator={','}
                    />{' '}
                  </Fragment>
                ) : (
                    <small className={`${styles.en} text-primary`}>
                      Betöltés . . .
                    </small>
                  )}
              </h2>
              <h3 className='text-muted'>Kritikus állapot</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPicker;
