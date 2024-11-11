import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBikes = createAsyncThunk('bikes/fetchBikes', async () => {
  const response = await fetch('https://6703a68cab8a8f8927310915.mockapi.io/bike');
  const data = await response.json();
  return data;
});

const bikeSlice = createSlice({
  name: 'bikes',
  initialState: {
    favorites: [],
    bikes: [],
    status: 'idle',
    error: null
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const bikeId = action.payload;
      const index = state.favorites.indexOf(bikeId);
      if (index === -1) {
        state.favorites.push(bikeId);
      } else {
        state.favorites.splice(index, 1);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBikes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBikes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bikes = action.payload;
      })
      .addCase(fetchBikes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { toggleFavorite } = bikeSlice.actions;

export const store = configureStore({
  reducer: {
    bikes: bikeSlice.reducer
  }
});