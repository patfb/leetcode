import { describe, expect, it } from "@jest/globals";
import { chooseAdventure } from "../chooseAdventure";

describe("choose your own adventure", () => {
  // choices: [pageWithChoice, option1, option2]
  // if you land on a page that has a choice you must take one of the options
  // when we get to a page from the end array we should stop
  // print out all the paths there are through the choose your own adventure book
  // if there's no choice on a page we'll just flip to the next page. e.g. 1 -> 2, 2 -> 3

  // get all of the possible paths through the choose your own adventure book

  it.each([
    {
      choices: [
        [3, 5, 7],
        [7, 11, 13],
      ],
      end: [14],
      expected: [
        [1, 2, 3, 5, 6, 7, 11, 12, 13, 14],
        [1, 2, 3, 5, 6, 7, 13, 14],
        [1, 2, 3, 7, 11, 12, 13, 14],
        [1, 2, 3, 7, 13, 14],
      ],
    },
  ])("$choices, $end -> $expected", ({ choices, end, expected }) => {
    expect(chooseAdventure(choices, end)).toStrictEqual(expected);
  });
});
