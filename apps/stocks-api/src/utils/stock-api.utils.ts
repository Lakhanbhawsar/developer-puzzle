/**
 * StockUtilClass
 **/
import { environment } from '../environments/environment';

export class StockUtilClass {

  public axios = require('axios');

  public getStockData = async (symbol, period) => {
    try {
      const response = await this.axios.get(environment.apiURL + 'beta/stock/' + symbol + '/chart/' + period + '?token=' + environment.apiKey);
      return response.data;
    } catch (err) {
      return err;
    }
  };
}


