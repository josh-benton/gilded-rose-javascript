import { expect, describe, it, test } from "vitest";
import { Item, AgedBrie, items, updateQuality } from "./gilded-rose.js";

describe("updateQuality", () => {
  // Test case 1: Quality and sellIn decrease by 1 for normal items
  it("normal item quality and sellIn should decrease by 1", () => {
    // Arrange: Initialize the item with a given quality and sellIn value
    const testItem = new Item("basic", 10, 20);
    items.push(testItem);

    // Act: Call the updateQuality method to update the item's quality and sellIn values
    updateQuality();

    // Assert: Check if the item's quality and sellIn values match the expected values
    expect(testItem.sellIn).toBe(9);
    expect(testItem.quality).toBe(19);
  });

  // Test case 2: Quality decreases by 2 if sellIn is less than 0 for normal items
  it("normal item quality should decrease by 2 if sellIn is less than 0", () => {
    const testItem = new Item("basic", -1, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(-2);
    expect(testItem.quality).toBe(18);
  });

  // Test case 3: Quality of item is never negative
  it("quality of item is never negative", () => {
    const testItem = new Item("basic", 15, 0);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(14);
    expect(testItem.quality).toBeGreaterThanOrEqual(0);
  });

  // Test case 4: Quality of Aged Brie increases by 1 as it gets older
  it("Aged Brie increases in quality the older it gets", () => {
    const agedBrie = new AgedBrie("Aged Brie", 2, 0);
    items.push(agedBrie);

    updateQuality();

    expect(agedBrie.sellIn).toBe(1);
    expect(agedBrie.quality).toBe(1);
  });

  //Test case 5: Quality of an item is never more than 50
  it("quality of item is never greater than 50", () => {
    const agedBrie = new Item("Aged Brie", 5, 50);
    items.push(agedBrie);

    updateQuality();

    expect(agedBrie.sellIn).toBe(4);
    expect(agedBrie.quality).toBe(50);

    updateQuality();

    expect(agedBrie.sellIn).toBe(3);
    expect(agedBrie.quality).toBe(50);
  });

  // Test case 6: Sulfuras, Hand of Ragnaros never has to be sold and does not decrease in quality
  it("Sulfuras, Hand of Ragnaros needs not be sold and does not decrease in quality", () => {
    const sulfuras = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
    items.push(sulfuras);

    updateQuality();

    expect(sulfuras.sellIn).toBe(0);
    expect(sulfuras.quality).toBe(80);
  });

  // Test case 7: Backstage passes increase in quality as sellIn value decreases
  it("backstage passes to TAFKAL80ETC concert increase in quality and decrease in sellIn value", () => {
    const backstagePasses = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      15,
      20
    );
    items.push(backstagePasses);

    updateQuality();

    expect(backstagePasses.sellIn).toBe(14);
    expect(backstagePasses.quality).toBe(21);
  });

  // Test case 8: Backstage passes increase in quality by 2 if sellIn value is 10 days or less
  it("backstage passes to TAFKAL80ETC concert increase in quality by 2 if sellIn value is 10 days or less", () => {
    const backstagePasses = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      10,
      20
    );
    items.push(backstagePasses);

    updateQuality();

    expect(backstagePasses.sellIn).toBe(9);
    expect(backstagePasses.quality).toBe(22);

    updateQuality();

    expect(backstagePasses.sellIn).toBe(8);
    expect(backstagePasses.quality).toBe(24);
  });

  // Test case 9: Backstage passes increase in quality by 3 if sellIn value is 5 days or less
  it("backstage passes to TAFKAL80ETC concert increase in quality by 3 if sellIn value is 5 days or less", () => {
    const backstagePasses = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      20
    );
    items.push(backstagePasses);

    updateQuality();

    expect(backstagePasses.sellIn).toBe(4);
    expect(backstagePasses.quality).toBe(23);

    updateQuality();

    expect(backstagePasses.sellIn).toBe(3);
    expect(backstagePasses.quality).toBe(26);
  });

  // Test case 10: Backstage passes quality drops to 0 after the concert
  it("backstage passes to TAFKAL80ETC concert quality drops to 0 after the concert", () => {
    const backstagePasses = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      0,
      20
    );
    items.push(backstagePasses);

    updateQuality();

    expect(backstagePasses.sellIn).toBe(-1);
    expect(backstagePasses.quality).toBe(0);
  });
});
