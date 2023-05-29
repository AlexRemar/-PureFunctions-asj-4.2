let allLifeStrip = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

let sort = allLifeStrip.sort(function(a, b) {
  return b.health - a.health;
});

export { sort }
