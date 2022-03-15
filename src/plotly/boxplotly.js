// import trackDetails from "../refs/trackDetails"
import ttest from 'ttest'
// ttest = require('ttest')
// import { ttest } from 'jstat'

export default function generateBoxplot({
    k_track_v_data,
    divId,
    sampleMeta,
    xAxisCategory,
    track,
}) {
    if (!k_track_v_data) { return }
    
    const Plotly = window.Plotly

    let category = xAxisCategory
    
    let samplesX = {}
  
    Object.entries(sampleMeta).forEach(([sample, o]) => {
        let label = o[category]
        samplesX[sample] = label
    })

    const trackData = k_track_v_data[track]
    let traceTumor = {
      x: [],
      y: [],
      name: 'Tumor',
      marker: {color: '#1E88E5'},
      type: 'box',
      boxpoints: 'all',
      pointpos: 0,
    }
    let traceNormal = {
      x: [],
      y: [],
      name: 'Normal',
      marker: {color: '#FFC107'},
      type: 'box',
      boxpoints: 'all',
      pointpos: 0,
    }
    
    const ttestObj = {}

    Object.entries(trackData).forEach(([s, val]) => {
      const sampleArr = s.split('-')
      const tumor = sampleArr[sampleArr.length - 1] === 'T'
      const sample = sampleArr.slice(0, 2).join('-')
      const x = samplesX[sample]
      if (!(x in ttestObj)) {
        ttestObj[x] = {
          tumor: [],
          normal: []
        }
      }
      if (tumor) {
        traceTumor.y.push(val)
        traceTumor.x.push(x)
        ttestObj[x].tumor.push(val)
      } else {
        traceNormal.y.push(val)
        traceNormal.x.push(x)
        ttestObj[x].normal.push(val)
      }
    })

    let data = [traceTumor, traceNormal]
    // let annotations = []

    let annotations = Object.entries(ttestObj).map(([xVal, o]) => {
      const tumorVals = o.tumor.filter(el => el.toString().length > 0)
      const normalVals = o.normal.filter(el => el.toString().length > 0)
      const t_res = ttest(tumorVals, normalVals)
      let pVal = null
      const confidenceInterval = t_res.confidence()
        .map(el =>  Math.round((el + Number.EPSILON) * 10000) / 10000)
      const pValIsSmall = t_res.pValue() < .0001 
      if (pValIsSmall) {
        let expStrArr = t_res.pValue().toExponential().split('e')
        let exp = expStrArr[expStrArr.length - 1]
        let mag = expStrArr[0].substring(0, 4)
        pVal = `${mag}e${exp}`
      } else {
        const roundedVal = Math.round((t_res.pValue() + Number.EPSILON) * 10000) / 10000
        pVal = roundedVal.toString()
      }
      console.log('ttestobj',track, tumorVals, normalVals)
      return {
        xref: 'x',
        yref: 'paper',
        x: xVal,
        y: 1,
        yanchor: 'bottom',
        text: `p = ${pVal}`,
        showarrow: false
      }
    })



      

    const layout = {
      title: track,
      xaxis: {
        automargin: true,
        title: xAxisCategory,
      },
      yaxis: {
        title: '',
      },
      legend: {
        title: 'test?'
      },
      boxmode: 'group',
      annotations,
    }

    const config = {
      responsive: true
    }

    Plotly.newPlot(divId, data, layout, config);
}