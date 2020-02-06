import { PriceQueryResponse, PriceQuery } from './price-query.type';
import { map, pick } from 'lodash-es';
import { parse } from 'date-fns';

export function transformPriceQueryResponse(
  response: PriceQueryResponse[],
  startSelectedDate: string, endSelectedDate: string
): PriceQuery[] {
  return map(
    response.filter((values) => new Date(values.date) >= new Date(startSelectedDate) &&
      new Date(values.date) <= new Date(endSelectedDate)),
    responseItem =>
      ({
        ...pick(responseItem, [
          'date',
          'open',
          'high',
          'low',
          'close',
          'volume',
          'change',
          'changePercent',
          'label',
          'changeOverTime'
        ]),
        dateNumeric: parse(responseItem.date).getTime()
      } as PriceQuery)
  );
}
