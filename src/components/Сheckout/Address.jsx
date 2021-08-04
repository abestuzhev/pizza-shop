import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import deliveryZone from "./../../assets/data/deliveryZone.geojson"
import ymaps from 'ymaps';

const Address = () => {
    const [address, setAddress] = useState(null);
    console.log(address);
    const key = "18b47ca40130c3449457d672a70a60ae6fc08a41";
    
    const coords = new Array(address?.data.geo_lat, address?.data.geo_lon);
    console.log("coords", coords);
    

    useEffect(async () => {

        

        const jsonGeo = await axios.get(deliveryZone)
        // const jsonGeo = await axios.get("https://sandbox.api.maps.yandex.net/examples/ru/2.1/delivery_zones/data.geojson")

        // var deliveryZones = ymaps.geoQuery(jsonGeo.data.features)
        // console.log("deliveryZones", deliveryZones);
        console.log("jsonGeo", jsonGeo.data.features);


        ymaps
        .load()
        .then(maps => {
            const mapDelivery = new maps.Map('map', {
                center: [64.54397171347543,40.56680977290074],
                zoom: 12
            });
            const deliveryZones = maps.geoQuery(jsonGeo.data.features);
            // const deliveryZones = maps.geoQuery(jsonGeo.data.features);
            console.log("deliveryZones", deliveryZones);
            const polygon = deliveryZones.searchContaining(coords);
            // const polygon = deliveryZones.searchContaining(maps.geocode(["64.485997", "40.737556"])).get(0);
            console.log("polygon", polygon);

            
        })
        .catch(error => console.log('Failed to load Yandex Maps', error));

    }, [address]);
    

    


    return (
        <>
        <div className="checkout-address">
            <div className="checkout-address__street">

                <AddressSuggestions filterLocations={{city: "Архангельск"}} token={key} value={address} onChange={setAddress} />
            </div>
            <div id="map"></div>

        </div>
            
            
        </>
    )
}

export default Address;