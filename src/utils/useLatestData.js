import { useEffect, useState } from 'react';

export default function useLatestData() {
  const gql = String.raw;
  const [hotSlices, setHotSlices] = useState();
  const [slicemasters, setSlicemasters] = useState();
  const details = gql`
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
  `;

  useEffect(function () {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              slicemaster {
                ${details}
              }
              hotslices {
                ${details}
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setHotSlices(res.data.StoreSettings.hotslices);
        setSlicemasters(res.data.StoreSettings.slicemaster);
      })
      .catch((err) => {
        console.log('Error!', err);
      });
  }, []);

  return {
    hotSlices,
    slicemasters,
  };
}
