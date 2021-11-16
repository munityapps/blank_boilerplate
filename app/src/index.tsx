// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';

// Component
import MunityApp from 'munityapps/app';
import Navbar from 'munityapps/workspaces/components/Navbar';
import NavbarLeft from 'munityapps/workspaces/components/NavbarComponents/NavbarLeft';
import NavbarCenter from 'munityapps/workspaces/components/NavbarComponents/NavbarCenter';
import NavbarRight from 'munityapps/workspaces/components/NavbarComponents/NavbarRight';
import LoadingMunity from 'munityapps/layouts/components/LoadingMunity';

// Configuration
import reportWebVitals from './reportWebVitals';

// Boilerplate
import { Provider as ReduxProvider } from 'react-redux';
import MunityProviders from 'munityapps/providers';
import OvermindSidebar from 'munityapps/overmind/components/Sidebar';

// Style
import 'munityapps/styles.scss';

import store from './store';

ReactDOM.render(
    <ReduxProvider store={store}>
        <MunityProviders>
            <React.StrictMode>
                <MunityApp
                    workspaceNavbar={<Navbar
                        leftPart={NavbarLeft}
                        centerPart={NavbarCenter}
                        rightPart={NavbarRight}
                    />}
                    overmindSidebar={<OvermindSidebar />}
                    newOvermindRoutes={[
                        <Route key={'foobar'} path="/foobar" component={() => <>OVERMIND FOOBAR</>} />
                    ]}
                    newWorkspaceRoutes={[
                        <Route key={'foobar'} path="/foobar" component={() => <>WORKSPACE FOOBAR</>} />
                    ]}
                    loadingWorkspace={LoadingMunity}
                >
                    <Route key={'foobar'} path="/foobar" component={() => <>FOOBAR</>} />
                </MunityApp>
            </React.StrictMode>
        </MunityProviders>
    </ReduxProvider >,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
