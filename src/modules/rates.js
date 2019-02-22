// Exchange rate providers
import { getCoinrexRates } from '../providers/coinrex.js'
import { getBitsoRates } from '../providers/bitso.js'

var providerPromises = [
  getCoinrexRates(),
  getBitsoRates()
];

export const getRates = async function() {
  let rates = [];

  await Promise.all(providerPromises)
    .then((providerRates) => {
      rates = providerRates;
    })
  return rates;
}


