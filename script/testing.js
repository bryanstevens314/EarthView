const obj = {
  '@targetNamespace': 'http://sscweb.gsfc.nasa.gov/schema',
  '@elementFormDefault': 'qualified',
  element: [
    {
      '@name': 'GroundStationResponse',
      '#text': '...'
    },
    {
      '@name': 'ObservatoryResponse',
      '#text': '...'
    },
    {
      '@name': 'Request',
      '#text': '...'
    },
    {
      '@name': 'LocationRequest',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'SSC location request.'
        }
      }
    },
    {
      '@name': 'DataRequest',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'SSC data request.'
        }
      },
      complexType: {
        complexContent: {
          extension: {
            '@base': 'LocationRequest',
            sequence: {
              element: [
                {
                  '@name': 'OutputOptions',
                  '@minOccurs': '1',
                  '@maxOccurs': '1',
                  annotation: {
                    documentation: {
                      '@lang': 'en',
                      '#text': 'Output options.'
                    }
                  }
                },
                {
                  '@name': 'RegionFilterOptions',
                  '@minOccurs': '0',
                  '@maxOccurs': '1',
                  annotation: {
                    documentation: {
                      '@lang': 'en',
                      '#text': 'Region filter options.'
                    }
                  }
                },
                {
                  '@name': 'LocationFilterOptions',
                  '@minOccurs': '0',
                  '@maxOccurs': '1',
                  annotation: {
                    documentation: {
                      '@lang': 'en',
                      '#text': 'Location filter options.'
                    }
                  }
                },
                {
                  '@name': 'FormatOptions',
                  '@minOccurs': '0',
                  '@maxOccurs': '1',
                  annotation: {
                    documentation: {
                      '@lang': 'en',
                      '#text':
                        'Format options. Presences indicates that results are to be returned in a file.'
                    }
                  }
                }
              ]
            }
          }
        }
      }
    },
    {
      '@name': 'GraphRequest',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'SSC graph request.'
        }
      },
      complexType: {
        complexContent: {
          extension: {
            '@base': 'LocationRequest',
            sequence: {
              element: {
                '@name': 'GraphOptions',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Graph options.'
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      '@name': 'KmlRequest',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'SSC KML request.'
        }
      },
      complexType: {
        complexContent: {
          extension: {
            '@base': 'LocationRequest',
            sequence: {
              element: [
                {
                  '@name': 'Trajectory',
                  '@default': 'true',
                  '@minOccurs': '1',
                  '@maxOccurs': '1',
                  annotation: {
                    documentation: {
                      '@lang': 'en',
                      '#text':
                        'Specifies whether trajectory information is requested.'
                    }
                  }
                },
                {
                  '@name': 'NorthBFieldTraceFootpoint',
                  '@default': 'false',
                  '@minOccurs': '1',
                  '@maxOccurs': '1',
                  annotation: {
                    documentation: {
                      '@lang': 'en',
                      '#text':
                        'Specifies whether north B-Field trace information is requested.'
                    }
                  }
                },
                {
                  '@name': 'SouthBFieldTraceFootpoint',
                  '@default': 'false',
                  '@minOccurs': '1',
                  '@maxOccurs': '1',
                  annotation: {
                    documentation: {
                      '@lang': 'en',
                      '#text':
                        'Specifies whether south B-Field trace information is requested.'
                    }
                  }
                }
              ]
            }
          }
        }
      }
    },
    {
      '@name': 'QueryRequest',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text':
            'An element wrapper for QueryRequestType so xjc will annotate the class with @XmlRootElement.'
        }
      },
      complexType: {
        sequence: {
          element: {
            '@name': 'Request',
            '@minOccurs': '1',
            '@maxOccurs': '1'
          }
        }
      }
    },
    {
      '@name': 'Response',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text':
            'An SSC response. An element wrapper for Result so xjc will annotate the class with @XmlRootElement.'
        }
      },
      complexType: {
        sequence: {
          element: {
            '@name': 'Result',
            '@minOccurs': '1',
            '@maxOccurs': '1'
          }
        }
      }
    },
    {
      '@name': 'QueryResponse',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'SSC query response type.'
        }
      },
      complexType: {
        sequence: {
          element: {
            '@name': 'QueryResult',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Query results.'
              }
            }
          }
        }
      }
    }
  ],
  complexType: [
    {
      '@name': 'ObservatoryDescription',
      '#text': '...'
    },
    {
      '@name': 'SatelliteDescription',
      '#text': '...'
    },
    {
      '@name': 'Request',
      '#text': '...'
    },
    {
      '@name': 'LocationRequest',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'SSC query request type.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'Request',
          sequence: {
            element: {
              '@name': 'Satellites',
              '@minOccurs': '1',
              '@maxOccurs': 'unbounded',
              annotation: {
                documentation: {
                  '@lang': 'en',
                  '#text': 'Requested satellites.'
                }
              }
            }
          }
        }
      }
    },
    {
      '@name': 'SatelliteSpecification',
      '#text': '...'
    },
    {
      '@name': 'OutputOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Data request output options.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'AllLocationFilters',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether all or just one or more of the specified location filters must be satisfied.'
              }
            }
          },
          {
            '@name': 'CoordinateOptions',
            '@minOccurs': '1',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the coordinate options.'
              }
            }
          },
          {
            '@name': 'RegionOptions',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the region options.'
              }
            }
          },
          {
            '@name': 'ValueOptions',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the value options.'
              }
            }
          },
          {
            '@name': 'DistanceFromOptions',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the distance-from options.'
              }
            }
          },
          {
            '@name': 'MinMaxPoints',
            '@default': '2',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Number of points used to determine minima or maxima values.'
              }
            }
          },
          {
            '@name': 'BFieldTraceOptions',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Magnetic field trace options.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'CoordinateOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Coordinate system component options.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'CoordinateSystem',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the coordinate system.'
              }
            }
          },
          {
            '@name': 'Component',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the coordinate system component.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'RegionOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text':
            'Listing options for regions. "Regions" denotes a naming convention of three dimensional and two dimensional zones that are associated with a spacecraft\'s location for a particular point in time. The RegionOptions provides a means to specify the type(s) of regions that can be generated as output. All four region types can be associated with a spacecraft at any given time. A description of these regions is available at the http://sscweb.gsfc.nasa.gov/help/Lregions_shp.html.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'Spacecraft',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the spacecraft regions are to be included in the output.'
              }
            }
          },
          {
            '@name': 'RadialTracedFootpoint',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the radial traced footpoint regions are to be included in the output.'
              }
            }
          },
          {
            '@name': 'NorthBTracedFootpoint',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the north B traced footpoint regions are to be included in the output.'
              }
            }
          },
          {
            '@name': 'SouthBTracedFootpoint',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the south B traced footpoint regions are to be included in the output.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'ValueOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Value listing options.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'RadialDistance',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the radial distance value is to be included in the listing.'
              }
            }
          },
          {
            '@name': 'BFieldStrength',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the B field strength value is to be included in the listing.'
              }
            }
          },
          {
            '@name': 'DipoleLValue',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the dipole L value is to be included in the listing.'
              }
            }
          },
          {
            '@name': 'DipoleInvLat',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the dipole invariant latitude is to be included in the listing.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'DistanceFromOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': '"Distance from" listing options.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'NeutralSheet',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the distance between the spacecraft and the neutral sheet is to be included in the output.'
              }
            }
          },
          {
            '@name': 'BowShock',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the distance between the spacecraft and the bow shock is to be included in the output.'
              }
            }
          },
          {
            '@name': 'MPause',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the distance between the spacecraft and the magnetopause is to be included in the output.'
              }
            }
          },
          {
            '@name': 'BGseXYZ',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies that the magnetic field strength in the GSE XYZ directions are to be included in the output.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'BFieldTraceOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'B-field trace listing options.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'CoordinateSystem',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the coordinate system'
              }
            }
          },
          {
            '@name': 'Hemisphere',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Magnetic hemisphere.'
              }
            }
          },
          {
            '@name': 'FootpointLatitude',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the footpoint latitude value are to be included in the listing.'
              }
            }
          },
          {
            '@name': 'FootpointLongitude',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the footpoint longitude value are to be included in the listing.'
              }
            }
          },
          {
            '@name': 'FieldLineLength',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the field line length values are to be included in the listing.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'FilteredCoordinateOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text':
            'Coordinate system component options that include location filters.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'CoordinateOptions',
          sequence: {
            element: {
              '@name': 'Filter',
              '@minOccurs': '0',
              '@maxOccurs': '1',
              annotation: {
                documentation: {
                  '@lang': 'en',
                  '#text': 'Specifies filter criteria.'
                }
              }
            }
          }
        }
      }
    },
    {
      '@name': 'RegionFilterOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Data request region filter options.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'SpaceRegions',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the space region filter options.'
              }
            }
          },
          {
            '@name': 'RadialTraceRegions',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the radial trace region filter options.'
              }
            }
          },
          {
            '@name': 'MagneticTraceRegions',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the magnetic trace region filter options.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'SpaceRegionsFilterOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Space regions filter options.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'InterplanetaryMedium',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the interplanetary medium region filter is to be applied.'
              }
            }
          },
          {
            '@name': 'DaysideMagnetosheath',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the dayside magnetosheath region filter is to be applied.'
              }
            }
          },
          {
            '@name': 'NightsideMagnetosheath',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the nightside magnetosheath region filter is to be applied.'
              }
            }
          },
          {
            '@name': 'DaysideMagnetosphere',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the dayside magnetosphere region filter is to be applied.'
              }
            }
          },
          {
            '@name': 'NightsideMagnetosphere',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the nightside magnetosphere region filter is to be applied.'
              }
            }
          },
          {
            '@name': 'PlasmaSheet',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the plasma sheet region filter is to be applied.'
              }
            }
          },
          {
            '@name': 'TailLobe',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the tail lobe region filter is to be applied.'
              }
            }
          },
          {
            '@name': 'HighLatitudeBoundaryLayer',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the high latitude boundary layer region filter is to be applied.'
              }
            }
          },
          {
            '@name': 'LowLatitudeBoundaryLayer',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the low latitude boundary layer region filter is to be applied.'
              }
            }
          },
          {
            '@name': 'DaysidePlasmasphere',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the dayside plasmasphere region filter is to be applied.'
              }
            }
          },
          {
            '@name': 'NightsidePlasmasphere',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the nightside plasmasphere region filter is to be applied.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'MappedRegionFilterOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Space regions filter options.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'Cusp',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the cusp hemisphere region is to be included.'
              }
            }
          },
          {
            '@name': 'Cleft',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the cleft hemisphere region is to be included.'
              }
            }
          },
          {
            '@name': 'AuroralOval',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the auroral oval hemisphere region is to be included.'
              }
            }
          },
          {
            '@name': 'PolarCap',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the polar cap hemisphere region is to be included.'
              }
            }
          },
          {
            '@name': 'MidLatitude',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the mid latitude hemisphere region is to be included.'
              }
            }
          },
          {
            '@name': 'LowLatitude',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the low latitude hemisphere region is to be included.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'HemisphereOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Hemisphere listing options.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'North',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the northern hemisphere region is to be included.'
              }
            }
          },
          {
            '@name': 'South',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the southern hemisphere region is to be included.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'LocationFilterOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Data request location filter options.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'AllFilters',
            '@default': 'true',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether all or just one or more of the specified filters must be satisfied.'
              }
            }
          },
          {
            '@name': 'DistanceFromCenterOfEarth',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the "distance from center of earth" filter.'
              }
            }
          },
          {
            '@name': 'MagneticFieldStrength',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the "magnetic field strength" filter.'
              }
            }
          },
          {
            '@name': 'DistanceFromNeutralSheet',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the "distance from neutral sheet" filter.'
              }
            }
          },
          {
            '@name': 'DistanceFromBowShock',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the "distance from bow shock" filter.'
              }
            }
          },
          {
            '@name': 'DistanceFromMagnetopause',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the "distance from magnetopause" filter.'
              }
            }
          },
          {
            '@name': 'DipoleLValue',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the "distance from dipole L value" filter.'
              }
            }
          },
          {
            '@name': 'DipoleInvariantLatitude',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies the "distance from dipole invariant latitude" filter.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'LocationFilter',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Location filter listing options.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'Minimum',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the minimum value is to be marked by a "v" in the listing.'
              }
            }
          },
          {
            '@name': 'Maximum',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies whether the maximum value is to be marked by a "v" in the listing.'
              }
            }
          },
          {
            '@name': 'LowerLimit',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies the lower limit of values that are to be included in the listing. The value is kilometer or degrees as applicable.'
              }
            }
          },
          {
            '@name': 'UpperLimit',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies the upper limit of values that are to be included in the listing. The value is kilometer or degrees as applicable.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'GraphOptions',
      '@abstract': 'true',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Abstract SSC graphing options.'
        }
      }
    },
    {
      '@name': 'OrbitGraphOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'SSC orbit graphing request options.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'GraphOptions',
          sequence: {
            element: [
              {
                '@name': 'CoordinateSystem',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Coordinate system.'
                  }
                }
              },
              {
                '@name': 'Combined',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Combine individual graphs into a single image.'
                  }
                }
              },
              {
                '@name': 'XyView',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Request X-Y view.'
                  }
                }
              },
              {
                '@name': 'XzView',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Request X-Z view.'
                  }
                }
              },
              {
                '@name': 'YzView',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Request Y-Z view.'
                  }
                }
              },
              {
                '@name': 'XrView',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Request X-R view.'
                  }
                }
              },
              {
                '@name': 'SunToRight',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Orient graph so that the Sun is to the right.'
                  }
                }
              },
              {
                '@name': 'ManualScale',
                '@minOccurs': '0',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Scaling of graph.'
                  }
                }
              },
              {
                '@name': 'EvenAxesScale',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text':
                      'Whether even axes scales or even axes lengths should be employed.'
                  }
                }
              },
              {
                '@name': 'ShowBowShockMagnetopause',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text':
                      'Whether bow shock and mangetopause should be shown.'
                  }
                }
              },
              {
                '@name': 'SolarWindPressure',
                '@minOccurs': '0',
                '@maxOccurs': '1',
                '@default': '2.1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text':
                      'Value of solar wind pressure to use when displaying the bow shock and magnetopause (units of nP).'
                  }
                }
              },
              {
                '@name': 'ImfBz',
                '@minOccurs': '0',
                '@maxOccurs': '1',
                '@default': '0.0',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text':
                      'IMF Bz value to use when displaying the bow shock and magnetopause (units of nT).'
                  }
                }
              },
              {
                '@name': 'FormatOptions',
                '@minOccurs': '0',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Output format options.'
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      '@name': 'GraphScale',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Manual scale values for an SSC graphing request.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'MinX',
            '@default': '-60',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Minimum X value.'
              }
            }
          },
          {
            '@name': 'MaxX',
            '@default': '60',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Maximum X value.'
              }
            }
          },
          {
            '@name': 'MinY',
            '@default': '-60',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Minimum Y value.'
              }
            }
          },
          {
            '@name': 'MaxY',
            '@default': '60',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Maximum Y value.'
              }
            }
          },
          {
            '@name': 'MinZ',
            '@default': '-60',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Minimum Z value.'
              }
            }
          },
          {
            '@name': 'MaxZ',
            '@default': '60',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Maximum Z value.'
              }
            }
          },
          {
            '@name': 'MinR',
            '@default': '-60',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Minimum R value.'
              }
            }
          },
          {
            '@name': 'MaxR',
            '@default': '60',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Maximum R value.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'GraphFormatOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Manual scale values for an SSC graphing request.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'CustomLabelOptions',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies custom labels. If not present, use auto labeling.'
              }
            }
          },
          {
            '@name': 'CharSize',
            '@default': '1.2',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the character size.'
              }
            }
          },
          {
            '@name': 'SymbolSize',
            '@default': '0.8',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies the symbol and tick size.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'GraphLabelOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Custom label options for an SSC graph request.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'DayOfYearLabelFrequency',
            '@default': '1',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies frequency of day-of-year labels.'
              }
            }
          },
          {
            '@name': 'MonthDayOfMonthLabel',
            '@default': 'false',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Specifies format of day-of-year labels. A false value specifies that a day-of-year value should label day-of-year tick marks. A true value indicates that a month/day-of-month value is to label day-of-year tick marks.'
              }
            }
          },
          {
            '@name': 'HourLabelFrequency',
            '@default': '12',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies frequency of hour labels.'
              }
            }
          },
          {
            '@name': 'HourTickMarkFrequency',
            '@default': '6',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies frequency of hour tick labels.'
              }
            }
          },
          {
            '@name': 'MinuteLabelFrequency',
            '@default': '0',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies frequency of minute labels.'
              }
            }
          },
          {
            '@name': 'MinuteTickMarkFrequency',
            '@default': '0',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Specifies frequency of minute tick labels.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'MapProjectionGraphOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'SSC map projection graphing request options.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'GraphOptions',
          sequence: {
            element: [
              {
                '@name': 'Trace',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Specifies the trace options.'
                  }
                }
              },
              {
                '@name': 'CoordinateSystem',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Specifies the coordinate system options.'
                  }
                }
              },
              {
                '@name': 'ShowContinents',
                '@default': 'true',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text':
                      'Specifies whether continents are to be displayed on the graph. This option is only effective for coordinateSystem = GEO. Continents are not shown for other coordinate systems.'
                  }
                }
              },
              {
                '@name': 'Projection',
                '@default': 'Cylindrical',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Specifies the projection option.'
                  }
                }
              },
              {
                '@name': 'GroundStations',
                '@minOccurs': '0',
                '@maxOccurs': 'unbounded',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'GEO ground stations to display.'
                  }
                }
              },
              {
                '@name': 'MapLimits',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Map limits.'
                  }
                }
              },
              {
                '@name': 'PolarMapOrientation',
                '@default': 'Equatorial',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Polar map orientation.'
                  }
                }
              },
              {
                '@name': 'LongitudeVerticalDown',
                '@default': '0.0',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Longitude plotted as vertical down value.'
                  }
                }
              },
              {
                '@name': 'Title',
                '@default': 'Mapped Plot',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Title.'
                  }
                }
              },
              {
                '@name': 'FormatOptions',
                '@minOccurs': '0',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text':
                      'Specifies output label options. An absent value indicates that default values should be used.'
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      '@name': 'MapLimits',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Map limit values for an SSC graphing request.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'MinLatitude',
            '@default': '-90.0',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Minimum Latitude value.'
              }
            }
          },
          {
            '@name': 'MaxLatitude',
            '@default': '90.0',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Maximum Latitude value.'
              }
            }
          },
          {
            '@name': 'MinLongitude',
            '@default': '-180.0',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Minimum Longitude value.'
              }
            }
          },
          {
            '@name': 'MaxLongitude',
            '@default': '180.0',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Maximum Longitude value.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'TimeSeriesGraphOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'SSC time series graphing request options.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'GraphOptions',
          sequence: {
            element: [
              {
                '@name': 'CoordinateOptions',
                '@minOccurs': '1',
                '@maxOccurs': 'unbounded',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Specifies the coordinate options.'
                  }
                }
              },
              {
                '@name': 'ValueOptions',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Specifies the value options.'
                  }
                }
              },
              {
                '@name': 'DistanceFromOptions',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Specifies the distance-from options.'
                  }
                }
              },
              {
                '@name': 'BFieldTraceOptions',
                '@minOccurs': '1',
                '@maxOccurs': 'unbounded',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Specifies the B field trace options.'
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      '@name': 'QueryRequestType',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'SSC query request type.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'Request',
          sequence: {
            element: [
              {
                '@name': 'ExecuteOptions',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Query execution options.'
                  }
                }
              },
              {
                '@name': 'ResultOptions',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Query result options.'
                  }
                }
              },
              {
                '@name': 'ConditionOperator',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                '@default': 'All',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Operator for combining conditions.'
                  }
                }
              },
              {
                '@name': 'Conditions',
                '@minOccurs': '1',
                '@maxOccurs': '9',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text':
                      'Query condition. Consists of a SatelliteCondition along with one of the following: - GroundStationCondition (and optionally a RegionCondition) - LeadSatelliteCondition (and optionally a RegionCondition) - RegionCondition'
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      '@name': 'ExecuteOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Query execution options.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'WaitForResult',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            '@default': 'true',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Indicates whether the results are returned in the response to this request or whether the results become available at a later time.'
              }
            }
          },
          {
            '@name': 'ResultEmailAddress',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'When WaitForResult is false, e-mail address where a "query complete" e-mail message is to be sent.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'ResultOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Query result options.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'IncludeQueryInResult',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            '@default': 'false',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Indicates whether to include a copy of the query in the results.'
              }
            }
          },
          {
            '@name': 'QueryResultType',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            '@default': 'Xml',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Result representation.'
              }
            }
          },
          {
            '@name': 'FormatOptions',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Format options. Only applicable when QueryResultType is Listing.'
              }
            }
          },
          {
            '@name': 'TraceCoordinateSystem',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            '@default': 'Geo',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Trace coordinate system.'
              }
            }
          },
          {
            '@name': 'SubSatelliteCoordinateSystem',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            '@default': 'Geo',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Sub-satellite coordinate system.'
              }
            }
          },
          {
            '@name': 'SubSatelliteCoordinateSystemType',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            '@default': 'Spherical',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Sub-satellite coordinate system type.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'FormatOptions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Listing Query result format options.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'DateFormat',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            '@default': 'yyyy_ddd',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Date format.'
              }
            }
          },
          {
            '@name': 'TimeFormat',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            '@default': 'hh_hhhh',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Time format.'
              }
            }
          },
          {
            '@name': 'DistanceFormat',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            '@default': 'IntegerKm',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Distance format.'
              }
            }
          },
          {
            '@name': 'DistanceDigits',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            '@default': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Number of decimal places when DistanceFormat is ScientificNotationKm.'
              }
            }
          },
          {
            '@name': 'DegreeFormat',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            '@default': 'Decimal',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Degree format.'
              }
            }
          },
          {
            '@name': 'DegreeDigits',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            '@default': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Number of decimal places when DegreeFormat is dd_ddd.'
              }
            }
          },
          {
            '@name': 'LatLonFormat',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            '@default': 'Lat90Lon360',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Latitude/longitude format.'
              }
            }
          },
          {
            '@name': 'Cdf',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            '@default': 'false',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Whether the output should be a CDF type file. Only supported for location requests. Conjunction query requests do not support CDF output.'
              }
            }
          },
          {
            '@name': 'LinesPerPage',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            '@default': '55',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Lines per page.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'TimeInterval',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Time interval.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'Start',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Begining time of interval.'
              }
            }
          },
          {
            '@name': 'End',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Ending time of interval.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'BFieldModel',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Magnetic field Model.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'InternalBFieldModel',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Internal B-Field model.'
              }
            }
          },
          {
            '@name': 'ExternalBFieldModel',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'External B-Field model.'
              }
            }
          },
          {
            '@name': 'TraceStopAltitude',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Stop altitude for downward tracing of field lines.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'ExternalBFieldModel',
      '@abstract': 'true',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Abstract External B-Field Model type.'
        }
      }
    },
    {
      '@name': 'Tsyganenko96BFieldModel',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Tsyganenko 96 external B-Field model.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'ExternalBFieldModel',
          sequence: {
            element: [
              {
                '@name': 'SolarWindPressure',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text':
                      'Solar wind pressure (range: 0 - 30 nP, default=2.1).'
                  }
                }
              },
              {
                '@name': 'DstIndex',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text':
                      'Disturbance Storm Time (DST) index (range: -400 - 200 nT, default=-20).'
                  }
                }
              },
              {
                '@name': 'ByImf',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text':
                      'BY Interplanetary Magnetic Field (IMF) (range: -100 - 100 nT, default=0.0).'
                  }
                }
              },
              {
                '@name': 'BzImf',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text':
                      'BZ Interplanetary Magnetic Field (IMF) (range: -100 - 100 nT, default=0.0).'
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      '@name': 'Tsyganenko89cBFieldModel',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Tsyganenko 89c external B-Field model.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'ExternalBFieldModel',
          sequence: {
            element: {
              '@name': 'KeyParameterValues',
              '@minOccurs': '1',
              '@maxOccurs': '1',
              annotation: {
                documentation: {
                  '@lang': 'en',
                  '#text': 'Key Parameter values.'
                }
              }
            }
          }
        }
      }
    },
    {
      '@name': 'Tsyganenko87BFieldModel',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Tsyganenko 87 external B-Field model.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'ExternalBFieldModel',
          sequence: {
            element: {
              '@name': 'KeyParameterValues',
              '@minOccurs': '1',
              '@maxOccurs': '1',
              annotation: {
                documentation: {
                  '@lang': 'en',
                  '#text': 'Key Parameter values.'
                }
              }
            }
          }
        }
      }
    },
    {
      '@name': 'Condition',
      '@abstract': 'true',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Abstract occupancy/conjunction condition.'
        }
      }
    },
    {
      '@name': 'SatelliteCondition',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Satellite condition type.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'Condition',
          sequence: {
            element: [
              {
                '@name': 'Satellite',
                '@minOccurs': '1',
                '@maxOccurs': 'unbounded',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Satellite specification.'
                  }
                }
              },
              {
                '@name': 'SatelliteCombination',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text':
                      'The minimum number of statellites that must satisfy this condition.'
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      '@name': 'Satellite',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Satellite specification.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'Id',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Selected satellite identifier.'
              }
            }
          },
          {
            '@name': 'BFieldTraceDirection',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Magnetic field tracing direction. This value is only required if magnetic field tracing is specified in a RegionCondition.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'GroundStationCondition',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Ground Station condition.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'Condition',
          sequence: {
            element: [
              {
                '@name': 'GroundStation',
                '@minOccurs': '1',
                '@maxOccurs': '4',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Selected ground stations.'
                  }
                }
              },
              {
                '@name': 'CoordinateSystem',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Ground Station Coordinate System.'
                  }
                }
              },
              {
                '@name': 'TraceType',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Trace type.'
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      '@name': 'Coordinates',
      '@abstract': 'true',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Coordinates type.'
        }
      }
    },
    {
      '@name': 'AltitudeGeographicCoordinates',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Geographic Coordinates with altitude.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'SurfaceGeographicCoordinates',
          sequence: {
            element: {
              '@name': 'Altitude',
              '@minOccurs': '1',
              '@maxOccurs': '1',
              annotation: {
                documentation: {
                  '@lang': 'en',
                  '#text': 'Altitude.'
                }
              }
            }
          }
        }
      }
    },
    {
      '@name': 'RadiusGeographicCoordinates',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Geographic Coordinates with radius.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'SurfaceGeographicCoordinates',
          sequence: {
            element: {
              '@name': 'Radius',
              '@minOccurs': '1',
              '@maxOccurs': '1',
              annotation: {
                documentation: {
                  '@lang': 'en',
                  '#text': 'Radius.'
                }
              }
            }
          }
        }
      }
    },
    {
      '@name': 'SurfaceGeographicCoordinates',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text':
            'Surface (altitude implicitly surface) Geographic Coordinates.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'Coordinates',
          sequence: {
            element: [
              {
                '@name': 'Latitude',
                '@minOccurs': '1',
                '@maxOccurs': '1'
              },
              {
                '@name': 'Longitude',
                '@minOccurs': '1',
                '@maxOccurs': '1'
              }
            ]
          }
        }
      }
    },
    {
      '@name': 'CartesionCoordinates',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Cartesian Coordinates.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'Coordinates',
          sequence: {
            element: [
              {
                '@name': 'X',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'X coordinate value.'
                  }
                }
              },
              {
                '@name': 'Y',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Y coordinate value.'
                  }
                }
              },
              {
                '@name': 'Z',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Z coordinate value.'
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      '@name': 'GroundStation',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Ground Station.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'Id',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Ground station identifier.'
              }
            }
          },
          {
            '@name': 'Name',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Ground station name.'
              }
            }
          },
          {
            '@name': 'Location',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Ground station Location. This value should be in the CoordinateSystem specified in the enclosing GroundStationCondition.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'GroundStationConjunction',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Ground Station conjunction.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'GroundStation',
          sequence: {
            element: {
              '@name': 'ConjunctionArea',
              '@minOccurs': '1',
              '@maxOccurs': '1',
              annotation: {
                documentation: {
                  '@lang': 'en',
                  '#text': 'Conjunction Area.'
                }
              }
            }
          }
        }
      }
    },
    {
      '@name': 'LeadSatelliteCondition',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Lead satellite condition.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'Condition',
          sequence: {
            element: [
              {
                '@name': 'Satellite',
                '@minOccurs': '1',
                '@maxOccurs': 'unbounded',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Lead satellites.'
                  }
                }
              },
              {
                '@name': 'ConjunctionArea',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Conjunction Area.'
                  }
                }
              },
              {
                '@name': 'TraceType',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Trace type.'
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      '@name': 'ConjunctionArea',
      '@abstract': 'true',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Abstract conjunction area.'
        }
      }
    },
    {
      '@name': 'BoxConjunctionArea',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Box shaped conjunction area.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'ConjunctionArea',
          sequence: {
            element: [
              {
                '@name': 'CoordinateSystem',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Coordinate system.'
                  }
                }
              },
              {
                '@name': 'DeltaLatitude',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Delta Latitude in degrees.'
                  }
                }
              },
              {
                '@name': 'DeltaLongitude',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Delta Longitude in degrees.'
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      '@name': 'DistanceConjunctionArea',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Distance conjunction area.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'ConjunctionArea',
          sequence: {
            element: {
              '@name': 'Radius',
              '@minOccurs': '1',
              '@maxOccurs': '1',
              annotation: {
                documentation: {
                  '@lang': 'en',
                  '#text': 'Radius in km.'
                }
              }
            }
          }
        }
      }
    },
    {
      '@name': 'RegionCondition',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Spase Region condition.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'Condition',
          sequence: {
            element: [
              {
                '@name': 'ConditionOperator',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Operator for combining region conditions.'
                  }
                }
              },
              {
                '@name': 'SpaceRegions',
                '@minOccurs': '0',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Spacecraft regions.'
                  }
                }
              },
              {
                '@name': 'RadialTraceRegions',
                '@minOccurs': '0',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Radial trace regions.'
                  }
                }
              },
              {
                '@name': 'BFieldTraceRegions',
                '@minOccurs': '0',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Magnetic field trace regions.'
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      '@name': 'SpaceRegions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Space Regions.'
        }
      },
      sequence: {
        element: {
          '@name': 'SpacecraftRegion',
          '@minOccurs': '1',
          '@maxOccurs': '11',
          annotation: {
            documentation: {
              '@lang': 'en',
              '#text': 'Selection of distinct spacecraft regions.'
            }
          }
        }
      }
    },
    {
      '@name': 'TraceRegions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text':
            'Trace Map Regions. See http://sscweb.gsfc.nasa.gov/users_guide/ssc_reg_doc.html for a description.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'Cusp',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Cusp region.'
              }
            }
          },
          {
            '@name': 'Cleft',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Cleft region.'
              }
            }
          },
          {
            '@name': 'AuroralOval',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Auroral Oval region.'
              }
            }
          },
          {
            '@name': 'PolarCap',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Polar Cap region.'
              }
            }
          },
          {
            '@name': 'MidLatitude',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Mid Latitude region.'
              }
            }
          },
          {
            '@name': 'LowLatitude',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Low Latitude region.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'HemisphereRegions',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Hemisphere Regions selection.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'North',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'North hemisphere region.'
              }
            }
          },
          {
            '@name': 'South',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'South hemisphere region.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'Result',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'A result from SSC.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'StatusCode',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Result status code.'
              }
            }
          },
          {
            '@name': 'StatusSubCode',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Result status sub-code.'
              }
            }
          },
          {
            '@name': 'StatusText',
            '@minOccurs': '1',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Result status text.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'AbstractResult',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text':
            'Abstract result of a request to the Satellite Situation Center.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'Result'
        }
      }
    },
    {
      '@name': 'FileResult',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text':
            'The result of a location request to the Satellite Situation Center.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'AbstractResult',
          sequence: {
            element: {
              '@name': 'Files',
              '@minOccurs': '1',
              '@maxOccurs': 'unbounded',
              annotation: {
                documentation: {
                  '@lang': 'en',
                  '#text':
                    'References to the files containing the requested satellite data.'
                }
              }
            }
          }
        }
      }
    },
    {
      '@name': 'DataResult',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text':
            'The result of a data request to the Satellite Situation Center.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'AbstractResult',
          sequence: {
            element: {
              '@name': 'Data',
              '@minOccurs': '1',
              '@maxOccurs': 'unbounded',
              annotation: {
                documentation: {
                  '@lang': 'en',
                  '#text': 'Requested satellite data.'
                }
              }
            }
          }
        }
      }
    },
    {
      '@name': 'SatelliteData',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Information about a satellite.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'Id',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Identifies the satellite this data for.'
              }
            }
          },
          {
            '@name': 'Coordinates',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Coordinate data'
              }
            }
          },
          {
            '@name': 'Time',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Time associated with each data point.'
              }
            }
          },
          {
            '@name': 'BTraceData',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'B-field trace data.'
              }
            }
          },
          {
            '@name': 'RadialLength',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Distance from center of Earth.'
              }
            }
          },
          {
            '@name': 'MagneticStrength',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Magnetic field strength.'
              }
            }
          },
          {
            '@name': 'NeutralSheetDistance',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Distance from neutral sheet.'
              }
            }
          },
          {
            '@name': 'BowShockDistance',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Distance from bow shock.'
              }
            }
          },
          {
            '@name': 'MagnetoPauseDistance',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Distance from magneto pause.'
              }
            }
          },
          {
            '@name': 'DipoleLValue',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Dipole L value.'
              }
            }
          },
          {
            '@name': 'DipoleInvariantLatitude',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Dipole invariant latitude value.'
              }
            }
          },
          {
            '@name': 'SpacecraftRegion',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Spacecraft region.'
              }
            }
          },
          {
            '@name': 'RadialTracedFootpointRegions',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Radial traced footpoint regions.'
              }
            }
          },
          {
            '@name': 'BGseX',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'B GSE X value.'
              }
            }
          },
          {
            '@name': 'BGseY',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'B GSE Y value.'
              }
            }
          },
          {
            '@name': 'BGseZ',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'B GSE Z value.'
              }
            }
          },
          {
            '@name': 'NorthBTracedFootpointRegions',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'North B traced footpoint regions.'
              }
            }
          },
          {
            '@name': 'SouthBTracedFootpointRegions',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'South B traced footpoint regions.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'CoordinateData',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Satellite coordinate data.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'CoordinateSystem',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Identifies the coordinate system.'
              }
            }
          },
          {
            '@name': 'X',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'X component values of the Cartesion coordinate set.'
              }
            }
          },
          {
            '@name': 'Y',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Y component values of the Cartesion coordinate set.'
              }
            }
          },
          {
            '@name': 'Z',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Z component values of the Cartesion coordinate set.'
              }
            }
          },
          {
            '@name': 'Latitude',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Latitude component values of the spherical coordinate set.'
              }
            }
          },
          {
            '@name': 'Longitude',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Longitude component values of the spherical coordinate set.'
              }
            }
          },
          {
            '@name': 'LocalTime',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Local time value of the spherical coordinate set.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'BTraceData',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'B-field trace data.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'CoordinateSystem',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Identifies the coordinate system.'
              }
            }
          },
          {
            '@name': 'Hemisphere',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Magnetic Hemisphere.'
              }
            }
          },
          {
            '@name': 'Latitude',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'B-Trace latitude values.'
              }
            }
          },
          {
            '@name': 'Longitude',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'B-Trace longitude values.'
              }
            }
          },
          {
            '@name': 'ArcLength',
            '@minOccurs': '0',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'B-Trace arc length values.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'QueryResult',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Query result.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'AbstractResult',
          sequence: {
            element: {
              '@name': 'QueryRequest',
              '@minOccurs': '0',
              '@maxOccurs': '1',
              annotation: {
                documentation: {
                  '@lang': 'en',
                  '#text':
                    'Original query request. Only include if original request set QueryRequest/ResultOptions/IncludeQueryInResult to true.'
                }
              }
            }
          }
        }
      }
    },
    {
      '@name': 'QueryDataResult',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Query result.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'QueryResult',
          sequence: {
            element: {
              '@name': 'Conjunction',
              '@minOccurs': '0',
              '@maxOccurs': 'unbounded',
              annotation: {
                documentation: {
                  '@lang': 'en',
                  '#text': 'Conjunction description.'
                }
              }
            }
          }
        }
      }
    },
    {
      '@name': 'QueryFileResult',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text':
            'Query result containing a reference to the file(s) containing the results.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'QueryResult',
          sequence: {
            element: {
              '@name': 'Files',
              '@minOccurs': '1',
              '@maxOccurs': 'unbounded',
              annotation: {
                documentation: {
                  '@lang': 'en',
                  '#text': 'Files containing conjunction description.'
                }
              }
            }
          }
        }
      }
    },
    {
      '@name': 'Conjunction',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'SSC query result. Description of conjuction.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'TimeInterval',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Time interval of query.'
              }
            }
          },
          {
            '@name': 'SatelliteDescription',
            '@minOccurs': '1',
            '@maxOccurs': 'unbounded',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Description of satellite at time of conjuction.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'SatelliteConjunction',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': "Description of satellite's conjunction."
        }
      },
      sequence: {
        element: [
          {
            '@name': 'Satellite',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Satellite identifier.'
              }
            }
          },
          {
            '@name': 'Description',
            '@minOccurs': '1',
            '@maxOccurs': '2',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Description of satellite at the begining and ending conjunction times.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'ConjunctionDescription',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': "Description of satellite's conjunction."
        }
      },
      sequence: {
        element: [
          {
            '@name': 'SpacecraftRegion',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': "Satellite's region location at time of conjunction."
              }
            }
          },
          {
            '@name': 'RadialTracedRegion',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  "Satellite's radial trace region location at time of conjunction."
              }
            }
          },
          {
            '@name': 'NorthBTracedRegion',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  "Satellite's north magnetice field traced region location at time of conjunction."
              }
            }
          },
          {
            '@name': 'SouthBTracedRegion',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  "Satellite's south magnetice field traced region location at time of conjunction."
              }
            }
          },
          {
            '@name': 'Location',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': "Satellite's location at time of conjunction."
              }
            }
          },
          {
            '@name': 'TraceDescription',
            '@minOccurs': '0',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Trace Description at time of conjunction.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'TraceDescription',
      sequence: {
        annotation: {
          documentation: {
            '@lang': 'en',
            '#text': 'Radial or B-Field Trace Description.'
          }
        },
        element: [
          {
            '@name': 'Location',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': "Satellite's trace location."
              }
            }
          },
          {
            '@name': 'ArcLength',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': "Satellite's trace arc length."
              }
            }
          },
          {
            '@name': 'Target',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Endpoint target of trace.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'TraceTarget',
      '@abstract': 'true',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Endpoint target of trace.'
        }
      }
    },
    {
      '@name': 'SatelliteTarget',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Satellite target of trace.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'TraceTarget',
          sequence: {
            element: [
              {
                '@name': 'LeadSatellite',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': 'Lead Satellite identifier.'
                  }
                }
              },
              {
                '@name': 'Distance',
                '@minOccurs': '1',
                '@maxOccurs': '1',
                annotation: {
                  documentation: {
                    '@lang': 'en',
                    '#text': "Satellite's distance to the lead satellite"
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      '@name': 'GroundStationTarget',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Ground Station target of trace.'
        }
      },
      complexContent: {
        extension: {
          '@base': 'TraceTarget',
          sequence: {
            element: {
              '@name': 'GroundStation',
              '@minOccurs': '1',
              '@maxOccurs': '1',
              annotation: {
                documentation: {
                  '@lang': 'en',
                  '#text': 'Ground station identifier.'
                }
              }
            }
          }
        }
      }
    },
    {
      '@name': 'FileDescription',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Description of a file.'
        }
      },
      sequence: {
        element: [
          {
            '@name': 'Name',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Name of file (usually a URL).'
              }
            }
          },
          {
            '@name': 'MimeType',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'MIME type of file.'
              }
            }
          },
          {
            '@name': 'Length',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Length of file in bytes.'
              }
            }
          },
          {
            '@name': 'LastModified',
            '@minOccurs': '1',
            '@maxOccurs': '1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Time when the file was last modified.'
              }
            }
          }
        ]
      }
    }
  ],
  simpleType: [
    {
      '@name': 'Hemisphere',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Hemisphere region.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'South',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Southern hemisphere.'
              }
            }
          },
          {
            '@value': 'North',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Northern hemisphere.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'MapProjectionTrace',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Mapped projection trace options supported by SSC.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'BFieldNorth',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  "A trace from the satellite's location along the intersection north magnetic field line."
              }
            }
          },
          {
            '@value': 'BFieldSouth',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  "A trace from the satellite's location along the intersection south magnetic field line."
              }
            }
          },
          {
            '@value': 'Radial',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'A radial trace from the center of the Earth to the satellite.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'ProjectionCoordinateSystem',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text':
            'Enumeration representing the different coordinate systems supported by SSC mapped projection graphs.'
        }
      },
      restriction: {
        '@base': 'CoordinateSystem',
        enumeration: [
          {
            '@value': 'Geo',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'GEO coordinate system.'
              }
            }
          },
          {
            '@value': 'Gm',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'GM coordinate system.'
              }
            }
          },
          {
            '@value': 'Sm',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'SM coordinate system.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'MapProjection',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text':
            'Enumeration representing the map projections supported by SSC.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'Azimuthal',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Azimuthal projection.'
              }
            }
          },
          {
            '@value': 'Cylindrical',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Cylindrical projection.'
              }
            }
          },
          {
            '@value': 'Mercator',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Mercator projection.'
              }
            }
          },
          {
            '@value': 'Molleweide',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Molleweide projection.'
              }
            }
          },
          {
            '@value': 'Orthographic',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Orthographic projection.'
              }
            }
          },
          {
            '@value': 'Stereographic',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Stereographic projection.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'PolarMapOrientation',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text':
            'Enumeration representing the polar map orientations supported by SSC.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'Equatorial',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Equatorial orientation.'
              }
            }
          },
          {
            '@value': 'NorthPole',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'North pole orientation.'
              }
            }
          },
          {
            '@value': 'SouthPole',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'South pole orientation.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'EmailAddress',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Time interval.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        pattern: {
          '@value': "\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*"
        }
      }
    },
    {
      '@name': 'QueryResultType',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Query result representation enumeration.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'Xml',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Results are an XML representation (see QueryResponse).'
              }
            }
          },
          {
            '@value': 'Listing',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Results are to be in a textual representation (more likely to be preferred by more humans than the XML representation).'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'InternalBFieldModel',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Internal B-Field Model enumeration.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'IGRF',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'IGRF internal magnetic field model.'
              }
            }
          },
          {
            '@value': 'IGRF-10',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Deprecated. Use IGRF instead.'
              }
            }
          },
          {
            '@value': 'SimpleDipole',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Simple dipole internal magnetic field model.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'Tsyganenko89cKp',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Tsyganenko89c key parameter values enumeration.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'KP0_0',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': '0,0+ KP values.'
              }
            }
          },
          {
            '@value': 'KP1_1_1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': '1-,1,1+ KP values.'
              }
            }
          },
          {
            '@value': 'KP2_2_2',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': '2-,2,2+ KP values.'
              }
            }
          },
          {
            '@value': 'KP3_3_3',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': '3-,3,3+ KP values.'
              }
            }
          },
          {
            '@value': 'KP4_4_4',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': '4-,4,4+ KP values.'
              }
            }
          },
          {
            '@value': 'KP5_5_5',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': '5-,5,5+ KP values.'
              }
            }
          },
          {
            '@value': 'KP6',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': '>=6 KP values.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'Tsyganenko87Kp',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Tsyganenko87 key parameter values enumeration.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'KP0_0',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': '0,0+ KP values.'
              }
            }
          },
          {
            '@value': 'KP1_1_1',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': '1-,1,1+ KP values.'
              }
            }
          },
          {
            '@value': 'KP2_2_2',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': '2-,2,2+ KP values.'
              }
            }
          },
          {
            '@value': 'KP3_3_3',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': '3-,3,3+ KP values.'
              }
            }
          },
          {
            '@value': 'KP4_4_4',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': '4-,4,4+ KP values.'
              }
            }
          },
          {
            '@value': 'KP5',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': '>=5- KP values.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'ConditionOperator',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Logical Condition Operator enumeration.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'All',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'All conditions must be meet. Logical AND of all conditions.'
              }
            }
          },
          {
            '@value': 'Any',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Any condition must be meet. Logical OR of all conditions.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'BFieldTraceDirection',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Trace direction enumeration.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'SameHemisphere',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Trace in the same magnetic hemisphere.'
              }
            }
          },
          {
            '@value': 'OppositeHemisphere',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Trace in the opposite magnetic hemisphere.'
              }
            }
          },
          {
            '@value': 'NorthHemisphere',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Trace in the north magnetic hemisphere.'
              }
            }
          },
          {
            '@value': 'SouthHemisphere',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Trace in the south magnetic hemisphere.'
              }
            }
          },
          {
            '@value': 'EitherHemisphere',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Trace in either or both magnetic hemispheres.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'Latitude',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Inclination angle measured from reference plane in degrees.'
        }
      },
      restriction: {
        '@base': 'xsd:double',
        minInclusive: {
          '@value': '-90.0'
        },
        maxInclusive: {
          '@value': '90.0'
        }
      }
    },
    {
      '@name': 'Longitude',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text':
            'Azimuth angle of an orthogonal projection on a reference plane that passes through the origin and is orthogonal to the zenith (measured in degrees).'
        }
      },
      restriction: {
        '@base': 'xsd:double',
        minInclusive: {
          '@value': '-180.0'
        },
        maxInclusive: {
          '@value': '360.0'
        }
      }
    },
    {
      '@name': 'ConjunctionAreaType',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Conjuction area enumeration.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'GeoBox',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'GEO box.'
              }
            }
          },
          {
            '@value': 'GmBox',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'GM box.'
              }
            }
          },
          {
            '@value': 'Distance',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Distance.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'CoordinateSystemType',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Coordinate System type enumeration.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'Spherical',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Spherical coordinate system.'
              }
            }
          },
          {
            '@value': 'Cartesian',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Cartesian coordinate system.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'TraceCoordinateSystem',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Surface Coordinate System enumeration.'
        }
      },
      restriction: {
        '@base': 'CoordinateSystem',
        enumeration: [
          {
            '@value': 'Geo',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'GEO coordinate system.'
              }
            }
          },
          {
            '@value': 'Gm',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'GM coordinate system.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'CoordinateSystem',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Coordinate System enumeration.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'Geo',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'GEO coordinate system.'
              }
            }
          },
          {
            '@value': 'Gm',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'GM coordinate system.'
              }
            }
          },
          {
            '@value': 'Gse',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'GSE coordinate system.'
              }
            }
          },
          {
            '@value': 'Gsm',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'GSM coordinate system.'
              }
            }
          },
          {
            '@value': 'Sm',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'SM coordinate system.'
              }
            }
          },
          {
            '@value': 'GeiTod',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'GEI TOD coordinate system.'
              }
            }
          },
          {
            '@value': 'GeiJ2000',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'GEI J2000 coordinate system. This value is not supported in a conjunction query request.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'CoordinateComponent',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Coordinate component enumeration.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'X',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'X or first coordinate component'
              }
            }
          },
          {
            '@value': 'Y',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Y or second coordinate component'
              }
            }
          },
          {
            '@value': 'Z',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Z or third coordinate component'
              }
            }
          },
          {
            '@value': 'Lat',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Latitude coordinate component'
              }
            }
          },
          {
            '@value': 'Lon',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Longitude coordinate component'
              }
            }
          },
          {
            '@value': 'Local_Time',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Local Time coordinate component'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'TraceType',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Trace Type enumeration.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'BField',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Magnetic field tracing to the Earth of the spacecraft(s) selected.'
              }
            }
          },
          {
            '@value': 'Radial',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Direct radial tracing to the Earth of the trajectory for the spacecraft(s) selected.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'SpaceRegionType',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text':
            'Space region enumeration. See http://sscweb.gsfc.nasa.gov/users_guide/ssc_reg_doc.html for a description.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'InterplanetaryMedium',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Interplanetary Medium region.'
              }
            }
          },
          {
            '@value': 'DaysideMagnetosheath',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Dayside Magnetosheath region.'
              }
            }
          },
          {
            '@value': 'NightsideMagnetosheath',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Nightside Magnetosheath region.'
              }
            }
          },
          {
            '@value': 'DaysideMagnetosphere',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Dayside Magnetosphere region.'
              }
            }
          },
          {
            '@value': 'NightsideMagnetosphere',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Nightside Magnetosphere region.'
              }
            }
          },
          {
            '@value': 'PlasmaSheet',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Plasma Sheet region.'
              }
            }
          },
          {
            '@value': 'TailLobe',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Tail Lobe region.'
              }
            }
          },
          {
            '@value': 'HighLatitudeBoundaryLayer',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'High Latitude Boundary Layer region.'
              }
            }
          },
          {
            '@value': 'LowLatitudeBoundaryLayer',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Low Latitude Boundary Layer region.'
              }
            }
          },
          {
            '@value': 'DaysidePlasmasphere',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Dayside Plasmasphere region.'
              }
            }
          },
          {
            '@value': 'NightsidePlasmasphere',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Nightside Plasmasphere region.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'MapRegion',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text':
            'Map region enumeration. See http://sscweb.gsfc.nasa.gov/users_guide/ssc_reg_doc.html for a description.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'NorthCusp',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Northern Cusp region.'
              }
            }
          },
          {
            '@value': 'SouthCusp',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Southern Cusp region.'
              }
            }
          },
          {
            '@value': 'NorthCleft',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Northern Cleft region.'
              }
            }
          },
          {
            '@value': 'SouthCleft',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Southern Cleft region.'
              }
            }
          },
          {
            '@value': 'NorthAuroralOval',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Northern Auroral Oval region.'
              }
            }
          },
          {
            '@value': 'SouthAuroralOval',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Southern Auroral Oval region.'
              }
            }
          },
          {
            '@value': 'NorthPolarCap',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Northern Polar Cap region.'
              }
            }
          },
          {
            '@value': 'SouthPolarCap',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Southern Polar Cap region.'
              }
            }
          },
          {
            '@value': 'NorthMidLatitude',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Northern Mid Latitude region.'
              }
            }
          },
          {
            '@value': 'SouthMidLatitude',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Southern Mid Latitude region.'
              }
            }
          },
          {
            '@value': 'LowLatitude',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Low Latitude region.'
              }
            }
          },
          {
            '@value': 'None',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'No region.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'DateFormat',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Date format enumeration.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'yyyy_ddd',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'yyyy ddd date format.'
              }
            }
          },
          {
            '@value': 'yy_mm_dd',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'yy/mm/dd date format.'
              }
            }
          },
          {
            '@value': 'yy_Mmm_dd',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'yy-Mmm-dd date format.'
              }
            }
          },
          {
            '@value': 'yy_CMMM_dd',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'yy-MMM-dd date format.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'TimeFormat',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Time format enumeration.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'hh_hhhh',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'hh.hhhh time format.'
              }
            }
          },
          {
            '@value': 'hh_mm_ss',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'hh:mm:ss time format.'
              }
            }
          },
          {
            '@value': 'hh_mm',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'hh:mm time format.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'DistanceFormat',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Distance format enumeration.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'Re',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Earth Radii.'
              }
            }
          },
          {
            '@value': 'Km',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'kilometers.'
              }
            }
          },
          {
            '@value': 'IntegerKm',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Integer kilometers.'
              }
            }
          },
          {
            '@value': 'ScientificNotationKm',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Scientific Notation kilometers.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'DegreeFormat',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Degree format enumeration.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'Decimal',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'dd.ddd... format.'
              }
            }
          },
          {
            '@value': 'Minutes',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': "ddd dd' format."
              }
            }
          },
          {
            '@value': 'MinutesSeconds',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'ddd dd\' dd" format.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'LatLonFormat',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Latitude/Longitude format enumeration.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'Lat90Lon360',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Latitude (-90,+90), Longitude (0, 360)'
              }
            }
          },
          {
            '@value': 'Lat90Lon180',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Latitude (-90,+90), Longitude (-180,+180)'
              }
            }
          },
          {
            '@value': 'Lat90SnLon180We',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Latitude (90S,90N), Longitude (180W,180E)'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'ResultStatusCode',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Result status code.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'Success',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Sucessful status.'
              }
            }
          },
          {
            '@value': 'ConditionalSuccess',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Conditionally sucessful status.'
              }
            }
          },
          {
            '@value': 'Error',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Error status.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'ResultStatusSubCode',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Result status sub-code.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'Success',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Sucessful status.'
              }
            }
          },
          {
            '@value': 'MissingRequest',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'The required request object was missing or null.'
              }
            }
          },
          {
            '@value': 'MissingSatellites',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'The required set of satellites was missing or null.'
              }
            }
          },
          {
            '@value': 'InvalidBeginTime',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'The required begin time value was missing or invalid.'
              }
            }
          },
          {
            '@value': 'InvalidEndTime',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'The required end time value was missing or invalid.'
              }
            }
          },
          {
            '@value': 'InvalidSatellite',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'The specified satellite is invalid or null.'
              }
            }
          },
          {
            '@value': 'InvalidTimeRange',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'The request contained an invalid time range.'
              }
            }
          },
          {
            '@value': 'InvalidResolutionFactor',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Invalid resolution factor value.'
              }
            }
          },
          {
            '@value': 'MissingOutputOptions',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'The OutputOptions were missing or null.'
              }
            }
          },
          {
            '@value': 'MissingCoordOptions',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'The OutputOptions contain a null element in non-empty List of FilteredCoordinateOptions.'
              }
            }
          },
          {
            '@value': 'MissingCoordSystem',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'The CoordinateOptions contain a null value for the CoordinateSystem.'
              }
            }
          },
          {
            '@value': 'InvalidCoordSystem',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Invalid CoordinateSystem value.'
              }
            }
          },
          {
            '@value': 'MissingCoordComponent',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'The CoordinateOptions contain a null value for the CoordinateComponent.'
              }
            }
          },
          {
            '@value': 'MissingGraphOptions',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'The GraphOptions were missing or null.'
              }
            }
          },
          {
            '@value': 'MissingCoordinateSystem',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'The required CoordinateSystem value is missing or null.'
              }
            }
          },
          {
            '@value': 'MissingCoordinateComponent',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'The required CoordinateComponent value is missing or null.'
              }
            }
          },
          {
            '@value': 'ServerError',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'An unexpected error occurred on the server.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'SpaceRegion',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'The different regions of space supported by SSC.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'InterplanetaryMedium',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Interplanetary medium.'
              }
            }
          },
          {
            '@value': 'DaysideMagnetosheath',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Dayside magnetosheath.'
              }
            }
          },
          {
            '@value': 'NightsideMagnetosheath',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Nightside magnetosheath.'
              }
            }
          },
          {
            '@value': 'DaysideMagnetosphere',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Dayside magnetosphere.'
              }
            }
          },
          {
            '@value': 'NightsideMagnetosphere',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Nightside magnetosphere.'
              }
            }
          },
          {
            '@value': 'PlasmaSheet',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Plasma sheet.'
              }
            }
          },
          {
            '@value': 'TailLobe',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Tail Lobe.'
              }
            }
          },
          {
            '@value': 'LowLatitudeBoundaryLayer',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Low-latitude boundary layer.'
              }
            }
          },
          {
            '@value': 'HighLatitudeBoundaryLayer',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'High-latitude boundary layer.'
              }
            }
          },
          {
            '@value': 'DaysidePlasmasphere',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Dayside plasmasphere.'
              }
            }
          },
          {
            '@value': 'NightsidePlasmasphere',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Nightside plasmasphere.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'FootpointRegion',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'The different footpoint regions supported by SSC.'
        }
      },
      restriction: {
        '@base': 'xsd:string',
        enumeration: [
          {
            '@value': 'NotApplicable',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text':
                  'Region value for magnetic field traced footpoints indicating that the satellite was outside the magnetic field and therefore no field line trace could be performed.'
              }
            }
          },
          {
            '@value': 'NorthCusp',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Northern cusp region.'
              }
            }
          },
          {
            '@value': 'SouthCusp',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Southern cusp region.'
              }
            }
          },
          {
            '@value': 'NorthCleft',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Northern cleft region.'
              }
            }
          },
          {
            '@value': 'SouthCleft',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Southern cleft region.'
              }
            }
          },
          {
            '@value': 'NorthAuroralOval',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Northern auroral oval region.'
              }
            }
          },
          {
            '@value': 'SouthAuroralOval',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Southern auroral oval region.'
              }
            }
          },
          {
            '@value': 'NorthPolarCap',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Northern polar cap region.'
              }
            }
          },
          {
            '@value': 'SouthPolarCap',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Southern polar cap region.'
              }
            }
          },
          {
            '@value': 'NorthMidLatitude',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Northern mid-latitude region.'
              }
            }
          },
          {
            '@value': 'SouthMidLatitude',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Southern mid-latitude region.'
              }
            }
          },
          {
            '@value': 'LowLatitude',
            annotation: {
              documentation: {
                '@lang': 'en',
                '#text': 'Low-latitude region.'
              }
            }
          }
        ]
      }
    },
    {
      '@name': 'SatelliteId',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Satellite identifier.'
        }
      },
      restriction: {
        '@base': 'xsd:string'
      }
    },
    {
      '@name': 'GroundStationId',
      annotation: {
        documentation: {
          '@lang': 'en',
          '#text': 'Ground Station identifier.'
        }
      },
      restriction: {
        '@base': 'xsd:string'
      }
    }
  ]
}
