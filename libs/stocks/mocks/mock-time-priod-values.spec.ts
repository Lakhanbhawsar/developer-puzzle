/**
 * Mock data for Time period values
 * 
 */
import { ITimePeriod } from 'libs/stocks/interface/time-period.interface';

export const  MOCK_TIME_PERIOD_VALUES: ITimePeriod[] = 
  [
    { viewValue: 'All available data', value: 'max' },
    { viewValue: 'Five years', value: '5y' },
    { viewValue: 'Two years', value: '2y' },
    { viewValue: 'One year', value: '1y' },
    { viewValue: 'Year-to-date', value: 'ytd' },
    { viewValue: 'Six months', value: '6m' },
    { viewValue: 'Three months', value: '3m' },
    { viewValue: 'One month', value: '1m' }
  ];