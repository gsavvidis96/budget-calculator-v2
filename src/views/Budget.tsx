import { CheckCircleOutline } from "@mui/icons-material";
import {
  Divider,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import BudgetItem from "../components/BudgetItem";

export interface BudgetItemType {
  id: number;
  title: string;
  type: "income" | "expense";
  amount: number;
  percentage?: number;
}

const expenses: BudgetItemType[] = [
  {
    id: 1,
    title: "rent",
    type: "expense",
    amount: 200,
    percentage: 11,
  },
];

const incomes: BudgetItemType[] = [
  {
    id: 10,
    title: "salary",
    type: "income",
    amount: 1800,
  },
];

const Budget = () => {
  return (
    <Stack
      sx={{
        flexGrow: 1,
      }}
      gap={4}
    >
      <Stack
        sx={{
          padding: 3,
          borderRadius: "4px",
          backgroundColor: "budgetCardBg.light",
          border: "1px solid",
          borderColor: "budgetCardBorder.main",
        }}
        gap={1}
      >
        <Typography
          sx={{ alignSelf: "center", textAlign: "center" }}
          variant="body1"
        >
          Base Monthly Budget
        </Typography>

        <Typography
          variant="h4"
          sx={{ alignSelf: "center", textAlign: "center" }}
        >
          0.00 €
        </Typography>

        <Stack
          direction="row"
          sx={{
            backgroundColor: "primary.light",
            padding: 1,
            borderRadius: "4px",
            width: "350px",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ alignSelf: "center", textAlign: "center", mr: "auto" }}
          >
            INCOME
          </Typography>

          <Typography
            variant="body2"
            sx={{
              alignSelf: "center",
              textAlign: "center",
              color: "white",
              fontWeight: 500,
            }}
          >
            + 0.00
          </Typography>
        </Stack>

        <Stack
          direction="row"
          sx={{
            backgroundColor: "error.light",
            padding: 1,
            borderRadius: "4px",
            width: "350px",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ alignSelf: "center", textAlign: "center", mr: "auto" }}
          >
            EXPENSES
          </Typography>

          <Typography
            variant="body2"
            sx={{
              alignSelf: "center",
              textAlign: "center",
              color: "white",
              fontWeight: 500,
            }}
          >
            - 0.00
          </Typography>
        </Stack>
      </Stack>

      <Stack
        sx={{
          padding: 2,
          borderRadius: "4px",
          backgroundColor: "budgetCardBg.light",
          border: "1px solid",
          borderColor: "budgetCardBorder.main",
          alignItems: "center",
          justifyContent: "center",
        }}
        gap={1}
        direction="row"
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="+"
          label="Age"
          size="small"
        >
          <MenuItem value="+">+</MenuItem>
          <MenuItem value="-">-</MenuItem>
        </Select>

        <TextField
          label="Add description"
          variant="outlined"
          sx={{ width: "400px" }}
          color="secondary"
          size="small"
        />

        <TextField
          label="Value"
          variant="outlined"
          color="secondary"
          size="small"
        />

        <IconButton>
          <CheckCircleOutline color="primary" />
        </IconButton>
      </Stack>

      <Stack direction="row" gap={4} sx={{ justifyContent: "center" }}>
        <Stack sx={{ width: "500px" }} gap={1}>
          <Typography
            sx={{
              alignSelf: "center",
              textAlign: "center",
              color: "primary.main",
              fontWeight: 400,
            }}
            variant="h6"
          >
            Income
          </Typography>

          <Divider />

          {incomes.map((income) => {
            return <BudgetItem {...income} key={income.id} />;
          })}
        </Stack>

        <Stack sx={{ width: "500px" }} gap={1}>
          <Typography
            sx={{
              alignSelf: "center",
              textAlign: "center",
              color: "error.light",
              fontWeight: 400,
            }}
            variant="h6"
          >
            Expenses
          </Typography>

          <Divider />

          {expenses.map((expense) => {
            return <BudgetItem {...expense} key={expense.id} />;
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Budget;
