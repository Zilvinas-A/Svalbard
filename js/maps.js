
    
        
        var map = AmCharts.makeChart("mapdiv", {
            type: "map",
            theme: "dark",
            projection: "mercator",
            panEventsEnabled: true,
            backgroundColor: "#535364",
            backgroundAlpha: 1,
            zoomControl: {
                zoomControlEnabled: true
            },
            dataProvider: {
                map: "worldHigh",
                getAreasFromMap: true,
                areas:
                    [
                        {
                            "id": "AT",
                            "showAsSelected": true
                        },
                        {
                            "id": "BY",
                            "showAsSelected": true
                        },
                        {
                            "id": "BE",
                            "showAsSelected": true
                        },
                        {
                            "id": "BA",
                            "showAsSelected": true
                        },
                        {
                            "id": "BG",
                            "showAsSelected": true
                        },
                        {
                            "id": "HR",
                            "showAsSelected": true
                        },
                        {
                            "id": "CY",
                            "showAsSelected": true
                        },
                        {
                            "id": "CZ",
                            "showAsSelected": true
                        },
                        {
                            "id": "DK",
                            "showAsSelected": true
                        },
                        {
                            "id": "EE",
                            "showAsSelected": true
                        },
                        {
                            "id": "FI",
                            "showAsSelected": true
                        },
                        {
                            "id": "FR",
                            "showAsSelected": true
                        },
                        {
                            "id": "GE",
                            "showAsSelected": true
                        },
                        {
                            "id": "DE",
                            "showAsSelected": true
                        },
                        {
                            "id": "GI",
                            "showAsSelected": true
                        },
                        {
                            "id": "GR",
                            "showAsSelected": true
                        },
                        {
                            "id": "HU",
                            "showAsSelected": true
                        },
                        {
                            "id": "IS",
                            "showAsSelected": true
                        },
                        {
                            "id": "IE",
                            "showAsSelected": true
                        },
                        {
                            "id": "IT",
                            "showAsSelected": true
                        },
                        {
                            "id": "LV",
                            "showAsSelected": true
                        },
                        {
                            "id": "LT",
                            "showAsSelected": true
                        },
                        {
                            "id": "MC",
                            "showAsSelected": true
                        },
                        {
                            "id": "ME",
                            "showAsSelected": true
                        },
                        {
                            "id": "NL",
                            "showAsSelected": true
                        },
                        {
                            "id": "NO",
                            "showAsSelected": true
                        },
                        {
                            "id": "PL",
                            "showAsSelected": true
                        },
                        {
                            "id": "RU",
                            "showAsSelected": true
                        },
                        {
                            "id": "RS",
                            "showAsSelected": true
                        },
                        {
                            "id": "SK",
                            "showAsSelected": true
                        },
                        {
                            "id": "SI",
                            "showAsSelected": true
                        },
                        {
                            "id": "ES",
                            "showAsSelected": true
                        },
                        {
                            "id": "SJ",
                            "showAsSelected": true
                        },
                        {
                            "id": "CH",
                            "showAsSelected": true
                        },
                        {
                            "id": "TR",
                            "showAsSelected": true
                        },
                        {
                            "id": "UA",
                            "showAsSelected": true
                        },
                        {
                            "id": "GB",
                            "showAsSelected": true
                        },
                        {
                            "id": "VA",
                            "showAsSelected": true
                        },
                        {
                            "id": "MA",
                            "showAsSelected": true
                        },
                        {
                            "id": "IL",
                            "showAsSelected": true
                        }
                    ]
            },
            areasSettings: {
                autoZoom: true,
                color: "#B4B4B7",
                colorSolid: "#84ADE9",
                selectedColor: "#84ADE9",
                outlineColor: "#666666",
                rollOverColor: "#9EC2F7",
                rollOverOutlineColor: "#000000"
            }
        });
