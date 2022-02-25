import axios from 'axios'

import firebase from 'firebase/app'
import { initializeApp } from 'firebase/database'

const env = process.env
const cohort = env.VUE_APP_COHORT

const firebaseConfig = {
    apiKey: env.VUE_APP_API_KEY,
    authDomain: env.VUE_APP_AUTH_DOMAIN,
    databaseURL: env.VUE_APP_DB_URL,
    projectId: env.VUE_APP_PROJECT_ID,
    storageBucket: env.VUE_APP_STORAGE_BUCKET,
};

firebase.initializeApp(firebaseConfig)  

export const getTracks = async (gene) => {
    if (gene.length === 0) {
        return []
    }

    const path = `protrack/${cohort}/k_gene_v_tracks/${gene}`
    const ref = firebase.database().ref(path)
    const series = await ref.once('value')
        .then((snapshot) => {
            return snapshot.val()
        })
    return [gene, series]
}

export const getTrackData = async (track) => {
    if (!track || track.length === 0) {
        return [track, {}]
    }

    const path = `protrack/${cohort}/k_track_v_data/${track}`
    const ref = firebase.database().ref(path)
    const series = await ref.once('value')
        .then((snapshot) => {
            return snapshot.val()
        })
    return [track, series]
}

export const getClinicalTracks = async() => {
    const path = `protrack/${cohort}clinicalAttributes`
    const ref = firebase.database().ref(path)
    return await ref.once('value')
          .then((snapshot) => {
              return snapshot.val()
          })
}

export const getScatterPlotTracks = async(a, b) => {
    let apiRoot = ''
    if (process.env.NODE_ENV === 'development') {
      apiRoot = 'http://127.0.0.1:5000';
    }
    return await axios.get(
        `${apiRoot}/api/table/${a}/${b}`,
      ).then(
        ({ data }) => {
          return data
        },
      ).catch(
        (e) => {
          console.error('FetchError: ', e.message);
        },
      );
}
