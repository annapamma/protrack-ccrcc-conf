import trackDetails from "../refs/trackDetails"

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

    Object.entries(trackData).forEach(([s, val]) => {
      const sampleArr = s.split('-')
      const tumor = sampleArr[sampleArr.length - 1] === 'T'
      const sample = sampleArr.slice(0, 2).join('-')
      const x = samplesX[sample]
      if (tumor) {
        traceTumor.y.push(val)
        traceTumor.x.push(x)
      } else {
        traceNormal.y.push(val)
        traceNormal.x.push(x)
      }
    })

    let data = [traceTumor, traceNormal]
    
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
    }

    const config = {
      responsive: true
    }

    Plotly.newPlot(divId, data, layout, config);
}