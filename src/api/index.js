import axios from './axios-set'

// user
export const login = (data) => {
  return axios.put('/login', data)
}
export const register = (data) => {
  return axios.post('/register', data)
}
export const getUsers = (params) => {
  return axios.get('/users', {params})
}
export const getContacts = (params) => {
  return axios.get('/user/contacts', {params})
}
export const addContact = (data) => {
  return axios.post('/user/contacts', data)
}
export const removeContact = (data) => {
  return axios.delete('/user/contacts', {data})
}


// 品牌
export const getTopBrands = () => {
  return axios.get('car/brand/lists', {})
}
export const getBrands = (params) => {
  return axios.get('car/Brandlist/getBrandList', {params})
}
export const getFactories = (params) => {
  return axios.get('car/factory/lists', {params})
}
export const getSeriesListBrand = (params) => {
  return axios.get('car/car/serieslistbrand', {params})
}
export const getCarSearchHot = (params) => {
  return axios.get('car/car/searchHot', {params})
}
export const getSeriesTreeByTopBrand = (params) => {
  return axios.get('car/car/serieslistbybrand', {params})
}
export const getCarTags = (params) => {
  return axios.get('car/car/tagList', {params})
}
