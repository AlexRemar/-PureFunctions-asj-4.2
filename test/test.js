import { sort } from '../src/allLifeStrip.js';

test('sort test', () => {

    let correct = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]
    
    const result = sort;
    expect(result).toEqual(correct)
})
