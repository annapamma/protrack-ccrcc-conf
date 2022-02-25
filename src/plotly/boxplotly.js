import trackDetails from "../refs/trackDetails"

export default function generateBoxplot({
    k_track_v_data,
    divId,
    responseCategory,
    sampleMeta,
    xAxisCategory,
    track,
}) {
    if (!k_track_v_data) { return }
    
    const Plotly = window.Plotly

    let category = xAxisCategory
    
    let xAxisSamples = {}
  
    Object.entries(sampleMeta).forEach(([sample, o]) => {
        let label = o[xAxisCategory]
        if (!(label in xAxisSamples)) {
            xAxisSamples[label] = []
        }
        xAxisSamples[label].push(sample)
    })

    const yAxisCategory = responseCategory
    let yAxisSamples = {}

    Object.entries(sampleMeta).forEach(([sample, o]) => {
        let label = o[yAxisCategory]
        if (!(label in yAxisSamples)) {
            yAxisSamples[label] = []
        }
        yAxisSamples[label].push(sample)
    })

    let data = trackDetails[xAxisCategory].map((o) => {
        const xSamples = xAxisSamples[o.label]
        let trace = {
          x: [],
          y: [],
          name: o.label.length > 0 ? o.label : 'Missing',
          marker: { color: o.label.length > 0 ? o.color : '#808080' },
          type: 'box',
        }

        trackDetails[yAxisCategory].forEach((yAxisOpt) => {
          const yLabel = yAxisOpt.label
          const ySamples = yAxisSamples[yLabel]
          const overlapSamples = ySamples.filter(ySample => xSamples.includes(ySample))
          overlapSamples.forEach((oSample) => {
            trace.x.push(yLabel.length > 0 ? yLabel : 'Missing')
            trace.y.push(k_track_v_data[track][oSample])
          })
        })

        return trace
      })
    
    let title = ''
    if (yAxisCategory !== xAxisCategory) {
      title = `${yAxisCategory}<br>stratified by<br>${xAxisCategory}`
    } else {
      title = yAxisCategory
    }

    const layout = {
      title: track,
      xaxis: {
        automargin: true,
        title,
      },
      yaxis: {
        title: '',
      },
      legend: {
        title: 'test?'
      },
      boxmode: category !== responseCategory ? 'group' : 'box',
    }

    const config = {
      responsive: true
    }

    Plotly.newPlot(divId, data, layout, config);
}