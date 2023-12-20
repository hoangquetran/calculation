import {
  Button,
  Grid,
  Container,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./calc.css";

const Calc = () => {
  const [result, setResult] = useState("");

  const clickHandle = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clearOne = () => {
    setResult(result.slice(0, -1));
  };

  const reset = () => {
    setResult("");
  };

  const calculator = () => {
    result === "" ? setResult("") : setResult(eval(result).toString());
  };

  return (
    <Container
      maxWidth="xs"
      sx={{ marginTop: 10, padding: 20 }}
      className="container"
    >
      <Box className="box-welcome">
        <Typography align="center" className="welcome">
          Hi, Kyle! Let's calculate with me.
        </Typography>
      </Box>

      <TextField
        placeholder="0"
        value={result}
        fullWidth
        className="input-result"
      />
      <Box>
        <Box>
          <Button
            variant="text"
            value="9"
            onClick={clickHandle}
            className="button"
          >
            9
          </Button>
          <Button
            variant="text"
            value="8"
            onClick={clickHandle}
            className="button"
          >
            8
          </Button>
          <Button
            variant="text"
            value="7"
            onClick={clickHandle}
            className="button"
          >
            7
          </Button>
          <Button
            variant="text"
            value="6"
            onClick={clickHandle}
            className="button"
          >
            6
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
            value="5"
            onClick={clickHandle}
            className="button"
          >
            5
          </Button>
          <Button
            variant="text"
            value="4"
            onClick={clickHandle}
            className="button"
          >
            4
          </Button>
          <Button
            variant="text"
            value="3"
            onClick={clickHandle}
            className="button"
          >
            3
          </Button>
          <Button
            variant="text"
            value="2"
            onClick={clickHandle}
            className="button"
          >
            2
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
            value="1"
            onClick={clickHandle}
            className="button"
          >
            1
          </Button>
          <Button
            variant="text"
            value="0"
            onClick={clickHandle}
            className="button"
          >
            0
          </Button>
          <Button
            variant="text"
            value="00"
            onClick={clickHandle}
            className="button"
          >
            00
          </Button>

          <Button
            variant="text"
            value="."
            onClick={clickHandle}
            className="button"
          >
            .
          </Button>
        </Box>

        <Box>
          <Button
            variant="text"
            value="+"
            onClick={clickHandle}
            className="button"
          >
            +
          </Button>
          <Button
            variant="text"
            value="-"
            onClick={clickHandle}
            className="button"
          >
            -
          </Button>
          <Button
            variant="text"
            value="*"
            onClick={clickHandle}
            className="button"
          >
            *
          </Button>
          <Button
            variant="text"
            value="/"
            onClick={clickHandle}
            className="button"
          >
            /
          </Button>
        </Box>

        <Box>
          <Button
            variant="text"
            value="%"
            onClick={clickHandle}
            className="button"
          >
            %
          </Button>
          <Button variant="text" value="CE" onClick={reset} className="button">
            CE
          </Button>
          <Button
            variant="text"
            value="DE"
            onClick={clearOne}
            className="button"
          >
            DE
          </Button>
          <Button
            variant="text"
            value="="
            onClick={calculator}
            className="button"
          >
            =
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Calc;
