import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import i1 from "./assets/images/1.png";
import { Widget } from '@maticnetwork/wallet-widget'
import ContactForm from "./ContactForm";




export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #64ee85;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
export const StyledButton2 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
export const StyledButton3 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledButton4 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
export const StyledButton5 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
export const StyledButton6 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
export const StyledButton7 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
export const StyledButton8 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledButton9 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
export const StyledButton10 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
export const StyledButton11 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledImg = styled.img`
  width: 600px;
  height: 150px;
  @media (min-width: 767px) {
    width: 400px;
    height: 125px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;




  function App() {

 
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("Enter payment information above");
  const [claimingNft, setClaimingNft] = useState(false);
  const Form = useSelector((state) => state.ContactForm);

  const claimNFTs = (_amount) => {
    if (_amount <= 0) {
      return;
    }
    setFeedback("Paying your bill...");
    setClaimingNft(true);
      blockchain.smartContract.methods
      .purchase(_amount)
      .send({
        gasLimit: "500000",
        to: "0xD97ed0559DA691581FcA6d794612dA4d7B9c5cDa",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((25 * _amount).toString(), "ether"),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "You've got your pair!"
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };


  
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <s.Screen style={{ backgroundColor: "#0a3042" }}>
      <s.Container flex={1} ai={"center"} style={{ padding: 50 }}>
      <StyledImg alt={"example"} src={i1} />
        
        <s.SpacerMedium />
        <ResponsiveWrapper flex={1} style={{ padding: 0 }}>
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <s.TextTitle
              style={{ textAlign: "center", fontSize: 28, fontWeight: "bold", color: "white" }}
            >
              Give the gift of passive.
            </s.TextTitle>
            <s.SpacerXSmall />
            <s.TextDescription style={{ textAlign: "center", fontSize: 15, color: "white" }}>
              Pay bills with MATIC!
            </s.TextDescription>
            <s.SpacerMedium />
            <s.TextDescription style={{ textAlign: "center", fontSize: 18, color: "white" }}>
              Welcome to the Quickbill.wallet Alpha Test Launch
            </s.TextDescription>
            <s.SpacerMedium />
            <s.TextDescription style={{ textAlign: "center", fontSize: 12, color: "white" }}>
            An NFT receipt will be minted with your corresponding payment information.
            </s.TextDescription>
            <s.TextDescription style={{ textAlign: "center", fontSize: 12, color: "white" }}>
           Please allow standard bank processing times for payment posting
            </s.TextDescription>
            <s.SpacerMedium />
            <s.TextDescription style={{ textAlign: "center", fontSize: 12, color: "white" }}>
            Coming Soon: 
            </s.TextDescription>
            <s.SpacerXSmall />
            <s.TextDescription style={{ textAlign: "center", fontSize: 10, color: "white" }}>
            Donation Board - Post bills your bills and pay for others with one click.
            </s.TextDescription>
            <s.TextDescription style={{ textAlign: "center", fontSize: 10, color: "white" }}>
            Liquidity Pools and Mining Rewards
            </s.TextDescription>
            <s.TextDescription style={{ textAlign: "center", fontSize: 10, color: "white" }}>
            Quickbill Token - Utility for payment discounts and governance.
            </s.TextDescription>
            <s.SpacerMedium />
            <s.TextDescription style={{ textAlign: "center", fontSize: 12, color: "white" }}>
            Wanna donate? Send ETH, MATIC, BNB, or BTC to quickbill.wallet
            </s.TextDescription>
            <s.TextDescription style={{ textAlign: "center", fontSize: 12, color: "white" }}>
            We will reward with governance share on token launch!
            </s.TextDescription>
            <s.SpacerMedium />
            <s.TextDescription style={{ textAlign: "center", color: "white" }}>
              Canadian accounts only.
            </s.TextDescription>
            <s.SpacerXSmall />
            <s.TextDescription style={{ textAlign: "center", fontSize: 12, color: "white" }}>
              See if your account qualifies <a href="https://www.comingsoon.net/" rel="noreferrer">
                here
              </a>
            </s.TextDescription>
            <s.SpacerXSmall />
            <s.TextDescription style={{ textAlign: "center", fontSize: 12, color: "white" }}>
              Chek out the <a href="https://www.comingsoon.net/" rel="noreferrer">
                Whitepaper & FAQ
              </a>
            </s.TextDescription>
          </s.Container>
          <s.SpacerMedium />
          <s.Container
            flex={1}
            jc={"center"}
            ai={"center"}
            style={{ backgroundColor: "#0a3042", padding: 0 }}
          >
            {Number(data.totalSupply) == 1000 ? (
              <>
                <s.TextTitle style={{ textAlign: "center" }}>
                  The sale has ended.
                </s.TextTitle>
                <s.SpacerSmall />
                <s.TextDescription style={{ textAlign: "center" }}>
                  This receipt collection has temporarily closed {" "}
                  <a
                    target={"_blank"}
                    href={"https://opensea.io/collection/SNKRFRKZXBLOOT"}
                  >
                    Opensea.io
                  </a>
                </s.TextDescription>
              </>
            ) : (
              <>
                <s.TextTitle style={{ textAlign: "center" }}>
                  Enter bill information
                </s.TextTitle>
                <s.SpacerXSmall />
                <ContactForm />
                <s.SpacerXSmall />
                <s.TextDescription style={{ textAlign: "center", fontSize: 10 }}>
                  (5% Service Fee will be added to each transaction)
                </s.TextDescription>
               
                <s.SpacerXSmall />
                
                <s.TextDescription style={{ textAlign: "center" }}>
                  {feedback}
                </s.TextDescription>
                <s.SpacerXSmall />
                {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription style={{ textAlign: "center" }}>
                      Connect to the Polygon Mainnet
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                      
                    >
                      CONNECT
                    </StyledButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription style={{ textAlign: "center" }}>
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <s.Container ai={"center"} jc={"center"} fd={"row"}>
                    <StyledButton
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs(1);
                        getData();
                        
                      }}
                    >
                      {claimingNft ? "BUSY" : "Pay Bill!"}
                    </StyledButton>
                  </s.Container>

                )}
                 <s.SpacerXSmall />
                 
                  
                
              </>
            )}
          </s.Container>
        </ResponsiveWrapper>
        <s.SpacerSmall />
        <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
          <s.TextDescription style={{ textAlign: "center", fontSize: 12}}>
            Please make sure you are connected to the right network (Polygon
            Mainnet).
          </s.TextDescription>
          <s.SpacerSmall />
          <s.TextDescription style={{ textAlign: "center", fontSize: 10}}>
            Please note: Payment transactions cannot be reversed.
          </s.TextDescription>
        </s.Container>
      </s.Container>
    </s.Screen>
  );
}

export default App;
