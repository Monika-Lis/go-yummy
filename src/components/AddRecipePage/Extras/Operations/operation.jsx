import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const BASE_URL = 'https://goit-so-yummy-gr5-f200f807d84e.herokuapp.com/';


export const RecipesAPI = {
  getPopularRecipes: async () => {
    const { data } = await axios.get(`/recipes?limit=4`);
    return data;
  },

  getAllCategories: async () => {
    const { data } = await axios.get(`/recipes/category/list`);
    return data;
  },

  getIngredients: async () => {
    const { data } = await axios.get(`/recipes/ingredients`);
    return data;
  }
};
export const getAllOwnRecipes = createAsyncThunk(
    "ownRecipes/getAll",
    async (formData, thunkAPI) => {
      try {
        const response = await {BASE_URL}.getAllOwnRecipes(formData);
  
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


export const getPopularRecipes = createAsyncThunk(
  'recipes/getPopular',
  async (_, thunkAPI) => {
    try {
      const response = await {BASE_URL}.getPopularRecipes();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addOwnRecipe = createAsyncThunk(
    "",
  async (formData, thunkAPI) => {
      try {
        const response = await { BASE_URL }.addOwnRecipe(formData);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);
export const getAllCategories = createAsyncThunk(
  'recipes/getAllCategories',
  async (_, thunkAPI) => {
    try {
      const response = await {BASE_URL}.getAllCategories();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getIngredients = createAsyncThunk(
  'recipes/getIngredients',
  async (_, thunkAPI) => {
    try {
      const response = await RecipesAPI.getIngredients();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
}
)
export const deleteOwnRecipe = createAsyncThunk(
    "ownRecipes/deleteOwnRecipe",
    async (id, thunkAPI) => {
      try {
        const response = await {BASE_URL}.deleteOwnRecipe(id);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);
