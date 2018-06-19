import React from 'react';

import { View, Text } from '../../particles';
import { Paragraph, Header, SubHeader } from '../../components';

import TitleBar from '../../components/titleBar/titleBar';

import './privacy.css';

const Privacy = () => (
  <View className="privacy">
    <TitleBar
      label="Your privacy"
    />
    <Header>
      Your data are your own.
    </Header>
    <Paragraph>
      <SubHeader>No data is sent anywhere</SubHeader>
      <Text>
        This app has no login or server storage. This means that your data is kept on your own device and not sent to anyone.
      </Text>
      <SubHeader>You&apos;re only asked for relevant data</SubHeader>
      <Text>
        The body information that you&apos;re prompted to enter is used to help in BAC accuracy.
        This includes height and age. No irrelevant information are being asked.
      </Text>
      <SubHeader>Data is stored only as neccessary</SubHeader>
      <Text>
        Whenever you open this app, any consumption data older than 24 hours is cleaned out and deleted.
        The 24 hour mark is to make sure that your BAC calculations and history visualization is correct.
      </Text>
      <SubHeader>Delete your own data.</SubHeader>
      <Text>
        By visiting the menu, you may select to delete all your data.
        The local storage related to this app will then be deleted, including both body data and any consumption data.
      </Text>
      <SubHeader>Statistics</SubHeader>
      <Text>
        This app uses Google Analytics in order to get an ide of the number of people using this app.
        No body data, consumption data, user actions or any other data that may be traced
        back to you as an individual is logged by Google Analytics.
        You may opt out of using Google Analytics by visiting the menu.
      </Text>
    </Paragraph>
  </View>
);

export default Privacy;
