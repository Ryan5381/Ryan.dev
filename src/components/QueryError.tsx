import { Alert, Button } from "@mui/material";

interface QueryErrorProps {
  message: string;
  retrying: boolean;
  onRetry: () => void;
}

const QueryError = ({ message, retrying, onRetry }: QueryErrorProps) => (
  <Alert
    severity="error"
    sx={{ my: 3 }}
    action={
      <Button color="inherit" disabled={retrying} onClick={onRetry}>
        {retrying ? "重試中…" : "重新載入"}
      </Button>
    }
  >
    {message}
  </Alert>
);

export default QueryError;
