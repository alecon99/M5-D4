import React from 'react';

import SimplifieldNavBar from '../components/SimplifiedNavBar'
import MyFooter from "../components/MyFooter";
import CardBookDetail from '../components/CardBookDetail';

const DetailPage = () => {
  return (
    <>
      <SimplifieldNavBar />
      <CardBookDetail/>
      <MyFooter />
    </>
  )
}

export default DetailPage