"use client";

import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import { FormattedMessage } from "react-intl";
import { FcRating } from "react-icons/fc";

export default function GoogleMap() {
  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string}
      language="vi"
      onLoad={() => {
        console.log(
          <FormattedMessage id="mapLoaded" defaultMessage={"message loaded"} />
        );
      }}
    >
      <Map
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "500px",
          position: "absolute",
        }}
        defaultCenter={{ lat: 37.590522, lng: 127.055875 }}
        defaultZoom={16}
        gestureHandling={"none"}
        disableDefaultUI={true}
        zoomControl={false}
        scaleControl={false}
        streetViewControl={false}
        minZoom={16}
        maxZoom={16}
        mapId={"default"}
        restriction={{
          latLngBounds: {
            north: 0,
            south: 0,
            east: 0,
            west: 0,
          },
        }}
      >
        <AdvancedMarker position={{ lat: 37.590522, lng: 127.055875 }}>
          <div className="flex flex-col items-center justify-center">
            <div className=" bg-red-300 p-1 text-sm">Quan an ngon</div>
            <FcRating size={30} />
          </div>
        </AdvancedMarker>

        <AdvancedMarker position={{ lat: 37.590251, lng: 127.058066 }}>
          <div className="flex flex-col items-center justify-center">
            <div className=" bg-blue-300 p-1 text-sm">Tap hoa</div>
            <FcRating size={30} />
          </div>
        </AdvancedMarker>

        <AdvancedMarker position={{ lat: 37.59121, lng: 127.056966 }}>
          <div className="flex flex-col items-center justify-center">
            <div className=" bg-green-300 p-1 text-sm">Cua hang dien thoai</div>
            <FcRating size={30} />
          </div>
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
}
