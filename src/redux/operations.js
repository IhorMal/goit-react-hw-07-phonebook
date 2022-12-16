
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://639b789931877e43d68d4a2b.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, {rejectWithValue}) => {
try {
  const response = await axios.get("/contacts");
  return response.data;
} catch (error) {
  if (!error.response) {
    throw error
  }
 return rejectWithValue(error.response.data)
}
});

export const addContact = createAsyncThunk("contacts/addContact", async (contacts, {rejectWithValue}) => {
   try {
    const response = await axios.post("/contacts", {...contacts});
    return response.data;
   } catch (error) {
    if (!error.response) {
      throw error
    }
   return rejectWithValue(error.response.data)
  }
});

export const deleteContact  = createAsyncThunk("contacts/deleteContact", async (id, {rejectWithValue}) => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error
    }
   return rejectWithValue(error.response.data)
   
  }
});