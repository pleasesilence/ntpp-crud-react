import React from 'react';
import SideBarLayout from "../../components/SideBarLayout/SideBarLayout";
import styles from './SettingsPage.module.css'
import AppearanceOptions from "../../components/AppearanceOptions/AppearanceOptions";
import StatisticsOptions from "../../components/StatisticsOptions/StatisticsOptions";
import {Link, useParams} from "react-router";

const SettingsPage = () => {
    const [activeTab, setActiveTab] = React.useState('Appearance');

    const tabAppearBtnClasses = [styles.tab]
    const tabStatBtnClasses = [styles.tab]
    if (activeTab === 'Appearance') {
        tabAppearBtnClasses.push(styles.tab_active);
    } else if (activeTab === 'Statistics') {
        tabStatBtnClasses.push(styles.tab_active);
    }

    function handleTabAppearChange() {
        setActiveTab('Appearance');
    }
    function handleTabStatChange() {
        setActiveTab('Statistics');
    }

    return (
        <div className={styles.settings}>
            <SideBarLayout isCreateActive={false}></SideBarLayout>
            <section className={styles.settings__content}>
                <div className={styles.settings__header}>
                    <h1 className={styles.settings__title}>Settings</h1>
                    {activeTab === 'Appearance' ? (
                        <h2 className={styles.settings__subtitle}>/ Appearance</h2>
                    ): (
                        <h2 className={styles.settings__subtitle}>/ Statistics</h2>
                    )}
                </div>
                <div className={styles.settings__options}>
                    <div className={styles.tabs}>
                        <Link to='/settings/appearance'>
                            <button
                                onClick={handleTabAppearChange}
                                className={tabAppearBtnClasses.join(' ')}>Appearance
                            </button>
                        </Link>
                        <Link to='/settings/statistics'>
                            <button
                                onClick={handleTabStatChange}
                                className={tabStatBtnClasses.join(' ')}>Statistics
                            </button>
                        </Link>
                    </div>
                    {activeTab === 'Appearance' ? (
                        <AppearanceOptions></AppearanceOptions>
                    ) : <StatisticsOptions></StatisticsOptions>}
                </div>
            </section>
        </div>
    );
};

export default SettingsPage;