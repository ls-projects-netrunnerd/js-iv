// GameObject

class GameObject {
  constructor(obj) {
    this.createdAt = obj.createdAt;
    this.name = obj.name;
    this.dimensions = obj.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

// CharacterStats

class CharacterStats extends GameObject {
  constructor(obj) {
    super(obj);

    this.healthPoints = obj.healthPoints;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

// Humanoid

class Humanoid extends CharacterStats {
  constructor(obj) {
    super(obj);

    this.team = obj.team;
    this.weapons = obj.weapons;
    this.language = obj.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

// character data - mage 57, swordsman 73, archer 90

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt);          // Today's date
console.log(archer.dimensions);       // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints);  // 15
console.log(mage.name);               // Bruce
console.log(swordsman.team);          // The Round Table
console.log(mage.weapons);            // Staff of Shamalama
console.log(archer.language);         // Elvish
console.log(archer.greet());          // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage());       // Bruce took damage.
console.log(swordsman.destroy());     // Sir Mustachio was removed from the game.

// Stretch - Fighter

class Fighter extends Humanoid {
  constructor(obj) {
    super(obj);

    this.attacks = obj.attacks;
  }

  attack(weapon, attack, target) {
    const msg = `${this.name} hit ${target.name} in the ${attack.area} with a single shot from their ${weapon}. ${target.name} lost ${attack.hitPoints} health points.`;

    target.healthPoints -= attack.hitPoints;

    if (this.healthPoints <= 0) return `${this.name} is too fucked up to fight.`;
    if (target.healthPoints <= 0) return `${msg}\n${target.destroy()}`;

    return msg;
  }
}

const hero = new Fighter({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 2,
    height: 0
  },
  healthPoints: 500,
  name: 'John Doe',
  team: 'CIA',
  weapons: ['AR-15', 'Sig Sauer P226'],
  language: 'English',
  attacks: [
    { area: 'head', hitPoints: 450 },
    { area: 'chest', hitPoints: 250 }
  ]
});

const villain = new Fighter({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 2,
    height: 0
  },
  healthPoints: 500,
  name: 'Jane Doe',
  team: 'Mossad',
  weapons: ['AR-15', 'Glock 20 Gen. 4'],
  language: 'Hebrew',
  attacks: [
    { area: 'head', hitPoints: 450 },
    { area: 'chest', hitPoints: 250 }
  ]
});

console.log(hero.attack(hero.weapons[0], hero.attacks[0], villain));
console.log(villain.attack(villain.weapons[1], villain.attacks[1], hero));
console.log(villain.attack(villain.weapons[1], villain.attacks[1], hero));
console.log(hero.attack(hero.weapons[0], hero.attacks[0], villain));