import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StocksComponent } from './stocks.component';
import { StocksFeatureShellModule } from 'libs/stocks/feature-shell/src/lib/stocks-feature-shell.module';
import { StoreModule } from '@ngrx/store';
import { PriceQueryFacade } from '../../../../data-access-price-query/src/lib/+state/price-query.facade';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('StocksComponent', () => {
  let component: StocksComponent;
  let fixture: ComponentFixture<StocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StocksFeatureShellModule, StoreModule.forRoot({}), BrowserAnimationsModule],
      providers: [PriceQueryFacade]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
