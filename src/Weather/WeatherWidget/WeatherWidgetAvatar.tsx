import { Avatar, CircularProgress } from "@mui/material";
import { Error as ErrorIcon } from "@mui/icons-material";

export function WeatherWidgetAvatar({
  isLoading,
  isError,
  iconUrl,
}: {
  isLoading: boolean;
  isError: boolean;
  iconUrl?: string;
}): JSX.Element {
  if (isLoading) {
    return <CircularProgress size={20} />;
  } else if (isError) {
    return (
      <Avatar sx={{ background: "transparent" }}>
        {/* NOTE: error.main there refers to 'theme.palette.error.main' and can be change at theme level*/}
        <ErrorIcon sx={{ color: "error.main" }} />
      </Avatar>
    );
  } else {
    return <Avatar src={iconUrl} />;
  }
}
