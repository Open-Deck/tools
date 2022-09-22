interface IDeckSettings {
    locale: string;
}
export interface IDeck {
    connection: any;
    settings: IDeckSettings;
}
export {};
