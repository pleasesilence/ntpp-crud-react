import makeDateReadable from "./makeDateReadable";
import addItemToLocalStorage from "./addItemToLocalStorage";

export function updateNote(noteData, states) {
    const prevStorage = JSON.parse(localStorage.getItem("notes"));
    let prevNoteIndex
    prevStorage.forEach((item, index) => {
        if (item.id === noteData.id) {
            prevNoteIndex = index
        }
    })
    if (prevNoteIndex > -1) {
        prevStorage.splice(prevNoteIndex, 1)
    }
    const updatedNote = {
        id: noteData.id,
        name: states.nameState,
        description: states.descriptionState,
        options: {
            favorite: {
                value: states.favoriteState,
            },
            color: {
                value: noteData.options.color.value,
            },
            size: {
                value: states.sizeState,
            },
            date: {
                value: makeDateReadable(new Date()),
            }
        }
    }
    prevStorage.push(updatedNote);
    localStorage.removeItem("notes");
    localStorage.setItem("notes", JSON.stringify(prevStorage));
    return updatedNote
}

export function createNote(color) {
    const newNote = {
        id: Date.now(),
        name: "This is NTPP note.",
        description: 'NTPP note',
        options: {
            favorite: {
                value: false,
            },
            color: {
                value: color,
            },
            size: {
                value: 'Medium',
            },
            date: {
                value: makeDateReadable(new Date()),
            }
        }
    }
    addItemToLocalStorage('notes', newNote);
    return newNote;
}