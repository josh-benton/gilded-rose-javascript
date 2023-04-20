import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";

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
  })


  // Test case 4: Quality of Aged Brie increases by 1 as it gets older
  it("Aged Brie increases in quality the older it gets", () => {
    const testItem = new Item("Aged Brie", 10, 15);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(9);
    expect(testItem.quality).toBe(16);
  })

  //Test case 5: Quality of an item is never more than 50
  it("quality of item is never greater than 50", () => {
    const testItem = new Item("Aged Brie", 5, 50);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(50);

    updateQuality()

    expect(testItem.sellIn).toBe(3);
    expect(testItem.quality).toBe(50);
  })




  // it("Aged Brie quality should increase by 1 as it gets older", () => {
  //   // Arrange: Initialize the item with a given quality and sellIn value
  //   const agedBrie = new Item("Aged Brie", 5, 10);
  //   items.push(agedBrie);

  //   // Act: Call the updateQuality method to update the item's quality and sellIn values
  //   updateQuality();

  //   // Assert: Check if the item's quality and sellIn values match the expected values
  //   expect(agedBrie.sellIn).toBe(4);
  //   expect(agedBrie.quality).toBe(11);
  // });

  // // Test case 4: Quality of Aged Brie cannot exceed 50
  // it("Aged Brie quality should not exceed 50", () => {
  //   // Arrange: Initialize the item with a given quality and sellIn value
  //   const agedBrie = new Item("Aged Brie", 5, 50);
  //   items.push(agedBrie);

  //   // Act: Call the updateQuality method to update the item's quality and sellIn values
  //   updateQuality();

  //   // Assert: Check if the item's quality and sellIn values match the expected values
  //   expect(agedBrie.sellIn).toBe(4);
  //   expect(agedBrie.quality).toBe(50);
  // });

  // // Test case 5: Quality of Sulfuras does not change and sellIn does not decrease
  // // Test case 5: Quality and sellIn of Sulfuras do not change
  // it("Sulfuras quality and sellIn should not change", () => {
  //   // Arrange: Initialize the item with a given quality and sellIn value
  //   const sulfuras = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
  //   items.push(sulfuras);
  //   const originalQuality = sulfuras.quality;
  //   const originalSellIn = sulfuras.sellIn;

  //   // Act: Call the updateQuality method to update the item's quality and sellIn values
  //   updateQuality();

  //   // Assert: Check if the item's quality and sellIn values match the expected values
  //   expect(sulfuras.sellIn).toBe(originalSellIn);
  //   expect(sulfuras.quality).toBe(originalQuality);
  // });

  // // Test case 6: Quality of Backstage passes increases by 2 when there are 10 days or less left before the concert
  // it("Backstage passes quality should increase by 2 when there are 10 days or less left before the concert", () => {
  //   // Arrange: Initialize the item with a given quality and sellIn value
  //   const backstagePass = new Item(
  //     "Backstage passes to a TAFKAL80ETC concert",
  //     10,
  //     20
  //   );
  //   items.push(backstagePass);

  //   // Act: Call the updateQuality method to update the item's quality and sellIn values
  //   updateQuality();

  //   // Assert: Check if the item's quality and sellIn values match the expected values
  //   expect(backstagePass.sellIn).toBe(9);
  //   expect(backstagePass.quality).toBe(22);
  // });

  // // Test case 7: Quality of Backstage passes increases by 3 when there are 5 days or less left before the concert
  // it("Backstage passes quality should increase by 3 when there are 5 days or less left before the concert", () => {
  //   // Arrange: Initialize the item with a given quality and sellIn value
  //   const backstagePass = new Item(
  //     "Backstage passes to a TAFKAL80ETC concert",
  //     5,
  //     20
  //   );
  //   items.push(backstagePass);

  //   // Act: Call the updateQuality method to update the item's quality and sellIn values
  //   updateQuality();

  //   // Assert: Check if the item's quality and sellIn values match the expected values
  //   expect(backstagePass.sellIn).toBe(4);
  //   expect(backstagePass.quality).toBe(23);
  // });

  // // Test case 8: Quality of Backstage passes drops to 0 after the concert
  // it("Backstage passes quality should drop to 0 after the concert", () => {
  //   // Arrange: Initialize the item with a given quality and sellIn value
  //   const backstagePass = new Item(
  //     "Backstage passes to a TAFKAL80ETC concert",
  //     0,
  //     20
  //   );
  //   items.push(backstagePass);

  //   // Act: Call the updateQuality method to update the item's quality and sellIn values
  //   updateQuality();

  //   // Assert: Check if the item's quality and sellIn values match the expected values
  //   expect(backstagePass.sellIn).toBe(-1);
  //   expect(backstagePass.quality).toBe(0);
  // });

  // // Test case 9: Quality of conjured items degrades twice as fast as normal items
  // it("Conjured items quality should degrade twice as fast as normal items", () => {
  //   // Arrange: Initialize the item with a given quality and sellIn value
  //   const conjuredItem = new Item("Conjured", 5, 20);
  //   items.push(conjuredItem);

  //   // Act: Call the updateQuality method to update the item's quality and sellIn values
  //   updateQuality();

  //   // Assert: Check if the item's quality and sellIn values match the expected values
  //   expect(conjuredItem.sellIn).toBe(4);
  //   expect(conjuredItem.quality).toBe(18);
  // });

  // // Test case 10: Quality of conjured items degrades twice as fast as normal items when sellIn is less than 0
  // it("Conjured items quality should degrade twice as fast as normal items when sellIn is less than 0", () => {
  //   // Arrange: Initialize the item with a given quality and sellIn value
  //   const conjuredItem = new Item("Conjured", -1, 20);
  //   items.push(conjuredItem);

  //   // Act: Call the updateQuality method to update the item's quality and sellIn values
  //   updateQuality();

  //   // Assert: Check if the item's quality and sellIn values match the expected values
  //   expect(conjuredItem.sellIn).toBe(-2);
  //   expect(conjuredItem.quality).toBe(16);
  // });

  // // Test case 11: Quality of conjured items cannot be negative
  // it("Conjured items quality should not be negative", () => {
  //   // Arrange: Initialize the item with a given quality and sellIn value
  //   const conjuredItem = new Item("Conjured", 5, 0);
  //   items.push(conjuredItem);

  //   // Act: Call the updateQuality method to update the item's quality and sellIn values
  //   updateQuality();

  //   // Assert: Check if the item's quality and sellIn values match the expected values
  //   expect(conjuredItem.sellIn).toBe(4);
  //   expect(conjuredItem.quality).toBe(0);
  // });
});
