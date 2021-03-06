import React, { useEffect } from 'react';
import { match } from 'react-router-dom';
import { Location } from 'history';
import styled from 'styled-components';
import queryString from 'query-string';
import useStore from '../../hook/use-store/useStore';
import { observer } from 'mobx-react';
import InfiniteScrollTestView from './InfiniteScrollTestView';

interface Props {
  match: match<{ id: string }>;
  location: Location;
}

const PageWrapper = styled.div`
  font-family: 'Spoqa Han Sans';
`;

const InfiniteScrollTestPage: React.FC<Props> = ({ match, location }: Props) => {
  const { rootStore } = useStore();
  const query = location.search ? queryString.parse(location.search) : null;
  const accountbookId = Number(match.params.id);

  useEffect(() => {
    rootStore.accountStore.updateAccounts(accountbookId);
    rootStore.categoryStore.updateIncomeCategories(accountbookId);
    rootStore.categoryStore.updateExpenditureCategories(accountbookId);
    rootStore.modalStore.filterFormStore.init();
  }, []);
  return (
    <PageWrapper>
      <InfiniteScrollTestView accountbookId={accountbookId} query={query} />
    </PageWrapper>
  );
};

export default observer(InfiniteScrollTestPage);
