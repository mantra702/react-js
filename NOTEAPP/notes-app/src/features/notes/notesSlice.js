import {createSlice}from '@reduxjs/toolkit';
import React from 'react';
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('notes');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

const saveToLocalStorage = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

const initialState = loadFromLocalStorage();

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NOTE': {
      const newState = [...state, action.payload];
      saveToLocalStorage(newState);
      return newState;
    }
    case 'UPDATE_NOTE': {
      const newState = state.map(note =>
        note.id === action.payload.id ? action.payload : note
      );
      saveToLocalStorage(newState);
      return newState;
    }
    case 'DELETE_NOTE': {
      const newState = state.filter(note => note.id !== action.payload);
      saveToLocalStorage(newState);
      return newState;
    }
    default:
      return state;
  }
}

export const addNote = (note) => ({ type: 'ADD_NOTE', payload: note });
export const updateNote = (note) => ({ type: 'UPDATE_NOTE', payload: note });
export const deleteNote = (id) => ({ type: 'DELETE_NOTE', payload: id });