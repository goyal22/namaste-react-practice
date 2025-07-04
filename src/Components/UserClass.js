import React from "react";

// UserClass is a class-based React component that fetches and displays GitHub user data in a styled card.
class UserClass extends React.Component {
  /**
   * The constructor initializes the component's state.
   * State includes count (for the increment button),
   * and user details (name, location, avatar, bio, login, followers, following, public_repos).
   */
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // Counter for demonstration (increments on button click)
      name: "Loading...", // User's name (fetched from API)
      location: "India", // Default location
      avatar: "https://avatars.githubusercontent.com/u/12345678?v=4", // Default avatar
      bio: "", // User's bio (fetched from API)
      login: "", // GitHub username (fetched from API)
      followers: 0, // Number of followers (fetched from API)
      following: 0, // Number of following (fetched from API)
      public_repos: 0 // Number of public repos (fetched from API)
    };
  }

  /**
   * componentDidMount is a React lifecycle method that runs after the component mounts.
   * Here, we fetch user data from the GitHub API and update the state with the response.
   * This triggers a re-render to display the fetched data.
   */
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/goyal22"); // Fetch user data from GitHub
    const user = await data.json(); // Parse the JSON response
    this.setState({
      name: user.name,
      location: user.location,
      avatar: user.avatar_url,
      bio: user.bio,
      login: user.login,
      followers: user.followers,
      following: user.following,
      public_repos: user.public_repos
    });
     console.log("Rendering didMount component");
  }
   componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log("UserClass comp didUpdate component updated");
   }


   componentWillUnmount() {
    console.log("UserClass component is being unmounted");
   }

  /**
   * increment is a handler to increase the count in state when the button is clicked.
   * Demonstrates how to update state in a class component.
   */
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  /**
   * The render method returns JSX to display the user card.
   * Inline styles are used for a modern, beautiful look.
   * All user details are shown, and the increment button updates the count.
   */
  render() {
    console.log("Rendering UserClass component");
    // Destructure state for easy access
    const { name, count, location, avatar, bio, login, followers, following, public_repos } = this.state;
    // Card container style
    const divStyle = {
      background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
      color: "#22223b",
      padding: "24px 20px 20px 20px",
      borderRadius: "16px",
      marginRight: "10px",
      marginBottom: "20px",
      maxWidth: "370px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
      border: "1px solid #b5c7d3",
      fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif"
    };
    // Avatar image style
    const imgStyle = {
      width: "110px",
      height: "110px",
      borderRadius: "50%",
      marginBottom: "14px",
      border: "3px solid #4ea8de",
      boxShadow: "0 2px 8px rgba(78,168,222,0.15)"
    };
    // Title (name) style
    const titleStyle = {
      fontSize: "1.4rem",
      fontWeight: 700,
      margin: "0 0 6px 0",
      color: "#22223b"
    };
    // Bio/description style
    const descStyle = {
      fontSize: "1rem",
      color: "#4a4e69",
      margin: "0 0 10px 0"
    };
    // Info rows style
    const infoStyle = {
      fontSize: "0.98rem",
      margin: "2px 0",
      color: "#22223b"
    };
    // Count display style
    const countStyle = {
      fontSize: "1.1rem",
      color: "#22223b",
      margin: "12px 0 6px 0"
    };
    // Button style
    const buttonStyle = {
      background: "#4ea8de",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      padding: "8px 18px",
      fontSize: "1rem",
      fontWeight: 600,
      cursor: "pointer",
      boxShadow: "0 2px 6px rgba(78,168,222,0.10)",
      transition: "background 0.2s"
    };
    return (
      <div className="card" style={divStyle}>
        {/* Card content is centered and stacked vertically */}
        <div className="card-content" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          {/* User avatar */}
          <img src={avatar} alt={name} style={imgStyle} />
          {/* User name and login */}
          <h2 className="card-title" style={titleStyle}>{name} <span style={{fontWeight:400, color:'#4ea8de', fontSize:'1rem'}}>({login})</span></h2>
          {/* User bio */}
          <p className="card-description" style={descStyle}>{bio}</p>
          {/* User location */}
          <p style={infoStyle}><strong>Location:</strong> {location}</p>
          {/* Followers and following */}
          <p style={infoStyle}><strong>Followers:</strong> {followers} | <strong>Following:</strong> {following}</p>
          {/* Public repositories */}
          <p style={infoStyle}><strong>Public Repos:</strong> {public_repos}</p>
          {/* Count and increment button */}
          <h2 style={countStyle}>Count: {count}</h2>
          <button style={buttonStyle} onClick={this.increment}>Increment</button>
        </div>
      </div>
    );
  }
}

export default UserClass;
