const controller = require('../../../src/api/weather/controller')
const DarkSkyClient = require('../../../src/api/weather/DarkSkyClient')
const sinon = require('sinon')

describe('Weather controller tests', () => {
  let sandbox
  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  test('should give Bad data error', async() => {
    sandbox.stub(DarkSkyClient.prototype, 'getWeatherByCoordinates').returns([{ random: 'data' }])
    try {
      await controller.getWeather(-1234, 1234)
    } catch (e) {
      expect(e.message).toEqual('Bad data')
    }
  })

  test('should return temperature, icon and summary', async() => {
    sandbox.stub(DarkSkyClient.prototype, 'getWeatherByCoordinates').returns({
      currently: {
        temperature: 1,
        icon: 'icon',
        summary: 'summary',
        extraData: 'random'
      }
    })
    const cityData = await controller.getWeather(-1234, 1234)
    expect(cityData).toEqual({
      temperature: 1,
      icon: 'icon',
      summary: 'summary' })
  })
})
