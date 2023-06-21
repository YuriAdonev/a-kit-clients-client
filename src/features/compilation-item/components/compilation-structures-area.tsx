import {FC, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Chart from "react-apexcharts"
import {
  getCompilationItemCalculatedIndicators,
  getCompilationItemStructuralCondition
} from "../../../features/compilation-item/compilation-item.selectors";
import {CompilationStructuresItem} from "./compilation-structures-item";
import {CompilationStructuresList} from "./compilation-structures-list";
import {ApexOptions} from "apexcharts";

type PropsType = {
  compilation: any
  reloadData: () => void
}

export const CompilationStructuresArea: FC<PropsType> = ({ compilation, reloadData }) => {
  const options: ApexOptions = {
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return val.toFixed(1) + "%"
      },
      style: {
        fontSize: '14px',
        // fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'normal',
      },
      textAnchor: "start"
    },
    colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
    legend: {
      show: false
    },
    tooltip: {
      enabled: false
    },
    chart: {
      events: {
        dataPointMouseEnter: function(event, chartContext, config) {
          // ...
        }
      }
    }
  }

  return (
    <div className="compilation-structures">
      <h2 className="compilation-structures__title">Структура предложений в разрезе площади</h2>
      <div className="compilation-structures__wrap">
        <CompilationStructuresList name={'area'} compilation={compilation} reloadData={reloadData} />
        {compilation.structuralCondition.area.length > 1 && (
          <div className="compilation-structures__chart">
            <Chart
              options={options}
              series={compilation.structuralCondition.area.map((it: any) => it.count)}
              type="pie"
              width="240"
            />
          </div>
        )}
      </div>
    </div>
  )
}
