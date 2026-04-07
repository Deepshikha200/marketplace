import React from "react";

class TeamClass extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        events_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/deepshikha");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, events_url } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div className="team_card">
        <h2>Count = {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>

        <h2>Name : {name}</h2>
        <h3>Location : {events_url}</h3>
        <h4>Contant : ab@gmail.com</h4>
      </div>
    );
  }
}

export default TeamClass;
