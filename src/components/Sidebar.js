import { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Context } from "../Context/GlobalState";

export default function Sidebar() {
  const { user } = useContext(Context);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar alt={user?.fullName} src={user?.photoURL} />
        <div className="user__info">
          <h4 className="currentUser__username">{user?.fullName}</h4>
          <p className="currentUser__fullName">{user?.username}</p>
        </div>
      </div>
    </div>
  );
}