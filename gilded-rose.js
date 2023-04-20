export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    if (
      item.name != "Aged Brie" &&
      item.name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
      if (item.quality > 0) {
        if (item.name != "Sulfuras, Hand of Ragnaros") {
          item.quality = item.quality - 1;
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
    if (item.name != "Sulfuras, Hand of Ragnaros") {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != "Aged Brie") {
        if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
          if (item.quality > 0) {
            if (item.name != "Sulfuras, Hand of Ragnaros") {
              item.quality = item.quality - 1;
            }
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
  }
};



// class QualityUpdater {
//   constructor(item) {
//     this.item = item;
//   }

//   updateQuality() {
//     this.updateSellIn();
//     this.updateQualityValue();
//     this.handleExpiration();
//   }

//   updateSellIn() {
//     this.item.sellIn -= 1;
//   }

//   updateQualityValue() {
//     if (this.item.quality > 0) {
//       this.item.quality -= 1;
//     }
//   }

//   handleExpiration() {
//     if (this.item.sellIn < 0) {
//       if (this.item.quality > 0) {
//         this.item.quality -= 1;
//       }
//     }
//   }
// }

// class AgedBrieUpdater extends QualityUpdater {
//   updateQualityValue() {
//     if (this.item.quality < 50) {
//       this.item.quality += 1;
//     }
//   }
// }

// class BackstagePassUpdater extends QualityUpdater {
//   updateQualityValue() {
//     if (this.item.sellIn > 10) {
//       this.item.quality += 1;
//     } else if (this.item.sellIn > 5) {
//       this.item.quality += 2;
//     } else if (this.item.sellIn >= 0) {
//       this.item.quality += 3;
//     } else {
//       this.item.quality = 0;
//     }
//   }
// }

// class SulfurasUpdater extends QualityUpdater {
//   updateSellIn() {}
//   updateQualityValue() {}
//   handleExpiration() {}
// }

// class ConjuredUpdater extends QualityUpdater {
//   updateQualityValue() {
//     if (this.item.quality > 0) {
//       this.item.quality -= 2;
//     }
//   }
// }

// const updaterMap = {
//   "Aged Brie": AgedBrieUpdater,
//   "Backstage passes to a TAFKAL80ETC concert": BackstagePassUpdater,
//   "Sulfuras, Hand of Ragnaros": SulfurasUpdater,
//   "Conjured Mana Cake": ConjuredUpdater,
// };

// export class Item {
//   constructor(name, sellIn, quality) {
//     this.name = name;
//     this.sellIn = sellIn;
//     this.quality = quality;
//   }
// }

// export let items = [];

// items.push(new Item("+5 Dexterity Vest", 10, 20));
// items.push(new Item("Aged Brie", 2, 0));
// items.push(new Item("Elixir of the Mongoose", 5, 7));
// items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
// items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
// items.push(new Item("Conjured Mana Cake", 3, 6));

// export const updateQuality = () => {
//   for (let item of items) {
//     const Updater = updaterMap[item.name] || QualityUpdater;
//     const updater = new Updater(item);
//     updater.updateQuality();
//   }
// };
