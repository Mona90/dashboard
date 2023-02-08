
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from './components/layout/header/Header';
import Sidebar from './components/layout/sidebar/Sidebar';
import Navigations from './components/navigations/Navigations';
import ProtectedRoutes from './components/navigations/ProtectedRoutes';

const Main = styled.div`
  .content{
    margin-inline-start: ${props => props.userToken && props.isExtend ? '200px' : props.userToken && !props.isExtend ? '60px' : null}
  }
`
function App() {
  const { i18n } = useTranslation();
  const isExtend = useSelector(state => state.sidebar.isActive);
  const userToken = useSelector(state => state.auth.userToken);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'en' ? 'ltr' : 'rtl';
  }, [i18n.language]);

  useEffect(() => {
    if (!userToken || userToken === 'undefined') {
      return setIsLoggedIn(false);
    }
    setIsLoggedIn(true);
  }, [isLoggedIn]);

  return (
    <Main className='relative' isExtend={isExtend} userToken={userToken}>
      {userToken && <Sidebar />}
      <div className='content'>
        {userToken && <Header />}
        <div className='min-h-screen bg-gray-200'>
          <Navigations />
          {/* <ProtectedRoutes/> */}
        </div>
      </div>
    </Main>
  );
}

export default App;
