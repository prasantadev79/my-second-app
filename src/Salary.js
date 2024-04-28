import React from "react";
import { UserComsumer } from "./UserContext";

class Salary extends React.Component {
  
    render() {
      return (
        <>
        <h2>3. Welcome to Salary Component...</h2>
        <UserComsumer>
          {
            (amount) => {
              return (
                <p>Your Bank Balance is negative <strong>{amount}</strong>.<br></br> Sorry For That</p>
              )
            }
          }
        </UserComsumer>
        </>
      )
    }
  }

export default Salary;