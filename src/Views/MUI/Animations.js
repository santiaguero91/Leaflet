import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { FormGroup, Switch, Card, Paper, Typography } from "@mui/material";

export const CustomType = styled(Typography)`
  color: black;
  font-size: 20px;

`;

export const CustomBox = styled(Box)`
  color: black;
  background-color: white;
  font-size: 20px;
  padding: 20px;
`;


export const CustomizedDiv = styled(Box)`
  background-color: #2e8b57;
  color: black;
  transition: 2s;
  border-radius: 25px;
  margin: 2rem auto;
  padding: 1rem;
  width: 50vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .heartbeat {
    animation: heartbeat 2.5s ease-in-out infinite both;
  }

  @keyframes heartbeat {
    from {
      transform: scale(1);
      transform-origin: center center;
      animation-timing-function: ease-out;
    }
    10% {
      transform: scale(0.91);
      animation-timing-function: ease-in;
    }
    17% {
      transform: scale(0.98);
      animation-timing-function: ease-out;
    }
    33% {
      transform: scale(0.87);
      animation-timing-function: ease-in;
    }
    45% {
      transform: scale(1);
      animation-timing-function: ease-out;
    }
  }

  .breathing_animation {
    animation-name: breathing;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes breathing {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .tracking_in_contract {
    animation: tracking_in_contract 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)
      both;
  }
  @keyframes tracking_in_contract {
    0% {
      letter-spacing: 1em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      letter-spacing: normal;
      opacity: 1;
    }
  }

  .focus_in_expand_fwd {
    animation: focus_in_expand_fwd 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
  }

  @keyframes focus_in_expand_fwd {
    0% {
      letter-spacing: -0.5em;
      transform: translateZ(-800px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0);
      filter: blur(0);
      opacity: 1;
    }
  }
`;
