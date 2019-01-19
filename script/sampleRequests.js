module.exports = {
  BfieldModel: {
    ExternalBFieldModel: {
      '@class': 'gov.nasa.gsfc.sscweb.schema.Tsyganenko89CBFieldModel',
      KeyParameterValues: 'KP_3_3_3'
    },
    InternalBFieldModel: 'IGRF',
    TraceStopAltitude: 500
  },
  Description: 'Complex locator request with nearly all options.',
  FormatOptions: null,
  LocationFilterOptions: null,
  OutputOptions: {
    AllLocationFilters: true,
    CoordinateOptions: [
      'java.util.ArrayList',
      [
        {
          Component: 'X',
          CoordinateSystem: 'GSE',
          Filter: null
        },
        {
          Component: 'Y',
          CoordinateSystem: 'GSE',
          Filter: null
        },
        {
          Component: 'Z',
          CoordinateSystem: 'GSE',
          Filter: null
        },
        {
          Component: 'LAT',
          CoordinateSystem: 'GSE',
          Filter: null
        },
        {
          Component: 'LON',
          CoordinateSystem: 'GSE',
          Filter: null
        },
        {
          Component: 'LOCAL_TIME',
          CoordinateSystem: 'GSE',
          Filter: null
        }
      ]
    ],
    DistanceFromOptions: {
      BgseXYZ: true,
      BowShock: true,
      Mpause: true,
      NeutralSheet: true
    },
    MinMaxPoints: 2,
    RegionOptions: {
      NorthBTracedFootpoint: true,
      RadialTracedFootpoint: true,
      SouthBTracedFootpoint: true,
      Spacecraft: true
    },
    ValueOptions: {
      BfieldStrength: true,
      DipoleInvLat: true,
      DipoleLValue: true,
      RadialDistance: true
    }
  },
  RegionFilterOptions: {
    MagneticTraceRegions: {
      AuroralOval: {
        North: true,
        South: true
      },
      Cleft: {
        North: true,
        South: true
      },
      Cusp: {
        North: true,
        South: true
      },
      LowLatitude: true,
      MidLatitude: {
        North: true,
        South: true
      },
      PolarCap: {
        North: true,
        South: true
      }
    },
    RadialTraceRegions: {
      AuroralOval: {
        North: true,
        South: true
      },
      Cleft: {
        North: true,
        South: true
      },
      Cusp: {
        North: true,
        South: true
      },
      LowLatitude: true,
      MidLatitude: {
        North: true,
        South: true
      },
      PolarCap: {
        North: true,
        South: true
      }
    },
    SpaceRegions: {
      DaysideMagnetosheath: true,
      DaysideMagnetosphere: true,
      DaysidePlasmasphere: true,
      HighLatitudeBoundaryLayer: true,
      InterplanetaryMedium: true,
      LowLatitudeBoundaryLayer: true,
      NightsideMagnetosheath: true,
      NightsideMagnetosphere: true,
      NightsidePlasmasphere: true,
      PlasmaSheet: true,
      TailLobe: true
    }
  },
  Satellites: [
    'java.util.ArrayList',
    [
      {
        Id: 'themisa',
        ResolutionFactor: 2
      },
      {
        Id: 'themisb',
        ResolutionFactor: 2
      }
    ]
  ],
  TimeInterval: {
    End: [
      'javax.xml.datatype.XMLGregorianCalendar',
      '2008-01-02T11:59:59.000+0000'
    ],
    Start: [
      'javax.xml.datatype.XMLGregorianCalendar',
      '2008-01-02T11:00:00.000+0000'
    ]
  }
}

