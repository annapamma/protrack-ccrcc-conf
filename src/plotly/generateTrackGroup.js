
/*
Input

tracks: array of objects
[
  {
    gene: str,
    data: {
      sampleId (str): zscore (float),
      ...
    }
  },
  ...
]
*/

/*
Output

Plotly trace group object (group of tracks)

{
    x: [...sampleIds],
    y: [...trackNamesAlphabetized],
    z: [...zScores],
    type: 'heatmap',
    hovertemplate: zScoreHoverTemplate,
    colorscale: colorscaleValueZscore,
    showscale: true,
    connectgaps: false,
    hoverongaps: true,
    autocolorscale: false,
    zmin:-3,
    zmax:3,
    colorbar: {
      title: '<b>zscore</b>',
        x: 1.00,
        thickness: 10,
        side: 'bottom',
    },
    title: 'zscore'
}
 */

import arr from './arr-stats'

import _ from 'lodash'

export default function generateTrackGroup({
  trackList,
  samples,
  k_track_v_data,
  i,
}) {
  trackList.reverse()

  const notMutTracks = trackList.filter(el => !el.includes(' mut'))
  // const mutTrackTitle = trackList.find(el => el.includes(' mut'))

  let k_track_v_normalizedData = {}


  notMutTracks
    .forEach((track) => {
      const raw_z_tumor = samples
        .map(sample => k_track_v_data[track][`${sample}-T`])
      const raw_z_normal = samples
        .map(sample => k_track_v_data[track][`${sample}-N`])
      const raw_z = [...raw_z_tumor, ...raw_z_normal]
        .filter(el => el && !(typeof el === 'string'))
      const z_scores = arr.zScores(raw_z)

      const zScoreDict = Object.fromEntries(raw_z.map((v, i) => [v, z_scores[i]]))
      const tumorKey = `${track} T`
      const normalKey = `${track} N`

      k_track_v_normalizedData[tumorKey] = createTissueObj({
        trackObj: k_track_v_data[track], 
        tissueStr: '-T',
        zScoreDict,
      })
      k_track_v_normalizedData[normalKey] = createTissueObj({
        trackObj: k_track_v_data[track], 
        tissueStr: '-N',
        zScoreDict,
      })
    })

  let finalTrackOrder = Object.keys(k_track_v_normalizedData)

  finalTrackOrder.sort()

  const z = finalTrackOrder.map(track => {
    return samples.map(sample => k_track_v_normalizedData[track][sample])
  })

  return {
      x: [...samples],
      y: [...finalTrackOrder],
      z: [...z],
      type: 'heatmap',
      colorscale: [
        [0.0, '#002CFE'],
        [1.0, '#FFFF00'],
      ],
      connectgaps: false,
      hoverongaps: true,
      hovertemplate: `%{y}<extra></extra>`,
      autocolorscale: false,
      hoverinfo:'text',
      zmin: -3,
      zmax: 3,
      colorbar: {
        title: '<b>z-score</b>',
        xref: 'paper',
        yref: 'paper',
        x: 1.01,
        y: 0.5,
        thickness: 10,
        side: 'bottom',
        len: 220,
        lenmode: 'pixels',
      },
      showscale: i === 0,
    }
}

function createTissueObj({
  trackObj,
  tissueStr,
  zScoreDict,
}) {
  return Object.fromEntries(Object.keys(trackObj)
    .filter(sample => sample.includes(tissueStr))
    .map(sample => [
        sample.split(tissueStr)[0], 
        zScoreDict[trackObj[sample]]
      ]
    )
  )
}