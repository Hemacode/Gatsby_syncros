import React from 'react'
import { useEffect, useCallback } from "react";
import moment from "moment";
import LOGO_IMG from "../../../images/logo.svg";
import LayoutComponent from '../layout';
import "./style.scss";

function DashBoard(props: any) {

  const decrementTimer = useCallback(() => {
    // setTime(moment().format("hh:mm"));
  }, []);

  useEffect(() => {
    const timeoutFunction = setInterval(decrementTimer, 1000);
    return () => clearInterval(timeoutFunction);
  }, [decrementTimer]);

  return (
    <>
    <LayoutComponent>
      <div className="dashboard-blk">
        <div className="dashboard-blk__header">
          <div className="logo">
            <img src={LOGO_IMG} alt="synkros" />
          </div>

          <div className="user-blk">
            <div className="user-blk__placeholder">LE</div>
            <div className="user-blk__name">
              <h4>Local Ems</h4>
              <span>
                <small /> available{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="dashboard-blk__footer">
          <div className="dashboard-blk__clock">
            <h2>
              {moment().format("hh:mm")} <sup>{moment().format("a")}</sup>
            </h2>
            <p>{moment().format("dddd, MMMM Do YYYY")} </p>
          </div>

          <div className="dashboard-blk__sitemap">
            <ul>
              <li>
                GameSite: <strong> DEV 4.1 Standalone</strong>
              </li>
              <li>
                Gaming Day Type: <strong>Tables</strong>
              </li>
              <li>
                <strong>No Repository</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </LayoutComponent>
    </>
  );
}

export default DashBoard;
