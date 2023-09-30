import "@testing-library/jest-dom";
import { screen, within, fireEvent, Render, waitFor } from "@/__tests__/utils";

import App from "@/pages/products";
import { expect } from "vitest";

const productInput = [
  "input-product-name",
  "input-product-category",
  "input-product-image",
  "input-product-freshness",
  "input-product-description",
  "input-product-price",
  "btn-submit",
];

const tableHeaders = [
  "No",
  "Product Name",
  "Product Category",
  "Image of Product",
  "Product Freshness",
  "Additional Description",
  "Product Price",
];

describe("Index Product Page", () => {
  beforeEach(() => {
    Render(<App />);
  });

  describe("Renders the page", () => {
    it("Should Render The Form Component", () => {
      const form = screen.getByLabelText("product-form");
      for (const input of productInput) {
        expect(within(form).getByLabelText(input)).toBeTruthy();
      }
    });

    it("Should Render The Table Component", () => {
      const table = screen.getByLabelText("table-data");
      for (const header of tableHeaders) {
        expect(within(table).getByLabelText(header)).toBeTruthy();
      }
    });
  });

  describe("Action for Product", () => {
    it("Render Product Name Input and Displays Entered Text", () => {
      const form = screen.getByLabelText("product-form");
      const productNameInput =
        within(form).getByLabelText("input-product-name");
      fireEvent.change(productNameInput, { target: { value: "New Product" } });
      expect(productNameInput).toHaveValue("New Product");
    });

    it("Product Name Empty", async () => {
      const form = screen.getByLabelText("product-form");
      const productNameInput =
        within(form).getByLabelText("input-product-name");
      const submitButton = screen.getByLabelText("btn-submit");

      expect(
        screen.queryByText("Please enter a valid product name")
      ).toBeNull();

      fireEvent.change(productNameInput, {
        target: { value: "" },
      });

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText("Please enter a valid product name")
        ).toBeInTheDocument();
      });
    });

    it("Product Name Exceed 25 Characters", async () => {
      const form = screen.getByLabelText("product-form");
      const productNameInput =
        within(form).getByLabelText("input-product-name");
      const submitButton = screen.getByLabelText("btn-submit");

      expect(
        screen.queryByText("Please enter a valid product name")
      ).toBeNull();

      fireEvent.change(productNameInput, {
        target: {
          value: "This Product Name Have Exceeded Characters Required",
        },
      });

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText("Product name must not exceed 25 characters")
        ).toBeInTheDocument();
      });
    });

    it("All Field Can't be Empty", async () => {
      const form = screen.getByLabelText("product-form");
      const productNameInput =
        within(form).getByLabelText("input-product-name");
      const submitButton = screen.getByLabelText("btn-submit");
      const productCategoryInput = within(form).getByLabelText(
        "input-product-category"
      );
      const productImageInput = within(form).getByLabelText(
        "input-product-image"
      );
      const frehsnessBrandNew = within(form).getByLabelText("Brand New");
      const frehsnessSecondHand = within(form).getByLabelText("Second Hand");
      const frehsnessRefurbished = within(form).getByLabelText("Refurbished");
      const productDescriptionInput = within(form).getByLabelText(
        "input-product-description"
      );
      const productPriceInput = within(form).getByLabelText(
        "input-product-price"
      );

      expect(
        screen.queryByText("Please enter a valid product name")
      ).toBeNull();
      expect(
        screen.queryByText("Please enter a valid product category")
      ).toBeNull();
      expect(screen.queryByText("Max image size is 5MB.")).toBeNull();
      expect(screen.queryByText("Expected string, received null")).toBeNull();
      expect(
        screen.queryByText("Please enter a valid additional description")
      ).toBeNull();
      expect(
        screen.queryByText("Please enter a valid product price")
      ).toBeNull();

      fireEvent.change(productNameInput, { target: { value: "" } });
      fireEvent.change(productCategoryInput, { target: { value: "" } });
      fireEvent.change(productImageInput, { target: { value: "" } });
      expect(frehsnessBrandNew).not.toBeChecked();
      expect(frehsnessRefurbished).not.toBeChecked();
      expect(frehsnessSecondHand).not.toBeChecked();
      fireEvent.change(productDescriptionInput, { target: { value: "" } });
      fireEvent.change(productPriceInput, { target: { value: "" } });

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText("Please enter a valid product name")
        ).toBeInTheDocument();
        expect(
          screen.getByText("Please enter a valid product category")
        ).toBeInTheDocument();
        expect(screen.getByText("Max image size is 5MB.")).toBeInTheDocument();
        expect(
          screen.getByText("Expected string, received null")
        ).toBeInTheDocument();
        expect(
          screen.getByText("Please enter a valid additional description")
        ).toBeInTheDocument();
        expect(
          screen.getByText("Please enter a valid product price")
        ).toBeInTheDocument();
      });
    });
  });
});
