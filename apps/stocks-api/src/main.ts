/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/
import { Server } from 'hapi';
import { STOCKS_API_CONST } from './constants/stocks-api.constant';
import { StockUtilClass } from '../src/utils/stock-api.utils';

const CatboxMemory = require('@hapi/catbox-memory');

const init = async () => {
  const stockUtilClass = new StockUtilClass();
  const server = new Server({
    port: STOCKS_API_CONST.THIRTY_THREE_THIRTY_THREE,
    cache: [
      {
        name: STOCKS_API_CONST.MY_CACHE,
        provider: {
          constructor: CatboxMemory,
        }
      }
    ],
    host: STOCKS_API_CONST.LOCAL_HOST,
    routes: {
      cors: true
    }
  });

  server.method(STOCKS_API_CONST.STOCK_CACHE, stockUtilClass.getStockData, {
    cache: {
      cache: STOCKS_API_CONST.MY_CACHE,
      expiresIn: STOCKS_API_CONST.TEN * STOCKS_API_CONST.THOUSAND,
      generateTimeout: STOCKS_API_CONST.TEN_THOUSAND
    }
  });

  server.route({
    method: STOCKS_API_CONST.GET,
    path: STOCKS_API_CONST.ROUTE_PATH,
    handler: async (request) => {
      const { symbol, period } = request.params;
      return await server.methods.stockCache(symbol, period);
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
