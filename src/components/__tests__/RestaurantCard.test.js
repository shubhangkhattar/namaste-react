import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";

import MOCK_DATA from "../mocks/resCardMock.json";

it("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resName={MOCK_DATA} />);

  const name = screen.getByText("Burger King");

  expect(name).toBeInTheDocument();
});
