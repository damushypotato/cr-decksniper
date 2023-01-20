import { snipe as _snipe } from './Modules/Sniper';

export class Decksniper {
    private api_key: string;

    constructor(api_key: string) {
        this.api_key = api_key;
    }

    snipe(name: string, clan: string) {
        return _snipe(this.api_key, name, clan);
    }
}
