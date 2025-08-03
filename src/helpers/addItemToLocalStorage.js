export default function addItemToLocalStorage(key, newItem) {
    let currentItems = window.localStorage.getItem(key)
    let itemsArray = currentItems ? JSON.parse(currentItems) : [];
    itemsArray.push(newItem);
    localStorage.setItem(key, JSON.stringify(itemsArray));
}