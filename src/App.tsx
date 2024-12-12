import { useEffect, useState } from 'react';
import {
  Flex, Layout, Spin, Typography,
} from 'antd';
import TicketCard from './components/TicketCard/TicketCard';
import { type Ticket } from './types';
import TicketFilter from './components/TicketFilter/TicketFilter';
import './App.css';

const { Header, Content } = Layout;

function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [currency, setCurrency] = useState('RUB');
  const [transfer, setTransfer] = useState(['all']);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response = await fetch('http://localhost:3000/tickets?_sort=price_rub&_order=desc');
      const result = await response.json();
      let filteredTickets: Ticket[];

      if (transfer.length === 0) {
        filteredTickets = result;
      } else {
        filteredTickets = result.filter((ticket: Ticket) => transfer.includes('all') || transfer.includes(String(ticket.transfer)));
      }

      setTickets(filteredTickets);
    }

    fetchData();
  }, [transfer]);

  return (
    <Layout>
      <Header className="header">
        <Typography.Text className="header-title">САМЫЕ ДЕШЕВЫЕ АВИАБИЛЕТЫ!!!</Typography.Text>
      </Header>
      <Content className="content">
        <Flex className="filter-wrapper">
          <TicketFilter setCurrency={setCurrency} setTransfer={setTransfer} />
        </Flex>
        {tickets.length > 0 ? (
          <Flex className="ticket-list" gap="large" justify="start" wrap>
            {tickets.map((ticket) => (
              <Flex className="ticket-item">
                <TicketCard key={ticket.id} currency={currency} ticket={ticket} />
              </Flex>
            ))}
          </Flex>
        ) : (
          <Flex align="center" className="ticket-list" justify="center">
            <Spin size="large" />
          </Flex>
        )}
      </Content>
    </Layout>
  );
}

export default App;
