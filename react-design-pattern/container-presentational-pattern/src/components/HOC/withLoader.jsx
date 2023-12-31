import React from 'react';
import { LoadingSpinner } from '../LoadingSpiner';

export default function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res))
        .then(() => setLoading(false));
    }, []);
    const [loading, setLoading] = React.useState(true);

    return loading ? <LoadingSpinner /> : <Element {...props} data={data} />;
  };
}
