import * as React from 'react'

export const fetchFlyers = async (page, limit) => {

  try {
    const res = await fetch(`/api/flyers/?page=${page}&limit=${limit}`, {
      headers: {
        "accept": "application/json"
      }
    });
    var arr;

    if (res.ok) return await res.json();
    else throw new Error('Flyers fetch failed');

  }
  catch (e) {
    console.log(e);
  }
}