import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PriceQueryFacade } from '@coding-challenge/stocks/data-access-price-query';
import { Subscription } from 'rxjs/internal/Subscription';
import { MOCK_TIME_PERIOD_VALUES } from 'libs/stocks/mocks/mock-time-priod-values.spec';
import { EStocks } from 'libs/stocks/enum/stocks.enum';
@Component({
  selector: 'coding-challenge-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  public stockPickerForm: FormGroup;
  public symbol: string;
  public period: string;
  public stocks: typeof EStocks = EStocks;
  private dataSubscription: Subscription;
  public quotes$ = this.priceQuery.priceQueries$;

  public timePeriods = MOCK_TIME_PERIOD_VALUES;

  constructor(private fb: FormBuilder, private priceQuery: PriceQueryFacade) {
    this.stockPickerForm = fb.group({
      symbol: [null, Validators.required],
      period: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.dataSubscription = this.stockPickerForm.valueChanges.subscribe(() => {
      this.fetchQuote();
    });
  }

  fetchQuote() {
    if (this.stockPickerForm.valid) {
      const { symbol, period } = this.stockPickerForm.value;
      this.priceQuery.fetchQuote(symbol, period);
    }
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
