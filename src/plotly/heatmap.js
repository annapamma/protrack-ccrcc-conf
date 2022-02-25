import fillerObj from "./fillerObj"
import generateCategoricalTrackGroup from "./generateCategoricalTrack"
import generateContinuousTrack from "./generateContinuousTrack"
import generateLayout from './layout/generateLayout'
import generateTrackGroup from './generateTrackGroup'


export default function generateHeatmap(
  {
    categoryTracks,
    k_gene_v_tracks,
    k_track_v_data,
    sampleMeta,
    sampleOrder,
    // shownDataTypes,
    trackDetails
  }
) {
    if (!sampleMeta) { return }

    const Plotly = window.Plotly
    let molecular = []

    let categorical = []

    Object.entries(categoryTracks)
      .filter(([category,]) => category !== 'Numerical')
      .forEach(([category, tracks], i) => {
        if (tracks.length === 0) { return }
        categorical = [
          ...categorical, 
          ...generateCategoricalTrackGroup({
            sampleOrder,
            sampleMeta,
            trackDetails,
            tracks,
          }),
          fillerObj({
            i: i+1,
            samples: sampleOrder,
            marker: '-',
          })
        ]
      }
    )

    categorical.reverse()

    const continuousClinical = [
      ...generateContinuousTrack({
        numericalTracks: categoryTracks.Numerical,
        sampleOrder,
        sampleMeta,
      }),
      fillerObj({
        i: 1,
        samples: sampleOrder,
        marker: '#',
      })
    ]
        
    continuousClinical.flat()
    continuousClinical.reverse()
    if (k_gene_v_tracks && k_track_v_data) {
      molecular = Object.entries(k_gene_v_tracks)
        .map(([gene, trackList], i) => {
          const filteredTracks = trackList
              // const filteredTracks = trackList.filter(track => {
              //     const trackArr = track.split(' ')
              //     const trackDataType = trackArr[1]
              //     return shownDataTypes.includes(trackDataType)
              // }
            // )
              return [                
                  fillerObj({
                          i: i+1,
                          samples: sampleOrder,
                          marker: '*'
                      }),
                  generateTrackGroup({
                      label: gene,
                      trackList: [...filteredTracks],
                      samples: sampleOrder,
                      i,
                      k_track_v_data,
                      normalize: true,
                  })
              ] 
        })
        .flat()
    }

    let data = [
      ...molecular,
      ...continuousClinical,
      ...categorical,
    ]

    data.forEach((track) => {
      if (track) {
          track.z.splice(0,0,[])
          track.y.splice(0,0,'')
      }
    })

    const layout = generateLayout(data)

    const config = { 
        repsonsive: true,
        displaylogo: false,
    }

    Plotly.newPlot('plotly-heatmap', data, layout, config);

    return document.getElementById('plotly-heatmap')
}