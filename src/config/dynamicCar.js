import { withStyles } from "@material-ui/core/styles";
import StepConnector from "@material-ui/core/StepConnector";

export const QontoConnector = withStyles({
  active: {
    "& $line": {
      borderColor: "#2CC120",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#2CC120",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);