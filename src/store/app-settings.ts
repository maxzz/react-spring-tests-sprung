import { Theme, themeApply } from "@/utils/theme-apply";
import { proxy, subscribe } from "valtio";

export type SectionNameKey = 'spring' | 'springs' | 'transition' | 'trail' | 'chain';

export type AppSettings = {
    theme: Theme;
    sections: Partial<Record<SectionNameKey, boolean>>;
};

const defaultSettings: AppSettings = {
    theme: 'light',
    sections: {
        spring: false,
        springs: false,
        transition: false,
        trail: false,
        chain: false,
    },
};

const STORE_KEY = "react-spring-tests-sprung";

export const appSettings = proxy<AppSettings>(initSettings());

function initSettings(): AppSettings {
    const savedSettings = localStorage.getItem(STORE_KEY);
    if (savedSettings) {
        try {
            return JSON.parse(savedSettings);
        } catch (error) {
        }
    }
    return defaultSettings;
}

themeApply(appSettings.theme);

subscribe(appSettings, () => {
    themeApply(appSettings.theme);
    localStorage.setItem(STORE_KEY, JSON.stringify(appSettings));
});
