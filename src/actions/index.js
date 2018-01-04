import axios from 'axios'

export const FETCH_BANNER = 'FETCH_BANNER'
export const fetchBanner = (state, action) => {
  return {
    type: FETCH_BANNER,
      payload: BannerList()
  }
}

const BannerList = () => {
  const url_banner = 'http://172.104.50.9:3000/api/banner_lists'
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

