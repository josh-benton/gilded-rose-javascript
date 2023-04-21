export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    if (this.quality > 0) {
      this.quality -= 1;
    }

    this.sellIn -= 1;

    if (this.sellIn < 0 && this.quality > 0) {
      this.quality -= 1;
    }
  }
}

export class AgedBrie extends Item {
  updateQuality() {
    if (this.quality < 50) {
      this.quality += 1;
    }

    this.sellIn -= 1;

    if (this.sellIn < 0 && this.quality < 50) {
      this.quality += 1;
    }
  }
}

export class Sulfuras extends Item {
  updateQuality() {}
}

export class BackstagePasses extends Item {
  updateQuality() {
    if (this.quality < 50) {
      this.quality += 1;

      if (this.sellIn < 11 && this.quality < 50) {
        this.quality += 1;
      }

      if (this.sellIn < 6 && this.quality < 50) {
        this.quality += 1;
      }
    }

    this.sellIn -= 1;

    if (this.sellIn < 0) {
      this.quality = 0;
    }
  }
}

export class Conjured extends Item {
  updateQuality() {
    if (this.quality > 0) {
      this.quality -= 2;
    }

    this.sellIn -= 1;
  }
}

export const updateQuality = () => {
  for (let item of items) {
    item.updateQuality();
  }
};

export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));
