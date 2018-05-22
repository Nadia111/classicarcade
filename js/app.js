// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.y = array[Math.floor(Math.random() * array.length)];
    this.x = 1;
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed[Math.floor(Math.random() * speed.length)];
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.dt = dt;
    this.x += dt * this.speed;
    if (this.x > 506) {
        this.x = -101;
        this.y = array[Math.floor(Math.random() * array.length)];
        this.speed = speed[Math.floor(Math.random() * speed.length)];
        this.x += dt * this.speed;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

class Player {

    constructor (x,y) {

        this.image = 'images/char-boy.png';
        this.x = x ;
        this.y = y ;

    }
    render () {
        ctx.drawImage(Resources.get(this.image), this.x, this.y);
    }

    handleInput (keyvalue) {

        switch (keyvalue) {
            case 'left' : 
                this.x -= 101;
                if (this.x < 1) {
                    this.x = 1;
                }
                break;
            case 'up' :
                this.y -= 83;
                if (this.y <= 1) {
                    this.y = 1;
                }
                break;
            case 'right' :
                this.x += 101;
                if (this.x > 405) {
                    this.x = 405;
                }
                break;
            case 'down' : 
                this.y += 83;
                if (this.y >= 416) {
                    this.y = 416;
                }
                break;
        }

    }

    update() {


        for (const vehicle of allEnemies){
            if (this.x < vehicle.x+45 && this.x > vehicle.x-45 && this.y == vehicle.y && this.y == vehicle.y) {
                this.y = 416;
                score -= 10;
            }
        }

    }


}

class Gem {
    
    constructor (pic) {
        
        this.pic = pic;
    }
}
 var speed = [200, 500];
var array = [84, 167, 250];
var Enemy1 = new Enemy(),
    Enemy2 = new Enemy(),
    Enemy3 = new Enemy();
var allEnemies = [Enemy1, Enemy2, Enemy3];
var player = new Player(203, 416);
let score = 50;
/*for (const vehicle of allEnemies){
    if (player.x === vehicle.x && player.y === vehicle.y) {
            player.y = 416;
        }
 }*/

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    e.preventDefault();
    player.handleInput(allowedKeys[e.keyCode]);
});
