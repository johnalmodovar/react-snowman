import Snowman from "./Snowman";
import { render, fireEvent } from "@testing-library/react";
import { DEFAULT_IMAGES } from "./Snowman";

it("should display game over screen when you lose", function () {
  const { container, debug } = render(
  <Snowman images={DEFAULT_IMAGES}
    words={["apple"]}
    maxWrong={6} />);

    fireEvent.click(container.querySelector('button[value="q"]'));
    fireEvent.click(container.querySelector('button[value="t"]'));
    fireEvent.click(container.querySelector('button[value="u"]'));
    fireEvent.click(container.querySelector('button[value="g"]'));
    fireEvent.click(container.querySelector('button[value="n"]'));
    fireEvent.click(container.querySelector('button[value="m"]'));

    expect( container ).toContainHTML("You Lose");

  })