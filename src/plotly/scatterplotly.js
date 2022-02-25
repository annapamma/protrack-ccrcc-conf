export default function scatterplot({
  divId,
  sampleMeta,
  track,
  trackData,
  trackDetails,
  category,
}) {
    const Plotly = window.Plotly
    let data = []

    if (!trackData) { return }

    if (category && category !== 'None') {
      let k_sample_v_categoryLabel = {}
    
      Object.entries(sampleMeta).forEach(([sample, meta]) => {
        k_sample_v_categoryLabel[sample] = meta[category]
      })
  
      data = trackDetails[category].map((o) => {
        let x = []
        let y = []
        let samples = []
        trackData.samples.forEach((sample, i) => {
          if (k_sample_v_categoryLabel[sample] === o.label) {
            samples.push(sample)
            x.push(trackData.a[i])
            y.push(trackData.b[i])
          }
        })
        return {
          x,
          y,
          text: samples,
          mode: 'markers',
          type: 'scatter',
          marker: { 
            size: 8,
            color: o.color,
          },
          name: o.label.length > 0 ? o.label : 'Missing value',
        }
      })
    } else {

      const trace1 = {
        x: trackData.a,
        y: trackData.b,
        mode: 'markers',
        type: 'scatter',
        text: trackData.samples,
        marker: { size: 8 }
      }
      data = [ trace1 ]

    }

    
    const layout = {
      xaxis: {
        title: trackData.gene_a,
      },
      yaxis: {
        title: trackData.gene_b,
      },
      legend: {
        title: {text: category},
      },
      height: 400,
      title: `${track}<br>pearson correlation: ${trackData.correlation}`,
    }

    const config = {
      responsive: true
    }

    Plotly.newPlot(divId, data, layout, config);
}