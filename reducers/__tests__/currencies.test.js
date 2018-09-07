import currencies from '../currencies';

import { CURRENCIES, CURRENCIES_PRICE } from '../../actions/document';
import { SORT_CURRENCIES_BY, FILTER_BY } from '../../actions/command';

describe('currencies reducer', () => {
  const state = {
    list: [
      {
        CoinInfo: {
          Id: '1182',
          Name: 'BTC',
          FullName: 'Bitcoin',
          financialData: { PRICE: 123 }
        }
      },
      {
        CoinInfo: {
          Id: '1182',
          Name: 'ETH',
          FullName: 'Etherum',
          financialData: { PRICE: 421 }
        }
      }
    ]
  };
  it('should handle CURRENCIES action', () => {
    const action = { type: CURRENCIES, payload: [{ test: 1 }] };
    expect(currencies(undefined, action).list).toEqual(action.payload);
  });
  it('should handle CURRENCIES_PRICE action', () => {
    const action = {
      type: CURRENCIES_PRICE,
      payload: {
        RAW: {
          BTC: {
            USD: {
              TYPE: '5',
              MARKET: 'CCCAGG',
              FROMSYMBOL: 'BTC',
              TOSYMBOL: 'USD',
              FLAGS: '1',
              PRICE: 6414.2,
              LASTUPDATE: 1536221527,
              LASTVOLUME: 0.15629914,
              LASTVOLUMETO: 1001.8386260430387,
              LASTTRADEID: '290328668',
              VOLUMEDAY: 72441.13920033668,
              VOLUMEDAYTO: 467467135.32821596,
              VOLUME24HOUR: 163652.48798878051,
              VOLUME24HOURTO: 1109839184.2829814,
              OPENDAY: 6705.03,
              HIGHDAY: 6727.19,
              LOWDAY: 6295.11,
              OPEN24HOUR: 7385.48,
              HIGH24HOUR: 7388.01,
              LOW24HOUR: 6290.62,
              LASTMARKET: 'Bitfinex',
              CHANGE24HOUR: -971.2799999999997,
              CHANGEPCT24HOUR: -13.151210212470954,
              CHANGEDAY: -290.8299999999999,
              CHANGEPCTDAY: -4.337489914288228,
              SUPPLY: 17252037,
              MKTCAP: 110658015725.4,
              TOTALVOLUME24H: 467855.9701371266,
              TOTALVOLUME24HTO: 3061061159.478903
            }
          }
        },
        DISPLAY: {
          BTC: {
            USD: {
              FROMSYMBOL: 'Ƀ',
              TOSYMBOL: '$',
              MARKET: 'CryptoCompare Index',
              PRICE: '$ 6,414.20',
              LASTUPDATE: 'Just now',
              LASTVOLUME: 'Ƀ 0.1563',
              LASTVOLUMETO: '$ 1,001.84',
              LASTTRADEID: '290328668',
              VOLUMEDAY: 'Ƀ 72,441.1',
              VOLUMEDAYTO: '$ 467,467,135.3',
              VOLUME24HOUR: 'Ƀ 163,652.5',
              VOLUME24HOURTO: '$ 1,109,839,184.3',
              OPENDAY: '$ 6,705.03',
              HIGHDAY: '$ 6,727.19',
              LOWDAY: '$ 6,295.11',
              OPEN24HOUR: '$ 7,385.48',
              HIGH24HOUR: '$ 7,388.01',
              LOW24HOUR: '$ 6,290.62',
              LASTMARKET: 'Bitfinex',
              CHANGE24HOUR: '$ -971.28',
              CHANGEPCT24HOUR: '-13.15',
              CHANGEDAY: '$ -290.83',
              CHANGEPCTDAY: '-4.34',
              SUPPLY: 'Ƀ 17,252,037.0',
              MKTCAP: '$ 110.66 B',
              TOTALVOLUME24H: 'Ƀ 467.86 K',
              TOTALVOLUME24HTO: '$ 3,061.06 M'
            }
          }
        }
      }
    };
    expect(
      currencies(
        {
          list: [
            {
              CoinInfo: {
                Id: '1182',
                Name: 'BTC',
                FullName: 'Bitcoin',
                Internal: 'BTC',
                ImageUrl: '/media/19633/btc.png',
                Url: '/coins/btc/overview',
                Algorithm: 'SHA256',
                ProofType: 'PoW',
                NetHashesPerSecond: 48156090445.7497,
                BlockNumber: 539823,
                BlockTime: 600,
                BlockReward: 12.5,
                Type: 1,
                DocumentType: 'Webpagecoinp'
              },
              ConversionInfo: {
                Conversion: 'direct',
                ConversionSymbol: '',
                CurrencyFrom: 'BTC',
                CurrencyTo: 'USD',
                Market: 'CCCAGG',
                Supply: 17247800,
                TotalVolume24H: 232575.36264903695,
                SubBase: '5~',
                SubsNeeded: ['5~CCCAGG~BTC~USD'],
                RAW: [
                  '5~CCCAGG~BTC~USD~4~7308.83~1536005949~0.03510293~256.00566849~50103942~37541.442861414~273462007.5710197~39861.67690666738~290411961.0072439~7301.26~7338.74~7204.89~7289.61~7346.37~7197.16~Coinbase~7ffe9'
                ]
              }
            }
          ]
        },
        action
      ).list[0].financialData.PRICE
    ).toEqual(action.payload.RAW.BTC.USD.PRICE);
  });

  it('should handle SORT_CURRENCIES_BY Name action', () => {
    const action = { type: SORT_CURRENCIES_BY, payload: { name: 'Name', direction: 0 } };
    expect(currencies(state, action).list[0].CoinInfo.Name).toEqual('ETH');
  });
  it('should handle FILTER_BY', () => {
    const action = { type: FILTER_BY, payload: { name: 'FullName', value: 'Bitcoin' } };
    expect(currencies(state, action).filtredList[action.payload.name]).toEqual(['BTC']);
  });
});
