import "./App.css";
import React, { useState } from "react";
function App() {
  const [number_of_member, setNumberOfMember] = useState(0);
  const [number_of_memberInGroup, setNumberOfMemberInGroup] = useState(0);
  const [member_name, setmembername] = useState("");
  const [memberList, setMemberList] = useState([]);
  const GetNumberOfMembers = (e) => {
    setNumberOfMember(e.target.value);
  };
  const GetNumberOfMemberInGroup = (e) => {
    setNumberOfMemberInGroup(e.target.value);
  };
  const GetMemberName = (e) => {
    setmembername(e.target.value);
  };
  const AddMember = (e) => {
    e.preventDefault();
    setMemberList([...memberList, member_name]);
    setmembername("");
  };
  const OlEl = memberList.map((val, ind) => {
    return <li key={ind}>{val}</li>;
  });
  let team = [];
  for (let i = 0; i < memberList.length; i++) {
    team.push(memberList[Math.floor(Math.random() * memberList.length)]);
  }
  let new_team = [];
  for (let y of team) {
    if (new_team.includes(y) === false) {
      new_team.push(y);
    }
  }
  for (let x of memberList) {
    if (new_team.includes(x) === false) {
      new_team.push(x);
    }
  }
  
  
  const [teams,setTeam] = useState([])
  const Sett = () => {
    const result_team = [];
    for(let i=0;i<parseInt(number_of_member/number_of_memberInGroup);i++){
      console.log()
      let dt = new_team.slice(i*parseInt(number_of_memberInGroup),i*parseInt(number_of_memberInGroup)+parseInt(number_of_memberInGroup))
      result_team.push(dt)
    }
    console.log(result_team);
    setTeam(result_team)

  };
  const TeamSep = (data) => {
    const Ol = data.map((val,ind)=> {
      return <li key={ind}>{val}</li>
    })
    return Ol
  }
  // console.log(teams)
  const X = teams.map((val,ind)=>{
    return <div className="item" key={ind}>
      <stron>Grup{ind+1}</stron>
      {TeamSep(val)}
    </div>
  })
  console.log(X)
  return (
    <div className="App">
      <h1>Aranızda münaqişə olmadan komandalara bölünün!!!</h1>
      <button onClick={Sett}>Gruplara böl</button>
      <hr />
      <div className="form">
        <div className="firstForm">
          <label>Ümumi iştirakçı sayi</label>
          <input
            onChange={GetNumberOfMembers}
            type="number"
            value={number_of_member}
            placeholder="ümumi iştirakçı sayını daxil edin"
          />
          <label>Hər qrupda olan iştirakçı sayı</label>
          <input
            onChange={GetNumberOfMemberInGroup}
            type="number"
            value={number_of_memberInGroup}
            placeholder="hər komandada olacaq iştirakçı sayını daxil edin"
          />
        </div>
        <div className="secondForm">
          <div className="shownum">
            Daxil edilib:<strong>{memberList.length}</strong>
            <br />
            Daxil edilməlidir:
            <strong>{parseInt(number_of_member) - memberList.length}</strong>
          </div>
          <form onSubmit={AddMember}>
            <input
              onChange={GetMemberName}
              type="text"
              placeholder="iştirakçı adını daxil edin"
              value={member_name}
            />
          </form>
          <ol>{OlEl}</ol>
        </div>
      </div>
      <div className="result">
        <h2>Komanda bölgüsü</h2>
        <div className="res">
        {X}

        </div>
        
      </div>
    </div>
  );
}

export default App;
