import { ArrowDropDown, Notifications, Search } from "@mui/icons-material"
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png"
                alt=""
            />
            <span>Home Page</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        <div className="right">
            <Search className="icon"/>
            <span>Kid</span>
            <Notifications className="icon"/>
            <img src="https://media.licdn.com/dms/image/C5603AQFVNicmGXZWDg/profile-displayphoto-shrink_100_100/0/1626875912993?e=1679529600&v=beta&t=dTgmw0grxA1ob1XQeoHyMJsjiSsase_TnZWUClwE7lQ" alt="" />
            <div className="profile">
                <ArrowDropDown className="icon"/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
