import React, { Component } from "react"
import "./App.css"
import styled from "styled-components"

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align: center;
  width: 100vw;
  height: 72;
  background-color: #4a4a4a;
`

const CenterContainer = styled.div`
  max-width: 960px;
  display: flex;
  align-items: center;
  flex: 1;
`
const BodyContainer = styled.div`
  display: flex;
  flex: 1;
  height: calc(100vh - 72px - 150px);
  background-color: #f1d302;
  justify-content: center;
`

const SystemSpace = styled.div<{ size: number }>`
  max-width: ${({ size }) => size && `${size}px`};
  min-width: ${({ size }) => size && `${size}px`};
  max-height: ${({ size }) => size && `${size}px`};
  min-height: ${({ size }) => size && `${size}px`};
`

const Body = styled.body`
  width: 100vw;
  height: 100vh;
`

class App extends Component {
  render() {
    return (
      <Body
      >
        <HeaderContainer>
          <CenterContainer>
            <img
              src={require("./assets/logo-white-small@3x.png")}
              style={{ height: 50, display: "flex" }}
            />

            <SystemSpace size={32} />
            <h2
              style={{
                fontFamily: "Roboto",
                fontSize: 24,
                fontStyle: "italic",
                color: "#F0F0F0",
                fontWeight: 800,
                display: "flex"
              }}
            >
              Coffee Engine
            </h2>
          </CenterContainer>
        </HeaderContainer>

        <BodyContainer>
          <CenterContainer
            style={{
              justifyContent: "space-around"
            }}
          >
            <img
              src={require("./assets/mockup-1.png")}
              style={{ height: 350 }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <h1
                style={{
                  fontFamily: "Roboto",
                  fontSize: 48,
                  fontStyle: "italic",
                  color: "#4a4a4a",
                  fontWeight: 800,
                  textAlign: "center"
                }}
              >
                Coffee Engine
              </h1>
              <SystemSpace size={56} />
              <img
                src={require("./assets/logo-white-large@3x.png")}
                style={{ height: 200, width: "auto" }}
              />
              <SystemSpace size={56} />
              <h3
                style={{
                  fontFamily: "Roboto",
                  fontSize: 32,
                  color: "#4a4a4a",
                  fontWeight: 500,
                  textAlign: "center"
                }}
              >
                Get yield estimates from <br />
                any location on the globe.
              </h3>
            </div>
            <img
              src={require("./assets/mockup-2.png")}
              style={{ height: 350 }}
            />
          </CenterContainer>
        </BodyContainer>

        <div
          style={{
            width: "100vw",
            height: "150px",
            backgroundColor: "#4a4a4a",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <CenterContainer
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <h3
              style={{
                fontFamily: "Roboto",
                fontSize: 16,
                color: "#F0F0F0",
                fontWeight: 400
              }}
            >
              Contact: coffeeinfoengine@gmail.com
            </h3>
            <h3
              style={{
                fontFamily: "Roboto",
                fontSize: 12,
                color: "#F0F0F0",
                fontWeight: 400
              }}
            >
              copyright @ 2019 James Margrove. All rights reserved.
            </h3>
          </CenterContainer>
        </div>
      </Body>
    )
  }
}

export default App
