const l = (arg) => console.log(arg)

export const state = () => ({
  tempUnit: 'celcius'
})

export const mutations = {
  changeUnit (state, unit) {
    state.tempUnit = unit
    l(unit)
  },
  changeDegree (state, degree) {}
}

export const actions = {
  nuxtServerInit () {}
}
