import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';

import Card from './index';
import CardNotification from './notification';
import CardSpace from './space';
import CardPurchase from './purchase';
import CardSale from './sale';
import CardProfile from './profile';

export default {
  title: 'atoms/Cards',
  component: Card,
  decorators: [withKnobs],
};

const styles = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  paddingTop: '20px',
};

const status = ['saldo', 'liberacao', 'liberado', 'faturado'];
const space = ['', 'bank', 'store', 'marketing', 'university'];
const purchaseIcon = ['comission', 'discount'];
const purchageVariant = ['commision', 'discount'];
const sale = ['', 'success', 'info', 'infoDark', 'warning', 'danger'];

export const element = () => (
  <ContainerStorybook style={{ ...styles, padding: '10px' }}>
    <Card
      icon={select('Icon', status, 'saldo')}
      title={text('Title', 'title')}
      description={text('Description', 'description')}
    />
  </ContainerStorybook>
);

export const Notification = () => (
  <ContainerStorybook style={{ ...styles, maxWidth: '250px', paddingBottom: '20px' }}>
    <CardNotification />
  </ContainerStorybook>
);

export const Space = () => (
  <ContainerStorybook style={styles}>
    <CardSpace
      variant={select('Variant', space, 'marketing')}
      icon={select('Icon', space, 'bank')}
      title={text('Title', 'title')}
      isComing={select('Is Coming', [true, false], false)}
    />
  </ContainerStorybook>
);

export const Purchase = () => (
  <ContainerStorybook style={{ ...styles, paddingLeft: '20px', paddingRight: '20px' }}>
    <CardPurchase
      icon={select('Icon', purchaseIcon, 'commision')}
      title={text('Title', 'Saldo Liberado')}
      variant={select('Variant', purchageVariant, 'discount')}
      discount={text('Discount', '')}
      value={text('Value', 'R$ 15.200')}
    />
  </ContainerStorybook>
);

export const Sale = () => (
  <ContainerStorybook style={styles}>
    <CardSale
      text={text('Text', 'default text')}
      variant={select('Variant', sale, '')}
      isComing={select('Is Coming', [true, false], false)}
    />
  </ContainerStorybook>
);

export const Profile = () => (
  <ContainerStorybook>
    <CardProfile
      image={text(
        'Profile Image',
        'https://img.favpng.com/12/2/6/computer-icons-user-profile-avatar-png-favpng-atLhPkZ1MULZUSeGvauk2WtMp.jpg'
      )}
      name={text('Name', 'Test User')}
      work={text('Work', 'Work User')}
      email={text('Email', 'user@email.com')}
      telephony={text('Telephony', '(11) 0000-0000')}
      phone={text('Phone', '(11) 90000-0000')}
    />
  </ContainerStorybook>
);

element.story = {
  name: 'Default',
};
