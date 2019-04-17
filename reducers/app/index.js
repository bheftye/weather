import Immutable from 'immutable'
const initialState = Immutable.fromJS({
  loading: false,
  cities:[
    {name: 'Stockholm,se'},
    {name: 'Bengaluru,in'},
    {name: 'Nairobi,ke'}
  ],
  citiesWeather: []
})

export default (state = initialState, action) => {
  switch (action.type){
    default:
      return state
  }
}
