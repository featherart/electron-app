import React, { useEffect, useState } from 'react';
import { MapView } from '../Map';
const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

export const LocationFetcher = props => {
  const [ assetList, setAssetList ] = useState([]);
  console.log('assetList', assetList)

  useEffect(() => {
    client
      .getEntries({
        content_type: 'marker'
      })
      .then(response => {
        const items = response.items.map(item => {
          // make this a function?
          const { title, description, coordinates: { lat, lon }, imageName } = item.fields;
          const { fileName, url } = imageName.fields.file;
          const imageTitle = imageName.fields.file.title;
          const imageDescription = imageName.fields.file.description;
          return {
            title,
            lat,
            lon,
            description,
            imageName,
            fileName,
            imageTitle,
            imageDescription,
            url
          };
        });
        setAssetList(items);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {assetList.length > 0 && (<MapView markers={assetList}/>) }
    </div>
  );
};
