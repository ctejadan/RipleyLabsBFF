const controller = require('../../../src/api/coordinates/controller')
const OpenStreetMapClient = require('../../../src/api/coordinates/OpenStreetMapClient')
const sinon = require('sinon')

describe('Coordinates controller tests', () => {
  let sandbox
  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  test('should give Bad data error', async() => {
    sandbox.stub(OpenStreetMapClient.prototype, 'getCoordinatesByCity')
      .returns([{ random: 'data' }])
    try {
      await controller.byCity('santiago')
    } catch (e) {
      expect(e.message).toEqual('Bad data')
    }
  })

  test('should return lat and lng', async() => {
    sandbox.stub(OpenStreetMapClient.prototype, 'getCoordinatesByCity').returns([{ place_id: 227569,
      licence:
        'Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright',
      osm_type: 'node',
      osm_id: 50016356,
      boundingbox:
        [ '-33.5977968', '-33.2777968', '-70.8104451', '-70.4904451' ],
      lat: '-33.4377968',
      lon: '-70.6504451',
      display_name:
        'Santiago, Provincia de Santiago, Región Metropolitana de Santiago, 8320000, Chile',
      class: 'place',
      type: 'city',
      importance: 0.7298211827753,
      icon:
        'https://nominatim.openstreetmap.org/images/mapicons/poi_place_city.p.20.png' }])
    const cityData = await controller.byCity('santiago')
    expect(cityData).toEqual({ lat: '-33.4377968', lng: '-70.6504451' })
  })
})