const arr = [
  'java.util.ArrayList',
  [
    {
      Id: 'themisa',
      Coordinates: [
        'java.util.ArrayList',
        [
          {
            CoordinateSystem: 'GSE',
            X: [
              'java.util.ArrayList',
              [
                -38333.346871703296,
                -38162.15294485588,
                -37989.824727872685,
                -37816.47323278781,
                -37642.08018542552,
                -37466.65805974719,
                -37290.28691971532,
                -37112.7824861461,
                -36934.25566279979,
                -36754.77464077335,
                -36574.254204754965,
                -36392.58030694345,
                -36209.975610038644,
                -36026.33205792979,
                -35841.63091410942,
                -35655.90997128315,
                -35469.10496892464,
                -35281.37481683285,
                -35092.49438797906,
                -34902.65095650578,
                -34711.76481943243,
                -34519.82735217349,
                -34326.83236331675,
                -34132.867689301784,
                -33937.8492486347,
                -33741.68990203566,
                -33544.538644174056,
                -33346.454371661144,
                -33147.19766407968,
                -32946.981785725504
              ]
            ],
            Y: [
              'java.util.ArrayList',
              [
                -42665.96048369694,
                -42711.824062681124,
                -42756.49540595901,
                -42800.05432127316,
                -42842.40726560494,
                -42883.64907183783,
                -42923.661468958664,
                -42962.49146634715,
                -43000.20428777962,
                -43036.69378260051,
                -43071.972360190084,
                -43105.96097031003,
                -43138.82385564441,
                -43170.480752648546,
                -43200.828481589815,
                -43230.0637842116,
                -43257.89322618944,
                -43284.596079484916,
                -43310.00874586447,
                -43334.09826535042,
                -43356.978118042796,
                -43378.55280764474,
                -43398.82364566139,
                -43417.76317986712,
                -43435.39821522778,
                -43451.74158930015,
                -43466.66589128082,
                -43480.358717481206,
                -43492.66914177711,
                -43503.65133074021
              ]
            ],
            Z: [
              'java.util.ArrayList',
              [
                -16695.336090025594,
                -16645.32707731967,
                -16594.828292036334,
                -16543.87068633172,
                -16492.464633302137,
                -16440.60701451078,
                -16388.332302018902,
                -16335.556896987162,
                -16282.323346435678,
                -16228.680503709458,
                -16174.56872353614,
                -16119.95774602388,
                -16064.928453043516,
                -16009.430496049252,
                -15953.464823375665,
                -15897.041680083898,
                -15840.147976109165,
                -15782.827608274427,
                -15724.999019807465,
                -15666.73297555314,
                -15607.99759238363,
                -15548.786418576066,
                -15489.10780252248,
                -15428.990107445617,
                -15368.39567339621,
                -15307.275373596152,
                -15245.725291499451,
                -15183.721877130938,
                -15121.209567228976,
                -15058.240259752161
              ]
            ],
            Latitude: [
              'java.util.ArrayList',
              [
                -16.229084,
                -16.204458,
                -16.179628,
                -16.154585,
                -16.129356,
                -16.103914,
                -16.078299,
                -16.05245,
                -16.026375,
                -16.000124,
                -15.973649,
                -15.946956,
                -15.920044,
                -15.892899,
                -15.865541,
                -15.837931,
                -15.8101225,
                -15.78207,
                -15.753764,
                -15.725243,
                -15.696463,
                -15.667434,
                -15.638161,
                -15.608659,
                -15.578896,
                -15.548831,
                -15.518556,
                -15.487992,
                -15.457154,
                -15.426041
              ]
            ],
            Longitude: [
              'java.util.ArrayList',
              [
                228.0618,
                228.21985,
                228.3784,
                228.53743,
                228.6969,
                228.85689,
                229.01726,
                229.17819,
                229.33966,
                229.50157,
                229.66399,
                229.82698,
                229.9905,
                230.15456,
                230.31915,
                230.48438,
                230.65012,
                230.81644,
                230.98343,
                231.15094,
                231.3191,
                231.4879,
                231.65733,
                231.82735,
                231.99803,
                232.1695,
                232.34155,
                232.51427,
                232.68777,
                232.86197
              ]
            ],
            LocalTime: [
              'java.util.ArrayList',
              [
                3.204166666666667,
                3.2147222222222225,
                3.225277777777778,
                3.2358333333333333,
                3.2463888888888888,
                3.257222222222222,
                3.267777777777778,
                3.278611111111111,
                3.2894444444444444,
                3.3,
                3.310833333333333,
                3.3216666666666663,
                3.3327777777777774,
                3.343611111111111,
                3.354722222222222,
                3.365555555555556,
                3.3766666666666665,
                3.3877777777777776,
                3.398888888888889,
                3.4099999999999997,
                3.4213888888888886,
                3.4324999999999997,
                3.443888888888889,
                3.455277777777778,
                3.466666666666667,
                3.4780555555555557,
                3.4894444444444446,
                3.5008333333333335,
                3.5125,
                3.5241666666666664
              ]
            ]
          }
        ]
      ],
      Time: [
        'java.util.ArrayList',
        [
          ['java.util.GregorianCalendar', '2008-01-02T11:00:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:02:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:04:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:06:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:08:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:10:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:12:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:14:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:16:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:18:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:20:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:22:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:24:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:26:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:28:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:30:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:32:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:34:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:36:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:38:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:40:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:42:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:44:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:46:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:48:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:50:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:52:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:54:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:56:00.000+0000'],
          ['java.util.GregorianCalendar', '2008-01-02T11:58:00.000+0000']
        ]
      ],
      RadialLength: [
        'java.util.ArrayList',
        [
          59737.45828496324,
          59646.598850232294,
          59554.454216063634,
          59461.16348986003,
          59366.652754093266,
          59270.99958132143,
          59174.18065772426,
          59076.09266313892,
          58976.86726163593,
          58876.48554167733,
          58774.88881463995,
          58671.94234374568,
          58567.92971879139,
          58462.71361063894,
          58356.20905979906,
          58248.590306197686,
          58139.59949394147,
          58029.55558782489,
          57918.18040753636,
          57805.58490259828,
          57691.79980486763,
          57576.74956616095,
          57460.43666541615,
          57342.90330320619,
          57224.112247463556,
          57104.01186501821,
          56982.6224675373,
          56860.11810042353,
          56736.231525843454,
          56611.14638007915
        ]
      ],
      MagneticStrength: [
        'java.util.ArrayList',
        [
          23.16089606249059,
          23.40332539016162,
          23.649168596678884,
          23.898286243631137,
          24.150752939125905,
          24.40648257567672,
          24.66549143352073,
          24.92779813794566,
          25.193319579775373,
          25.462120280706113,
          25.73416443698014,
          26.00957949760072,
          26.288178869426563,
          26.570038169242952,
          26.855236207492368,
          27.14367247047655,
          27.435571514257028,
          27.73068461525417,
          28.02924728991011,
          28.331211152530518,
          28.63657658027688,
          28.945430641052198,
          29.257844192530374,
          29.57380976155717,
          29.893395321001908,
          30.21663599325104,
          30.543704543853295,
          30.874366853416785,
          31.20902596911457,
          31.547499313150727
        ]
      ],
      NeutralSheetDistance: [
        'java.util.ArrayList',
        [
          -5453.931608212245,
          -5498.63110456991,
          -5543.002479339095,
          -5587.068103564579,
          -5630.8164213002065,
          -5674.264429195893,
          -5717.3931279166145,
          -5760.175368596683,
          -5802.641237495742,
          -5844.793206952553,
          -5886.593539638983,
          -5928.018408071217,
          -5969.133955959489,
          -6009.893629794965,
          -6050.27468743989,
          -6090.32688284406,
          -6129.975895296779,
          -6169.295544729578,
          -6208.216633426644,
          -6246.753035230761,
          -6284.919774159666,
          -6322.686305607972,
          -6360.061375537294,
          -6397.04268513066,
          -6433.618271758759,
          -6469.761505760259,
          -6505.499122039537,
          -6540.836586761975,
          -6575.739282611675,
          -6610.217178726712
        ]
      ],
      BowShockDistance: [
        'java.util.ArrayList',
        [
          -102010.0161989693,
          -101865.1942023227,
          -101720.34617806846,
          -101575.4887847125,
          -101430.67224185691,
          -101285.69414993474,
          -101140.72614637078,
          -100995.71186954022,
          -100850.68322983265,
          -100705.7501036001,
          -100560.85382032648,
          -100415.96208317942,
          -100271.11994314604,
          -100126.30869342142,
          -99981.58093973325,
          -99836.83105429584,
          -99692.21045922567,
          -99547.35912577661,
          -99402.44697880348,
          -99257.67893196185,
          -99112.92798240279,
          -98968.25514715957,
          -98823.6460396975,
          -98679.18325503716,
          -98534.79211558354,
          -98390.40989003326,
          -98245.80961462836,
          -98101.29036395946,
          -97956.80015836329,
          -97812.45624004144
        ]
      ],
      MagnetoPauseDistance: [
        'java.util.ArrayList',
        [
          -57019.38781316834,
          -56919.01674220171,
          -56819.16102797519,
          -56719.79300299527,
          -56620.979031158844,
          -56522.64477328716,
          -56424.91472928508,
          -56327.68985706636,
          -56230.95149948609,
          -56134.804745387155,
          -56039.217084157586,
          -55944.211444870765,
          -55849.72533466845,
          -55755.791227117676,
          -55662.48663427782,
          -55569.658279709234,
          -55477.528178561035,
          -55385.918545985034,
          -55294.887862352334,
          -55204.528261854735,
          -55114.71532186614,
          -55025.183631006745,
          -54935.859830515714,
          -54847.1951570227,
          -54759.13792221871,
          -54671.64960562498,
          -54584.879348445174,
          -54498.70170420404,
          -54413.14783512386,
          -54328.255623622754
        ]
      ],
      DipoleLValue: [
        'java.util.ArrayList',
        [
          9.393858130731687,
          9.378244625380315,
          9.36246146318113,
          9.346531016381372,
          9.330441584452684,
          9.314205827156977,
          9.297820146088185,
          9.281268824714994,
          9.264572801555392,
          9.247728920612028,
          9.230728561945313,
          9.213550571060807,
          9.196239813503349,
          9.178774969393507,
          9.16114270982493,
          9.143370742639599,
          9.125418433223603,
          9.107336332161548,
          9.089080805571363,
          9.070669339616057,
          9.052106978796715,
          9.033381940718273,
          9.014494634442691,
          8.995451783104173,
          8.976247697923668,
          8.956874464402876,
          8.937334995993488,
          8.917656987252471,
          8.897798330846529,
          8.877787991037435
        ]
      ],
      DipoleInvariantLatitude: [
        'java.util.ArrayList',
        [
          70.95743,
          70.94097,
          70.92429,
          70.90741,
          70.89032,
          70.873024,
          70.85552,
          70.83779,
          70.81986,
          70.80172,
          70.783356,
          70.76474,
          70.74593,
          70.726906,
          70.707634,
          70.68815,
          70.6684,
          70.64846,
          70.628265,
          70.60783,
          70.58716,
          70.56624,
          70.545074,
          70.52366,
          70.50199,
          70.480064,
          70.45787,
          70.43544,
          70.412735,
          70.38976
        ]
      ],
      SpacecraftRegion: [
        'java.util.ArrayList',
        [
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE',
          'NIGHTSIDE_MAGNETOSPHERE'
        ]
      ],
      RadialTracedFootpointRegions: [
        'java.util.ArrayList',
        [
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE',
          'LOW_LATITUDE'
        ]
      ],
      NorthBTracedFootpointRegions: [
        'java.util.ArrayList',
        [
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL',
          'NORTH_AURORAL_OVAL'
        ]
      ],
      SouthBTracedFootpointRegions: [
        'java.util.ArrayList',
        [
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL',
          'SOUTH_AURORAL_OVAL'
        ]
      ],
      BgseX: [
        'java.util.ArrayList',
        [
          -14.169170804012907,
          -14.372098106426261,
          -14.574589955376629,
          -14.776619393028792,
          -14.978257711468215,
          -15.179467000280168,
          -15.380299347119543,
          -15.580669307168264,
          -15.780599684028079,
          -15.98019879322268,
          -16.179362672760107,
          -16.378136409890658,
          -16.57653146997526,
          -16.77452015109687,
          -16.972146274864812,
          -17.169381895164268,
          -17.366328726694082,
          -17.562905081574183,
          -17.759137984877448,
          -17.955082279541998,
          -18.150700108899937,
          -18.346025798431477,
          -18.541109196322957,
          -18.735967922403965,
          -18.930587584750935,
          -19.124910092756924,
          -19.31915666581642,
          -19.513137811216453,
          -19.707014352510857,
          -19.900716503167786
        ]
      ],
      BgseY: [
        'java.util.ArrayList',
        [
          -6.243912145264234,
          -6.4638423817877495,
          -6.684979741763093,
          -6.907337840593764,
          -7.130966568007186,
          -7.355860837975282,
          -7.582054491305282,
          -7.809462232672352,
          -8.038139840295399,
          -8.26818301606203,
          -8.499486985177494,
          -8.732073355591274,
          -8.966024956962254,
          -9.201286501862638,
          -9.437885087583687,
          -9.67585518297728,
          -9.91522000350272,
          -10.15599802782476,
          -10.39816263551696,
          -10.641777372945954,
          -10.886847807426932,
          -11.133385289235482,
          -11.381457391452498,
          -11.631086284076275,
          -11.88227077857333,
          -12.134966017896671,
          -12.38938057795438,
          -12.645390040737015,
          -12.903124753358762,
          -13.162543461024779
        ]
      ],
      BgseZ: [
        'java.util.ArrayList',
        [
          17.224263979182005,
          17.302519481929775,
          17.383197412614585,
          17.466204287268123,
          17.551637612502915,
          17.639486623003112,
          17.729786042021487,
          17.82274298214303,
          17.918268243988948,
          18.016380582597986,
          18.11723399970059,
          18.22102555855218,
          18.327502649119065,
          18.436885121635164,
          18.549293571391456,
          18.664648708671894,
          18.783227295904833,
          18.904786244842892,
          19.02971203509758,
          19.15789980120273,
          19.289431133190266,
          19.42444411860337,
          19.56300460602485,
          19.705115243766876,
          19.850934079896916,
          20.000637732743897,
          20.15418882647077,
          20.311526224020284,
          20.47306192098898,
          20.63864459895458
        ]
      ]
    }
  ]
]
