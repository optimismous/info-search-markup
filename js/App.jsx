import React from "react";
import { Auth } from "./components/Auth";
import { Page } from "./components/Page";
import { Route, Routes } from "react-router-dom";
import { RoutesIndex } from "./components/RoutesIndex";
import { PrivateCabinet } from "./components/PrivateCabinet";
import { SbsDetails } from "./components/SbsDetails";
import { AdditionalActionsMenu } from "./components/ui/AdditionalActionsMenu/AdditionalActionsMenu";
import { StyledLink } from "./components/ui/Typography/Typography";
import { Search } from "./components/Search";
import { Support } from "./components/Support";
import { Users } from "./components/Users";
import { WatchList } from "./components/WatchList";

const SbsDetailsElement = () => {
  const leftElement = (
    <>
      <span className="BackLinkArrow">&lsaquo;</span>
      <StyledLink to="/">Назад</StyledLink>
    </>
  );
  const rightElement = (
    <a href="#" download="download">
      <StyledLink color="red" to="/">
        Выгрузить в PDF
      </StyledLink>
    </a>
  );
  return (
    <Page>
      <AdditionalActionsMenu
        leftElement={leftElement}
        rightElement={rightElement}
      />
      <SbsDetails />
    </Page>
  );
};

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
          path="/private-cabinet"
          element={
            <Page>
              <PrivateCabinet />
            </Page>
          }
        />
        <Route
          path="/search"
          element={
            <Page>
              <Search />
            </Page>
          }
        />
        <Route path="/sbs-details" element={<SbsDetailsElement />} />
        <Route
          path="/support"
          element={
            <Page>
              <Support />
            </Page>
          }
        />
        <Route
          path="/users"
          element={
            <Page>
              <Users />
            </Page>
          }
        />
        <Route
          path="/watch-list"
          element={
            <Page>
              <WatchList />
            </Page>
          }
        />
      </Routes>
    </>
  );
}
