const axios = require('axios');

export const getCoinrexRates = async function() {
  const { data: exchangeRateData } = await axios.get(
    'https://api.coinrex.io/v1/markets/stats'
  );

  const { data } = exchangeRateData

  return {
    provider: 'coinrex',
    BTC: data.stats.BTC.last_price,
    ETH: data.stats.ETH.last_price,
    XRP: data.stats.XRP.last_price,
  };
};
