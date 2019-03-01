


export const GGXLab : FunctionComponent<any> = ({ length, tickNumber }) => {
    const tickSpaces = tickNumber - 1
    const xTickPosition = Array(tickNumber)
      .fill(1)
      .map((el, i) => {
        return Math.round((length / tickSpaces) * i * 10) / 10
      })
    return (
        <>
        {xTickPosition.map((el, i) => {
          return (
            <React.Fragment key={i}>
              <XTickMajor key={i} x={el - 1} y={-12} />
              <XLabMajor x={el - el.toString().length * 4} y={-12 - 16}>
                {el}
              </XLabMajor>
            </React.Fragment>
          )
        })}
      </>
}