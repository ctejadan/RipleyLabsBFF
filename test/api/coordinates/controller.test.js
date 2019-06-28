const controller = require('../../../src/api/coordinates/controller')
const sinon = require('sinon')

describe('Controller coordinate test', () => {
  let sandbox
  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  test('should respond empty order', async() => {
    sandbox.stub(axios.prototype, 'request').returns({ 'hola': 'torola' })
    await expect(controller.getOrder('someToken')).rejects.toEqual(new Error('Fake error'))
  })

  test('should give discount colaborator', async() => {
    sandbox.stub(OrderClient.prototype, 'getOrderByToken').returns(unpaidOrder)
    sandbox.stub(UserInfoController, 'getUserInfo').returns({
      'rut': '11',
      'email': 'some@email.com',
      'firstName': 'marquito',
      'lastName': 'mendoza',
      'mobileNumber': '965972918',
      'employee': true,
      'addresses': [
        {
          'id': '51290027',
          'label': 'casa1',
          'street': 'CALLE LAS HUALTATAS',
          'number': '6131',
          'aptOrOffice': '14B',
          'commune': {
            'name': 'VITACURA',
            'srmsId': 334
          },
          'region': {
            'name': 'METROPOLITANA DE SANTIAGO',
            'srmsId': 13,
            'omsId': 'RM'
          },
          'position': {
            'latitude': '-33.39458573980421',
            'longitude': '-70.57156225049093'
          }
        },
        {
          'id': '51290028',
          'label': 'casa2',
          'street': 'CALLE LAS HUALTATAS',
          'number': '6132',
          'aptOrOffice': null,
          'commune': {
            'name': 'VITACURA',
            'srmsId': 334
          },
          'region': {
            'name': 'METROPOLITANA DE SANTIAGO',
            'srmsId': 13,
            'omsId': 'RM'
          },
          'position': {
            'latitude': '-33.39433588236573',
            'longitude': '-70.57167836757421'
          }
        },
        {
          'id': '51390007',
          'label': 'casa campo',
          'street': 'CALLE ESMERALDA',
          'number': '123',
          'aptOrOffice': null,
          'commune': {
            'name': 'ALHUE',
            'srmsId': 212
          },
          'region': {
            'name': 'METROPOLITANA DE SANTIAGO',
            'srmsId': 13,
            'omsId': 'RM'
          },
          'position': {
            'latitude': '-34.03122839630836',
            'longitude': '-71.10085409218394'
          }
        },
        {
          'id': '51290029',
          'label': 'casa3',
          'street': 'CALLE LAS HUALTATAS',
          'number': '6133',
          'aptOrOffice': '1412',
          'commune': {
            'name': 'VITACURA',
            'srmsId': 334
          },
          'region': {
            'name': 'METROPOLITANA DE SANTIAGO',
            'srmsId': 13,
            'omsId': 'RM'
          },
          'position': {
            'latitude': '-33.39457139481547',
            'longitude': '-70.57153138335201'
          }
        }
      ],
      'bankAccount': {
        'accountHolderName': 'marco espino',
        'accountHolderRut': '167681395',
        'bankName': 'BANCOESTADO',
        'accountType': 'Cuenta Vista',
        'accountNumber': '16768139'
      }
    })

    const orderCalculated = await controller.getOrderToCalculate('someorder', 'some@email.com', '1-1')
    expect(orderCalculated).toEqual({
      'token': 'd277f18a49ea7521d55bebfd27cd01d352ab7e88',
      'appId': 'BuySmart',
      'price': {
        'subTotal': 89990,
        'total': 84481,
        'totalTLMC': 84481,
        'totalTLMCWithDiscount': 84481,
        'dispatchCost': 3490
      },
      'shippingGroups': [{
        'products': [{
          'specifications': [{
            'name': 'Descripción',
            'order': 1,
            'value': 'Minicomponente BT / OM4560'
          }, { 'name': 'Producto', 'order': 2, 'value': 'Minicomponente' }, {
            'name': 'Marca',
            'order': 3,
            'value': 'LG'
          }, { 'name': 'Modelo', 'order': 4, 'value': 'OM4560' }, {
            'name': 'Color',
            'order': 5,
            'value': 'Negro'
          }, { 'name': 'Potencia', 'order': 6, 'value': '220 W' }, {
            'name': 'Sintonizador',
            'order': 7,
            'value': 'FM'
          }, {
            'name': 'Formatos Reproducibles',
            'order': 8,
            'value': 'MP3 / CD / WMA / CD-R / CD-RW'
          }, { 'name': 'Conectividad', 'order': 9, 'value': 'Bluetooth / USB / Entrada AUX' }, {
            'name': 'Bluetooth',
            'order': 10,
            'value': 'Sí'
          }, { 'name': 'Alto', 'order': 11, 'value': '31.1 cm' }, {
            'name': 'Ancho',
            'order': 12,
            'value': '44.3 cm'
          }, { 'name': 'Profundidad', 'order': 13, 'value': '30.2 cm' }, {
            'name': 'Peso',
            'order': 14,
            'value': '7.5 Kg.'
          }, { 'name': 'Garantía', 'order': 15, 'value': '1 Año' }],
          '_id': '5c9ac013ac7d4100cda80037',
          'available': true,
          'ID': 'PROD_869731',
          'sku': 869731,
          'displayName': 'Minicomponente OM4560',
          'itemNumber': '618673',
          'destacado': false,
          'max': 10,
          'color': 'No especifica',
          'posicion': 18,
          'gtin13': '7800103113552',
          'vendorId': null,
          'leadTime': null,
          'keyword': [],
          'makePublic': true,
          'price': {
            'total': 80991,
            'totalTLMC': null,
            'BasePriceReference': 99990,
            'BasePriceSales': 89990,
            'BasePriceTLMC': null
          },
          'categorias': 'Equipos de Audio|Equipos de Música',
          'size': 1,
          'campaignId': 'blackcyber',
          'appId': 'BuySmart',
          'longDescription': '',
          '__v': 0,
          'filters': [{ 'Producto': 'Minicomponente' }, { 'Marca': 'LG' }, { 'Modelo': 'OM4560' }, { 'Color': 'Negro' }, { 'Potencia': '220 W' }, { 'Sintonizador': 'FM' }, { 'Formatos Reproducibles': 'MP3 / CD / WMA / CD-R / CD-RW' }, { 'Conectividad': 'Bluetooth / USB / Entrada AUX' }],
          'etiqueta': null,
          'disponibleSupermercado': false,
          'peso': 'No especifica',
          'stockInicial': 0,
          'carouselId': 1,
          'quantity': 1,
          'imageUrl': 'https://images.lider.cl/wmtcl?set=imageSize[carousel],imageURL[file:/productos/869731a.jpg],options[progressive]&call=url[file:catalog/sizing.chain]&sink=format[jpg],options[progressive]',
          'type': 'onHand',
          'hasInventory': true,
          'id': 'PROD_869731',
          'name': 'LG',
          'description': 'Minicomponente OM4560',
          'stockReserved': 1
        }],
        '_id': { '$oid': '5cfebeacdfae7200555e33aa' },
        'shippingGroupId': '50000001863',
        'imsReserved': {
          'orderId': 'o50000002903',
          'orderStatus': 'Reserved',
          'storeId': '6014',
          'shipGrpList': [{
            'shipGrpId': 'sg50000001863',
            'productList': [{
              'productId': '869731',
              'inventoryList': [{
                'itemId': '618673',
                'upc': '7800103113552',
                'inventoryType': 'in-store',
                'quantity': 1
              }]
            }]
          }]
        },
        'type': 'onHand',
        'vendorId': null,
        'price': { 'total': 80991, 'totalTLMC': 80991, 'totalTLMCWithDiscount': 80991 },
        'delivery': { 'shipVia': 'ATENA_RM', 'name': 'ATENA', 'id': 7, 'serviceLevel': 'Normal' },
        'getSlots': {
          'Id': '50000001863',
          'size': '1',
          'links': [{
            'link': {
              'stores': [{
                'store': {
                  'id': '6014',
                  'type': 'DC',
                  'capability': 'picking'
                }
              }, { 'store': { 'id': '6014', 'type': 'DC', 'capability': 'delivery' } }],
              'carrier': { 'id': '0', 'name': 'NA', 'serviceLevel': '', 'shipVia': 'NA' }
            }
          }],
          'delivery': {
            'stores': [{
              'store': {
                'id': '6014',
                'type': 'DC',
                'carriers': [{
                  'carrier': {
                    'shipVia': 'ATENA_RM',
                    'slots': [{
                      'slot': {
                        'date': '12-06-2019',
                        'surcharge': 0,
                        'cost': 3490,
                        'shift': { 'date': '11-06-2019', 'startTime': 1500, 'id': 169096, 'endTime': 2100 },
                        'startTime': '0910',
                        'id': 1259310,
                        'endTime': 2100
                      }
                    }, {
                      'slot': {
                        'date': '13-06-2019',
                        'surcharge': 0,
                        'cost': 3490,
                        'shift': { 'date': '12-06-2019', 'startTime': 1500, 'id': 169098, 'endTime': 2100 },
                        'startTime': '0910',
                        'id': 1259311,
                        'endTime': 2100
                      }
                    }, {
                      'slot': {
                        'date': '14-06-2019',
                        'surcharge': 0,
                        'cost': 3490,
                        'shift': { 'date': '13-06-2019', 'startTime': 1500, 'id': 169100, 'endTime': 2100 },
                        'startTime': '0910',
                        'id': 1259312,
                        'endTime': 2100
                      }
                    }, {
                      'slot': {
                        'date': '15-06-2019',
                        'surcharge': 0,
                        'cost': 3490,
                        'shift': { 'date': '14-06-2019', 'startTime': 1500, 'id': 169102, 'endTime': 2100 },
                        'startTime': '0910',
                        'id': 1259313,
                        'endTime': 2100
                      }
                    }, {
                      'slot': {
                        'date': '17-06-2019',
                        'surcharge': 0,
                        'cost': 3490,
                        'shift': { 'date': '15-06-2019', 'startTime': 1500, 'id': 169104, 'endTime': 2100 },
                        'startTime': '0910',
                        'id': 1259314,
                        'endTime': 2100
                      }
                    }, {
                      'slot': {
                        'date': '18-06-2019',
                        'surcharge': 0,
                        'cost': 3490,
                        'shift': { 'date': '17-06-2019', 'startTime': 1500, 'id': 169106, 'endTime': 2100 },
                        'startTime': '0910',
                        'id': 1259315,
                        'endTime': 2100
                      }
                    }, {
                      'slot': {
                        'date': '19-06-2019',
                        'surcharge': 0,
                        'cost': 3490,
                        'shift': { 'date': '18-06-2019', 'startTime': 1500, 'id': 169108, 'endTime': 2100 },
                        'startTime': '0910',
                        'id': 1259316,
                        'endTime': 2100
                      }
                    }, {
                      'slot': {
                        'date': '20-06-2019',
                        'surcharge': 0,
                        'cost': 3490,
                        'shift': { 'date': '19-06-2019', 'startTime': 1500, 'id': 169110, 'endTime': 2100 },
                        'startTime': '0910',
                        'id': 1259317,
                        'endTime': 2100
                      }
                    }, {
                      'slot': {
                        'date': '21-06-2019',
                        'surcharge': 0,
                        'cost': 3490,
                        'shift': { 'date': '20-06-2019', 'startTime': 1500, 'id': 169112, 'endTime': 2100 },
                        'startTime': '0910',
                        'id': 1259318,
                        'endTime': 2100
                      }
                    }, {
                      'slot': {
                        'date': '22-06-2019',
                        'surcharge': 0,
                        'cost': 3490,
                        'shift': { 'date': '21-06-2019', 'startTime': 1500, 'id': 169114, 'endTime': 2100 },
                        'startTime': '0910',
                        'id': 1259319,
                        'endTime': 2100
                      }
                    }, {
                      'slot': {
                        'date': '24-06-2019',
                        'surcharge': 0,
                        'cost': 3490,
                        'shift': { 'date': '22-06-2019', 'startTime': 1500, 'id': 169116, 'endTime': 2100 },
                        'startTime': '0910',
                        'id': 1259320,
                        'endTime': 2100
                      }
                    }, {
                      'slot': {
                        'date': '25-06-2019',
                        'surcharge': 0,
                        'cost': 3490,
                        'shift': { 'date': '24-06-2019', 'startTime': 1500, 'id': 169118, 'endTime': 2100 },
                        'startTime': '0910',
                        'id': 1259321,
                        'endTime': 2100
                      }
                    }, {
                      'slot': {
                        'date': '26-06-2019',
                        'surcharge': 0,
                        'cost': 3490,
                        'shift': { 'date': '25-06-2019', 'startTime': 1500, 'id': 169120, 'endTime': 2100 },
                        'startTime': '0910',
                        'id': 1259322,
                        'endTime': 2100
                      }
                    }, {
                      'slot': {
                        'date': '27-06-2019',
                        'surcharge': 0,
                        'cost': 3490,
                        'shift': { 'date': '26-06-2019', 'startTime': 1500, 'id': 169122, 'endTime': 2100 },
                        'startTime': '0910',
                        'id': 1259323,
                        'endTime': 2100
                      }
                    }, {
                      'slot': {
                        'date': '28-06-2019',
                        'surcharge': 0,
                        'cost': 3490,
                        'shift': { 'date': '27-06-2019', 'startTime': 1500, 'id': 169124, 'endTime': 2100 },
                        'startTime': '0910',
                        'id': 1259324,
                        'endTime': 2100
                      }
                    }, {
                      'slot': {
                        'date': '29-06-2019',
                        'surcharge': 0,
                        'cost': 3490,
                        'shift': { 'date': '28-06-2019', 'startTime': 1500, 'id': 169126, 'endTime': 2100 },
                        'startTime': '0910',
                        'id': 1259325,
                        'endTime': 2100
                      }
                    }, {
                      'slot': {
                        'date': '01-07-2019',
                        'surcharge': 0,
                        'cost': 3490,
                        'shift': { 'date': '29-06-2019', 'startTime': 1500, 'id': 169128, 'endTime': 2100 },
                        'startTime': '0910',
                        'id': 1259326,
                        'endTime': 2100
                      }
                    }],
                    'name': 'ATENA',
                    'id': 7,
                    'serviceLevel': 'Normal'
                  }
                }]
              }
            }]
          }
        },
        'state': '13',
        'cost': 3490,
        'personWhoReceives': '',
        'slotWindowReserved': {
          'shippingGroupId': '50000001863',
          'size': '1',
          'links': [{
            'link': {
              'stores': [{
                'store': {
                  'id': '6014',
                  'type': 'DC',
                  'capability': 'picking'
                }
              }, { 'store': { 'id': '6014', 'type': 'DC', 'capability': 'delivery' } }],
              'carrier': { 'id': '0', 'name': 'NA', 'serviceLevel': '', 'shipVia': '' }
            }
          }],
          'stores': [{
            'store': {
              'id': '6014',
              'type': 'DC',
              'slots': [{
                'slot': {
                  'id': '1259314',
                  'date': '17-06-19',
                  'startTime': '0910',
                  'endTime': '2100',
                  'shift': { 'id': '169104', 'date': '15-06-19', 'startTime': '1500', 'endTime': '2100' }
                }
              }]
            }
          }],
          'status': 'Slot is reserved.'
        }
      }],
      'employee': true,
      'TLMCDiscountApplied': false,
      'discounts': [{ 'label': 'Descuento Colaborador', 'amount': 8999, 'showSparkle': true }],
      'paymentData': { 'paymentTrackingData': { 'RUT': '1-1', 'email': 'some@email.com' } }
    }
    )
  })
})
