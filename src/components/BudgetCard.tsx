import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import {
  DeleteOutlineOutlined,
  PushPin,
  PushPinOutlined,
} from "@mui/icons-material";
import { Budget } from "../views/Home";
import { Link } from "react-router-dom";
import { useState } from "react";

const BudgetCard = ({ name, balance, date, id }: Budget) => {
  const [isPinned, setIsPinned] = useState<Boolean>(false);

  const onPin = (event: any) => {
    event.preventDefault();

    setIsPinned(!isPinned);
  };

  return (
    <Stack
      sx={{
        backgroundColor: "budgetCardBg.main",
        border: "1px solid",
        borderColor: "budgetCardBorder.main",
        borderRadius: "4px",
        padding: 3,
        textDecoration: "none",
        color: "inherit",
      }}
      direction="row"
      component={Link}
      to={`/${id}`}
    >
      <Stack gap={1} sx={{ flexGrow: 1 }}>
        <Stack direction="row" gap={2} alignItems="center">
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {name}
          </Typography>

          <Tooltip title={isPinned ? "Unpin" : "Pin"}>
            <IconButton size="small" color="secondary" onClick={onPin}>
              {isPinned ? <PushPin /> : <PushPinOutlined />}
            </IconButton>
          </Tooltip>
        </Stack>

        <Stack direction="row" gap={1} alignItems="center">
          <Typography variant="subtitle1" color="text.primary">
            Balance:
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {balance}€
          </Typography>
        </Stack>

        <Stack direction="row" gap={1} alignItems="center">
          <Typography variant="subtitle1" color="text.primary">
            Created at:
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {date}
          </Typography>
        </Stack>
      </Stack>

      <IconButton color="error" size="small" sx={{ alignSelf: "start" }}>
        <DeleteOutlineOutlined />
      </IconButton>
    </Stack>
  );
};

export default BudgetCard;
