import "@testing-library/jest-dom";
import { screen, within, fireEvent, render } from "@/__tests__/utils";

import App from "@/pages/products";
import { beforeEach, describe, expect } from "vitest";

describe("Index Product Page", () => {
  beforeEach(() => {
    render(<App />);
  });

  describe("Renders the page", () => {
    it("Should Render The Form Component", () => {
      const form = screen.getByLabelText("product-form");
      expect(within(form).getByLabelText("input-product-name")).toBeTruthy();
    });
  });
});
