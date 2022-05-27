import * as React from 'react';
import { useState } from 'react'
import { fetchFlyers } from './../utils'
import Grid from '@mui/material/Grid';
import InfiniteScroll from 'react-infinite-scroll-component';

const Flyers = () => {

  const [flyers, setFlyers] = useState([]);
  const [chunk, setChunk] = useState([]);
  const [page, setPage] = useState(0);
  const [isEnd, setEnd] = useState(false);

  const updateFlyers = async (page, limit) => {
    
    setChunk(await fetchFlyers(page, limit));

    setFlyers(flyers.concat(chunk));

    flyers.length > 99 ? setEnd(true) : setPage(page + 1);

  }

  return (
    <div>
      <Grid container spacing={{ xs: 1, sm: 2 }} columns={{ xs: 2, sm: 4 }}>
        {/* <InfiniteScroll
          dataLength={flyers.length}
          next={updateFlyers(page, limit)}
          hasMore={!isEnd}
          loader={<h4>Loading...</h4>}
        >
        </InfiniteScroll> */}
      </Grid>
    </div>
  );
}

export default Flyers