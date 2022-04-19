import {Component, Input} from '@angular/core';
import {ChartOptions, ChartType} from "chart.js";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  @Input() recoveredPercent!: number
  @Input() deathPercent!: number

  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: function (tooltipItems, data) {
          return data.datasets![0].data![tooltipItems.index!] + ' %';
        }
      }
    },
  };
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartColors = [
    {
      backgroundColor: ['yellowgreen', 'pink'],
    },
  ];
}
