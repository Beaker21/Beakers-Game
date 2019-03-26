let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    switch(classType) {
      case "DarkKnight":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "Ranger":
        player = new Player(classType, 100, 0, 100, 100, 200);
        break;
      case "Paladin":
        player = new Player(classType, 150, 0, 150, 125, 75);
        break;
      case "Warlock":
        player = new Player(classType, 80, 120, 50, 200, 50);
        break;
    
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="img/avatar-player/' +
    classType.toLowerCase() + '.jpg"' +' class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
  },
  setPreFight: function() {
    let getHeader = document.querySelector(".header")
    let getActions = document.querySelector(".actions")
    let getarena = document.querySelector(".arena")
    getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an enemy!</a>';
    getarena.style.visibility = "visible";
  },
  setFight: function() {
    let getHeader = document.querySelector(".header")
    let getActions = document.querySelector(".actions")
    let getEnemy = document.querySelector(".enemy")
    // Create Enemy!
    let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100)
    let enemy01 = new Enemy("Troll", 200, 0, 150, 80, 150)
    let enemy02 = new Enemy("Zombie", 100, 0, 50, 100, 100)
    let enemy03 = new Enemy("Vampire", 100, 0, 50, 100, 100)
    let chooseRandomEnemy = Math.floor(Math.random()* Math.floor(4));
    switch (chooseRandomEnemy) {
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
      case 2:
        enemy = enemy02;
        break;
      case 3:
        enemy = enemy03;
        break;
    }
    getHeader.innerHTML = '<p>Task: Choose your move</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
    getEnemy.innerHTML = '<img src="img/avatar-enemies/"' + '"class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p> class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
  }
}