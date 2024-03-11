import {
    Routes,
    Route,
    BrowserRouter as Router,
    Navigate,
} from 'react-router-dom';
import JoinPage from './pages/join';
import Chat from './pages/chat';
import { useSelector } from 'react-redux';
import { IInitialState } from './redux/interfaces/types';

function App() {
    const state = useSelector((state: IInitialState) => state);

    return (
        <Router>
            <Routes>
                <Route path="*" element={<Navigate to="/home" replace />} />
                <Route
                    path="home"
                    element={
                        !state.socketChat ? (
                            <JoinPage />
                        ) : (
                            <Navigate to="/chat" replace />
                        )
                    }
                />
                <Route
                    path="chat"
                    element={
                        state.socketChat ? <Chat /> : <Navigate to="/home" replace />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
