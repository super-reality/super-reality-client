import React, { useEffect, useState } from "react";
import "./index.scss";

import { supportTicketPayload } from "../../api/types/support-ticket/supportTicket";

import getSupportTickets from "./support-tickets-utils/getSupportTickets";
/* import searchSupportTickets from "./support-tickets-utils/searchSupportTickets"; */

/* import voteup from "../../../assets/images/voteup.png";
import votedown from "../../../assets/images/votedown.png";
import ticketuser from "../../../assets/images/ticket-user.png";
import emoji1 from "../../../assets/svg/emoji1.svg";
import emoji2 from "../../../assets/svg/emoji2.svg";
import emoji3 from "../../../assets/svg/emoji3.svg";
import emoji4 from "../../../assets/svg/emoji4.svg";
import emoji5 from "../../../assets/svg/emoji5.svg";
import emoji6 from "../../../assets/svg/emoji6.svg";
import emoji7 from "../../../assets/svg/emoji7.svg";
import emoji8 from "../../../assets/svg/emoji8.svg";

import emoji9 from "../../../assets/svg/emoji9.svg";

import timeposted from "../../../assets/images/timeposted.png";
import chats from "../../../assets/images/chats.png"; */
/* eslint-disable */
import SingleTicket from "./single-ticket";

import SupperSpinner from "../super-spinner";

const options = ["one", "two", "three"];

