function randMax(max) {
  return Math.trunc(1E9 * Math.random()) % max;
}

const reel = {
  symbols: [
    "♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"
  ],
  spin() {
    if (this.position == null) {
      this.position = randMax(
          this.symbols.length - 1
      );
    }

    this.position = (
        this.position + 100 + randMax(100)
    ) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(
          this.symbols.length - 1
      );
    }
    return this.symbols[this.position];
  }
};

module.exports = {
  reels: [
    Object.create(reel),
    Object.create(reel),
    Object.create(reel),
  ],
  spin() {
    this.reels.forEach(function spinReel(reel){
      reel.spin();
    });
  },
  display() {
    const result = [];

    for (let linePosition = -1; linePosition <= 1; linePosition++) {
      const line = this.reels.map(reel => {
        const slot = Object.create(reel);
        // randomize slot position
        slot.position = (reel.symbols.length + reel.position + linePosition) % reel.symbols.length;
        return slot.display();
      }).join(" | ");

      result.push(line);
    }

    return result.join("\n");
  }
};
