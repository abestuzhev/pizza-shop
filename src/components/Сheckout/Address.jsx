import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import deliveryZone from "./../../assets/data/deliveryZone.geojson"
import ymaps from 'ymaps';

const Address = () => {
    const [address, setAddress] = useState(null);
    const [addressInfo, setAddressInfo] = useState("");
    console.log("address", address);
    const key = "18b47ca40130c3449457d672a70a60ae6fc08a41";

    useEffect(async () => {

        if(address) {

            const coords = new Array(address?.data.geo_lon, address?.data.geo_lat);
            console.log("coords", coords);
            const jsonGeo = await axios.get(deliveryZone)

            ymaps
            .load()
            .then( async (maps) => {

                const myMap = new maps.Map('map', {
                    center: [64.54397171347543,40.56680977290074],
                    zoom: 12
                });
                const deliveryZones = maps.geoQuery(jsonGeo.data).addToMap(myMap);
                
                const polygon = deliveryZones.searchContaining(coords).get(0);
                
                if(polygon) {
                    const textPoligon = polygon.properties.get('description');
                    setAddressInfo(textPoligon);
                    console.log("нашел полигон");
                }else {
                    setAddressInfo("Адрес не входит в зону доставки");
                    console.log("Не нашел полигона");
                }
                
            })
            .catch(error => console.log('Failed to load Yandex Maps', error));

        }
        

    }, [address]);
    

    


    return (
        <>
        <div className="checkout-address">
            <div className="checkout-address__street">

                <AddressSuggestions filterLocations={{city: "Архангельск"}} token={key} value={address} onChange={setAddress} />
            </div>
            {
                address &&
                <div className="checkout-address__text">{addressInfo}</div>
            }
           
            <div id="map"></div>

        </div>
            
            
        </>
    )
}

export default Address;