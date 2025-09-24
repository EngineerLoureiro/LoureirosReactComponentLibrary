// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from "@storybook/react-vite";

import { WatchlistTable, WatchlistTableItemProps } from "./WatchlistTable";

import { fn } from "storybook/test";

//👇 This default export determines where your story goes in the story list
const meta = {
  title: "Loureiro'sComponentLibrary/WatchlistTable",
  component: WatchlistTable,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof WatchlistTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const btcQuoteItems: WatchlistTableItemProps[] = [
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
    symbol: "XRPBTC",
    lastPrice: "0.00000980",
    lastPriceChange: "+0.00000010",
    lastPriceChangePercentage: "+1.03%",
  },
  {
    symbol: "DOGEBTC",
    lastPrice: "0.00000200",
    lastPriceChange: "-0.00000003",
    lastPriceChangePercentage: "-1.48%",
  },
  {
    symbol: "ADABTC",
    lastPrice: "0.00000710",
    lastPriceChange: "+0.00000008",
    lastPriceChangePercentage: "+1.14%",
  },
  {
    symbol: "AVAXBTC",
    lastPrice: "0.00064000",
    lastPriceChange: "-0.00000850",
    lastPriceChangePercentage: "-1.31%",
  },
  {
    symbol: "LINKBTC",
    lastPrice: "0.00025600",
    lastPriceChange: "+0.00000340",
    lastPriceChangePercentage: "+1.34%",
  },
  {
    symbol: "MATICBTC",
    lastPrice: "0.00001220",
    lastPriceChange: "-0.00000015",
    lastPriceChangePercentage: "-1.22%",
  },
  {
    symbol: "DOTBTC",
    lastPrice: "0.00008600",
    lastPriceChange: "+0.00000140",
    lastPriceChangePercentage: "+1.65%",
  },
  {
    symbol: "ATOMBTC",
    lastPrice: "0.00012000",
    lastPriceChange: "-0.00000120",
    lastPriceChangePercentage: "-0.99%",
  },
  {
    symbol: "LTCBTC",
    lastPrice: "0.00110000",
    lastPriceChange: "+0.00000690",
    lastPriceChangePercentage: "+0.63%",
  },
  {
    symbol: "NEARBTC",
    lastPrice: "0.00011000",
    lastPriceChange: "+0.00000120",
    lastPriceChangePercentage: "+1.10%",
  },
];

export const DefaultWatchlist: Story = {
  args: {
    items: btcQuoteItems,
  },
};
