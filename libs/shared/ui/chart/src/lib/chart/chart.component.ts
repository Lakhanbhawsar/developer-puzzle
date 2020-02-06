import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { CHART_CONSTANT } from 'libs/shared/ui/chart/src/lib/constants/chart.constant';
import { IChartOption } from 'libs/shared/ui/chart/src/lib/Interfaces/chart-option.interface';
import { IChartDataArray } from 'libs/shared/ui/chart/src/lib/Interfaces/chart-data.interface';

@Component({
  selector: 'coding-challenge-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() data$: IChartDataArray[][];

  chart: {
    title: string;
    type: string;
    data: IChartDataArray[][];
    columnNames: string[];
    options: IChartOption;
  };
  constructor() {}

  ngOnInit() {
    this.chart = {
      title: '',
      type: CHART_CONSTANT.LINE_CHART,
      data: [],
      columnNames: [CHART_CONSTANT.PERIOD, CHART_CONSTANT.CLOSE],
      options: {
        title: CHART_CONSTANT.STOCK_PRICE,
        width: CHART_CONSTANT.SIX_HUNDRED,
        height: CHART_CONSTANT.FOUR_HUNDRED
      }
    };
  }
}
