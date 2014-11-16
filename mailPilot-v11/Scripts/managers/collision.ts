/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/car.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private car: objects.Car;
        private coin: objects.Coin;
        private bullets = [];
        private scoreboard: objects.Scoreboard;

        constructor(car: objects.Car, coin: objects.Coin, bullets, scoreboard: objects.Scoreboard) {
            this.car = car;
            this.coin = coin;
            this.bullets = bullets;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between car and any bullet object
        private carAndBullet(bullet: objects.Bullet) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.car.image.x;
            p1.y = this.car.image.y;
            p2.x = bullet.image.x;
            p2.y = bullet.image.y;
            if (this.distance(p1, p2) < ((this.car.height / 2) + (bullet.height / 2))) {
                createjs.Sound.play("thunder");
                this.scoreboard.lives -= 1;
                bullet.reset();
            }
        }

        // check collision between car and coin
        private carAndCoin() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.car.image.x;
            p1.y = this.car.image.y;
            p2.x = this.coin.image.x;
            p2.y = this.coin.image.y;
            if (this.distance(p1, p2) < ((this.car.height / 2) + (this.coin.height / 2))) {
                createjs.Sound.play("yay");
                this.scoreboard.score += 1;
                this.coin.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.BULLET_NUM; count++) {
                this.carAndBullet(this.bullets[count]);
            }
            this.carAndCoin();
        }
    }
} 