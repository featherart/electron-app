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
        setAssetList(response && response.items);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {loading && <span>loading...</span>}
      {assetList &&
        assetList.map((asset, i) => {
          return (
            <div>
              <span style={{ display: 'block' }} key={i}>
                {asset.fields.title}
              </span>
              <img
                alt={asset.fields.imageName.fields.file.fileName}
                key={i}
                style={{ height: '100px', borderRadius: '50%' }}
                src={asset.fields.imageName.fields.file.url}
              />
            </div>
          );
        })}
    </div>
  );
};
