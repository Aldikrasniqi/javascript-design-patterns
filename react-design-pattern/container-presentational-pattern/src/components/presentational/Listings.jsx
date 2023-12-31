import React from 'react';
import withLoader from '../HOC/withLoader';
import { Listing } from './Listing';
import { ListingsGrid } from './ListingGrid';

export function Listings(props) {
  return (
    <ListingsGrid>
      {props.data.listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}

export default withLoader(
  Listings,
  'https://house-lydiahallie.vercel.app/api/listings'
);
