import React, { useEffect, useState } from 'react';
const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

export const ImageFetcher = props => {
  const [ loading, setLoading ] = useState(true);
  const [ assetList, setAssetList ] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: 'marker'
      })
      .then(response => {
        const items = response.items.map( item => {
          // make this a function?
          const { title, description, coordinates: {lat, lon }, imageName } = item.fields;
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
          }
        });
        setAssetList(items);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {loading && <span>loading...</span>}
      {assetList &&
        assetList.map((asset, i) => {
          const {
            title,
            lat,
            lon,
            description,
            imageName,
            fileName,
            imageTitle,
            imageDescription,
            url
          } = asset;
          return (
            <div key={i}>
              <span style={{ display: 'block' }} key={title}>
                {title}
              </span>
              <span style={{ display: 'block' }} key={lat}>
                {lat}, {lon}
              </span>
              <img
                alt={fileName}
                key={imageName}
                style={{ height: '100px', borderRadius: '50%' }}
                src={url}
              />
            </div>
          );
        })}
    </div>
  );
};
