import styled from "styled-components";
import React from 'react'

const Button = styled.button
  `
    position: relative;
    border: none;
    min-width: max-content;
    height: ${props => {
      if (props.small) {return 30}
      else if (props.large) {return 45}
      else {return 36}
    }}px;
    width: ${props => {
      if (props.small) {return 120}
      else if (props.large) {return 180}
      else {return 144}
    }}px;
    border-radius: 10px;
    color: #ffffff;
    letter-spacing: 2px;
    margin: 2px;
    padding: 0 15px;
    background-color: ${props => {
      if (props.red) {return `#9b1b1e`}
      else if (props.blue) {return `#1f3781`}
      else if (props.green) {return `#21981e`}
      else {return `#606060`}
    }};
    :hover {
      background-color: ${props => {
        if (props.red) {return `#731518`}
        else if (props.blue) {return `#152456`}
        else if (props.green) {return `#125611`}
        else {return `#333333`}
      }};
    }

    :active {
      background-color: ${props => {
        if (props.red) {return `#490d0e`}
        else if (props.blue) {return `#0f1a41`}
        else if (props.green) {return `#0a2f09`}
        else {return `#000000`}
      }};
    }
  `

export default Button