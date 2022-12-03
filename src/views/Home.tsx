import { useDispatch, useSelector } from "react-redux";
import { Button, Stack, Box } from "@mui/material";
import { increment } from "../store/slices/test";

const Home = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.test.counter);

  return (
    <>
      <Stack direction="row" gap={1} sx={{ alignItems: "center" }}>
        <Button onClick={() => dispatch(increment(counter + 1))}>
          Increment
        </Button>

        <Box>Counter: {counter}</Box>
      </Stack>
    </>
  );
};

export default Home;
