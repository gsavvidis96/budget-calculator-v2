import { Button, Stack, TextField } from "@mui/material";
import { AddOutlined, ImportExport } from "@mui/icons-material";
import BudgetCard from "../components/BudgetCard";

export interface Budget {
  id: number;
  name: string;
  balance: number;
  date: string;
}

const budgets: Budget[] = [
  {
    id: 1,
    name: "Base monthly budget",
    balance: 500,
    date: "29/12/2022",
  },
  {
    id: 2,
    name: "January budget",
    balance: 400,
    date: "01/01/2023",
  },
  {
    id: 3,
    name: "January budget",
    balance: 400,
    date: "01/01/2023",
  },
  {
    id: 4,
    name: "January budget",
    balance: 400,
    date: "01/01/2023",
  },
  {
    id: 5,
    name: "January budget",
    balance: 400,
    date: "01/01/2023",
  },
  {
    id: 6,
    name: "January budget",
    balance: 400,
    date: "01/01/2023",
  },
  {
    id: 7,
    name: "January budget",
    balance: 400,
    date: "01/01/2023",
  },
  {
    id: 8,
    name: "January budget",
    balance: 400,
    date: "01/01/2023",
  },
  {
    id: 9,
    name: "January budget",
    balance: 400,
    date: "01/01/2023",
  },
  {
    id: 10,
    name: "January budget",
    balance: 400,
    date: "01/01/2023",
  },
];

const Home = () => {
  return (
    <Stack
      sx={{
        flexGrow: 1,
      }}
      gap={2}
    >
      <Stack
        sx={{
          padding: 4,
          borderRadius: "4px",
          backgroundColor: "budgetCardBg.light",
        }}
        direction="row"
        gap={3}
      >
        <TextField
          label="Search by name"
          variant="outlined"
          sx={{ width: "400px" }}
          color="secondary"
        />

        <Button
          sx={{ alignSelf: "center" }}
          endIcon={<ImportExport />}
          variant="text"
          color="inherit"
        >
          Sort By
        </Button>

        <Button
          variant="contained"
          color="primary"
          sx={{ ml: "auto", alignSelf: "center" }}
          startIcon={<AddOutlined />}
        >
          New
        </Button>
      </Stack>

      <Stack gap={2} sx={{ flexGrow: 1, overflow: "auto" }}>
        {budgets.map((budget) => {
          return <BudgetCard {...budget} key={budget.id} />;
        })}
      </Stack>

      <Button variant="contained" color="primary" sx={{ alignSelf: "center" }}>
        Load More
      </Button>
    </Stack>
  );
};

export default Home;
