import "./WatchlistTable.css";

export interface WatchlistTableItemProps {
  symbol: string;
  lastPrice: string;
  lastPriceChange: string;
  lastPriceChangePercentage: string;
}

export interface WatchlistTableProps {
  items: WatchlistTableItemProps[];
}

export function WatchlistTable({ items }: WatchlistTableProps) {
  return (
    <div className="card">
      <table className="table">
        <thead>
          <tr>
            <th>{"Symbol"}</th>
            <th>{"Price"}</th>
            <th>{"Chg"}</th>
            <th>{"Chg%"}</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {items.map((row) => {
            return (
              <tr className="table-item">
                <td>{row.symbol}</td>
                <td>{row.lastPrice}</td>
                <td>{row.lastPriceChange}</td>
                <td>{row.lastPriceChangePercentage}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
