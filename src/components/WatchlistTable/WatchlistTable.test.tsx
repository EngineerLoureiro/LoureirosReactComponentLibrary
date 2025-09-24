// WatchlistTable.test.tsx
import { render, screen, within } from "@testing-library/react";
import { WatchlistTable, WatchlistTableItemProps } from "./WatchlistTable";

const initialItems: WatchlistTableItemProps[] = [
  {
    symbol: "SOLBTC",
    lastPrice: "0.00310200",
    lastPriceChange: "+0.00002100",
    lastPriceChangePercentage: "+0.68%",
  },
  {
    symbol: "BNBBTC",
    lastPrice: "0.00918000",
    lastPriceChange: "-0.00006000",
    lastPriceChangePercentage: "-0.65%",
  },
  {
    symbol: "LINKETH",
    lastPrice: "0.005000",
    lastPriceChange: "+0.000067",
    lastPriceChangePercentage: "+1.35%",
  },
];

const updatedItems: WatchlistTableItemProps[] = [
  {
    symbol: "SOLBTC",
    lastPrice: "0.00300200",
    lastPriceChange: "-0.00010000",
    lastPriceChangePercentage: "-3.22%",
  },
  {
    symbol: "BNBBTC",
    lastPrice: "0.00920000",
    lastPriceChange: "+0.00002000",
    lastPriceChangePercentage: "+0.22%",
  },
  {
    symbol: "LINKETH",
    lastPrice: "0.004950",
    lastPriceChange: "-0.000050",
    lastPriceChangePercentage: "-1.00%",
  },
];

describe("WatchlistTable", () => {
  test("renders a semantic table with headers", () => {
    render(<WatchlistTable items={initialItems} />);

    // table exists
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();

    // headers
    const headers = screen.getAllByRole("columnheader");
    expect(headers).toHaveLength(4);
    expect(headers.map((h) => h.textContent)).toEqual([
      "Symbol",
      "Price",
      "Chg",
      "Chg%",
    ]);

    // header row + 3 body rows
    const allRows = screen.getAllByRole("row");
    expect(allRows.length).toBe(1 + initialItems.length);
  });

  test("renders all rows and expected cell content", () => {
    render(<WatchlistTable items={initialItems} />);

    const table = screen.getByRole("table");
    const tbody = table.querySelector("tbody")!; // tbody
    const bodyRows = within(tbody).getAllByRole("row");
    expect(bodyRows).toHaveLength(initialItems.length);

    // check a couple of cells
    expect(screen.getByText("SOLBTC")).toBeInTheDocument();
    expect(screen.getByText("0.00918000")).toBeInTheDocument(); // BNBBTC lastPrice
    expect(screen.getByText("+1.35%")).toBeInTheDocument(); // LINKETH change%
  });

  test("updates UI when items prop changes (rerender)", () => {
    const { rerender } = render(<WatchlistTable items={initialItems} />);

    // precondition
    expect(screen.getByText("0.00310200")).toBeInTheDocument();

    // update props
    rerender(<WatchlistTable items={updatedItems} />);

    // old value gone, new value present
    expect(screen.queryByText("0.00310200")).not.toBeInTheDocument();
    expect(screen.getByText("0.00300200")).toBeInTheDocument();

    // also verify a changed percentage is reflected
    expect(screen.getByText("-3.22%")).toBeInTheDocument();
  });

  test("matches snapshot (with data)", () => {
    const { asFragment } = render(<WatchlistTable items={initialItems} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("matches snapshot (empty state)", () => {
    const { asFragment } = render(<WatchlistTable items={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
