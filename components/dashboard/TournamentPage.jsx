import React from "react";
import { TournamentBanner } from "./TournamentBanner";
import { MatchOnline } from "./MatchOnline";
import { TopGames } from "./TopGames";
import { PastTournaments } from "./PastTournaments";
// import { TournamentRight } from "./TournamentRight";
import TournamentListing from "../../components/admindashboard/tournaments/TournamentListing";
import styles from "../../styles/dashboard/index.module.css";
import OngoingTornaments from "../admindashboard/tournaments/OngoingTornaments";
import UpcomingTornaments from "../admindashboard/tournaments/UpcomingTornaments";
export const TournamentPage = () => {
  return (
    <div className={`flex-1 p-10 TournamentPage ${styles.TournamentPage}`}>
      <TournamentBanner />
      <div className={`flex mt-10 gap-10 ${styles.TournamentPageInnerWrapper}`}>
        <div className="flex-1">
          <OngoingTornaments />
          <UpcomingTornaments />
          <MatchOnline />
          <TournamentListing />
          <TopGames />
          <PastTournaments />
        </div>
        {/* <TournamentRight /> */}
      </div>
    </div>
  );
};
