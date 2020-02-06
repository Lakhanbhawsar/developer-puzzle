import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StocksComponent } from './stocks.component';
import { StocksFeatureShellModule } from 'libs/stocks/feature-shell/src/lib/stocks-feature-shell.module';
import { StoreModule } from '@ngrx/store';
import { PriceQueryFacade } from '../../../../data-access-price-query/src/lib/+state/price-query.facade';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Validators, FormBuilder } from '@angular/forms';

describe('StocksComponent', () => {
  let component: StocksComponent;
  let fixture: ComponentFixture<StocksComponent>;
  let priceQueryFacade: PriceQueryFacade;
  const formBuilder: FormBuilder = new FormBuilder();
  const MockValuePriceQuery = {
    fetchQuote: jest.fn()
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StocksFeatureShellModule, StoreModule.forRoot({}), BrowserAnimationsModule],
      providers: [{ provide: PriceQueryFacade, useValue: MockValuePriceQuery },
      { provide: FormBuilder, useValue: formBuilder }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksComponent);
    component = fixture.debugElement.componentInstance;
    priceQueryFacade = fixture.debugElement.injector.get(PriceQueryFacade);
    component.stockPickerForm = formBuilder.group({
      symbol: ['AAPL', Validators.required],
      period: ['1y', Validators.required]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke fetchQuote', () => {
    const symbol = 'AAPL';
    const period = '1y';
    spyOn(priceQueryFacade, 'fetchQuote').and.stub();
    component.fetchQuote();
    expect(priceQueryFacade.fetchQuote).toHaveBeenCalledTimes(1);
    expect(priceQueryFacade.fetchQuote).toHaveBeenLastCalledWith(symbol, period);
  });

});
 