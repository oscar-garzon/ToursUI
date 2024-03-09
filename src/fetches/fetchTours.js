let BASE_URL = "http://localhost:8082/";

export  function fetchTours() {
    let tours = [
        {
            "tourID": 1,
            "description": "chichen-itza",
            "alternativeDescription": "altDes",
            "name": "chichen-itza tour",
            "price": 69,
            "imgUrl": "src/assets/images/chichen-itza-tour.jpg",
            "categories": [
                "TIERRA",
                "AVENTURA"
            ]
        },
        {
            "tourID": 2,
            "description": "isla mujerse",
            "alternativeDescription": "altDes",
            "name": "isla mujeres tour",
            "price": 69,
            "imgUrl": "src/assets/images/isla-mujeres.jpg",
            "categories": [
                "MAR"
            ]
        },
        {
            "tourID": 3,
            "description": "tiburon ballena",
            "alternativeDescription": "altDes",
            "name": "tiburon ballena tour",
            "price": 109,
            "imgUrl": "src/assets/images/tiburon-ballena.jpg",
            "categories": [
                "MAR",
                "AVENTURA"
            ]
        },
        {
            "tourID": 4,
            "description": "chichen-itza",
            "alternativeDescription": "altDes",
            "name": "chichen-itza tour",
            "price": 69,
            "imgUrl": "src/assets/images/chichen-itza-tour.jpg",
            "categories": [
                "TIERRA",
                "AVENTURA"
            ]
        },
        {
            "tourID": 5,
            "description": "isla mujerse",
            "alternativeDescription": "altDes",
            "name": "isla mujeres tour",
            "price": 69,
            "imgUrl": "src/assets/images/isla-mujeres.jpg",
            "categories": [
                "MAR"
            ]
        },
        {
            "tourID": 6,
            "description": "tiburon ballena",
            "alternativeDescription": "altDes",
            "name": "tiburon ballena tour",
            "price": 109,
            "imgUrl": "src/assets/images/tiburon-ballena.jpg",
            "categories": [
                "MAR",
                "AVENTURA"
            ]
        }
    ]
    return tours;
    }

export function fetchToursBySea() {
    return [
        {
            "tourID": 2,
            "description": "isla mujerse",
            "alternativeDescription": "altDes",
            "name": "isla mujeres tour",
            "price": 69,
            "imgUrl": "src/assets/images/isla-mujeres.jpg",
            "categories": [
                "MAR"
            ]
        },
        {
            "tourID": 3,
            "description": "tiburon ballena",
            "alternativeDescription": "altDes",
            "name": "tiburon ballena tour",
            "price": 109,
            "imgUrl": "src/assets/images/tiburon-ballena.jpg",
            "categories": [
                "MAR",
                "AVENTURA"
            ]
        },
        {
            "tourID": 5,
            "description": "isla mujerse",
            "alternativeDescription": "altDes",
            "name": "isla mujeres tour",
            "price": 69,
            "imgUrl": "src/assets/images/isla-mujeres.jpg",
            "categories": [
                "MAR"
            ]
        },
        {
            "tourID": 6,
            "description": "tiburon ballena",
            "alternativeDescription": "altDes",
            "name": "tiburon ballena tour",
            "price": 109,
            "imgUrl": "src/assets/images/tiburon-ballena.jpg",
            "categories": [
                "MAR",
                "AVENTURA"
            ]
        }
    ];
}

export function fetchToursByLand() {
    return [
        {
            "tourID": 1,
            "description": "chichen-itza",
            "alternativeDescription": "altDes",
            "name": "chichen-itza tour",
            "price": 69,
            "imgUrl": "src/assets/images/chichen-itza-tour.jpg",
            "categories": [
                "TIERRA",
                "AVENTURA"
            ]
        },
        {
            "tourID": 4,
            "description": "chichen-itza",
            "alternativeDescription": "altDes",
            "name": "chichen-itza tour",
            "price": 69,
            "imgUrl": "src/assets/images/chichen-itza-tour.jpg",
            "categories": [
                "TIERRA",
                "AVENTURA"
            ]
        }
    ];
}
      
