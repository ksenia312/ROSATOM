import styled from "styled-components";
import React from 'react'

const Button = styled.button
  `
    position: relative;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // min-width: max-content;
    height: ${props => {
      if (props.small) {return 50}
      else if (props.large) {return 130}
      else {return 100}
    }}px;
    width: ${props => {
      if (props.small) {return 130}
      else if (props.large) {return 430}
      else {return 330}
    }}px;
    border-radius: ${props => {
      if (props.small) {return 80}
      else if (props.large) {return 110}
      else {return 100}
    }}px;
    font-size: ${props => {
      if (props.small) {return 18}
      else if (props.large) {return 36}
      else {return 24}
    }}px;;
    color: #ffffff;
    letter-spacing: 2px;
    margin: 2px;
    padding: 0 30px;
    background-color: ${props => {
      if (props.red) {return `#9b1b1e`}
      else if (props.blue) {return `#1f3781`}
      else if (props.green) {return `#21981e`}
      else {return `#3C3B3B`}
    }};
    :hover {
      background-color: ${props => {
        if (props.red) {return `#731518`}
        else if (props.blue) {return `#152456`}
        else if (props.green) {return `#125611`}
        else {return `#262525`}
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