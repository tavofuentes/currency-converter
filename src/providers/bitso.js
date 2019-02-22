const axios = require('axios');

function getBTC() {
  return axios.get('https://api.bitso.com/v3/ticker/?book=btc_mxn');
}

function getETH() {
  return axios.get('https://api.bitso.com/v3/ticker/?book=eth_mxn');
}

function getXRP() {
  return axios.get('https://api.bitso.com/v3/ticker/?book=xrp_mxn');
}

export const getBitsoRates = async function() {
  let response = {
    provider: 'bitso'
  }

  await axios.all([getBTC(), getETH(), getXRP()])
    .then(axios.spread(function (...args) {
      args.forEach(currency => {
        const currencyShortName = currency.data.payload.book.slice(0,3).toUpperCase();
        response[currencyShortName] = currency.data.payload.last;
      });
    }));
  return response;
};
