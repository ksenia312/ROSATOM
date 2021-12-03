import styled from "styled-components";
import React from 'react'

const Input = styled.input
  `
    position: relative;
    min-width: max-content;
    height: ${props => {
        if (props.small) {return 20}
        else if (props.large) {return 45}
        else {return 36}
    }}px;
    width: ${props => {
        if (props.small) {return 120}
        else if (props.large) {return 180}
        else {return 144}
    }}px;
    font-size: ${props => {
      if (props.small) {return 16}
      else if (props.large) {return 24}
      else {return 18}
    }}px;
    padding: 10px;
    margin: 10px 0;
    background: white;
    border: 1px solid gray;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    ::placeholder {
        color: palevioletred;
    }
  `

export default Input
