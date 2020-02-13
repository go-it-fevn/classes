// function Hero(name) {
  // this.name = name
// }
// Hero.prototype.setHP = () => {}

// function Orc() {
//   Hero.call(this)
// }
// Orc.prototype = Object.create(Hero);
// Orc.prototype.chototam = () => {};

// -- class

class Hero {
  constructor(name) {
    this._name = name;
  }

  static message() {
    console.log('Hello!!!')
  }

  hp = 100;

  hpAdd(value = 0) {
    this.hp += value;
  }

  hpMinus(value = 0) {
    this.hp -= value;

    if(this.hp <= 0) {
      this.hp = 0;
      if(typeof this.callbackOnDead === 'function') {
        this.callbackOnDead()
      }
      
    }
  }

  hit() {
    if(this.hp <= 0) {
      throw this.name + ' Ты сдох, не бей'
    }
    return 10
  }

  onDead(callback) {
    this.callbackOnDead = callback;
  }


  get name() {
    return this._name;
  }

  set name(value) {
    console.log('From set', value)
  }
}

class Orc extends Hero {
  constructor(name) {
    super(name) // User.call(this)
  }
  weapon = 5
  
  hit() {
    return super.hit() + this.weapon
  }
}

class Undead extends Hero {
  constructor(name) {
    super(name)
  }

  static message() {
    console.log('olleH')
  }

  magic = 3

  hit() {
    return super.hit() + this.magic
  }
}

// const htos = new Hero('You');
// htos.hpMinus(10)
// console.log(htos.hit())

const thrull = new Orc('Thrull');
const lich = new Undead('Lich');

const thrullImg = document.getElementById('thrull')
const lichImg = document.getElementById('lich')

thrull.onDead(() => {
  thrullImg.src = 'https://image.flaticon.com/icons/png/512/2027/2027275.png'
})

lich.onDead(() => {
  lichImg.src = 'https://image.flaticon.com/icons/png/512/2027/2027275.png'
})

document.onkeyup = function(event) {
  switch(event.key) {
    case 'ArrowLeft': {
      const damage = lich.hit();
      thrull.hpMinus(damage)
      break;
    }
    case 'ArrowRight': {
      const damage = thrull.hit();
      lich.hpMinus(damage)
      break;
    }
  }

  console.log(thrull, lich)
}

// thrull.name = 123




const user = {
  _name: 'user 1',
  get name() {
    return 'Hello'+this._name
  },
  set name(value) {
    this._name = '+++'+value;
  }
}


console.log(user.name);
