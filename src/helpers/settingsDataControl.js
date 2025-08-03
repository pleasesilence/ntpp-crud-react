export function checkOrSetDefaultSettings() {
    try {
        const settings = localStorage.getItem('settings');
        if (!settings) {
            throw new Error('Settings not found')
        }
    } catch (e) {
        const defaultSettings = {
            theme: 'light',
            sidebarPositon: 'horizontal',
            language: 'en',
        }
        localStorage.setItem('settings', JSON.stringify(defaultSettings));
        console.log(e)
    }

}

export function updateSettingsOption(key, value) {
    try {
        let settingsData = JSON.parse(localStorage.getItem('settings'));
        if (!settingsData) {
            throw new Error('Settings not found');
        }
        if (!settingsData[key]) {
            throw new Error('Settings key not found');
        }
        settingsData[key] = value;
        localStorage.setItem('settings', JSON.stringify(settingsData));
    } catch (e) {
        console.log(e)
    }
}