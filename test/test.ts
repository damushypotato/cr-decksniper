import { readFileSync } from 'fs';
import { join } from 'path';
import { Decksniper } from '../src/';

(async () => {
    const api_key = readFileSync(join('__dirname', '..', 'dev', 'key.txt')).toString();

    if (!api_key) return console.error('No API key found');

    const ds = new Decksniper(api_key);

    const result = await ds.snipe('Lemonzzz', 'Rogue Kingdom');

    if (!result) return console.error('No result found');

    const { player } = result;

    console.log(
        `${player.name} ${player.clan?.name}\n${player.currentDeck
            .map(c => c.name + (14 - c.maxLevel + c.level))
            .join(', ')}`
    );
})();
