import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase';
import { loadNotes } from '../../helpers';
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes } from './';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());
    const { uid } = getState().auth;
    console.log('startNewNote');
    const newNote = {
      title: 'New Note',
      body: 'New Note body: ' + uid,
      date: new Date().getTime(),
    };
    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);
    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error('El UID del usuario no existe');
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};
