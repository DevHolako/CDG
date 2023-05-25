import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addResource,
  deleteResource,
  getAllResource,
  updateResource,
} from "../../../api/requests";
import { actions } from "react-table";
import { toast } from "react-toastify";

const State = {
  clientListe: [],
  status: "idle",
  error: null,
};

export const GetAllClients = createAsyncThunk(
  "client/GetAllClients",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await getAllResource("client");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const AddClient = createAsyncThunk(
  "client/AddClient",
  async (client, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await addResource("client", client);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const UpdateClient = createAsyncThunk(
  "client/UpdateClient",
  async (client, thunkAPI) => {
    const { id } = client;
    const { data } = client;
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await updateResource("client", id, data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const DeleteClient = createAsyncThunk(
  "client/UpdateClient",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await deleteResource("client", id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const clientSlice = createSlice({
  name: "client",
  initialState: State,
  reducers: {},
  extraReducers: (bulider) => {
    // ** GET ALL
    bulider.addCase(GetAllClients.pending, (state, actions) => {
      state.status = "pending";
      toast.info("loading...");
    });
    bulider.addCase(GetAllClients.fulfilled, (state, actions) => {
      state.status = "fulfilled";
      state.clientListe = actions.payload;
    });
    bulider.addCase(GetAllClients.rejected, (state, actions) => {
      state.status = "rejected";
      state.error = actions.payload;
    });

    // ** Add Cline
    bulider.addCase(AddClient.pending, (state, actions) => {
      state.status = "pending";
    });
    bulider.addCase(AddClient.fulfilled, (state, actions) => {
      state.status = "fulfilled";
      const { message } = actions.payload;
      toast.success(message);
    });
    bulider.addCase(AddClient.rejected, (state, actions) => {
      state.status = "rejected";
    });
  },
});

export default counterSlice.reducer;
