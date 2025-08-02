export function setDefaultSettings() {
    const defaultSettingsArr = {
        theme: 'light',
        sidebarPositon: 'horizontal',
        language: 'en',
    }
    localStorage.setItem('settings', JSON.stringify(defaultSettingsArr));
}