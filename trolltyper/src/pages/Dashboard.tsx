import './Dashboard.css';

const Dashboard = () => {
  return (
    <><header>
      <div>
        <h1>Dashboard</h1>
      </div>
    </header>
      <div className="dashboardContent">
        <a href="/lobby/create" className="dashboardSelectButton">
        <div className="card">
            Create Document
        </div></a>
        <a href="/document-editor" className="dashboardSelectButton">
        <div className="card">
            Work on a Document
        </div>
        </a>
      </div>

    </>
  );
};

export default Dashboard;