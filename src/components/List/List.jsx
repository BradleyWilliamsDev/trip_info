import React, {useState} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card} from '@material-ui/core';

import useStyles from './styles';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({places}) => {
  const classes = useStyles();
  const [state, setState] = useState('restaurants');
  const [rating, setRating] = useState(0);

  return (
    <div className={classes.container}>
      <Typography variant='h4'>
        Restaurants, Hotels, and Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={state} onChange={(e) => setState(e.target.value)}>
          <MenuItem value='restaurants'>Restaurants</MenuItem>
          <MenuItem value='hotels'>Hotels</MenuItem>
          <MenuItem value='pointsOfInterest'>Points Of Interest</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0 stars</MenuItem>
          <MenuItem value={4}>Above 4.0 stars</MenuItem>
          <MenuItem value={4.5}>Above 4.5 stars</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {
          places?.map((place, i) => (
            <Grid item key={i} xs={12}>
              <PlaceDetails place={place} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default List