// src/App.js

import RecordList from '@/app/ui/RecordList';
import '@/app/App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Record Management System</h1>
            </header>
            <main>
                <a href="/recordlist2.js"> View </a>
                <RecordList />
            </main>
        </div>
    );
};

export default App;
