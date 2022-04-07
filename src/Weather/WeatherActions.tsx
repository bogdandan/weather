import { Box, IconButton } from "@mui/material";
import {
  ArrowDropDown as ArrowDropDownIcon,
  ArrowDropUp as ArrowDropUpIcon,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../shared";
import { selectCurrentCitySort, sortCities } from "./reducers";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    background: "transparent",
  },
}));

export function WeatherActions(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector(selectCurrentCitySort);

  const shouldRenderArrowUp = currentSort === null || currentSort === "Asc";
  const shouldRenderArrowDown = currentSort === null || currentSort === "Desc";

  return (
    <Box>
      <StyledIconButton
        onClick={() => {
          dispatch(sortCities(currentSort === "Asc" ? "Desc" : "Asc"));
        }}
      >
        <>
          {shouldRenderArrowUp ? (
            <ArrowDropUpIcon sx={{ marginBottom: -1 }} />
          ) : (
            <Box sx={{ width: 24, height: 24, marginBottom: -1 }} />
          )}
          {shouldRenderArrowDown ? (
            <ArrowDropDownIcon sx={{ marginTop: -1 }} />
          ) : (
            <Box sx={{ width: 24, height: 24, marginTop: -1 }} />
          )}
        </>
      </StyledIconButton>
    </Box>
  );
}
