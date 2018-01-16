import axios from 'axios'

const BASE_API_URL = 'http://172.104.50.9:3000/api'

export const FETCH_BANNER = 'FETCH_BANNER'
export const fetchBanner = () => {
  return {
    type: FETCH_BANNER,
      payload: BannerList()
  }
}

const BannerList = () => {
  const url_banner = `${BASE_API_URL}/banner_lists`
    return axios.get(url_banner)
        .then(res => {
          console.log(res)
            return res
        })
        .catch(err => {
          console.log(err)
            return err
        })
}

export const  FETCH_DESTINATIONS = 'FETCH_DESTINATIONS'
export const fetchDestinations = () => {
    return {
        type: FETCH_DESTINATIONS,
        payload: DestinationsList()
    }
}

const DestinationsList = () => {
    const url_destinations = `${BASE_API_URL}/destination_lists`
    return axios.get(url_destinations)
        .then(res => {
            console.log(res)
            return res
        })
        .catch(err => {
            console.log(err)
            return err
        })
}

export const  FETCH_REVIEWERS = 'FETCH_REVIEWERS'
export const fetchReviewers = () => {
    return {
        type: FETCH_REVIEWERS,
        payload: ReviewersList()
    }
}

const ReviewersList = () => {
    const url_destinations = `${BASE_API_URL}/reviewer_lists`
    return axios.get(url_destinations)
        .then(res => {
            console.log(res)
            return res
        })
        .catch(err => {
            console.log(err)
            return err
        })
}
