export const FETCH_NOTES = 'fetch_notes';
export const FETCH_NOTE = 'fetch_note';
export const DELETE_NOTE = 'delete_note';
export const UPDATE_NOTE = 'update_note';
export const CREATE_NOTE = 'create_note';

let nextNoteId = 1;

export function fetchNotes(){
    return {
        type: FETCH_NOTES
    };
}

export function fetchNote(){
    return {
        type: FETCH_NOTE,
        payload: "test - fetchNote"
    };
}

export function deleteNote(id, callback){
    return {
        type: DELETE_NOTE,
        payload: "test - deleteNote"
    };
}

export function updateNote(values, callback){
    return {
        type: UPDATE_NOTE,
        payload: "test - updateNote"
    };
}

export function createNote(desc, callback){
    let newId = nextNoteId++;
    return {
        type: CREATE_NOTE,
        payload: {
            id: newId,
            details: desc
        }
    };
}

