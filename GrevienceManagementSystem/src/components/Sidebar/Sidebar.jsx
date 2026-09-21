import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Menu</h3>

      <a href="/">Dashboard</a>
      <a href="/grievances">Grievances</a>
      <a href="/users">Services</a>
      <a href="/reports">Reports</a>
      <button className="logout-button">
        Logout
      </button>

    </aside>
  );
}

export default Sidebar;