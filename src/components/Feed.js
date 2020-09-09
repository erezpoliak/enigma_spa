import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as Api from "./Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "./Spinner";

const Feed = () => {
  const [data, setData] = useState();
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await Api.getData();
      setData(fetchedData);
    };

    getData();

    const interval = setInterval(() => getData(), 1200000);

    return () => clearInterval(interval);
  }, []);

  const leftArrowClicked = () => (pageNum > 1 ? setPageNum(pageNum - 1) : "");

  const rightArrowClicked = () =>
    pageNum < data.length / 10 ? setPageNum(pageNum + 1) : "";

  const dataForPage = data
    ? data.slice((pageNum - 1) * 10, (pageNum - 1) * 10 + 10)
    : "";

  return (
    <div>
      <Grid>
        {dataForPage ? (
          dataForPage.map((i) => {
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
        ) : (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        )}
      </Grid>
      <PageSelector>
        <FontAwesomeIcon
          icon={faArrowCircleLeft}
          style={{ fontSize: "4.5vh", cursor: "pointer" }}
          onClick={leftArrowClicked}
        />
        <PageNumber>{pageNum}</PageNumber>
        <FontAwesomeIcon
          icon={faArrowCircleRight}
          style={{ fontSize: "4.5vh", cursor: "pointer" }}
          onClick={rightArrowClicked}
        />
      </PageSelector>
    </div>
  );
};

export default Feed;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 10%);
  justify-content: space-around;
  height: 80%;
`;

const ColumnData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
`;

const PageSelector = styled.div`
  padding-top: 6vh;
  height: 20%;
  display: flex;
  justify-content: center;
`;

const PageNumber = styled.div`
  padding: 1vh;
  font-size: 2.5vh;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
