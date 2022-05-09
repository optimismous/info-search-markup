import React from "react";
import { Auth } from "./components/Auth";
import { Page } from "./components/Page";
import { Route, Routes } from "react-router-dom";
import { RoutesIndex } from "./components/RoutesIndex";
import { PrivateCabinet } from "./components/PrivateCabinet";
import { Rfpi } from "./components/Rfpi";
import { SbsDetails } from "./components/SbsDetails";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="/routes"
          element={
            <Page>
              <RoutesIndex />
            </Page>
          }
        />
        <Route
          path="private-cabinet"
          element={
            <Page>
              <PrivateCabinet />
            </Page>
          }
        />
        <Route
          path="rfpi"
          element={
            <Page>
              <Rfpi />
            </Page>
          }
        />
        <Route
          path="sbs-details"
          element={
            <Page>
              <SbsDetails />
            </Page>
          }
        />
      </Routes>
    </>
  );
}
