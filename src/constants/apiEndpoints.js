export const BASE_URL = 'http://localhost:8000';
export const API_URL = `${BASE_URL}/api`;

export const GET_ALL_EVENTS = `${API_URL}/events`;
export const GET_EVENT_BY_ID = (id) => `${API_URL}/events/${id}`;
export const PATCH_DATA_BY_ID = (id) => `${API_URL}/events/${id}`;