export default function SupportTickets(): JSX.Element {
  const [tickets, setTickets] = useState<supportTicketPayload[]>([]);

  const [filterOption, setFilterOption] = useState<string>("newest");

  const [searchOption, setSearchOption] = useState<string>("Anmiation");

  useEffect(() => {
    (async () => {
      await getSupportTickets().then((tickets) => {
        setTickets(tickets.reverse());
      });
    })();
  }, []);

  useEffect(() => {
    let arrayTickets: supportTicketPayload[] = [];
    if (filterOption === "oldest") {
      arrayTickets = [...tickets];
      setTickets(arrayTickets.reverse());
    }

    if (filterOption === "newest") {
      arrayTickets = [...tickets];
      setTickets(arrayTickets.reverse());
    }
  }, [filterOption]);

  /* useEffect(() => {
    console.log(searchOption);
    const arrayTickets: supportTicketPayload[] = [...tickets];
    console.log(arrayTickets);
    console.log(arrayTickets.filter((t) => t.title == searchOption));
    if (arrayTickets.filter((t) => t.title == searchOption).length > 0) {
      setTickets(arrayTickets.filter((t) => t.title == searchOption));
    } 
    if(searchOption.length !=0){
      (async () => {
      const ob = {
        name: searchOption,
      };
      await searchSupportTickets(ob).then((ticks) => setTickets(ticks));
    })();
    }
  }, [searchOption]);*/

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(e.target.value);
  };

  const searchTickets = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchOption(e.target.value);
  };

  return (
    <>
      <>
        <div className="ticket-title">Filter By</div>
        <div className="ticket-container">
          <div className="ticket-category">
            Category
            <input type="text" value="Select Categories" />
          </div>

          <div className="ticket-search">
            <div className="ticket-wrapper">
              <input
                type="text"
                value={searchOption}
                onChange={searchTickets}
              />
              <a href="">Advanced Search</a>
              <div className="request-count">
                {tickets.length} Help Requests
                <div className="sort-filter">
                  <select value={filterOption} onChange={handleFilter}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
              </div>

              {tickets.length == 0 ? (
                <div className="loading-tickets">
                  <SupperSpinner width="100px" text="Loading Tickets" />
                </div>
              ) : (
                <div className="ticket-list">
                  {tickets.map((ticket, index) => (
                    <SingleTicket
                      index={index}
                      {...ticket}
                      timeposted={ticket.createdAt!}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
}

/* <div className="single-query">
                    <div className="voting">
                      <div className="up-vote">
                        <button type="button">
                          <img src={voteup} alt="" />
                        </button>
                      </div>
                      <div className="vote">12</div>
                      <div className="down-vote">
                        <button type="button">
                          <img src={votedown} alt="" />
                        </button>
                      </div>
                    </div>

                    <div className="content">
                      <div className="query">I need help Animating</div>
                      <div className="description">
                        I am trying to create an Animation. I was hoping someone
                        could create a lesson. Tempor lorem sociis molestie
                        velit, et etiam bibendum dolor. Amet libero, eleifend
                        viverra feugiat mi interdum risus id. Vel dapibus ut nec
                        pulvinar praesent dolor pharetra.
                      </div>
                      <div className="ticket-user-info">
                        <div className="ticket-user">
                          <img src={ticketuser} alt="" />
                          Nick Marks
                        </div>
                        <div className="vibe-rating">
                          Vibe Rating
                          <div className="emojis">
                            <img src={emoji1} alt="" />
                            <img src={emoji2} alt="" />
                            <img src={emoji3} alt="" />
                          </div>
                        </div>
                        <div className="timeposted">
                          <img src={timeposted} alt="" />
                          30mins ago
                        </div>
                        <div className="ticket-chats">
                          <img src={chats} alt="" />
                          50+
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-query">
                    <div className="voting">
                      <div className="up-vote">
                        <button type="button">
                          <img src={voteup} alt="" />
                        </button>
                      </div>
                      <div className="vote">12</div>
                      <div className="down-vote">
                        <button type="button">
                          <img src={votedown} alt="" />
                        </button>
                      </div>
                    </div>

                    <div className="content">
                      <div className="query">I need help Animating</div>
                      <div className="description">
                        I am trying to create an Animation. I was hoping someone
                        could create a lesson. Tempor lorem sociis molestie
                        velit, et etiam bibendum dolor. Amet libero, eleifend
                        viverra feugiat mi interdum risus id. Vel dapibus ut nec
                        pulvinar praesent dolor pharetra.
                      </div>
                      <div className="ticket-user-info">
                        <div className="ticket-user">
                          <img src={ticketuser} alt="" />
                          Nick Marks
                        </div>
                        <div className="vibe-rating">
                          Vibe Rating
                          <div className="emojis">
                            <img src={emoji4} alt="" />
                            <img src={emoji5} alt="" />
                            <img src={emoji6} alt="" />
                            <img src={emoji6} alt="" />
                          </div>
                        </div>
                        <div className="timeposted">
                          <img src={timeposted} alt="" />
                          30mins ago
                        </div>
                        <div className="ticket-chats">
                          <img src={chats} alt="" />
                          50+
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-query">
                    <div className="voting">
                      <div className="up-vote">
                        <button type="button">
                          <img src={voteup} alt="" />
                        </button>
                      </div>
                      <div className="vote">12</div>
                      <div className="down-vote">
                        <button type="button">
                          <img src={votedown} alt="" />
                        </button>
                      </div>
                    </div>

                    <div className="content">
                      <div className="query">I need help Animating</div>
                      <div className="description">
                        I am trying to create an Animation. I was hoping someone
                        could create a lesson. Tempor lorem sociis molestie
                        velit, et etiam bibendum dolor. Amet libero, eleifend
                        viverra feugiat mi interdum risus id. Vel dapibus ut nec
                        pulvinar praesent dolor pharetra.
                      </div>
                      <div className="ticket-user-info">
                        <div className="ticket-user">
                          <img src={ticketuser} alt="" />
                          Nick Marks
                        </div>
                        <div className="vibe-rating">
                          Vibe Rating
                          <div className="emojis">
                            <img src={emoji7} alt="" />
                            <img src={emoji8} alt="" />
                            <img src={emoji9} alt="" />
                          </div>
                        </div>
                        <div className="timeposted">
                          <img src={timeposted} alt="" />
                          30mins ago
                        </div>
                        <div className="ticket-chats">
                          <img src={chats} alt="" />
                          50+
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-query">
                    <div className="voting">
                      <div className="up-vote">
                        <button type="button">
                          <img src={voteup} alt="" />
                        </button>
                      </div>
                      <div className="vote">12</div>
                      <div className="down-vote">
                        <button type="button">
                          <img src={votedown} alt="" />
                        </button>
                      </div>
                    </div>

                    <div className="content">
                      <div className="query">I need help Animating</div>
                      <div className="description">
                        I am trying to create an Animation. I was hoping someone
                        could create a lesson. Tempor lorem sociis molestie
                        velit, et etiam bibendum dolor. Amet libero, eleifend
                        viverra feugiat mi interdum risus id. Vel dapibus ut nec
                        pulvinar praesent dolor pharetra.
                      </div>
                      <div className="ticket-user-info">
                        <div className="ticket-user">
                          <img src={ticketuser} alt="" />
                          Nick Marks
                        </div>
                        <div className="vibe-rating">
                          Vibe Rating
                          <div className="emojis">
                            <img src={emoji7} alt="" />
                            <img src={emoji8} alt="" />
                          </div>
                        </div>
                        <div className="timeposted">
                          <img src={timeposted} alt="" />
                          30mins ago
                        </div>
                        <div className="ticket-chats">
                          <img src={chats} alt="" />
                          50+
                        </div>
                      </div>
                    </div>
                  </div> */
