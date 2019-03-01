// import React from "react"
// import styled from "styled-components"
// import { View } from "native-base"
// import { SystemFlex } from "../../../system-components"
// import { response } from "../../../screens/ModelResultsScreen/ModelResultsScreen"
// import { GGXTick } from "./GGXTick"
// import { GGYTick } from "./GGYTick"
// import { GGLine } from "./GGLine"
// import { GGPoint } from "./GGPoint"

// const GGPlotContent = styled(View)<any>`
// //   position: absolute;
// //   top: 0;
// //   bottom: 0;
// //   left: 0;
// //   right: 0;
// //   z-index: 6;
// //   background-color: white;
// // `
// const GGPlotContainer = styled(View)<any>`
//   ${({ width }) => width && `width: ${width}`}
//   ${({ height }) => height && `height: ${height}`}
//  position: relative;
// `
// export const BlankCorner = styled(View)<any>`
//   position: absolute;
//   ${({ left }) => (left ? `left: ${left}` : `left: 0`)}
//   ${({ top }) => (top ? `top: ${top}` : `top: 0`)}
//   ${({ right }) => (right ? `right: ${right}` : `right:  0`)}
//   ${({ bottom }) => (bottom ? `bottom: ${bottom}` : `bottom:  0`)}
//   background-color: white;
//   z-index: 9
// `

// export const BlankCenter = styled(View)<any>`
//   position: absolute;
//   ${({ left }) => left && `left: ${left}`}
//   ${({ top }) => top && `top: ${top}`}
//   ${({ right }) => right && `right: ${right}`}
//   ${({ bottom }) => bottom && `bottom: ${bottom}`}
//   background-color: white;
//   z-index: 3;
// `

// export const BlankPanel = styled(View)<any>`
//   position: absolute;
//   ${({ left }) => (left ? `left: ${left}` : `left: 0`)}
//   ${({ top }) => (top ? `top: ${top}` : `top: 0`)}
//   ${({ right }) => (right ? `right: ${right}` : `right:  0`)}
//   ${({ bottom }) => (bottom ? `bottom: ${bottom}` : `bottom:  0`)}
//   background-color: white;
//   z-index: 10
// `

// export const GGPlot = () => {
//   const width = 350
//   const height = 250
//   const widthRight = 20
//   const widthLeft = 60
//   const heightTop = 20
//   const heightBottom = 60
//   return (
//     <SystemFlex noFlex>
//       <GGPlotContainer width={width} height={height}>
//         <BlankPanel
//           left={0}
//           top={heightTop}
//           right={width - widthLeft}
//           bottom={heightBottom}
//         >
//           <GGYTick length={250 - 80} tickNumber={6} data={response} />
//         </BlankPanel>
//         <BlankPanel
//           left={widthLeft}
//           top={0}
//           right={widthRight}
//           bottom={height - heightTop}
//         />
//         <BlankPanel
//           left={widthLeft}
//           top={height - heightBottom}
//           right={widthRight}
//           bottom={0}
//         >
//           <GGXTick length={350 - 80} tickNumber={6} data={response} />
//         </BlankPanel>
//         <BlankPanel
//           left={width - widthRight}
//           top={heightTop}
//           right={0}
//           bottom={heightBottom}
//         />
//         <BlankCorner
//           left={0}
//           right={width - widthLeft}
//           top={height - heightBottom}
//           bottom={0}
//         />
//         <BlankCorner
//           left={0}
//           right={width - widthLeft}
//           top={0}
//           bottom={height - heightTop}
//         />
//         <BlankCorner
//           left={width - widthRight}
//           right={0}
//           top={0}
//           bottom={height - heightTop}
//         />
//         <BlankCorner
//           left={width - widthRight}
//           right={0}
//           top={height - heightBottom}
//           bottom={0}
//         />

//         <BlankCenter
//           left={widthLeft}
//           right={widthRight}
//           top={heightTop}
//           bottom={heightBottom}
//         >
//           <GGLine data={response} size={1} />
//           <GGPoint data={response} size={10} />
//         </BlankCenter>
//       </GGPlotContainer>
//     </SystemFlex>
//   )
// }
