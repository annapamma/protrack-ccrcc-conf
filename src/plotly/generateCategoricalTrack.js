
/*
Input

sampleOrder: array of samples
sampleMeta: {sample: metaObj for each sample}
trackDetails: {track: entriesArray of track details}
track: track name

*/

/*
Output

Plotly trace group object (group of tracks)

{
    x: [...samples],
    y: [track],
    z: [...colorKeys],
    type: 'heatmap',
    colorscale,
    zmin,
    zmax,
    showscale: false,
    connectgaps: false,
    hoverongaps: true,
    autocolorscale: false,
}
 */

function generateCategoricalTrack(
  {
    sampleOrder,
    sampleMeta,
    trackDetails,
    track,
  }) 
  {
    let labelValue = {}
    let labelColor = {}

    trackDetails[track].forEach((el) => {
      const trackEntry = el
      if (trackEntry.value) {
        labelValue[trackEntry.label] = trackEntry.value
        labelColor[trackEntry.label] = trackEntry.color
      }
    })

    const z = sampleOrder.map(sample => 
      labelValue[sampleMeta[sample][track]]
    )

    return {
      x: [...sampleOrder],
      y: [track],
      z: [z],
      type: 'heatmap',
      connectgaps: false,
      hoverongaps: true,
      autocolorscale: false,
      hovertemplate: `%{y}<extra></extra>`,
      showscale: false,
      colorscale: Object
        .values(labelColor)
        .map((color, i) => {
            const opts = Object.keys(labelColor).length - 1
            return [i/opts, color]
        }),
      zmax: Math.max(...Object.values(labelValue)),
      zmin: Math.min(...Object.values(labelValue)),
    }
}

export default function generateCategoricalTrackGroup({
  sampleOrder,
  sampleMeta,
  trackDetails,
  tracks,
}) {
  return tracks
    .map((track) => {
      return generateCategoricalTrack({
        sampleOrder,
        sampleMeta,
        track,
        trackDetails,
      })
    })
}