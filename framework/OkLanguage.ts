interface Options {
    language?: string;
}

class OkLanguage {
    private m_language: string = navigator.language;

    constructor(options?: Options) {
        if(options?.language) {
            this.m_language = options.language;
        }
    }

    public setLanguage(language: string): void {
        this.m_language = language;
    }

    public getLanguage(preferences?: Array<string>|string): string {
        if(typeof preferences != "object") {
            preferences = [preferences];
        }
        let preference = this.getLanguagePref(preferences);
        return preference.slice(0, 2).toUpperCase();
    }

    private getLanguagePref(preferences: Array<string>): string {
        for (const preference of preferences) {
            switch (preference) {
                case "navigator":
                    if(window.navigator.language) {
                        return window.navigator.language;
                    }
                    break;
                case "interne":
                    if(this.m_language) {
                        return this.m_language;
                    }
                    break;
                case "html":
                    if(document.querySelector("html").getAttribute("lang")) {
                        return document.querySelector("html").getAttribute("lang");
                    }
                    break;
                default:
                    if(window.navigator.language) {
                        return window.navigator.language;
                    }
                    break;
            }
        }
    }
}

export {OkLanguage, Options}