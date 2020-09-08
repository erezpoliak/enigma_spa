import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as Api from "./Api";

const Feed = () => {
  //   const [data, setData] = useState();

  //   useEffect(() => {
  //     const getData = async () => {
  //       const fetchedData = await Api.getData();
  //       setData(fetchedData);
  //     };

  //     getData();
  //   }, []);

  const data = [
    {
      currency: "40",
      rate: "2.89238",
      bid: "1280938",
      ask: "137946",
      high: "12734",
      low: "8374",
      open: "214897",
      close: "12983",
      timestamp: "1280478912",
    },
    {
      currency: "40",
      rate: "2.89238",
      bid: "1280938",
      ask: "137946",
      high: "12734",
      low: "8374",
      open: "214897",
      close: "12983",
      timestamp: "1280478912",
    },
    {
      currency: "40",
      rate: "2.89238",
      bid: "1280938",
      ask: "137946",
      high: "12734",
      low: "8374",
      open: "214897",
      close: "12983",
      timestamp: "1280478912",
    },
    {
      currency: "40",
      rate: "2.89238",
      bid: "1280938",
      ask: "137946",
      high: "12734",
      low: "8374",
      open: "214897",
      close: "12983",
      timestamp: "1280478912",
    },
    {
      currency: "40",
      rate: "2.89238",
      bid: "1280938",
      ask: "137946",
      high: "12734",
      low: "8374",
      open: "214897",
      close: "12983",
      timestamp: "1280478912",
    },
    {
      currency: "40",
      rate: "2.89238",
      bid: "1280938",
      ask: "137946",
      high: "12734",
      low: "8374",
      open: "214897",
      close: "12983",
      timestamp: "1280478912",
    },
    {
      currency: "40",
      rate: "2.89238",
      bid: "1280938",
      ask: "137946",
      high: "12734",
      low: "8374",
      open: "214897",
      close: "12983",
      timestamp: "1280478912",
    },
    {
      currency: "40",
      rate: "2.89238",
      bid: "1280938",
      ask: "137946",
      high: "12734",
      low: "8374",
      open: "214897",
      close: "12983",
      timestamp: "1280478912",
    },
    {
      currency: "40",
      rate: "2.89238",
      bid: "1280938",
      ask: "137946",
      high: "12734",
      low: "8374",
      open: "214897",
      close: "12983",
      timestamp: "1280478912",
    },
    {
      currency: "40",
      rate: "2.89238",
      bid: "1280938",
      ask: "137946",
      high: "12734",
      low: "8374",
      open: "214897",
      close: "12983",
      timestamp: "1280478912",
    },
    {
      currency: "40",
      rate: "2.89238",
      bid: "1280938",
      ask: "137946",
      high: "12734",
      low: "8374",
      open: "214897",
      close: "12983",
      timestamp: "1280478912",
    },
    {
      currency: "40",
      rate: "2.89238",
      bid: "1280938",
      ask: "137946",
      high: "12734",
      low: "8374",
      open: "214897",
      close: "12983",
      timestamp: "1280478912",
    },
    {
      currency: "40",
      rate: "2.89238",
      bid: "1280938",
      ask: "137946",
      high: "12734",
      low: "8374",
      open: "214897",
      close: "12983",
      timestamp: "1280478912",
    },
    {
      currency: "40",
      rate: "2.89238",
      bid: "1280938",
      ask: "137946",
      high: "12734",
      low: "8374",
      open: "214897",
      close: "12983",
      timestamp: "1280478912",
    },
    {
      currency: "40",
      rate: "2.89238",
      bid: "1280938",
      ask: "137946",
      high: "12734",
      low: "8374",
      open: "214897",
      close: "12983",
      timestamp: "1280478912",
    },
    {
      currency: "40",
      rate: "2.89238",
      bid: "1280938",
      ask: "137946",
      high: "12734",
      low: "8374",
      open: "214897",
      close: "12983",
      timestamp: "1280478912",
    },
  ];

  return (
    <Grid>
      {data
        ? data.map((i) => {
            return (
              <>
                <ColumnData>{i.currency}</ColumnData>
                <ColumnData>{i.rate}</ColumnData>
                <ColumnData>{i.bid}</ColumnData>
                <ColumnData>{i.ask}</ColumnData>
                <ColumnData>{i.high}</ColumnData>
                <ColumnData>{i.low}</ColumnData>
                <ColumnData>{i.open}</ColumnData>
                <ColumnData>{i.close}</ColumnData>
                <ColumnData>{i.timestamp}</ColumnData>
              </>
            );
          })
        : ""}
    </Grid>
  );
};

export default Feed;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 10%);
  /* grid-template-rows: repeat(10, 8%); */
  justify-content: space-around;
`;

const ColumnData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
`;
