import React from "react";

import NumberFormat from "react-number-format";
import styled, { css } from "styled-components";
import Modal from "../../../UI/Modal/Modal";
import moment from "moment";

const TopContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`;
const MiddleContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
`;
const BottomContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: center;
`;

const H2 = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 21px;
  padding-bottom: 5px;
`;
const P = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 11px;
`;
const DD = styled.dd`
  margin: 0;
  padding: 0;
  font-weight: 300;
  margin-inline-start: 10px;
`;
const DT = styled.dt`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 1em;
  display: flex;
  ${props =>
    props.small &&
    css`
      margin-inline-start: 10px;
      color: #999;
      font-size: 0.85em;
    `}
`;

const I = styled.i`
  margin: 0;
  padding: 0;
  color: #000;
  width: 32px;
  height: 32px;
`;
const BlockTitle = styled.span`
  margin: 0;
  padding: 0;
  color: #999;
  font-size: 0.8em;
  padding-top: 4px;
  font-weight: 300px;
`;

const Block = styled.div`
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  transition:1.5s;
  @media (max-width: 800px) {
    width: 55%;
  }
`;

const HR = styled.hr`
  margin: 8px 24px;
  border-style: solid;
  border-bottom: none;
  border-left: none;
  border-right: none;
  border-top-color: grey;
`;

const PopupInfo = props => {
  if (props.open) {
    return (
      <Modal close={props.close}>
        <TopContainer>
          <H2>Info</H2>
          <P>Published {moment(props.post.created_at).fromNow()}</P>
        </TopContainer>
        <MiddleContainer>
          <Block>
            <DT>
              <I className="material-icons">remove_red_eye</I>
              <BlockTitle>Views</BlockTitle>
            </DT>
            <DD>
              <NumberFormat
                value={props.post.views}
                displayType={"text"}
                thousandSeparator={true}
              />
            </DD>
          </Block>
          <Block>
            <DT>
              <I alt="Download" className="material-icons">
                arrow_downward
              </I>
              <BlockTitle>Downloads</BlockTitle>
            </DT>
            <DD>
              <NumberFormat
                value={props.post.downloads}
                displayType={"text"}
                thousandSeparator={true}
              />
            </DD>
          </Block>
          <Block>
            <DT>
              <I className="material-icons">favorite</I>
              <BlockTitle>Likes</BlockTitle>
            </DT>
            <DD>
              <NumberFormat
                value={props.post.likes}
                displayType={"text"}
                thousandSeparator={true}
              />
            </DD>
          </Block>
        </MiddleContainer>
        <HR />
        <BottomContainer>
          <Block>
            <DT small>Camera</DT>
            <DD>{props.post.exif.make}</DD>
          </Block>
          <Block>
            <DT small>Camera Model</DT>
            <DD>{props.post.exif.model}</DD>
          </Block>
          <Block>
            <DT small>Focal Length</DT>
            <DD>{props.post.exif.focal_length}</DD>
          </Block>
          <Block>
            <DT small>Aperture</DT>
            <DD>ƒ/{props.post.exif.aperture}</DD>
          </Block>
          <Block>
            <DT small>Shutter Speed</DT>
            <DD>{props.post.exif.exposure_time}</DD>
          </Block>
          <Block>
            <DT small>ISO</DT>
            <DD>{props.post.exif.iso}</DD>
          </Block>
          <Block>
            <DT small>Dimensions</DT>
            <DD>{props.post.width} × {props.post.height}</DD>
          </Block>
        </BottomContainer>
      </Modal>
    );
  }else{
    return null;
  }
};

export default PopupInfo;
