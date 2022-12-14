import { useState } from 'react';
import config from '../config';

let isFetching = false;
let storedData = {};
export const FetchSettings = () => {
  const [dataSettings, setDataSettings] = useState(storedData);
  if (!isFetching) {
    isFetching = true;
    fetch(`${config.api}/sisteminfo`)
      .then(res => res.json())
      .then(json => {
        storedData = {
          organization: json.organization,
          logo: json.logo,
          tentangkami: json.tentangkami,
          address: [
            json.address,
            json.city,
            json.postalcode,
            json.administrativearea,
            json.country
          ].join(', '),
          email: json.email,
          phone: json.phone,
          fax: json.fax
        };
        const pageTitle = `Geoportal ${json.organization}`;
        document.title = pageTitle;
        setDataSettings(storedData);
      });
  }
  return dataSettings;
};

export default FetchSettings;
