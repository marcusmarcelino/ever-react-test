import styled from 'styled-components';

import Link from '@components/atoms/Link';

export const NotificationContainer = styled.div`
  height: 100vh;
  max-width: 320px;
  width: 100%;

  border-radius: 5px;
`;

export const NotificationHeader = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 6px 20px;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  background: #f3f1f1;

  p {
    text-transform: uppercase;
  }
`;

export const NotificationContent = styled.div`
  width: 100%;

  .cardNotification:not(:first-child) {
    border-top: 2px solid #dcdcdc;
  }
`;

export const NotificationFooter = styled.footer`
  display: flex;
  justify-content: center;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  background: #f3f1f1;
`;

export const NotificationLink = styled(Link)`
  padding: 0;
`;
